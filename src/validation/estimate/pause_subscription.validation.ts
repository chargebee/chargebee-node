// Generated Zod validator: Estimate.pauseSubscription
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const pauseSubscriptionEstimateSubscriptionSchema = z.object({
  pause_date: z.number().int().optional(),
  resume_date: z.number().int().optional(),
  skip_billing_cycles: z.number().int().min(1).optional(),
});
const pauseSubscriptionEstimateBodySchema = z.looseObject({
  pause_option: z
    .enum(['immediately', 'end_of_term', 'specific_date', 'billing_cycles'])
    .optional(),
  unbilled_charges_handling: z.enum(['no_action', 'invoice']).optional(),
  subscription: pauseSubscriptionEstimateSubscriptionSchema.optional(),
});
export { pauseSubscriptionEstimateBodySchema };
