// Generated Zod schemas: Coupon
// Actions: create, createForItems, updateForItems, list, update, copy
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//Coupon.create

const CreateCouponMetaDataSchema = z.looseObject({});
const CreateCouponBodySchema = z.looseObject({
  id: z.string().max(100),
  name: z.string().max(50),
  invoice_name: z.string().max(100).optional(),
  discount_type: z
    .enum(['fixed_amount', 'percentage', 'offer_quantity'])
    .optional(),
  discount_amount: z.number().int().min(0).optional(),
  currency_code: z.string().max(3).optional(),
  discount_percentage: z.number().min(0.01).max(100).optional(),
  discount_quantity: z.number().int().min(1).optional(),
  apply_on: z.enum([
    'invoice_amount',
    'specified_items_total',
    'each_specified_item',
    'each_unit_of_specified_items',
  ]),
  duration_type: z.enum(['one_time', 'forever', 'limited_period']).optional(),
  duration_month: z.number().int().min(1).max(240).optional(),
  valid_till: z.number().int().optional(),
  max_redemptions: z.number().int().min(1).optional(),
  invoice_notes: z.string().max(2000).optional(),
  meta_data: CreateCouponMetaDataSchema.optional(),
  included_in_mrr: z.boolean().optional(),
  period: z.number().int().min(1).optional(),
  period_unit: z.enum(['day', 'week', 'month', 'year']).optional(),
  plan_constraint: z.enum(['none', 'all', 'specific']).optional(),
  addon_constraint: z.enum(['none', 'all', 'specific']).optional(),
  plan_ids: z.array(z.string().max(100).optional()).optional(),
  addon_ids: z.array(z.string().max(100).optional()).optional(),
  status: z.enum(['active', 'archived']).optional(),
});
export { CreateCouponBodySchema };
export type CreateCouponBody = z.infer<typeof CreateCouponBodySchema>;

//Coupon.createForItems

const CreateForItemsCouponMetaDataSchema = z.looseObject({});
const CreateForItemsCouponItemConstraintsSchema = z.object({
  constraint: z.array(
    z.enum(['none', 'all', 'specific', 'criteria']).optional(),
  ),
  item_type: z.array(z.enum(['plan', 'addon', 'charge']).optional()),
  item_price_ids: z.array(z.array(z.string().optional()).optional()).optional(),
});
const CreateForItemsCouponItemConstraintCriteriaSchema = z.object({
  item_type: z.array(z.enum(['plan', 'addon', 'charge']).optional()).optional(),
  item_family_ids: z
    .array(z.array(z.string().optional()).optional())
    .optional(),
  currencies: z.array(z.array(z.string().optional()).optional()).optional(),
  item_price_periods: z
    .array(z.array(z.string().optional()).optional())
    .optional(),
});
const CreateForItemsCouponCouponConstraintsSchema = z.object({
  entity_type: z.array(z.enum(['customer']).optional()),
  type: z.array(
    z
      .enum([
        'max_redemptions',
        'unique_by',
        'existing_customer',
        'new_customer',
      ])
      .optional(),
  ),
  value: z.array(z.string().max(65000).optional()).optional(),
});
const CreateForItemsCouponBodySchema = z.looseObject({
  id: z.string().max(100),
  name: z.string().max(50),
  invoice_name: z.string().max(100).optional(),
  discount_type: z
    .enum(['fixed_amount', 'percentage', 'offer_quantity'])
    .optional(),
  discount_amount: z.number().int().min(0).optional(),
  currency_code: z.string().max(3).optional(),
  discount_percentage: z.number().min(0.01).max(100).optional(),
  discount_quantity: z.number().int().min(1).optional(),
  apply_on: z.enum([
    'invoice_amount',
    'specified_items_total',
    'each_specified_item',
    'each_unit_of_specified_items',
  ]),
  duration_type: z.enum(['one_time', 'forever', 'limited_period']).optional(),
  duration_month: z.number().int().min(1).max(240).optional(),
  valid_from: z.number().int().optional(),
  valid_till: z.number().int().optional(),
  max_redemptions: z.number().int().min(1).optional(),
  invoice_notes: z.string().max(2000).optional(),
  meta_data: CreateForItemsCouponMetaDataSchema.optional(),
  included_in_mrr: z.boolean().optional(),
  period: z.number().int().min(1).optional(),
  period_unit: z.enum(['day', 'week', 'month', 'year']).optional(),
  status: z.enum(['active', 'archived']).optional(),
  item_constraints: CreateForItemsCouponItemConstraintsSchema.optional(),
  item_constraint_criteria:
    CreateForItemsCouponItemConstraintCriteriaSchema.optional(),
  coupon_constraints: CreateForItemsCouponCouponConstraintsSchema.optional(),
});
export { CreateForItemsCouponBodySchema };
export type CreateForItemsCouponBody = z.infer<
  typeof CreateForItemsCouponBodySchema
>;

//Coupon.updateForItems

const UpdateForItemsCouponMetaDataSchema = z.looseObject({});
const UpdateForItemsCouponItemConstraintsSchema = z.object({
  constraint: z.array(
    z.enum(['none', 'all', 'specific', 'criteria']).optional(),
  ),
  item_type: z.array(z.enum(['plan', 'addon', 'charge']).optional()),
  item_price_ids: z.array(z.array(z.string().optional()).optional()).optional(),
});
const UpdateForItemsCouponItemConstraintCriteriaSchema = z.object({
  item_type: z.array(z.enum(['plan', 'addon', 'charge']).optional()).optional(),
  item_family_ids: z
    .array(z.array(z.string().optional()).optional())
    .optional(),
  currencies: z.array(z.array(z.string().optional()).optional()).optional(),
  item_price_periods: z
    .array(z.array(z.string().optional()).optional())
    .optional(),
});
const UpdateForItemsCouponCouponConstraintsSchema = z.object({
  entity_type: z.array(z.enum(['customer']).optional()),
  type: z.array(
    z
      .enum([
        'max_redemptions',
        'unique_by',
        'existing_customer',
        'new_customer',
      ])
      .optional(),
  ),
  value: z.array(z.string().max(65000).optional()).optional(),
});
const UpdateForItemsCouponBodySchema = z.looseObject({
  name: z.string().max(50).optional(),
  invoice_name: z.string().max(100).optional(),
  discount_type: z
    .enum(['fixed_amount', 'percentage', 'offer_quantity'])
    .optional(),
  discount_amount: z.number().int().min(0).optional(),
  currency_code: z.string().max(3).optional(),
  discount_percentage: z.number().min(0.01).max(100).optional(),
  discount_quantity: z.number().int().min(1).optional(),
  apply_on: z
    .enum([
      'invoice_amount',
      'specified_items_total',
      'each_specified_item',
      'each_unit_of_specified_items',
    ])
    .optional(),
  duration_type: z.enum(['one_time', 'forever', 'limited_period']).optional(),
  duration_month: z.number().int().min(1).max(240).optional(),
  valid_from: z.number().int().optional(),
  valid_till: z.number().int().optional(),
  max_redemptions: z.number().int().min(1).optional(),
  invoice_notes: z.string().max(2000).optional(),
  meta_data: UpdateForItemsCouponMetaDataSchema.optional(),
  included_in_mrr: z.boolean().optional(),
  period: z.number().int().min(1).optional(),
  period_unit: z.enum(['day', 'week', 'month', 'year']).optional(),
  item_constraints: UpdateForItemsCouponItemConstraintsSchema.optional(),
  item_constraint_criteria:
    UpdateForItemsCouponItemConstraintCriteriaSchema.optional(),
  coupon_constraints: UpdateForItemsCouponCouponConstraintsSchema.optional(),
});
export { UpdateForItemsCouponBodySchema };
export type UpdateForItemsCouponBody = z.infer<
  typeof UpdateForItemsCouponBodySchema
>;

//Coupon.list

const ListCouponIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ListCouponNameSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ListCouponDiscountTypeSchema = z.object({
  is: z.enum(['fixed_amount', 'percentage', 'offer_quantity']).optional(),
  is_not: z.enum(['fixed_amount', 'percentage', 'offer_quantity']).optional(),
  in: z.enum(['fixed_amount', 'percentage', 'offer_quantity']).optional(),
  not_in: z.enum(['fixed_amount', 'percentage', 'offer_quantity']).optional(),
});
const ListCouponDurationTypeSchema = z.object({
  is: z.enum(['one_time', 'forever', 'limited_period']).optional(),
  is_not: z.enum(['one_time', 'forever', 'limited_period']).optional(),
  in: z.enum(['one_time', 'forever', 'limited_period']).optional(),
  not_in: z.enum(['one_time', 'forever', 'limited_period']).optional(),
});
const ListCouponStatusSchema = z.object({
  is: z.enum(['active', 'expired', 'archived', 'deleted', 'future']).optional(),
  is_not: z
    .enum(['active', 'expired', 'archived', 'deleted', 'future'])
    .optional(),
  in: z.enum(['active', 'expired', 'archived', 'deleted', 'future']).optional(),
  not_in: z
    .enum(['active', 'expired', 'archived', 'deleted', 'future'])
    .optional(),
});
const ListCouponApplyOnSchema = z.object({
  is: z
    .enum([
      'invoice_amount',
      'specified_items_total',
      'each_specified_item',
      'each_unit_of_specified_items',
    ])
    .optional(),
  is_not: z
    .enum([
      'invoice_amount',
      'specified_items_total',
      'each_specified_item',
      'each_unit_of_specified_items',
    ])
    .optional(),
  in: z
    .enum([
      'invoice_amount',
      'specified_items_total',
      'each_specified_item',
      'each_unit_of_specified_items',
    ])
    .optional(),
  not_in: z
    .enum([
      'invoice_amount',
      'specified_items_total',
      'each_specified_item',
      'each_unit_of_specified_items',
    ])
    .optional(),
});
const ListCouponCreatedAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const ListCouponUpdatedAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const ListCouponSortBySchema = z.looseObject({
  asc: z.enum(['created_at']).optional(),
  desc: z.enum(['created_at']).optional(),
});
const ListCouponCurrencyCodeSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ListCouponApplicableItemPriceIdsSchema = z.object({
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  is: z.string().min(1).optional(),
});
const ListCouponBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  id: ListCouponIdSchema.optional(),
  name: ListCouponNameSchema.optional(),
  discount_type: ListCouponDiscountTypeSchema.optional(),
  duration_type: ListCouponDurationTypeSchema.optional(),
  status: ListCouponStatusSchema.optional(),
  apply_on: ListCouponApplyOnSchema.optional(),
  created_at: ListCouponCreatedAtSchema.optional(),
  updated_at: ListCouponUpdatedAtSchema.optional(),
  sort_by: ListCouponSortBySchema.optional(),
  currency_code: ListCouponCurrencyCodeSchema.optional(),
  applicable_item_price_ids: ListCouponApplicableItemPriceIdsSchema.optional(),
});
export { ListCouponBodySchema };
export type ListCouponBody = z.infer<typeof ListCouponBodySchema>;

//Coupon.update

const UpdateCouponMetaDataSchema = z.looseObject({});
const UpdateCouponBodySchema = z.looseObject({
  name: z.string().max(50).optional(),
  invoice_name: z.string().max(100).optional(),
  discount_type: z
    .enum(['fixed_amount', 'percentage', 'offer_quantity'])
    .optional(),
  discount_amount: z.number().int().min(0).optional(),
  currency_code: z.string().max(3).optional(),
  discount_percentage: z.number().min(0.01).max(100).optional(),
  discount_quantity: z.number().int().min(1).optional(),
  apply_on: z
    .enum([
      'invoice_amount',
      'specified_items_total',
      'each_specified_item',
      'each_unit_of_specified_items',
    ])
    .optional(),
  duration_type: z.enum(['one_time', 'forever', 'limited_period']).optional(),
  duration_month: z.number().int().min(1).max(240).optional(),
  valid_till: z.number().int().optional(),
  max_redemptions: z.number().int().min(1).optional(),
  invoice_notes: z.string().max(2000).optional(),
  meta_data: UpdateCouponMetaDataSchema.optional(),
  included_in_mrr: z.boolean().optional(),
  period: z.number().int().min(1).optional(),
  period_unit: z.enum(['day', 'week', 'month', 'year']).optional(),
  plan_constraint: z.enum(['none', 'all', 'specific']).optional(),
  addon_constraint: z.enum(['none', 'all', 'specific']).optional(),
  plan_ids: z.array(z.string().max(100).optional()).optional(),
  addon_ids: z.array(z.string().max(100).optional()).optional(),
});
export { UpdateCouponBodySchema };
export type UpdateCouponBody = z.infer<typeof UpdateCouponBodySchema>;

//Coupon.copy

const CopyCouponBodySchema = z.looseObject({
  from_site: z.string().max(50),
  id_at_from_site: z.string().max(100),
  id: z.string().max(100).optional(),
  for_site_merging: z.boolean().default(false).optional(),
});
export { CopyCouponBodySchema };
export type CopyCouponBody = z.infer<typeof CopyCouponBodySchema>;
