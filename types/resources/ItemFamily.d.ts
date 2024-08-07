///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface ItemFamily {
    [key: string]: any;

    id: string;

    name: string;

    description?: string;

    status?: 'active' | 'deleted';

    resource_version?: number;

    updated_at?: number;

    channel?: Channel;
  }
  export namespace ItemFamily {
    export class ItemFamilyResource {
      create(
        input: CreateInputParam,
      ): ChargebeeRequest<ChargebeeResponse<CreateResponse>>;

      retrieve(
        item_family_id: string,
      ): ChargebeeRequest<ChargebeeResponse<RetrieveResponse>>;

      list(
        input?: ListInputParam,
      ): ChargebeeRequest<ChargebeeResponse<ListResponse>>;

      update(
        item_family_id: string,
        input?: UpdateInputParam,
      ): ChargebeeRequest<ChargebeeResponse<UpdateResponse>>;

      delete(
        item_family_id: string,
      ): ChargebeeRequest<ChargebeeResponse<DeleteResponse>>;
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
    }
    export interface ListInputParam {
      limit?: number;
      offset?: string;
      id?: filter.String;
      name?: filter.String;
      updated_at?: filter.Timestamp;
    }
    export interface UpdateInputParam {
      name?: string;
      description?: string;
    }
  }
}
