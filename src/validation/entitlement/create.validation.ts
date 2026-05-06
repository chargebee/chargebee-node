// Generated Zod validator: Entitlement.create
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const createEntitlementEntitlementsSchema = z.object({
  entity_id: z.array(z.string().max(100).optional()),
  feature_id: z.array(z.string().max(50).optional()),
  entity_type: z
    .array(
      z
        .enum(['plan', 'addon', 'charge', 'plan_price', 'addon_price'])
        .optional(),
    )
    .optional(),
  value: z.array(z.string().max(50).optional()).optional(),
  apply_grandfathering: z
    .array(z.boolean().default(false).optional())
    .optional(),
});
const createEntitlementBodySchema = z.looseObject({
  action: z.enum(['upsert', 'remove']),
  change_reason: z.string().max(100).optional(),
  entitlements: createEntitlementEntitlementsSchema.optional(),
});
export { createEntitlementBodySchema };
