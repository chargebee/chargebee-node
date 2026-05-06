// Generated Zod validator: Order.cancel
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const cancelOrderCreditNoteSchema = z.object({
  total: z.number().int().min(0).optional(),
});
const cancelOrderBodySchema = z.looseObject({
  cancellation_reason: z.enum([
    'shipping_cut_off_passed',
    'product_unsatisfactory',
    'third_party_cancellation',
    'product_not_required',
    'delivery_date_missed',
    'alternative_found',
    'invoice_written_off',
    'invoice_voided',
    'fraudulent_transaction',
    'payment_declined',
    'subscription_cancelled',
    'product_not_available',
    'others',
    'order_resent',
  ]),
  customer_notes: z.string().max(2000).optional(),
  comment: z.string().max(300).optional(),
  cancelled_at: z.number().int().optional(),
  credit_note: cancelOrderCreditNoteSchema.optional(),
});
export { cancelOrderBodySchema };
