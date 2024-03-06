///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface NonSubscription {
    
    app_id:string;
    
    invoice_id:string;
    
    customer_id?:string;
    
    charge_id:string;
  }
  export namespace NonSubscription {
    export class NonSubscriptionResource {  
      process_receipt(non_subscription_app_id:string, input:ProcessReceiptInputParam):ChargebeeRequest<ProcessReceiptResponse>;
    }
    export interface ProcessReceiptResponse {  
       non_subscription:NonSubscription;
    }
    export interface ProcessReceiptInputParam {
       
      receipt:string;
       
      product:{currency_code:string,id:string,name?:string,price:number,price_in_decimal?:string,type:'non_consumable' | 'consumable' | 'non_renewing_subscription'};
       
      customer?:{email?:string,first_name?:string,id?:string,last_name?:string};
    }
    
  }
}