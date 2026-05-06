// Generated Zod validator: HostedPage.checkoutExistingForItems
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const checkoutExistingForItemsHostedPageSubscriptionSchema = z.looseObject({
  id: z.string().max(50),
  setup_fee: z.number().int().min(0).optional(),
  start_date: z.number().int().optional(),
  trial_end: z.number().int().optional(),
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
  contract_term_billing_cycle_on_renewal: z
    .number()
    .int()
    .min(1)
    .max(100)
    .optional(),
});
const checkoutExistingForItemsHostedPageCustomerSchema = z.looseObject({
  vat_number: z.string().max(20).optional(),
  vat_number_prefix: z.string().max(10).optional(),
  is_einvoice_enabled: z.boolean().optional(),
  entity_identifier_scheme: z.string().max(50).optional(),
  entity_identifier_standard: z.string().max(50).optional(),
});
const checkoutExistingForItemsHostedPageCardSchema = z.object({
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
const checkoutExistingForItemsHostedPageContractTermSchema = z.object({
  action_at_term_end: z.enum(['renew', 'evergreen', 'cancel']).optional(),
  cancellation_cutoff_period: z.number().int().optional(),
});
const checkoutExistingForItemsHostedPageSubscriptionItemsSchema = z.object({
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
  charge_on_option: z
    .array(z.enum(['immediately', 'on_event']).optional())
    .optional(),
  item_type: z.array(z.enum(['plan', 'addon', 'charge']).optional()).optional(),
});
const checkoutExistingForItemsHostedPageDiscountsSchema = z.object({
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
  operation_type: z.array(z.enum(['add', 'remove']).optional()),
  id: z.array(z.string().max(50).optional()).optional(),
});
const checkoutExistingForItemsHostedPageItemTiersSchema = z.object({
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
const checkoutExistingForItemsHostedPageEntityIdentifiersSchema = z.object({
  id: z.array(z.string().max(40).optional()).optional(),
  scheme: z.array(z.string().max(50).optional()).optional(),
  value: z.array(z.string().max(50).optional()).optional(),
  operation: z
    .array(z.enum(['create', 'update', 'delete']).optional())
    .optional(),
  standard: z.array(z.string().max(50).optional()).optional(),
});
const checkoutExistingForItemsHostedPageBodySchema = z.looseObject({
  layout: z.enum(['in_app', 'full_page']).optional(),
  mandatory_items_to_remove: z.array(z.string().max(100).optional()).optional(),
  replace_items_list: z.boolean().default(false).optional(),
  invoice_date: z.number().int().optional(),
  billing_cycles: z.number().int().min(0).optional(),
  terms_to_charge: z.number().int().min(1).optional(),
  reactivate_from: z.number().int().optional(),
  billing_alignment_mode: z.enum(['immediate', 'delayed']).optional(),
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  replace_coupon_list: z.boolean().default(false).optional(),
  reactivate: z.boolean().optional(),
  force_term_reset: z.boolean().default(false).optional(),
  change_option: z
    .enum(['immediately', 'end_of_term', 'specific_date'])
    .optional(),
  changes_scheduled_at: z.number().int().optional(),
  invoice_usages: z.boolean().default(false).optional(),
  redirect_url: z.string().max(250).optional(),
  cancel_url: z.string().max(250).optional(),
  pass_thru_content: z.string().max(2048).optional(),
  allow_offline_payment_methods: z.boolean().optional(),
  subscription: checkoutExistingForItemsHostedPageSubscriptionSchema.optional(),
  customer: checkoutExistingForItemsHostedPageCustomerSchema.optional(),
  card: checkoutExistingForItemsHostedPageCardSchema.optional(),
  contract_term:
    checkoutExistingForItemsHostedPageContractTermSchema.optional(),
  subscription_items:
    checkoutExistingForItemsHostedPageSubscriptionItemsSchema.optional(),
  discounts: checkoutExistingForItemsHostedPageDiscountsSchema.optional(),
  item_tiers: checkoutExistingForItemsHostedPageItemTiersSchema.optional(),
  entity_identifiers:
    checkoutExistingForItemsHostedPageEntityIdentifiersSchema.optional(),
});
export { checkoutExistingForItemsHostedPageBodySchema };
