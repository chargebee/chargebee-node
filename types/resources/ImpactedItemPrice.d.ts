///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface ImpactedItemPrice {
    
    count?:number;
    
    download?:ImpactedItemPrice.Download;
    
    item_prices?:any[];
  }
  export namespace ImpactedItemPrice {
    
    
    export interface Download {  
      download_url:string;
       
      valid_till:number;
       
      mime_type?:string;
    }
  }
}