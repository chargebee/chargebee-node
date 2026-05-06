// Generated Zod validator: Subscription.contractTermsForSubscription
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const contractTermsForSubscriptionSubscriptionSortBySchema = z.looseObject({
  asc: z.enum(['created_at']).optional(),
  desc: z.enum(['created_at']).optional(),
});
const contractTermsForSubscriptionSubscriptionBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  sort_by: contractTermsForSubscriptionSubscriptionSortBySchema.optional(),
});
export { contractTermsForSubscriptionSubscriptionBodySchema };
