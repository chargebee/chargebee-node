// Generated Zod validator: VirtualBankAccount.createUsingPermanentToken
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const createUsingPermanentTokenVirtualBankAccountBodySchema = z.looseObject({
  customer_id: z.string().max(50),
  reference_id: z.string().max(150),
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
export { createUsingPermanentTokenVirtualBankAccountBodySchema };
