// Generated Zod schemas: InAppSubscription
// Actions: processReceipt, importReceipt, importSubscription, retrieveStoreSubs
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//InAppSubscription.processReceipt

const ProcessReceiptInAppSubscriptionProductSchema = z.object({
  id: z.string().max(96),
  currency_code: z.string().max(3),
  price: z.number().int().min(0),
  name: z.string().max(46).optional(),
  price_in_decimal: z.string().max(39).optional(),
  period: z.string().max(3).optional(),
  period_unit: z.string().max(3).optional(),
});
const ProcessReceiptInAppSubscriptionCustomerSchema = z.object({
  id: z.string().max(50).optional(),
  email: z.string().email().max(70).optional(),
  first_name: z.string().max(150).optional(),
  last_name: z.string().max(150).optional(),
});
const ProcessReceiptInAppSubscriptionBodySchema = z.looseObject({
  receipt: z.string().max(65000),
  product: ProcessReceiptInAppSubscriptionProductSchema.optional(),
  customer: ProcessReceiptInAppSubscriptionCustomerSchema.optional(),
});
export { ProcessReceiptInAppSubscriptionBodySchema };
export type ProcessReceiptInAppSubscriptionBody = z.infer<
  typeof ProcessReceiptInAppSubscriptionBodySchema
>;

//InAppSubscription.importReceipt

const ImportReceiptInAppSubscriptionProductSchema = z.object({
  currency_code: z.string().max(3),
});
const ImportReceiptInAppSubscriptionCustomerSchema = z.object({
  id: z.string().max(50).optional(),
  email: z.string().email().max(70).optional(),
});
const ImportReceiptInAppSubscriptionBodySchema = z.looseObject({
  receipt: z.string().max(65000),
  product: ImportReceiptInAppSubscriptionProductSchema.optional(),
  customer: ImportReceiptInAppSubscriptionCustomerSchema.optional(),
});
export { ImportReceiptInAppSubscriptionBodySchema };
export type ImportReceiptInAppSubscriptionBody = z.infer<
  typeof ImportReceiptInAppSubscriptionBodySchema
>;

//InAppSubscription.importSubscription

const ImportSubscriptionInAppSubscriptionSubscriptionSchema = z.object({
  id: z.string().max(50),
  started_at: z.number().int(),
  term_start: z.number().int(),
  term_end: z.number().int(),
  product_id: z.string().max(96),
  currency_code: z.string().max(3),
  transaction_id: z.string().max(43),
  is_trial: z.boolean().default(false).optional(),
});
const ImportSubscriptionInAppSubscriptionCustomerSchema = z.object({
  id: z.string().max(50).optional(),
  email: z.string().email().max(70).optional(),
});
const ImportSubscriptionInAppSubscriptionBodySchema = z.looseObject({
  subscription:
    ImportSubscriptionInAppSubscriptionSubscriptionSchema.optional(),
  customer: ImportSubscriptionInAppSubscriptionCustomerSchema.optional(),
});
export { ImportSubscriptionInAppSubscriptionBodySchema };
export type ImportSubscriptionInAppSubscriptionBody = z.infer<
  typeof ImportSubscriptionInAppSubscriptionBodySchema
>;

//InAppSubscription.retrieveStoreSubs

const RetrieveStoreSubsInAppSubscriptionBodySchema = z.looseObject({
  receipt: z.string().max(65000),
});
export { RetrieveStoreSubsInAppSubscriptionBodySchema };
export type RetrieveStoreSubsInAppSubscriptionBody = z.infer<
  typeof RetrieveStoreSubsInAppSubscriptionBodySchema
>;
