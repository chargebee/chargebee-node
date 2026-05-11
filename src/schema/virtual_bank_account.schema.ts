// Generated Zod schemas: VirtualBankAccount
// Actions: createUsingPermanentToken, create
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//VirtualBankAccount.createUsingPermanentToken

const CreateUsingPermanentTokenVirtualBankAccountBodySchema = z.looseObject({
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
export { CreateUsingPermanentTokenVirtualBankAccountBodySchema };
export type CreateUsingPermanentTokenVirtualBankAccountBody = z.infer<
  typeof CreateUsingPermanentTokenVirtualBankAccountBodySchema
>;

//VirtualBankAccount.create

const CreateVirtualBankAccountBodySchema = z.looseObject({
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
export { CreateVirtualBankAccountBodySchema };
export type CreateVirtualBankAccountBody = z.infer<
  typeof CreateVirtualBankAccountBodySchema
>;
