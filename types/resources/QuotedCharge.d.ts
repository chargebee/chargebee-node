///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface QuotedCharge {
    

    charges?:QuotedCharge.Charge[];

    addons?:QuotedCharge.Addon[];

    invoice_items?:QuotedCharge.InvoiceItem[];

    item_tiers?:QuotedCharge.ItemTier[];

    coupons?:QuotedCharge.Coupon[];

    coupon_applicability_mappings?:QuotedCharge.CouponApplicabilityMapping[];

  }
  export namespace QuotedCharge {
    
    
    export interface Charge {  
      amount?:number;
       
      amount_in_decimal?:string;
       
      description?:string;
       
      service_period_in_days?:number;
       
      avalara_sale_type?:'wholesale' | 'retail' | 'consumed' | 'vendor_use';
       
      avalara_transaction_type?:number;
       
      avalara_service_type?:number;
    }
    export interface Addon {  
      id:string;
       
      quantity?:number;
       
      unit_price?:number;
       
      quantity_in_decimal?:string;
       
      unit_price_in_decimal?:string;
       
      proration_type?:'full_term' | 'partial_term' | 'none';
       
      service_period?:number;
    }
    export interface InvoiceItem {  
      item_price_id:string;
       
      quantity?:number;
       
      quantity_in_decimal?:string;
       
      unit_price?:number;
       
      unit_price_in_decimal?:string;
       
      service_period_days?:number;
    }
    export interface ItemTier {  
      item_price_id:string;
       
      starting_unit:number;
       
      ending_unit?:number;
       
      price:number;
       
      starting_unit_in_decimal?:string;
       
      ending_unit_in_decimal?:string;
       
      price_in_decimal?:string;
       
      pricing_type?:'per_unit' | 'flat_fee' | 'package';
       
      package_size?:number;
       
      index:number;
    }
    export interface Coupon {  
      coupon_id:string;
    }
    export interface CouponApplicabilityMapping {  
      coupon_id?:string;
       
      applicable_item_price_ids?:string[];
    }
  }
}