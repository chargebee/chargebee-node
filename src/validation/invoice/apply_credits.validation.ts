// Generated Zod validator: Invoice.applyCredits
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const applyCreditsInvoiceCreditNotesSchema = z.object({
  id: z.array(z.string().max(50).optional()).optional(),
});
const applyCreditsInvoiceBodySchema = z.looseObject({
  comment: z.string().max(300).optional(),
  credit_notes: applyCreditsInvoiceCreditNotesSchema.optional(),
});
export { applyCreditsInvoiceBodySchema };
