// Generated Zod schemas: HostedPage
// Actions: checkoutNew, checkoutOneTime, checkoutOneTimeForItems, checkoutNewForItems, checkoutExisting, checkoutExistingForItems, updateCard, updatePaymentMethod, managePaymentSources, collectNow, acceptQuote, extendSubscription, checkoutGift, checkoutGiftForItems, claimGift, retrieveAgreementPdf, preCancel, events, viewVoucher
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//HostedPage.checkoutNew

const CheckoutNewHostedPageSubscriptionSchema = z.looseObject({
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
const CheckoutNewHostedPageCustomerSchema = z.looseObject({
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
const CheckoutNewHostedPageCardSchema = z.object({
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
const CheckoutNewHostedPageBillingAddressSchema = z.object({
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
const CheckoutNewHostedPageShippingAddressSchema = z.object({
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
const CheckoutNewHostedPageContractTermSchema = z.object({
  action_at_term_end: z.enum(['renew', 'evergreen', 'cancel']).optional(),
  cancellation_cutoff_period: z.number().int().optional(),
});
const CheckoutNewHostedPageAddonsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  billing_cycles: z.array(z.number().int().min(0).optional()).optional(),
});
const CheckoutNewHostedPageEventBasedAddonsSchema = z.object({
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
const CheckoutNewHostedPageBodySchema = z.looseObject({
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
  subscription: CheckoutNewHostedPageSubscriptionSchema.optional(),
  customer: CheckoutNewHostedPageCustomerSchema.optional(),
  card: CheckoutNewHostedPageCardSchema.optional(),
  billing_address: CheckoutNewHostedPageBillingAddressSchema.optional(),
  shipping_address: CheckoutNewHostedPageShippingAddressSchema.optional(),
  contract_term: CheckoutNewHostedPageContractTermSchema.optional(),
  addons: CheckoutNewHostedPageAddonsSchema.optional(),
  event_based_addons: CheckoutNewHostedPageEventBasedAddonsSchema.optional(),
});
export { CheckoutNewHostedPageBodySchema };
export type CheckoutNewHostedPageBody = z.infer<
  typeof CheckoutNewHostedPageBodySchema
>;

//HostedPage.checkoutOneTime

const CheckoutOneTimeHostedPageCustomerSchema = z.looseObject({
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
const CheckoutOneTimeHostedPageInvoiceSchema = z.object({
  po_number: z.string().max(100).optional(),
});
const CheckoutOneTimeHostedPageCardSchema = z.object({
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
const CheckoutOneTimeHostedPageBillingAddressSchema = z.object({
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
const CheckoutOneTimeHostedPageShippingAddressSchema = z.object({
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
const CheckoutOneTimeHostedPageAddonsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  date_from: z.array(z.number().int().optional()).optional(),
  date_to: z.array(z.number().int().optional()).optional(),
});
const CheckoutOneTimeHostedPageChargesSchema = z.object({
  amount: z.array(z.number().int().min(1).optional()).optional(),
  amount_in_decimal: z.array(z.string().max(39).optional()).optional(),
  description: z.array(z.string().max(250).optional()).optional(),
  taxable: z.array(z.boolean().default(true).optional()).optional(),
  tax_profile_id: z.array(z.string().max(50).optional()).optional(),
  avalara_tax_code: z.array(z.string().max(50).optional()).optional(),
  hsn_code: z.array(z.string().max(50).optional()).optional(),
  taxjar_product_code: z.array(z.string().max(50).optional()).optional(),
  avalara_sale_type: z
    .array(z.enum(['wholesale', 'retail', 'consumed', 'vendor_use']).optional())
    .optional(),
  avalara_transaction_type: z.array(z.number().int().optional()).optional(),
  avalara_service_type: z.array(z.number().int().optional()).optional(),
  date_from: z.array(z.number().int().optional()).optional(),
  date_to: z.array(z.number().int().optional()).optional(),
});
const CheckoutOneTimeHostedPageBodySchema = z.looseObject({
  currency_code: z.string().max(3).optional(),
  invoice_note: z.string().max(2000).optional(),
  coupon: z.string().max(100).optional(),
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  redirect_url: z.string().max(250).optional(),
  cancel_url: z.string().max(250).optional(),
  pass_thru_content: z.string().max(2048).optional(),
  embed: z.boolean().default(true).optional(),
  iframe_messaging: z.boolean().default(false).optional(),
  customer: CheckoutOneTimeHostedPageCustomerSchema.optional(),
  invoice: CheckoutOneTimeHostedPageInvoiceSchema.optional(),
  card: CheckoutOneTimeHostedPageCardSchema.optional(),
  billing_address: CheckoutOneTimeHostedPageBillingAddressSchema.optional(),
  shipping_address: CheckoutOneTimeHostedPageShippingAddressSchema.optional(),
  addons: CheckoutOneTimeHostedPageAddonsSchema.optional(),
  charges: CheckoutOneTimeHostedPageChargesSchema.optional(),
});
export { CheckoutOneTimeHostedPageBodySchema };
export type CheckoutOneTimeHostedPageBody = z.infer<
  typeof CheckoutOneTimeHostedPageBodySchema
>;

//HostedPage.checkoutOneTimeForItems

const CheckoutOneTimeForItemsHostedPageCustomerSchema = z.looseObject({
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
  einvoicing_method: z.enum(['automatic', 'manual', 'site_default']).optional(),
  is_einvoice_enabled: z.boolean().optional(),
  entity_identifier_scheme: z.string().max(50).optional(),
  entity_identifier_standard: z.string().max(50).optional(),
  consolidated_invoicing: z.boolean().optional(),
});
const CheckoutOneTimeForItemsHostedPageInvoiceSchema = z.object({
  po_number: z.string().max(100).optional(),
});
const CheckoutOneTimeForItemsHostedPageCardSchema = z.object({
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
const CheckoutOneTimeForItemsHostedPageBillingAddressSchema = z.object({
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
const CheckoutOneTimeForItemsHostedPageShippingAddressSchema = z.object({
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
const CheckoutOneTimeForItemsHostedPageItemPricesSchema = z.object({
  item_price_id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  date_from: z.array(z.number().int().optional()).optional(),
  date_to: z.array(z.number().int().optional()).optional(),
});
const CheckoutOneTimeForItemsHostedPageItemTiersSchema = z.object({
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
const CheckoutOneTimeForItemsHostedPageChargesSchema = z.object({
  amount: z.array(z.number().int().min(1).optional()).optional(),
  amount_in_decimal: z.array(z.string().max(39).optional()).optional(),
  description: z.array(z.string().max(250).optional()).optional(),
  taxable: z.array(z.boolean().default(true).optional()).optional(),
  tax_profile_id: z.array(z.string().max(50).optional()).optional(),
  avalara_tax_code: z.array(z.string().max(50).optional()).optional(),
  hsn_code: z.array(z.string().max(50).optional()).optional(),
  taxjar_product_code: z.array(z.string().max(50).optional()).optional(),
  avalara_sale_type: z
    .array(z.enum(['wholesale', 'retail', 'consumed', 'vendor_use']).optional())
    .optional(),
  avalara_transaction_type: z.array(z.number().int().optional()).optional(),
  avalara_service_type: z.array(z.number().int().optional()).optional(),
  date_from: z.array(z.number().int().optional()).optional(),
  date_to: z.array(z.number().int().optional()).optional(),
});
const CheckoutOneTimeForItemsHostedPageDiscountsSchema = z.object({
  percentage: z.array(z.number().min(0.01).max(100).optional()).optional(),
  amount: z.array(z.number().int().min(0).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  apply_on: z.array(
    z.enum(['invoice_amount', 'specific_item_price']).optional(),
  ),
  item_price_id: z.array(z.string().max(100).optional()).optional(),
});
const CheckoutOneTimeForItemsHostedPageEntityIdentifiersSchema = z.object({
  id: z.array(z.string().max(40).optional()).optional(),
  scheme: z.array(z.string().max(50).optional()).optional(),
  value: z.array(z.string().max(50).optional()).optional(),
  operation: z
    .array(z.enum(['create', 'update', 'delete']).optional())
    .optional(),
  standard: z.array(z.string().max(50).optional()).optional(),
});
const CheckoutOneTimeForItemsHostedPageBodySchema = z.looseObject({
  business_entity_id: z.string().max(50).optional(),
  layout: z.enum(['in_app', 'full_page']).optional(),
  invoice_note: z.string().max(2000).optional(),
  coupon: z.string().max(100).optional(),
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  currency_code: z.string().max(3).optional(),
  redirect_url: z.string().max(250).optional(),
  cancel_url: z.string().max(250).optional(),
  pass_thru_content: z.string().max(2048).optional(),
  customer: CheckoutOneTimeForItemsHostedPageCustomerSchema.optional(),
  invoice: CheckoutOneTimeForItemsHostedPageInvoiceSchema.optional(),
  card: CheckoutOneTimeForItemsHostedPageCardSchema.optional(),
  billing_address:
    CheckoutOneTimeForItemsHostedPageBillingAddressSchema.optional(),
  shipping_address:
    CheckoutOneTimeForItemsHostedPageShippingAddressSchema.optional(),
  item_prices: CheckoutOneTimeForItemsHostedPageItemPricesSchema.optional(),
  item_tiers: CheckoutOneTimeForItemsHostedPageItemTiersSchema.optional(),
  charges: CheckoutOneTimeForItemsHostedPageChargesSchema.optional(),
  discounts: CheckoutOneTimeForItemsHostedPageDiscountsSchema.optional(),
  entity_identifiers:
    CheckoutOneTimeForItemsHostedPageEntityIdentifiersSchema.optional(),
});
export { CheckoutOneTimeForItemsHostedPageBodySchema };
export type CheckoutOneTimeForItemsHostedPageBody = z.infer<
  typeof CheckoutOneTimeForItemsHostedPageBodySchema
>;

//HostedPage.checkoutNewForItems

const CheckoutNewForItemsHostedPageSubscriptionSchema = z.looseObject({
  id: z.string().max(50).optional(),
  trial_end: z.number().int().optional(),
  setup_fee: z.number().int().min(0).optional(),
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
  po_number: z.string().max(100).optional(),
  contract_term_billing_cycle_on_renewal: z
    .number()
    .int()
    .min(1)
    .max(100)
    .optional(),
});
const CheckoutNewForItemsHostedPageCustomerSchema = z.looseObject({
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
  is_einvoice_enabled: z.boolean().optional(),
  entity_identifier_scheme: z.string().max(50).optional(),
  entity_identifier_standard: z.string().max(50).optional(),
  einvoicing_method: z.enum(['automatic', 'manual', 'site_default']).optional(),
});
const CheckoutNewForItemsHostedPageCardSchema = z.object({
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
const CheckoutNewForItemsHostedPageBillingAddressSchema = z.object({
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
const CheckoutNewForItemsHostedPageShippingAddressSchema = z.object({
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
const CheckoutNewForItemsHostedPageContractTermSchema = z.object({
  action_at_term_end: z.enum(['renew', 'evergreen', 'cancel']).optional(),
  cancellation_cutoff_period: z.number().int().optional(),
});
const CheckoutNewForItemsHostedPageSubscriptionItemsSchema = z.object({
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
});
const CheckoutNewForItemsHostedPageDiscountsSchema = z.object({
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
const CheckoutNewForItemsHostedPageItemTiersSchema = z.object({
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
const CheckoutNewForItemsHostedPageEntityIdentifiersSchema = z.object({
  id: z.array(z.string().max(40).optional()).optional(),
  scheme: z.array(z.string().max(50).optional()).optional(),
  value: z.array(z.string().max(50).optional()).optional(),
  operation: z
    .array(z.enum(['create', 'update', 'delete']).optional())
    .optional(),
  standard: z.array(z.string().max(50).optional()).optional(),
});
const CheckoutNewForItemsHostedPageBodySchema = z.looseObject({
  layout: z.enum(['in_app', 'full_page']).optional(),
  business_entity_id: z.string().max(50).optional(),
  billing_cycles: z.number().int().min(0).optional(),
  mandatory_items_to_remove: z.array(z.string().max(100).optional()).optional(),
  terms_to_charge: z.number().int().min(1).optional(),
  billing_alignment_mode: z.enum(['immediate', 'delayed']).optional(),
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  redirect_url: z.string().max(250).optional(),
  cancel_url: z.string().max(250).optional(),
  pass_thru_content: z.string().max(2048).optional(),
  allow_offline_payment_methods: z.boolean().optional(),
  subscription: CheckoutNewForItemsHostedPageSubscriptionSchema.optional(),
  customer: CheckoutNewForItemsHostedPageCustomerSchema.optional(),
  card: CheckoutNewForItemsHostedPageCardSchema.optional(),
  billing_address: CheckoutNewForItemsHostedPageBillingAddressSchema.optional(),
  shipping_address:
    CheckoutNewForItemsHostedPageShippingAddressSchema.optional(),
  contract_term: CheckoutNewForItemsHostedPageContractTermSchema.optional(),
  subscription_items:
    CheckoutNewForItemsHostedPageSubscriptionItemsSchema.optional(),
  discounts: CheckoutNewForItemsHostedPageDiscountsSchema.optional(),
  item_tiers: CheckoutNewForItemsHostedPageItemTiersSchema.optional(),
  entity_identifiers:
    CheckoutNewForItemsHostedPageEntityIdentifiersSchema.optional(),
});
export { CheckoutNewForItemsHostedPageBodySchema };
export type CheckoutNewForItemsHostedPageBody = z.infer<
  typeof CheckoutNewForItemsHostedPageBodySchema
>;

//HostedPage.checkoutExisting

const CheckoutExistingHostedPageSubscriptionSchema = z.looseObject({
  id: z.string().max(50),
  plan_id: z.string().max(100).optional(),
  plan_quantity: z.number().int().min(1).optional(),
  plan_unit_price: z.number().int().min(0).optional(),
  setup_fee: z.number().int().min(0).optional(),
  plan_quantity_in_decimal: z.string().max(33).optional(),
  plan_unit_price_in_decimal: z.string().max(39).optional(),
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
const CheckoutExistingHostedPageCustomerSchema = z.looseObject({
  vat_number: z.string().max(20).optional(),
  vat_number_prefix: z.string().max(10).optional(),
});
const CheckoutExistingHostedPageCardSchema = z.object({
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
const CheckoutExistingHostedPageContractTermSchema = z.object({
  action_at_term_end: z.enum(['renew', 'evergreen', 'cancel']).optional(),
  cancellation_cutoff_period: z.number().int().optional(),
});
const CheckoutExistingHostedPageAddonsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  billing_cycles: z.array(z.number().int().min(0).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
});
const CheckoutExistingHostedPageEventBasedAddonsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  service_period_in_days: z
    .array(z.number().int().min(1).max(4000).optional())
    .optional(),
  charge_on: z.array(z.enum(['immediately', 'on_event']).optional()).optional(),
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
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
});
const CheckoutExistingHostedPageBodySchema = z.looseObject({
  replace_addon_list: z.boolean().default(false).optional(),
  mandatory_addons_to_remove: z
    .array(z.string().max(100).optional())
    .optional(),
  invoice_date: z.number().int().optional(),
  billing_cycles: z.number().int().min(0).optional(),
  terms_to_charge: z.number().int().min(1).optional(),
  reactivate_from: z.number().int().optional(),
  billing_alignment_mode: z.enum(['immediate', 'delayed']).optional(),
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  replace_coupon_list: z.boolean().default(false).optional(),
  reactivate: z.boolean().optional(),
  force_term_reset: z.boolean().default(false).optional(),
  redirect_url: z.string().max(250).optional(),
  cancel_url: z.string().max(250).optional(),
  pass_thru_content: z.string().max(2048).optional(),
  embed: z.boolean().default(true).optional(),
  iframe_messaging: z.boolean().default(false).optional(),
  allow_offline_payment_methods: z.boolean().optional(),
  subscription: CheckoutExistingHostedPageSubscriptionSchema.optional(),
  customer: CheckoutExistingHostedPageCustomerSchema.optional(),
  card: CheckoutExistingHostedPageCardSchema.optional(),
  contract_term: CheckoutExistingHostedPageContractTermSchema.optional(),
  addons: CheckoutExistingHostedPageAddonsSchema.optional(),
  event_based_addons:
    CheckoutExistingHostedPageEventBasedAddonsSchema.optional(),
});
export { CheckoutExistingHostedPageBodySchema };
export type CheckoutExistingHostedPageBody = z.infer<
  typeof CheckoutExistingHostedPageBodySchema
>;

//HostedPage.checkoutExistingForItems

const CheckoutExistingForItemsHostedPageSubscriptionSchema = z.looseObject({
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
const CheckoutExistingForItemsHostedPageCustomerSchema = z.looseObject({
  vat_number: z.string().max(20).optional(),
  vat_number_prefix: z.string().max(10).optional(),
  is_einvoice_enabled: z.boolean().optional(),
  entity_identifier_scheme: z.string().max(50).optional(),
  entity_identifier_standard: z.string().max(50).optional(),
});
const CheckoutExistingForItemsHostedPageCardSchema = z.object({
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
const CheckoutExistingForItemsHostedPageContractTermSchema = z.object({
  action_at_term_end: z.enum(['renew', 'evergreen', 'cancel']).optional(),
  cancellation_cutoff_period: z.number().int().optional(),
});
const CheckoutExistingForItemsHostedPageSubscriptionItemsSchema = z.object({
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
const CheckoutExistingForItemsHostedPageDiscountsSchema = z.object({
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
const CheckoutExistingForItemsHostedPageItemTiersSchema = z.object({
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
const CheckoutExistingForItemsHostedPageEntityIdentifiersSchema = z.object({
  id: z.array(z.string().max(40).optional()).optional(),
  scheme: z.array(z.string().max(50).optional()).optional(),
  value: z.array(z.string().max(50).optional()).optional(),
  operation: z
    .array(z.enum(['create', 'update', 'delete']).optional())
    .optional(),
  standard: z.array(z.string().max(50).optional()).optional(),
});
const CheckoutExistingForItemsHostedPageBodySchema = z.looseObject({
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
  subscription: CheckoutExistingForItemsHostedPageSubscriptionSchema.optional(),
  customer: CheckoutExistingForItemsHostedPageCustomerSchema.optional(),
  card: CheckoutExistingForItemsHostedPageCardSchema.optional(),
  contract_term:
    CheckoutExistingForItemsHostedPageContractTermSchema.optional(),
  subscription_items:
    CheckoutExistingForItemsHostedPageSubscriptionItemsSchema.optional(),
  discounts: CheckoutExistingForItemsHostedPageDiscountsSchema.optional(),
  item_tiers: CheckoutExistingForItemsHostedPageItemTiersSchema.optional(),
  entity_identifiers:
    CheckoutExistingForItemsHostedPageEntityIdentifiersSchema.optional(),
});
export { CheckoutExistingForItemsHostedPageBodySchema };
export type CheckoutExistingForItemsHostedPageBody = z.infer<
  typeof CheckoutExistingForItemsHostedPageBodySchema
>;

//HostedPage.updateCard

const UpdateCardHostedPageCustomerSchema = z.object({
  id: z.string().max(50),
  vat_number: z.string().max(20).optional(),
  vat_number_prefix: z.string().max(10).optional(),
});
const UpdateCardHostedPageCardSchema = z.object({
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
const UpdateCardHostedPageBodySchema = z.looseObject({
  redirect_url: z.string().max(250).optional(),
  cancel_url: z.string().max(250).optional(),
  pass_thru_content: z.string().max(2048).optional(),
  iframe_messaging: z.boolean().default(false).optional(),
  customer: UpdateCardHostedPageCustomerSchema.optional(),
  card: UpdateCardHostedPageCardSchema.optional(),
  embed: z.boolean().default(true).optional(),
});
export { UpdateCardHostedPageBodySchema };
export type UpdateCardHostedPageBody = z.infer<
  typeof UpdateCardHostedPageBodySchema
>;

//HostedPage.updatePaymentMethod

const UpdatePaymentMethodHostedPageCustomerSchema = z.object({
  id: z.string().max(50),
  vat_number: z.string().max(20).optional(),
  vat_number_prefix: z.string().max(10).optional(),
});
const UpdatePaymentMethodHostedPageCardSchema = z.object({
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
const UpdatePaymentMethodHostedPageBodySchema = z.looseObject({
  redirect_url: z.string().max(250).optional(),
  cancel_url: z.string().max(250).optional(),
  pass_thru_content: z.string().max(2048).optional(),
  iframe_messaging: z.boolean().default(false).optional(),
  customer: UpdatePaymentMethodHostedPageCustomerSchema.optional(),
  card: UpdatePaymentMethodHostedPageCardSchema.optional(),
  embed: z.boolean().default(true).optional(),
});
export { UpdatePaymentMethodHostedPageBodySchema };
export type UpdatePaymentMethodHostedPageBody = z.infer<
  typeof UpdatePaymentMethodHostedPageBodySchema
>;

//HostedPage.managePaymentSources

const ManagePaymentSourcesHostedPageCustomerSchema = z.object({
  id: z.string().max(50),
});
const ManagePaymentSourcesHostedPageCardSchema = z.object({
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
const ManagePaymentSourcesHostedPageBodySchema = z.looseObject({
  business_entity_id: z.string().max(50).optional(),
  redirect_url: z.string().max(250).optional(),
  customer: ManagePaymentSourcesHostedPageCustomerSchema.optional(),
  card: ManagePaymentSourcesHostedPageCardSchema.optional(),
});
export { ManagePaymentSourcesHostedPageBodySchema };
export type ManagePaymentSourcesHostedPageBody = z.infer<
  typeof ManagePaymentSourcesHostedPageBodySchema
>;

//HostedPage.collectNow

const CollectNowHostedPageCustomerSchema = z.object({
  id: z.string().max(50),
});
const CollectNowHostedPageCardSchema = z.object({
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
const CollectNowHostedPageBodySchema = z.looseObject({
  redirect_url: z.string().max(250).optional(),
  currency_code: z.string().max(3).optional(),
  payment_method_save_policy: z.enum(['always', 'ask', 'never']).optional(),
  customer: CollectNowHostedPageCustomerSchema.optional(),
  card: CollectNowHostedPageCardSchema.optional(),
});
export { CollectNowHostedPageBodySchema };
export type CollectNowHostedPageBody = z.infer<
  typeof CollectNowHostedPageBodySchema
>;

//HostedPage.acceptQuote

const AcceptQuoteHostedPageQuoteSchema = z.object({
  id: z.string().max(50),
});
const AcceptQuoteHostedPageBodySchema = z.looseObject({
  redirect_url: z.string().max(250).optional(),
  layout: z.enum(['in_app', 'full_page']).optional(),
  quote: AcceptQuoteHostedPageQuoteSchema.optional(),
});
export { AcceptQuoteHostedPageBodySchema };
export type AcceptQuoteHostedPageBody = z.infer<
  typeof AcceptQuoteHostedPageBodySchema
>;

//HostedPage.extendSubscription

const ExtendSubscriptionHostedPageSubscriptionSchema = z.object({
  id: z.string().max(50),
});
const ExtendSubscriptionHostedPageBodySchema = z.looseObject({
  expiry: z.number().int().min(1).max(500).optional(),
  billing_cycle: z.number().int().min(1).optional(),
  subscription: ExtendSubscriptionHostedPageSubscriptionSchema.optional(),
});
export { ExtendSubscriptionHostedPageBodySchema };
export type ExtendSubscriptionHostedPageBody = z.infer<
  typeof ExtendSubscriptionHostedPageBodySchema
>;

//HostedPage.checkoutGift

const CheckoutGiftHostedPageGifterSchema = z.object({
  customer_id: z.string().max(50).optional(),
});
const CheckoutGiftHostedPageSubscriptionSchema = z.looseObject({
  plan_id: z.string().max(100),
  plan_quantity: z.number().int().min(1).optional(),
  plan_quantity_in_decimal: z.string().max(33).optional(),
  coupon: z.string().max(100).optional(),
});
const CheckoutGiftHostedPageAddonsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
});
const CheckoutGiftHostedPageBodySchema = z.looseObject({
  redirect_url: z.string().max(250).optional(),
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  gifter: CheckoutGiftHostedPageGifterSchema.optional(),
  subscription: CheckoutGiftHostedPageSubscriptionSchema.optional(),
  addons: CheckoutGiftHostedPageAddonsSchema.optional(),
});
export { CheckoutGiftHostedPageBodySchema };
export type CheckoutGiftHostedPageBody = z.infer<
  typeof CheckoutGiftHostedPageBodySchema
>;

//HostedPage.checkoutGiftForItems

const CheckoutGiftForItemsHostedPageGifterSchema = z.object({
  customer_id: z.string().max(50).optional(),
});
const CheckoutGiftForItemsHostedPageSubscriptionItemsSchema = z.object({
  item_price_id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
});
const CheckoutGiftForItemsHostedPageItemTiersSchema = z.object({
  item_price_id: z.array(z.string().max(100).optional()).optional(),
  starting_unit: z.array(z.number().int().min(1).optional()).optional(),
  ending_unit: z.array(z.number().int().optional()).optional(),
  price: z.array(z.number().int().min(0).optional()).optional(),
  starting_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  ending_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  price_in_decimal: z.array(z.string().max(39).optional()).optional(),
});
const CheckoutGiftForItemsHostedPageBodySchema = z.looseObject({
  business_entity_id: z.string().max(50).optional(),
  redirect_url: z.string().max(250).optional(),
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  gifter: CheckoutGiftForItemsHostedPageGifterSchema.optional(),
  subscription_items:
    CheckoutGiftForItemsHostedPageSubscriptionItemsSchema.optional(),
  item_tiers: CheckoutGiftForItemsHostedPageItemTiersSchema.optional(),
});
export { CheckoutGiftForItemsHostedPageBodySchema };
export type CheckoutGiftForItemsHostedPageBody = z.infer<
  typeof CheckoutGiftForItemsHostedPageBodySchema
>;

//HostedPage.claimGift

const ClaimGiftHostedPageGiftSchema = z.object({
  id: z.string().max(150),
});
const ClaimGiftHostedPageCustomerSchema = z.object({
  locale: z.string().max(50).optional(),
});
const ClaimGiftHostedPageBodySchema = z.looseObject({
  redirect_url: z.string().max(250).optional(),
  gift: ClaimGiftHostedPageGiftSchema.optional(),
  customer: ClaimGiftHostedPageCustomerSchema.optional(),
});
export { ClaimGiftHostedPageBodySchema };
export type ClaimGiftHostedPageBody = z.infer<
  typeof ClaimGiftHostedPageBodySchema
>;

//HostedPage.retrieveAgreementPdf

const RetrieveAgreementPdfHostedPageBodySchema = z.looseObject({
  payment_source_id: z.string().max(40),
});
export { RetrieveAgreementPdfHostedPageBodySchema };
export type RetrieveAgreementPdfHostedPageBody = z.infer<
  typeof RetrieveAgreementPdfHostedPageBodySchema
>;

//HostedPage.preCancel

const PreCancelHostedPageSubscriptionSchema = z.object({
  id: z.string().max(50),
});
const PreCancelHostedPageBodySchema = z.looseObject({
  pass_thru_content: z.string().max(2048).optional(),
  cancel_url: z.string().max(250).optional(),
  redirect_url: z.string().max(250).optional(),
  subscription: PreCancelHostedPageSubscriptionSchema.optional(),
});
export { PreCancelHostedPageBodySchema };
export type PreCancelHostedPageBody = z.infer<
  typeof PreCancelHostedPageBodySchema
>;

//HostedPage.events

const EventsHostedPageEventDataSchema = z.looseObject({});
const EventsHostedPageBodySchema = z.looseObject({
  event_name: z.enum(['cancellation_page_loaded']),
  occurred_at: z.number().int().optional(),
  event_data: EventsHostedPageEventDataSchema,
});
export { EventsHostedPageBodySchema };
export type EventsHostedPageBody = z.infer<typeof EventsHostedPageBodySchema>;

//HostedPage.viewVoucher

const ViewVoucherHostedPagePaymentVoucherSchema = z.object({
  id: z.string().max(40),
});
const ViewVoucherHostedPageCustomerSchema = z.object({
  locale: z.string().max(50).optional(),
});
const ViewVoucherHostedPageBodySchema = z.looseObject({
  payment_voucher: ViewVoucherHostedPagePaymentVoucherSchema.optional(),
  customer: ViewVoucherHostedPageCustomerSchema.optional(),
});
export { ViewVoucherHostedPageBodySchema };
export type ViewVoucherHostedPageBody = z.infer<
  typeof ViewVoucherHostedPageBodySchema
>;
