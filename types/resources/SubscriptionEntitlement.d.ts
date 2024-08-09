///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface SubscriptionEntitlement {
    subscription_id: string;

    feature_id?: string;

    feature_name?: string;

    feature_unit?: string;

    feature_type?: string;

    value?: string;

    name?: string;

    is_overridden: boolean;

    is_enabled: boolean;

    effective_from?: number;

    schedule_status?: 'activated' | 'scheduled' | 'failed';

    expires_at?: number;

    components?: SubscriptionEntitlement.Component;
  }
  export namespace SubscriptionEntitlement {
    export class SubscriptionEntitlementResource {
      subscriptionEntitlementsForSubscription(
        subscription_id: string,
        input?: SubscriptionEntitlementsForSubscriptionInputParam,
      ): ChargebeeRequest<
        ChargebeeResponse<SubscriptionEntitlementsForSubscriptionResponse>
      >;

      setSubscriptionEntitlementAvailability(
        subscription_id: string,
        input: SetSubscriptionEntitlementAvailabilityInputParam,
      ): ChargebeeRequest<
        ChargebeeResponse<SetSubscriptionEntitlementAvailabilityResponse>
      >;
    }
    export interface SubscriptionEntitlementsForSubscriptionResponse {
      list: { subscription_entitlement: SubscriptionEntitlement }[];

      next_offset?: string;
    }

    export interface SetSubscriptionEntitlementAvailabilityResponse {
      subscription_entitlement: SubscriptionEntitlement;
    }

    export interface Component {
      entitlement_overrides?: EntitlementOverride;
    }
    // REQUEST PARAMS
    //---------------

    export interface SubscriptionEntitlementsForSubscriptionInputParam {
      limit?: number;
      offset?: string;
      /**
       * @deprecated Please refer API docs to use other attributes
       */

      include_drafts?: boolean;
      /**
       * @deprecated Please refer API docs to use other attributes
       */

      embed?: string;
      /**
       * @deprecated Please refer API docs to use other attributes
       */

      include_scheduled_overrides?: boolean;
    }
    export interface SetSubscriptionEntitlementAvailabilityInputParam {
      is_enabled: boolean;
      subscription_entitlements?: SubscriptionEntitlementsSetSubscriptionEntitlementAvailabilityInputParam[];
    }
    export interface SubscriptionEntitlementsSetSubscriptionEntitlementAvailabilityInputParam {
      feature_id: string;
    }
  }
}
