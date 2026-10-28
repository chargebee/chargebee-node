///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface Dispute {
    id: string;
    customer_id: string;
    transaction_id: string;
    gateway_account_id: string;
    id_at_gateway?: string;
    currency_code: string;
    amount: number;
    reason?: string;
    status:
      | 'initiated'
      | 'funds_withdrawn'
      | 'in_review'
      | 'cancelled'
      | 'lost'
      | 'won';
    type: 'chargeback' | 'inquiry';
    is_partial_dispute: boolean;
    created_at: number;
    resource_version?: number;
    updated_at?: number;
  }

  export namespace Dispute {
    export class DisputeResource {
      retrieve(
        dispute_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RetrieveResponse>>;

      list(
        input?: ListInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ListResponse>>;
    }

    export interface RetrieveResponse {
      dispute: Dispute;
    }

    export interface ListResponse {
      list: { dispute: Dispute }[];
      next_offset?: string;
    }

    // REQUEST PARAMS
    //---------------

    export interface ListInputParam {
      limit?: number;
      offset?: string;
      id?: filter.String;
      status?: filter.Enum;
      type?: filter.Enum;
      customer_id?: filter.String;
      transaction_id?: filter.String;
      amount?: filter.Number;
      created_at?: filter.Timestamp;
    }
  }
}
