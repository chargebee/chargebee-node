// Generated Zod validator: Gift.create
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const createGiftGifterSchema = z.object({
  customer_id: z.string().max(50),
  signature: z.string().max(50),
  note: z.string().max(500).optional(),
  payment_src_id: z.string().max(40).optional(),
});
const createGiftGiftReceiverSchema = z.object({
  customer_id: z.string().max(50),
  first_name: z.string().max(150),
  last_name: z.string().max(150),
  email: z.string().email().max(70),
});
const createGiftAdditionalInformationSchema = z.looseObject({});
const createGiftPaymentIntentSchema = z.object({
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
  additional_information: createGiftAdditionalInformationSchema.optional(),
});
const createGiftShippingAddressSchema = z.object({
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
const createGiftSubscriptionSchema = z.looseObject({
  plan_id: z.string().max(100),
  plan_quantity: z.number().int().min(1).optional(),
  plan_quantity_in_decimal: z.string().max(33).optional(),
});
const createGiftAddonsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
});
const createGiftBodySchema = z.looseObject({
  scheduled_at: z.number().int().optional(),
  auto_claim: z.boolean().default(false).optional(),
  no_expiry: z.boolean().optional(),
  claim_expiry_date: z.number().int().optional(),
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  gifter: createGiftGifterSchema.optional(),
  gift_receiver: createGiftGiftReceiverSchema.optional(),
  payment_intent: createGiftPaymentIntentSchema.optional(),
  shipping_address: createGiftShippingAddressSchema.optional(),
  subscription: createGiftSubscriptionSchema.optional(),
  addons: createGiftAddonsSchema.optional(),
});
export { createGiftBodySchema };
