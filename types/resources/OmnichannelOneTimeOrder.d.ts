///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface OmnichannelOneTimeOrder {
    

    id:string;

    app_id:string;

    customer_id?:string;

    id_at_source:string;

    origin?:string;

    source:'apple_app_store' | 'google_play_store';

    created_at:number;

    resource_version?:number;

    omnichannel_one_time_order_items:OmnichannelOneTimeOrderItem[];

    purchase_transaction?:OmnichannelOneTimeOrder.OmnichannelTransaction;

  }
  export namespace OmnichannelOneTimeOrder {
    export class OmnichannelOneTimeOrderResource {  
      retrieve(omnichannel_one_time_order_id:string):ChargebeeRequest<RetrieveResponse>;
       
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
    }
    export interface RetrieveResponse {  
       omnichannel_one_time_order:OmnichannelOneTimeOrder;
    }
    
    export interface ListResponse {  
       list:{omnichannel_one_time_order:OmnichannelOneTimeOrder}[];
       
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
       
      source?:{in?:string,is?:'apple_app_store' | 'google_play_store',is_not?:'apple_app_store' | 'google_play_store',not_in?:string};
       
      /**
        * @description Chargebee Customer External Identifier

        */
        
      customer_id?:{is?:string,is_not?:string,starts_with?:string};
    }
    export interface OmnichannelTransaction {  
      id:string;
       
      id_at_source:string;
       
      app_id:string;
       
      price_currency?:string;
       
      price_units?:number;
       
      price_nanos?:number;
       
      type:'purchase' | 'renewal';
       
      transacted_at?:number;
       
      created_at:number;
       
      resource_version?:number;
    }
  }
}