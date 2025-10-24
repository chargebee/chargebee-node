import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';
import { HttpClientInterface } from 'chargebee';

export class AxiosHttpClient implements HttpClientInterface {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create();
  }
  async makeApiRequest(request: Request, timeout?: number): Promise<Response> {
    try {
      const headersObj: Record<string, string> = {};
      request.headers.forEach((value, key) => {
        headersObj[key] = value;
      });
      const text = request.body ? await request.text() : null;
      const url = request.url;
      const method = request.method;
      const config: AxiosRequestConfig = {
        url,
        method: method as AxiosRequestConfig['method'],
        headers: headersObj,
        data: AxiosHttpClient.methodSupportsBody(method) ? text : undefined,
        timeout,
      };
      const axiosResponse: AxiosResponse =
        await this.axiosInstance.request(config);
      const data =
        typeof axiosResponse.data === 'string'
          ? axiosResponse.data
          : JSON.stringify(axiosResponse.data);
      const fetchResponse = new Response(data, {
        status: axiosResponse.status,
        statusText: axiosResponse.statusText,
        headers: AxiosHttpClient.axiosHeadersToFetch(axiosResponse.headers),
      });
      return fetchResponse;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          const data =
            typeof error.response.data === 'string'
              ? error.response.data
              : JSON.stringify(error.response.data);
          const fetchResponse = new Response(data, {
            status: error.response.status,
            statusText: error.response.statusText,
            headers: AxiosHttpClient.axiosHeadersToFetch(
              error.response.headers,
            ),
          });
          return fetchResponse;
        }
        throw new Error(
          `Request failed: ${error.message}${
            error.code ? ` (${error.code})` : ''
          }`,
        );
      }
      throw error;
    }
  }

  static fetchHeadersToAxios(headers: Headers): Record<string, string> {
    const out: Record<string, string> = {};
    headers.forEach((value, key) => {
      out[key] = value;
    });
    return out;
  }

  static axiosHeadersToFetch(ax: any): Headers {
    const h = new Headers();

    if (typeof (ax as any).forEach === 'function') {
      (ax as any).forEach((value: unknown, key: string) => {
        if (key.toLowerCase() === 'set-cookie') return;
        if (Array.isArray(value)) {
          value.forEach((v) => h.append(key, String(v)));
        } else if (value != null) {
          h.set(key, String(value));
        }
      });
    } else {
      for (const [key, value] of Object.entries(ax as any)) {
        if (key.toLowerCase() === 'set-cookie') continue;
        if (Array.isArray(value))
          value.forEach((v) => h.append(key, String(v)));
        else if (value != null) h.set(key, String(value));
      }
    }

    return h;
  }

  private static methodSupportsBody(method: string) {
    return !/^(GET|HEAD)$/i.test(method);
  }
}
