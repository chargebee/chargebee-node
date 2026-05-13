// Generated Zod schemas: Gift
// Actions: create, createForItems, list, updateGift
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//Gift.create

const CreateGiftGifterSchema = z.object({
  customer_id: z.string().max(50),
  signature: z.string().max(50),
  note: z.string().max(500).optional(),
  payment_src_id: z.string().max(40).optional(),
});
const CreateGiftGiftReceiverSchema = z.object({
  customer_id: z.string().max(50),
  first_name: z.string().max(150),
  last_name: z.string().max(150),
  email: z.string().email().max(70),
});
const CreateGiftAdditionalInformationSchema = z.looseObject({});
const CreateGiftPaymentIntentSchema = z.object({
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
  additional_information: CreateGiftAdditionalInformationSchema.optional(),
});
const CreateGiftShippingAddressSchema = z.object({
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
const CreateGiftSubscriptionSchema = z.looseObject({
  plan_id: z.string().max(100),
  plan_quantity: z.number().int().min(1).optional(),
  plan_quantity_in_decimal: z.string().max(33).optional(),
});
const CreateGiftAddonsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
});
const CreateGiftBodySchema = z.looseObject({
  scheduled_at: z.number().int().optional(),
  auto_claim: z.boolean().default(false).optional(),
  no_expiry: z.boolean().optional(),
  claim_expiry_date: z.number().int().optional(),
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  gifter: CreateGiftGifterSchema.optional(),
  gift_receiver: CreateGiftGiftReceiverSchema.optional(),
  payment_intent: CreateGiftPaymentIntentSchema.optional(),
  shipping_address: CreateGiftShippingAddressSchema.optional(),
  subscription: CreateGiftSubscriptionSchema.optional(),
  addons: CreateGiftAddonsSchema.optional(),
});
export { CreateGiftBodySchema };
export type CreateGiftBody = z.infer<typeof CreateGiftBodySchema>;

//Gift.createForItems

const CreateForItemsGiftMetaDataSchema = z.looseObject({});
const CreateForItemsGiftGifterSchema = z.object({
  customer_id: z.string().max(50),
  signature: z.string().max(50),
  note: z.string().max(500).optional(),
  payment_src_id: z.string().max(40).optional(),
});
const CreateForItemsGiftGiftReceiverSchema = z.object({
  customer_id: z.string().max(50),
  first_name: z.string().max(150),
  last_name: z.string().max(150),
  email: z.string().email().max(70),
});
const CreateForItemsGiftAdditionalInformationSchema = z.looseObject({});
const CreateForItemsGiftPaymentIntentSchema = z.object({
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
    CreateForItemsGiftAdditionalInformationSchema.optional(),
});
const CreateForItemsGiftShippingAddressSchema = z.object({
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
const CreateForItemsGiftSubscriptionItemsSchema = z.object({
  item_price_id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
});
const CreateForItemsGiftItemTiersSchema = z.object({
  item_price_id: z.array(z.string().max(100).optional()).optional(),
  starting_unit: z.array(z.number().int().min(1).optional()).optional(),
  ending_unit: z.array(z.number().int().optional()).optional(),
  price: z.array(z.number().int().min(0).optional()).optional(),
  starting_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  ending_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  price_in_decimal: z.array(z.string().max(39).optional()).optional(),
});
const CreateForItemsGiftBodySchema = z.looseObject({
  scheduled_at: z.number().int().optional(),
  auto_claim: z.boolean().default(false).optional(),
  no_expiry: z.boolean().optional(),
  claim_expiry_date: z.number().int().optional(),
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  meta_data: CreateForItemsGiftMetaDataSchema.optional(),
  gifter: CreateForItemsGiftGifterSchema.optional(),
  gift_receiver: CreateForItemsGiftGiftReceiverSchema.optional(),
  payment_intent: CreateForItemsGiftPaymentIntentSchema.optional(),
  shipping_address: CreateForItemsGiftShippingAddressSchema.optional(),
  subscription_items: CreateForItemsGiftSubscriptionItemsSchema.optional(),
  item_tiers: CreateForItemsGiftItemTiersSchema.optional(),
});
export { CreateForItemsGiftBodySchema };
export type CreateForItemsGiftBody = z.infer<
  typeof CreateForItemsGiftBodySchema
>;

//Gift.list

const ListGiftStatusSchema = z.object({
  is: z
    .enum(['scheduled', 'unclaimed', 'claimed', 'cancelled', 'expired'])
    .optional(),
  is_not: z
    .enum(['scheduled', 'unclaimed', 'claimed', 'cancelled', 'expired'])
    .optional(),
  in: z
    .enum(['scheduled', 'unclaimed', 'claimed', 'cancelled', 'expired'])
    .optional(),
  not_in: z
    .enum(['scheduled', 'unclaimed', 'claimed', 'cancelled', 'expired'])
    .optional(),
});
const ListGiftEmailSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const ListGiftCustomerIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const ListGiftGiftReceiverSchema = z.object({
  email: ListGiftEmailSchema.optional(),
  customer_id: ListGiftCustomerIdSchema.optional(),
});
const ListGiftGifterSchema = z.object({
  customer_id: ListGiftCustomerIdSchema.optional(),
});
const ListGiftBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  status: ListGiftStatusSchema.optional(),
  gift_receiver: ListGiftGiftReceiverSchema.optional(),
  gifter: ListGiftGifterSchema.optional(),
});
export { ListGiftBodySchema };
export type ListGiftBody = z.infer<typeof ListGiftBodySchema>;

//Gift.updateGift

const UpdateGiftGiftBodySchema = z.looseObject({
  scheduled_at: z.number().int(),
  comment: z.string().max(250).optional(),
});
export { UpdateGiftGiftBodySchema };
export type UpdateGiftGiftBody = z.infer<typeof UpdateGiftGiftBodySchema>;
