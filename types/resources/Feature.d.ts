///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface Feature {
    id: string;

    name: string;

    description?: string;

    status?: 'active' | 'archived' | 'draft';

    type?: 'switch' | 'custom' | 'quantity' | 'range';

    unit?: string;

    resource_version?: number;

    updated_at?: number;

    created_at: number;

    levels?: Feature.Level[];
  }
  export namespace Feature {
    export class FeatureResource {
      list(
        input?: ListInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ListResponse>>;

      create(
        input: CreateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateResponse>>;

      update(
        feature_id: string,
        input?: UpdateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<UpdateResponse>>;

      retrieve(
        feature_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RetrieveResponse>>;

      delete(
        feature_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<DeleteResponse>>;

      activate(
        feature_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ActivateResponse>>;

      archive(
        feature_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ArchiveResponse>>;

      reactivate(
        feature_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ReactivateResponse>>;
    }
    export interface ListResponse {
      list: { feature: Feature }[];

      next_offset?: string;
    }

    export interface CreateResponse {
      feature: Feature;
    }

    export interface UpdateResponse {
      feature: Feature;
    }

    export interface RetrieveResponse {
      feature: Feature;
    }

    export interface DeleteResponse {
      feature: Feature;
    }

    export interface ActivateResponse {
      feature: Feature;
    }

    export interface ArchiveResponse {
      feature: Feature;
    }

    export interface ReactivateResponse {
      feature: Feature;
    }

    export interface Level {
      name?: string;

      value: string;

      level: number;

      is_unlimited: boolean;
    }
    // REQUEST PARAMS
    //---------------

    export interface ListInputParam {
      limit?: number;
      offset?: string;
      name?: filter.String;
      id?: filter.String;
      status?: filter.Enum;
      type?: filter.Enum;
    }
    export interface CreateInputParam {
      id?: string;
      name: string;
      description?: string;
      type?: 'switch' | 'custom' | 'quantity' | 'range';
      unit?: string;
      levels?: LevelsCreateInputParam[];
    }
    export interface UpdateInputParam {
      name?: string;
      description?: string;
      unit?: string;
      levels?: LevelsUpdateInputParam[];
    }
    export interface LevelsCreateInputParam {
      name?: string;

      value?: string;

      is_unlimited?: boolean;

      level?: number;
    }
    export interface LevelsUpdateInputParam {
      name?: string;

      value?: string;

      is_unlimited?: boolean;

      level?: number;
    }
  }
}
