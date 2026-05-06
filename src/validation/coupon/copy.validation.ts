// Generated Zod validator: Coupon.copy
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const copyCouponBodySchema = z.looseObject({
  from_site: z.string().max(50),
  id_at_from_site: z.string().max(100),
  id: z.string().max(100).optional(),
  for_site_merging: z.boolean().default(false).optional(),
});
export { copyCouponBodySchema };
