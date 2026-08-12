///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface OmnichannelSubscriptionItemMetric {
    customer_id?: string;
    omnichannel_subscription_id?: string;
    omnichannel_subscription_item_id?: string;
    item_id_at_source: string;
    mrr_currency?: string;
    mrr_units?: number;
    mrr_nanos?: number;
    effective_from: number;
    calculated_at?: number;
    created_at: number;
    resource_version?: number;
  }
}
