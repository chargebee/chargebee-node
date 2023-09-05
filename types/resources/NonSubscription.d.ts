///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface NonSubscription {
    
    /**
      * @description The unique immutable identifier of the invoice imported in Chargebee for which the receipt was sent.

      */
    
    invoice_id:string;
    
    /**
      * @description The unique immutable identifier of the customer object to which the invoice belongs.

      */
    
    customer_id?:string;
    
    /**
      * @description The [&#x60;subscription_item.item_price_id&#x60;](https://apidocs.chargebee.com/docs/api/subscriptions?prod_cat_ver&#x3D;2#subscription_item_tiers_item_price_id) where the &#x60;item_type&#x60; is &#x60;charge&#x60;.

      */
    
    charge_id:string;
  }
  export namespace NonSubscription {
    export class NonSubscriptionResource {  
      /**
        * @description This API is used to sync consumable, non-consumable, and non-renewing product payments in Chargebee.

        */
      
      process_receipt(non_subscription_app_id:string, input:ProcessReceiptInputParam):ChargebeeRequest<ProcessReceiptResponse>;
    }
    export interface ProcessReceiptResponse {  
       non_subscription:NonSubscription;
    }
    export interface ProcessReceiptInputParam {
       
      /**
        * @description **Google Play Store** : The purchase &#x60;token&#x60; taken from the Android device after successful creation of the in-app purchase.   

**Apple App Store** : The Base64 encoded [App Store in-app purchase receipt](https://developer.apple.com/documentation/storekit/original_api_for_in-app_purchase/validating_receipts_with_the_app_store?language&#x3D;objc#overview) taken from the Apple device after successful creation of the in-app purchase.

        */
       
      receipt:string;
       
      /**
        * @description Parameters for product

        */
       
      product?:{currency_code:string,id:string,name?:string,price:number,price_in_decimal?:string,type:'non_consumable' | 'consumable' | 'non_renewing_subscription'};
       
      /**
        * @description Parameters for customer

        */
       
      customer?:{email?:string,first_name?:string,id?:string,last_name?:string};
    }
    
  }
}