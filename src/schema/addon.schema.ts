// Generated Zod schemas: Addon
// Actions: create, update, list, copy
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//Addon.create

const CreateAddonMetaDataSchema = z.looseObject({});
const CreateAddonTiersSchema = z.object({
  starting_unit: z.array(z.number().int().min(1).optional()).optional(),
  ending_unit: z.array(z.number().int().optional()).optional(),
  price: z.array(z.number().int().min(0).optional()).optional(),
  starting_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  ending_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  price_in_decimal: z.array(z.string().max(39).optional()).optional(),
});
const CreateAddonTaxProvidersFieldsSchema = z.object({
  provider_name: z.array(z.string().max(50).optional()),
  field_id: z.array(z.string().max(50).optional()),
  field_value: z.array(z.string().max(50).optional()),
});
const CreateAddonBodySchema = z.looseObject({
  id: z.string().max(100),
  name: z.string().max(100),
  invoice_name: z.string().max(100).optional(),
  description: z.string().max(2000).optional(),
  charge_type: z.enum(['recurring', 'non_recurring']),
  price: z.number().int().min(0).optional(),
  currency_code: z.string().max(3).optional(),
  period: z.number().int().min(1).optional(),
  period_unit: z
    .enum(['day', 'week', 'month', 'year', 'not_applicable'])
    .optional(),
  pricing_model: z
    .enum(['flat_fee', 'per_unit', 'tiered', 'volume', 'stairstep'])
    .optional(),
  type: z
    .enum(['on_off', 'quantity', 'tiered', 'volume', 'stairstep'])
    .optional(),
  unit: z.string().max(30).optional(),
  enabled_in_portal: z.boolean().default(true).optional(),
  taxable: z.boolean().default(true).optional(),
  tax_profile_id: z.string().max(50).optional(),
  avalara_sale_type: z
    .enum(['wholesale', 'retail', 'consumed', 'vendor_use'])
    .optional(),
  avalara_transaction_type: z.number().int().optional(),
  avalara_service_type: z.number().int().optional(),
  tax_code: z.string().max(50).optional(),
  hsn_code: z.string().max(50).optional(),
  taxjar_product_code: z.string().max(50).optional(),
  invoice_notes: z.string().max(2000).optional(),
  meta_data: CreateAddonMetaDataSchema.optional(),
  sku: z.string().max(100).optional(),
  accounting_code: z.string().max(100).optional(),
  accounting_category1: z.string().max(100).optional(),
  accounting_category2: z.string().max(100).optional(),
  accounting_category3: z.string().max(100).optional(),
  accounting_category4: z.string().max(100).optional(),
  is_shippable: z.boolean().default(false).optional(),
  shipping_frequency_period: z.number().int().min(1).optional(),
  shipping_frequency_period_unit: z
    .enum(['year', 'month', 'week', 'day'])
    .optional(),
  included_in_mrr: z.boolean().optional(),
  show_description_in_invoices: z.boolean().default(false).optional(),
  show_description_in_quotes: z.boolean().default(false).optional(),
  price_in_decimal: z.string().max(39).optional(),
  proration_type: z
    .enum(['site_default', 'partial_term', 'full_term'])
    .optional(),
  status: z.enum(['active', 'archived']).optional(),
  tiers: CreateAddonTiersSchema.optional(),
  tax_providers_fields: CreateAddonTaxProvidersFieldsSchema.optional(),
});
export { CreateAddonBodySchema };
export type CreateAddonBody = z.infer<typeof CreateAddonBodySchema>;

//Addon.update

const UpdateAddonMetaDataSchema = z.looseObject({});
const UpdateAddonTiersSchema = z.object({
  starting_unit: z.array(z.number().int().min(1).optional()).optional(),
  ending_unit: z.array(z.number().int().optional()).optional(),
  price: z.array(z.number().int().min(0).optional()).optional(),
  starting_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  ending_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  price_in_decimal: z.array(z.string().max(39).optional()).optional(),
});
const UpdateAddonTaxProvidersFieldsSchema = z.object({
  provider_name: z.array(z.string().max(50).optional()),
  field_id: z.array(z.string().max(50).optional()),
  field_value: z.array(z.string().max(50).optional()),
});
const UpdateAddonBodySchema = z.looseObject({
  name: z.string().max(100).optional(),
  invoice_name: z.string().max(100).optional(),
  description: z.string().max(2000).optional(),
  charge_type: z.enum(['recurring', 'non_recurring']).optional(),
  price: z.number().int().min(0).optional(),
  currency_code: z.string().max(3).optional(),
  period: z.number().int().min(1).optional(),
  period_unit: z
    .enum(['day', 'week', 'month', 'year', 'not_applicable'])
    .optional(),
  pricing_model: z
    .enum(['flat_fee', 'per_unit', 'tiered', 'volume', 'stairstep'])
    .optional(),
  type: z
    .enum(['on_off', 'quantity', 'tiered', 'volume', 'stairstep'])
    .optional(),
  unit: z.string().max(30).optional(),
  enabled_in_portal: z.boolean().default(true).optional(),
  taxable: z.boolean().default(true).optional(),
  tax_profile_id: z.string().max(50).optional(),
  avalara_sale_type: z
    .enum(['wholesale', 'retail', 'consumed', 'vendor_use'])
    .optional(),
  avalara_transaction_type: z.number().int().optional(),
  avalara_service_type: z.number().int().optional(),
  tax_code: z.string().max(50).optional(),
  hsn_code: z.string().max(50).optional(),
  taxjar_product_code: z.string().max(50).optional(),
  invoice_notes: z.string().max(2000).optional(),
  meta_data: UpdateAddonMetaDataSchema.optional(),
  sku: z.string().max(100).optional(),
  accounting_code: z.string().max(100).optional(),
  accounting_category1: z.string().max(100).optional(),
  accounting_category2: z.string().max(100).optional(),
  accounting_category3: z.string().max(100).optional(),
  accounting_category4: z.string().max(100).optional(),
  is_shippable: z.boolean().default(false).optional(),
  shipping_frequency_period: z.number().int().min(1).optional(),
  shipping_frequency_period_unit: z
    .enum(['year', 'month', 'week', 'day'])
    .optional(),
  included_in_mrr: z.boolean().optional(),
  show_description_in_invoices: z.boolean().default(false).optional(),
  show_description_in_quotes: z.boolean().default(false).optional(),
  price_in_decimal: z.string().max(39).optional(),
  proration_type: z
    .enum(['site_default', 'partial_term', 'full_term'])
    .optional(),
  tiers: UpdateAddonTiersSchema.optional(),
  tax_providers_fields: UpdateAddonTaxProvidersFieldsSchema.optional(),
});
export { UpdateAddonBodySchema };
export type UpdateAddonBody = z.infer<typeof UpdateAddonBodySchema>;

//Addon.list

const ListAddonIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ListAddonNameSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ListAddonPricingModelSchema = z.object({
  is: z
    .enum(['flat_fee', 'per_unit', 'tiered', 'volume', 'stairstep'])
    .optional(),
  is_not: z
    .enum(['flat_fee', 'per_unit', 'tiered', 'volume', 'stairstep'])
    .optional(),
  in: z
    .enum(['flat_fee', 'per_unit', 'tiered', 'volume', 'stairstep'])
    .optional(),
  not_in: z
    .enum(['flat_fee', 'per_unit', 'tiered', 'volume', 'stairstep'])
    .optional(),
});
const ListAddonTypeSchema = z.object({
  is: z
    .enum(['on_off', 'quantity', 'tiered', 'volume', 'stairstep'])
    .optional(),
  is_not: z
    .enum(['on_off', 'quantity', 'tiered', 'volume', 'stairstep'])
    .optional(),
  in: z
    .enum(['on_off', 'quantity', 'tiered', 'volume', 'stairstep'])
    .optional(),
  not_in: z
    .enum(['on_off', 'quantity', 'tiered', 'volume', 'stairstep'])
    .optional(),
});
const ListAddonChargeTypeSchema = z.object({
  is: z.enum(['recurring', 'non_recurring']).optional(),
  is_not: z.enum(['recurring', 'non_recurring']).optional(),
  in: z.enum(['recurring', 'non_recurring']).optional(),
  not_in: z.enum(['recurring', 'non_recurring']).optional(),
});
const ListAddonPriceSchema = z.object({
  is: z.string().regex(RegExp('^-?\\d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  between: z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')).optional(),
});
const ListAddonPeriodSchema = z.object({
  is: z.string().regex(RegExp('^-?\\d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  between: z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')).optional(),
});
const ListAddonPeriodUnitSchema = z.object({
  is: z.enum(['day', 'week', 'month', 'year', 'not_applicable']).optional(),
  is_not: z.enum(['day', 'week', 'month', 'year', 'not_applicable']).optional(),
  in: z.enum(['day', 'week', 'month', 'year', 'not_applicable']).optional(),
  not_in: z.enum(['day', 'week', 'month', 'year', 'not_applicable']).optional(),
});
const ListAddonStatusSchema = z.object({
  is: z.enum(['active', 'archived', 'deleted']).optional(),
  is_not: z.enum(['active', 'archived', 'deleted']).optional(),
  in: z.enum(['active', 'archived', 'deleted']).optional(),
  not_in: z.enum(['active', 'archived', 'deleted']).optional(),
});
const ListAddonUpdatedAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const ListAddonCurrencyCodeSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ListAddonChannelSchema = z.object({
  is: z.enum(['web', 'app_store', 'play_store']).optional(),
  is_not: z.enum(['web', 'app_store', 'play_store']).optional(),
  in: z.enum(['web', 'app_store', 'play_store']).optional(),
  not_in: z.enum(['web', 'app_store', 'play_store']).optional(),
});
const ListAddonBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  id: ListAddonIdSchema.optional(),
  name: ListAddonNameSchema.optional(),
  pricing_model: ListAddonPricingModelSchema.optional(),
  type: ListAddonTypeSchema.optional(),
  charge_type: ListAddonChargeTypeSchema.optional(),
  price: ListAddonPriceSchema.optional(),
  period: ListAddonPeriodSchema.optional(),
  period_unit: ListAddonPeriodUnitSchema.optional(),
  status: ListAddonStatusSchema.optional(),
  updated_at: ListAddonUpdatedAtSchema.optional(),
  currency_code: ListAddonCurrencyCodeSchema.optional(),
  channel: ListAddonChannelSchema.optional(),
  include_deleted: z.boolean().default(false).optional(),
});
export { ListAddonBodySchema };
export type ListAddonBody = z.infer<typeof ListAddonBodySchema>;

//Addon.copy

const CopyAddonBodySchema = z.looseObject({
  from_site: z.string().max(50),
  id_at_from_site: z.string().max(100),
  id: z.string().max(100).optional(),
  for_site_merging: z.boolean().default(false).optional(),
});
export { CopyAddonBodySchema };
export type CopyAddonBody = z.infer<typeof CopyAddonBodySchema>;
