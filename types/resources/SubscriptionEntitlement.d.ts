///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface SubscriptionEntitlement {
    
    /**
      * @description The &#x60;id&#x60; of the [subscription](/docs/api/subscriptions) to which this entitlement belongs.

      */
    
    subscription_id:string;
    
    /**
      * @description The &#x60;id&#x60; of the [feature](/docs/api/features) towards which this subscription entitlement has been granted.

      */
    
    feature_id?:string;
    
    /**
      * @description The [name of the feature](/docs/api/features#feature_name) towards which this subscription entitlement has been granted.

      */
    
    feature_name?:string;
    
    /**
      * @description [The unit of measure](/docs/api/features#feature_unit) for the feature when its &#x60;type&#x60; is either &#x60;quantity&#x60; or &#x60;range&#x60;.

      */
    
    feature_unit?:string;
    
    /**
      * @description The value denoting the effective entitlement level that the subscription has towards the feature. When &#x60;components.entitlement_override&#x60; is present, then this is the same as &#x60;components.entitlement_override.value&#x60;. Otherwise, it is &#x60;components.inherited_entitlements.value&#x60;.

      */
    
    value?:string;
    
    /**
      * @description The display name of the effective entitlement level. When &#x60;components.entitlement_override&#x60; is present, then this is the same as &#x60;components.entitlement_override.name&#x60;. Otherwise, it is derived based on the &#x60;type&#x60; of feature as follows:

* When &#x60;feature.type&#x60; is &#x60;range&#x60; or &#x60;quantity&#x60;: the &#x60;name&#x60; is the space-separated concatenation of &#x60;inherited_entitlements.value&#x60; and the pluralized form of &#x60;feature_unit&#x60;. For example, if &#x60;value&#x60; is &#x60;20&#x60; and &#x60;feature_unit&#x60; is &#x60;user&#x60;, then &#x60;name&#x60; becomes &#x60;20 users&#x60;.
* When &#x60;feature.type&#x60; is &#x60;custom&#x60;: the &#x60;name&#x60; is the same as &#x60;inherited_entitlements.value&#x60;.
* When &#x60;feature.type&#x60; is &#x60;switch&#x60;: &#x60;name&#x60; is not applicable.

      */
    
    name?:string;
    
    /**
      * @description Indicates that &#x60;components.entitlement_overrides&#x60; exists.

      */
    
    is_overridden:boolean;
    
    /**
      * @description Indicates that &#x60;components.is_enabled&#x60; exists.

      */
    
    is_enabled:boolean;
    
    /**
      * @description Timestamp when the subscription entitlements are going to expire.

      */
    
    expires_at?:number;
    
    /**
      * @description The component entitlements that constitute this &#x60;subscription_entitlement&#x60;. The effective entitlement [value](/docs/api/subscription_entitlements#subscription_entitlement_value) and [name](/docs/api/subscription_entitlements#subscription_entitlement_name) are determined from these component entitlements.

      */
    
    components?:SubscriptionEntitlement.Component;
  }
  export namespace SubscriptionEntitlement {
    export class SubscriptionEntitlementResource {  
      /**
        * @description Retrieves the list of &#x60;subscription_entitlements&#x60; for the [subscription](/docs/api/subscriptions).  
**Note:**

The &#x60;components&#x60; attribute is not returned for any of the &#x60;subscription_entitlements&#x60;. Use the retrieve operation(coming soon) to obtain the &#x60;components&#x60;.

        */
      
      subscription_entitlements_for_subscription(subscription_id:string, input?:SubscriptionEntitlementsForSubscriptionInputParam):ChargebeeRequest<SubscriptionEntitlementsForSubscriptionResponse>;
       
      /**
        * @description Enables or disables specific &#x60;subscription_entitlements&#x60; for a subscription.

        */
      
      set_subscription_entitlement_availability(subscription_id:string, input:SetSubscriptionEntitlementAvailabilityInputParam):ChargebeeRequest<SetSubscriptionEntitlementAvailabilityResponse>;
    }
    export interface SubscriptionEntitlementsForSubscriptionResponse {  
      /**
        * @description Retrieves the list of &#x60;subscription_entitlements&#x60; for the [subscription](/docs/api/subscriptions).  
**Note:**

The &#x60;components&#x60; attribute is not returned for any of the &#x60;subscription_entitlements&#x60;. Use the retrieve operation(coming soon) to obtain the &#x60;components&#x60;.

        */
       
       list:{subscription_entitlement:SubscriptionEntitlement}[];
       
      /**
        * @description Retrieves the list of &#x60;subscription_entitlements&#x60; for the [subscription](/docs/api/subscriptions).  
**Note:**

The &#x60;components&#x60; attribute is not returned for any of the &#x60;subscription_entitlements&#x60;. Use the retrieve operation(coming soon) to obtain the &#x60;components&#x60;.

        */
       
       next_offset?:string;
    }
    export interface SubscriptionEntitlementsForSubscriptionInputParam {
      [key : string]: any;  
      /**
        * @description Retrieves the list of &#x60;subscription_entitlements&#x60; for the [subscription](/docs/api/subscriptions).  
**Note:**

The &#x60;components&#x60; attribute is not returned for any of the &#x60;subscription_entitlements&#x60;. Use the retrieve operation(coming soon) to obtain the &#x60;components&#x60;.

        */
        
      limit?:number;
       
      /**
        * @description Retrieves the list of &#x60;subscription_entitlements&#x60; for the [subscription](/docs/api/subscriptions).  
**Note:**

The &#x60;components&#x60; attribute is not returned for any of the &#x60;subscription_entitlements&#x60;. Use the retrieve operation(coming soon) to obtain the &#x60;components&#x60;.

        */
        
      offset?:string;
    }
    export interface SetSubscriptionEntitlementAvailabilityResponse {  
       subscription_entitlement:SubscriptionEntitlement;
    }
    export interface SetSubscriptionEntitlementAvailabilityInputParam {
       
      /**
        * @description Specifies whether the &#x60;subscription_entitlements&#x60; are to be enabled or disabled.

        */
       
      is_enabled:boolean;
       
      /**
        * @description Parameters for subscription_entitlements

        */
       
      subscription_entitlements?:{feature_id:string}[];
    }
    export interface Component {  
         /**
          * @description When a subscription entitlement has been explicitly overridden, this object contains the details of said override. An &#x60;entitlement_override&#x60; can be [temporary](/docs/api/entitlement_overrides#entitlement_override_expires_at) such that it expires at some point in time and is no longer returned.

          */
       
      entitlement_overrides?:EntitlementOverride;
    }
  }
}