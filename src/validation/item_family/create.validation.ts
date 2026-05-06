// Generated Zod validator: ItemFamily.create
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const createItemFamilyBodySchema = z.looseObject({
  id: z.string().max(50),
  name: z.string().max(50),
  description: z.string().max(500).optional(),
  business_entity_id: z.string().max(50).optional(),
});
export { createItemFamilyBodySchema };
