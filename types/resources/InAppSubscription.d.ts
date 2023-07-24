///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface InAppSubscription {
    subscription_id:string;
    customer_id?:string;
    plan_id?:string;
    store_status?:'in_trial' | 'paused' | 'active' | 'cancelled';
    invoice_id?:string;
  }
  export namespace InAppSubscription {
    export class InAppSubscriptionResource {
      retrieve_store_subs(in_app_subscription_app_id:string, input:RetrieveStoreSubsInputParam):ChargebeeRequest<RetrieveStoreSubsResponse>;
      import_receipt(in_app_subscription_app_id:string, input:ImportReceiptInputParam):ChargebeeRequest<ImportReceiptResponse>;
      import_subscription(in_app_subscription_app_id:string, input?:ImportSubscriptionInputParam):ChargebeeRequest<ImportSubscriptionResponse>;
      process_receipt(in_app_subscription_app_id:string, input:ProcessReceiptInputParam):ChargebeeRequest<ProcessReceiptResponse>;
    }
    export interface RetrieveStoreSubsResponse {
      in_app_subscriptions:InAppSubscription[];
    }
    export interface RetrieveStoreSubsInputParam {
      receipt:string;
    }
    export interface ImportReceiptResponse {
      in_app_subscriptions:InAppSubscription[];
    }
    export interface ImportReceiptInputParam {
      receipt:string;
      product?:{currency_code:string};
      customer?:{email?:string,id?:string};
    }
    export interface ImportSubscriptionResponse {
      in_app_subscription:InAppSubscription;
    }
    export interface ImportSubscriptionInputParam {
      subscription?:{currency_code:string,id:string,is_trial?:boolean,product_id:string,started_at:number,term_end:number,term_start:number,transaction_id:string};
      customer?:{email?:string,id?:string};
    }
    export interface ProcessReceiptResponse {
      in_app_subscription:InAppSubscription;
    }
    export interface ProcessReceiptInputParam {
      receipt:string;
      product?:{currency_code:string,id:string,name?:string,period?:string,period_unit?:string,price:number,price_in_decimal?:string};
      customer?:{email?:string,first_name?:string,id?:string,last_name?:string};
    }
    
  }
}