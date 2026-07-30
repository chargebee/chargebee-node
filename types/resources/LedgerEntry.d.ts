///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface LedgerEntry {
    id: string;
    subscription_id?: string;
    account_type?: 'provisioned' | 'overdraft';
    unit_id?: string;
    unit_type?: 'credit_unit';
    amount: string;
    grant_block_start_balance: string;
    grant_block_end_balance: string;
    account_start_balance: string;
    account_end_balance: string;
    type: TypeEnum;
    ledger_operation_id: string;
    grant_block_id: string;
    created_at: number;
    modified_at: number;
  }
}
