// Generated Zod validator: Subscription.reactivate
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const reactivateSubscriptionContractTermSchema = z.object({
  action_at_term_end: z.enum(['renew', 'evergreen', 'cancel']).optional(),
  cancellation_cutoff_period: z.number().int().optional(),
});
const reactivateSubscriptionStatementDescriptorSchema = z.object({
  descriptor: z.string().max(65000).optional(),
});
const reactivateSubscriptionAdditionalInformationSchema = z.looseObject({});
const reactivateSubscriptionPaymentIntentSchema = z.object({
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
    reactivateSubscriptionAdditionalInformationSchema.optional(),
});
const reactivateSubscriptionBodySchema = z.looseObject({
  trial_end: z.number().int().optional(),
  billing_cycles: z.number().int().min(0).optional(),
  trial_period_days: z.number().int().min(1).max(365).optional(),
  reactivate_from: z.number().int().optional(),
  invoice_immediately: z.boolean().optional(),
  billing_alignment_mode: z.enum(['immediate', 'delayed']).optional(),
  terms_to_charge: z.number().int().min(1).optional(),
  invoice_date: z.number().int().optional(),
  contract_term_billing_cycle_on_renewal: z
    .number()
    .int()
    .min(1)
    .max(100)
    .optional(),
  payment_initiator: z.enum(['customer', 'merchant']).optional(),
  contract_term: reactivateSubscriptionContractTermSchema.optional(),
  statement_descriptor:
    reactivateSubscriptionStatementDescriptorSchema.optional(),
  payment_intent: reactivateSubscriptionPaymentIntentSchema.optional(),
});
export { reactivateSubscriptionBodySchema };
