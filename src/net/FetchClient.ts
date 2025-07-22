import {
  HttpClient,
  HttpClientInterface,
  RequestInterface,
  HttpClientResponseInterface,
  HttpClientResponse,
} from './ClientInterface.js';

import { RequestHeaders, ResponseHeaders } from '../types.js';

export class FetchHttpClient extends HttpClient implements HttpClientInterface {
  async makeApiRequest(
    props: RequestInterface,
  ): Promise<HttpClientResponseInterface> {
    const headers: Headers = this._createHeaders(props.headers);
    let url: string = `${props.protocol}://${props.host}:${props.port}${props.path}`;
    let fetchOptions: RequestInit = {
      method: props.method,
      headers: headers,
      body: props.data ? props.data : undefined,
    };
    try {
      const response: Response = globalThis.AbortController
        ? await this.fetchWithAbortTimeout(url, fetchOptions, props.timeout)
        : await this.fetchWithTimeout(url, fetchOptions, props.timeout);
      return new FetchHttpClientResponse(response);
    } catch (err) {
      return Promise.reject(err);
    }
  }
  _createHeaders(httpHeaders: RequestHeaders): Headers {
    const headers = new Headers();
    Object.entries(httpHeaders).forEach(([key, value]) => {
      headers.append(key, String(value));
    });
    return headers;
  }
  private async fetchWithTimeout(
    url: string,
    fetchOptions: RequestInit,
    timeout: number,
  ): Promise<Response> {
    let pendingTimeoutId: NodeJS.Timeout | null;
    const timeoutPromise = new Promise<never>((_, reject) => {
      pendingTimeoutId = setTimeout(() => {
        pendingTimeoutId = null;
        reject(HttpClient.timeOutError());
      }, timeout);
    });
    const fetchPromise = fetch(url, fetchOptions);
    return Promise.race([fetchPromise, timeoutPromise]).finally(() => {
      if (pendingTimeoutId) {
        clearTimeout(pendingTimeoutId);
      }
    });
  }
  private async fetchWithAbortTimeout(
    url: string,
    fetchOptions: RequestInit,
    timeout: number,
  ): Promise<Response> {
    const abort = new AbortController();
    let timeoutId: NodeJS.Timeout | null = setTimeout(() => {
      timeoutId = null;
      abort.abort(HttpClient.timeOutError());
    }, timeout);
    try {
      return await fetch(url, {
        ...fetchOptions,
        signal: abort.signal,
      });
    } catch (err) {
      if ((err as DOMException).name === 'AbortError') {
        return Promise.reject(HttpClient.timeOutError());
      } else {
        return Promise.reject(err);
      }
    } finally {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    }
  }
}

export class FetchHttpClientResponse
  extends HttpClientResponse
  implements HttpClientResponseInterface
{
  _res: Response;
  constructor(response: Response) {
    super(
      response.status,
      FetchHttpClientResponse._transformHeadersToObject(response.headers),
    );
    this._res = response;
  }
  getRawResponse(): Response {
    return this._res;
  }
  toJson(): Promise<any> {
    return this._res.json();
  }
  static _transformHeadersToObject(headers: Headers): ResponseHeaders {
    const headersObj: ResponseHeaders = {};
    for (const entry of headers) {
      if (!Array.isArray(entry) || entry.length != 2) {
        throw new Error('Headers should be an iterable object.');
      }

      headersObj[entry[0]] = entry[1];
    }
    return headersObj;
  }
}
