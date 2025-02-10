///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface Coupon {
    [key : string] : any;

    id:string;

    name:string;

    invoice_name?:string;

    discount_type:'fixed_amount' | 'percentage' | 'offer_quantity';

    discount_percentage?:number;

    discount_amount?:number;

    discount_quantity?:number;

    currency_code?:string;

    duration_type:'one_time' | 'forever' | 'limited_period';

    duration_month?:number;

    valid_from?:number;

    valid_till?:number;

    max_redemptions?:number;

    status?:'active' | 'expired' | 'archived' | 'deleted' | 'future';

    apply_discount_on:'plans' | 'plans_and_addons' | 'plans_with_quantity' | 'not_applicable';

    apply_on:'invoice_amount' | 'each_specified_item';

    plan_constraint:'none' | 'all' | 'specific' | 'not_applicable';

    addon_constraint:'none' | 'all' | 'specific' | 'not_applicable';

    created_at:number;

    archived_at?:number;

    resource_version?:number;

    updated_at?:number;

    included_in_mrr?:boolean;

    period?:number;

    period_unit?:PeriodUnit;

    plan_ids?:string[];

    addon_ids?:string[];

    item_constraints?:Coupon.ItemConstraint[];

    item_constraint_criteria?:Coupon.ItemConstraintCriteria[];

    redemptions?:number;

    invoice_notes?:string;

    meta_data?:object;

    coupon_constraints?:Coupon.CouponConstraint[];

    deleted:boolean;

  }
  export namespace Coupon {
    export class CouponResource {  
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
       
      create_for_items(input:CreateForItemsInputParam):ChargebeeRequest<CreateForItemsResponse>;
       
      update_for_items(coupon_id:string, input:UpdateForItemsInputParam):ChargebeeRequest<UpdateForItemsResponse>;
       
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
       
      retrieve(coupon_id:string):ChargebeeRequest<RetrieveResponse>;
       
      update(coupon_id:string, input?:UpdateInputParam):ChargebeeRequest<UpdateResponse>;
       
      delete(coupon_id:string):ChargebeeRequest<DeleteResponse>;
       
      copy(input:CopyInputParam):ChargebeeRequest<CopyResponse>;
       
      unarchive(coupon_id:string):ChargebeeRequest<UnarchiveResponse>;
    }
    export interface CreateResponse {  
       coupon:Coupon;
    }
    export interface CreateInputParam {
       
      id:string;
       
      name:string;
       
      invoice_name?:string;
       
      discount_type?:'fixed_amount' | 'percentage' | 'offer_quantity';
       
      discount_amount?:number;
       
      currency_code?:string;
       
      discount_percentage?:number;
       
      discount_quantity?:number;
       
      apply_on:'invoice_amount' | 'each_specified_item';
       
      duration_type?:'one_time' | 'forever' | 'limited_period';
       
      duration_month?:number;
       
      valid_till?:number;
       
      max_redemptions?:number;
       
      invoice_notes?:string;
       
      meta_data?:object;
       
      included_in_mrr?:boolean;
       
      period?:number;
       
      period_unit?:PeriodUnit;
       
      plan_constraint?:'none' | 'all' | 'specific';
       
      addon_constraint?:'none' | 'all' | 'specific';
       
      plan_ids?:string[];
       
      addon_ids?:string[];
       
      status?:'active' | 'archived';
    }
    export interface CreateForItemsResponse {  
       coupon:Coupon;
    }
    export interface CreateForItemsInputParam {
      [key : string] : any;  
      item_constraints:{constraint:'none' | 'all' | 'specific' | 'criteria',item_price_ids?:any[],item_type:'plan' | 'addon' | 'charge'}[];
       
      item_constraint_criteria?:{currencies?:any[],item_family_ids?:any[],item_price_periods?:any[],item_type?:'plan' | 'addon' | 'charge'}[];
       
      coupon_constraints:{entity_type:'customer',type:'max_redemptions' | 'unique_by' | 'existing_customer' | 'new_customer',value?:string}[];
       
      id:string;
       
      name:string;
       
      invoice_name?:string;
       
      discount_type?:'fixed_amount' | 'percentage' | 'offer_quantity';
       
      discount_amount?:number;
       
      currency_code?:string;
       
      discount_percentage?:number;
       
      discount_quantity?:number;
       
      apply_on:'invoice_amount' | 'each_specified_item';
       
      duration_type?:'one_time' | 'forever' | 'limited_period';
       
      duration_month?:number;
       
      valid_from?:number;
       
      valid_till?:number;
       
      max_redemptions?:number;
       
      invoice_notes?:string;
       
      meta_data?:object;
       
      included_in_mrr?:boolean;
       
      period?:number;
       
      period_unit?:PeriodUnit;
       
      status?:'active' | 'archived';
    }
    export interface UpdateForItemsResponse {  
       coupon:Coupon;
    }
    export interface UpdateForItemsInputParam {
      [key : string] : any;  
      item_constraints:{constraint:'none' | 'all' | 'specific' | 'criteria',item_price_ids?:any[],item_type:'plan' | 'addon' | 'charge'}[];
       
      item_constraint_criteria?:{currencies?:any[],item_family_ids?:any[],item_price_periods?:any[],item_type?:'plan' | 'addon' | 'charge'}[];
       
      coupon_constraints:{entity_type:'customer',type:'max_redemptions' | 'unique_by' | 'existing_customer' | 'new_customer',value?:string}[];
       
      name?:string;
       
      invoice_name?:string;
       
      discount_type?:'fixed_amount' | 'percentage' | 'offer_quantity';
       
      discount_amount?:number;
       
      currency_code?:string;
       
      discount_percentage?:number;
       
      discount_quantity?:number;
       
      apply_on?:'invoice_amount' | 'each_specified_item';
       
      duration_type?:'one_time' | 'forever' | 'limited_period';
       
      duration_month?:number;
       
      valid_from?:number;
       
      valid_till?:number;
       
      max_redemptions?:number;
       
      invoice_notes?:string;
       
      meta_data?:object;
       
      included_in_mrr?:boolean;
       
      period?:number;
       
      period_unit?:PeriodUnit;
    }
    export interface ListResponse {  
       list:{coupon:Coupon}[];
       
       next_offset?:string;
    }
    export interface ListInputParam {
      [key : string]: any;  
      /**
        * @description The number of resources to be returned.

        */
        
      limit?:number;
       
      /**
        * @description Determines your position in the list for pagination. To ensure that the next page is retrieved correctly, always set \&#x60;offset\&#x60; to the value of \&#x60;next_offset\&#x60; obtained in the previous iteration of the API call.

        */
        
      offset?:string;
       
      /**
        * @description Parameters for addon

        */
        
      addon?:{};
       
      /**
        * @description Parameters for plan

        */
        
      plan?:{};
       
      /**
        * @description Used to uniquely identify the coupon in your website/application and to integrate with Chargebee.  
**Note:**


When the coupon ID contains a special character; for example: &#x60;#&#x60;, the API returns an error.
Make sure that you [encode](https://www.urlencoder.org/) the coupon ID in the path parameter before making an API call.

        */
        
      id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description The display name used in web interface for identifying the coupon.  
**Note:**


When the name of the coupon set contains a special character; for example: &#x60;#&#x60;, the API returns an error.
Make sure that you [encode](https://www.urlencoder.org/) the name of the coupon set in the path parameter before making an API call.

        */
        
      name?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description The type of deduction

        */
        
      discount_type?:{in?:string,is?:'fixed_amount' | 'percentage' | 'offer_quantity',is_not?:'fixed_amount' | 'percentage' | 'offer_quantity',not_in?:string};
       
      /**
        * @description Specifies the time duration for which this coupon is attached to the subscription.

        */
        
      duration_type?:{in?:string,is?:'one_time' | 'forever' | 'limited_period',is_not?:'one_time' | 'forever' | 'limited_period',not_in?:string};
       
      /**
        * @description Status of the coupon.

        */
        
      status?:{in?:string,is?:'active' | 'expired' | 'archived' | 'deleted' | 'future',is_not?:'active' | 'expired' | 'archived' | 'deleted' | 'future',not_in?:string};
       
      /**
        * @description The amount on the invoice to which the coupon is applied.

        */
        
      apply_on?:{in?:string,is?:'invoice_amount' | 'each_specified_item',is_not?:'invoice_amount' | 'each_specified_item',not_in?:string};
       
      /**
        * @description Timestamp indicating when this coupon is created.

        */
        
      created_at?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description To filter based on updated at. This attribute will be present only if the resource has been updated after 2016-11-09.

        */
        
      updated_at?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description Plans the coupon can be applied to.

        */
        
      plan_constraint?:{in?:string,is?:'none' | 'all' | 'specific' | 'not_applicable',is_not?:'none' | 'all' | 'specific' | 'not_applicable',not_in?:string};
       
      /**
        * @description Addons the coupon can be applied to.

        */
        
      addon_constraint?:{in?:string,is?:'none' | 'all' | 'specific' | 'not_applicable',is_not?:'none' | 'all' | 'specific' | 'not_applicable',not_in?:string};
       
      sort_by?:{asc?:'created_at',desc?:'created_at'};
       
      /**
        * @description The currency code ([ISO 4217 format](https://www.chargebee.com/docs/supported-currencies.html)) of the coupon. Applicable for *fixed_amount* coupons alone.

        */
        
      currency_code?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Item families for which this coupon is applicable.

        */
        
      item_family?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      include_discounts?:boolean;
    }
    export interface RetrieveResponse {  
       coupon:Coupon;
    }
    
    export interface UpdateResponse {  
       coupon:Coupon;
    }
    export interface UpdateInputParam {
       
      name?:string;
       
      invoice_name?:string;
       
      discount_type?:'fixed_amount' | 'percentage' | 'offer_quantity';
       
      discount_amount?:number;
       
      currency_code?:string;
       
      discount_percentage?:number;
       
      discount_quantity?:number;
       
      apply_on?:'invoice_amount' | 'each_specified_item';
       
      duration_type?:'one_time' | 'forever' | 'limited_period';
       
      duration_month?:number;
       
      valid_till?:number;
       
      max_redemptions?:number;
       
      invoice_notes?:string;
       
      meta_data?:object;
       
      included_in_mrr?:boolean;
       
      period?:number;
       
      period_unit?:PeriodUnit;
       
      plan_constraint?:'none' | 'all' | 'specific';
       
      addon_constraint?:'none' | 'all' | 'specific';
       
      plan_ids?:string[];
       
      addon_ids?:string[];
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
    export interface UnarchiveResponse {  
       coupon:Coupon;
    }
    
    export interface ItemConstraint {  
      item_type:'plan' | 'addon' | 'charge';
       
      constraint:'none' | 'all' | 'specific' | 'criteria';
       
      item_price_ids?:any[];
    }
    export interface ItemConstraintCriteria {  
      item_type:'plan' | 'addon' | 'charge';
       
      currencies?:any[];
       
      item_family_ids?:any[];
       
      item_price_periods?:any[];
    }
    export interface CouponConstraint {  
      entity_type:'customer';
       
      type:'max_redemptions' | 'unique_by' | 'existing_customer' | 'new_customer';
       
      value?:string;
    }
  }
}