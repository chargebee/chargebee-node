///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface PaymentIntent {
    id: string;

    status: 'inited' | 'in_progress' | 'authorized' | 'consumed' | 'expired';

    currency_code?: string;

    amount: number;

    gateway_account_id: string;

    expires_at: number;

    reference_id?: string;

    payment_method_type?:
      | 'card'
      | 'ideal'
      | 'sofort'
      | 'bancontact'
      | 'google_pay'
      | 'dotpay'
      | 'giropay'
      | 'apple_pay'
      | 'upi'
      | 'netbanking_emandates'
      | 'paypal_express_checkout'
      | 'direct_debit'
      | 'boleto'
      | 'venmo'
      | 'amazon_payments'
      | 'pay_to'
      | 'faster_payments'
      | 'sepa_instant_transfer'
      | 'klarna_pay_now'
      | 'online_banking_poland';

    success_url?: string;

    failure_url?: string;

    created_at: number;

    modified_at: number;

    resource_version?: number;

    updated_at?: number;

    customer_id: string;

    gateway?: string;

    active_payment_attempt?: PaymentIntent.PaymentAttempt;

    business_entity_id?: string;
  }
  export namespace PaymentIntent {
    export class PaymentIntentResource {
      create(
        input: CreateInputParam,
      ): ChargebeeRequest<ChargebeeResponse<CreateResponse>>;

      update(
        payment_intent_id: string,
        input?: UpdateInputParam,
      ): ChargebeeRequest<ChargebeeResponse<UpdateResponse>>;

      retrieve(
        payment_intent_id: string,
      ): ChargebeeRequest<ChargebeeResponse<RetrieveResponse>>;
    }
    export interface CreateResponse {
      payment_intent: PaymentIntent;
    }

    export interface UpdateResponse {
      payment_intent: PaymentIntent;
    }

    export interface RetrieveResponse {
      payment_intent: PaymentIntent;
    }

    export interface PaymentAttempt {
      id?: string;

      status:
        | 'inited'
        | 'requires_identification'
        | 'requires_challenge'
        | 'requires_redirection'
        | 'authorized'
        | 'refused'
        | 'pending_authorization';

      payment_method_type?:
        | 'card'
        | 'ideal'
        | 'sofort'
        | 'bancontact'
        | 'google_pay'
        | 'dotpay'
        | 'giropay'
        | 'apple_pay'
        | 'upi'
        | 'netbanking_emandates'
        | 'paypal_express_checkout'
        | 'direct_debit'
        | 'boleto'
        | 'venmo'
        | 'amazon_payments'
        | 'pay_to'
        | 'faster_payments'
        | 'sepa_instant_transfer'
        | 'klarna_pay_now'
        | 'online_banking_poland';

      id_at_gateway?: string;

      error_code?: string;

      error_text?: string;

      created_at: number;

      modified_at: number;

      error_detail?: GatewayErrorDetail;
    }
    // REQUEST PARAMS
    //---------------

    export interface CreateInputParam {
      business_entity_id?: string;
      customer_id?: string;
      amount: number;
      currency_code: string;
      gateway_account_id?: string;
      reference_id?: string;
      payment_method_type?:
        | 'card'
        | 'ideal'
        | 'sofort'
        | 'bancontact'
        | 'google_pay'
        | 'dotpay'
        | 'giropay'
        | 'apple_pay'
        | 'upi'
        | 'netbanking_emandates'
        | 'paypal_express_checkout'
        | 'direct_debit'
        | 'boleto'
        | 'venmo'
        | 'amazon_payments'
        | 'pay_to'
        | 'faster_payments'
        | 'sepa_instant_transfer'
        | 'klarna_pay_now'
        | 'online_banking_poland';
      success_url?: string;
      failure_url?: string;
    }
    export interface UpdateInputParam {
      amount?: number;
      currency_code?: string;
      gateway_account_id?: string;
      payment_method_type?:
        | 'card'
        | 'ideal'
        | 'sofort'
        | 'bancontact'
        | 'google_pay'
        | 'dotpay'
        | 'giropay'
        | 'apple_pay'
        | 'upi'
        | 'netbanking_emandates'
        | 'paypal_express_checkout'
        | 'direct_debit'
        | 'boleto'
        | 'venmo'
        | 'amazon_payments'
        | 'pay_to'
        | 'faster_payments'
        | 'sepa_instant_transfer'
        | 'klarna_pay_now'
        | 'online_banking_poland';
      success_url?: string;
      failure_url?: string;
    }
  }
}
