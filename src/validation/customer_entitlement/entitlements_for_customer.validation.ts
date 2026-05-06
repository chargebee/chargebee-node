// Generated Zod validator: CustomerEntitlement.entitlementsForCustomer
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const entitlementsForCustomerCustomerEntitlementBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  consolidate_entitlements: z.boolean().default(false).optional(),
});
export { entitlementsForCustomerCustomerEntitlementBodySchema };
