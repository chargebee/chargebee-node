///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface Rule {
    id: string;
    namespace: string;
    rule_name: string;
    rule_order?: number;
    status: 'active' | 'disabled';
    conditions?: string;
    outcome?: string;
    deleted: boolean;
    created_at: number;
    modified_at: number;
  }

  export namespace Rule {
    export class RuleResource {
      retrieve(
        rule_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RetrieveResponse>>;
    }

    export interface RetrieveResponse {
      rule: Rule;
    }

    // REQUEST PARAMS
    //---------------
  }
}
