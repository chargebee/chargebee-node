declare module 'chargebee/telemetry/otel' {
  import type {
    RequestTelemetryContext,
    RequestTelemetryResult,
    TelemetryAdapter,
  } from 'chargebee';
  /**
   * Ready-to-use OpenTelemetry adapter for the Chargebee SDK. Exporting is
   * configured by your own OpenTelemetry runtime via the standard `OTEL_*`
   * environment variables; this adapter only uses the globally registered
   * tracer from `@opentelemetry/api` (an optional peer dependency).
   */
  export class OtelTelemetryAdapter implements TelemetryAdapter {
    onRequestStart(
      ctx: RequestTelemetryContext,
      requestHeaders: Record<string, string | number>,
    ): unknown;
    onRequestEnd(handle: unknown, result: RequestTelemetryResult): void;
  }
  const otelDefaultAdapter: OtelTelemetryAdapter;
  export default otelDefaultAdapter;
}
