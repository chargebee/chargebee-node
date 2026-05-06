// Generated Zod validator: AttachedItem.retrieve
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const retrieveAttachedItemBodySchema = z.looseObject({
  parent_item_id: z.string().max(100),
});
export { retrieveAttachedItemBodySchema };
