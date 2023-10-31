///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface AttachedItem {
    
    /**
      * @description The unique id for the attached item. Set to a random, immutable value automatically when the attached item is created.

      */
    
    id:string;
    
    /**
      * @description The id of the plan-item to which the item is attached.

      */
    
    parent_item_id:string;
    
    /**
      * @description The id of the item being attached.

      */
    
    item_id:string;
    
    /**
      * @description The type of attachment for the addon. Only applicable for addon-items. \* recommended - The addon is recommended to go with the plan-item when using [Checkout](https://www.chargebee.com/docs/2.0/configure-inapp.html#fundamental-settings_recommending-addons-in-checkout) or [Portal](https://www.chargebee.com/docs/2.0/inapp-self-serve-portal.html#allow-change-subscription). \* optional - The addon is neither mandatory, nor recommended. This allows you to attach an addon so you can specify a &#x60;quantity&#x60; and &#x60;billing_cycles&#x60; for the addon, for when it is applied to subscriptions with the plan. \* mandatory - The addon is attached automatically to the subscription for the plan-item unless [explicitly removed](./subscriptions?prod_cat_ver&#x3D;2) via API.

      */
    
    type:'optional' | 'mandatory' | 'recommended';
    
    /**
      * @description The item state. \* active - New subscriptions can be created with the item. \* deleted - No subscriptions allowed for the item. \* archived - No new subscriptions allowed for the item.

      */
    
    status?:'archived' | 'deleted' | 'active';
    
    /**
      * @description The default quantity of the addon to be attached when the quantity is not specified while [creating](subscriptions?prod_cat_ver&#x3D;2#create_subscription_for_items)/[updating](subscriptions?prod_cat_ver&#x3D;2#update_subscription_for_items) the subscription.

      */
    
    quantity?:number;
    
    /**
      * @description The decimal representation of the quantity of the addon. Returned for quantity-based addons when [multi-decimal pricing](https://apidocs.chargebee.com/docs/api#handling_currency_units) is enabled.

      */
    
    quantity_in_decimal?:string;
    
    /**
      * @description The number of subscription billing cycles for which this item is attached when applied to a subscription. Applicable only for items of type addon. Requires [addon billing cycles](https://www.chargebee.com/docs/2.0/addons-billingcycle.html) to be enabled for the site.   
The value set explicitly for &#x60;billing_cycles&#x60; while [applying the addon to a subscription](./subscriptions?prod_cat_ver&#x3D;2#subscription_subscription_items) takes precedence over this attribute. This attribute, in turn, has a higher precedence than [the value set for the addon-item price](./item_prices?prod_cat_ver&#x3D;2).

      */
    
    billing_cycles?:number;
    
    /**
      * @description Indicates when the item is charged. This attribute only applies to charge-items. \* contract_termination - when a contract term is [terminated](./subscriptions?prod_cat_ver&#x3D;2#cancel_subscription_for_items_contract_term_cancel_option). \* subscription_creation - the time of creation of the subscription. \* subscription_trial_start - the time when the trial period of the subscription begins. \* on_demand - Item can be charged on demand \* plan_activation - same as subscription activation, but also includes the case when the plan-item of the subscription is changed. \* subscription_activation - the moment a subscription enters an &#x60;active&#x60; or &#x60;non-renewing&#x60; state. Also includes reactivations of canceled subscriptions.

      */
    
    charge_on_event:ChargeOnEvent;
    
    /**
      * @description Indicates if the charge-item is to be charged only once or each time the &#x60;charge_on_event&#x60; occurs. This attribute only applies to charge-items.

      */
    
    charge_once:boolean;
    
    /**
      * @description The time at which this attached item was created.

      */
    
    created_at:number;
    
    /**
      * @description Version number of this resource. The &#x60;resource_version&#x60; is updated with a new timestamp in milliseconds for every change made to the resource. This attribute will be present only if the resource has been updated after 2016-09-28.

      */
    
    resource_version?:number;
    
    /**
      * @description The time at which this attached item was last updated.

      */
    
    updated_at?:number;
    
    /**
      * @description The subscription channel this object originated from and is maintained in. \* web - The object was created (and is maintained) for the web channel directly in Chargebee via API or UI. \* app_store - The object data is synchronized with data from [in-app subscription(s)](https://apidocs.chargebee.com/docs/api/in_app_subscriptions) created in Apple App Store. Direct manipulation of this object via UI or API is disallowed. \* play_store - The object data is synchronized with data from [in-app subscription(s)](https://apidocs.chargebee.com/docs/api/in_app_subscriptions) created in Google Play Store. Direct manipulation of this object via UI or API is disallowed.

      */
    
    channel?:Channel;
  }
  export namespace AttachedItem {
    export class AttachedItemResource {  
      /**
        * @description Creates an attached addon or a charge item for a plan.

        */
      
      create(item_id:string, input:CreateInputParam):ChargebeeRequest<CreateResponse>;
       
      /**
        * @description Updates an attached addon or a charge item for a plan.

        */
      
      update(attached_item_id:string, input:UpdateInputParam):ChargebeeRequest<UpdateResponse>;
       
      /**
        * @description Retrieves details of an attached addon or a charge item.

        */
      
      retrieve(attached_item_id:string, input:RetrieveInputParam):ChargebeeRequest<RetrieveResponse>;
       
      /**
        * @description Deletes an attached addon or a charge item.

        */
      
      delete(attached_item_id:string, input:DeleteInputParam):ChargebeeRequest<DeleteResponse>;
       
      /**
        * @description Returns a list of attached items satisfying **all** the conditions specified in the filter parameters below. The list is sorted by the date of creation in descending order (latest first).

        */
      
      list(item_id:string, input?:ListInputParam):ChargebeeRequest<ListResponse>;
    }
    export interface CreateResponse {  
       attached_item:AttachedItem;
    }
    export interface CreateInputParam {
       
      /**
        * @description The id of the addon or charge that is being attached to the plan-item.

        */
       
      item_id:string;
       
      /**
        * @description The type of attachment for the addon. Only applicable for addon-items and is a required parameter as well for addon-items. \* recommended - The addon is recommended to go with the plan-item when using [Checkout](https://www.chargebee.com/docs/2.0/configure-inapp.html#fundamental-settings_recommending-addons-in-checkout) or [Portal](https://www.chargebee.com/docs/2.0/inapp-self-serve-portal.html#allow-change-subscription). \* optional - The addon is neither mandatory, nor recommended. This allows you to attach an addon so you can specify a &#x60;quantity&#x60; and &#x60;billing_cycles&#x60; for the addon, for when it is applied to subscriptions with the plan. \* mandatory - The addon is attached automatically to the subscription for the plan-item unless [explicitly removed](./subscriptions?prod_cat_ver&#x3D;2) via API.

        */
       
      type?:'optional' | 'mandatory' | 'recommended';
       
      /**
        * @description The number of subscription billing cycles for which this item is attached when applied to a subscription. Applicable only for items of type addon. Requires [addon billing cycles](https://www.chargebee.com/docs/2.0/addons-billingcycle.html) to be enabled for the site.  

The value set explicitly for &#x60;billing_cycles&#x60; while [applying the addon to a subscription](./subscriptions?prod_cat_ver&#x3D;2#subscription_subscription_items) takes precedence over this parameter. This parameter, in turn, has a higher precedence than [the value set for the addon-item price](./item_prices?prod_cat_ver&#x3D;2).

        */
       
      billing_cycles?:number;
       
      /**
        * @description The default quantity of the addon to be attached when the quantity is not specified while [creating](subscriptions?prod_cat_ver&#x3D;2#create_subscription_for_items)/[updating](subscriptions?prod_cat_ver&#x3D;2#update_subscription_for_items) the subscription.

        */
       
      quantity?:number;
       
      /**
        * @description The decimal representation of the quantity of the addon. Returned for quantity-based addons when [multi-decimal pricing](https://apidocs.chargebee.com/docs/api#handling_currency_units) is enabled.

        */
       
      quantity_in_decimal?:string;
       
      /**
        * @description Indicates when the item is charged. This parameter only applies to charge-items. \* contract_termination - when a contract term is [terminated](./subscriptions?prod_cat_ver&#x3D;2#cancel_subscription_for_items_contract_term_cancel_option). \* subscription_creation - the time of creation of the subscription. \* subscription_trial_start - the time when the trial period of the subscription begins. \* on_demand - Item can be charged on demand \* plan_activation - same as subscription activation, but also includes the case when the plan-item of the subscription is changed. \* subscription_activation - the moment a subscription enters an &#x60;active&#x60; or &#x60;non-renewing&#x60; state. Also includes reactivations of canceled subscriptions.

        */
       
      charge_on_event?:ChargeOnEvent;
       
      /**
        * @description Indicates if the charge-item is to be charged only once or each time the &#x60;charge_on_event&#x60; occurs. This parameter only applies to charge-items.

        */
       
      charge_once?:boolean;
    }
    export interface UpdateResponse {  
       attached_item:AttachedItem;
    }
    export interface UpdateInputParam {
       
      /**
        * @description The id of the parent item in the attachment relationship.

        */
       
      parent_item_id:string;
       
      /**
        * @description The type of attachment for the addon. Only applicable for addon-items and is a required parameter as well for addon-items. \* recommended - The addon is recommended to go with the plan-item when using [Checkout](https://www.chargebee.com/docs/2.0/configure-inapp.html#fundamental-settings_recommending-addons-in-checkout) or [Portal](https://www.chargebee.com/docs/2.0/inapp-self-serve-portal.html#allow-change-subscription). \* optional - The addon is neither mandatory, nor recommended. This allows you to attach an addon so you can specify a &#x60;quantity&#x60; and &#x60;billing_cycles&#x60; for the addon, for when it is applied to subscriptions with the plan. \* mandatory - The addon is attached automatically to the subscription for the plan-item unless [explicitly removed](./subscriptions?prod_cat_ver&#x3D;2) via API.

        */
       
      type?:'optional' | 'mandatory' | 'recommended';
       
      /**
        * @description The number of subscription billing cycles for which this item is attached when applied to a subscription. Applicable only for items of type addon. Requires [addon billing cycles](https://www.chargebee.com/docs/2.0/addons-billingcycle.html) to be enabled for the site.  

The value set explicitly for &#x60;billing_cycles&#x60; while [applying the addon to a subscription](./subscriptions?prod_cat_ver&#x3D;2#subscription_subscription_items) takes precedence over this parameter. This parameter, in turn, has a higher precedence than [the value set for the addon-item price](./item_prices?prod_cat_ver&#x3D;2).

        */
       
      billing_cycles?:number;
       
      /**
        * @description The default quantity of the addon to be attached when the quantity is not specified while [creating](subscriptions?prod_cat_ver&#x3D;2#create_subscription_for_items)/[updating](subscriptions?prod_cat_ver&#x3D;2#update_subscription_for_items) the subscription.

        */
       
      quantity?:number;
       
      /**
        * @description The decimal representation of the quantity of the addon. Returned for quantity-based addons when [multi-decimal pricing](https://apidocs.chargebee.com/docs/api#handling_currency_units) is enabled.

        */
       
      quantity_in_decimal?:string;
       
      /**
        * @description Indicates when the item is charged. This parameter only applies to charge-items. \* contract_termination - when a contract term is [terminated](./subscriptions?prod_cat_ver&#x3D;2#cancel_subscription_for_items_contract_term_cancel_option). \* subscription_creation - the time of creation of the subscription. \* subscription_trial_start - the time when the trial period of the subscription begins. \* on_demand - Item can be charged on demand \* plan_activation - same as subscription activation, but also includes the case when the plan-item of the subscription is changed. \* subscription_activation - the moment a subscription enters an &#x60;active&#x60; or &#x60;non-renewing&#x60; state. Also includes reactivations of canceled subscriptions.

        */
       
      charge_on_event?:ChargeOnEvent;
       
      /**
        * @description Indicates if the charge-item is to be charged only once or each time the &#x60;charge_on_event&#x60; occurs. This parameter only applies to charge-items.

        */
       
      charge_once?:boolean;
    }
    export interface RetrieveResponse {  
       attached_item:AttachedItem;
    }
    export interface RetrieveInputParam {
       
      /**
        * @description Retrieves details of an attached addon or a charge item.

        */
        
      parent_item_id:string;
    }
    export interface DeleteResponse {  
       attached_item:AttachedItem;
    }
    export interface DeleteInputParam {
       
      /**
        * @description The id of the addon or charge that is being attached to the plan-item.

        */
       
      parent_item_id:string;
    }
    export interface ListResponse {  
      /**
        * @description Returns a list of attached items satisfying **all** the conditions specified in the filter parameters below. The list is sorted by the date of creation in descending order (latest first).

        */
       
       list:{attached_item:AttachedItem}[];
       
      /**
        * @description Returns a list of attached items satisfying **all** the conditions specified in the filter parameters below. The list is sorted by the date of creation in descending order (latest first).

        */
       
       next_offset?:string;
    }
    export interface ListInputParam {
      [key : string]: any;  
      /**
        * @description Returns a list of attached items satisfying **all** the conditions specified in the filter parameters below. The list is sorted by the date of creation in descending order (latest first).

        */
        
      limit?:number;
       
      /**
        * @description Returns a list of attached items satisfying **all** the conditions specified in the filter parameters below. The list is sorted by the date of creation in descending order (latest first).

        */
        
      offset?:string;
       
      /**
        * @description Returns a list of attached items satisfying **all** the conditions specified in the filter parameters below. The list is sorted by the date of creation in descending order (latest first).

        */
        
      id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Returns a list of attached items satisfying **all** the conditions specified in the filter parameters below. The list is sorted by the date of creation in descending order (latest first).

        */
        
      item_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Returns a list of attached items satisfying **all** the conditions specified in the filter parameters below. The list is sorted by the date of creation in descending order (latest first).

        */
        
      type?:{in?:string,is?:'optional' | 'mandatory' | 'recommended',is_not?:'optional' | 'mandatory' | 'recommended',not_in?:string};
       
      /**
        * @description Returns a list of attached items satisfying **all** the conditions specified in the filter parameters below. The list is sorted by the date of creation in descending order (latest first).

        */
        
      item_type?:{in?:string,is?:'charge' | 'addon' | 'plan',is_not?:'charge' | 'addon' | 'plan',not_in?:string};
       
      /**
        * @description Returns a list of attached items satisfying **all** the conditions specified in the filter parameters below. The list is sorted by the date of creation in descending order (latest first).

        */
        
      charge_on_event?:{in?:string,is?:'subscription_creation' | 'subscription_activation' | 'subscription_trial_start' | 'contract_termination' | 'plan_activation' | 'on_demand',is_not?:'subscription_creation' | 'subscription_activation' | 'subscription_trial_start' | 'contract_termination' | 'plan_activation' | 'on_demand',not_in?:string};
       
      /**
        * @description Returns a list of attached items satisfying **all** the conditions specified in the filter parameters below. The list is sorted by the date of creation in descending order (latest first).

        */
        
      updated_at?:{after?:string,before?:string,between?:string,on?:string};
    }
    
  }
}