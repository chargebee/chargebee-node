// Generated Zod schemas: EntitlementOverride
// Actions: addEntitlementOverrideForSubscription, listEntitlementOverrideForSubscription
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//EntitlementOverride.addEntitlementOverrideForSubscription

const AddEntitlementOverrideForSubscriptionEntitlementOverrideEntitlementOverridesItemSchema =
  z.object({
    feature_id: z.string().max(50),
    entity_id: z.string().max(100).optional(),
    entity_type: z
      .enum(['plan_price', 'addon_price', 'charge', 'charge_price'])
      .optional(),
    value: z.string().max(50).optional(),
    expires_at: z.number().int().optional(),
    effective_from: z.number().int().optional(),
    is_enabled: z.boolean().optional(),
  });
const AddEntitlementOverrideForSubscriptionEntitlementOverrideEntitlementOverridesSchema =
  z.object({
    feature_id: z.array(z.string().max(50).optional()),
    entity_id: z.array(z.string().max(100).optional()).optional(),
    entity_type: z
      .array(
        z
          .enum(['plan_price', 'addon_price', 'charge', 'charge_price'])
          .optional(),
      )
      .optional(),
    value: z.array(z.string().max(50).optional()).optional(),
    expires_at: z.array(z.number().int().optional()).optional(),
    effective_from: z.array(z.number().int().optional()).optional(),
    is_enabled: z.array(z.boolean().optional()).optional(),
  });
const AddEntitlementOverrideForSubscriptionEntitlementOverrideBodySchema =
  z.looseObject({
    action: z.enum(['upsert', 'remove']).optional(),
    entitlement_overrides: z
      .union([
        z.array(
          AddEntitlementOverrideForSubscriptionEntitlementOverrideEntitlementOverridesItemSchema.optional(),
        ),
        AddEntitlementOverrideForSubscriptionEntitlementOverrideEntitlementOverridesSchema,
      ])
      .optional(),
  });
export { AddEntitlementOverrideForSubscriptionEntitlementOverrideBodySchema };
export type AddEntitlementOverrideForSubscriptionEntitlementOverrideBody =
  z.infer<
    typeof AddEntitlementOverrideForSubscriptionEntitlementOverrideBodySchema
  >;

//EntitlementOverride.listEntitlementOverrideForSubscription

const ListEntitlementOverrideForSubscriptionEntitlementOverrideBodySchema =
  z.looseObject({
    limit: z.number().int().min(1).max(100).optional(),
    offset: z.string().max(1000).optional(),
    embed: z.string().max(1000).optional(),
    include_drafts: z.boolean().default(false).optional(),
    include_scheduled_overrides: z.boolean().default(false).optional(),
  });
export { ListEntitlementOverrideForSubscriptionEntitlementOverrideBodySchema };
export type ListEntitlementOverrideForSubscriptionEntitlementOverrideBody =
  z.infer<
    typeof ListEntitlementOverrideForSubscriptionEntitlementOverrideBodySchema
  >;
