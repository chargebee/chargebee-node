///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'Chargebee' {
  export interface CouponSet {
    id: string;

    coupon_id: string;

    name: string;

    total_count?: number;

    redeemed_count?: number;

    archived_count?: number;

    meta_data?: any;
  }
  export namespace CouponSet {
    export class CouponSetResource {
      create(
        input: CreateInputParam,
      ): Promise<ChargebeeResponse<CreateResponse>>;

      addCouponCodes(
        coupon_set_id: string,
        input?: AddCouponCodesInputParam,
      ): Promise<ChargebeeResponse<AddCouponCodesResponse>>;

      list(input?: ListInputParam): Promise<ChargebeeResponse<ListResponse>>;

      retrieve(
        coupon_set_id: string,
      ): Promise<ChargebeeResponse<RetrieveResponse>>;

      update(
        coupon_set_id: string,
        input?: UpdateInputParam,
      ): Promise<ChargebeeResponse<UpdateResponse>>;

      delete(coupon_set_id: string): Promise<ChargebeeResponse<DeleteResponse>>;

      deleteUnusedCouponCodes(
        coupon_set_id: string,
      ): Promise<ChargebeeResponse<DeleteUnusedCouponCodesResponse>>;
    }
    export interface CreateResponse {
      coupon_set: CouponSet;
    }

    export interface AddCouponCodesResponse {
      coupon_set: CouponSet;
    }

    export interface ListResponse {
      list: { coupon_set: CouponSet }[];

      next_offset?: string;
    }

    export interface RetrieveResponse {
      coupon_set: CouponSet;
    }

    export interface UpdateResponse {
      coupon_set: CouponSet;
    }

    export interface DeleteResponse {
      coupon_set: CouponSet;
    }

    export interface DeleteUnusedCouponCodesResponse {
      coupon_set: CouponSet;
    }

    // REQUEST PARAMS
    //---------------

    export interface CreateInputParam {
      coupon_id: string;
      name: string;
      id: string;
      meta_data?: any;
    }
    export interface AddCouponCodesInputParam {
      code?: string[];
    }
    export interface ListInputParam {
      limit?: number;
      offset?: string;
      id?: filter.String;
      name?: filter.String;
      coupon_id?: filter.String;
      total_count?: filter.Number;
      redeemed_count?: filter.Number;
      archived_count?: filter.Number;
    }
    export interface UpdateInputParam {
      name?: string;
      meta_data?: any;
    }
  }
}
