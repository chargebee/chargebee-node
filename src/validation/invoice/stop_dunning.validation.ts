// Generated Zod validator: Invoice.stopDunning
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const stopDunningInvoiceBodySchema = z.looseObject({
  comment: z.string().max(300).optional(),
});
export { stopDunningInvoiceBodySchema };
