///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface Gift {
    
    /**
      * @description Uniquely identifies a gift

      */
    
    id:string;
    
    /**
      * @description Status of the gift. \* claimed - Gift is claimed. \* cancelled - Gift is cancelled. \* unclaimed - Gift is not yet claimed and is ready to be claimed. \* scheduled - Gift has been scheduled. \* expired - Gift is expired.

      */
    
    status:'expired' | 'scheduled' | 'unclaimed' | 'claimed' | 'cancelled';
    
    /**
      * @description Indicates the date on which the gift notification is sent to the receiver. If not passed, the receiver is notified immediately.

      */
    
    scheduled_at?:number;
    
    /**
      * @description When &#x60;true&#x60;, the claim happens automatically. When not passed, the default value in the site settings is used.

      */
    
    auto_claim:boolean;
    
    /**
      * @description When &#x60;true&#x60;, indicates that the gift does not expire. Do not pass or pass as &#x60;false&#x60; when &#x60;auto_claim&#x60; is set.

      */
    
    no_expiry:boolean;
    
    /**
      * @description The date until which the gift can be claimed. Must be set to a value after &#x60;scheduled_at&#x60;. If the gift is not claimed within &#x60;claim_expiry_date&#x60;, it will expire and the subscription will move to &#x60;cancelled&#x60; state. When not passed, the value specified in the site settings will be used. Pass as &#x60;NULL&#x60; or do not pass when &#x60;auto_claim&#x60; or &#x60;no_expiry&#x60; are set.

      */
    
    claim_expiry_date?:number;
    
    /**
      * @description Version number of this resource. The &#x60;resource_version&#x60; is updated with a new timestamp in milliseconds for every change made to the resource. This attribute will be present only if the resource has been updated after 2016-09-28.

      */
    
    resource_version?:number;
    
    /**
      * @description Timestamp indicating when this gift resource was last updated.

      */
    
    updated_at?:number;
    
    /**
      * @description Gifter details

      */
    
    gifter:Gift.Gifter;
    
    /**
      * @description Receiver details

      */
    
    gift_receiver:Gift.GiftReceiver;
    
    /**
      * @description Gift timeline details

      */
    
    gift_timelines?:Gift.GiftTimeline[];
  }
  export namespace Gift {
    export class GiftResource {  
      /**
        * @description Create a gift subscription with items like plans, addons, or charges and gift it to an existing customer.

        */
      
      create_for_items(input?:CreateForItemsInputParam):ChargebeeRequest<CreateForItemsResponse>;
       
      /**
        * @description Retrieves a gift subscription. This API accepts the gift &#x27;id&#x27; and returns the gift along with the subscription.

        */
      
      retrieve(gift_id:string):ChargebeeRequest<RetrieveResponse>;
       
      /**
        * @description Retrieves the list of gifts.

        */
      
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
       
      /**
        * @description Claiming a gift will move the status to &#x27;claimed&#x27;. Only gifts in &#x27;unclaimed&#x27; state can be claimed.

        */
      
      claim(gift_id:string):ChargebeeRequest<ClaimResponse>;
       
      /**
        * @description This API allows to cancel gifts. Only gift in &#x27;scheduled&#x27; and &#x27;unclaimed&#x27; states can be cancelled.

        */
      
      cancel(gift_id:string):ChargebeeRequest<CancelResponse>;
       
      /**
        * @description Change the date/time at which the gift notification email is to be sent. This only applies to gifts in the scheduled [status](https://apidocs.chargebee.com/docs/api/gifts#gift_status).

        */
      
      update_gift(gift_id:string, input:UpdateGiftInputParam):ChargebeeRequest<UpdateGiftResponse>;
    }
    export interface CreateForItemsResponse {  
       gift:Gift;
       
       subscription:Subscription;
       
       invoice?:Invoice;
    }
    export interface CreateForItemsInputParam {
       
      /**
        * @description Indicates the date on which the gift notification is sent to the receiver. If not passed, the receiver is notified immediately.

        */
       
      scheduled_at?:number;
       
      /**
        * @description When &#x60;true&#x60;, the claim happens automatically. When not passed, the default value in the site settings is used.

        */
       
      auto_claim?:boolean;
       
      /**
        * @description When &#x60;true&#x60;, indicates that the gift does not expire. Do not pass or pass as &#x60;false&#x60; when &#x60;auto_claim&#x60; is set. .

        */
       
      no_expiry?:boolean;
       
      /**
        * @description The date until which the gift can be claimed. Must be set to a value after &#x60;scheduled_at&#x60;. If the gift is not claimed within &#x60;claim_expiry_date&#x60;, it will expire and the subscription will move to &#x60;cancelled&#x60; state. When not passed, the value specified in the site settings will be used. Pass as &#x60;NULL&#x60; or do not pass when &#x60;auto_claim&#x60; or &#x60;no_expiry&#x60; are set.

        */
       
      claim_expiry_date?:number;
       
      /**
        * @description List of coupons to be applied to this subscription. You can provide coupon ids or coupon codes.

        */
       
      coupon_ids?:string[];
       
      /**
        * @description Parameters for gifter

        */
       
      gifter?:{customer_id:string,note?:string,payment_src_id?:string,signature:string};
       
      /**
        * @description Parameters for gift_receiver

        */
       
      gift_receiver?:{customer_id:string,email:string,first_name:string,last_name:string};
       
      /**
        * @description Parameters for payment_intent

        */
       
      payment_intent?:{additional_information?:object,gateway_account_id?:string,gw_token?:string,id?:string,payment_method_type?:'giropay' | 'ideal' | 'sepa_instant_transfer' | 'google_pay' | 'netbanking_emandates' | 'dotpay' | 'boleto' | 'direct_debit' | 'faster_payments' | 'sofort' | 'upi' | 'venmo' | 'amazon_payments' | 'apple_pay' | 'bancontact' | 'paypal_express_checkout' | 'pay_to' | 'card',reference_id?:string};
       
      /**
        * @description Parameters for shipping_address

        */
       
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      /**
        * @description Parameters for subscription_items

        */
       
      subscription_items?:{item_price_id?:string,quantity?:number,quantity_in_decimal?:string}[];
    }
    export interface RetrieveResponse {  
       gift:Gift;
       
       subscription:Subscription;
    }
    
    export interface ListResponse {  
      /**
        * @description Retrieves the list of gifts.

        */
       
       list:{gift:Gift,subscription:Subscription}[];
       
      /**
        * @description Retrieves the list of gifts.

        */
       
       next_offset?:string;
    }
    export interface ListInputParam {
      [key : string]: any;  
      /**
        * @description Retrieves the list of gifts.

        */
        
      limit?:number;
       
      /**
        * @description Retrieves the list of gifts.

        */
        
      offset?:string;
       
      /**
        * @description Retrieves the list of gifts.

        */
        
      status?:{in?:string,is?:'expired' | 'scheduled' | 'unclaimed' | 'claimed' | 'cancelled',is_not?:'expired' | 'scheduled' | 'unclaimed' | 'claimed' | 'cancelled',not_in?:string};
       
      /**
        * @description Retrieves the list of gifts.

        */
        
      gift_receiver?:{customer_id?:{is?:string,is_not?:string,starts_with?:string},email?:{is?:string,is_not?:string,starts_with?:string}};
       
      /**
        * @description Retrieves the list of gifts.

        */
        
      gifter?:{customer_id?:{is?:string,is_not?:string,starts_with?:string}};
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
       
      /**
        * @description The new date/time at which the gift notification email is to be sent. The value must be greater than current time. If [no_expiry](https://apidocs.chargebee.com/docs/api/gifts#gift_no_expiry) is false then the value must also be less than [claim_expiry_date](https://apidocs.chargebee.com/docs/api/gifts#gift_claim_expiry_date).

        */
       
      scheduled_at:number;
       
      /**
        * @description An internal comment for this action. The comments are not retrievable via API and are only available on request via [Chargebee Support](https://chargebee.freshdesk.com/support/home).

        */
       
      comment?:string;
    }
    export interface Gifter {  
         /**
          * @description Gifter customer id.

          */
       
      customer_id:string;
       
         /**
          * @description Invoice raised on the gifter.

          */
       
      invoice_id?:string;
       
         /**
          * @description Gifter sign-off name

          */
       
      signature?:string;
       
         /**
          * @description Personalized message for the gift.

          */
       
      note?:string;
    }
    export interface GiftReceiver {  
         /**
          * @description Receiver customer id.

          */
       
      customer_id:string;
       
         /**
          * @description Subscription created for the gift.

          */
       
      subscription_id:string;
       
         /**
          * @description First name of the receiver as given by the gifter.

          */
       
      first_name?:string;
       
         /**
          * @description Last name of the receiver as given by the gifter,

          */
       
      last_name?:string;
       
         /**
          * @description Email of the receiver. All gift related emails are sent to this email.

          */
       
      email?:string;
    }
    export interface GiftTimeline {  
         /**
          * @description Status of the gift. \* cancelled - Gift is cancelled. \* expired - Gift is expired. \* scheduled - Gift has been scheduled. \* claimed - Gift is claimed. \* unclaimed - Gift is not yet claimed and is ready to be claimed.

          */
       
      status:'expired' | 'scheduled' | 'unclaimed' | 'claimed' | 'cancelled';
       
         /**
          * @description Timestamp indicating when this event occurred.

          */
       
      occurred_at?:number;
    }
  }
}