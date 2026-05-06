// Generated Zod validator: Invoice.collectPayment
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const collectPaymentInvoiceBodySchema = z.looseObject({
  amount: z.number().int().min(1).optional(),
  authorization_transaction_id: z.string().max(40).optional(),
  payment_source_id: z.string().max(40).optional(),
  comment: z.string().max(300).optional(),
  payment_initiator: z.enum(['customer', 'merchant']).optional(),
});
export { collectPaymentInvoiceBodySchema };
