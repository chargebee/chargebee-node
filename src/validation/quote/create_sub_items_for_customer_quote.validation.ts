// Generated Zod validator: Quote.createSubItemsForCustomerQuote
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const createSubItemsForCustomerQuoteQuoteSubscriptionSchema = z.looseObject({
  id: z.string().max(50).optional(),
  po_number: z.string().max(100).optional(),
  trial_end: z.number().int().optional(),
  setup_fee: z.number().int().min(0).optional(),
  start_date: z.number().int().optional(),
  offline_payment_method: z
    .enum([
      'no_preference',
      'cash',
      'check',
      'bank_transfer',
      'ach_credit',
      'sepa_credit',
      'boleto',
      'us_automated_bank_transfer',
      'eu_automated_bank_transfer',
      'uk_automated_bank_transfer',
      'jp_automated_bank_transfer',
      'mx_automated_bank_transfer',
      'custom',
    ])
    .optional(),
  contract_term_billing_cycle_on_renewal: z
    .number()
    .int()
    .min(1)
    .max(100)
    .optional(),
  free_period: z.number().int().min(1).optional(),
  free_period_unit: z.enum(['day', 'week', 'month', 'year']).optional(),
});
const createSubItemsForCustomerQuoteQuoteShippingAddressSchema = z.object({
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
const createSubItemsForCustomerQuoteQuoteContractTermSchema = z.object({
  action_at_term_end: z.enum(['renew', 'evergreen', 'cancel']).optional(),
  cancellation_cutoff_period: z.number().int().optional(),
});
const createSubItemsForCustomerQuoteQuoteBillingAddressSchema = z.object({
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
const createSubItemsForCustomerQuoteQuoteSubscriptionItemsSchema = z.object({
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
  charge_on_option: z
    .array(z.enum(['immediately', 'on_event']).optional())
    .optional(),
  start_date: z.array(z.number().int().optional()).optional(),
  end_date: z.array(z.number().int().optional()).optional(),
  ramp_tier_id: z.array(z.string().max(105).optional()).optional(),
});
const createSubItemsForCustomerQuoteQuoteDiscountsSchema = z.object({
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
  start_date: z.array(z.number().int().optional()).optional(),
  end_date: z.array(z.number().int().optional()).optional(),
});
const createSubItemsForCustomerQuoteQuoteItemTiersSchema = z.object({
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
  ramp_tier_id: z.array(z.string().max(105).optional()).optional(),
});
const createSubItemsForCustomerQuoteQuoteCouponsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
  start_date: z.array(z.number().int().optional()).optional(),
  end_date: z.array(z.number().int().optional()).optional(),
});
const createSubItemsForCustomerQuoteQuoteBodySchema = z.looseObject({
  name: z.string().max(100).optional(),
  notes: z.string().max(10000).optional(),
  expires_at: z.number().int().optional(),
  billing_cycles: z.number().int().min(0).optional(),
  mandatory_items_to_remove: z.array(z.string().max(100).optional()).optional(),
  terms_to_charge: z.number().int().min(1).optional(),
  billing_alignment_mode: z.enum(['immediate', 'delayed']).optional(),
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  billing_start_option: z.enum(['immediately', 'on_specific_date']).optional(),
  net_term_days: z.number().int().optional(),
  subscription:
    createSubItemsForCustomerQuoteQuoteSubscriptionSchema.optional(),
  shipping_address:
    createSubItemsForCustomerQuoteQuoteShippingAddressSchema.optional(),
  contract_term:
    createSubItemsForCustomerQuoteQuoteContractTermSchema.optional(),
  billing_address:
    createSubItemsForCustomerQuoteQuoteBillingAddressSchema.optional(),
  subscription_items:
    createSubItemsForCustomerQuoteQuoteSubscriptionItemsSchema.optional(),
  discounts: createSubItemsForCustomerQuoteQuoteDiscountsSchema.optional(),
  item_tiers: createSubItemsForCustomerQuoteQuoteItemTiersSchema.optional(),
  coupons: createSubItemsForCustomerQuoteQuoteCouponsSchema.optional(),
});
export { createSubItemsForCustomerQuoteQuoteBodySchema };
