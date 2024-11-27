///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface RecordedPurchase {
    

    id:string;

    customer_id:string;

    app_id:string;

    source:'apple_app_store';

    status:'in_process' | 'completed' | 'failed';

    omnichannel_transaction_id?:string;

    created_at:number;

    resource_version?:number;

    linked_omnichannel_subscriptions?:RecordedPurchase.LinkedOmnichannelSubscription[];

    error_detail?:RecordedPurchase.ErrorDetail;

  }
  export namespace RecordedPurchase {
    export class RecordedPurchaseResource {  
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
       
      retrieve(recorded_purchase_id:string):ChargebeeRequest<RetrieveResponse>;
    }
    export interface CreateResponse {  
       recorded_purchase:RecordedPurchase;
       
       customer:Customer;
    }
    export interface CreateInputParam {
       
      customer:{id:string};
       
      apple_app_store?:{transaction_id?:string};
       
      app_id:string;
    }
    export interface RetrieveResponse {  
       recorded_purchase:RecordedPurchase;
    }
    
    export interface LinkedOmnichannelSubscription {  
      omnichannel_subscription_id?:string;
    }
    export interface ErrorDetail {  
      error_message?:string;
    }
  }
}