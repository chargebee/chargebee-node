// Generated Zod schemas: RecordedPurchase
// Actions: create
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//RecordedPurchase.create

const CreateRecordedPurchaseCustomerSchema = z.object({
  id: z.string().max(50),
});
const CreateRecordedPurchaseAppleAppStoreSchema = z.object({
  transaction_id: z.string().max(100).optional(),
  receipt: z.string().max(65000).optional(),
  product_id: z.string().max(255).optional(),
});
const CreateRecordedPurchaseGooglePlayStoreSchema = z.object({
  purchase_token: z.string().max(500).optional(),
  product_id: z.string().max(255).optional(),
  order_id: z.string().max(100).optional(),
});
const CreateRecordedPurchaseOmnichannelSubscriptionSchema = z.object({
  id: z.string().max(50).optional(),
});
const CreateRecordedPurchaseBodySchema = z.looseObject({
  app_id: z.string().max(100),
  customer: CreateRecordedPurchaseCustomerSchema.optional(),
  apple_app_store: CreateRecordedPurchaseAppleAppStoreSchema.optional(),
  google_play_store: CreateRecordedPurchaseGooglePlayStoreSchema.optional(),
  omnichannel_subscription:
    CreateRecordedPurchaseOmnichannelSubscriptionSchema.optional(),
});
export { CreateRecordedPurchaseBodySchema };
export type CreateRecordedPurchaseBody = z.infer<
  typeof CreateRecordedPurchaseBodySchema
>;
