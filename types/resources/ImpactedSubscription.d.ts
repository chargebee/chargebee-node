///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface ImpactedSubscription {
    

    count?:number;

    download?:ImpactedSubscription.Download;

    subscription_ids?:any[];

  }
  export namespace ImpactedSubscription {
    
    
    export interface Download {  
      download_url:string;
       
      valid_till:number;
       
      mime_type?:string;
    }
  }
}