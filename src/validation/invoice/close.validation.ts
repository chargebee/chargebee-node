// Generated Zod validator: Invoice.close
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const closeInvoiceNotesToRemoveSchema = z.object({
  entity_type: z
    .array(
      z
        .enum([
          'customer',
          'subscription',
          'coupon',
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
const closeInvoiceBodySchema = z.looseObject({
  comment: z.string().max(300).optional(),
  invoice_note: z.string().max(2000).optional(),
  remove_general_note: z.boolean().default(false).optional(),
  invoice_date: z.number().int().optional(),
  notes_to_remove: closeInvoiceNotesToRemoveSchema.optional(),
});
export { closeInvoiceBodySchema };
