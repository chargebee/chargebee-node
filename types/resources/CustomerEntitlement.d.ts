///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface CustomerEntitlement {
    

    customer_id:string;

    subscription_id?:string;

    feature_id?:string;

    value?:string;

    name?:string;

    is_enabled:boolean;

  }
  export namespace CustomerEntitlement {
    export class CustomerEntitlementResource {  
      entitlements_for_customer(customer_id:string, input?:EntitlementsForCustomerInputParam):ChargebeeRequest<EntitlementsForCustomerResponse>;
    }
    export interface EntitlementsForCustomerResponse {  
       list:{customer_entitlement:CustomerEntitlement}[];
       
       next_offset?:string;
    }
    export interface EntitlementsForCustomerInputParam {
      [key : string]: any;  
      /**
        * @description The number of resources to be returned.

        */
        
      limit?:number;
       
      /**
        * @description Determines your position in the list for pagination. To ensure that the next page is retrieved correctly, always set &#x27;offset&#x27; to the value of &#x27;next_offset&#x27; obtained in the previous iteration of the API call.

        */
        
      offset?:string;
       
      consolidate_entitlements?:boolean;
    }
    
  }
}