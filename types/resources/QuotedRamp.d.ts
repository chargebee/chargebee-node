///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface QuotedRamp {
    

    id:string;

    line_items?:QuotedRamp.LineItem[];

    discounts?:QuotedRamp.Discount[];

    item_tiers?:QuotedRamp.ItemTier[];

    coupon_applicability_mappings?:QuotedRamp.CouponApplicabilityMapping[];

  }
  export namespace QuotedRamp {
    
    
    export interface LineItem {  
      item_price_id:string;
       
      item_type:'plan' | 'addon' | 'charge';
       
      quantity?:number;
       
      quantity_in_decimal?:string;
       
      metered_quantity?:string;
       
      unit_price?:number;
       
      unit_price_in_decimal?:string;
       
      amount?:number;
       
      amount_in_decimal?:string;
       
      billing_period?:number;
       
      billing_period_unit?:'day' | 'week' | 'month' | 'year';
       
      free_quantity?:number;
       
      free_quantity_in_decimal?:string;
       
      billing_cycles?:number;
       
      service_period_days?:number;
       
      charge_on_event?:'subscription_creation' | 'subscription_trial_start' | 'plan_activation' | 'subscription_activation' | 'contract_termination';
       
      charge_once?:boolean;
       
      charge_on_option?:'immediately' | 'on_event';
       
      start_date?:number;
       
      end_date?:number;
       
      ramp_tier_id?:string;
       
      discount_per_billing_cycle?:number;
       
      discount_per_billing_cycle_in_decimal?:string;
       
      item_level_discount_per_billing_cycle?:number;
       
      item_level_discount_per_billing_cycle_in_decimal?:string;
       
      amount_per_billing_cycle?:number;
       
      amount_per_billing_cycle_in_decimal?:string;
       
      net_amount_per_billing_cycle?:number;
       
      net_amount_per_billing_cycle_in_decimal?:string;
    }
    export interface Discount {  
      id:string;
       
      invoice_name?:string;
       
      type:'fixed_amount' | 'percentage';
       
      percentage?:number;
       
      amount?:number;
       
      duration_type:'one_time' | 'forever' | 'limited_period';
       
      entity_type:'item_level_coupon' | 'document_level_coupon' | 'item_level_discount' | 'document_level_discount';
       
      entity_id?:string;
       
      period?:number;
       
      period_unit?:'day' | 'week' | 'month' | 'year';
       
      included_in_mrr:boolean;
       
      apply_on:'invoice_amount' | 'specific_item_price';
       
      item_price_id?:string;
       
      created_at:number;
       
      updated_at?:number;
       
      start_date?:number;
       
      end_date?:number;
    }
    export interface ItemTier {  
      item_price_id:string;
       
      starting_unit:number;
       
      ending_unit?:number;
       
      price:number;
       
      starting_unit_in_decimal?:string;
       
      ending_unit_in_decimal?:string;
       
      price_in_decimal?:string;
       
      ramp_tier_id?:string;
       
      pricing_type?:'per_unit' | 'flat_fee' | 'package';
       
      package_size?:number;
    }
    export interface CouponApplicabilityMapping {  
      coupon_id?:string;
       
      applicable_item_price_ids?:string[];
    }
  }
}