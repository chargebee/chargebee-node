// Generated Zod validator: Customer.deductPromotionalCredits
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const deductPromotionalCreditsCustomerBodySchema = z.looseObject({
  amount: z.number().int().min(1),
  currency_code: z.string().max(3).optional(),
  description: z.string().max(250),
  credit_type: z
    .enum(['loyalty_credits', 'referral_rewards', 'general'])
    .optional(),
  reference: z.string().max(500).optional(),
});
export { deductPromotionalCreditsCustomerBodySchema };
