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
         /**
          * @description The amount to be charged. The unit depends on the [type of currency](/docs/api?prod_cat_ver&#x3D;1#md_disabled).

          */
       
      amount?:number;
       
         /**
          * @description The decimal representation of the amount for the one-time charge. The value is in [major units of the currency](/docs/api#md_enabled). Applicable only when multi-decimal pricing is enabled.

          */
       
      amount_in_decimal?:string;
       
         /**
          * @description Description for this charge

          */
       
      description?:string;
       
         /**
          * @description Specifies the service period of the charge in days. When the quote is converted, the [invoice.line_item.date_from](/docs/api/invoices#invoice_line_items) is set to current date/time and &#x60;invoice.line_item.date_to&#x60; is set to &#x60;service_period_in_days&#x60; ahead of &#x60;date_from&#x60;.

          */
       
      service_period_in_days?:number;
       
         /**
          * @description Indicates the type of sale carried out. This is applicable only if you use [Chargebee&#x27;s AvaTax for Communications](https://www.chargebee.com/docs/avatax-for-communication.html) integration. \* wholesale - Transaction is a sale to another company that will resell your product or service to another consumer \* retail - Transaction is a sale to an end user \* consumed - Transaction is for an item that is consumed directly \* vendor_use - Transaction is for an item that is subject to vendor use tax

          */
       
      avalara_sale_type?:'consumed' | 'wholesale' | 'vendor_use' | 'retail';
       
         /**
          * @description Indicates the type of product to be taxed. Values for this field can be taken from Avalara. This is applicable only if you use [Chargebee&#x27;s AvaTax for Communications](https://www.chargebee.com/docs/avatax-for-communication.html) integration.

          */
       
      avalara_transaction_type?:number;
       
         /**
          * @description Indicates the type of service for the product to be taxed. Values for this field can be taken from Avalara. This is applicable only if you use [Chargebee&#x27;s AvaTax for Communications](https://www.chargebee.com/docs/avatax-for-communication.html) integration.

          */
       
      avalara_service_type?:number;
    }
    export interface ItemPrice {  
         /**
          * @description A unique ID for your system to identify the item price.

          */
       
      item_price_id?:string;
       
         /**
          * @description Item price quantity

          */
       
      quantity?:number;
       
         /**
          * @description The decimal representation of the quantity of the item purchased. Can be provided for quantity-based item prices and only when [multi-decimal pricing](https://apidocs.chargebee.com/docs/api#handling_currency_units) is enabled.

          */
       
      quantity_in_decimal?:string;
       
         /**
          * @description The price or per-unit-price of the item price. By default, it is the [value set](/docs/api/item_prices#item_price_price) for the &#x60;item_price&#x60;. This is only applicable when the &#x60;pricing_model&#x60; of the &#x60;item_price&#x60; is &#x60;flat_fee&#x60; or &#x60;per_unit&#x60;. The value depends on the [type of currency](/docs/api/#handling_currency_units).

          */
       
      unit_price?:number;
       
         /**
          * @description The decimal representation of the price or per-unit price of the plan. The value is in major units of the currency. Always returned when [multi-decimal pricing](https://apidocs.chargebee.com/docs/api#handling_currency_units) is enabled.

          */
       
      unit_price_in_decimal?:string;
       
         /**
          * @description Defines service period of the item in days from the day of charge.

          */
       
      service_period_days?:number;
    }
    export interface ItemTier {  
         /**
          * @description The id of the item price to which this tier belongs.

          */
       
      item_price_id?:string;
       
         /**
          * @description The lowest value in the quantity tier.

          */
       
      starting_unit?:number;
       
         /**
          * @description The highest value in the quantity tier.

          */
       
      ending_unit?:number;
       
         /**
          * @description The per-unit price for the tier when the &#x60;pricing_model&#x60; is &#x60;tiered&#x60; or &#x60;volume&#x60;. The total cost for the item price when the &#x60;pricing_model&#x60; is &#x60;stairstep&#x60;. The value is in the minor unit of the currency.

          */
       
      price?:number;
       
         /**
          * @description The decimal representation of the the lowest value of quantity in this tier. This is zero for the lowest tier. For all other tiers, it is the same as &#x60;ending_unit_in_decimal&#x60; of the next lower tier. Returned only when the pricing_model is &#x60;tiered&#x60;, &#x60;volume&#x60; or &#x60;stairstep&#x60; and [multi-decimal pricing](https://apidocs.chargebee.com/docs/api#handling_currency_units) is enabled.

          */
       
      starting_unit_in_decimal?:string;
       
         /**
          * @description The decimal representation of the highest value of quantity in this tier. This attribute is not applicable for the highest tier. For all other tiers, it must be equal to the &#x60;starting_unit_in_decimal&#x60; of the next higher tier. Returned only when the pricing_model is &#x60;tiered&#x60;, &#x60;volume&#x60; or &#x60;stairstep&#x60; and [multi-decimal pricing](https://apidocs.chargebee.com/docs/api#handling_currency_units) is enabled.

          */
       
      ending_unit_in_decimal?:string;
       
         /**
          * @description The decimal representation of the per-unit price for the tier when the &#x60;pricing_model&#x60; is &#x60;tiered&#x60; or &#x60;volume&#x60;. When the &#x60;pricing_model&#x60; is &#x60;stairstep&#x60;, it is the decimal representation of the total price for the item. The value is in major units of the currency. Returned when the plan is quantity-based and [multi-decimal pricing](https://apidocs.chargebee.com/docs/api#handling_currency_units) is enabled.

          */
       
      price_in_decimal?:string;
       
         /**
          * @description The index number of the subscription to which the item price is added. Provide a unique number between &#x60;0&#x60; and &#x60;4&#x60; (inclusive) for each subscription that is to be created.

          */
       
      index?:number;
    }
    export interface Coupon {  
         /**
          * @description Used to uniquely identify the coupon

          */
       
      coupon_id?:string;
    }
    export interface Discount {  
         /**
          * @description An immutable unique id for the discount. It is always auto-generated.

          */
       
      id?:string;
       
         /**
          * @description The name of the discount as it should appear on customer-facing pages and documents such as [invoices](/docs/api/invoices?prod_cat_ver&#x3D;2) and [hosted pages](/docs/api/hosted_pages?prod_cat_ver&#x3D;2). This is auto-generated based on the &#x60;type&#x60;, &#x60;amount&#x60;, and &#x60;currency_code&#x60; of the discount. For example, it can be &#x60;10% off&#x60; or &#x60;10$ off&#x60;.

          */
       
      invoice_name?:string;
       
         /**
          * @description The type of discount. Possible value are: \* percentage - The specified percentage will be given as discount. \* fixed_amount - The specified amount will be given as discount.

          */
       
      type?:'fixed_amount' | 'percentage';
       
         /**
          * @description The percentage of the original amount that should be deducted from it. Only applicable when &#x60;discount.type&#x60; is percentage.

          */
       
      percentage?:number;
       
         /**
          * @description The value of the discount. [The format of this value](https://apidocs.chargebee.com/docs/api?prod_cat_ver&#x3D;2#currencies) depends on the kind of currency. This is only applicable when &#x60;discount.type&#x60; is &#x60;fixed_amount&#x60;.

          */
       
      amount?:number;
       
         /**
          * @description The currency code ([ISO 4217 format](https://www.chargebee.com/docs/supported-currencies.html)) of the discount. This is only applicable when &#x60;discount.type&#x60; is &#x60;fixed_amount&#x60;.

          */
       
      currency_code?:string;
       
         /**
          * @description The amount on the invoice to which the discount is applied. \* invoice_amount - The discount is applied to the invoice &#x60;sub_total&#x60;. \* specific_item_price - The discount is applied to the &#x60;invoice.line_item.amount&#x60; that corresponds to the item price specified by &#x60;item_price_id&#x60;.

          */
       
      apply_on?:'specific_item_price' | 'invoice_amount';
       
         /**
          * @description The [id of the item price](/docs/api/subscriptions?prod_cat_ver&#x3D;2#subscription_subscription_items_item_price_id) in the subscription to which the discount is to be applied. Relevant only when &#x60;apply_on&#x60; &#x3D; &#x60;specific_item_price&#x60;.

          */
       
      item_price_id?:string;
       
         /**
          * @description Timestamp indicating when this discount is created.

          */
       
      created_at?:number;
       
         /**
          * @description Used to uniquely identify the coupon in your website/application and to integrate with Chargebee.  
**Note:**


When the coupon ID contains a special character; for example: &#x60;#&#x60;, the API returns an error.
Make sure that you [encode](https://www.urlencoder.org/) the coupon ID in the path parameter before making an API call.

          */
       
      coupon_id?:string;
       
         /**
          * @description The index number of the subscription to which the item price is added. Provide a unique number between &#x60;0&#x60; and &#x60;4&#x60; (inclusive) for each subscription that is to be created.

          */
       
      index?:number;
    }
  }
}