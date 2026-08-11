/// <reference path="../types/index.d.ts" />
import { expect } from 'chai';
import * as entryPoint from '../src/chargebee.esm.js';
import {
  CHARGEBEE_TELEMETRY_PREFER_HEADER,
  CHARGEBEE_TELEMETRY_PREFER_VALUE,
  TelemetryAttributeKeys,
} from '../src/chargebee.esm.js';
import type {
  RequestTelemetryContext as SrcRequestTelemetryContext,
  RequestTelemetryResult as SrcRequestTelemetryResult,
} from '../src/telemetry/types.js';

// `types/index.d.ts` is hand-maintained and not covered by the src build, so the checks
// below compare it against the real entry point. They are compile-time assertions: a
// mismatch fails `npm test` before any assertion runs.
type Declared = typeof import('chargebee');

type ExpectExtends<Super, Sub extends Super> = Sub;

// `keyof` on an ambient module namespace collapses to `string`, so the export surface
// cannot be diffed generically. Each value export is named here instead, which fails to
// compile when a declaration is missing, and the runtime test below keeps the list
// exhaustive by asserting the entry point exposes exactly these names.
const declaredValueExports = [
  'CHARGEBEE_TELEMETRY_PREFER_HEADER',
  'CHARGEBEE_TELEMETRY_PREFER_VALUE',
  'ChargebeeZodValidationError',
  'TelemetryAttributeKeys',
  'WebhookAuthenticationError',
  'WebhookContentType',
  'WebhookError',
  'WebhookEventType',
  'WebhookPayloadParseError',
  'WebhookPayloadValidationError',
  'basicAuthValidator',
  'default',
] as const;

type _EveryRuntimeExportIsDeclared = [
  Declared['CHARGEBEE_TELEMETRY_PREFER_HEADER'],
  Declared['CHARGEBEE_TELEMETRY_PREFER_VALUE'],
  Declared['ChargebeeZodValidationError'],
  Declared['TelemetryAttributeKeys'],
  Declared['WebhookAuthenticationError'],
  Declared['WebhookContentType'],
  Declared['WebhookError'],
  Declared['WebhookEventType'],
  Declared['WebhookPayloadParseError'],
  Declared['WebhookPayloadValidationError'],
  Declared['basicAuthValidator'],
  Declared['default'],
];

// Telemetry payloads the SDK hands to adapters must be fully representable by the
// declared types, including every attribute value type the parser can emit.
type _ContextIsRepresentable = ExpectExtends<
  import('chargebee').RequestTelemetryContext,
  SrcRequestTelemetryContext
>;
type _ResultIsRepresentable = ExpectExtends<
  import('chargebee').RequestTelemetryResult,
  SrcRequestTelemetryResult
>;

// Response headers stay readable from the declared result type.
type _ResponseHeadersAreReadable = ExpectExtends<
  import('chargebee').RequestTelemetryResult['responseHeaders'],
  SrcRequestTelemetryResult['responseHeaders']
>;

// Constants resolved from the declarations, so these fail if either goes missing or
// drifts from its literal value.
type DeclaredPreferHeader = Declared['CHARGEBEE_TELEMETRY_PREFER_HEADER'];
type DeclaredPreferValue = Declared['CHARGEBEE_TELEMETRY_PREFER_VALUE'];

describe('Chargebee public type declarations', () => {
  it('should declare every value exported from the package entry point', () => {
    expect(Object.keys(entryPoint).sort()).to.deep.equal(
      [...declaredValueExports].sort(),
    );
  });

  it('should declare telemetry Prefer constants with literal types', () => {
    const header: DeclaredPreferHeader = CHARGEBEE_TELEMETRY_PREFER_HEADER;
    const value: DeclaredPreferValue = CHARGEBEE_TELEMETRY_PREFER_VALUE;

    expect(header).to.equal('Prefer');
    expect(value).to.equal('chargebee-telemetry=include');
  });

  it('should declare TelemetryAttributeKeys with the same keys and values as runtime', () => {
    const declared: Declared['TelemetryAttributeKeys'] = TelemetryAttributeKeys;

    expect(declared).to.deep.equal(TelemetryAttributeKeys);
    expect(Object.keys(declared).sort()).to.deep.equal(
      Object.keys(TelemetryAttributeKeys).sort(),
    );
  });

  it('should accept telemetry options on the declared Config type', () => {
    const config: import('chargebee').Config = {
      apiKey: 'test-api-key',
      site: 'test-site',
      preferChargebeeTelemetry: true,
      telemetryAdapter: {
        onRequestStart: () => 'span-1',
        onRequestEnd: () => {},
      },
    };

    expect(config.preferChargebeeTelemetry).to.equal(true);
  });

  it('should let adapters read every telemetry attribute value type', () => {
    const result: import('chargebee').RequestTelemetryResult = {
      httpStatusCode: 200,
      durationMs: 12,
      endAttributes: {
        'chargebee.telemetry.cb.time_ms': 3800,
        'chargebee.telemetry.tp.stripe.pm': 'card',
        'chargebee.telemetry.cb.enabled': true,
        'chargebee.telemetry.features': ['account_hierarchy'],
      },
    };

    expect(result.endAttributes['chargebee.telemetry.features']).to.deep.equal([
      'account_hierarchy',
    ]);
  });
});
