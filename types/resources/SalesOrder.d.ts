///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface SalesOrder {
    id: string;
    version: number;
    renewed_from_order_id?: string;
    updated_at?: number;
    created_at: number;
    po_number?: string;
    meta_data?: string;
    quote_id?: string;
    effective_date: number;
    end_date?: number;
    business_entity_id?: string;
    customer_id: string;
    currency_code: string;
    line_items?: SalesOrder.LineItem[];
    billing_addresses?: SalesOrder.BillingAddress[];
    discounts?: SalesOrder.Discount[];
    shipping_addresses?: SalesOrder.ShippingAddress[];
    subscription_ids?: string[];
    line_item_tiers?: SalesOrder.LineItemTier[];
    payment_configuration?: SalesOrder.PaymentConfiguration;
    billing_configuration?: SalesOrder.BillingConfiguration;
    renewal_term?: SalesOrder.RenewalTerm;
    status: 'active' | 'completed';
  }

  export namespace SalesOrder {
    export interface LineItem {
      id: string;
      association_id?: string;
      item_price_id: string;
      name?: string;
      quantity: string;
      unit_price: string;
      billing_period?: number;
      billing_period_unit?: 'day' | 'week' | 'month' | 'year';
      service_period_days?: number;
      charge_on_event?:
        | 'subscription_creation'
        | 'subscription_trial_start'
        | 'plan_activation'
        | 'subscription_activation'
        | 'contract_termination';
      charge_once?: boolean;
      billing_cycles?: number;
      billing_type: 'recurring' | 'one_time' | 'event_based';
      start_date: number;
      end_date?: number;
      trial_end?: number;
    }
    export interface BillingAddress {
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
      validation_status?:
        | 'not_validated'
        | 'valid'
        | 'partially_valid'
        | 'invalid';
    }
    export interface Discount {
      id: string;
      invoice_name?: string;
      type: 'fixed_amount' | 'percentage';
      apply_on: 'invoice_amount' | 'specific_item_price';
      duration_type: 'one_time' | 'forever' | 'limited_period';
      percentage?: number;
      amount?: string;
      coupon_id?: string;
      period?: number;
      period_unit?: 'day' | 'week' | 'month' | 'year';
      item_price_id?: string;
      start_date: number;
      end_date?: number;
    }
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
      validation_status?:
        | 'not_validated'
        | 'valid'
        | 'partially_valid'
        | 'invalid';
      index: number;
    }
    export interface LineItemTier {
      starting_unit: string;
      ending_unit?: string;
      price: string;
      pricing_type?: 'per_unit' | 'flat_fee' | 'package';
      package_size?: number;
      line_item_association_id?: string;
    }
    export interface PaymentConfiguration {
      auto_collection?: AutoCollectionEnum;
      payment_source_id?: string;
      payment_intent_id?: string;
      offline_payment_method?: OfflinePaymentMethodEnum;
    }
    export interface BillingConfiguration {
      create_pending_invoices?: boolean;
      invoice_immediately?: boolean;
      first_invoice_pending?: boolean;
      invoice_usages?: boolean;
      net_term_days?: number;
      invoice_date?: number;
      billing_cycles_to_invoice?: number;
      billing_alignment_mode?: BillingAlignmentModeEnum;
    }
    export interface RenewalTerm {
      end_of_term_action: 'renew' | 'cancel' | 'evergreen';
      cancellation_cutoff_period?: number;
      renewal_billing_cycles?: number;
    }
    // REQUEST PARAMS
    //---------------
  }
}
