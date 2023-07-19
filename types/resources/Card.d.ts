declare module 'chargebee' {
  export interface Card {
    
    payment_source_id:string;
    status:'valid' | 'expiring' | 'expired';
    gateway:Gateway;
    gateway_account_id?:string;
    ref_tx_id?:string;
    first_name?:string;
    last_name?:string;
    iin:string;
    last4:string;
    card_type?:'discover' | 'bancontact' | 'other' | 'visa' | 'jcb' | 'diners_club' | 'mastercard' | 'not_applicable' | 'american_express';
    funding_type:'not_known' | 'prepaid' | 'not_applicable' | 'credit' | 'debit';
    expiry_month:number;
    expiry_year:number;
    issuing_country?:string;
    billing_addr1?:string;
    billing_addr2?:string;
    billing_city?:string;
    billing_state_code?:string;
    billing_state?:string;
    billing_country?:string;
    billing_zip?:string;
    created_at:number;
    resource_version?:number;
    updated_at?:number;
    ip_address?:string;
    powered_by?:'giropay' | 'bancontact' | 'ideal' | 'latam_local_card' | 'not_applicable' | 'sofort' | 'card';
    customer_id:string;
    masked_number?:string;
  }
  export namespace Card {
    export class CardResource {
      copy_card_for_customer(customer_id:string, input:CopyCardForCustomerInputParam):ChargebeeRequest<CopyCardForCustomerResponse>;
      retrieve(customer_id:string):ChargebeeRequest<RetrieveResponse>;
      switch_gateway_for_customer(customer_id:string, input:SwitchGatewayForCustomerInputParam):ChargebeeRequest<SwitchGatewayForCustomerResponse>;
      delete_card_for_customer(customer_id:string):ChargebeeRequest<DeleteCardForCustomerResponse>;
      update_card_for_customer(customer_id:string, input:UpdateCardForCustomerInputParam):ChargebeeRequest<UpdateCardForCustomerResponse>;
    }
    export interface CopyCardForCustomerResponse {
      third_party_payment_method:ThirdPartyPaymentMethod;
    }
    export interface CopyCardForCustomerInputParam {
      
      gateway_account_id:string;
    }
    export interface RetrieveResponse {
      card:Card;
    }
    
    export interface SwitchGatewayForCustomerResponse {
      customer:Customer;
      card:Card;
    }
    export interface SwitchGatewayForCustomerInputParam {
      
      gateway_account_id:string;
    }
    export interface DeleteCardForCustomerResponse {
      customer:Customer;
    }
    
    export interface UpdateCardForCustomerResponse {
      customer:Customer;
      card:Card;
    }
    export interface UpdateCardForCustomerInputParam {
      
      gateway_account_id?:string;
      tmp_token?:string;
      first_name?:string;
      last_name?:string;
      number:string;
      expiry_month:number;
      expiry_year:number;
      cvv?:string;
      billing_addr1?:string;
      billing_addr2?:string;
      billing_city?:string;
      billing_state_code?:string;
      billing_state?:string;
      billing_zip?:string;
      billing_country?:string;
    }
    
  }
}