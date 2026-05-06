// Generated Zod validator: Item.create
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const createItemMetadataSchema = z.looseObject({});
const createItemBundleConfigurationSchema = z.object({
  type: z.enum(['fixed']).optional(),
});
const createItemBundleItemsToAddSchema = z.object({
  item_id: z.array(z.string().max(100).optional()).optional(),
  item_type: z.array(z.enum(['plan', 'addon', 'charge']).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  price_allocation: z.array(z.number().min(0).max(100).optional()).optional(),
});
const createItemBodySchema = z.looseObject({
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
  metadata: createItemMetadataSchema.optional(),
  business_entity_id: z.string().max(50).optional(),
  bundle_configuration: createItemBundleConfigurationSchema.optional(),
  bundle_items_to_add: createItemBundleItemsToAddSchema.optional(),
});
export { createItemBodySchema };
