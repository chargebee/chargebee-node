import axios, { AxiosInstance, AxiosResponse } from 'axios';
import{
    HttpClientInterface, 
    HttpClientRequestInterface, 
    HttpClientResponseInterface,
    HttpResponseHeaders,
} from "chargebee"

class AxiosHttpResponse implements HttpClientResponseInterface {
  constructor(private response: AxiosResponse) {}

  getStatusCode(): number {
    return this.response.status;
  }

  getHeaders(): HttpResponseHeaders {
    return this.response.headers as any;
  }

  getRawResponse(): unknown {
    return this.response;
  }

  async toJson(): Promise<any> {
    return this.response.data;
  }
}

export class AxiosHttpClient implements HttpClientInterface{
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create();
  }
  async makeApiRequest(
    props: HttpClientRequestInterface,
  ): Promise<HttpClientResponseInterface> {
    const { host, port, path, method, headers, data, protocol, timeout } = props;
    const url = `${protocol}://${host}${port ? `:${port}` : ''}${path}`;
    try {
      const response = await this.axiosInstance.request({
        url,
        method,
        headers,
        data: data ? data : undefined,
        timeout,
        validateStatus: () => true,
      });
      return new AxiosHttpResponse(response);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          return new AxiosHttpResponse(error.response);
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
}