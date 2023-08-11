///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface ImpactedSubscription {
    
    /**
      * @description The total number of subscriptions that have been impacted.

      */
    
    count?:number;
    
    /**
      * @description The list of IDs of the subscriptions that have been impacted. This list can contain a maximum of 1,000 IDs. The full list of subscription IDs is available in &#x60;download&#x60;.

      */
    
    subscription_ids?:any[];
    
    /**
      * @description The [download](/docs/api/downloads) resource containing all the impacted subscription IDs. The list of IDs is available as a JSON array in the file at &#x60;download.url&#x60; until &#x60;download.valid_till&#x60;.

      */
    
    download?:ImpactedSubscription.Download;
  }
  export namespace ImpactedSubscription {
    
    
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