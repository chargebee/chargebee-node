// Generated Zod validator: Customer.recordExcessPayment
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const recordExcessPaymentCustomerTransactionSchema = z.object({
  id: z.string().max(40).optional(),
  amount: z.number().int().min(0),
  currency_code: z.string().max(3).optional(),
  date: z.number().int(),
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
});
const recordExcessPaymentCustomerBodySchema = z.looseObject({
  comment: z.string().max(300).optional(),
  transaction: recordExcessPaymentCustomerTransactionSchema.optional(),
});
export { recordExcessPaymentCustomerBodySchema };
