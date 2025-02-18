///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface CouponCode {
    code: string;
    status: 'not_redeemed' | 'redeemed' | 'archived';
    coupon_id: string;
    coupon_set_id: string;
    coupon_set_name: string;
  }

  export namespace CouponCode {
    export class CouponCodeResource {
      create(
        input: CreateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateResponse>>;

      retrieve(
        coupon_code_code: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RetrieveResponse>>;

      list(
        input?: ListInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ListResponse>>;

      archive(
        coupon_code_code: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ArchiveResponse>>;
    }

    export interface CreateResponse {
      coupon_code: CouponCode;
    }

    export interface RetrieveResponse {
      coupon_code: CouponCode;
    }

    export interface ListResponse {
      list: { coupon_code: CouponCode }[];
      next_offset?: string;
    }

    export interface ArchiveResponse {
      coupon_code: CouponCode;
    }

    // REQUEST PARAMS
    //---------------

    export interface CreateInputParam {
      coupon_id: string;
      coupon_set_name: string;
      code: string;
    }
    export interface ListInputParam {
      limit?: number;
      offset?: string;
      code?: filter.String;
      coupon_id?: filter.String;
      coupon_set_name?: filter.String;
      status?: filter.Enum;
    }
  }
}
