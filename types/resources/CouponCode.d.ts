///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface CouponCode {
    
    /**
      * @description Unique coupon code that can be redeemed only once.

      */
    
    code:string;
    
    /**
      * @description Status of the coupon code. \* not_redeemed - Can be applied to a subscription. \* redeemed - Cannot be applied to a subscription as the coupon code has been already used. \* archived - Cannot be applied to a subscription as it has been made inactive.

      */
    
    status:'archived' | 'redeemed' | 'not_redeemed';
    
    /**
      * @description Id of the main coupon resource.

      */
    
    coupon_id:string;
    
    /**
      * @description Uniquely identifies a coupon_set

      */
    
    coupon_set_id:string;
    
    /**
      * @description Coupon set name to which this coupon code would be grouped under. If the coupon set with the passed name is not present, a new coupon set will be created.

      */
    
    coupon_set_name:string;
  }
  export namespace CouponCode {
    export class CouponCodeResource {  
      /**
        * @description Retrieves a specific coupon code details.

        */
      
      retrieve(coupon_code_code:string):ChargebeeRequest<RetrieveResponse>;
       
      /**
        * @description Archives a coupon code thereby making it inactive. The archived coupon code cannot be applied to any subscription.

        */
      
      archive(coupon_code_code:string):ChargebeeRequest<ArchiveResponse>;
    }
    export interface RetrieveResponse {  
       coupon_code:CouponCode;
    }
    
    export interface ArchiveResponse {  
       coupon_code:CouponCode;
    }
    
    
  }
}