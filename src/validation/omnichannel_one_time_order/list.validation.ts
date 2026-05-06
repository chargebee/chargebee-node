// Generated Zod validator: OmnichannelOneTimeOrder.list
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const listOmnichannelOneTimeOrderSourceSchema = z.object({
  is: z.enum(['apple_app_store', 'google_play_store']).optional(),
  is_not: z.enum(['apple_app_store', 'google_play_store']).optional(),
  in: z.enum(['apple_app_store', 'google_play_store']).optional(),
  not_in: z.enum(['apple_app_store', 'google_play_store']).optional(),
});
const listOmnichannelOneTimeOrderCustomerIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const listOmnichannelOneTimeOrderBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  source: listOmnichannelOneTimeOrderSourceSchema.optional(),
  customer_id: listOmnichannelOneTimeOrderCustomerIdSchema.optional(),
});
export { listOmnichannelOneTimeOrderBodySchema };
