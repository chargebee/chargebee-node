// Generated Zod validator: Invoice.applyPaymentScheduleScheme
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const applyPaymentScheduleSchemeInvoiceBodySchema = z.looseObject({
  scheme_id: z.string(),
  amount: z.number().int().min(0).optional(),
});
export { applyPaymentScheduleSchemeInvoiceBodySchema };
