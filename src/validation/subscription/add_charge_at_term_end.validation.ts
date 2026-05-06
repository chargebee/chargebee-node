// Generated Zod validator: Subscription.addChargeAtTermEnd
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const addChargeAtTermEndSubscriptionBodySchema = z.looseObject({
  amount: z.number().int().min(1).optional(),
  description: z.string().max(250),
  amount_in_decimal: z.string().max(39).optional(),
  avalara_sale_type: z
    .enum(['wholesale', 'retail', 'consumed', 'vendor_use'])
    .optional(),
  avalara_transaction_type: z.number().int().optional(),
  avalara_service_type: z.number().int().optional(),
  date_from: z.number().int().optional(),
  date_to: z.number().int().optional(),
});
export { addChargeAtTermEndSubscriptionBodySchema };
