///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface Product {
    id: string;
    name: string;
    external_name: string;
    description?: string;
    has_variant: boolean;
    status: 'active' | 'inactive';
    shippable: boolean;
    sku?: string;
    created_at: number;
    resource_version?: number;
    updated_at?: number;
    deleted: boolean;
    options?: Product.Option[];
    metadata?: any;
  }

  export namespace Product {
    export class ProductResource {
      create(
        input: CreateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateResponse>>;

      retrieve(
        product_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RetrieveResponse>>;

      update(
        product_id: string,
        input?: UpdateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<UpdateResponse>>;

      delete(
        product_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<DeleteResponse>>;

      updateOptions(
        product_id: string,
        input: UpdateOptionsInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<UpdateOptionsResponse>>;

      list(
        input?: ListInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ListResponse>>;
    }

    export interface CreateResponse {
      product: Product;
    }

    export interface RetrieveResponse {
      product: Product;
    }

    export interface UpdateResponse {
      product: Product;
    }

    export interface DeleteResponse {
      product: Product;
    }

    export interface UpdateOptionsResponse {
      product: Product;
    }

    export interface ListResponse {
      list: { product: Product }[];
      next_offset?: string;
    }

    export interface Option {
      id?: string;
      name?: string;
      values?: any[];
      default_value?: string;
      type?: 'select';
    }
    // REQUEST PARAMS
    //---------------

    export interface CreateInputParam {
      name: string;
      external_name: string;
      status: 'active' | 'inactive';
      id?: string;
      description?: string;
      sku?: string;
      metadata?: any;
      shippable?: boolean;
    }
    export interface UpdateInputParam {
      name?: string;
      external_name?: string;
      description?: string;
      status?: 'active' | 'inactive';
      sku?: string;
      shippable?: boolean;
      metadata?: any;
    }
    export interface UpdateOptionsInputParam {
      remove_options?: string[];
      options?: OptionsUpdateOptionsInputParam[];
    }
    export interface ListInputParam {
      limit?: number;
      offset?: string;
      include_deleted?: boolean;
      id?: filter.String;
      name?: filter.String;
      status?: filter.Enum;
      shippable?: filter.Boolean;
      has_variant?: filter.Boolean;
      created_at?: filter.Timestamp;
      updated_at?: filter.Timestamp;
      'sort_by[asc]'?: string;
      'sort_by[desc]'?: string;
    }
    export interface OptionsUpdateOptionsInputParam {
      name: string;
      values?: any;
      default_value?: string;
    }
  }
}
