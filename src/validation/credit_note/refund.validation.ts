// Generated Zod validator: CreditNote.refund
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const refundCreditNoteBodySchema = z.looseObject({
  refund_amount: z.number().int().min(1).optional(),
  customer_notes: z.string().max(2000).optional(),
  refund_reason_code: z.string().max(100).optional(),
});
export { refundCreditNoteBodySchema };
