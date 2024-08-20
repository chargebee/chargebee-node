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
import { Buffer } from 'node:buffer';
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
  public request(): Promise<void | Callback> {
    let env: any = {};
    extend(true, env, this.envArg);
    const urlIdParam: string = this.apiCall.hasIdInUrl ? this.args[0] : null;
    let params: JSONValue = this.apiCall.hasIdInUrl
      ? this.args[1]
      : this.args[0];
    let headers = this.apiCall.hasIdInUrl ? this.args[2] : this.args[1];
    Object.assign(this.httpHeaders, headers);
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
        'Lang-Version': typeof process === 'undefined' ? '' : process.version,
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
    return callbackifyPromise(promise);
  }
  public getRequest = () => {
    return this.request();
  };
}
