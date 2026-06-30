// Generated Zod schemas: MeteredFeature
// Actions: create
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//MeteredFeature.create

const CreateMeteredFeatureColumnDefinitionsSchema = z.object({
  column_name: z.array(z.string().max(100).optional()),
  data_type: z.array(z.enum(['number', 'string']).optional()),
});
const CreateMeteredFeatureBodySchema = z.looseObject({
  name: z.string().max(50),
  description: z.string().max(250).optional(),
  feature_unit: z.string().max(50),
  query: z.string().max(500),
  column_definitions: CreateMeteredFeatureColumnDefinitionsSchema.optional(),
});
export { CreateMeteredFeatureBodySchema };
export type CreateMeteredFeatureBody = z.infer<
  typeof CreateMeteredFeatureBodySchema
>;
