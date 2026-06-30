// Generated Zod schemas: CouponCode
// Actions: create, list
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//CouponCode.create

const CreateCouponCodeBodySchema = z.looseObject({
  coupon_id: z.string().max(100),
  coupon_set_name: z.string().max(50),
  code: z.string().max(50),
});
export { CreateCouponCodeBodySchema };
export type CreateCouponCodeBody = z.infer<typeof CreateCouponCodeBodySchema>;

//CouponCode.list

const ListCouponCodeCodeSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ListCouponCodeCouponIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ListCouponCodeCouponSetNameSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const ListCouponCodeStatusSchema = z.object({
  is: z.enum(['not_redeemed', 'redeemed', 'archived']).optional(),
  is_not: z.enum(['not_redeemed', 'redeemed', 'archived']).optional(),
  in: z.enum(['not_redeemed', 'redeemed', 'archived']).optional(),
  not_in: z.enum(['not_redeemed', 'redeemed', 'archived']).optional(),
});
const ListCouponCodeBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  code: ListCouponCodeCodeSchema.optional(),
  coupon_id: ListCouponCodeCouponIdSchema.optional(),
  coupon_set_name: ListCouponCodeCouponSetNameSchema.optional(),
  status: ListCouponCodeStatusSchema.optional(),
});
export { ListCouponCodeBodySchema };
export type ListCouponCodeBody = z.infer<typeof ListCouponCodeBodySchema>;
