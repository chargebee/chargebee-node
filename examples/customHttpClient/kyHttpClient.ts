import ky, { HTTPError } from 'ky';
import { HttpClientInterface } from 'chargebee';

export class KyHttpClient implements HttpClientInterface {
  private client: typeof ky;
  constructor() {
    this.client = ky.create({
      retry: 0,
      throwHttpErrors: true,
    });
  }
  async makeApiRequest(request: Request, timeout?: number): Promise<Response> {
    try {
      const response = await this.client(request);
      return response;
    } catch (err) {
      if (err instanceof HTTPError) {
        return err.response;
      }
      throw err;
    }
  }
}
