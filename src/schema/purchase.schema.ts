// Generated Zod schemas: Purchase
// Actions: create, estimate
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//Purchase.create

const CreatePurchaseInvoiceInfoSchema = z.object({
  po_number: z.string().max(100).optional(),
  notes: z.string().max(2000).optional(),
});
const CreatePurchasePaymentScheduleSchema = z.object({
  scheme_id: z.string().max(40).optional(),
  amount: z.number().int().min(0).optional(),
});
const CreatePurchaseStatementDescriptorSchema = z.object({
  descriptor: z.string().max(65000).optional(),
});
const CreatePurchaseAdditionalInformationSchema = z.looseObject({});
const CreatePurchasePaymentIntentSchema = z.object({
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
  additional_information: CreatePurchaseAdditionalInformationSchema.optional(),
});
const CreatePurchasePurchaseItemsSchema = z.object({
  index: z.array(z.number().int().min(0).optional()),
  item_price_id: z.array(z.string().max(100).optional()),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  unit_amount: z.array(z.number().int().min(0).optional()).optional(),
  unit_amount_in_decimal: z.array(z.string().max(39).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
});
const CreatePurchaseItemTiersSchema = z.object({
  index: z.array(z.number().int().min(0).optional()),
  item_price_id: z.array(z.string().max(100).optional()).optional(),
  starting_unit: z.array(z.number().int().min(1).optional()).optional(),
  ending_unit: z.array(z.number().int().optional()).optional(),
  price: z.array(z.number().int().min(0).optional()).optional(),
  starting_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  ending_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  price_in_decimal: z.array(z.string().max(39).optional()).optional(),
});
const CreatePurchaseShippingAddressesSchema = z.object({
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
const CreatePurchaseDiscountsSchema = z.object({
  index: z.array(z.number().int().min(0).optional()).optional(),
  coupon_id: z.array(z.string().max(100).optional()).optional(),
  percentage: z.array(z.number().min(0.01).max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  amount: z.array(z.number().int().min(0).optional()).optional(),
  included_in_mrr: z.array(z.boolean().optional()).optional(),
});
const CreatePurchaseMetaDataItemSchema = z.looseObject({});
const CreatePurchaseSubscriptionInfoSchema = z.object({
  index: z.array(z.number().int().min(0).optional()),
  subscription_id: z.array(z.string().max(50).optional()).optional(),
  billing_cycles: z.array(z.number().int().min(0).optional()).optional(),
  contract_term_billing_cycle_on_renewal: z
    .array(z.number().int().min(1).max(100).optional())
    .optional(),
  meta_data: z.array(CreatePurchaseMetaDataItemSchema.optional()).optional(),
});
const CreatePurchaseContractTermsSchema = z.object({
  index: z.array(z.number().int().min(0).optional()),
  action_at_term_end: z
    .array(z.enum(['renew', 'evergreen', 'cancel', 'renew_once']).optional())
    .optional(),
  cancellation_cutoff_period: z.array(z.number().int().optional()).optional(),
});
const CreatePurchaseBodySchema = z.looseObject({
  customer_id: z.string().max(50),
  payment_source_id: z.string().max(40).optional(),
  replace_primary_payment_source: z.boolean().default(true).optional(),
  invoice_info: CreatePurchaseInvoiceInfoSchema.optional(),
  payment_schedule: CreatePurchasePaymentScheduleSchema.optional(),
  statement_descriptor: CreatePurchaseStatementDescriptorSchema.optional(),
  payment_intent: CreatePurchasePaymentIntentSchema.optional(),
  purchase_items: CreatePurchasePurchaseItemsSchema.optional(),
  item_tiers: CreatePurchaseItemTiersSchema.optional(),
  shipping_addresses: CreatePurchaseShippingAddressesSchema.optional(),
  discounts: CreatePurchaseDiscountsSchema.optional(),
  subscription_info: CreatePurchaseSubscriptionInfoSchema.optional(),
  contract_terms: CreatePurchaseContractTermsSchema.optional(),
});
export { CreatePurchaseBodySchema };
export type CreatePurchaseBody = z.infer<typeof CreatePurchaseBodySchema>;

//Purchase.estimate

const EstimatePurchaseCustomerSchema = z.object({
  vat_number: z.string().max(20).optional(),
  vat_number_prefix: z.string().max(10).optional(),
  registered_for_gst: z.boolean().optional(),
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
  exemption_details: z.array(z.string().optional()).optional(),
  customer_type: z
    .enum(['residential', 'business', 'senior_citizen', 'industrial'])
    .optional(),
});
const EstimatePurchaseBillingAddressSchema = z.object({
  line1: z.string().max(150).optional(),
  line2: z.string().max(150).optional(),
  line3: z.string().max(150).optional(),
  city: z.string().max(50).optional(),
  state_code: z.string().max(50).optional(),
  zip: z.string().max(20).optional(),
  country: z.string().max(50).optional(),
  validation_status: z
    .enum(['not_validated', 'valid', 'partially_valid', 'invalid'])
    .optional(),
});
const EstimatePurchasePurchaseItemsSchema = z.object({
  index: z.array(z.number().int().min(0).optional()),
  item_price_id: z.array(z.string().max(100).optional()),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  unit_amount: z.array(z.number().int().min(0).optional()).optional(),
  unit_amount_in_decimal: z.array(z.string().max(39).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
});
const EstimatePurchaseItemTiersSchema = z.object({
  index: z.array(z.number().int().min(0).optional()),
  item_price_id: z.array(z.string().max(100).optional()).optional(),
  starting_unit: z.array(z.number().int().min(1).optional()).optional(),
  ending_unit: z.array(z.number().int().optional()).optional(),
  price: z.array(z.number().int().min(0).optional()).optional(),
  starting_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  ending_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  price_in_decimal: z.array(z.string().max(39).optional()).optional(),
});
const EstimatePurchaseShippingAddressesSchema = z.object({
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
const EstimatePurchaseDiscountsSchema = z.object({
  index: z.array(z.number().int().min(0).optional()).optional(),
  coupon_id: z.array(z.string().max(100).optional()).optional(),
  percentage: z.array(z.number().min(0.01).max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  amount: z.array(z.number().int().min(0).optional()).optional(),
  included_in_mrr: z.array(z.boolean().optional()).optional(),
});
const EstimatePurchaseSubscriptionInfoSchema = z.object({
  index: z.array(z.number().int().min(0).optional()),
  subscription_id: z.array(z.string().max(50).optional()).optional(),
  billing_cycles: z.array(z.number().int().min(0).optional()).optional(),
  contract_term_billing_cycle_on_renewal: z
    .array(z.number().int().min(1).max(100).optional())
    .optional(),
});
const EstimatePurchaseContractTermsSchema = z.object({
  index: z.array(z.number().int().min(0).optional()),
  action_at_term_end: z
    .array(z.enum(['renew', 'evergreen', 'cancel', 'renew_once']).optional())
    .optional(),
  cancellation_cutoff_period: z.array(z.number().int().optional()).optional(),
});
const EstimatePurchaseBodySchema = z.looseObject({
  client_profile_id: z.string().max(50).optional(),
  customer_id: z.string().max(50).optional(),
  customer: EstimatePurchaseCustomerSchema.optional(),
  billing_address: EstimatePurchaseBillingAddressSchema.optional(),
  purchase_items: EstimatePurchasePurchaseItemsSchema.optional(),
  item_tiers: EstimatePurchaseItemTiersSchema.optional(),
  shipping_addresses: EstimatePurchaseShippingAddressesSchema.optional(),
  discounts: EstimatePurchaseDiscountsSchema.optional(),
  subscription_info: EstimatePurchaseSubscriptionInfoSchema.optional(),
  contract_terms: EstimatePurchaseContractTermsSchema.optional(),
});
export { EstimatePurchaseBodySchema };
export type EstimatePurchaseBody = z.infer<typeof EstimatePurchaseBodySchema>;
