// Generated Zod validator: Invoice.recordTaxWithheld
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const recordTaxWithheldInvoiceTaxWithheldSchema = z.object({
  amount: z.number().int().min(1),
  reference_number: z.string().max(100).optional(),
  date: z.number().int().optional(),
  description: z.string().max(65000).optional(),
});
const recordTaxWithheldInvoiceBodySchema = z.looseObject({
  tax_withheld: recordTaxWithheldInvoiceTaxWithheldSchema.optional(),
});
export { recordTaxWithheldInvoiceBodySchema };
