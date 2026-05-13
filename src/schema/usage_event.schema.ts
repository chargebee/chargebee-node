// Generated Zod schemas: UsageEvent
// Actions: create, batchIngest
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//UsageEvent.create

const CreateUsageEventPropertiesSchema = z.looseObject({});
const CreateUsageEventBodySchema = z.looseObject({
  deduplication_id: z.string().max(36),
  subscription_id: z.string().max(50),
  usage_timestamp: z.number().int(),
  properties: CreateUsageEventPropertiesSchema,
});
export { CreateUsageEventBodySchema };
export type CreateUsageEventBody = z.infer<typeof CreateUsageEventBodySchema>;

//UsageEvent.batchIngest

const BatchIngestUsageEventPropertiesItemSchema = z.looseObject({});
const BatchIngestUsageEventEventsSchema = z.object({
  deduplication_id: z.array(z.string().max(36).optional()),
  subscription_id: z.array(z.string().max(50).optional()),
  usage_timestamp: z.array(z.number().int().optional()),
  properties: z.array(BatchIngestUsageEventPropertiesItemSchema.optional()),
});
const BatchIngestUsageEventBodySchema = z.looseObject({
  events: BatchIngestUsageEventEventsSchema.optional(),
});
export { BatchIngestUsageEventBodySchema };
export type BatchIngestUsageEventBody = z.infer<
  typeof BatchIngestUsageEventBodySchema
>;
