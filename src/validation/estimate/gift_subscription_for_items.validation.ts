// Generated Zod validator: Estimate.giftSubscriptionForItems
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const giftSubscriptionForItemsEstimateGiftSchema = z.object({
  scheduled_at: z.number().int().optional(),
  auto_claim: z.boolean().default(false).optional(),
  no_expiry: z.boolean().optional(),
  claim_expiry_date: z.number().int().optional(),
});
const giftSubscriptionForItemsEstimateGifterSchema = z.object({
  customer_id: z.string().max(50),
  signature: z.string().max(50),
  note: z.string().max(500).optional(),
  payment_src_id: z.string().max(40).optional(),
});
const giftSubscriptionForItemsEstimateGiftReceiverSchema = z.object({
  customer_id: z.string().max(50),
  first_name: z.string().max(150),
  last_name: z.string().max(150),
  email: z.string().email().max(70),
});
const giftSubscriptionForItemsEstimateAdditionalInformationSchema =
  z.looseObject({});
const giftSubscriptionForItemsEstimatePaymentIntentSchema = z.object({
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
    giftSubscriptionForItemsEstimateAdditionalInformationSchema.optional(),
});
const giftSubscriptionForItemsEstimateShippingAddressSchema = z.object({
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
const giftSubscriptionForItemsEstimateSubscriptionItemsSchema = z.object({
  item_price_id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
});
const giftSubscriptionForItemsEstimateItemTiersSchema = z.object({
  item_price_id: z.array(z.string().max(100).optional()).optional(),
  starting_unit: z.array(z.number().int().min(1).optional()).optional(),
  ending_unit: z.array(z.number().int().optional()).optional(),
  price: z.array(z.number().int().min(0).optional()).optional(),
  starting_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  ending_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  price_in_decimal: z.array(z.string().max(39).optional()).optional(),
});
const giftSubscriptionForItemsEstimateBodySchema = z.looseObject({
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  gift: giftSubscriptionForItemsEstimateGiftSchema.optional(),
  gifter: giftSubscriptionForItemsEstimateGifterSchema.optional(),
  gift_receiver: giftSubscriptionForItemsEstimateGiftReceiverSchema.optional(),
  payment_intent:
    giftSubscriptionForItemsEstimatePaymentIntentSchema.optional(),
  shipping_address:
    giftSubscriptionForItemsEstimateShippingAddressSchema.optional(),
  subscription_items:
    giftSubscriptionForItemsEstimateSubscriptionItemsSchema.optional(),
  item_tiers: giftSubscriptionForItemsEstimateItemTiersSchema.optional(),
});
export { giftSubscriptionForItemsEstimateBodySchema };
