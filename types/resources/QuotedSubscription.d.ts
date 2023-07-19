declare module 'chargebee' {
  export interface QuotedSubscription {
    
    id:string;
    start_date?:number;
    trial_end?:number;
    remaining_billing_cycles?:number;
    po_number?:string;
    plan_quantity_in_decimal?:string;
    plan_unit_price_in_decimal?:string;
    changes_scheduled_at?:number;
    change_option?:'end_of_term' | 'immediately' | 'specific_date';
    contract_term_billing_cycle_on_renewal?:number;
    coupons?:QuotedSubscription.Coupon[];
    discounts?:QuotedSubscription.Discount[];
    subscription_items?:QuotedSubscription.SubscriptionItem[];
    item_tiers?:QuotedSubscription.ItemTier[];
    quoted_contract_term?:QuotedSubscription.QuotedContractTerm;
  }
  export namespace QuotedSubscription {
    
    
    export interface Coupon {
      coupon_id?:string;
    }
    export interface Discount {
      id?:string;
      invoice_name?:string;
      type?:'fixed_amount' | 'percentage';
      percentage?:number;
      amount?:number;
      currency_code?:string;
      duration_type?:'limited_period' | 'one_time' | 'forever';
      period?:number;
      period_unit?:'week' | 'month' | 'year' | 'day';
      included_in_mrr?:boolean;
      apply_on?:'specific_item_price' | 'invoice_amount';
      item_price_id?:string;
      created_at?:number;
      apply_till?:number;
      applied_count?:number;
      coupon_id?:string;
      index?:number;
    }
    export interface SubscriptionItem {
      item_price_id?:string;
      item_type?:'charge' | 'addon' | 'plan';
      quantity?:number;
      quantity_in_decimal?:string;
      unit_price?:number;
      unit_price_in_decimal?:string;
      amount?:number;
      amount_in_decimal?:string;
      free_quantity?:number;
      free_quantity_in_decimal?:string;
      trial_end?:number;
      billing_cycles?:number;
      service_period_days?:number;
      charge_on_event?:'subscription_creation' | 'subscription_activation' | 'subscription_trial_start' | 'contract_termination' | 'plan_activation';
      charge_once?:boolean;
      charge_on_option?:'on_event' | 'immediately';
    }
    export interface ItemTier {
      item_price_id?:string;
      starting_unit?:number;
      ending_unit?:number;
      price?:number;
      starting_unit_in_decimal?:string;
      ending_unit_in_decimal?:string;
      price_in_decimal?:string;
      index?:number;
    }
    export interface QuotedContractTerm {
      contract_start?:number;
      contract_end?:number;
      billing_cycle?:number;
      action_at_term_end?:'cancel' | 'renew_once' | 'renew' | 'evergreen';
      total_contract_value?:number;
      cancellation_cutoff_period?:number;
    }
  }
}