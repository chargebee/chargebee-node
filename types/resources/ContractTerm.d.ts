///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface ContractTerm {
    
    id:string;
    status:'active' | 'cancelled' | 'completed' | 'terminated';
    contract_start:number;
    contract_end:number;
    billing_cycle:number;
    action_at_term_end:'cancel' | 'renew_once' | 'renew' | 'evergreen';
    total_contract_value:number;
    total_contract_value_before_tax:number;
    cancellation_cutoff_period?:number;
    created_at:number;
    subscription_id:string;
    remaining_billing_cycles?:number;
  }
  
}