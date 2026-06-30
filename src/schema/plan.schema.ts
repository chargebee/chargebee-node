// Generated Zod schemas: Plan
// Actions: create, update, list, copy
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//Plan.create

const CreatePlanMetaDataSchema = z.looseObject({});
const CreatePlanTiersSchema = z.object({
  starting_unit: z.array(z.number().int().min(1).optional()).optional(),
  ending_unit: z.array(z.number().int().optional()).optional(),
  price: z.array(z.number().int().min(0).optional()).optional(),
  starting_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  ending_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  price_in_decimal: z.array(z.string().max(39).optional()).optional(),
});
const CreatePlanTaxProvidersFieldsSchema = z.object({
  provider_name: z.array(z.string().max(50).optional()),
  field_id: z.array(z.string().max(50).optional()),
  field_value: z.array(z.string().max(50).optional()),
});
const CreatePlanApplicableAddonsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
});
const CreatePlanEventBasedAddonsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  on_event: z
    .array(
      z
        .enum([
          'subscription_creation',
          'subscription_trial_start',
          'plan_activation',
          'subscription_activation',
          'contract_termination',
        ])
        .optional(),
    )
    .optional(),
  charge_once: z.array(z.boolean().default(true).optional()).optional(),
});
const CreatePlanAttachedAddonsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  billing_cycles: z.array(z.number().int().min(1).optional()).optional(),
  type: z.array(z.enum(['recommended', 'mandatory']).optional()).optional(),
});
const CreatePlanBodySchema = z.looseObject({
  id: z.string().max(100),
  name: z.string().max(100),
  invoice_name: z.string().max(100).optional(),
  description: z.string().max(2000).optional(),
  trial_period: z.number().int().min(1).optional(),
  trial_period_unit: z.enum(['day', 'month']).optional(),
  trial_end_action: z
    .enum(['site_default', 'activate_subscription', 'cancel_subscription'])
    .optional(),
  period: z.number().int().min(1).optional(),
  period_unit: z.enum(['day', 'week', 'month', 'year']).optional(),
  setup_cost: z.number().int().min(1).optional(),
  price: z.number().int().min(0).optional(),
  price_in_decimal: z.string().max(39).optional(),
  currency_code: z.string().max(3).optional(),
  billing_cycles: z.number().int().min(1).optional(),
  pricing_model: z
    .enum(['flat_fee', 'per_unit', 'tiered', 'volume', 'stairstep'])
    .optional(),
  charge_model: z
    .enum(['flat_fee', 'per_unit', 'tiered', 'volume', 'stairstep'])
    .optional(),
  free_quantity: z.number().int().min(0).optional(),
  free_quantity_in_decimal: z.string().max(33).optional(),
  addon_applicability: z.enum(['all', 'restricted']).optional(),
  downgrade_penalty: z.number().min(0.01).max(100).optional(),
  redirect_url: z.string().max(500).optional(),
  enabled_in_hosted_pages: z.boolean().default(true).optional(),
  enabled_in_portal: z.boolean().default(true).optional(),
  taxable: z.boolean().default(true).optional(),
  tax_profile_id: z.string().max(50).optional(),
  tax_code: z.string().max(50).optional(),
  hsn_code: z.string().max(50).optional(),
  taxjar_product_code: z.string().max(50).optional(),
  avalara_sale_type: z
    .enum(['wholesale', 'retail', 'consumed', 'vendor_use'])
    .optional(),
  avalara_transaction_type: z.number().int().optional(),
  avalara_service_type: z.number().int().optional(),
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
  invoice_notes: z.string().max(2000).optional(),
  meta_data: CreatePlanMetaDataSchema.optional(),
  show_description_in_invoices: z.boolean().default(false).optional(),
  show_description_in_quotes: z.boolean().default(false).optional(),
  giftable: z.boolean().default(false).optional(),
  status: z.enum(['active', 'archived']).optional(),
  claim_url: z.string().max(500).optional(),
  tiers: CreatePlanTiersSchema.optional(),
  tax_providers_fields: CreatePlanTaxProvidersFieldsSchema.optional(),
  applicable_addons: CreatePlanApplicableAddonsSchema.optional(),
  event_based_addons: CreatePlanEventBasedAddonsSchema.optional(),
  attached_addons: CreatePlanAttachedAddonsSchema.optional(),
});
export { CreatePlanBodySchema };
export type CreatePlanBody = z.infer<typeof CreatePlanBodySchema>;

//Plan.update

const UpdatePlanMetaDataSchema = z.looseObject({});
const UpdatePlanTiersSchema = z.object({
  starting_unit: z.array(z.number().int().min(1).optional()).optional(),
  ending_unit: z.array(z.number().int().optional()).optional(),
  price: z.array(z.number().int().min(0).optional()).optional(),
  starting_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  ending_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  price_in_decimal: z.array(z.string().max(39).optional()).optional(),
});
const UpdatePlanTaxProvidersFieldsSchema = z.object({
  provider_name: z.array(z.string().max(50).optional()),
  field_id: z.array(z.string().max(50).optional()),
  field_value: z.array(z.string().max(50).optional()),
});
const UpdatePlanApplicableAddonsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
});
const UpdatePlanEventBasedAddonsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  on_event: z
    .array(
      z
        .enum([
          'subscription_creation',
          'subscription_trial_start',
          'plan_activation',
          'subscription_activation',
          'contract_termination',
        ])
        .optional(),
    )
    .optional(),
  charge_once: z.array(z.boolean().default(true).optional()).optional(),
});
const UpdatePlanAttachedAddonsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  billing_cycles: z.array(z.number().int().min(1).optional()).optional(),
  type: z.array(z.enum(['recommended', 'mandatory']).optional()).optional(),
});
const UpdatePlanBodySchema = z.looseObject({
  name: z.string().max(100).optional(),
  invoice_name: z.string().max(100).optional(),
  description: z.string().max(2000).optional(),
  trial_period: z.number().int().min(0).optional(),
  trial_period_unit: z.enum(['day', 'month']).optional(),
  trial_end_action: z
    .enum(['site_default', 'activate_subscription', 'cancel_subscription'])
    .optional(),
  period: z.number().int().min(1).optional(),
  period_unit: z.enum(['day', 'week', 'month', 'year']).optional(),
  setup_cost: z.number().int().min(1).optional(),
  price: z.number().int().min(0).optional(),
  price_in_decimal: z.string().max(39).optional(),
  currency_code: z.string().max(3).optional(),
  billing_cycles: z.number().int().min(1).optional(),
  pricing_model: z
    .enum(['flat_fee', 'per_unit', 'tiered', 'volume', 'stairstep'])
    .optional(),
  charge_model: z
    .enum(['flat_fee', 'per_unit', 'tiered', 'volume', 'stairstep'])
    .optional(),
  free_quantity: z.number().int().min(0).optional(),
  free_quantity_in_decimal: z.string().max(33).optional(),
  addon_applicability: z.enum(['all', 'restricted']).optional(),
  downgrade_penalty: z.number().min(0.01).max(100).optional(),
  redirect_url: z.string().max(500).optional(),
  enabled_in_hosted_pages: z.boolean().default(true).optional(),
  enabled_in_portal: z.boolean().default(true).optional(),
  taxable: z.boolean().default(true).optional(),
  tax_profile_id: z.string().max(50).optional(),
  tax_code: z.string().max(50).optional(),
  hsn_code: z.string().max(50).optional(),
  taxjar_product_code: z.string().max(50).optional(),
  avalara_sale_type: z
    .enum(['wholesale', 'retail', 'consumed', 'vendor_use'])
    .optional(),
  avalara_transaction_type: z.number().int().optional(),
  avalara_service_type: z.number().int().optional(),
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
  invoice_notes: z.string().max(2000).optional(),
  meta_data: UpdatePlanMetaDataSchema.optional(),
  show_description_in_invoices: z.boolean().default(false).optional(),
  show_description_in_quotes: z.boolean().default(false).optional(),
  tiers: UpdatePlanTiersSchema.optional(),
  tax_providers_fields: UpdatePlanTaxProvidersFieldsSchema.optional(),
  applicable_addons: UpdatePlanApplicableAddonsSchema.optional(),
  event_based_addons: UpdatePlanEventBasedAddonsSchema.optional(),
  attached_addons: UpdatePlanAttachedAddonsSchema.optional(),
});
export { UpdatePlanBodySchema };
export type UpdatePlanBody = z.infer<typeof UpdatePlanBodySchema>;

//Plan.list

const ListPlanIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ListPlanNameSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ListPlanPriceSchema = z.object({
  is: z.string().regex(RegExp('^-?\\d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  between: z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')).optional(),
});
const ListPlanPeriodSchema = z.object({
  is: z.string().regex(RegExp('^-?\\d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  between: z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')).optional(),
});
const ListPlanPeriodUnitSchema = z.object({
  is: z.enum(['day', 'week', 'month', 'year']).optional(),
  is_not: z.enum(['day', 'week', 'month', 'year']).optional(),
  in: z.enum(['day', 'week', 'month', 'year']).optional(),
  not_in: z.enum(['day', 'week', 'month', 'year']).optional(),
});
const ListPlanTrialPeriodSchema = z.object({
  is: z.string().regex(RegExp('^-?\\d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  between: z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')).optional(),
  is_present: z.enum(['true', 'false']).optional(),
});
const ListPlanTrialPeriodUnitSchema = z.object({
  is: z.enum(['day', 'month']).optional(),
  is_not: z.enum(['day', 'month']).optional(),
  in: z.enum(['day', 'month']).optional(),
  not_in: z.enum(['day', 'month']).optional(),
});
const ListPlanAddonApplicabilitySchema = z.object({
  is: z.enum(['all', 'restricted']).optional(),
  is_not: z.enum(['all', 'restricted']).optional(),
  in: z.enum(['all', 'restricted']).optional(),
  not_in: z.enum(['all', 'restricted']).optional(),
});
const ListPlanGiftableSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const ListPlanChargeModelSchema = z.object({
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
const ListPlanPricingModelSchema = z.object({
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
const ListPlanStatusSchema = z.object({
  is: z.enum(['active', 'archived', 'deleted']).optional(),
  is_not: z.enum(['active', 'archived', 'deleted']).optional(),
  in: z.enum(['active', 'archived', 'deleted']).optional(),
  not_in: z.enum(['active', 'archived', 'deleted']).optional(),
});
const ListPlanUpdatedAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const ListPlanCurrencyCodeSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ListPlanChannelSchema = z.object({
  is: z.enum(['web', 'app_store', 'play_store']).optional(),
  is_not: z.enum(['web', 'app_store', 'play_store']).optional(),
  in: z.enum(['web', 'app_store', 'play_store']).optional(),
  not_in: z.enum(['web', 'app_store', 'play_store']).optional(),
});
const ListPlanBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  id: ListPlanIdSchema.optional(),
  name: ListPlanNameSchema.optional(),
  price: ListPlanPriceSchema.optional(),
  period: ListPlanPeriodSchema.optional(),
  period_unit: ListPlanPeriodUnitSchema.optional(),
  trial_period: ListPlanTrialPeriodSchema.optional(),
  trial_period_unit: ListPlanTrialPeriodUnitSchema.optional(),
  addon_applicability: ListPlanAddonApplicabilitySchema.optional(),
  giftable: ListPlanGiftableSchema.optional(),
  charge_model: ListPlanChargeModelSchema.optional(),
  pricing_model: ListPlanPricingModelSchema.optional(),
  status: ListPlanStatusSchema.optional(),
  updated_at: ListPlanUpdatedAtSchema.optional(),
  currency_code: ListPlanCurrencyCodeSchema.optional(),
  channel: ListPlanChannelSchema.optional(),
  include_deleted: z.boolean().default(false).optional(),
});
export { ListPlanBodySchema };
export type ListPlanBody = z.infer<typeof ListPlanBodySchema>;

//Plan.copy

const CopyPlanBodySchema = z.looseObject({
  from_site: z.string().max(50),
  id_at_from_site: z.string().max(100),
  id: z.string().max(100).optional(),
  for_site_merging: z.boolean().default(false).optional(),
});
export { CopyPlanBodySchema };
export type CopyPlanBody = z.infer<typeof CopyPlanBodySchema>;
