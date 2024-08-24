///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface EntitlementOverride {
    id: string;
    entity_id?: string;
    entity_type?: string;
    feature_id?: string;
    feature_name?: string;
    value?: string;
    name?: string;
    expires_at?: number;
    effective_from?: number;
    schedule_status?: 'activated' | 'scheduled' | 'failed';
  }

  export namespace EntitlementOverride {
    export class EntitlementOverrideResource {
      addEntitlementOverrideForSubscription(
        subscription_id: string,
        input: AddEntitlementOverrideForSubscriptionInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<
        ChargebeeResponse<AddEntitlementOverrideForSubscriptionResponse>
      >;

      listEntitlementOverrideForSubscription(
        subscription_id: string,
        input?: ListEntitlementOverrideForSubscriptionInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<
        ChargebeeResponse<ListEntitlementOverrideForSubscriptionResponse>
      >;
    }

    export interface AddEntitlementOverrideForSubscriptionResponse {
      entitlement_override: EntitlementOverride;
    }

    export interface ListEntitlementOverrideForSubscriptionResponse {
      list: { entitlement_override: EntitlementOverride }[];
      next_offset?: string;
    }

    // REQUEST PARAMS
    //---------------

    export interface AddEntitlementOverrideForSubscriptionInputParam {
      action?: Action;
      entitlement_overrides?: EntitlementOverridesAddEntitlementOverrideForSubscriptionInputParam[];
    }
    export interface ListEntitlementOverrideForSubscriptionInputParam {
      limit?: number;
      offset?: string /**
       * @deprecated Please refer API docs to use other attributes
       */;

      embed?: string /**
       * @deprecated Please refer API docs to use other attributes
       */;

      include_drafts?: boolean /**
       * @deprecated Please refer API docs to use other attributes
       */;

      include_scheduled_overrides?: boolean;
    }
    export interface EntitlementOverridesAddEntitlementOverrideForSubscriptionInputParam {
      feature_id: string;
      value?: string;
      expires_at?: number;
      effective_from?: number;
    }
  }
}
