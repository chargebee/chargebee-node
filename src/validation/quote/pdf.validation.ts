// Generated Zod validator: Quote.pdf
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const pdfQuoteBodySchema = z.looseObject({
  consolidated_view: z.boolean().default(false).optional(),
  disposition_type: z.enum(['attachment', 'inline']).optional(),
});
export { pdfQuoteBodySchema };
