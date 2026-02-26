import { expect } from 'chai';
import { WebhookHandler, createDefaultHandler } from '../src/resources/webhook/handler.js';
import { basicAuthValidator } from '../src/resources/webhook/auth.js';
import { CreateChargebee } from '../src/createChargebee.js';
import { setResponseHeader, setWebhookUserAgent, webhookUserAgent } from '../src/resources/webhook/response.js';

// Mock HTTP client for Chargebee instance
const mockHttpClient = {
  makeApiRequest: async () => new Response('{}'),
};

// Create Chargebee class
const Chargebee = CreateChargebee(mockHttpClient);

// Helper to create a fresh Chargebee instance with env vars
function createChargebeeWithEnv(env: Record<string, string | undefined>) {
  // Save original env
  const originalUsername = process.env.CHARGEBEE_WEBHOOK_USERNAME;
  const originalPassword = process.env.CHARGEBEE_WEBHOOK_PASSWORD;

  // Clear and set new env vars
  delete process.env.CHARGEBEE_WEBHOOK_USERNAME;
  delete process.env.CHARGEBEE_WEBHOOK_PASSWORD;

  if (env.CHARGEBEE_WEBHOOK_USERNAME !== undefined) {
    process.env.CHARGEBEE_WEBHOOK_USERNAME = env.CHARGEBEE_WEBHOOK_USERNAME;
  }
  if (env.CHARGEBEE_WEBHOOK_PASSWORD !== undefined) {
    process.env.CHARGEBEE_WEBHOOK_PASSWORD = env.CHARGEBEE_WEBHOOK_PASSWORD;
  }

  const chargebee = new (Chargebee as any)({
    site: 'test-site',
    apiKey: 'test-key',
  });

  // Restore original env
  delete process.env.CHARGEBEE_WEBHOOK_USERNAME;
  delete process.env.CHARGEBEE_WEBHOOK_PASSWORD;
  if (originalUsername !== undefined) {
    process.env.CHARGEBEE_WEBHOOK_USERNAME = originalUsername;
  }
  if (originalPassword !== undefined) {
    process.env.CHARGEBEE_WEBHOOK_PASSWORD = originalPassword;
  }

  return chargebee;
}

// Helper to create a default webhook handler with fresh env vars
function getDefaultWebhookWithEnv(
  env: Record<string, string | undefined>,
): WebhookHandler {
  // Save original env
  const originalUsername = process.env.CHARGEBEE_WEBHOOK_USERNAME;
  const originalPassword = process.env.CHARGEBEE_WEBHOOK_PASSWORD;

  // Clear and set new env vars
  delete process.env.CHARGEBEE_WEBHOOK_USERNAME;
  delete process.env.CHARGEBEE_WEBHOOK_PASSWORD;

  if (env.CHARGEBEE_WEBHOOK_USERNAME !== undefined) {
    process.env.CHARGEBEE_WEBHOOK_USERNAME = env.CHARGEBEE_WEBHOOK_USERNAME;
  }
  if (env.CHARGEBEE_WEBHOOK_PASSWORD !== undefined) {
    process.env.CHARGEBEE_WEBHOOK_PASSWORD = env.CHARGEBEE_WEBHOOK_PASSWORD;
  }

  // Create handler with env-based auto-config
  const webhook = createDefaultHandler();

  // Restore original env
  delete process.env.CHARGEBEE_WEBHOOK_USERNAME;
  delete process.env.CHARGEBEE_WEBHOOK_PASSWORD;
  if (originalUsername !== undefined) {
    process.env.CHARGEBEE_WEBHOOK_USERNAME = originalUsername;
  }
  if (originalPassword !== undefined) {
    process.env.CHARGEBEE_WEBHOOK_PASSWORD = originalPassword;
  }

  return webhook;
}

const makeEventBody = (eventType: string, content: string = '{}') => {
  return JSON.stringify({
    id: 'evt_test_1',
    occurred_at: Math.floor(Date.now() / 1000),
    event_type: eventType,
    api_version: 'v2',
    content: JSON.parse(content),
  });
};

describe('WebhookHandler', () => {
  it('should route to callback successfully', async () => {
    let called = false;
    const handler = new WebhookHandler();
    handler.on('pending_invoice_created', async ({ event }) => {
      called = true;
      expect(event.id).to.not.be.empty;
      expect(event.event_type).to.equal('pending_invoice_created');
      expect(event.content).to.not.be.null;
    });

    await handler.handle({ body: makeEventBody('pending_invoice_created') });
    expect(called).to.be.true;
  });

  it('should handle validator error', async () => {
    let onErrorCalled = false;
    const handler = new WebhookHandler();
    handler.requestValidator = () => {
      throw new Error('bad signature');
    };
    handler.on('error', (err: unknown) => {
      onErrorCalled = true;
      expect((err as Error).message).to.equal('bad signature');
    });

    await handler.handle({ body: makeEventBody('pending_invoice_created'), headers: {} });
    expect(onErrorCalled).to.be.true;
  });

  it('should handle sync callback error', async () => {
    let onErrorCalled = false;
    const handler = new WebhookHandler();
    handler.on('pending_invoice_created', () => {
      throw new Error('user code failed');
    });
    handler.on('error', (err: unknown) => {
      onErrorCalled = true;
      expect((err as Error).message).to.equal('user code failed');
    });

    await handler.handle({ body: makeEventBody('pending_invoice_created') });
    expect(onErrorCalled).to.be.true;
  });

  it('should handle unknown event', async () => {
    let onUnhandledCalled = false;
    const handler = new WebhookHandler();
    handler.on('unhandled_event', async ({ event }) => {
      onUnhandledCalled = true;
      expect(event.event_type).to.equal('non_existing_event');
    });

    await handler.handle({ body: makeEventBody('non_existing_event') });
    expect(onUnhandledCalled).to.be.true;
  });

  it('should handle multiple event types', async () => {
    let pendingInvoiceCalled = false;
    let subscriptionCalled = false;

    const handler = new WebhookHandler();
    handler.on('pending_invoice_created', async () => {
      pendingInvoiceCalled = true;
    });
    handler.on('subscription_created', async () => {
      subscriptionCalled = true;
    });

    await handler.handle({ body: makeEventBody('pending_invoice_created') });
    expect(pendingInvoiceCalled).to.be.true;
    expect(subscriptionCalled).to.be.false;

    pendingInvoiceCalled = false;
    await handler.handle({ body: makeEventBody('subscription_created') });
    expect(pendingInvoiceCalled).to.be.false;
    expect(subscriptionCalled).to.be.true;
  });

  it('should handle invalid JSON body', async () => {
    let onErrorCalled = false;
    const handler = new WebhookHandler();
    handler.on('error', () => {
      onErrorCalled = true;
    });

    await handler.handle({ body: 'invalid json' });
    expect(onErrorCalled).to.be.true;
  });

  it('should support custom validator', async () => {
    let validatorCalled = false;
    const handler = new WebhookHandler();
    handler.requestValidator = (headers) => {
      validatorCalled = true;
      if (headers?.['x-custom-header'] !== 'expected-value') {
        throw new Error('missing required header');
      }
    };

    let onErrorCalled = false;
    handler.on('error', (err: unknown) => {
      onErrorCalled = true;
      expect((err as Error).message).to.equal('missing required header');
    });

    // Fail case
    await handler.handle({ body: makeEventBody('pending_invoice_created'), headers: {} });
    expect(validatorCalled).to.be.true;
    expect(onErrorCalled).to.be.true;

    // Success case
    validatorCalled = false;
    onErrorCalled = false;
    await handler.handle({
      body: makeEventBody('pending_invoice_created'),
      headers: { 'x-custom-header': 'expected-value' },
    });
    expect(validatorCalled).to.be.true;
    expect(onErrorCalled).to.be.false;
  });

  it('should support multiple listeners for same event', async () => {
    let listener1Called = false;
    let listener2Called = false;

    const handler = new WebhookHandler();
    handler.on('customer_created', async () => {
      listener1Called = true;
    });
    handler.on('customer_created', async () => {
      listener2Called = true;
    });

    await handler.handle({ body: makeEventBody('customer_created') });
    expect(listener1Called).to.be.true;
    expect(listener2Called).to.be.true;
  });

  it('should support once() for one-time listeners', async () => {
    let callCount = 0;

    const handler = new WebhookHandler();
    handler.once('customer_created', async () => {
      callCount++;
    });

    await handler.handle({ body: makeEventBody('customer_created') });
    await handler.handle({ body: makeEventBody('customer_created') });

    expect(callCount).to.equal(1);
  });

  it('should support off() to remove listeners', async () => {
    let callCount = 0;

    const handler = new WebhookHandler();
    const listener = async () => {
      callCount++;
    };

    handler.on('customer_created', listener);
    await handler.handle({ body: makeEventBody('customer_created') });
    expect(callCount).to.equal(1);

    handler.off('customer_created', listener);
    await handler.handle({ body: makeEventBody('customer_created') });
    expect(callCount).to.equal(1); // Should not increment
  });

  it('should support removeAllListeners()', async () => {
    let callCount = 0;

    const handler = new WebhookHandler();
    handler.on('customer_created', async () => {
      callCount++;
    });
    handler.on('customer_created', async () => {
      callCount++;
    });

    handler.removeAllListeners('customer_created');
    await handler.handle({ body: makeEventBody('customer_created') });
    expect(callCount).to.equal(0);
  });

  it('should correctly report listenerCount', () => {
    const handler = new WebhookHandler();
    expect(handler.listenerCount('customer_created')).to.equal(0);

    handler.on('customer_created', async () => {});
    expect(handler.listenerCount('customer_created')).to.equal(1);

    handler.on('customer_created', async () => {});
    expect(handler.listenerCount('customer_created')).to.equal(2);
  });

  it('should support method chaining', async () => {
    let customerCreatedCalled = false;
    let subscriptionCreatedCalled = false;

    const handler = new WebhookHandler()
      .on('customer_created', async () => {
        customerCreatedCalled = true;
      })
      .on('subscription_created', async () => {
        subscriptionCreatedCalled = true;
      });

    await handler.handle({ body: makeEventBody('customer_created') });
    expect(customerCreatedCalled).to.be.true;
    expect(subscriptionCreatedCalled).to.be.false;
  });
});

describe('BasicAuthValidator', () => {
  const validator = basicAuthValidator((username, password) => {
    return username === 'testuser' && password === 'testpass';
  });

  it('should validate valid credentials', async () => {
    const auth = 'Basic ' + Buffer.from('testuser:testpass').toString('base64');
    // Should not throw
    await validator({ authorization: auth });
  });

  it('should reject invalid credentials', async () => {
    const auth = 'Basic ' + Buffer.from('wrong:wrong').toString('base64');
    try {
      await validator({ authorization: auth });
      expect.fail('Expected validator to throw');
    } catch (err) {
      expect((err as Error).message).to.equal('Invalid credentials');
    }
  });

  it('should reject missing header', async () => {
    try {
      await validator({});
      expect.fail('Expected validator to throw');
    } catch (err) {
      expect((err as Error).message).to.equal('Missing authorization header');
    }
  });

  it('should reject invalid scheme', async () => {
    try {
      await validator({ authorization: 'Bearer token' });
      expect.fail('Expected validator to throw');
    } catch (err) {
      expect((err as Error).message).to.equal('Invalid authorization header format');
    }
  });

  it('should reject invalid credentials format', async () => {
    // Node's Buffer.from() decodes base64 leniently, so this tests the credentials format check
    try {
      await validator({ authorization: 'Basic invalid!!!' });
      expect.fail('Expected validator to throw');
    } catch (err) {
      expect((err as Error).message).to.equal('Invalid credentials format');
    }
  });

  it('should integrate with WebhookHandler', async () => {
    let callbackCalled = false;
    const handler = new WebhookHandler();
    handler.requestValidator = validator;
    handler.on('pending_invoice_created', async () => {
      callbackCalled = true;
    });

    const auth = 'Basic ' + Buffer.from('testuser:testpass').toString('base64');
    const body = JSON.stringify({
      id: 'evt_test_auth',
      event_type: 'pending_invoice_created',
      content: {},
    });

    await handler.handle({ body, headers: { authorization: auth } });
    expect(callbackCalled).to.be.true;
  });
});

describe('Default webhook instance', () => {
  it('should auto-configure basic auth when env vars are set', async () => {
    const webhook = getDefaultWebhookWithEnv({
      CHARGEBEE_WEBHOOK_USERNAME: 'envuser',
      CHARGEBEE_WEBHOOK_PASSWORD: 'envpass',
    });

    expect(webhook.requestValidator).to.not.be.undefined;

    // Valid credentials should pass
    const validAuth =
      'Basic ' + Buffer.from('envuser:envpass').toString('base64');
    await webhook.requestValidator!({ authorization: validAuth });

    // Invalid credentials should fail
    const invalidAuth =
      'Basic ' + Buffer.from('wrong:wrong').toString('base64');
    try {
      await webhook.requestValidator!({ authorization: invalidAuth });
      expect.fail('Expected validator to throw');
    } catch (err) {
      expect((err as Error).message).to.equal('Invalid credentials');
    }
  });

  it('should not configure auth when env vars are missing', async () => {
    const webhook = getDefaultWebhookWithEnv({
      CHARGEBEE_WEBHOOK_USERNAME: undefined,
      CHARGEBEE_WEBHOOK_PASSWORD: undefined,
    });

    expect(webhook.requestValidator).to.be.undefined;
  });

  it('should not configure auth when only username is set', async () => {
    const webhook = getDefaultWebhookWithEnv({
      CHARGEBEE_WEBHOOK_USERNAME: 'envuser',
      CHARGEBEE_WEBHOOK_PASSWORD: undefined,
    });

    expect(webhook.requestValidator).to.be.undefined;
  });

  it('should not configure auth when only password is set', async () => {
    const webhook = getDefaultWebhookWithEnv({
      CHARGEBEE_WEBHOOK_USERNAME: undefined,
      CHARGEBEE_WEBHOOK_PASSWORD: 'envpass',
    });

    expect(webhook.requestValidator).to.be.undefined;
  });

  it('should work end-to-end with env-configured auth', async () => {
    const webhook = getDefaultWebhookWithEnv({
      CHARGEBEE_WEBHOOK_USERNAME: 'testuser',
      CHARGEBEE_WEBHOOK_PASSWORD: 'testpass',
    });

    let callbackCalled = false;
    let errorCalled = false;

    webhook.on('customer_created', async () => {
      callbackCalled = true;
    });
    webhook.on('error', () => {
      errorCalled = true;
    });

    const validAuth =
      'Basic ' + Buffer.from('testuser:testpass').toString('base64');
    const body = JSON.stringify({
      id: 'evt_test',
      event_type: 'customer_created',
      content: {},
    });

    // With valid auth, callback should be called
    await webhook.handle({ body, headers: { authorization: validAuth } });
    expect(callbackCalled).to.be.true;
    expect(errorCalled).to.be.false;

    // With invalid auth, error should be emitted
    callbackCalled = false;
    const invalidAuth =
      'Basic ' + Buffer.from('wrong:wrong').toString('base64');
    await webhook.handle({ body, headers: { authorization: invalidAuth } });
    expect(callbackCalled).to.be.false;
    expect(errorCalled).to.be.true;
  });
});

describe('chargebee.webhooks (instance property)', () => {
  it('should have webhooks property on Chargebee instance', () => {
    const chargebee = new (Chargebee as any)({
      site: 'test-site',
      apiKey: 'test-key',
    });

    expect(chargebee.webhooks).to.not.be.undefined;
    expect(chargebee.webhooks.on).to.be.a('function');
    expect(chargebee.webhooks.handle).to.be.a('function');
    expect(chargebee.webhooks.createHandler).to.be.a('function');
  });

  it('should handle events using chargebee.webhooks.on()', async () => {
    const chargebee = new (Chargebee as any)({
      site: 'test-site',
      apiKey: 'test-key',
    });

    let called = false;
    chargebee.webhooks.on('subscription_created', async ({ event }: any) => {
      called = true;
      expect(event.event_type).to.equal('subscription_created');
    });

    const body = JSON.stringify({
      id: 'evt_test',
      event_type: 'subscription_created',
      content: { subscription: { id: 'sub_123' } },
    });

    await chargebee.webhooks.handle({ body });
    expect(called).to.be.true;
  });

  it('should pass request and response to callbacks', async () => {
    const chargebee = new (Chargebee as any)({
      site: 'test-site',
      apiKey: 'test-key',
    });

    let receivedRequest: any;
    let receivedResponse: any;

    chargebee.webhooks.on('payment_succeeded', async ({ event, request, response }: any) => {
      receivedRequest = request;
      receivedResponse = response;
    });

    const mockReq = { headers: { 'x-custom': 'value' } };
    const mockRes = { status: () => ({ send: () => {} }) };
    const body = JSON.stringify({
      id: 'evt_test',
      event_type: 'payment_succeeded',
      content: {},
    });

    await chargebee.webhooks.handle({
      body,
      request: mockReq,
      response: mockRes,
    });

    expect(receivedRequest).to.equal(mockReq);
    expect(receivedResponse).to.equal(mockRes);
  });

  it('should auto-configure basic auth from env vars', async () => {
    const chargebee = createChargebeeWithEnv({
      CHARGEBEE_WEBHOOK_USERNAME: 'envuser',
      CHARGEBEE_WEBHOOK_PASSWORD: 'envpass',
    });

    expect(chargebee.webhooks.requestValidator).to.not.be.undefined;

    // Valid credentials should pass
    const validAuth = 'Basic ' + Buffer.from('envuser:envpass').toString('base64');
    await chargebee.webhooks.requestValidator!({ authorization: validAuth });

    // Invalid credentials should fail
    const invalidAuth = 'Basic ' + Buffer.from('wrong:wrong').toString('base64');
    try {
      await chargebee.webhooks.requestValidator!({ authorization: invalidAuth });
      expect.fail('Expected validator to throw');
    } catch (err) {
      expect((err as Error).message).to.equal('Invalid credentials');
    }
  });

  it('should not configure auth when env vars are missing', () => {
    const chargebee = createChargebeeWithEnv({
      CHARGEBEE_WEBHOOK_USERNAME: undefined,
      CHARGEBEE_WEBHOOK_PASSWORD: undefined,
    });

    expect(chargebee.webhooks.requestValidator).to.be.undefined;
  });
});

describe('chargebee.webhooks.createHandler()', () => {
  it('should create a new handler instance', () => {
    const chargebee = new (Chargebee as any)({
      site: 'test-site',
      apiKey: 'test-key',
    });

    const handler = chargebee.webhooks.createHandler();

    expect(handler).to.not.be.undefined;
    expect(handler.on).to.be.a('function');
    expect(handler.handle).to.be.a('function');
    // Should be a different instance than chargebee.webhooks
    expect(handler).to.not.equal(chargebee.webhooks);
  });

  it('should create handler with custom validator', async () => {
    const chargebee = new (Chargebee as any)({
      site: 'test-site',
      apiKey: 'test-key',
    });

    let validatorCalled = false;
    const handler = chargebee.webhooks.createHandler({
      requestValidator: () => {
        validatorCalled = true;
      },
    });

    const body = JSON.stringify({
      id: 'evt_test',
      event_type: 'customer_created',
      content: {},
    });

    await handler.handle({ body, headers: {} });
    expect(validatorCalled).to.be.true;
  });

  it('should handle events independently from main webhooks', async () => {
    const chargebee = new (Chargebee as any)({
      site: 'test-site',
      apiKey: 'test-key',
    });

    let mainHandlerCalled = false;
    let customHandlerCalled = false;

    // Register on main webhooks
    chargebee.webhooks.on('invoice_generated', async () => {
      mainHandlerCalled = true;
    });

    // Create separate handler
    const customHandler = chargebee.webhooks.createHandler();
    customHandler.on('invoice_generated', async () => {
      customHandlerCalled = true;
    });

    const body = JSON.stringify({
      id: 'evt_test',
      event_type: 'invoice_generated',
      content: {},
    });

    // Only call custom handler
    await customHandler.handle({ body });
    expect(mainHandlerCalled).to.be.false;
    expect(customHandlerCalled).to.be.true;

    // Reset and call main webhooks
    customHandlerCalled = false;
    await chargebee.webhooks.handle({ body });
    expect(mainHandlerCalled).to.be.true;
    expect(customHandlerCalled).to.be.false;
  });

  it('should support typed request/response in callbacks', async () => {
    const chargebee = new (Chargebee as any)({
      site: 'test-site',
      apiKey: 'test-key',
    });

    // Simulating Express-like types
    interface MockRequest {
      body: any;
      headers: Record<string, string>;
    }
    interface MockResponse {
      status: (code: number) => MockResponse;
      json: (data: any) => void;
    }

    const handler = chargebee.webhooks.createHandler();

    let responseStatusCalled = false;
    const mockRes: MockResponse = {
      status: (code: number) => {
        responseStatusCalled = true;
        expect(code).to.equal(200);
        return mockRes;
      },
      json: () => {},
    };

    handler.on('subscription_cancelled', async ({ response }: any) => {
      response?.status(200).json({ received: true });
    });

    const body = JSON.stringify({
      id: 'evt_test',
      event_type: 'subscription_cancelled',
      content: {},
    });

    await handler.handle({ body, response: mockRes });
    expect(responseStatusCalled).to.be.true;
  });

  it('should create multiple independent handlers', async () => {
    const chargebee = new (Chargebee as any)({
      site: 'test-site',
      apiKey: 'test-key',
    });

    let handler1Called = false;
    let handler2Called = false;

    const customerHandler = chargebee.webhooks.createHandler();
    const paymentHandler = chargebee.webhooks.createHandler();

    customerHandler.on('customer_created', async () => {
      handler1Called = true;
    });

    paymentHandler.on('payment_succeeded', async () => {
      handler2Called = true;
    });

    // Customer event should only trigger customerHandler
    await customerHandler.handle({
      body: JSON.stringify({
        id: 'evt_1',
        event_type: 'customer_created',
        content: {},
      }),
    });
    expect(handler1Called).to.be.true;
    expect(handler2Called).to.be.false;

    // Payment event should only trigger paymentHandler
    handler1Called = false;
    await paymentHandler.handle({
      body: JSON.stringify({
        id: 'evt_2',
        event_type: 'payment_succeeded',
        content: {},
      }),
    });
    expect(handler1Called).to.be.false;
    expect(handler2Called).to.be.true;
  });
});

describe('Webhook Auth Warnings', () => {
  let originalWarn: typeof console.warn;
  let warnCalls: string[];

  beforeEach(() => {
    originalWarn = console.warn;
    warnCalls = [];
    console.warn = (...args: any[]) => {
      warnCalls.push(args.join(' '));
    };
  });

  afterEach(() => {
    console.warn = originalWarn;
  });

  it('should warn when validator is configured but headers are not passed', async () => {
    const handler = new WebhookHandler();
    handler.requestValidator = () => {}; // Configure a validator

    handler.on('customer_created', async () => {});

    // Call handle WITHOUT headers
    await handler.handle({ body: makeEventBody('customer_created') });

    expect(warnCalls.length).to.equal(1);
    expect(warnCalls[0]).to.include(
      'Request validator is configured but no headers were passed',
    );
  });

  it('should not warn when validator is configured and headers are passed', async () => {
    const handler = new WebhookHandler();
    handler.requestValidator = () => {}; // Configure a validator

    handler.on('customer_created', async () => {});

    // Call handle WITH headers
    await handler.handle({
      body: makeEventBody('customer_created'),
      headers: { authorization: 'Basic xyz' },
    });

    // Should not warn about missing headers
    const headerWarning = warnCalls.find((msg) =>
      msg.includes('Request validator is configured but no headers were passed'),
    );
    expect(headerWarning).to.be.undefined;
  });

  it('should warn once when no auth is configured', async () => {
    const handler = new WebhookHandler(); // No validator configured

    handler.on('customer_created', async () => {});

    // First call - should warn
    await handler.handle({ body: makeEventBody('customer_created') });
    expect(warnCalls.length).to.equal(1);
    expect(warnCalls[0]).to.include('No webhook authentication configured');

    // Second call - should NOT warn again
    await handler.handle({ body: makeEventBody('customer_created') });
    expect(warnCalls.length).to.equal(1); // Still only once
  });

  it('should not warn about no auth when validator is configured', async () => {
    const handler = new WebhookHandler();
    handler.requestValidator = () => {}; // Configure validator immediately

    handler.on('customer_created', async () => {});

    await handler.handle({
      body: makeEventBody('customer_created'),
      headers: {},
    });

    // Should not warn about "no auth configured"
    const noAuthWarning = warnCalls.find((msg) =>
      msg.includes('No webhook authentication configured'),
    );
    expect(noAuthWarning).to.be.undefined;
  });

  it('should still process event even when warnings are emitted', async () => {
    const handler = new WebhookHandler();
    handler.requestValidator = () => {}; // Configure a validator

    let eventProcessed = false;
    handler.on('customer_created', async () => {
      eventProcessed = true;
    });

    // Call handle WITHOUT headers - warning should be emitted but event still processed
    await handler.handle({ body: makeEventBody('customer_created') });

    expect(warnCalls.length).to.be.greaterThan(0);
    expect(eventProcessed).to.be.true;
  });
});

describe('Webhook User Agent', () => {
  it('should set the webhook user agent', () => {
    setWebhookUserAgent('Custom-User-Agent');
    expect(webhookUserAgent).to.equal('Custom-User-Agent');
  });

  it('should set webhook user agent for Response object', async () => {
    const response = new Response('{}');
    setWebhookUserAgent('Custom-User-Agent');
    setResponseHeader(response, 'User-Agent', webhookUserAgent);

    expect(response.headers.get('User-Agent')).to.equal('Custom-User-Agent');
  });

  it('should set webhook user agent for Headers  object', async () => {
    const headers = new Headers([['Content-Type', 'application/json']]);
    setWebhookUserAgent('Custom-User-Agent');
    setResponseHeader(headers, 'User-Agent', webhookUserAgent);

    expect(headers.get('Content-Type')).to.equal('application/json');
    expect(headers.get('User-Agent')).to.equal('Custom-User-Agent');
  });

  it('should set webhook user agent for { headers: Headers } object', async () => {
    const headers = { headers: new Headers([['Content-Type', 'application/json']]) };
    setWebhookUserAgent('Custom-User-Agent');
    setResponseHeader(headers, 'User-Agent', webhookUserAgent);

    expect(headers.headers.get('Content-Type')).to.equal('application/json');
    expect(headers.headers.get('User-Agent')).to.equal('Custom-User-Agent');
  });

  it('should set webhook user agent for Node/Bun http-like response object', async () => {
    const response = { setHeader: (name: string, value: string) => {
      expect(name).to.equal('User-Agent');
      expect(value).to.equal('Custom-User-Agent');
    } };
    setWebhookUserAgent('Custom-User-Agent');
    setResponseHeader(response, 'User-Agent', webhookUserAgent);
  });

  it('should set webhook user agent for Context-like object', async () => {
    const context = { set: (name: string, value: string) => {
      expect(name).to.equal('User-Agent');
      expect(value).to.equal('Custom-User-Agent');
    } };
    setWebhookUserAgent('Custom-User-Agent');
    setResponseHeader(context, 'User-Agent', webhookUserAgent);
  });

  it('should set webhook user agent for Reply-like object', async () => {
    const reply = { header: (name: string, value: string) => {
      expect(name).to.equal('User-Agent');
      expect(value).to.equal('Custom-User-Agent');
    } };
    setWebhookUserAgent('Custom-User-Agent');
    setResponseHeader(reply, 'User-Agent', webhookUserAgent);
  });

  it('should not throw error for unknown object', async () => {
    const response: any = null;
    setWebhookUserAgent('Custom-User-Agent');
    setResponseHeader(response, 'User-Agent', webhookUserAgent);    
    expect(response).to.be.null;
  });
});