// Generated Zod schemas: Card
// Actions: updateCardForCustomer, switchGatewayForCustomer, copyCardForCustomer
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//Card.updateCardForCustomer

const UpdateCardForCustomerCardCustomerSchema = z.object({
  vat_number: z.string().max(20).optional(),
});
const UpdateCardForCustomerCardBodySchema = z.looseObject({
  gateway: z
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
    ])
    .optional(),
  gateway_account_id: z.string().max(50).optional(),
  tmp_token: z.string().max(300).optional(),
  first_name: z.string().max(50).optional(),
  last_name: z.string().max(50).optional(),
  number: z.string().max(1500),
  expiry_month: z.number().int().min(1).max(12),
  expiry_year: z.number().int(),
  cvv: z.string().max(520).optional(),
  preferred_scheme: z
    .enum(['cartes_bancaires', 'mastercard', 'visa'])
    .optional(),
  billing_addr1: z.string().max(150).optional(),
  billing_addr2: z.string().max(150).optional(),
  billing_city: z.string().max(50).optional(),
  billing_state_code: z.string().max(50).optional(),
  billing_state: z.string().max(50).optional(),
  billing_zip: z.string().max(20).optional(),
  billing_country: z.string().max(50).optional(),
  ip_address: z.string().max(50).optional(),
  customer: UpdateCardForCustomerCardCustomerSchema.optional(),
});
export { UpdateCardForCustomerCardBodySchema };
export type UpdateCardForCustomerCardBody = z.infer<
  typeof UpdateCardForCustomerCardBodySchema
>;

//Card.switchGatewayForCustomer

const SwitchGatewayForCustomerCardBodySchema = z.looseObject({
  gateway: z
    .enum([
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
      'wirecard',
      'orbital',
      'moneris_us',
      'moneris',
      'bluesnap',
      'cybersource',
      'vantiv',
      'checkout_com',
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
    ])
    .optional(),
  gateway_account_id: z.string().max(50),
});
export { SwitchGatewayForCustomerCardBodySchema };
export type SwitchGatewayForCustomerCardBody = z.infer<
  typeof SwitchGatewayForCustomerCardBodySchema
>;

//Card.copyCardForCustomer

const CopyCardForCustomerCardBodySchema = z.looseObject({
  gateway_account_id: z.string().max(50),
});
export { CopyCardForCustomerCardBodySchema };
export type CopyCardForCustomerCardBody = z.infer<
  typeof CopyCardForCustomerCardBodySchema
>;
