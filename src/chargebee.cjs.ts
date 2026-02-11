import { CreateChargebee } from './createChargebee.js';
import { FetchHttpClient } from './net/FetchClient.js';
import {
  WebhookEventType,
  WebhookContentType,
  WebhookError,
  AuthenticationError,
  PayloadValidationError,
  PayloadParseError,
} from './resources/webhook/handler.js';
import { basicAuthValidator } from './resources/webhook/auth.js';

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
module.exports.AuthenticationError = AuthenticationError;
module.exports.PayloadValidationError = PayloadValidationError;
module.exports.PayloadParseError = PayloadParseError;

// Export webhook types
export type {
  WebhookEvent,
  WebhookContext,
  WebhookHandlerOptions,
  HandleOptions,
  RequestValidator,
} from './resources/webhook/handler.js';
export type { CredentialValidator } from './resources/webhook/auth.js';
