// Generated Zod validator: Subscription.createWithItems
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const createWithItemsSubscriptionMetaDataSchema = z.looseObject({});
const createWithItemsSubscriptionShippingAddressSchema = z.object({
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
const createWithItemsSubscriptionStatementDescriptorSchema = z.object({
  descriptor: z.string().max(65000).optional(),
});
const createWithItemsSubscriptionAdditionalInformationSchema = z.looseObject(
  {},
);
const createWithItemsSubscriptionPaymentIntentSchema = z.object({
  id: z.string().max(150).optional(),
  gateway_account_id: z.string().max(50).optional(),
  gw_token: z.string().max(65000).optional(),
  payment_method_type: z
    .enum([
      'card',
      'ideal',
      'sofort',
      'bancontact',
      'google_pay',
      'dotpay',
      'giropay',
      'apple_pay',
      'upi',
      'netbanking_emandates',
      'paypal_express_checkout',
      'direct_debit',
      'boleto',
      'venmo',
      'amazon_payments',
      'pay_to',
      'faster_payments',
      'sepa_instant_transfer',
      'klarna_pay_now',
      'online_banking_poland',
      'payconiq_by_bancontact',
      'electronic_payment_standard',
      'kbc_payment_button',
      'pay_by_bank',
      'trustly',
      'stablecoin',
      'kakao_pay',
      'naver_pay',
      'revolut_pay',
      'cash_app_pay',
      'wechat_pay',
      'alipay',
      'pix',
      'twint',
      'go_pay',
      'grab_pay',
      'pay_co',
      'after_pay',
      'swish',
      'payme',
    ])
    .optional(),
  reference_id: z.string().max(65000).optional(),
  gw_payment_method_id: z.string().max(65000).optional(),
  additional_information:
    createWithItemsSubscriptionAdditionalInformationSchema.optional(),
});
const createWithItemsSubscriptionContractTermSchema = z.object({
  action_at_term_end: z.enum(['renew', 'evergreen', 'cancel']).optional(),
  contract_start: z.number().int().optional(),
  cancellation_cutoff_period: z.number().int().optional(),
});
const createWithItemsSubscriptionBillingOverrideSchema = z.object({
  max_excess_payment_usage: z.number().int().min(-1).optional(),
  max_refundable_credits_usage: z.number().int().min(-1).optional(),
});
const createWithItemsSubscriptionSubscriptionItemsSchema = z.object({
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
  usage_accumulation_reset_frequency: z
    .array(z.enum(['never', 'subscription_billing_frequency']).optional())
    .optional(),
});
const createWithItemsSubscriptionDiscountsSchema = z.object({
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
const createWithItemsSubscriptionItemTiersSchema = z.object({
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
const createWithItemsSubscriptionCouponsSchema = z.object({
  coupon_id: z.array(z.string().max(100).optional()).optional(),
  apply_till: z.array(z.number().int().optional()).optional(),
});
const createWithItemsSubscriptionBodySchema = z.looseObject({
  id: z.string().max(50).optional(),
  business_entity_id: z.string().max(50).optional(),
  trial_end: z.number().int().optional(),
  billing_cycles: z.number().int().min(0).optional(),
  setup_fee: z.number().int().min(0).optional(),
  mandatory_items_to_remove: z.array(z.string().max(100).optional()).optional(),
  net_term_days: z.number().int().optional(),
  start_date: z.number().int().optional(),
  coupon: z.string().max(100).optional(),
  auto_collection: z.enum(['on', 'off']).optional(),
  terms_to_charge: z.number().int().min(1).optional(),
  billing_alignment_mode: z.enum(['immediate', 'delayed']).optional(),
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
  po_number: z.string().max(100).optional(),
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  payment_source_id: z.string().max(40).optional(),
  override_relationship: z.boolean().optional(),
  invoice_notes: z.string().max(2000).optional(),
  invoice_date: z.number().int().optional(),
  meta_data: createWithItemsSubscriptionMetaDataSchema.optional(),
  invoice_immediately: z.boolean().optional(),
  replace_primary_payment_source: z.boolean().default(true).optional(),
  free_period: z.number().int().min(1).optional(),
  free_period_unit: z.enum(['day', 'week', 'month', 'year']).optional(),
  contract_term_billing_cycle_on_renewal: z
    .number()
    .int()
    .min(1)
    .max(100)
    .optional(),
  create_pending_invoices: z.boolean().optional(),
  auto_close_invoices: z.boolean().optional(),
  first_invoice_pending: z.boolean().default(false).optional(),
  trial_end_action: z
    .enum([
      'site_default',
      'plan_default',
      'activate_subscription',
      'cancel_subscription',
    ])
    .optional(),
  payment_initiator: z.enum(['customer', 'merchant']).optional(),
  shipping_address: createWithItemsSubscriptionShippingAddressSchema.optional(),
  statement_descriptor:
    createWithItemsSubscriptionStatementDescriptorSchema.optional(),
  payment_intent: createWithItemsSubscriptionPaymentIntentSchema.optional(),
  contract_term: createWithItemsSubscriptionContractTermSchema.optional(),
  billing_override: createWithItemsSubscriptionBillingOverrideSchema.optional(),
  subscription_items:
    createWithItemsSubscriptionSubscriptionItemsSchema.optional(),
  discounts: createWithItemsSubscriptionDiscountsSchema.optional(),
  item_tiers: createWithItemsSubscriptionItemTiersSchema.optional(),
  coupons: createWithItemsSubscriptionCouponsSchema.optional(),
});
export { createWithItemsSubscriptionBodySchema };
