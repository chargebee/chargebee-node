// Generated Zod validator: Subscription.importForItems
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const importForItemsSubscriptionMetaDataSchema = z.looseObject({});
const importForItemsSubscriptionContractTermSchema = z.object({
  id: z.string().max(50).optional(),
  created_at: z.number().int().optional(),
  contract_start: z.number().int().optional(),
  billing_cycle: z.number().int().min(0).optional(),
  total_amount_raised: z.number().int().min(0).optional(),
  total_amount_raised_before_tax: z.number().int().min(0).optional(),
  action_at_term_end: z
    .enum(['renew', 'evergreen', 'cancel', 'renew_once'])
    .optional(),
  cancellation_cutoff_period: z.number().int().optional(),
});
const importForItemsSubscriptionTransactionSchema = z.object({
  amount: z.number().int().min(0).optional(),
  payment_method: z
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
  reference_number: z.string().max(100).optional(),
  date: z.number().int().optional(),
});
const importForItemsSubscriptionShippingAddressSchema = z.object({
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
const importForItemsSubscriptionSubscriptionItemsSchema = z.object({
  item_price_id: z.array(z.string().max(100).optional()),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  billing_cycles: z.array(z.number().int().min(0).optional()).optional(),
  trial_end: z.array(z.number().int().optional()).optional(),
  service_period_days: z
    .array(z.number().int().min(1).max(730).optional())
    .optional(),
  charge_on_event: z
    .array(
      z
        .enum([
          'subscription_creation',
          'subscription_trial_start',
          'plan_activation',
          'subscription_activation',
          'contract_termination',
        ])
        .optional(),
    )
    .optional(),
  charge_once: z.array(z.boolean().optional()).optional(),
  item_type: z.array(z.enum(['plan', 'addon', 'charge']).optional()).optional(),
});
const importForItemsSubscriptionDiscountsSchema = z.object({
  apply_on: z
    .array(z.enum(['invoice_amount', 'specific_item_price']).optional())
    .optional(),
  duration_type: z.array(
    z.enum(['one_time', 'forever', 'limited_period']).optional(),
  ),
  percentage: z.array(z.number().min(0.01).max(100).optional()).optional(),
  amount: z.array(z.number().int().min(0).optional()).optional(),
  period: z.array(z.number().int().min(1).optional()).optional(),
  period_unit: z
    .array(z.enum(['day', 'week', 'month', 'year']).optional())
    .optional(),
  included_in_mrr: z.array(z.boolean().optional()).optional(),
  item_price_id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
});
const importForItemsSubscriptionChargedItemsSchema = z.object({
  item_price_id: z.array(z.string().max(100).optional()).optional(),
  last_charged_at: z.array(z.number().int().optional()).optional(),
});
const importForItemsSubscriptionItemTiersSchema = z.object({
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
const importForItemsSubscriptionCouponsSchema = z.object({
  coupon_id: z.array(z.string().max(100).optional()).optional(),
  apply_till: z.array(z.number().int().optional()).optional(),
});
const importForItemsSubscriptionBodySchema = z.looseObject({
  exhausted_coupon_ids: z.array(z.string().max(100).optional()).optional(),
  id: z.string().max(50).optional(),
  trial_end: z.number().int().optional(),
  billing_cycles: z.number().int().min(0).optional(),
  setup_fee: z.number().int().min(0).optional(),
  net_term_days: z.number().int().optional(),
  start_date: z.number().int().optional(),
  auto_collection: z.enum(['on', 'off']).optional(),
  po_number: z.string().max(100).optional(),
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  payment_source_id: z.string().max(40).optional(),
  status: z.enum([
    'future',
    'in_trial',
    'active',
    'non_renewing',
    'paused',
    'cancelled',
    'transferred',
  ]),
  current_term_end: z.number().int().optional(),
  current_term_start: z.number().int().optional(),
  trial_start: z.number().int().optional(),
  cancelled_at: z.number().int().optional(),
  started_at: z.number().int().optional(),
  activated_at: z.number().int().optional(),
  pause_date: z.number().int().optional(),
  resume_date: z.number().int().optional(),
  contract_term_billing_cycle_on_renewal: z
    .number()
    .int()
    .min(1)
    .max(100)
    .optional(),
  create_current_term_invoice: z.boolean().default(false).optional(),
  invoice_notes: z.string().max(2000).optional(),
  meta_data: importForItemsSubscriptionMetaDataSchema.optional(),
  cancel_reason_code: z.string().max(100).optional(),
  create_pending_invoices: z.boolean().optional(),
  auto_close_invoices: z.boolean().optional(),
  contract_term: importForItemsSubscriptionContractTermSchema.optional(),
  transaction: importForItemsSubscriptionTransactionSchema.optional(),
  shipping_address: importForItemsSubscriptionShippingAddressSchema.optional(),
  subscription_items:
    importForItemsSubscriptionSubscriptionItemsSchema.optional(),
  discounts: importForItemsSubscriptionDiscountsSchema.optional(),
  charged_items: importForItemsSubscriptionChargedItemsSchema.optional(),
  item_tiers: importForItemsSubscriptionItemTiersSchema.optional(),
  coupons: importForItemsSubscriptionCouponsSchema.optional(),
});
export { importForItemsSubscriptionBodySchema };
