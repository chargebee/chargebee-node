// Generated Zod schemas: Item
// Actions: create, update
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//Item.create

const CreateItemMetadataSchema = z.looseObject({});
const CreateItemBundleConfigurationSchema = z.object({
  type: z.enum(['fixed']).optional(),
});
const CreateItemBundleItemsToAddSchema = z.object({
  item_id: z.array(z.string().max(100).optional()).optional(),
  item_type: z.array(z.enum(['plan', 'addon', 'charge']).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  price_allocation: z.array(z.number().min(0).max(100).optional()).optional(),
});
const CreateItemBodySchema = z.looseObject({
  id: z.string().max(100),
  name: z.string().max(100),
  type: z.enum(['plan', 'addon', 'charge']),
  description: z.string().max(2000).optional(),
  item_family_id: z.string().max(100),
  is_giftable: z.boolean().default(false).optional(),
  is_shippable: z.boolean().default(false).optional(),
  external_name: z.string().max(100).optional(),
  enabled_in_portal: z.boolean().default(true).optional(),
  redirect_url: z.string().max(500).optional(),
  enabled_for_checkout: z.boolean().default(true).optional(),
  item_applicability: z.enum(['all', 'restricted']).optional(),
  applicable_items: z.array(z.string().max(100).optional()).optional(),
  unit: z.string().max(30).optional(),
  gift_claim_redirect_url: z.string().max(500).optional(),
  included_in_mrr: z.boolean().optional(),
  metered: z.boolean().default(false).optional(),
  usage_calculation: z
    .enum(['sum_of_usages', 'last_usage', 'max_usage'])
    .optional(),
  is_percentage_pricing: z.boolean().default(false).optional(),
  metadata: CreateItemMetadataSchema.optional(),
  business_entity_id: z.string().max(50).optional(),
  bundle_configuration: CreateItemBundleConfigurationSchema.optional(),
  bundle_items_to_add: CreateItemBundleItemsToAddSchema.optional(),
});
export { CreateItemBodySchema };
export type CreateItemBody = z.infer<typeof CreateItemBodySchema>;

//Item.update

const UpdateItemMetadataSchema = z.looseObject({});
const UpdateItemBundleConfigurationSchema = z.object({
  type: z.enum(['fixed']).optional(),
});
const UpdateItemBundleItemsToAddSchema = z.object({
  item_id: z.array(z.string().max(100).optional()).optional(),
  item_type: z.array(z.enum(['plan', 'addon', 'charge']).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  price_allocation: z.array(z.number().min(0).max(100).optional()).optional(),
});
const UpdateItemBundleItemsToUpdateSchema = z.object({
  item_id: z.array(z.string().max(100).optional()).optional(),
  item_type: z.array(z.enum(['plan', 'addon', 'charge']).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  price_allocation: z.array(z.number().min(0).max(100).optional()).optional(),
});
const UpdateItemBundleItemsToRemoveSchema = z.object({
  item_id: z.array(z.string().max(100).optional()).optional(),
  item_type: z.array(z.enum(['plan', 'addon', 'charge']).optional()).optional(),
});
const UpdateItemBodySchema = z.looseObject({
  name: z.string().max(100).optional(),
  description: z.string().max(2000).optional(),
  is_shippable: z.boolean().default(false).optional(),
  external_name: z.string().max(100).optional(),
  item_family_id: z.string().max(100).optional(),
  enabled_in_portal: z.boolean().default(true).optional(),
  redirect_url: z.string().max(500).optional(),
  enabled_for_checkout: z.boolean().default(true).optional(),
  item_applicability: z.enum(['all', 'restricted']).optional(),
  clear_applicable_items: z.boolean().default(false).optional(),
  applicable_items: z.array(z.string().max(100).optional()).optional(),
  unit: z.string().max(30).optional(),
  gift_claim_redirect_url: z.string().max(500).optional(),
  metadata: UpdateItemMetadataSchema.optional(),
  included_in_mrr: z.boolean().optional(),
  status: z.enum(['active', 'archived']).optional(),
  is_percentage_pricing: z.boolean().default(false).optional(),
  bundle_configuration: UpdateItemBundleConfigurationSchema.optional(),
  bundle_items_to_add: UpdateItemBundleItemsToAddSchema.optional(),
  bundle_items_to_update: UpdateItemBundleItemsToUpdateSchema.optional(),
  bundle_items_to_remove: UpdateItemBundleItemsToRemoveSchema.optional(),
});
export { UpdateItemBodySchema };
export type UpdateItemBody = z.infer<typeof UpdateItemBodySchema>;
