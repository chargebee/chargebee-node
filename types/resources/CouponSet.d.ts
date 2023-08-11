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
        * @description Use this API to get the list of all the coupon sets.

        */
      
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
       
      /**
        * @description Create a coupon set with a coupon code compatible to your product offers and promotional discounts

        */
      
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
       
      /**
        * @description Use this API to update a specific coupon set by updating its &#x60;name&#x60; and the &#x60;meta_data&#x60;.

        */
      
      update(coupon_set_id:string, input?:UpdateInputParam):ChargebeeRequest<UpdateResponse>;
       
      /**
        * @description Use this API to retrieve a specific coupon set.

        */
      
      retrieve(coupon_set_id:string):ChargebeeRequest<RetrieveResponse>;
       
      /**
        * @description This API add coupon codes to an existing coupon set.

        */
      
      add_coupon_codes(coupon_set_id:string, input?:AddCouponCodesInputParam):ChargebeeRequest<AddCouponCodesResponse>;
       
      /**
        * @description Use this API to delete all the unutilised coupon codes from a specific coupon set.

        */
      
      delete_unused_coupon_codes(coupon_set_id:string):ChargebeeRequest<DeleteUnusedCouponCodesResponse>;
       
      /**
        * @description Use this endpoint to delete a specific coupon set

        */
      
      delete(coupon_set_id:string):ChargebeeRequest<DeleteResponse>;
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
        * @description The number of resources to be returned.

        */
        
      limit?:number;
       
      /**
        * @description Determines your position in the list for pagination. To ensure that the next page is retrieved correctly, always set \&#x60;offset\&#x60; to the value of \&#x60;next_offset\&#x60; obtained in the previous iteration of the API call.

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
    export interface CreateResponse {  
      /**
        * @description Create a coupon set with a coupon code compatible to your product offers and promotional discounts

        */
       
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
        * @description A set of key-value pairs stored as additional information for the coupon set. [Learn more](./#meta_data).

        */
       
      meta_data?:object;
    }
    export interface UpdateResponse {  
      /**
        * @description Use this API to update a specific coupon set by updating its &#x60;name&#x60; and the &#x60;meta_data&#x60;.

        */
       
       coupon_set:CouponSet;
    }
    export interface UpdateInputParam {
       
      /**
        * @description Name of the coupon set.

        */
       
      name?:string;
       
      /**
        * @description A set of key-value pairs stored as additional information for the coupon set. [Learn more](./#meta_data).

        */
       
      meta_data?:object;
    }
    export interface RetrieveResponse {  
      /**
        * @description Use this API to retrieve a specific coupon set.

        */
       
       coupon_set:CouponSet;
    }
    
    export interface AddCouponCodesResponse {  
      /**
        * @description This API add coupon codes to an existing coupon set.

        */
       
       coupon_set:CouponSet;
    }
    export interface AddCouponCodesInputParam {
       
      /**
        * @description You can pass up to 100 values per API call. You can also use the Chargebee UI to pass up to 1000 codes per operation. There is no limit on the total number of coupon codes that can be included in a coupon set.

        */
       
      code?:string[];
    }
    export interface DeleteUnusedCouponCodesResponse {  
      /**
        * @description Use this API to delete all the unutilised coupon codes from a specific coupon set.

        */
       
       coupon_set:CouponSet;
    }
    
    export interface DeleteResponse {  
      /**
        * @description Use this endpoint to delete a specific coupon set

        */
       
       coupon_set:CouponSet;
    }
    
    
  }
}