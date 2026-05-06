// Generated Zod validator: Export.items
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const itemsExportBusinessEntityIdSchema = z.object({
  is_present: z.enum(['true', 'false']).optional(),
  is: z.string().min(1).optional(),
});
const itemsExportIncludeSiteLevelResourcesSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const itemsExportIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
  not_in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
});
const itemsExportItemFamilyIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
  not_in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
});
const itemsExportTypeSchema = z.object({
  is: z.enum(['plan', 'addon', 'charge']).optional(),
  is_not: z.enum(['plan', 'addon', 'charge']).optional(),
  in: z.enum(['plan', 'addon', 'charge']).optional(),
  not_in: z.enum(['plan', 'addon', 'charge']).optional(),
});
const itemsExportNameSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const itemsExportItemApplicabilitySchema = z.object({
  is: z.enum(['all', 'restricted']).optional(),
  is_not: z.enum(['all', 'restricted']).optional(),
  in: z.enum(['all', 'restricted']).optional(),
  not_in: z.enum(['all', 'restricted']).optional(),
});
const itemsExportStatusSchema = z.object({
  is: z.enum(['active', 'archived', 'deleted']).optional(),
  is_not: z.enum(['active', 'archived', 'deleted']).optional(),
  in: z.enum(['active', 'archived', 'deleted']).optional(),
  not_in: z.enum(['active', 'archived', 'deleted']).optional(),
});
const itemsExportIsGiftableSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const itemsExportUpdatedAtSchema = z.object({
  after: z.string().regex(RegExp('^d{10}$')).optional(),
  before: z.string().regex(RegExp('^d{10}$')).optional(),
  on: z.string().regex(RegExp('^d{10}$')).optional(),
  between: z.string().regex(RegExp('^[d{10},d{10}]$')).optional(),
});
const itemsExportEnabledForCheckoutSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const itemsExportEnabledInPortalSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const itemsExportMeteredSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const itemsExportUsageCalculationSchema = z.object({
  is: z.enum(['sum_of_usages', 'last_usage', 'max_usage']).optional(),
  is_not: z.enum(['sum_of_usages', 'last_usage', 'max_usage']).optional(),
  in: z.enum(['sum_of_usages', 'last_usage', 'max_usage']).optional(),
  not_in: z.enum(['sum_of_usages', 'last_usage', 'max_usage']).optional(),
});
const itemsExportChannelSchema = z.object({
  is: z.enum(['web', 'app_store', 'play_store']).optional(),
  is_not: z.enum(['web', 'app_store', 'play_store']).optional(),
  in: z.enum(['web', 'app_store', 'play_store']).optional(),
  not_in: z.enum(['web', 'app_store', 'play_store']).optional(),
});
const itemsExportItemItemSchema = z.object({
  id: itemsExportIdSchema.optional(),
  item_family_id: itemsExportItemFamilyIdSchema.optional(),
  type: itemsExportTypeSchema.optional(),
  name: itemsExportNameSchema.optional(),
  item_applicability: itemsExportItemApplicabilitySchema.optional(),
  status: itemsExportStatusSchema.optional(),
  is_giftable: itemsExportIsGiftableSchema.optional(),
  updated_at: itemsExportUpdatedAtSchema.optional(),
  enabled_for_checkout: itemsExportEnabledForCheckoutSchema.optional(),
  enabled_in_portal: itemsExportEnabledInPortalSchema.optional(),
  metered: itemsExportMeteredSchema.optional(),
  usage_calculation: itemsExportUsageCalculationSchema.optional(),
  channel: itemsExportChannelSchema.optional(),
});
const itemsExportBodySchema = z.looseObject({
  business_entity_id: itemsExportBusinessEntityIdSchema.optional(),
  include_site_level_resources:
    itemsExportIncludeSiteLevelResourcesSchema.optional(),
  item: z.array(itemsExportItemItemSchema.optional()).optional(),
});
export { itemsExportBodySchema };
