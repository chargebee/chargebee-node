///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface UsageEvent {
    subscription_id: string;
    deduplication_id: string;
    usage_timestamp: number;
    properties: any;
  }

  export namespace UsageEvent {
    export class UsageEventResource {
      create(
        input: CreateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateResponse>>;

      batchIngest(
        input: BatchIngestInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<BatchIngestResponse>>;
    }

    export interface CreateResponse {
      usage_event: UsageEvent;
    }

    export interface BatchIngestResponse {
      batch_id: string;
      failed_events: any[];
    }

    // REQUEST PARAMS
    //---------------

    export interface CreateInputParam {
      deduplication_id: string;
      subscription_id: string;
      usage_timestamp: number;
      properties: any;
    }
    export interface BatchIngestInputParam {
      events?: EventsBatchIngestInputParam[];
    }
    export interface EventsBatchIngestInputParam {
      deduplication_id: string;
      subscription_id: string;
      usage_timestamp: number;
      properties: any;
    }
  }
}
