// Generated Zod validator: Export.orders
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const ordersExportTotalSchema = z.object({
  is: z.string().regex(RegExp('^-?d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?d+$')).optional(),
  lt: z.string().regex(RegExp('^-?d+$')).optional(),
  lte: z.string().regex(RegExp('^-?d+$')).optional(),
  gt: z.string().regex(RegExp('^-?d+$')).optional(),
  gte: z.string().regex(RegExp('^-?d+$')).optional(),
  between: z.string().regex(RegExp('^[-?d+,-?d+]$')).optional(),
});
const ordersExportIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
  not_in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
});
const ordersExportSubscriptionIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
  in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
  not_in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
});
const ordersExportCustomerIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
  not_in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
});
const ordersExportStatusSchema = z.object({
  is: z
    .enum([
      'new',
      'processing',
      'complete',
      'cancelled',
      'voided',
      'queued',
      'awaiting_shipment',
      'on_hold',
      'delivered',
      'shipped',
      'partially_delivered',
      'returned',
    ])
    .optional(),
  is_not: z
    .enum([
      'new',
      'processing',
      'complete',
      'cancelled',
      'voided',
      'queued',
      'awaiting_shipment',
      'on_hold',
      'delivered',
      'shipped',
      'partially_delivered',
      'returned',
    ])
    .optional(),
  in: z
    .enum([
      'new',
      'processing',
      'complete',
      'cancelled',
      'voided',
      'queued',
      'awaiting_shipment',
      'on_hold',
      'delivered',
      'shipped',
      'partially_delivered',
      'returned',
    ])
    .optional(),
  not_in: z
    .enum([
      'new',
      'processing',
      'complete',
      'cancelled',
      'voided',
      'queued',
      'awaiting_shipment',
      'on_hold',
      'delivered',
      'shipped',
      'partially_delivered',
      'returned',
    ])
    .optional(),
});
const ordersExportPriceTypeSchema = z.object({
  is: z.enum(['tax_exclusive', 'tax_inclusive']).optional(),
  is_not: z.enum(['tax_exclusive', 'tax_inclusive']).optional(),
  in: z.enum(['tax_exclusive', 'tax_inclusive']).optional(),
  not_in: z.enum(['tax_exclusive', 'tax_inclusive']).optional(),
});
const ordersExportOrderDateSchema = z.object({
  after: z.string().regex(RegExp('^d{10}$')).optional(),
  before: z.string().regex(RegExp('^d{10}$')).optional(),
  on: z.string().regex(RegExp('^d{10}$')).optional(),
  between: z.string().regex(RegExp('^[d{10},d{10}]$')).optional(),
});
const ordersExportShippingDateSchema = z.object({
  after: z.string().regex(RegExp('^d{10}$')).optional(),
  before: z.string().regex(RegExp('^d{10}$')).optional(),
  on: z.string().regex(RegExp('^d{10}$')).optional(),
  between: z.string().regex(RegExp('^[d{10},d{10}]$')).optional(),
});
const ordersExportShippedAtSchema = z.object({
  after: z.string().regex(RegExp('^d{10}$')).optional(),
  before: z.string().regex(RegExp('^d{10}$')).optional(),
  on: z.string().regex(RegExp('^d{10}$')).optional(),
  between: z.string().regex(RegExp('^[d{10},d{10}]$')).optional(),
});
const ordersExportDeliveredAtSchema = z.object({
  after: z.string().regex(RegExp('^d{10}$')).optional(),
  before: z.string().regex(RegExp('^d{10}$')).optional(),
  on: z.string().regex(RegExp('^d{10}$')).optional(),
  between: z.string().regex(RegExp('^[d{10},d{10}]$')).optional(),
});
const ordersExportCancelledAtSchema = z.object({
  after: z.string().regex(RegExp('^d{10}$')).optional(),
  before: z.string().regex(RegExp('^d{10}$')).optional(),
  on: z.string().regex(RegExp('^d{10}$')).optional(),
  between: z.string().regex(RegExp('^[d{10},d{10}]$')).optional(),
});
const ordersExportAmountPaidSchema = z.object({
  is: z.string().regex(RegExp('^-?d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?d+$')).optional(),
  lt: z.string().regex(RegExp('^-?d+$')).optional(),
  lte: z.string().regex(RegExp('^-?d+$')).optional(),
  gt: z.string().regex(RegExp('^-?d+$')).optional(),
  gte: z.string().regex(RegExp('^-?d+$')).optional(),
  between: z.string().regex(RegExp('^[-?d+,-?d+]$')).optional(),
});
const ordersExportRefundableCreditsSchema = z.object({
  is: z.string().regex(RegExp('^-?d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?d+$')).optional(),
  lt: z.string().regex(RegExp('^-?d+$')).optional(),
  lte: z.string().regex(RegExp('^-?d+$')).optional(),
  gt: z.string().regex(RegExp('^-?d+$')).optional(),
  gte: z.string().regex(RegExp('^-?d+$')).optional(),
  between: z.string().regex(RegExp('^[-?d+,-?d+]$')).optional(),
});
const ordersExportRefundableCreditsIssuedSchema = z.object({
  is: z.string().regex(RegExp('^-?d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?d+$')).optional(),
  lt: z.string().regex(RegExp('^-?d+$')).optional(),
  lte: z.string().regex(RegExp('^-?d+$')).optional(),
  gt: z.string().regex(RegExp('^-?d+$')).optional(),
  gte: z.string().regex(RegExp('^-?d+$')).optional(),
  between: z.string().regex(RegExp('^[-?d+,-?d+]$')).optional(),
});
const ordersExportUpdatedAtSchema = z.object({
  after: z.string().regex(RegExp('^d{10}$')).optional(),
  before: z.string().regex(RegExp('^d{10}$')).optional(),
  on: z.string().regex(RegExp('^d{10}$')).optional(),
  between: z.string().regex(RegExp('^[d{10},d{10}]$')).optional(),
});
const ordersExportResentStatusSchema = z.object({
  is: z.enum(['fully_resent', 'partially_resent']).optional(),
  is_not: z.enum(['fully_resent', 'partially_resent']).optional(),
  in: z.enum(['fully_resent', 'partially_resent']).optional(),
  not_in: z.enum(['fully_resent', 'partially_resent']).optional(),
});
const ordersExportIsResentSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const ordersExportOriginalOrderIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const ordersExportOrderItemSchema = z.object({
  id: ordersExportIdSchema.optional(),
  subscription_id: ordersExportSubscriptionIdSchema.optional(),
  customer_id: ordersExportCustomerIdSchema.optional(),
  status: ordersExportStatusSchema.optional(),
  price_type: ordersExportPriceTypeSchema.optional(),
  order_date: ordersExportOrderDateSchema.optional(),
  shipping_date: ordersExportShippingDateSchema.optional(),
  shipped_at: ordersExportShippedAtSchema.optional(),
  delivered_at: ordersExportDeliveredAtSchema.optional(),
  cancelled_at: ordersExportCancelledAtSchema.optional(),
  amount_paid: ordersExportAmountPaidSchema.optional(),
  refundable_credits: ordersExportRefundableCreditsSchema.optional(),
  refundable_credits_issued:
    ordersExportRefundableCreditsIssuedSchema.optional(),
  updated_at: ordersExportUpdatedAtSchema.optional(),
  resent_status: ordersExportResentStatusSchema.optional(),
  is_resent: ordersExportIsResentSchema.optional(),
  original_order_id: ordersExportOriginalOrderIdSchema.optional(),
});
const ordersExportBodySchema = z.looseObject({
  total: ordersExportTotalSchema.optional(),
  order: z.array(ordersExportOrderItemSchema.optional()).optional(),
});
export { ordersExportBodySchema };
