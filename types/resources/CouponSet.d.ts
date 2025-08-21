///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface CouponSet {
    

    id:string;

    coupon_id:string;

    name:string;

    total_count?:number;

    redeemed_count?:number;

    archived_count?:number;

    meta_data?:object;

  }
  export namespace CouponSet {
    export class CouponSetResource {  
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
       
      add_coupon_codes(coupon_set_id:string, input?:AddCouponCodesInputParam):ChargebeeRequest<AddCouponCodesResponse>;
       
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
       
      retrieve(coupon_set_id:string):ChargebeeRequest<RetrieveResponse>;
       
      update(coupon_set_id:string, input?:UpdateInputParam):ChargebeeRequest<UpdateResponse>;
       
      delete(coupon_set_id:string):ChargebeeRequest<DeleteResponse>;
       
      delete_unused_coupon_codes(coupon_set_id:string):ChargebeeRequest<DeleteUnusedCouponCodesResponse>;
    }
    export interface CreateResponse {  
       coupon_set:CouponSet;
    }
    export interface CreateInputParam {
       
      coupon_id:string;
       
      name:string;
       
      id:string;
       
      meta_data?:object;
    }
    export interface AddCouponCodesResponse {  
       coupon_set:CouponSet;
    }
    export interface AddCouponCodesInputParam {
       
      code?:string[];
    }
    export interface ListResponse {  
       list:{coupon_set:CouponSet}[];
       
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
       
      /**
        * @description Uniquely identifies a coupon_set

        */
        
      id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Name of the coupon set

        */
        
      name?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Coupon id linked to coupon set

        */
        
      coupon_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description No of coupon codes present in coupon set

        */
        
      total_count?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
       
      /**
        * @description No of redeemed codes

        */
        
      redeemed_count?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
       
      /**
        * @description No of archived codes

        */
        
      archived_count?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
    }
    export interface RetrieveResponse {  
       coupon_set:CouponSet;
    }
    
    export interface UpdateResponse {  
       coupon_set:CouponSet;
    }
    export interface UpdateInputParam {
       
      name?:string;
       
      meta_data?:object;
    }
    export interface DeleteResponse {  
       coupon_set:CouponSet;
    }
    
    export interface DeleteUnusedCouponCodesResponse {  
       coupon_set:CouponSet;
    }
    
    
  }
}