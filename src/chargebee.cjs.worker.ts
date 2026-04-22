import { CreateChargebee } from './createChargebee.js';
import { FetchHttpClient } from './net/FetchClient.js';

const httpClient = new FetchHttpClient();
const Chargebee = CreateChargebee(httpClient);
module.exports = Chargebee;
module.exports.Chargebee = Chargebee;
module.exports.default = Chargebee;

// Export webhook utilities
export {
  WebhookEventType,
  WebhookContentType,
} from './resources/webhook/handler.js';
export { basicAuthValidator } from './resources/webhook/auth.js';
export {
  WebhookError,
  WebhookAuthenticationError,
  WebhookPayloadValidationError,
  WebhookPayloadParseError,
} from './resources/webhook/handler.js';

// Export webhook types
export type {
  WebhookEvent,
  WebhookContext,
  WebhookHandlerOptions,
  HandleOptions,
  RequestValidator,
} from './resources/webhook/handler.js';
export type { CredentialValidator } from './resources/webhook/auth.js';
