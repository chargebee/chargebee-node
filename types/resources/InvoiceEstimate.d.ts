///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
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

    line_items?:InvoiceEstimate.LineItem[];

    line_item_tiers?:InvoiceEstimate.LineItemTier[];

    line_item_discounts?:InvoiceEstimate.LineItemDiscount[];

    line_item_taxes?:InvoiceEstimate.LineItemTax[];

    line_item_credits?:InvoiceEstimate.LineItemCredit[];

    line_item_addresses?:InvoiceEstimate.LineItemAddress[];

    discounts?:InvoiceEstimate.Discount[];

    taxes?:InvoiceEstimate.Tax[];

    round_off_amount?:number;

    customer_id?:string;

  }
  export namespace InvoiceEstimate {
    
    
    export interface LineItem {  
      id?:string;
       
      subscription_id?:string;
       
      date_from:number;
       
      date_to:number;
       
      unit_amount:number;
       
      quantity?:number;
       
      amount?:number;
       
      pricing_model?:'flat_fee' | 'per_unit' | 'tiered' | 'volume' | 'stairstep';
       
      is_taxed:boolean;
       
      tax_amount?:number;
       
      tax_rate?:number;
       
      unit_amount_in_decimal?:string;
       
      quantity_in_decimal?:string;
       
      amount_in_decimal?:string;
       
      discount_amount?:number;
       
      item_level_discount_amount?:number;
       
      metered?:boolean;
       
      is_percentage_pricing?:boolean;
       
      reference_line_item_id?:string;
       
      description:string;
       
      entity_description?:string;
       
      entity_type:'adhoc' | 'plan_item_price' | 'addon_item_price' | 'charge_item_price' | 'plan_setup' | 'plan' | 'addon';
       
      tax_exempt_reason?:'tax_not_configured' | 'region_non_taxable' | 'export' | 'customer_exempt' | 'product_exempt' | 'zero_rated' | 'reverse_charge' | 'high_value_physical_goods' | 'zero_value_item' | 'tax_not_configured_external_provider';
       
      entity_id?:string;
       
      customer_id?:string;
    }
    export interface LineItemTier {  
      line_item_id?:string;
       
      starting_unit:number;
       
      ending_unit?:number;
       
      quantity_used:number;
       
      unit_amount:number;
       
      starting_unit_in_decimal?:string;
       
      ending_unit_in_decimal?:string;
       
      quantity_used_in_decimal?:string;
       
      unit_amount_in_decimal?:string;
       
      pricing_type?:'per_unit' | 'flat_fee' | 'package';
       
      package_size?:number;
    }
    export interface LineItemDiscount {  
      line_item_id:string;
       
      discount_type:'item_level_coupon' | 'document_level_coupon' | 'promotional_credits' | 'prorated_credits' | 'item_level_discount' | 'document_level_discount';
       
      coupon_id?:string;
       
      entity_id?:string;
       
      discount_amount:number;
    }
    export interface LineItemTax {  
      line_item_id?:string;
       
      tax_name:string;
       
      tax_rate:number;
       
      date_to?:number;
       
      date_from?:number;
       
      prorated_taxable_amount?:number;
       
      is_partial_tax_applied?:boolean;
       
      is_non_compliance_tax?:boolean;
       
      taxable_amount:number;
       
      tax_amount:number;
       
      tax_juris_type?:'country' | 'federal' | 'state' | 'county' | 'city' | 'special' | 'unincorporated' | 'other';
       
      tax_juris_name?:string;
       
      tax_juris_code?:string;
       
      tax_amount_in_local_currency?:number;
       
      local_currency_code?:string;
    }
    export interface LineItemCredit {  
      cn_id:string;
       
      applied_amount:number;
       
      line_item_id?:string;
    }
    export interface LineItemAddress {  
      line_item_id?:string;
       
      first_name?:string;
       
      last_name?:string;
       
      email?:string;
       
      company?:string;
       
      phone?:string;
       
      line1?:string;
       
      line2?:string;
       
      line3?:string;
       
      city?:string;
       
      state_code?:string;
       
      state?:string;
       
      country?:string;
       
      zip?:string;
       
      validation_status?:'not_validated' | 'valid' | 'partially_valid' | 'invalid';
    }
    export interface Discount {  
      amount:number;
       
      description?:string;
       
      entity_type:'item_level_coupon' | 'document_level_coupon' | 'promotional_credits' | 'prorated_credits' | 'item_level_discount' | 'document_level_discount';
       
      discount_type?:'fixed_amount' | 'percentage';
       
      entity_id?:string;
       
      coupon_set_code?:string;
    }
    export interface Tax {  
      name:string;
       
      amount:number;
       
      description?:string;
    }
  }
}