// Generated Zod validator: ItemEntitlement.addItemEntitlements
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const addItemEntitlementsItemEntitlementItemEntitlementsSchema = z.object({
  item_id: z.array(z.string().max(100).optional()),
  item_type: z
    .array(
      z.enum(['plan', 'addon', 'charge', 'subscription', 'item']).optional(),
    )
    .optional(),
  value: z.array(z.string().max(50).optional()).optional(),
});
const addItemEntitlementsItemEntitlementBodySchema = z.looseObject({
  action: z.enum(['upsert', 'remove']),
  item_entitlements:
    addItemEntitlementsItemEntitlementItemEntitlementsSchema.optional(),
});
export { addItemEntitlementsItemEntitlementBodySchema };
