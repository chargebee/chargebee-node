// Generated Zod validator: Invoice.addCharge
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const addChargeInvoiceLineItemSchema = z.object({
  date_from: z.number().int().optional(),
  date_to: z.number().int().optional(),
});
const addChargeInvoiceBodySchema = z.looseObject({
  amount: z.number().int().min(1),
  description: z.string().max(250),
  avalara_sale_type: z
    .enum(['wholesale', 'retail', 'consumed', 'vendor_use'])
    .optional(),
  avalara_transaction_type: z.number().int().optional(),
  avalara_service_type: z.number().int().optional(),
  avalara_tax_code: z.string().max(50).optional(),
  hsn_code: z.string().max(50).optional(),
  taxjar_product_code: z.string().max(50).optional(),
  comment: z.string().max(300).optional(),
  subscription_id: z.string().max(50).optional(),
  line_item: addChargeInvoiceLineItemSchema.optional(),
});
export { addChargeInvoiceBodySchema };
