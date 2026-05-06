// Generated Zod validator: Order.resend
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const resendOrderOrderLineItemsSchema = z.object({
  id: z.array(z.string().max(40).optional()).optional(),
  fulfillment_quantity: z.array(z.number().int().min(0).optional()).optional(),
});
const resendOrderBodySchema = z.looseObject({
  shipping_date: z.number().int().optional(),
  resend_reason: z.string().max(100).optional(),
  order_line_items: resendOrderOrderLineItemsSchema.optional(),
});
export { resendOrderBodySchema };
