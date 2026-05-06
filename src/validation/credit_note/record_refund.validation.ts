// Generated Zod validator: CreditNote.recordRefund
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const recordRefundCreditNoteTransactionSchema = z.object({
  id: z.string().max(40).optional(),
  amount: z.number().int().min(0).optional(),
  payment_method: z.enum([
    'cash',
    'check',
    'chargeback',
    'bank_transfer',
    'other',
    'app_store',
    'play_store',
    'custom',
  ]),
  reference_number: z.string().max(100).optional(),
  custom_payment_method_id: z.string().max(50).optional(),
  date: z.number().int(),
});
const recordRefundCreditNoteBodySchema = z.looseObject({
  refund_reason_code: z.string().max(100).optional(),
  comment: z.string().max(300).optional(),
  transaction: recordRefundCreditNoteTransactionSchema.optional(),
});
export { recordRefundCreditNoteBodySchema };
