// Generated Zod validator: Invoice.voidInvoice
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const voidInvoiceInvoiceBodySchema = z.looseObject({
  comment: z.string().max(300).optional(),
  void_reason_code: z.string().max(100).optional(),
});
export { voidInvoiceInvoiceBodySchema };
