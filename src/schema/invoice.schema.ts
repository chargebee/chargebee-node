// Generated Zod schemas: Invoice
// Actions: create, createForChargeItemsAndCharges, charge, chargeAddon, createForChargeItem, stopDunning, pauseDunning, resumeDunning, importInvoice, applyPayments, deleteLineItems, applyCredits, invoicesForCustomer, invoicesForSubscription, retrieve, pdf, addCharge, addAddonCharge, addChargeItem, close, collectPayment, recordPayment, recordTaxWithheld, removeTaxWithheld, refund, recordRefund, removePayment, removeCreditNote, voidInvoice, writeOff, delete, updateDetails, applyPaymentScheduleScheme
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//Invoice.create

const CreateInvoiceShippingAddressSchema = z.object({
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
const CreateInvoiceStatementDescriptorSchema = z.object({
  descriptor: z.string().max(65000).optional(),
});
const CreateInvoiceAdditionalInformationSchema = z.looseObject({});
const CreateInvoiceCardSchema = z.object({
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
  additional_information: CreateInvoiceAdditionalInformationSchema.optional(),
});
const CreateInvoiceBillingAddressSchema = z.looseObject({});
const CreateInvoiceBankAccountSchema = z.object({
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
  billing_address: CreateInvoiceBillingAddressSchema.optional(),
});
const CreateInvoicePaymentMethodSchema = z.object({
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
  additional_information: CreateInvoiceAdditionalInformationSchema.optional(),
});
const CreateInvoicePaymentIntentSchema = z.object({
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
  additional_information: CreateInvoiceAdditionalInformationSchema.optional(),
});
const CreateInvoiceAddonsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  date_from: z.array(z.number().int().optional()).optional(),
  date_to: z.array(z.number().int().optional()).optional(),
});
const CreateInvoiceChargesSchema = z.object({
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
const CreateInvoiceTaxProvidersFieldsSchema = z.object({
  provider_name: z.array(z.string().max(50).optional()).optional(),
  field_id: z.array(z.string().max(50).optional()).optional(),
  field_value: z.array(z.string().max(50).optional()).optional(),
});
const CreateInvoiceNotesToRemoveSchema = z.object({
  entity_type: z
    .array(
      z
        .enum(['plan', 'addon', 'customer', 'subscription', 'coupon'])
        .optional(),
    )
    .optional(),
  entity_id: z.array(z.string().max(100).optional()).optional(),
});
const CreateInvoiceBodySchema = z.looseObject({
  customer_id: z.string().max(50).optional(),
  subscription_id: z.string().max(50).optional(),
  currency_code: z.string().max(3).optional(),
  invoice_date: z.number().int().optional(),
  invoice_note: z.string().max(2000).optional(),
  remove_general_note: z.boolean().default(false).optional(),
  po_number: z.string().max(100).optional(),
  coupon: z.string().max(100).optional(),
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  authorization_transaction_id: z.string().max(40).optional(),
  payment_source_id: z.string().max(40).optional(),
  auto_collection: z.enum(['on', 'off']).optional(),
  token_id: z.string().max(40).optional(),
  replace_primary_payment_source: z.boolean().default(false).optional(),
  retain_payment_source: z.boolean().default(true).optional(),
  payment_initiator: z.enum(['customer', 'merchant']).optional(),
  shipping_address: CreateInvoiceShippingAddressSchema.optional(),
  statement_descriptor: CreateInvoiceStatementDescriptorSchema.optional(),
  card: CreateInvoiceCardSchema.optional(),
  bank_account: CreateInvoiceBankAccountSchema.optional(),
  payment_method: CreateInvoicePaymentMethodSchema.optional(),
  payment_intent: CreateInvoicePaymentIntentSchema.optional(),
  addons: CreateInvoiceAddonsSchema.optional(),
  charges: CreateInvoiceChargesSchema.optional(),
  tax_providers_fields: CreateInvoiceTaxProvidersFieldsSchema.optional(),
  notes_to_remove: CreateInvoiceNotesToRemoveSchema.optional(),
});
export { CreateInvoiceBodySchema };
export type CreateInvoiceBody = z.infer<typeof CreateInvoiceBodySchema>;

//Invoice.createForChargeItemsAndCharges

const CreateForChargeItemsAndChargesInvoiceShippingAddressSchema = z.object({
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
const CreateForChargeItemsAndChargesInvoiceStatementDescriptorSchema = z.object(
  {
    descriptor: z.string().max(65000).optional(),
  },
);
const CreateForChargeItemsAndChargesInvoiceAdditionalInformationSchema =
  z.looseObject({});
const CreateForChargeItemsAndChargesInvoiceCardSchema = z.object({
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
    CreateForChargeItemsAndChargesInvoiceAdditionalInformationSchema.optional(),
});
const CreateForChargeItemsAndChargesInvoiceBillingAddressSchema = z.looseObject(
  {},
);
const CreateForChargeItemsAndChargesInvoiceBankAccountSchema = z.object({
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
  billing_address:
    CreateForChargeItemsAndChargesInvoiceBillingAddressSchema.optional(),
});
const CreateForChargeItemsAndChargesInvoicePaymentMethodSchema = z.object({
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
    CreateForChargeItemsAndChargesInvoiceAdditionalInformationSchema.optional(),
});
const CreateForChargeItemsAndChargesInvoicePaymentIntentSchema = z.object({
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
    CreateForChargeItemsAndChargesInvoiceAdditionalInformationSchema.optional(),
});
const CreateForChargeItemsAndChargesInvoiceItemPricesSchema = z.object({
  item_price_id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  date_from: z.array(z.number().int().optional()).optional(),
  date_to: z.array(z.number().int().optional()).optional(),
});
const CreateForChargeItemsAndChargesInvoiceItemTiersSchema = z.object({
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
const CreateForChargeItemsAndChargesInvoiceChargesSchema = z.object({
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
const CreateForChargeItemsAndChargesInvoiceNotesToRemoveSchema = z.object({
  entity_type: z
    .array(
      z
        .enum([
          'customer',
          'subscription',
          'coupon',
          'plan_item_price',
          'addon_item_price',
          'charge_item_price',
        ])
        .optional(),
    )
    .optional(),
  entity_id: z.array(z.string().max(100).optional()).optional(),
});
const CreateForChargeItemsAndChargesInvoiceTaxProvidersFieldsSchema = z.object({
  provider_name: z.array(z.string().max(50).optional()).optional(),
  field_id: z.array(z.string().max(50).optional()).optional(),
  field_value: z.array(z.string().max(50).optional()).optional(),
});
const CreateForChargeItemsAndChargesInvoiceDiscountsSchema = z.object({
  percentage: z.array(z.number().min(0.01).max(100).optional()).optional(),
  amount: z.array(z.number().int().min(0).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  apply_on: z.array(
    z.enum(['invoice_amount', 'specific_item_price']).optional(),
  ),
  item_price_id: z.array(z.string().max(100).optional()).optional(),
});
const CreateForChargeItemsAndChargesInvoiceBodySchema = z.looseObject({
  customer_id: z.string().max(50).optional(),
  subscription_id: z.string().max(50).optional(),
  currency_code: z.string().max(3).optional(),
  invoice_note: z.string().max(2000).optional(),
  remove_general_note: z.boolean().default(false).optional(),
  po_number: z.string().max(100).optional(),
  coupon: z.string().max(100).optional(),
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  authorization_transaction_id: z.string().max(40).optional(),
  payment_source_id: z.string().max(40).optional(),
  auto_collection: z.enum(['on', 'off']).optional(),
  net_term_days: z.number().int().optional(),
  invoice_date: z.number().int().optional(),
  token_id: z.string().max(40).optional(),
  replace_primary_payment_source: z.boolean().default(false).optional(),
  retain_payment_source: z.boolean().default(true).optional(),
  payment_initiator: z.enum(['customer', 'merchant']).optional(),
  shipping_address:
    CreateForChargeItemsAndChargesInvoiceShippingAddressSchema.optional(),
  statement_descriptor:
    CreateForChargeItemsAndChargesInvoiceStatementDescriptorSchema.optional(),
  card: CreateForChargeItemsAndChargesInvoiceCardSchema.optional(),
  bank_account:
    CreateForChargeItemsAndChargesInvoiceBankAccountSchema.optional(),
  payment_method:
    CreateForChargeItemsAndChargesInvoicePaymentMethodSchema.optional(),
  payment_intent:
    CreateForChargeItemsAndChargesInvoicePaymentIntentSchema.optional(),
  item_prices: CreateForChargeItemsAndChargesInvoiceItemPricesSchema.optional(),
  item_tiers: CreateForChargeItemsAndChargesInvoiceItemTiersSchema.optional(),
  charges: CreateForChargeItemsAndChargesInvoiceChargesSchema.optional(),
  notes_to_remove:
    CreateForChargeItemsAndChargesInvoiceNotesToRemoveSchema.optional(),
  tax_providers_fields:
    CreateForChargeItemsAndChargesInvoiceTaxProvidersFieldsSchema.optional(),
  discounts: CreateForChargeItemsAndChargesInvoiceDiscountsSchema.optional(),
});
export { CreateForChargeItemsAndChargesInvoiceBodySchema };
export type CreateForChargeItemsAndChargesInvoiceBody = z.infer<
  typeof CreateForChargeItemsAndChargesInvoiceBodySchema
>;

//Invoice.charge

const ChargeInvoiceTaxProvidersFieldsSchema = z.object({
  provider_name: z.array(z.string().max(50).optional()).optional(),
  field_id: z.array(z.string().max(50).optional()).optional(),
  field_value: z.array(z.string().max(50).optional()).optional(),
});
const ChargeInvoiceBodySchema = z.looseObject({
  customer_id: z.string().max(50).optional(),
  subscription_id: z.string().max(50).optional(),
  currency_code: z.string().max(3).optional(),
  amount: z.number().int().min(1).optional(),
  amount_in_decimal: z.string().max(39).optional(),
  description: z.string().max(250),
  date_from: z.number().int().optional(),
  date_to: z.number().int().optional(),
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  coupon: z.string().max(100).optional(),
  avalara_sale_type: z
    .enum(['wholesale', 'retail', 'consumed', 'vendor_use'])
    .optional(),
  avalara_transaction_type: z.number().int().optional(),
  avalara_service_type: z.number().int().optional(),
  po_number: z.string().max(100).optional(),
  invoice_date: z.number().int().optional(),
  payment_source_id: z.string().max(40).optional(),
  payment_initiator: z.enum(['customer', 'merchant']).optional(),
  tax_providers_fields: ChargeInvoiceTaxProvidersFieldsSchema.optional(),
});
export { ChargeInvoiceBodySchema };
export type ChargeInvoiceBody = z.infer<typeof ChargeInvoiceBodySchema>;

//Invoice.chargeAddon

const ChargeAddonInvoiceBodySchema = z.looseObject({
  customer_id: z.string().max(50).optional(),
  subscription_id: z.string().max(50).optional(),
  addon_id: z.string().max(100),
  addon_quantity: z.number().int().min(1).optional(),
  addon_unit_price: z.number().int().min(0).optional(),
  addon_quantity_in_decimal: z.string().max(33).optional(),
  addon_unit_price_in_decimal: z.string().max(39).optional(),
  date_from: z.number().int().optional(),
  date_to: z.number().int().optional(),
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  coupon: z.string().max(100).optional(),
  po_number: z.string().max(100).optional(),
  invoice_date: z.number().int().optional(),
  payment_source_id: z.string().max(40).optional(),
  payment_initiator: z.enum(['customer', 'merchant']).optional(),
});
export { ChargeAddonInvoiceBodySchema };
export type ChargeAddonInvoiceBody = z.infer<
  typeof ChargeAddonInvoiceBodySchema
>;

//Invoice.createForChargeItem

const CreateForChargeItemInvoiceItemPriceSchema = z.object({
  item_price_id: z.string().max(100),
  quantity: z.number().int().min(1).optional(),
  quantity_in_decimal: z.string().max(33).optional(),
  unit_price: z.number().int().min(0).optional(),
  unit_price_in_decimal: z.string().max(39).optional(),
  date_from: z.number().int().optional(),
  date_to: z.number().int().optional(),
});
const CreateForChargeItemInvoiceItemTiersSchema = z.object({
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
const CreateForChargeItemInvoiceBodySchema = z.looseObject({
  customer_id: z.string().max(50).optional(),
  subscription_id: z.string().max(50).optional(),
  po_number: z.string().max(100).optional(),
  coupon: z.string().max(100).optional(),
  payment_source_id: z.string().max(40).optional(),
  payment_initiator: z.enum(['customer', 'merchant']).optional(),
  invoice_date: z.number().int().optional(),
  item_price: CreateForChargeItemInvoiceItemPriceSchema.optional(),
  item_tiers: CreateForChargeItemInvoiceItemTiersSchema.optional(),
});
export { CreateForChargeItemInvoiceBodySchema };
export type CreateForChargeItemInvoiceBody = z.infer<
  typeof CreateForChargeItemInvoiceBodySchema
>;

//Invoice.stopDunning

const StopDunningInvoiceBodySchema = z.looseObject({
  comment: z.string().max(300).optional(),
});
export { StopDunningInvoiceBodySchema };
export type StopDunningInvoiceBody = z.infer<
  typeof StopDunningInvoiceBodySchema
>;

//Invoice.pauseDunning

const PauseDunningInvoiceBodySchema = z.looseObject({
  expected_payment_date: z.number().int(),
  comment: z.string().max(300).optional(),
});
export { PauseDunningInvoiceBodySchema };
export type PauseDunningInvoiceBody = z.infer<
  typeof PauseDunningInvoiceBodySchema
>;

//Invoice.resumeDunning

const ResumeDunningInvoiceBodySchema = z.looseObject({
  comment: z.string().max(300).optional(),
});
export { ResumeDunningInvoiceBodySchema };
export type ResumeDunningInvoiceBody = z.infer<
  typeof ResumeDunningInvoiceBodySchema
>;

//Invoice.importInvoice

const ImportInvoiceInvoiceCreditNoteSchema = z.object({
  id: z.string().max(50).optional(),
});
const ImportInvoiceInvoiceBillingAddressSchema = z.object({
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
const ImportInvoiceInvoiceShippingAddressSchema = z.object({
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
const ImportInvoiceInvoiceLineItemsSchema = z.object({
  id: z.array(z.string().max(40).optional()).optional(),
  date_from: z.array(z.number().int().optional()).optional(),
  date_to: z.array(z.number().int().optional()).optional(),
  subscription_id: z.array(z.string().max(50).optional()).optional(),
  description: z.array(z.string().max(250).optional()),
  unit_amount: z.array(z.number().int().optional()).optional(),
  quantity: z.array(z.number().int().optional()).optional(),
  amount: z.array(z.number().int().optional()).optional(),
  unit_amount_in_decimal: z.array(z.string().max(39).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  amount_in_decimal: z.array(z.string().max(39).optional()).optional(),
  entity_type: z
    .array(
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
    )
    .optional(),
  entity_id: z.array(z.string().max(100).optional()).optional(),
  item_level_discount1_entity_id: z
    .array(z.string().max(100).optional())
    .optional(),
  item_level_discount1_amount: z
    .array(z.number().int().min(0).optional())
    .optional(),
  item_level_discount2_entity_id: z
    .array(z.string().max(100).optional())
    .optional(),
  item_level_discount2_amount: z
    .array(z.number().int().min(0).optional())
    .optional(),
  tax1_name: z.array(z.string().max(50).optional()).optional(),
  tax1_amount: z.array(z.number().int().min(0).optional()).optional(),
  tax2_name: z.array(z.string().max(50).optional()).optional(),
  tax2_amount: z.array(z.number().int().min(0).optional()).optional(),
  tax3_name: z.array(z.string().max(50).optional()).optional(),
  tax3_amount: z.array(z.number().int().min(0).optional()).optional(),
  tax4_name: z.array(z.string().max(50).optional()).optional(),
  tax4_amount: z.array(z.number().int().min(0).optional()).optional(),
  tax5_name: z.array(z.string().max(50).optional()).optional(),
  tax5_amount: z.array(z.number().int().min(0).optional()).optional(),
  tax6_name: z.array(z.string().max(50).optional()).optional(),
  tax6_amount: z.array(z.number().int().min(0).optional()).optional(),
  tax7_name: z.array(z.string().max(50).optional()).optional(),
  tax7_amount: z.array(z.number().int().min(0).optional()).optional(),
  tax8_name: z.array(z.string().max(50).optional()).optional(),
  tax8_amount: z.array(z.number().int().min(0).optional()).optional(),
  tax9_name: z.array(z.string().max(50).optional()).optional(),
  tax9_amount: z.array(z.number().int().min(0).optional()).optional(),
  tax10_name: z.array(z.string().max(50).optional()).optional(),
  tax10_amount: z.array(z.number().int().min(0).optional()).optional(),
  created_at: z.array(z.number().int().optional()).optional(),
});
const ImportInvoiceInvoicePaymentReferenceNumbersSchema = z.object({
  id: z.array(z.string().max(40).optional()).optional(),
  type: z.array(
    z.enum(['kid', 'ocr', 'frn', 'fik', 'swiss_reference']).optional(),
  ),
  number: z.array(z.string().max(100).optional()),
});
const ImportInvoiceInvoiceLineItemTiersSchema = z.object({
  line_item_id: z.array(z.string().max(40).optional()),
  starting_unit: z.array(z.number().int().min(0).optional()).optional(),
  ending_unit: z.array(z.number().int().optional()).optional(),
  quantity_used: z.array(z.number().int().min(0).optional()).optional(),
  unit_amount: z.array(z.number().int().min(0).optional()).optional(),
  starting_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  ending_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  quantity_used_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_amount_in_decimal: z.array(z.string().max(40).optional()).optional(),
});
const ImportInvoiceInvoiceDiscountsSchema = z.object({
  line_item_id: z.array(z.string().max(40).optional()).optional(),
  entity_type: z.array(
    z
      .enum([
        'item_level_coupon',
        'document_level_coupon',
        'promotional_credits',
        'item_level_discount',
        'document_level_discount',
      ])
      .optional(),
  ),
  entity_id: z.array(z.string().max(100).optional()).optional(),
  description: z.array(z.string().max(250).optional()).optional(),
  amount: z.array(z.number().int().min(0).optional()),
});
const ImportInvoiceInvoiceTaxesSchema = z.object({
  name: z.array(z.string().max(100).optional()),
  rate: z.array(z.number().min(0).max(100).optional()),
  amount: z.array(z.number().int().min(0).optional()).optional(),
  description: z.array(z.string().max(50).optional()).optional(),
  juris_type: z
    .array(
      z
        .enum([
          'country',
          'federal',
          'state',
          'county',
          'city',
          'special',
          'unincorporated',
          'other',
        ])
        .optional(),
    )
    .optional(),
  juris_name: z.array(z.string().max(250).optional()).optional(),
  juris_code: z.array(z.string().max(250).optional()).optional(),
});
const ImportInvoiceInvoicePaymentsSchema = z.object({
  id: z.array(z.string().max(40).optional()).optional(),
  amount: z.array(z.number().int().min(1).optional()),
  payment_method: z.array(
    z
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
  ),
  date: z.array(z.number().int().optional()).optional(),
  reference_number: z.array(z.string().max(100).min(1).optional()).optional(),
});
const ImportInvoiceInvoiceNotesSchema = z.object({
  entity_type: z
    .array(
      z
        .enum([
          'coupon',
          'plan_item_price',
          'addon_item_price',
          'charge_item_price',
          'plan',
          'addon',
        ])
        .optional(),
    )
    .optional(),
  entity_id: z.array(z.string().max(50).optional()).optional(),
  note: z.array(z.string().max(65000).optional()).optional(),
});
const ImportInvoiceInvoiceLineItemAddressesSchema = z.object({
  line_item_id: z.array(z.string().max(40).optional()).optional(),
  first_name: z.array(z.string().max(150).optional()).optional(),
  last_name: z.array(z.string().max(150).optional()).optional(),
  email: z.array(z.string().email().max(70).optional()).optional(),
  company: z.array(z.string().max(250).optional()).optional(),
  phone: z.array(z.string().max(50).optional()).optional(),
  line1: z.array(z.string().max(150).optional()).optional(),
  line2: z.array(z.string().max(150).optional()).optional(),
  line3: z.array(z.string().max(150).optional()).optional(),
  city: z.array(z.string().max(50).optional()).optional(),
  state_code: z.array(z.string().max(50).optional()).optional(),
  state: z.array(z.string().max(50).optional()).optional(),
  zip: z.array(z.string().max(20).optional()).optional(),
  country: z.array(z.string().max(50).optional()).optional(),
  validation_status: z
    .array(
      z
        .enum(['not_validated', 'valid', 'partially_valid', 'invalid'])
        .optional(),
    )
    .optional(),
});
const ImportInvoiceInvoiceBodySchema = z.looseObject({
  id: z.string().max(50),
  currency_code: z.string().max(3).optional(),
  customer_id: z.string().max(50).optional(),
  subscription_id: z.string().max(50).optional(),
  po_number: z.string().max(100).optional(),
  price_type: z.enum(['tax_exclusive', 'tax_inclusive']).optional(),
  tax_override_reason: z
    .enum(['id_exempt', 'customer_exempt', 'export'])
    .optional(),
  vat_number: z.string().max(20).optional(),
  vat_number_prefix: z.string().max(10).optional(),
  date: z.number().int(),
  total: z.number().int().min(0),
  round_off: z.number().int().min(-99).max(99).optional(),
  status: z
    .enum(['paid', 'posted', 'payment_due', 'not_paid', 'voided', 'pending'])
    .optional(),
  voided_at: z.number().int().optional(),
  void_reason_code: z.string().max(100).optional(),
  is_written_off: z.boolean().default(false).optional(),
  write_off_amount: z.number().int().min(0).optional(),
  write_off_date: z.number().int().optional(),
  due_date: z.number().int().optional(),
  net_term_days: z.number().int().optional(),
  has_advance_charges: z.boolean().default(false).optional(),
  use_for_proration: z.boolean().default(false).optional(),
  credit_note: ImportInvoiceInvoiceCreditNoteSchema.optional(),
  billing_address: ImportInvoiceInvoiceBillingAddressSchema.optional(),
  shipping_address: ImportInvoiceInvoiceShippingAddressSchema.optional(),
  line_items: ImportInvoiceInvoiceLineItemsSchema.optional(),
  payment_reference_numbers:
    ImportInvoiceInvoicePaymentReferenceNumbersSchema.optional(),
  line_item_tiers: ImportInvoiceInvoiceLineItemTiersSchema.optional(),
  discounts: ImportInvoiceInvoiceDiscountsSchema.optional(),
  taxes: ImportInvoiceInvoiceTaxesSchema.optional(),
  payments: ImportInvoiceInvoicePaymentsSchema.optional(),
  notes: ImportInvoiceInvoiceNotesSchema.optional(),
  line_item_addresses: ImportInvoiceInvoiceLineItemAddressesSchema.optional(),
});
export { ImportInvoiceInvoiceBodySchema };
export type ImportInvoiceInvoiceBody = z.infer<
  typeof ImportInvoiceInvoiceBodySchema
>;

//Invoice.applyPayments

const ApplyPaymentsInvoiceTransactionsSchema = z.object({
  id: z.array(z.string().max(40).optional()).optional(),
  amount: z.array(z.number().int().min(0).optional()).optional(),
});
const ApplyPaymentsInvoiceBodySchema = z.looseObject({
  comment: z.string().max(300).optional(),
  transactions: ApplyPaymentsInvoiceTransactionsSchema.optional(),
});
export { ApplyPaymentsInvoiceBodySchema };
export type ApplyPaymentsInvoiceBody = z.infer<
  typeof ApplyPaymentsInvoiceBodySchema
>;

//Invoice.deleteLineItems

const DeleteLineItemsInvoiceLineItemsSchema = z.object({
  id: z.array(z.string().max(40).optional()).optional(),
});
const DeleteLineItemsInvoiceBodySchema = z.looseObject({
  line_items: DeleteLineItemsInvoiceLineItemsSchema.optional(),
});
export { DeleteLineItemsInvoiceBodySchema };
export type DeleteLineItemsInvoiceBody = z.infer<
  typeof DeleteLineItemsInvoiceBodySchema
>;

//Invoice.applyCredits

const ApplyCreditsInvoiceCreditNotesSchema = z.object({
  id: z.array(z.string().max(50).optional()).optional(),
});
const ApplyCreditsInvoiceBodySchema = z.looseObject({
  comment: z.string().max(300).optional(),
  credit_notes: ApplyCreditsInvoiceCreditNotesSchema.optional(),
});
export { ApplyCreditsInvoiceBodySchema };
export type ApplyCreditsInvoiceBody = z.infer<
  typeof ApplyCreditsInvoiceBodySchema
>;

//Invoice.invoicesForCustomer

const InvoicesForCustomerInvoiceBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
});
export { InvoicesForCustomerInvoiceBodySchema };
export type InvoicesForCustomerInvoiceBody = z.infer<
  typeof InvoicesForCustomerInvoiceBodySchema
>;

//Invoice.invoicesForSubscription

const InvoicesForSubscriptionInvoiceBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
});
export { InvoicesForSubscriptionInvoiceBodySchema };
export type InvoicesForSubscriptionInvoiceBody = z.infer<
  typeof InvoicesForSubscriptionInvoiceBodySchema
>;

//Invoice.retrieve

const RetrieveInvoiceSubscriptionIdSchema = z.object({
  is: z.string().min(1).optional(),
});
const RetrieveInvoiceCustomerIdSchema = z.object({
  is: z.string().min(1).optional(),
});
const RetrieveInvoiceLineItemSchema = z.object({
  subscription_id: RetrieveInvoiceSubscriptionIdSchema.optional(),
  customer_id: RetrieveInvoiceCustomerIdSchema.optional(),
});
const RetrieveInvoiceBodySchema = z.looseObject({
  line_items_limit: z.number().int().min(1).max(300).optional(),
  line_items_offset: z.string().max(1000).optional(),
  line_item: RetrieveInvoiceLineItemSchema.optional(),
});
export { RetrieveInvoiceBodySchema };
export type RetrieveInvoiceBody = z.infer<typeof RetrieveInvoiceBodySchema>;

//Invoice.pdf

const PdfInvoiceBodySchema = z.looseObject({
  disposition_type: z.enum(['attachment', 'inline']).optional(),
});
export { PdfInvoiceBodySchema };
export type PdfInvoiceBody = z.infer<typeof PdfInvoiceBodySchema>;

//Invoice.addCharge

const AddChargeInvoiceLineItemSchema = z.object({
  date_from: z.number().int().optional(),
  date_to: z.number().int().optional(),
});
const AddChargeInvoiceBodySchema = z.looseObject({
  amount: z.number().int().min(1),
  description: z.string().max(250),
  avalara_sale_type: z
    .enum(['wholesale', 'retail', 'consumed', 'vendor_use'])
    .optional(),
  avalara_transaction_type: z.number().int().optional(),
  avalara_service_type: z.number().int().optional(),
  avalara_tax_code: z.string().max(50).optional(),
  hsn_code: z.string().max(50).optional(),
  taxjar_product_code: z.string().max(50).optional(),
  comment: z.string().max(300).optional(),
  subscription_id: z.string().max(50).optional(),
  line_item: AddChargeInvoiceLineItemSchema.optional(),
});
export { AddChargeInvoiceBodySchema };
export type AddChargeInvoiceBody = z.infer<typeof AddChargeInvoiceBodySchema>;

//Invoice.addAddonCharge

const AddAddonChargeInvoiceLineItemSchema = z.object({
  date_from: z.number().int().optional(),
  date_to: z.number().int().optional(),
});
const AddAddonChargeInvoiceBodySchema = z.looseObject({
  addon_id: z.string().max(100),
  addon_quantity: z.number().int().min(1).optional(),
  addon_unit_price: z.number().int().min(0).optional(),
  addon_quantity_in_decimal: z.string().max(33).optional(),
  addon_unit_price_in_decimal: z.string().max(39).optional(),
  comment: z.string().max(300).optional(),
  subscription_id: z.string().max(50).optional(),
  line_item: AddAddonChargeInvoiceLineItemSchema.optional(),
});
export { AddAddonChargeInvoiceBodySchema };
export type AddAddonChargeInvoiceBody = z.infer<
  typeof AddAddonChargeInvoiceBodySchema
>;

//Invoice.addChargeItem

const AddChargeItemInvoiceItemPriceSchema = z.object({
  item_price_id: z.string().max(100),
  quantity: z.number().int().min(1).optional(),
  quantity_in_decimal: z.string().max(33).optional(),
  unit_price: z.number().int().min(0).optional(),
  unit_price_in_decimal: z.string().max(39).optional(),
  date_from: z.number().int().optional(),
  date_to: z.number().int().optional(),
});
const AddChargeItemInvoiceItemTiersSchema = z.object({
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
const AddChargeItemInvoiceBodySchema = z.looseObject({
  comment: z.string().max(300).optional(),
  subscription_id: z.string().max(50).optional(),
  item_price: AddChargeItemInvoiceItemPriceSchema.optional(),
  item_tiers: AddChargeItemInvoiceItemTiersSchema.optional(),
});
export { AddChargeItemInvoiceBodySchema };
export type AddChargeItemInvoiceBody = z.infer<
  typeof AddChargeItemInvoiceBodySchema
>;

//Invoice.close

const CloseInvoiceNotesToRemoveSchema = z.object({
  entity_type: z
    .array(
      z
        .enum([
          'customer',
          'subscription',
          'coupon',
          'plan_item_price',
          'addon_item_price',
          'charge_item_price',
          'plan',
          'addon',
        ])
        .optional(),
    )
    .optional(),
  entity_id: z.array(z.string().max(100).optional()).optional(),
});
const CloseInvoiceBodySchema = z.looseObject({
  comment: z.string().max(300).optional(),
  invoice_note: z.string().max(2000).optional(),
  remove_general_note: z.boolean().default(false).optional(),
  invoice_date: z.number().int().optional(),
  notes_to_remove: CloseInvoiceNotesToRemoveSchema.optional(),
});
export { CloseInvoiceBodySchema };
export type CloseInvoiceBody = z.infer<typeof CloseInvoiceBodySchema>;

//Invoice.collectPayment

const CollectPaymentInvoiceBodySchema = z.looseObject({
  amount: z.number().int().min(1).optional(),
  authorization_transaction_id: z.string().max(40).optional(),
  payment_source_id: z.string().max(40).optional(),
  comment: z.string().max(300).optional(),
  payment_initiator: z.enum(['customer', 'merchant']).optional(),
});
export { CollectPaymentInvoiceBodySchema };
export type CollectPaymentInvoiceBody = z.infer<
  typeof CollectPaymentInvoiceBodySchema
>;

//Invoice.recordPayment

const RecordPaymentInvoiceTransactionSchema = z.object({
  amount: z.number().int().min(0).optional(),
  payment_method: z.enum([
    'cash',
    'check',
    'bank_transfer',
    'other',
    'app_store',
    'play_store',
    'custom',
  ]),
  reference_number: z.string().max(100).optional(),
  custom_payment_method_id: z.string().max(50).optional(),
  id_at_gateway: z.string().max(100).optional(),
  status: z.enum(['success', 'failure', 'late_failure']).optional(),
  date: z.number().int().optional(),
  error_code: z.string().max(100).optional(),
  error_text: z.string().max(65000).optional(),
});
const RecordPaymentInvoiceBodySchema = z.looseObject({
  comment: z.string().max(300).optional(),
  transaction: RecordPaymentInvoiceTransactionSchema.optional(),
});
export { RecordPaymentInvoiceBodySchema };
export type RecordPaymentInvoiceBody = z.infer<
  typeof RecordPaymentInvoiceBodySchema
>;

//Invoice.recordTaxWithheld

const RecordTaxWithheldInvoiceTaxWithheldSchema = z.object({
  amount: z.number().int().min(1),
  reference_number: z.string().max(100).optional(),
  date: z.number().int().optional(),
  description: z.string().max(65000).optional(),
});
const RecordTaxWithheldInvoiceBodySchema = z.looseObject({
  tax_withheld: RecordTaxWithheldInvoiceTaxWithheldSchema.optional(),
});
export { RecordTaxWithheldInvoiceBodySchema };
export type RecordTaxWithheldInvoiceBody = z.infer<
  typeof RecordTaxWithheldInvoiceBodySchema
>;

//Invoice.removeTaxWithheld

const RemoveTaxWithheldInvoiceTaxWithheldSchema = z.object({
  id: z.string().max(40),
});
const RemoveTaxWithheldInvoiceBodySchema = z.looseObject({
  tax_withheld: RemoveTaxWithheldInvoiceTaxWithheldSchema.optional(),
});
export { RemoveTaxWithheldInvoiceBodySchema };
export type RemoveTaxWithheldInvoiceBody = z.infer<
  typeof RemoveTaxWithheldInvoiceBodySchema
>;

//Invoice.refund

const RefundInvoiceCreditNoteSchema = z.object({
  reason_code: z
    .enum([
      'product_unsatisfactory',
      'service_unsatisfactory',
      'order_change',
      'order_cancellation',
      'waiver',
      'other',
    ])
    .optional(),
  create_reason_code: z.string().max(100).optional(),
});
const RefundInvoiceBodySchema = z.looseObject({
  refund_amount: z.number().int().min(1).optional(),
  comment: z.string().max(300).optional(),
  customer_notes: z.string().max(2000).optional(),
  credit_note: RefundInvoiceCreditNoteSchema.optional(),
});
export { RefundInvoiceBodySchema };
export type RefundInvoiceBody = z.infer<typeof RefundInvoiceBodySchema>;

//Invoice.recordRefund

const RecordRefundInvoiceTransactionSchema = z.object({
  amount: z.number().int().min(0).optional(),
  payment_method: z.enum([
    'cash',
    'check',
    'chargeback',
    'bank_transfer',
    'other',
    'app_store',
    'play_store',
    'custom',
  ]),
  reference_number: z.string().max(100).optional(),
  custom_payment_method_id: z.string().max(50).optional(),
  date: z.number().int(),
});
const RecordRefundInvoiceCreditNoteSchema = z.object({
  reason_code: z
    .enum([
      'chargeback',
      'product_unsatisfactory',
      'service_unsatisfactory',
      'order_change',
      'order_cancellation',
      'waiver',
      'other',
    ])
    .optional(),
  create_reason_code: z.string().max(100).optional(),
});
const RecordRefundInvoiceBodySchema = z.looseObject({
  comment: z.string().max(65000).optional(),
  customer_notes: z.string().max(2000).optional(),
  transaction: RecordRefundInvoiceTransactionSchema.optional(),
  credit_note: RecordRefundInvoiceCreditNoteSchema.optional(),
});
export { RecordRefundInvoiceBodySchema };
export type RecordRefundInvoiceBody = z.infer<
  typeof RecordRefundInvoiceBodySchema
>;

//Invoice.removePayment

const RemovePaymentInvoiceTransactionSchema = z.object({
  id: z.string().max(40),
});
const RemovePaymentInvoiceBodySchema = z.looseObject({
  transaction: RemovePaymentInvoiceTransactionSchema.optional(),
});
export { RemovePaymentInvoiceBodySchema };
export type RemovePaymentInvoiceBody = z.infer<
  typeof RemovePaymentInvoiceBodySchema
>;

//Invoice.removeCreditNote

const RemoveCreditNoteInvoiceCreditNoteSchema = z.object({
  id: z.string().max(50),
});
const RemoveCreditNoteInvoiceBodySchema = z.looseObject({
  credit_note: RemoveCreditNoteInvoiceCreditNoteSchema.optional(),
});
export { RemoveCreditNoteInvoiceBodySchema };
export type RemoveCreditNoteInvoiceBody = z.infer<
  typeof RemoveCreditNoteInvoiceBodySchema
>;

//Invoice.voidInvoice

const VoidInvoiceInvoiceBodySchema = z.looseObject({
  comment: z.string().max(300).optional(),
  void_reason_code: z.string().max(100).optional(),
});
export { VoidInvoiceInvoiceBodySchema };
export type VoidInvoiceInvoiceBody = z.infer<
  typeof VoidInvoiceInvoiceBodySchema
>;

//Invoice.writeOff

const WriteOffInvoiceBodySchema = z.looseObject({
  comment: z.string().max(300).optional(),
});
export { WriteOffInvoiceBodySchema };
export type WriteOffInvoiceBody = z.infer<typeof WriteOffInvoiceBodySchema>;

//Invoice.delete

const DeleteInvoiceBodySchema = z.looseObject({
  comment: z.string().max(300).optional(),
});
export { DeleteInvoiceBodySchema };
export type DeleteInvoiceBody = z.infer<typeof DeleteInvoiceBodySchema>;

//Invoice.updateDetails

const UpdateDetailsInvoiceBillingAddressSchema = z.object({
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
const UpdateDetailsInvoiceShippingAddressSchema = z.object({
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
const UpdateDetailsInvoiceStatementDescriptorSchema = z.object({
  descriptor: z.string().max(65000).optional(),
});
const UpdateDetailsInvoiceBodySchema = z.looseObject({
  vat_number: z.string().max(20).optional(),
  vat_number_prefix: z.string().max(10).optional(),
  po_number: z.string().max(100).optional(),
  comment: z.string().max(300).optional(),
  billing_address: UpdateDetailsInvoiceBillingAddressSchema.optional(),
  shipping_address: UpdateDetailsInvoiceShippingAddressSchema.optional(),
  statement_descriptor:
    UpdateDetailsInvoiceStatementDescriptorSchema.optional(),
});
export { UpdateDetailsInvoiceBodySchema };
export type UpdateDetailsInvoiceBody = z.infer<
  typeof UpdateDetailsInvoiceBodySchema
>;

//Invoice.applyPaymentScheduleScheme

const ApplyPaymentScheduleSchemeInvoiceBodySchema = z.looseObject({
  scheme_id: z.string(),
  amount: z.number().int().min(0).optional(),
});
export { ApplyPaymentScheduleSchemeInvoiceBodySchema };
export type ApplyPaymentScheduleSchemeInvoiceBody = z.infer<
  typeof ApplyPaymentScheduleSchemeInvoiceBodySchema
>;
