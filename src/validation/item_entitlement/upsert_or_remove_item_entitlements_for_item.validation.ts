// Generated Zod validator: ItemEntitlement.upsertOrRemoveItemEntitlementsForItem
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const upsertOrRemoveItemEntitlementsForItemItemEntitlementItemEntitlementsSchema =
  z.object({
    feature_id: z.array(z.string().max(50).optional()),
    value: z.array(z.string().max(50).optional()).optional(),
  });
const upsertOrRemoveItemEntitlementsForItemItemEntitlementBodySchema =
  z.looseObject({
    action: z.enum(['upsert', 'remove']),
    item_entitlements:
      upsertOrRemoveItemEntitlementsForItemItemEntitlementItemEntitlementsSchema.optional(),
  });
export { upsertOrRemoveItemEntitlementsForItemItemEntitlementBodySchema };
