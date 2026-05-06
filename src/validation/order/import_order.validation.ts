// Generated Zod validator: Order.importOrder
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const importOrderOrderShippingAddressSchema = z.object({
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
const importOrderOrderBillingAddressSchema = z.object({
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
const importOrderOrderBodySchema = z.looseObject({
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
  shipping_address: importOrderOrderShippingAddressSchema.optional(),
  billing_address: importOrderOrderBillingAddressSchema.optional(),
});
export { importOrderOrderBodySchema };
