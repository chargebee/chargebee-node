// Generated Zod validator: OmnichannelSubscription.move
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const moveOmnichannelSubscriptionBodySchema = z.looseObject({
  to_customer_id: z.string().max(50),
});
export { moveOmnichannelSubscriptionBodySchema };
