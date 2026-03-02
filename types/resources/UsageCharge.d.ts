///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface UsageCharge {
    subscription_id: string;
    feature_id: string;
    included_usage?: string;
    total_usage?: string;
    on_demand_usage?: string;
    metered_item_price_id?: string;
    amount?: string;
    currency_code?: string;
    usage_from: number;
    usage_to: number;
  }

  export namespace UsageCharge {
    export class UsageChargeResource {
      /**
       * @deprecated This method is deprecated and will be removed in a future version.
       */

      retrieveUsageChargesForSubscription(
        subscription_id: string,
        input?: RetrieveUsageChargesForSubscriptionInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<
        ChargebeeResponse<RetrieveUsageChargesForSubscriptionResponse>
      >;
    }

    export interface RetrieveUsageChargesForSubscriptionResponse {
      list: { usage_charge: UsageCharge }[];
      next_offset?: string;
    }

    // REQUEST PARAMS
    //---------------

    export interface RetrieveUsageChargesForSubscriptionInputParam {
      limit?: number;
      offset?: string;
      feature_id?: filter.String;
    }
  }
}
