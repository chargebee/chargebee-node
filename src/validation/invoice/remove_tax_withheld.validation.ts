// Generated Zod validator: Invoice.removeTaxWithheld
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const removeTaxWithheldInvoiceTaxWithheldSchema = z.object({
  id: z.string().max(40),
});
const removeTaxWithheldInvoiceBodySchema = z.looseObject({
  tax_withheld: removeTaxWithheldInvoiceTaxWithheldSchema.optional(),
});
export { removeTaxWithheldInvoiceBodySchema };
