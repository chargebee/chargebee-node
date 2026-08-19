// Generated Zod schemas: QuoteEntitlement
// Actions: listQuoteEntitlements
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//QuoteEntitlement.listQuoteEntitlements

const ListQuoteEntitlementsQuoteEntitlementEntityIdSchema = z.object({
  is: z.string().min(1).optional(),
});
const ListQuoteEntitlementsQuoteEntitlementStartDateSchema = z.object({
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
});
const ListQuoteEntitlementsQuoteEntitlementEndDateSchema = z.object({
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
});
const ListQuoteEntitlementsQuoteEntitlementBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  entity_id: ListQuoteEntitlementsQuoteEntitlementEntityIdSchema.optional(),
  start_date: ListQuoteEntitlementsQuoteEntitlementStartDateSchema.optional(),
  end_date: ListQuoteEntitlementsQuoteEntitlementEndDateSchema.optional(),
});
export { ListQuoteEntitlementsQuoteEntitlementBodySchema };
export type ListQuoteEntitlementsQuoteEntitlementBody = z.infer<
  typeof ListQuoteEntitlementsQuoteEntitlementBodySchema
>;
