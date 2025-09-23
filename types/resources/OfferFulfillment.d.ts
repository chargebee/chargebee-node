///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface OfferFulfillment {
    id: string;
    personalized_offer_id: string;
    option_id: string;
    processing_type:
      | 'billing_update'
      | 'checkout'
      | 'url_redirect'
      | 'webhook'
      | 'email';
    status: 'in_progress' | 'completed' | 'failed';
    redirect_url?: string;
    failed_at?: number;
    created_at: number;
    completed_at?: number;
    error?: OfferFulfillment.Error;
  }

  export namespace OfferFulfillment {
    export class OfferFulfillmentResource {
      offerFulfillments(
        input: OfferFulfillmentsInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<OfferFulfillmentsResponse>>;

      offerFulfillmentsGet(
        offer_fulfillment_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<OfferFulfillmentsGetResponse>>;

      offerFulfillmentsUpdate(
        offer_fulfillment_id: string,
        input: OfferFulfillmentsUpdateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<OfferFulfillmentsUpdateResponse>>;
    }

    export interface OfferFulfillmentsResponse {
      offer_fulfillment: OfferFulfillment;
      hosted_page?: HostedPage;
    }

    export interface OfferFulfillmentsGetResponse {
      offer_fulfillment: OfferFulfillment;
    }

    export interface OfferFulfillmentsUpdateResponse {
      offer_fulfillment: OfferFulfillment;
    }

    export interface Error {
      code:
        | 'billing_update_failed'
        | 'checkout_abandoned'
        | 'external_fulfillment_failed'
        | 'internal_error'
        | 'fulfillment_expired';
      message: string;
    }
    // REQUEST PARAMS
    //---------------

    export interface OfferFulfillmentsInputParam {
      personalized_offer_id: string;
      option_id: string;
    }
    export interface OfferFulfillmentsUpdateInputParam {
      id: string;
      status: 'completed' | 'failed';
      failure_reason?: string;
    }
  }
}
