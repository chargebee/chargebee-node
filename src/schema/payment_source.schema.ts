// Generated Zod schemas: PaymentSource
// Actions: createUsingTempToken, createUsingPermanentToken, createUsingToken, createUsingPaymentIntent, createVoucherPaymentSource, createCard, createBankAccount, updateCard, updateBankAccount, verifyBankAccount, switchGatewayAccount, exportPaymentSource
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//PaymentSource.createUsingTempToken

const CreateUsingTempTokenPaymentSourceAdditionalInformationSchema =
  z.looseObject({});
const CreateUsingTempTokenPaymentSourceBodySchema = z.looseObject({
  customer_id: z.string().max(50),
  gateway_account_id: z.string().max(50).optional(),
  type: z.enum([
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
  ]),
  tmp_token: z.string().max(65000),
  issuing_country: z.string().max(50).optional(),
  replace_primary_payment_source: z.boolean().default(false).optional(),
  additional_information:
    CreateUsingTempTokenPaymentSourceAdditionalInformationSchema.optional(),
});
export { CreateUsingTempTokenPaymentSourceBodySchema };
export type CreateUsingTempTokenPaymentSourceBody = z.infer<
  typeof CreateUsingTempTokenPaymentSourceBodySchema
>;

//PaymentSource.createUsingPermanentToken

const CreateUsingPermanentTokenPaymentSourceAdditionalInformationSchema =
  z.looseObject({});
const CreateUsingPermanentTokenPaymentSourceCardSchema = z.object({
  last4: z.string().max(4).min(4).optional(),
  iin: z.string().max(6).min(6).optional(),
  expiry_month: z.number().int().min(1).max(12).optional(),
  expiry_year: z.number().int().optional(),
  brand: z
    .enum([
      'visa',
      'mastercard',
      'american_express',
      'discover',
      'jcb',
      'diners_club',
      'other',
      'bancontact',
      'cmr_falabella',
      'tarjeta_naranja',
      'nativa',
      'cencosud',
      'cabal',
      'argencard',
      'elo',
      'hipercard',
      'carnet',
      'rupay',
      'maestro',
      'dankort',
      'cartes_bancaires',
      'mada',
    ])
    .optional(),
  funding_type: z.enum(['credit', 'debit', 'prepaid', 'not_known']).optional(),
});
const CreateUsingPermanentTokenPaymentSourceBillingAddressSchema = z.object({
  first_name: z.string().max(150).optional(),
  last_name: z.string().max(150).optional(),
  email: z.string().email().max(70).optional(),
  line1: z.string().max(150).optional(),
  line2: z.string().max(150).optional(),
  line3: z.string().max(150).optional(),
  city: z.string().max(50).optional(),
  state_code: z.string().max(50).optional(),
  state: z.string().max(50).optional(),
  zip: z.string().max(20).optional(),
  country: z.string().max(50).optional(),
});
const CreateUsingPermanentTokenPaymentSourceBodySchema = z.looseObject({
  customer_id: z.string().max(50),
  type: z.enum([
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
  ]),
  gateway_account_id: z.string().max(50).optional(),
  reference_id: z.string().max(200).optional(),
  issuing_country: z.string().max(50).optional(),
  replace_primary_payment_source: z.boolean().default(false).optional(),
  payment_method_token: z.string().max(100).optional(),
  customer_profile_token: z.string().max(100).optional(),
  network_transaction_id: z.string().max(100).optional(),
  mandate_id: z.string().max(100).optional(),
  skip_retrieval: z.boolean().default(false).optional(),
  additional_information:
    CreateUsingPermanentTokenPaymentSourceAdditionalInformationSchema.optional(),
  card: CreateUsingPermanentTokenPaymentSourceCardSchema.optional(),
  billing_address:
    CreateUsingPermanentTokenPaymentSourceBillingAddressSchema.optional(),
});
export { CreateUsingPermanentTokenPaymentSourceBodySchema };
export type CreateUsingPermanentTokenPaymentSourceBody = z.infer<
  typeof CreateUsingPermanentTokenPaymentSourceBodySchema
>;

//PaymentSource.createUsingToken

const CreateUsingTokenPaymentSourceBodySchema = z.looseObject({
  customer_id: z.string().max(50),
  replace_primary_payment_source: z.boolean().default(false).optional(),
  token_id: z.string().max(40),
});
export { CreateUsingTokenPaymentSourceBodySchema };
export type CreateUsingTokenPaymentSourceBody = z.infer<
  typeof CreateUsingTokenPaymentSourceBodySchema
>;

//PaymentSource.createUsingPaymentIntent

const CreateUsingPaymentIntentPaymentSourceAdditionalInfoSchema = z.looseObject(
  {},
);
const CreateUsingPaymentIntentPaymentSourceAdditionalInformationSchema =
  z.looseObject({});
const CreateUsingPaymentIntentPaymentSourcePaymentIntentSchema = z.object({
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
  additional_info:
    CreateUsingPaymentIntentPaymentSourceAdditionalInfoSchema.optional(),
  additional_information:
    CreateUsingPaymentIntentPaymentSourceAdditionalInformationSchema.optional(),
});
const CreateUsingPaymentIntentPaymentSourceBodySchema = z.looseObject({
  customer_id: z.string().max(50),
  replace_primary_payment_source: z.boolean().default(false).optional(),
  payment_intent:
    CreateUsingPaymentIntentPaymentSourcePaymentIntentSchema.optional(),
});
export { CreateUsingPaymentIntentPaymentSourceBodySchema };
export type CreateUsingPaymentIntentPaymentSourceBody = z.infer<
  typeof CreateUsingPaymentIntentPaymentSourceBodySchema
>;

//PaymentSource.createVoucherPaymentSource

const CreateVoucherPaymentSourcePaymentSourceBillingAddressSchema =
  z.looseObject({});
const CreateVoucherPaymentSourcePaymentSourceVoucherPaymentSourceSchema =
  z.object({
    voucher_type: z.enum(['boleto']),
    gateway_account_id: z.string().max(50).optional(),
    tax_id: z.string().max(20).optional(),
    billing_address:
      CreateVoucherPaymentSourcePaymentSourceBillingAddressSchema.optional(),
  });
const CreateVoucherPaymentSourcePaymentSourceBodySchema = z.looseObject({
  customer_id: z.string().max(50),
  voucher_payment_source:
    CreateVoucherPaymentSourcePaymentSourceVoucherPaymentSourceSchema.optional(),
});
export { CreateVoucherPaymentSourcePaymentSourceBodySchema };
export type CreateVoucherPaymentSourcePaymentSourceBody = z.infer<
  typeof CreateVoucherPaymentSourcePaymentSourceBodySchema
>;

//PaymentSource.createCard

const CreateCardPaymentSourceAdditionalInformationSchema = z.looseObject({});
const CreateCardPaymentSourceCardSchema = z.object({
  gateway_account_id: z.string().max(50).optional(),
  first_name: z.string().max(50).optional(),
  last_name: z.string().max(50).optional(),
  number: z.string().max(1500),
  expiry_month: z.number().int().min(1).max(12),
  expiry_year: z.number().int(),
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
    CreateCardPaymentSourceAdditionalInformationSchema.optional(),
});
const CreateCardPaymentSourceBodySchema = z.looseObject({
  customer_id: z.string().max(50),
  replace_primary_payment_source: z.boolean().default(false).optional(),
  card: CreateCardPaymentSourceCardSchema.optional(),
});
export { CreateCardPaymentSourceBodySchema };
export type CreateCardPaymentSourceBody = z.infer<
  typeof CreateCardPaymentSourceBodySchema
>;

//PaymentSource.createBankAccount

const CreateBankAccountPaymentSourceBillingAddressSchema = z.looseObject({});
const CreateBankAccountPaymentSourceBankAccountSchema = z.object({
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
  swedish_identity_number: z.string().max(12).min(10).optional(),
  billing_address:
    CreateBankAccountPaymentSourceBillingAddressSchema.optional(),
});
const CreateBankAccountPaymentSourceBodySchema = z.looseObject({
  customer_id: z.string().max(50),
  issuing_country: z.string().max(50).optional(),
  replace_primary_payment_source: z.boolean().default(false).optional(),
  bank_account: CreateBankAccountPaymentSourceBankAccountSchema.optional(),
});
export { CreateBankAccountPaymentSourceBodySchema };
export type CreateBankAccountPaymentSourceBody = z.infer<
  typeof CreateBankAccountPaymentSourceBodySchema
>;

//PaymentSource.updateCard

const UpdateCardPaymentSourceGatewayMetaDataSchema = z.looseObject({});
const UpdateCardPaymentSourceAdditionalInformationSchema = z.looseObject({});
const UpdateCardPaymentSourceCardSchema = z.object({
  first_name: z.string().max(50).optional(),
  last_name: z.string().max(50).optional(),
  expiry_month: z.number().int().min(1).max(12).optional(),
  expiry_year: z.number().int().optional(),
  billing_addr1: z.string().max(150).optional(),
  billing_addr2: z.string().max(150).optional(),
  billing_city: z.string().max(50).optional(),
  billing_zip: z.string().max(20).optional(),
  billing_state_code: z.string().max(50).optional(),
  billing_state: z.string().max(50).optional(),
  billing_country: z.string().max(50).optional(),
  additional_information:
    UpdateCardPaymentSourceAdditionalInformationSchema.optional(),
});
const UpdateCardPaymentSourceBodySchema = z.looseObject({
  gateway_meta_data: UpdateCardPaymentSourceGatewayMetaDataSchema.optional(),
  reference_transaction: z.string().max(50).optional(),
  card: UpdateCardPaymentSourceCardSchema.optional(),
});
export { UpdateCardPaymentSourceBodySchema };
export type UpdateCardPaymentSourceBody = z.infer<
  typeof UpdateCardPaymentSourceBodySchema
>;

//PaymentSource.updateBankAccount

const UpdateBankAccountPaymentSourceBankAccountSchema = z.object({
  first_name: z.string().max(150).optional(),
  last_name: z.string().max(150).optional(),
  email: z.string().email().max(70).optional(),
});
const UpdateBankAccountPaymentSourceBodySchema = z.looseObject({
  bank_account: UpdateBankAccountPaymentSourceBankAccountSchema.optional(),
});
export { UpdateBankAccountPaymentSourceBodySchema };
export type UpdateBankAccountPaymentSourceBody = z.infer<
  typeof UpdateBankAccountPaymentSourceBodySchema
>;

//PaymentSource.verifyBankAccount

const VerifyBankAccountPaymentSourceBodySchema = z.looseObject({
  amount1: z.number().int().min(0),
  amount2: z.number().int().min(0),
});
export { VerifyBankAccountPaymentSourceBodySchema };
export type VerifyBankAccountPaymentSourceBody = z.infer<
  typeof VerifyBankAccountPaymentSourceBodySchema
>;

//PaymentSource.switchGatewayAccount

const SwitchGatewayAccountPaymentSourceBodySchema = z.looseObject({
  gateway_account_id: z.string().max(50),
});
export { SwitchGatewayAccountPaymentSourceBodySchema };
export type SwitchGatewayAccountPaymentSourceBody = z.infer<
  typeof SwitchGatewayAccountPaymentSourceBodySchema
>;

//PaymentSource.exportPaymentSource

const ExportPaymentSourcePaymentSourceBodySchema = z.looseObject({
  gateway_account_id: z.string().max(50),
});
export { ExportPaymentSourcePaymentSourceBodySchema };
export type ExportPaymentSourcePaymentSourceBody = z.infer<
  typeof ExportPaymentSourcePaymentSourceBodySchema
>;
