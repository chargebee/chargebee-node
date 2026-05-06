// Generated Zod validator: Invoice.chargeAddon
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const chargeAddonInvoiceBodySchema = z.looseObject({
  customer_id: z.string().max(50).optional(),
  subscription_id: z.string().max(50).optional(),
  addon_id: z.string().max(100),
  addon_quantity: z.number().int().min(1).optional(),
  addon_unit_price: z.number().int().min(0).optional(),
  addon_quantity_in_decimal: z.string().max(33).optional(),
  addon_unit_price_in_decimal: z.string().max(39).optional(),
  date_from: z.number().int().optional(),
  date_to: z.number().int().optional(),
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  coupon: z.string().max(100).optional(),
  po_number: z.string().max(100).optional(),
  invoice_date: z.number().int().optional(),
  payment_source_id: z.string().max(40).optional(),
  payment_initiator: z.enum(['customer', 'merchant']).optional(),
});
export { chargeAddonInvoiceBodySchema };
