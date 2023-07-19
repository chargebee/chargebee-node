declare module 'chargebee' {
  export interface ImpactedItem {
    
    count?:number;
    items?:any[];
    download?:ImpactedItem.Download;
  }
  export namespace ImpactedItem {
    
    
    export interface Download {
      download_url?:string;
      valid_till?:number;
      mime_type?:string;
    }
  }
}