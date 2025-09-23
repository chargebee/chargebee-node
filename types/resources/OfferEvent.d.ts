///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface OfferEvent {}

  export namespace OfferEvent {
    export class OfferEventResource {
      offerEvents(
        input: OfferEventsInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<OfferEventsResponse>>;
    }

    export interface OfferEventsResponse {}

    // REQUEST PARAMS
    //---------------

    export interface OfferEventsInputParam {
      personalized_offer_id: string;
      type: 'viewed' | 'dismissed';
    }
  }
}
