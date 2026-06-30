// Generated Zod schemas: CouponSet
// Actions: create, addCouponCodes, list, update
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//CouponSet.create

const CreateCouponSetMetaDataSchema = z.looseObject({});
const CreateCouponSetBodySchema = z.looseObject({
  coupon_id: z.string().max(100),
  name: z.string().max(50),
  id: z.string().max(50),
  meta_data: CreateCouponSetMetaDataSchema.optional(),
});
export { CreateCouponSetBodySchema };
export type CreateCouponSetBody = z.infer<typeof CreateCouponSetBodySchema>;

//CouponSet.addCouponCodes

const AddCouponCodesCouponSetBodySchema = z.looseObject({
  code: z.array(z.string().max(50).optional()).optional(),
});
export { AddCouponCodesCouponSetBodySchema };
export type AddCouponCodesCouponSetBody = z.infer<
  typeof AddCouponCodesCouponSetBodySchema
>;

//CouponSet.list

const ListCouponSetIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ListCouponSetNameSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ListCouponSetCouponIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ListCouponSetTotalCountSchema = z.object({
  is: z.string().regex(RegExp('^-?\\d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  between: z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')).optional(),
});
const ListCouponSetRedeemedCountSchema = z.object({
  is: z.string().regex(RegExp('^-?\\d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  between: z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')).optional(),
});
const ListCouponSetArchivedCountSchema = z.object({
  is: z.string().regex(RegExp('^-?\\d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  between: z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')).optional(),
});
const ListCouponSetBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  id: ListCouponSetIdSchema.optional(),
  name: ListCouponSetNameSchema.optional(),
  coupon_id: ListCouponSetCouponIdSchema.optional(),
  total_count: ListCouponSetTotalCountSchema.optional(),
  redeemed_count: ListCouponSetRedeemedCountSchema.optional(),
  archived_count: ListCouponSetArchivedCountSchema.optional(),
});
export { ListCouponSetBodySchema };
export type ListCouponSetBody = z.infer<typeof ListCouponSetBodySchema>;

//CouponSet.update

const UpdateCouponSetMetaDataSchema = z.looseObject({});
const UpdateCouponSetBodySchema = z.looseObject({
  name: z.string().max(50).optional(),
  meta_data: UpdateCouponSetMetaDataSchema.optional(),
});
export { UpdateCouponSetBodySchema };
export type UpdateCouponSetBody = z.infer<typeof UpdateCouponSetBodySchema>;
