///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'Chargebee' {
  export interface QuotedSubscription {
    id: string;

    plan_id: string;

    plan_quantity: number;

    plan_unit_price?: number;

    setup_fee?: number;

    billing_period?: number;

    billing_period_unit?: 'day' | 'week' | 'month' | 'year';

    start_date?: number;

    trial_end?: number;

    remaining_billing_cycles?: number;

    po_number?: string;

    auto_collection?: AutoCollection;

    plan_quantity_in_decimal?: string;

    plan_unit_price_in_decimal?: string;

    changes_scheduled_at?: number;

    change_option?: 'end_of_term' | 'specific_date' | 'immediately';

    contract_term_billing_cycle_on_renewal?: number;

    addons?: QuotedSubscription.Addon[];

    event_based_addons?: QuotedSubscription.EventBasedAddon[];

    coupons?: QuotedSubscription.Coupon[];

    subscription_items?: QuotedSubscription.SubscriptionItem[];

    item_tiers?: QuotedSubscription.ItemTier[];

    quoted_contract_term?: QuotedSubscription.QuotedContractTerm;
  }
  export namespace QuotedSubscription {
    export interface Addon {
      id: string;

      quantity?: number;

      unit_price?: number;

      amount?: number;

      trial_end?: number;

      remaining_billing_cycles?: number;

      quantity_in_decimal?: string;

      unit_price_in_decimal?: string;

      amount_in_decimal?: string;

      proration_type?: 'full_term' | 'partial_term' | 'none';
    }
    export interface EventBasedAddon {
      id: string;

      quantity: number;

      unit_price: number;

      service_period_in_days?: number;

      on_event:
        | 'subscription_creation'
        | 'subscription_trial_start'
        | 'plan_activation'
        | 'subscription_activation'
        | 'contract_termination';

      charge_once: boolean;

      quantity_in_decimal?: string;

      unit_price_in_decimal?: string;
    }
    export interface Coupon {
      coupon_id: string;
    }
    export interface SubscriptionItem {
      item_price_id: string;

      item_type: 'plan' | 'addon' | 'charge';

      quantity?: number;

      quantity_in_decimal?: string;

      metered_quantity?: string;

      last_calculated_at?: number;

      unit_price?: number;

      unit_price_in_decimal?: string;

      amount?: number;

      amount_in_decimal?: string;

      billing_period?: number;

      billing_period_unit?: 'day' | 'week' | 'month' | 'year';

      free_quantity?: number;

      free_quantity_in_decimal?: string;

      trial_end?: number;

      billing_cycles?: number;

      service_period_days?: number;

      charge_on_event?:
        | 'subscription_creation'
        | 'subscription_trial_start'
        | 'plan_activation'
        | 'subscription_activation'
        | 'contract_termination';

      charge_once?: boolean;

      charge_on_option?: 'immediately' | 'on_event';

      proration_type?: 'full_term' | 'partial_term' | 'none';
    }
    export interface ItemTier {
      item_price_id: string;

      starting_unit: number;

      ending_unit?: number;

      price: number;

      starting_unit_in_decimal?: string;

      ending_unit_in_decimal?: string;

      price_in_decimal?: string;

      index: number;
    }
    export interface QuotedContractTerm {
      contract_start: number;

      contract_end: number;

      billing_cycle: number;

      action_at_term_end: 'renew' | 'evergreen' | 'cancel' | 'renew_once';

      total_contract_value: number;

      cancellation_cutoff_period?: number;
    }
    // REQUEST PARAMS
    //---------------
  }
}
