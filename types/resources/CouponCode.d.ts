///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface CouponCode {
    
    code:string;
    status:'archived' | 'redeemed' | 'not_redeemed';
    coupon_id:string;
    coupon_set_id:string;
    coupon_set_name:string;
  }
  export namespace CouponCode {
    export class CouponCodeResource {
      retrieve(coupon_code_code:string):ChargebeeRequest<RetrieveResponse>;
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