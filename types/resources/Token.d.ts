///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface Token {
    
    id:string;
    gateway:Gateway;
    gateway_account_id:string;
    payment_method_type:PaymentMethodType;
    status:'consumed' | 'new' | 'expired';
    id_at_vault:string;
    vault:'spreedly' | 'gateway';
    ip_address?:string;
    resource_version?:number;
    updated_at?:number;
    created_at:number;
    expired_at?:number;
  }
  export namespace Token {
    export class TokenResource {
      create_using_temp_token(input:CreateUsingTempTokenInputParam):ChargebeeRequest<CreateUsingTempTokenResponse>;
      create_for_card(input?:CreateForCardInputParam):ChargebeeRequest<CreateForCardResponse>;
      retrieve(cb_token_id:string):ChargebeeRequest<RetrieveResponse>;
    }
    export interface CreateUsingTempTokenResponse {
      token:Token;
    }
    export interface CreateUsingTempTokenInputParam {
      
      gateway_account_id?:string;
      payment_method_type:PaymentMethodType;
      id_at_vault:string;
      gw_obj_type?:string;
      currency_code?:string;
      additional_information?:object;
      token_additional_detail?:{expiry_month?:number,expiry_year?:number,first_name?:string,last_name?:string};
      token_billing_address?:{city?:string,country_code?:string,line1?:string,line2?:string,state?:string,state_code?:string,zip?:string};
    }
    export interface CreateForCardResponse {
      token:Token;
    }
    export interface CreateForCardInputParam {
      
      card?:{additional_information?:object,billing_addr1?:string,billing_addr2?:string,billing_city?:string,billing_country?:string,billing_state?:string,billing_state_code?:string,billing_zip?:string,card_type?:'discover' | 'bancontact' | 'other' | 'visa' | 'jcb' | 'diners_club' | 'mastercard' | 'not_applicable' | 'american_express',cvv?:string,expiry_month:number,expiry_year:number,first_name?:string,gateway_account_id?:string,last_name?:string,number:string};
    }
    export interface RetrieveResponse {
      token:Token;
    }
    
    
  }
}