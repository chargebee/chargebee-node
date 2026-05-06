// Generated Zod validator: Invoice.recordRefund
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const recordRefundInvoiceTransactionSchema = z.object({
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
const recordRefundInvoiceCreditNoteSchema = z.object({
  reason_code: z
    .enum([
      'chargeback',
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
const recordRefundInvoiceBodySchema = z.looseObject({
  comment: z.string().max(65000).optional(),
  customer_notes: z.string().max(2000).optional(),
  transaction: recordRefundInvoiceTransactionSchema.optional(),
  credit_note: recordRefundInvoiceCreditNoteSchema.optional(),
});
export { recordRefundInvoiceBodySchema };
