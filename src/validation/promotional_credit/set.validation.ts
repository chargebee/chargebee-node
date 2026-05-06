// Generated Zod validator: PromotionalCredit.set
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const setPromotionalCreditBodySchema = z.looseObject({
  customer_id: z.string().max(50),
  amount: z.number().int().min(0).optional(),
  amount_in_decimal: z.string().max(33).optional(),
  currency_code: z.string().max(3).optional(),
  description: z.string().max(250),
  credit_type: z
    .enum(['loyalty_credits', 'referral_rewards', 'general'])
    .optional(),
  reference: z.string().max(500).optional(),
});
export { setPromotionalCreditBodySchema };
