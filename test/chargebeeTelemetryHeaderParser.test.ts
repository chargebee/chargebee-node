import { expect } from 'chai';
import {
  parseChargebeeTelemetryHeaderToSpanAttributes,
  parseScalarValue,
} from '../src/telemetry/chargebeeTelemetryHeaderParser.js';

describe('ChargebeeTelemetryHeaderParser', () => {
  it('should parse example 1 from response-header-format.md', () => {
    const header =
      'cb;start_time=@1781280400;res_wait_time_ms=90;tp_time_ms=1350;time_ms=3800, tp-avalara;time_ms=730, tp-stripe;pm=card;time_ms=620, ft-consolidated_invoicing, ft-account_hierarchy';

    const attributes = parseChargebeeTelemetryHeaderToSpanAttributes(header);

    expect(attributes['chargebee.telemetry.cb.start_time']).to.equal(1781280400);
    expect(attributes['chargebee.telemetry.cb.time_ms']).to.equal(3800);
    expect(attributes['chargebee.telemetry.cb.res_wait_time_ms']).to.equal(90);
    expect(attributes['chargebee.telemetry.cb.tp_time_ms']).to.equal(1350);
    expect(attributes['chargebee.telemetry.tp.avalara.time_ms']).to.equal(730);
    expect(attributes['chargebee.telemetry.tp.stripe.time_ms']).to.equal(620);
    expect(attributes['chargebee.telemetry.tp.stripe.pm']).to.equal('card');
    expect(attributes['chargebee.telemetry.features']).to.deep.equal([
      'consolidated_invoicing',
      'account_hierarchy',
    ]);
  });

  it('should parse example 2 from response-header-format.md', () => {
    const header =
      'cb;start_time=@1781280900;res_wait_time_ms=120;tp_time_ms=1950;time_ms=5200, tp-stripe;pm=card;time_ms=1200, tp-avalara;time_ms=750, ft-account_hierarchy, ft-calendar_billing, ft-consolidated_invoicing';

    const attributes = parseChargebeeTelemetryHeaderToSpanAttributes(header);

    expect(attributes['chargebee.telemetry.cb.start_time']).to.equal(1781280900);
    expect(attributes['chargebee.telemetry.cb.time_ms']).to.equal(5200);
    expect(attributes['chargebee.telemetry.cb.res_wait_time_ms']).to.equal(120);
    expect(attributes['chargebee.telemetry.cb.tp_time_ms']).to.equal(1950);
    expect(attributes['chargebee.telemetry.tp.stripe.time_ms']).to.equal(1200);
    expect(attributes['chargebee.telemetry.tp.avalara.time_ms']).to.equal(750);
    expect(attributes['chargebee.telemetry.features']).to.deep.equal([
      'account_hierarchy',
      'calendar_billing',
      'consolidated_invoicing',
    ]);
  });

  it('should parse Postman 4b subscription_for_items header', () => {
    const header =
      'cb;start_time=@1785415309;res_wait_time_ms=3;time_ms=1911;tp_time_ms=191, tp-avalara;time_ms=189, tp-chargebee;time_ms=2;pm=card, ft-account_hierarchy';

    const attributes = parseChargebeeTelemetryHeaderToSpanAttributes(header);

    expect(attributes['chargebee.telemetry.cb.start_time']).to.equal(1785415309);
    expect(attributes['chargebee.telemetry.cb.res_wait_time_ms']).to.equal(3);
    expect(attributes['chargebee.telemetry.cb.time_ms']).to.equal(1911);
    expect(attributes['chargebee.telemetry.cb.tp_time_ms']).to.equal(191);
    expect(attributes['chargebee.telemetry.tp.avalara.time_ms']).to.equal(189);
    expect(attributes['chargebee.telemetry.tp.chargebee.time_ms']).to.equal(2);
    expect(attributes['chargebee.telemetry.tp.chargebee.pm']).to.equal('card');
    expect(attributes['chargebee.telemetry.features']).to.deep.equal([
      'account_hierarchy',
    ]);
  });

  it('should map all RFC 9651 scalar types', () => {
    const header =
      'cb;start_time=@1781280400;time_ms=3800;ratio=99.9;desc="hello world";enabled=?1;disabled=?0;payload=:aGVsbG8=:;pm=card';

    const attributes = parseChargebeeTelemetryHeaderToSpanAttributes(header);

    expect(attributes['chargebee.telemetry.cb.start_time']).to.equal(1781280400);
    expect(attributes['chargebee.telemetry.cb.time_ms']).to.equal(3800);
    expect(attributes['chargebee.telemetry.cb.ratio']).to.equal(99.9);
    expect(attributes['chargebee.telemetry.cb.desc']).to.equal('hello world');
    expect(attributes['chargebee.telemetry.cb.enabled']).to.equal(true);
    expect(attributes['chargebee.telemetry.cb.disabled']).to.equal(false);
    expect(attributes['chargebee.telemetry.cb.payload']).to.equal('aGVsbG8=');
    expect(attributes['chargebee.telemetry.cb.pm']).to.equal('card');
  });

  it('should parse sf-string escapes', () => {
    expect(parseScalarValue('"hello \\"world\\""')).to.equal('hello "world"');
  });

  it('should split list items after an sf-string with escaped quotes', () => {
    const header =
      'cb;desc="say \\"hi\\"", ft-account_hierarchy';

    const attributes = parseChargebeeTelemetryHeaderToSpanAttributes(header);

    expect(attributes['chargebee.telemetry.cb.desc']).to.equal('say "hi"');
    expect(attributes['chargebee.telemetry.features']).to.deep.equal([
      'account_hierarchy',
    ]);
  });

  it('should return empty map for blank or malformed headers', () => {
    expect(parseChargebeeTelemetryHeaderToSpanAttributes(null)).to.deep.equal(
      {},
    );
    expect(parseChargebeeTelemetryHeaderToSpanAttributes('')).to.deep.equal({});
    expect(parseChargebeeTelemetryHeaderToSpanAttributes(';;;')).to.deep.equal(
      {},
    );
  });
});
