// Generated Zod validator: Subscription.removeScheduledCancellation
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const removeScheduledCancellationSubscriptionContractTermSchema = z.object({
  action_at_term_end: z.enum(['renew', 'evergreen', 'cancel']).optional(),
  cancellation_cutoff_period: z.number().int().optional(),
});
const removeScheduledCancellationSubscriptionBodySchema = z.looseObject({
  billing_cycles: z.number().int().min(0).optional(),
  contract_term_billing_cycle_on_renewal: z
    .number()
    .int()
    .min(1)
    .max(100)
    .optional(),
  contract_term:
    removeScheduledCancellationSubscriptionContractTermSchema.optional(),
});
export { removeScheduledCancellationSubscriptionBodySchema };
