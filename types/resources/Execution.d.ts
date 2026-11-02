///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface Execution {
    status: 'success' | 'failed';
    created_at: number;
    result?: any;
    error_detail?: any;
    revision_version?: number;
  }
}
