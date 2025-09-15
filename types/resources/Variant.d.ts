///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface Variant {
    id?: string;
    name: string;
    external_name?: string;
    description?: string;
    sku?: string;
    deleted: boolean;
    product_id: string;
    status?: 'active' | 'inactive';
    created_at: number;
    resource_version?: number;
    updated_at?: number;
    option_values?: Variant.OptionValue[];
    metadata?: any;
  }

  export namespace Variant {
    export class VariantResource {
      createProductVariant(
        product_id: string,
        input: CreateProductVariantInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateProductVariantResponse>>;

      retrieve(
        product_variant_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RetrieveResponse>>;

      update(
        product_variant_id: string,
        input?: UpdateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<UpdateResponse>>;

      delete(
        product_variant_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<DeleteResponse>>;

      listProductVariants(
        product_id: string,
        input?: ListProductVariantsInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ListProductVariantsResponse>>;
    }

    export interface CreateProductVariantResponse {
      variant: Variant;
    }

    export interface RetrieveResponse {
      variant: Variant;
    }

    export interface UpdateResponse {
      variant: Variant;
    }

    export interface DeleteResponse {
      variant: Variant;
    }

    export interface ListProductVariantsResponse {
      list: { variant: Variant }[];
      next_offset?: string;
    }

    export interface OptionValue {
      name?: string;
      value?: string;
    }
    // REQUEST PARAMS
    //---------------

    export interface CreateProductVariantInputParam {
      id?: string;
      name: string;
      external_name?: string;
      description?: string;
      sku?: string;
      metadata?: any;
      status?: 'active' | 'inactive';
      option_values?: OptionValuesCreateProductVariantInputParam[];
    }
    export interface UpdateInputParam {
      name?: string;
      description?: string;
      status?: 'active' | 'inactive';
      external_name?: string;
      sku?: string;
      metadata?: any;
    }
    export interface ListProductVariantsInputParam {
      limit?: number;
      offset?: string;
      include_deleted?: boolean;
      id?: filter.String;
      name?: filter.String;
      sku?: filter.String;
      status?: filter.Enum;
      updated_at?: filter.Timestamp;
      created_at?: filter.Timestamp;
      'sort_by[asc]'?: string;
      'sort_by[desc]'?: string;
    }
    export interface OptionValuesCreateProductVariantInputParam {
      name: string;
      value: string;
    }
  }
}
