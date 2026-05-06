// Generated Zod validator: Subscription.resume
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const resumeSubscriptionAdditionalInformationSchema = z.looseObject({});
const resumeSubscriptionPaymentIntentSchema = z.object({
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
    resumeSubscriptionAdditionalInformationSchema.optional(),
});
const resumeSubscriptionBodySchema = z.looseObject({
  resume_option: z.enum(['immediately', 'specific_date']).optional(),
  resume_date: z.number().int().optional(),
  charges_handling: z
    .enum(['invoice_immediately', 'add_to_unbilled_charges'])
    .optional(),
  unpaid_invoices_handling: z
    .enum(['no_action', 'schedule_payment_collection'])
    .optional(),
  payment_initiator: z.enum(['customer', 'merchant']).optional(),
  payment_intent: resumeSubscriptionPaymentIntentSchema.optional(),
});
export { resumeSubscriptionBodySchema };
