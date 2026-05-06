// Generated Zod validator: Transaction.paymentsForInvoice
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const paymentsForInvoiceTransactionBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
});
export { paymentsForInvoiceTransactionBodySchema };
