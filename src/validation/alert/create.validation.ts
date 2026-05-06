// Generated Zod validator: Alert.create
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const createAlertThresholdSchema = z.object({
  mode: z.enum(['absolute', 'percentage']),
  value: z.number(),
});
const createAlertFilterConditionsSchema = z.object({
  field: z.array(z.enum(['plan_price_id']).optional()).optional(),
  operator: z.array(z.enum(['equals', 'not_equals']).optional()).optional(),
  value: z.array(z.string().max(50).optional()).optional(),
});
const createAlertBodySchema = z.looseObject({
  type: z.enum(['usage_exceeded']),
  name: z.string().max(50),
  description: z.string().max(65000).optional(),
  metered_feature_id: z.string().max(50),
  subscription_id: z.string().max(50).optional(),
  meta: z.string().max(65000).optional(),
  threshold: createAlertThresholdSchema.optional(),
  filter_conditions: createAlertFilterConditionsSchema.optional(),
});
export { createAlertBodySchema };
