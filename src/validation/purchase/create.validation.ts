// Generated Zod validator: Purchase.create
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const createPurchaseInvoiceInfoSchema = z.object({
  po_number: z.string().max(100).optional(),
  notes: z.string().max(2000).optional(),
});
const createPurchasePaymentScheduleSchema = z.object({
  scheme_id: z.string().max(40).optional(),
  amount: z.number().int().min(0).optional(),
});
const createPurchaseStatementDescriptorSchema = z.object({
  descriptor: z.string().max(65000).optional(),
});
const createPurchaseAdditionalInformationSchema = z.looseObject({});
const createPurchasePaymentIntentSchema = z.object({
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
  additional_information: createPurchaseAdditionalInformationSchema.optional(),
});
const createPurchasePurchaseItemsSchema = z.object({
  index: z.array(z.number().int().min(0).optional()),
  item_price_id: z.array(z.string().max(100).optional()),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  unit_amount: z.array(z.number().int().min(0).optional()).optional(),
  unit_amount_in_decimal: z.array(z.string().max(39).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
});
const createPurchaseItemTiersSchema = z.object({
  index: z.array(z.number().int().min(0).optional()),
  item_price_id: z.array(z.string().max(100).optional()).optional(),
  starting_unit: z.array(z.number().int().min(1).optional()).optional(),
  ending_unit: z.array(z.number().int().optional()).optional(),
  price: z.array(z.number().int().min(0).optional()).optional(),
  starting_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  ending_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  price_in_decimal: z.array(z.string().max(39).optional()).optional(),
});
const createPurchaseShippingAddressesSchema = z.object({
  first_name: z.array(z.string().max(150).optional()).optional(),
  last_name: z.array(z.string().max(150).optional()).optional(),
  email: z.array(z.string().email().max(70).optional()).optional(),
  company: z.array(z.string().max(250).optional()).optional(),
  phone: z.array(z.string().max(50).optional()).optional(),
  line1: z.array(z.string().max(150).optional()).optional(),
  line2: z.array(z.string().max(150).optional()).optional(),
  line3: z.array(z.string().max(150).optional()).optional(),
  city: z.array(z.string().max(50).optional()).optional(),
  state: z.array(z.string().max(50).optional()).optional(),
  state_code: z.array(z.string().max(50).optional()).optional(),
  country: z.array(z.string().max(50).optional()).optional(),
  zip: z.array(z.string().max(20).optional()).optional(),
  validation_status: z
    .array(
      z
        .enum(['not_validated', 'valid', 'partially_valid', 'invalid'])
        .optional(),
    )
    .optional(),
});
const createPurchaseDiscountsSchema = z.object({
  index: z.array(z.number().int().min(0).optional()).optional(),
  coupon_id: z.array(z.string().max(100).optional()).optional(),
  percentage: z.array(z.number().min(0.01).max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  amount: z.array(z.number().int().min(0).optional()).optional(),
  included_in_mrr: z.array(z.boolean().optional()).optional(),
});
const createPurchaseMetaDataItemSchema = z.looseObject({});
const createPurchaseSubscriptionInfoSchema = z.object({
  index: z.array(z.number().int().min(0).optional()),
  subscription_id: z.array(z.string().max(50).optional()).optional(),
  billing_cycles: z.array(z.number().int().min(0).optional()).optional(),
  contract_term_billing_cycle_on_renewal: z
    .array(z.number().int().min(1).max(100).optional())
    .optional(),
  meta_data: z.array(createPurchaseMetaDataItemSchema.optional()).optional(),
});
const createPurchaseContractTermsSchema = z.object({
  index: z.array(z.number().int().min(0).optional()),
  action_at_term_end: z
    .array(z.enum(['renew', 'evergreen', 'cancel', 'renew_once']).optional())
    .optional(),
  cancellation_cutoff_period: z.array(z.number().int().optional()).optional(),
});
const createPurchaseBodySchema = z.looseObject({
  customer_id: z.string().max(50),
  payment_source_id: z.string().max(40).optional(),
  replace_primary_payment_source: z.boolean().default(true).optional(),
  invoice_info: createPurchaseInvoiceInfoSchema.optional(),
  payment_schedule: createPurchasePaymentScheduleSchema.optional(),
  statement_descriptor: createPurchaseStatementDescriptorSchema.optional(),
  payment_intent: createPurchasePaymentIntentSchema.optional(),
  purchase_items: createPurchasePurchaseItemsSchema.optional(),
  item_tiers: createPurchaseItemTiersSchema.optional(),
  shipping_addresses: createPurchaseShippingAddressesSchema.optional(),
  discounts: createPurchaseDiscountsSchema.optional(),
  subscription_info: createPurchaseSubscriptionInfoSchema.optional(),
  contract_terms: createPurchaseContractTermsSchema.optional(),
});
export { createPurchaseBodySchema };
