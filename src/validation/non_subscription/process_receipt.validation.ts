// Generated Zod validator: NonSubscription.processReceipt
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const processReceiptNonSubscriptionProductSchema = z.object({
  id: z.string().max(96),
  currency_code: z.string().max(3),
  price: z.number().int().min(0),
  type: z.enum(['consumable', 'non_consumable', 'non_renewing_subscription']),
  name: z.string().max(96).optional(),
  price_in_decimal: z.string().max(39).optional(),
});
const processReceiptNonSubscriptionCustomerSchema = z.object({
  id: z.string().max(50).optional(),
  email: z.string().email().max(70).optional(),
  first_name: z.string().max(150).optional(),
  last_name: z.string().max(150).optional(),
});
const processReceiptNonSubscriptionBodySchema = z.looseObject({
  receipt: z.string().max(65000),
  product: processReceiptNonSubscriptionProductSchema.optional(),
  customer: processReceiptNonSubscriptionCustomerSchema.optional(),
});
export { processReceiptNonSubscriptionBodySchema };
