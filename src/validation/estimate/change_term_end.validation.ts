// Generated Zod validator: Estimate.changeTermEnd
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const changeTermEndEstimateBodySchema = z.looseObject({
  term_ends_at: z.number().int(),
  prorate: z.boolean().optional(),
  invoice_immediately: z.boolean().optional(),
});
export { changeTermEndEstimateBodySchema };
