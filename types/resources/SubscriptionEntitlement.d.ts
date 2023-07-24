///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface SubscriptionEntitlement {
    subscription_id:string;
    feature_id?:string;
    feature_name?:string;
    feature_unit?:string;
    value?:string;
    name?:string;
    is_overridden:boolean;
    is_enabled:boolean;
    expires_at?:number;
    components?:SubscriptionEntitlement.Component;
  }
  export namespace SubscriptionEntitlement {
    export class SubscriptionEntitlementResource {
      set_subscription_entitlement_availability(subscription_id:string, input:SetSubscriptionEntitlementAvailabilityInputParam):ChargebeeRequest<SetSubscriptionEntitlementAvailabilityResponse>;
      subscription_entitlements_for_subscription(subscription_id:string, input?:SubscriptionEntitlementsForSubscriptionInputParam):ChargebeeRequest<SubscriptionEntitlementsForSubscriptionResponse>;
    }
    export interface SetSubscriptionEntitlementAvailabilityResponse {
      subscription_entitlement:SubscriptionEntitlement;
    }
    export interface SetSubscriptionEntitlementAvailabilityInputParam {
      is_enabled:boolean;
      subscription_entitlements?:{feature_id:string}[];
    }
    export interface SubscriptionEntitlementsForSubscriptionResponse {
      list:{subscription_entitlement:SubscriptionEntitlement}[];
      next_offset?:string;
    }
    export interface SubscriptionEntitlementsForSubscriptionInputParam {
      [key : string]: any;
      limit?:number;
      offset?:string;
    }
    export interface Component {
      entitlement_overrides?:EntitlementOverride;
    }
  }
}