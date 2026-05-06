// Generated Zod validator: Export.priceVariants
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const priceVariantsExportBusinessEntityIdSchema = z.object({
  is_present: z.enum(['true', 'false']).optional(),
  is: z.string().min(1).optional(),
});
const priceVariantsExportIncludeSiteLevelResourcesSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const priceVariantsExportIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
  not_in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
});
const priceVariantsExportNameSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
  not_in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
});
const priceVariantsExportStatusSchema = z.object({
  is: z.enum(['active', 'archived']).optional(),
  is_not: z.enum(['active', 'archived']).optional(),
  in: z.enum(['active', 'archived']).optional(),
  not_in: z.enum(['active', 'archived']).optional(),
});
const priceVariantsExportUpdatedAtSchema = z.object({
  after: z.string().regex(RegExp('^d{10}$')).optional(),
  before: z.string().regex(RegExp('^d{10}$')).optional(),
  on: z.string().regex(RegExp('^d{10}$')).optional(),
  between: z.string().regex(RegExp('^[d{10},d{10}]$')).optional(),
});
const priceVariantsExportCreatedAtSchema = z.object({
  after: z.string().regex(RegExp('^d{10}$')).optional(),
  before: z.string().regex(RegExp('^d{10}$')).optional(),
  on: z.string().regex(RegExp('^d{10}$')).optional(),
  between: z.string().regex(RegExp('^[d{10},d{10}]$')).optional(),
});
const priceVariantsExportPriceVariantItemSchema = z.object({
  id: priceVariantsExportIdSchema.optional(),
  name: priceVariantsExportNameSchema.optional(),
  status: priceVariantsExportStatusSchema.optional(),
  updated_at: priceVariantsExportUpdatedAtSchema.optional(),
  created_at: priceVariantsExportCreatedAtSchema.optional(),
});
const priceVariantsExportBodySchema = z.looseObject({
  business_entity_id: priceVariantsExportBusinessEntityIdSchema.optional(),
  include_site_level_resources:
    priceVariantsExportIncludeSiteLevelResourcesSchema.optional(),
  price_variant: z
    .array(priceVariantsExportPriceVariantItemSchema.optional())
    .optional(),
});
export { priceVariantsExportBodySchema };
