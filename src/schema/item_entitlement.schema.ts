// Generated Zod schemas: ItemEntitlement
// Actions: itemEntitlementsForItem, itemEntitlementsForFeature, addItemEntitlements, upsertOrRemoveItemEntitlementsForItem
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//ItemEntitlement.itemEntitlementsForItem

const ItemEntitlementsForItemItemEntitlementBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  include_drafts: z.boolean().default(false).optional(),
  embed: z.string().max(1000).optional(),
});
export { ItemEntitlementsForItemItemEntitlementBodySchema };
export type ItemEntitlementsForItemItemEntitlementBody = z.infer<
  typeof ItemEntitlementsForItemItemEntitlementBodySchema
>;

//ItemEntitlement.itemEntitlementsForFeature

const ItemEntitlementsForFeatureItemEntitlementBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  include_drafts: z.boolean().default(false).optional(),
});
export { ItemEntitlementsForFeatureItemEntitlementBodySchema };
export type ItemEntitlementsForFeatureItemEntitlementBody = z.infer<
  typeof ItemEntitlementsForFeatureItemEntitlementBodySchema
>;

//ItemEntitlement.addItemEntitlements

const AddItemEntitlementsItemEntitlementItemEntitlementsItemSchema = z.object({
  item_id: z.string().max(100),
  item_type: z
    .enum(['plan', 'addon', 'charge', 'subscription', 'item'])
    .optional(),
  value: z.string().max(50).optional(),
});
const AddItemEntitlementsItemEntitlementItemEntitlementsSchema = z.object({
  item_id: z.array(z.string().max(100).optional()),
  item_type: z
    .array(
      z.enum(['plan', 'addon', 'charge', 'subscription', 'item']).optional(),
    )
    .optional(),
  value: z.array(z.string().max(50).optional()).optional(),
});
const AddItemEntitlementsItemEntitlementBodySchema = z.looseObject({
  action: z.enum(['upsert', 'remove']),
  item_entitlements: z
    .union([
      z.array(
        AddItemEntitlementsItemEntitlementItemEntitlementsItemSchema.optional(),
      ),
      AddItemEntitlementsItemEntitlementItemEntitlementsSchema,
    ])
    .optional(),
});
export { AddItemEntitlementsItemEntitlementBodySchema };
export type AddItemEntitlementsItemEntitlementBody = z.infer<
  typeof AddItemEntitlementsItemEntitlementBodySchema
>;

//ItemEntitlement.upsertOrRemoveItemEntitlementsForItem

const UpsertOrRemoveItemEntitlementsForItemItemEntitlementItemEntitlementsItemSchema =
  z.object({
    feature_id: z.string().max(50),
    value: z.string().max(50).optional(),
  });
const UpsertOrRemoveItemEntitlementsForItemItemEntitlementItemEntitlementsSchema =
  z.object({
    feature_id: z.array(z.string().max(50).optional()),
    value: z.array(z.string().max(50).optional()).optional(),
  });
const UpsertOrRemoveItemEntitlementsForItemItemEntitlementBodySchema =
  z.looseObject({
    action: z.enum(['upsert', 'remove']),
    item_entitlements: z
      .union([
        z.array(
          UpsertOrRemoveItemEntitlementsForItemItemEntitlementItemEntitlementsItemSchema.optional(),
        ),
        UpsertOrRemoveItemEntitlementsForItemItemEntitlementItemEntitlementsSchema,
      ])
      .optional(),
  });
export { UpsertOrRemoveItemEntitlementsForItemItemEntitlementBodySchema };
export type UpsertOrRemoveItemEntitlementsForItemItemEntitlementBody = z.infer<
  typeof UpsertOrRemoveItemEntitlementsForItemItemEntitlementBodySchema
>;
