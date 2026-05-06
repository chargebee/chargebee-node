// Generated Zod validator: Coupon.create
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const createCouponMetaDataSchema = z.looseObject({});
const createCouponBodySchema = z.looseObject({
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
  meta_data: createCouponMetaDataSchema.optional(),
  included_in_mrr: z.boolean().optional(),
  period: z.number().int().min(1).optional(),
  period_unit: z.enum(['day', 'week', 'month', 'year']).optional(),
  plan_constraint: z.enum(['none', 'all', 'specific']).optional(),
  addon_constraint: z.enum(['none', 'all', 'specific']).optional(),
  plan_ids: z.array(z.string().max(100).optional()).optional(),
  addon_ids: z.array(z.string().max(100).optional()).optional(),
  status: z.enum(['active', 'archived']).optional(),
});
export { createCouponBodySchema };
