// Generated Zod schemas: PaymentIntent
// Actions: create, update
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//PaymentIntent.create

const CreatePaymentIntentBodySchema = z.looseObject({
  business_entity_id: z.string().max(50).optional(),
  customer_id: z.string().max(50).optional(),
  amount: z.number().int().min(0),
  currency_code: z.string().max(3),
  gateway_account_id: z.string().max(50).optional(),
  reference_id: z.string().max(200).optional(),
  defer_payment_method_type: z.boolean().default(false).optional(),
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
  success_url: z.string().max(250).optional(),
  failure_url: z.string().max(250).optional(),
});
export { CreatePaymentIntentBodySchema };
export type CreatePaymentIntentBody = z.infer<
  typeof CreatePaymentIntentBodySchema
>;

//PaymentIntent.update

const UpdatePaymentIntentBodySchema = z.looseObject({
  amount: z.number().int().min(0).optional(),
  currency_code: z.string().max(3).optional(),
  gateway_account_id: z.string().max(50).optional(),
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
  success_url: z.string().max(250).optional(),
  failure_url: z.string().max(250).optional(),
});
export { UpdatePaymentIntentBodySchema };
export type UpdatePaymentIntentBody = z.infer<
  typeof UpdatePaymentIntentBodySchema
>;
