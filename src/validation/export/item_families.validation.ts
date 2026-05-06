// Generated Zod validator: Export.itemFamilies
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const itemFamiliesExportBusinessEntityIdSchema = z.object({
  is_present: z.enum(['true', 'false']).optional(),
  is: z.string().min(1).optional(),
});
const itemFamiliesExportIncludeSiteLevelResourcesSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const itemFamiliesExportIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
  not_in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
});
const itemFamiliesExportNameSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const itemFamiliesExportUpdatedAtSchema = z.object({
  after: z.string().regex(RegExp('^d{10}$')).optional(),
  before: z.string().regex(RegExp('^d{10}$')).optional(),
  on: z.string().regex(RegExp('^d{10}$')).optional(),
  between: z.string().regex(RegExp('^[d{10},d{10}]$')).optional(),
});
const itemFamiliesExportItemFamilyItemSchema = z.object({
  id: itemFamiliesExportIdSchema.optional(),
  name: itemFamiliesExportNameSchema.optional(),
  updated_at: itemFamiliesExportUpdatedAtSchema.optional(),
});
const itemFamiliesExportBodySchema = z.looseObject({
  business_entity_id: itemFamiliesExportBusinessEntityIdSchema.optional(),
  include_site_level_resources:
    itemFamiliesExportIncludeSiteLevelResourcesSchema.optional(),
  item_family: z
    .array(itemFamiliesExportItemFamilyItemSchema.optional())
    .optional(),
});
export { itemFamiliesExportBodySchema };
