// Generated Zod validator: Usage.retrieve
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const retrieveUsageBodySchema = z.looseObject({
  id: z.string().max(100),
});
export { retrieveUsageBodySchema };
