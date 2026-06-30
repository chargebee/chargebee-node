// Generated Zod schemas: VirtualBankAccount
// Actions: createUsingPermanentToken, create, list
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

//VirtualBankAccount.list

const ListVirtualBankAccountCustomerIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ListVirtualBankAccountUpdatedAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const ListVirtualBankAccountCreatedAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const ListVirtualBankAccountBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  customer_id: ListVirtualBankAccountCustomerIdSchema.optional(),
  updated_at: ListVirtualBankAccountUpdatedAtSchema.optional(),
  created_at: ListVirtualBankAccountCreatedAtSchema.optional(),
});
export { ListVirtualBankAccountBodySchema };
export type ListVirtualBankAccountBody = z.infer<
  typeof ListVirtualBankAccountBodySchema
>;
