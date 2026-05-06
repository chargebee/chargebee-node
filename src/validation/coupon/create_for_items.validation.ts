// Generated Zod validator: Coupon.createForItems
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const createForItemsCouponMetaDataSchema = z.looseObject({});
const createForItemsCouponItemConstraintsSchema = z.object({
  constraint: z.array(
    z.enum(['none', 'all', 'specific', 'criteria']).optional(),
  ),
  item_type: z.array(z.enum(['plan', 'addon', 'charge']).optional()),
  item_price_ids: z.array(z.array(z.string().optional()).optional()).optional(),
});
const createForItemsCouponItemConstraintCriteriaSchema = z.object({
  item_type: z.array(z.enum(['plan', 'addon', 'charge']).optional()).optional(),
  item_family_ids: z
    .array(z.array(z.string().optional()).optional())
    .optional(),
  currencies: z.array(z.array(z.string().optional()).optional()).optional(),
  item_price_periods: z
    .array(z.array(z.string().optional()).optional())
    .optional(),
});
const createForItemsCouponCouponConstraintsSchema = z.object({
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
const createForItemsCouponBodySchema = z.looseObject({
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
  meta_data: createForItemsCouponMetaDataSchema.optional(),
  included_in_mrr: z.boolean().optional(),
  period: z.number().int().min(1).optional(),
  period_unit: z.enum(['day', 'week', 'month', 'year']).optional(),
  status: z.enum(['active', 'archived']).optional(),
  item_constraints: createForItemsCouponItemConstraintsSchema.optional(),
  item_constraint_criteria:
    createForItemsCouponItemConstraintCriteriaSchema.optional(),
  coupon_constraints: createForItemsCouponCouponConstraintsSchema.optional(),
});
export { createForItemsCouponBodySchema };
