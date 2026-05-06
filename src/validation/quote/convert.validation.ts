// Generated Zod validator: Quote.convert
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const convertQuoteSubscriptionSchema = z.object({
  id: z.string().max(50).optional(),
  auto_collection: z.enum(['on', 'off']).optional(),
  po_number: z.string().max(100).optional(),
  auto_close_invoices: z.boolean().optional(),
});
const convertQuoteBodySchema = z.looseObject({
  invoice_date: z.number().int().optional(),
  invoice_immediately: z.boolean().optional(),
  create_pending_invoices: z.boolean().optional(),
  first_invoice_pending: z.boolean().default(false).optional(),
  subscription: convertQuoteSubscriptionSchema.optional(),
});
export { convertQuoteBodySchema };
