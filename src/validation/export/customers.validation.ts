// Generated Zod validator: Export.customers
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const customersExportBusinessEntityIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const customersExportIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
  not_in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
});
const customersExportFirstNameSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
});
const customersExportLastNameSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
});
const customersExportEmailSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
});
const customersExportCompanySchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
});
const customersExportPhoneSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
});
const customersExportAutoCollectionSchema = z.object({
  is: z.enum(['on', 'off']).optional(),
  is_not: z.enum(['on', 'off']).optional(),
  in: z.enum(['on', 'off']).optional(),
  not_in: z.enum(['on', 'off']).optional(),
});
const customersExportTaxabilitySchema = z.object({
  is: z.enum(['taxable', 'exempt']).optional(),
  is_not: z.enum(['taxable', 'exempt']).optional(),
  in: z.enum(['taxable', 'exempt']).optional(),
  not_in: z.enum(['taxable', 'exempt']).optional(),
});
const customersExportCreatedAtSchema = z.object({
  after: z.string().regex(RegExp('^d{10}$')).optional(),
  before: z.string().regex(RegExp('^d{10}$')).optional(),
  on: z.string().regex(RegExp('^d{10}$')).optional(),
  between: z.string().regex(RegExp('^[d{10},d{10}]$')).optional(),
});
const customersExportUpdatedAtSchema = z.object({
  after: z.string().regex(RegExp('^d{10}$')).optional(),
  before: z.string().regex(RegExp('^d{10}$')).optional(),
  on: z.string().regex(RegExp('^d{10}$')).optional(),
  between: z.string().regex(RegExp('^[d{10},d{10}]$')).optional(),
});
const customersExportOfflinePaymentMethodSchema = z.object({
  is: z
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
  is_not: z
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
  in: z
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
  not_in: z
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
});
const customersExportAutoCloseInvoicesSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const customersExportChannelSchema = z.object({
  is: z.enum(['web', 'app_store', 'play_store']).optional(),
  is_not: z.enum(['web', 'app_store', 'play_store']).optional(),
  in: z.enum(['web', 'app_store', 'play_store']).optional(),
  not_in: z.enum(['web', 'app_store', 'play_store']).optional(),
});
const customersExportCustomerItemSchema = z.object({
  id: customersExportIdSchema.optional(),
  first_name: customersExportFirstNameSchema.optional(),
  last_name: customersExportLastNameSchema.optional(),
  email: customersExportEmailSchema.optional(),
  company: customersExportCompanySchema.optional(),
  phone: customersExportPhoneSchema.optional(),
  auto_collection: customersExportAutoCollectionSchema.optional(),
  taxability: customersExportTaxabilitySchema.optional(),
  created_at: customersExportCreatedAtSchema.optional(),
  updated_at: customersExportUpdatedAtSchema.optional(),
  offline_payment_method: customersExportOfflinePaymentMethodSchema.optional(),
  auto_close_invoices: customersExportAutoCloseInvoicesSchema.optional(),
  channel: customersExportChannelSchema.optional(),
});
const customersExportParentIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const customersExportPaymentOwnerIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const customersExportInvoiceOwnerIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const customersExportRelationshipSchema = z.object({
  parent_id: customersExportParentIdSchema.optional(),
  payment_owner_id: customersExportPaymentOwnerIdSchema.optional(),
  invoice_owner_id: customersExportInvoiceOwnerIdSchema.optional(),
});
const customersExportBodySchema = z.looseObject({
  export_type: z.enum(['data', 'import_friendly_data']).optional(),
  business_entity_id: customersExportBusinessEntityIdSchema.optional(),
  customer: z.array(customersExportCustomerItemSchema.optional()).optional(),
  relationship: customersExportRelationshipSchema.optional(),
});
export { customersExportBodySchema };
