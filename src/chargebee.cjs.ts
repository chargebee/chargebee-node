import { CreateChargebee } from './createChargebee.js';
import { FetchHttpClient } from './net/FetchClient.js';
import {
  WebhookEventType,
  WebhookContentType,
  WebhookError,
  WebhookAuthenticationError,
  WebhookPayloadValidationError,
  WebhookPayloadParseError,
} from './resources/webhook/handler.js';
import { basicAuthValidator } from './resources/webhook/auth.js';
import { ChargebeeZodValidationError } from './chargebeeZodValidationError.js';
import {
  TelemetryAttributeKeys,
  SDK_TELEMETRY_HEADER_NAME,
} from './telemetry/index.js';

const httpClient = new FetchHttpClient();
const Chargebee = CreateChargebee(httpClient);
module.exports = Chargebee;
module.exports.Chargebee = Chargebee;
module.exports.default = Chargebee;

// Export webhook utilities
module.exports.WebhookEventType = WebhookEventType;
module.exports.WebhookContentType = WebhookContentType;
module.exports.basicAuthValidator = basicAuthValidator;

// Export webhook error classes
module.exports.WebhookError = WebhookError;
module.exports.WebhookAuthenticationError = WebhookAuthenticationError;
module.exports.WebhookPayloadValidationError = WebhookPayloadValidationError;
module.exports.WebhookPayloadParseError = WebhookPayloadParseError;
module.exports.TelemetryAttributeKeys = TelemetryAttributeKeys;
module.exports.SDK_TELEMETRY_HEADER_NAME = SDK_TELEMETRY_HEADER_NAME;

// Export validation error class
module.exports.ChargebeeZodValidationError = ChargebeeZodValidationError;

// Export webhook types
export type {
  WebhookEvent,
  WebhookContext,
  WebhookHandlerOptions,
  HandleOptions,
  RequestValidator,
} from './resources/webhook/handler.js';
export type { CredentialValidator } from './resources/webhook/auth.js';

// Export telemetry types
export type {
  TelemetryAdapter,
  RequestTelemetryContext,
  RequestTelemetryResult,
  RequestTelemetryError,
  RequestTelemetryHandle,
} from './telemetry/index.js';
