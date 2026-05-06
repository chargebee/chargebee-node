// Generated Zod validator: Invoice.pdf
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const pdfInvoiceBodySchema = z.looseObject({
  disposition_type: z.enum(['attachment', 'inline']).optional(),
});
export { pdfInvoiceBodySchema };
