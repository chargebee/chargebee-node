// Generated Zod schemas: OmnichannelSubscription
// Actions: list, omnichannel_transactionsForOmnichannelSubscription, move
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//OmnichannelSubscription.list

const ListOmnichannelSubscriptionSourceSchema = z.object({
  is: z.enum(['apple_app_store', 'google_play_store']).optional(),
  is_not: z.enum(['apple_app_store', 'google_play_store']).optional(),
  in: z.enum(['apple_app_store', 'google_play_store']).optional(),
  not_in: z.enum(['apple_app_store', 'google_play_store']).optional(),
});
const ListOmnichannelSubscriptionCustomerIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const ListOmnichannelSubscriptionStatusSchema = z.object({
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
const ListOmnichannelSubscriptionItemIdAtSourceSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const ListOmnichannelSubscriptionOmnichannelSubscriptionItemSchema = z.object({
  status: ListOmnichannelSubscriptionStatusSchema.optional(),
  item_id_at_source: ListOmnichannelSubscriptionItemIdAtSourceSchema.optional(),
});
const ListOmnichannelSubscriptionBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  source: ListOmnichannelSubscriptionSourceSchema.optional(),
  customer_id: ListOmnichannelSubscriptionCustomerIdSchema.optional(),
  omnichannel_subscription_item:
    ListOmnichannelSubscriptionOmnichannelSubscriptionItemSchema.optional(),
});
export { ListOmnichannelSubscriptionBodySchema };
export type ListOmnichannelSubscriptionBody = z.infer<
  typeof ListOmnichannelSubscriptionBodySchema
>;

//OmnichannelSubscription.omnichannel_transactionsForOmnichannelSubscription

const OmnichannelTransactionsforomnichannelsubscriptionOmnichannelSubscriptionBodySchema =
  z.looseObject({
    limit: z.number().int().min(1).max(100).optional(),
    offset: z.string().max(1000).optional(),
  });
export { OmnichannelTransactionsforomnichannelsubscriptionOmnichannelSubscriptionBodySchema };
export type OmnichannelTransactionsforomnichannelsubscriptionOmnichannelSubscriptionBody =
  z.infer<
    typeof OmnichannelTransactionsforomnichannelsubscriptionOmnichannelSubscriptionBodySchema
  >;

//OmnichannelSubscription.move

const MoveOmnichannelSubscriptionBodySchema = z.looseObject({
  to_customer_id: z.string().max(50),
});
export { MoveOmnichannelSubscriptionBodySchema };
export type MoveOmnichannelSubscriptionBody = z.infer<
  typeof MoveOmnichannelSubscriptionBodySchema
>;
