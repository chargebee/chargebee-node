// Generated Zod schemas: Order
// Actions: create, update, importOrder, cancel, createRefundableCreditNote, reopen, list, ordersForInvoice, resend
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//Order.create

const CreateOrderBodySchema = z.looseObject({
  id: z.string().max(40).optional(),
  invoice_id: z.string().max(50),
  status: z
    .enum(['new', 'processing', 'complete', 'cancelled', 'voided'])
    .optional(),
  reference_id: z.string().max(50).optional(),
  fulfillment_status: z.string().max(50).optional(),
  note: z.string().max(600).optional(),
  tracking_id: z.string().max(50).optional(),
  tracking_url: z.string().max(255).optional(),
  batch_id: z.string().max(50).optional(),
});
export { CreateOrderBodySchema };
export type CreateOrderBody = z.infer<typeof CreateOrderBodySchema>;

//Order.update

const UpdateOrderShippingAddressSchema = z.object({
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
const UpdateOrderOrderLineItemsSchema = z.object({
  id: z.array(z.string().max(40).optional()).optional(),
  status: z
    .array(
      z
        .enum([
          'queued',
          'awaiting_shipment',
          'on_hold',
          'delivered',
          'shipped',
          'partially_delivered',
          'returned',
          'cancelled',
        ])
        .optional(),
    )
    .optional(),
  sku: z.array(z.string().max(250).optional()).optional(),
});
const UpdateOrderBodySchema = z.looseObject({
  reference_id: z.string().max(50).optional(),
  batch_id: z.string().max(50).optional(),
  note: z.string().max(600).optional(),
  shipping_date: z.number().int().optional(),
  order_date: z.number().int().optional(),
  cancelled_at: z.number().int().optional(),
  cancellation_reason: z
    .enum([
      'shipping_cut_off_passed',
      'product_unsatisfactory',
      'third_party_cancellation',
      'product_not_required',
      'delivery_date_missed',
      'alternative_found',
      'invoice_written_off',
      'invoice_voided',
      'fraudulent_transaction',
      'payment_declined',
      'subscription_cancelled',
      'product_not_available',
      'others',
      'order_resent',
    ])
    .optional(),
  shipped_at: z.number().int().optional(),
  delivered_at: z.number().int().optional(),
  tracking_url: z.string().max(255).optional(),
  tracking_id: z.string().max(50).optional(),
  shipment_carrier: z.string().max(50).optional(),
  fulfillment_status: z.string().max(50).optional(),
  status: z
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
  shipping_address: UpdateOrderShippingAddressSchema.optional(),
  order_line_items: UpdateOrderOrderLineItemsSchema.optional(),
});
export { UpdateOrderBodySchema };
export type UpdateOrderBody = z.infer<typeof UpdateOrderBodySchema>;

//Order.importOrder

const ImportOrderOrderShippingAddressSchema = z.object({
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
const ImportOrderOrderBillingAddressSchema = z.object({
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
const ImportOrderOrderBodySchema = z.looseObject({
  id: z.string().max(40).optional(),
  document_number: z.string().max(50).optional(),
  invoice_id: z.string().max(50),
  status: z.enum([
    'cancelled',
    'queued',
    'awaiting_shipment',
    'on_hold',
    'delivered',
    'shipped',
    'partially_delivered',
    'returned',
  ]),
  subscription_id: z.string().max(50).optional(),
  customer_id: z.string().max(50).optional(),
  created_at: z.number().int(),
  order_date: z.number().int(),
  shipping_date: z.number().int(),
  reference_id: z.string().max(50).optional(),
  fulfillment_status: z.string().max(50).optional(),
  note: z.string().max(600).optional(),
  tracking_id: z.string().max(50).optional(),
  tracking_url: z.string().max(255).optional(),
  batch_id: z.string().max(50).optional(),
  shipment_carrier: z.string().max(50).optional(),
  shipping_cut_off_date: z.number().int().optional(),
  delivered_at: z.number().int().optional(),
  shipped_at: z.number().int().optional(),
  cancelled_at: z.number().int().optional(),
  cancellation_reason: z
    .enum([
      'shipping_cut_off_passed',
      'product_unsatisfactory',
      'third_party_cancellation',
      'product_not_required',
      'delivery_date_missed',
      'alternative_found',
      'invoice_written_off',
      'invoice_voided',
      'fraudulent_transaction',
      'payment_declined',
      'subscription_cancelled',
      'product_not_available',
      'others',
      'order_resent',
    ])
    .optional(),
  refundable_credits_issued: z.number().int().min(0).optional(),
  shipping_address: ImportOrderOrderShippingAddressSchema.optional(),
  billing_address: ImportOrderOrderBillingAddressSchema.optional(),
});
export { ImportOrderOrderBodySchema };
export type ImportOrderOrderBody = z.infer<typeof ImportOrderOrderBodySchema>;

//Order.cancel

const CancelOrderCreditNoteSchema = z.object({
  total: z.number().int().min(0).optional(),
});
const CancelOrderBodySchema = z.looseObject({
  cancellation_reason: z.enum([
    'shipping_cut_off_passed',
    'product_unsatisfactory',
    'third_party_cancellation',
    'product_not_required',
    'delivery_date_missed',
    'alternative_found',
    'invoice_written_off',
    'invoice_voided',
    'fraudulent_transaction',
    'payment_declined',
    'subscription_cancelled',
    'product_not_available',
    'others',
    'order_resent',
  ]),
  customer_notes: z.string().max(2000).optional(),
  comment: z.string().max(300).optional(),
  cancelled_at: z.number().int().optional(),
  credit_note: CancelOrderCreditNoteSchema.optional(),
});
export { CancelOrderBodySchema };
export type CancelOrderBody = z.infer<typeof CancelOrderBodySchema>;

//Order.createRefundableCreditNote

const CreateRefundableCreditNoteOrderCreditNoteSchema = z.object({
  reason_code: z.enum([
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
  ]),
  total: z.number().int().min(0),
});
const CreateRefundableCreditNoteOrderBodySchema = z.looseObject({
  customer_notes: z.string().max(2000).optional(),
  comment: z.string().max(300).optional(),
  credit_note: CreateRefundableCreditNoteOrderCreditNoteSchema.optional(),
});
export { CreateRefundableCreditNoteOrderBodySchema };
export type CreateRefundableCreditNoteOrderBody = z.infer<
  typeof CreateRefundableCreditNoteOrderBodySchema
>;

//Order.reopen

const ReopenOrderBodySchema = z.looseObject({
  void_cancellation_credit_notes: z.boolean().optional(),
});
export { ReopenOrderBodySchema };
export type ReopenOrderBody = z.infer<typeof ReopenOrderBodySchema>;

//Order.list

const ListOrderIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ListOrderInvoiceIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ListOrderSubscriptionIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const ListOrderStatusSchema = z.object({
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
const ListOrderShippingDateSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const ListOrderShippedAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const ListOrderOrderTypeSchema = z.object({
  is: z.enum(['manual', 'system_generated']).optional(),
  is_not: z.enum(['manual', 'system_generated']).optional(),
  in: z.enum(['manual', 'system_generated']).optional(),
  not_in: z.enum(['manual', 'system_generated']).optional(),
});
const ListOrderOrderDateSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const ListOrderPaidOnSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const ListOrderUpdatedAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const ListOrderCreatedAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const ListOrderResentStatusSchema = z.object({
  is: z.enum(['fully_resent', 'partially_resent']).optional(),
  is_not: z.enum(['fully_resent', 'partially_resent']).optional(),
  in: z.enum(['fully_resent', 'partially_resent']).optional(),
  not_in: z.enum(['fully_resent', 'partially_resent']).optional(),
});
const ListOrderIsResentSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const ListOrderOriginalOrderIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const ListOrderSortBySchema = z.looseObject({
  asc: z.enum(['created_at', 'updated_at']).optional(),
  desc: z.enum(['created_at', 'updated_at']).optional(),
});
const ListOrderBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  include_deleted: z.boolean().default(false).optional(),
  exclude_deleted_credit_notes: z.boolean().optional(),
  id: ListOrderIdSchema.optional(),
  invoice_id: ListOrderInvoiceIdSchema.optional(),
  subscription_id: ListOrderSubscriptionIdSchema.optional(),
  status: ListOrderStatusSchema.optional(),
  shipping_date: ListOrderShippingDateSchema.optional(),
  shipped_at: ListOrderShippedAtSchema.optional(),
  order_type: ListOrderOrderTypeSchema.optional(),
  order_date: ListOrderOrderDateSchema.optional(),
  paid_on: ListOrderPaidOnSchema.optional(),
  updated_at: ListOrderUpdatedAtSchema.optional(),
  created_at: ListOrderCreatedAtSchema.optional(),
  resent_status: ListOrderResentStatusSchema.optional(),
  is_resent: ListOrderIsResentSchema.optional(),
  original_order_id: ListOrderOriginalOrderIdSchema.optional(),
  sort_by: ListOrderSortBySchema.optional(),
});
export { ListOrderBodySchema };
export type ListOrderBody = z.infer<typeof ListOrderBodySchema>;

//Order.ordersForInvoice

const OrdersForInvoiceOrderBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
});
export { OrdersForInvoiceOrderBodySchema };
export type OrdersForInvoiceOrderBody = z.infer<
  typeof OrdersForInvoiceOrderBodySchema
>;

//Order.resend

const ResendOrderOrderLineItemsSchema = z.object({
  id: z.array(z.string().max(40).optional()).optional(),
  fulfillment_quantity: z.array(z.number().int().min(0).optional()).optional(),
});
const ResendOrderBodySchema = z.looseObject({
  shipping_date: z.number().int().optional(),
  resend_reason: z.string().max(100).optional(),
  order_line_items: ResendOrderOrderLineItemsSchema.optional(),
});
export { ResendOrderBodySchema };
export type ResendOrderBody = z.infer<typeof ResendOrderBodySchema>;
