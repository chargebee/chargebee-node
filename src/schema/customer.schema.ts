// Generated Zod schemas: Customer
// Actions: create, update, updatePaymentMethod, updateBillingInfo, contactsForCustomer, assignPaymentRole, addContact, updateContact, deleteContact, addPromotionalCredits, deductPromotionalCredits, setPromotionalCredits, recordExcessPayment, collectPayment, delete, move, changeBillingDate, merge, relationships, hierarchy, listHierarchyDetail, updateHierarchySettings
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//Customer.create

const CreateCustomerMetaDataSchema = z.looseObject({});
const CreateCustomerAdditionalInformationSchema = z.looseObject({});
const CreateCustomerCardSchema = z.object({
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
  additional_information: CreateCustomerAdditionalInformationSchema.optional(),
});
const CreateCustomerBillingAddressSchema = z.looseObject({});
const CreateCustomerBankAccountSchema = z.object({
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
  billing_address: CreateCustomerBillingAddressSchema.optional(),
});
const CreateCustomerPaymentMethodSchema = z.object({
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
  additional_information: CreateCustomerAdditionalInformationSchema.optional(),
});
const CreateCustomerPaymentIntentSchema = z.object({
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
  additional_information: CreateCustomerAdditionalInformationSchema.optional(),
});
const CreateCustomerEntityIdentifiersSchema = z.object({
  id: z.array(z.string().max(40).optional()).optional(),
  scheme: z.array(z.string().max(50).optional()).optional(),
  value: z.array(z.string().max(50).optional()).optional(),
  standard: z.array(z.string().max(50).optional()).optional(),
});
const CreateCustomerTaxProvidersFieldsSchema = z.object({
  provider_name: z.array(z.string().max(50).optional()).optional(),
  field_id: z.array(z.string().max(50).optional()).optional(),
  field_value: z.array(z.string().max(50).optional()).optional(),
});
const CreateCustomerBodySchema = z.looseObject({
  id: z.string().max(50).optional(),
  first_name: z.string().max(150).optional(),
  last_name: z.string().max(150).optional(),
  email: z.string().email().max(70).optional(),
  preferred_currency_code: z.string().max(3).optional(),
  phone: z.string().max(50).optional(),
  company: z.string().max(250).optional(),
  auto_collection: z.enum(['on', 'off']).optional(),
  net_term_days: z.number().int().optional(),
  allow_direct_debit: z.boolean().default(false).optional(),
  vat_number: z.string().max(20).optional(),
  vat_number_prefix: z.string().max(10).optional(),
  entity_identifier_scheme: z.string().max(50).optional(),
  entity_identifier_standard: z.string().max(50).optional(),
  registered_for_gst: z.boolean().optional(),
  is_einvoice_enabled: z.boolean().optional(),
  einvoicing_method: z.enum(['automatic', 'manual', 'site_default']).optional(),
  taxability: z.enum(['taxable', 'exempt']).optional(),
  exemption_details: z.array(z.string().optional()).optional(),
  customer_type: z
    .enum(['residential', 'business', 'senior_citizen', 'industrial'])
    .optional(),
  client_profile_id: z.string().max(50).optional(),
  taxjar_exemption_category: z
    .enum(['wholesale', 'government', 'other'])
    .optional(),
  business_customer_without_vat_number: z.boolean().optional(),
  locale: z.string().max(50).optional(),
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
  meta_data: CreateCustomerMetaDataSchema.optional(),
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
  auto_close_invoices: z.boolean().optional(),
  consolidated_invoicing: z.boolean().optional(),
  token_id: z.string().max(40).optional(),
  business_entity_id: z.string().max(50).optional(),
  created_from_ip: z.string().max(50).optional(),
  invoice_notes: z.string().max(2000).optional(),
  card: CreateCustomerCardSchema.optional(),
  bank_account: CreateCustomerBankAccountSchema.optional(),
  payment_method: CreateCustomerPaymentMethodSchema.optional(),
  payment_intent: CreateCustomerPaymentIntentSchema.optional(),
  billing_address: CreateCustomerBillingAddressSchema.optional(),
  entity_identifiers: CreateCustomerEntityIdentifiersSchema.optional(),
  tax_providers_fields: CreateCustomerTaxProvidersFieldsSchema.optional(),
});
export { CreateCustomerBodySchema };
export type CreateCustomerBody = z.infer<typeof CreateCustomerBodySchema>;

//Customer.update

const UpdateCustomerMetaDataSchema = z.looseObject({});
const UpdateCustomerTaxProvidersFieldsSchema = z.object({
  provider_name: z.array(z.string().max(50).optional()).optional(),
  field_id: z.array(z.string().max(50).optional()).optional(),
  field_value: z.array(z.string().max(50).optional()).optional(),
});
const UpdateCustomerBodySchema = z.looseObject({
  first_name: z.string().max(150).optional(),
  last_name: z.string().max(150).optional(),
  email: z.string().email().max(70).optional(),
  preferred_currency_code: z.string().max(3).optional(),
  phone: z.string().max(50).optional(),
  company: z.string().max(250).optional(),
  auto_collection: z.enum(['on', 'off']).optional(),
  allow_direct_debit: z.boolean().default(false).optional(),
  net_term_days: z.number().int().optional(),
  taxability: z.enum(['taxable', 'exempt']).optional(),
  exemption_details: z.array(z.string().optional()).optional(),
  customer_type: z
    .enum(['residential', 'business', 'senior_citizen', 'industrial'])
    .optional(),
  client_profile_id: z.string().max(50).optional(),
  taxjar_exemption_category: z
    .enum(['wholesale', 'government', 'other'])
    .optional(),
  locale: z.string().max(50).optional(),
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
  auto_close_invoices: z.boolean().optional(),
  meta_data: UpdateCustomerMetaDataSchema.optional(),
  fraud_flag: z.enum(['safe', 'fraudulent']).optional(),
  consolidated_invoicing: z.boolean().optional(),
  tax_providers_fields: UpdateCustomerTaxProvidersFieldsSchema.optional(),
});
export { UpdateCustomerBodySchema };
export type UpdateCustomerBody = z.infer<typeof UpdateCustomerBodySchema>;

//Customer.updatePaymentMethod

const UpdatePaymentMethodCustomerAdditionalInformationSchema = z.looseObject(
  {},
);
const UpdatePaymentMethodCustomerPaymentMethodSchema = z.object({
  type: z.enum([
    'card',
    'paypal_express_checkout',
    'amazon_payments',
    'direct_debit',
    'generic',
    'alipay',
    'unionpay',
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
  ]),
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
    UpdatePaymentMethodCustomerAdditionalInformationSchema.optional(),
});
const UpdatePaymentMethodCustomerBodySchema = z.looseObject({
  payment_method: UpdatePaymentMethodCustomerPaymentMethodSchema.optional(),
});
export { UpdatePaymentMethodCustomerBodySchema };
export type UpdatePaymentMethodCustomerBody = z.infer<
  typeof UpdatePaymentMethodCustomerBodySchema
>;

//Customer.updateBillingInfo

const UpdateBillingInfoCustomerBillingAddressSchema = z.object({
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
const UpdateBillingInfoCustomerEntityIdentifiersSchema = z.object({
  id: z.array(z.string().max(40).optional()).optional(),
  scheme: z.array(z.string().max(50).optional()).optional(),
  value: z.array(z.string().max(50).optional()).optional(),
  operation: z
    .array(z.enum(['create', 'update', 'delete']).optional())
    .optional(),
  standard: z.array(z.string().max(50).optional()).optional(),
});
const UpdateBillingInfoCustomerTaxProvidersFieldsSchema = z.object({
  provider_name: z.array(z.string().max(50).optional()).optional(),
  field_id: z.array(z.string().max(50).optional()).optional(),
  field_value: z.array(z.string().max(50).optional()).optional(),
});
const UpdateBillingInfoCustomerBodySchema = z.looseObject({
  vat_number: z.string().max(20).optional(),
  vat_number_prefix: z.string().max(10).optional(),
  entity_identifier_scheme: z.string().max(50).optional(),
  entity_identifier_standard: z.string().max(50).optional(),
  registered_for_gst: z.boolean().optional(),
  business_customer_without_vat_number: z.boolean().optional(),
  is_einvoice_enabled: z.boolean().optional(),
  einvoicing_method: z.enum(['automatic', 'manual', 'site_default']).optional(),
  billing_address: UpdateBillingInfoCustomerBillingAddressSchema.optional(),
  entity_identifiers:
    UpdateBillingInfoCustomerEntityIdentifiersSchema.optional(),
  tax_providers_fields:
    UpdateBillingInfoCustomerTaxProvidersFieldsSchema.optional(),
});
export { UpdateBillingInfoCustomerBodySchema };
export type UpdateBillingInfoCustomerBody = z.infer<
  typeof UpdateBillingInfoCustomerBodySchema
>;

//Customer.contactsForCustomer

const ContactsForCustomerCustomerBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
});
export { ContactsForCustomerCustomerBodySchema };
export type ContactsForCustomerCustomerBody = z.infer<
  typeof ContactsForCustomerCustomerBodySchema
>;

//Customer.assignPaymentRole

const AssignPaymentRoleCustomerBodySchema = z.looseObject({
  payment_source_id: z.string().max(40),
  role: z.enum(['primary', 'backup', 'none']),
});
export { AssignPaymentRoleCustomerBodySchema };
export type AssignPaymentRoleCustomerBody = z.infer<
  typeof AssignPaymentRoleCustomerBodySchema
>;

//Customer.addContact

const AddContactCustomerContactSchema = z.object({
  id: z.string().max(150).optional(),
  first_name: z.string().max(150).optional(),
  last_name: z.string().max(150).optional(),
  email: z.string().email().max(70),
  phone: z.string().max(50).optional(),
  label: z.string().max(50).optional(),
  enabled: z.boolean().default(false).optional(),
  send_billing_email: z.boolean().default(false).optional(),
  send_account_email: z.boolean().default(false).optional(),
});
const AddContactCustomerBodySchema = z.looseObject({
  contact: AddContactCustomerContactSchema.optional(),
});
export { AddContactCustomerBodySchema };
export type AddContactCustomerBody = z.infer<
  typeof AddContactCustomerBodySchema
>;

//Customer.updateContact

const UpdateContactCustomerContactSchema = z.object({
  id: z.string().max(150),
  first_name: z.string().max(150).optional(),
  last_name: z.string().max(150).optional(),
  email: z.string().email().max(70).optional(),
  phone: z.string().max(50).optional(),
  label: z.string().max(50).optional(),
  enabled: z.boolean().default(false).optional(),
  send_billing_email: z.boolean().default(false).optional(),
  send_account_email: z.boolean().default(false).optional(),
});
const UpdateContactCustomerBodySchema = z.looseObject({
  contact: UpdateContactCustomerContactSchema.optional(),
});
export { UpdateContactCustomerBodySchema };
export type UpdateContactCustomerBody = z.infer<
  typeof UpdateContactCustomerBodySchema
>;

//Customer.deleteContact

const DeleteContactCustomerContactSchema = z.object({
  id: z.string().max(150),
});
const DeleteContactCustomerBodySchema = z.looseObject({
  contact: DeleteContactCustomerContactSchema.optional(),
});
export { DeleteContactCustomerBodySchema };
export type DeleteContactCustomerBody = z.infer<
  typeof DeleteContactCustomerBodySchema
>;

//Customer.addPromotionalCredits

const AddPromotionalCreditsCustomerBodySchema = z.looseObject({
  amount: z.number().int().min(1),
  currency_code: z.string().max(3).optional(),
  description: z.string().max(250),
  credit_type: z
    .enum(['loyalty_credits', 'referral_rewards', 'general'])
    .optional(),
  reference: z.string().max(500).optional(),
});
export { AddPromotionalCreditsCustomerBodySchema };
export type AddPromotionalCreditsCustomerBody = z.infer<
  typeof AddPromotionalCreditsCustomerBodySchema
>;

//Customer.deductPromotionalCredits

const DeductPromotionalCreditsCustomerBodySchema = z.looseObject({
  amount: z.number().int().min(1),
  currency_code: z.string().max(3).optional(),
  description: z.string().max(250),
  credit_type: z
    .enum(['loyalty_credits', 'referral_rewards', 'general'])
    .optional(),
  reference: z.string().max(500).optional(),
});
export { DeductPromotionalCreditsCustomerBodySchema };
export type DeductPromotionalCreditsCustomerBody = z.infer<
  typeof DeductPromotionalCreditsCustomerBodySchema
>;

//Customer.setPromotionalCredits

const SetPromotionalCreditsCustomerBodySchema = z.looseObject({
  amount: z.number().int().min(0),
  currency_code: z.string().max(3).optional(),
  description: z.string().max(250),
  credit_type: z
    .enum(['loyalty_credits', 'referral_rewards', 'general'])
    .optional(),
  reference: z.string().max(500).optional(),
});
export { SetPromotionalCreditsCustomerBodySchema };
export type SetPromotionalCreditsCustomerBody = z.infer<
  typeof SetPromotionalCreditsCustomerBodySchema
>;

//Customer.recordExcessPayment

const RecordExcessPaymentCustomerTransactionSchema = z.object({
  id: z.string().max(40).optional(),
  amount: z.number().int().min(0),
  currency_code: z.string().max(3).optional(),
  date: z.number().int(),
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
});
const RecordExcessPaymentCustomerBodySchema = z.looseObject({
  comment: z.string().max(300).optional(),
  transaction: RecordExcessPaymentCustomerTransactionSchema.optional(),
});
export { RecordExcessPaymentCustomerBodySchema };
export type RecordExcessPaymentCustomerBody = z.infer<
  typeof RecordExcessPaymentCustomerBodySchema
>;

//Customer.collectPayment

const CollectPaymentCustomerAdditionalInformationSchema = z.looseObject({});
const CollectPaymentCustomerPaymentMethodSchema = z.object({
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
  gateway_account_id: z.string().max(50).optional(),
  reference_id: z.string().max(200).optional(),
  tmp_token: z.string().max(65000).optional(),
  additional_information:
    CollectPaymentCustomerAdditionalInformationSchema.optional(),
});
const CollectPaymentCustomerCardSchema = z.object({
  gateway_account_id: z.string().max(50).optional(),
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
    CollectPaymentCustomerAdditionalInformationSchema.optional(),
});
const CollectPaymentCustomerPaymentIntentSchema = z.object({
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
  gw_payment_method_id: z.string().max(65000).optional(),
  reference_id: z.string().max(65000).optional(),
  additional_information:
    CollectPaymentCustomerAdditionalInformationSchema.optional(),
});
const CollectPaymentCustomerInvoiceAllocationsSchema = z.object({
  invoice_id: z.array(z.string().max(50).optional()),
  allocation_amount: z.array(z.number().int().min(0).optional()).optional(),
});
const CollectPaymentCustomerBodySchema = z.looseObject({
  amount: z.number().int().min(0).optional(),
  payment_source_id: z.string().max(40).optional(),
  token_id: z.string().max(40).optional(),
  replace_primary_payment_source: z.boolean().default(false).optional(),
  retain_payment_source: z.boolean().default(false).optional(),
  payment_initiator: z.enum(['customer', 'merchant']).optional(),
  payment_method: CollectPaymentCustomerPaymentMethodSchema.optional(),
  card: CollectPaymentCustomerCardSchema.optional(),
  payment_intent: CollectPaymentCustomerPaymentIntentSchema.optional(),
  invoice_allocations:
    CollectPaymentCustomerInvoiceAllocationsSchema.optional(),
});
export { CollectPaymentCustomerBodySchema };
export type CollectPaymentCustomerBody = z.infer<
  typeof CollectPaymentCustomerBodySchema
>;

//Customer.delete

const DeleteCustomerBodySchema = z.looseObject({
  delete_payment_method: z.boolean().default(true).optional(),
});
export { DeleteCustomerBodySchema };
export type DeleteCustomerBody = z.infer<typeof DeleteCustomerBodySchema>;

//Customer.move

const MoveCustomerBodySchema = z.looseObject({
  id_at_from_site: z.string().max(100),
  from_site: z.string().max(50),
});
export { MoveCustomerBodySchema };
export type MoveCustomerBody = z.infer<typeof MoveCustomerBodySchema>;

//Customer.changeBillingDate

const ChangeBillingDateCustomerBodySchema = z.looseObject({
  billing_date: z.number().int().min(1).max(31).optional(),
  billing_month: z.number().int().min(1).max(12).optional(),
  billing_date_mode: z.enum(['using_defaults', 'manually_set']).optional(),
  billing_day_of_week: z
    .enum([
      'sunday',
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
    ])
    .optional(),
  billing_day_of_week_mode: z
    .enum(['using_defaults', 'manually_set'])
    .optional(),
});
export { ChangeBillingDateCustomerBodySchema };
export type ChangeBillingDateCustomerBody = z.infer<
  typeof ChangeBillingDateCustomerBodySchema
>;

//Customer.merge

const MergeCustomerBodySchema = z.looseObject({
  from_customer_id: z.string().max(50),
  to_customer_id: z.string().max(50),
});
export { MergeCustomerBodySchema };
export type MergeCustomerBody = z.infer<typeof MergeCustomerBodySchema>;

//Customer.relationships

const RelationshipsCustomerParentAccountAccessSchema = z.object({
  portal_edit_child_subscriptions: z
    .enum(['yes', 'view_only', 'no'])
    .optional(),
  portal_download_child_invoices: z.enum(['yes', 'view_only', 'no']).optional(),
  send_subscription_emails: z.boolean().optional(),
  send_payment_emails: z.boolean().optional(),
  send_invoice_emails: z.boolean().optional(),
});
const RelationshipsCustomerChildAccountAccessSchema = z.object({
  portal_edit_subscriptions: z.enum(['yes', 'view_only']).optional(),
  portal_download_invoices: z.enum(['yes', 'view_only', 'no']).optional(),
  send_subscription_emails: z.boolean().optional(),
  send_payment_emails: z.boolean().optional(),
  send_invoice_emails: z.boolean().optional(),
});
const RelationshipsCustomerBodySchema = z.looseObject({
  parent_id: z.string().max(50).optional(),
  payment_owner_id: z.string().max(50).optional(),
  invoice_owner_id: z.string().max(50).optional(),
  use_default_hierarchy_settings: z.boolean().default(true).optional(),
  parent_account_access:
    RelationshipsCustomerParentAccountAccessSchema.optional(),
  child_account_access:
    RelationshipsCustomerChildAccountAccessSchema.optional(),
});
export { RelationshipsCustomerBodySchema };
export type RelationshipsCustomerBody = z.infer<
  typeof RelationshipsCustomerBodySchema
>;

//Customer.hierarchy

const HierarchyCustomerBodySchema = z.looseObject({
  hierarchy_operation_type: z.enum([
    'complete_hierarchy',
    'subordinates',
    'path_to_root',
    'subordinates_with_unbilled_charges_payable_by_parent',
    'immediate_children',
  ]),
});
export { HierarchyCustomerBodySchema };
export type HierarchyCustomerBody = z.infer<typeof HierarchyCustomerBodySchema>;

//Customer.listHierarchyDetail

const ListHierarchyDetailCustomerBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  hierarchy_operation_type: z.enum([
    'complete_hierarchy',
    'subordinates',
    'path_to_root',
    'subordinates_with_unbilled_charges_payable_by_parent',
    'immediate_children',
  ]),
});
export { ListHierarchyDetailCustomerBodySchema };
export type ListHierarchyDetailCustomerBody = z.infer<
  typeof ListHierarchyDetailCustomerBodySchema
>;

//Customer.updateHierarchySettings

const UpdateHierarchySettingsCustomerParentAccountAccessSchema = z.object({
  portal_edit_child_subscriptions: z
    .enum(['yes', 'view_only', 'no'])
    .optional(),
  portal_download_child_invoices: z.enum(['yes', 'view_only', 'no']).optional(),
  send_subscription_emails: z.boolean().optional(),
  send_payment_emails: z.boolean().optional(),
  send_invoice_emails: z.boolean().optional(),
});
const UpdateHierarchySettingsCustomerChildAccountAccessSchema = z.object({
  portal_edit_subscriptions: z.enum(['yes', 'view_only']).optional(),
  portal_download_invoices: z.enum(['yes', 'view_only', 'no']).optional(),
  send_subscription_emails: z.boolean().optional(),
  send_payment_emails: z.boolean().optional(),
  send_invoice_emails: z.boolean().optional(),
});
const UpdateHierarchySettingsCustomerBodySchema = z.looseObject({
  use_default_hierarchy_settings: z.boolean().default(true).optional(),
  parent_account_access:
    UpdateHierarchySettingsCustomerParentAccountAccessSchema.optional(),
  child_account_access:
    UpdateHierarchySettingsCustomerChildAccountAccessSchema.optional(),
});
export { UpdateHierarchySettingsCustomerBodySchema };
export type UpdateHierarchySettingsCustomerBody = z.infer<
  typeof UpdateHierarchySettingsCustomerBodySchema
>;
