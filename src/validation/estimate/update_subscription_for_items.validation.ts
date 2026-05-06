// Generated Zod validator: Estimate.updateSubscriptionForItems
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const updateSubscriptionForItemsEstimateSubscriptionSchema = z.object({
  id: z.string().max(50),
  setup_fee: z.number().int().min(0).optional(),
  start_date: z.number().int().optional(),
  trial_end: z.number().int().optional(),
  coupon: z.string().max(100).optional(),
  auto_collection: z.enum(['on', 'off']).optional(),
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
  free_period: z.number().int().min(1).optional(),
  free_period_unit: z.enum(['day', 'week', 'month', 'year']).optional(),
  trial_end_action: z
    .enum([
      'site_default',
      'plan_default',
      'activate_subscription',
      'cancel_subscription',
    ])
    .optional(),
});
const updateSubscriptionForItemsEstimateBillingAddressSchema = z.object({
  line1: z.string().max(150).optional(),
  line2: z.string().max(150).optional(),
  line3: z.string().max(150).optional(),
  city: z.string().max(50).optional(),
  state_code: z.string().max(50).optional(),
  zip: z.string().max(20).optional(),
  country: z.string().max(50).optional(),
  validation_status: z
    .enum(['not_validated', 'valid', 'partially_valid', 'invalid'])
    .optional(),
});
const updateSubscriptionForItemsEstimateShippingAddressSchema = z.object({
  line1: z.string().max(150).optional(),
  line2: z.string().max(150).optional(),
  line3: z.string().max(150).optional(),
  city: z.string().max(50).optional(),
  state_code: z.string().max(50).optional(),
  zip: z.string().max(20).optional(),
  country: z.string().max(50).optional(),
  validation_status: z
    .enum(['not_validated', 'valid', 'partially_valid', 'invalid'])
    .optional(),
});
const updateSubscriptionForItemsEstimateCustomerSchema = z.object({
  vat_number: z.string().max(20).optional(),
  vat_number_prefix: z.string().max(10).optional(),
  registered_for_gst: z.boolean().optional(),
  taxability: z.enum(['taxable', 'exempt']).optional(),
});
const updateSubscriptionForItemsEstimateBillingOverrideSchema = z.object({
  max_excess_payment_usage: z.number().int().min(-1).optional(),
  max_refundable_credits_usage: z.number().int().min(-1).optional(),
});
const updateSubscriptionForItemsEstimateSubscriptionItemsSchema = z.object({
  item_price_id: z.array(z.string().max(100).optional()),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  billing_cycles: z.array(z.number().int().min(0).optional()).optional(),
  trial_end: z.array(z.number().int().optional()).optional(),
  service_period_days: z
    .array(z.number().int().min(1).max(730).optional())
    .optional(),
  charge_on_event: z
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
  charge_once: z.array(z.boolean().optional()).optional(),
  charge_on_option: z
    .array(z.enum(['immediately', 'on_event']).optional())
    .optional(),
  item_type: z.array(z.enum(['plan', 'addon', 'charge']).optional()).optional(),
  proration_type: z
    .array(z.enum(['full_term', 'partial_term', 'none']).optional())
    .optional(),
});
const updateSubscriptionForItemsEstimateDiscountsSchema = z.object({
  apply_on: z
    .array(z.enum(['invoice_amount', 'specific_item_price']).optional())
    .optional(),
  duration_type: z.array(
    z.enum(['one_time', 'forever', 'limited_period']).optional(),
  ),
  percentage: z.array(z.number().min(0.01).max(100).optional()).optional(),
  amount: z.array(z.number().int().min(0).optional()).optional(),
  period: z.array(z.number().int().min(1).optional()).optional(),
  period_unit: z
    .array(z.enum(['day', 'week', 'month', 'year']).optional())
    .optional(),
  included_in_mrr: z.array(z.boolean().optional()).optional(),
  item_price_id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  operation_type: z.array(z.enum(['add', 'remove']).optional()),
  id: z.array(z.string().max(50).optional()).optional(),
});
const updateSubscriptionForItemsEstimateItemTiersSchema = z.object({
  item_price_id: z.array(z.string().max(100).optional()).optional(),
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
const updateSubscriptionForItemsEstimateBodySchema = z.looseObject({
  changes_scheduled_at: z.number().int().optional(),
  change_option: z
    .enum(['immediately', 'end_of_term', 'specific_date'])
    .optional(),
  mandatory_items_to_remove: z.array(z.string().max(100).optional()).optional(),
  replace_items_list: z.boolean().default(false).optional(),
  invoice_date: z.number().int().optional(),
  billing_cycles: z.number().int().min(0).optional(),
  terms_to_charge: z.number().int().min(1).optional(),
  reactivate_from: z.number().int().optional(),
  billing_alignment_mode: z.enum(['immediate', 'delayed']).optional(),
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  replace_coupon_list: z.boolean().default(false).optional(),
  prorate: z.boolean().optional(),
  end_of_term: z.boolean().default(false).optional(),
  force_term_reset: z.boolean().default(false).optional(),
  reactivate: z.boolean().optional(),
  include_delayed_charges: z.boolean().default(false).optional(),
  use_existing_balances: z.boolean().default(true).optional(),
  invoice_immediately: z.boolean().optional(),
  invoice_usages: z.boolean().default(false).optional(),
  subscription: updateSubscriptionForItemsEstimateSubscriptionSchema.optional(),
  billing_address:
    updateSubscriptionForItemsEstimateBillingAddressSchema.optional(),
  shipping_address:
    updateSubscriptionForItemsEstimateShippingAddressSchema.optional(),
  customer: updateSubscriptionForItemsEstimateCustomerSchema.optional(),
  billing_override:
    updateSubscriptionForItemsEstimateBillingOverrideSchema.optional(),
  subscription_items:
    updateSubscriptionForItemsEstimateSubscriptionItemsSchema.optional(),
  discounts: updateSubscriptionForItemsEstimateDiscountsSchema.optional(),
  item_tiers: updateSubscriptionForItemsEstimateItemTiersSchema.optional(),
});
export { updateSubscriptionForItemsEstimateBodySchema };
