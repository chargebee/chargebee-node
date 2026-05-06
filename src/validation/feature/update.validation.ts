// Generated Zod validator: Feature.update
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const updateFeatureLevelsSchema = z.object({
  name: z.array(z.string().max(50).optional()).optional(),
  value: z.array(z.string().max(50).optional()).optional(),
  is_unlimited: z.array(z.boolean().optional()).optional(),
  level: z.array(z.number().int().optional()).optional(),
});
const updateFeatureBodySchema = z.looseObject({
  name: z.string().max(50).optional(),
  description: z.string().max(500).optional(),
  unit: z.string().max(50).optional(),
  levels: updateFeatureLevelsSchema.optional(),
});
export { updateFeatureBodySchema };
