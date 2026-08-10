import { expect } from 'chai';
import {
  buildSdkTelemetryHeader,
  escapeSfString,
} from '../src/telemetry/sdkTelemetryHeaderBuilder.js';
import type { SdkTelemetrySnapshot } from '../src/telemetry/sdkTelemetrySnapshot.js';

function baseSnapshot(
  overrides: Partial<SdkTelemetrySnapshot> = {},
): SdkTelemetrySnapshot {
  return {
    sdkName: 'chargebee-node',
    sdkVersion: '3.30.0',
    resource: 'customer',
    operation: 'list',
    startTimeEpochSeconds: 1781280400,
    timeMs: 100,
    featureTokens: [],
    ...overrides,
  };
}

describe('sdkTelemetryHeaderBuilder', () => {
  it('should escape valid sf-string values', () => {
    expect(escapeSfString('hello')).to.equal('"hello"');
    expect(escapeSfString('say "hi"')).to.equal('"say \\"hi\\""');
    expect(escapeSfString('path\\to')).to.equal('"path\\\\to"');
  });

  it('should reject sf-string values containing CR, LF, or NUL', () => {
    expect(escapeSfString('bad\rvalue')).to.equal(undefined);
    expect(escapeSfString('bad\nvalue')).to.equal(undefined);
    expect(escapeSfString('bad\0value')).to.equal(undefined);
  });

  it('should omit invalid error_code while keeping the rest of the header', () => {
    const header = buildSdkTelemetryHeader(
      baseSnapshot({
        httpStatus: 404,
        errorCode: 'resource_not_found\rinjected',
      }),
    );

    expect(header).to.be.a('string');
    expect(header).to.include('http_status=404');
    expect(header).to.not.include('error_code=');
  });

  it('should omit the entire header when a required field contains invalid characters', () => {
    const header = buildSdkTelemetryHeader(
      baseSnapshot({
        sdkVersion: '3.30.0\0',
      }),
    );

    expect(header).to.equal(undefined);
  });

  it('should skip invalid feature tokens while keeping valid ones', () => {
    const header = buildSdkTelemetryHeader(
      baseSnapshot({
        featureTokens: [
          'ft-retry_config',
          'ft-bad\rinjected',
          'ft-telemetry_adapter',
          'ft-bad\0',
          'ft-bad\n',
        ],
      }),
    );

    expect(header).to.be.a('string');
    expect(header).to.include('ft-retry_config');
    expect(header).to.include('ft-telemetry_adapter');
    expect(header).to.not.include('ft-bad');
    expect(header).to.not.match(/\r|\n/);
  });
});
