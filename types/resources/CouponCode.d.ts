///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface CouponCode {
    

    code:string;

    status:'not_redeemed' | 'redeemed' | 'archived';

    coupon_id:string;

    coupon_set_id:string;

    coupon_set_name:string;

  }
  export namespace CouponCode {
    export class CouponCodeResource {  
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
       
      retrieve(coupon_code_code:string):ChargebeeRequest<RetrieveResponse>;
       
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
       
      archive(coupon_code_code:string):ChargebeeRequest<ArchiveResponse>;
    }
    export interface CreateResponse {  
       coupon_code:CouponCode;
    }
    export interface CreateInputParam {
       
      coupon_id:string;
       
      coupon_set_name:string;
       
      code:string;
    }
    export interface RetrieveResponse {  
       coupon_code:CouponCode;
    }
    
    export interface ListResponse {  
       list:{coupon_code:CouponCode}[];
       
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
        * @description Unique coupon code that can be redeemed only once.

        */
        
      code?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Id of the main coupon resource.

        */
        
      coupon_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Coupon set name to which this coupon code would be grouped under. If the coupon set with the passed name is not present, a new coupon set will be created.

        */
        
      coupon_set_name?:{is?:string,is_not?:string,starts_with?:string};
       
      /**
        * @description Status of the coupon code.

        */
        
      status?:{in?:string,is?:'not_redeemed' | 'redeemed' | 'archived',is_not?:'not_redeemed' | 'redeemed' | 'archived',not_in?:string};
    }
    export interface ArchiveResponse {  
       coupon_code:CouponCode;
    }
    
    
  }
}