///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface AppliedRule {
    id: string;
    version?: number;
    name?: string;
    description?: string;
    evaluation_result?: boolean;
    error_message?: string;
    actions?: any;
  }
}
