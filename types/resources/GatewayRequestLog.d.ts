///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface GatewayRequestLog {
    log_id?: string;
    url?: string;
    status_code?: string;
    method?: string;
    request_body?: string;
    response_body?: string;
    request_headers?: string;
    response_headers?: string;
    gateway?: string;
    customer_handle?: string;
    invoice_handle?: string;
    transaction_handle?: string;
    payment_method_handle?: string;
    gateway_credential_handle?: string;
    payment_attempt_handle?: string;
    payment_intent_handle?: string;
    payment_method_name?: string;
    operation_name?: string;
    operation_type?: string;
    action_type?: string;
    source?: string;
    trace_id_hash?: string;
    invocation_time?: number;
    response_received_at?: number;
    response_time?: number;
  }

  export namespace GatewayRequestLog {
    export class GatewayRequestLogResource {
      list(
        input?: ListInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ListResponse>>;

      retrieve(
        gateway_request_log_log_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RetrieveResponse>>;
    }

    export interface ListResponse {
      list: { gateway_request_log: GatewayRequestLog }[];
      next_offset?: string;
    }

    export interface RetrieveResponse {
      gateway_request_log: GatewayRequestLog;
    }

    // REQUEST PARAMS
    //---------------

    export interface ListInputParam {
      limit?: number;
      offset?: string;
      log_id?: filter.String;
      gateway?: filter.String;
      status_code?: filter.String;
      method?: filter.String;
      url?: filter.String;
      customer_handle?: filter.String;
      invoice_handle?: filter.String;
      transaction_handle?: filter.String;
      payment_method_handle?: filter.String;
      gateway_credential_handle?: filter.String;
      payment_attempt_handle?: filter.String;
      payment_intent_handle?: filter.String;
      operation_name?: filter.String;
      operation_type?: filter.String;
      source?: filter.String;
      invocation_time?: filter.Timestamp;
      response_received_at?: filter.Timestamp;
      'sort_by[asc]'?: string;
      'sort_by[desc]'?: string;
    }
  }
}
