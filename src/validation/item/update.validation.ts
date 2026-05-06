// Generated Zod validator: Item.update
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const updateItemMetadataSchema = z.looseObject({});
const updateItemBundleConfigurationSchema = z.object({
  type: z.enum(['fixed']).optional(),
});
const updateItemBundleItemsToAddSchema = z.object({
  item_id: z.array(z.string().max(100).optional()).optional(),
  item_type: z.array(z.enum(['plan', 'addon', 'charge']).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  price_allocation: z.array(z.number().min(0).max(100).optional()).optional(),
});
const updateItemBundleItemsToUpdateSchema = z.object({
  item_id: z.array(z.string().max(100).optional()).optional(),
  item_type: z.array(z.enum(['plan', 'addon', 'charge']).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  price_allocation: z.array(z.number().min(0).max(100).optional()).optional(),
});
const updateItemBundleItemsToRemoveSchema = z.object({
  item_id: z.array(z.string().max(100).optional()).optional(),
  item_type: z.array(z.enum(['plan', 'addon', 'charge']).optional()).optional(),
});
const updateItemBodySchema = z.looseObject({
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
  metadata: updateItemMetadataSchema.optional(),
  included_in_mrr: z.boolean().optional(),
  status: z.enum(['active', 'archived']).optional(),
  is_percentage_pricing: z.boolean().default(false).optional(),
  bundle_configuration: updateItemBundleConfigurationSchema.optional(),
  bundle_items_to_add: updateItemBundleItemsToAddSchema.optional(),
  bundle_items_to_update: updateItemBundleItemsToUpdateSchema.optional(),
  bundle_items_to_remove: updateItemBundleItemsToRemoveSchema.optional(),
});
export { updateItemBodySchema };
