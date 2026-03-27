///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface UsageSummary {
    subscription_id: string;
    feature_id: string;
    aggregated_value: string;
    aggregated_from: number;
    aggregated_to: number;
  }

  export namespace UsageSummary {
    export class UsageSummaryResource {
      retrieveUsageSummaryForSubscription(
        subscription_id: string,
        input: RetrieveUsageSummaryForSubscriptionInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<
        ChargebeeResponse<RetrieveUsageSummaryForSubscriptionResponse>
      >;
    }

    export interface RetrieveUsageSummaryForSubscriptionResponse {
      list: { usage_summary: UsageSummary }[];
      next_offset?: string;
    }

    // REQUEST PARAMS
    //---------------

    export interface RetrieveUsageSummaryForSubscriptionInputParam {
      limit?: number;
      offset?: string;
      feature_id: string;
      window_size?: 'month' | 'week' | 'day' | 'hour' | 'minute';
      timeframe_start?: number;
      timeframe_end?: number;
    }
  }
}
