///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface QuoteLineGroup {
    
    /**
      * @description Version of the quote line group.

      */
    
    version?:number;
    
    /**
      * @description Uniquely identifies a quote line group.

      */
    
    id?:string;
    
    /**
      * @description Subtotal in cents.

      */
    
    sub_total:number;
    
    /**
      * @description Total in cents.

      */
    
    total?:number;
    
    /**
      * @description Credits (in cents) applied to this quote line group.

      */
    
    credits_applied?:number;
    
    /**
      * @description Existing outstanding payments (in cents) if any, applied to this quote line group.

      */
    
    amount_paid?:number;
    
    /**
      * @description Amount due in cents

      */
    
    amount_due?:number;
    
    /**
      * @description Describes the time in the subscription lifecycle when the charge is to occur. \* subscription_creation - Subscription Creation \* trial_start - Trial Start \* subscription_renewal - Subscription Renewal \* subscription_change - Subscription Change \* subscription_cancel - Subscription Cancel \* immediate - Immediate

      */
    
    charge_event?:'subscription_cancel' | 'immediate' | 'subscription_creation' | 'trial_start' | 'subscription_renewal' | 'subscription_change';
    
    /**
      * @description The serial number of the billing cycle of which the quote line group is a part.

      */
    
    billing_cycle_number?:number;
    
    /**
      * @description The list of items in this quote line group.

      */
    
    line_items?:QuoteLineGroup.LineItem[];
    
    /**
      * @description The list of discounts applied to this quote line group.

      */
    
    discounts?:QuoteLineGroup.Discount[];
    
    /**
      * @description The list of discount(s) applied for line items in this quote line group.

      */
    
    line_item_discounts?:QuoteLineGroup.LineItemDiscount[];
    
    /**
      * @description The list of taxes applied to this quote line group.

      */
    
    taxes?:QuoteLineGroup.Tax[];
    
    /**
      * @description The list of taxes applied on line items in this quote line group.

      */
    
    line_item_taxes?:QuoteLineGroup.LineItemTax[];
  }
  export namespace QuoteLineGroup {
    
    
    export interface LineItem {  
      id?:string;
       
      subscription_id?:string;
       
      date_from?:number;
       
      date_to?:number;
       
      unit_amount?:number;
       
      quantity?:number;
       
      amount?:number;
       
      pricing_model?:'volume' | 'per_unit' | 'tiered' | 'flat_fee' | 'stairstep';
       
      is_taxed?:boolean;
       
      tax_amount?:number;
       
      tax_rate?:number;
       
      unit_amount_in_decimal?:string;
       
      quantity_in_decimal?:string;
       
      amount_in_decimal?:string;
       
      discount_amount?:number;
       
      item_level_discount_amount?:number;
       
      reference_line_item_id?:string;
       
      description?:string;
       
      entity_description?:string;
       
      entity_type?:'addon_item_price' | 'plan_item_price' | 'charge_item_price' | 'adhoc';
       
      tax_exempt_reason?:'high_value_physical_goods' | 'tax_not_configured' | 'reverse_charge' | 'zero_rated' | 'customer_exempt' | 'region_non_taxable' | 'zero_value_item' | 'export' | 'product_exempt';
       
      entity_id?:string;
       
      customer_id?:string;
    }
    export interface Discount {  
      amount?:number;
       
      description?:string;
       
      line_item_id?:string;
       
      entity_type?:'item_level_coupon' | 'promotional_credits' | 'item_level_discount' | 'prorated_credits' | 'document_level_discount' | 'document_level_coupon';
       
      discount_type?:'fixed_amount' | 'percentage';
       
      entity_id?:string;
       
      coupon_set_code?:string;
    }
    export interface LineItemDiscount {  
      line_item_id?:string;
       
      discount_type?:'item_level_coupon' | 'promotional_credits' | 'item_level_discount' | 'prorated_credits' | 'document_level_discount' | 'document_level_coupon';
       
      coupon_id?:string;
       
      entity_id?:string;
       
      discount_amount?:number;
    }
    export interface Tax {  
      name?:string;
       
      amount?:number;
       
      description?:string;
    }
    export interface LineItemTax {  
      line_item_id?:string;
       
      tax_name?:string;
       
      tax_rate?:number;
       
      is_partial_tax_applied?:boolean;
       
      is_non_compliance_tax?:boolean;
       
      taxable_amount?:number;
       
      tax_amount?:number;
       
      tax_juris_type?:'special' | 'country' | 'unincorporated' | 'other' | 'city' | 'federal' | 'county' | 'state';
       
      tax_juris_name?:string;
       
      tax_juris_code?:string;
       
      tax_amount_in_local_currency?:number;
       
      local_currency_code?:string;
    }
  }
}