///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface CollectionsPaymentPromise {
    id: string;
    customer_id: string;
    invoice_id: string;
    status: 'active' | 'fulfilled' | 'broken' | 'cancelled';
    reason?: string;
    promised_by?: string;
    promised_on: number;
    created_at: number;
    updated_at: number;
    resource_version?: number;
  }

  export namespace CollectionsPaymentPromise {
    export class CollectionsPaymentPromiseResource {
      retrieve(
        collections_payment_promise_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RetrieveResponse>>;

      listCollectionsPaymentPromises(
        input?: ListCollectionsPaymentPromisesInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ListCollectionsPaymentPromisesResponse>>;

      createCollectionsPaymentPromise(
        input: CreateCollectionsPaymentPromiseInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateCollectionsPaymentPromiseResponse>>;

      updateCollectionsPaymentPromise(
        collections_payment_promise_id: string,
        input?: UpdateCollectionsPaymentPromiseInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<UpdateCollectionsPaymentPromiseResponse>>;

      cancel(
        collections_payment_promise_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CancelResponse>>;
    }

    export interface RetrieveResponse {
      collections_payment_promise: CollectionsPaymentPromise;
    }

    export interface ListCollectionsPaymentPromisesResponse {
      list: { collections_payment_promise: CollectionsPaymentPromise }[];
      next_offset?: string;
    }

    export interface CreateCollectionsPaymentPromiseResponse {
      collections_payment_promises: CollectionsPaymentPromise[];
    }

    export interface UpdateCollectionsPaymentPromiseResponse {
      collections_payment_promise: CollectionsPaymentPromise;
    }

    export interface CancelResponse {
      collections_payment_promise: CollectionsPaymentPromise;
    }

    // REQUEST PARAMS
    //---------------

    export interface ListCollectionsPaymentPromisesInputParam {
      limit?: number;
      offset?: string;
      customer_id?: filter.String;
      invoice_id?: filter.String;
      status?: filter.Enum;
    }
    export interface CreateCollectionsPaymentPromiseInputParam {
      customer_id: string;
      invoice_id?: string;
      amount: number;
      currency_code?: string;
      promised_on: number;
      reason?: string;
      promised_by?: string;
    }
    export interface UpdateCollectionsPaymentPromiseInputParam {
      promised_on?: number;
      reason?: string;
      promised_by?: string;
    }
  }
}
