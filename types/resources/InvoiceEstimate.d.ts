///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface InvoiceEstimate {
    
    recurring:boolean;
    
    price_type:PriceType;
    
    currency_code:string;
    
    sub_total:number;
    
    total?:number;
    
    credits_applied?:number;
    
    amount_paid?:number;
    
    amount_due?:number;
    
    round_off_amount?:number;
    
    customer_id?:string;
    
    line_items?:InvoiceEstimate.LineItem[];
    
    discounts?:InvoiceEstimate.Discount[];
    
    taxes?:InvoiceEstimate.Tax[];
    
    line_item_taxes?:InvoiceEstimate.LineItemTax[];
    
    line_item_tiers?:InvoiceEstimate.LineItemTier[];
    
    line_item_discounts?:InvoiceEstimate.LineItemDiscount[];
  }
  export namespace InvoiceEstimate {
    
    
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
    export interface LineItemTier {  
      line_item_id?:string;
       
      starting_unit?:number;
       
      ending_unit?:number;
       
      quantity_used?:number;
       
      unit_amount?:number;
       
      starting_unit_in_decimal?:string;
       
      ending_unit_in_decimal?:string;
       
      quantity_used_in_decimal?:string;
       
      unit_amount_in_decimal?:string;
    }
    export interface LineItemDiscount {  
      line_item_id?:string;
       
      discount_type?:'item_level_coupon' | 'promotional_credits' | 'item_level_discount' | 'prorated_credits' | 'document_level_discount' | 'document_level_coupon';
       
      coupon_id?:string;
       
      entity_id?:string;
       
      discount_amount?:number;
    }
  }
}