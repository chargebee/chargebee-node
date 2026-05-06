// Generated Zod validator: Invoice.createForChargeItem
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const createForChargeItemInvoiceItemPriceSchema = z.object({
  item_price_id: z.string().max(100),
  quantity: z.number().int().min(1).optional(),
  quantity_in_decimal: z.string().max(33).optional(),
  unit_price: z.number().int().min(0).optional(),
  unit_price_in_decimal: z.string().max(39).optional(),
  date_from: z.number().int().optional(),
  date_to: z.number().int().optional(),
});
const createForChargeItemInvoiceItemTiersSchema = z.object({
  starting_unit: z.array(z.number().int().min(1).optional()).optional(),
  ending_unit: z.array(z.number().int().optional()).optional(),
  price: z.array(z.number().int().min(0).optional()).optional(),
  starting_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  ending_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  pricing_type: z
    .array(z.enum(['per_unit', 'flat_fee', 'package']).optional())
    .optional(),
  package_size: z.array(z.number().int().min(1).optional()).optional(),
});
const createForChargeItemInvoiceBodySchema = z.looseObject({
  customer_id: z.string().max(50).optional(),
  subscription_id: z.string().max(50).optional(),
  po_number: z.string().max(100).optional(),
  coupon: z.string().max(100).optional(),
  payment_source_id: z.string().max(40).optional(),
  payment_initiator: z.enum(['customer', 'merchant']).optional(),
  invoice_date: z.number().int().optional(),
  item_price: createForChargeItemInvoiceItemPriceSchema.optional(),
  item_tiers: createForChargeItemInvoiceItemTiersSchema.optional(),
});
export { createForChargeItemInvoiceBodySchema };
