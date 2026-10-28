import { expect } from 'chai';
import {
  applyResponseTelemetryPreferHeader,
  buildRequestEndSpanAttributes,
  buildRequestHeaderSpanAttributes,
  buildRequestTelemetryResult,
  buildResponseHeaderSpanAttributes,
  getResponseHeaderValueIgnoreCase,
} from '../src/telemetry/TelemetryAdapter.js';
import {
  CHARGEBEE_TELEMETRY_PREFER_HEADER,
  CHARGEBEE_TELEMETRY_PREFER_VALUE,
  TelemetryAttributeKeys,
} from '../src/telemetry/types.js';

describe('TelemetryAdapter response telemetry Prefer header', () => {
  it('should add Prefer when missing', () => {
    const headers: Record<string, string> = {};

    applyResponseTelemetryPreferHeader(headers);

    expect(headers[CHARGEBEE_TELEMETRY_PREFER_HEADER]).to.equal(
      CHARGEBEE_TELEMETRY_PREFER_VALUE,
    );
  });

  it('should not override an existing Prefer header', () => {
    const headers = { Prefer: 'respond-async' };

    applyResponseTelemetryPreferHeader(headers);

    expect(headers.Prefer).to.equal('respond-async');
  });

  it('should treat Prefer as case-insensitive', () => {
    const headers: Record<string, string> = { prefer: 'custom' };

    applyResponseTelemetryPreferHeader(headers);

    expect(headers.prefer).to.equal('custom');
    expect(headers.Prefer).to.equal(undefined);
  });
});

describe('TelemetryAdapter header helpers', () => {
  it('should ignore null header names when building request header span attributes', () => {
    const headers: Record<string, string | number> = Object.create(null);
    (headers as Record<string | null, string | number>)[null as unknown as string] =
      'ignored';
    headers['chargebee-business-entity-id'] = 'entity-1';

    const attributes = buildRequestHeaderSpanAttributes(headers);

    expect(attributes).to.deep.equal({
      'http.request.header.chargebee-business-entity-id': ['entity-1'],
    });
  });

  it('should ignore null header names when looking up response headers', () => {
    const headers: Record<string, string | string[] | undefined> =
      Object.create(null);
    (headers as Record<string | null, string>)[null as unknown as string] =
      'ignored';
    headers['X-Chargebee-Telemetry'] = 'cb;time_ms=1';

    expect(
      getResponseHeaderValueIgnoreCase(headers, 'x-chargebee-telemetry'),
    ).to.equal('cb;time_ms=1');
  });
});

describe('TelemetryAdapter response telemetry', () => {
  const telemetryHeader =
    'cb;start_time=@1781280400;time_ms=3800, tp-stripe;pm=card;time_ms=620, ft-account_hierarchy';

  it('should promote X-Chargebee-Telemetry response header to end span attributes', () => {
    const headers = {
      'X-Chargebee-Telemetry': telemetryHeader,
    };

    const attributes = buildResponseHeaderSpanAttributes(headers);

    expect(attributes['http.response.header.x-chargebee-telemetry']).to.equal(
      telemetryHeader,
    );
    expect(attributes['chargebee.telemetry.cb.start_time']).to.equal(
      1781280400,
    );
    expect(attributes['chargebee.telemetry.cb.time_ms']).to.equal(3800);
    expect(attributes['chargebee.telemetry.tp.stripe.time_ms']).to.equal(620);
    expect(attributes['chargebee.telemetry.tp.stripe.pm']).to.equal('card');
    expect(attributes['chargebee.telemetry.features']).to.deep.equal([
      'account_hierarchy',
    ]);
    expect(attributes).to.not.have.property('http.response.header.content-type');
  });

  it('should ignore null header names when building response header span attributes', () => {
    const headers: Record<string, string | string[] | undefined> =
      Object.create(null);
    (headers as Record<string | null, string>)[null as unknown as string] =
      'ignored';
    headers['X-Chargebee-Telemetry'] = 'cb;time_ms=1';

    const attributes = buildResponseHeaderSpanAttributes(headers);

    expect(attributes['http.response.header.x-chargebee-telemetry']).to.equal(
      'cb;time_ms=1',
    );
    expect(attributes['chargebee.telemetry.cb.time_ms']).to.equal(1);
  });

  it('should omit telemetry attributes when response header is absent', () => {
    const attributes = buildResponseHeaderSpanAttributes({});

    expect(attributes).to.not.have.property(
      'http.response.header.x-chargebee-telemetry',
    );
    expect(attributes).to.not.have.property('chargebee.telemetry.cb.time_ms');
  });

  it('should emit raw header only when parsing fails', () => {
    const headers = {
      'X-Chargebee-Telemetry': 'cb;=missing_key',
    };

    const attributes = buildResponseHeaderSpanAttributes(headers);

    expect(attributes['http.response.header.x-chargebee-telemetry']).to.equal(
      'cb;=missing_key',
    );
    expect(attributes).to.not.have.property('chargebee.telemetry.cb.time_ms');
  });

  it('should merge response telemetry into buildRequestEndSpanAttributes', () => {
    const attributes = buildRequestEndSpanAttributes({
      httpStatusCode: 200,
      durationMs: 10,
      responseHeaders: {
        'X-Chargebee-Telemetry': telemetryHeader,
      },
    });

    expect(attributes[TelemetryAttributeKeys.HTTP_RESPONSE_STATUS_CODE]).to.equal(
      200,
    );
    expect(attributes['http.response.header.x-chargebee-telemetry']).to.equal(
      telemetryHeader,
    );
    expect(attributes['chargebee.telemetry.cb.time_ms']).to.equal(3800);
  });

  it('should build request telemetry result with parsed response attributes', () => {
    const result = buildRequestTelemetryResult({
      httpStatusCode: 200,
      durationMs: 42,
      responseHeaders: {
        'X-Chargebee-Telemetry': 'cb;time_ms=99',
      },
    });

    expect(result.endAttributes['chargebee.telemetry.cb.time_ms']).to.equal(99);
    expect(result.endAttributes[TelemetryAttributeKeys.HTTP_RESPONSE_STATUS_CODE]).to.equal(
      200,
    );
  });
});
