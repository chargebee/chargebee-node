// Generated Zod schemas: OmnichannelOneTimeOrder
// Actions: list
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//OmnichannelOneTimeOrder.list

const ListOmnichannelOneTimeOrderSourceSchema = z.object({
  is: z.enum(['apple_app_store', 'google_play_store']).optional(),
  is_not: z.enum(['apple_app_store', 'google_play_store']).optional(),
  in: z.enum(['apple_app_store', 'google_play_store']).optional(),
  not_in: z.enum(['apple_app_store', 'google_play_store']).optional(),
});
const ListOmnichannelOneTimeOrderCustomerIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const ListOmnichannelOneTimeOrderBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  source: ListOmnichannelOneTimeOrderSourceSchema.optional(),
  customer_id: ListOmnichannelOneTimeOrderCustomerIdSchema.optional(),
});
export { ListOmnichannelOneTimeOrderBodySchema };
export type ListOmnichannelOneTimeOrderBody = z.infer<
  typeof ListOmnichannelOneTimeOrderBodySchema
>;
