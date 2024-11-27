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

    resource_version?:number;

    omnichannel_subscription_items:OmnichannelSubscriptionItem[];

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
       
      /**
        * @description Chargebee Customer External Identifier

        */
        
      customer_id?:{is?:string,is_not?:string,starts_with?:string};
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
    
  }
}