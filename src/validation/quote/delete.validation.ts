// Generated Zod validator: Quote.delete
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const deleteQuoteBodySchema = z.looseObject({
  comment: z.string().max(300).optional(),
});
export { deleteQuoteBodySchema };
