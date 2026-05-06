// Generated Zod validator: Invoice.addAddonCharge
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const addAddonChargeInvoiceLineItemSchema = z.object({
  date_from: z.number().int().optional(),
  date_to: z.number().int().optional(),
});
const addAddonChargeInvoiceBodySchema = z.looseObject({
  addon_id: z.string().max(100),
  addon_quantity: z.number().int().min(1).optional(),
  addon_unit_price: z.number().int().min(0).optional(),
  addon_quantity_in_decimal: z.string().max(33).optional(),
  addon_unit_price_in_decimal: z.string().max(39).optional(),
  comment: z.string().max(300).optional(),
  subscription_id: z.string().max(50).optional(),
  line_item: addAddonChargeInvoiceLineItemSchema.optional(),
});
export { addAddonChargeInvoiceBodySchema };
