// Generated Zod validator: HostedPage.events
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const eventsHostedPageEventDataSchema = z.looseObject({});
const eventsHostedPageBodySchema = z.looseObject({
  event_name: z.enum(['cancellation_page_loaded']),
  occurred_at: z.number().int().optional(),
  event_data: eventsHostedPageEventDataSchema,
});
export { eventsHostedPageBodySchema };
