// Generated Zod validator: Alert.update
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const updateAlertThresholdSchema = z.object({
  mode: z.enum(['absolute', 'percentage']).optional(),
  value: z.number().optional(),
});
const updateAlertBodySchema = z.looseObject({
  status: z.enum(['enabled', 'disabled']).optional(),
  threshold: updateAlertThresholdSchema.optional(),
});
export { updateAlertBodySchema };
