// Generated Zod validator: UsageSummary.retrieveUsageSummaryForSubscription
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const retrieveUsageSummaryForSubscriptionUsageSummaryBodySchema = z.looseObject(
  {
    limit: z.number().int().min(1).max(100).optional(),
    offset: z.string().max(1000).optional(),
    feature_id: z.string().max(100),
    window_size: z.enum(['month', 'week', 'day', 'hour', 'minute']).optional(),
    timeframe_start: z.number().int().optional(),
    timeframe_end: z.number().int().optional(),
  },
);
export { retrieveUsageSummaryForSubscriptionUsageSummaryBodySchema };
