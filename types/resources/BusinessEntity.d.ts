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
      createTransfers(
        input: CreateTransfersInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateTransfersResponse>>;

      getTransfers(
        input?: GetTransfersInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<GetTransfersResponse>>;
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
