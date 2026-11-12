// Generated Zod schemas: ItemPrice
// Actions: create, update, list, findApplicableItems, findApplicableItemPrices
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//ItemPrice.create

const CreateItemPriceMetadataSchema = z.looseObject({});
const CreateItemPriceTaxDetailSchema = z.object({
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
const CreateItemPriceAccountingDetailSchema = z.object({
  sku: z.string().max(100).optional(),
  accounting_code: z.string().max(100).optional(),
  accounting_category1: z.string().max(100).optional(),
  accounting_category2: z.string().max(100).optional(),
  accounting_category3: z.string().max(100).optional(),
  accounting_category4: z.string().max(100).optional(),
});
const CreateItemPriceTiersItemSchema = z.object({
  starting_unit: z.number().int().min(1).optional(),
  ending_unit: z.number().int().optional(),
  price: z.number().int().min(0).optional(),
  starting_unit_in_decimal: z.string().max(33).optional(),
  ending_unit_in_decimal: z.string().max(33).optional(),
  price_in_decimal: z.string().max(39).optional(),
  pricing_type: z.enum(['per_unit', 'flat_fee', 'package']).optional(),
  package_size: z.number().int().min(1).optional(),
});
const CreateItemPriceTiersSchema = z.object({
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
const CreateItemPriceTaxProvidersFieldsItemSchema = z.object({
  provider_name: z.string().max(50),
  field_id: z.string().max(50),
  field_value: z.string().max(50),
});
const CreateItemPriceTaxProvidersFieldsSchema = z.object({
  provider_name: z.array(z.string().max(50).optional()),
  field_id: z.array(z.string().max(50).optional()),
  field_value: z.array(z.string().max(50).optional()),
});
const CreateItemPriceBodySchema = z.looseObject({
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
  metadata: CreateItemPriceMetadataSchema.optional(),
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
  tax_detail: CreateItemPriceTaxDetailSchema.optional(),
  accounting_detail: CreateItemPriceAccountingDetailSchema.optional(),
  tiers: z
    .union([
      z.array(CreateItemPriceTiersItemSchema.optional()),
      CreateItemPriceTiersSchema,
    ])
    .optional(),
  tax_providers_fields: z
    .union([
      z.array(CreateItemPriceTaxProvidersFieldsItemSchema.optional()),
      CreateItemPriceTaxProvidersFieldsSchema,
    ])
    .optional(),
});
export { CreateItemPriceBodySchema };
export type CreateItemPriceBody = z.infer<typeof CreateItemPriceBodySchema>;

//ItemPrice.update

const UpdateItemPriceMetadataSchema = z.looseObject({});
const UpdateItemPriceTaxDetailSchema = z.object({
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
const UpdateItemPriceAccountingDetailSchema = z.object({
  sku: z.string().max(100).optional(),
  accounting_code: z.string().max(100).optional(),
  accounting_category1: z.string().max(100).optional(),
  accounting_category2: z.string().max(100).optional(),
  accounting_category3: z.string().max(100).optional(),
  accounting_category4: z.string().max(100).optional(),
});
const UpdateItemPriceTiersItemSchema = z.object({
  starting_unit: z.number().int().min(1).optional(),
  ending_unit: z.number().int().optional(),
  price: z.number().int().min(0).optional(),
  starting_unit_in_decimal: z.string().max(33).optional(),
  ending_unit_in_decimal: z.string().max(33).optional(),
  price_in_decimal: z.string().max(39).optional(),
  pricing_type: z.enum(['per_unit', 'flat_fee', 'package']).optional(),
  package_size: z.number().int().min(1).optional(),
});
const UpdateItemPriceTiersSchema = z.object({
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
const UpdateItemPriceTaxProvidersFieldsItemSchema = z.object({
  provider_name: z.string().max(50),
  field_id: z.string().max(50),
  field_value: z.string().max(50),
});
const UpdateItemPriceTaxProvidersFieldsSchema = z.object({
  provider_name: z.array(z.string().max(50).optional()),
  field_id: z.array(z.string().max(50).optional()),
  field_value: z.array(z.string().max(50).optional()),
});
const UpdateItemPriceBodySchema = z.looseObject({
  name: z.string().max(100).optional(),
  description: z.string().max(2000).optional(),
  proration_type: z
    .enum(['site_default', 'partial_term', 'full_term'])
    .optional(),
  price_variant_id: z.string().max(100).optional(),
  status: z.enum(['active', 'archived']).optional(),
  external_name: z.string().max(100).optional(),
  usage_accumulation_reset_frequency: z
    .enum(['never', 'subscription_billing_frequency'])
    .optional(),
  currency_code: z.string().max(3).optional(),
  invoice_notes: z.string().max(2000).optional(),
  is_taxable: z.boolean().default(true).optional(),
  free_quantity: z.number().int().min(0).optional(),
  free_quantity_in_decimal: z.string().max(33).optional(),
  metadata: UpdateItemPriceMetadataSchema.optional(),
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
  show_description_in_invoices: z.boolean().optional(),
  show_description_in_quotes: z.boolean().optional(),
  tax_detail: UpdateItemPriceTaxDetailSchema.optional(),
  accounting_detail: UpdateItemPriceAccountingDetailSchema.optional(),
  tiers: z
    .union([
      z.array(UpdateItemPriceTiersItemSchema.optional()),
      UpdateItemPriceTiersSchema,
    ])
    .optional(),
  tax_providers_fields: z
    .union([
      z.array(UpdateItemPriceTaxProvidersFieldsItemSchema.optional()),
      UpdateItemPriceTaxProvidersFieldsSchema,
    ])
    .optional(),
});
export { UpdateItemPriceBodySchema };
export type UpdateItemPriceBody = z.infer<typeof UpdateItemPriceBodySchema>;

//ItemPrice.list

const ListItemPriceIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
  not_in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
});
const ListItemPriceNameSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
  not_in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
});
const ListItemPricePricingModelSchema = z.object({
  is: z
    .enum(['flat_fee', 'per_unit', 'tiered', 'volume', 'stairstep'])
    .optional(),
  is_not: z
    .enum(['flat_fee', 'per_unit', 'tiered', 'volume', 'stairstep'])
    .optional(),
  in: z
    .union([
      z.array(
        z
          .enum(['flat_fee', 'per_unit', 'tiered', 'volume', 'stairstep'])
          .optional(),
      ),
      z.enum(['flat_fee', 'per_unit', 'tiered', 'volume', 'stairstep']),
    ])
    .optional(),
  not_in: z
    .union([
      z.array(
        z
          .enum(['flat_fee', 'per_unit', 'tiered', 'volume', 'stairstep'])
          .optional(),
      ),
      z.enum(['flat_fee', 'per_unit', 'tiered', 'volume', 'stairstep']),
    ])
    .optional(),
});
const ListItemPriceItemIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
  not_in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
});
const ListItemPriceItemFamilyIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
  not_in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
});
const ListItemPriceItemTypeSchema = z.object({
  is: z.enum(['plan', 'addon', 'charge']).optional(),
  is_not: z.enum(['plan', 'addon', 'charge']).optional(),
  in: z
    .union([
      z.array(z.enum(['plan', 'addon', 'charge']).optional()),
      z.enum(['plan', 'addon', 'charge']),
    ])
    .optional(),
  not_in: z
    .union([
      z.array(z.enum(['plan', 'addon', 'charge']).optional()),
      z.enum(['plan', 'addon', 'charge']),
    ])
    .optional(),
});
const ListItemPriceCurrencyCodeSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
  not_in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
});
const ListItemPricePriceVariantIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
  not_in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
});
const ListItemPriceTrialPeriodSchema = z.object({
  is: z
    .union([z.number().int(), z.string().regex(RegExp('^-?\\d+$'))])
    .optional(),
  is_not: z
    .union([z.number().int(), z.string().regex(RegExp('^-?\\d+$'))])
    .optional(),
  lt: z
    .union([z.number().int(), z.string().regex(RegExp('^-?\\d+$'))])
    .optional(),
  lte: z
    .union([z.number().int(), z.string().regex(RegExp('^-?\\d+$'))])
    .optional(),
  gt: z
    .union([z.number().int(), z.string().regex(RegExp('^-?\\d+$'))])
    .optional(),
  gte: z
    .union([z.number().int(), z.string().regex(RegExp('^-?\\d+$'))])
    .optional(),
  between: z
    .union([
      z.array(z.number().int().optional()).min(2).max(2),
      z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')),
    ])
    .optional(),
});
const ListItemPriceTrialPeriodUnitSchema = z.object({
  is: z.enum(['day', 'month']).optional(),
  is_not: z.enum(['day', 'month']).optional(),
  in: z
    .union([
      z.array(z.enum(['day', 'month']).optional()),
      z.enum(['day', 'month']),
    ])
    .optional(),
  not_in: z
    .union([
      z.array(z.enum(['day', 'month']).optional()),
      z.enum(['day', 'month']),
    ])
    .optional(),
});
const ListItemPriceStatusSchema = z.object({
  is: z.enum(['active', 'archived', 'deleted']).optional(),
  is_not: z.enum(['active', 'archived', 'deleted']).optional(),
  in: z
    .union([
      z.array(z.enum(['active', 'archived', 'deleted']).optional()),
      z.enum(['active', 'archived', 'deleted']),
    ])
    .optional(),
  not_in: z
    .union([
      z.array(z.enum(['active', 'archived', 'deleted']).optional()),
      z.enum(['active', 'archived', 'deleted']),
    ])
    .optional(),
});
const ListItemPriceUpdatedAtSchema = z.object({
  after: z
    .union([z.number().int(), z.string().regex(RegExp('^\\d{10}$'))])
    .optional(),
  before: z
    .union([z.number().int(), z.string().regex(RegExp('^\\d{10}$'))])
    .optional(),
  on: z
    .union([z.number().int(), z.string().regex(RegExp('^\\d{10}$'))])
    .optional(),
  between: z
    .union([
      z.array(z.number().int().optional()).min(2).max(2),
      z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')),
    ])
    .optional(),
});
const ListItemPriceBusinessEntityIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_present: z.union([z.boolean(), z.enum(['true', 'false'])]).optional(),
});
const ListItemPriceIncludeSiteLevelResourcesSchema = z.object({
  is: z.union([z.boolean(), z.enum(['true', 'false'])]).optional(),
});
const ListItemPricePeriodUnitSchema = z.object({
  is: z.enum(['day', 'week', 'month', 'year']).optional(),
  is_not: z.enum(['day', 'week', 'month', 'year']).optional(),
  in: z
    .union([
      z.array(z.enum(['day', 'week', 'month', 'year']).optional()),
      z.enum(['day', 'week', 'month', 'year']),
    ])
    .optional(),
  not_in: z
    .union([
      z.array(z.enum(['day', 'week', 'month', 'year']).optional()),
      z.enum(['day', 'week', 'month', 'year']),
    ])
    .optional(),
});
const ListItemPricePeriodSchema = z.object({
  is: z
    .union([z.number().int(), z.string().regex(RegExp('^-?\\d+$'))])
    .optional(),
  is_not: z
    .union([z.number().int(), z.string().regex(RegExp('^-?\\d+$'))])
    .optional(),
  lt: z
    .union([z.number().int(), z.string().regex(RegExp('^-?\\d+$'))])
    .optional(),
  lte: z
    .union([z.number().int(), z.string().regex(RegExp('^-?\\d+$'))])
    .optional(),
  gt: z
    .union([z.number().int(), z.string().regex(RegExp('^-?\\d+$'))])
    .optional(),
  gte: z
    .union([z.number().int(), z.string().regex(RegExp('^-?\\d+$'))])
    .optional(),
  between: z
    .union([
      z.array(z.number().int().optional()).min(2).max(2),
      z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')),
    ])
    .optional(),
});
const ListItemPriceChannelSchema = z.object({
  is: z.enum(['web', 'app_store', 'play_store']).optional(),
  is_not: z.enum(['web', 'app_store', 'play_store']).optional(),
  in: z
    .union([
      z.array(z.enum(['web', 'app_store', 'play_store']).optional()),
      z.enum(['web', 'app_store', 'play_store']),
    ])
    .optional(),
  not_in: z
    .union([
      z.array(z.enum(['web', 'app_store', 'play_store']).optional()),
      z.enum(['web', 'app_store', 'play_store']),
    ])
    .optional(),
});
const ListItemPriceSortBySchema = z.looseObject({
  asc: z.enum(['name', 'id', 'updated_at']).optional(),
  desc: z.enum(['name', 'id', 'updated_at']).optional(),
});
const ListItemPriceBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  id: ListItemPriceIdSchema.optional(),
  name: ListItemPriceNameSchema.optional(),
  pricing_model: ListItemPricePricingModelSchema.optional(),
  item_id: ListItemPriceItemIdSchema.optional(),
  item_family_id: ListItemPriceItemFamilyIdSchema.optional(),
  item_type: ListItemPriceItemTypeSchema.optional(),
  currency_code: ListItemPriceCurrencyCodeSchema.optional(),
  price_variant_id: ListItemPricePriceVariantIdSchema.optional(),
  trial_period: ListItemPriceTrialPeriodSchema.optional(),
  trial_period_unit: ListItemPriceTrialPeriodUnitSchema.optional(),
  status: ListItemPriceStatusSchema.optional(),
  updated_at: ListItemPriceUpdatedAtSchema.optional(),
  business_entity_id: ListItemPriceBusinessEntityIdSchema.optional(),
  include_site_level_resources:
    ListItemPriceIncludeSiteLevelResourcesSchema.optional(),
  period_unit: ListItemPricePeriodUnitSchema.optional(),
  period: ListItemPricePeriodSchema.optional(),
  channel: ListItemPriceChannelSchema.optional(),
  sort_by: ListItemPriceSortBySchema.optional(),
});
export { ListItemPriceBodySchema };
export type ListItemPriceBody = z.infer<typeof ListItemPriceBodySchema>;

//ItemPrice.findApplicableItems

const FindApplicableItemsItemPriceSortBySchema = z.looseObject({
  asc: z.enum(['name', 'id', 'updated_at']).optional(),
  desc: z.enum(['name', 'id', 'updated_at']).optional(),
});
const FindApplicableItemsItemPriceBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  sort_by: FindApplicableItemsItemPriceSortBySchema.optional(),
});
export { FindApplicableItemsItemPriceBodySchema };
export type FindApplicableItemsItemPriceBody = z.infer<
  typeof FindApplicableItemsItemPriceBodySchema
>;

//ItemPrice.findApplicableItemPrices

const FindApplicableItemPricesItemPriceSortBySchema = z.looseObject({
  asc: z.enum(['name', 'id', 'updated_at']).optional(),
  desc: z.enum(['name', 'id', 'updated_at']).optional(),
});
const FindApplicableItemPricesItemPriceBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  item_id: z.string().max(100).optional(),
  sort_by: FindApplicableItemPricesItemPriceSortBySchema.optional(),
});
export { FindApplicableItemPricesItemPriceBodySchema };
export type FindApplicableItemPricesItemPriceBody = z.infer<
  typeof FindApplicableItemPricesItemPriceBodySchema
>;
