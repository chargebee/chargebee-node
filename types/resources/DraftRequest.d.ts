///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface DraftRequest {
    id: string;
    path_param?: string;
    request_uri?: string;
    operation_id: string;
    status: 'open' | 'executed';
    executed_at?: number;
    created_at: number;
    resource_version?: number;
    updated_at: number;
    current_revision?: DraftRequest.DraftRevision;
    validations?: DraftRequest.Validation[];
    has_comments?: boolean;
    has_citations?: boolean;
    executions?: DraftRequest.Execution[];
  }

  export namespace DraftRequest {
    export interface DraftRevision {
      version: number;
      created_at: number;
      payload?: object;
    }
    export interface Validation {
      category?: string;
      level?: string;
      message?: string;
      param_name?: string;
      type?: string;
    }
    export interface Execution {
      status: 'success' | 'failed';
      created_at: number;
      result?: object;
      error_detail?: object;
      revision_version?: number;
    }
    // REQUEST PARAMS
    //---------------
  }
}
