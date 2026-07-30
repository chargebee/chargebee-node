///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface LedgerOperation {
    id: string;
    subscription_id?: string;
    unit_id?: string;
    unit_type?: 'credit_unit';
    type:
      | 'allocation'
      | 'capture'
      | 'authorize'
      | 'release_authorization'
      | 'capture_authorization'
      | 'expiry'
      | 'void'
      | 'rollover'
      | 'adjustment';
    amount: string;
    provisioned_start_balance: string;
    provisioned_end_balance: string;
    overdraft_start_balance: string;
    overdraft_end_balance: string;
    parent_ledger_operation_id?: string;
    ledger_operation_timestamp: number;
    auto_release_timestamp?: number;
    created_at: number;
    modified_at: number;
    metadata?: any;
  }

  export namespace LedgerOperation {
    export class LedgerOperationResource {
      retrieveLedgerOperation(
        ledger_operation_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RetrieveLedgerOperationResponse>>;

      listLedgerOperations(
        input: ListLedgerOperationsInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ListLedgerOperationsResponse>>;

      capture(
        input: CaptureInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CaptureResponse>>;

      authorize(
        input: AuthorizeInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<AuthorizeResponse>>;

      captureAuthorization(
        input: CaptureAuthorizationInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CaptureAuthorizationResponse>>;

      releaseAuthorization(
        input: ReleaseAuthorizationInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ReleaseAuthorizationResponse>>;

      allocate(
        input: AllocateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<AllocateResponse>>;
    }

    export interface RetrieveLedgerOperationResponse {
      ledger_operation: LedgerOperation;
    }

    export interface ListLedgerOperationsResponse {
      list: { ledger_operation: LedgerOperation }[];
      next_offset?: string;
    }

    export interface CaptureResponse {
      ledger_operation: LedgerOperation;
      ledger_account_balance: LedgerAccountBalance;
      grant_blocks: GrantBlock[];
      ledger_entries: LedgerEntry[];
    }

    export interface AuthorizeResponse {
      ledger_operation: LedgerOperation;
      ledger_account_balance: LedgerAccountBalance;
      grant_blocks: GrantBlock[];
      ledger_entries: LedgerEntry[];
    }

    export interface CaptureAuthorizationResponse {
      ledger_operation: LedgerOperation;
      ledger_account_balance: LedgerAccountBalance;
      grant_blocks: GrantBlock[];
      ledger_entries: LedgerEntry[];
    }

    export interface ReleaseAuthorizationResponse {
      ledger_operation: LedgerOperation;
      ledger_account_balance: LedgerAccountBalance;
      grant_blocks: GrantBlock[];
      ledger_entries: LedgerEntry[];
    }

    export interface AllocateResponse {
      ledger_account_balance: LedgerAccountBalance;
      ledger_operations: LedgerOperation[];
      grant_blocks: GrantBlock[];
      ledger_entries: LedgerEntry[];
    }

    // REQUEST PARAMS
    //---------------

    export interface ListLedgerOperationsInputParam {
      limit?: number;
      offset?: string;
      subscription_id: filter.String;
      unit_id?: filter.String;
      created_at?: filter.Timestamp;
      type?: filter.Enum;
      'sort_by[asc]'?: string;
      'sort_by[desc]'?: string;
    }
    export interface CaptureInputParam {
      id?: string;
      subscription_id: string;
      unit_id: string;
      amount: string;
      ledger_operation_timestamp: number;
      metadata?: any;
    }
    export interface AuthorizeInputParam {
      id?: string;
      subscription_id: string;
      unit_id: string;
      amount: string;
      ledger_operation_timestamp: number;
      auto_release_timestamp?: number;
      metadata?: any;
    }
    export interface CaptureAuthorizationInputParam {
      authorization_id: string;
      id?: string;
      amount: string;
      ledger_operation_timestamp: number;
      metadata?: any;
    }
    export interface ReleaseAuthorizationInputParam {
      authorization_id: string;
      id?: string;
      ledger_operation_timestamp: number;
      metadata?: any;
    }
    export interface AllocateInputParam {
      subscription_id: string;
      unit_id: string;
      amount: string;
      expires_at: number;
      metadata?: any;
    }
  }
}
