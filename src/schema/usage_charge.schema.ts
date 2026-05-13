// Generated Zod schemas: UsageCharge
// Actions: retrieveUsageChargesForSubscription
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//UsageCharge.retrieveUsageChargesForSubscription

const RetrieveUsageChargesForSubscriptionUsageChargeFeatureIdSchema = z.object({
  is: z.string().min(1).optional(),
});
const RetrieveUsageChargesForSubscriptionUsageChargeBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  feature_id:
    RetrieveUsageChargesForSubscriptionUsageChargeFeatureIdSchema.optional(),
});
export { RetrieveUsageChargesForSubscriptionUsageChargeBodySchema };
export type RetrieveUsageChargesForSubscriptionUsageChargeBody = z.infer<
  typeof RetrieveUsageChargesForSubscriptionUsageChargeBodySchema
>;
