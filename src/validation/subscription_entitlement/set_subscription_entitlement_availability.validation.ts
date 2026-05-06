// Generated Zod validator: SubscriptionEntitlement.setSubscriptionEntitlementAvailability
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const setSubscriptionEntitlementAvailabilitySubscriptionEntitlementSubscriptionEntitlementsSchema =
  z.object({
    feature_id: z.array(z.string().max(50).optional()),
  });
const setSubscriptionEntitlementAvailabilitySubscriptionEntitlementBodySchema =
  z.looseObject({
    is_enabled: z.boolean(),
    subscription_entitlements:
      setSubscriptionEntitlementAvailabilitySubscriptionEntitlementSubscriptionEntitlementsSchema.optional(),
  });
export { setSubscriptionEntitlementAvailabilitySubscriptionEntitlementBodySchema };
