// Generated Zod schemas: Transaction
// Actions: createAuthorization, recordRefund, reconcile, refund, list, transactionsForCustomer, transactionsForSubscription, paymentsForInvoice, deleteOfflineTransaction
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//Transaction.createAuthorization

const CreateAuthorizationTransactionBodySchema = z.looseObject({
  customer_id: z.string().max(50),
  payment_source_id: z.string().max(40).optional(),
  currency_code: z.string().max(3).optional(),
  amount: z.number().int().min(1),
});
export { CreateAuthorizationTransactionBodySchema };
export type CreateAuthorizationTransactionBody = z.infer<
  typeof CreateAuthorizationTransactionBodySchema
>;

//Transaction.recordRefund

const RecordRefundTransactionBodySchema = z.looseObject({
  amount: z.number().int().min(1).optional(),
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
  date: z.number().int(),
  reference_number: z.string().max(100).optional(),
  custom_payment_method_id: z.string().max(50).optional(),
  comment: z.string().max(300).optional(),
});
export { RecordRefundTransactionBodySchema };
export type RecordRefundTransactionBody = z.infer<
  typeof RecordRefundTransactionBodySchema
>;

//Transaction.reconcile

const ReconcileTransactionBodySchema = z.looseObject({
  id_at_gateway: z.string().max(100).optional(),
  customer_id: z.string().max(50).optional(),
  status: z.enum(['success', 'failure']).optional(),
});
export { ReconcileTransactionBodySchema };
export type ReconcileTransactionBody = z.infer<
  typeof ReconcileTransactionBodySchema
>;

//Transaction.refund

const RefundTransactionBodySchema = z.looseObject({
  amount: z.number().int().min(1).optional(),
  comment: z.string().max(300).optional(),
});
export { RefundTransactionBodySchema };
export type RefundTransactionBody = z.infer<typeof RefundTransactionBodySchema>;

//Transaction.list

const ListTransactionIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ListTransactionCustomerIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ListTransactionSubscriptionIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ListTransactionPaymentSourceIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ListTransactionPaymentMethodSchema = z.object({
  is: z
    .enum([
      'card',
      'cash',
      'check',
      'chargeback',
      'bank_transfer',
      'amazon_payments',
      'paypal_express_checkout',
      'direct_debit',
      'alipay',
      'unionpay',
      'apple_pay',
      'wechat_pay',
      'ach_credit',
      'sepa_credit',
      'ideal',
      'google_pay',
      'sofort',
      'bancontact',
      'giropay',
      'dotpay',
      'other',
      'app_store',
      'upi',
      'netbanking_emandates',
      'play_store',
      'custom',
      'boleto',
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
      'klarna',
      'alipay_hk',
      'paypay',
      'gcash',
      'south_korean_cards',
      'paynow',
      'bizum',
      'promptpay',
    ])
    .optional(),
  is_not: z
    .enum([
      'card',
      'cash',
      'check',
      'chargeback',
      'bank_transfer',
      'amazon_payments',
      'paypal_express_checkout',
      'direct_debit',
      'alipay',
      'unionpay',
      'apple_pay',
      'wechat_pay',
      'ach_credit',
      'sepa_credit',
      'ideal',
      'google_pay',
      'sofort',
      'bancontact',
      'giropay',
      'dotpay',
      'other',
      'app_store',
      'upi',
      'netbanking_emandates',
      'play_store',
      'custom',
      'boleto',
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
      'klarna',
      'alipay_hk',
      'paypay',
      'gcash',
      'south_korean_cards',
      'paynow',
      'bizum',
      'promptpay',
    ])
    .optional(),
  in: z
    .enum([
      'card',
      'cash',
      'check',
      'chargeback',
      'bank_transfer',
      'amazon_payments',
      'paypal_express_checkout',
      'direct_debit',
      'alipay',
      'unionpay',
      'apple_pay',
      'wechat_pay',
      'ach_credit',
      'sepa_credit',
      'ideal',
      'google_pay',
      'sofort',
      'bancontact',
      'giropay',
      'dotpay',
      'other',
      'app_store',
      'upi',
      'netbanking_emandates',
      'play_store',
      'custom',
      'boleto',
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
      'klarna',
      'alipay_hk',
      'paypay',
      'gcash',
      'south_korean_cards',
      'paynow',
      'bizum',
      'promptpay',
    ])
    .optional(),
  not_in: z
    .enum([
      'card',
      'cash',
      'check',
      'chargeback',
      'bank_transfer',
      'amazon_payments',
      'paypal_express_checkout',
      'direct_debit',
      'alipay',
      'unionpay',
      'apple_pay',
      'wechat_pay',
      'ach_credit',
      'sepa_credit',
      'ideal',
      'google_pay',
      'sofort',
      'bancontact',
      'giropay',
      'dotpay',
      'other',
      'app_store',
      'upi',
      'netbanking_emandates',
      'play_store',
      'custom',
      'boleto',
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
      'klarna',
      'alipay_hk',
      'paypay',
      'gcash',
      'south_korean_cards',
      'paynow',
      'bizum',
      'promptpay',
    ])
    .optional(),
});
const ListTransactionGatewaySchema = z.object({
  is: z
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
      'not_applicable',
    ])
    .optional(),
  is_not: z
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
      'not_applicable',
    ])
    .optional(),
  in: z
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
      'not_applicable',
    ])
    .optional(),
  not_in: z
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
      'not_applicable',
    ])
    .optional(),
});
const ListTransactionGatewayAccountIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ListTransactionIdAtGatewaySchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const ListTransactionReferenceNumberSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
});
const ListTransactionTypeSchema = z.object({
  is: z
    .enum(['authorization', 'payment', 'refund', 'payment_reversal'])
    .optional(),
  is_not: z
    .enum(['authorization', 'payment', 'refund', 'payment_reversal'])
    .optional(),
  in: z
    .enum(['authorization', 'payment', 'refund', 'payment_reversal'])
    .optional(),
  not_in: z
    .enum(['authorization', 'payment', 'refund', 'payment_reversal'])
    .optional(),
});
const ListTransactionDateSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const ListTransactionAmountSchema = z.object({
  is: z.string().regex(RegExp('^-?\\d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  between: z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')).optional(),
});
const ListTransactionAmountCapturableSchema = z.object({
  is: z.string().regex(RegExp('^-?\\d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  between: z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')).optional(),
});
const ListTransactionStatusSchema = z.object({
  is: z
    .enum([
      'in_progress',
      'success',
      'voided',
      'failure',
      'timeout',
      'needs_attention',
      'late_failure',
    ])
    .optional(),
  is_not: z
    .enum([
      'in_progress',
      'success',
      'voided',
      'failure',
      'timeout',
      'needs_attention',
      'late_failure',
    ])
    .optional(),
  in: z
    .enum([
      'in_progress',
      'success',
      'voided',
      'failure',
      'timeout',
      'needs_attention',
      'late_failure',
    ])
    .optional(),
  not_in: z
    .enum([
      'in_progress',
      'success',
      'voided',
      'failure',
      'timeout',
      'needs_attention',
      'late_failure',
    ])
    .optional(),
});
const ListTransactionUpdatedAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const ListTransactionSortBySchema = z.looseObject({
  asc: z.enum(['date', 'updated_at']).optional(),
  desc: z.enum(['date', 'updated_at']).optional(),
});
const ListTransactionBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  include_deleted: z.boolean().default(false).optional(),
  id: ListTransactionIdSchema.optional(),
  customer_id: ListTransactionCustomerIdSchema.optional(),
  subscription_id: ListTransactionSubscriptionIdSchema.optional(),
  payment_source_id: ListTransactionPaymentSourceIdSchema.optional(),
  payment_method: ListTransactionPaymentMethodSchema.optional(),
  gateway: ListTransactionGatewaySchema.optional(),
  gateway_account_id: ListTransactionGatewayAccountIdSchema.optional(),
  id_at_gateway: ListTransactionIdAtGatewaySchema.optional(),
  reference_number: ListTransactionReferenceNumberSchema.optional(),
  type: ListTransactionTypeSchema.optional(),
  date: ListTransactionDateSchema.optional(),
  amount: ListTransactionAmountSchema.optional(),
  amount_capturable: ListTransactionAmountCapturableSchema.optional(),
  status: ListTransactionStatusSchema.optional(),
  updated_at: ListTransactionUpdatedAtSchema.optional(),
  sort_by: ListTransactionSortBySchema.optional(),
});
export { ListTransactionBodySchema };
export type ListTransactionBody = z.infer<typeof ListTransactionBodySchema>;

//Transaction.transactionsForCustomer

const TransactionsForCustomerTransactionBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
});
export { TransactionsForCustomerTransactionBodySchema };
export type TransactionsForCustomerTransactionBody = z.infer<
  typeof TransactionsForCustomerTransactionBodySchema
>;

//Transaction.transactionsForSubscription

const TransactionsForSubscriptionTransactionBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
});
export { TransactionsForSubscriptionTransactionBodySchema };
export type TransactionsForSubscriptionTransactionBody = z.infer<
  typeof TransactionsForSubscriptionTransactionBodySchema
>;

//Transaction.paymentsForInvoice

const PaymentsForInvoiceTransactionBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
});
export { PaymentsForInvoiceTransactionBodySchema };
export type PaymentsForInvoiceTransactionBody = z.infer<
  typeof PaymentsForInvoiceTransactionBodySchema
>;

//Transaction.deleteOfflineTransaction

const DeleteOfflineTransactionTransactionBodySchema = z.looseObject({
  comment: z.string().max(300).optional(),
});
export { DeleteOfflineTransactionTransactionBodySchema };
export type DeleteOfflineTransactionTransactionBody = z.infer<
  typeof DeleteOfflineTransactionTransactionBodySchema
>;
