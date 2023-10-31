///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface Item {
    [key : string] : any;
    /**
      * @description The identifier for the item. It is unique and immutable.

      */
    
    id:string;
    
    /**
      * @description A unique display name for the item. This is visible only in Chargebee and not to customers.

      */
    
    name:string;
    
    /**
      * @description A unique display name for the item.

      */
    
    external_name?:string;
    
    /**
      * @description Description of the item. This is visible only in Chargebee and not to customers.

      */
    
    description?:string;
    
    /**
      * @description The status of the item. \* archived - The item is no longer active and no new item prices can be created \* active - The item can be used to create new item prices. \* deleted - Indicates that the item has been [deleted](./items?prod_cat_ver&#x3D;2#delete_an_item). The &#x60;id&#x60; and &#x60;name&#x60; can be reused. Deleted items can be retrieved using [List items](./items?prod_cat_ver&#x3D;2#list_items).

      */
    
    status?:'archived' | 'deleted' | 'active';
    
    /**
      * @description The version number of this resource. For every change made to the resource, &#x60;resource_version&#x60; is updated with a new timestamp in milliseconds.

      */
    
    resource_version?:number;
    
    /**
      * @description Timestamp indicating when the item was last updated.

      */
    
    updated_at?:number;
    
    /**
      * @description The &#x60;id&#x60; of the [Item family](./item_families?prod_cat_ver&#x3D;2) that the item belongs to. Is mandatory when [Product Families](https://www.chargebee.com/docs/2.0/product-families.html) have been enabled.

      */
    
    item_family_id?:string;
    
    /**
      * @description The type of the item. \* plan - An essential component of a subscription. Every subscription has exactly one plan. It has a recurring charge and its period defines the billing period of the subscription. \* charge - A non-recurring component that can be added to a subscription in addition to its plan. An charge can also be applied to a customer [directly](./invoices?prod_cat_ver&#x3D;2#create_invoice_for_a_charge-item) without being applied to a subscription. \* addon - A recurring component that can be added to a subscription in addition to its plan.

      */
    
    type:'charge' | 'addon' | 'plan';
    
    /**
      * @description Indicates that the item is a physical product. If Orders are enabled in Chargebee, subscriptions created for this item will have orders associated with them.

      */
    
    is_shippable?:boolean;
    
    /**
      * @description Specifies if gift subscriptions can be created for this item.

      */
    
    is_giftable:boolean;
    
    /**
      * @description If &#x60;enabled_for_checkout&#x60;, then the URL to be redirected to once the checkout is complete. This attribute is only available for plan-items.

      */
    
    redirect_url?:string;
    
    /**
      * @description Allow the plan to subscribed to via Checkout. Applies only for plan-items.   
**Note:** Only the in-app version of Checkout is supported for Product Catalog v2.

      */
    
    enabled_for_checkout:boolean;
    
    /**
      * @description Allow customers to change their subscription to this plan via the [Self-Serve Portal](https://www.chargebee.com/docs/2.0/inapp-self-serve-portal.html). Applies only for plan-items. This requires the Portal configuration to [allow changing subscriptions](https://www.chargebee.com/docs/2.0/inapp-self-serve-portal.html#allow-change-subscription).

      */
    
    enabled_in_portal:boolean;
    
    /**
      * @description The item is included in MRR calculations for your site. This attribute is only applicable for items of &#x60;type &#x3D; charge&#x60; and when the feature is enabled in Chargebee. Note: If the site-level setting is to exclude charge-items from MRR calculations, this value is always returned &#x60;false&#x60;.

      */
    
    included_in_mrr?:boolean;
    
    /**
      * @description Indicates which addon-items and charge-items can be applied to the item. Only meant for plan-items. Other details of attaching items such as whether to attach as a mandatory item or to attach on a certain event, can be specified using the [Create](./attached_items?prod_cat_ver&#x3D;2#create_an_attached_item) or [Update an attached item](./attached_items?prod_cat_ver&#x3D;2#update_an_attached_item) API. \* all - all addon-items and charge-items are applicable to this plan-item. \* restricted - only the addon-items or charge-items provided in &#x60;applicable_items&#x60; can be applied to this plan-item.

      */
    
    item_applicability:'all' | 'restricted';
    
    /**
      * @description The URL to redirect to once the gift has been claimed by the receiver.

      */
    
    gift_claim_redirect_url?:string;
    
    /**
      * @description The unit of measure for a quantity-based item. This is displayed on the Chargebee UI and on customer facing documents/pages. The latter includes [hosted pages](./hosted_pages?prod_cat_ver&#x3D;2), [invoices](./invoices?prod_cat_ver&#x3D;2) and [quotes](./quotes?prod_cat_ver&#x3D;2#). Examples follow:  

* &quot;user&quot; for a cloud-collaboration platform.
* &quot;GB&quot; for a data service.
* &quot;issue&quot; for a magazine.

**Note:** &#x60;unit&#x60; is only exposed via the API to quantity-based addons; it is however NOT exposed to quantity-based plans.

      */
    
    unit?:string;
    
    /**
      * @description Specifies whether the item undergoes metered billing. When &#x60;true&#x60;, the quantity is calculated from [usage records](/docs/api/usages?prod_cat_ver&#x3D;2). When &#x60;false&#x60;, the &#x60;quantity&#x60; is as determined while adding an item price to the subscription. Applicable only for items of &#x60;type&#x60; &#x60;plan&#x60; or &#x60;addon&#x60; and when [Metered Billing](https://www.chargebee.com/docs/2.0/metered_billing.html) is enabled. The value of this attribute cannot be changed.

      */
    
    metered:boolean;
    
    /**
      * @description How the quantity is calculated from usage data for the item prices belonging to this item. Only applicable when the item is &#x60;metered&#x60;. This value overrides the one [set at the site level](https://www.chargebee.com/docs/2.0/metered_billing.html#configuring-metered-billing). \* sum_of_usages - the net quantity is the sum of the &#x60;quantity&#x60; of all usages for the current term. \* last_usage - from among the usage records for the [item price](/docs/api/subscriptions?prod_cat_ver&#x3D;2#subscription_subscription_items_item_price_id) with &#x60;usage_date&#x60; within the relevant billing period, the &#x60;quantity&#x60; of the usage record with the most recent &#x60;usage_date&#x60; is taken as the net quantity consumed. \* max_usage - from among the usage records for the [item price](/docs/api/subscriptions?prod_cat_ver&#x3D;2#subscription_subscription_items_item_price_id) with &#x60;usage_date&#x60; within the relevant billing period, the &#x60;quantity&#x60; of the usage record with the maximum value is taken as the net quantity consumed.

      */
    
    usage_calculation?:'max_usage' | 'sum_of_usages' | 'last_usage';
    
    /**
      * @description Timestamp indicating when this item was archived.

      */
    
    archived_at?:number;
    
    /**
      * @description The subscription channel this object originated from and is maintained in. \* app_store - The object data is synchronized with data from [in-app subscription(s)](https://apidocs.chargebee.com/docs/api/in_app_subscriptions) created in Apple App Store. Direct manipulation of this object via UI or API is disallowed. \* web - The object was created (and is maintained) for the web channel directly in Chargebee via API or UI. \* play_store - The object data is synchronized with data from [in-app subscription(s)](https://apidocs.chargebee.com/docs/api/in_app_subscriptions) created in Google Play Store. Direct manipulation of this object via UI or API is disallowed.  

In-App Subscriptions is currently in early access. Contact [eap@chargebee.com](mailto:eap@chargebee.com) for more information.

      */
    
    channel?:Channel;
    
    /**
      * @description A collection of key-value pairs that provides extra information about the item. [Learn more](advanced-features#metadata).

      */
    
    metadata?:object;
    
    /**
      * @description The list of addons and charges that are allowed to be applied to the plan. This attribute is applicable only for plan-items and that too when &#x60;item_applicability&#x60; is &#x60;restricted&#x60;.  

Other details of attaching items can be specified using the [Create](./attached_items?prod_cat_ver&#x3D;2#create_an_attached_item) or [Update an attached item](./attached_items?prod_cat_ver&#x3D;2#update_an_attached_item) API.

      */
    
    applicable_items?:Item.ApplicableItem[];
  }
  export namespace Item {
    export class ItemResource {  
      /**
        * @description Creates a new item.

        */
      
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
       
      /**
        * @description Retrieve an item resource.

        */
      
      retrieve(item_id:string):ChargebeeRequest<RetrieveResponse>;
       
      /**
        * @description Updates an item with the changes specified. Unspecified item parameters are not modified.

        */
      
      update(item_id:string, input?:UpdateInputParam):ChargebeeRequest<UpdateResponse>;
       
      /**
        * @description Returns a list of items satisfying **all** the conditions specified in the filter parameters below. The list is sorted by date of creation, in descending order.

        */
      
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
       
      /**
        * @description Deletes an item, marking its &#x60;status&#x60; as deleted. This is not allowed if there are &#x60;active&#x60; or &#x60;archived&#x60; item prices under the item. Once deleted, the id and name of the item can be reused.

        */
      
      delete(item_id:string):ChargebeeRequest<DeleteResponse>;
    }
    export interface CreateResponse {  
       item:Item;
    }
    export interface CreateInputParam {
      [key : string] : any;  
      /**
        * @description The identifier for the item. Must be unique and is immutable once set.

        */
       
      id:string;
       
      /**
        * @description A unique display name for the item. Must be unique. This is visible only in Chargebee and not to customers.

        */
       
      name:string;
       
      /**
        * @description The type of the item. \* plan - An essential component of a subscription. Every subscription has exactly one plan. It has a recurring charge and its period defines the billing period of the subscription. \* charge - A non-recurring component that can be added to a subscription in addition to its plan. An charge can also be applied to a customer [directly](./invoices?prod_cat_ver&#x3D;2#create_invoice_for_a_charge-item) without being applied to a subscription. \* addon - A recurring component that can be added to a subscription in addition to its plan.

        */
       
      type:'charge' | 'addon' | 'plan';
       
      /**
        * @description Description of the item. This is visible only in Chargebee and not to customers.

        */
       
      description?:string;
       
      /**
        * @description The &#x60;id&#x60; of the [Item family](./item_families?prod_cat_ver&#x3D;2) that the item belongs to. Is mandatory when [Product Families](https://www.chargebee.com/docs/2.0/product-families.html) have been enabled.

        */
       
      item_family_id:string;
       
      /**
        * @description Specifies if gift subscriptions can be created for this item.

        */
       
      is_giftable?:boolean;
       
      /**
        * @description Indicates that the item is a physical product. If Orders are enabled in Chargebee, subscriptions created for this item will have orders associated with them.

        */
       
      is_shippable?:boolean;
       
      /**
        * @description A unique display name for the item.

        */
       
      external_name?:string;
       
      /**
        * @description Allow customers to change their subscription to this plan via the [Self-Serve Portal](https://www.chargebee.com/docs/2.0/inapp-self-serve-portal.html). Applies only for plan-items. This requires the Portal configuration to [allow changing subscriptions](https://www.chargebee.com/docs/2.0/inapp-self-serve-portal.html#allow-change-subscription). Only the in-app version of the Portal is supported for Product Catalog v2.

        */
       
      enabled_in_portal?:boolean;
       
      /**
        * @description If &#x60;enabled_for_checkout&#x60;, then the URL to be redirected to once the checkout is complete. This attribute is only available for plan-items.

        */
       
      redirect_url?:string;
       
      /**
        * @description Allow the plan to subscribed to via Checkout. Applies only for plan-items.   
**Note:** Only the in-app version of Checkout is supported for Product Catalog v2.

        */
       
      enabled_for_checkout?:boolean;
       
      /**
        * @description Indicates which addon-items and charge-items can be applied to the item. Only possible for plan-items. Other details of attaching items such as whether to attach as a mandatory item or to attach on a certain event, can be specified using the [Create](./attached_items?prod_cat_ver&#x3D;2#create_an_attached_item) or [Update an attached item](./attached_items?prod_cat_ver&#x3D;2#update_an_attached_item) API. \* all - all addon-items and charge-items are applicable to this plan-item. \* restricted - only the addon-items or charge-items provided in &#x60;applicable_items&#x60; can be applied to this plan-item.

        */
       
      item_applicability?:'all' | 'restricted';
       
      /**
        * @description The list of ids of addon-items and charge-items that can be applied to the plan-item. This parameter can be provided only for plan-items and that too when item_applicability is restricted. Other details of attaching items can be specified using the [Create](./attached_items?prod_cat_ver&#x3D;2#create_an_attached_item) or [Update an attached item](./attached_items?prod_cat_ver&#x3D;2#update_an_attached_item) API.

        */
       
      applicable_items?:string[];
       
      /**
        * @description The unit of measure for a quantity-based item. This is displayed on the Chargebee UI and on customer facing documents/pages. The latter includes [hosted pages](./hosted_pages?prod_cat_ver&#x3D;2), [invoices](./invoices?prod_cat_ver&#x3D;2) and [quotes](./quotes?prod_cat_ver&#x3D;2#). Examples follow:  

* &quot;user&quot; for a cloud-collaboration platform.
* &quot;GB&quot; for a data service.
* &quot;issue&quot; for a magazine.

**Note:** &#x60;unit&#x60; is only exposed via the API to quantity-based addons; it is however NOT exposed to quantity-based plans. .

        */
       
      unit?:string;
       
      /**
        * @description The URL to redirect to once the gift has been claimed by the receiver.

        */
       
      gift_claim_redirect_url?:string;
       
      /**
        * @description The item is included in MRR calculations for your site. This attribute is only applicable for items of &#x60;type &#x3D; charge&#x60; and when the feature is enabled in Chargebee. Note: If the site-level setting is to exclude charge-items from MRR calculations, this value is always returned &#x60;false&#x60;.

        */
       
      included_in_mrr?:boolean;
       
      /**
        * @description Specifies whether the item undergoes metered billing. When &#x60;true&#x60;, the quantity is calculated from [usage records](/docs/api/usages?prod_cat_ver&#x3D;2). When &#x60;false&#x60;, the &#x60;quantity&#x60; is as determined while adding an item price to the subscription. Applicable only for items of &#x60;type&#x60; &#x60;plan&#x60; or &#x60;addon&#x60; and when [Metered Billing](https://www.chargebee.com/docs/2.0/metered_billing.html) is enabled. The value of this attribute cannot be changed.

        */
       
      metered?:boolean;
       
      /**
        * @description How the quantity is calculated from usage data for the item prices belonging to this item. Only applicable when the item is &#x60;metered&#x60;. This value overrides the one [set at the site level](https://www.chargebee.com/docs/2.0/metered_billing.html#configuring-metered-billing). . \* sum_of_usages - the net quantity is the sum of the &#x60;quantity&#x60; of all usages for the current term. \* last_usage - from among the usage records for the [item price](/docs/api/subscriptions?prod_cat_ver&#x3D;2#subscription_subscription_items_item_price_id) with &#x60;usage_date&#x60; within the relevant billing period, the &#x60;quantity&#x60; of the usage record with the most recent &#x60;usage_date&#x60; is taken as the net quantity consumed. \* max_usage - from among the usage records for the [item price](/docs/api/subscriptions?prod_cat_ver&#x3D;2#subscription_subscription_items_item_price_id) with &#x60;usage_date&#x60; within the relevant billing period, the &#x60;quantity&#x60; of the usage record with the maximum value is taken as the net quantity consumed.

        */
       
      usage_calculation?:'max_usage' | 'sum_of_usages' | 'last_usage';
       
      /**
        * @description A collection of key-value pairs that provides extra information about the item.  
**Note:** There&#x27;s a character limit of 65,535.
[Learn more](advanced-features#metadata).

        */
       
      metadata?:object;
    }
    export interface RetrieveResponse {  
       item:Item;
    }
    
    export interface UpdateResponse {  
       item:Item;
    }
    export interface UpdateInputParam {
      [key : string] : any;  
      /**
        * @description The display name for the item. Must be unique. This is visible only in Chargebee and not to customers.

        */
       
      name?:string;
       
      /**
        * @description Description of the item. This is visible only in Chargebee and not to customers.

        */
       
      description?:string;
       
      /**
        * @description Indicates that the item is a physical product. If Orders are enabled in Chargebee, subscriptions created for this item will have orders associated with them.

        */
       
      is_shippable?:boolean;
       
      /**
        * @description A unique display name for the item.

        */
       
      external_name?:string;
       
      /**
        * @description The &#x60;id&#x60; of the [Item family](./item_families?prod_cat_ver&#x3D;2) that the item belongs to. Is mandatory when [Product Families](https://www.chargebee.com/docs/2.0/product-families.html) have been enabled.

        */
       
      item_family_id?:string;
       
      /**
        * @description Allow customers to change their subscription to this plan via the [Self-Serve Portal](https://www.chargebee.com/docs/2.0/inapp-self-serve-portal.html). Applies only for plan-items. This requires the Portal configuration to [allow changing subscriptions](https://www.chargebee.com/docs/2.0/inapp-self-serve-portal.html#allow-change-subscription).

        */
       
      enabled_in_portal?:boolean;
       
      /**
        * @description If &#x60;enabled_for_checkout&#x60;, then the URL to be redirected to once the checkout is complete. This parameter is only meant for plan-items.

        */
       
      redirect_url?:string;
       
      /**
        * @description Allow the plan to subscribed to via Checkout. Applies only for plan-items.   
**Note:** Only the in-app version of Checkout is supported for Product Catalog v2.

        */
       
      enabled_for_checkout?:boolean;
       
      /**
        * @description Indicates which addon-items and charge-items can be applied to the item. Only possible for plan-items. Other details of attaching items such as whether to attach as a mandatory item or to attach on a certain event, can be specified using the [Create](./attached_items?prod_cat_ver&#x3D;2#create_an_attached_item) or [Update an attached item](./attached_items?prod_cat_ver&#x3D;2#update_an_attached_item) API. \* all - all addon-items and charge-items are applicable to this plan-item. \* restricted - only the addon-items or charge-items provided in &#x60;applicable_items&#x60; can be applied to this plan-item.

        */
       
      item_applicability?:'all' | 'restricted';
       
      /**
        * @description The list of ids of addon-items and charge-items that can be applied to the plan-item. This parameter can be provided only for plan-items and that too when item_applicability is restricted. Other details of attaching items can be specified using the [Create](./attached_items?prod_cat_ver&#x3D;2#create_an_attached_item) or [Update an attached item](./attached_items?prod_cat_ver&#x3D;2#update_an_attached_item) API.

        */
       
      applicable_items?:string[];
       
      /**
        * @description The unit of measure for a quantity-based item. This is displayed on the Chargebee UI and on customer facing documents/pages. The latter includes [hosted pages](./hosted_pages?prod_cat_ver&#x3D;2), [invoices](./invoices?prod_cat_ver&#x3D;2) and [quotes](./quotes?prod_cat_ver&#x3D;2#). Examples follow:  

* &quot;user&quot; for a cloud-collaboration platform.
* &quot;GB&quot; for a data service.
* &quot;issue&quot; for a magazine.

**Note:** &#x60;unit&#x60; is only exposed via the API to quantity-based addons; it is however NOT exposed to quantity-based plans. .

        */
       
      unit?:string;
       
      /**
        * @description The URL to redirect to once the gift has been claimed by the receiver.

        */
       
      gift_claim_redirect_url?:string;
       
      /**
        * @description A collection of key-value pairs that provides extra information about the item. [Learn more](advanced-features#metadata).

        */
       
      metadata?:object;
       
      /**
        * @description The item is included in MRR calculations for your site. This attribute is only applicable for items of &#x60;type &#x3D; charge&#x60; and when the feature is enabled in Chargebee. Note: If the site-level setting is to exclude charge-items from MRR calculations, this value is always returned &#x60;false&#x60;.

        */
       
      included_in_mrr?:boolean;
       
      /**
        * @description The status of the item. \* active - The item can be used to create new item prices. \* deleted - Indicates that the item has been [deleted](./items?prod_cat_ver&#x3D;2#delete_an_item). The &#x60;id&#x60; and &#x60;name&#x60; can be reused. Deleted items can be retrieved using [List items](./items?prod_cat_ver&#x3D;2#list_items). \* archived - The item is no longer active and no new item prices can be created

        */
       
      status?:'archived' | 'active';
    }
    export interface ListResponse {  
      /**
        * @description Returns a list of items satisfying **all** the conditions specified in the filter parameters below. The list is sorted by date of creation, in descending order.

        */
       
       list:{item:Item}[];
       
      /**
        * @description Returns a list of items satisfying **all** the conditions specified in the filter parameters below. The list is sorted by date of creation, in descending order.

        */
       
       next_offset?:string;
    }
    export interface ListInputParam {
      [key : string]: any;  
      /**
        * @description Returns a list of items satisfying **all** the conditions specified in the filter parameters below. The list is sorted by date of creation, in descending order.

        */
        
      limit?:number;
       
      /**
        * @description Returns a list of items satisfying **all** the conditions specified in the filter parameters below. The list is sorted by date of creation, in descending order.

        */
        
      offset?:string;
       
      /**
        * @description Returns a list of items satisfying **all** the conditions specified in the filter parameters below. The list is sorted by date of creation, in descending order.

        */
        
      id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Returns a list of items satisfying **all** the conditions specified in the filter parameters below. The list is sorted by date of creation, in descending order.

        */
        
      item_family_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Returns a list of items satisfying **all** the conditions specified in the filter parameters below. The list is sorted by date of creation, in descending order.

        */
        
      type?:{in?:string,is?:'charge' | 'addon' | 'plan',is_not?:'charge' | 'addon' | 'plan',not_in?:string};
       
      /**
        * @description Returns a list of items satisfying **all** the conditions specified in the filter parameters below. The list is sorted by date of creation, in descending order.

        */
        
      name?:{is?:string,is_not?:string,starts_with?:string};
       
      /**
        * @description Returns a list of items satisfying **all** the conditions specified in the filter parameters below. The list is sorted by date of creation, in descending order.

        */
        
      item_applicability?:{in?:string,is?:'all' | 'restricted',is_not?:'all' | 'restricted',not_in?:string};
       
      /**
        * @description Returns a list of items satisfying **all** the conditions specified in the filter parameters below. The list is sorted by date of creation, in descending order.

        */
        
      status?:{in?:string,is?:'archived' | 'deleted' | 'active',is_not?:'archived' | 'deleted' | 'active',not_in?:string};
       
      /**
        * @description Returns a list of items satisfying **all** the conditions specified in the filter parameters below. The list is sorted by date of creation, in descending order.

        */
        
      is_giftable?:{is?:'true' | 'false'};
       
      /**
        * @description Returns a list of items satisfying **all** the conditions specified in the filter parameters below. The list is sorted by date of creation, in descending order.

        */
        
      updated_at?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description Returns a list of items satisfying **all** the conditions specified in the filter parameters below. The list is sorted by date of creation, in descending order.

        */
        
      enabled_for_checkout?:{is?:'true' | 'false'};
       
      /**
        * @description Returns a list of items satisfying **all** the conditions specified in the filter parameters below. The list is sorted by date of creation, in descending order.

        */
        
      enabled_in_portal?:{is?:'true' | 'false'};
       
      /**
        * @description Returns a list of items satisfying **all** the conditions specified in the filter parameters below. The list is sorted by date of creation, in descending order.

        */
        
      metered?:{is?:'true' | 'false'};
       
      /**
        * @description Returns a list of items satisfying **all** the conditions specified in the filter parameters below. The list is sorted by date of creation, in descending order.

        */
        
      usage_calculation?:{in?:string,is?:'max_usage' | 'sum_of_usages' | 'last_usage',is_not?:'max_usage' | 'sum_of_usages' | 'last_usage',not_in?:string};
       
      /**
        * @description Returns a list of items satisfying **all** the conditions specified in the filter parameters below. The list is sorted by date of creation, in descending order.

        */
        
      channel?:{in?:string,is?:'app_store' | 'web' | 'play_store',is_not?:'app_store' | 'web' | 'play_store',not_in?:string};
       
      /**
        * @description Returns a list of items satisfying **all** the conditions specified in the filter parameters below. The list is sorted by date of creation, in descending order.

        */
        
      sort_by?:{asc?:'updated_at' | 'name' | 'id',desc?:'updated_at' | 'name' | 'id'};
    }
    export interface DeleteResponse {  
       item:Item;
    }
    
    export interface ApplicableItem {  
         /**
          * @description Id of the addon-item or plan-item that can be applied to the plan-item.

          */
       
      id?:string;
    }
  }
}