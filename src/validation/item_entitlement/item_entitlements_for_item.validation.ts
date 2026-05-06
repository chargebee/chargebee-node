// Generated Zod validator: ItemEntitlement.itemEntitlementsForItem
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const itemEntitlementsForItemItemEntitlementBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  include_drafts: z.boolean().default(false).optional(),
  embed: z.string().max(1000).optional(),
});
export { itemEntitlementsForItemItemEntitlementBodySchema };
