///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface LedgerAccountBalance {
    subscription_id: string;
    unit_id: string;
    unit_type: 'credit_unit';
    modified_at?: number;
    provisioned_balance?: LedgerAccountBalance.ProvisionedBalance;
    overdraft_balance?: LedgerAccountBalance.OverdraftBalance;
  }

  export namespace LedgerAccountBalance {
    export class LedgerAccountBalanceResource {
      listLedgerAccountBalances(
        input: ListLedgerAccountBalancesInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ListLedgerAccountBalancesResponse>>;
    }

    export interface ListLedgerAccountBalancesResponse {
      list: { ledger_account_balance: LedgerAccountBalance }[];
      next_offset?: string;
    }

    export interface ProvisionedBalance {
      total_balance: string;
      usable_balance: string;
      hold_amount: string;
    }
    export interface OverdraftBalance {
      is_unlimited: boolean;
      limit?: string;
      total_balance?: string;
      usable_balance?: string;
      used_amount: string;
      hold_amount: string;
    }
    // REQUEST PARAMS
    //---------------

    export interface ListLedgerAccountBalancesInputParam {
      limit?: number;
      offset?: string;
      subscription_id: filter.String;
      unit_id?: filter.String;
    }
  }
}
