// Generated Zod validator: Subscription.removeCoupons
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const removeCouponsSubscriptionBodySchema = z.looseObject({
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
});
export { removeCouponsSubscriptionBodySchema };
