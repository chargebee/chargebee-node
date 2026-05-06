// Generated Zod validator: Invoice.resumeDunning
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const resumeDunningInvoiceBodySchema = z.looseObject({
  comment: z.string().max(300).optional(),
});
export { resumeDunningInvoiceBodySchema };
