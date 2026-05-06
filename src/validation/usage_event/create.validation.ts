// Generated Zod validator: UsageEvent.create
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const createUsageEventPropertiesSchema = z.looseObject({});
const createUsageEventBodySchema = z.looseObject({
  deduplication_id: z.string().max(36),
  subscription_id: z.string().max(50),
  usage_timestamp: z.number().int(),
  properties: createUsageEventPropertiesSchema,
});
export { createUsageEventBodySchema };
