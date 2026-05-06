// Generated Zod validator: Subscription.pause
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const pauseSubscriptionBodySchema = z.looseObject({
  pause_option: z
    .enum(['immediately', 'end_of_term', 'specific_date', 'billing_cycles'])
    .optional(),
  pause_date: z.number().int().optional(),
  unbilled_charges_handling: z.enum(['no_action', 'invoice']).optional(),
  invoice_dunning_handling: z.enum(['continue', 'stop']).optional(),
  skip_billing_cycles: z.number().int().min(1).optional(),
  resume_date: z.number().int().optional(),
});
export { pauseSubscriptionBodySchema };
