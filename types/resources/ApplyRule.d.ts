///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface ApplyRule {
    evaluate?: boolean;
    rule_id?: string;
    ruleset_id?: string;
    skip_failed_rules?: boolean;
    structured_expression?: any;
    context?: any;
    rules?: ApplyRule.Rule[];
  }

  export namespace ApplyRule {
    export interface Rule {
      id: string;
      version?: number;
      name?: string;
      description?: string;
      evaluation_result?: boolean;
      error_message?: string;
      actions?: any[];
    }
    // REQUEST PARAMS
    //---------------
  }
}
