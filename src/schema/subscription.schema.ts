// Generated Zod schemas: Subscription
// Actions: create, createForCustomer, createWithItems, subscriptionsForCustomer, contractTermsForSubscription, listDiscounts, removeScheduledCancellation, removeCoupons, update, updateForItems, changeTermEnd, reactivate, addChargeAtTermEnd, chargeAddonAtTermEnd, chargeFutureRenewals, editAdvanceInvoiceSchedule, removeAdvanceInvoiceSchedule, regenerateInvoice, importSubscription, importForCustomer, importContractTerm, importUnbilledCharges, importForItems, overrideBillingProfile, pause, cancel, cancelForItems, resume, move
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//Subscription.create

const CreateSubscriptionMetaDataSchema = z.looseObject({});
const CreateSubscriptionCustomerSchema = z.looseObject({
  id: z.string().max(50).optional(),
  email: z.string().email().max(70).optional(),
  first_name: z.string().max(150).optional(),
  last_name: z.string().max(150).optional(),
  company: z.string().max(250).optional(),
  phone: z.string().max(50).optional(),
  locale: z.string().max(50).optional(),
  taxability: z.enum(['taxable', 'exempt']).optional(),
  entity_code: z
    .enum([
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'p',
      'q',
      'r',
      'med1',
      'med2',
    ])
    .optional(),
  exempt_number: z.string().max(100).optional(),
  net_term_days: z.number().int().optional(),
  taxjar_exemption_category: z
    .enum(['wholesale', 'government', 'other'])
    .optional(),
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
  allow_direct_debit: z.boolean().default(false).optional(),
  consolidated_invoicing: z.boolean().optional(),
  vat_number: z.string().max(20).optional(),
  vat_number_prefix: z.string().max(10).optional(),
  entity_identifier_scheme: z.string().max(50).optional(),
  entity_identifier_standard: z.string().max(50).optional(),
  is_einvoice_enabled: z.boolean().optional(),
  einvoicing_method: z.enum(['automatic', 'manual', 'site_default']).optional(),
  registered_for_gst: z.boolean().optional(),
  business_customer_without_vat_number: z.boolean().optional(),
  exemption_details: z.array(z.string().optional()).optional(),
  customer_type: z
    .enum(['residential', 'business', 'senior_citizen', 'industrial'])
    .optional(),
});
const CreateSubscriptionAdditionalInformationSchema = z.looseObject({});
const CreateSubscriptionCardSchema = z.object({
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
  tmp_token: z.string().max(300).optional(),
  first_name: z.string().max(50).optional(),
  last_name: z.string().max(50).optional(),
  number: z.string().max(1500).optional(),
  expiry_month: z.number().int().min(1).max(12).optional(),
  expiry_year: z.number().int().optional(),
  cvv: z.string().max(520).optional(),
  preferred_scheme: z
    .enum(['cartes_bancaires', 'mastercard', 'visa'])
    .optional(),
  billing_addr1: z.string().max(150).optional(),
  billing_addr2: z.string().max(150).optional(),
  billing_city: z.string().max(50).optional(),
  billing_state_code: z.string().max(50).optional(),
  billing_state: z.string().max(50).optional(),
  billing_zip: z.string().max(20).optional(),
  billing_country: z.string().max(50).optional(),
  ip_address: z.string().max(50).optional(),
  additional_information:
    CreateSubscriptionAdditionalInformationSchema.optional(),
});
const CreateSubscriptionBillingAddressSchema = z.looseObject({});
const CreateSubscriptionBankAccountSchema = z.object({
  gateway_account_id: z.string().max(50).optional(),
  iban: z.string().max(50).min(10).optional(),
  first_name: z.string().max(150).optional(),
  last_name: z.string().max(150).optional(),
  company: z.string().max(250).optional(),
  email: z.string().email().max(70).optional(),
  phone: z.string().max(50).optional(),
  bank_name: z.string().max(100).optional(),
  account_number: z.string().max(17).min(4).optional(),
  routing_number: z.string().max(9).min(3).optional(),
  bank_code: z.string().max(20).optional(),
  account_type: z
    .enum(['checking', 'savings', 'business_checking', 'current'])
    .optional(),
  account_holder_type: z.enum(['individual', 'company']).optional(),
  echeck_type: z.enum(['web', 'ppd', 'ccd']).optional(),
  issuing_country: z.string().max(50).optional(),
  swedish_identity_number: z.string().max(12).min(10).optional(),
  billing_address: CreateSubscriptionBillingAddressSchema.optional(),
});
const CreateSubscriptionPaymentMethodSchema = z.object({
  type: z
    .enum([
      'card',
      'paypal_express_checkout',
      'amazon_payments',
      'direct_debit',
      'generic',
      'alipay',
      'unionpay',
      'apple_pay',
      'wechat_pay',
      'ideal',
      'google_pay',
      'sofort',
      'bancontact',
      'giropay',
      'dotpay',
      'upi',
      'netbanking_emandates',
      'venmo',
      'pay_to',
      'faster_payments',
      'sepa_instant_transfer',
      'automated_bank_transfer',
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
  gateway: z
    .enum([
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
      'gocardless',
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
  reference_id: z.string().max(200).optional(),
  tmp_token: z.string().max(65000).optional(),
  issuing_country: z.string().max(50).optional(),
  additional_information:
    CreateSubscriptionAdditionalInformationSchema.optional(),
});
const CreateSubscriptionPaymentIntentSchema = z.object({
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
    CreateSubscriptionAdditionalInformationSchema.optional(),
});
const CreateSubscriptionShippingAddressSchema = z.object({
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
const CreateSubscriptionStatementDescriptorSchema = z.object({
  descriptor: z.string().max(65000).optional(),
});
const CreateSubscriptionContractTermSchema = z.object({
  action_at_term_end: z.enum(['renew', 'evergreen', 'cancel']).optional(),
  cancellation_cutoff_period: z.number().int().optional(),
});
const CreateSubscriptionEntityIdentifiersSchema = z.object({
  id: z.array(z.string().max(40).optional()).optional(),
  scheme: z.array(z.string().max(50).optional()).optional(),
  value: z.array(z.string().max(50).optional()).optional(),
  standard: z.array(z.string().max(50).optional()).optional(),
});
const CreateSubscriptionTaxProvidersFieldsSchema = z.object({
  provider_name: z.array(z.string().max(50).optional()).optional(),
  field_id: z.array(z.string().max(50).optional()).optional(),
  field_value: z.array(z.string().max(50).optional()).optional(),
});
const CreateSubscriptionAddonsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  billing_cycles: z.array(z.number().int().min(0).optional()).optional(),
  trial_end: z.array(z.number().int().optional()).optional(),
});
const CreateSubscriptionEventBasedAddonsSchema = z.object({
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
const CreateSubscriptionCouponsSchema = z.object({
  coupon_id: z.array(z.string().max(100).optional()).optional(),
  apply_till: z.array(z.number().int().optional()).optional(),
});
const CreateSubscriptionBodySchema = z.looseObject({
  id: z.string().max(50).optional(),
  plan_id: z.string().max(100),
  plan_quantity: z.number().int().min(1).optional(),
  plan_quantity_in_decimal: z.string().max(33).optional(),
  plan_unit_price: z.number().int().min(0).optional(),
  plan_unit_price_in_decimal: z.string().max(39).optional(),
  setup_fee: z.number().int().min(0).optional(),
  trial_end: z.number().int().optional(),
  billing_cycles: z.number().int().min(0).optional(),
  mandatory_addons_to_remove: z
    .array(z.string().max(100).optional())
    .optional(),
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
  token_id: z.string().max(40).optional(),
  affiliate_token: z.string().max(250).optional(),
  created_from_ip: z.string().max(50).optional(),
  invoice_notes: z.string().max(2000).optional(),
  invoice_date: z.number().int().optional(),
  meta_data: CreateSubscriptionMetaDataSchema.optional(),
  invoice_immediately: z.boolean().optional(),
  free_period: z.number().int().min(1).optional(),
  free_period_unit: z.enum(['day', 'week', 'month', 'year']).optional(),
  contract_term_billing_cycle_on_renewal: z
    .number()
    .int()
    .min(1)
    .max(100)
    .optional(),
  trial_end_action: z
    .enum([
      'site_default',
      'plan_default',
      'activate_subscription',
      'cancel_subscription',
    ])
    .optional(),
  client_profile_id: z.string().max(50).optional(),
  payment_initiator: z.enum(['customer', 'merchant']).optional(),
  customer: CreateSubscriptionCustomerSchema.optional(),
  card: CreateSubscriptionCardSchema.optional(),
  bank_account: CreateSubscriptionBankAccountSchema.optional(),
  payment_method: CreateSubscriptionPaymentMethodSchema.optional(),
  payment_intent: CreateSubscriptionPaymentIntentSchema.optional(),
  billing_address: CreateSubscriptionBillingAddressSchema.optional(),
  shipping_address: CreateSubscriptionShippingAddressSchema.optional(),
  statement_descriptor: CreateSubscriptionStatementDescriptorSchema.optional(),
  contract_term: CreateSubscriptionContractTermSchema.optional(),
  entity_identifiers: CreateSubscriptionEntityIdentifiersSchema.optional(),
  tax_providers_fields: CreateSubscriptionTaxProvidersFieldsSchema.optional(),
  addons: CreateSubscriptionAddonsSchema.optional(),
  event_based_addons: CreateSubscriptionEventBasedAddonsSchema.optional(),
  coupons: CreateSubscriptionCouponsSchema.optional(),
});
export { CreateSubscriptionBodySchema };
export type CreateSubscriptionBody = z.infer<
  typeof CreateSubscriptionBodySchema
>;

//Subscription.createForCustomer

const CreateForCustomerSubscriptionMetaDataSchema = z.looseObject({});
const CreateForCustomerSubscriptionShippingAddressSchema = z.object({
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
const CreateForCustomerSubscriptionStatementDescriptorSchema = z.object({
  descriptor: z.string().max(65000).optional(),
});
const CreateForCustomerSubscriptionAdditionalInformationSchema = z.looseObject(
  {},
);
const CreateForCustomerSubscriptionPaymentIntentSchema = z.object({
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
    CreateForCustomerSubscriptionAdditionalInformationSchema.optional(),
});
const CreateForCustomerSubscriptionContractTermSchema = z.object({
  action_at_term_end: z.enum(['renew', 'evergreen', 'cancel']).optional(),
  cancellation_cutoff_period: z.number().int().optional(),
});
const CreateForCustomerSubscriptionAddonsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  billing_cycles: z.array(z.number().int().min(0).optional()).optional(),
  trial_end: z.array(z.number().int().optional()).optional(),
});
const CreateForCustomerSubscriptionEventBasedAddonsSchema = z.object({
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
const CreateForCustomerSubscriptionCouponsSchema = z.object({
  coupon_id: z.array(z.string().max(100).optional()).optional(),
  apply_till: z.array(z.number().int().optional()).optional(),
});
const CreateForCustomerSubscriptionBodySchema = z.looseObject({
  id: z.string().max(50).optional(),
  plan_id: z.string().max(100),
  plan_quantity: z.number().int().min(1).optional(),
  plan_quantity_in_decimal: z.string().max(33).optional(),
  plan_unit_price: z.number().int().min(0).optional(),
  plan_unit_price_in_decimal: z.string().max(39).optional(),
  setup_fee: z.number().int().min(0).optional(),
  trial_end: z.number().int().optional(),
  billing_cycles: z.number().int().min(0).optional(),
  mandatory_addons_to_remove: z
    .array(z.string().max(100).optional())
    .optional(),
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
  meta_data: CreateForCustomerSubscriptionMetaDataSchema.optional(),
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
  trial_end_action: z
    .enum([
      'site_default',
      'plan_default',
      'activate_subscription',
      'cancel_subscription',
    ])
    .optional(),
  payment_initiator: z.enum(['customer', 'merchant']).optional(),
  shipping_address:
    CreateForCustomerSubscriptionShippingAddressSchema.optional(),
  statement_descriptor:
    CreateForCustomerSubscriptionStatementDescriptorSchema.optional(),
  payment_intent: CreateForCustomerSubscriptionPaymentIntentSchema.optional(),
  contract_term: CreateForCustomerSubscriptionContractTermSchema.optional(),
  addons: CreateForCustomerSubscriptionAddonsSchema.optional(),
  event_based_addons:
    CreateForCustomerSubscriptionEventBasedAddonsSchema.optional(),
  coupons: CreateForCustomerSubscriptionCouponsSchema.optional(),
});
export { CreateForCustomerSubscriptionBodySchema };
export type CreateForCustomerSubscriptionBody = z.infer<
  typeof CreateForCustomerSubscriptionBodySchema
>;

//Subscription.createWithItems

const CreateWithItemsSubscriptionMetaDataSchema = z.looseObject({});
const CreateWithItemsSubscriptionShippingAddressSchema = z.object({
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
const CreateWithItemsSubscriptionStatementDescriptorSchema = z.object({
  descriptor: z.string().max(65000).optional(),
});
const CreateWithItemsSubscriptionAdditionalInformationSchema = z.looseObject(
  {},
);
const CreateWithItemsSubscriptionPaymentIntentSchema = z.object({
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
    CreateWithItemsSubscriptionAdditionalInformationSchema.optional(),
});
const CreateWithItemsSubscriptionContractTermSchema = z.object({
  action_at_term_end: z.enum(['renew', 'evergreen', 'cancel']).optional(),
  contract_start: z.number().int().optional(),
  cancellation_cutoff_period: z.number().int().optional(),
});
const CreateWithItemsSubscriptionBillingOverrideSchema = z.object({
  max_excess_payment_usage: z.number().int().min(-1).optional(),
  max_refundable_credits_usage: z.number().int().min(-1).optional(),
});
const CreateWithItemsSubscriptionSubscriptionItemsSchema = z.object({
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
const CreateWithItemsSubscriptionDiscountsSchema = z.object({
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
const CreateWithItemsSubscriptionItemTiersSchema = z.object({
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
const CreateWithItemsSubscriptionCouponsSchema = z.object({
  coupon_id: z.array(z.string().max(100).optional()).optional(),
  apply_till: z.array(z.number().int().optional()).optional(),
});
const CreateWithItemsSubscriptionBodySchema = z.looseObject({
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
  meta_data: CreateWithItemsSubscriptionMetaDataSchema.optional(),
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
  shipping_address: CreateWithItemsSubscriptionShippingAddressSchema.optional(),
  statement_descriptor:
    CreateWithItemsSubscriptionStatementDescriptorSchema.optional(),
  payment_intent: CreateWithItemsSubscriptionPaymentIntentSchema.optional(),
  contract_term: CreateWithItemsSubscriptionContractTermSchema.optional(),
  billing_override: CreateWithItemsSubscriptionBillingOverrideSchema.optional(),
  subscription_items:
    CreateWithItemsSubscriptionSubscriptionItemsSchema.optional(),
  discounts: CreateWithItemsSubscriptionDiscountsSchema.optional(),
  item_tiers: CreateWithItemsSubscriptionItemTiersSchema.optional(),
  coupons: CreateWithItemsSubscriptionCouponsSchema.optional(),
});
export { CreateWithItemsSubscriptionBodySchema };
export type CreateWithItemsSubscriptionBody = z.infer<
  typeof CreateWithItemsSubscriptionBodySchema
>;

//Subscription.subscriptionsForCustomer

const SubscriptionsForCustomerSubscriptionBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
});
export { SubscriptionsForCustomerSubscriptionBodySchema };
export type SubscriptionsForCustomerSubscriptionBody = z.infer<
  typeof SubscriptionsForCustomerSubscriptionBodySchema
>;

//Subscription.contractTermsForSubscription

const ContractTermsForSubscriptionSubscriptionSortBySchema = z.looseObject({
  asc: z.enum(['created_at']).optional(),
  desc: z.enum(['created_at']).optional(),
});
const ContractTermsForSubscriptionSubscriptionBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  sort_by: ContractTermsForSubscriptionSubscriptionSortBySchema.optional(),
});
export { ContractTermsForSubscriptionSubscriptionBodySchema };
export type ContractTermsForSubscriptionSubscriptionBody = z.infer<
  typeof ContractTermsForSubscriptionSubscriptionBodySchema
>;

//Subscription.listDiscounts

const ListDiscountsSubscriptionBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
});
export { ListDiscountsSubscriptionBodySchema };
export type ListDiscountsSubscriptionBody = z.infer<
  typeof ListDiscountsSubscriptionBodySchema
>;

//Subscription.removeScheduledCancellation

const RemoveScheduledCancellationSubscriptionContractTermSchema = z.object({
  action_at_term_end: z.enum(['renew', 'evergreen', 'cancel']).optional(),
  cancellation_cutoff_period: z.number().int().optional(),
});
const RemoveScheduledCancellationSubscriptionBodySchema = z.looseObject({
  billing_cycles: z.number().int().min(0).optional(),
  contract_term_billing_cycle_on_renewal: z
    .number()
    .int()
    .min(1)
    .max(100)
    .optional(),
  contract_term:
    RemoveScheduledCancellationSubscriptionContractTermSchema.optional(),
});
export { RemoveScheduledCancellationSubscriptionBodySchema };
export type RemoveScheduledCancellationSubscriptionBody = z.infer<
  typeof RemoveScheduledCancellationSubscriptionBodySchema
>;

//Subscription.removeCoupons

const RemoveCouponsSubscriptionBodySchema = z.looseObject({
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
});
export { RemoveCouponsSubscriptionBodySchema };
export type RemoveCouponsSubscriptionBody = z.infer<
  typeof RemoveCouponsSubscriptionBodySchema
>;

//Subscription.update

const UpdateSubscriptionMetaDataSchema = z.looseObject({});
const UpdateSubscriptionAdditionalInformationSchema = z.looseObject({});
const UpdateSubscriptionCardSchema = z.object({
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
  tmp_token: z.string().max(300).optional(),
  first_name: z.string().max(50).optional(),
  last_name: z.string().max(50).optional(),
  number: z.string().max(1500).optional(),
  expiry_month: z.number().int().min(1).max(12).optional(),
  expiry_year: z.number().int().optional(),
  cvv: z.string().max(520).optional(),
  preferred_scheme: z
    .enum(['cartes_bancaires', 'mastercard', 'visa'])
    .optional(),
  billing_addr1: z.string().max(150).optional(),
  billing_addr2: z.string().max(150).optional(),
  billing_city: z.string().max(50).optional(),
  billing_state_code: z.string().max(50).optional(),
  billing_state: z.string().max(50).optional(),
  billing_zip: z.string().max(20).optional(),
  billing_country: z.string().max(50).optional(),
  ip_address: z.string().max(50).optional(),
  additional_information:
    UpdateSubscriptionAdditionalInformationSchema.optional(),
});
const UpdateSubscriptionPaymentMethodSchema = z.object({
  type: z
    .enum([
      'card',
      'paypal_express_checkout',
      'amazon_payments',
      'direct_debit',
      'generic',
      'alipay',
      'unionpay',
      'apple_pay',
      'wechat_pay',
      'ideal',
      'google_pay',
      'sofort',
      'bancontact',
      'giropay',
      'dotpay',
      'upi',
      'netbanking_emandates',
      'venmo',
      'pay_to',
      'faster_payments',
      'sepa_instant_transfer',
      'automated_bank_transfer',
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
  gateway: z
    .enum([
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
      'gocardless',
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
  reference_id: z.string().max(200).optional(),
  tmp_token: z.string().max(65000).optional(),
  issuing_country: z.string().max(50).optional(),
  additional_information:
    UpdateSubscriptionAdditionalInformationSchema.optional(),
});
const UpdateSubscriptionPaymentIntentSchema = z.object({
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
    UpdateSubscriptionAdditionalInformationSchema.optional(),
});
const UpdateSubscriptionBillingAddressSchema = z.object({
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
const UpdateSubscriptionShippingAddressSchema = z.object({
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
const UpdateSubscriptionStatementDescriptorSchema = z.object({
  descriptor: z.string().max(65000).optional(),
});
const UpdateSubscriptionCustomerSchema = z.object({
  vat_number: z.string().max(20).optional(),
  vat_number_prefix: z.string().max(10).optional(),
  entity_identifier_scheme: z.string().max(50).optional(),
  is_einvoice_enabled: z.boolean().optional(),
  einvoicing_method: z.enum(['automatic', 'manual', 'site_default']).optional(),
  entity_identifier_standard: z.string().max(50).optional(),
  business_customer_without_vat_number: z.boolean().optional(),
  registered_for_gst: z.boolean().optional(),
});
const UpdateSubscriptionContractTermSchema = z.object({
  action_at_term_end: z
    .enum(['renew', 'evergreen', 'cancel', 'renew_once'])
    .optional(),
  cancellation_cutoff_period: z.number().int().optional(),
});
const UpdateSubscriptionAddonsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  billing_cycles: z.array(z.number().int().min(0).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  trial_end: z.array(z.number().int().optional()).optional(),
  proration_type: z
    .array(z.enum(['full_term', 'partial_term', 'none']).optional())
    .optional(),
});
const UpdateSubscriptionEventBasedAddonsSchema = z.object({
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
const UpdateSubscriptionCouponsSchema = z.object({
  coupon_id: z.array(z.string().max(100).optional()).optional(),
  apply_till: z.array(z.number().int().optional()).optional(),
});
const UpdateSubscriptionBodySchema = z.looseObject({
  plan_id: z.string().max(100).optional(),
  plan_quantity: z.number().int().min(1).optional(),
  plan_unit_price: z.number().int().min(0).optional(),
  setup_fee: z.number().int().min(0).optional(),
  replace_addon_list: z.boolean().default(false).optional(),
  mandatory_addons_to_remove: z
    .array(z.string().max(100).optional())
    .optional(),
  plan_quantity_in_decimal: z.string().max(33).optional(),
  plan_unit_price_in_decimal: z.string().max(39).optional(),
  invoice_date: z.number().int().optional(),
  start_date: z.number().int().optional(),
  trial_end: z.number().int().optional(),
  billing_cycles: z.number().int().min(0).optional(),
  coupon: z.string().max(100).optional(),
  terms_to_charge: z.number().int().min(1).optional(),
  reactivate_from: z.number().int().optional(),
  billing_alignment_mode: z.enum(['immediate', 'delayed']).optional(),
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
  po_number: z.string().max(100).optional(),
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  replace_coupon_list: z.boolean().default(false).optional(),
  prorate: z.boolean().optional(),
  end_of_term: z.boolean().default(false).optional(),
  force_term_reset: z.boolean().default(false).optional(),
  reactivate: z.boolean().optional(),
  token_id: z.string().max(40).optional(),
  invoice_notes: z.string().max(2000).optional(),
  meta_data: UpdateSubscriptionMetaDataSchema.optional(),
  invoice_immediately: z.boolean().optional(),
  override_relationship: z.boolean().optional(),
  changes_scheduled_at: z.number().int().optional(),
  change_option: z
    .enum(['immediately', 'end_of_term', 'specific_date'])
    .optional(),
  contract_term_billing_cycle_on_renewal: z
    .number()
    .int()
    .min(1)
    .max(100)
    .optional(),
  free_period: z.number().int().min(1).optional(),
  free_period_unit: z.enum(['day', 'week', 'month', 'year']).optional(),
  trial_end_action: z
    .enum([
      'site_default',
      'plan_default',
      'activate_subscription',
      'cancel_subscription',
    ])
    .optional(),
  card: UpdateSubscriptionCardSchema.optional(),
  payment_method: UpdateSubscriptionPaymentMethodSchema.optional(),
  payment_intent: UpdateSubscriptionPaymentIntentSchema.optional(),
  billing_address: UpdateSubscriptionBillingAddressSchema.optional(),
  shipping_address: UpdateSubscriptionShippingAddressSchema.optional(),
  statement_descriptor: UpdateSubscriptionStatementDescriptorSchema.optional(),
  customer: UpdateSubscriptionCustomerSchema.optional(),
  contract_term: UpdateSubscriptionContractTermSchema.optional(),
  addons: UpdateSubscriptionAddonsSchema.optional(),
  event_based_addons: UpdateSubscriptionEventBasedAddonsSchema.optional(),
  coupons: UpdateSubscriptionCouponsSchema.optional(),
});
export { UpdateSubscriptionBodySchema };
export type UpdateSubscriptionBody = z.infer<
  typeof UpdateSubscriptionBodySchema
>;

//Subscription.updateForItems

const UpdateForItemsSubscriptionMetaDataSchema = z.looseObject({});
const UpdateForItemsSubscriptionAdditionalInformationSchema = z.looseObject({});
const UpdateForItemsSubscriptionCardSchema = z.object({
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
  tmp_token: z.string().max(300).optional(),
  first_name: z.string().max(50).optional(),
  last_name: z.string().max(50).optional(),
  number: z.string().max(1500).optional(),
  expiry_month: z.number().int().min(1).max(12).optional(),
  expiry_year: z.number().int().optional(),
  cvv: z.string().max(520).optional(),
  preferred_scheme: z
    .enum(['cartes_bancaires', 'mastercard', 'visa'])
    .optional(),
  billing_addr1: z.string().max(150).optional(),
  billing_addr2: z.string().max(150).optional(),
  billing_city: z.string().max(50).optional(),
  billing_state_code: z.string().max(50).optional(),
  billing_state: z.string().max(50).optional(),
  billing_zip: z.string().max(20).optional(),
  billing_country: z.string().max(50).optional(),
  ip_address: z.string().max(50).optional(),
  additional_information:
    UpdateForItemsSubscriptionAdditionalInformationSchema.optional(),
});
const UpdateForItemsSubscriptionPaymentMethodSchema = z.object({
  type: z
    .enum([
      'card',
      'paypal_express_checkout',
      'amazon_payments',
      'direct_debit',
      'generic',
      'alipay',
      'unionpay',
      'apple_pay',
      'wechat_pay',
      'ideal',
      'google_pay',
      'sofort',
      'bancontact',
      'giropay',
      'dotpay',
      'upi',
      'netbanking_emandates',
      'venmo',
      'pay_to',
      'faster_payments',
      'sepa_instant_transfer',
      'automated_bank_transfer',
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
  gateway: z
    .enum([
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
      'gocardless',
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
  reference_id: z.string().max(200).optional(),
  tmp_token: z.string().max(65000).optional(),
  issuing_country: z.string().max(50).optional(),
  additional_information:
    UpdateForItemsSubscriptionAdditionalInformationSchema.optional(),
});
const UpdateForItemsSubscriptionPaymentIntentSchema = z.object({
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
    UpdateForItemsSubscriptionAdditionalInformationSchema.optional(),
});
const UpdateForItemsSubscriptionBillingAddressSchema = z.object({
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
const UpdateForItemsSubscriptionShippingAddressSchema = z.object({
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
const UpdateForItemsSubscriptionStatementDescriptorSchema = z.object({
  descriptor: z.string().max(65000).optional(),
});
const UpdateForItemsSubscriptionCustomerSchema = z.object({
  vat_number: z.string().max(20).optional(),
  vat_number_prefix: z.string().max(10).optional(),
  entity_identifier_scheme: z.string().max(50).optional(),
  is_einvoice_enabled: z.boolean().optional(),
  einvoicing_method: z.enum(['automatic', 'manual', 'site_default']).optional(),
  entity_identifier_standard: z.string().max(50).optional(),
  business_customer_without_vat_number: z.boolean().optional(),
  registered_for_gst: z.boolean().optional(),
});
const UpdateForItemsSubscriptionContractTermSchema = z.object({
  action_at_term_end: z
    .enum(['renew', 'evergreen', 'cancel', 'renew_once'])
    .optional(),
  cancellation_cutoff_period: z.number().int().optional(),
  contract_start: z.number().int().optional(),
});
const UpdateForItemsSubscriptionBillingOverrideSchema = z.object({
  max_excess_payment_usage: z.number().int().min(-1).optional(),
  max_refundable_credits_usage: z.number().int().min(-1).optional(),
});
const UpdateForItemsSubscriptionSubscriptionItemsSchema = z.object({
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
  proration_type: z
    .array(z.enum(['full_term', 'partial_term', 'none']).optional())
    .optional(),
  usage_accumulation_reset_frequency: z
    .array(z.enum(['never', 'subscription_billing_frequency']).optional())
    .optional(),
});
const UpdateForItemsSubscriptionDiscountsSchema = z.object({
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
const UpdateForItemsSubscriptionItemTiersSchema = z.object({
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
const UpdateForItemsSubscriptionCouponsSchema = z.object({
  coupon_id: z.array(z.string().max(100).optional()).optional(),
  apply_till: z.array(z.number().int().optional()).optional(),
});
const UpdateForItemsSubscriptionBodySchema = z.looseObject({
  mandatory_items_to_remove: z.array(z.string().max(100).optional()).optional(),
  replace_items_list: z.boolean().default(false).optional(),
  setup_fee: z.number().int().min(0).optional(),
  net_term_days: z.number().int().optional(),
  invoice_date: z.number().int().optional(),
  start_date: z.number().int().optional(),
  trial_end: z.number().int().optional(),
  billing_cycles: z.number().int().min(0).optional(),
  coupon: z.string().max(100).optional(),
  terms_to_charge: z.number().int().min(1).optional(),
  reactivate_from: z.number().int().optional(),
  billing_alignment_mode: z.enum(['immediate', 'delayed']).optional(),
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
  po_number: z.string().max(100).optional(),
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  replace_coupon_list: z.boolean().default(false).optional(),
  prorate: z.boolean().optional(),
  end_of_term: z.boolean().default(false).optional(),
  force_term_reset: z.boolean().default(false).optional(),
  reactivate: z.boolean().optional(),
  token_id: z.string().max(40).optional(),
  invoice_notes: z.string().max(2000).optional(),
  meta_data: UpdateForItemsSubscriptionMetaDataSchema.optional(),
  invoice_immediately: z.boolean().optional(),
  override_relationship: z.boolean().optional(),
  changes_scheduled_at: z.number().int().optional(),
  change_option: z
    .enum(['immediately', 'end_of_term', 'specific_date'])
    .optional(),
  contract_term_billing_cycle_on_renewal: z
    .number()
    .int()
    .min(1)
    .max(100)
    .optional(),
  free_period: z.number().int().min(1).optional(),
  free_period_unit: z.enum(['day', 'week', 'month', 'year']).optional(),
  create_pending_invoices: z.boolean().optional(),
  auto_close_invoices: z.boolean().optional(),
  trial_end_action: z
    .enum([
      'site_default',
      'plan_default',
      'activate_subscription',
      'cancel_subscription',
    ])
    .optional(),
  payment_initiator: z.enum(['customer', 'merchant']).optional(),
  invoice_usages: z.boolean().default(false).optional(),
  card: UpdateForItemsSubscriptionCardSchema.optional(),
  payment_method: UpdateForItemsSubscriptionPaymentMethodSchema.optional(),
  payment_intent: UpdateForItemsSubscriptionPaymentIntentSchema.optional(),
  billing_address: UpdateForItemsSubscriptionBillingAddressSchema.optional(),
  shipping_address: UpdateForItemsSubscriptionShippingAddressSchema.optional(),
  statement_descriptor:
    UpdateForItemsSubscriptionStatementDescriptorSchema.optional(),
  customer: UpdateForItemsSubscriptionCustomerSchema.optional(),
  contract_term: UpdateForItemsSubscriptionContractTermSchema.optional(),
  billing_override: UpdateForItemsSubscriptionBillingOverrideSchema.optional(),
  subscription_items:
    UpdateForItemsSubscriptionSubscriptionItemsSchema.optional(),
  discounts: UpdateForItemsSubscriptionDiscountsSchema.optional(),
  item_tiers: UpdateForItemsSubscriptionItemTiersSchema.optional(),
  coupons: UpdateForItemsSubscriptionCouponsSchema.optional(),
});
export { UpdateForItemsSubscriptionBodySchema };
export type UpdateForItemsSubscriptionBody = z.infer<
  typeof UpdateForItemsSubscriptionBodySchema
>;

//Subscription.changeTermEnd

const ChangeTermEndSubscriptionBodySchema = z.looseObject({
  term_ends_at: z.number().int(),
  prorate: z.boolean().optional(),
  invoice_immediately: z.boolean().optional(),
});
export { ChangeTermEndSubscriptionBodySchema };
export type ChangeTermEndSubscriptionBody = z.infer<
  typeof ChangeTermEndSubscriptionBodySchema
>;

//Subscription.reactivate

const ReactivateSubscriptionContractTermSchema = z.object({
  action_at_term_end: z.enum(['renew', 'evergreen', 'cancel']).optional(),
  cancellation_cutoff_period: z.number().int().optional(),
});
const ReactivateSubscriptionStatementDescriptorSchema = z.object({
  descriptor: z.string().max(65000).optional(),
});
const ReactivateSubscriptionAdditionalInformationSchema = z.looseObject({});
const ReactivateSubscriptionPaymentIntentSchema = z.object({
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
    ReactivateSubscriptionAdditionalInformationSchema.optional(),
});
const ReactivateSubscriptionBodySchema = z.looseObject({
  trial_end: z.number().int().optional(),
  billing_cycles: z.number().int().min(0).optional(),
  trial_period_days: z.number().int().min(1).max(365).optional(),
  reactivate_from: z.number().int().optional(),
  invoice_immediately: z.boolean().optional(),
  billing_alignment_mode: z.enum(['immediate', 'delayed']).optional(),
  terms_to_charge: z.number().int().min(1).optional(),
  invoice_date: z.number().int().optional(),
  contract_term_billing_cycle_on_renewal: z
    .number()
    .int()
    .min(1)
    .max(100)
    .optional(),
  payment_initiator: z.enum(['customer', 'merchant']).optional(),
  contract_term: ReactivateSubscriptionContractTermSchema.optional(),
  statement_descriptor:
    ReactivateSubscriptionStatementDescriptorSchema.optional(),
  payment_intent: ReactivateSubscriptionPaymentIntentSchema.optional(),
});
export { ReactivateSubscriptionBodySchema };
export type ReactivateSubscriptionBody = z.infer<
  typeof ReactivateSubscriptionBodySchema
>;

//Subscription.addChargeAtTermEnd

const AddChargeAtTermEndSubscriptionBodySchema = z.looseObject({
  amount: z.number().int().min(1).optional(),
  description: z.string().max(250),
  amount_in_decimal: z.string().max(39).optional(),
  avalara_sale_type: z
    .enum(['wholesale', 'retail', 'consumed', 'vendor_use'])
    .optional(),
  avalara_transaction_type: z.number().int().optional(),
  avalara_service_type: z.number().int().optional(),
  date_from: z.number().int().optional(),
  date_to: z.number().int().optional(),
});
export { AddChargeAtTermEndSubscriptionBodySchema };
export type AddChargeAtTermEndSubscriptionBody = z.infer<
  typeof AddChargeAtTermEndSubscriptionBodySchema
>;

//Subscription.chargeAddonAtTermEnd

const ChargeAddonAtTermEndSubscriptionBodySchema = z.looseObject({
  addon_id: z.string().max(100),
  addon_quantity: z.number().int().min(1).optional(),
  addon_unit_price: z.number().int().min(0).optional(),
  addon_quantity_in_decimal: z.string().max(33).optional(),
  addon_unit_price_in_decimal: z.string().max(39).optional(),
  date_from: z.number().int().optional(),
  date_to: z.number().int().optional(),
});
export { ChargeAddonAtTermEndSubscriptionBodySchema };
export type ChargeAddonAtTermEndSubscriptionBody = z.infer<
  typeof ChargeAddonAtTermEndSubscriptionBodySchema
>;

//Subscription.chargeFutureRenewals

const ChargeFutureRenewalsSubscriptionFixedIntervalScheduleSchema = z.object({
  number_of_occurrences: z.number().int().min(1).optional(),
  days_before_renewal: z.number().int().min(1).optional(),
  end_schedule_on: z
    .enum(['after_number_of_intervals', 'specific_date', 'subscription_end'])
    .optional(),
  end_date: z.number().int().optional(),
});
const ChargeFutureRenewalsSubscriptionSpecificDatesScheduleSchema = z.object({
  terms_to_charge: z.array(z.number().int().optional()).optional(),
  date: z.array(z.number().int().optional()).optional(),
});
const ChargeFutureRenewalsSubscriptionBodySchema = z.looseObject({
  terms_to_charge: z.number().int().min(1).optional(),
  invoice_immediately: z.boolean().optional(),
  schedule_type: z
    .enum(['immediate', 'specific_dates', 'fixed_intervals'])
    .optional(),
  fixed_interval_schedule:
    ChargeFutureRenewalsSubscriptionFixedIntervalScheduleSchema.optional(),
  specific_dates_schedule:
    ChargeFutureRenewalsSubscriptionSpecificDatesScheduleSchema.optional(),
});
export { ChargeFutureRenewalsSubscriptionBodySchema };
export type ChargeFutureRenewalsSubscriptionBody = z.infer<
  typeof ChargeFutureRenewalsSubscriptionBodySchema
>;

//Subscription.editAdvanceInvoiceSchedule

const EditAdvanceInvoiceScheduleSubscriptionFixedIntervalScheduleSchema =
  z.object({
    number_of_occurrences: z.number().int().min(1).optional(),
    days_before_renewal: z.number().int().min(1).optional(),
    end_schedule_on: z
      .enum(['after_number_of_intervals', 'specific_date', 'subscription_end'])
      .optional(),
    end_date: z.number().int().optional(),
  });
const EditAdvanceInvoiceScheduleSubscriptionSpecificDatesScheduleSchema =
  z.object({
    id: z.array(z.string().max(50).optional()).optional(),
    terms_to_charge: z.array(z.number().int().optional()).optional(),
    date: z.array(z.number().int().optional()).optional(),
  });
const EditAdvanceInvoiceScheduleSubscriptionBodySchema = z.looseObject({
  terms_to_charge: z.number().int().min(1).optional(),
  schedule_type: z.enum(['specific_dates', 'fixed_intervals']).optional(),
  fixed_interval_schedule:
    EditAdvanceInvoiceScheduleSubscriptionFixedIntervalScheduleSchema.optional(),
  specific_dates_schedule:
    EditAdvanceInvoiceScheduleSubscriptionSpecificDatesScheduleSchema.optional(),
});
export { EditAdvanceInvoiceScheduleSubscriptionBodySchema };
export type EditAdvanceInvoiceScheduleSubscriptionBody = z.infer<
  typeof EditAdvanceInvoiceScheduleSubscriptionBodySchema
>;

//Subscription.removeAdvanceInvoiceSchedule

const RemoveAdvanceInvoiceScheduleSubscriptionSpecificDatesScheduleSchema =
  z.object({
    id: z.array(z.string().max(50).optional()).optional(),
  });
const RemoveAdvanceInvoiceScheduleSubscriptionBodySchema = z.looseObject({
  specific_dates_schedule:
    RemoveAdvanceInvoiceScheduleSubscriptionSpecificDatesScheduleSchema.optional(),
});
export { RemoveAdvanceInvoiceScheduleSubscriptionBodySchema };
export type RemoveAdvanceInvoiceScheduleSubscriptionBody = z.infer<
  typeof RemoveAdvanceInvoiceScheduleSubscriptionBodySchema
>;

//Subscription.regenerateInvoice

const RegenerateInvoiceSubscriptionBodySchema = z.looseObject({
  date_from: z.number().int().optional(),
  date_to: z.number().int().optional(),
  prorate: z.boolean().optional(),
  invoice_immediately: z.boolean().optional(),
});
export { RegenerateInvoiceSubscriptionBodySchema };
export type RegenerateInvoiceSubscriptionBody = z.infer<
  typeof RegenerateInvoiceSubscriptionBodySchema
>;

//Subscription.importSubscription

const ImportSubscriptionSubscriptionMetaDataSchema = z.looseObject({});
const ImportSubscriptionSubscriptionCustomerSchema = z.looseObject({
  id: z.string().max(50).optional(),
  email: z.string().email().max(70).optional(),
  first_name: z.string().max(150).optional(),
  last_name: z.string().max(150).optional(),
  company: z.string().max(250).optional(),
  phone: z.string().max(50).optional(),
  locale: z.string().max(50).optional(),
  taxability: z.enum(['taxable', 'exempt']).optional(),
  entity_code: z
    .enum([
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'p',
      'q',
      'r',
      'med1',
      'med2',
    ])
    .optional(),
  exempt_number: z.string().max(100).optional(),
  net_term_days: z.number().int().optional(),
  taxjar_exemption_category: z
    .enum(['wholesale', 'government', 'other'])
    .optional(),
  customer_type: z
    .enum(['residential', 'business', 'senior_citizen', 'industrial'])
    .optional(),
  auto_collection: z.enum(['on', 'off']).optional(),
  allow_direct_debit: z.boolean().default(false).optional(),
  vat_number: z.string().max(20).optional(),
  vat_number_prefix: z.string().max(10).optional(),
});
const ImportSubscriptionSubscriptionContractTermSchema = z.object({
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
const ImportSubscriptionSubscriptionAdditionalInformationSchema = z.looseObject(
  {},
);
const ImportSubscriptionSubscriptionCardSchema = z.object({
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
  tmp_token: z.string().max(300).optional(),
  first_name: z.string().max(50).optional(),
  last_name: z.string().max(50).optional(),
  number: z.string().max(1500).optional(),
  expiry_month: z.number().int().min(1).max(12).optional(),
  expiry_year: z.number().int().optional(),
  cvv: z.string().max(520).optional(),
  preferred_scheme: z
    .enum(['cartes_bancaires', 'mastercard', 'visa'])
    .optional(),
  billing_addr1: z.string().max(150).optional(),
  billing_addr2: z.string().max(150).optional(),
  billing_city: z.string().max(50).optional(),
  billing_state_code: z.string().max(50).optional(),
  billing_state: z.string().max(50).optional(),
  billing_zip: z.string().max(20).optional(),
  billing_country: z.string().max(50).optional(),
  additional_information:
    ImportSubscriptionSubscriptionAdditionalInformationSchema.optional(),
});
const ImportSubscriptionSubscriptionPaymentMethodSchema = z.object({
  type: z
    .enum([
      'card',
      'paypal_express_checkout',
      'amazon_payments',
      'direct_debit',
      'generic',
      'alipay',
      'unionpay',
      'apple_pay',
      'wechat_pay',
      'ideal',
      'google_pay',
      'sofort',
      'bancontact',
      'giropay',
      'dotpay',
      'upi',
      'netbanking_emandates',
      'venmo',
      'pay_to',
      'faster_payments',
      'sepa_instant_transfer',
      'automated_bank_transfer',
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
  gateway: z
    .enum([
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
      'gocardless',
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
  reference_id: z.string().max(200).optional(),
  issuing_country: z.string().max(50).optional(),
  additional_information:
    ImportSubscriptionSubscriptionAdditionalInformationSchema.optional(),
});
const ImportSubscriptionSubscriptionBillingAddressSchema = z.object({
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
const ImportSubscriptionSubscriptionShippingAddressSchema = z.object({
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
const ImportSubscriptionSubscriptionTransactionSchema = z.object({
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
const ImportSubscriptionSubscriptionAddonsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  billing_cycles: z.array(z.number().int().min(0).optional()).optional(),
});
const ImportSubscriptionSubscriptionEventBasedAddonsSchema = z.object({
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
});
const ImportSubscriptionSubscriptionChargedEventBasedAddonsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
  last_charged_at: z.array(z.number().int().optional()).optional(),
});
const ImportSubscriptionSubscriptionCouponsSchema = z.object({
  coupon_id: z.array(z.string().max(100).optional()).optional(),
  apply_till: z.array(z.number().int().optional()).optional(),
});
const ImportSubscriptionSubscriptionBodySchema = z.looseObject({
  id: z.string().max(50).optional(),
  client_profile_id: z.string().max(50).optional(),
  plan_id: z.string().max(100),
  plan_quantity: z.number().int().min(1).optional(),
  plan_quantity_in_decimal: z.string().max(33).optional(),
  plan_unit_price: z.number().int().min(0).optional(),
  plan_unit_price_in_decimal: z.string().max(39).optional(),
  setup_fee: z.number().int().min(0).optional(),
  trial_end: z.number().int().optional(),
  billing_cycles: z.number().int().min(0).optional(),
  start_date: z.number().int().optional(),
  auto_collection: z.enum(['on', 'off']).optional(),
  po_number: z.string().max(100).optional(),
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  contract_term_billing_cycle_on_renewal: z
    .number()
    .int()
    .min(1)
    .max(100)
    .optional(),
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
  create_current_term_invoice: z.boolean().default(false).optional(),
  affiliate_token: z.string().max(250).optional(),
  invoice_notes: z.string().max(2000).optional(),
  meta_data: ImportSubscriptionSubscriptionMetaDataSchema.optional(),
  customer: ImportSubscriptionSubscriptionCustomerSchema.optional(),
  contract_term: ImportSubscriptionSubscriptionContractTermSchema.optional(),
  card: ImportSubscriptionSubscriptionCardSchema.optional(),
  payment_method: ImportSubscriptionSubscriptionPaymentMethodSchema.optional(),
  billing_address:
    ImportSubscriptionSubscriptionBillingAddressSchema.optional(),
  shipping_address:
    ImportSubscriptionSubscriptionShippingAddressSchema.optional(),
  transaction: ImportSubscriptionSubscriptionTransactionSchema.optional(),
  addons: ImportSubscriptionSubscriptionAddonsSchema.optional(),
  event_based_addons:
    ImportSubscriptionSubscriptionEventBasedAddonsSchema.optional(),
  charged_event_based_addons:
    ImportSubscriptionSubscriptionChargedEventBasedAddonsSchema.optional(),
  coupons: ImportSubscriptionSubscriptionCouponsSchema.optional(),
});
export { ImportSubscriptionSubscriptionBodySchema };
export type ImportSubscriptionSubscriptionBody = z.infer<
  typeof ImportSubscriptionSubscriptionBodySchema
>;

//Subscription.importForCustomer

const ImportForCustomerSubscriptionMetaDataSchema = z.looseObject({});
const ImportForCustomerSubscriptionContractTermSchema = z.object({
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
const ImportForCustomerSubscriptionTransactionSchema = z.object({
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
const ImportForCustomerSubscriptionShippingAddressSchema = z.object({
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
const ImportForCustomerSubscriptionAddonsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  billing_cycles: z.array(z.number().int().min(0).optional()).optional(),
});
const ImportForCustomerSubscriptionEventBasedAddonsSchema = z.object({
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
});
const ImportForCustomerSubscriptionChargedEventBasedAddonsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
  last_charged_at: z.array(z.number().int().optional()).optional(),
});
const ImportForCustomerSubscriptionCouponsSchema = z.object({
  coupon_id: z.array(z.string().max(100).optional()).optional(),
  apply_till: z.array(z.number().int().optional()).optional(),
});
const ImportForCustomerSubscriptionBodySchema = z.looseObject({
  id: z.string().max(50).optional(),
  plan_id: z.string().max(100),
  plan_quantity: z.number().int().min(1).optional(),
  plan_quantity_in_decimal: z.string().max(33).optional(),
  plan_unit_price: z.number().int().min(0).optional(),
  plan_unit_price_in_decimal: z.string().max(39).optional(),
  setup_fee: z.number().int().min(0).optional(),
  trial_end: z.number().int().optional(),
  billing_cycles: z.number().int().min(0).optional(),
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
  meta_data: ImportForCustomerSubscriptionMetaDataSchema.optional(),
  contract_term: ImportForCustomerSubscriptionContractTermSchema.optional(),
  transaction: ImportForCustomerSubscriptionTransactionSchema.optional(),
  shipping_address:
    ImportForCustomerSubscriptionShippingAddressSchema.optional(),
  addons: ImportForCustomerSubscriptionAddonsSchema.optional(),
  event_based_addons:
    ImportForCustomerSubscriptionEventBasedAddonsSchema.optional(),
  charged_event_based_addons:
    ImportForCustomerSubscriptionChargedEventBasedAddonsSchema.optional(),
  coupons: ImportForCustomerSubscriptionCouponsSchema.optional(),
});
export { ImportForCustomerSubscriptionBodySchema };
export type ImportForCustomerSubscriptionBody = z.infer<
  typeof ImportForCustomerSubscriptionBodySchema
>;

//Subscription.importContractTerm

const ImportContractTermSubscriptionContractTermSchema = z.object({
  id: z.string().max(50).optional(),
  created_at: z.number().int().optional(),
  contract_start: z.number().int().optional(),
  contract_end: z.number().int().optional(),
  status: z.enum(['active', 'completed', 'cancelled', 'terminated']).optional(),
  total_amount_raised: z.number().int().min(0).optional(),
  total_amount_raised_before_tax: z.number().int().min(0).optional(),
  total_contract_value: z.number().int().min(0).optional(),
  total_contract_value_before_tax: z.number().int().min(0).optional(),
  billing_cycle: z.number().int().min(0).optional(),
  action_at_term_end: z
    .enum(['renew', 'evergreen', 'cancel', 'renew_once'])
    .optional(),
  cancellation_cutoff_period: z.number().int().optional(),
});
const ImportContractTermSubscriptionBodySchema = z.looseObject({
  contract_term_billing_cycle_on_renewal: z
    .number()
    .int()
    .min(1)
    .max(100)
    .optional(),
  contract_term: ImportContractTermSubscriptionContractTermSchema.optional(),
});
export { ImportContractTermSubscriptionBodySchema };
export type ImportContractTermSubscriptionBody = z.infer<
  typeof ImportContractTermSubscriptionBodySchema
>;

//Subscription.importUnbilledCharges

const ImportUnbilledChargesSubscriptionUnbilledChargesSchema = z.object({
  id: z.array(z.string().max(40).optional()).optional(),
  date_from: z.array(z.number().int().optional()),
  date_to: z.array(z.number().int().optional()),
  entity_type: z.array(
    z
      .enum([
        'adhoc',
        'plan_item_price',
        'addon_item_price',
        'charge_item_price',
        'plan_setup',
        'plan',
        'addon',
      ])
      .optional(),
  ),
  entity_id: z.array(z.string().max(100).optional()).optional(),
  description: z.array(z.string().max(250).optional()).optional(),
  unit_amount: z.array(z.number().int().min(0).optional()).optional(),
  quantity: z.array(z.number().int().min(0).optional()).optional(),
  amount: z.array(z.number().int().min(0).optional()).optional(),
  unit_amount_in_decimal: z.array(z.string().max(39).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  amount_in_decimal: z.array(z.string().max(39).optional()).optional(),
  discount_amount: z.array(z.number().int().min(0).optional()).optional(),
  use_for_proration: z.array(z.boolean().default(false).optional()).optional(),
  is_advance_charge: z.array(z.boolean().default(false).optional()).optional(),
});
const ImportUnbilledChargesSubscriptionDiscountsSchema = z.object({
  unbilled_charge_id: z.array(z.string().max(40).optional()).optional(),
  entity_type: z
    .array(
      z
        .enum([
          'item_level_coupon',
          'document_level_coupon',
          'item_level_discount',
          'document_level_discount',
        ])
        .optional(),
    )
    .optional(),
  entity_id: z.array(z.string().max(100).optional()).optional(),
  description: z.array(z.string().max(250).optional()).optional(),
  amount: z.array(z.number().int().min(0).optional()),
});
const ImportUnbilledChargesSubscriptionTiersSchema = z.object({
  unbilled_charge_id: z.array(z.string().max(40).optional()),
  starting_unit: z.array(z.number().int().min(0).optional()).optional(),
  ending_unit: z.array(z.number().int().optional()).optional(),
  quantity_used: z.array(z.number().int().min(0).optional()).optional(),
  unit_amount: z.array(z.number().int().min(0).optional()).optional(),
  starting_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  ending_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  quantity_used_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_amount_in_decimal: z.array(z.string().max(40).optional()).optional(),
});
const ImportUnbilledChargesSubscriptionBodySchema = z.looseObject({
  unbilled_charges:
    ImportUnbilledChargesSubscriptionUnbilledChargesSchema.optional(),
  discounts: ImportUnbilledChargesSubscriptionDiscountsSchema.optional(),
  tiers: ImportUnbilledChargesSubscriptionTiersSchema.optional(),
});
export { ImportUnbilledChargesSubscriptionBodySchema };
export type ImportUnbilledChargesSubscriptionBody = z.infer<
  typeof ImportUnbilledChargesSubscriptionBodySchema
>;

//Subscription.importForItems

const ImportForItemsSubscriptionMetaDataSchema = z.looseObject({});
const ImportForItemsSubscriptionContractTermSchema = z.object({
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
const ImportForItemsSubscriptionTransactionSchema = z.object({
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
const ImportForItemsSubscriptionShippingAddressSchema = z.object({
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
const ImportForItemsSubscriptionSubscriptionItemsSchema = z.object({
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
const ImportForItemsSubscriptionDiscountsSchema = z.object({
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
const ImportForItemsSubscriptionChargedItemsSchema = z.object({
  item_price_id: z.array(z.string().max(100).optional()).optional(),
  last_charged_at: z.array(z.number().int().optional()).optional(),
});
const ImportForItemsSubscriptionItemTiersSchema = z.object({
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
const ImportForItemsSubscriptionCouponsSchema = z.object({
  coupon_id: z.array(z.string().max(100).optional()).optional(),
  apply_till: z.array(z.number().int().optional()).optional(),
});
const ImportForItemsSubscriptionBodySchema = z.looseObject({
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
  meta_data: ImportForItemsSubscriptionMetaDataSchema.optional(),
  cancel_reason_code: z.string().max(100).optional(),
  create_pending_invoices: z.boolean().optional(),
  auto_close_invoices: z.boolean().optional(),
  contract_term: ImportForItemsSubscriptionContractTermSchema.optional(),
  transaction: ImportForItemsSubscriptionTransactionSchema.optional(),
  shipping_address: ImportForItemsSubscriptionShippingAddressSchema.optional(),
  subscription_items:
    ImportForItemsSubscriptionSubscriptionItemsSchema.optional(),
  discounts: ImportForItemsSubscriptionDiscountsSchema.optional(),
  charged_items: ImportForItemsSubscriptionChargedItemsSchema.optional(),
  item_tiers: ImportForItemsSubscriptionItemTiersSchema.optional(),
  coupons: ImportForItemsSubscriptionCouponsSchema.optional(),
});
export { ImportForItemsSubscriptionBodySchema };
export type ImportForItemsSubscriptionBody = z.infer<
  typeof ImportForItemsSubscriptionBodySchema
>;

//Subscription.overrideBillingProfile

const OverrideBillingProfileSubscriptionBodySchema = z.looseObject({
  payment_source_id: z.string().max(40).optional(),
  auto_collection: z.enum(['on', 'off']).optional(),
});
export { OverrideBillingProfileSubscriptionBodySchema };
export type OverrideBillingProfileSubscriptionBody = z.infer<
  typeof OverrideBillingProfileSubscriptionBodySchema
>;

//Subscription.pause

const PauseSubscriptionBodySchema = z.looseObject({
  pause_option: z
    .enum(['immediately', 'end_of_term', 'specific_date', 'billing_cycles'])
    .optional(),
  pause_date: z.number().int().optional(),
  unbilled_charges_handling: z.enum(['no_action', 'invoice']).optional(),
  invoice_dunning_handling: z.enum(['continue', 'stop']).optional(),
  skip_billing_cycles: z.number().int().min(1).optional(),
  resume_date: z.number().int().optional(),
});
export { PauseSubscriptionBodySchema };
export type PauseSubscriptionBody = z.infer<typeof PauseSubscriptionBodySchema>;

//Subscription.cancel

const CancelSubscriptionEventBasedAddonsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  service_period_in_days: z
    .array(z.number().int().min(1).max(4000).optional())
    .optional(),
});
const CancelSubscriptionBodySchema = z.looseObject({
  cancel_option: z
    .enum([
      'immediately',
      'end_of_term',
      'specific_date',
      'end_of_billing_term',
    ])
    .optional(),
  end_of_term: z.boolean().default(false).optional(),
  cancel_at: z.number().int().optional(),
  credit_option_for_current_term_charges: z
    .enum(['none', 'prorate', 'full'])
    .optional(),
  unbilled_charges_option: z.enum(['invoice', 'delete']).optional(),
  account_receivables_handling: z
    .enum(['no_action', 'schedule_payment_collection', 'write_off'])
    .optional(),
  refundable_credits_handling: z
    .enum(['no_action', 'schedule_refund'])
    .optional(),
  contract_term_cancel_option: z
    .enum([
      'terminate_immediately',
      'end_of_contract_term',
      'specific_date',
      'end_of_subscription_billing_term',
    ])
    .optional(),
  invoice_date: z.number().int().optional(),
  cancel_reason_code: z.string().max(100).optional(),
  event_based_addons: CancelSubscriptionEventBasedAddonsSchema.optional(),
});
export { CancelSubscriptionBodySchema };
export type CancelSubscriptionBody = z.infer<
  typeof CancelSubscriptionBodySchema
>;

//Subscription.cancelForItems

const CancelForItemsSubscriptionSubscriptionItemsSchema = z.object({
  item_price_id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  service_period_days: z
    .array(z.number().int().min(1).max(730).optional())
    .optional(),
});
const CancelForItemsSubscriptionBodySchema = z.looseObject({
  cancel_option: z
    .enum([
      'immediately',
      'end_of_term',
      'specific_date',
      'end_of_billing_term',
    ])
    .optional(),
  end_of_term: z.boolean().default(false).optional(),
  cancel_at: z.number().int().optional(),
  credit_option_for_current_term_charges: z
    .enum(['none', 'prorate', 'full'])
    .optional(),
  unbilled_charges_option: z.enum(['invoice', 'delete']).optional(),
  account_receivables_handling: z
    .enum(['no_action', 'schedule_payment_collection', 'write_off'])
    .optional(),
  refundable_credits_handling: z
    .enum(['no_action', 'schedule_refund'])
    .optional(),
  contract_term_cancel_option: z
    .enum([
      'terminate_immediately',
      'end_of_contract_term',
      'specific_date',
      'end_of_subscription_billing_term',
    ])
    .optional(),
  invoice_date: z.number().int().optional(),
  cancel_reason_code: z.string().max(100).optional(),
  decommissioned: z.boolean().default(false).optional(),
  subscription_items:
    CancelForItemsSubscriptionSubscriptionItemsSchema.optional(),
});
export { CancelForItemsSubscriptionBodySchema };
export type CancelForItemsSubscriptionBody = z.infer<
  typeof CancelForItemsSubscriptionBodySchema
>;

//Subscription.resume

const ResumeSubscriptionAdditionalInformationSchema = z.looseObject({});
const ResumeSubscriptionPaymentIntentSchema = z.object({
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
    ResumeSubscriptionAdditionalInformationSchema.optional(),
});
const ResumeSubscriptionBodySchema = z.looseObject({
  resume_option: z.enum(['immediately', 'specific_date']).optional(),
  resume_date: z.number().int().optional(),
  charges_handling: z
    .enum(['invoice_immediately', 'add_to_unbilled_charges'])
    .optional(),
  unpaid_invoices_handling: z
    .enum(['no_action', 'schedule_payment_collection'])
    .optional(),
  payment_initiator: z.enum(['customer', 'merchant']).optional(),
  payment_intent: ResumeSubscriptionPaymentIntentSchema.optional(),
});
export { ResumeSubscriptionBodySchema };
export type ResumeSubscriptionBody = z.infer<
  typeof ResumeSubscriptionBodySchema
>;

//Subscription.move

const MoveSubscriptionBodySchema = z.looseObject({
  to_customer_id: z.string().max(50),
  copy_payment_source: z.boolean().default(false).optional(),
});
export { MoveSubscriptionBodySchema };
export type MoveSubscriptionBody = z.infer<typeof MoveSubscriptionBodySchema>;
