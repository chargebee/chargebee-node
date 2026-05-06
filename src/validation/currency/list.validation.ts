// Generated Zod validator: Currency.list
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const listCurrencyBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
});
export { listCurrencyBodySchema };
