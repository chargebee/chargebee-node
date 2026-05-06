// Generated Zod validator: InAppSubscription.importSubscription
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const importSubscriptionInAppSubscriptionSubscriptionSchema = z.object({
  id: z.string().max(50),
  started_at: z.number().int(),
  term_start: z.number().int(),
  term_end: z.number().int(),
  product_id: z.string().max(96),
  currency_code: z.string().max(3),
  transaction_id: z.string().max(43),
  is_trial: z.boolean().default(false).optional(),
});
const importSubscriptionInAppSubscriptionCustomerSchema = z.object({
  id: z.string().max(50).optional(),
  email: z.string().email().max(70).optional(),
});
const importSubscriptionInAppSubscriptionBodySchema = z.looseObject({
  subscription:
    importSubscriptionInAppSubscriptionSubscriptionSchema.optional(),
  customer: importSubscriptionInAppSubscriptionCustomerSchema.optional(),
});
export { importSubscriptionInAppSubscriptionBodySchema };
