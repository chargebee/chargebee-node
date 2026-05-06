// Generated Zod validator: Order.createRefundableCreditNote
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const createRefundableCreditNoteOrderCreditNoteSchema = z.object({
  reason_code: z.enum([
    'write_off',
    'subscription_change',
    'subscription_cancellation',
    'subscription_pause',
    'chargeback',
    'product_unsatisfactory',
    'service_unsatisfactory',
    'order_change',
    'order_cancellation',
    'waiver',
    'other',
    'fraudulent',
  ]),
  total: z.number().int().min(0),
});
const createRefundableCreditNoteOrderBodySchema = z.looseObject({
  customer_notes: z.string().max(2000).optional(),
  comment: z.string().max(300).optional(),
  credit_note: createRefundableCreditNoteOrderCreditNoteSchema.optional(),
});
export { createRefundableCreditNoteOrderBodySchema };
