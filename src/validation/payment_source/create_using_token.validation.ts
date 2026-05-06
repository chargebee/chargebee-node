// Generated Zod validator: PaymentSource.createUsingToken
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const createUsingTokenPaymentSourceBodySchema = z.looseObject({
  customer_id: z.string().max(50),
  replace_primary_payment_source: z.boolean().default(false).optional(),
  token_id: z.string().max(40),
});
export { createUsingTokenPaymentSourceBodySchema };
