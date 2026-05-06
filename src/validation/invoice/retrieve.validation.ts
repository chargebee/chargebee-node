// Generated Zod validator: Invoice.retrieve
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const retrieveInvoiceSubscriptionIdSchema = z.object({
  is: z.string().min(1).optional(),
});
const retrieveInvoiceCustomerIdSchema = z.object({
  is: z.string().min(1).optional(),
});
const retrieveInvoiceLineItemSchema = z.object({
  subscription_id: retrieveInvoiceSubscriptionIdSchema.optional(),
  customer_id: retrieveInvoiceCustomerIdSchema.optional(),
});
const retrieveInvoiceBodySchema = z.looseObject({
  line_items_limit: z.number().int().min(1).max(300).optional(),
  line_items_offset: z.string().max(1000).optional(),
  line_item: retrieveInvoiceLineItemSchema.optional(),
});
export { retrieveInvoiceBodySchema };
