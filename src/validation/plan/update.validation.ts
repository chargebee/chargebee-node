// Generated Zod validator: Plan.update
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const updatePlanMetaDataSchema = z.looseObject({});
const updatePlanTiersSchema = z.object({
  starting_unit: z.array(z.number().int().min(1).optional()).optional(),
  ending_unit: z.array(z.number().int().optional()).optional(),
  price: z.array(z.number().int().min(0).optional()).optional(),
  starting_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  ending_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  price_in_decimal: z.array(z.string().max(39).optional()).optional(),
});
const updatePlanTaxProvidersFieldsSchema = z.object({
  provider_name: z.array(z.string().max(50).optional()),
  field_id: z.array(z.string().max(50).optional()),
  field_value: z.array(z.string().max(50).optional()),
});
const updatePlanApplicableAddonsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
});
const updatePlanEventBasedAddonsSchema = z.object({
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
const updatePlanAttachedAddonsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  billing_cycles: z.array(z.number().int().min(1).optional()).optional(),
  type: z.array(z.enum(['recommended', 'mandatory']).optional()).optional(),
});
const updatePlanBodySchema = z.looseObject({
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
  meta_data: updatePlanMetaDataSchema.optional(),
  show_description_in_invoices: z.boolean().default(false).optional(),
  show_description_in_quotes: z.boolean().default(false).optional(),
  tiers: updatePlanTiersSchema.optional(),
  tax_providers_fields: updatePlanTaxProvidersFieldsSchema.optional(),
  applicable_addons: updatePlanApplicableAddonsSchema.optional(),
  event_based_addons: updatePlanEventBasedAddonsSchema.optional(),
  attached_addons: updatePlanAttachedAddonsSchema.optional(),
});
export { updatePlanBodySchema };
