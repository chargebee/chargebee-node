// Generated Zod validator: Subscription.importContractTerm
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const importContractTermSubscriptionContractTermSchema = z.object({
  id: z.string().max(50).optional(),
  created_at: z.number().int().optional(),
  contract_start: z.number().int().optional(),
  contract_end: z.number().int().optional(),
  status: z.enum(['active', 'completed', 'cancelled', 'terminated']).optional(),
  total_amount_raised: z.number().int().min(0).optional(),
  total_amount_raised_before_tax: z.number().int().min(0).optional(),
  total_contract_value: z.number().int().min(0).optional(),
  total_contract_value_before_tax: z.number().int().min(0).optional(),
  billing_cycle: z.number().int().min(0).optional(),
  action_at_term_end: z
    .enum(['renew', 'evergreen', 'cancel', 'renew_once'])
    .optional(),
  cancellation_cutoff_period: z.number().int().optional(),
});
const importContractTermSubscriptionBodySchema = z.looseObject({
  contract_term_billing_cycle_on_renewal: z
    .number()
    .int()
    .min(1)
    .max(100)
    .optional(),
  contract_term: importContractTermSubscriptionContractTermSchema.optional(),
});
export { importContractTermSubscriptionBodySchema };
