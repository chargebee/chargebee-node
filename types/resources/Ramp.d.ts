///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface Ramp {
    

    id:string;

    description?:string;

    subscription_id:string;

    effective_from:number;

    status:'scheduled' | 'succeeded' | 'failed' | 'draft';

    created_at:number;

    resource_version?:number;

    updated_at?:number;

    items_to_add?:Ramp.ItemsToAdd[];

    items_to_update?:Ramp.ItemsToUpdate[];

    coupons_to_add?:Ramp.CouponsToAdd[];

    discounts_to_add?:Ramp.DiscountsToAdd[];

    item_tiers?:Ramp.ItemTier[];

    items_to_remove?:string[];

    coupons_to_remove?:string[];

    discounts_to_remove?:string[];

    deleted:boolean;

    status_transition_reason?:Ramp.StatusTransitionReason;

  }
  export namespace Ramp {
    export class RampResource {  
      create_for_subscription(subscription_id:string, input:CreateForSubscriptionInputParam):ChargebeeRequest<CreateForSubscriptionResponse>;
       
      update(ramp_id:string, input:UpdateInputParam):ChargebeeRequest<UpdateResponse>;
       
      retrieve(ramp_id:string):ChargebeeRequest<RetrieveResponse>;
       
      delete(ramp_id:string):ChargebeeRequest<DeleteResponse>;
       
      list(input:ListInputParam):ChargebeeRequest<ListResponse>;
    }
    export interface CreateForSubscriptionResponse {  
       ramp:Ramp;
    }
    export interface CreateForSubscriptionInputParam {
       
      items_to_add:{billing_cycles?:number,item_price_id:string,quantity?:number,quantity_in_decimal?:string,service_period_days?:number,unit_price?:number,unit_price_in_decimal?:string}[];
       
      items_to_update:{billing_cycles?:number,item_price_id:string,quantity?:number,quantity_in_decimal?:string,service_period_days?:number,unit_price?:number,unit_price_in_decimal?:string}[];
       
      item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,item_price_id?:string,package_size?:number,price?:number,price_in_decimal?:string,pricing_type?:PricingType,starting_unit?:number,starting_unit_in_decimal?:string}[];
       
      coupons_to_add?:{apply_till?:number,coupon_id?:string}[];
       
      discounts_to_add:{amount?:number,apply_on:ApplyOn,duration_type:DurationType,included_in_mrr?:boolean,item_price_id?:string,percentage?:number,period?:number,period_unit?:PeriodUnit}[];
       
      effective_from:number;
       
      description?:string;
       
      coupons_to_remove?:string[];
       
      discounts_to_remove?:string[];
       
      items_to_remove?:string[];
    }
    export interface UpdateResponse {  
       ramp:Ramp;
    }
    export interface UpdateInputParam {
       
      items_to_add:{billing_cycles?:number,item_price_id:string,quantity?:number,quantity_in_decimal?:string,service_period_days?:number,unit_price?:number,unit_price_in_decimal?:string}[];
       
      items_to_update:{billing_cycles?:number,item_price_id:string,quantity?:number,quantity_in_decimal?:string,service_period_days?:number,unit_price?:number,unit_price_in_decimal?:string}[];
       
      item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,item_price_id?:string,package_size?:number,price?:number,price_in_decimal?:string,pricing_type?:PricingType,starting_unit?:number,starting_unit_in_decimal?:string}[];
       
      coupons_to_add?:{apply_till?:number,coupon_id?:string}[];
       
      discounts_to_add:{amount?:number,apply_on:ApplyOn,duration_type:DurationType,included_in_mrr?:boolean,item_price_id?:string,percentage?:number,period?:number,period_unit?:PeriodUnit}[];
       
      effective_from:number;
       
      description?:string;
       
      coupons_to_remove?:string[];
       
      discounts_to_remove?:string[];
       
      items_to_remove?:string[];
    }
    export interface RetrieveResponse {  
       ramp:Ramp;
    }
    
    export interface DeleteResponse {  
       ramp:Ramp;
    }
    
    export interface ListResponse {  
       list:{ramp:Ramp}[];
       
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
        * @description Indicates whether to include deleted objects in the list. The deleted objects have the attribute \&#x60;deleted\&#x60; as \&#x60;true\&#x60;.

        */
        
      include_deleted?:boolean;
       
      /**
        * @description Filter ramps by Status.

        */
        
      status?:{in?:string,is?:'scheduled' | 'succeeded' | 'failed' | 'draft'};
       
      /**
        * @description Filter ramps by Subscription Id.

        */
        
      subscription_id:{in?:string,is?:string};
       
      /**
        * @description Filter ramps by &#x60;effective_from&#x60;

        */
        
      effective_from?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description Filter ramps by resource_updated_at

        */
        
      updated_at?:{after?:string,before?:string,between?:string,on?:string};
       
      sort_by?:{asc?:'effective_from' | 'updated_at',desc?:'effective_from' | 'updated_at'};
    }
    export interface ItemsToAdd {  
      item_price_id:string;
       
      item_type:'plan' | 'addon' | 'charge';
       
      quantity?:number;
       
      quantity_in_decimal?:string;
       
      unit_price?:number;
       
      unit_price_in_decimal?:string;
       
      amount?:number;
       
      amount_in_decimal?:string;
       
      free_quantity?:number;
       
      free_quantity_in_decimal?:string;
       
      billing_cycles?:number;
       
      service_period_days?:number;
       
      metered_quantity?:string;
    }
    export interface ItemsToUpdate {  
      item_price_id:string;
       
      item_type:'plan' | 'addon' | 'charge';
       
      quantity?:number;
       
      quantity_in_decimal?:string;
       
      unit_price?:number;
       
      unit_price_in_decimal?:string;
       
      amount?:number;
       
      amount_in_decimal?:string;
       
      free_quantity?:number;
       
      free_quantity_in_decimal?:string;
       
      billing_cycles?:number;
       
      service_period_days?:number;
       
      metered_quantity?:string;
    }
    export interface CouponsToAdd {  
      coupon_id:string;
       
      apply_till?:number;
    }
    export interface DiscountsToAdd {  
      id:string;
       
      invoice_name?:string;
       
      type:'fixed_amount' | 'percentage';
       
      percentage?:number;
       
      amount?:number;
       
      duration_type:'one_time' | 'forever' | 'limited_period';
       
      period?:number;
       
      period_unit?:'day' | 'week' | 'month' | 'year';
       
      included_in_mrr:boolean;
       
      apply_on:'invoice_amount' | 'specific_item_price';
       
      item_price_id?:string;
       
      created_at:number;
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
    export interface StatusTransitionReason {  
      code?:string;
       
      message?:string;
    }
  }
}