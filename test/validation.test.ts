import { expect } from 'chai';
import { CreateChargebee } from '../src/createChargebee.js';
import { ChargebeeZodValidationError } from '../src/chargebeeZodValidationError.js';
import { getSchema } from '../src/validationLoader.js';

// ---- shared mock HTTP client -----------------------------------------------
// Captures outgoing requests so tests can assert whether an HTTP call was made.
// Returns a minimal valid response so the SDK's response parsing doesn't throw.

let capturedRequests: Request[] = [];

const mockHttpClient = {
  makeApiRequest: async (request: Request): Promise<Response> => {
    capturedRequests.push(request.clone());
    return new Response(JSON.stringify({ customer: { id: 'cust_mock' } }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  },
};

const Chargebee = CreateChargebee(mockHttpClient);

function createChargebee(conf: Record<string, unknown> = {}) {
  return new (Chargebee as any)({
    site: 'test-site',
    apiKey: 'test-api-key',
    ...conf,
  });
}

beforeEach(() => {
  capturedRequests = [];
});

// ===========================================================================
// Part 1 – Schema unit tests
// Tests validate the generated Zod schemas directly via getSchema(), without
// any HTTP calls. This keeps the tests fast and independent of network state.
// ===========================================================================

describe('Validation – schema unit tests', () => {
  // ── customer.create ────────────────────────────────────────────────────────

  describe('customer.create schema', () => {
    it('loads a schema for customer.create', async () => {
      const schema = await getSchema('customer', 'create');
      expect(schema).to.not.be.null;
    });

    it('accepts an empty object (all fields are optional)', async () => {
      const schema = await getSchema('customer', 'create');
      expect(schema!.safeParse({}).success).to.be.true;
    });

    it('accepts valid string fields', async () => {
      const schema = await getSchema('customer', 'create');
      expect(
        schema!.safeParse({
          first_name: 'Jane',
          last_name: 'Doe',
          company: 'Acme Inc',
          phone: '+1-555-0100',
        }).success,
      ).to.be.true;
    });

    it('accepts a valid email address', async () => {
      const schema = await getSchema('customer', 'create');
      expect(schema!.safeParse({ email: 'jane@example.com' }).success).to.be.true;
    });

    it('accepts valid enum values for auto_collection', async () => {
      const schema = await getSchema('customer', 'create');
      expect(schema!.safeParse({ auto_collection: 'on' }).success).to.be.true;
      expect(schema!.safeParse({ auto_collection: 'off' }).success).to.be.true;
    });

    it('accepts an integer for net_term_days', async () => {
      const schema = await getSchema('customer', 'create');
      expect(schema!.safeParse({ net_term_days: 30 }).success).to.be.true;
    });

    it('passes unknown keys through (looseObject / allow extra keys)', async () => {
      const schema = await getSchema('customer', 'create');
      expect(schema!.safeParse({ undocumented_cf: 'value' }).success).to.be.true;
    });

    it('rejects an invalid email address', async () => {
      const schema = await getSchema('customer', 'create');
      const result = schema!.safeParse({ email: 'not-an-email' });
      expect(result.success).to.be.false;
      expect(result.error!.issues[0].path).to.deep.equal(['email']);
    });

    it('rejects first_name exceeding maxLength(150)', async () => {
      const schema = await getSchema('customer', 'create');
      const result = schema!.safeParse({ first_name: 'a'.repeat(151) });
      expect(result.success).to.be.false;
      expect(result.error!.issues[0].path).to.deep.equal(['first_name']);
    });

    it('rejects an invalid enum value for auto_collection', async () => {
      const schema = await getSchema('customer', 'create');
      const result = schema!.safeParse({ auto_collection: 'maybe' });
      expect(result.success).to.be.false;
      expect(result.error!.issues[0].path).to.deep.equal(['auto_collection']);
    });

    it('rejects a non-integer for net_term_days', async () => {
      const schema = await getSchema('customer', 'create');
      const result = schema!.safeParse({ net_term_days: 1.5 });
      expect(result.success).to.be.false;
      expect(result.error!.issues[0].path).to.deep.equal(['net_term_days']);
    });

    it('reports all violated fields in a single parse (fail-all)', async () => {
      const schema = await getSchema('customer', 'create');
      const result = schema!.safeParse({
        email: 'bad-email',
        first_name: 'x'.repeat(200),
        auto_collection: 'invalid',
      });
      expect(result.success).to.be.false;
      // All three fields should have issues reported at once.
      expect(result.error!.issues.length).to.be.greaterThanOrEqual(3);
      const paths = result.error!.issues.map((i) => i.path[0]);
      expect(paths).to.include('email');
      expect(paths).to.include('first_name');
      expect(paths).to.include('auto_collection');
    });
  });

  // ── customer.create – nested card sub-object ───────────────────────────────

  describe('customer.create – nested card sub-object', () => {
    it('accepts a valid card sub-object', async () => {
      const schema = await getSchema('customer', 'create');
      expect(
        schema!.safeParse({ card: { number: '4111111111111111', cvv: '123' } }).success,
      ).to.be.true;
    });

    it('rejects card.expiry_month > 12 (max constraint)', async () => {
      const schema = await getSchema('customer', 'create');
      const result = schema!.safeParse({ card: { expiry_month: 13 } });
      expect(result.success).to.be.false;
      expect(result.error!.issues[0].path).to.deep.equal(['card', 'expiry_month']);
    });

    it('rejects card.expiry_month < 1 (min constraint)', async () => {
      const schema = await getSchema('customer', 'create');
      const result = schema!.safeParse({ card: { expiry_month: 0 } });
      expect(result.success).to.be.false;
      expect(result.error!.issues[0].path).to.deep.equal(['card', 'expiry_month']);
    });

    it('rejects card.gateway_account_id exceeding maxLength(50)', async () => {
      const schema = await getSchema('customer', 'create');
      const result = schema!.safeParse({
        card: { gateway_account_id: 'x'.repeat(51) },
      });
      expect(result.success).to.be.false;
      const paths = result.error!.issues.map((i) => i.path);
      expect(paths.some((p) => p.includes('gateway_account_id'))).to.be.true;
    });
  });

  // ── customer.update ────────────────────────────────────────────────────────

  describe('customer.update schema', () => {
    it('loads a schema for customer.update', async () => {
      const schema = await getSchema('customer', 'update');
      expect(schema).to.not.be.null;
    });

    it('accepts a valid email for update', async () => {
      const schema = await getSchema('customer', 'update');
      expect(schema!.safeParse({ email: 'updated@example.com' }).success).to.be.true;
    });

    it('rejects an invalid email in update', async () => {
      const schema = await getSchema('customer', 'update');
      const result = schema!.safeParse({ email: 'not-valid' });
      expect(result.success).to.be.false;
      expect(result.error!.issues[0].path).to.deep.equal(['email']);
    });
  });

  // ── invoice.charge (has a required field: description) ────────────────────

  describe('invoice.charge schema', () => {
    it('loads a schema for invoice.charge', async () => {
      const schema = await getSchema('invoice', 'charge');
      expect(schema).to.not.be.null;
    });

    it('accepts a payload that includes the required description', async () => {
      const schema = await getSchema('invoice', 'charge');
      expect(schema!.safeParse({ description: 'Consulting fee' }).success).to.be.true;
    });

    it('accepts description alongside optional fields', async () => {
      const schema = await getSchema('invoice', 'charge');
      expect(
        schema!.safeParse({ description: 'Fee', amount: 500, currency_code: 'USD' }).success,
      ).to.be.true;
    });

    it('rejects a payload missing the required description field', async () => {
      const schema = await getSchema('invoice', 'charge');
      const result = schema!.safeParse({});
      expect(result.success).to.be.false;
      expect(result.error!.issues[0].path).to.deep.equal(['description']);
    });

    it('rejects amount = 0 (min constraint is 1)', async () => {
      const schema = await getSchema('invoice', 'charge');
      const result = schema!.safeParse({ description: 'Fee', amount: 0 });
      expect(result.success).to.be.false;
      expect(result.error!.issues[0].path).to.deep.equal(['amount']);
    });

    it('rejects a negative amount', async () => {
      const schema = await getSchema('invoice', 'charge');
      const result = schema!.safeParse({ description: 'Fee', amount: -100 });
      expect(result.success).to.be.false;
    });
  });

  // ── getSchema – loader behaviour ───────────────────────────────────────────

  describe('getSchema() loader', () => {
    it('returns null for an action that has no schema', async () => {
      const schema = await getSchema('customer', 'nonexistent_action_xyz');
      expect(schema).to.be.null;
    });

    it('returns null for an unknown resource', async () => {
      const schema = await getSchema('nonexistent_resource_xyz', 'create');
      expect(schema).to.be.null;
    });

    it('returns the same cached object on repeated calls', async () => {
      const a = await getSchema('customer', 'create');
      const b = await getSchema('customer', 'create');
      expect(a).to.equal(b); // strict reference equality → cached
    });
  });
});

// ===========================================================================
// Part 2 – RequestWrapper integration tests
// Tests that the SDK honours enableValidation at the API call level.
// ===========================================================================

describe('Validation – RequestWrapper integration', () => {
  // ── enableValidation: false (default) ─────────────────────────────────────

  describe('when enableValidation is false (default)', () => {
    it('does not validate and still sends the HTTP request for an invalid email', async () => {
      const cb = createChargebee(); // enableValidation not set → defaults to false

      await cb.customer.create({ email: 'definitely-not-an-email' });

      expect(capturedRequests).to.have.length(1);
    });

    it('does not validate and still sends the HTTP request when a required field is missing', async () => {
      const cb = createChargebee();

      await cb.invoice.charge({});

      expect(capturedRequests).to.have.length(1);
    });
  });

  // ── enableValidation: true ─────────────────────────────────────────────────

  describe('when enableValidation is true', () => {
    it('throws ChargebeeZodValidationError for an invalid email', async () => {
      const cb = createChargebee({ enableValidation: true });

      let thrown: unknown;
      try {
        await cb.customer.create({ email: 'not-an-email' });
      } catch (e) {
        thrown = e;
      }

      expect(thrown).to.be.instanceOf(ChargebeeZodValidationError);
      const err = thrown as ChargebeeZodValidationError;
      expect(err.name).to.equal('ChargebeeZodValidationError');
      expect(err.message).to.include('[Chargebee] Validation failed');
      expect(err.message).to.include('email');
      // Validation must abort before any HTTP call is made.
      expect(capturedRequests).to.have.length(0);
    });

    it('sets actionName to the SDK method name on the error', async () => {
      const cb = createChargebee({ enableValidation: true });

      let thrown: unknown;
      try {
        await cb.customer.create({ email: 'bad' });
      } catch (e) {
        thrown = e;
      }

      const err = thrown as ChargebeeZodValidationError;
      expect(err).to.be.instanceOf(ChargebeeZodValidationError);
      expect(err.actionName).to.equal('create');
    });

    it('exposes a zodError with structured issue list', async () => {
      const cb = createChargebee({ enableValidation: true });

      let thrown: unknown;
      try {
        await cb.customer.create({
          email: 'bad-email',
          first_name: 'x'.repeat(200),
        });
      } catch (e) {
        thrown = e;
      }

      const err = thrown as ChargebeeZodValidationError;
      expect(err).to.be.instanceOf(ChargebeeZodValidationError);
      expect(err.zodError).to.exist;
      expect(err.zodError.issues).to.be.an('array').with.length.greaterThan(0);
      const fields = err.zodError.issues.map((i) => i.path[0]);
      expect(fields).to.include('email');
    });

    it('throws when an invalid enum value is supplied', async () => {
      const cb = createChargebee({ enableValidation: true });

      let thrown: unknown;
      try {
        await cb.customer.create({ auto_collection: 'definitely_invalid' });
      } catch (e) {
        thrown = e;
      }

      expect(thrown).to.be.instanceOf(ChargebeeZodValidationError);
      expect((thrown as ChargebeeZodValidationError).message).to.include('auto_collection');
      expect(capturedRequests).to.have.length(0);
    });

    it('throws when a required field is absent (invoice.charge without description)', async () => {
      const cb = createChargebee({ enableValidation: true });

      let thrown: unknown;
      try {
        await cb.invoice.charge({});
      } catch (e) {
        thrown = e;
      }

      expect(thrown).to.be.instanceOf(ChargebeeZodValidationError);
      expect((thrown as ChargebeeZodValidationError).message).to.include('description');
      expect(capturedRequests).to.have.length(0);
    });

    it('does not throw and makes the HTTP request when params are valid', async () => {
      const cb = createChargebee({ enableValidation: true });

      await cb.customer.create({
        first_name: 'Alice',
        email: 'alice@example.com',
      });

      expect(capturedRequests).to.have.length(1);
    });

    it('does not throw for an empty body (all customer.create fields are optional)', async () => {
      const cb = createChargebee({ enableValidation: true });

      await cb.customer.create({});

      expect(capturedRequests).to.have.length(1);
    });

    it('does not throw for extra unknown keys (looseObject accepts them)', async () => {
      const cb = createChargebee({ enableValidation: true });

      await cb.customer.create({ undocumented_cf_field: 'custom_value' });

      expect(capturedRequests).to.have.length(1);
    });
  });
});
