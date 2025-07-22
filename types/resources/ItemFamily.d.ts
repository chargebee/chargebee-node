///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface ItemFamily {
    [key: string]: unknown;
    id: string;
    name: string;
    description?: string;
    status?: 'active' | 'deleted';
    resource_version?: number;
    updated_at?: number;
    channel?: ChannelEnum;
    business_entity_id?: string;
    deleted: boolean;
  }

  export namespace ItemFamily {
    export class ItemFamilyResource {
      create(
        input: CreateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateResponse>>;

      retrieve(
        item_family_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RetrieveResponse>>;

      list(
        input?: ListInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ListResponse>>;

      update(
        item_family_id: string,
        input?: UpdateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<UpdateResponse>>;

      delete(
        item_family_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<DeleteResponse>>;
    }

    export interface CreateResponse {
      item_family: ItemFamily;
    }

    export interface RetrieveResponse {
      item_family: ItemFamily;
    }

    export interface ListResponse {
      list: { item_family: ItemFamily }[];
      next_offset?: string;
    }

    export interface UpdateResponse {
      item_family: ItemFamily;
    }

    export interface DeleteResponse {
      item_family: ItemFamily;
    }

    // REQUEST PARAMS
    //---------------

    export interface CreateInputParam {
      id: string;
      name: string;
      description?: string;
      business_entity_id?: string;
      [key: `cf_${string}`]: unknown;
    }
    export interface ListInputParam {
      limit?: number;
      offset?: string;
      id?: filter.String;
      name?: filter.String;
      updated_at?: filter.Timestamp;
      business_entity_id?: filter.String;
      include_site_level_resources?: filter.Boolean;
      [key: `cf_${string}`]: unknown;
    }
    export interface UpdateInputParam {
      name?: string;
      description?: string;
      [key: `cf_${string}`]: unknown;
    }
  }
}
