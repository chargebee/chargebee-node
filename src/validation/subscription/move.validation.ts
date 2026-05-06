// Generated Zod validator: Subscription.move
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const moveSubscriptionBodySchema = z.looseObject({
  to_customer_id: z.string().max(50),
  copy_payment_source: z.boolean().default(false).optional(),
});
export { moveSubscriptionBodySchema };
