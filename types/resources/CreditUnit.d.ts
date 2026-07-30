///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface CreditUnit {
    id: string;
    name: string;
    external_name: string;
    status?: 'active' | 'archived';
    resource_version?: number;
    updated_at?: number;
    created_at: number;
    created_by?: string;
    updated_by?: string;
    is_unlimited: boolean;
    overdraft_amount?: string;
  }

  export namespace CreditUnit {
    export class CreditUnitResource {
      list(
        input?: ListInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ListResponse>>;

      create(
        input: CreateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateResponse>>;

      update(
        credit_unit_id: string,
        input?: UpdateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<UpdateResponse>>;

      archive(
        credit_unit_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ArchiveResponse>>;

      reactivate(
        credit_unit_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ReactivateResponse>>;
    }

    export interface ListResponse {
      list: { credit_unit: CreditUnit }[];
      next_offset?: string;
    }

    export interface CreateResponse {
      credit_unit: CreditUnit;
    }

    export interface UpdateResponse {
      credit_unit: CreditUnit;
    }

    export interface ArchiveResponse {
      credit_unit: CreditUnit;
    }

    export interface ReactivateResponse {
      credit_unit: CreditUnit;
    }

    // REQUEST PARAMS
    //---------------

    export interface ListInputParam {
      limit?: number;
      offset?: string;
      status?: filter.Enum;
      id?: filter.String;
    }
    export interface CreateInputParam {
      id: string;
      name: string;
      is_unlimited: boolean;
      overdraft_amount?: string;
      external_name?: string;
    }
    export interface UpdateInputParam {
      name?: string;
      external_name?: string;
    }
  }
}
