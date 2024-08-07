///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface SubscriptionEstimate {
    id?: string;

    currency_code: string;

    status?:
      | 'future'
      | 'in_trial'
      | 'active'
      | 'non_renewing'
      | 'paused'
      | 'cancelled'
      | 'transferred';

    trial_end_action?: TrialEndAction;

    next_billing_at?: number;

    pause_date?: number;

    resume_date?: number;

    shipping_address?: SubscriptionEstimate.ShippingAddress;

    contract_term?: SubscriptionEstimate.ContractTerm;
  }
  export namespace SubscriptionEstimate {
    export interface ShippingAddress {
      first_name?: string;

      last_name?: string;

      email?: string;

      company?: string;

      phone?: string;

      line1?: string;

      line2?: string;

      line3?: string;

      city?: string;

      state_code?: string;

      state?: string;

      country?: string;

      zip?: string;

      validation_status?: ValidationStatus;

      index: number;
    }
    export interface ContractTerm {
      id: string;

      status: 'active' | 'completed' | 'cancelled' | 'terminated';

      contract_start: number;

      contract_end: number;

      billing_cycle: number;

      action_at_term_end: 'renew' | 'evergreen' | 'cancel' | 'renew_once';

      total_contract_value: number;

      total_contract_value_before_tax: number;

      cancellation_cutoff_period?: number;

      created_at: number;

      subscription_id: string;

      remaining_billing_cycles?: number;
    }
    // REQUEST PARAMS
    //---------------
  }
}
