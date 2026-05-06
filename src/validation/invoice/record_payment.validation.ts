// Generated Zod validator: Invoice.recordPayment
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const recordPaymentInvoiceTransactionSchema = z.object({
  amount: z.number().int().min(0).optional(),
  payment_method: z.enum([
    'cash',
    'check',
    'bank_transfer',
    'other',
    'app_store',
    'play_store',
    'custom',
  ]),
  reference_number: z.string().max(100).optional(),
  custom_payment_method_id: z.string().max(50).optional(),
  id_at_gateway: z.string().max(100).optional(),
  status: z.enum(['success', 'failure', 'late_failure']).optional(),
  date: z.number().int().optional(),
  error_code: z.string().max(100).optional(),
  error_text: z.string().max(65000).optional(),
});
const recordPaymentInvoiceBodySchema = z.looseObject({
  comment: z.string().max(300).optional(),
  transaction: recordPaymentInvoiceTransactionSchema.optional(),
});
export { recordPaymentInvoiceBodySchema };
