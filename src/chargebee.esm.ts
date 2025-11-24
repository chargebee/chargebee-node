import { CreateChargebee } from './createChargebee.js';
import { FetchHttpClient } from './net/FetchClient.js';

const httpClient = new FetchHttpClient();
const Chargebee = CreateChargebee(httpClient);

export default Chargebee;

// Export webhook modules - runtime exports
export { WebhookHandler } from './resources/webhook/handler.js';
export { basicAuthValidator } from './resources/webhook/auth.js';

// Export webhook types only (no runtime impact)
export type * from './resources/webhook/content.js';
export type * from './resources/webhook/event_types.js';
