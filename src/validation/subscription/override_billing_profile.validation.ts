// Generated Zod validator: Subscription.overrideBillingProfile
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const overrideBillingProfileSubscriptionBodySchema = z.looseObject({
  payment_source_id: z.string().max(40).optional(),
  auto_collection: z.enum(['on', 'off']).optional(),
});
export { overrideBillingProfileSubscriptionBodySchema };
