///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface RetrySegment {
    id: string;
    name?: string;
    invoice_id?: string;
    enabled: boolean;
    priority?: number;
    condition_logic?: 'and' | 'or';
    criteria?: any;
    retry_settings?: any;
  }

  export namespace RetrySegment {
    export class RetrySegmentResource {
      retrieve(
        retry_segment_id: string,
        input?: RetrieveInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RetrieveResponse>>;
    }

    export interface RetrieveResponse {
      retry_segment: RetrySegment;
    }

    // REQUEST PARAMS
    //---------------

    export interface RetrieveInputParam {
      invoice_id?: string;
    }
  }
}
