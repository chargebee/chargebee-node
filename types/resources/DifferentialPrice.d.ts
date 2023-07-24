///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface DifferentialPrice {
    id:string;
    item_price_id:string;
    parent_item_id:string;
    price?:number;
    price_in_decimal?:string;
    status?:'deleted' | 'active';
    resource_version?:number;
    updated_at?:number;
    created_at:number;
    modified_at:number;
    currency_code:string;
    tiers?:DifferentialPrice.Tier[];
    parent_periods?:DifferentialPrice.ParentPeriod[];
  }
  export namespace DifferentialPrice {
    export class DifferentialPriceResource {
      delete(differential_price_id:string, input:DeleteInputParam):ChargebeeRequest<DeleteResponse>;
      create(item_price_id:string, input:CreateInputParam):ChargebeeRequest<CreateResponse>;
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
      retrieve(differential_price_id:string, input:RetrieveInputParam):ChargebeeRequest<RetrieveResponse>;
      update(differential_price_id:string, input:UpdateInputParam):ChargebeeRequest<UpdateResponse>;
    }
    export interface DeleteResponse {
      differential_price:DifferentialPrice;
    }
    export interface DeleteInputParam {
      item_price_id:string;
    }
    export interface CreateResponse {
      differential_price:DifferentialPrice;
    }
    export interface CreateInputParam {
      parent_item_id:string;
      price?:number;
      price_in_decimal?:string;
      parent_periods?:{period?:any[],period_unit:'week' | 'month' | 'year' | 'day'}[];
      tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
    }
    export interface ListResponse {
      list:{differential_price:DifferentialPrice}[];
      next_offset?:string;
    }
    export interface ListInputParam {
      [key : string]: any;
      limit?:number;
      offset?:string;
      item_price_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      item_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      parent_item_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
    }
    export interface RetrieveResponse {
      differential_price:DifferentialPrice;
    }
    export interface RetrieveInputParam {
      item_price_id:string;
    }
    export interface UpdateResponse {
      differential_price:DifferentialPrice;
    }
    export interface UpdateInputParam {
      item_price_id:string;
      price?:number;
      price_in_decimal?:string;
      parent_periods?:{period?:any[],period_unit:'week' | 'month' | 'year' | 'day'}[];
      tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
    }
    export interface Tier {
      starting_unit?:number;
      ending_unit?:number;
      price?:number;
      starting_unit_in_decimal?:string;
      ending_unit_in_decimal?:string;
      price_in_decimal?:string;
    }
    export interface ParentPeriod {
      period_unit?:'week' | 'month' | 'year' | 'day';
      period?:any[];
    }
  }
}