///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface DifferentialPrice {
    
    /**
      * @description A unique and immutable ID for the differential price. It is auto-generated when the differential price is created.

      */
    
    id:string;
    
    /**
      * @description The ID of the item price (&#x60;addon&#x60; or &#x60;charge&#x60;) whose price should change according to the plan-item it is applied to.

      */
    
    item_price_id:string;
    
    /**
      * @description The ID of the plan-item, in relation to which, the differential pricing for the addon or charge is defined. For example, this would be the id of the *Standard* or *Enterprise* plans-items mentioned in the [examples above](./differential_prices?prod_cat_ver&#x3D;2).

      */
    
    parent_item_id:string;
    
    /**
      * @description The differential price. If the pricing model of the &#x60;item_price_id&#x60; is &#x60;tiered&#x60;, &#x60;volume&#x60;, or &#x60;stairstep&#x60;, pass &#x60;tiers&#x60; instead of this.

      */
    
    price?:number;
    
    /**
      * @description The price of the item when the pricing_model is &#x60;flat_fee&#x60;. When the pricing model is &#x60;per_unit&#x60;, it is the price per unit quantity of the item. Not applicable for the other pricing models. The value is in decimal and in major units of the currency. Also, this is only applicable when [multi-decimal pricing](https://apidocs.chargebee.com/docs/api#handling_currency_units) is enabled.

      */
    
    price_in_decimal?:string;
    
    /**
      * @description The item family state. \* active - New items can be created with the item family. \* deleted - No items allowed for the item family.

      */
    
    status?:'deleted' | 'active';
    
    /**
      * @description Version number of this resource. The &#x60;resource_version&#x60; is updated with a new timestamp in milliseconds for every change made to the resource. This attribute will be present only if the resource has been updated after 2016-09-28.

      */
    
    resource_version?:number;
    
    /**
      * @description Timestamp when this differential price was last updated.

      */
    
    updated_at?:number;
    
    /**
      * @description Timestamp at which this differential price was created.

      */
    
    created_at:number;
    
    /**
      * @description Timestamp at which this differential price was last modified.

      */
    
    modified_at:number;
    
    /**
      * @description The currency code (ISO 4217 format) of the plan

      */
    
    currency_code:string;
    
    /**
      * @description List of quantity-based pricing tiers for the differential price. Applicable only for &#x60;tiered&#x60;, &#x60;volume&#x60;, and &#x60;stairstep&#x60; &#x60;pricing_model&#x60; s. The tiers are exactly the same as those set for the item price. Only the &#x60;price&#x60; attribute for the various tiers can be overridden for the differential price.

      */
    
    tiers?:DifferentialPrice.Tier[];
    
    /**
      * @description When &#x60;item_price_id&#x60; is a charge-item, you can specify the plan period for which the price applies. Although an array, currently you can specify only one period. In other words, only index &#x60;0&#x60; is allowed. Create another differential price to specify another period. Is permitted only when &#x60;item_price_id&#x60; is a charge-item.

      */
    
    parent_periods?:DifferentialPrice.ParentPeriod[];
  }
  export namespace DifferentialPrice {
    export class DifferentialPriceResource {  
      /**
        * @description Delete a differential price using a &#x60;differential_price_id&#x60; and &#x60;item_price_id&#x60;.

        */
      
      delete(differential_price_id:string, input:DeleteInputParam):ChargebeeRequest<DeleteResponse>;
       
      /**
        * @description Create a differential price for addon item price, addon item price with tiered pricing, or charge item price.

        */
      
      create(item_price_id:string, input:CreateInputParam):ChargebeeRequest<CreateResponse>;
       
      /**
        * @description Returns a list of differential prices satisfying **all** the conditions specified in the filter parameters below. The list is sorted by the date of creation in descending order (latest first).

        */
      
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
       
      /**
        * @description Retrieve a differential price using a &#x60;differential_price_id&#x60; and &#x60;item_price_id&#x60;.

        */
      
      retrieve(differential_price_id:string, input:RetrieveInputParam):ChargebeeRequest<RetrieveResponse>;
       
      /**
        * @description Update a differential price using a &#x60;differential_price_id&#x60; and &#x60;item_price_id&#x60;.

        */
      
      update(differential_price_id:string, input:UpdateInputParam):ChargebeeRequest<UpdateResponse>;
    }
    export interface DeleteResponse {  
       differential_price:DifferentialPrice;
    }
    export interface DeleteInputParam {
       
      /**
        * @description The id of the item price (&#x60;addon&#x60; or &#x60;charge&#x60;) whose price should change according to the plan-item it is applied to.

        */
       
      item_price_id:string;
    }
    export interface CreateResponse {  
       differential_price:DifferentialPrice;
    }
    export interface CreateInputParam {
       
      /**
        * @description The id of the plan-item, in relation to which, the differential pricing for the addon or charge is defined. For example, this would be the id of the *Standard* or *Enterprise* plans-items mentioned in the [examples above](./differential_prices?prod_cat_ver&#x3D;2).

        */
       
      parent_item_id:string;
       
      /**
        * @description The differential price. If the pricing model of the &#x60;item_price_id&#x60; is &#x60;tiered&#x60;, &#x60;volume&#x60;, or &#x60;stairstep&#x60;, pass &#x60;tiers&#x60; instead of this.

        */
       
      price?:number;
       
      /**
        * @description The price of the item when the pricing_model is &#x60;flat_fee&#x60;. When the pricing model is &#x60;per_unit&#x60;, it is the price per unit quantity of the item. Not applicable for the other pricing models. The value is in decimal and in major units of the currency. Also, this is only applicable when [multi-decimal pricing](https://apidocs.chargebee.com/docs/api#handling_currency_units) is enabled.

        */
       
      price_in_decimal?:string;
       
      /**
        * @description Parameters for parent_periods

        */
       
      parent_periods?:{period?:any[],period_unit:'week' | 'month' | 'year' | 'day'}[];
       
      /**
        * @description Parameters for tiers

        */
       
      tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
    }
    export interface ListResponse {  
      /**
        * @description Returns a list of differential prices satisfying **all** the conditions specified in the filter parameters below. The list is sorted by the date of creation in descending order (latest first).

        */
       
       list:{differential_price:DifferentialPrice}[];
       
      /**
        * @description Returns a list of differential prices satisfying **all** the conditions specified in the filter parameters below. The list is sorted by the date of creation in descending order (latest first).

        */
       
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
        * @description The id of the item price (&#x60;addon&#x60; or &#x60;charge&#x60;) whose price should change according to the plan-item it is applied to.

        */
        
      item_price_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Item Id of Addon / Charge item price for which differential pricing is applied to

        */
        
      item_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description A unique and immutable id for the differential price. It is auto-generated when the differential price is created.

        */
        
      id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description The id of the plan-item, in relation to which, the differential pricing for the addon or charge is defined. For example, this would be the id of the *Standard* or *Enterprise* plans-items mentioned in the [examples above](./differential_prices?prod_cat_ver&#x3D;2).

        */
        
      parent_item_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
    }
    export interface RetrieveResponse {  
       differential_price:DifferentialPrice;
    }
    export interface RetrieveInputParam {
       
      /**
        * @description Retrieve a differential price using a &#x60;differential_price_id&#x60; and &#x60;item_price_id&#x60;.

        */
        
      item_price_id:string;
    }
    export interface UpdateResponse {  
       differential_price:DifferentialPrice;
    }
    export interface UpdateInputParam {
       
      /**
        * @description The id of the item price (&#x60;addon&#x60; or &#x60;charge&#x60;) whose price should change according to the plan-item it is applied to.

        */
       
      item_price_id:string;
       
      /**
        * @description The differential price. If the pricing model of the &#x60;item_price_id&#x60; is &#x60;tiered&#x60;, &#x60;volume&#x60;, or &#x60;stairstep&#x60;, pass &#x60;tiers&#x60; instead of this.

        */
       
      price?:number;
       
      /**
        * @description The price of the item when the pricing_model is &#x60;flat_fee&#x60;. When the pricing model is &#x60;per_unit&#x60;, it is the price per unit quantity of the item. Not applicable for the other pricing models. The value is in decimal and in major units of the currency. Also, this is only applicable when [multi-decimal pricing](https://apidocs.chargebee.com/docs/api#handling_currency_units) is enabled.

        */
       
      price_in_decimal?:string;
       
      /**
        * @description Parameters for parent_periods

        */
       
      parent_periods?:{period?:any[],period_unit:'week' | 'month' | 'year' | 'day'}[];
       
      /**
        * @description Parameters for tiers

        */
       
      tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
    }
    export interface Tier {  
      starting_unit?:number;
       
      ending_unit?:number;
       
      price?:number;
       
      starting_unit_in_decimal?:string;
       
      ending_unit_in_decimal?:string;
       
      price_in_decimal?:string;
    }
    export interface ParentPeriod {  
      period_unit?:'week' | 'month' | 'year' | 'day';
       
      period?:any[];
    }
  }
}