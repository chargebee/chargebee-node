///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface PricingPageSession {
    

    id?:string;

    url?:string;

    created_at?:number;

    expires_at?:number;

  }
  export namespace PricingPageSession {
    export class PricingPageSessionResource {  
      create_for_new_subscription(input:CreateForNewSubscriptionInputParam):ChargebeeRequest<CreateForNewSubscriptionResponse>;
       
      create_for_existing_subscription(input:CreateForExistingSubscriptionInputParam):ChargebeeRequest<CreateForExistingSubscriptionResponse>;
    }
    export interface CreateForNewSubscriptionResponse {  
       pricing_page_session:PricingPageSession;
    }
    export interface CreateForNewSubscriptionInputParam {
       
      pricing_page:{id:string};
       
      subscription?:object;
       
      customer?:object;
       
      billing_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      redirect_url?:string;
       
      business_entity_id?:string;
    }
    export interface CreateForExistingSubscriptionResponse {  
       pricing_page_session:PricingPageSession;
    }
    export interface CreateForExistingSubscriptionInputParam {
       
      pricing_page:{id:string};
       
      subscription:object;
       
      redirect_url?:string;
    }
    
  }
}