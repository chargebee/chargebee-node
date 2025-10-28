import { HttpClient, HttpClientInterface } from './ClientInterface.js';

import { RequestHeaders } from '../types.js';

export class FetchHttpClient extends HttpClient implements HttpClientInterface {
  async makeApiRequest(request: Request, timeout: number): Promise<Response> {
    try {
      const response: Response = globalThis.AbortController
        ? await this.fetchWithAbortTimeout(request, timeout)
        : await this.fetchWithTimeout(request, timeout);
      return response;
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
    request: Request,
    timeout: number,
  ): Promise<Response> {
    let pendingTimeoutId: NodeJS.Timeout | null;
    const timeoutPromise = new Promise<never>((_, reject) => {
      pendingTimeoutId = setTimeout(() => {
        pendingTimeoutId = null;
        reject(HttpClient.timeOutError());
      }, timeout);
    });
    const fetchPromise = fetch(request);
    return Promise.race([fetchPromise, timeoutPromise]).finally(() => {
      if (pendingTimeoutId) {
        clearTimeout(pendingTimeoutId);
      }
    });
  }
  private async fetchWithAbortTimeout(
    request: Request,
    timeout: number,
  ): Promise<Response> {
    const abort = new AbortController();
    let timeoutId: NodeJS.Timeout | null = setTimeout(() => {
      timeoutId = null;
      abort.abort(HttpClient.timeOutError());
    }, timeout);
    try {
      return await fetch(new Request(request, { signal: abort.signal }));
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
