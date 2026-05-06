// Generated Zod validator: UsageEvent.batchIngest
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const batchIngestUsageEventPropertiesItemSchema = z.looseObject({});
const batchIngestUsageEventEventsSchema = z.object({
  deduplication_id: z.array(z.string().max(36).optional()),
  subscription_id: z.array(z.string().max(50).optional()),
  usage_timestamp: z.array(z.number().int().optional()),
  properties: z.array(batchIngestUsageEventPropertiesItemSchema.optional()),
});
const batchIngestUsageEventBodySchema = z.looseObject({
  events: batchIngestUsageEventEventsSchema.optional(),
});
export { batchIngestUsageEventBodySchema };
