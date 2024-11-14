///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface PriceVariant {
    id: string;
    name: string;
    external_name?: string;
    variant_group?: string;
    description?: string;
    status?: 'active' | 'archived' | 'deleted';
    created_at: number;
    resource_version?: number;
    updated_at?: number;
    archived_at?: number;
    attributes?: PriceVariant.Attribute[];
    business_entity_id?: string;
  }

  export namespace PriceVariant {
    export class PriceVariantResource {
      create(
        input: CreateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateResponse>>;

      retrieve(
        price_variant_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RetrieveResponse>>;

      update(
        price_variant_id: string,
        input: UpdateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<UpdateResponse>>;

      delete(
        price_variant_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<DeleteResponse>>;

      list(
        input?: ListInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ListResponse>>;
    }

    export interface CreateResponse {
      price_variant: PriceVariant;
    }

    export interface RetrieveResponse {
      price_variant: PriceVariant;
    }

    export interface UpdateResponse {
      price_variant: PriceVariant;
    }

    export interface DeleteResponse {
      price_variant: PriceVariant;
    }

    export interface ListResponse {
      list: { price_variant: PriceVariant }[];
      next_offset?: string;
    }

    export interface Attribute {
      name: string;
      value: string;
    }
    // REQUEST PARAMS
    //---------------

    export interface CreateInputParam {
      id: string;
      name: string;
      external_name?: string;
      description?: string;
      variant_group?: string;
      business_entity_id?: string;
      attributes?: AttributesCreateInputParam[];
    }
    export interface UpdateInputParam {
      name?: string;
      external_name?: string;
      description?: string;
      variant_group?: string;
      status?: 'active' | 'archived';
      attributes?: AttributesUpdateInputParam[];
    }
    export interface ListInputParam {
      limit?: number;
      offset?: string;
      id?: filter.String;
      name?: filter.String;
      status?: filter.Enum;
      updated_at?: filter.Timestamp;
      created_at?: filter.Timestamp;
      business_entity_id?: filter.String;
      include_site_level_resources?: filter.Boolean;
      'sort_by[asc]'?: string;
      'sort_by[desc]'?: string;
    }
    export interface AttributesCreateInputParam {
      name: string;
      value: string;
    }
    export interface AttributesUpdateInputParam {
      name: string;
      value: string;
    }
  }
}
