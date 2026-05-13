// Generated Zod schemas: Feature
// Actions: create, update
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

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
