// Generated Zod validator: CreditNote.delete
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const deleteCreditNoteBodySchema = z.looseObject({
  comment: z.string().max(300).optional(),
});
export { deleteCreditNoteBodySchema };
