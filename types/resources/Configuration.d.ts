///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface Configuration {
    

    domain?:string;

    product_catalog_version?:ProductCatalogVersion;

    chargebee_response_schema_type?:ChargebeeResponseSchemaType;

  }
  export namespace Configuration {
    export class ConfigurationResource {  
      list():ChargebeeRequest<ListResponse>;
    }
    export interface ListResponse {  
       configurations:Configuration[];
    }
    
    
  }
}