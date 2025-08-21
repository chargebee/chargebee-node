///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface ImpactedItem {
    

    count?:number;

    download?:ImpactedItem.Download;

    items?:any[];

  }
  export namespace ImpactedItem {
    
    
    export interface Download {  
      download_url:string;
       
      valid_till:number;
       
      mime_type?:string;
    }
  }
}