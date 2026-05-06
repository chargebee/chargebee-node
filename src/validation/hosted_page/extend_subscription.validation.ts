// Generated Zod validator: HostedPage.extendSubscription
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const extendSubscriptionHostedPageSubscriptionSchema = z.object({
  id: z.string().max(50),
});
const extendSubscriptionHostedPageBodySchema = z.looseObject({
  expiry: z.number().int().min(1).max(500).optional(),
  billing_cycle: z.number().int().min(1).optional(),
  subscription: extendSubscriptionHostedPageSubscriptionSchema.optional(),
});
export { extendSubscriptionHostedPageBodySchema };
