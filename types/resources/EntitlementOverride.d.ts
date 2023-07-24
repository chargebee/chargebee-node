///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface EntitlementOverride {
    id:string;
    entity_id?:string;
    entity_type?:string;
    feature_id?:string;
    feature_name?:string;
    value?:string;
    name?:string;
    expires_at?:number;
  }
  export namespace EntitlementOverride {
    export class EntitlementOverrideResource {
      list_entitlement_override_for_subscription(subscription_id:string, input?:ListEntitlementOverrideForSubscriptionInputParam):ChargebeeRequest<ListEntitlementOverrideForSubscriptionResponse>;
      add_entitlement_override_for_subscription(subscription_id:string, input?:AddEntitlementOverrideForSubscriptionInputParam):ChargebeeRequest<AddEntitlementOverrideForSubscriptionResponse>;
    }
    export interface ListEntitlementOverrideForSubscriptionResponse {
      list:{entitlement_override:EntitlementOverride}[];
      next_offset?:string;
    }
    export interface ListEntitlementOverrideForSubscriptionInputParam {
      [key : string]: any;
      limit?:number;
      offset?:string;
    }
    export interface AddEntitlementOverrideForSubscriptionResponse {
      entitlement_override:EntitlementOverride;
    }
    export interface AddEntitlementOverrideForSubscriptionInputParam {
      action?:Action;
      entitlement_overrides?:{expires_at?:number,feature_id:string,value?:string}[];
    }
    
  }
}