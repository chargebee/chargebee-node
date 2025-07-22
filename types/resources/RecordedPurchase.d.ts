///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface RecordedPurchase {
    id: string;
    customer_id: string;
    app_id: string;
    source: 'apple_app_store' | 'google_play_store';
    status: 'in_process' | 'completed' | 'failed' | 'ignored';
    omnichannel_transaction_id?: string;
    created_at: number;
    resource_version?: number;
    linked_omnichannel_subscriptions?: RecordedPurchase.LinkedOmnichannelSubscription[];
    error_detail?: RecordedPurchase.ErrorDetail;
  }

  export namespace RecordedPurchase {
    export class RecordedPurchaseResource {
      create(
        input: CreateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateResponse>>;

      retrieve(
        recorded_purchase_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RetrieveResponse>>;
    }

    export interface CreateResponse {
      recorded_purchase: RecordedPurchase;
      customer: Customer;
    }

    export interface RetrieveResponse {
      recorded_purchase: RecordedPurchase;
    }

    export interface LinkedOmnichannelSubscription {
      omnichannel_subscription_id?: string;
    }
    export interface ErrorDetail {
      error_message?: string;
    }
    // REQUEST PARAMS
    //---------------

    export interface CreateInputParam {
      app_id: string;
      customer?: CustomerCreateInputParam;
      apple_app_store?: AppleAppStoreCreateInputParam;
      google_play_store?: GooglePlayStoreCreateInputParam;
      omnichannel_subscription?: OmnichannelSubscriptionCreateInputParam;
    }
    export interface CustomerCreateInputParam {
      id: string;
    }
    export interface GooglePlayStoreCreateInputParam {
      purchase_token?: string;
    }
    export interface AppleAppStoreCreateInputParam {
      transaction_id?: string;
      receipt?: string;
      product_id?: string;
    }
    export interface OmnichannelSubscriptionCreateInputParam {
      id?: string;
    }
  }
}
