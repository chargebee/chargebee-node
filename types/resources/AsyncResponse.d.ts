///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface AsyncResponse {
    api_version?: string;
    created_at?: number;
    completed_at?: number;
    status: 'success' | 'failed';
    request?: AsyncResponse.RequestAsyncApi;
    error_detail?: AsyncResponse.Error;
    result?: any;
  }

  export namespace AsyncResponse {
    export interface RequestAsyncApi {
      id: string;
      resource?: string;
      operation_type?: string;
      method?: string;
      uri?: string;
      idempotency_key?: string;
    }
    export interface Error {
      message?: string;
      type?: string;
      api_error_code?: string;
      error_code?: string;
      error_msg?: string;
      http_status_code?: string;
    }
    // REQUEST PARAMS
    //---------------
  }
}
