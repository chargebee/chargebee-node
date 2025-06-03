import { RequestHeaders, ResponseHeaders } from '../types.js';
import { ChargebeeError } from '../chargebeeError';
export interface RequestInterface {
  host: string;
  port: number;
  path: string;
  method: string;
  headers: RequestHeaders;
  data: string;
  protocol: string;
  timeout: number;
}
export interface HttpClientResponseInterface {
  getStatusCode: () => number;
  getHeaders: () => ResponseHeaders;
  getRawResponse: () => unknown;
  toJson: () => Promise<any>;
}
export interface HttpClientInterface {
  makeApiRequest: (
    props: RequestInterface,
  ) => Promise<HttpClientResponseInterface>;
}
export class HttpClient implements HttpClientInterface {
  async makeApiRequest(
    props: RequestInterface,
  ): Promise<HttpClientResponseInterface> {
    throw new Error('makeApiRequest is not implemented');
  }
  static timeOutError(): ChargebeeError {
    const error: ChargebeeError = new ChargebeeError(
      {
        message: 'io_error',
        type: 'timeout',
        api_error_code: 'request aborted due to timeout.',
        http_status_code: 504,

        http_code: 504,
        error_code: 'request aborted due to timeout.',
      },
      null,
    );
    return error;
  }
}
export class HttpClientResponse implements HttpClientResponseInterface {
  _statusCode: number;
  _headers: ResponseHeaders;
  constructor(statusCode: number, headers: ResponseHeaders) {
    this._statusCode = statusCode;
    this._headers = headers;
  }
  getStatusCode(): number {
    return this._statusCode;
  }
  getHeaders(): ResponseHeaders {
    return this._headers;
  }
  getRawResponse(): unknown {
    throw new Error('getRawResponse not implemented.');
  }
  toJson(): any {
    throw new Error('toJSON not implemented.');
  }
}
