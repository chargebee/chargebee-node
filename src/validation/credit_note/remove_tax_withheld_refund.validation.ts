// Generated Zod validator: CreditNote.removeTaxWithheldRefund
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const removeTaxWithheldRefundCreditNoteTaxWithheldSchema = z.object({
  id: z.string().max(40),
});
const removeTaxWithheldRefundCreditNoteBodySchema = z.looseObject({
  tax_withheld: removeTaxWithheldRefundCreditNoteTaxWithheldSchema.optional(),
});
export { removeTaxWithheldRefundCreditNoteBodySchema };
