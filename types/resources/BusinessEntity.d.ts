///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface BusinessEntity {
    id: string;
    name: string;
    status: 'active' | 'inactive';
    deleted: boolean;
    created_at: number;
    resource_version?: number;
    updated_at?: number;
  }

  export namespace BusinessEntity {
    export class BusinessEntityResource {
      create(
        input: CreateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateResponse>>;

      list(
        input?: ListInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ListResponse>>;

      retrieve(
        business_entity_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RetrieveResponse>>;

      update(
        business_entity_id: string,
        input?: UpdateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<UpdateResponse>>;

      createTransfers(
        input: CreateTransfersInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateTransfersResponse>>;

      getTransfers(
        input?: GetTransfersInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<GetTransfersResponse>>;
    }

    export interface CreateResponse {
      business_entity: BusinessEntity;
    }

    export interface ListResponse {
      list: { business_entity: BusinessEntity }[];
      next_offset?: string;
    }

    export interface RetrieveResponse {
      business_entity: BusinessEntity;
    }

    export interface UpdateResponse {
      business_entity: BusinessEntity;
    }

    export interface CreateTransfersResponse {
      business_entity_transfer: BusinessEntityTransfer;
    }

    export interface GetTransfersResponse {
      list: { business_entity_transfer: BusinessEntityTransfer }[];
      next_offset?: string;
    }

    // REQUEST PARAMS
    //---------------

    export interface CreateInputParam {
      name: string;
      status: 'active' | 'inactive';
    }
    export interface ListInputParam {
      limit?: number;
      offset?: string;
      include_deleted?: boolean;
      name?: filter.String;
    }
    export interface UpdateInputParam {
      name?: string;
      status?: 'active' | 'inactive';
    }
    export interface CreateTransfersInputParam {
      active_resource_ids: string[];
      destination_business_entity_ids: string[] /**
       * @deprecated Please refer API docs to use other attributes
       */;

      source_business_entity_ids?: string[] /**
       * @deprecated Please refer API docs to use other attributes
       */;

      resource_types: string[];
      reason_codes: string[];
    }
    export interface GetTransfersInputParam {
      limit?: number;
      offset?: string;
      resource_type?: filter.String;
      resource_id?: filter.String;
      active_resource_id?: filter.String;
      created_at?: filter.Timestamp;
      'sort_by[asc]'?: string;
      'sort_by[desc]'?: string;
    }
  }
}
