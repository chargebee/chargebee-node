///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface PriceVariant {
    

    id:string;

    name:string;

    external_name?:string;

    variant_group?:string;

    description?:string;

    status?:'active' | 'archived' | 'deleted';

    created_at:number;

    resource_version?:number;

    updated_at?:number;

    archived_at?:number;

    attributes?:PriceVariant.Attribute[];

    business_entity_id?:string;

    deleted:boolean;

  }
  export namespace PriceVariant {
    export class PriceVariantResource {  
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
       
      retrieve(price_variant_id:string):ChargebeeRequest<RetrieveResponse>;
       
      update(price_variant_id:string, input:UpdateInputParam):ChargebeeRequest<UpdateResponse>;
       
      delete(price_variant_id:string):ChargebeeRequest<DeleteResponse>;
       
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
    }
    export interface CreateResponse {  
       price_variant:PriceVariant;
    }
    export interface CreateInputParam {
       
      attributes:{name:string,value:string}[];
       
      id:string;
       
      name:string;
       
      external_name?:string;
       
      description?:string;
       
      variant_group?:string;
       
      business_entity_id?:string;
    }
    export interface RetrieveResponse {  
       price_variant:PriceVariant;
    }
    
    export interface UpdateResponse {  
       price_variant:PriceVariant;
    }
    export interface UpdateInputParam {
       
      attributes:{name:string,value:string}[];
       
      name?:string;
       
      external_name?:string;
       
      description?:string;
       
      variant_group?:string;
       
      status?:'active' | 'archived';
    }
    export interface DeleteResponse {  
       price_variant:PriceVariant;
    }
    
    export interface ListResponse {  
       list:{price_variant:PriceVariant}[];
       
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
        * @description Filter variant based on their [id](#).

        */
        
      id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Filter variant based on their &#x60;name&#x60;s.

        */
        
      name?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Filter variant based on their &#x60;status&#x60;.

        */
        
      status?:{in?:string,is?:'active' | 'archived',is_not?:'active' | 'archived',not_in?:string};
       
      /**
        * @description Filter product based on their &#x60;updated time&#x60;.

        */
        
      updated_at?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description Filter product based on their &#x60;created time&#x60;.

        */
        
      created_at?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description The unique ID of the [business entity](/docs/api?prod_cat_ver&#x3D;2#mbe) of this subscription. This is always the same as the [business entity](/docs/api/subscriptions?prod_cat_ver&#x3D;2#subscription_customer_id) of the customer.  
The ID of the business entity created for the site. For Product Catalog 1.0, all the site data is tied to this business entity.  
**Note**

[Multiple Business Entities](/docs/api?prod_cat_ver&#x3D;2#mbe) is a feature available only on Product Catalog 2.0.

        */
        
      business_entity_id?:{is?:string,is_present?:'true' | 'false'};
       
      include_site_level_resources?:{is?:'true' | 'false'};
       
      sort_by?:object;
    }
    export interface Attribute {  
      name:string;
       
      value:string;
    }
  }
}