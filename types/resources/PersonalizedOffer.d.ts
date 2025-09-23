///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface PersonalizedOffer {
    

    id:string;

    offer_id:string;

    content:PersonalizedOffer.Content;

    options:PersonalizedOffer.Option[];

  }
  export namespace PersonalizedOffer {
    export class PersonalizedOfferResource {  
      personalized_offers(input:PersonalizedOffersInputParam):ChargebeeRequest<PersonalizedOffersResponse>;
    }
    export interface PersonalizedOffersResponse {  
       personalized_offers:PersonalizedOffer[];
       
       brand?:Brand;
       
       expires_at:number;
    }
    export interface PersonalizedOffersInputParam {
       
      request_context?:{locale?:string,referrer_url?:string,timezone?:string,url?:string,user_agent?:string};
       
      first_name?:string;
       
      last_name?:string;
       
      email?:string;
       
      roles?:string[];
       
      external_user_id?:string;
       
      subscription_id?:string;
       
      customer_id:string;
       
      custom?:object;
    }
    export interface Content {  
      title:string;
       
      description:string;
    }
    export interface Option {  
      id:string;
       
      label:string;
       
      processing_type:'billing_update' | 'checkout' | 'url_redirect' | 'webhook' | 'email';
       
      processing_layout:'in_app' | 'full_page';
       
      redirect_url:string;
    }
  }
}