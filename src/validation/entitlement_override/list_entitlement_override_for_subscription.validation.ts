// Generated Zod validator: EntitlementOverride.listEntitlementOverrideForSubscription
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const listEntitlementOverrideForSubscriptionEntitlementOverrideBodySchema =
  z.looseObject({
    limit: z.number().int().min(1).max(100).optional(),
    offset: z.string().max(1000).optional(),
    embed: z.string().max(1000).optional(),
    include_drafts: z.boolean().default(false).optional(),
    include_scheduled_overrides: z.boolean().default(false).optional(),
  });
export { listEntitlementOverrideForSubscriptionEntitlementOverrideBodySchema };
