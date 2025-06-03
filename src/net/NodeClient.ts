import {
  HttpClient,
  HttpClientInterface,
  RequestInterface,
  HttpClientResponseInterface,
  HttpClientResponse,
} from './ClientInterface';
import * as http from 'http';
import * as https from 'https';

export class NodeHttpClient extends HttpClient implements HttpClientInterface {
  async makeApiRequest(
    props: RequestInterface,
  ): Promise<HttpClientResponseInterface> {
    const protocol = props.protocol === 'http' ? http : https;
    const requestPromise = new Promise<HttpClientResponse>(
      (resolve, reject) => {
        const req = protocol.request({
          hostname: props.host,
          path: props.path,
          method: props.method,
          port: props.port,
          headers: props.headers,
        });
        req.setTimeout(props.timeout, () => {
          throw HttpClient.timeOutError();
        });
        req.on('response', (res) => {
          resolve(new NodeHttpClientResponse(res));
        });
        req.on('error', (error) => {
          reject(error);
        });
        req.write(props.data);
        req.end();
      },
    );
    return requestPromise;
  }
}

export class NodeHttpClientResponse
  extends HttpClientResponse
  implements HttpClientResponseInterface
{
  _res: http.IncomingMessage;
  constructor(res: http.IncomingMessage) {
    //@ts-ignore
    super(res.statusCode, res.headers);
    this._res = res;
  }
  getRawResponse(): http.IncomingMessage {
    return this._res;
  }
  toJson(): any {
    return new Promise((resolve, reject) => {
      let response = '';
      this._res.setEncoding('utf8');
      this._res.on('data', (chunk: any) => {
        response += chunk;
      });
      this._res.once('end', () => {
        try {
          resolve(JSON.parse(response));
        } catch (e) {
          reject(e);
        }
      });
    });
  }
}
