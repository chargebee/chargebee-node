///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
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

    card_type?:'visa' | 'mastercard' | 'american_express' | 'discover' | 'jcb' | 'diners_club' | 'bancontact' | 'cmr_falabella' | 'tarjeta_naranja' | 'nativa' | 'cencosud' | 'cabal' | 'argencard' | 'elo' | 'hipercard' | 'carnet' | 'rupay' | 'maestro' | 'dankort' | 'cartes_bancaires' | 'other' | 'not_applicable';

    funding_type:'credit' | 'debit' | 'prepaid' | 'not_known' | 'not_applicable';

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

    powered_by?:'ideal' | 'sofort' | 'bancontact' | 'giropay' | 'card' | 'latam_local_card' | 'payconiq' | 'not_applicable';

    customer_id:string;

    masked_number?:string;

  }
  export namespace Card {
    export class CardResource {  
      retrieve(customer_id:string):ChargebeeRequest<RetrieveResponse>;
       
      update_card_for_customer(customer_id:string, input:UpdateCardForCustomerInputParam):ChargebeeRequest<UpdateCardForCustomerResponse>;
       
      switch_gateway_for_customer(customer_id:string, input:SwitchGatewayForCustomerInputParam):ChargebeeRequest<SwitchGatewayForCustomerResponse>;
       
      copy_card_for_customer(customer_id:string, input:CopyCardForCustomerInputParam):ChargebeeRequest<CopyCardForCustomerResponse>;
       
      delete_card_for_customer(customer_id:string):ChargebeeRequest<DeleteCardForCustomerResponse>;
    }
    export interface RetrieveResponse {  
       card:Card;
    }
    
    export interface UpdateCardForCustomerResponse {  
       customer:Customer;
       
       card:Card;
    }
    export interface UpdateCardForCustomerInputParam {
       
      customer?:{vat_number?:string};
       
      gateway?:Gateway;
       
      gateway_account_id?:string;
       
      tmp_token?:string;
       
      first_name?:string;
       
      last_name?:string;
       
      number:string;
       
      expiry_month:number;
       
      expiry_year:number;
       
      cvv?:string;
       
      preferred_scheme?:'cartes_bancaires' | 'mastercard' | 'visa';
       
      billing_addr1?:string;
       
      billing_addr2?:string;
       
      billing_city?:string;
       
      billing_state_code?:string;
       
      billing_state?:string;
       
      billing_zip?:string;
       
      billing_country?:string;
       
      ip_address?:string;
    }
    export interface SwitchGatewayForCustomerResponse {  
       customer:Customer;
       
       card:Card;
    }
    export interface SwitchGatewayForCustomerInputParam {
       
      gateway?:Gateway;
       
      gateway_account_id:string;
    }
    export interface CopyCardForCustomerResponse {  
       third_party_payment_method:ThirdPartyPaymentMethod;
    }
    export interface CopyCardForCustomerInputParam {
       
      gateway_account_id:string;
    }
    export interface DeleteCardForCustomerResponse {  
       customer:Customer;
    }
    
    
  }
}