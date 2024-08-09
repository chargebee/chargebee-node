///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'Chargebee' {
  export interface Event {
    id: string;

    occurred_at: number;

    source: Source;

    user?: string;

    webhook_status:
      | 'not_configured'
      | 'scheduled'
      | 'succeeded'
      | 're_scheduled'
      | 'failed'
      | 'skipped'
      | 'not_applicable';

    webhook_failure_reason?: string;

    webhooks?: Event.Webhook[];

    event_type?: EventType;

    api_version?: ApiVersion;

    origin_user?: string;
  }
  export namespace Event {
    export class EventResource {
      list(
        input?: ListInputParam,
      ): ChargebeeRequest<ChargebeeResponse<ListResponse>>;

      retrieve(
        event_id: string,
      ): ChargebeeRequest<ChargebeeResponse<RetrieveResponse>>;
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
        | 'not_applicable';
    }
    // REQUEST PARAMS
    //---------------

    export interface ListInputParam {
      limit?: number;
      offset?: string;
      /**
       * @deprecated Please refer API docs to use other attributes
       */

      start_time?: number;
      /**
       * @deprecated Please refer API docs to use other attributes
       */

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
