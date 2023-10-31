///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface CouponSet {
    
    /**
      * @description Uniquely identifies a coupon_set

      */
    
    id:string;
    
    /**
      * @description Coupon id linked to coupon set

      */
    
    coupon_id:string;
    
    /**
      * @description Name of the coupon set

      */
    
    name:string;
    
    /**
      * @description No of coupon codes present in coupon set

      */
    
    total_count?:number;
    
    /**
      * @description No of redeemed codes

      */
    
    redeemed_count?:number;
    
    /**
      * @description No of archived codes

      */
    
    archived_count?:number;
  }
  export namespace CouponSet {
    export class CouponSetResource {  
      /**
        * @description Create a coupon set with a coupon code compatible to your product offers and promotional discounts

        */
      
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
       
      /**
        * @description This API add coupon codes to an existing coupon set.

        */
      
      add_coupon_codes(coupon_set_id:string, input?:AddCouponCodesInputParam):ChargebeeRequest<AddCouponCodesResponse>;
       
      /**
        * @description Use this API to get the list of all the coupon sets.

        */
      
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
       
      /**
        * @description Use this API to retrieve a specific coupon set.

        */
      
      retrieve(coupon_set_id:string):ChargebeeRequest<RetrieveResponse>;
       
      /**
        * @description Use this API to update a specific coupon set by updating its &#x60;name&#x60; and the &#x60;meta_data&#x60;.

        */
      
      update(coupon_set_id:string, input?:UpdateInputParam):ChargebeeRequest<UpdateResponse>;
       
      /**
        * @description Use this endpoint to delete a specific coupon set

        */
      
      delete(coupon_set_id:string):ChargebeeRequest<DeleteResponse>;
       
      /**
        * @description Use this API to delete all the unutilised coupon codes from a specific coupon set.

        */
      
      delete_unused_coupon_codes(coupon_set_id:string):ChargebeeRequest<DeleteUnusedCouponCodesResponse>;
    }
    export interface CreateResponse {  
       coupon_set:CouponSet;
    }
    export interface CreateInputParam {
       
      /**
        * @description Coupon id linked to coupon set.

        */
       
      coupon_id:string;
       
      /**
        * @description Name of the coupon set.

        */
       
      name:string;
       
      /**
        * @description Uniquely identifies a coupon_set.

        */
       
      id:string;
       
      /**
        * @description A collection of key-value pairs that provides extra information about the coupon set.  
**Note:** There&#x27;s a character limit of 65,535.
[Learn more](advanced-features?prod_cat_ver&#x3D;2#metadata).

        */
       
      meta_data?:object;
    }
    export interface AddCouponCodesResponse {  
       coupon_set:CouponSet;
    }
    export interface AddCouponCodesInputParam {
       
      /**
        * @description You can pass up to 100 values per API call. You can also use the Chargebee UI to pass up to 1000 codes per operation. There is no limit on the total number of coupon codes that can be included in a coupon set.

        */
       
      code?:string[];
    }
    export interface ListResponse {  
      /**
        * @description Use this API to get the list of all the coupon sets.

        */
       
       list:{coupon_set:CouponSet}[];
       
      /**
        * @description Use this API to get the list of all the coupon sets.

        */
       
       next_offset?:string;
    }
    export interface ListInputParam {
      [key : string]: any;  
      /**
        * @description Use this API to get the list of all the coupon sets.

        */
        
      limit?:number;
       
      /**
        * @description Use this API to get the list of all the coupon sets.

        */
        
      offset?:string;
       
      /**
        * @description Use this API to get the list of all the coupon sets.

        */
        
      id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Use this API to get the list of all the coupon sets.

        */
        
      name?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Use this API to get the list of all the coupon sets.

        */
        
      coupon_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Use this API to get the list of all the coupon sets.

        */
        
      total_count?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
       
      /**
        * @description Use this API to get the list of all the coupon sets.

        */
        
      redeemed_count?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
       
      /**
        * @description Use this API to get the list of all the coupon sets.

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
       
      /**
        * @description Name of the coupon set.

        */
       
      name?:string;
       
      /**
        * @description A collection of key-value pairs that provides extra information about the coupon set.  
**Note:** There&#x27;s a character limit of 65,535.
[Learn more](advanced-features?prod_cat_ver&#x3D;2#metadata).

        */
       
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