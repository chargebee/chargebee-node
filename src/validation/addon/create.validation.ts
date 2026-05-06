// Generated Zod validator: Addon.create
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const createAddonMetaDataSchema = z.looseObject({});
const createAddonTiersSchema = z.object({
  starting_unit: z.array(z.number().int().min(1).optional()).optional(),
  ending_unit: z.array(z.number().int().optional()).optional(),
  price: z.array(z.number().int().min(0).optional()).optional(),
  starting_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  ending_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  price_in_decimal: z.array(z.string().max(39).optional()).optional(),
});
const createAddonTaxProvidersFieldsSchema = z.object({
  provider_name: z.array(z.string().max(50).optional()),
  field_id: z.array(z.string().max(50).optional()),
  field_value: z.array(z.string().max(50).optional()),
});
const createAddonBodySchema = z.looseObject({
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
  meta_data: createAddonMetaDataSchema.optional(),
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
  tiers: createAddonTiersSchema.optional(),
  tax_providers_fields: createAddonTaxProvidersFieldsSchema.optional(),
});
export { createAddonBodySchema };
