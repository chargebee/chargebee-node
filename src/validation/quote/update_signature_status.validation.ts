// Generated Zod validator: Quote.updateSignatureStatus
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const updateSignatureStatusQuoteCpqQuoteSignatureSchema = z.object({
  status: z
    .enum(['draft', 'active', 'signed', 'expired', 'cancelled', 'declined'])
    .optional(),
});
const updateSignatureStatusQuoteBodySchema = z.looseObject({
  cpq_quote_signature:
    updateSignatureStatusQuoteCpqQuoteSignatureSchema.optional(),
});
export { updateSignatureStatusQuoteBodySchema };
