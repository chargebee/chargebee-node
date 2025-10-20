import {
  extend,
  callbackifyPromise,
  getApiURL,
  encodeListParams,
  encodeParams,
  serialize,
  getHost,
  log,
  generateUUIDv4 as uuidv4,
} from './util.js';
import {
  EnvType,
  ResourceType,
  JSONValue,
  RequestHeaders,
  RetryConfig,
} from './types.js';
import { HttpClientResponseInterface } from './net/ClientInterface.js';
import { handleResponse } from './coreCommon.js';
import { Buffer } from 'node:buffer';

export class RequestWrapper {
  private readonly args: IArguments;
  private readonly httpHeaders: RequestHeaders;
  private readonly apiCall: ResourceType;
  private readonly envArg: EnvType;

  constructor(args: IArguments, apiCall: ResourceType, envArg: EnvType) {
    this.args = args;
    this.apiCall = apiCall;
    this.envArg = envArg;
    this.httpHeaders = {};
    if (this.apiCall.hasIdInUrl) {
      RequestWrapper._validateIdParam(this.args[0]);
    }
  }

  private static _validateIdParam(idParam: string): string {
    if (!idParam || typeof idParam !== 'string' || idParam.trim().length < 1) {
      throw new Error('the required id parameter missing or wrong');
    }
    return idParam;
  }

  private static parseRetryAfter(retryAfter?: string): number | null {
    if (!retryAfter) return null;
    const seconds = parseInt(retryAfter, 10);
    if (!isNaN(seconds)) {
      return seconds * 1000;
    }
    return null;
  }

  public async request(): Promise<any> {
    let _env: any = {};
    extend(true, _env, this.envArg);

    const env = _env as EnvType;

    const retryConfig: RetryConfig = {
      enabled: false,
      maxRetries: 3,
      delayMs: 200,
      retryOn: [500, 502, 503, 504],
      ...env.retryConfig,
    };

    const urlIdParam: string = this.apiCall.hasIdInUrl ? this.args[0] : null;
    const params: JSONValue = this.apiCall.hasIdInUrl
      ? this.args[1]
      : this.args[0];
    let headers = this.apiCall.hasIdInUrl ? this.args[2] : this.args[1];

    Object.assign(this.httpHeaders, headers);

    if (
      this.apiCall.httpMethod === 'POST' &&
      !this.httpHeaders['chargebee-idempotency-key'] &&
      this.apiCall.options &&
      this.apiCall.options.isIdempotent &&
      retryConfig.enabled
    ) {
      this.httpHeaders['chargebee-idempotency-key'] = uuidv4();
    }

    const makeRequest = async (attempt: number = 0): Promise<any> => {
      let path: string = getApiURL(
        env,
        this.apiCall.urlPrefix,
        this.apiCall.urlSuffix,
        urlIdParam,
      );

      let requestParams: JSONValue = params;

      if (typeof requestParams === 'undefined' || requestParams === null) {
        requestParams = {};
      }

      if (this.apiCall.httpMethod === 'GET') {
        const queryParam = this.apiCall.isListReq
          ? encodeListParams(serialize(requestParams))
          : encodeParams(serialize(requestParams));
        path += '?' + queryParam;
        requestParams = {};
      }

      const jsonKeys = this.apiCall.jsonKeys;
      const data: string = this.apiCall.isJsonRequest
        ? JSON.stringify(requestParams)
        : encodeParams(
            requestParams,
            undefined,
            undefined,
            undefined,
            jsonKeys,
          );

      const requestHeaders: RequestHeaders = { ...this.httpHeaders };
      if (data.length) {
        extend(true, requestHeaders, {
          'Content-Length': data.length,
        });
      }

      const contentType = this.apiCall.isJsonRequest
        ? 'application/json;charset=UTF-8'
        : 'application/x-www-form-urlencoded; charset=utf-8';

      const userAgent = `Chargebee-NodeJs-Client ${env.clientVersion}${env.userAgentSuffix ? ';' + env.userAgentSuffix : ''}`;

      extend(true, requestHeaders, {
        Authorization:
          'Basic ' + Buffer.from(env.apiKey + ':').toString('base64'),
        Accept: 'application/json',
        'Content-Type': contentType,
        'User-Agent': userAgent,
        'Lang-Version': typeof process === 'undefined' ? '' : process.version,
      });

      if (attempt > 0) {
        requestHeaders['X-CB-Retry-Attempt'] = attempt.toString();
      }

      const resp: HttpClientResponseInterface =
        await this.envArg.httpClient.makeApiRequest({
          host: getHost(env, this.apiCall.subDomain),
          port: env.port,
          path,
          method: this.apiCall.httpMethod,
          protocol: env.protocol,
          headers: requestHeaders,
          data,
          timeout: env.timeout,
        });

      return new Promise((resolve, reject) => {
        handleResponse((err, response) => {
          if (err) return reject(err);
          return resolve(response);
        }, resp);
      });
    };

    const delay = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    const withRetry = async (
      retryCount: number,
      startTime: number,
    ): Promise<any> => {
      try {
        return await makeRequest(retryCount);
      } catch (err: any) {
        const statusCode =
          err.statusCode ??
          err.response?.statusCode ??
          err.http_code ??
          err.http_status_code;

        const isRateLimitError = statusCode === 429 && retryConfig.enabled;

        if (isRateLimitError) {
          const headers = err.response?.headers || err.headers || {};
          const retryAfterHeader = headers['retry-after']?.toLowerCase();
          const parsedDelay = RequestWrapper.parseRetryAfter(retryAfterHeader);
          if (!parsedDelay) {
            log(env, {
              level: 'ERROR',
              message: `Rate limit error occurred, but no retry-after header found. Retrying in ${retryConfig.delayMs}ms.`,
            });
            throw err;
          }
          log(env, {
            level: 'INFO',
            message: `Rate limit error occurred. Retrying in ${parsedDelay}ms.`,
          });
          await delay(parsedDelay);
        } else {
          const canRetry =
            retryConfig.enabled &&
            retryConfig.retryOn!.includes(statusCode) &&
            retryCount < retryConfig.maxRetries!;
          if (!canRetry) {
            log(env, {
              level: 'ERROR',
              message: `Request failed after ${retryCount} retries: ${err.message}`,
            });
            throw err;
          }
          let retryDelayMs =
            retryConfig.delayMs! * Math.pow(2, retryCount) +
            Math.random() * 100;
          log(env, {
            level: 'INFO',
            message: `Retrying request [${retryCount + 1}/${retryConfig.maxRetries}] in ${retryDelayMs}ms due to status code ${statusCode}.`,
          });
          await delay(retryDelayMs);
        }

        return await withRetry(retryCount + 1, startTime);
      }
    };

    const promise = withRetry(0, Date.now());
    return callbackifyPromise(promise);
  }

  public getRequest = () => {
    return this.request();
  };
}
