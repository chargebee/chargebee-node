///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface Discount {
    
    /**
      * @description An immutable unique id for the discount. It is always auto-generated.

      */
    
    id:string;
    
    /**
      * @description The name of the discount as it should appear on customer-facing pages and documents such as [invoices](/docs/api/invoices?prod_cat_ver&#x3D;2) and [hosted pages](/docs/api/hosted_pages?prod_cat_ver&#x3D;2). This is auto-generated based on the &#x60;type&#x60;, &#x60;amount&#x60;, and &#x60;currency_code&#x60; of the discount. For example, it can be &#x60;10% off&#x60; or &#x60;10$ off&#x60;.

      */
    
    invoice_name?:string;
    
    /**
      * @description The type of discount. Possible value are: \* percentage - The specified percentage will be given as discount. \* fixed_amount - The specified amount will be given as discount.

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
      * @description The currency code ([ISO 4217 format](https://www.chargebee.com/docs/supported-currencies.html)) of the discount. This is only applicable when &#x60;discount.type&#x60; is &#x60;fixed_amount&#x60;.

      */
    
    currency_code?:string;
    
    /**
      * @description Specifies the time duration for which this discount is attached to the subscription. \* forever - The discount is attached to the subscription and applied on the invoices till it is [explicitly removed](/docs/api/subscriptions?prod_cat_ver&#x3D;2#update_subscription_for_items_discounts_operation_type). \* limited_period - The discount is attached to the subscription and applied on the invoices for a limited duration. This duration starts from the point it is applied to an invoice for the first time and expires after a period specified by &#x60;period&#x60; and &#x60;period_unit&#x60;. \* one_time - The discount stays attached to the subscription till it is applied on an invoice **once**. It is removed after that from the subscription.

      */
    
    duration_type:DurationType;
    
    /**
      * @description The duration of time for which the discount is attached to the subscription, in &#x60;period_units&#x60;. Applicable only when &#x60;duration_type&#x60; is &#x60;limited_period&#x60;.

      */
    
    period?:number;
    
    /**
      * @description The unit of time for &#x60;period&#x60;. Applicable only when &#x60;duration_type&#x60; is &#x60;limited_period&#x60;. \* year - A period of 1 calendar year. \* month - A period of 1 calendar month. \* week - A period of 7 days. \* day - A period of 24 hours.

      */
    
    period_unit?:PeriodUnit;
    
    /**
      * @description The discount is included in MRR calculations for your site. This attribute is only applicable when &#x60;duration_type&#x60; is &#x60;one_time&#x60; and when the [feature is enabled](https://www.chargebee.com/docs/reporting.html#dashboards_flexible-mrr-calculation) in Chargebee. Also, If the [site-level setting](https://www.chargebee.com/docs/reporting.html#chart_flexible-mrr-calculation) is to exclude one-time discounts from MRR calculations, this value is always returned &#x60;false&#x60;.

      */
    
    included_in_mrr:boolean;
    
    /**
      * @description The amount on the invoice to which the discount is applied. \* invoice_amount - The discount is applied to the invoice &#x60;sub_total&#x60;. \* specific_item_price - The discount is applied to the &#x60;invoice.line_item.amount&#x60; that corresponds to the item price specified by &#x60;item_price_id&#x60;.

      */
    
    apply_on:ApplyOn;
    
    /**
      * @description The [id of the item price](/docs/api/subscriptions?prod_cat_ver&#x3D;2#subscription_subscription_items_item_price_id) in the subscription to which the discount is to be applied. Relevant only when &#x60;apply_on&#x60; &#x3D; &#x60;specific_item_price&#x60;.

      */
    
    item_price_id?:string;
    
    /**
      * @description Timestamp indicating when this discount is created.

      */
    
    created_at:number;
    
    /**
      * @description Specifies till when the limited period discount is applicable. This attribute will be sent in the response only for &#x60;limited_period&#x60; duration type discount.

      */
    
    apply_till?:number;
    
    /**
      * @description Specifies the number of times the discount has been applied.

      */
    
    applied_count?:number;
    
    /**
      * @description Used to uniquely identify the coupon in your website/application and to integrate with Chargebee.  
**Note:**


When the coupon ID contains a special character; for example: &#x60;#&#x60;, the API returns an error.
Make sure that you [encode](https://www.urlencoder.org/) the coupon ID in the path parameter before making an API call.

      */
    
    coupon_id:string;
    
    /**
      * @description The index number of the subscription to which the item price is added. Provide a unique number between &#x60;0&#x60; and &#x60;4&#x60; (inclusive) for each subscription that is to be created.

      */
    
    index:number;
  }
}