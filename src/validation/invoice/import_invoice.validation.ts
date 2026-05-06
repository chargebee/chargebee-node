// Generated Zod validator: Invoice.importInvoice
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const importInvoiceInvoiceCreditNoteSchema = z.object({
  id: z.string().max(50).optional(),
});
const importInvoiceInvoiceBillingAddressSchema = z.object({
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
const importInvoiceInvoiceShippingAddressSchema = z.object({
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
const importInvoiceInvoiceLineItemsSchema = z.object({
  id: z.array(z.string().max(40).optional()).optional(),
  date_from: z.array(z.number().int().optional()).optional(),
  date_to: z.array(z.number().int().optional()).optional(),
  subscription_id: z.array(z.string().max(50).optional()).optional(),
  description: z.array(z.string().max(250).optional()),
  unit_amount: z.array(z.number().int().optional()).optional(),
  quantity: z.array(z.number().int().optional()).optional(),
  amount: z.array(z.number().int().optional()).optional(),
  unit_amount_in_decimal: z.array(z.string().max(39).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  amount_in_decimal: z.array(z.string().max(39).optional()).optional(),
  entity_type: z
    .array(
      z
        .enum([
          'adhoc',
          'plan_item_price',
          'addon_item_price',
          'charge_item_price',
          'plan_setup',
          'plan',
          'addon',
        ])
        .optional(),
    )
    .optional(),
  entity_id: z.array(z.string().max(100).optional()).optional(),
  item_level_discount1_entity_id: z
    .array(z.string().max(100).optional())
    .optional(),
  item_level_discount1_amount: z
    .array(z.number().int().min(0).optional())
    .optional(),
  item_level_discount2_entity_id: z
    .array(z.string().max(100).optional())
    .optional(),
  item_level_discount2_amount: z
    .array(z.number().int().min(0).optional())
    .optional(),
  tax1_name: z.array(z.string().max(50).optional()).optional(),
  tax1_amount: z.array(z.number().int().min(0).optional()).optional(),
  tax2_name: z.array(z.string().max(50).optional()).optional(),
  tax2_amount: z.array(z.number().int().min(0).optional()).optional(),
  tax3_name: z.array(z.string().max(50).optional()).optional(),
  tax3_amount: z.array(z.number().int().min(0).optional()).optional(),
  tax4_name: z.array(z.string().max(50).optional()).optional(),
  tax4_amount: z.array(z.number().int().min(0).optional()).optional(),
  tax5_name: z.array(z.string().max(50).optional()).optional(),
  tax5_amount: z.array(z.number().int().min(0).optional()).optional(),
  tax6_name: z.array(z.string().max(50).optional()).optional(),
  tax6_amount: z.array(z.number().int().min(0).optional()).optional(),
  tax7_name: z.array(z.string().max(50).optional()).optional(),
  tax7_amount: z.array(z.number().int().min(0).optional()).optional(),
  tax8_name: z.array(z.string().max(50).optional()).optional(),
  tax8_amount: z.array(z.number().int().min(0).optional()).optional(),
  tax9_name: z.array(z.string().max(50).optional()).optional(),
  tax9_amount: z.array(z.number().int().min(0).optional()).optional(),
  tax10_name: z.array(z.string().max(50).optional()).optional(),
  tax10_amount: z.array(z.number().int().min(0).optional()).optional(),
  created_at: z.array(z.number().int().optional()).optional(),
});
const importInvoiceInvoicePaymentReferenceNumbersSchema = z.object({
  id: z.array(z.string().max(40).optional()).optional(),
  type: z.array(
    z.enum(['kid', 'ocr', 'frn', 'fik', 'swiss_reference']).optional(),
  ),
  number: z.array(z.string().max(100).optional()),
});
const importInvoiceInvoiceLineItemTiersSchema = z.object({
  line_item_id: z.array(z.string().max(40).optional()),
  starting_unit: z.array(z.number().int().min(0).optional()).optional(),
  ending_unit: z.array(z.number().int().optional()).optional(),
  quantity_used: z.array(z.number().int().min(0).optional()).optional(),
  unit_amount: z.array(z.number().int().min(0).optional()).optional(),
  starting_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  ending_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  quantity_used_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_amount_in_decimal: z.array(z.string().max(40).optional()).optional(),
});
const importInvoiceInvoiceDiscountsSchema = z.object({
  line_item_id: z.array(z.string().max(40).optional()).optional(),
  entity_type: z.array(
    z
      .enum([
        'item_level_coupon',
        'document_level_coupon',
        'promotional_credits',
        'item_level_discount',
        'document_level_discount',
      ])
      .optional(),
  ),
  entity_id: z.array(z.string().max(100).optional()).optional(),
  description: z.array(z.string().max(250).optional()).optional(),
  amount: z.array(z.number().int().min(0).optional()),
});
const importInvoiceInvoiceTaxesSchema = z.object({
  name: z.array(z.string().max(100).optional()),
  rate: z.array(z.number().min(0).max(100).optional()),
  amount: z.array(z.number().int().min(0).optional()).optional(),
  description: z.array(z.string().max(50).optional()).optional(),
  juris_type: z
    .array(
      z
        .enum([
          'country',
          'federal',
          'state',
          'county',
          'city',
          'special',
          'unincorporated',
          'other',
        ])
        .optional(),
    )
    .optional(),
  juris_name: z.array(z.string().max(250).optional()).optional(),
  juris_code: z.array(z.string().max(250).optional()).optional(),
});
const importInvoiceInvoicePaymentsSchema = z.object({
  id: z.array(z.string().max(40).optional()).optional(),
  amount: z.array(z.number().int().min(1).optional()),
  payment_method: z.array(
    z
      .enum([
        'cash',
        'check',
        'bank_transfer',
        'other',
        'app_store',
        'play_store',
        'custom',
      ])
      .optional(),
  ),
  date: z.array(z.number().int().optional()).optional(),
  reference_number: z.array(z.string().max(100).min(1).optional()).optional(),
});
const importInvoiceInvoiceNotesSchema = z.object({
  entity_type: z
    .array(
      z
        .enum([
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
  entity_id: z.array(z.string().max(50).optional()).optional(),
  note: z.array(z.string().max(65000).optional()).optional(),
});
const importInvoiceInvoiceLineItemAddressesSchema = z.object({
  line_item_id: z.array(z.string().max(40).optional()).optional(),
  first_name: z.array(z.string().max(150).optional()).optional(),
  last_name: z.array(z.string().max(150).optional()).optional(),
  email: z.array(z.string().email().max(70).optional()).optional(),
  company: z.array(z.string().max(250).optional()).optional(),
  phone: z.array(z.string().max(50).optional()).optional(),
  line1: z.array(z.string().max(150).optional()).optional(),
  line2: z.array(z.string().max(150).optional()).optional(),
  line3: z.array(z.string().max(150).optional()).optional(),
  city: z.array(z.string().max(50).optional()).optional(),
  state_code: z.array(z.string().max(50).optional()).optional(),
  state: z.array(z.string().max(50).optional()).optional(),
  zip: z.array(z.string().max(20).optional()).optional(),
  country: z.array(z.string().max(50).optional()).optional(),
  validation_status: z
    .array(
      z
        .enum(['not_validated', 'valid', 'partially_valid', 'invalid'])
        .optional(),
    )
    .optional(),
});
const importInvoiceInvoiceBodySchema = z.looseObject({
  id: z.string().max(50),
  currency_code: z.string().max(3).optional(),
  customer_id: z.string().max(50).optional(),
  subscription_id: z.string().max(50).optional(),
  po_number: z.string().max(100).optional(),
  price_type: z.enum(['tax_exclusive', 'tax_inclusive']).optional(),
  tax_override_reason: z
    .enum(['id_exempt', 'customer_exempt', 'export'])
    .optional(),
  vat_number: z.string().max(20).optional(),
  vat_number_prefix: z.string().max(10).optional(),
  date: z.number().int(),
  total: z.number().int().min(0),
  round_off: z.number().int().min(-99).max(99).optional(),
  status: z
    .enum(['paid', 'posted', 'payment_due', 'not_paid', 'voided', 'pending'])
    .optional(),
  voided_at: z.number().int().optional(),
  void_reason_code: z.string().max(100).optional(),
  is_written_off: z.boolean().default(false).optional(),
  write_off_amount: z.number().int().min(0).optional(),
  write_off_date: z.number().int().optional(),
  due_date: z.number().int().optional(),
  net_term_days: z.number().int().optional(),
  has_advance_charges: z.boolean().default(false).optional(),
  use_for_proration: z.boolean().default(false).optional(),
  credit_note: importInvoiceInvoiceCreditNoteSchema.optional(),
  billing_address: importInvoiceInvoiceBillingAddressSchema.optional(),
  shipping_address: importInvoiceInvoiceShippingAddressSchema.optional(),
  line_items: importInvoiceInvoiceLineItemsSchema.optional(),
  payment_reference_numbers:
    importInvoiceInvoicePaymentReferenceNumbersSchema.optional(),
  line_item_tiers: importInvoiceInvoiceLineItemTiersSchema.optional(),
  discounts: importInvoiceInvoiceDiscountsSchema.optional(),
  taxes: importInvoiceInvoiceTaxesSchema.optional(),
  payments: importInvoiceInvoicePaymentsSchema.optional(),
  notes: importInvoiceInvoiceNotesSchema.optional(),
  line_item_addresses: importInvoiceInvoiceLineItemAddressesSchema.optional(),
});
export { importInvoiceInvoiceBodySchema };
