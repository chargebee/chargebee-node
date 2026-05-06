// Generated Zod validator: OmnichannelSubscription.list
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const listOmnichannelSubscriptionSourceSchema = z.object({
  is: z.enum(['apple_app_store', 'google_play_store']).optional(),
  is_not: z.enum(['apple_app_store', 'google_play_store']).optional(),
  in: z.enum(['apple_app_store', 'google_play_store']).optional(),
  not_in: z.enum(['apple_app_store', 'google_play_store']).optional(),
});
const listOmnichannelSubscriptionCustomerIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const listOmnichannelSubscriptionStatusSchema = z.object({
  is: z
    .enum([
      'active',
      'expired',
      'cancelled',
      'in_dunning',
      'in_grace_period',
      'paused',
    ])
    .optional(),
  is_not: z
    .enum([
      'active',
      'expired',
      'cancelled',
      'in_dunning',
      'in_grace_period',
      'paused',
    ])
    .optional(),
  in: z
    .enum([
      'active',
      'expired',
      'cancelled',
      'in_dunning',
      'in_grace_period',
      'paused',
    ])
    .optional(),
  not_in: z
    .enum([
      'active',
      'expired',
      'cancelled',
      'in_dunning',
      'in_grace_period',
      'paused',
    ])
    .optional(),
});
const listOmnichannelSubscriptionItemIdAtSourceSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const listOmnichannelSubscriptionOmnichannelSubscriptionItemSchema = z.object({
  status: listOmnichannelSubscriptionStatusSchema.optional(),
  item_id_at_source: listOmnichannelSubscriptionItemIdAtSourceSchema.optional(),
});
const listOmnichannelSubscriptionBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  source: listOmnichannelSubscriptionSourceSchema.optional(),
  customer_id: listOmnichannelSubscriptionCustomerIdSchema.optional(),
  omnichannel_subscription_item:
    listOmnichannelSubscriptionOmnichannelSubscriptionItemSchema.optional(),
});
export { listOmnichannelSubscriptionBodySchema };
