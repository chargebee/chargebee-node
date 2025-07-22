///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface Event {
    id: string;
    occurred_at: number;
    source: SourceEnum;
    user?: string;
    webhook_status:
      | 'not_configured'
      | 'scheduled'
      | 'succeeded'
      | 're_scheduled'
      | 'failed'
      | 'skipped'
      | 'not_applicable'
      | 'disabled';
    webhook_failure_reason?: string;
    webhooks?: Event.Webhook[];
    event_type?: EventTypeEnum;
    api_version?: ApiVersionEnum;
    content: any;
    origin_user?: string;
  }

  export namespace Event {
    export class EventResource {
      list(
        input?: ListInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ListResponse>>;

      retrieve(
        event_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RetrieveResponse>>;
    }

    export interface ListResponse {
      list: { event: Event }[];
      next_offset?: string;
    }

    export interface RetrieveResponse {
      event: Event;
    }

    export interface Webhook {
      id: string;
      webhook_status:
        | 'not_configured'
        | 'scheduled'
        | 'succeeded'
        | 're_scheduled'
        | 'failed'
        | 'skipped'
        | 'not_applicable'
        | 'disabled';
    }
    // REQUEST PARAMS
    //---------------

    export interface ListInputParam {
      limit?: number;
      offset?: string /**
       * @deprecated Please refer API docs to use other attributes
       */;

      start_time?: number /**
       * @deprecated Please refer API docs to use other attributes
       */;

      end_time?: number;
      id?: filter.String;
      webhook_status?: filter.Enum;
      event_type?: filter.Enum;
      source?: filter.Enum;
      occurred_at?: filter.Timestamp;
      'sort_by[asc]'?: string;
      'sort_by[desc]'?: string;
    }
  }
}
