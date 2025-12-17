import { CreateChargebee } from './createChargebee.js';
import { FetchHttpClient } from './net/FetchClient.js';
import {
  WebhookHandler,
  WebhookEventType,
  WebhookContentType,
} from './resources/webhook/handler.js';
import webhookInstance from './resources/webhook/handler.js';
import { basicAuthValidator } from './resources/webhook/auth.js';

const httpClient = new FetchHttpClient();
const Chargebee = CreateChargebee(httpClient);
module.exports = Chargebee;
module.exports.Chargebee = Chargebee;
module.exports.default = Chargebee;

// Export webhook modules
module.exports.WebhookHandler = WebhookHandler;
module.exports.WebhookEventType = WebhookEventType;
module.exports.WebhookContentType = WebhookContentType;
module.exports.webhook = webhookInstance;
module.exports.basicAuthValidator = basicAuthValidator;

// Export webhook types
export type { WebhookEvent } from './resources/webhook/content.js';
