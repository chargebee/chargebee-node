// Generated Zod validator: Transaction.createAuthorization
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const createAuthorizationTransactionBodySchema = z.looseObject({
  customer_id: z.string().max(50),
  payment_source_id: z.string().max(40).optional(),
  currency_code: z.string().max(3).optional(),
  amount: z.number().int().min(1),
});
export { createAuthorizationTransactionBodySchema };
