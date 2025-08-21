///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
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

    effective_from?:number;

    schedule_status?:'activated' | 'scheduled' | 'failed';

  }
  export namespace EntitlementOverride {
    export class EntitlementOverrideResource {  
      add_entitlement_override_for_subscription(subscription_id:string, input:AddEntitlementOverrideForSubscriptionInputParam):ChargebeeRequest<AddEntitlementOverrideForSubscriptionResponse>;
       
      list_entitlement_override_for_subscription(subscription_id:string, input?:ListEntitlementOverrideForSubscriptionInputParam):ChargebeeRequest<ListEntitlementOverrideForSubscriptionResponse>;
    }
    export interface AddEntitlementOverrideForSubscriptionResponse {  
       entitlement_override:EntitlementOverride;
    }
    export interface AddEntitlementOverrideForSubscriptionInputParam {
       
      entitlement_overrides:{effective_from?:number,expires_at?:number,feature_id:string,value?:string}[];
       
      action?:Action;
    }
    export interface ListEntitlementOverrideForSubscriptionResponse {  
       list:{entitlement_override:EntitlementOverride}[];
       
       next_offset?:string;
    }
    export interface ListEntitlementOverrideForSubscriptionInputParam {
      [key : string]: any;  
      /**
        * @description The number of resources to be returned.

        */
        
      limit?:number;
       
      /**
        * @description Determines your position in the list for pagination. To ensure that the next page is retrieved correctly, always set &#x27;offset&#x27; to the value of &#x27;next_offset&#x27; obtained in the previous iteration of the API call.

        */
        
      offset?:string;
       
      embed?:string;
       
      include_drafts?:boolean;
       
      include_scheduled_overrides?:boolean;
    }
    
  }
}