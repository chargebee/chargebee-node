///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface Gift {
    
    id:string;
    status:'expired' | 'scheduled' | 'unclaimed' | 'claimed' | 'cancelled';
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
      create_for_items(input?:CreateForItemsInputParam):ChargebeeRequest<CreateForItemsResponse>;
      cancel(gift_id:string):ChargebeeRequest<CancelResponse>;
      update_gift(gift_id:string, input:UpdateGiftInputParam):ChargebeeRequest<UpdateGiftResponse>;
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
      retrieve(gift_id:string):ChargebeeRequest<RetrieveResponse>;
      claim(gift_id:string):ChargebeeRequest<ClaimResponse>;
    }
    export interface CreateForItemsResponse {
      gift:Gift;
      subscription:Subscription;
      invoice?:Invoice;
    }
    export interface CreateForItemsInputParam {
      
      scheduled_at?:number;
      auto_claim?:boolean;
      no_expiry?:boolean;
      claim_expiry_date?:number;
      coupon_ids?:string[];
      gifter?:{customer_id:string,note?:string,payment_src_id?:string,signature:string};
      gift_receiver?:{customer_id:string,email:string,first_name:string,last_name:string};
      payment_intent?:{additional_information?:object,gateway_account_id?:string,gw_token?:string,id?:string,payment_method_type?:'giropay' | 'ideal' | 'google_pay' | 'netbanking_emandates' | 'dotpay' | 'boleto' | 'direct_debit' | 'sofort' | 'upi' | 'apple_pay' | 'bancontact' | 'paypal_express_checkout' | 'card',reference_id?:string};
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
      subscription_items?:{item_price_id?:string,quantity?:number,quantity_in_decimal?:string}[];
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
    export interface ListResponse {
      list:{gift:Gift,subscription:Subscription}[];
      next_offset?:string;
    }
    export interface ListInputParam {
      [key: string]: string | number | object | boolean;
      limit?:number;
      offset?:string;
      status?:{in?:string,is?:'expired' | 'scheduled' | 'unclaimed' | 'claimed' | 'cancelled',is_not?:'expired' | 'scheduled' | 'unclaimed' | 'claimed' | 'cancelled',not_in?:string};
      gift_receiver?:{customer_id?:{is?:string,is_not?:string,starts_with?:string},email?:{is?:string,is_not?:string,starts_with?:string}};
      gifter?:{customer_id?:{is?:string,is_not?:string,starts_with?:string}};
    }
    export interface RetrieveResponse {
      gift:Gift;
      subscription:Subscription;
    }
    
    export interface ClaimResponse {
      gift:Gift;
      subscription:Subscription;
    }
    
    export interface Gifter {
      customer_id?:string;
      invoice_id?:string;
      signature?:string;
      note?:string;
    }
    export interface GiftReceiver {
      customer_id?:string;
      subscription_id?:string;
      first_name?:string;
      last_name?:string;
      email?:string;
    }
    export interface GiftTimeline {
      status?:'expired' | 'scheduled' | 'unclaimed' | 'claimed' | 'cancelled';
      occurred_at?:number;
    }
  }
}