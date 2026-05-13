// Generated Zod schemas: CouponCode
// Actions: create
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
