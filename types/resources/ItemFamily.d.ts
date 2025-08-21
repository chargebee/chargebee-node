///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface ItemFamily {
    [key : string] : any;

    id:string;

    name:string;

    description?:string;

    status?:'active' | 'deleted';

    resource_version?:number;

    updated_at?:number;

    channel?:Channel;

    business_entity_id?:string;

    deleted:boolean;

  }
  export namespace ItemFamily {
    export class ItemFamilyResource {  
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
       
      retrieve(item_family_id:string):ChargebeeRequest<RetrieveResponse>;
       
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
       
      update(item_family_id:string, input?:UpdateInputParam):ChargebeeRequest<UpdateResponse>;
       
      delete(item_family_id:string):ChargebeeRequest<DeleteResponse>;
    }
    export interface CreateResponse {  
       item_family:ItemFamily;
    }
    export interface CreateInputParam {
       
      id:string;
       
      name:string;
       
      description?:string;
       
      business_entity_id?:string;
    }
    export interface RetrieveResponse {  
       item_family:ItemFamily;
    }
    
    export interface ListResponse {  
       list:{item_family:ItemFamily}[];
       
       next_offset?:string;
    }
    export interface ListInputParam {
      [key : string]: any;  
      /**
        * @description The number of resources to be returned.

        */
        
      limit?:number;
       
      /**
        * @description Determines your position in the list for pagination. To ensure that the next page is retrieved correctly, always set &#x27;offset&#x27; to the value of &#x27;next_offset&#x27; obtained in the previous iteration of the API call.

        */
        
      offset?:string;
       
      /**
        * @description The identifier for the item family. It is unique and immutable.

        */
        
      id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description A unique display name for the item family. This is visible only in Chargebee and not to customers.

        */
        
      name?:{is?:string,is_not?:string,starts_with?:string};
       
      /**
        * @description When the item family was last updated.

        */
        
      updated_at?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description The unique ID of the [business entity](/docs/api?prod_cat_ver&#x3D;2#mbe) of this subscription. This is always the same as the [business entity](/docs/api/subscriptions?prod_cat_ver&#x3D;2#subscription_customer_id) of the customer.  
The ID of the business entity created for the site. For Product Catalog 1.0, all the site data is tied to this business entity.  
**Note**

[Multiple Business Entities](/docs/api?prod_cat_ver&#x3D;2#mbe) is a feature available only on Product Catalog 2.0.

        */
        
      business_entity_id?:{is?:string,is_present?:'true' | 'false'};
       
      include_site_level_resources?:{is?:'true' | 'false'};
    }
    export interface UpdateResponse {  
       item_family:ItemFamily;
    }
    export interface UpdateInputParam {
       
      name?:string;
       
      description?:string;
    }
    export interface DeleteResponse {  
       item_family:ItemFamily;
    }
    
    
  }
}