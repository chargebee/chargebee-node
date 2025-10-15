import got, { Got, Response } from 'got';
import {
  HttpClientInterface,
  HttpClientRequestInterface,
  HttpClientResponseInterface,
  HttpResponseHeaders,
  HttpRequestHeaders,
} from 'chargebee';

type GotHeaders = Record<string, string | string[] | undefined>;
class GotHttpResponse implements HttpClientResponseInterface {
  constructor(private response: Response) {}

  getStatusCode(): number {
    return this.response.statusCode;
  }

  getHeaders(): HttpResponseHeaders {
    return this.response.headers as any;
  }

  getRawResponse(): unknown {
    return this.response;
  }

  async toJson(): Promise<any> {
    return JSON.parse(this.response.body as string);
  }
}

export class GotHttpClient implements HttpClientInterface {
  private gotInstance: Got;

  constructor() {
    this.gotInstance = got.extend({});
  }

  async makeApiRequest(
    props: HttpClientRequestInterface,
  ): Promise<HttpClientResponseInterface> {
    const { host, port, path, method, headers, data, protocol, timeout } =
      props;
    const url = `${protocol}://${host}${port ? `:${port}` : ''}${path}`;
    try {
      const response = await this.gotInstance({
        url,
        method: method as any,
        headers: GotHttpClient.toGotHeaders(headers),
        body: GotHttpClient.methodSupportsBody(method) ? data : undefined,
        timeout: { request: timeout },
        throwHttpErrors: false,
      });

      return new GotHttpResponse(response);
    } catch (error) {
      if (error.name === 'TimeoutError') {
        throw new Error(`Request timeout: ${error.message}`);
      }
      throw new Error(`Request failed: ${error.message}`);
    }
  }

  private static toGotHeaders(h?: HttpRequestHeaders): GotHeaders {
    const out: GotHeaders = {};
    if (!h) return out;
    for (const [key, value] of Object.entries(h)) {
      if (value == null) {
        out[key] = undefined;
      } else if (Array.isArray(value)) {
        out[key] = value.map((v) => String(v));
      } else {
        out[key] = String(value);
      }
    }
    return out;
  }

  private static methodSupportsBody(method: string) {
    return !/^(GET|HEAD)$/i.test(method);
  }
}
