// Generated Zod validator: Feature.create
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const createFeatureLevelsSchema = z.object({
  name: z.array(z.string().max(50).optional()).optional(),
  value: z.array(z.string().max(50).optional()).optional(),
  is_unlimited: z.array(z.boolean().optional()).optional(),
  level: z.array(z.number().int().optional()).optional(),
});
const createFeatureBodySchema = z.looseObject({
  id: z.string().max(50).optional(),
  name: z.string().max(50),
  description: z.string().max(500).optional(),
  type: z.enum(['switch', 'custom', 'quantity', 'range']).optional(),
  unit: z.string().max(50).optional(),
  levels: createFeatureLevelsSchema.optional(),
});
export { createFeatureBodySchema };
