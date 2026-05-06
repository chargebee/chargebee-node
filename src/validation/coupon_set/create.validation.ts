// Generated Zod validator: CouponSet.create
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const createCouponSetMetaDataSchema = z.looseObject({});
const createCouponSetBodySchema = z.looseObject({
  coupon_id: z.string().max(100),
  name: z.string().max(50),
  id: z.string().max(50),
  meta_data: createCouponSetMetaDataSchema.optional(),
});
export { createCouponSetBodySchema };
