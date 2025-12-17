import { CreateChargebee } from './createChargebee.js';
import { FetchHttpClient } from './net/FetchClient.js';
import {
  WebhookEventType,
  WebhookContentType,
} from './resources/webhook/eventType.js';

const httpClient = new FetchHttpClient();
const Chargebee = CreateChargebee(httpClient);
module.exports = Chargebee;
module.exports.Chargebee = Chargebee;
module.exports.default = Chargebee;

// Export webhook event types
module.exports.WebhookEventType = WebhookEventType;
module.exports.WebhookContentType = WebhookContentType;
