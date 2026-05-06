// Generated Zod validator: VirtualBankAccount.create
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const createVirtualBankAccountBodySchema = z.looseObject({
  customer_id: z.string().max(50),
  email: z.string().email().max(70).optional(),
  gateway_account_id: z.string().max(50).optional(),
  scheme: z
    .enum([
      'ach_credit',
      'sepa_credit',
      'us_automated_bank_transfer',
      'gb_automated_bank_transfer',
      'eu_automated_bank_transfer',
      'jp_automated_bank_transfer',
      'mx_automated_bank_transfer',
    ])
    .optional(),
});
export { createVirtualBankAccountBodySchema };
