// Generated Zod validator: RecordedPurchase.create
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const createRecordedPurchaseCustomerSchema = z.object({
  id: z.string().max(50),
});
const createRecordedPurchaseAppleAppStoreSchema = z.object({
  transaction_id: z.string().max(100).optional(),
  receipt: z.string().max(65000).optional(),
  product_id: z.string().max(255).optional(),
});
const createRecordedPurchaseGooglePlayStoreSchema = z.object({
  purchase_token: z.string().max(500).optional(),
  product_id: z.string().max(255).optional(),
  order_id: z.string().max(100).optional(),
});
const createRecordedPurchaseOmnichannelSubscriptionSchema = z.object({
  id: z.string().max(50).optional(),
});
const createRecordedPurchaseBodySchema = z.looseObject({
  app_id: z.string().max(100),
  customer: createRecordedPurchaseCustomerSchema.optional(),
  apple_app_store: createRecordedPurchaseAppleAppStoreSchema.optional(),
  google_play_store: createRecordedPurchaseGooglePlayStoreSchema.optional(),
  omnichannel_subscription:
    createRecordedPurchaseOmnichannelSubscriptionSchema.optional(),
});
export { createRecordedPurchaseBodySchema };
