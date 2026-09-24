///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface AppliedBusinessRule {
    handle: string;
    entity_type: 'cpq_quote';
    entity_id: number;
    entity_version?: number;
    rule_id: string;
    version: number;
    created_at: number;
    modified_at: number;
  }
}
