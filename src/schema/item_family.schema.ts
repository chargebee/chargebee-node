// Generated Zod schemas: ItemFamily
// Actions: create, list, update
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//ItemFamily.create

const CreateItemFamilyBodySchema = z.looseObject({
  id: z.string().max(50),
  name: z.string().max(50),
  description: z.string().max(500).optional(),
  business_entity_id: z.string().max(50).optional(),
});
export { CreateItemFamilyBodySchema };
export type CreateItemFamilyBody = z.infer<typeof CreateItemFamilyBodySchema>;

//ItemFamily.list

const ListItemFamilyIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ListItemFamilyNameSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const ListItemFamilyUpdatedAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const ListItemFamilyBusinessEntityIdSchema = z.object({
  is_present: z.enum(['true', 'false']).optional(),
  is: z.string().min(1).optional(),
});
const ListItemFamilyIncludeSiteLevelResourcesSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const ListItemFamilyBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  id: ListItemFamilyIdSchema.optional(),
  name: ListItemFamilyNameSchema.optional(),
  updated_at: ListItemFamilyUpdatedAtSchema.optional(),
  business_entity_id: ListItemFamilyBusinessEntityIdSchema.optional(),
  include_site_level_resources:
    ListItemFamilyIncludeSiteLevelResourcesSchema.optional(),
});
export { ListItemFamilyBodySchema };
export type ListItemFamilyBody = z.infer<typeof ListItemFamilyBodySchema>;

//ItemFamily.update

const UpdateItemFamilyBodySchema = z.looseObject({
  name: z.string().max(50).optional(),
  description: z.string().max(500).optional(),
});
export { UpdateItemFamilyBodySchema };
export type UpdateItemFamilyBody = z.infer<typeof UpdateItemFamilyBodySchema>;
