///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface GroupByAttribute {
    attribute_name: string;
    rank: number;
    coverage_percent: number;
    cardinality: number;
    remaining_value_count: number;
    warning: boolean;
    sample_values?: string[];
    warning_reasons?: WarningReasonEnum[];
  }
}
