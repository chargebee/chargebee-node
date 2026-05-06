// Generated Zod validator: CreditNote.importCreditNote
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const importCreditNoteCreditNoteLineItemsSchema = z.object({
  reference_line_item_id: z.array(z.string().max(40).optional()).optional(),
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
});
const importCreditNoteCreditNoteLineItemTiersSchema = z.object({
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
const importCreditNoteCreditNoteDiscountsSchema = z.object({
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
const importCreditNoteCreditNoteTaxesSchema = z.object({
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
const importCreditNoteCreditNoteAllocationsSchema = z.object({
  invoice_id: z.array(z.string().max(50).optional()),
  allocated_amount: z.array(z.number().int().min(1).optional()),
  allocated_at: z.array(z.number().int().optional()),
});
const importCreditNoteCreditNoteLinkedRefundsSchema = z.object({
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
  date: z.array(z.number().int().optional()),
  reference_number: z.array(z.string().max(100).min(1).optional()).optional(),
});
const importCreditNoteCreditNoteBodySchema = z.looseObject({
  id: z.string().max(50),
  customer_id: z.string().max(50).optional(),
  subscription_id: z.string().max(50).optional(),
  reference_invoice_id: z.string().max(50),
  type: z.enum(['adjustment', 'refundable', 'store']),
  currency_code: z.string().max(3).optional(),
  create_reason_code: z.string().max(100),
  date: z.number().int(),
  status: z.enum(['adjusted', 'refunded', 'refund_due', 'voided']).optional(),
  total: z.number().int().min(0).optional(),
  refunded_at: z.number().int().optional(),
  voided_at: z.number().int().optional(),
  sub_total: z.number().int().min(0).optional(),
  round_off_amount: z.number().int().min(-99).max(99).optional(),
  fractional_correction: z.number().int().min(-50000).max(50000).optional(),
  vat_number_prefix: z.string().max(10).optional(),
  line_items: importCreditNoteCreditNoteLineItemsSchema.optional(),
  line_item_tiers: importCreditNoteCreditNoteLineItemTiersSchema.optional(),
  discounts: importCreditNoteCreditNoteDiscountsSchema.optional(),
  taxes: importCreditNoteCreditNoteTaxesSchema.optional(),
  allocations: importCreditNoteCreditNoteAllocationsSchema.optional(),
  linked_refunds: importCreditNoteCreditNoteLinkedRefundsSchema.optional(),
});
export { importCreditNoteCreditNoteBodySchema };
