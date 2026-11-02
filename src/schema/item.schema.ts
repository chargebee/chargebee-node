// Generated Zod schemas: Item
// Actions: create, update, list
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

//Item.list

const ListItemIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ListItemItemFamilyIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ListItemTypeSchema = z.object({
  is: z.enum(['plan', 'addon', 'charge']).optional(),
  is_not: z.enum(['plan', 'addon', 'charge']).optional(),
  in: z.enum(['plan', 'addon', 'charge']).optional(),
  not_in: z.enum(['plan', 'addon', 'charge']).optional(),
});
const ListItemNameSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const ListItemItemApplicabilitySchema = z.object({
  is: z.enum(['all', 'restricted']).optional(),
  is_not: z.enum(['all', 'restricted']).optional(),
  in: z.enum(['all', 'restricted']).optional(),
  not_in: z.enum(['all', 'restricted']).optional(),
});
const ListItemStatusSchema = z.object({
  is: z.enum(['active', 'archived', 'deleted']).optional(),
  is_not: z.enum(['active', 'archived', 'deleted']).optional(),
  in: z.enum(['active', 'archived', 'deleted']).optional(),
  not_in: z.enum(['active', 'archived', 'deleted']).optional(),
});
const ListItemIsGiftableSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const ListItemUpdatedAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const ListItemEnabledForCheckoutSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const ListItemEnabledInPortalSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const ListItemMeteredSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const ListItemUsageCalculationSchema = z.object({
  is: z.enum(['sum_of_usages', 'last_usage', 'max_usage']).optional(),
  is_not: z.enum(['sum_of_usages', 'last_usage', 'max_usage']).optional(),
  in: z.enum(['sum_of_usages', 'last_usage', 'max_usage']).optional(),
  not_in: z.enum(['sum_of_usages', 'last_usage', 'max_usage']).optional(),
});
const ListItemChannelSchema = z.object({
  is: z.enum(['web', 'app_store', 'play_store']).optional(),
  is_not: z.enum(['web', 'app_store', 'play_store']).optional(),
  in: z.enum(['web', 'app_store', 'play_store']).optional(),
  not_in: z.enum(['web', 'app_store', 'play_store']).optional(),
});
const ListItemBusinessEntityIdSchema = z.object({
  is_present: z.enum(['true', 'false']).optional(),
  is: z.string().min(1).optional(),
});
const ListItemIncludeSiteLevelResourcesSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const ListItemSortBySchema = z.looseObject({
  asc: z.enum(['name', 'id', 'updated_at']).optional(),
  desc: z.enum(['name', 'id', 'updated_at']).optional(),
});
const ListItemBundleConfigurationSchema = z.object({
  type: ListItemTypeSchema.optional(),
});
const ListItemBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  id: ListItemIdSchema.optional(),
  item_family_id: ListItemItemFamilyIdSchema.optional(),
  type: ListItemTypeSchema.optional(),
  name: ListItemNameSchema.optional(),
  item_applicability: ListItemItemApplicabilitySchema.optional(),
  status: ListItemStatusSchema.optional(),
  is_giftable: ListItemIsGiftableSchema.optional(),
  updated_at: ListItemUpdatedAtSchema.optional(),
  enabled_for_checkout: ListItemEnabledForCheckoutSchema.optional(),
  enabled_in_portal: ListItemEnabledInPortalSchema.optional(),
  metered: ListItemMeteredSchema.optional(),
  usage_calculation: ListItemUsageCalculationSchema.optional(),
  channel: ListItemChannelSchema.optional(),
  business_entity_id: ListItemBusinessEntityIdSchema.optional(),
  include_site_level_resources:
    ListItemIncludeSiteLevelResourcesSchema.optional(),
  sort_by: ListItemSortBySchema.optional(),
  bundle_configuration: ListItemBundleConfigurationSchema.optional(),
});
export { ListItemBodySchema };
export type ListItemBody = z.infer<typeof ListItemBodySchema>;
