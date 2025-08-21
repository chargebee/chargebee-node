///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface UsageEvent {
    

    subscription_id:string;

    deduplication_id:string;

    usage_timestamp:number;

    properties:object;

  }
  export namespace UsageEvent {
    export class UsageEventResource {  
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
       
      batch_ingest(input:BatchIngestInputParam):ChargebeeRequest<BatchIngestResponse>;
    }
    export interface CreateResponse {  
       usage_event:UsageEvent;
    }
    export interface CreateInputParam {
       
      deduplication_id:string;
       
      subscription_id:string;
       
      usage_timestamp:number;
       
      properties:object;
    }
    export interface BatchIngestResponse {  
       batch_id:string;
       
       failed_events:any[];
    }
    export interface BatchIngestInputParam {
       
      events:{deduplication_id:string,properties:object,subscription_id:string,usage_timestamp:number}[];
    }
    
  }
}