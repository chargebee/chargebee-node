// Generated Zod validator: Quote.editOneTimeQuote
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const editOneTimeQuoteQuoteShippingAddressSchema = z.object({
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
const editOneTimeQuoteQuoteAddonsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  service_period: z.array(z.number().int().optional()).optional(),
});
const editOneTimeQuoteQuoteChargesSchema = z.object({
  amount: z.array(z.number().int().min(1).optional()).optional(),
  amount_in_decimal: z.array(z.string().max(39).optional()).optional(),
  description: z.array(z.string().max(250).optional()).optional(),
  avalara_sale_type: z
    .array(z.enum(['wholesale', 'retail', 'consumed', 'vendor_use']).optional())
    .optional(),
  avalara_transaction_type: z.array(z.number().int().optional()).optional(),
  avalara_service_type: z.array(z.number().int().optional()).optional(),
  service_period: z.array(z.number().int().optional()).optional(),
});
const editOneTimeQuoteQuoteTaxProvidersFieldsSchema = z.object({
  provider_name: z.array(z.string().max(50).optional()).optional(),
  field_id: z.array(z.string().max(50).optional()).optional(),
  field_value: z.array(z.string().max(50).optional()).optional(),
});
const editOneTimeQuoteQuoteBodySchema = z.looseObject({
  po_number: z.string().max(100).optional(),
  notes: z.string().max(10000).optional(),
  expires_at: z.number().int().optional(),
  currency_code: z.string().max(3).optional(),
  coupon: z.string().max(100).optional(),
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  shipping_address: editOneTimeQuoteQuoteShippingAddressSchema.optional(),
  addons: editOneTimeQuoteQuoteAddonsSchema.optional(),
  charges: editOneTimeQuoteQuoteChargesSchema.optional(),
  tax_providers_fields:
    editOneTimeQuoteQuoteTaxProvidersFieldsSchema.optional(),
});
export { editOneTimeQuoteQuoteBodySchema };
