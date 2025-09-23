///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface OmnichannelOneTimeOrder {
    id: string;
    app_id: string;
    customer_id?: string;
    id_at_source: string;
    origin?: string;
    source: 'apple_app_store' | 'google_play_store';
    created_at: number;
    resource_version?: number;
    omnichannel_one_time_order_items: OmnichannelOneTimeOrderItem[];
    purchase_transaction?: OmnichannelTransaction;
  }

  export namespace OmnichannelOneTimeOrder {
    export class OmnichannelOneTimeOrderResource {
      retrieve(
        omnichannel_one_time_order_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RetrieveResponse>>;

      list(
        input?: ListInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ListResponse>>;
    }

    export interface RetrieveResponse {
      omnichannel_one_time_order: OmnichannelOneTimeOrder;
    }

    export interface ListResponse {
      list: { omnichannel_one_time_order: OmnichannelOneTimeOrder }[];
      next_offset?: string;
    }

    // REQUEST PARAMS
    //---------------

    export interface ListInputParam {
      limit?: number;
      offset?: string;
      source?: filter.Enum;
      customer_id?: filter.String;
    }
  }
}
