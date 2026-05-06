// Generated Zod validator: Transaction.refund
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const refundTransactionBodySchema = z.looseObject({
  amount: z.number().int().min(1).optional(),
  comment: z.string().max(300).optional(),
});
export { refundTransactionBodySchema };
