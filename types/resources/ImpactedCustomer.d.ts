///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface ImpactedCustomer {
    

    action_type?:string;

    download?:ImpactedCustomer.Download;

  }
  export namespace ImpactedCustomer {
    
    
    export interface Download {  
      download_url:string;
       
      valid_till:number;
       
      mime_type?:string;
    }
  }
}