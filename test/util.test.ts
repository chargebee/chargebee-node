import { expect } from 'chai';
import { encodeListParams, encodeParams, serialize } from '../src/util.js';

// Bracket notation is easier to read decoded; the escaping itself is asserted
// separately in "value escaping".
function encoded(paramObj: any, jsonKeys?: any): string {
  return decodeURIComponent(
    encodeParams(paramObj, undefined, undefined, undefined, jsonKeys),
  );
}

describe('encodeParams - scalars', () => {
  it('should encode simple attributes', () => {
    expect(
      encoded({ first_name: 'John', last_name: 'Doe', locale: 'fr-CA' }),
    ).to.equal('first_name=John&last_name=Doe&locale=fr-CA');
  });

  it('should encode numbers and booleans', () => {
    expect(
      encoded({ quantity: 1, unit_price: 0, auto_collection: true }),
    ).to.equal('quantity=1&unit_price=0&auto_collection=true');
  });

  it('should escape reserved characters and encode spaces as +', () => {
    expect(encodeParams({ first_name: 'John Doe' })).to.equal(
      'first_name=John+Doe',
    );
    expect(encodeParams({ email: 'john+cb@test.com' })).to.equal(
      'email=john%2Bcb%40test.com',
    );
    expect(encodeParams({ note: 'a&b=c' })).to.equal('note=a%26b%3Dc');
  });

  it('should keep empty strings but drop null and undefined', () => {
    expect(encoded({ a: '', b: null, c: undefined, d: 'x' })).to.equal(
      'a=&d=x',
    );
  });
});

describe('encodeParams - nested objects', () => {
  it('should encode a sub-resource as bracket notation', () => {
    expect(
      encoded({ billing_address: { city: 'Walnut', state: 'California' } }),
    ).to.equal(
      'billing_address[city]=Walnut&billing_address[state]=California',
    );
  });

  it('should encode arbitrarily deep nesting', () => {
    expect(encoded({ ramp: { effective_from: { on: 1704067200 } } })).to.equal(
      'ramp[effective_from][on]=1704067200',
    );
  });

  it('should contribute nothing for a sub-resource with no fields', () => {
    expect(encoded({ card: {}, a: 'x' })).to.equal('a=x');
  });
});

describe('encodeParams - arrays', () => {
  it('should index-encode an array of primitives', () => {
    expect(encoded({ coupon_ids: ['FIFTYOFF', 'TENOFF'] })).to.equal(
      'coupon_ids[0]=FIFTYOFF&coupon_ids[1]=TENOFF',
    );
  });

  it('should drop empty arrays', () => {
    expect(encoded({ coupon_ids: [], a: 'x' })).to.equal('a=x');
  });

  it('should index an array of sub-resources by field, then position', () => {
    expect(
      encoded({
        subscription_items: [
          { item_price_id: 'day-pass-USD', unit_price: 100 },
          { item_price_id: 'basic-USD', quantity: 1 },
        ],
      }),
    ).to.equal(
      'subscription_items[item_price_id][0]=day-pass-USD&subscription_items[unit_price][0]=100&subscription_items[item_price_id][1]=basic-USD&subscription_items[quantity][1]=1',
    );
  });

  it('should index an array nested inside an array of sub-resources', () => {
    expect(
      encoded({
        item_constraints: [
          { constraint: 'specific', item_price_ids: ['basic', 'pro'] },
        ],
      }),
    ).to.equal(
      'item_constraints[constraint][0]=specific&item_constraints[item_price_ids][0][0]=basic&item_constraints[item_price_ids][0][1]=pro',
    );
  });
});

describe('encodeParams - jsonKeys', () => {
  it('should JSON-encode a key registered at the matching level', () => {
    expect(encoded({ meta_data: { plan: 'pro' } }, { meta_data: 0 })).to.equal(
      'meta_data={"plan":"pro"}',
    );
  });

  it('should pass an already stringified value through untouched', () => {
    expect(encoded({ meta_data: '{"plan":"pro"}' }, { meta_data: 0 })).to.equal(
      'meta_data={"plan":"pro"}',
    );
  });

  // meta_data is a json key on every endpoint that accepts it, so sending an
  // empty object is how a caller wipes the stored document.
  it('should send an empty object so the field can be cleared', () => {
    expect(encoded({ meta_data: {}, id: 'cust_1' }, { meta_data: 0 })).to.equal(
      'meta_data={}&id=cust_1',
    );
  });

  it('should send an empty object for a nested json key too', () => {
    expect(
      encoded(
        { subscription_items: [{ billing_address: {} }] },
        { billing_address: 1 },
      ),
    ).to.equal('subscription_items[billing_address][0]={}');
  });

  it('should JSON-encode a nested key registered at its own level', () => {
    expect(
      encoded(
        { item_constraints: [{ item_price_ids: ['basic'] }] },
        { item_price_ids: 1 },
      ),
    ).to.equal('item_constraints[item_price_ids][0]=["basic"]');
  });

  it('should fall back to bracket notation when the level does not match', () => {
    expect(encoded({ meta_data: { plan: 'pro' } }, { meta_data: 1 })).to.equal(
      'meta_data[plan]=pro',
    );
  });

  it('should encode a null value as empty', () => {
    expect(encoded({ meta_data: null }, { meta_data: 0 })).to.equal(
      'meta_data=',
    );
  });
});

describe('encodeParams - filter array operators', () => {
  it('should send between as a single field for a nested filter', () => {
    expect(
      encoded({
        export_type: 'import_friendly_data',
        ramp: { effective_from: { between: [1704067200, 1717199999] } },
      }),
    ).to.equal(
      'export_type=import_friendly_data&ramp[effective_from][between]=[1704067200,1717199999]',
    );
  });

  it('should send between as a single field for a top-level filter', () => {
    expect(
      encoded({ updated_at: { between: [1704067200, 1717199999] } }),
    ).to.equal('updated_at[between]=[1704067200,1717199999]');
  });

  it('should send in and not_in as single fields', () => {
    expect(
      encoded({
        subscription: {
          id: { in: ['sub_1', 'sub_2'] },
          status: { not_in: ['cancelled'] },
        },
      }),
    ).to.equal(
      'subscription[id][in]=["sub_1","sub_2"]&subscription[status][not_in]=["cancelled"]',
    );
  });

  it('should leave other operators on the same filter alone', () => {
    expect(
      encoded({
        subscription: {
          updated_at: { after: 1704067200, between: [1704067200, 1717199999] },
        },
      }),
    ).to.equal(
      'subscription[updated_at][after]=1704067200&subscription[updated_at][between]=[1704067200,1717199999]',
    );
  });

  it('should pass an already stringified operator value through untouched', () => {
    expect(
      encoded({ updated_at: { between: '[1704067200,1717199999]' } }),
    ).to.equal('updated_at[between]=[1704067200,1717199999]');
  });

  it('should not touch a scalar under an operator key', () => {
    expect(encoded({ subscription: { id: { in: 'sub_1' } } })).to.equal(
      'subscription[id][in]=sub_1',
    );
  });

  it('should omit an operator whose array is empty', () => {
    expect(encoded({ updated_at: { between: [] }, limit: 5 })).to.equal(
      'limit=5',
    );
  });
});

describe('serialize - GET query string', () => {
  it('should produce the same filter encoding as the request body', () => {
    const params = {
      ramp: { effective_from: { between: [1704067200, 1717199999] } },
    };
    const query = decodeURIComponent(encodeParams(serialize(params)));

    expect(query).to.equal(
      'ramp[effective_from][between]=[1704067200,1717199999]',
    );
  });

  it('should flatten sub-resources into bracket notation', () => {
    expect(serialize({ billing_address: { city: 'Walnut' } })).to.deep.equal({
      'billing_address[city]': 'Walnut',
    });
  });
});

describe('encodeListParams', () => {
  it('should JSON-encode array values and leave scalars alone', () => {
    expect(
      decodeURIComponent(
        encodeListParams({
          'updated_at[between]': [1704067200, 1717199999],
          limit: 5,
        }),
      ),
    ).to.equal('updated_at[between]=[1704067200,1717199999]&limit=5');
  });
});
