// Generated Zod schemas: Ramp
// Actions: createForSubscription, update, list
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//Ramp.createForSubscription

const CreateForSubscriptionRampBillingConfigurationSchema = z.object({
  po_number: z.string().max(100).optional(),
});
const CreateForSubscriptionRampContractTermSchema = z.object({
  action_at_term_end: z
    .enum(['renew', 'evergreen', 'cancel', 'renew_once'])
    .optional(),
  cancellation_cutoff_period: z.number().int().optional(),
  renewal_billing_cycles: z.number().int().optional(),
});
const CreateForSubscriptionRampItemsToAddItemSchema = z.object({
  item_price_id: z.string().max(100),
  quantity: z.number().int().min(1).optional(),
  quantity_in_decimal: z.string().max(33).optional(),
  unit_price: z.number().int().min(0).optional(),
  unit_price_in_decimal: z.string().max(39).optional(),
  billing_cycles: z.number().int().min(0).optional(),
  service_period_days: z.number().int().min(1).max(4000).optional(),
  charge_on_event: z
    .enum([
      'subscription_trial_start',
      'plan_activation',
      'subscription_activation',
      'contract_termination',
    ])
    .optional(),
  charge_once: z.boolean().optional(),
  charge_on_option: z.enum(['immediately', 'on_event']).optional(),
  description: z.string().max(2000).optional(),
});
const CreateForSubscriptionRampItemsToAddSchema = z.object({
  item_price_id: z.array(z.string().max(100).optional()),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  billing_cycles: z.array(z.number().int().min(0).optional()).optional(),
  service_period_days: z
    .array(z.number().int().min(1).max(4000).optional())
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
  description: z.array(z.string().max(2000).optional()).optional(),
});
const CreateForSubscriptionRampItemsToUpdateItemSchema = z.object({
  item_price_id: z.string().max(100),
  quantity: z.number().int().min(1).optional(),
  quantity_in_decimal: z.string().max(33).optional(),
  unit_price: z.number().int().min(0).optional(),
  unit_price_in_decimal: z.string().max(39).optional(),
  billing_cycles: z.number().int().min(0).optional(),
  service_period_days: z.number().int().min(1).max(4000).optional(),
  charge_on_event: z
    .enum([
      'subscription_trial_start',
      'plan_activation',
      'subscription_activation',
      'contract_termination',
    ])
    .optional(),
  charge_once: z.boolean().optional(),
  charge_on_option: z.enum(['immediately', 'on_event']).optional(),
  description: z.string().max(2000).optional(),
});
const CreateForSubscriptionRampItemsToUpdateSchema = z.object({
  item_price_id: z.array(z.string().max(100).optional()),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  billing_cycles: z.array(z.number().int().min(0).optional()).optional(),
  service_period_days: z
    .array(z.number().int().min(1).max(4000).optional())
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
  description: z.array(z.string().max(2000).optional()).optional(),
});
const CreateForSubscriptionRampItemTiersItemSchema = z.object({
  item_price_id: z.string().max(100).optional(),
  starting_unit: z.number().int().min(1).optional(),
  ending_unit: z.number().int().optional(),
  price: z.number().int().min(0).optional(),
  starting_unit_in_decimal: z.string().max(33).optional(),
  ending_unit_in_decimal: z.string().max(33).optional(),
  price_in_decimal: z.string().max(39).optional(),
  pricing_type: z.enum(['per_unit', 'flat_fee', 'package']).optional(),
  package_size: z.number().int().min(1).optional(),
});
const CreateForSubscriptionRampItemTiersSchema = z.object({
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
const CreateForSubscriptionRampCouponsToAddItemSchema = z.object({
  coupon_id: z.string().max(100).optional(),
  apply_till: z.number().int().optional(),
});
const CreateForSubscriptionRampCouponsToAddSchema = z.object({
  coupon_id: z.array(z.string().max(100).optional()).optional(),
  apply_till: z.array(z.number().int().optional()).optional(),
});
const CreateForSubscriptionRampDiscountsToAddItemSchema = z.object({
  apply_on: z.enum(['invoice_amount', 'specific_item_price']),
  duration_type: z.enum(['one_time', 'forever', 'limited_period']),
  percentage: z.number().min(0.01).max(100).optional(),
  amount: z.number().int().min(0).optional(),
  quantity: z.number().int().min(1).optional(),
  period: z.number().int().min(1).optional(),
  period_unit: z.enum(['day', 'week', 'month', 'year']).optional(),
  included_in_mrr: z.boolean().optional(),
  item_price_id: z.string().max(100).optional(),
});
const CreateForSubscriptionRampDiscountsToAddSchema = z.object({
  apply_on: z.array(
    z.enum(['invoice_amount', 'specific_item_price']).optional(),
  ),
  duration_type: z.array(
    z.enum(['one_time', 'forever', 'limited_period']).optional(),
  ),
  percentage: z.array(z.number().min(0.01).max(100).optional()).optional(),
  amount: z.array(z.number().int().min(0).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  period: z.array(z.number().int().min(1).optional()).optional(),
  period_unit: z
    .array(z.enum(['day', 'week', 'month', 'year']).optional())
    .optional(),
  included_in_mrr: z.array(z.boolean().optional()).optional(),
  item_price_id: z.array(z.string().max(100).optional()).optional(),
});
const CreateForSubscriptionRampBodySchema = z.looseObject({
  effective_from: z.number().int(),
  description: z.string().max(250).optional(),
  coupons_to_remove: z.array(z.string().max(100).optional()).optional(),
  discounts_to_remove: z.array(z.string().max(100).optional()).optional(),
  items_to_remove: z.array(z.string().max(100).optional()).optional(),
  billing_configuration:
    CreateForSubscriptionRampBillingConfigurationSchema.optional(),
  contract_term: CreateForSubscriptionRampContractTermSchema.optional(),
  items_to_add: z
    .union([
      z.array(CreateForSubscriptionRampItemsToAddItemSchema.optional()),
      CreateForSubscriptionRampItemsToAddSchema,
    ])
    .optional(),
  items_to_update: z
    .union([
      z.array(CreateForSubscriptionRampItemsToUpdateItemSchema.optional()),
      CreateForSubscriptionRampItemsToUpdateSchema,
    ])
    .optional(),
  item_tiers: z
    .union([
      z.array(CreateForSubscriptionRampItemTiersItemSchema.optional()),
      CreateForSubscriptionRampItemTiersSchema,
    ])
    .optional(),
  coupons_to_add: z
    .union([
      z.array(CreateForSubscriptionRampCouponsToAddItemSchema.optional()),
      CreateForSubscriptionRampCouponsToAddSchema,
    ])
    .optional(),
  discounts_to_add: z
    .union([
      z.array(CreateForSubscriptionRampDiscountsToAddItemSchema.optional()),
      CreateForSubscriptionRampDiscountsToAddSchema,
    ])
    .optional(),
});
export { CreateForSubscriptionRampBodySchema };
export type CreateForSubscriptionRampBody = z.infer<
  typeof CreateForSubscriptionRampBodySchema
>;

//Ramp.update

const UpdateRampBillingConfigurationSchema = z.object({
  po_number: z.string().max(100).optional(),
});
const UpdateRampContractTermSchema = z.object({
  action_at_term_end: z
    .enum(['renew', 'evergreen', 'cancel', 'renew_once'])
    .optional(),
  cancellation_cutoff_period: z.number().int().optional(),
  renewal_billing_cycles: z.number().int().optional(),
});
const UpdateRampItemsToAddItemSchema = z.object({
  item_price_id: z.string().max(100),
  quantity: z.number().int().min(1).optional(),
  quantity_in_decimal: z.string().max(33).optional(),
  unit_price: z.number().int().min(0).optional(),
  unit_price_in_decimal: z.string().max(39).optional(),
  billing_cycles: z.number().int().min(0).optional(),
  service_period_days: z.number().int().min(1).max(4000).optional(),
  charge_on_event: z
    .enum([
      'subscription_trial_start',
      'plan_activation',
      'subscription_activation',
      'contract_termination',
    ])
    .optional(),
  charge_once: z.boolean().optional(),
  charge_on_option: z.enum(['immediately', 'on_event']).optional(),
  description: z.string().max(2000).optional(),
});
const UpdateRampItemsToAddSchema = z.object({
  item_price_id: z.array(z.string().max(100).optional()),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  billing_cycles: z.array(z.number().int().min(0).optional()).optional(),
  service_period_days: z
    .array(z.number().int().min(1).max(4000).optional())
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
  description: z.array(z.string().max(2000).optional()).optional(),
});
const UpdateRampItemsToUpdateItemSchema = z.object({
  item_price_id: z.string().max(100),
  quantity: z.number().int().min(1).optional(),
  quantity_in_decimal: z.string().max(33).optional(),
  unit_price: z.number().int().min(0).optional(),
  unit_price_in_decimal: z.string().max(39).optional(),
  billing_cycles: z.number().int().min(0).optional(),
  service_period_days: z.number().int().min(1).max(4000).optional(),
  charge_on_event: z
    .enum([
      'subscription_trial_start',
      'plan_activation',
      'subscription_activation',
      'contract_termination',
    ])
    .optional(),
  charge_once: z.boolean().optional(),
  charge_on_option: z.enum(['immediately', 'on_event']).optional(),
  description: z.string().max(2000).optional(),
});
const UpdateRampItemsToUpdateSchema = z.object({
  item_price_id: z.array(z.string().max(100).optional()),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  billing_cycles: z.array(z.number().int().min(0).optional()).optional(),
  service_period_days: z
    .array(z.number().int().min(1).max(4000).optional())
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
  description: z.array(z.string().max(2000).optional()).optional(),
});
const UpdateRampItemTiersItemSchema = z.object({
  item_price_id: z.string().max(100).optional(),
  starting_unit: z.number().int().min(1).optional(),
  ending_unit: z.number().int().optional(),
  price: z.number().int().min(0).optional(),
  starting_unit_in_decimal: z.string().max(33).optional(),
  ending_unit_in_decimal: z.string().max(33).optional(),
  price_in_decimal: z.string().max(39).optional(),
  pricing_type: z.enum(['per_unit', 'flat_fee', 'package']).optional(),
  package_size: z.number().int().min(1).optional(),
});
const UpdateRampItemTiersSchema = z.object({
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
const UpdateRampCouponsToAddItemSchema = z.object({
  coupon_id: z.string().max(100).optional(),
  apply_till: z.number().int().optional(),
});
const UpdateRampCouponsToAddSchema = z.object({
  coupon_id: z.array(z.string().max(100).optional()).optional(),
  apply_till: z.array(z.number().int().optional()).optional(),
});
const UpdateRampDiscountsToAddItemSchema = z.object({
  apply_on: z.enum(['invoice_amount', 'specific_item_price']),
  duration_type: z.enum(['one_time', 'forever', 'limited_period']),
  percentage: z.number().min(0.01).max(100).optional(),
  amount: z.number().int().min(0).optional(),
  quantity: z.number().int().min(1).optional(),
  period: z.number().int().min(1).optional(),
  period_unit: z.enum(['day', 'week', 'month', 'year']).optional(),
  included_in_mrr: z.boolean().optional(),
  item_price_id: z.string().max(100).optional(),
});
const UpdateRampDiscountsToAddSchema = z.object({
  apply_on: z.array(
    z.enum(['invoice_amount', 'specific_item_price']).optional(),
  ),
  duration_type: z.array(
    z.enum(['one_time', 'forever', 'limited_period']).optional(),
  ),
  percentage: z.array(z.number().min(0.01).max(100).optional()).optional(),
  amount: z.array(z.number().int().min(0).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  period: z.array(z.number().int().min(1).optional()).optional(),
  period_unit: z
    .array(z.enum(['day', 'week', 'month', 'year']).optional())
    .optional(),
  included_in_mrr: z.array(z.boolean().optional()).optional(),
  item_price_id: z.array(z.string().max(100).optional()).optional(),
});
const UpdateRampBodySchema = z.looseObject({
  effective_from: z.number().int(),
  description: z.string().max(250).optional(),
  coupons_to_remove: z.array(z.string().max(100).optional()).optional(),
  discounts_to_remove: z.array(z.string().max(100).optional()).optional(),
  items_to_remove: z.array(z.string().max(100).optional()).optional(),
  billing_configuration: UpdateRampBillingConfigurationSchema.optional(),
  contract_term: UpdateRampContractTermSchema.optional(),
  items_to_add: z
    .union([
      z.array(UpdateRampItemsToAddItemSchema.optional()),
      UpdateRampItemsToAddSchema,
    ])
    .optional(),
  items_to_update: z
    .union([
      z.array(UpdateRampItemsToUpdateItemSchema.optional()),
      UpdateRampItemsToUpdateSchema,
    ])
    .optional(),
  item_tiers: z
    .union([
      z.array(UpdateRampItemTiersItemSchema.optional()),
      UpdateRampItemTiersSchema,
    ])
    .optional(),
  coupons_to_add: z
    .union([
      z.array(UpdateRampCouponsToAddItemSchema.optional()),
      UpdateRampCouponsToAddSchema,
    ])
    .optional(),
  discounts_to_add: z
    .union([
      z.array(UpdateRampDiscountsToAddItemSchema.optional()),
      UpdateRampDiscountsToAddSchema,
    ])
    .optional(),
});
export { UpdateRampBodySchema };
export type UpdateRampBody = z.infer<typeof UpdateRampBodySchema>;

//Ramp.list

const ListRampStatusSchema = z.object({
  in: z
    .union([
      z.array(z.enum(['scheduled', 'succeeded', 'failed', 'draft']).optional()),
      z.enum(['scheduled', 'succeeded', 'failed', 'draft']),
    ])
    .optional(),
  is: z.enum(['scheduled', 'succeeded', 'failed', 'draft']).optional(),
});
const ListRampSubscriptionIdSchema = z.object({
  in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
  is: z.string().min(1).optional(),
});
const ListRampEffectiveFromSchema = z.object({
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
const ListRampUpdatedAtSchema = z.object({
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
const ListRampSortBySchema = z.looseObject({
  asc: z.enum(['effective_from', 'updated_at']).optional(),
  desc: z.enum(['effective_from', 'updated_at']).optional(),
});
const ListRampBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  include_deleted: z.boolean().default(false).optional(),
  status: ListRampStatusSchema.optional(),
  subscription_id: ListRampSubscriptionIdSchema,
  effective_from: ListRampEffectiveFromSchema.optional(),
  updated_at: ListRampUpdatedAtSchema.optional(),
  sort_by: ListRampSortBySchema.optional(),
});
export { ListRampBodySchema };
export type ListRampBody = z.infer<typeof ListRampBodySchema>;
