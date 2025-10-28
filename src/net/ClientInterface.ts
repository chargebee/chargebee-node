import { ChargebeeError } from '../chargebeeError.js';
export interface HttpClientInterface {
  makeApiRequest: (request: Request, timeout: number) => Promise<Response>;
}
export class HttpClient implements HttpClientInterface {
  async makeApiRequest(props: Request, timeout: number): Promise<Response> {
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
