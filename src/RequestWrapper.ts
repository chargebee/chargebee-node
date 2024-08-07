import {
  extend,
  isFunction,
  callbackifyPromise,
  getApiURL,
  encodeListParams,
  encodeParams,
  serialize,
  getHost,
} from './util.js';
import {
  Callback,
  CustomParam,
  EnvType,
  ResourceType,
  JSONValue,
  RequestHeaders,
} from './types.js';
import { HttpClientResponseInterface } from './net/ClientInterface.js';
import { handleResponse } from './coreCommon.js';
const IDEMPOTENCY_HEADER: string = 'chargebee-idempotency-key';

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

  public headers(headers: RequestHeaders): this {
    Object.assign(this.httpHeaders, headers);
    return this;
  }

  public setIdempotencyKey(idempotencyKey: string): this {
    this.headers({ [IDEMPOTENCY_HEADER]: idempotencyKey });
    return this;
  }

  public param(custom_param: CustomParam): this {
    if (this.apiCall.hasIdInUrl) {
      this.args[1] = { ...this.args[1], ...custom_param };
    } else {
      this.args[0] = { ...this.args[0], ...custom_param };
    }
    return this;
  }

  public request(
    callBack?: (error: unknown, result: any | null) => void,
    envOptions?: Record<string, string>,
  ): Promise<void | Callback> {
    let env: any = {};
    let jsonConstructor = {}.constructor;
    extend(true, env, this.envArg);
    if (typeof envOptions !== 'undefined') {
      extend(true, env, envOptions);
    } else if (
      typeof callBack !== 'undefined' &&
      callBack.constructor === jsonConstructor &&
      !isFunction(callBack)
    ) {
      extend(true, env, callBack);
      callBack = undefined;
    }
    const urlIdParam: string = this.apiCall.hasIdInUrl ? this.args[0] : null;
    let params: JSONValue = this.apiCall.hasIdInUrl
      ? this.args[1]
      : this.args[0];
    if (typeof callBack !== 'undefined' && !isFunction(callBack)) {
      throw new Error('The Callback Parameter passed is incorrect.');
    }
    const promise: Promise<any> = new Promise(async (resolve, reject) => {
      function callBackWrapper(err: unknown, response: any) {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      }
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
        params = serialize(params);
        let queryParam = this.apiCall.isListReq
          ? encodeListParams(params)
          : encodeParams(params);
        path += '?' + queryParam;
        params = {};
      }
      let data: string = encodeParams(params);
      extend(true, this.httpHeaders, {
        Authorization:
          'Basic ' + Buffer.from(env.apiKey + ':').toString('base64'),
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        'Content-Length': data.length,
        'User-Agent': 'Chargebee-NodeJs-Client ' + env.clientVersion,
        'Lang-Version': process.version,
      });
      const resp: HttpClientResponseInterface =
        await this.envArg.httpClient.makeApiRequest({
          host: getHost(env),
          port: env.port,
          path,
          method: this.apiCall.httpMethod,
          protocol: env.protocol,
          headers: this.httpHeaders,
          data: data,
          timeout: env.timeout,
        });
      handleResponse(callBackWrapper, resp);
    });
    return callbackifyPromise(promise, callBack);
  }
}
