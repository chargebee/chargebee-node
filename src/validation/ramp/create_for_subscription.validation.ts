// Generated Zod validator: Ramp.createForSubscription
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const createForSubscriptionRampContractTermSchema = z.object({
  action_at_term_end: z
    .enum(['renew', 'evergreen', 'cancel', 'renew_once'])
    .optional(),
  cancellation_cutoff_period: z.number().int().optional(),
  renewal_billing_cycles: z.number().int().optional(),
});
const createForSubscriptionRampItemsToAddSchema = z.object({
  item_price_id: z.array(z.string().max(100).optional()),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  billing_cycles: z.array(z.number().int().min(0).optional()).optional(),
  service_period_days: z
    .array(z.number().int().min(1).max(730).optional())
    .optional(),
  charge_on_event: z
    .array(
      z
        .enum([
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
});
const createForSubscriptionRampItemsToUpdateSchema = z.object({
  item_price_id: z.array(z.string().max(100).optional()),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  billing_cycles: z.array(z.number().int().min(0).optional()).optional(),
  service_period_days: z
    .array(z.number().int().min(1).max(730).optional())
    .optional(),
  charge_on_event: z
    .array(
      z
        .enum([
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
});
const createForSubscriptionRampItemTiersSchema = z.object({
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
const createForSubscriptionRampCouponsToAddSchema = z.object({
  coupon_id: z.array(z.string().max(100).optional()).optional(),
  apply_till: z.array(z.number().int().optional()).optional(),
});
const createForSubscriptionRampDiscountsToAddSchema = z.object({
  apply_on: z.array(
    z.enum(['invoice_amount', 'specific_item_price']).optional(),
  ),
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
});
const createForSubscriptionRampBodySchema = z.looseObject({
  effective_from: z.number().int(),
  description: z.string().max(250).optional(),
  coupons_to_remove: z.array(z.string().max(100).optional()).optional(),
  discounts_to_remove: z.array(z.string().max(100).optional()).optional(),
  items_to_remove: z.array(z.string().max(100).optional()).optional(),
  contract_term: createForSubscriptionRampContractTermSchema.optional(),
  items_to_add: createForSubscriptionRampItemsToAddSchema.optional(),
  items_to_update: createForSubscriptionRampItemsToUpdateSchema.optional(),
  item_tiers: createForSubscriptionRampItemTiersSchema.optional(),
  coupons_to_add: createForSubscriptionRampCouponsToAddSchema.optional(),
  discounts_to_add: createForSubscriptionRampDiscountsToAddSchema.optional(),
});
export { createForSubscriptionRampBodySchema };
