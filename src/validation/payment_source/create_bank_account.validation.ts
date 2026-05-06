// Generated Zod validator: PaymentSource.createBankAccount
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const createBankAccountPaymentSourceBillingAddressSchema = z.looseObject({});
const createBankAccountPaymentSourceBankAccountSchema = z.object({
  gateway_account_id: z.string().max(50).optional(),
  iban: z.string().max(50).min(10).optional(),
  first_name: z.string().max(150).optional(),
  last_name: z.string().max(150).optional(),
  company: z.string().max(250).optional(),
  email: z.string().email().max(70).optional(),
  phone: z.string().max(50).optional(),
  bank_name: z.string().max(100).optional(),
  account_number: z.string().max(17).min(4).optional(),
  routing_number: z.string().max(9).min(3).optional(),
  bank_code: z.string().max(20).optional(),
  account_type: z
    .enum(['checking', 'savings', 'business_checking', 'current'])
    .optional(),
  account_holder_type: z.enum(['individual', 'company']).optional(),
  echeck_type: z.enum(['web', 'ppd', 'ccd']).optional(),
  swedish_identity_number: z.string().max(12).min(10).optional(),
  billing_address:
    createBankAccountPaymentSourceBillingAddressSchema.optional(),
});
const createBankAccountPaymentSourceBodySchema = z.looseObject({
  customer_id: z.string().max(50),
  issuing_country: z.string().max(50).optional(),
  replace_primary_payment_source: z.boolean().default(false).optional(),
  bank_account: createBankAccountPaymentSourceBankAccountSchema.optional(),
});
export { createBankAccountPaymentSourceBodySchema };
