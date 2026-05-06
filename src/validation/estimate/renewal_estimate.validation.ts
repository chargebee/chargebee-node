// Generated Zod validator: Estimate.renewalEstimate
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const renewalEstimateEstimateBodySchema = z.looseObject({
  include_delayed_charges: z.boolean().default(true).optional(),
  use_existing_balances: z.boolean().default(true).optional(),
  ignore_scheduled_cancellation: z.boolean().default(false).optional(),
  ignore_scheduled_changes: z.boolean().default(false).optional(),
  exclude_tax_type: z.enum(['exclusive', 'none']).optional(),
});
export { renewalEstimateEstimateBodySchema };
