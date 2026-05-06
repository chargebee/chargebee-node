// Generated Zod validator: Usage.delete
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const deleteUsageBodySchema = z.looseObject({
  id: z.string().max(100),
});
export { deleteUsageBodySchema };
