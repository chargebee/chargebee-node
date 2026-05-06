// Generated Zod validator: CouponSet.update
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const updateCouponSetMetaDataSchema = z.looseObject({});
const updateCouponSetBodySchema = z.looseObject({
  name: z.string().max(50).optional(),
  meta_data: updateCouponSetMetaDataSchema.optional(),
});
export { updateCouponSetBodySchema };
