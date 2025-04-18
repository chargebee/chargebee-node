///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface PromotionalCredit {
    id: string;
    customer_id: string;
    type: 'increment' | 'decrement';
    amount_in_decimal?: string;
    amount: number;
    currency_code: string;
    description: string;
    credit_type: CreditTypeEnum;
    reference?: string;
    closing_balance: number;
    done_by?: string;
    created_at: number;
  }

  export namespace PromotionalCredit {
    export class PromotionalCreditResource {
      add(
        input: AddInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<AddResponse>>;

      deduct(
        input: DeductInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<DeductResponse>>;

      set(
        input: SetInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<SetResponse>>;

      list(
        input?: ListInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ListResponse>>;

      retrieve(
        account_credit_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RetrieveResponse>>;
    }

    export interface AddResponse {
      customer: Customer;
      promotional_credit: PromotionalCredit;
    }

    export interface DeductResponse {
      customer: Customer;
      promotional_credit: PromotionalCredit;
    }

    export interface SetResponse {
      customer: Customer;
      promotional_credit: PromotionalCredit;
    }

    export interface ListResponse {
      list: { promotional_credit: PromotionalCredit }[];
      next_offset?: string;
    }

    export interface RetrieveResponse {
      promotional_credit: PromotionalCredit;
    }

    // REQUEST PARAMS
    //---------------

    export interface AddInputParam {
      customer_id: string;
      amount?: number;
      amount_in_decimal?: string;
      currency_code?: string;
      description: string;
      credit_type?: CreditTypeEnum;
      reference?: string;
    }
    export interface DeductInputParam {
      customer_id: string;
      amount?: number;
      amount_in_decimal?: string;
      currency_code?: string;
      description: string;
      credit_type?: CreditTypeEnum;
      reference?: string;
    }
    export interface SetInputParam {
      customer_id: string;
      amount?: number;
      amount_in_decimal?: string;
      currency_code?: string;
      description: string;
      credit_type?: CreditTypeEnum;
      reference?: string;
    }
    export interface ListInputParam {
      limit?: number;
      offset?: string;
      id?: filter.String;
      created_at?: filter.Timestamp;
      type?: filter.Enum;
      customer_id?: filter.String;
    }
  }
}
