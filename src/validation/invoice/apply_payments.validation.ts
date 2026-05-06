// Generated Zod validator: Invoice.applyPayments
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const applyPaymentsInvoiceTransactionsSchema = z.object({
  id: z.array(z.string().max(40).optional()).optional(),
  amount: z.array(z.number().int().min(0).optional()).optional(),
});
const applyPaymentsInvoiceBodySchema = z.looseObject({
  comment: z.string().max(300).optional(),
  transactions: applyPaymentsInvoiceTransactionsSchema.optional(),
});
export { applyPaymentsInvoiceBodySchema };
