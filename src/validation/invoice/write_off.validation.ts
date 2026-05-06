// Generated Zod validator: Invoice.writeOff
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const writeOffInvoiceBodySchema = z.looseObject({
  comment: z.string().max(300).optional(),
});
export { writeOffInvoiceBodySchema };
