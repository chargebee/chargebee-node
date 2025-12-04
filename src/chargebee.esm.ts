import { CreateChargebee } from './createChargebee.js';
import { FetchHttpClient } from './net/FetchClient.js';

const httpClient = new FetchHttpClient();
const Chargebee = CreateChargebee(httpClient);

export default Chargebee;

// Export webhook modules
export { WebhookHandler, EventType } from './resources/webhook/handler.js';
export { default as webhook } from './resources/webhook/handler.js';
export { basicAuthValidator } from './resources/webhook/auth.js';

// Export webhook types
export type { WebhookEvent } from './resources/webhook/content.js';
