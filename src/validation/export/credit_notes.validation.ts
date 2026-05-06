// Generated Zod validator: Export.creditNotes
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const creditNotesExportIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
  not_in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
});
const creditNotesExportCustomerIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
  not_in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
});
const creditNotesExportSubscriptionIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
  in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
  not_in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
});
const creditNotesExportReferenceInvoiceIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
  in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
  not_in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
});
const creditNotesExportTypeSchema = z.object({
  is: z.enum(['adjustment', 'refundable', 'store']).optional(),
  is_not: z.enum(['adjustment', 'refundable', 'store']).optional(),
  in: z.enum(['adjustment', 'refundable', 'store']).optional(),
  not_in: z.enum(['adjustment', 'refundable', 'store']).optional(),
});
const creditNotesExportReasonCodeSchema = z.object({
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
const creditNotesExportCreateReasonCodeSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
  not_in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
});
const creditNotesExportStatusSchema = z.object({
  is: z.enum(['adjusted', 'refunded', 'refund_due', 'voided']).optional(),
  is_not: z.enum(['adjusted', 'refunded', 'refund_due', 'voided']).optional(),
  in: z.enum(['adjusted', 'refunded', 'refund_due', 'voided']).optional(),
  not_in: z.enum(['adjusted', 'refunded', 'refund_due', 'voided']).optional(),
});
const creditNotesExportDateSchema = z.object({
  after: z.string().regex(RegExp('^d{10}$')).optional(),
  before: z.string().regex(RegExp('^d{10}$')).optional(),
  on: z.string().regex(RegExp('^d{10}$')).optional(),
  between: z.string().regex(RegExp('^[d{10},d{10}]$')).optional(),
});
const creditNotesExportTotalSchema = z.object({
  is: z.string().regex(RegExp('^-?d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?d+$')).optional(),
  lt: z.string().regex(RegExp('^-?d+$')).optional(),
  lte: z.string().regex(RegExp('^-?d+$')).optional(),
  gt: z.string().regex(RegExp('^-?d+$')).optional(),
  gte: z.string().regex(RegExp('^-?d+$')).optional(),
  between: z.string().regex(RegExp('^[-?d+,-?d+]$')).optional(),
});
const creditNotesExportPriceTypeSchema = z.object({
  is: z.enum(['tax_exclusive', 'tax_inclusive']).optional(),
  is_not: z.enum(['tax_exclusive', 'tax_inclusive']).optional(),
  in: z.enum(['tax_exclusive', 'tax_inclusive']).optional(),
  not_in: z.enum(['tax_exclusive', 'tax_inclusive']).optional(),
});
const creditNotesExportAmountAllocatedSchema = z.object({
  is: z.string().regex(RegExp('^-?d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?d+$')).optional(),
  lt: z.string().regex(RegExp('^-?d+$')).optional(),
  lte: z.string().regex(RegExp('^-?d+$')).optional(),
  gt: z.string().regex(RegExp('^-?d+$')).optional(),
  gte: z.string().regex(RegExp('^-?d+$')).optional(),
  between: z.string().regex(RegExp('^[-?d+,-?d+]$')).optional(),
});
const creditNotesExportAmountRefundedSchema = z.object({
  is: z.string().regex(RegExp('^-?d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?d+$')).optional(),
  lt: z.string().regex(RegExp('^-?d+$')).optional(),
  lte: z.string().regex(RegExp('^-?d+$')).optional(),
  gt: z.string().regex(RegExp('^-?d+$')).optional(),
  gte: z.string().regex(RegExp('^-?d+$')).optional(),
  between: z.string().regex(RegExp('^[-?d+,-?d+]$')).optional(),
});
const creditNotesExportAmountAvailableSchema = z.object({
  is: z.string().regex(RegExp('^-?d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?d+$')).optional(),
  lt: z.string().regex(RegExp('^-?d+$')).optional(),
  lte: z.string().regex(RegExp('^-?d+$')).optional(),
  gt: z.string().regex(RegExp('^-?d+$')).optional(),
  gte: z.string().regex(RegExp('^-?d+$')).optional(),
  between: z.string().regex(RegExp('^[-?d+,-?d+]$')).optional(),
});
const creditNotesExportVoidedAtSchema = z.object({
  after: z.string().regex(RegExp('^d{10}$')).optional(),
  before: z.string().regex(RegExp('^d{10}$')).optional(),
  on: z.string().regex(RegExp('^d{10}$')).optional(),
  between: z.string().regex(RegExp('^[d{10},d{10}]$')).optional(),
});
const creditNotesExportUpdatedAtSchema = z.object({
  after: z.string().regex(RegExp('^d{10}$')).optional(),
  before: z.string().regex(RegExp('^d{10}$')).optional(),
  on: z.string().regex(RegExp('^d{10}$')).optional(),
  between: z.string().regex(RegExp('^[d{10},d{10}]$')).optional(),
});
const creditNotesExportChannelSchema = z.object({
  is: z.enum(['web', 'app_store', 'play_store']).optional(),
  is_not: z.enum(['web', 'app_store', 'play_store']).optional(),
  in: z.enum(['web', 'app_store', 'play_store']).optional(),
  not_in: z.enum(['web', 'app_store', 'play_store']).optional(),
});
const creditNotesExportCreditNoteItemSchema = z.object({
  id: creditNotesExportIdSchema.optional(),
  customer_id: creditNotesExportCustomerIdSchema.optional(),
  subscription_id: creditNotesExportSubscriptionIdSchema.optional(),
  reference_invoice_id: creditNotesExportReferenceInvoiceIdSchema.optional(),
  type: creditNotesExportTypeSchema.optional(),
  reason_code: creditNotesExportReasonCodeSchema.optional(),
  create_reason_code: creditNotesExportCreateReasonCodeSchema.optional(),
  status: creditNotesExportStatusSchema.optional(),
  date: creditNotesExportDateSchema.optional(),
  total: creditNotesExportTotalSchema.optional(),
  price_type: creditNotesExportPriceTypeSchema.optional(),
  amount_allocated: creditNotesExportAmountAllocatedSchema.optional(),
  amount_refunded: creditNotesExportAmountRefundedSchema.optional(),
  amount_available: creditNotesExportAmountAvailableSchema.optional(),
  voided_at: creditNotesExportVoidedAtSchema.optional(),
  updated_at: creditNotesExportUpdatedAtSchema.optional(),
  channel: creditNotesExportChannelSchema.optional(),
});
const creditNotesExportBodySchema = z.looseObject({
  credit_note: z
    .array(creditNotesExportCreditNoteItemSchema.optional())
    .optional(),
});
export { creditNotesExportBodySchema };
