// Generated Zod validator: EntitlementOverride.addEntitlementOverrideForSubscription
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const addEntitlementOverrideForSubscriptionEntitlementOverrideEntitlementOverridesSchema =
  z.object({
    feature_id: z.array(z.string().max(50).optional()),
    entity_id: z.array(z.string().max(50).optional()).optional(),
    entity_type: z
      .array(z.enum(['plan_price', 'addon_price', 'charge']).optional())
      .optional(),
    value: z.array(z.string().max(50).optional()).optional(),
    expires_at: z.array(z.number().int().optional()).optional(),
    effective_from: z.array(z.number().int().optional()).optional(),
    is_enabled: z.array(z.boolean().optional()).optional(),
  });
const addEntitlementOverrideForSubscriptionEntitlementOverrideBodySchema =
  z.looseObject({
    action: z.enum(['upsert', 'remove']).optional(),
    entitlement_overrides:
      addEntitlementOverrideForSubscriptionEntitlementOverrideEntitlementOverridesSchema.optional(),
  });
export { addEntitlementOverrideForSubscriptionEntitlementOverrideBodySchema };
