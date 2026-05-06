// Generated Zod validator: AttachedItem.delete
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const deleteAttachedItemBodySchema = z.looseObject({
  parent_item_id: z.string().max(100),
});
export { deleteAttachedItemBodySchema };
