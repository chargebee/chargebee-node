// Generated Zod validator: ItemPrice.create
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const createItemPriceMetadataSchema = z.looseObject({});
const createItemPriceTaxDetailSchema = z.object({
  tax_profile_id: z.string().max(50).optional(),
  avalara_tax_code: z.string().max(50).optional(),
  hsn_code: z.string().max(50).optional(),
  avalara_sale_type: z
    .enum(['wholesale', 'retail', 'consumed', 'vendor_use'])
    .optional(),
  avalara_transaction_type: z.number().int().optional(),
  avalara_service_type: z.number().int().optional(),
  taxjar_product_code: z.string().max(50).optional(),
});
const createItemPriceAccountingDetailSchema = z.object({
  sku: z.string().max(100).optional(),
  accounting_code: z.string().max(100).optional(),
  accounting_category1: z.string().max(100).optional(),
  accounting_category2: z.string().max(100).optional(),
  accounting_category3: z.string().max(100).optional(),
  accounting_category4: z.string().max(100).optional(),
});
const createItemPriceTiersSchema = z.object({
  starting_unit: z.array(z.number().int().min(1).optional()).optional(),
  ending_unit: z.array(z.number().int().optional()).optional(),
  price: z.array(z.number().int().min(0).optional()).optional(),
  starting_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  ending_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  pricing_type: z
    .array(z.enum(['per_unit', 'flat_fee', 'package']).optional())
    .optional(),
  package_size: z.array(z.number().int().min(1).optional()).optional(),
});
const createItemPriceTaxProvidersFieldsSchema = z.object({
  provider_name: z.array(z.string().max(50).optional()),
  field_id: z.array(z.string().max(50).optional()),
  field_value: z.array(z.string().max(50).optional()),
});
const createItemPriceBodySchema = z.looseObject({
  id: z.string().max(100),
  name: z.string().max(100),
  description: z.string().max(2000).optional(),
  item_id: z.string().max(100),
  invoice_notes: z.string().max(2000).optional(),
  proration_type: z
    .enum(['site_default', 'partial_term', 'full_term'])
    .optional(),
  external_name: z.string().max(100).optional(),
  currency_code: z.string().max(3).optional(),
  price_variant_id: z.string().max(100).optional(),
  is_taxable: z.boolean().default(true).optional(),
  free_quantity: z.number().int().min(0).optional(),
  free_quantity_in_decimal: z.string().max(33).optional(),
  metadata: createItemPriceMetadataSchema.optional(),
  show_description_in_invoices: z.boolean().default(false).optional(),
  show_description_in_quotes: z.boolean().default(false).optional(),
  usage_accumulation_reset_frequency: z
    .enum(['never', 'subscription_billing_frequency'])
    .optional(),
  business_entity_id: z.string().max(50).optional(),
  pricing_model: z
    .enum(['flat_fee', 'per_unit', 'tiered', 'volume', 'stairstep'])
    .optional(),
  price: z.number().int().min(0).optional(),
  price_in_decimal: z.string().max(39).optional(),
  period_unit: z.enum(['day', 'week', 'month', 'year']).optional(),
  period: z.number().int().min(1).optional(),
  trial_period_unit: z.enum(['day', 'month']).optional(),
  trial_period: z.number().int().min(0).optional(),
  shipping_period: z.number().int().min(1).optional(),
  shipping_period_unit: z.enum(['day', 'week', 'month', 'year']).optional(),
  billing_cycles: z.number().int().min(1).optional(),
  trial_end_action: z
    .enum(['site_default', 'activate_subscription', 'cancel_subscription'])
    .optional(),
  tax_detail: createItemPriceTaxDetailSchema.optional(),
  accounting_detail: createItemPriceAccountingDetailSchema.optional(),
  tiers: createItemPriceTiersSchema.optional(),
  tax_providers_fields: createItemPriceTaxProvidersFieldsSchema.optional(),
});
export { createItemPriceBodySchema };
