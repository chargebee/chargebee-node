// Generated Zod validator: PaymentSource.verifyBankAccount
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const verifyBankAccountPaymentSourceBodySchema = z.looseObject({
  amount1: z.number().int().min(0),
  amount2: z.number().int().min(0),
});
export { verifyBankAccountPaymentSourceBodySchema };
