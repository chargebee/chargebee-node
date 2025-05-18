import {
  extend,
  callbackifyPromise,
  getApiURL,
  encodeListParams,
  encodeParams,
  serialize,
  getHost,
} from './util';
import {
  Callback,
  EnvType,
  ResourceType,
  JSONValue,
  RequestHeaders,
  RetryConfig,
} from './types.js';
import { HttpClientResponseInterface } from './net/ClientInterface.js';
import { handleResponse } from './coreCommon';
import { Buffer } from 'node:buffer';
import { v4 as uuidv4 } from 'uuid';

export class RequestWrapper {
  private readonly args: IArguments;
  private readonly httpHeaders: RequestHeaders;
  private apiCall: ResourceType;
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

  public async request(): Promise<void | Callback> {
    let env: any = {};
    extend(true, env, this.envArg);

    const retryConfig: RetryConfig = {
      enabled: true,
      max_retries: 3,
      initial_delay_ms: 200,
      max_delay_ms: 5000,
      retry_on: [500, 502, 503, 504, 429],
      ...env.retryConfig,
    };

    const urlIdParam: string = this.apiCall.hasIdInUrl ? this.args[0] : null;
    let params: JSONValue = this.apiCall.hasIdInUrl ? this.args[1] : this.args[0];
    let headers = this.apiCall.hasIdInUrl ? this.args[2] : this.args[1];

    Object.assign(this.httpHeaders, headers);

    // Ensure `chargebee-idempotency-key` is present in headers
    if (!this.httpHeaders['chargebee-idempotency-key'] && this.apiCall.options && this.apiCall.options.get('isIdempotent')) {
      this.httpHeaders['chargebee-idempotency-key'] = uuidv4(); // Generate a unique UUID
    }

    const makeRequest = async (attempt: number = 0): Promise<any> => {
      let path: string = getApiURL(
        env,
        this.apiCall.urlPrefix,
        this.apiCall.urlSuffix,
        urlIdParam,
      );

      if (typeof params === 'undefined' || params === null) {
        params = {};
      }

      if (this.apiCall.httpMethod === 'GET') {
        const queryParam = this.apiCall.isListReq
          ? encodeListParams(serialize(params))
          : encodeParams(serialize(params));
        path += '?' + queryParam;
        params = {};
      }

      const jsonKeys = this.apiCall.jsonKeys;
      const data: string = this.apiCall.isJsonRequest
        ? JSON.stringify(params)
        : encodeParams(params, undefined, undefined, undefined, jsonKeys);

      const requestHeaders: RequestHeaders = { ...this.httpHeaders };
      if (data.length) {
        extend(true, requestHeaders, {
          'Content-Length': data.length,
        });
      }

      const contentType = this.apiCall.isJsonRequest
        ? 'application/json;charset=UTF-8'
        : 'application/x-www-form-urlencoded; charset=utf-8';

      extend(true, requestHeaders, {
        Authorization: 'Basic ' + Buffer.from(env.apiKey + ':').toString('base64'),
        Accept: 'application/json',
        'Content-Type': contentType,
        'User-Agent': 'Chargebee-NodeJs-Client ' + env.clientVersion,
        'Lang-Version': typeof process === 'undefined' ? '' : process.version,
      });

      // Add X-CB-Retry-Attempt header for retries (attempt > 0)
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
          data: data,
          timeout: env.timeout,
        });

      return new Promise((resolve, reject) => {
        handleResponse((err, response) => {
          if (err) return reject(err);
          return resolve(response);
        }, resp);
      });
    };

    const withRetry = async (): Promise<any> => {
      let attempt = 0;

      while (true) {
        try {
          return await makeRequest(attempt);
        } catch (err: any) {
          const statusCode =
            err?.statusCode ||
            err?.response?.statusCode ||
            (typeof err?.getStatusCode === 'function' ? err.getStatusCode() : undefined);

          const shouldRetry =
            retryConfig.enabled &&
            attempt < retryConfig.max_retries &&
            statusCode &&
            retryConfig.retry_on.includes(statusCode);

          if (!shouldRetry) {
            throw err;
          }

          const baseDelay = retryConfig.initial_delay_ms * Math.pow(2, attempt);
          const jitterDelay = Math.floor(
            Math.random() * Math.min(baseDelay * 2, retryConfig.max_delay_ms),
          );

          attempt++;
          await new Promise((resolve) => setTimeout(resolve, jitterDelay));
        }
      }
    };

    const promise = withRetry();
    return callbackifyPromise(promise);
  }

  public getRequest = () => {
    return this.request();
  };
}