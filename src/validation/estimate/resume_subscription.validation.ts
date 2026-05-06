// Generated Zod validator: Estimate.resumeSubscription
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const resumeSubscriptionEstimateSubscriptionSchema = z.object({
  resume_date: z.number().int().optional(),
});
const resumeSubscriptionEstimateBodySchema = z.looseObject({
  resume_option: z.enum(['immediately', 'specific_date']).optional(),
  charges_handling: z
    .enum(['invoice_immediately', 'add_to_unbilled_charges'])
    .optional(),
  subscription: resumeSubscriptionEstimateSubscriptionSchema.optional(),
});
export { resumeSubscriptionEstimateBodySchema };
