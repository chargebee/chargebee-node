// Generated Zod validator: Estimate.upcomingInvoicesEstimate
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const upcomingInvoicesEstimateEstimateBodySchema = z.looseObject({
  include_usage_charges: z.boolean().default(false).optional(),
});
export { upcomingInvoicesEstimateEstimateBodySchema };
