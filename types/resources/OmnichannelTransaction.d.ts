///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface OmnichannelTransaction {
    id: string;
    id_at_source: string;
    app_id: string;
    price_currency?: string;
    price_units?: number;
    price_nanos?: number;
    type: 'purchase' | 'renewal';
    transacted_at?: number;
    created_at: number;
    resource_version?: number;
    linked_omnichannel_subscriptions?: OmnichannelTransaction.LinkedOmnichannelSubscription[];
    linked_omnichannel_one_time_orders?: OmnichannelTransaction.LinkedOmnichannelOneTimeOrder[];
  }

  export namespace OmnichannelTransaction {
    export interface LinkedOmnichannelSubscription {
      omnichannel_subscription_id?: string;
    }
    export interface LinkedOmnichannelOneTimeOrder {
      omnichannel_one_time_order_id?: string;
    }
    // REQUEST PARAMS
    //---------------
  }
}
