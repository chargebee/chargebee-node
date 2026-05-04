///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface FilterCondition {
    field: 'plan_price_id';
    operator: 'equals' | 'not_equals';
    value: string;
  }
}
