// Generated Zod schemas: CouponSet
// Actions: create, addCouponCodes, update
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

//CouponSet.update

const UpdateCouponSetMetaDataSchema = z.looseObject({});
const UpdateCouponSetBodySchema = z.looseObject({
  name: z.string().max(50).optional(),
  meta_data: UpdateCouponSetMetaDataSchema.optional(),
});
export { UpdateCouponSetBodySchema };
export type UpdateCouponSetBody = z.infer<typeof UpdateCouponSetBodySchema>;
