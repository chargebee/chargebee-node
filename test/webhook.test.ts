import { expect } from 'chai';
import { WebhookHandler } from '../src/resources/webhook/handler.js';
import { EventType } from '../src/resources/webhook/event_types.js';
import { basicAuthValidator } from '../src/resources/webhook/auth.js';

describe('WebhookHandler', () => {
  const makeEventBody = (eventType: string, content: string = '{}') => {
    return JSON.stringify({
      id: 'evt_test_1',
      occurred_at: Math.floor(Date.now() / 1000),
      event_type: eventType,
      api_version: 'v2',
      content: JSON.parse(content),
    });
  };

  it('should route to callback successfully', async () => {
    let called = false;
    const handler = new WebhookHandler();
    handler.onPendingInvoiceCreated = async (event) => {
      called = true;
      expect(event.id).to.not.be.empty;
      expect(event.event_type).to.equal(EventType.PENDING_INVOICE_CREATED);
      expect(event.content).to.not.be.null;
    };

    await handler.handle(makeEventBody('pending_invoice_created'));
    expect(called).to.be.true;
  });

  it('should handle validator error', async () => {
    let onErrorCalled = false;
    const handler = new WebhookHandler();
    handler.requestValidator = () => {
      throw new Error('bad signature');
    };
    handler.onError = (err) => {
      onErrorCalled = true;
      expect(err.message).to.equal('bad signature');
    };

    await handler.handle(makeEventBody('pending_invoice_created'), {});
    expect(onErrorCalled).to.be.true;
  });

  it('should handle callback error', async () => {
    let onErrorCalled = false;
    const handler = new WebhookHandler();
    handler.onPendingInvoiceCreated = async () => {
      throw new Error('user code failed');
    };
    handler.onError = (err) => {
      onErrorCalled = true;
      expect(err.message).to.equal('user code failed');
    };

    await handler.handle(makeEventBody('pending_invoice_created'));
    expect(onErrorCalled).to.be.true;
  });

  it('should handle unknown event', async () => {
    let onUnhandledCalled = false;
    const handler = new WebhookHandler();
    handler.onUnhandledEvent = async (event) => {
      onUnhandledCalled = true;
      expect(event.event_type).to.equal('non_existing_event');
    };

    await handler.handle(makeEventBody('non_existing_event'));
    expect(onUnhandledCalled).to.be.true;
  });

  it('should handle multiple event types', async () => {
    let pendingInvoiceCalled = false;
    let subscriptionCalled = false;

    const handler = new WebhookHandler();
    handler.onPendingInvoiceCreated = async () => {
      pendingInvoiceCalled = true;
    };
    handler.onSubscriptionCreated = async () => {
      subscriptionCalled = true;
    };

    await handler.handle(makeEventBody('pending_invoice_created'));
    expect(pendingInvoiceCalled).to.be.true;
    expect(subscriptionCalled).to.be.false;

    pendingInvoiceCalled = false;
    await handler.handle(makeEventBody('subscription_created'));
    expect(pendingInvoiceCalled).to.be.false;
    expect(subscriptionCalled).to.be.true;
  });

  it('should handle invalid JSON body', async () => {
    let onErrorCalled = false;
    const handler = new WebhookHandler();
    handler.onError = (err) => {
      onErrorCalled = true;
    };

    await handler.handle('invalid json');
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
    handler.onError = (err) => {
      onErrorCalled = true;
      expect(err.message).to.equal('missing required header');
    };

    // Fail case
    await handler.handle(makeEventBody('pending_invoice_created'), {});
    expect(validatorCalled).to.be.true;
    expect(onErrorCalled).to.be.true;

    // Success case
    validatorCalled = false;
    onErrorCalled = false;
    await handler.handle(makeEventBody('pending_invoice_created'), {
      'x-custom-header': 'expected-value',
    });
    expect(validatorCalled).to.be.true;
    expect(onErrorCalled).to.be.false;
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
    handler.onPendingInvoiceCreated = async () => {
      callbackCalled = true;
    };

    const auth = 'Basic ' + Buffer.from('testuser:testpass').toString('base64');
    const body = JSON.stringify({
      event_type: 'pending_invoice_created',
      content: {},
    });

    await handler.handle(body, { authorization: auth });
    expect(callbackCalled).to.be.true;
  });
});
