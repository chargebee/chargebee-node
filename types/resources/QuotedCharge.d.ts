declare module 'chargebee' {
  export interface QuotedCharge {
    
    charges?:QuotedCharge.Charge[];
    invoice_items?:QuotedCharge.ItemPrice[];
    item_tiers?:QuotedCharge.ItemTier[];
    coupons?:QuotedCharge.Coupon[];
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