///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface Coupon {
    
    id:string;
    name:string;
    invoice_name?:string;
    discount_type:'fixed_amount' | 'percentage';
    discount_percentage?:number;
    discount_amount?:number;
    currency_code?:string;
    duration_type:'limited_period' | 'one_time' | 'forever';
    valid_till?:number;
    max_redemptions?:number;
    status?:'archived' | 'expired' | 'deleted' | 'active';
    apply_on:'invoice_amount' | 'each_specified_item';
    created_at:number;
    archived_at?:number;
    resource_version?:number;
    updated_at?:number;
    period?:number;
    period_unit?:PeriodUnit;
    redemptions?:number;
    invoice_notes?:string;
    item_constraints?:Coupon.ItemConstraint[];
    item_constraint_criteria?:Coupon.ItemConstraintCriteria[];
    coupon_constraints?:Coupon.CouponConstraint[];
  }
  export namespace Coupon {
    export class CouponResource {
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
      update_for_items(coupon_id:string, input?:UpdateForItemsInputParam):ChargebeeRequest<UpdateForItemsResponse>;
      unarchive(coupon_id:string):ChargebeeRequest<UnarchiveResponse>;
      delete(coupon_id:string):ChargebeeRequest<DeleteResponse>;
      copy(input:CopyInputParam):ChargebeeRequest<CopyResponse>;
      retrieve(coupon_id:string):ChargebeeRequest<RetrieveResponse>;
      create_for_items(input:CreateForItemsInputParam):ChargebeeRequest<CreateForItemsResponse>;
    }
    export interface ListResponse {
      list:{coupon:Coupon}[];
      next_offset?:string;
    }
    export interface ListInputParam {
      [key: string]: string | number | object | boolean;
      limit?:number;
      offset?:string;
      id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      name?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      discount_type?:{in?:string,is?:'fixed_amount' | 'percentage',is_not?:'fixed_amount' | 'percentage',not_in?:string};
      duration_type?:{in?:string,is?:'limited_period' | 'one_time' | 'forever',is_not?:'limited_period' | 'one_time' | 'forever',not_in?:string};
      status?:{in?:string,is?:'archived' | 'expired' | 'deleted' | 'active',is_not?:'archived' | 'expired' | 'deleted' | 'active',not_in?:string};
      apply_on?:{in?:string,is?:'invoice_amount' | 'each_specified_item',is_not?:'invoice_amount' | 'each_specified_item',not_in?:string};
      created_at?:{after?:string,before?:string,between?:string,on?:string};
      updated_at?:{after?:string,before?:string,between?:string,on?:string};
      sort_by?:{asc?:'created_at',desc?:'created_at'};
      currency_code?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      addon?:{};
      plan?:{};
    }
    export interface UpdateForItemsResponse {
      coupon:Coupon;
    }
    export interface UpdateForItemsInputParam {
      
      name?:string;
      invoice_name?:string;
      discount_type?:'fixed_amount' | 'percentage';
      discount_amount?:number;
      currency_code?:string;
      discount_percentage?:number;
      apply_on?:'invoice_amount' | 'each_specified_item';
      duration_type?:'limited_period' | 'one_time' | 'forever';
      duration_month?:number;
      valid_till?:number;
      max_redemptions?:number;
      invoice_notes?:string;
      meta_data?:object;
      included_in_mrr?:boolean;
      period?:number;
      period_unit?:PeriodUnit;
      item_constraints?:{constraint:'all' | 'criteria' | 'none' | 'specific',item_price_ids?:any[],item_type:'charge' | 'addon' | 'plan'}[];
      item_constraint_criteria?:{currencies?:any[],item_family_ids?:any[],item_price_periods?:any[],item_type?:'charge' | 'addon' | 'plan'}[];
      coupon_constraints?:{entity_type:'customer',type:'max_redemptions' | 'unique_by',value?:string}[];
    }
    export interface UnarchiveResponse {
      coupon:Coupon;
    }
    
    export interface DeleteResponse {
      coupon:Coupon;
    }
    
    export interface CopyResponse {
      coupon:Coupon;
    }
    export interface CopyInputParam {
      
      from_site:string;
      id_at_from_site:string;
      id?:string;
      for_site_merging?:boolean;
    }
    export interface RetrieveResponse {
      coupon:Coupon;
    }
    
    export interface CreateForItemsResponse {
      coupon:Coupon;
    }
    export interface CreateForItemsInputParam {
      
      id:string;
      name:string;
      invoice_name?:string;
      discount_type:'fixed_amount' | 'percentage';
      discount_amount?:number;
      currency_code?:string;
      discount_percentage?:number;
      apply_on:'invoice_amount' | 'each_specified_item';
      duration_type:'limited_period' | 'one_time' | 'forever';
      duration_month?:number;
      valid_till?:number;
      max_redemptions?:number;
      invoice_notes?:string;
      meta_data?:object;
      included_in_mrr?:boolean;
      period?:number;
      period_unit?:PeriodUnit;
      status?:'archived' | 'active';
      item_constraints?:{constraint:'all' | 'criteria' | 'none' | 'specific',item_price_ids?:any[],item_type:'charge' | 'addon' | 'plan'}[];
      item_constraint_criteria?:{currencies?:any[],item_family_ids?:any[],item_price_periods?:any[],item_type?:'charge' | 'addon' | 'plan'}[];
      coupon_constraints?:{entity_type:'customer',type:'max_redemptions' | 'unique_by',value?:string}[];
    }
    export interface ItemConstraint {
      item_type?:'charge' | 'addon' | 'plan';
      constraint?:'all' | 'criteria' | 'none' | 'specific';
      item_price_ids?:any[];
    }
    export interface ItemConstraintCriteria {
      item_type?:'charge' | 'addon' | 'plan';
      currencies?:any[];
      item_family_ids?:any[];
      item_price_periods?:any[];
    }
    export interface CouponConstraint {
      entity_type?:'customer';
      type?:'max_redemptions' | 'unique_by';
      value?:string;
    }
  }
}