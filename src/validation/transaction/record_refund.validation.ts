// Generated Zod validator: Transaction.recordRefund
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const recordRefundTransactionBodySchema = z.looseObject({
  amount: z.number().int().min(1).optional(),
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
  date: z.number().int(),
  reference_number: z.string().max(100).optional(),
  custom_payment_method_id: z.string().max(50).optional(),
  comment: z.string().max(300).optional(),
});
export { recordRefundTransactionBodySchema };
