import { expect } from 'chai';
import { buildSdkTelemetryHeader } from '../src/telemetry/sdkTelemetryHeaderBuilder.js';
import { SdkTelemetryFeature } from '../src/telemetry/sdkTelemetryFeature.js';

describe('sdkTelemetryHeaderBuilder', () => {
  it('should serialize features under the f key', () => {
    const header = buildSdkTelemetryHeader([
      SdkTelemetryFeature.TELEMETRY_ADAPTER,
      SdkTelemetryFeature.CUSTOM_TRANSPORT,
    ]);

    expect(header).to.equal('f;ta;ct');
  });

  it('should return undefined when no features are enabled', () => {
    expect(buildSdkTelemetryHeader([])).to.equal(undefined);
    expect(buildSdkTelemetryHeader(undefined)).to.equal(undefined);
  });

  it('should serialize all feature codes in enum order', () => {
    const header = buildSdkTelemetryHeader([
      SdkTelemetryFeature.TELEMETRY_ADAPTER,
      SdkTelemetryFeature.CUSTOM_TRANSPORT,
      SdkTelemetryFeature.RETRY_CONFIG,
    ]);

    expect(header).to.equal('f;ta;ct;rc');
  });

  it('should serialize a single feature', () => {
    expect(buildSdkTelemetryHeader([SdkTelemetryFeature.RETRY_CONFIG])).to.equal(
      'f;rc',
    );
  });
});
