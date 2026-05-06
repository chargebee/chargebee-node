// Generated Zod validator: Invoice.pauseDunning
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const pauseDunningInvoiceBodySchema = z.looseObject({
  expected_payment_date: z.number().int(),
  comment: z.string().max(300).optional(),
});
export { pauseDunningInvoiceBodySchema };
