///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface TaxWithheld {
    id:string;
    reference_number?:string;
    description?:string;
    date?:number;
    amount?:number;
    resource_version?:number;
    updated_at?:number;
  }
}