// Generated Zod validator: CreditNote.retrieve
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const retrieveCreditNoteSubscriptionIdSchema = z.object({
  is: z.string().min(1).optional(),
});
const retrieveCreditNoteCustomerIdSchema = z.object({
  is: z.string().min(1).optional(),
});
const retrieveCreditNoteLineItemSchema = z.object({
  subscription_id: retrieveCreditNoteSubscriptionIdSchema.optional(),
  customer_id: retrieveCreditNoteCustomerIdSchema.optional(),
});
const retrieveCreditNoteBodySchema = z.looseObject({
  line_items_limit: z.number().int().min(1).max(300).optional(),
  line_items_offset: z.string().max(1000).optional(),
  line_item: retrieveCreditNoteLineItemSchema.optional(),
});
export { retrieveCreditNoteBodySchema };
