declare module 'chargebee' {
  export interface PaymentIntent {
    
    id:string;
    status:'consumed' | 'in_progress' | 'inited' | 'expired' | 'authorized';
    currency_code?:string;
    amount:number;
    gateway_account_id:string;
    expires_at:number;
    reference_id?:string;
    payment_method_type?:'giropay' | 'ideal' | 'google_pay' | 'netbanking_emandates' | 'dotpay' | 'boleto' | 'direct_debit' | 'sofort' | 'upi' | 'apple_pay' | 'bancontact' | 'paypal_express_checkout' | 'card';
    success_url?:string;
    failure_url?:string;
    created_at:number;
    modified_at:number;
    resource_version?:number;
    updated_at?:number;
    customer_id:string;
    gateway?:string;
    business_entity_id?:string;
    active_payment_attempt?:PaymentIntent.PaymentAttempt;
  }
  export namespace PaymentIntent {
    export class PaymentIntentResource {
      retrieve(payment_intent_id:string):ChargebeeRequest<RetrieveResponse>;
      update(payment_intent_id:string, input?:UpdateInputParam):ChargebeeRequest<UpdateResponse>;
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
    }
    export interface RetrieveResponse {
      payment_intent:PaymentIntent;
    }
    
    export interface UpdateResponse {
      payment_intent:PaymentIntent;
    }
    export interface UpdateInputParam {
      
      amount?:number;
      currency_code?:string;
      gateway_account_id?:string;
      payment_method_type?:'giropay' | 'ideal' | 'google_pay' | 'netbanking_emandates' | 'dotpay' | 'boleto' | 'direct_debit' | 'sofort' | 'upi' | 'apple_pay' | 'bancontact' | 'paypal_express_checkout' | 'card';
      success_url?:string;
      failure_url?:string;
    }
    export interface CreateResponse {
      payment_intent:PaymentIntent;
    }
    export interface CreateInputParam {
      
      business_entity_id?:string;
      customer_id?:string;
      amount:number;
      currency_code:string;
      gateway_account_id?:string;
      reference_id?:string;
      payment_method_type?:'giropay' | 'ideal' | 'google_pay' | 'netbanking_emandates' | 'dotpay' | 'boleto' | 'direct_debit' | 'sofort' | 'upi' | 'apple_pay' | 'bancontact' | 'paypal_express_checkout' | 'card';
      success_url?:string;
      failure_url?:string;
    }
    export interface PaymentAttempt {
      id?:string;
      status?:'pending_authorization' | 'inited' | 'refused' | 'requires_challenge' | 'authorized' | 'requires_identification' | 'requires_redirection';
      payment_method_type?:'giropay' | 'ideal' | 'google_pay' | 'netbanking_emandates' | 'dotpay' | 'boleto' | 'direct_debit' | 'sofort' | 'upi' | 'apple_pay' | 'bancontact' | 'paypal_express_checkout' | 'card';
      id_at_gateway?:string;
      error_code?:string;
      error_text?:string;
      created_at?:number;
      modified_at?:number;
    }
  }
}