// Generated Zod validator: Invoice.refund
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const refundInvoiceCreditNoteSchema = z.object({
  reason_code: z
    .enum([
      'product_unsatisfactory',
      'service_unsatisfactory',
      'order_change',
      'order_cancellation',
      'waiver',
      'other',
    ])
    .optional(),
  create_reason_code: z.string().max(100).optional(),
});
const refundInvoiceBodySchema = z.looseObject({
  refund_amount: z.number().int().min(1).optional(),
  comment: z.string().max(300).optional(),
  customer_notes: z.string().max(2000).optional(),
  credit_note: refundInvoiceCreditNoteSchema.optional(),
});
export { refundInvoiceBodySchema };
