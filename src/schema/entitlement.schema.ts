// Generated Zod schemas: Entitlement
// Actions: list, create
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//Entitlement.list

const ListEntitlementFeatureIdSchema = z.object({
  is: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ListEntitlementEntityTypeSchema = z.object({
  is: z
    .enum(['plan', 'addon', 'charge', 'plan_price', 'addon_price'])
    .optional(),
  in: z
    .enum(['plan', 'addon', 'charge', 'plan_price', 'addon_price'])
    .optional(),
});
const ListEntitlementEntityIdSchema = z.object({
  is: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ListEntitlementBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  feature_id: ListEntitlementFeatureIdSchema.optional(),
  entity_type: ListEntitlementEntityTypeSchema.optional(),
  entity_id: ListEntitlementEntityIdSchema.optional(),
  include_drafts: z.boolean().default(false).optional(),
  embed: z.string().max(1000).optional(),
});
export { ListEntitlementBodySchema };
export type ListEntitlementBody = z.infer<typeof ListEntitlementBodySchema>;

//Entitlement.create

const CreateEntitlementEntitlementsSchema = z.object({
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
const CreateEntitlementBodySchema = z.looseObject({
  action: z.enum(['upsert', 'remove']),
  change_reason: z.string().max(100).optional(),
  entitlements: CreateEntitlementEntitlementsSchema.optional(),
});
export { CreateEntitlementBodySchema };
export type CreateEntitlementBody = z.infer<typeof CreateEntitlementBodySchema>;
