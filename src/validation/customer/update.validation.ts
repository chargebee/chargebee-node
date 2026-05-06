// Generated Zod validator: Customer.update
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const updateCustomerMetaDataSchema = z.looseObject({});
const updateCustomerTaxProvidersFieldsSchema = z.object({
  provider_name: z.array(z.string().max(50).optional()).optional(),
  field_id: z.array(z.string().max(50).optional()).optional(),
  field_value: z.array(z.string().max(50).optional()).optional(),
});
const updateCustomerBodySchema = z.looseObject({
  first_name: z.string().max(150).optional(),
  last_name: z.string().max(150).optional(),
  email: z.string().email().max(70).optional(),
  preferred_currency_code: z.string().max(3).optional(),
  phone: z.string().max(50).optional(),
  company: z.string().max(250).optional(),
  auto_collection: z.enum(['on', 'off']).optional(),
  allow_direct_debit: z.boolean().default(false).optional(),
  net_term_days: z.number().int().optional(),
  taxability: z.enum(['taxable', 'exempt']).optional(),
  exemption_details: z.array(z.string().optional()).optional(),
  customer_type: z
    .enum(['residential', 'business', 'senior_citizen', 'industrial'])
    .optional(),
  client_profile_id: z.string().max(50).optional(),
  taxjar_exemption_category: z
    .enum(['wholesale', 'government', 'other'])
    .optional(),
  locale: z.string().max(50).optional(),
  entity_code: z
    .enum([
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'p',
      'q',
      'r',
      'med1',
      'med2',
    ])
    .optional(),
  exempt_number: z.string().max(100).optional(),
  offline_payment_method: z
    .enum([
      'no_preference',
      'cash',
      'check',
      'bank_transfer',
      'ach_credit',
      'sepa_credit',
      'boleto',
      'us_automated_bank_transfer',
      'eu_automated_bank_transfer',
      'uk_automated_bank_transfer',
      'jp_automated_bank_transfer',
      'mx_automated_bank_transfer',
      'custom',
    ])
    .optional(),
  invoice_notes: z.string().max(2000).optional(),
  auto_close_invoices: z.boolean().optional(),
  meta_data: updateCustomerMetaDataSchema.optional(),
  fraud_flag: z.enum(['safe', 'fraudulent']).optional(),
  consolidated_invoicing: z.boolean().optional(),
  tax_providers_fields: updateCustomerTaxProvidersFieldsSchema.optional(),
});
export { updateCustomerBodySchema };
