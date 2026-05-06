// Generated Zod validator: Subscription.changeTermEnd
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const changeTermEndSubscriptionBodySchema = z.looseObject({
  term_ends_at: z.number().int(),
  prorate: z.boolean().optional(),
  invoice_immediately: z.boolean().optional(),
});
export { changeTermEndSubscriptionBodySchema };
