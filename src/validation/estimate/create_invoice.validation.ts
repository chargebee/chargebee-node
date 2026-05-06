// Generated Zod validator: Estimate.createInvoice
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const createInvoiceEstimateInvoiceSchema = z.object({
  customer_id: z.string().max(50).optional(),
  subscription_id: z.string().max(50).optional(),
  po_number: z.string().max(100).optional(),
});
const createInvoiceEstimateShippingAddressSchema = z.object({
  first_name: z.string().max(150).optional(),
  last_name: z.string().max(150).optional(),
  email: z.string().email().max(70).optional(),
  company: z.string().max(250).optional(),
  phone: z.string().max(50).optional(),
  line1: z.string().max(150).optional(),
  line2: z.string().max(150).optional(),
  line3: z.string().max(150).optional(),
  city: z.string().max(50).optional(),
  state_code: z.string().max(50).optional(),
  state: z.string().max(50).optional(),
  zip: z.string().max(20).optional(),
  country: z.string().max(50).optional(),
  validation_status: z
    .enum(['not_validated', 'valid', 'partially_valid', 'invalid'])
    .optional(),
});
const createInvoiceEstimateAddonsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  date_from: z.array(z.number().int().optional()).optional(),
  date_to: z.array(z.number().int().optional()).optional(),
});
const createInvoiceEstimateChargesSchema = z.object({
  amount: z.array(z.number().int().min(1).optional()).optional(),
  amount_in_decimal: z.array(z.string().max(39).optional()).optional(),
  description: z.array(z.string().max(250).optional()).optional(),
  taxable: z.array(z.boolean().default(true).optional()).optional(),
  tax_profile_id: z.array(z.string().max(50).optional()).optional(),
  avalara_tax_code: z.array(z.string().max(50).optional()).optional(),
  hsn_code: z.array(z.string().max(50).optional()).optional(),
  taxjar_product_code: z.array(z.string().max(50).optional()).optional(),
  avalara_sale_type: z
    .array(z.enum(['wholesale', 'retail', 'consumed', 'vendor_use']).optional())
    .optional(),
  avalara_transaction_type: z.array(z.number().int().optional()).optional(),
  avalara_service_type: z.array(z.number().int().optional()).optional(),
  date_from: z.array(z.number().int().optional()).optional(),
  date_to: z.array(z.number().int().optional()).optional(),
});
const createInvoiceEstimateNotesToRemoveSchema = z.object({
  entity_type: z
    .array(
      z
        .enum(['plan', 'addon', 'customer', 'subscription', 'coupon'])
        .optional(),
    )
    .optional(),
  entity_id: z.array(z.string().max(100).optional()).optional(),
});
const createInvoiceEstimateTaxProvidersFieldsSchema = z.object({
  provider_name: z.array(z.string().max(50).optional()).optional(),
  field_id: z.array(z.string().max(50).optional()).optional(),
  field_value: z.array(z.string().max(50).optional()).optional(),
});
const createInvoiceEstimateBodySchema = z.looseObject({
  currency_code: z.string().max(3).optional(),
  invoice_note: z.string().max(2000).optional(),
  remove_general_note: z.boolean().default(false).optional(),
  coupon: z.string().max(100).optional(),
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  authorization_transaction_id: z.string().max(40).optional(),
  payment_source_id: z.string().max(40).optional(),
  auto_collection: z.enum(['on', 'off']).optional(),
  invoice_date: z.number().int().optional(),
  invoice: createInvoiceEstimateInvoiceSchema.optional(),
  shipping_address: createInvoiceEstimateShippingAddressSchema.optional(),
  addons: createInvoiceEstimateAddonsSchema.optional(),
  charges: createInvoiceEstimateChargesSchema.optional(),
  notes_to_remove: createInvoiceEstimateNotesToRemoveSchema.optional(),
  tax_providers_fields:
    createInvoiceEstimateTaxProvidersFieldsSchema.optional(),
});
export { createInvoiceEstimateBodySchema };
