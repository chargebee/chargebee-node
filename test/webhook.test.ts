import { expect } from 'chai';
import { WebhookHandler } from '../src/resources/webhook/handler.js';
import { basicAuthValidator } from '../src/resources/webhook/auth.js';

// Helper to re-import the default webhook instance with fresh env vars
async function getDefaultWebhookWithEnv(
  env: Record<string, string | undefined>,
): Promise<WebhookHandler> {
  // Save original env
  const originalEnv = { ...process.env };

  // Clear module cache for handler
  const modulePath = require.resolve('../src/resources/webhook/handler.js');
  delete require.cache[modulePath];

  // Set new env vars
  Object.assign(process.env, env);

  // Re-import
  const { default: webhook } = await import(
    '../src/resources/webhook/handler.js'
  );

  // Restore original env
  process.env = originalEnv;

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
    handler.on('pending_invoice_created', async (event) => {
      called = true;
      expect(event.id).to.not.be.empty;
      expect(event.event_type).to.equal('pending_invoice_created');
      expect(event.content).to.not.be.null;
    });

    handler.handle(makeEventBody('pending_invoice_created'));
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

    handler.handle(makeEventBody('pending_invoice_created'), {});
    expect(onErrorCalled).to.be.true;
  });

  it('should handle sync callback error', () => {
    let onErrorCalled = false;
    const handler = new WebhookHandler();
    handler.on('pending_invoice_created', () => {
      throw new Error('user code failed');
    });
    handler.on('error', (err: unknown) => {
      onErrorCalled = true;
      expect((err as Error).message).to.equal('user code failed');
    });

    handler.handle(makeEventBody('pending_invoice_created'));
    expect(onErrorCalled).to.be.true;
  });

  it('should handle unknown event', async () => {
    let onUnhandledCalled = false;
    const handler = new WebhookHandler();
    handler.on('unhandled_event', async (event) => {
      onUnhandledCalled = true;
      expect(event.event_type).to.equal('non_existing_event');
    });

    handler.handle(makeEventBody('non_existing_event'));
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

    handler.handle(makeEventBody('pending_invoice_created'));
    expect(pendingInvoiceCalled).to.be.true;
    expect(subscriptionCalled).to.be.false;

    pendingInvoiceCalled = false;
    handler.handle(makeEventBody('subscription_created'));
    expect(pendingInvoiceCalled).to.be.false;
    expect(subscriptionCalled).to.be.true;
  });

  it('should handle invalid JSON body', async () => {
    let onErrorCalled = false;
    const handler = new WebhookHandler();
    handler.on('error', () => {
      onErrorCalled = true;
    });

    handler.handle('invalid json');
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
    handler.handle(makeEventBody('pending_invoice_created'), {});
    expect(validatorCalled).to.be.true;
    expect(onErrorCalled).to.be.true;

    // Success case
    validatorCalled = false;
    onErrorCalled = false;
    handler.handle(makeEventBody('pending_invoice_created'), {
      'x-custom-header': 'expected-value',
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

    handler.handle(makeEventBody('customer_created'));
    expect(listener1Called).to.be.true;
    expect(listener2Called).to.be.true;
  });

  it('should support once() for one-time listeners', async () => {
    let callCount = 0;

    const handler = new WebhookHandler();
    handler.once('customer_created', async () => {
      callCount++;
    });

    handler.handle(makeEventBody('customer_created'));
    handler.handle(makeEventBody('customer_created'));

    expect(callCount).to.equal(1);
  });

  it('should support off() to remove listeners', async () => {
    let callCount = 0;

    const handler = new WebhookHandler();
    const listener = async () => {
      callCount++;
    };

    handler.on('customer_created', listener);
    handler.handle(makeEventBody('customer_created'));
    expect(callCount).to.equal(1);

    handler.off('customer_created', listener);
    handler.handle(makeEventBody('customer_created'));
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
    handler.handle(makeEventBody('customer_created'));
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

    handler.handle(makeEventBody('customer_created'));
    expect(customerCreatedCalled).to.be.true;
    expect(subscriptionCreatedCalled).to.be.false;
  });
});

describe('BasicAuthValidator', () => {
  const validator = basicAuthValidator((username, password) => {
    return username === 'testuser' && password === 'testpass';
  });

  it('should validate valid credentials', () => {
    const auth = 'Basic ' + Buffer.from('testuser:testpass').toString('base64');
    expect(() => validator({ authorization: auth })).to.not.throw();
  });

  it('should reject invalid credentials', () => {
    const auth = 'Basic ' + Buffer.from('wrong:wrong').toString('base64');
    expect(() => validator({ authorization: auth })).to.throw(
      'Invalid credentials',
    );
  });

  it('should reject missing header', () => {
    expect(() => validator({})).to.throw('Invalid authorization header');
  });

  it('should reject invalid scheme', () => {
    expect(() => validator({ authorization: 'Bearer token' })).to.throw(
      'Invalid authorization header',
    );
  });

  it('should reject invalid credentials format', () => {
    // Node's Buffer.from() decodes base64 leniently, so this tests the credentials format check
    expect(() => validator({ authorization: 'Basic invalid!!!' })).to.throw(
      'Invalid credentials',
    );
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
      event_type: 'pending_invoice_created',
      content: {},
    });

    handler.handle(body, { authorization: auth });
    expect(callbackCalled).to.be.true;
  });
});

describe('Default webhook instance', () => {
  it('should auto-configure basic auth when env vars are set', async () => {
    const webhook = await getDefaultWebhookWithEnv({
      CHARGEBEE_WEBHOOK_USERNAME: 'envuser',
      CHARGEBEE_WEBHOOK_PASSWORD: 'envpass',
    });

    expect(webhook.requestValidator).to.not.be.undefined;

    // Valid credentials should pass
    const validAuth =
      'Basic ' + Buffer.from('envuser:envpass').toString('base64');
    expect(() =>
      webhook.requestValidator!({ authorization: validAuth }),
    ).to.not.throw();

    // Invalid credentials should fail
    const invalidAuth =
      'Basic ' + Buffer.from('wrong:wrong').toString('base64');
    expect(() =>
      webhook.requestValidator!({ authorization: invalidAuth }),
    ).to.throw('Invalid credentials');
  });

  it('should not configure auth when env vars are missing', async () => {
    const webhook = await getDefaultWebhookWithEnv({
      CHARGEBEE_WEBHOOK_USERNAME: undefined,
      CHARGEBEE_WEBHOOK_PASSWORD: undefined,
    });

    expect(webhook.requestValidator).to.be.undefined;
  });

  it('should not configure auth when only username is set', async () => {
    const webhook = await getDefaultWebhookWithEnv({
      CHARGEBEE_WEBHOOK_USERNAME: 'envuser',
      CHARGEBEE_WEBHOOK_PASSWORD: undefined,
    });

    expect(webhook.requestValidator).to.be.undefined;
  });

  it('should not configure auth when only password is set', async () => {
    const webhook = await getDefaultWebhookWithEnv({
      CHARGEBEE_WEBHOOK_USERNAME: undefined,
      CHARGEBEE_WEBHOOK_PASSWORD: 'envpass',
    });

    expect(webhook.requestValidator).to.be.undefined;
  });

  it('should work end-to-end with env-configured auth', async () => {
    const webhook = await getDefaultWebhookWithEnv({
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
    webhook.handle(body, { authorization: validAuth });
    expect(callbackCalled).to.be.true;
    expect(errorCalled).to.be.false;

    // With invalid auth, error should be emitted
    callbackCalled = false;
    const invalidAuth =
      'Basic ' + Buffer.from('wrong:wrong').toString('base64');
    webhook.handle(body, { authorization: invalidAuth });
    expect(callbackCalled).to.be.false;
    expect(errorCalled).to.be.true;
  });
});
