// Generated Zod validator: Quote.extendExpiryDate
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const extendExpiryDateQuoteBodySchema = z.looseObject({
  valid_till: z.number().int(),
});
export { extendExpiryDateQuoteBodySchema };
