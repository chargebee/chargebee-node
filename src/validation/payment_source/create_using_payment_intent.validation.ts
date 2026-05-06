// Generated Zod validator: PaymentSource.createUsingPaymentIntent
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const createUsingPaymentIntentPaymentSourceAdditionalInfoSchema = z.looseObject(
  {},
);
const createUsingPaymentIntentPaymentSourceAdditionalInformationSchema =
  z.looseObject({});
const createUsingPaymentIntentPaymentSourcePaymentIntentSchema = z.object({
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
    createUsingPaymentIntentPaymentSourceAdditionalInfoSchema.optional(),
  additional_information:
    createUsingPaymentIntentPaymentSourceAdditionalInformationSchema.optional(),
});
const createUsingPaymentIntentPaymentSourceBodySchema = z.looseObject({
  customer_id: z.string().max(50),
  replace_primary_payment_source: z.boolean().default(false).optional(),
  payment_intent:
    createUsingPaymentIntentPaymentSourcePaymentIntentSchema.optional(),
});
export { createUsingPaymentIntentPaymentSourceBodySchema };
