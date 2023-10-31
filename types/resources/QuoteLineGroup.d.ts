///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface QuoteLineGroup {
    
    /**
      * @description Version of the quote line group.

      */
    
    version?:number;
    
    /**
      * @description Uniquely identifies a quote line group.

      */
    
    id?:string;
    
    /**
      * @description Subtotal in cents.

      */
    
    sub_total:number;
    
    /**
      * @description Total in cents.

      */
    
    total?:number;
    
    /**
      * @description Credits (in cents) applied to this quote line group.

      */
    
    credits_applied?:number;
    
    /**
      * @description Existing outstanding payments (in cents) if any, applied to this quote line group.

      */
    
    amount_paid?:number;
    
    /**
      * @description Amount due in cents

      */
    
    amount_due?:number;
    
    /**
      * @description Describes the time in the subscription lifecycle when the charge is to occur. \* subscription_creation - Subscription Creation \* trial_start - Trial Start \* subscription_renewal - Subscription Renewal \* subscription_change - Subscription Change \* subscription_cancel - Subscription Cancel \* immediate - Immediate

      */
    
    charge_event?:'subscription_cancel' | 'immediate' | 'subscription_creation' | 'trial_start' | 'subscription_renewal' | 'subscription_change';
    
    /**
      * @description The serial number of the billing cycle of which the quote line group is a part.

      */
    
    billing_cycle_number?:number;
    
    /**
      * @description The list of items in this quote line group.

      */
    
    line_items?:QuoteLineGroup.LineItem[];
    
    /**
      * @description The list of discounts applied to this quote line group.

      */
    
    discounts?:QuoteLineGroup.Discount[];
    
    /**
      * @description The list of discount(s) applied for line items in this quote line group.

      */
    
    line_item_discounts?:QuoteLineGroup.LineItemDiscount[];
    
    /**
      * @description The list of taxes applied to this quote line group.

      */
    
    taxes?:QuoteLineGroup.Tax[];
    
    /**
      * @description The list of taxes applied on line items in this quote line group.

      */
    
    line_item_taxes?:QuoteLineGroup.LineItemTax[];
  }
  export namespace QuoteLineGroup {
    
    
    export interface LineItem {  
         /**
          * @description Uniquely identifies a line_item

          */
       
      id?:string;
       
         /**
          * @description A unique identifier for the subscription this line item belongs to.

          */
       
      subscription_id?:string;
       
         /**
          * @description Start date of this line item.

          */
       
      date_from?:number;
       
         /**
          * @description End date of this line item.

          */
       
      date_to?:number;
       
         /**
          * @description Unit amount of the line item.

          */
       
      unit_amount?:number;
       
         /**
          * @description [Quantity of the recurring item](/docs/api/invoices?prod_cat_ver&#x3D;2#invoice_line_items_quantity) which is represented by this line item. For &#x60;metered&#x60; line items, this value is updated from [usages](/docs/api/usages) once when the invoice is generated as &#x60;pending&#x60; and finally when the invoice is [closed](/docs/api/invoices#close_a_pending_invoice).

          */
       
      quantity?:number;
       
         /**
          * @description Total amount of this line item. Typically equals to unit amount x quantity

          */
       
      amount?:number;
       
         /**
          * @description The [pricing scheme](https://www.chargebee.com/docs/2.0/plans.html#pricing-models) for this item price. \* per_unit - A fixed price per unit quantity. \* stairstep - A quantity-based pricing scheme. The item is charged a fixed price based on the tier that the total quantity falls in. \* flat_fee - A fixed price that is not quantity-based. \* tiered - The per unit price is based on the tier that the total quantity falls in. \* volume - There are quantity tiers for which per unit prices are set. Quantities are purchased from successive tiers.

          */
       
      pricing_model?:'volume' | 'per_unit' | 'tiered' | 'flat_fee' | 'stairstep';
       
         /**
          * @description Specifies whether this line item is taxed or not

          */
       
      is_taxed?:boolean;
       
         /**
          * @description The tax amount charged for this item

          */
       
      tax_amount?:number;
       
         /**
          * @description Rate of tax used to calculate tax for this lineitem

          */
       
      tax_rate?:number;
       
         /**
          * @description The decimal representation of the unit amount of the &#x60;line_item&#x60;. The value is in major units of the currency. Returned when the &#x60;line_item&#x60; is quantity-based and [multi-decimal pricing](https://apidocs.chargebee.com/docs/api#handling_currency_units ) is enabled.

          */
       
      unit_amount_in_decimal?:string;
       
         /**
          * @description The decimal representation of the quantity of this line_item. Returned when the &#x60;line_item&#x60; is quantity-based and [multi-decimal pricing](https://apidocs.chargebee.com/docs/api#handling_currency_units ) is enabled.

          */
       
      quantity_in_decimal?:string;
       
         /**
          * @description The decimal representation of the amount for the &#x60;line_item&#x60;, in major units of the currency. Typically equals to &#x60;unit_amount_in_decimal&#x60; x &#x60;quantity_in_decimal&#x60;. Returned when [multi-decimal pricing](https://apidocs.chargebee.com/docs/api#handling_currency_units ) is enabled.

          */
       
      amount_in_decimal?:string;
       
         /**
          * @description Total discounts for this line

          */
       
      discount_amount?:number;
       
         /**
          * @description Line Item-level discounts for this line.

          */
       
      item_level_discount_amount?:number;
       
         /**
          * @description Invoice Reference Line Item ID

          */
       
      reference_line_item_id?:string;
       
         /**
          * @description Detailed description about this line item.

          */
       
      description?:string;
       
         /**
          * @description Detailed description about this item.

          */
       
      entity_description?:string;
       
         /**
          * @description Specifies the modelled entity this line item is based on. \* addon - Indicates that this lineitem is based on &#x27;Addon&#x27; entity. The &#x27;entity_id&#x27; attribute specifies the [addon](/docs/api/addons#addon_attributes) id \* plan_item_price - Indicates that this line item is based on plan Item Price \* addon_item_price - Indicates that this line item is based on addon Item Price \* charge_item_price - Indicates that this line item is based on charge Item Price \* adhoc - Indicates that this lineitem is not modelled. i.e created adhoc. So the &#x27;entity_id&#x27; attribute will be null in this case \* plan_setup - Indicates that this lineitem is based on &#x27;Plan Setup&#x27; charge. The &#x27;entity_id&#x27; attribute specifies the [plan](/docs/api/plans#plan_attributes) id \* plan - Indicates that this lineitem is based on &#x27;Plan&#x27; entity. The &#x27;entity_id&#x27; attribute specifies the [plan](/docs/api/plans#plan_attributes) id

          */
       
      entity_type?:'addon_item_price' | 'plan_item_price' | 'charge_item_price' | 'adhoc';
       
         /**
          * @description The reason due to which the line item price/amount is exempted from tax. \* reverse_charge - If the Customer is identified as B2B customer (when VAT Number is entered), applicable for EU only \* tax_not_configured - If tax is not enabled for the site \* high_value_physical_goods - If physical goods are sold from outside Australia to customers in Australia, and the price of all the physical good line items is greater than AUD 1000, then tax will not be applied \* product_exempt - If the Plan or Addon is marked as Tax exempt \* zero_rated - If the rate of tax is 0% and no Sales/ GST tax is collectable for that line item \* customer_exempt - If the Customer is marked as Tax exempt \* region_non_taxable - If the product sold is not taxable in this region, but it is taxable in other regions, hence this region is not part of the Taxable jurisdiction \* export - You are not registered for tax in the customer&#x27;s region. This is also the reason code when both &#x60;billing_address&#x60; and &#x60;shipping_address&#x60; have not been provided for the customer and subscription respectively

          */
       
      tax_exempt_reason?:'high_value_physical_goods' | 'tax_not_configured' | 'reverse_charge' | 'zero_rated' | 'customer_exempt' | 'region_non_taxable' | 'zero_value_item' | 'export' | 'product_exempt';
       
         /**
          * @description The identifier of the modelled entity this line item is based on. Will be null for &#x27;adhoc&#x27; entity type

          */
       
      entity_id?:string;
       
         /**
          * @description A unique identifier for the customer this line item belongs to

          */
       
      customer_id?:string;
    }
    export interface Discount {  
         /**
          * @description The amount deducted. The format of this value depends on the [kind of currency](/docs/api?prod_cat_ver&#x3D;2#currencies).

          */
       
      amount?:number;
       
         /**
          * @description Description for this deduction.

          */
       
      description?:string;
       
         /**
          * @description The unique id of the line item that this deduction is for. Is required when &#x60;discounts[entity_type]&#x60; is &#x60;item_level_coupon&#x60; or &#x60;document_level_coupon&#x60;.

          */
       
      line_item_id?:string;
       
         /**
          * @description The type of deduction and the amount to which it is applied. \* document_level_coupon - The deduction is due to a coupon applied to the invoice &#x60;sub_total&#x60;. The coupon id is passed as &#x60;entity_id&#x60;. \* prorated_credits - The deduction is due to a legacy adjustment credit applied to the invoice. The &#x60;entity_id&#x60; is &#x60;null&#x60; in this case. The legacy credits feature is superseded by [adjustment_credit_notes](/docs/api/invoices?prod_cat_ver&#x3D;2#invoice_adjustment_credit_notes). \* item_level_coupon - The deduction is due to a coupon applied to line item. The coupon &#x60;id&#x60; is passed as &#x60;entity_id&#x60;. \* item_level_discount - The deduction is due to a [discount](/docs/api/discounts?prod_cat_ver&#x3D;2) applied to a line item of the invoice. The discount &#x60;id&#x60; is available as the &#x60;entity_id&#x60;. \* promotional_credits - The deduction is due to a [promotional credit](/docs/api/promotional_credits?prod_cat_ver&#x3D;2) applied to the invoice. \* document_level_discount - The deduction is due to a [discount](/docs/api/discounts?prod_cat_ver&#x3D;2) applied to the invoice &#x60;sub_total&#x60;. The discount &#x60;id&#x60; is available as the &#x60;entity_id&#x60;.

          */
       
      entity_type?:'item_level_coupon' | 'promotional_credits' | 'item_level_discount' | 'prorated_credits' | 'document_level_discount' | 'document_level_coupon';
       
         /**
          * @description The type of discount that is applied to the line item. Relevant only when &#x60;discounts[entity_type]&#x60; is one of &#x60;item_level_discount&#x60; , &#x60;item_level_coupon&#x60;, &#x60;document_level_discount&#x60;, or &#x60;document_level_coupon&#x60; \* percentage - when percentage is applied as discount \* fixed_amount - when amount is applied as discount

          */
       
      discount_type?:'fixed_amount' | 'percentage';
       
         /**
          * @description When the deduction is due to a &#x60;coupon&#x60; or a [discount](discounts), then this is the &#x60;id&#x60; of the coupon or discount.

          */
       
      entity_id?:string;
       
         /**
          * @description The [coupon code](/docs/api/coupon_codes#coupon_code_code), if applicable, used to provide the discount. The [coupon.id](/docs/api/coupons#coupon_id) is available in &#x60;entity_id&#x60;.

          */
       
      coupon_set_code?:string;
    }
    export interface LineItemDiscount {  
         /**
          * @description The unique id of the line item that this deduction is for.

          */
       
      line_item_id?:string;
       
         /**
          * @description The type of deduction and the amount to which it is applied. \* item_level_coupon - The deduction is due to a coupon applied to a line item of the invoice. The coupon &#x60;id&#x60; is available as &#x60;entity_id&#x60;. \* prorated_credits - The deduction is due to a legacy adjustment credit applied to the invoice. The &#x60;entity_id&#x60; is &#x60;null&#x60; in this case. The legacy credits feature is superseded by [adjustment_credit_notes](/docs/api/invoices?prod_cat_ver&#x3D;2#invoice_adjustment_credit_notes). \* document_level_coupon - The deduction is due to a coupon applied to the invoice &#x60;sub_total&#x60;. The coupon &#x60;id&#x60; is available as &#x60;entity_id&#x60;. \* document_level_discount - The deduction is due to a [discount](/docs/api/discounts?prod_cat_ver&#x3D;2) applied to the invoice &#x60;sub_total&#x60;. The discount &#x60;id&#x60; is available as the &#x60;entity_id&#x60;. \* item_level_discount - The deduction is due to a [discount](/docs/api/discounts?prod_cat_ver&#x3D;2) applied to a line item of the invoice. The discount &#x60;id&#x60; is available as the &#x60;entity_id&#x60;. \* promotional_credits - The deduction is due to a [promotional credit](/docs/api/promotional_credits) applied to the invoice. The &#x60;entity_id&#x60; is &#x60;null&#x60; in this case.

          */
       
      discount_type?:'item_level_coupon' | 'promotional_credits' | 'item_level_discount' | 'prorated_credits' | 'document_level_discount' | 'document_level_coupon';
       
      coupon_id?:string;
       
         /**
          * @description When the deduction is due to a &#x60;coupon&#x60; or a [discount](discounts), then this is the &#x60;id&#x60; of the coupon or discount.

          */
       
      entity_id?:string;
       
         /**
          * @description The amount deducted. The format of this value depends on the [kind of currency](/docs/api#currencies).

          */
       
      discount_amount?:number;
    }
    export interface Tax {  
         /**
          * @description The name of the tax applied. E.g. GST.

          */
       
      name?:string;
       
         /**
          * @description The tax amount.

          */
       
      amount?:number;
       
         /**
          * @description Description of the tax item.

          */
       
      description?:string;
    }
    export interface LineItemTax {  
         /**
          * @description The unique reference id of the line item for which the tax is applicable

          */
       
      line_item_id?:string;
       
         /**
          * @description The name of the tax applied

          */
       
      tax_name?:string;
       
         /**
          * @description The rate of tax used to calculate tax amount

          */
       
      tax_rate?:number;
       
         /**
          * @description Indicates if tax is applied only on a portion of the line item amount.

          */
       
      is_partial_tax_applied?:boolean;
       
         /**
          * @description Indicates the non-compliance tax that should not be reported to the jurisdiction.

          */
       
      is_non_compliance_tax?:boolean;
       
         /**
          * @description Indicates the actual portion of the line item amount that is taxable.

          */
       
      taxable_amount?:number;
       
         /**
          * @description The tax amount

          */
       
      tax_amount?:number;
       
         /**
          * @description The type of tax jurisdiction \* unincorporated - Combined tax of state and county. \* federal - The tax jurisdiction is a federal \* state - The tax jurisdiction is a state \* county - The tax jurisdiction is a county \* country - The tax jurisdiction is a country \* city - The tax jurisdiction is a city \* other - Jurisdictions other than the ones listed above. \* special - Special tax jurisdiction.

          */
       
      tax_juris_type?:'special' | 'country' | 'unincorporated' | 'other' | 'city' | 'federal' | 'county' | 'state';
       
         /**
          * @description The name of the tax jurisdiction

          */
       
      tax_juris_name?:string;
       
         /**
          * @description The tax jurisdiction code

          */
       
      tax_juris_code?:string;
       
         /**
          * @description Total tax amount in the currency of the place of supply. This is applicable only for Invoice and Credit Notes API.

          */
       
      tax_amount_in_local_currency?:number;
       
         /**
          * @description The currency code (ISO 4217 format) of the place of supply in which VAT needs to be converted and displayed. This is applicable only for Invoice and Credit Notes API.

          */
       
      local_currency_code?:string;
    }
  }
}