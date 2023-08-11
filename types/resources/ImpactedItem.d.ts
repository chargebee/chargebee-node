///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface ImpactedItem {
    
    /**
      * @description The total number of items that have been impacted.

      */
    
    count?:number;
    
    /**
      * @description The list of items that have been impacted. The objects in this array have the following keys:

* &#x60;id&#x60;: (string, max chars &#x3D; 100) The [unique identifier](/docs/api/items#item_id) for the item.
* &#x60;type&#x60;: (enumerated string) The [type](/docs/api/items#item_type) of the item.

This list can contain a maximum of 1,000 items. The full list of items is available in &#x60;download&#x60;.

      */
    
    items?:any[];
    
    /**
      * @description The [download](/docs/api/downloads) resource containing all the impacted items. The list of items is available as a JSON array in the file at &#x60;download.url&#x60; until &#x60;download.valid_till&#x60;.

      */
    
    download?:ImpactedItem.Download;
  }
  export namespace ImpactedItem {
    
    
    export interface Download {  
         /**
          * @description The URL at which the file is available for download.

          */
       
      download_url?:string;
       
         /**
          * @description The time until which the &#x60;download_url&#x60; is valid.

          */
       
      valid_till?:number;
       
         /**
          * @description The [media type](https://en.wikipedia.org/wiki/Media_type) of the file.

          */
       
      mime_type?:string;
    }
  }
}