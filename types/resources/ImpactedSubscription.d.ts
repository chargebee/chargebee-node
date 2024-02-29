///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface ImpactedSubscription {
    
    /**
      * @description The total count of affected subscriptions.

      */
    
    count?:number;
    
    /**
      * @description The impacted subscription IDs. This list contains up to 1,000 IDs. The complete list of subscription IDs is in the &#x60;download&#x60; resource, which can store up to 100,000 IDs.

      */
    
    subscription_ids?:any[];
    
    /**
      * @description This [download](downloads) resource contains the impacted subscription IDs. These IDs are in a JSON array in the file at &#x60;download.url&#x60; until &#x60;download.valid_till&#x60;. The file at this URL stores up to 100,000 subscription IDs. [Contact Support](https://support.chargebee.com/support/home) to increase this limit for your Chargebee site.

      */
    
    download?:ImpactedSubscription.Download;
  }
  export namespace ImpactedSubscription {
    
    
    export interface Download {  
         /**
          * @description The download URL for the file.

          */
       
      download_url:string;
       
         /**
          * @description The expiration time for the &#x60;download_url&#x60;.

          */
       
      valid_till:number;
       
         /**
          * @description The [media type](https://en.wikipedia.org/wiki/Media_type) of the file.

          */
       
      mime_type?:string;
    }
  }
}