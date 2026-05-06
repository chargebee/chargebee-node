// Generated Zod validator: Invoice.removePayment
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const removePaymentInvoiceTransactionSchema = z.object({
  id: z.string().max(40),
});
const removePaymentInvoiceBodySchema = z.looseObject({
  transaction: removePaymentInvoiceTransactionSchema.optional(),
});
export { removePaymentInvoiceBodySchema };
