// Generated Zod validator: InAppSubscription.importReceipt
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const importReceiptInAppSubscriptionProductSchema = z.object({
  currency_code: z.string().max(3),
});
const importReceiptInAppSubscriptionCustomerSchema = z.object({
  id: z.string().max(50).optional(),
  email: z.string().email().max(70).optional(),
});
const importReceiptInAppSubscriptionBodySchema = z.looseObject({
  receipt: z.string().max(65000),
  product: importReceiptInAppSubscriptionProductSchema.optional(),
  customer: importReceiptInAppSubscriptionCustomerSchema.optional(),
});
export { importReceiptInAppSubscriptionBodySchema };
