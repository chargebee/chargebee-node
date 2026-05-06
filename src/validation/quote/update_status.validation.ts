// Generated Zod validator: Quote.updateStatus
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const updateStatusQuoteBodySchema = z.looseObject({
  status: z.enum([
    'open',
    'accepted',
    'declined',
    'proposed',
    'voided',
    'closed',
  ]),
  comment: z.string().max(300).optional(),
});
export { updateStatusQuoteBodySchema };
