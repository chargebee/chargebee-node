// Generated Zod validator: Invoice.charge
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const chargeInvoiceTaxProvidersFieldsSchema = z.object({
  provider_name: z.array(z.string().max(50).optional()).optional(),
  field_id: z.array(z.string().max(50).optional()).optional(),
  field_value: z.array(z.string().max(50).optional()).optional(),
});
const chargeInvoiceBodySchema = z.looseObject({
  customer_id: z.string().max(50).optional(),
  subscription_id: z.string().max(50).optional(),
  currency_code: z.string().max(3).optional(),
  amount: z.number().int().min(1).optional(),
  amount_in_decimal: z.string().max(39).optional(),
  description: z.string().max(250),
  date_from: z.number().int().optional(),
  date_to: z.number().int().optional(),
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  coupon: z.string().max(100).optional(),
  avalara_sale_type: z
    .enum(['wholesale', 'retail', 'consumed', 'vendor_use'])
    .optional(),
  avalara_transaction_type: z.number().int().optional(),
  avalara_service_type: z.number().int().optional(),
  po_number: z.string().max(100).optional(),
  invoice_date: z.number().int().optional(),
  payment_source_id: z.string().max(40).optional(),
  payment_initiator: z.enum(['customer', 'merchant']).optional(),
  tax_providers_fields: chargeInvoiceTaxProvidersFieldsSchema.optional(),
});
export { chargeInvoiceBodySchema };
