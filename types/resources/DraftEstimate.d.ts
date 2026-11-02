///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface DraftEstimate {
    status: 'success' | 'failed';
    http_status?: number;
    created_at: number;
    result?: any;
    error_detail?: any;
    revision_version?: number;
  }
}
