///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface EntitlementOverride {
    
    /**
      * @description Unique identifier for the entitlement override. This is always auto-generated.

      */
    
    id:string;
    
    /**
      * @description The &#x60;id&#x60; of the subscription to which this entitlement override belongs.

      */
    
    entity_id?:string;
    
    /**
      * @description The name of Chargebee resource that this entitlement override is associated with. The value is always &#x60;subscription&#x60;.

      */
    
    entity_type?:string;
    
    /**
      * @description The &#x60;id&#x60; of the &#x60;feature&#x60; towards which this entitlement override has been granted.

      */
    
    feature_id?:string;
    
    /**
      * @description The &#x60;name&#x60; of the &#x60;feature&#x60; towards which this entitlement override has been granted.

      */
    
    feature_name?:string;
    
    /**
      * @description The level of entitlement that the item has towards the feature. The possible values depend on the value of &#x60;feature.type&#x60;:

* When &#x60;feature.type&#x60; is &#x60;quantity&#x60; and:
  * If &#x60;feature.levels[is_unlimited]&#x60; is not &#x60;true&#x60; for any one of &#x60;feature.levels[]&#x60;, then the value can be any one of &#x60;feature.levels[value][]&#x60;.
  * If &#x60;feature.levels[is_unlimited]&#x60; is &#x60;true&#x60; for one of the &#x60;feature.levels[]&#x60;, then the value can also be:
    * any one of &#x60;feature.levels[value][]&#x60;
    * or it can be &#x60;unlimited&#x60; (case-insensitive), indicating unlimited entitlement.
* When &#x60;type&#x60; is &#x60;range&#x60; and:
  * If &#x60;feature.levels[is_unlimited]&#x60; is not &#x60;true&#x60; for any one of &#x60;feature.levels[]&#x60;, then the value can be any whole number between &#x60;levels[value][0]&#x60; and &#x60;levels[value][1]&#x60; (inclusive).
  * If &#x60;feature.levels[is_unlimited]&#x60; is &#x60;true&#x60; for one of the &#x60;feature.levels[]&#x60;, then the value can be:
    * any whole number equal to or greater than &#x60;levels[value][0]&#x60;
    * or it can be &#x60;unlimited&#x60; (case-insensitive), indicating unlimited entitlement.
* When &#x60;type&#x60; is &#x60;custom&#x60;, then the value can be any one of &#x60;feature.levels[value][]&#x60;.
* When &#x60;type&#x60; is &#x60;switch&#x60;, then the value is set as &#x60;true&#x60; if the feature is available; it is set as &#x60;false&#x60; when the feature is unavailable.

      */
    
    value?:string;
    
    /**
      * @description The display name for the entitlement level. The default values are auto-generated based on &#x60;feature.type&#x60; as follows:

* When &#x60;feature.type&#x60; is &#x60;quantity&#x60; or &#x60;range&#x60;, then &#x60;name&#x60; is the space-separated concatenation of &#x60;value&#x60; and the pluralized version of &#x60;feature.unit&#x60;. For example, if &#x60;value&#x60; is &#x60;20&#x60; and &#x60;feature.unit&#x60; is &#x60;user&#x60;, then &#x60;name&#x60; becomes &#x60;20 users&#x60;.
* When &#x60;feature.type&#x60; is &#x60;custom&#x60;, then &#x60;name&#x60; is the same as &#x60;value&#x60;

      */
    
    name?:string;
    
    /**
      * @description The expiry date for the &#x60;entitlement_override&#x60;. Once expired, the &#x60;entitlement_override&#x60; object is no longer returned.

      */
    
    expires_at?:number;
  }
  export namespace EntitlementOverride {
    export class EntitlementOverrideResource {  
      /**
        * @description Upserts or removes a set of &#x60;entitlement_overrides&#x60; for a &#x60;subscription&#x60; depending on the &#x60;action&#x60; specified. The API returns the upserted or deleted &#x60;entitlement_overrides&#x60; after successfully completing the operation. The operation returns an error when the first &#x60;entitlement_override&#x60; fails to be processed. Either all the &#x60;entitlement_overrides&#x60; provided in the request are processed or none.

        */
      
      add_entitlement_override_for_subscription(subscription_id:string, input?:AddEntitlementOverrideForSubscriptionInputParam):ChargebeeRequest<AddEntitlementOverrideForSubscriptionResponse>;
       
      /**
        * @description Retrieve the list of entitlement overrides for a subscription.

        */
      
      list_entitlement_override_for_subscription(subscription_id:string, input?:ListEntitlementOverrideForSubscriptionInputParam):ChargebeeRequest<ListEntitlementOverrideForSubscriptionResponse>;
    }
    export interface AddEntitlementOverrideForSubscriptionResponse {  
       entitlement_override:EntitlementOverride;
    }
    export interface AddEntitlementOverrideForSubscriptionInputParam {
       
      /**
        * @description The specific action to be performed for each &#x60;entitlement_override&#x60; specified. . \* remove - Deletes the &#x60;entitlement_override&#x60; for the &#x60;feature_id&#x60; and &#x60;item_id&#x60; combination, if it exists. \* upsert - If the &#x60;entitlement_override&#x60; already exists for the &#x60;feature_id&#x60; and &#x60;{subscription_id}&#x60; combination, the &#x60;value&#x60; of the &#x60;entitlement_override&#x60; is updated. If it doesn&#x27;t exist, a new &#x60;entitlement_override&#x60; is created.

        */
       
      action?:Action;
       
      /**
        * @description Parameters for entitlement_overrides

        */
       
      entitlement_overrides?:{expires_at?:number,feature_id:string,value?:string}[];
    }
    export interface ListEntitlementOverrideForSubscriptionResponse {  
      /**
        * @description Retrieve the list of entitlement overrides for a subscription.

        */
       
       list:{entitlement_override:EntitlementOverride}[];
       
      /**
        * @description Retrieve the list of entitlement overrides for a subscription.

        */
       
       next_offset?:string;
    }
    export interface ListEntitlementOverrideForSubscriptionInputParam {
      [key : string]: any;  
      /**
        * @description Retrieve the list of entitlement overrides for a subscription.

        */
        
      limit?:number;
       
      /**
        * @description Retrieve the list of entitlement overrides for a subscription.

        */
        
      offset?:string;
    }
    
  }
}