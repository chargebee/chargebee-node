// Generated Zod validator: Invoice.deleteLineItems
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const deleteLineItemsInvoiceLineItemsSchema = z.object({
  id: z.array(z.string().max(40).optional()).optional(),
});
const deleteLineItemsInvoiceBodySchema = z.looseObject({
  line_items: deleteLineItemsInvoiceLineItemsSchema.optional(),
});
export { deleteLineItemsInvoiceBodySchema };
