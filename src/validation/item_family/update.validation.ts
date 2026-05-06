// Generated Zod validator: ItemFamily.update
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const updateItemFamilyBodySchema = z.looseObject({
  name: z.string().max(50).optional(),
  description: z.string().max(500).optional(),
});
export { updateItemFamilyBodySchema };
