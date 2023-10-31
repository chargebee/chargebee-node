///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface ItemPrice {
    [key : string] : any;
    /**
      * @description The identifier for the item price. It is unique and immutable.

      */
    
    id:string;
    
    /**
      * @description A unique display name for the item price in the Chargebee UI. If &#x60;external_name&#x60; is not provided, this is also used in customer-facing pages and documents such as [invoices](./invoices?prod_cat_ver&#x3D;2) and [hosted pages](hosted_pages?prod_cat_ver&#x3D;2).

      */
    
    name:string;
    
    /**
      * @description Id of the item_family

      */
    
    item_family_id?:string;
    
    /**
      * @description Identifier of the product

      */
    
    product_id?:string;
    
    /**
      * @description The id of the item that the item price belongs to.

      */
    
    item_id?:string;
    
    /**
      * @description Description of the item price.   
**Note:**   
If your input contains characters that are subjected to sanitization (like incomplete HTML tags), the sanitization process might increase the length of your input. If the sanitized input exceeds the limit, your request will be rejected.

      */
    
    description?:string;
    
    /**
      * @description The status of the item price. \* archived - The item price is no longer active and cannot be used in new subscriptions or added to existing ones. Existing subscriptions that already have this item price will continue to renew with the item price. \* active - The item price can be used in subscriptions. \* deleted - Indicates that the item price has been deleted. The &#x60;id&#x60; and &#x60;name&#x60; can be reused.

      */
    
    status?:'archived' | 'deleted' | 'active';
    
    /**
      * @description The name of the item price used in customer-facing pages and documents. These include [invoices](./invoices?prod_cat_ver&#x3D;2) and [hosted pages](hosted_pages?prod_cat_ver&#x3D;2). If not provided, then &#x60;name&#x60; is used

      */
    
    external_name?:string;
    
    /**
      * @description The [pricing scheme](https://www.chargebee.com/docs/2.0/plans.html#pricing-models) for this item price. If subscriptions, invoices or [differential prices](./differential_prices?prod_cat_ver&#x3D;2) exist for this item price, &#x60;pricing_model&#x60; cannot be changed.
\* tiered - The per unit price is based on the tier that the total quantity falls in.
\* per_unit - A fixed price per unit quantity.
\* flat_fee - A fixed price that is not quantity-based.
\* volume - There are quantity tiers for which per unit prices are set. Quantities are purchased from successive tiers.
\* stairstep - A quantity-based pricing scheme. The item is charged a fixed price based on the tier that the total quantity falls in.

      */
    
    pricing_model:PricingModel;
    
    /**
      * @description The cost of the item price when the pricing model is &#x60;flat_fee&#x60;. When the pricing model is &#x60;per_unit&#x60;, it is the price per unit quantity of the item. Not applicable for the other pricing models. The value is in the [minor unit of the currency](https://apidocs.chargebee.com/docs/api#handling_currency_units).

      */
    
    price?:number;
    
    /**
      * @description The price of the item when the pricing_model is &#x60;flat_fee&#x60;. When the pricing model is &#x60;per_unit&#x60;, it is the price per unit quantity of the item. Not applicable for the other pricing models. The value is in decimal and in major units of the currency. Also, this is only applicable when [multi-decimal pricing](https://apidocs.chargebee.com/docs/api#handling_currency_units) is enabled.

      */
    
    price_in_decimal?:string;
    
    /**
      * @description 

* When the item &#x60;type&#x60; is &#x60;plan&#x60;: The billing period of the plan in &#x60;period_unit&#x60;s. For example, create a 6 month plan by providing &#x60;period&#x60; as 6 and &#x60;period_unit&#x60; as month.
* When item &#x60;type&#x60; is &#x60;addon&#x60;: The period of the addon in &#x60;period_unit&#x60;s. For example, create an addon with a 2 month &#x60;period&#x60; by providing period as 2 and &#x60;period_unit&#x60; as &#x60;month&#x60;. The period of an addon is the duration for which its &#x60;price&#x60; applies. When attached to a plan, the addon is billed for the billing period of the plan. [Learn more.](https://www.chargebee.com/docs/2.0/addons-billingcycle.html)



If subscriptions or invoices exist for this item price, &#x60;period&#x60; cannot be changed. The &#x60;period&#x60; is mandatory when the item &#x60;type&#x60; is &#x60;plan&#x60; or &#x60;addon&#x60;

      */
    
    period?:number;
    
    /**
      * @description The currency code ([ISO 4217 format](https://www.chargebee.com/docs/2.0/supported-currencies.html)) for the item price. If subscriptions, invoices or [differential prices](./differential_prices?prod_cat_ver&#x3D;2) exist for this item price, &#x60;currency_code&#x60; cannot be changed.

      */
    
    currency_code:string;
    
    /**
      * @description The unit of time for &#x60;period&#x60;. If subscriptions or invoices exist for this item price, &#x60;period_unit&#x60; cannot be changed. The &#x60;period_unit&#x60; is mandatory when the item &#x60;type&#x60; is &#x60;plan&#x60; or &#x60;addon&#x60; \* month - A period of 1 calendar month. \* week - A period of 7 days. \* year - A period of 1 calendar year. \* day - A period of 24 hours.

      */
    
    period_unit?:'week' | 'month' | 'year' | 'day';
    
    /**
      * @description The trial period of the plan in &#x60;trial_period_unit&#x60;s. You can also set [trial periods for addons](https://www.chargebee.com/docs/2.0/addons-trial.html); contact [Support](https://chargebee.freshdesk.com/support/home) to enable that feature.

      */
    
    trial_period?:number;
    
    /**
      * @description The unit of time for &#x60;trial_period&#x60;. \* month - A period of 1 calendar month. \* day - A period of 24 hours.

      */
    
    trial_period_unit?:'month' | 'day';
    
    /**
      * @description Applicable only when [End-of-trial Action](https://www.chargebee.com/docs/trial_periods.html#how-to-define-the-end-of-trial-actions-for-subscriptions) has been enabled for the site. Specifies the operation to be carried out for the subscription once the trial ends. Whenever the &#x60;item.type&#x60; is &#x60;plan&#x60; and a trial period is defined for this item price, this attribute (parameter) is returned (required). This can be overridden at the [subscription-level](subscriptions?prod_cat_ver&#x3D;2#subscription_trial_end_action). \* cancel_subscription - The subscription cancels. \* activate_subscription - The subscription activates and charges are raised for non-metered items. \* site_default - The action [configured for the site](https://www.chargebee.com/docs/trial_periods.html#how-to-define-the-end-of-trial-actions-for-subscriptions) at the time when the trial ends, takes effect.

      */
    
    trial_end_action?:'activate_subscription' | 'cancel_subscription' | 'site_default';
    
    /**
      * @description Defines the shipping frequency. Example: to bill customer every 2 weeks, provide &quot;2&quot; here.

      */
    
    shipping_period?:number;
    
    /**
      * @description Defines the shipping frequency in association with shipping period. \* day - A period of 24 hours. \* week - A period of 7 days. \* year - A period of 1 calendar year. \* month - A period of 1 calendar month.

      */
    
    shipping_period_unit?:'week' | 'month' | 'year' | 'day';
    
    /**
      * @description The default number of billing cycles a subscription to the plan must run. Can be [overridden](./subscriptions?prod_cat_ver&#x3D;2) for a subscription.

Addons can also [have billing cycles](https://www.chargebee.com/docs/2.0/addons-billingcycle.html). However, you must contact [Support](https://chargebee.freshdesk.com/support/home) to enable that. Also, for addons, you can [override this](./attached_items?prod_cat_ver&#x3D;2) while attaching it to a plan. However, if you provide the value while [applying the addon to a subscription](./subscriptions?prod_cat_ver&#x3D;2#subscription_subscription_items_item_type), then that value takes still higher precedence.
If subscriptions, invoices or [differential prices](./differential_prices?prod_cat_ver&#x3D;2) exist for this item price, &#x60;billing_cycles&#x60; cannot be changed.

      */
    
    billing_cycles?:number;
    
    /**
      * @description Free quantity the subscriptions of this item_price will have. Only the quantity more than this will be charged for the subscription.

      */
    
    free_quantity:number;
    
    /**
      * @description The quantity of the item that is available free-of-charge, represented in decimal. When a subscription is created for this plan or when the plan of a subscription is changed to this one, only the quantity above this number is charged for. Applicable for quantity-based plans and only when [multi-decimal pricing](https://apidocs.chargebee.com/docs/api#handling_currency_units) is enabled.

      */
    
    free_quantity_in_decimal?:string;
    
    /**
      * @description The subscription channel this object originated from and is maintained in. \* app_store - The object data is synchronized with data from [in-app subscription(s)](https://apidocs.chargebee.com/docs/api/in_app_subscriptions) created in Apple App Store. Direct manipulation of this object via UI or API is disallowed. \* web - The object was created (and is maintained) for the web channel directly in Chargebee via API or UI. \* play_store - The object data is synchronized with data from [in-app subscription(s)](https://apidocs.chargebee.com/docs/api/in_app_subscriptions) created in Google Play Store. Direct manipulation of this object via UI or API is disallowed.  

In-App Subscriptions is currently in early access. Contact [eap@chargebee.com](mailto:eap@chargebee.com) for more information.

      */
    
    channel?:Channel;
    
    /**
      * @description Version number of this resource. The &#x60;resource_version&#x60; is updated with a new timestamp in milliseconds for every change made to the resource. This attribute will be present only if the resource has been updated after 2016-09-28.

      */
    
    resource_version?:number;
    
    /**
      * @description Timestamp indicating when this item price was last updated

      */
    
    updated_at?:number;
    
    /**
      * @description Timestamp indicating when this item price was created

      */
    
    created_at:number;
    
    /**
      * @description Timestamp indicating when this item price was archived.

      */
    
    archived_at?:number;
    
    /**
      * @description A customer-facing note added to all invoices associated with this API resource. This note becomes one among [all the notes](/docs/api/invoices#invoice_notes) displayed on the invoice PDF.

      */
    
    invoice_notes?:string;
    
    /**
      * @description Specifies whether taxes apply to this item price. This value is set and returned even if [Taxes](https://www.chargebee.com/docs/tax.html) have been disabled in Chargebee. However, the value is effective only while Taxes are enabled.

      */
    
    is_taxable?:boolean;
    
    /**
      * @description A collection of key-value pairs that provides extra information about the item price. [Learn more](advanced-features#metadata).

      */
    
    metadata?:object;
    
    /**
      * @description Type of item. \* addon - A recurring component that can be added to a subscription in addition to its plan. \* charge - A non-recurring component that can be added to a subscription in addition to its plan. An charge can also be applied to a customer [directly](./invoices?prod_cat_ver&#x3D;2#create_invoice_for_a_charge-item) without being applied to a subscription. \* plan - An essential component of a subscription. Every subscription has exactly one plan. It has a recurring charge and its period defines the billing period of the subscription.

      */
    
    item_type?:ItemType;
    
    /**
      * @description Whether the item price&#x27;s description should be shown on [invoice PDFs](/docs/api/invoices#retrieve_invoice_as_pdf). If this Boolean is changed, only invoices generated (or [regenerated](https://www.chargebee.com/docs/invoice-operations.html#actions-for-payment-due-not-paid-invoices_regenerate-invoice)) after the change are affected; past invoices are not.

      */
    
    show_description_in_invoices?:boolean;
    
    /**
      * @description Whether the item price&#x27;s description should be shown on [quote PDFs](/docs/api/quotes#retrieve_quote_as_pdf). If this Boolean is changed, only quotes created after the change are affected; past quotes are not.

      */
    
    show_description_in_quotes?:boolean;
    
    /**
      * @description List of quantity-based pricing tiers for the item price. Applicable only for &#x60;tiered&#x60;, &#x60;volume&#x60;, and &#x60;stairstep&#x60; &#x60; pricing_models&#x60;.

      */
    
    tiers?:ItemPrice.Tier[];
    
    /**
      * @description The tax details for the item price. Includes those details relevant for third-party integrations.

      */
    
    tax_detail?:ItemPrice.TaxDetail;
    
    /**
      * @description Accounting integration details. The values are typically dependent on the [accounting integration](https://www.chargebee.com/docs/finance-integration-index.html) used.

      */
    
    accounting_detail?:ItemPrice.AccountingDetail;
  }
  export namespace ItemPrice {
    export class ItemPriceResource {  
      /**
        * @description This API creates an item price (a price point) for an [item](./items?prod_cat_ver&#x3D;2).

        */
      
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
       
      /**
        * @description This API retrieves a specific item price using the id.

        */
      
      retrieve(item_price_id:string):ChargebeeRequest<RetrieveResponse>;
       
      /**
        * @description Updates an item price with the changes specified. Unspecified item price attributes are not modified.

        */
      
      update(item_price_id:string, input?:UpdateInputParam):ChargebeeRequest<UpdateResponse>;
       
      /**
        * @description Returns a list of item prices satisfying **all** the conditions specified in the filter parameters below. The list is sorted by the date of creation in descending order.

        */
      
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
       
      /**
        * @description Deletes an item price, marking its &#x60;status&#x60; as &#x60;deleted&#x60;. If it is part of a subscription or invoice, the item price &#x60;status&#x60; is marked &#x60;archived&#x60; instead. Once deleted, the &#x60;id&#x60; and &#x60;name&#x60; of the item price can be reused to create a new item price.

        */
      
      delete(item_price_id:string):ChargebeeRequest<DeleteResponse>;
       
      /**
        * @description Returns the set of all applicable [addon-items](items?prod_cat_ver&#x3D;2#addon-items) for a specific [plan-item price](item_prices?prod_cat_ver&#x3D;2#types). This set consists of all addon-items whose item prices can be applied to a subscription having the plan-item price in it. When determining this set, Chargebee considers the [item_applicability](items?prod_cat_ver&#x3D;2#item_item_applicability) and [applicable_items](items?prod_cat_ver&#x3D;2#item_applicable_items) defined for the parent item of the plan-item price.

        */
      
      find_applicable_items(item_price_id:string, input?:FindApplicableItemsInputParam):ChargebeeRequest<FindApplicableItemsResponse>;
       
      /**
        * @description Returns the set of all applicable [addon-item](item_prices?prod_cat_ver&#x3D;2#types) prices for a specific plan-item price. This set consists of all the addon-item prices that can be applied to a subscription having the plan-item price. When determining this set, Chargebee considers the following:

* the [item_applicability](items?prod_cat_ver&#x3D;2#item_item_applicability) and [applicable_items](items?prod_cat_ver&#x3D;2#item_applicable_items) defined for the parent item of the plan-item price
* the [compatibility](subscriptions?prod_cat_ver&#x3D;2#compatibility) of the addon-item prices to the plan-item price

**Note**

If an addon-item price has [differential pricing](differential_prices?prod_cat_ver&#x3D;2) defined against the parent item of the plan-item price, then the pricing information in the addon-item price object returned, reflects the differential pricing.

        */
      
      find_applicable_item_prices(item_price_id:string, input?:FindApplicableItemPricesInputParam):ChargebeeRequest<FindApplicableItemPricesResponse>;
    }
    export interface CreateResponse {  
       item_price:ItemPrice;
    }
    export interface CreateInputParam {
      [key : string] : any;  
      /**
        * @description The identifier for the item price. It is unique and immutable.

        */
       
      id:string;
       
      /**
        * @description A unique display name for the item price in the Chargebee UI. If &#x60;external_name&#x60; is not provided, this is also used in customer-facing pages and documents such as [invoices](./invoices?prod_cat_ver&#x3D;2) and [hosted pages](hosted_pages?prod_cat_ver&#x3D;2).

        */
       
      name:string;
       
      /**
        * @description Description of the item price.   
**Note:**   
If your input contains characters that are subjected to sanitization (like incomplete HTML tags), the sanitization process might increase the length of your input. If the sanitized input exceeds the limit, your request will be rejected.

        */
       
      description?:string;
       
      /**
        * @description The id of the item that the item price belongs to.

        */
       
      item_id:string;
       
      /**
        * @description A customer-facing note added to all invoices associated with this API resource. This note becomes one among [all the notes](/docs/api/invoices#invoice_notes) displayed on the invoice PDF.

        */
       
      invoice_notes?:string;
       
      /**
        * @description The name of the item price used in customer-facing pages and documents. These include [invoices](./invoices?prod_cat_ver&#x3D;2) and [hosted pages](hosted_pages?prod_cat_ver&#x3D;2). If not provided, then &#x60;name&#x60; is used.

        */
       
      external_name?:string;
       
      /**
        * @description The currency code ([ISO 4217 format](https://www.chargebee.com/docs/supported-currencies.html)) for the item price. Is required when multiple currencies have been enabled.

        */
       
      currency_code?:string;
       
      /**
        * @description Specifies whether taxes apply to this item price. This value is set and returned even if [Taxes](https://www.chargebee.com/docs/tax.html) have been disabled in Chargebee. However, the value is effective only while Taxes are enabled.

        */
       
      is_taxable?:boolean;
       
      /**
        * @description Free quantity the subscriptions of this item_price will have. Only the quantity more than this will be charged for the subscription.

        */
       
      free_quantity?:number;
       
      /**
        * @description The quantity of the item that is available free-of-charge, represented in decimal. When a subscription is created for this plan or when the plan of a subscription is changed to this one, only the quantity above this number is charged for. Applicable for quantity-based plans and only when [multi-decimal pricing](https://apidocs.chargebee.com/docs/api#handling_currency_units) is enabled.

        */
       
      free_quantity_in_decimal?:string;
       
      /**
        * @description A collection of key-value pairs that provides extra information about the item price.  
**Note:** There&#x27;s a character limit of 65,535.
[Learn more](advanced-features#metadata).

        */
       
      metadata?:object;
       
      /**
        * @description Whether the item price&#x27;s description should be shown on [invoice PDFs](/docs/api/invoices#retrieve_invoice_as_pdf). If this Boolean is changed, only invoices generated (or [regenerated](https://www.chargebee.com/docs/invoice-operations.html#actions-for-payment-due-not-paid-invoices_regenerate-invoice)) after the change are affected; past invoices are not.

        */
       
      show_description_in_invoices?:boolean;
       
      /**
        * @description Whether the item price&#x27;s description should be shown on [quote PDFs](/docs/api/quotes#retrieve_quote_as_pdf). If this Boolean is changed, only quotes created after the change are affected; past quotes are not.

        */
       
      show_description_in_quotes?:boolean;
       
      /**
        * @description The [pricing scheme](https://www.chargebee.com/docs/2.0/plans.html#pricing-models) for this item price. If subscriptions, invoices or [differential prices](./differential_prices?prod_cat_ver&#x3D;2) exist for this item price, &#x60;pricing_model&#x60; cannot be changed.
\* tiered - The per unit price is based on the tier that the total quantity falls in.
\* per_unit - A fixed price per unit quantity.
\* flat_fee - A fixed price that is not quantity-based.
\* volume - There are quantity tiers for which per unit prices are set. Quantities are purchased from successive tiers.
\* stairstep - A quantity-based pricing scheme. The item is charged a fixed price based on the tier that the total quantity falls in.

        */
       
      pricing_model?:PricingModel;
       
      /**
        * @description The cost of the item price when the pricing model is &#x60;flat_fee&#x60;. When the pricing model is &#x60;per_unit&#x60;, it is the price per unit quantity of the item. Not applicable for the other pricing models. The value is in the [minor unit of the currency](https://apidocs.chargebee.com/docs/api#handling_currency_units).

        */
       
      price?:number;
       
      /**
        * @description The price of the item when the pricing_model is &#x60;flat_fee&#x60;. When the pricing model is &#x60;per_unit&#x60;, it is the price per unit quantity of the item. Not applicable for the other pricing models. The value is in decimal and in major units of the currency. Also, this is only applicable when [multi-decimal pricing](https://apidocs.chargebee.com/docs/api#handling_currency_units) is enabled.

        */
       
      price_in_decimal?:string;
       
      /**
        * @description The unit of time for &#x60;period&#x60;. If subscriptions or invoices exist for this item price, &#x60;period_unit&#x60; cannot be changed. The &#x60;period_unit&#x60; is mandatory when the item &#x60;type&#x60; is &#x60;plan&#x60; or &#x60;addon&#x60;. \* month - A period of 1 calendar month. \* week - A period of 7 days. \* year - A period of 1 calendar year. \* day - A period of 24 hours.

        */
       
      period_unit?:'week' | 'month' | 'year' | 'day';
       
      /**
        * @description 

* When the item &#x60;type&#x60; is &#x60;plan&#x60;: The billing period of the plan in &#x60;period_unit&#x60;s. For example, create a 6 month plan by providing &#x60;period&#x60; as 6 and &#x60;period_unit&#x60; as month.
* When item &#x60;type&#x60; is &#x60;addon&#x60;: The period of the addon in &#x60;period_unit&#x60;s. For example, create an addon with a 2 month &#x60;period&#x60; by providing period as 2 and &#x60;period_unit&#x60; as &#x60;month&#x60;. The period of an addon is the duration for which its &#x60;price&#x60; applies. When attached to a plan, the addon is billed for the billing period of the plan. [Learn more.](https://www.chargebee.com/docs/2.0/addons-billingcycle.html)



If subscriptions or invoices exist for this item price, &#x60;period&#x60; cannot be changed. The &#x60;period&#x60; is mandatory when the item &#x60;type&#x60; is &#x60;plan&#x60; or &#x60;addon&#x60;.

        */
       
      period?:number;
       
      /**
        * @description The unit of time for &#x60;trial_period&#x60;. \* month - A period of 1 calendar month. \* day - A period of 24 hours.

        */
       
      trial_period_unit?:'month' | 'day';
       
      /**
        * @description The trial period of the plan in &#x60;trial_period_unit&#x60;s. You can also set [trial periods for addons](https://www.chargebee.com/docs/2.0/addons-trial.html); contact [Support](https://chargebee.freshdesk.com/support/home) to enable that feature.

        */
       
      trial_period?:number;
       
      /**
        * @description Defines the shipping frequency. Example: to bill customer every 2 weeks, provide &quot;2&quot; here.

        */
       
      shipping_period?:number;
       
      /**
        * @description Defines the shipping frequency in association with shipping period. \* day - A period of 24 hours. \* week - A period of 7 days. \* year - A period of 1 calendar year. \* month - A period of 1 calendar month.

        */
       
      shipping_period_unit?:'week' | 'month' | 'year' | 'day';
       
      /**
        * @description The default number of billing cycles a subscription to the plan must run. Can be [overridden](./subscriptions?prod_cat_ver&#x3D;2) for a subscription.

Addons can also [have billing cycles](https://www.chargebee.com/docs/2.0/addons-billingcycle.html). However, you must contact [Support](https://chargebee.freshdesk.com/support/home) to enable that. Also, for addons, you can [override this](./attached_items?prod_cat_ver&#x3D;2) while attaching it to a plan. However, if you provide the value while [applying the addon to a subscription](./subscriptions?prod_cat_ver&#x3D;2#subscription_subscription_items_item_type), then that value takes still higher precedence.
If subscriptions, invoices or [differential prices](./differential_prices?prod_cat_ver&#x3D;2) exist for this item price, &#x60;billing_cycles&#x60; cannot be changed.

        */
       
      billing_cycles?:number;
       
      /**
        * @description Applicable only when [End-of-trial Action](https://www.chargebee.com/docs/trial_periods.html#how-to-define-the-end-of-trial-actions-for-subscriptions) has been enabled for the site. Specifies the operation to be carried out for the subscription once the trial ends. Whenever the &#x60;item.type&#x60; is &#x60;plan&#x60; and a trial period is defined for this item price, this attribute (parameter) is returned (required). This can be overridden at the [subscription-level](subscriptions?prod_cat_ver&#x3D;2#subscription_trial_end_action). \* cancel_subscription - The subscription cancels. \* activate_subscription - The subscription activates and charges are raised for non-metered items. \* site_default - The action [configured for the site](https://www.chargebee.com/docs/trial_periods.html#how-to-define-the-end-of-trial-actions-for-subscriptions) at the time when the trial ends, takes effect.

        */
       
      trial_end_action?:'activate_subscription' | 'cancel_subscription' | 'site_default';
       
      /**
        * @description Parameters for tax_detail

        */
       
      tax_detail?:{avalara_sale_type?:AvalaraSaleType,avalara_service_type?:number,avalara_tax_code?:string,avalara_transaction_type?:number,hsn_code?:string,tax_profile_id?:string,taxjar_product_code?:string};
       
      /**
        * @description Parameters for accounting_detail

        */
       
      accounting_detail?:{accounting_category1?:string,accounting_category2?:string,accounting_category3?:string,accounting_category4?:string,accounting_code?:string,sku?:string};
       
      /**
        * @description Parameters for tiers

        */
       
      tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
    }
    export interface RetrieveResponse {  
       item_price:ItemPrice;
    }
    
    export interface UpdateResponse {  
       item_price:ItemPrice;
    }
    export interface UpdateInputParam {
      [key : string] : any;  
      /**
        * @description A unique display name for the item price in the Chargebee UI. If &#x60;external_name&#x60; is not provided, this is also used in customer-facing pages and documents such as [invoices](./invoices?prod_cat_ver&#x3D;2) and [hosted pages](hosted_pages?prod_cat_ver&#x3D;2).

        */
       
      name?:string;
       
      /**
        * @description Description of the item price.   
**Note:**   
If your input contains characters that are subjected to sanitization (like incomplete HTML tags), the sanitization process might increase the length of your input. If the sanitized input exceeds the limit, your request will be rejected.

        */
       
      description?:string;
       
      /**
        * @description The status of the item price. \* archived - The item price is no longer active and cannot be used in new subscriptions or added to existing ones. Existing subscriptions that already have this item price will continue to renew with the item price. \* active - The item price can be used in subscriptions. \* deleted - Indicates that the item price has been deleted. The &#x60;id&#x60; and &#x60;name&#x60; can be reused.

        */
       
      status?:'archived' | 'active';
       
      /**
        * @description The name of the item price used in customer-facing pages and documents. These include [invoices](./invoices?prod_cat_ver&#x3D;2) and [hosted pages](hosted_pages?prod_cat_ver&#x3D;2). If not provided, then &#x60;name&#x60; is used.

        */
       
      external_name?:string;
       
      /**
        * @description The currency code ([ISO 4217 format](https://www.chargebee.com/docs/2.0/supported-currencies.html)) for the item price. If subscriptions, invoices or [differential prices](./differential_prices?prod_cat_ver&#x3D;2) exist for this item price, &#x60;currency_code&#x60; cannot be changed.

        */
       
      currency_code?:string;
       
      /**
        * @description A customer-facing note added to all invoices associated with this API resource. This note becomes one among [all the notes](/docs/api/invoices#invoice_notes) displayed on the invoice PDF.

        */
       
      invoice_notes?:string;
       
      /**
        * @description Specifies whether taxes apply to this item price. This value is set and returned even if [Taxes](https://www.chargebee.com/docs/tax.html) have been disabled in Chargebee. However, the value is effective only while Taxes are enabled.

        */
       
      is_taxable?:boolean;
       
      /**
        * @description Free quantity the subscriptions of this item_price will have. Only the quantity more than this will be charged for the subscription.

        */
       
      free_quantity?:number;
       
      /**
        * @description The quantity of the item that is available free-of-charge, represented in decimal. When a subscription is created for this plan or when the plan of a subscription is changed to this one, only the quantity above this number is charged for. Applicable for quantity-based plans and only when [multi-decimal pricing](https://apidocs.chargebee.com/docs/api#handling_currency_units) is enabled.

        */
       
      free_quantity_in_decimal?:string;
       
      /**
        * @description A collection of key-value pairs that provides extra information about the item price.  
**Note:** There&#x27;s a character limit of 65,535.
[Learn more](advanced-features#metadata).

        */
       
      metadata?:object;
       
      /**
        * @description The [pricing scheme](https://www.chargebee.com/docs/2.0/plans.html#pricing-models) for this item price. If subscriptions, invoices or [differential prices](./differential_prices?prod_cat_ver&#x3D;2) exist for this item price, &#x60;pricing_model&#x60; cannot be changed.
\* tiered - The per unit price is based on the tier that the total quantity falls in.
\* per_unit - A fixed price per unit quantity.
\* flat_fee - A fixed price that is not quantity-based.
\* volume - There are quantity tiers for which per unit prices are set. Quantities are purchased from successive tiers.
\* stairstep - A quantity-based pricing scheme. The item is charged a fixed price based on the tier that the total quantity falls in.

        */
       
      pricing_model?:PricingModel;
       
      /**
        * @description The cost of the item price when the pricing model is &#x60;flat_fee&#x60;. When the pricing model is &#x60;per_unit&#x60;, it is the price per unit quantity of the item. Not applicable for the other pricing models. The value is in the [minor unit of the currency](https://apidocs.chargebee.com/docs/api#handling_currency_units).

        */
       
      price?:number;
       
      /**
        * @description The price of the item when the pricing_model is &#x60;flat_fee&#x60;. When the pricing model is &#x60;per_unit&#x60;, it is the price per unit quantity of the item. Not applicable for the other pricing models. The value is in decimal and in major units of the currency. Also, this is only applicable when [multi-decimal pricing](https://apidocs.chargebee.com/docs/api#handling_currency_units) is enabled.

        */
       
      price_in_decimal?:string;
       
      /**
        * @description The unit of time for &#x60;period&#x60;. If subscriptions or invoices exist for this item price, &#x60;period_unit&#x60; cannot be changed. The &#x60;period_unit&#x60; is mandatory when the item &#x60;type&#x60; is &#x60;plan&#x60; or &#x60;addon&#x60;. \* month - A period of 1 calendar month. \* week - A period of 7 days. \* year - A period of 1 calendar year. \* day - A period of 24 hours.

        */
       
      period_unit?:'week' | 'month' | 'year' | 'day';
       
      /**
        * @description 

* When the item &#x60;type&#x60; is &#x60;plan&#x60;: The billing period of the plan in &#x60;period_unit&#x60;s. For example, create a 6 month plan by providing &#x60;period&#x60; as 6 and &#x60;period_unit&#x60; as month.
* When item &#x60;type&#x60; is &#x60;addon&#x60;: The period of the addon in &#x60;period_unit&#x60;s. For example, create an addon with a 2 month &#x60;period&#x60; by providing period as 2 and &#x60;period_unit&#x60; as &#x60;month&#x60;. The period of an addon is the duration for which its &#x60;price&#x60; applies. When attached to a plan, the addon is billed for the billing period of the plan. [Learn more.](https://www.chargebee.com/docs/2.0/addons-billingcycle.html)



If subscriptions or invoices exist for this item price, &#x60;period&#x60; cannot be changed. The &#x60;period&#x60; is mandatory when the item &#x60;type&#x60; is &#x60;plan&#x60; or &#x60;addon&#x60;.

        */
       
      period?:number;
       
      /**
        * @description The unit of time for &#x60;trial_period&#x60;. \* month - A period of 1 calendar month. \* day - A period of 24 hours.

        */
       
      trial_period_unit?:'month' | 'day';
       
      /**
        * @description The trial period of the plan in &#x60;trial_period_unit&#x60;s. You can also set [trial periods for addons](https://www.chargebee.com/docs/2.0/addons-trial.html); contact [Support](https://chargebee.freshdesk.com/support/home) to enable that feature.

        */
       
      trial_period?:number;
       
      /**
        * @description Defines the shipping frequency. Example: to bill customer every 2 weeks, provide &quot;2&quot; here.

        */
       
      shipping_period?:number;
       
      /**
        * @description Defines the shipping frequency in association with shipping period. \* day - A period of 24 hours. \* week - A period of 7 days. \* year - A period of 1 calendar year. \* month - A period of 1 calendar month.

        */
       
      shipping_period_unit?:'week' | 'month' | 'year' | 'day';
       
      /**
        * @description The default number of billing cycles a subscription to the plan must run. Can be [overridden](./subscriptions?prod_cat_ver&#x3D;2) for a subscription.

Addons can also [have billing cycles](https://www.chargebee.com/docs/2.0/addons-billingcycle.html). However, you must contact [Support](https://chargebee.freshdesk.com/support/home) to enable that. Also, for addons, you can [override this](./attached_items?prod_cat_ver&#x3D;2) while attaching it to a plan. However, if you provide the value while [applying the addon to a subscription](./subscriptions?prod_cat_ver&#x3D;2#subscription_subscription_items_item_type), then that value takes still higher precedence.
If subscriptions, invoices or [differential prices](./differential_prices?prod_cat_ver&#x3D;2) exist for this item price, &#x60;billing_cycles&#x60; cannot be changed.

        */
       
      billing_cycles?:number;
       
      /**
        * @description Applicable only when [End-of-trial Action](https://www.chargebee.com/docs/trial_periods.html#how-to-define-the-end-of-trial-actions-for-subscriptions) has been enabled for the site. Specifies the operation to be carried out for the subscription once the trial ends. Whenever the &#x60;item.type&#x60; is &#x60;plan&#x60; and a trial period is defined for this item price, this attribute (parameter) is returned (required). This can be overridden at the [subscription-level](subscriptions?prod_cat_ver&#x3D;2#subscription_trial_end_action). \* cancel_subscription - The subscription cancels. \* activate_subscription - The subscription activates and charges are raised for non-metered items. \* site_default - The action [configured for the site](https://www.chargebee.com/docs/trial_periods.html#how-to-define-the-end-of-trial-actions-for-subscriptions) at the time when the trial ends, takes effect.

        */
       
      trial_end_action?:'activate_subscription' | 'cancel_subscription' | 'site_default';
       
      /**
        * @description Whether the item price&#x27;s description should be shown on [invoice PDFs](/docs/api/invoices#retrieve_invoice_as_pdf). If this Boolean is changed, only invoices generated (or [regenerated](https://www.chargebee.com/docs/invoice-operations.html#actions-for-payment-due-not-paid-invoices_regenerate-invoice)) after the change are affected; past invoices are not.

        */
       
      show_description_in_invoices?:boolean;
       
      /**
        * @description Whether the item price&#x27;s description should be shown on [quote PDFs](/docs/api/quotes#retrieve_quote_as_pdf). If this Boolean is changed, only quotes created after the change are affected; past quotes are not.

        */
       
      show_description_in_quotes?:boolean;
       
      /**
        * @description Parameters for tax_detail

        */
       
      tax_detail?:{avalara_sale_type?:AvalaraSaleType,avalara_service_type?:number,avalara_tax_code?:string,avalara_transaction_type?:number,hsn_code?:string,tax_profile_id?:string,taxjar_product_code?:string};
       
      /**
        * @description Parameters for accounting_detail

        */
       
      accounting_detail?:{accounting_category1?:string,accounting_category2?:string,accounting_category3?:string,accounting_category4?:string,accounting_code?:string,sku?:string};
       
      /**
        * @description Parameters for tiers

        */
       
      tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
    }
    export interface ListResponse {  
      /**
        * @description Returns a list of item prices satisfying **all** the conditions specified in the filter parameters below. The list is sorted by the date of creation in descending order.

        */
       
       list:{item_price:ItemPrice}[];
       
      /**
        * @description Returns a list of item prices satisfying **all** the conditions specified in the filter parameters below. The list is sorted by the date of creation in descending order.

        */
       
       next_offset?:string;
    }
    export interface ListInputParam {
      [key : string]: any;  
      /**
        * @description Returns a list of item prices satisfying **all** the conditions specified in the filter parameters below. The list is sorted by the date of creation in descending order.

        */
        
      limit?:number;
       
      /**
        * @description Returns a list of item prices satisfying **all** the conditions specified in the filter parameters below. The list is sorted by the date of creation in descending order.

        */
        
      offset?:string;
       
      /**
        * @description Returns a list of item prices satisfying **all** the conditions specified in the filter parameters below. The list is sorted by the date of creation in descending order.

        */
        
      id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Returns a list of item prices satisfying **all** the conditions specified in the filter parameters below. The list is sorted by the date of creation in descending order.

        */
        
      name?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Returns a list of item prices satisfying **all** the conditions specified in the filter parameters below. The list is sorted by the date of creation in descending order.

        */
        
      pricing_model?:{in?:string,is?:'volume' | 'per_unit' | 'tiered' | 'flat_fee' | 'stairstep',is_not?:'volume' | 'per_unit' | 'tiered' | 'flat_fee' | 'stairstep',not_in?:string};
       
      /**
        * @description Returns a list of item prices satisfying **all** the conditions specified in the filter parameters below. The list is sorted by the date of creation in descending order.

        */
        
      item_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Returns a list of item prices satisfying **all** the conditions specified in the filter parameters below. The list is sorted by the date of creation in descending order.

        */
        
      item_family_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Returns a list of item prices satisfying **all** the conditions specified in the filter parameters below. The list is sorted by the date of creation in descending order.

        */
        
      item_type?:{in?:string,is?:'charge' | 'addon' | 'plan',is_not?:'charge' | 'addon' | 'plan',not_in?:string};
       
      /**
        * @description Returns a list of item prices satisfying **all** the conditions specified in the filter parameters below. The list is sorted by the date of creation in descending order.

        */
        
      currency_code?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Returns a list of item prices satisfying **all** the conditions specified in the filter parameters below. The list is sorted by the date of creation in descending order.

        */
        
      trial_period?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
       
      /**
        * @description Returns a list of item prices satisfying **all** the conditions specified in the filter parameters below. The list is sorted by the date of creation in descending order.

        */
        
      trial_period_unit?:{in?:string,is?:'month' | 'day',is_not?:'month' | 'day',not_in?:string};
       
      /**
        * @description Returns a list of item prices satisfying **all** the conditions specified in the filter parameters below. The list is sorted by the date of creation in descending order.

        */
        
      status?:{in?:string,is?:'archived' | 'deleted' | 'active',is_not?:'archived' | 'deleted' | 'active',not_in?:string};
       
      /**
        * @description Returns a list of item prices satisfying **all** the conditions specified in the filter parameters below. The list is sorted by the date of creation in descending order.

        */
        
      updated_at?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description Returns a list of item prices satisfying **all** the conditions specified in the filter parameters below. The list is sorted by the date of creation in descending order.

        */
        
      period_unit?:{in?:string,is?:'week' | 'month' | 'year' | 'day',is_not?:'week' | 'month' | 'year' | 'day',not_in?:string};
       
      /**
        * @description Returns a list of item prices satisfying **all** the conditions specified in the filter parameters below. The list is sorted by the date of creation in descending order.

        */
        
      period?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
       
      /**
        * @description Returns a list of item prices satisfying **all** the conditions specified in the filter parameters below. The list is sorted by the date of creation in descending order.

        */
        
      channel?:{in?:string,is?:'app_store' | 'web' | 'play_store',is_not?:'app_store' | 'web' | 'play_store',not_in?:string};
       
      /**
        * @description Returns a list of item prices satisfying **all** the conditions specified in the filter parameters below. The list is sorted by the date of creation in descending order.

        */
        
      sort_by?:{asc?:'updated_at' | 'name' | 'id',desc?:'updated_at' | 'name' | 'id'};
    }
    export interface DeleteResponse {  
       item_price:ItemPrice;
    }
    
    export interface FindApplicableItemsResponse {  
      /**
        * @description Returns the set of all applicable [addon-items](items?prod_cat_ver&#x3D;2#addon-items) for a specific [plan-item price](item_prices?prod_cat_ver&#x3D;2#types). This set consists of all addon-items whose item prices can be applied to a subscription having the plan-item price in it. When determining this set, Chargebee considers the [item_applicability](items?prod_cat_ver&#x3D;2#item_item_applicability) and [applicable_items](items?prod_cat_ver&#x3D;2#item_applicable_items) defined for the parent item of the plan-item price.

        */
       
       list:{item:Item}[];
       
      /**
        * @description Returns the set of all applicable [addon-items](items?prod_cat_ver&#x3D;2#addon-items) for a specific [plan-item price](item_prices?prod_cat_ver&#x3D;2#types). This set consists of all addon-items whose item prices can be applied to a subscription having the plan-item price in it. When determining this set, Chargebee considers the [item_applicability](items?prod_cat_ver&#x3D;2#item_item_applicability) and [applicable_items](items?prod_cat_ver&#x3D;2#item_applicable_items) defined for the parent item of the plan-item price.

        */
       
       next_offset?:string;
    }
    export interface FindApplicableItemsInputParam {
      [key : string]: any;  
      /**
        * @description Returns the set of all applicable [addon-items](items?prod_cat_ver&#x3D;2#addon-items) for a specific [plan-item price](item_prices?prod_cat_ver&#x3D;2#types). This set consists of all addon-items whose item prices can be applied to a subscription having the plan-item price in it. When determining this set, Chargebee considers the [item_applicability](items?prod_cat_ver&#x3D;2#item_item_applicability) and [applicable_items](items?prod_cat_ver&#x3D;2#item_applicable_items) defined for the parent item of the plan-item price.

        */
        
      limit?:number;
       
      /**
        * @description Returns the set of all applicable [addon-items](items?prod_cat_ver&#x3D;2#addon-items) for a specific [plan-item price](item_prices?prod_cat_ver&#x3D;2#types). This set consists of all addon-items whose item prices can be applied to a subscription having the plan-item price in it. When determining this set, Chargebee considers the [item_applicability](items?prod_cat_ver&#x3D;2#item_item_applicability) and [applicable_items](items?prod_cat_ver&#x3D;2#item_applicable_items) defined for the parent item of the plan-item price.

        */
        
      offset?:string;
       
      /**
        * @description Returns the set of all applicable [addon-items](items?prod_cat_ver&#x3D;2#addon-items) for a specific [plan-item price](item_prices?prod_cat_ver&#x3D;2#types). This set consists of all addon-items whose item prices can be applied to a subscription having the plan-item price in it. When determining this set, Chargebee considers the [item_applicability](items?prod_cat_ver&#x3D;2#item_item_applicability) and [applicable_items](items?prod_cat_ver&#x3D;2#item_applicable_items) defined for the parent item of the plan-item price.

        */
        
      sort_by?:{asc?:'updated_at' | 'name' | 'id',desc?:'updated_at' | 'name' | 'id'};
    }
    export interface FindApplicableItemPricesResponse {  
      /**
        * @description Returns the set of all applicable [addon-item](item_prices?prod_cat_ver&#x3D;2#types) prices for a specific plan-item price. This set consists of all the addon-item prices that can be applied to a subscription having the plan-item price. When determining this set, Chargebee considers the following:

* the [item_applicability](items?prod_cat_ver&#x3D;2#item_item_applicability) and [applicable_items](items?prod_cat_ver&#x3D;2#item_applicable_items) defined for the parent item of the plan-item price
* the [compatibility](subscriptions?prod_cat_ver&#x3D;2#compatibility) of the addon-item prices to the plan-item price

**Note**

If an addon-item price has [differential pricing](differential_prices?prod_cat_ver&#x3D;2) defined against the parent item of the plan-item price, then the pricing information in the addon-item price object returned, reflects the differential pricing.

        */
       
       list:{item_price:ItemPrice}[];
       
      /**
        * @description Returns the set of all applicable [addon-item](item_prices?prod_cat_ver&#x3D;2#types) prices for a specific plan-item price. This set consists of all the addon-item prices that can be applied to a subscription having the plan-item price. When determining this set, Chargebee considers the following:

* the [item_applicability](items?prod_cat_ver&#x3D;2#item_item_applicability) and [applicable_items](items?prod_cat_ver&#x3D;2#item_applicable_items) defined for the parent item of the plan-item price
* the [compatibility](subscriptions?prod_cat_ver&#x3D;2#compatibility) of the addon-item prices to the plan-item price

**Note**

If an addon-item price has [differential pricing](differential_prices?prod_cat_ver&#x3D;2) defined against the parent item of the plan-item price, then the pricing information in the addon-item price object returned, reflects the differential pricing.

        */
       
       next_offset?:string;
    }
    export interface FindApplicableItemPricesInputParam {
      [key : string]: any;  
      /**
        * @description Returns the set of all applicable [addon-item](item_prices?prod_cat_ver&#x3D;2#types) prices for a specific plan-item price. This set consists of all the addon-item prices that can be applied to a subscription having the plan-item price. When determining this set, Chargebee considers the following:

* the [item_applicability](items?prod_cat_ver&#x3D;2#item_item_applicability) and [applicable_items](items?prod_cat_ver&#x3D;2#item_applicable_items) defined for the parent item of the plan-item price
* the [compatibility](subscriptions?prod_cat_ver&#x3D;2#compatibility) of the addon-item prices to the plan-item price

**Note**

If an addon-item price has [differential pricing](differential_prices?prod_cat_ver&#x3D;2) defined against the parent item of the plan-item price, then the pricing information in the addon-item price object returned, reflects the differential pricing.

        */
        
      limit?:number;
       
      /**
        * @description Returns the set of all applicable [addon-item](item_prices?prod_cat_ver&#x3D;2#types) prices for a specific plan-item price. This set consists of all the addon-item prices that can be applied to a subscription having the plan-item price. When determining this set, Chargebee considers the following:

* the [item_applicability](items?prod_cat_ver&#x3D;2#item_item_applicability) and [applicable_items](items?prod_cat_ver&#x3D;2#item_applicable_items) defined for the parent item of the plan-item price
* the [compatibility](subscriptions?prod_cat_ver&#x3D;2#compatibility) of the addon-item prices to the plan-item price

**Note**

If an addon-item price has [differential pricing](differential_prices?prod_cat_ver&#x3D;2) defined against the parent item of the plan-item price, then the pricing information in the addon-item price object returned, reflects the differential pricing.

        */
        
      offset?:string;
       
      /**
        * @description Returns the set of all applicable [addon-item](item_prices?prod_cat_ver&#x3D;2#types) prices for a specific plan-item price. This set consists of all the addon-item prices that can be applied to a subscription having the plan-item price. When determining this set, Chargebee considers the following:

* the [item_applicability](items?prod_cat_ver&#x3D;2#item_item_applicability) and [applicable_items](items?prod_cat_ver&#x3D;2#item_applicable_items) defined for the parent item of the plan-item price
* the [compatibility](subscriptions?prod_cat_ver&#x3D;2#compatibility) of the addon-item prices to the plan-item price

**Note**

If an addon-item price has [differential pricing](differential_prices?prod_cat_ver&#x3D;2) defined against the parent item of the plan-item price, then the pricing information in the addon-item price object returned, reflects the differential pricing.

        */
        
      item_id?:string;
       
      /**
        * @description Returns the set of all applicable [addon-item](item_prices?prod_cat_ver&#x3D;2#types) prices for a specific plan-item price. This set consists of all the addon-item prices that can be applied to a subscription having the plan-item price. When determining this set, Chargebee considers the following:

* the [item_applicability](items?prod_cat_ver&#x3D;2#item_item_applicability) and [applicable_items](items?prod_cat_ver&#x3D;2#item_applicable_items) defined for the parent item of the plan-item price
* the [compatibility](subscriptions?prod_cat_ver&#x3D;2#compatibility) of the addon-item prices to the plan-item price

**Note**

If an addon-item price has [differential pricing](differential_prices?prod_cat_ver&#x3D;2) defined against the parent item of the plan-item price, then the pricing information in the addon-item price object returned, reflects the differential pricing.

        */
        
      sort_by?:{asc?:'updated_at' | 'name' | 'id',desc?:'updated_at' | 'name' | 'id'};
    }
    export interface Tier {  
         /**
          * @description The lower limit of a range of units for the tier

          */
       
      starting_unit:number;
       
         /**
          * @description The upper limit of a range of units for the tier

          */
       
      ending_unit?:number;
       
         /**
          * @description The per-unit price for the tier when the &#x60;pricing_model&#x60; is &#x60;tiered&#x60; or &#x60;volume&#x60;; the total cost for the item price when the &#x60;pricing_model&#x60; is &#x60;stairstep&#x60;. The value is in the [minor unit of the currency](https://apidocs.chargebee.com/docs/api#handling_currency_units).

          */
       
      price:number;
       
      starting_unit_in_decimal?:string;
       
      ending_unit_in_decimal?:string;
       
      price_in_decimal?:string;
    }
    export interface TaxDetail {  
         /**
          * @description The tax profile of the item price.

          */
       
      tax_profile_id?:string;
       
         /**
          * @description Indicates the [Avalara sale type](https://developer.avalara.com/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/transaction-information/#lineitem) for the item price. Applicable only if you use the [AvaTax for Communications integration](https://www.chargebee.com/docs/2.0/avatax-for-communication.html). \* vendor_use - Transaction is for an item that is subject to vendor use tax \* consumed - Transaction is for an item that is consumed directly \* wholesale - Transaction is a sale to another company that will resell your product or service to another consumer \* retail - Transaction is a sale to an end user

          */
       
      avalara_sale_type?:AvalaraSaleType;
       
         /**
          * @description Indicates the [Avalara transaction type](https://developer.avalara.com/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/transaction-information/#lineitem) for the item price. Applicable only if you use the [AvaTax for Communications integration](https://www.chargebee.com/docs/2.0/avatax-for-communication.html).

          */
       
      avalara_transaction_type?:number;
       
         /**
          * @description Indicates the [Avalara service type](https://developer.avalara.com/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/transaction-information/#lineitem) for the item price. Applicable only if you use the [AvaTax for Communications integration](https://www.chargebee.com/docs/2.0/avatax-for-communication.html).

          */
       
      avalara_service_type?:number;
       
         /**
          * @description The [Avalara tax codes](https://taxcode.avatax.avalara.com) for the item price. Applicable only if you use [AvaTax for Sales integration](https://www.chargebee.com/docs/2.0/avatax-for-sales.html).

          */
       
      avalara_tax_code?:string;
       
         /**
          * @description The [HSN code](https://cbic-gst.gov.in/gst-goods-services-rates.html) to which the item is mapped for calculating the customer&#x27;s tax in India. Applicable only when both of the following conditions are true:

* **[India](https://www.chargebee.com/docs/indian-gst.html#configuring-indian-gst)** has been enabled as a **Tax Region**. (An error is returned when this condition is not true.)
* The [**AvaTax for Sales** integration](https://www.chargebee.com/docs/avalara.html) has been enabled in Chargebee.

          */
       
      hsn_code?:string;
       
         /**
          * @description The [TaxJar product code](https://developers.taxjar.com/api/reference/#get-list-tax-categories) for the item price. Applicable only if you use [TaxJar integration](https://www.chargebee.com/docs/2.0/taxjar.html).

          */
       
      taxjar_product_code?:string;
    }
    export interface AccountingDetail {  
         /**
          * @description This maps to the sku or product name in the accounting integration.

          */
       
      sku?:string;
       
         /**
          * @description The identifier of the chart of accounts under which the item price falls in the accounting system.

          */
       
      accounting_code?:string;
       
         /**
          * @description Used exclusively with the following [accounting integrations](https://www.chargebee.com/docs/2.0/finance-integration-index.html )

* [**Xero:**](https://www.chargebee.com/docs/2.0/xero.html )If you&#x27;ve categorized your products in Xero, provide the category name and option. Use the format: &#x60;&lt;category-name&gt;: &lt;option&gt;&#x60;. For example:&#x60;Location: Singapore.&#x60;
* [**QuickBooks:**](https://www.chargebee.com/docs/2.0/quickbooks.html )If you&#x27;ve categorized your product sales in QuickBooks according to Classes, provide the class name here. Use the following format: &#x60;&lt;parent class&gt;:&lt;sub-class-1&gt;:&lt;sub-class-2&gt;...&#x60;
* [**NetSuite:**](https://www.chargebee.com/docs/2.0/netsuite.html )If you&#x27;ve categorized your products in NetSuite under Classes, provide the class name here. Use the following format: &#x60;&lt;parent class&gt;: &lt;sub-class-1&gt;: &lt;sub-class2&gt;....&#x60; For example: &#x60;Services: Plan.&#x60;
* [**Intacct:**](https://www.chargebee.com/docs/2.0/intacct.html )If you&#x27;ve classified your products in Intacct under Locations, provide the name of the Location here.


          */
       
      accounting_category1?:string;
       
         /**
          * @description Used exclusively with the following [accounting integrations](https://www.chargebee.com/docs/2.0/finance-integration-index.html )

* [**Xero:**](https://www.chargebee.com/docs/2.0/xero.html )If you&#x27;ve categorized your products in Xero, then provide the second category name and option here. Use the format: &#x60;&lt;category-name&gt;: &lt;option&gt;....&#x60; For example, &#x60;Region: South&#x60;
* [**QuickBooks:**](https://www.chargebee.com/docs/2.0/quickbooks.html )If you&#x27;ve categorized your product sales in QuickBooks according to Location, provide the Location name here. Use the following format: &#x60;&lt;parent-location&gt;:&lt;sub-location-1&gt;:&lt;sub-location-2&gt;....&#x60; For example: &#x60;Location: North America: Canada&#x60;
* [**NetSuite:**](https://www.chargebee.com/docs/2.0/netsuite.html )If you&#x27;ve categorized your products in NetSuite under Locations, provide the location name here. Use the following format &#x60;&lt;parent-location&gt; : &lt;sub-location-1&gt;: &lt;sub-location-2&gt;....&#x60; For example: &#x60;NA:US:CA&#x60;
* [**Intacct:**](https://www.chargebee.com/docs/2.0/intacct.html )If you&#x27;ve classified your products in Intacct under Dimensions, provide the value of the Dimension here.


          */
       
      accounting_category2?:string;
       
         /**
          * @description Used exclusively with the following [accounting integrations](https://www.chargebee.com/docs/2.0/finance-integration-index.html )

* [**NetSuite:**](https://www.chargebee.com/docs/2.0/netsuite.html )If you&#x27;ve categorized your products in NetSuite under Departments, pass the department name here. Use the following format: &#x60;&lt;parent-department&gt; : &lt;sub-department-1&gt;: &lt;sub-department-2&gt;....&#x60; For example: &#x60;Production: Assembly.&#x60;
* [**Intacct:**](https://www.chargebee.com/docs/2.0/intacct.html )If you&#x27;ve classified your products in Intacct under multiple Dimensions, provide the value of the second Dimension here.

          */
       
      accounting_category3?:string;
       
         /**
          * @description Used exclusively with the following [accounting integrations](https://www.chargebee.com/docs/1.0/finance-integration-index.html )

* [**NetSuite:**](https://www.chargebee.com/docs/2.0/netsuite.html )Provide the &quot;Revenue Recognition Rule Id&quot; for the product from NetSuite.
* [**Intacct:**](https://www.chargebee.com/docs/2.0/intacct.html )If you have configured &quot;Revenue Recognition Templates&quot; for products in Intacct, provide the template ID for the product.

          */
       
      accounting_category4?:string;
    }
  }
}