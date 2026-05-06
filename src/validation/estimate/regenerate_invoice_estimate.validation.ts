// Generated Zod validator: Estimate.regenerateInvoiceEstimate
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const regenerateInvoiceEstimateEstimateBodySchema = z.looseObject({
  date_from: z.number().int().optional(),
  date_to: z.number().int().optional(),
  prorate: z.boolean().optional(),
  invoice_immediately: z.boolean().optional(),
});
export { regenerateInvoiceEstimateEstimateBodySchema };
