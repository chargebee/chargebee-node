///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface GroupByRecommendation {
    attribute_name: string;
    rank: number;
    reason: string;
  }
}
