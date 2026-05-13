// Generated Zod schemas: Export
// Actions: customers, creditNotes, transactions, orders, itemFamilies, items, attachedItems, priceVariants
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//Export.customers

const CustomersExportBusinessEntityIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const CustomersExportIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
  not_in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
});
const CustomersExportFirstNameSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
});
const CustomersExportLastNameSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
});
const CustomersExportEmailSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
});
const CustomersExportCompanySchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
});
const CustomersExportPhoneSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
});
const CustomersExportAutoCollectionSchema = z.object({
  is: z.enum(['on', 'off']).optional(),
  is_not: z.enum(['on', 'off']).optional(),
  in: z.enum(['on', 'off']).optional(),
  not_in: z.enum(['on', 'off']).optional(),
});
const CustomersExportTaxabilitySchema = z.object({
  is: z.enum(['taxable', 'exempt']).optional(),
  is_not: z.enum(['taxable', 'exempt']).optional(),
  in: z.enum(['taxable', 'exempt']).optional(),
  not_in: z.enum(['taxable', 'exempt']).optional(),
});
const CustomersExportCreatedAtSchema = z.object({
  after: z.string().regex(RegExp('^d{10}$')).optional(),
  before: z.string().regex(RegExp('^d{10}$')).optional(),
  on: z.string().regex(RegExp('^d{10}$')).optional(),
  between: z.string().regex(RegExp('^[d{10},d{10}]$')).optional(),
});
const CustomersExportUpdatedAtSchema = z.object({
  after: z.string().regex(RegExp('^d{10}$')).optional(),
  before: z.string().regex(RegExp('^d{10}$')).optional(),
  on: z.string().regex(RegExp('^d{10}$')).optional(),
  between: z.string().regex(RegExp('^[d{10},d{10}]$')).optional(),
});
const CustomersExportOfflinePaymentMethodSchema = z.object({
  is: z
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
  is_not: z
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
  in: z
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
  not_in: z
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
});
const CustomersExportAutoCloseInvoicesSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const CustomersExportChannelSchema = z.object({
  is: z.enum(['web', 'app_store', 'play_store']).optional(),
  is_not: z.enum(['web', 'app_store', 'play_store']).optional(),
  in: z.enum(['web', 'app_store', 'play_store']).optional(),
  not_in: z.enum(['web', 'app_store', 'play_store']).optional(),
});
const CustomersExportCustomerItemSchema = z.object({
  id: CustomersExportIdSchema.optional(),
  first_name: CustomersExportFirstNameSchema.optional(),
  last_name: CustomersExportLastNameSchema.optional(),
  email: CustomersExportEmailSchema.optional(),
  company: CustomersExportCompanySchema.optional(),
  phone: CustomersExportPhoneSchema.optional(),
  auto_collection: CustomersExportAutoCollectionSchema.optional(),
  taxability: CustomersExportTaxabilitySchema.optional(),
  created_at: CustomersExportCreatedAtSchema.optional(),
  updated_at: CustomersExportUpdatedAtSchema.optional(),
  offline_payment_method: CustomersExportOfflinePaymentMethodSchema.optional(),
  auto_close_invoices: CustomersExportAutoCloseInvoicesSchema.optional(),
  channel: CustomersExportChannelSchema.optional(),
});
const CustomersExportParentIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const CustomersExportPaymentOwnerIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const CustomersExportInvoiceOwnerIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const CustomersExportRelationshipSchema = z.object({
  parent_id: CustomersExportParentIdSchema.optional(),
  payment_owner_id: CustomersExportPaymentOwnerIdSchema.optional(),
  invoice_owner_id: CustomersExportInvoiceOwnerIdSchema.optional(),
});
const CustomersExportBodySchema = z.looseObject({
  export_type: z.enum(['data', 'import_friendly_data']).optional(),
  business_entity_id: CustomersExportBusinessEntityIdSchema.optional(),
  customer: z.array(CustomersExportCustomerItemSchema.optional()).optional(),
  relationship: CustomersExportRelationshipSchema.optional(),
});
export { CustomersExportBodySchema };
export type CustomersExportBody = z.infer<typeof CustomersExportBodySchema>;

//Export.creditNotes

const CreditNotesExportIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
  not_in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
});
const CreditNotesExportCustomerIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
  not_in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
});
const CreditNotesExportSubscriptionIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
  in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
  not_in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
});
const CreditNotesExportReferenceInvoiceIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
  in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
  not_in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
});
const CreditNotesExportTypeSchema = z.object({
  is: z.enum(['adjustment', 'refundable', 'store']).optional(),
  is_not: z.enum(['adjustment', 'refundable', 'store']).optional(),
  in: z.enum(['adjustment', 'refundable', 'store']).optional(),
  not_in: z.enum(['adjustment', 'refundable', 'store']).optional(),
});
const CreditNotesExportReasonCodeSchema = z.object({
  is: z
    .enum([
      'write_off',
      'subscription_change',
      'subscription_cancellation',
      'subscription_pause',
      'chargeback',
      'product_unsatisfactory',
      'service_unsatisfactory',
      'order_change',
      'order_cancellation',
      'waiver',
      'other',
      'fraudulent',
    ])
    .optional(),
  is_not: z
    .enum([
      'write_off',
      'subscription_change',
      'subscription_cancellation',
      'subscription_pause',
      'chargeback',
      'product_unsatisfactory',
      'service_unsatisfactory',
      'order_change',
      'order_cancellation',
      'waiver',
      'other',
      'fraudulent',
    ])
    .optional(),
  in: z
    .enum([
      'write_off',
      'subscription_change',
      'subscription_cancellation',
      'subscription_pause',
      'chargeback',
      'product_unsatisfactory',
      'service_unsatisfactory',
      'order_change',
      'order_cancellation',
      'waiver',
      'other',
      'fraudulent',
    ])
    .optional(),
  not_in: z
    .enum([
      'write_off',
      'subscription_change',
      'subscription_cancellation',
      'subscription_pause',
      'chargeback',
      'product_unsatisfactory',
      'service_unsatisfactory',
      'order_change',
      'order_cancellation',
      'waiver',
      'other',
      'fraudulent',
    ])
    .optional(),
});
const CreditNotesExportCreateReasonCodeSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
  not_in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
});
const CreditNotesExportStatusSchema = z.object({
  is: z.enum(['adjusted', 'refunded', 'refund_due', 'voided']).optional(),
  is_not: z.enum(['adjusted', 'refunded', 'refund_due', 'voided']).optional(),
  in: z.enum(['adjusted', 'refunded', 'refund_due', 'voided']).optional(),
  not_in: z.enum(['adjusted', 'refunded', 'refund_due', 'voided']).optional(),
});
const CreditNotesExportDateSchema = z.object({
  after: z.string().regex(RegExp('^d{10}$')).optional(),
  before: z.string().regex(RegExp('^d{10}$')).optional(),
  on: z.string().regex(RegExp('^d{10}$')).optional(),
  between: z.string().regex(RegExp('^[d{10},d{10}]$')).optional(),
});
const CreditNotesExportTotalSchema = z.object({
  is: z.string().regex(RegExp('^-?d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?d+$')).optional(),
  lt: z.string().regex(RegExp('^-?d+$')).optional(),
  lte: z.string().regex(RegExp('^-?d+$')).optional(),
  gt: z.string().regex(RegExp('^-?d+$')).optional(),
  gte: z.string().regex(RegExp('^-?d+$')).optional(),
  between: z.string().regex(RegExp('^[-?d+,-?d+]$')).optional(),
});
const CreditNotesExportPriceTypeSchema = z.object({
  is: z.enum(['tax_exclusive', 'tax_inclusive']).optional(),
  is_not: z.enum(['tax_exclusive', 'tax_inclusive']).optional(),
  in: z.enum(['tax_exclusive', 'tax_inclusive']).optional(),
  not_in: z.enum(['tax_exclusive', 'tax_inclusive']).optional(),
});
const CreditNotesExportAmountAllocatedSchema = z.object({
  is: z.string().regex(RegExp('^-?d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?d+$')).optional(),
  lt: z.string().regex(RegExp('^-?d+$')).optional(),
  lte: z.string().regex(RegExp('^-?d+$')).optional(),
  gt: z.string().regex(RegExp('^-?d+$')).optional(),
  gte: z.string().regex(RegExp('^-?d+$')).optional(),
  between: z.string().regex(RegExp('^[-?d+,-?d+]$')).optional(),
});
const CreditNotesExportAmountRefundedSchema = z.object({
  is: z.string().regex(RegExp('^-?d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?d+$')).optional(),
  lt: z.string().regex(RegExp('^-?d+$')).optional(),
  lte: z.string().regex(RegExp('^-?d+$')).optional(),
  gt: z.string().regex(RegExp('^-?d+$')).optional(),
  gte: z.string().regex(RegExp('^-?d+$')).optional(),
  between: z.string().regex(RegExp('^[-?d+,-?d+]$')).optional(),
});
const CreditNotesExportAmountAvailableSchema = z.object({
  is: z.string().regex(RegExp('^-?d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?d+$')).optional(),
  lt: z.string().regex(RegExp('^-?d+$')).optional(),
  lte: z.string().regex(RegExp('^-?d+$')).optional(),
  gt: z.string().regex(RegExp('^-?d+$')).optional(),
  gte: z.string().regex(RegExp('^-?d+$')).optional(),
  between: z.string().regex(RegExp('^[-?d+,-?d+]$')).optional(),
});
const CreditNotesExportVoidedAtSchema = z.object({
  after: z.string().regex(RegExp('^d{10}$')).optional(),
  before: z.string().regex(RegExp('^d{10}$')).optional(),
  on: z.string().regex(RegExp('^d{10}$')).optional(),
  between: z.string().regex(RegExp('^[d{10},d{10}]$')).optional(),
});
const CreditNotesExportUpdatedAtSchema = z.object({
  after: z.string().regex(RegExp('^d{10}$')).optional(),
  before: z.string().regex(RegExp('^d{10}$')).optional(),
  on: z.string().regex(RegExp('^d{10}$')).optional(),
  between: z.string().regex(RegExp('^[d{10},d{10}]$')).optional(),
});
const CreditNotesExportChannelSchema = z.object({
  is: z.enum(['web', 'app_store', 'play_store']).optional(),
  is_not: z.enum(['web', 'app_store', 'play_store']).optional(),
  in: z.enum(['web', 'app_store', 'play_store']).optional(),
  not_in: z.enum(['web', 'app_store', 'play_store']).optional(),
});
const CreditNotesExportCreditNoteItemSchema = z.object({
  id: CreditNotesExportIdSchema.optional(),
  customer_id: CreditNotesExportCustomerIdSchema.optional(),
  subscription_id: CreditNotesExportSubscriptionIdSchema.optional(),
  reference_invoice_id: CreditNotesExportReferenceInvoiceIdSchema.optional(),
  type: CreditNotesExportTypeSchema.optional(),
  reason_code: CreditNotesExportReasonCodeSchema.optional(),
  create_reason_code: CreditNotesExportCreateReasonCodeSchema.optional(),
  status: CreditNotesExportStatusSchema.optional(),
  date: CreditNotesExportDateSchema.optional(),
  total: CreditNotesExportTotalSchema.optional(),
  price_type: CreditNotesExportPriceTypeSchema.optional(),
  amount_allocated: CreditNotesExportAmountAllocatedSchema.optional(),
  amount_refunded: CreditNotesExportAmountRefundedSchema.optional(),
  amount_available: CreditNotesExportAmountAvailableSchema.optional(),
  voided_at: CreditNotesExportVoidedAtSchema.optional(),
  updated_at: CreditNotesExportUpdatedAtSchema.optional(),
  channel: CreditNotesExportChannelSchema.optional(),
});
const CreditNotesExportBodySchema = z.looseObject({
  credit_note: z
    .array(CreditNotesExportCreditNoteItemSchema.optional())
    .optional(),
});
export { CreditNotesExportBodySchema };
export type CreditNotesExportBody = z.infer<typeof CreditNotesExportBodySchema>;

//Export.transactions

const TransactionsExportIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
  not_in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
});
const TransactionsExportCustomerIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
  in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
  not_in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
});
const TransactionsExportSubscriptionIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
  in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
  not_in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
});
const TransactionsExportPaymentSourceIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
  in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
  not_in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
});
const TransactionsExportPaymentMethodSchema = z.object({
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
    ])
    .optional(),
});
const TransactionsExportGatewaySchema = z.object({
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
const TransactionsExportGatewayAccountIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
  not_in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
});
const TransactionsExportIdAtGatewaySchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const TransactionsExportReferenceNumberSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
});
const TransactionsExportTypeSchema = z.object({
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
const TransactionsExportDateSchema = z.object({
  after: z.string().regex(RegExp('^d{10}$')).optional(),
  before: z.string().regex(RegExp('^d{10}$')).optional(),
  on: z.string().regex(RegExp('^d{10}$')).optional(),
  between: z.string().regex(RegExp('^[d{10},d{10}]$')).optional(),
});
const TransactionsExportAmountSchema = z.object({
  is: z.string().regex(RegExp('^-?d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?d+$')).optional(),
  lt: z.string().regex(RegExp('^-?d+$')).optional(),
  lte: z.string().regex(RegExp('^-?d+$')).optional(),
  gt: z.string().regex(RegExp('^-?d+$')).optional(),
  gte: z.string().regex(RegExp('^-?d+$')).optional(),
  between: z.string().regex(RegExp('^[-?d+,-?d+]$')).optional(),
});
const TransactionsExportAmountCapturableSchema = z.object({
  is: z.string().regex(RegExp('^-?d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?d+$')).optional(),
  lt: z.string().regex(RegExp('^-?d+$')).optional(),
  lte: z.string().regex(RegExp('^-?d+$')).optional(),
  gt: z.string().regex(RegExp('^-?d+$')).optional(),
  gte: z.string().regex(RegExp('^-?d+$')).optional(),
  between: z.string().regex(RegExp('^[-?d+,-?d+]$')).optional(),
});
const TransactionsExportStatusSchema = z.object({
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
const TransactionsExportUpdatedAtSchema = z.object({
  after: z.string().regex(RegExp('^d{10}$')).optional(),
  before: z.string().regex(RegExp('^d{10}$')).optional(),
  on: z.string().regex(RegExp('^d{10}$')).optional(),
  between: z.string().regex(RegExp('^[d{10},d{10}]$')).optional(),
});
const TransactionsExportTransactionItemSchema = z.object({
  id: TransactionsExportIdSchema.optional(),
  customer_id: TransactionsExportCustomerIdSchema.optional(),
  subscription_id: TransactionsExportSubscriptionIdSchema.optional(),
  payment_source_id: TransactionsExportPaymentSourceIdSchema.optional(),
  payment_method: TransactionsExportPaymentMethodSchema.optional(),
  gateway: TransactionsExportGatewaySchema.optional(),
  gateway_account_id: TransactionsExportGatewayAccountIdSchema.optional(),
  id_at_gateway: TransactionsExportIdAtGatewaySchema.optional(),
  reference_number: TransactionsExportReferenceNumberSchema.optional(),
  type: TransactionsExportTypeSchema.optional(),
  date: TransactionsExportDateSchema.optional(),
  amount: TransactionsExportAmountSchema.optional(),
  amount_capturable: TransactionsExportAmountCapturableSchema.optional(),
  status: TransactionsExportStatusSchema.optional(),
  updated_at: TransactionsExportUpdatedAtSchema.optional(),
});
const TransactionsExportBodySchema = z.looseObject({
  transaction: z
    .array(TransactionsExportTransactionItemSchema.optional())
    .optional(),
});
export { TransactionsExportBodySchema };
export type TransactionsExportBody = z.infer<
  typeof TransactionsExportBodySchema
>;

//Export.orders

const OrdersExportTotalSchema = z.object({
  is: z.string().regex(RegExp('^-?d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?d+$')).optional(),
  lt: z.string().regex(RegExp('^-?d+$')).optional(),
  lte: z.string().regex(RegExp('^-?d+$')).optional(),
  gt: z.string().regex(RegExp('^-?d+$')).optional(),
  gte: z.string().regex(RegExp('^-?d+$')).optional(),
  between: z.string().regex(RegExp('^[-?d+,-?d+]$')).optional(),
});
const OrdersExportIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
  not_in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
});
const OrdersExportSubscriptionIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
  in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
  not_in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
});
const OrdersExportCustomerIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
  not_in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
});
const OrdersExportStatusSchema = z.object({
  is: z
    .enum([
      'new',
      'processing',
      'complete',
      'cancelled',
      'voided',
      'queued',
      'awaiting_shipment',
      'on_hold',
      'delivered',
      'shipped',
      'partially_delivered',
      'returned',
    ])
    .optional(),
  is_not: z
    .enum([
      'new',
      'processing',
      'complete',
      'cancelled',
      'voided',
      'queued',
      'awaiting_shipment',
      'on_hold',
      'delivered',
      'shipped',
      'partially_delivered',
      'returned',
    ])
    .optional(),
  in: z
    .enum([
      'new',
      'processing',
      'complete',
      'cancelled',
      'voided',
      'queued',
      'awaiting_shipment',
      'on_hold',
      'delivered',
      'shipped',
      'partially_delivered',
      'returned',
    ])
    .optional(),
  not_in: z
    .enum([
      'new',
      'processing',
      'complete',
      'cancelled',
      'voided',
      'queued',
      'awaiting_shipment',
      'on_hold',
      'delivered',
      'shipped',
      'partially_delivered',
      'returned',
    ])
    .optional(),
});
const OrdersExportPriceTypeSchema = z.object({
  is: z.enum(['tax_exclusive', 'tax_inclusive']).optional(),
  is_not: z.enum(['tax_exclusive', 'tax_inclusive']).optional(),
  in: z.enum(['tax_exclusive', 'tax_inclusive']).optional(),
  not_in: z.enum(['tax_exclusive', 'tax_inclusive']).optional(),
});
const OrdersExportOrderDateSchema = z.object({
  after: z.string().regex(RegExp('^d{10}$')).optional(),
  before: z.string().regex(RegExp('^d{10}$')).optional(),
  on: z.string().regex(RegExp('^d{10}$')).optional(),
  between: z.string().regex(RegExp('^[d{10},d{10}]$')).optional(),
});
const OrdersExportShippingDateSchema = z.object({
  after: z.string().regex(RegExp('^d{10}$')).optional(),
  before: z.string().regex(RegExp('^d{10}$')).optional(),
  on: z.string().regex(RegExp('^d{10}$')).optional(),
  between: z.string().regex(RegExp('^[d{10},d{10}]$')).optional(),
});
const OrdersExportShippedAtSchema = z.object({
  after: z.string().regex(RegExp('^d{10}$')).optional(),
  before: z.string().regex(RegExp('^d{10}$')).optional(),
  on: z.string().regex(RegExp('^d{10}$')).optional(),
  between: z.string().regex(RegExp('^[d{10},d{10}]$')).optional(),
});
const OrdersExportDeliveredAtSchema = z.object({
  after: z.string().regex(RegExp('^d{10}$')).optional(),
  before: z.string().regex(RegExp('^d{10}$')).optional(),
  on: z.string().regex(RegExp('^d{10}$')).optional(),
  between: z.string().regex(RegExp('^[d{10},d{10}]$')).optional(),
});
const OrdersExportCancelledAtSchema = z.object({
  after: z.string().regex(RegExp('^d{10}$')).optional(),
  before: z.string().regex(RegExp('^d{10}$')).optional(),
  on: z.string().regex(RegExp('^d{10}$')).optional(),
  between: z.string().regex(RegExp('^[d{10},d{10}]$')).optional(),
});
const OrdersExportAmountPaidSchema = z.object({
  is: z.string().regex(RegExp('^-?d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?d+$')).optional(),
  lt: z.string().regex(RegExp('^-?d+$')).optional(),
  lte: z.string().regex(RegExp('^-?d+$')).optional(),
  gt: z.string().regex(RegExp('^-?d+$')).optional(),
  gte: z.string().regex(RegExp('^-?d+$')).optional(),
  between: z.string().regex(RegExp('^[-?d+,-?d+]$')).optional(),
});
const OrdersExportRefundableCreditsSchema = z.object({
  is: z.string().regex(RegExp('^-?d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?d+$')).optional(),
  lt: z.string().regex(RegExp('^-?d+$')).optional(),
  lte: z.string().regex(RegExp('^-?d+$')).optional(),
  gt: z.string().regex(RegExp('^-?d+$')).optional(),
  gte: z.string().regex(RegExp('^-?d+$')).optional(),
  between: z.string().regex(RegExp('^[-?d+,-?d+]$')).optional(),
});
const OrdersExportRefundableCreditsIssuedSchema = z.object({
  is: z.string().regex(RegExp('^-?d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?d+$')).optional(),
  lt: z.string().regex(RegExp('^-?d+$')).optional(),
  lte: z.string().regex(RegExp('^-?d+$')).optional(),
  gt: z.string().regex(RegExp('^-?d+$')).optional(),
  gte: z.string().regex(RegExp('^-?d+$')).optional(),
  between: z.string().regex(RegExp('^[-?d+,-?d+]$')).optional(),
});
const OrdersExportUpdatedAtSchema = z.object({
  after: z.string().regex(RegExp('^d{10}$')).optional(),
  before: z.string().regex(RegExp('^d{10}$')).optional(),
  on: z.string().regex(RegExp('^d{10}$')).optional(),
  between: z.string().regex(RegExp('^[d{10},d{10}]$')).optional(),
});
const OrdersExportResentStatusSchema = z.object({
  is: z.enum(['fully_resent', 'partially_resent']).optional(),
  is_not: z.enum(['fully_resent', 'partially_resent']).optional(),
  in: z.enum(['fully_resent', 'partially_resent']).optional(),
  not_in: z.enum(['fully_resent', 'partially_resent']).optional(),
});
const OrdersExportIsResentSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const OrdersExportOriginalOrderIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const OrdersExportOrderItemSchema = z.object({
  id: OrdersExportIdSchema.optional(),
  subscription_id: OrdersExportSubscriptionIdSchema.optional(),
  customer_id: OrdersExportCustomerIdSchema.optional(),
  status: OrdersExportStatusSchema.optional(),
  price_type: OrdersExportPriceTypeSchema.optional(),
  order_date: OrdersExportOrderDateSchema.optional(),
  shipping_date: OrdersExportShippingDateSchema.optional(),
  shipped_at: OrdersExportShippedAtSchema.optional(),
  delivered_at: OrdersExportDeliveredAtSchema.optional(),
  cancelled_at: OrdersExportCancelledAtSchema.optional(),
  amount_paid: OrdersExportAmountPaidSchema.optional(),
  refundable_credits: OrdersExportRefundableCreditsSchema.optional(),
  refundable_credits_issued:
    OrdersExportRefundableCreditsIssuedSchema.optional(),
  updated_at: OrdersExportUpdatedAtSchema.optional(),
  resent_status: OrdersExportResentStatusSchema.optional(),
  is_resent: OrdersExportIsResentSchema.optional(),
  original_order_id: OrdersExportOriginalOrderIdSchema.optional(),
});
const OrdersExportBodySchema = z.looseObject({
  total: OrdersExportTotalSchema.optional(),
  order: z.array(OrdersExportOrderItemSchema.optional()).optional(),
});
export { OrdersExportBodySchema };
export type OrdersExportBody = z.infer<typeof OrdersExportBodySchema>;

//Export.itemFamilies

const ItemFamiliesExportBusinessEntityIdSchema = z.object({
  is_present: z.enum(['true', 'false']).optional(),
  is: z.string().min(1).optional(),
});
const ItemFamiliesExportIncludeSiteLevelResourcesSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const ItemFamiliesExportIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
  not_in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
});
const ItemFamiliesExportNameSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const ItemFamiliesExportUpdatedAtSchema = z.object({
  after: z.string().regex(RegExp('^d{10}$')).optional(),
  before: z.string().regex(RegExp('^d{10}$')).optional(),
  on: z.string().regex(RegExp('^d{10}$')).optional(),
  between: z.string().regex(RegExp('^[d{10},d{10}]$')).optional(),
});
const ItemFamiliesExportItemFamilyItemSchema = z.object({
  id: ItemFamiliesExportIdSchema.optional(),
  name: ItemFamiliesExportNameSchema.optional(),
  updated_at: ItemFamiliesExportUpdatedAtSchema.optional(),
});
const ItemFamiliesExportBodySchema = z.looseObject({
  business_entity_id: ItemFamiliesExportBusinessEntityIdSchema.optional(),
  include_site_level_resources:
    ItemFamiliesExportIncludeSiteLevelResourcesSchema.optional(),
  item_family: z
    .array(ItemFamiliesExportItemFamilyItemSchema.optional())
    .optional(),
});
export { ItemFamiliesExportBodySchema };
export type ItemFamiliesExportBody = z.infer<
  typeof ItemFamiliesExportBodySchema
>;

//Export.items

const ItemsExportBusinessEntityIdSchema = z.object({
  is_present: z.enum(['true', 'false']).optional(),
  is: z.string().min(1).optional(),
});
const ItemsExportIncludeSiteLevelResourcesSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const ItemsExportIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
  not_in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
});
const ItemsExportItemFamilyIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
  not_in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
});
const ItemsExportTypeSchema = z.object({
  is: z.enum(['plan', 'addon', 'charge']).optional(),
  is_not: z.enum(['plan', 'addon', 'charge']).optional(),
  in: z.enum(['plan', 'addon', 'charge']).optional(),
  not_in: z.enum(['plan', 'addon', 'charge']).optional(),
});
const ItemsExportNameSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const ItemsExportItemApplicabilitySchema = z.object({
  is: z.enum(['all', 'restricted']).optional(),
  is_not: z.enum(['all', 'restricted']).optional(),
  in: z.enum(['all', 'restricted']).optional(),
  not_in: z.enum(['all', 'restricted']).optional(),
});
const ItemsExportStatusSchema = z.object({
  is: z.enum(['active', 'archived', 'deleted']).optional(),
  is_not: z.enum(['active', 'archived', 'deleted']).optional(),
  in: z.enum(['active', 'archived', 'deleted']).optional(),
  not_in: z.enum(['active', 'archived', 'deleted']).optional(),
});
const ItemsExportIsGiftableSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const ItemsExportUpdatedAtSchema = z.object({
  after: z.string().regex(RegExp('^d{10}$')).optional(),
  before: z.string().regex(RegExp('^d{10}$')).optional(),
  on: z.string().regex(RegExp('^d{10}$')).optional(),
  between: z.string().regex(RegExp('^[d{10},d{10}]$')).optional(),
});
const ItemsExportEnabledForCheckoutSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const ItemsExportEnabledInPortalSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const ItemsExportMeteredSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const ItemsExportUsageCalculationSchema = z.object({
  is: z.enum(['sum_of_usages', 'last_usage', 'max_usage']).optional(),
  is_not: z.enum(['sum_of_usages', 'last_usage', 'max_usage']).optional(),
  in: z.enum(['sum_of_usages', 'last_usage', 'max_usage']).optional(),
  not_in: z.enum(['sum_of_usages', 'last_usage', 'max_usage']).optional(),
});
const ItemsExportChannelSchema = z.object({
  is: z.enum(['web', 'app_store', 'play_store']).optional(),
  is_not: z.enum(['web', 'app_store', 'play_store']).optional(),
  in: z.enum(['web', 'app_store', 'play_store']).optional(),
  not_in: z.enum(['web', 'app_store', 'play_store']).optional(),
});
const ItemsExportItemItemSchema = z.object({
  id: ItemsExportIdSchema.optional(),
  item_family_id: ItemsExportItemFamilyIdSchema.optional(),
  type: ItemsExportTypeSchema.optional(),
  name: ItemsExportNameSchema.optional(),
  item_applicability: ItemsExportItemApplicabilitySchema.optional(),
  status: ItemsExportStatusSchema.optional(),
  is_giftable: ItemsExportIsGiftableSchema.optional(),
  updated_at: ItemsExportUpdatedAtSchema.optional(),
  enabled_for_checkout: ItemsExportEnabledForCheckoutSchema.optional(),
  enabled_in_portal: ItemsExportEnabledInPortalSchema.optional(),
  metered: ItemsExportMeteredSchema.optional(),
  usage_calculation: ItemsExportUsageCalculationSchema.optional(),
  channel: ItemsExportChannelSchema.optional(),
});
const ItemsExportBodySchema = z.looseObject({
  business_entity_id: ItemsExportBusinessEntityIdSchema.optional(),
  include_site_level_resources:
    ItemsExportIncludeSiteLevelResourcesSchema.optional(),
  item: z.array(ItemsExportItemItemSchema.optional()).optional(),
});
export { ItemsExportBodySchema };
export type ItemsExportBody = z.infer<typeof ItemsExportBodySchema>;

//Export.attachedItems

const AttachedItemsExportItemTypeSchema = z.object({
  is: z.enum(['plan', 'addon', 'charge']).optional(),
  is_not: z.enum(['plan', 'addon', 'charge']).optional(),
  in: z.enum(['plan', 'addon', 'charge']).optional(),
  not_in: z.enum(['plan', 'addon', 'charge']).optional(),
});
const AttachedItemsExportIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
  not_in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
});
const AttachedItemsExportItemIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
  not_in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
});
const AttachedItemsExportTypeSchema = z.object({
  is: z.enum(['recommended', 'mandatory', 'optional']).optional(),
  is_not: z.enum(['recommended', 'mandatory', 'optional']).optional(),
  in: z.enum(['recommended', 'mandatory', 'optional']).optional(),
  not_in: z.enum(['recommended', 'mandatory', 'optional']).optional(),
});
const AttachedItemsExportChargeOnEventSchema = z.object({
  is: z
    .enum([
      'subscription_creation',
      'subscription_trial_start',
      'plan_activation',
      'subscription_activation',
      'contract_termination',
      'on_demand',
    ])
    .optional(),
  is_not: z
    .enum([
      'subscription_creation',
      'subscription_trial_start',
      'plan_activation',
      'subscription_activation',
      'contract_termination',
      'on_demand',
    ])
    .optional(),
  in: z
    .enum([
      'subscription_creation',
      'subscription_trial_start',
      'plan_activation',
      'subscription_activation',
      'contract_termination',
      'on_demand',
    ])
    .optional(),
  not_in: z
    .enum([
      'subscription_creation',
      'subscription_trial_start',
      'plan_activation',
      'subscription_activation',
      'contract_termination',
      'on_demand',
    ])
    .optional(),
});
const AttachedItemsExportUpdatedAtSchema = z.object({
  after: z.string().regex(RegExp('^d{10}$')).optional(),
  before: z.string().regex(RegExp('^d{10}$')).optional(),
  on: z.string().regex(RegExp('^d{10}$')).optional(),
  between: z.string().regex(RegExp('^[d{10},d{10}]$')).optional(),
});
const AttachedItemsExportParentItemIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
  not_in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
});
const AttachedItemsExportAttachedItemItemSchema = z.object({
  id: AttachedItemsExportIdSchema.optional(),
  item_id: AttachedItemsExportItemIdSchema.optional(),
  type: AttachedItemsExportTypeSchema.optional(),
  charge_on_event: AttachedItemsExportChargeOnEventSchema.optional(),
  updated_at: AttachedItemsExportUpdatedAtSchema.optional(),
  parent_item_id: AttachedItemsExportParentItemIdSchema.optional(),
});
const AttachedItemsExportBodySchema = z.looseObject({
  item_type: AttachedItemsExportItemTypeSchema.optional(),
  attached_item: z
    .array(AttachedItemsExportAttachedItemItemSchema.optional())
    .optional(),
});
export { AttachedItemsExportBodySchema };
export type AttachedItemsExportBody = z.infer<
  typeof AttachedItemsExportBodySchema
>;

//Export.priceVariants

const PriceVariantsExportBusinessEntityIdSchema = z.object({
  is_present: z.enum(['true', 'false']).optional(),
  is: z.string().min(1).optional(),
});
const PriceVariantsExportIncludeSiteLevelResourcesSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const PriceVariantsExportIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
  not_in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
});
const PriceVariantsExportNameSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
  not_in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
});
const PriceVariantsExportStatusSchema = z.object({
  is: z.enum(['active', 'archived']).optional(),
  is_not: z.enum(['active', 'archived']).optional(),
  in: z.enum(['active', 'archived']).optional(),
  not_in: z.enum(['active', 'archived']).optional(),
});
const PriceVariantsExportUpdatedAtSchema = z.object({
  after: z.string().regex(RegExp('^d{10}$')).optional(),
  before: z.string().regex(RegExp('^d{10}$')).optional(),
  on: z.string().regex(RegExp('^d{10}$')).optional(),
  between: z.string().regex(RegExp('^[d{10},d{10}]$')).optional(),
});
const PriceVariantsExportCreatedAtSchema = z.object({
  after: z.string().regex(RegExp('^d{10}$')).optional(),
  before: z.string().regex(RegExp('^d{10}$')).optional(),
  on: z.string().regex(RegExp('^d{10}$')).optional(),
  between: z.string().regex(RegExp('^[d{10},d{10}]$')).optional(),
});
const PriceVariantsExportPriceVariantItemSchema = z.object({
  id: PriceVariantsExportIdSchema.optional(),
  name: PriceVariantsExportNameSchema.optional(),
  status: PriceVariantsExportStatusSchema.optional(),
  updated_at: PriceVariantsExportUpdatedAtSchema.optional(),
  created_at: PriceVariantsExportCreatedAtSchema.optional(),
});
const PriceVariantsExportBodySchema = z.looseObject({
  business_entity_id: PriceVariantsExportBusinessEntityIdSchema.optional(),
  include_site_level_resources:
    PriceVariantsExportIncludeSiteLevelResourcesSchema.optional(),
  price_variant: z
    .array(PriceVariantsExportPriceVariantItemSchema.optional())
    .optional(),
});
export { PriceVariantsExportBodySchema };
export type PriceVariantsExportBody = z.infer<
  typeof PriceVariantsExportBodySchema
>;
