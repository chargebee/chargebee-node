///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface OmnichannelSubscription {
    id: string;
    id_at_source: string;
    app_id: string;
    source: 'apple_app_store';
    customer_id?: string;
    created_at: number;
    omnichannel_subscription_items: OmnichannelSubscription.OmnichannelSubscriptionItem[];
  }

  export namespace OmnichannelSubscription {
    export class OmnichannelSubscriptionResource {
      retrieve(
        omnichannel_subscription_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RetrieveResponse>>;

      list(
        input?: ListInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ListResponse>>;

      omnichannelTransactionsForOmnichannelSubscription(
        omnichannel_subscription_id: string,
        input?: OmnichannelTransactionsForOmnichannelSubscriptionInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<
        ChargebeeResponse<OmnichannelTransactionsForOmnichannelSubscriptionResponse>
      >;
    }

    export interface RetrieveResponse {
      omnichannel_subscription: OmnichannelSubscription;
    }

    export interface ListResponse {
      list: { omnichannel_subscription: OmnichannelSubscription }[];
      next_offset?: string;
    }

    export interface OmnichannelTransactionsForOmnichannelSubscriptionResponse {
      list: { omnichannel_transaction: OmnichannelTransaction }[];
      next_offset?: string;
    }

    export interface OmnichannelSubscriptionItem {
      id: string;
      id_at_source: string;
      status: 'active' | 'expired' | 'cancelled';
      current_term_start?: number;
      current_term_end?: number;
      expired_at?: number;
      expiration_reason?: 'billing_error' | 'product_not_available' | 'other';
      cancelled_at?: number;
      cancellation_reason?:
        | 'customer_cancelled'
        | 'customer_did_not_consent_to_price_increase';
    }
    // REQUEST PARAMS
    //---------------

    export interface ListInputParam {
      limit?: number;
      offset?: string;
    }
    export interface OmnichannelTransactionsForOmnichannelSubscriptionInputParam {
      limit?: number;
      offset?: string;
    }
  }
}
