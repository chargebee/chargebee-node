///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface Purchase {
    
    /**
      * @description The unique identifier of the purchase resource. This is always autogenerated.

      */
    
    id?:string;
    
    /**
      * @description The unique identifier of the [customer](https://apidocs.chargebee.com/docs/api/customers) that made this purchase.

      */
    
    customer_id:string;
    
    /**
      * @description The time at which this purchase was created.

      */
    
    created_at?:number;
    
    /**
      * @description The time at which the purchase was modified.

      */
    
    modified_at?:number;
    
    /**
      * @description The unique identifiers of the [subscriptions](https://apidocs.chargebee.com/docs/api/subscriptions) that are created as part of this purchase. These IDs remain even when the associated subscriptions have been deleted.

      */
    
    subscription_ids?:string[];
    
    /**
      * @description The unique identifier of the [invoice(s)](invoices) created immediately as part of this purchase.

      */
    
    invoice_ids?:string[];
  }
  export namespace Purchase {
    export class PurchaseResource {  
      /**
        * @description Creates a &#x60;purchase&#x60; resource. A purchase can contain one or more of the following:

* subscriptions (a [subscription](subscriptions) resource consists of item prices such that at least one of the item prices belongs to an [item](items) of &#x60;type&#x60; &#x60;plan&#x60;.)
* group of one-time charges (aka [charge item prices](item_prices#types))

When you call this API, the invoices for the subscription(s) and one-time charge(s) are created immediately and not left [unbilled](subscriptions?prod_cat_ver&#x3D;2#create_subscription_for_items_invoice_immediately).  
**Note**

Providing &#x60;shipping_addresses[]&#x60; is required when the [Orders feature](https://www.chargebee.com/docs/2.0/orders.html#configuration_step-1-configure-site-wide-settings) has been enabled.

### Specifying &#x60;purchase_item&#x60; groups {#groups}


When creating a purchase, you must specify the *group* or &#x60;index&#x60; to which each item price belongs. You can do this by setting the &#x60;purchase_items[index]&#x60; for each item price. Item prices with the same &#x60;purchase_items[index]&#x60; belong to the same group.


The grouping of item prices allows you to specify the &#x60;discounts[]&#x60; applicable for each group and indicate which item prices should be added to any subscriptions you want to create. Groups can be one of two types:

* Subscription groups
* One-time charge groups

The following subsections describe the types of groups in detail.  
**Note**

You can specify up to 10 groups,

* with a recommended subscription group of 5. To increase this limit to a maximum of 8, contact eap@chargebee.com.
* with a maximum of 10 one-time charge groups by default.

The total limit for group items for a single purchase is 60.

#### Subscription groups {#subscription}

To create a subscription, specify a *subscription group* . A subscription [group](#groups) is a group of item prices that contains exactly one item price of &#x60;type&#x60; &#x60;plan&#x60;. To create multiple subscriptions, provide multiple subscription groups.  
**Note**

A subscription group can have up to 20 non-plan item prices. To increase this limit to a maximum of 60, contact eap@chargebee.com.  

#### Custom Fields {#custom-fields}

Purchase API supports custom fields of Subscriptions, use the following format to specify custom fields in Purchase API: **&#x60;subscription_info[custom_field]&#x60;**.

#### One-time charge groups {#one-time}

A one-time charge [group](#groups) is a group of charge item prices (i.e. item prices belonging to items of &#x60;type&#x60; &#x60;charge&#x60;). Charge item prices can be added to subscription groups as well. The charges within and across each one-time group must be unique.  
**Note**

* A one-time charge group can have up to 20 item prices. To increase this limit to a maximum of 60, contact eap@chargebee.com.
* A charge item price can only be added to a single one-time charge group. However, it can be part of multiple [subscription groups](#subscription).

### Applying discounts {#discounts}

Discounts, both [manual discounts](discounts) and &lt;coupons&gt;, can be applied to groups by specifying the &#x60;discounts[]&#x60; array. The following table describes the method of application based on whether &#x60;discounts[index][i]&#x60; is provided:

|                      |                                                                                                                                                                **&#x60;discounts[index][i]&#x60; is provided**                                                                                                                                                                 |                                                                                     **&#x60;discounts[index][i]&#x60; is not provided**                                                                                      |
|----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Coupons**          | * The coupon is applied exclusively to the invoice for group &#x60;i&#x60;. * The coupon is applied exclusively to the invoice created immediately upon invoking this API. * If group &#x60;i&#x60; is a [subscription group](#subscription), then the coupon is applied to invoices for subscription renewals based on coupon attributes such as &#x60;duration_type&#x60; and &#x60;max_redemptions&#x60;. | * The coupon is applied to all the invoices immediately generated upon invoking this API. * The coupon is not applied to subsequent invoices, such as those generated upon subscription renewal.                   |
| **Manual discounts** | * The manual discount is applied exclusively to the invoice for group &#x60;i&#x60;. * The manual discount is applied exclusively to the invoice created immediately upon invoking this API. * The manual discount is not applied to subsequent invoices, such as those generated upon subscription renewal.                                                                   | * The manual discount is applied to all the invoices immediately generated upon invoking this API. * The manual discount is not applied to subsequent invoices, such as those generated upon subscription renewal. |


        */
      
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
       
      /**
        * @description Returns an estimate for creating a &#x60;purchase&#x60; resource. The operation works exactly like [Create a purchase](purchases#create_a_purchase), except that only an [estimate](estimates) resource is returned without an actual &#x60;purchase&#x60; resource being created.

        */
      
      estimate(input:EstimateInputParam):ChargebeeRequest<EstimateResponse>;
    }
    export interface CreateResponse {  
       purchase:Purchase;
    }
    export interface CreateInputParam {
       
      /**
        * @description The unique identifier of the [customer](https://apidocs.chargebee.com/docs/api/customers) that made this purchase.

        */
       
      customer_id:string;
       
      /**
        * @description Payment source attached to this purchase. If present, the customer&#x27;s payment sources won&#x27;t be used to collect any payment for this purchase.

        */
       
      payment_source_id?:string;
       
      /**
        * @description Parameters for invoice_info

        */
       
      invoice_info?:{notes?:string,po_number?:string};
       
      /**
        * @description Parameters for purchase_items

        */
       
      purchase_items:{index:number,item_price_id:string,quantity?:number,quantity_in_decimal?:string,unit_amount?:number,unit_amount_in_decimal?:string}[];
       
      /**
        * @description Parameters for item_tiers

        */
       
      item_tiers:{ending_unit?:number,ending_unit_in_decimal?:string,index:number,item_price_id?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
       
      /**
        * @description Parameters for shipping_addresses

        */
       
      shipping_addresses?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string}[];
       
      /**
        * @description Parameters for discounts

        */
       
      discounts?:{amount?:number,coupon_id?:string,included_in_mrr?:boolean,index?:number,percentage?:number}[];
       
      /**
        * @description Parameters for subscription_info

        */
       
      subscription_info:{billing_cycles?:number,contract_term_billing_cycle_on_renewal?:number,index:number,meta_data?:object,subscription_id?:string}[];
       
      /**
        * @description Creates a &#x60;purchase&#x60; resource. A purchase can contain one or more of the following:

* subscriptions (a [subscription](subscriptions) resource consists of item prices such that at least one of the item prices belongs to an [item](items) of &#x60;type&#x60; &#x60;plan&#x60;.)
* group of one-time charges (aka [charge item prices](item_prices#types))

When you call this API, the invoices for the subscription(s) and one-time charge(s) are created immediately and not left [unbilled](subscriptions?prod_cat_ver&#x3D;2#create_subscription_for_items_invoice_immediately).  
**Note**

Providing &#x60;shipping_addresses[]&#x60; is required when the [Orders feature](https://www.chargebee.com/docs/2.0/orders.html#configuration_step-1-configure-site-wide-settings) has been enabled.

### Specifying &#x60;purchase_item&#x60; groups {#groups}


When creating a purchase, you must specify the *group* or &#x60;index&#x60; to which each item price belongs. You can do this by setting the &#x60;purchase_items[index]&#x60; for each item price. Item prices with the same &#x60;purchase_items[index]&#x60; belong to the same group.


The grouping of item prices allows you to specify the &#x60;discounts[]&#x60; applicable for each group and indicate which item prices should be added to any subscriptions you want to create. Groups can be one of two types:

* Subscription groups
* One-time charge groups

The following subsections describe the types of groups in detail.  
**Note**

You can specify up to 10 groups,

* with a recommended subscription group of 5. To increase this limit to a maximum of 8, contact eap@chargebee.com.
* with a maximum of 10 one-time charge groups by default.

The total limit for group items for a single purchase is 60.

#### Subscription groups {#subscription}

To create a subscription, specify a *subscription group* . A subscription [group](#groups) is a group of item prices that contains exactly one item price of &#x60;type&#x60; &#x60;plan&#x60;. To create multiple subscriptions, provide multiple subscription groups.  
**Note**

A subscription group can have up to 20 non-plan item prices. To increase this limit to a maximum of 60, contact eap@chargebee.com.  

#### Custom Fields {#custom-fields}

Purchase API supports custom fields of Subscriptions, use the following format to specify custom fields in Purchase API: **&#x60;subscription_info[custom_field]&#x60;**.

#### One-time charge groups {#one-time}

A one-time charge [group](#groups) is a group of charge item prices (i.e. item prices belonging to items of &#x60;type&#x60; &#x60;charge&#x60;). Charge item prices can be added to subscription groups as well. The charges within and across each one-time group must be unique.  
**Note**

* A one-time charge group can have up to 20 item prices. To increase this limit to a maximum of 60, contact eap@chargebee.com.
* A charge item price can only be added to a single one-time charge group. However, it can be part of multiple [subscription groups](#subscription).

### Applying discounts {#discounts}

Discounts, both [manual discounts](discounts) and &lt;coupons&gt;, can be applied to groups by specifying the &#x60;discounts[]&#x60; array. The following table describes the method of application based on whether &#x60;discounts[index][i]&#x60; is provided:

|                      |                                                                                                                                                                **&#x60;discounts[index][i]&#x60; is provided**                                                                                                                                                                 |                                                                                     **&#x60;discounts[index][i]&#x60; is not provided**                                                                                      |
|----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Coupons**          | * The coupon is applied exclusively to the invoice for group &#x60;i&#x60;. * The coupon is applied exclusively to the invoice created immediately upon invoking this API. * If group &#x60;i&#x60; is a [subscription group](#subscription), then the coupon is applied to invoices for subscription renewals based on coupon attributes such as &#x60;duration_type&#x60; and &#x60;max_redemptions&#x60;. | * The coupon is applied to all the invoices immediately generated upon invoking this API. * The coupon is not applied to subsequent invoices, such as those generated upon subscription renewal.                   |
| **Manual discounts** | * The manual discount is applied exclusively to the invoice for group &#x60;i&#x60;. * The manual discount is applied exclusively to the invoice created immediately upon invoking this API. * The manual discount is not applied to subsequent invoices, such as those generated upon subscription renewal.                                                                   | * The manual discount is applied to all the invoices immediately generated upon invoking this API. * The manual discount is not applied to subsequent invoices, such as those generated upon subscription renewal. |


        */
       
      contract_terms:{action_at_term_end?:'cancel' | 'renew_once' | 'renew' | 'evergreen',cancellation_cutoff_period?:number,index:number}[];
      statement_descriptor?:{descriptor?:string};
      payment_schedule?:{amount?:number,scheme_id?:string};
    }
    export interface EstimateResponse {  
       estimate:Estimate;
    }
    export interface EstimateInputParam {
       
      /**
        * @description Indicates the Client profile id for the customer. This is applicable only if you use [Chargebee&#x27;s AvaTax for Communications](https://www.chargebee.com/docs/avatax-for-communication.html) integration.

        */
       
      client_profile_id?:string;
       
      /**
        * @description The unique identifier of the [customer](https://apidocs.chargebee.com/docs/api/customers) that made this purchase.

        */
       
      customer_id?:string;
       
      /**
        * @description Parameters for customer

        */
       
      customer?:{customer_type?:CustomerType,entity_code?:EntityCode,exempt_number?:string,exemption_details?:any[],registered_for_gst?:boolean,taxability?:Taxability,vat_number?:string,vat_number_prefix?:string};
       
      /**
        * @description Parameters for billing_address

        */
       
      billing_address?:{city?:string,country?:string,line1?:string,line2?:string,line3?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      /**
        * @description Parameters for purchase_items

        */
       
      purchase_items:{index:number,item_price_id:string,quantity?:number,quantity_in_decimal?:string,unit_amount?:number,unit_amount_in_decimal?:string}[];
       
      /**
        * @description Parameters for item_tiers

        */
       
      item_tiers:{ending_unit?:number,ending_unit_in_decimal?:string,index:number,item_price_id?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
       
      /**
        * @description Parameters for shipping_addresses

        */
       
      shipping_addresses?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string}[];
       
      /**
        * @description Parameters for discounts

        */
       
      discounts?:{amount?:number,coupon_id?:string,included_in_mrr?:boolean,index?:number,percentage?:number}[];
       
      /**
        * @description Parameters for subscription_info

        */
       
      subscription_info:{billing_cycles?:number,contract_term_billing_cycle_on_renewal?:number,index:number,subscription_id?:string}[];
       
      /**
        * @description Returns an estimate for creating a &#x60;purchase&#x60; resource. The operation works exactly like [Create a purchase](purchases#create_a_purchase), except that only an [estimate](estimates) resource is returned without an actual &#x60;purchase&#x60; resource being created.

        */
       
      contract_terms:{action_at_term_end?:'cancel' | 'renew_once' | 'renew' | 'evergreen',cancellation_cutoff_period?:number,index:number}[];
    }
    
  }
}