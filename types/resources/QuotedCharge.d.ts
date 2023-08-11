///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface QuotedCharge {
    
    /**
      * @description Provides details of all the ad-hoc charges [added to the quote](/docs/api/quotes?prod_cat_ver&#x3D;2#create_a_quote_for_charge_and_charge_items).

      */
    
    charges?:QuotedCharge.Charge[];
    
    /**
      * @description Details of individual [item prices](/docs/api/item_prices?prod_cat_ver&#x3D;2) that are part of this subscription

      */
    
    invoice_items?:QuotedCharge.ItemPrice[];
    
    /**
      * @description The pricing details of &#x60;subscription_items&#x60; which have &#x60;pricing_model&#x60; as &#x60;tiered&#x60;, &#x60;volume&#x60; or &#x60;stairstep&#x60;. [Learn more](https://www.chargebee.com/docs/plans.html#pricing-models) about pricing models.

      */
    
    item_tiers?:QuotedCharge.ItemTier[];
    
    /**
      * @description List of coupons for this charge

      */
    
    coupons?:QuotedCharge.Coupon[];
    
    /**
      * @description List of discounts for the charges in this quote.

      */
    
    discounts?:QuotedCharge.Discount[];
  }
  export namespace QuotedCharge {
    
    
    export interface Charge {  
      amount?:number;
       
      amount_in_decimal?:string;
       
      description?:string;
       
      service_period_in_days?:number;
       
      avalara_sale_type?:'consumed' | 'wholesale' | 'vendor_use' | 'retail';
       
      avalara_transaction_type?:number;
       
      avalara_service_type?:number;
    }
    export interface ItemPrice {  
      item_price_id?:string;
       
      quantity?:number;
       
      quantity_in_decimal?:string;
       
      unit_price?:number;
       
      unit_price_in_decimal?:string;
       
      service_period_days?:number;
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
       
      apply_on?:'specific_item_price' | 'invoice_amount';
       
      item_price_id?:string;
       
      created_at?:number;
       
      coupon_id?:string;
       
      index?:number;
    }
  }
}