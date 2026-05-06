// Generated Zod validator: UsageCharge.retrieveUsageChargesForSubscription
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const retrieveUsageChargesForSubscriptionUsageChargeFeatureIdSchema = z.object({
  is: z.string().min(1).optional(),
});
const retrieveUsageChargesForSubscriptionUsageChargeBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  feature_id:
    retrieveUsageChargesForSubscriptionUsageChargeFeatureIdSchema.optional(),
});
export { retrieveUsageChargesForSubscriptionUsageChargeBodySchema };
