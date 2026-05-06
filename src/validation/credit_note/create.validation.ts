// Generated Zod validator: CreditNote.create
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const createCreditNoteLineItemsSchema = z.object({
  reference_line_item_id: z.array(z.string().max(40).optional()).optional(),
  unit_amount: z.array(z.number().int().optional()).optional(),
  unit_amount_in_decimal: z.array(z.string().max(39).optional()).optional(),
  quantity: z.array(z.number().int().optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  amount: z.array(z.number().int().optional()).optional(),
  date_from: z.array(z.number().int().optional()).optional(),
  date_to: z.array(z.number().int().optional()).optional(),
  description: z.array(z.string().max(250).optional()).optional(),
  entity_type: z
    .array(
      z
        .enum([
          'adhoc',
          'plan_item_price',
          'addon_item_price',
          'charge_item_price',
          'plan',
          'addon',
        ])
        .optional(),
    )
    .optional(),
  entity_id: z.array(z.string().max(100).optional()).optional(),
});
const createCreditNoteBodySchema = z.looseObject({
  reference_invoice_id: z.string().max(50).optional(),
  customer_id: z.string().max(50).optional(),
  total: z.number().int().min(0).optional(),
  type: z.enum(['adjustment', 'refundable', 'store']),
  reason_code: z
    .enum([
      'product_unsatisfactory',
      'service_unsatisfactory',
      'order_change',
      'order_cancellation',
      'waiver',
      'other',
    ])
    .optional(),
  create_reason_code: z.string().max(100).optional(),
  date: z.number().int().optional(),
  customer_notes: z.string().max(2000).optional(),
  currency_code: z.string().max(3).optional(),
  comment: z.string().max(300).optional(),
  line_items: createCreditNoteLineItemsSchema.optional(),
});
export { createCreditNoteBodySchema };
