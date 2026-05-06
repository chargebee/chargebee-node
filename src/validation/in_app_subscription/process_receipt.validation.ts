// Generated Zod validator: InAppSubscription.processReceipt
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const processReceiptInAppSubscriptionProductSchema = z.object({
  id: z.string().max(96),
  currency_code: z.string().max(3),
  price: z.number().int().min(0),
  name: z.string().max(46).optional(),
  price_in_decimal: z.string().max(39).optional(),
  period: z.string().max(3).optional(),
  period_unit: z.string().max(3).optional(),
});
const processReceiptInAppSubscriptionCustomerSchema = z.object({
  id: z.string().max(50).optional(),
  email: z.string().email().max(70).optional(),
  first_name: z.string().max(150).optional(),
  last_name: z.string().max(150).optional(),
});
const processReceiptInAppSubscriptionBodySchema = z.looseObject({
  receipt: z.string().max(65000),
  product: processReceiptInAppSubscriptionProductSchema.optional(),
  customer: processReceiptInAppSubscriptionCustomerSchema.optional(),
});
export { processReceiptInAppSubscriptionBodySchema };
