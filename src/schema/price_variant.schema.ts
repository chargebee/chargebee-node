// Generated Zod schemas: PriceVariant
// Actions: create, update, list
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//PriceVariant.create

const CreatePriceVariantAttributesSchema = z.object({
  name: z.array(z.string().max(100).optional()),
  value: z.array(z.string().max(100).optional()),
});
const CreatePriceVariantBodySchema = z.looseObject({
  id: z.string().max(100),
  name: z.string().max(100),
  external_name: z.string().max(100).optional(),
  description: z.string().max(500).optional(),
  variant_group: z.string().max(100).optional(),
  business_entity_id: z.string().max(50).optional(),
  attributes: CreatePriceVariantAttributesSchema.optional(),
});
export { CreatePriceVariantBodySchema };
export type CreatePriceVariantBody = z.infer<
  typeof CreatePriceVariantBodySchema
>;

//PriceVariant.update

const UpdatePriceVariantAttributesSchema = z.object({
  name: z.array(z.string().max(100).optional()),
  value: z.array(z.string().max(100).optional()),
});
const UpdatePriceVariantBodySchema = z.looseObject({
  name: z.string().max(100).optional(),
  external_name: z.string().max(100).optional(),
  description: z.string().max(500).optional(),
  variant_group: z.string().max(100).optional(),
  status: z.enum(['active', 'archived']).optional(),
  attributes: UpdatePriceVariantAttributesSchema.optional(),
});
export { UpdatePriceVariantBodySchema };
export type UpdatePriceVariantBody = z.infer<
  typeof UpdatePriceVariantBodySchema
>;

//PriceVariant.list

const ListPriceVariantIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ListPriceVariantNameSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ListPriceVariantStatusSchema = z.object({
  is: z.enum(['active', 'archived']).optional(),
  is_not: z.enum(['active', 'archived']).optional(),
  in: z.enum(['active', 'archived']).optional(),
  not_in: z.enum(['active', 'archived']).optional(),
});
const ListPriceVariantUpdatedAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const ListPriceVariantCreatedAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const ListPriceVariantBusinessEntityIdSchema = z.object({
  is_present: z.enum(['true', 'false']).optional(),
  is: z.string().min(1).optional(),
});
const ListPriceVariantIncludeSiteLevelResourcesSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const ListPriceVariantSortBySchema = z.looseObject({
  asc: z.enum(['name', 'id', 'status', 'created_at', 'updated_at']).optional(),
  desc: z.enum(['name', 'id', 'status', 'created_at', 'updated_at']).optional(),
});
const ListPriceVariantBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  id: ListPriceVariantIdSchema.optional(),
  name: ListPriceVariantNameSchema.optional(),
  status: ListPriceVariantStatusSchema.optional(),
  updated_at: ListPriceVariantUpdatedAtSchema.optional(),
  created_at: ListPriceVariantCreatedAtSchema.optional(),
  business_entity_id: ListPriceVariantBusinessEntityIdSchema.optional(),
  include_site_level_resources:
    ListPriceVariantIncludeSiteLevelResourcesSchema.optional(),
  sort_by: ListPriceVariantSortBySchema.optional(),
});
export { ListPriceVariantBodySchema };
export type ListPriceVariantBody = z.infer<typeof ListPriceVariantBodySchema>;
