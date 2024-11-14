///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface DifferentialPrice {
    id: string;
    item_price_id: string;
    parent_item_id: string;
    price?: number;
    price_in_decimal?: string;
    status?: 'active' | 'deleted';
    resource_version?: number;
    updated_at?: number;
    created_at: number;
    modified_at: number;
    tiers?: DifferentialPrice.Tier[];
    currency_code: string;
    parent_periods?: DifferentialPrice.ParentPeriod[];
    business_entity_id?: string;
  }

  export namespace DifferentialPrice {
    export class DifferentialPriceResource {
      create(
        item_price_id: string,
        input: CreateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateResponse>>;

      retrieve(
        differential_price_id: string,
        input: RetrieveInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RetrieveResponse>>;

      update(
        differential_price_id: string,
        input: UpdateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<UpdateResponse>>;

      delete(
        differential_price_id: string,
        input: DeleteInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<DeleteResponse>>;

      list(
        input?: ListInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ListResponse>>;
    }

    export interface CreateResponse {
      differential_price: DifferentialPrice;
    }

    export interface RetrieveResponse {
      differential_price: DifferentialPrice;
    }

    export interface UpdateResponse {
      differential_price: DifferentialPrice;
    }

    export interface DeleteResponse {
      differential_price: DifferentialPrice;
    }

    export interface ListResponse {
      list: { differential_price: DifferentialPrice }[];
      next_offset?: string;
    }

    export interface Tier {
      starting_unit: number;
      ending_unit?: number;
      price: number;
      starting_unit_in_decimal?: string;
      ending_unit_in_decimal?: string;
      price_in_decimal?: string;
    }
    export interface ParentPeriod {
      period_unit: 'day' | 'week' | 'month' | 'year';
      period?: any[];
    }
    // REQUEST PARAMS
    //---------------

    export interface CreateInputParam {
      parent_item_id: string;
      price?: number;
      price_in_decimal?: string;
      business_entity_id?: string;
      parent_periods?: ParentPeriodsCreateInputParam[];
      tiers?: TiersCreateInputParam[];
    }
    export interface RetrieveInputParam {
      item_price_id: string;
    }
    export interface UpdateInputParam {
      item_price_id: string;
      price?: number;
      price_in_decimal?: string;
      parent_periods?: ParentPeriodsUpdateInputParam[];
      tiers?: TiersUpdateInputParam[];
    }
    export interface DeleteInputParam {
      item_price_id: string;
    }
    export interface ListInputParam {
      limit?: number;
      offset?: string;
      item_price_id?: filter.String;
      item_id?: filter.String;
      id?: filter.String;
      parent_item_id?: filter.String;
    }
    export interface TiersCreateInputParam {
      starting_unit?: number;
      ending_unit?: number;
      price?: number;
      starting_unit_in_decimal?: string;
      ending_unit_in_decimal?: string;
      price_in_decimal?: string;
    }
    export interface ParentPeriodsCreateInputParam {
      period_unit: 'day' | 'week' | 'month' | 'year';
      period?: any;
    }
    export interface TiersUpdateInputParam {
      starting_unit?: number;
      ending_unit?: number;
      price?: number;
      starting_unit_in_decimal?: string;
      ending_unit_in_decimal?: string;
      price_in_decimal?: string;
    }
    export interface ParentPeriodsUpdateInputParam {
      period_unit: 'day' | 'week' | 'month' | 'year';
      period?: any;
    }
  }
}
