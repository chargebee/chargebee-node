///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface PriceVariant {
    
    /**
      * @description The unique and immutable identifier of the price variant.

      */
    
    id:string;
    
    /**
      * @description A unique name of the price variant.

      */
    
    name:string;
    
    /**
      * @description A unique display name for the price variant.

      */
    
    external_name?:string;
    
    /**
      * @description Description of the price variant.

      */
    
    description?:string;
    
    /**
      * @description Status of a price variant. \* active - Active price variant. This price variant can be attached to [item prices](https://apidocs.chargebee.com/docs/api/item_prices?lang&#x3D;curl). \* deleted - Deleted price variant. The &#x60;id&#x60; and &#x60;name&#x60; of the deleted price variant can be reused. \* archived - Archived price variant. This price variant is no longer &#x60;active&#x60; and cannot be attached to new [item prices](https://apidocs.chargebee.com/docs/api/item_prices?lang&#x3D;curl). Existing item prices that already have this price variant attached will continue to remain as is.

      */
    
    status?:'active' | 'archived' | 'deleted';
    
    /**
      * @description Timestamp indicating when this price variant is created.

      */
    
    created_at:number;
    
    /**
      * @description The version number of this resource. For every change made to the resource, &#x60;resource_version&#x60; is updated with a new timestamp in milliseconds.

      */
    
    resource_version?:number;
    
    /**
      * @description Timestamp indicating when this price variant was last updated.

      */
    
    updated_at?:number;
    
    /**
      * @description Timestamp indicating when this price variant was archived.

      */
    
    archived_at?:number;
    
    /**
      * @description The list of price variant attribute values.

Attributes can be used to store additional information about the price variant. For example, for a price variant called &#x27;Germany&#x27;, the attributes can be &#x27;Country&#x27;:&#x27;Germany&#x27;, &#x27;City&#x27;:&#x27;Berlin&#x27; and so on.

      */
    
    attributes?:PriceVariant.Attribute[];
  }
  export namespace PriceVariant {
    export class PriceVariantResource {  
      /**
        * @description This endpoint allows the creation of a new price variant that can be attached to [item prices](https://apidocs.chargebee.com/docs/api/item_prices?lang&#x3D;curl).

        */
      
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
       
      /**
        * @description This endpoint retrieves the details of a specific price variant using its unique identifier.

        */
      
      retrieve(price_variant_id:string):ChargebeeRequest<RetrieveResponse>;
       
      /**
        * @description This endpoint modifies the details of an existing price variant.

        */
      
      update(price_variant_id:string, input:UpdateInputParam):ChargebeeRequest<UpdateResponse>;
       
      /**
        * @description Deletes the price variant. This is not allowed if price variant is attached to any [item price](https://apidocs.chargebee.com/docs/api/item_prices?lang&#x3D;curl). Once deleted, the &#x60;id&#x60; and &#x60;name&#x60; of the price variant can be reused.

        */
      
      delete(price_variant_id:string):ChargebeeRequest<DeleteResponse>;
       
      /**
        * @description This endpoint is used to retrieve a list of price variants.

        */
      
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
    }
    export interface CreateResponse {  
       price_variant:PriceVariant;
    }
    export interface CreateInputParam {
       
      /**
        * @description The unique and immutable identifier of the price variant.

        */
       
      id:string;
       
      /**
        * @description A unique name of the price variant.

        */
       
      name:string;
       
      /**
        * @description A unique display name for the price variant.

        */
       
      external_name?:string;
       
      /**
        * @description Description of the price variant.

        */
       
      description?:string;
       
      /**
        * @description The list of price variant attribute values.

Attributes can be used to store additional information about the price variant. For example, for a price variant called &#x27;Germany&#x27;, the attributes can be &#x27;Country&#x27;:&#x27;Germany&#x27;, &#x27;City&#x27;:&#x27;Berlin&#x27; and so on.

        */
       
      attributes:{name:string,value:string}[];
    }
    export interface RetrieveResponse {  
       price_variant:PriceVariant;
    }
    
    export interface UpdateResponse {  
       price_variant:PriceVariant;
    }
    export interface UpdateInputParam {
       
      /**
        * @description A unique name of the price variant.

        */
       
      name?:string;
       
      /**
        * @description A unique display name for the price variant.

        */
       
      external_name?:string;
       
      /**
        * @description Description of the price variant.

        */
       
      description?:string;
       
      /**
        * @description Status of a price variant. \* active - Active price variant. This price variant can be attached to [item prices](https://apidocs.chargebee.com/docs/api/item_prices?lang&#x3D;curl). \* deleted - Deleted price variant. The &#x60;id&#x60; and &#x60;name&#x60; of the deleted price variant can be reused. \* archived - Archived price variant. This price variant is no longer &#x60;active&#x60; and cannot be attached to new [item prices](https://apidocs.chargebee.com/docs/api/item_prices?lang&#x3D;curl). Existing item prices that already have this price variant attached will continue to remain as is.

        */
       
      status?:'active' | 'archived';
       
      /**
        * @description The list of price variant attribute values.

Attributes can be used to store additional information about the price variant. For example, for a price variant called &#x27;Germany&#x27;, the attributes can be &#x27;Country&#x27;:&#x27;Germany&#x27;, &#x27;City&#x27;:&#x27;Berlin&#x27; and so on.

        */
       
      attributes:{name:string,value:string}[];
    }
    export interface DeleteResponse {  
       price_variant:PriceVariant;
    }
    
    export interface ListResponse {  
      /**
        * @description This endpoint is used to retrieve a list of price variants.

        */
       
       list:{price_variant:PriceVariant}[];
       
      /**
        * @description This endpoint is used to retrieve a list of price variants.

        */
       
       next_offset?:string;
    }
    export interface ListInputParam {
      [key : string]: any;  
      /**
        * @description This endpoint is used to retrieve a list of price variants.

        */
        
      limit?:number;
       
      /**
        * @description This endpoint is used to retrieve a list of price variants.

        */
        
      offset?:string;
       
      /**
        * @description This endpoint is used to retrieve a list of price variants.

        */
        
      id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description This endpoint is used to retrieve a list of price variants.

        */
        
      name?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description This endpoint is used to retrieve a list of price variants.

        */
        
      status?:{in?:string,is?:'active' | 'archived',is_not?:'active' | 'archived',not_in?:string};
       
      /**
        * @description This endpoint is used to retrieve a list of price variants.

        */
        
      updated_at?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description This endpoint is used to retrieve a list of price variants.

        */
        
      created_at?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description This endpoint is used to retrieve a list of price variants.

        */
        
      sort_by?:{asc?:'name' | 'id' | 'status' | 'created_at' | 'updated_at',desc?:'name' | 'id' | 'status' | 'created_at' | 'updated_at'};
    }
    export interface Attribute {  
         /**
          * @description Attribute name

          */
       
      name:string;
       
         /**
          * @description Attribute value

          */
       
      value:string;
    }
  }
}