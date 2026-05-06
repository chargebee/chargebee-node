// Generated Zod validator: Estimate.createInvoiceForItems
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const createInvoiceForItemsEstimateInvoiceSchema = z.object({
  customer_id: z.string().max(50).optional(),
  subscription_id: z.string().max(50).optional(),
  po_number: z.string().max(100).optional(),
});
const createInvoiceForItemsEstimateShippingAddressSchema = z.object({
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
const createInvoiceForItemsEstimateBillingAddressSchema = z.object({
  line1: z.string().max(150).optional(),
  line2: z.string().max(150).optional(),
  line3: z.string().max(150).optional(),
  city: z.string().max(50).optional(),
  state_code: z.string().max(50).optional(),
  zip: z.string().max(20).optional(),
  country: z.string().max(50).optional(),
  validation_status: z
    .enum(['not_validated', 'valid', 'partially_valid', 'invalid'])
    .optional(),
});
const createInvoiceForItemsEstimateItemPricesSchema = z.object({
  item_price_id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  date_from: z.array(z.number().int().optional()).optional(),
  date_to: z.array(z.number().int().optional()).optional(),
});
const createInvoiceForItemsEstimateItemTiersSchema = z.object({
  item_price_id: z.array(z.string().max(100).optional()).optional(),
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
const createInvoiceForItemsEstimateChargesSchema = z.object({
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
const createInvoiceForItemsEstimateNotesToRemoveSchema = z.object({
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
        ])
        .optional(),
    )
    .optional(),
  entity_id: z.array(z.string().max(100).optional()).optional(),
});
const createInvoiceForItemsEstimateDiscountsSchema = z.object({
  percentage: z.array(z.number().min(0.01).max(100).optional()).optional(),
  amount: z.array(z.number().int().min(0).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  apply_on: z.array(
    z.enum(['invoice_amount', 'specific_item_price']).optional(),
  ),
  item_price_id: z.array(z.string().max(100).optional()).optional(),
});
const createInvoiceForItemsEstimateTaxProvidersFieldsSchema = z.object({
  provider_name: z.array(z.string().max(50).optional()).optional(),
  field_id: z.array(z.string().max(50).optional()).optional(),
  field_value: z.array(z.string().max(50).optional()).optional(),
});
const createInvoiceForItemsEstimateBodySchema = z.looseObject({
  currency_code: z.string().max(3).optional(),
  invoice_note: z.string().max(2000).optional(),
  remove_general_note: z.boolean().default(false).optional(),
  coupon: z.string().max(100).optional(),
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  authorization_transaction_id: z.string().max(40).optional(),
  payment_source_id: z.string().max(40).optional(),
  auto_collection: z.enum(['on', 'off']).optional(),
  invoice_date: z.number().int().optional(),
  invoice: createInvoiceForItemsEstimateInvoiceSchema.optional(),
  shipping_address:
    createInvoiceForItemsEstimateShippingAddressSchema.optional(),
  billing_address: createInvoiceForItemsEstimateBillingAddressSchema.optional(),
  item_prices: createInvoiceForItemsEstimateItemPricesSchema.optional(),
  item_tiers: createInvoiceForItemsEstimateItemTiersSchema.optional(),
  charges: createInvoiceForItemsEstimateChargesSchema.optional(),
  notes_to_remove: createInvoiceForItemsEstimateNotesToRemoveSchema.optional(),
  discounts: createInvoiceForItemsEstimateDiscountsSchema.optional(),
  tax_providers_fields:
    createInvoiceForItemsEstimateTaxProvidersFieldsSchema.optional(),
});
export { createInvoiceForItemsEstimateBodySchema };
