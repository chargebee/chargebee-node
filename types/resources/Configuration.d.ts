///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface Configuration {
    domain?: string;
    product_catalog_version?: ProductCatalogVersionEnum;
  }

  export namespace Configuration {
    export class ConfigurationResource {
      list(
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ListResponse>>;
    }

    export interface ListResponse {
      configurations: Configuration[];
    }

    // REQUEST PARAMS
    //---------------
  }
}
