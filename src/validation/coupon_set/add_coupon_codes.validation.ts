// Generated Zod validator: CouponSet.addCouponCodes
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const addCouponCodesCouponSetBodySchema = z.looseObject({
  code: z.array(z.string().max(50).optional()).optional(),
});
export { addCouponCodesCouponSetBodySchema };
