///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface OmnichannelSubscription {
    

    id:string;

    id_at_source:string;

    app_id:string;

    source:'apple_app_store';

    customer_id?:string;

    created_at:number;

    omnichannel_subscription_items:OmnichannelSubscription.OmnichannelSubscriptionItem[];

  }
  export namespace OmnichannelSubscription {
    export class OmnichannelSubscriptionResource {  
      retrieve(omnichannel_subscription_id:string):ChargebeeRequest<RetrieveResponse>;
       
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
       
      omnichannel_transactions_for_omnichannel_subscription(omnichannel_subscription_id:string, input?:Omnichannel_transactionsForOmnichannelSubscriptionInputParam):ChargebeeRequest<OmnichannelTransactionsForOmnichannelSubscriptionResponse>;
    }
    export interface RetrieveResponse {  
       omnichannel_subscription:OmnichannelSubscription;
    }
    
    export interface ListResponse {  
       list:{omnichannel_subscription:OmnichannelSubscription}[];
       
       next_offset?:string;
    }
    export interface ListInputParam {
      [key : string]: any;  
      /**
        * @description The number of resources to be returned.

        */
        
      limit?:number;
       
      /**
        * @description Determines your position in the list for pagination. To ensure that the next page is retrieved correctly, always set \&#x60;offset\&#x60; to the value of \&#x60;next_offset\&#x60; obtained in the previous iteration of the API call.

        */
        
      offset?:string;
    }
    export interface OmnichannelTransactionsForOmnichannelSubscriptionResponse {  
       list:{omnichannel_transaction:OmnichannelTransaction}[];
       
       next_offset?:string;
    }
    export interface Omnichannel_transactionsForOmnichannelSubscriptionInputParam {
      [key : string]: any;  
      /**
        * @description The number of resources to be returned.

        */
        
      limit?:number;
       
      /**
        * @description Determines your position in the list for pagination. To ensure that the next page is retrieved correctly, always set \&#x60;offset\&#x60; to the value of \&#x60;next_offset\&#x60; obtained in the previous iteration of the API call.

        */
        
      offset?:string;
    }
    export interface OmnichannelSubscriptionItem {  
      id:string;
       
      id_at_source:string;
       
      status:'active' | 'expired' | 'cancelled';
       
      current_term_start?:number;
       
      current_term_end?:number;
       
      expired_at?:number;
       
      expiration_reason?:'billing_error' | 'product_not_available' | 'other';
       
      cancelled_at?:number;
       
      cancellation_reason?:'customer_cancelled' | 'customer_did_not_consent_to_price_increase';
    }
  }
}