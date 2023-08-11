///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface Download {
    
    /**
      * @description The URL at which the file is available for download.

      */
    
    download_url:string;
    
    /**
      * @description The time until which the &#x60;download_url&#x60; is valid.

      */
    
    valid_till:number;
    
    /**
      * @description The [media type](https://en.wikipedia.org/wiki/Media_type) of the file.

      */
    
    mime_type?:string;
  }
}