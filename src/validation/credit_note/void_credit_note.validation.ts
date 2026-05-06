// Generated Zod validator: CreditNote.voidCreditNote
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const voidCreditNoteCreditNoteBodySchema = z.looseObject({
  comment: z.string().max(300).optional(),
});
export { voidCreditNoteCreditNoteBodySchema };
