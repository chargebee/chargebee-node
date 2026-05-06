// Generated Zod validator: PaymentSource.updateBankAccount
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const updateBankAccountPaymentSourceBankAccountSchema = z.object({
  first_name: z.string().max(150).optional(),
  last_name: z.string().max(150).optional(),
  email: z.string().email().max(70).optional(),
});
const updateBankAccountPaymentSourceBodySchema = z.looseObject({
  bank_account: updateBankAccountPaymentSourceBankAccountSchema.optional(),
});
export { updateBankAccountPaymentSourceBodySchema };
