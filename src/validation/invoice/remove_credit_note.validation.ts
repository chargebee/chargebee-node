// Generated Zod validator: Invoice.removeCreditNote
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const removeCreditNoteInvoiceCreditNoteSchema = z.object({
  id: z.string().max(50),
});
const removeCreditNoteInvoiceBodySchema = z.looseObject({
  credit_note: removeCreditNoteInvoiceCreditNoteSchema.optional(),
});
export { removeCreditNoteInvoiceBodySchema };
