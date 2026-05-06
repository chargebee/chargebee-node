// Generated Zod validator: InAppSubscription.retrieveStoreSubs
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const retrieveStoreSubsInAppSubscriptionBodySchema = z.looseObject({
  receipt: z.string().max(65000),
});
export { retrieveStoreSubsInAppSubscriptionBodySchema };
