///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface Gift {
    

    id:string;

    status:'scheduled' | 'unclaimed' | 'claimed' | 'cancelled' | 'expired';

    scheduled_at?:number;

    auto_claim:boolean;

    no_expiry:boolean;

    claim_expiry_date?:number;

    resource_version?:number;

    updated_at?:number;

    gifter:Gift.Gifter;

    gift_receiver:Gift.GiftReceiver;

    gift_timelines?:Gift.GiftTimeline[];

  }
  export namespace Gift {
    export class GiftResource {  
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
       
      create_for_items(input:CreateForItemsInputParam):ChargebeeRequest<CreateForItemsResponse>;
       
      retrieve(gift_id:string):ChargebeeRequest<RetrieveResponse>;
       
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
       
      claim(gift_id:string):ChargebeeRequest<ClaimResponse>;
       
      cancel(gift_id:string):ChargebeeRequest<CancelResponse>;
       
      update_gift(gift_id:string, input:UpdateGiftInputParam):ChargebeeRequest<UpdateGiftResponse>;
    }
    export interface CreateResponse {  
       gift:Gift;
       
       subscription:Subscription;
       
       invoice?:Invoice;
    }
    export interface CreateInputParam {
       
      gifter:{customer_id:string,note?:string,payment_src_id?:string,signature:string};
       
      gift_receiver:{customer_id:string,email:string,first_name:string,last_name:string};
       
      payment_intent?:{additional_information?:object,gateway_account_id?:string,gw_payment_method_id?:string,gw_token?:string,id?:string,payment_method_type?:'card' | 'ideal' | 'sofort' | 'bancontact' | 'google_pay' | 'dotpay' | 'giropay' | 'apple_pay' | 'upi' | 'netbanking_emandates' | 'paypal_express_checkout' | 'direct_debit' | 'boleto' | 'venmo' | 'amazon_payments' | 'pay_to' | 'faster_payments' | 'sepa_instant_transfer' | 'klarna_pay_now' | 'online_banking_poland' | 'payconiq_by_bancontact',reference_id?:string};
       
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      subscription:object;
       
      addons?:{id?:string,quantity?:number,quantity_in_decimal?:string}[];
       
      scheduled_at?:number;
       
      auto_claim?:boolean;
       
      no_expiry?:boolean;
       
      claim_expiry_date?:number;
       
      coupon_ids?:string[];
    }
    export interface CreateForItemsResponse {  
       gift:Gift;
       
       subscription:Subscription;
       
       invoice?:Invoice;
    }
    export interface CreateForItemsInputParam {
       
      gifter:{customer_id:string,note?:string,payment_src_id?:string,signature:string};
       
      gift_receiver:{customer_id:string,email:string,first_name:string,last_name:string};
       
      payment_intent?:{additional_information?:object,gateway_account_id?:string,gw_payment_method_id?:string,gw_token?:string,id?:string,payment_method_type?:'card' | 'ideal' | 'sofort' | 'bancontact' | 'google_pay' | 'dotpay' | 'giropay' | 'apple_pay' | 'upi' | 'netbanking_emandates' | 'paypal_express_checkout' | 'direct_debit' | 'boleto' | 'venmo' | 'amazon_payments' | 'pay_to' | 'faster_payments' | 'sepa_instant_transfer' | 'klarna_pay_now' | 'online_banking_poland' | 'payconiq_by_bancontact',reference_id?:string};
       
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      subscription_items?:{item_price_id?:string,quantity?:number,quantity_in_decimal?:string}[];
       
      scheduled_at?:number;
       
      auto_claim?:boolean;
       
      no_expiry?:boolean;
       
      claim_expiry_date?:number;
       
      coupon_ids?:string[];
    }
    export interface RetrieveResponse {  
       gift:Gift;
       
       subscription:Subscription;
    }
    
    export interface ListResponse {  
       list:{gift:Gift,subscription:Subscription}[];
       
       next_offset?:string;
    }
    export interface ListInputParam {
      [key : string]: any;  
      /**
        * @description The number of resources to be returned.

        */
        
      limit?:number;
       
      /**
        * @description Determines your position in the list for pagination. To ensure that the next page is retrieved correctly, always set &#x27;offset&#x27; to the value of &#x27;next_offset&#x27; obtained in the previous iteration of the API call.

        */
        
      offset?:string;
       
      /**
        * @description Parameters for gift_receiver

        */
        
      gift_receiver?:{customer_id?:{is?:string,is_not?:string,starts_with?:string},email?:{is?:string,is_not?:string,starts_with?:string}};
       
      /**
        * @description Parameters for gifter

        */
        
      gifter?:{customer_id?:{is?:string,is_not?:string,starts_with?:string}};
       
      /**
        * @description Status of the gift.

        */
        
      status?:{in?:string,is?:'scheduled' | 'unclaimed' | 'claimed' | 'cancelled' | 'expired',is_not?:'scheduled' | 'unclaimed' | 'claimed' | 'cancelled' | 'expired',not_in?:string};
    }
    export interface ClaimResponse {  
       gift:Gift;
       
       subscription:Subscription;
    }
    
    export interface CancelResponse {  
       gift:Gift;
       
       subscription:Subscription;
    }
    
    export interface UpdateGiftResponse {  
       gift:Gift;
       
       subscription:Subscription;
    }
    export interface UpdateGiftInputParam {
       
      scheduled_at:number;
       
      comment?:string;
    }
    export interface Gifter {  
      customer_id:string;
       
      invoice_id?:string;
       
      signature?:string;
       
      note?:string;
    }
    export interface GiftReceiver {  
      customer_id:string;
       
      subscription_id:string;
       
      first_name?:string;
       
      last_name?:string;
       
      email?:string;
    }
    export interface GiftTimeline {  
      status:'scheduled' | 'unclaimed' | 'claimed' | 'cancelled' | 'expired';
       
      occurred_at?:number;
    }
  }
}