///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'Chargebee' {
  export interface Installment {
    id: string;

    invoice_id: string;

    date: number;

    amount: number;

    status: 'posted' | 'payment_due' | 'paid';

    created_at: number;

    resource_version?: number;

    updated_at?: number;
  }
  export namespace Installment {
    export class InstallmentResource {
      retrieve(
        installment_id: string,
      ): Promise<ChargebeeResponse<RetrieveResponse>>;

      list(input: ListInputParam): Promise<ChargebeeResponse<ListResponse>>;
    }
    export interface RetrieveResponse {
      installment: Installment;
    }

    export interface ListResponse {
      list: { installment: Installment }[];

      next_offset?: string;
    }

    // REQUEST PARAMS
    //---------------

    export interface ListInputParam {
      limit?: number;
      offset?: string;
      sort_by?: string;
      invoice_id: filter.String;
    }
  }
}
