// Generated Zod schemas: Alert
// Actions: create, update
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//Alert.create

const CreateAlertThresholdSchema = z.object({
  mode: z.enum(['absolute', 'percentage']),
  value: z.number(),
});
const CreateAlertFilterConditionsSchema = z.object({
  field: z.array(z.enum(['plan_price_id']).optional()).optional(),
  operator: z.array(z.enum(['equals', 'not_equals']).optional()).optional(),
  value: z.array(z.string().max(50).optional()).optional(),
});
const CreateAlertBodySchema = z.looseObject({
  type: z.enum(['usage_exceeded']),
  name: z.string().max(50),
  description: z.string().max(65000).optional(),
  metered_feature_id: z.string().max(50),
  subscription_id: z.string().max(50).optional(),
  meta: z.string().max(65000).optional(),
  threshold: CreateAlertThresholdSchema.optional(),
  filter_conditions: CreateAlertFilterConditionsSchema.optional(),
});
export { CreateAlertBodySchema };
export type CreateAlertBody = z.infer<typeof CreateAlertBodySchema>;

//Alert.update

const UpdateAlertThresholdSchema = z.object({
  mode: z.enum(['absolute', 'percentage']).optional(),
  value: z.number().optional(),
});
const UpdateAlertBodySchema = z.looseObject({
  status: z.enum(['enabled', 'disabled']).optional(),
  threshold: UpdateAlertThresholdSchema.optional(),
});
export { UpdateAlertBodySchema };
export type UpdateAlertBody = z.infer<typeof UpdateAlertBodySchema>;
