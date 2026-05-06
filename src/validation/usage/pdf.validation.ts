// Generated Zod validator: Usage.pdf
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const pdfUsageInvoiceSchema = z.object({
  id: z.string().max(50),
});
const pdfUsageBodySchema = z.looseObject({
  disposition_type: z.enum(['attachment', 'inline']).optional(),
  invoice: pdfUsageInvoiceSchema.optional(),
});
export { pdfUsageBodySchema };
