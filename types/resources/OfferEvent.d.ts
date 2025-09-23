///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface OfferEvent {
    

  }
  export namespace OfferEvent {
    export class OfferEventResource {  
      offer_events(input:OfferEventsInputParam):ChargebeeRequest<OfferEventsResponse>;
    }
    export interface OfferEventsResponse { 
    }
    export interface OfferEventsInputParam {
       
      personalized_offer_id:string;
       
      type:'viewed' | 'dismissed';
    }
    
  }
}