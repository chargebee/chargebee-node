// Generated Zod validator: HostedPage.checkoutNew
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const checkoutNewHostedPageSubscriptionSchema = z.looseObject({
  id: z.string().max(50).optional(),
  plan_id: z.string().max(100),
  plan_quantity: z.number().int().min(1).optional(),
  plan_quantity_in_decimal: z.string().max(33).optional(),
  plan_unit_price: z.number().int().min(0).optional(),
  plan_unit_price_in_decimal: z.string().max(39).optional(),
  setup_fee: z.number().int().min(0).optional(),
  trial_end: z.number().int().optional(),
  start_date: z.number().int().optional(),
  coupon: z.string().max(100).optional(),
  auto_collection: z.enum(['on', 'off']).optional(),
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
  invoice_notes: z.string().max(2000).optional(),
  affiliate_token: z.string().max(250).optional(),
  contract_term_billing_cycle_on_renewal: z
    .number()
    .int()
    .min(1)
    .max(100)
    .optional(),
});
const checkoutNewHostedPageCustomerSchema = z.looseObject({
  id: z.string().max(50).optional(),
  email: z.string().email().max(70).optional(),
  first_name: z.string().max(150).optional(),
  last_name: z.string().max(150).optional(),
  company: z.string().max(250).optional(),
  phone: z.string().max(50).optional(),
  locale: z.string().max(50).optional(),
  taxability: z.enum(['taxable', 'exempt']).optional(),
  vat_number: z.string().max(20).optional(),
  vat_number_prefix: z.string().max(10).optional(),
  consolidated_invoicing: z.boolean().optional(),
});
const checkoutNewHostedPageCardSchema = z.object({
  gateway: z
    .enum([
      'chargebee',
      'chargebee_payments',
      'adyen',
      'stripe',
      'wepay',
      'braintree',
      'authorize_net',
      'paypal_pro',
      'pin',
      'eway',
      'eway_rapid',
      'worldpay',
      'balanced_payments',
      'beanstream',
      'bluepay',
      'elavon',
      'first_data_global',
      'hdfc',
      'migs',
      'nmi',
      'ogone',
      'paymill',
      'paypal_payflow_pro',
      'sage_pay',
      'tco',
      'wirecard',
      'amazon_payments',
      'paypal_express_checkout',
      'orbital',
      'moneris_us',
      'moneris',
      'bluesnap',
      'cybersource',
      'vantiv',
      'checkout_com',
      'paypal',
      'ingenico_direct',
      'exact',
      'mollie',
      'quickbooks',
      'razorpay',
      'global_payments',
      'bank_of_america',
      'ecentric',
      'metrics_global',
      'windcave',
      'pay_com',
      'ebanx',
      'dlocal',
      'nuvei',
      'solidgate',
      'paystack',
      'jp_morgan',
      'deutsche_bank',
      'ezidebit',
      'twikey',
      'tempus',
      'moyasar',
      'payway',
    ])
    .optional(),
  gateway_account_id: z.string().max(50).optional(),
});
const checkoutNewHostedPageBillingAddressSchema = z.object({
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
const checkoutNewHostedPageShippingAddressSchema = z.object({
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
const checkoutNewHostedPageContractTermSchema = z.object({
  action_at_term_end: z.enum(['renew', 'evergreen', 'cancel']).optional(),
  cancellation_cutoff_period: z.number().int().optional(),
});
const checkoutNewHostedPageAddonsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  billing_cycles: z.array(z.number().int().min(0).optional()).optional(),
});
const checkoutNewHostedPageEventBasedAddonsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  service_period_in_days: z
    .array(z.number().int().min(1).max(4000).optional())
    .optional(),
  on_event: z
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
  charge_once: z.array(z.boolean().default(true).optional()).optional(),
  charge_on: z.array(z.enum(['immediately', 'on_event']).optional()).optional(),
});
const checkoutNewHostedPageBodySchema = z.looseObject({
  billing_cycles: z.number().int().min(0).optional(),
  mandatory_addons_to_remove: z
    .array(z.string().max(100).optional())
    .optional(),
  terms_to_charge: z.number().int().min(1).optional(),
  billing_alignment_mode: z.enum(['immediate', 'delayed']).optional(),
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  redirect_url: z.string().max(250).optional(),
  cancel_url: z.string().max(250).optional(),
  pass_thru_content: z.string().max(2048).optional(),
  embed: z.boolean().default(true).optional(),
  iframe_messaging: z.boolean().default(false).optional(),
  allow_offline_payment_methods: z.boolean().optional(),
  subscription: checkoutNewHostedPageSubscriptionSchema.optional(),
  customer: checkoutNewHostedPageCustomerSchema.optional(),
  card: checkoutNewHostedPageCardSchema.optional(),
  billing_address: checkoutNewHostedPageBillingAddressSchema.optional(),
  shipping_address: checkoutNewHostedPageShippingAddressSchema.optional(),
  contract_term: checkoutNewHostedPageContractTermSchema.optional(),
  addons: checkoutNewHostedPageAddonsSchema.optional(),
  event_based_addons: checkoutNewHostedPageEventBasedAddonsSchema.optional(),
});
export { checkoutNewHostedPageBodySchema };
