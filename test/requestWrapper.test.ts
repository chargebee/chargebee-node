import { expect } from 'chai';
import { CreateChargebee } from '../src/createChargebee.js';
import { Environment } from '../src/environment.js';
import { TelemetryAttributeKeys } from '../src/chargebee.esm.js';

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

describe('RequestWrapper - request body', () => {
  describe('GET requests', () => {
    it('should not have a body for a GET list request', async () => {
      const chargebee = createChargebee();
      await chargebee.customer.list();

      const body = await capturedRequests[0].text();
      expect(body).to.equal('');
    });

    it('should not have a body for a GET retrieve request', async () => {
      responseFactory = () =>
        new Response(JSON.stringify({ customer: { id: 'cust_123' } }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });

      const chargebee = createChargebee();
      await chargebee.customer.retrieve('cust_123');

      const body = await capturedRequests[0].text();
      expect(body).to.equal('');
    });

    it('should encode params into the query string, not the body, for GET requests', async () => {
      const chargebee = createChargebee();
      await chargebee.customer.list({ limit: 10 });

      const url = new URL(capturedRequests[0].url);
      expect(url.searchParams.get('limit')).to.equal('10');

      const body = await capturedRequests[0].text();
      expect(body).to.equal('');
    });
  });

  describe('POST requests', () => {
    it('should have a body for a POST request', async () => {
      responseFactory = () =>
        new Response(JSON.stringify({ customer: { id: 'cust_123' } }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });

      const chargebee = createChargebee();
      await chargebee.customer.create({ first_name: 'John' });

      const body = await capturedRequests[0].text();
      expect(body).to.not.equal('');
      expect(body).to.include('first_name=John');
    });

    it('should send filter array operators as a single field, not indexed entries', async () => {
      responseFactory = () =>
        new Response(JSON.stringify({ export: { id: 'export_123' } }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });

      const chargebee = createChargebee();
      await chargebee.export.subscriptions({
        subscription: {
          updated_at: { between: [1704067200, 1717199999] },
          id: { in: ['sub_1', 'sub_2'] },
        },
      });

      const body = decodeURIComponent(await capturedRequests[0].text());
      expect(body).to.include(
        'subscription[updated_at][between]=[1704067200,1717199999]',
      );
      expect(body).to.include('subscription[id][in]=["sub_1","sub_2"]');
      expect(body).to.not.include('[between][0]');
    });
  });
});

describe('RequestWrapper - request headers', () => {
  describe('User-Agent header', () => {
    it('should set User-Agent to Chargebee-NodeJs-Client with clientVersion only when __clientIdentifier() is not called', async () => {
      const chargebee = createChargebee();
      await chargebee.customer.list();

      const userAgent = capturedRequests[0].headers.get('User-Agent');
      expect(userAgent).to.equal(
        `Chargebee-NodeJs-Client ${Environment.clientVersion}`,
      );
    });

    it('should append service name with semicolon after calling chargebee.__clientIdentifier()', async () => {
      const chargebee = createChargebee();
      chargebee.__clientIdentifier('local-test-suffix');

      await chargebee.customer.list();

      const userAgent = capturedRequests[0].headers.get('User-Agent');
      expect(userAgent).to.equal(
        `Chargebee-NodeJs-Client ${Environment.clientVersion};local-test-suffix`,
      );
    });

    it('should reflect updated service name if chargebee.__clientIdentifier() is called again', async () => {
      const chargebee = createChargebee();
      chargebee.__clientIdentifier('first-service');
      chargebee.__clientIdentifier('second-service');

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

  describe('Content-Length header', () => {
    // The SDK must NOT set Content-Length manually. fetch/undici derives it from
    // `body` at dispatch time; a manual header is redundant and can be re-appended
    // into a comma-joined "N, N" when FetchHttpClient re-wraps the Request, which
    // undici (>= 7.28) rejects as an invalid content-length header.
    // See: RequestWrapper#request and src/net/FetchClient.ts.
    it('should NOT set Content-Length manually for ASCII form-urlencoded bodies', async () => {
      responseFactory = () =>
        new Response(JSON.stringify({ customer: { id: 'cust_123' } }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });

      const chargebee = createChargebee();
      await chargebee.customer.create({ first_name: 'John' });

      const body = await capturedRequests[0].text();
      expect(body).to.include('first_name=John');
      expect(capturedRequests[0].headers.get('Content-Length')).to.be.null;
    });

    it('should NOT set Content-Length manually for multi-byte JSON bodies', async () => {
      responseFactory = () =>
        new Response(JSON.stringify({ personalized_offers: [] }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });

      const chargebee = createChargebee();
      await chargebee.personalizedOffer.personalizedOffers({
        customer_id: 'cust_123',
        first_name: 'Jürgen',
        last_name: 'Müller — 🎉',
      });

      const body = await capturedRequests[0].text();
      const byteLength = Buffer.byteLength(body, 'utf8');
      const charLength = body.length;
      // Body integrity: multi-byte payload is preserved intact.
      expect(byteLength).to.be.greaterThan(charLength);
      expect(capturedRequests[0].headers.get('Content-Length')).to.be.null;
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

      expect(capturedRequests[0].headers.get('X-CB-Retry-Attempt')).to.be.null;
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
        retryConfig: {
          enabled: true,
          maxRetries: 2,
          delayMs: 0,
          retryOn: [500],
        },
      });
      await chargebee.customer.list();

      expect(capturedRequests.length).to.equal(2);
      expect(capturedRequests[0].headers.get('X-CB-Retry-Attempt')).to.be.null;
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
        retryConfig: {
          enabled: true,
          maxRetries: 3,
          delayMs: 0,
          retryOn: [500],
        },
      });
      await chargebee.customer.list();

      expect(capturedRequests.length).to.equal(3);
      expect(capturedRequests[0].headers.get('X-CB-Retry-Attempt')).to.be.null;
      expect(capturedRequests[1].headers.get('X-CB-Retry-Attempt')).to.equal(
        '1',
      );
      expect(capturedRequests[2].headers.get('X-CB-Retry-Attempt')).to.equal(
        '2',
      );
    });
  });
});

describe('RequestWrapper - telemetry adapter', () => {
  it('should not call telemetry adapter when not configured', async () => {
    const chargebee = createChargebee();
    await chargebee.customer.list();
    expect(capturedRequests.length).to.equal(1);
  });

  it('should call telemetry adapter once per API call including retries', async () => {
    const telemetryEvents: string[] = [];
    let capturedContext: any = null;
    let capturedResult: any = null;

    responseFactory = (attempt) => {
      if (attempt < 1) {
        return new Response(
          JSON.stringify({ http_status_code: 500, message: 'server error' }),
          { status: 500, headers: { 'Content-Type': 'application/json' } },
        );
      }
      return new Response(JSON.stringify({ list: [], next_offset: null }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    };

    const chargebee = createChargebee({
      retryConfig: { enabled: true, maxRetries: 2, delayMs: 0, retryOn: [500] },
      telemetryAdapter: {
        onRequestStart: (ctx, headers) => {
          telemetryEvents.push('start');
          capturedContext = ctx;
          headers['traceparent'] = '00-test-trace';
          return { id: 'span-1' };
        },
        onRequestEnd: (_handle, result) => {
          telemetryEvents.push('end');
          capturedResult = result;
        },
      },
    });

    await chargebee.customer.list();

    expect(telemetryEvents).to.deep.equal(['start', 'end']);
    expect(capturedContext.spanName).to.equal('chargebee.customer.list');
    expect(capturedContext.resource).to.equal('customer');
    expect(capturedContext.operation).to.equal('list');
    expect(capturedContext.chargebeeSite).to.equal('test-site');
    expect(capturedContext.startAttributes['url.full']).to.match(
      /^https:\/\/test-site\.chargebee\.com/,
    );
    expect(capturedContext.startAttributes['http.request.method']).to.equal(
      'GET',
    );
    expect(capturedContext.startAttributes['chargebee.resource']).to.equal(
      'customer',
    );
    expect(capturedResult.httpStatusCode).to.equal(200);
    expect(capturedResult.endAttributes['http.response.status_code']).to.equal(
      200,
    );
    expect(capturedResult.endAttributes['error.type']).to.equal(undefined);
    expect(capturedRequests.length).to.equal(2);
    expect(capturedRequests[0].headers.get('traceparent')).to.equal(
      '00-test-trace',
    );
  });

  it('should report error details on failed API response', async () => {
    let capturedResult: any = null;

    responseFactory = () =>
      new Response(
        JSON.stringify({
          message: 'Not found',
          type: 'invalid_request',
          api_error_code: 'resource_not_found',
          param: 'subscription_id',
        }),
        { status: 404, headers: { 'Content-Type': 'application/json' } },
      );

    const chargebee = createChargebee({
      telemetryAdapter: {
        onRequestStart: () => ({}),
        onRequestEnd: (_handle, result) => {
          capturedResult = result;
        },
      },
    });

    try {
      await chargebee.subscription.retrieve('sub_missing');
    } catch (_err) {
      // expected
    }

    expect(capturedResult.httpStatusCode).to.equal(404);
    expect(capturedResult.endAttributes['http.response.status_code']).to.equal(
      404,
    );
    expect(capturedResult.endAttributes['error.type']).to.equal(
      'invalid_request',
    );
    expect(capturedResult.endAttributes['chargebee.error.code']).to.equal(
      'resource_not_found',
    );
    expect(capturedResult.endAttributes['chargebee.error.type']).to.equal(
      'invalid_request',
    );
    expect(capturedResult.endAttributes['chargebee.error.param']).to.equal(
      'subscription_id',
    );
    expect(capturedResult.error.chargebeeErrorCode).to.equal(
      'resource_not_found',
    );
    expect(capturedResult.error.chargebeeApiErrorType).to.equal(
      'invalid_request',
    );
    expect(capturedResult.error.chargebeeErrorParam).to.equal(
      'subscription_id',
    );
  });

  it('should not fail API call when onRequestStart throws', async () => {
    let onRequestEndCalled = false;

    const chargebee = createChargebee({
      telemetryAdapter: {
        onRequestStart: () => {
          throw new Error('start hook failed');
        },
        onRequestEnd: () => {
          onRequestEndCalled = true;
        },
      },
    });

    const result = await chargebee.customer.list();
    expect(result).to.have.property('list');
    expect(capturedRequests.length).to.equal(1);
    expect(onRequestEndCalled).to.equal(true);
  });

  it('should invoke class-based telemetry adapters', async () => {
    const telemetryEvents: string[] = [];

    class ClassTelemetryAdapter {
      onRequestStart() {
        telemetryEvents.push('start');
        return { id: 'class-span' };
      }

      onRequestEnd() {
        telemetryEvents.push('end');
      }
    }

    const chargebee = createChargebee({
      telemetryAdapter: new ClassTelemetryAdapter(),
    });

    await chargebee.customer.list();

    expect(telemetryEvents).to.deep.equal(['start', 'end']);
  });

  it('should capture chargebee-* request headers as http.request.header.* attributes', async () => {
    let capturedContext: any = null;

    const chargebee = createChargebee({
      telemetryAdapter: {
        onRequestStart: (ctx) => {
          capturedContext = ctx;
          return { id: 'span-1' };
        },
        onRequestEnd: () => {},
      },
    });

    await chargebee.customer.list(
      { limit: 1 },
      {
        'chargebee-business-entity-id': 'be_123',
        'chargebee-event-actions': 'all-disabled',
        // Mixed-case header name should normalize to lowercase.
        'Chargebee-Idempotency-Key': 'idem-key-1',
        // Non-chargebee headers must never be captured.
        Authorization: 'Basic super-secret',
        'X-Custom': 'nope',
      },
    );

    const attrs = capturedContext.startAttributes;
    expect(attrs['http.request.header.chargebee-business-entity-id']).to.deep.equal(
      ['be_123'],
    );
    expect(attrs['http.request.header.chargebee-event-actions']).to.deep.equal([
      'all-disabled',
    ]);
    expect(attrs['http.request.header.chargebee-idempotency-key']).to.deep.equal(
      ['idem-key-1'],
    );
    expect(attrs['http.request.header.authorization']).to.equal(undefined);
    expect(attrs['http.request.header.x-custom']).to.equal(undefined);
  });

  it('should exclude chargebee-request-origin-* (PII) headers from span attributes', async () => {
    let capturedContext: any = null;

    const chargebee = createChargebee({
      telemetryAdapter: {
        onRequestStart: (ctx) => {
          capturedContext = ctx;
          return { id: 'span-1' };
        },
        onRequestEnd: () => {},
      },
    });

    await chargebee.customer.list(
      { limit: 1 },
      {
        'chargebee-business-entity-id': 'be_123',
        'chargebee-request-origin-ip': '202.170.207.70',
        'chargebee-request-origin-user': 'amara@acme.com',
        'chargebee-request-origin-user-encoded': 'dXNlckBhY21lLmNvbQ==',
        'chargebee-request-origin-device': 'iOS',
      },
    );

    const attrs = capturedContext.startAttributes;
    // Safe control header is captured...
    expect(attrs['http.request.header.chargebee-business-entity-id']).to.deep.equal(
      ['be_123'],
    );
    // ...but the PII family is excluded by default.
    expect(attrs['http.request.header.chargebee-request-origin-ip']).to.equal(
      undefined,
    );
    expect(attrs['http.request.header.chargebee-request-origin-user']).to.equal(
      undefined,
    );
    expect(
      attrs['http.request.header.chargebee-request-origin-user-encoded'],
    ).to.equal(undefined);
    expect(attrs['http.request.header.chargebee-request-origin-device']).to.equal(
      undefined,
    );
    // The PII values must not leak into any attribute.
    const serialized = JSON.stringify(attrs);
    expect(serialized).to.not.contain('202.170.207.70');
    expect(serialized).to.not.contain('amara@acme.com');
  });

  it('should not fail API call when onRequestEnd throws', async () => {
    const chargebee = createChargebee({
      telemetryAdapter: {
        onRequestStart: () => ({ id: 'span-1' }),
        onRequestEnd: () => {
          throw new Error('end hook failed');
        },
      },
    });

    const result = await chargebee.customer.list();
    expect(result).to.have.property('list');
    expect(capturedRequests.length).to.equal(1);
  });

  it('should send Prefer: chargebee-telemetry=include when preferChargebeeTelemetry is true', async () => {
    const chargebee = createChargebee({
      preferChargebeeTelemetry: true,
      telemetryAdapter: {
        onRequestStart: () => ({ id: 'span-1' }),
        onRequestEnd: () => {},
      },
    });

    await chargebee.customer.list();

    expect(capturedRequests[0].headers.get('Prefer')).to.equal(
      'chargebee-telemetry=include',
    );
  });

  it('should not override an existing Prefer request header', async () => {
    const chargebee = createChargebee({
      preferChargebeeTelemetry: true,
      telemetryAdapter: {
        onRequestStart: () => ({ id: 'span-1' }),
        onRequestEnd: () => {},
      },
    });

    await chargebee.customer.list(
      { limit: 1 },
      { Prefer: 'respond-async' },
    );

    expect(capturedRequests[0].headers.get('Prefer')).to.equal('respond-async');
  });

  it('should not send Prefer when preferChargebeeTelemetry is not enabled', async () => {
    const chargebee = createChargebee({
      telemetryAdapter: {
        onRequestStart: () => ({ id: 'span-1' }),
        onRequestEnd: () => {},
      },
    });

    await chargebee.customer.list();

    expect(capturedRequests[0].headers.get('Prefer')).to.be.null;
  });

  it('should not send Prefer when preferChargebeeTelemetry is false', async () => {
    const chargebee = createChargebee({
      preferChargebeeTelemetry: false,
      telemetryAdapter: {
        onRequestStart: () => ({ id: 'span-1' }),
        onRequestEnd: () => {},
      },
    });

    await chargebee.customer.list();

    expect(capturedRequests[0].headers.get('Prefer')).to.be.null;
  });

  it('should not send Prefer when telemetryAdapter is not configured', async () => {
    const chargebee = createChargebee();

    await chargebee.customer.list();

    expect(capturedRequests[0].headers.get('Prefer')).to.be.null;
  });
});

describe('Chargebee telemetry exports', () => {
  it('should export TelemetryAttributeKeys at runtime', () => {
    expect(TelemetryAttributeKeys.URL_FULL).to.equal('url.full');
    expect(TelemetryAttributeKeys.HTTP_REQUEST_METHOD).to.equal(
      'http.request.method',
    );
    expect(TelemetryAttributeKeys.HTTP_RESPONSE_STATUS_CODE).to.equal(
      'http.response.status_code',
    );
    expect(TelemetryAttributeKeys.ERROR_TYPE).to.equal('error.type');
    expect(TelemetryAttributeKeys.CHARGEBEE_RESOURCE).to.equal(
      'chargebee.resource',
    );
  });
});
