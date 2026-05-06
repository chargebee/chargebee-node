// Generated Zod validator: CreditNote.pdf
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const pdfCreditNoteBodySchema = z.looseObject({
  disposition_type: z.enum(['attachment', 'inline']).optional(),
});
export { pdfCreditNoteBodySchema };
