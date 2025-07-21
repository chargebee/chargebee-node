///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface SubscriptionEntitlement {
    

    subscription_id:string;

    feature_id?:string;

    feature_name?:string;

    feature_unit?:string;

    feature_type?:string;

    value?:string;

    name?:string;

    is_overridden:boolean;

    is_enabled:boolean;

    effective_from?:number;

    schedule_status?:'activated' | 'scheduled' | 'failed';

    expires_at?:number;

    components?:SubscriptionEntitlement.Component;

  }
  export namespace SubscriptionEntitlement {
    export class SubscriptionEntitlementResource {  
      subscription_entitlements_for_subscription(subscription_id:string, input?:SubscriptionEntitlementsForSubscriptionInputParam):ChargebeeRequest<SubscriptionEntitlementsForSubscriptionResponse>;
       
      set_subscription_entitlement_availability(subscription_id:string, input:SetSubscriptionEntitlementAvailabilityInputParam):ChargebeeRequest<SetSubscriptionEntitlementAvailabilityResponse>;
    }
    export interface SubscriptionEntitlementsForSubscriptionResponse {  
       list:{subscription_entitlement:SubscriptionEntitlement}[];
       
       next_offset?:string;
    }
    export interface SubscriptionEntitlementsForSubscriptionInputParam {
      [key : string]: any;  
      /**
        * @description The number of resources to be returned.

        */
        
      limit?:number;
       
      /**
        * @description Determines your position in the list for pagination. To ensure that the next page is retrieved correctly, always set \&#x60;offset\&#x60; to the value of \&#x60;next_offset\&#x60; obtained in the previous iteration of the API call.

        */
        
      offset?:string;
       
      include_drafts?:boolean;
       
      embed?:string;
       
      include_scheduled_overrides?:boolean;
    }
    export interface SetSubscriptionEntitlementAvailabilityResponse {  
       subscription_entitlement:SubscriptionEntitlement;
    }
    export interface SetSubscriptionEntitlementAvailabilityInputParam {
       
      subscription_entitlements:{feature_id:string}[];
       
      is_enabled:boolean;
    }
    export interface Component {  
      entitlement_overrides?:EntitlementOverride;
    }
  }
}