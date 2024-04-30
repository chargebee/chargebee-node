///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface Ramp {
    
    /**
      * @description A unique and immutable identifier for the ramp.

      */
    
    id:string;
    
    /**
      * @description A brief summary of the pricing changes applied with this ramp.

      */
    
    description?:string;
    
    /**
      * @description The ID of the subscription for which this ramp was created.

      */
    
    subscription_id:string;
    
    /**
      * @description Specifies the time when the changes to the subscription will be applied by executing the ramp.

      */
    
    effective_from:number;
    
    /**
      * @description The execution status of the ramp \* succeeded - The ramp completed successfully. \* scheduled - The ramp has been created and scheduled for execution.  
**Note**

Excluding deleted ramps, a subscription can have a maximum of 12 ramps in the &#x60;scheduled&#x60; &#x60;status&#x60;.
\* failed - The ramp did not complete because of an error.

      */
    
    status:'scheduled' | 'succeeded' | 'failed';
    
    /**
      * @description Timestamp indicating when this resource was created.

      */
    
    created_at:number;
    
    /**
      * @description Version number of this resource. The &#x60;resource_version&#x60; is updated with a new timestamp in milliseconds for every change made to the resource.

      */
    
    resource_version?:number;
    
    /**
      * @description Timestamp indicating when this resource was last updated.

      */
    
    updated_at?:number;
    
    /**
      * @description List of [item prices](item_prices) removed from the subscription through this ramp.

      */
    
    items_to_remove?:string[];
    
    /**
      * @description List of &lt;coupons&gt; removed from the subscription through this ramp.

      */
    
    coupons_to_remove?:string[];
    
    /**
      * @description List of &lt;discounts&gt; removed from the subscription through this ramp.

      */
    
    discounts_to_remove?:string[];
    
    /**
      * @description Indicates that this resource has been deleted.

      */
    
    deleted:boolean;
    
    /**
      * @description Details about the [item prices](/docs/api/item_prices?prod_cat_ver&#x3D;2) added to the subscription through this ramp.

      */
    
    items_to_add?:Ramp.ItemsToAdd[];
    
    /**
      * @description Details about the [item prices](item_prices) updated in the subscription through this ramp.

      */
    
    items_to_update?:Ramp.ItemsToUpdate[];
    
    /**
      * @description Details about the &lt;coupons&gt; added to the subscription through this ramp.

      */
    
    coupons_to_add?:Ramp.CouponsToAdd[];
    
    /**
      * @description Details about the [discounts](/docs/api/discounts?prod_cat_ver&#x3D;2) added to the subscription through this ramp.

      */
    
    discounts_to_add?:Ramp.DiscountsToAdd[];
    
    /**
      * @description **Note**

Allowed only when both of these conditions are met:

* [Price overriding](https://www.chargebee.com/docs/2.0/price-override.html) is enabled for the site.
* &#x60;pricing_model&#x60; of the item price is either &#x60;tiered&#x60;, &#x60;volume&#x60;, or &#x60;stairstep&#x60;.

Overrides the [item_tiers](subscriptions#subscription_item_tiers) for specific &#x60;item_prices&#x60; of the subscription.

      */
    
    item_tiers?:Ramp.ItemTier[];
  }
  export namespace Ramp {
    export class RampResource {  
      /**
        * @description Creates a ramp for a subscription.  
**Note**

* **Subscription status** : You cannot create ramps for subscriptions in the &#x60;paused&#x60; or &#x60;cancelled&#x60; [status](subscriptions?prod_cat_ver&#x3D;2#subscription_status).
* **Advance invoice** : You cannot create a ramps for subscriptions that have an [advance invoice](https://www.chargebee.com/docs/2.0/advance-invoices.html) or an [advance invoice schedule](advance_invoice_schedules?prod_cat_ver&#x3D;2).
* **Upcoming ramps limit** : A subscription can have a maximum of 12 upcoming ramps at any given time, excluding deleted ramps. Upcoming ramps are ramps with &#x60;status&#x60; as [scheduled](ramps#ramp_status).
* **Total ramps limit**: A subscription can have a maximum of 100 ramps at any given time, excluding deleted ramps.

        */
      
      create_for_subscription(subscription_id:string, input:CreateForSubscriptionInputParam):ChargebeeRequest<CreateForSubscriptionResponse>;
       
      /**
        * @description Retrieves a specific subscription ramp.

        */
      
      retrieve(subscription_schedule_id:string):ChargebeeRequest<RetrieveResponse>;
       
      /**
        * @description Deletes the specified subscription ramp. However, Chargebee only allows deleting a ramp if it does not conflict with future ramps on the subscription. The following checks are performed to ensure compatibility:

|               Condition                |                                                           Restriction                                                           |
|----------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| The ramp contains &#x60;items_to_add[]&#x60;     | The ramp cannot be deleted if any of the items in &#x60;items_to_add[]&#x60; are scheduled to be updated or removed in a subsequent ramp. |
| The ramp contains &#x60;coupons_to_add[]&#x60;   | The ramp cannot be deleted if any of the coupons in &#x60;coupons_to_add[]&#x60; are scheduled to be removed in a subsequent ramp.        |
| The ramp contains &#x60;discounts_to_add[]&#x60; | The ramp cannot be deleted if any of the discounts in &#x60;discounts_to_add[]&#x60; are scheduled to be removed in a subsequent ramp.    |


        */
      
      delete(subscription_schedule_id:string):ChargebeeRequest<DeleteResponse>;
       
      /**
        * @description Lists the subscription ramps that match the criteria provided in the filter parameters.  
**Note**

By default, the ramps are returned [sorted](ramps#list_ramps_sort_by) in descending order (latest first) by [updated_at](ramps#ramp_updated_at).

        */
      
      list(input:ListInputParam):ChargebeeRequest<ListResponse>;
    }
    export interface CreateForSubscriptionResponse {  
       ramp:Ramp;
    }
    export interface CreateForSubscriptionInputParam {
       
      /**
        * @description The time when this ramp takes effect.  
**Caution**

* Ensure the time is within **five** years from the current time.
* Ensure there is a minimum 24-hour interval between &#x60;effective_from&#x60; of two consecutive ramps.
* If the subscription is scheduled to be paused or canceled in the future, ensure the time is not on or after [pause_date](subscriptions?prod_cat_ver&#x3D;2#subscription_pause_date) or [cancelled_at](subscriptions?prod_cat_ver&#x3D;2#subscription_cancelled_at).

        */
       
      effective_from:number;
       
      /**
        * @description A brief summary of the pricing changes applied with this ramp.

        */
       
      description?:string;
       
      /**
        * @description List of &lt;coupons&gt; removed from the subscription through this ramp.  
**Caution**

Ensure this list does **not** include:

* Coupons being added through this ramp.
* Coupons already removed by a previous ramp.

        */
       
      coupons_to_remove?:string[];
       
      /**
        * @description List of &lt;discounts&gt; removed from the subscription through this ramp.  
**Caution**

Ensure this list does not include discounts already removed by a previous ramp.

        */
       
      discounts_to_remove?:string[];
       
      /**
        * @description List of [item prices](item_prices) removed from the subscription through this ramp.  
**Caution**

Ensure this list does **not** include:

* Item prices being added or updated through this ramp.
* Item prices already removed by a previous ramp.

        */
       
      items_to_remove?:string[];
       
      /**
        * @description Details about the [item prices](/docs/api/item_prices?prod_cat_ver&#x3D;2) added to the subscription through this ramp.

        */
       
      items_to_add:{billing_cycles?:number,item_price_id:string,quantity?:number,quantity_in_decimal?:string,service_period_days?:number,unit_price?:number,unit_price_in_decimal?:string}[];
       
      /**
        * @description Details about the [item prices](item_prices) updated in the subscription through this ramp.

        */
       
      items_to_update:{billing_cycles?:number,item_price_id:string,quantity?:number,quantity_in_decimal?:string,service_period_days?:number,unit_price?:number,unit_price_in_decimal?:string}[];
       
      /**
        * @description **Note**

Allowed only when both of these conditions are met:

* Price overriding is enabled for the site.
* pricing_model of the item price is either tiered, volume, or stairstep.

Replaces the existing item_tiers for specific &#x60;item_price&#x60;s within the subscription. You must provide the complete tier set for any &#x60;item_price&#x60;, even if you&#x27;re changing the price for only one tier.

        */
       
      item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,item_price_id?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
       
      /**
        * @description Details about the &lt;coupons&gt; added to the subscription through this ramp.

        */
       
      coupons_to_add?:{apply_till?:number,coupon_id?:string}[];
       
      /**
        * @description Details about the [discounts](/docs/api/discounts?prod_cat_ver&#x3D;2) added to the subscription through this ramp.

        */
       
      discounts_to_add:{amount?:number,apply_on:ApplyOn,duration_type:DurationType,included_in_mrr?:boolean,item_price_id?:string,percentage?:number,period?:number,period_unit?:PeriodUnit}[];
    }
    export interface RetrieveResponse {  
       ramp:Ramp;
    }
    
    export interface DeleteResponse {  
       ramp:Ramp;
    }
    
    export interface ListResponse {  
      /**
        * @description Lists the subscription ramps that match the criteria provided in the filter parameters.  
**Note**

By default, the ramps are returned [sorted](ramps#list_ramps_sort_by) in descending order (latest first) by [updated_at](ramps#ramp_updated_at).

        */
       
       list:{ramp:Ramp}[];
       
      /**
        * @description Lists the subscription ramps that match the criteria provided in the filter parameters.  
**Note**

By default, the ramps are returned [sorted](ramps#list_ramps_sort_by) in descending order (latest first) by [updated_at](ramps#ramp_updated_at).

        */
       
       next_offset?:string;
    }
    export interface ListInputParam {
      [key : string]: any;  
      /**
        * @description Lists the subscription ramps that match the criteria provided in the filter parameters.  
**Note**

By default, the ramps are returned [sorted](ramps#list_ramps_sort_by) in descending order (latest first) by [updated_at](ramps#ramp_updated_at).

        */
        
      limit?:number;
       
      /**
        * @description Lists the subscription ramps that match the criteria provided in the filter parameters.  
**Note**

By default, the ramps are returned [sorted](ramps#list_ramps_sort_by) in descending order (latest first) by [updated_at](ramps#ramp_updated_at).

        */
        
      offset?:string;
       
      /**
        * @description Lists the subscription ramps that match the criteria provided in the filter parameters.  
**Note**

By default, the ramps are returned [sorted](ramps#list_ramps_sort_by) in descending order (latest first) by [updated_at](ramps#ramp_updated_at).

        */
        
      include_deleted?:boolean;
       
      /**
        * @description Lists the subscription ramps that match the criteria provided in the filter parameters.  
**Note**

By default, the ramps are returned [sorted](ramps#list_ramps_sort_by) in descending order (latest first) by [updated_at](ramps#ramp_updated_at).

        */
        
      status?:{in?:string,is?:'scheduled' | 'succeeded' | 'failed'};
       
      /**
        * @description Lists the subscription ramps that match the criteria provided in the filter parameters.  
**Note**

By default, the ramps are returned [sorted](ramps#list_ramps_sort_by) in descending order (latest first) by [updated_at](ramps#ramp_updated_at).

        */
        
      subscription_id:{in?:string,is?:string};
       
      /**
        * @description Lists the subscription ramps that match the criteria provided in the filter parameters.  
**Note**

By default, the ramps are returned [sorted](ramps#list_ramps_sort_by) in descending order (latest first) by [updated_at](ramps#ramp_updated_at).

        */
        
      effective_from?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description Lists the subscription ramps that match the criteria provided in the filter parameters.  
**Note**

By default, the ramps are returned [sorted](ramps#list_ramps_sort_by) in descending order (latest first) by [updated_at](ramps#ramp_updated_at).

        */
        
      updated_at?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description Lists the subscription ramps that match the criteria provided in the filter parameters.  
**Note**

By default, the ramps are returned [sorted](ramps#list_ramps_sort_by) in descending order (latest first) by [updated_at](ramps#ramp_updated_at).

        */
        
      sort_by?:{asc?:'effective_from' | 'updated_at',desc?:'effective_from' | 'updated_at'};
    }
    export interface ItemsToAdd {  
         /**
          * @description The unique identifier of the item price.

          */
       
      item_price_id:string;
       
         /**
          * @description The type of item. There must be one and only one item of type &#x60;plan&#x60; in this list. \* charge - Charge \* plan - Plan \* addon - Addon

          */
       
      item_type:'plan' | 'addon' | 'charge';
       
         /**
          * @description The quantity of the item purchased

          */
       
      quantity?:number;
       
         /**
          * @description The decimal representation of the quantity of the item purchased. Can be provided for quantity-based item prices and only when [multi-decimal pricing](https://apidocs.chargebee.com/docs/api/currencies#handling_currency_units) is enabled.

          */
       
      quantity_in_decimal?:string;
       
         /**
          * @description The price/per unit price of the item. When not provided, [the value set](/docs/api/item_prices?prod_cat_ver&#x3D;2#item_price_attributes) for the item price is used. This is only applicable when the &#x60;pricing_model&#x60; of the item price is &#x60;flat_fee&#x60; or &#x60;per_unit&#x60;. Also, it is only allowed when [price overriding](https://www.chargebee.com/docs/price-override.html) is enabled for the site. The value depends on the [type of currency](currencies#handling_currency_units).

          */
       
      unit_price?:number;
       
         /**
          * @description The decimal representation of the price or per-unit price of the plan. The value is in major units of the currency. Always returned when [multi-decimal pricing](https://apidocs.chargebee.com/docs/api/currencies#handling_currency_units) is enabled.

          */
       
      unit_price_in_decimal?:string;
       
         /**
          * @description The total amount for the item as determined from &#x60;unit_price&#x60;, &#x60;free_quantity&#x60;, &#x60;quantity&#x60; and &#x60;item_tiers&#x60; as applicable. The value depends on the [type of currency](currencies#handling_currency_units).

          */
       
      amount?:number;
       
         /**
          * @description The decimal representation of the total amount for the item, in major units of the currency. Always returned when [multi-decimal pricing](https://apidocs.chargebee.com/docs/api/currencies#handling_currency_units) is enabled.

          */
       
      amount_in_decimal?:string;
       
         /**
          * @description The quantity of the item price that is available for free. Only the quantity more than this will be charged for the subscription. This is the same as [item_price.free_quantity](item_prices#item_price_free_quantity).

          */
       
      free_quantity?:number;
       
         /**
          * @description The &#x60;free_quantity_in_decimal&#x60; as set for the item price. Returned for quantity-based item prices when [multi-decimal pricing](https://apidocs.chargebee.com/docs/api/currencies#handling_currency_units) is enabled.

          */
       
      free_quantity_in_decimal?:string;
       
         /**
          * @description For the plan-item price:  
the value determines the number of billing cycles the subscription runs before canceling automatically. If not provided, then [the value set](./item_prices?prod_cat_ver&#x3D;2#item_price_attributes) for the plan-item price is used.  

For addon-item prices:  
If [addon billing cycles](https://www.chargebee.com/docs/2.0/addons-billingcycle.html) are enabled then this is the number of subscription billing cycles for which the addon is included. If not provided, then [the value set under attached addons](./attached_items?prod_cat_ver&#x3D;2#attached_item_attributes) is used. Further, if that value is not provided, then [the value set for the addon-item price](./item_prices?prod_cat_ver&#x3D;2#item_price_attributes) is used.

          */
       
      billing_cycles?:number;
       
         /**
          * @description The service period of the item in days from the day of charge.

          */
       
      service_period_days?:number;
       
         /**
          * @description This field represents the number of quantities recorded against this subscription item in the current term

          */
       
      metered_quantity?:string;
    }
    export interface ItemsToUpdate {  
         /**
          * @description The unique identifier of the item price.

          */
       
      item_price_id:string;
       
         /**
          * @description The type of item. There must be one and only one item of type &#x60;plan&#x60; in this list. \* addon - Addon \* charge - Charge \* plan - Plan

          */
       
      item_type:'plan' | 'addon' | 'charge';
       
         /**
          * @description The quantity of the item purchased

          */
       
      quantity?:number;
       
         /**
          * @description The decimal representation of the quantity of the item purchased. Can be provided for quantity-based item prices and only when [multi-decimal pricing](https://apidocs.chargebee.com/docs/api#handling_currency_units) is enabled.

          */
       
      quantity_in_decimal?:string;
       
         /**
          * @description The price/per unit price of the item. When not provided, [the value set](/docs/api/item_prices?prod_cat_ver&#x3D;2#item_price_attributes) for the item price is used. This is only applicable when the &#x60;pricing_model&#x60; of the item price is &#x60;flat_fee&#x60; or &#x60;per_unit&#x60;. Also, it is only allowed when [price overriding](https://www.chargebee.com/docs/price-override.html) is enabled for the site. The value depends on the [type of currency](currencies#handling_currency_units).

          */
       
      unit_price?:number;
       
         /**
          * @description The decimal representation of the price or per-unit price of the plan. The value is in major units of the currency. Always returned when [multi-decimal pricing](https://apidocs.chargebee.com/docs/api#handling_currency_units) is enabled.

          */
       
      unit_price_in_decimal?:string;
       
         /**
          * @description The total amount for the item as determined from &#x60;unit_price&#x60;, &#x60;free_quantity&#x60;, &#x60;quantity&#x60; and &#x60;item_tiers&#x60; as applicable. The value depends on the [type of currency](currencies#handling_currency_units).

          */
       
      amount?:number;
       
         /**
          * @description The decimal representation of the total amount for the item, in major units of the currency. Always returned when [multi-decimal pricing](https://apidocs.chargebee.com/docs/api#handling_currency_units) is enabled.

          */
       
      amount_in_decimal?:string;
       
         /**
          * @description The quantity of the item price that is available for free. Only the quantity more than this will be charged for the subscription. This is the same as [item_price.free_quantity](item_prices#item_price_free_quantity)..

          */
       
      free_quantity?:number;
       
         /**
          * @description The &#x60;free_quantity_in_decimal&#x60; as set for the item price. Returned for quantity-based item prices when [multi-decimal pricing](https://apidocs.chargebee.com/docs/api#handling_currency_units) is enabled.

          */
       
      free_quantity_in_decimal?:string;
       
         /**
          * @description For the plan-item price:  
the value determines the number of billing cycles the subscription runs before canceling automatically. If not provided, then [the value set](./item_prices?prod_cat_ver&#x3D;2#item_price_attributes) for the plan-item price is used.  

For addon-item prices:  
If [addon billing cycles](https://www.chargebee.com/docs/2.0/addons-billingcycle.html) are enabled then this is the number of subscription billing cycles for which the addon is included. If not provided, then [the value set under attached addons](./attached_items?prod_cat_ver&#x3D;2#attached_item_attributes) is used. Further, if that value is not provided, then [the value set for the addon-item price](./item_prices?prod_cat_ver&#x3D;2#item_price_attributes) is used.

          */
       
      billing_cycles?:number;
       
         /**
          * @description The service period of the item in days from the day of charge.

          */
       
      service_period_days?:number;
       
         /**
          * @description This field represents the number of quantities recorded against this subscription item in the current term

          */
       
      metered_quantity?:string;
    }
    export interface CouponsToAdd {  
         /**
          * @description Unique ID of the coupon to be added.

          */
       
      coupon_id:string;
       
         /**
          * @description The date till when the coupon can be applied. Applicable for &#x60;limited_period&#x60; [coupons](./coupons?prod_cat_ver&#x3D;2) only.

          */
       
      apply_till?:number;
    }
    export interface DiscountsToAdd {  
         /**
          * @description An immutable unique id for the discount. It is always auto-generated.

          */
       
      id:string;
       
         /**
          * @description The name of the discount as it should appear on customer-facing pages and documents such as [invoices](/docs/api/invoices?prod_cat_ver&#x3D;2) and [hosted pages](/docs/api/hosted_pages?prod_cat_ver&#x3D;2). This is auto-generated based on the &#x60;type&#x60;, &#x60;amount&#x60;, and &#x60;currency_code&#x60; of the discount. For example, it can be &#x60;10% off&#x60; or &#x60;10$ off&#x60;.

          */
       
      invoice_name?:string;
       
         /**
          * @description The type of discount. Possible value are: \* fixed_amount - The specified amount will be given as discount. \* percentage - The specified percentage will be given as discount.

          */
       
      type:'fixed_amount' | 'percentage';
       
         /**
          * @description The percentage of the original amount that should be deducted from it. Only applicable when &#x60;discount.type&#x60; is percentage.

          */
       
      percentage?:number;
       
         /**
          * @description The value of the discount. [The format of this value](https://apidocs.chargebee.com/docs/api?prod_cat_ver&#x3D;2#currencies) depends on the kind of currency. This is only applicable when &#x60;discount.type&#x60; is &#x60;fixed_amount&#x60;.

          */
       
      amount?:number;
       
         /**
          * @description Specifies the time duration for which this discount is attached to the subscription. \* one_time - The discount stays attached to the subscription till it is applied on an invoice **once** . It is removed after that from the subscription. \* forever - The discount is attached to the subscription and applied on the invoices till it is [explicitly removed](/docs/api/subscriptions?prod_cat_ver&#x3D;2#update_subscription_for_items_discounts_operation_type). \* limited_period - The discount is attached to the subscription and applied on the invoices for a limited duration. This duration starts from the point it is applied to an invoice for the first time and expires after a period specified by &#x60;period&#x60; and &#x60;period_unit&#x60;.

          */
       
      duration_type:'one_time' | 'forever' | 'limited_period';
       
         /**
          * @description The duration of time for which the discount is attached to the subscription, in &#x60;period_units&#x60;. Applicable only when &#x60;duration_type&#x60; is &#x60;limited_period&#x60;.

          */
       
      period?:number;
       
         /**
          * @description The unit of time for &#x60;period&#x60;. Applicable only when &#x60;duration_type&#x60; is &#x60;limited_period&#x60;. \* week - A period of 7 days. \* year - A period of 1 calendar year. \* day - A period of 24 hours. \* month - A period of 1 calendar month.

          */
       
      period_unit?:'day' | 'week' | 'month' | 'year';
       
         /**
          * @description The discount is included in MRR calculations for your site. This attribute is only applicable when &#x60;duration_type&#x60; is &#x60;one_time&#x60; and when the [feature is enabled](https://www.chargebee.com/docs/reporting.html#dashboards_flexible-mrr-calculation) in Chargebee. Also, If the [site-level setting](https://www.chargebee.com/docs/reporting.html#chart_flexible-mrr-calculation) is to exclude one-time discounts from MRR calculations, this value is always returned &#x60;false&#x60;.

          */
       
      included_in_mrr:boolean;
       
         /**
          * @description The amount on the invoice to which the discount is applied. \* invoice_amount - The discount is applied to the invoice &#x60;sub_total&#x60;. \* specific_item_price - The discount is applied to the &#x60;invoice.line_item.amount&#x60; that corresponds to the item price specified by &#x60;item_price_id&#x60;.

          */
       
      apply_on:'invoice_amount' | 'specific_item_price';
       
         /**
          * @description The [id of the item price](/docs/api/subscriptions?prod_cat_ver&#x3D;2#subscription_subscription_items_item_price_id) in the subscription to which the discount is to be applied. Relevant only when &#x60;apply_on&#x60; &#x3D; &#x60;specific_item_price&#x60;.

          */
       
      item_price_id?:string;
       
         /**
          * @description Timestamp indicating when this discount is created.

          */
       
      created_at:number;
    }
    export interface ItemTier {  
         /**
          * @description The id of the item price to which this tier belongs.

          */
       
      item_price_id:string;
       
         /**
          * @description The lowest value in the quantity tier.

          */
       
      starting_unit:number;
       
         /**
          * @description The highest value in the quantity tier.

          */
       
      ending_unit?:number;
       
         /**
          * @description The per-unit price for the tier when the &#x60;pricing_model&#x60; is &#x60;tiered&#x60; or &#x60;volume&#x60;. The total cost for the item price when the &#x60;pricing_model&#x60; is &#x60;stairstep&#x60;. The value is in the minor unit of the currency.

          */
       
      price:number;
       
         /**
          * @description The decimal representation of the the lowest value of quantity in this tier. This is zero for the lowest tier. For all other tiers, it is the same as &#x60;ending_unit_in_decimal&#x60; of the next lower tier. Returned only when the pricing_model is &#x60;tiered&#x60;, &#x60;volume&#x60; or &#x60;stairstep&#x60; and [multi-decimal pricing](https://apidocs.chargebee.com/docs/api/currencies#handling_currency_units) is enabled.

          */
       
      starting_unit_in_decimal?:string;
       
         /**
          * @description The decimal representation of the highest value of quantity in this tier. This attribute is not applicable for the highest tier. For all other tiers, it must be equal to the &#x60;starting_unit_in_decimal&#x60; of the next higher tier. Returned only when the pricing_model is &#x60;tiered&#x60;, &#x60;volume&#x60; or &#x60;stairstep&#x60; and [multi-decimal pricing](https://apidocs.chargebee.com/docs/api/currencies#handling_currency_units) is enabled.

          */
       
      ending_unit_in_decimal?:string;
       
         /**
          * @description The decimal representation of the per-unit price for the tier when the &#x60;pricing_model&#x60; is &#x60;tiered&#x60; or &#x60;volume&#x60;. When the &#x60;pricing_model&#x60; is &#x60;stairstep&#x60;, it is the decimal representation of the total price for the item. The value is in major units of the currency. Returned when the plan is quantity-based and [multi-decimal pricing](https://apidocs.chargebee.com/docs/api/currencies#handling_currency_units) is enabled.

          */
       
      price_in_decimal?:string;
       
         /**
          * @description Not used.

          */
       
      index:number;
    }
  }
}