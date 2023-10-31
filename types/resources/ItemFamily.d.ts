///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface ItemFamily {
    [key : string] : any;
    /**
      * @description The identifier for the item family. It is unique and immutable.

      */
    
    id:string;
    
    /**
      * @description A unique display name for the item family. This is visible only in Chargebee and not to customers.

      */
    
    name:string;
    
    /**
      * @description Description of the item family. This is visible only in Chargebee and not to customers.

      */
    
    description?:string;
    
    /**
      * @description Status of the item family. \* active - The item family is active and can be used to create new items. \* deleted - The item family has been deleted and cannot be used to create new items. The &#x60;id&#x60; and &#x60;name&#x60; can be reused to create a new item family.

      */
    
    status?:'deleted' | 'active';
    
    /**
      * @description The version number of this resource. For every change made to the resource, &#x60;resource_version&#x60; is updated with a new timestamp in milliseconds.

      */
    
    resource_version?:number;
    
    /**
      * @description When the item family was last updated.

      */
    
    updated_at?:number;
    
    /**
      * @description The subscription channel this object originated from and is maintained in. \* app_store - The object data is synchronized with data from [in-app subscription(s)](https://apidocs.chargebee.com/docs/api/in_app_subscriptions) created in Apple App Store. Direct manipulation of this object via UI or API is disallowed. \* play_store - The object data is synchronized with data from [in-app subscription(s)](https://apidocs.chargebee.com/docs/api/in_app_subscriptions) created in Google Play Store. Direct manipulation of this object via UI or API is disallowed. \* web - The object was created (and is maintained) for the web channel directly in Chargebee via API or UI.

      */
    
    channel?:Channel;
  }
  export namespace ItemFamily {
    export class ItemFamilyResource {  
      /**
        * @description This endpoint creates an item family for your product line or service.

        */
      
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
       
      /**
        * @description This endpoint retrieves an item family based on the item family id.

        */
      
      retrieve(item_family_id:string):ChargebeeRequest<RetrieveResponse>;
       
      /**
        * @description Returns a list of item families satisfying **all** the conditions specified in the filter parameters below. The list is sorted by date of creation, in descending order.

        */
      
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
       
      /**
        * @description This endpoint updates the name and/or description of the item family.

        */
      
      update(item_family_id:string, input?:UpdateInputParam):ChargebeeRequest<UpdateResponse>;
       
      /**
        * @description Deletes an item family, marking its &#x60;status&#x60; as &#x60;deleted&#x60;. This is not allowed if there are &#x60;active&#x60; items under the item family. Once deleted, the &#x60;id&#x60; and &#x60;name&#x60; of the item family can be reused to create a new item family.

        */
      
      delete(item_family_id:string):ChargebeeRequest<DeleteResponse>;
    }
    export interface CreateResponse {  
       item_family:ItemFamily;
    }
    export interface CreateInputParam {
      [key : string] : any;  
      /**
        * @description The identifier for the item family. Must be unique and is immutable.

        */
       
      id:string;
       
      /**
        * @description The display name for the item family. Must be unique. This is visible only in Chargebee and not to customers.

        */
       
      name:string;
       
      /**
        * @description Description of the item family. This is visible only in Chargebee and not to customers.

        */
       
      description?:string;
    }
    export interface RetrieveResponse {  
       item_family:ItemFamily;
    }
    
    export interface ListResponse {  
      /**
        * @description Returns a list of item families satisfying **all** the conditions specified in the filter parameters below. The list is sorted by date of creation, in descending order.

        */
       
       list:{item_family:ItemFamily}[];
       
      /**
        * @description Returns a list of item families satisfying **all** the conditions specified in the filter parameters below. The list is sorted by date of creation, in descending order.

        */
       
       next_offset?:string;
    }
    export interface ListInputParam {
      [key : string]: any;  
      /**
        * @description Returns a list of item families satisfying **all** the conditions specified in the filter parameters below. The list is sorted by date of creation, in descending order.

        */
        
      limit?:number;
       
      /**
        * @description Returns a list of item families satisfying **all** the conditions specified in the filter parameters below. The list is sorted by date of creation, in descending order.

        */
        
      offset?:string;
       
      /**
        * @description Returns a list of item families satisfying **all** the conditions specified in the filter parameters below. The list is sorted by date of creation, in descending order.

        */
        
      id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Returns a list of item families satisfying **all** the conditions specified in the filter parameters below. The list is sorted by date of creation, in descending order.

        */
        
      name?:{is?:string,is_not?:string,starts_with?:string};
       
      /**
        * @description Returns a list of item families satisfying **all** the conditions specified in the filter parameters below. The list is sorted by date of creation, in descending order.

        */
        
      updated_at?:{after?:string,before?:string,between?:string,on?:string};
    }
    export interface UpdateResponse {  
       item_family:ItemFamily;
    }
    export interface UpdateInputParam {
      [key : string] : any;  
      /**
        * @description The display name for the item family. Must be unique. This is visible only in Chargebee and not to customers.

        */
       
      name?:string;
       
      /**
        * @description Description of the item family. This is visible only in Chargebee and not to customers.

        */
       
      description?:string;
    }
    export interface DeleteResponse {  
       item_family:ItemFamily;
    }
    
    
  }
}