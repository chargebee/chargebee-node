// Generated Zod schemas: Feature
// Actions: list, create, update
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//Feature.list

const ListFeatureNameSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ListFeatureIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ListFeatureStatusSchema = z.object({
  is: z.enum(['active', 'archived', 'draft']).optional(),
  is_not: z.enum(['active', 'archived', 'draft']).optional(),
  in: z.enum(['active', 'archived', 'draft']).optional(),
  not_in: z.enum(['active', 'archived', 'draft']).optional(),
});
const ListFeatureTypeSchema = z.object({
  is: z.enum(['switch', 'custom', 'quantity', 'range']).optional(),
  is_not: z.enum(['switch', 'custom', 'quantity', 'range']).optional(),
  in: z.enum(['switch', 'custom', 'quantity', 'range']).optional(),
  not_in: z.enum(['switch', 'custom', 'quantity', 'range']).optional(),
});
const ListFeatureMeteredSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const ListFeatureBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  name: ListFeatureNameSchema.optional(),
  id: ListFeatureIdSchema.optional(),
  status: ListFeatureStatusSchema.optional(),
  type: ListFeatureTypeSchema.optional(),
  metered: ListFeatureMeteredSchema.optional(),
});
export { ListFeatureBodySchema };
export type ListFeatureBody = z.infer<typeof ListFeatureBodySchema>;

//Feature.create

const CreateFeatureLevelsSchema = z.object({
  name: z.array(z.string().max(50).optional()).optional(),
  value: z.array(z.string().max(50).optional()).optional(),
  is_unlimited: z.array(z.boolean().optional()).optional(),
  level: z.array(z.number().int().optional()).optional(),
});
const CreateFeatureBodySchema = z.looseObject({
  id: z.string().max(50).optional(),
  name: z.string().max(50),
  description: z.string().max(500).optional(),
  type: z.enum(['switch', 'custom', 'quantity', 'range']).optional(),
  unit: z.string().max(50).optional(),
  levels: CreateFeatureLevelsSchema.optional(),
});
export { CreateFeatureBodySchema };
export type CreateFeatureBody = z.infer<typeof CreateFeatureBodySchema>;

//Feature.update

const UpdateFeatureLevelsSchema = z.object({
  name: z.array(z.string().max(50).optional()).optional(),
  value: z.array(z.string().max(50).optional()).optional(),
  is_unlimited: z.array(z.boolean().optional()).optional(),
  level: z.array(z.number().int().optional()).optional(),
});
const UpdateFeatureBodySchema = z.looseObject({
  name: z.string().max(50).optional(),
  description: z.string().max(500).optional(),
  unit: z.string().max(50).optional(),
  levels: UpdateFeatureLevelsSchema.optional(),
});
export { UpdateFeatureBodySchema };
export type UpdateFeatureBody = z.infer<typeof UpdateFeatureBodySchema>;
