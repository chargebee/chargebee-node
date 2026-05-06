// Generated Zod validator: Invoice.delete
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const deleteInvoiceBodySchema = z.looseObject({
  comment: z.string().max(300).optional(),
});
export { deleteInvoiceBodySchema };
