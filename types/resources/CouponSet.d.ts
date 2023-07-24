///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface CouponSet {
    id:string;
    coupon_id:string;
    name:string;
    total_count?:number;
    redeemed_count?:number;
    archived_count?:number;
  }
  export namespace CouponSet {
    export class CouponSetResource {
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
      update(coupon_set_id:string, input?:UpdateInputParam):ChargebeeRequest<UpdateResponse>;
      retrieve(coupon_set_id:string):ChargebeeRequest<RetrieveResponse>;
      add_coupon_codes(coupon_set_id:string, input?:AddCouponCodesInputParam):ChargebeeRequest<AddCouponCodesResponse>;
      delete_unused_coupon_codes(coupon_set_id:string):ChargebeeRequest<DeleteUnusedCouponCodesResponse>;
      delete(coupon_set_id:string):ChargebeeRequest<DeleteResponse>;
    }
    export interface ListResponse {
      list:{coupon_set:CouponSet}[];
      next_offset?:string;
    }
    export interface ListInputParam {
      [key : string]: any;
      limit?:number;
      offset?:string;
      id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      name?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      coupon_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      total_count?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
      redeemed_count?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
      archived_count?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
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
    export interface UpdateResponse {
      coupon_set:CouponSet;
    }
    export interface UpdateInputParam {
      name?:string;
      meta_data?:object;
    }
    export interface RetrieveResponse {
      coupon_set:CouponSet;
    }
    
    export interface AddCouponCodesResponse {
      coupon_set:CouponSet;
    }
    export interface AddCouponCodesInputParam {
      code?:string[];
    }
    export interface DeleteUnusedCouponCodesResponse {
      coupon_set:CouponSet;
    }
    
    export interface DeleteResponse {
      coupon_set:CouponSet;
    }
    
    
  }
}