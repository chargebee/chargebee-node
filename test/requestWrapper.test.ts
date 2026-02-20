import { expect } from 'chai';
import { CreateChargebee } from '../src/createChargebee.js';
import { Environment } from '../src/environment.js';

let capturedRequests: Request[] = [];
let responseFactory: ((attempt: number) => Response) | null = null;
let callCount = 0;

const mockHttpClient = {
  makeApiRequest: async (request: Request): Promise<Response> => {
    capturedRequests.push(request.clone());
    const attempt = callCount++;
    if (responseFactory) {
      return responseFactory(attempt);
    }
    return new Response(JSON.stringify({ list: [], next_offset: null }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  },
};

const Chargebee = CreateChargebee(mockHttpClient);

function createChargebee(conf: Record<string, any> = {}) {
  return new (Chargebee as any)({
    site: 'test-site',
    apiKey: 'test-api-key',
    ...conf,
  });
}

beforeEach(() => {
  capturedRequests = [];
  responseFactory = null;
  callCount = 0;
});

describe('RequestWrapper - request headers', () => {
  describe('User-Agent header', () => {
    it('should set User-Agent to Chargebee-NodeJs-Client with clientVersion only when service() is not called', async () => {
      const chargebee = createChargebee();
      await chargebee.customer.list();

      const userAgent = capturedRequests[0].headers.get('User-Agent');
      expect(userAgent).to.equal(
        `Chargebee-NodeJs-Client ${Environment.clientVersion}`,
      );
    });

    it('should append service name with semicolon after calling chargebee.service()', async () => {
      const chargebee = createChargebee();
      chargebee.service('local-test-suffix');

      await chargebee.customer.list();

      const userAgent = capturedRequests[0].headers.get('User-Agent');
      expect(userAgent).to.equal(
        `Chargebee-NodeJs-Client ${Environment.clientVersion};local-test-suffix`,
      );
    });

    it('should reflect updated service name if chargebee.service() is called again', async () => {
      const chargebee = createChargebee();
      chargebee.service('first-service');
      chargebee.service('second-service');

      await chargebee.customer.list();

      const userAgent = capturedRequests[0].headers.get('User-Agent');
      expect(userAgent).to.equal(
        `Chargebee-NodeJs-Client ${Environment.clientVersion};second-service`,
      );
    });
  });

  describe('Authorization header', () => {
    it('should set Authorization as Basic base64(apiKey:)', async () => {
      const chargebee = createChargebee({ apiKey: 'test-key-123' });
      await chargebee.customer.list();

      const expected =
        'Basic ' + Buffer.from('test-key-123:').toString('base64');
      expect(capturedRequests[0].headers.get('Authorization')).to.equal(
        expected,
      );
    });

    it('should include the trailing colon in the base64-encoded value', async () => {
      const chargebee = createChargebee({ apiKey: 'my_secret_key' });
      await chargebee.customer.list();

      const raw = capturedRequests[0].headers
        .get('Authorization')!
        .replace('Basic ', '');
      const decoded = Buffer.from(raw, 'base64').toString('utf-8');
      expect(decoded).to.equal('my_secret_key:');
    });
  });

  describe('Accept header', () => {
    it('should set Accept to application/json', async () => {
      const chargebee = createChargebee();
      await chargebee.customer.list();

      expect(capturedRequests[0].headers.get('Accept')).to.equal(
        'application/json',
      );
    });
  });

  describe('Content-Type header', () => {
    it('should set Content-Type to application/x-www-form-urlencoded for POST requests', async () => {
      responseFactory = () =>
        new Response(JSON.stringify({ customer: { id: 'cust_123' } }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });

      const chargebee = createChargebee();
      await chargebee.customer.create({ first_name: 'John' });

      expect(capturedRequests[0].headers.get('Content-Type')).to.equal(
        'application/x-www-form-urlencoded; charset=utf-8',
      );
    });

    it('should set Content-Type to application/x-www-form-urlencoded for GET requests', async () => {
      const chargebee = createChargebee();
      await chargebee.customer.list();

      expect(capturedRequests[0].headers.get('Content-Type')).to.equal(
        'application/x-www-form-urlencoded; charset=utf-8',
      );
    });
  });

  describe('Lang-Version header', () => {
    it('should set Lang-Version to the current Node.js process.version', async () => {
      const chargebee = createChargebee();
      await chargebee.customer.list();

      expect(capturedRequests[0].headers.get('Lang-Version')).to.equal(
        process.version,
      );
    });
  });

  describe('X-CB-Retry-Attempt header', () => {
    it('should NOT include X-CB-Retry-Attempt on the first attempt', async () => {
      const chargebee = createChargebee();
      await chargebee.customer.list();

      expect(
        capturedRequests[0].headers.get('X-CB-Retry-Attempt'),
      ).to.be.null;
    });

    it('should set X-CB-Retry-Attempt to "1" on the first retry', async () => {
      responseFactory = (attempt) => {
        if (attempt === 0) {
          return new Response(
            JSON.stringify({ http_status_code: 500, message: 'server error' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } },
          );
        }
        return new Response(JSON.stringify({ list: [] }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      };

      const chargebee = createChargebee({
        retryConfig: { enabled: true, maxRetries: 2, delayMs: 0, retryOn: [500] },
      });
      await chargebee.customer.list();

      expect(capturedRequests.length).to.equal(2);
      expect(
        capturedRequests[0].headers.get('X-CB-Retry-Attempt'),
      ).to.be.null;
      expect(capturedRequests[1].headers.get('X-CB-Retry-Attempt')).to.equal(
        '1',
      );
    });

    it('should increment X-CB-Retry-Attempt on each subsequent retry', async () => {
      responseFactory = (attempt) => {
        if (attempt < 2) {
          return new Response(
            JSON.stringify({ http_status_code: 500, message: 'server error' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } },
          );
        }
        return new Response(JSON.stringify({ list: [] }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      };

      const chargebee = createChargebee({
        retryConfig: { enabled: true, maxRetries: 3, delayMs: 0, retryOn: [500] },
      });
      await chargebee.customer.list();

      expect(capturedRequests.length).to.equal(3);
      expect(capturedRequests[0].headers.get('X-CB-Retry-Attempt')).to.be.null;
      expect(capturedRequests[1].headers.get('X-CB-Retry-Attempt')).to.equal('1');
      expect(capturedRequests[2].headers.get('X-CB-Retry-Attempt')).to.equal('2');
    });
  });
});
