///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'Chargebee' {
  export interface VirtualBankAccount {
    id: string;

    customer_id: string;

    email: string;

    scheme?:
      | 'ach_credit'
      | 'sepa_credit'
      | 'us_automated_bank_transfer'
      | 'gb_automated_bank_transfer'
      | 'eu_automated_bank_transfer'
      | 'jp_automated_bank_transfer'
      | 'mx_automated_bank_transfer';

    bank_name?: string;

    account_number: string;

    routing_number?: string;

    swift_code: string;

    gateway: Gateway;

    gateway_account_id: string;

    resource_version?: number;

    updated_at?: number;

    created_at: number;

    reference_id: string;

    deleted: boolean;
  }
  export namespace VirtualBankAccount {
    export class VirtualBankAccountResource {
      createUsingPermanentToken(
        input: CreateUsingPermanentTokenInputParam,
      ): Promise<ChargebeeResponse<CreateUsingPermanentTokenResponse>>;

      create(
        input: CreateInputParam,
      ): Promise<ChargebeeResponse<CreateResponse>>;

      retrieve(
        virtual_bank_account_id: string,
      ): Promise<ChargebeeResponse<RetrieveResponse>>;

      list(input?: ListInputParam): Promise<ChargebeeResponse<ListResponse>>;

      delete(
        virtual_bank_account_id: string,
      ): Promise<ChargebeeResponse<DeleteResponse>>;

      deleteLocal(
        virtual_bank_account_id: string,
      ): Promise<ChargebeeResponse<DeleteLocalResponse>>;
    }
    export interface CreateUsingPermanentTokenResponse {
      virtual_bank_account: VirtualBankAccount;

      customer?: Customer;
    }

    export interface CreateResponse {
      virtual_bank_account: VirtualBankAccount;

      customer?: Customer;
    }

    export interface RetrieveResponse {
      virtual_bank_account: VirtualBankAccount;
    }

    export interface ListResponse {
      list: { virtual_bank_account: VirtualBankAccount }[];

      next_offset?: string;
    }

    export interface DeleteResponse {
      virtual_bank_account: VirtualBankAccount;
    }

    export interface DeleteLocalResponse {
      virtual_bank_account: VirtualBankAccount;
    }

    // REQUEST PARAMS
    //---------------

    export interface CreateUsingPermanentTokenInputParam {
      customer_id: string;
      reference_id: string;
      scheme?:
        | 'ach_credit'
        | 'sepa_credit'
        | 'us_automated_bank_transfer'
        | 'gb_automated_bank_transfer'
        | 'eu_automated_bank_transfer'
        | 'jp_automated_bank_transfer'
        | 'mx_automated_bank_transfer';
    }
    export interface CreateInputParam {
      customer_id: string;
      email?: string;
      scheme?:
        | 'ach_credit'
        | 'sepa_credit'
        | 'us_automated_bank_transfer'
        | 'gb_automated_bank_transfer'
        | 'eu_automated_bank_transfer'
        | 'jp_automated_bank_transfer'
        | 'mx_automated_bank_transfer';
    }
    export interface ListInputParam {
      limit?: number;
      offset?: string;
      customer_id?: filter.String;
      updated_at?: filter.Timestamp;
      created_at?: filter.Timestamp;
    }
  }
}
