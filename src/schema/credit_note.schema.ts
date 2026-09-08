// Generated Zod schemas: CreditNote
// Actions: create, retrieve, pdf, refund, recordRefund, voidCreditNote, list, creditNotesForCustomer, delete, update, removeTaxWithheldRefund, importCreditNote
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//CreditNote.create

const CreateCreditNoteLineItemsSchema = z.object({
  reference_line_item_id: z.array(z.string().max(40).optional()).optional(),
  unit_amount: z.array(z.number().int().optional()).optional(),
  unit_amount_in_decimal: z.array(z.string().max(39).optional()).optional(),
  quantity: z.array(z.number().int().optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  amount: z.array(z.number().int().optional()).optional(),
  date_from: z.array(z.number().int().optional()).optional(),
  date_to: z.array(z.number().int().optional()).optional(),
  description: z.array(z.string().max(250).optional()).optional(),
  entity_type: z
    .array(
      z
        .enum([
          'adhoc',
          'plan_item_price',
          'addon_item_price',
          'charge_item_price',
          'plan',
          'addon',
        ])
        .optional(),
    )
    .optional(),
  entity_id: z.array(z.string().max(100).optional()).optional(),
});
const CreateCreditNoteBodySchema = z.looseObject({
  reference_invoice_id: z.string().max(50).optional(),
  customer_id: z.string().max(50).optional(),
  total: z.number().int().min(0).optional(),
  type: z.enum(['adjustment', 'refundable', 'store']),
  reason_code: z
    .enum([
      'product_unsatisfactory',
      'service_unsatisfactory',
      'order_change',
      'order_cancellation',
      'waiver',
      'other',
    ])
    .optional(),
  create_reason_code: z.string().max(100).optional(),
  date: z.number().int().optional(),
  customer_notes: z.string().max(2000).optional(),
  currency_code: z.string().max(3).optional(),
  comment: z.string().max(300).optional(),
  line_items: CreateCreditNoteLineItemsSchema.optional(),
});
export { CreateCreditNoteBodySchema };
export type CreateCreditNoteBody = z.infer<typeof CreateCreditNoteBodySchema>;

//CreditNote.retrieve

const RetrieveCreditNoteSubscriptionIdSchema = z.object({
  is: z.string().min(1).optional(),
});
const RetrieveCreditNoteCustomerIdSchema = z.object({
  is: z.string().min(1).optional(),
});
const RetrieveCreditNoteLineItemSchema = z.object({
  subscription_id: RetrieveCreditNoteSubscriptionIdSchema.optional(),
  customer_id: RetrieveCreditNoteCustomerIdSchema.optional(),
});
const RetrieveCreditNoteBodySchema = z.looseObject({
  line_items_limit: z.number().int().min(1).max(300).optional(),
  line_items_offset: z.string().max(1000).optional(),
  line_item: RetrieveCreditNoteLineItemSchema.optional(),
});
export { RetrieveCreditNoteBodySchema };
export type RetrieveCreditNoteBody = z.infer<
  typeof RetrieveCreditNoteBodySchema
>;

//CreditNote.pdf

const PdfCreditNoteBodySchema = z.looseObject({
  disposition_type: z.enum(['attachment', 'inline']).optional(),
});
export { PdfCreditNoteBodySchema };
export type PdfCreditNoteBody = z.infer<typeof PdfCreditNoteBodySchema>;

//CreditNote.refund

const RefundCreditNoteBodySchema = z.looseObject({
  refund_amount: z.number().int().min(1).optional(),
  customer_notes: z.string().max(2000).optional(),
  refund_reason_code: z.string().max(100).optional(),
});
export { RefundCreditNoteBodySchema };
export type RefundCreditNoteBody = z.infer<typeof RefundCreditNoteBodySchema>;

//CreditNote.recordRefund

const RecordRefundCreditNoteTransactionSchema = z.object({
  id: z.string().max(40).optional(),
  amount: z.number().int().min(0).optional(),
  payment_method: z.enum([
    'cash',
    'check',
    'chargeback',
    'bank_transfer',
    'other',
    'app_store',
    'play_store',
    'custom',
    'dana',
    'touch_n_go',
    'tamara',
    'qpay',
  ]),
  reference_number: z.string().max(100).optional(),
  custom_payment_method_id: z.string().max(50).optional(),
  date: z.number().int(),
});
const RecordRefundCreditNoteBodySchema = z.looseObject({
  refund_reason_code: z.string().max(100).optional(),
  comment: z.string().max(300).optional(),
  transaction: RecordRefundCreditNoteTransactionSchema.optional(),
});
export { RecordRefundCreditNoteBodySchema };
export type RecordRefundCreditNoteBody = z.infer<
  typeof RecordRefundCreditNoteBodySchema
>;

//CreditNote.voidCreditNote

const VoidCreditNoteCreditNoteBodySchema = z.looseObject({
  comment: z.string().max(300).optional(),
});
export { VoidCreditNoteCreditNoteBodySchema };
export type VoidCreditNoteCreditNoteBody = z.infer<
  typeof VoidCreditNoteCreditNoteBodySchema
>;

//CreditNote.list

const ListCreditNoteIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ListCreditNoteCustomerIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ListCreditNoteSubscriptionIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ListCreditNoteReferenceInvoiceIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ListCreditNoteTypeSchema = z.object({
  is: z.enum(['adjustment', 'refundable', 'store']).optional(),
  is_not: z.enum(['adjustment', 'refundable', 'store']).optional(),
  in: z.enum(['adjustment', 'refundable', 'store']).optional(),
  not_in: z.enum(['adjustment', 'refundable', 'store']).optional(),
});
const ListCreditNoteReasonCodeSchema = z.object({
  is: z
    .enum([
      'write_off',
      'subscription_change',
      'subscription_cancellation',
      'subscription_pause',
      'chargeback',
      'product_unsatisfactory',
      'service_unsatisfactory',
      'order_change',
      'order_cancellation',
      'waiver',
      'other',
      'fraudulent',
    ])
    .optional(),
  is_not: z
    .enum([
      'write_off',
      'subscription_change',
      'subscription_cancellation',
      'subscription_pause',
      'chargeback',
      'product_unsatisfactory',
      'service_unsatisfactory',
      'order_change',
      'order_cancellation',
      'waiver',
      'other',
      'fraudulent',
    ])
    .optional(),
  in: z
    .enum([
      'write_off',
      'subscription_change',
      'subscription_cancellation',
      'subscription_pause',
      'chargeback',
      'product_unsatisfactory',
      'service_unsatisfactory',
      'order_change',
      'order_cancellation',
      'waiver',
      'other',
      'fraudulent',
    ])
    .optional(),
  not_in: z
    .enum([
      'write_off',
      'subscription_change',
      'subscription_cancellation',
      'subscription_pause',
      'chargeback',
      'product_unsatisfactory',
      'service_unsatisfactory',
      'order_change',
      'order_cancellation',
      'waiver',
      'other',
      'fraudulent',
    ])
    .optional(),
});
const ListCreditNoteCreateReasonCodeSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ListCreditNoteStatusSchema = z.object({
  is: z.enum(['adjusted', 'refunded', 'refund_due', 'voided']).optional(),
  is_not: z.enum(['adjusted', 'refunded', 'refund_due', 'voided']).optional(),
  in: z.enum(['adjusted', 'refunded', 'refund_due', 'voided']).optional(),
  not_in: z.enum(['adjusted', 'refunded', 'refund_due', 'voided']).optional(),
});
const ListCreditNoteDateSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const ListCreditNoteTotalSchema = z.object({
  is: z.string().regex(RegExp('^-?\\d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  between: z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')).optional(),
});
const ListCreditNotePriceTypeSchema = z.object({
  is: z.enum(['tax_exclusive', 'tax_inclusive']).optional(),
  is_not: z.enum(['tax_exclusive', 'tax_inclusive']).optional(),
  in: z.enum(['tax_exclusive', 'tax_inclusive']).optional(),
  not_in: z.enum(['tax_exclusive', 'tax_inclusive']).optional(),
});
const ListCreditNoteAmountAllocatedSchema = z.object({
  is: z.string().regex(RegExp('^-?\\d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  between: z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')).optional(),
});
const ListCreditNoteAmountRefundedSchema = z.object({
  is: z.string().regex(RegExp('^-?\\d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  between: z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')).optional(),
});
const ListCreditNoteAmountAvailableSchema = z.object({
  is: z.string().regex(RegExp('^-?\\d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  between: z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')).optional(),
});
const ListCreditNoteVoidedAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const ListCreditNoteUpdatedAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const ListCreditNoteSortBySchema = z.looseObject({
  asc: z.enum(['date']).optional(),
  desc: z.enum(['date']).optional(),
});
const ListCreditNoteChannelSchema = z.object({
  is: z.enum(['web', 'app_store', 'play_store']).optional(),
  is_not: z.enum(['web', 'app_store', 'play_store']).optional(),
  in: z.enum(['web', 'app_store', 'play_store']).optional(),
  not_in: z.enum(['web', 'app_store', 'play_store']).optional(),
});
const ListCreditNoteEinvoiceSchema = z.object({
  status: ListCreditNoteStatusSchema.optional(),
});
const ListCreditNoteBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  include_deleted: z.boolean().default(false).optional(),
  id: ListCreditNoteIdSchema.optional(),
  customer_id: ListCreditNoteCustomerIdSchema.optional(),
  subscription_id: ListCreditNoteSubscriptionIdSchema.optional(),
  reference_invoice_id: ListCreditNoteReferenceInvoiceIdSchema.optional(),
  type: ListCreditNoteTypeSchema.optional(),
  reason_code: ListCreditNoteReasonCodeSchema.optional(),
  create_reason_code: ListCreditNoteCreateReasonCodeSchema.optional(),
  status: ListCreditNoteStatusSchema.optional(),
  date: ListCreditNoteDateSchema.optional(),
  total: ListCreditNoteTotalSchema.optional(),
  price_type: ListCreditNotePriceTypeSchema.optional(),
  amount_allocated: ListCreditNoteAmountAllocatedSchema.optional(),
  amount_refunded: ListCreditNoteAmountRefundedSchema.optional(),
  amount_available: ListCreditNoteAmountAvailableSchema.optional(),
  voided_at: ListCreditNoteVoidedAtSchema.optional(),
  updated_at: ListCreditNoteUpdatedAtSchema.optional(),
  sort_by: ListCreditNoteSortBySchema.optional(),
  channel: ListCreditNoteChannelSchema.optional(),
  einvoice: ListCreditNoteEinvoiceSchema.optional(),
});
export { ListCreditNoteBodySchema };
export type ListCreditNoteBody = z.infer<typeof ListCreditNoteBodySchema>;

//CreditNote.creditNotesForCustomer

const CreditNotesForCustomerCreditNoteBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
});
export { CreditNotesForCustomerCreditNoteBodySchema };
export type CreditNotesForCustomerCreditNoteBody = z.infer<
  typeof CreditNotesForCustomerCreditNoteBodySchema
>;

//CreditNote.delete

const DeleteCreditNoteBodySchema = z.looseObject({
  comment: z.string().max(300).optional(),
});
export { DeleteCreditNoteBodySchema };
export type DeleteCreditNoteBody = z.infer<typeof DeleteCreditNoteBodySchema>;

//CreditNote.update

const UpdateCreditNoteBodySchema = z.looseObject({
  comment: z.string().max(300).optional(),
});
export { UpdateCreditNoteBodySchema };
export type UpdateCreditNoteBody = z.infer<typeof UpdateCreditNoteBodySchema>;

//CreditNote.removeTaxWithheldRefund

const RemoveTaxWithheldRefundCreditNoteTaxWithheldSchema = z.object({
  id: z.string().max(40),
});
const RemoveTaxWithheldRefundCreditNoteBodySchema = z.looseObject({
  tax_withheld: RemoveTaxWithheldRefundCreditNoteTaxWithheldSchema.optional(),
});
export { RemoveTaxWithheldRefundCreditNoteBodySchema };
export type RemoveTaxWithheldRefundCreditNoteBody = z.infer<
  typeof RemoveTaxWithheldRefundCreditNoteBodySchema
>;

//CreditNote.importCreditNote

const ImportCreditNoteCreditNoteLineItemsSchema = z.object({
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
  proration_mode: z
    .array(
      z
        .enum(['reset', 'delta', 'service_period_revision', 'adjusted_term'])
        .optional(),
    )
    .optional(),
});
const ImportCreditNoteCreditNoteLineItemTiersSchema = z.object({
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
const ImportCreditNoteCreditNoteDiscountsSchema = z.object({
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
const ImportCreditNoteCreditNoteTaxesSchema = z.object({
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
const ImportCreditNoteCreditNoteAllocationsSchema = z.object({
  invoice_id: z.array(z.string().max(50).optional()),
  allocated_amount: z.array(z.number().int().min(1).optional()),
  allocated_at: z.array(z.number().int().optional()),
});
const ImportCreditNoteCreditNoteLinkedRefundsSchema = z.object({
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
        'dana',
        'touch_n_go',
        'tamara',
        'qpay',
      ])
      .optional(),
  ),
  date: z.array(z.number().int().optional()),
  reference_number: z.array(z.string().max(100).min(1).optional()).optional(),
});
const ImportCreditNoteCreditNoteBodySchema = z.looseObject({
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
  line_items: ImportCreditNoteCreditNoteLineItemsSchema.optional(),
  line_item_tiers: ImportCreditNoteCreditNoteLineItemTiersSchema.optional(),
  discounts: ImportCreditNoteCreditNoteDiscountsSchema.optional(),
  taxes: ImportCreditNoteCreditNoteTaxesSchema.optional(),
  allocations: ImportCreditNoteCreditNoteAllocationsSchema.optional(),
  linked_refunds: ImportCreditNoteCreditNoteLinkedRefundsSchema.optional(),
});
export { ImportCreditNoteCreditNoteBodySchema };
export type ImportCreditNoteCreditNoteBody = z.infer<
  typeof ImportCreditNoteCreditNoteBodySchema
>;
