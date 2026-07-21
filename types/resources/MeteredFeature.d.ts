///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface MeteredFeature {
    id: string;
    name?: string;
    description?: string;
    type?: TypeEnum;
    status?: StatusEnum;
    query?: string;
    column_definitions?: ColumnDefinition[];
    features?: Feature[];
  }

  export namespace MeteredFeature {
    export class MeteredFeatureResource {
      create(
        input: CreateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateResponse>>;

      archive(
        metered_feature_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ArchiveResponse>>;

      reactivate(
        metered_feature_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ReactivateResponse>>;

      delete(
        metered_feature_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<DeleteResponse>>;
    }

    export interface CreateResponse {
      meter: Meter;
    }

    export interface ArchiveResponse {
      meter: Meter;
    }

    export interface ReactivateResponse {
      meter: Meter;
    }

    export interface DeleteResponse {
      meter: Meter;
    }

    // REQUEST PARAMS
    //---------------

    export interface CreateInputParam {
      name: string;
      description?: string;
      feature_unit: string;
      query: string;
      column_definitions?: ColumnDefinitionsCreateInputParam[];
    }
    export interface ColumnDefinitionsCreateInputParam {
      column_name: string;
      data_type: 'number' | 'string';
    }
  }
}
