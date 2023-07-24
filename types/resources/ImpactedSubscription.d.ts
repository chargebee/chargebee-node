///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface ImpactedSubscription {
    count?:number;
    subscription_ids?:any[];
    download?:ImpactedSubscription.Download;
  }
  export namespace ImpactedSubscription {
    
    
    export interface Download {
      download_url?:string;
      valid_till?:number;
      mime_type?:string;
    }
  }
}