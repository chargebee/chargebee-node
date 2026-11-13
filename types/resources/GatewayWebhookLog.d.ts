///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface GatewayWebhookLog {
    webhook_id?: string;
    url?: string;
    method?: string;
    status_code?: string;
    gateway?: string;
    id_at_gateway?: string;
    customer_handle?: string;
    invoice_handle?: string;
    transaction_handle?: string;
    payment_method_handle?: string;
    gateway_credential_handle?: string;
    payment_attempt_handle?: string;
    payment_intent_handle?: string;
    payment_method_name?: string;
    request_body?: string;
    response_body?: string;
    request_headers?: string;
    response_headers?: string;
    received_at?: number;
    response_time?: number;
  }

  export namespace GatewayWebhookLog {
    export class GatewayWebhookLogResource {
      list(
        input?: ListInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ListResponse>>;

      retrieve(
        gateway_webhook_log_webhook_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RetrieveResponse>>;
    }

    export interface ListResponse {
      list: { gateway_webhook_log: GatewayWebhookLog }[];
      next_offset?: string;
    }

    export interface RetrieveResponse {
      gateway_webhook_log: GatewayWebhookLog;
    }

    // REQUEST PARAMS
    //---------------

    export interface ListInputParam {
      limit?: number;
      offset?: string;
      webhook_id?: filter.String;
      gateway?: filter.String;
      status_code?: filter.String;
      method?: filter.String;
      url?: filter.String;
      id_at_gateway?: filter.String;
      customer_handle?: filter.String;
      invoice_handle?: filter.String;
      transaction_handle?: filter.String;
      payment_method_handle?: filter.String;
      gateway_credential_handle?: filter.String;
      payment_attempt_handle?: filter.String;
      payment_intent_handle?: filter.String;
      received_at?: filter.Timestamp;
      'sort_by[asc]'?: string;
      'sort_by[desc]'?: string;
    }
  }
}
