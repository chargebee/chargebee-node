///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface WebhookEndpoint {
    id: string;
    name: string;
    url: string;
    send_card_resource?: boolean;
    disabled: boolean;
    primary_url: boolean;
    api_version: 'v1' | 'v2';
    chargebee_response_schema_type?: ChargebeeResponseSchemaTypeEnum;
    enabled_events?: EventTypeEnum[];
  }

  export namespace WebhookEndpoint {
    export class WebhookEndpointResource {
      create(
        input: CreateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateResponse>>;

      update(
        webhook_endpoint_id: string,
        input?: UpdateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<UpdateResponse>>;

      retrieve(
        webhook_endpoint_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RetrieveResponse>>;

      delete(
        webhook_endpoint_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<DeleteResponse>>;

      list(
        input?: ListInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ListResponse>>;
    }

    export interface CreateResponse {
      webhook_endpoint: WebhookEndpoint;
    }

    export interface UpdateResponse {
      webhook_endpoint: WebhookEndpoint;
    }

    export interface RetrieveResponse {
      webhook_endpoint: WebhookEndpoint;
    }

    export interface DeleteResponse {
      webhook_endpoint: WebhookEndpoint;
    }

    export interface ListResponse {
      list: { webhook_endpoint: WebhookEndpoint }[];
      next_offset?: string;
    }

    // REQUEST PARAMS
    //---------------

    export interface CreateInputParam {
      name: string;
      api_version?: 'v1' | 'v2';
      url: string;
      primary_url?: boolean;
      disabled?: boolean;
      basic_auth_password?: string;
      basic_auth_username?: string;
      send_card_resource?: boolean;
      chargebee_response_schema_type?: ChargebeeResponseSchemaTypeEnum;
      enabled_events?: EventTypeEnum[];
    }
    export interface UpdateInputParam {
      name?: string;
      api_version?: 'v1' | 'v2';
      url?: string;
      primary_url?: boolean;
      send_card_resource?: boolean;
      basic_auth_password?: string;
      basic_auth_username?: string;
      disabled?: boolean;
      enabled_events?: EventTypeEnum[];
    }
    export interface ListInputParam {
      limit?: number;
      offset?: string;
    }
  }
}
