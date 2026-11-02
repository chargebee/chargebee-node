///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface PriceRamp {
    id: string;
    item_price_id: string;
    status: 'active' | 'archived' | 'deleted';
    created_at: number;
    resource_version?: number;
    updated_at?: number;
    archived_at?: number;
    ramp_intervals?: PriceRamp.RampInterval[];
    business_entity_id?: string;
  }

  export namespace PriceRamp {
    export class PriceRampResource {
      create(
        input: CreateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateResponse>>;

      retrieve(
        price_ramp_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RetrieveResponse>>;

      update(
        price_ramp_id: string,
        input: UpdateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<UpdateResponse>>;

      delete(
        price_ramp_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<DeleteResponse>>;

      list(
        input?: ListInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ListResponse>>;
    }

    export interface CreateResponse {
      price_ramp: PriceRamp;
    }

    export interface RetrieveResponse {
      price_ramp: PriceRamp;
    }

    export interface UpdateResponse {
      price_ramp: PriceRamp;
    }

    export interface DeleteResponse {
      price_ramp: PriceRamp;
    }

    export interface ListResponse {
      list: { price_ramp: PriceRamp }[];
      next_offset?: string;
    }

    export interface RampInterval {
      starting_billing_cycle: number;
      ending_billing_cycle?: number;
      apply_catalog_price?: boolean;
      price?: number;
      price_in_decimal?: string;
    }
    // REQUEST PARAMS
    //---------------

    export interface CreateInputParam {
      item_price_id: string;
      business_entity_id?: string;
      ramp_intervals?: RampIntervalsCreateInputParam[];
    }
    export interface UpdateInputParam {
      status?: 'active' | 'archived';
      ramp_intervals?: RampIntervalsUpdateInputParam[];
    }
    export interface ListInputParam {
      limit?: number;
      offset?: string;
      id?: filter.String;
      item_price_id?: filter.String;
      status?: filter.Enum;
      updated_at?: filter.Timestamp;
      business_entity_id?: filter.String;
      include_site_level_resources?: filter.Boolean;
      'sort_by[asc]'?: string;
      'sort_by[desc]'?: string;
    }
    export interface RampIntervalsCreateInputParam {
      starting_billing_cycle: number;
      ending_billing_cycle?: number;
      apply_catalog_price?: boolean;
      price?: number;
      price_in_decimal?: string;
    }
    export interface RampIntervalsUpdateInputParam {
      starting_billing_cycle: number;
      ending_billing_cycle?: number;
      apply_catalog_price?: boolean;
      price?: number;
      price_in_decimal?: string;
    }
  }
}
