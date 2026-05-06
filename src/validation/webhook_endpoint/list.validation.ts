// Generated Zod validator: WebhookEndpoint.list
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const listWebhookEndpointBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
});
export { listWebhookEndpointBodySchema };
