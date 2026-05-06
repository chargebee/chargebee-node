// Generated Zod validator: CouponCode.create
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const createCouponCodeBodySchema = z.looseObject({
  coupon_id: z.string().max(100),
  coupon_set_name: z.string().max(50),
  code: z.string().max(50),
});
export { createCouponCodeBodySchema };
