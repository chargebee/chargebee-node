// Generated Zod schemas: SubscriptionEntitlement
// Actions: subscriptionEntitlementsForSubscription, setSubscriptionEntitlementAvailability
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//SubscriptionEntitlement.subscriptionEntitlementsForSubscription

const SubscriptionEntitlementsForSubscriptionSubscriptionEntitlementBodySchema =
  z.looseObject({
    limit: z.number().int().min(1).max(100).optional(),
    offset: z.string().max(1000).optional(),
    include_drafts: z.boolean().default(false).optional(),
    embed: z.string().max(1000).optional(),
    include_scheduled_overrides: z.boolean().default(false).optional(),
  });
export { SubscriptionEntitlementsForSubscriptionSubscriptionEntitlementBodySchema };
export type SubscriptionEntitlementsForSubscriptionSubscriptionEntitlementBody =
  z.infer<
    typeof SubscriptionEntitlementsForSubscriptionSubscriptionEntitlementBodySchema
  >;

//SubscriptionEntitlement.setSubscriptionEntitlementAvailability

const SetSubscriptionEntitlementAvailabilitySubscriptionEntitlementSubscriptionEntitlementsSchema =
  z.object({
    feature_id: z.array(z.string().max(50).optional()),
  });
const SetSubscriptionEntitlementAvailabilitySubscriptionEntitlementBodySchema =
  z.looseObject({
    is_enabled: z.boolean(),
    subscription_entitlements:
      SetSubscriptionEntitlementAvailabilitySubscriptionEntitlementSubscriptionEntitlementsSchema.optional(),
  });
export { SetSubscriptionEntitlementAvailabilitySubscriptionEntitlementBodySchema };
export type SetSubscriptionEntitlementAvailabilitySubscriptionEntitlementBody =
  z.infer<
    typeof SetSubscriptionEntitlementAvailabilitySubscriptionEntitlementBodySchema
  >;
