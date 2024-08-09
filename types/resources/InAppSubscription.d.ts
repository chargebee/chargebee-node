///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface InAppSubscription {
    app_id: string;

    subscription_id: string;

    customer_id?: string;

    plan_id?: string;

    store_status?: 'in_trial' | 'active' | 'cancelled' | 'paused';

    invoice_id?: string;
  }
  export namespace InAppSubscription {
    export class InAppSubscriptionResource {
      processReceipt(
        in_app_subscription_app_id: string,
        input: ProcessReceiptInputParam,
      ): ChargebeeRequest<ChargebeeResponse<ProcessReceiptResponse>>;

      importReceipt(
        in_app_subscription_app_id: string,
        input: ImportReceiptInputParam,
      ): ChargebeeRequest<ChargebeeResponse<ImportReceiptResponse>>;

      importSubscription(
        in_app_subscription_app_id: string,
        input: ImportSubscriptionInputParam,
      ): ChargebeeRequest<ChargebeeResponse<ImportSubscriptionResponse>>;

      retrieveStoreSubs(
        in_app_subscription_app_id: string,
        input: RetrieveStoreSubsInputParam,
      ): ChargebeeRequest<ChargebeeResponse<RetrieveStoreSubsResponse>>;
    }
    export interface ProcessReceiptResponse {
      in_app_subscription: InAppSubscription;
    }

    export interface ImportReceiptResponse {
      in_app_subscriptions: InAppSubscription[];
    }

    export interface ImportSubscriptionResponse {
      in_app_subscription: InAppSubscription;
    }

    export interface RetrieveStoreSubsResponse {
      in_app_subscriptions: InAppSubscription[];
    }

    // REQUEST PARAMS
    //---------------

    export interface ProcessReceiptInputParam {
      receipt: string;
      product?: ProductProcessReceiptInputParam;
      customer?: CustomerProcessReceiptInputParam;
    }
    export interface ImportReceiptInputParam {
      receipt: string;
      product?: ProductImportReceiptInputParam;
      customer?: CustomerImportReceiptInputParam;
    }
    export interface ImportSubscriptionInputParam {
      subscription?: SubscriptionImportSubscriptionInputParam;
      customer?: CustomerImportSubscriptionInputParam;
    }
    export interface RetrieveStoreSubsInputParam {
      receipt: string;
    }
    export interface CustomerProcessReceiptInputParam {
      id?: string;

      email?: string;

      first_name?: string;

      last_name?: string;
    }
    export interface ProductProcessReceiptInputParam {
      id: string;

      currency_code: string;

      price: number;

      name?: string;

      price_in_decimal?: string;

      period?: string;

      period_unit?: string;
    }

    export interface CustomerImportReceiptInputParam {
      id?: string;

      email?: string;
    }
    export interface ProductImportReceiptInputParam {
      currency_code: string;
    }

    export interface CustomerImportSubscriptionInputParam {
      id?: string;

      email?: string;
    }
    export interface SubscriptionImportSubscriptionInputParam {
      id: string;

      started_at: number;

      term_start: number;

      term_end: number;

      product_id: string;

      currency_code: string;

      transaction_id: string;

      is_trial?: boolean;
    }
  }
}
