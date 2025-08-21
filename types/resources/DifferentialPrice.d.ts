///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface DifferentialPrice {
    

    id:string;

    item_price_id:string;

    parent_item_id:string;

    price?:number;

    price_in_decimal?:string;

    status?:'active' | 'deleted';

    resource_version?:number;

    updated_at?:number;

    created_at:number;

    modified_at:number;

    tiers?:DifferentialPrice.Tier[];

    currency_code:string;

    parent_periods?:DifferentialPrice.ParentPeriod[];

    business_entity_id?:string;

    deleted:boolean;

  }
  export namespace DifferentialPrice {
    export class DifferentialPriceResource {  
      create(item_price_id:string, input:CreateInputParam):ChargebeeRequest<CreateResponse>;
       
      retrieve(differential_price_id:string, input:RetrieveInputParam):ChargebeeRequest<RetrieveResponse>;
       
      update(differential_price_id:string, input:UpdateInputParam):ChargebeeRequest<UpdateResponse>;
       
      delete(differential_price_id:string, input:DeleteInputParam):ChargebeeRequest<DeleteResponse>;
       
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
    }
    export interface CreateResponse {  
       differential_price:DifferentialPrice;
    }
    export interface CreateInputParam {
       
      parent_periods:{period?:any[],period_unit:'day' | 'week' | 'month' | 'year'}[];
       
      tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,package_size?:number,price?:number,price_in_decimal?:string,pricing_type?:PricingType,starting_unit?:number,starting_unit_in_decimal?:string}[];
       
      parent_item_id:string;
       
      price?:number;
       
      price_in_decimal?:string;
       
      business_entity_id?:string;
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
       
      parent_periods:{period?:any[],period_unit:'day' | 'week' | 'month' | 'year'}[];
       
      tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,package_size?:number,price?:number,price_in_decimal?:string,pricing_type?:PricingType,starting_unit?:number,starting_unit_in_decimal?:string}[];
       
      item_price_id:string;
       
      price?:number;
       
      price_in_decimal?:string;
    }
    export interface DeleteResponse {  
       differential_price:DifferentialPrice;
    }
    export interface DeleteInputParam {
       
      item_price_id:string;
    }
    export interface ListResponse {  
       list:{differential_price:DifferentialPrice}[];
       
       next_offset?:string;
    }
    export interface ListInputParam {
      [key : string]: any;  
      /**
        * @description The number of resources to be returned.

        */
        
      limit?:number;
       
      /**
        * @description Determines your position in the list for pagination. To ensure that the next page is retrieved correctly, always set &#x27;offset&#x27; to the value of &#x27;next_offset&#x27; obtained in the previous iteration of the API call.

        */
        
      offset?:string;
       
      /**
        * @description The id of the item price (&#x60;addon&#x60; or &#x60;charge&#x60;) whose price should change according to the plan-item it is applied to.

        */
        
      item_price_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Item Id of Addon / Charge item price for which differential pricing is applied to

        */
        
      item_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description A unique and immutable id for the differential price. It is auto-generated when the differential price is created.

        */
        
      id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description The id of the plan-item, in relation to which, the differential pricing for the addon or charge is defined. For example, this would be the id of the *Standard* or *Enterprise* plans-items mentioned in the [examples above](./differential_prices?prod_cat_ver&#x3D;2).

        */
        
      parent_item_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
    }
    export interface Tier {  
      starting_unit:number;
       
      ending_unit?:number;
       
      price:number;
       
      starting_unit_in_decimal?:string;
       
      ending_unit_in_decimal?:string;
       
      price_in_decimal?:string;
       
      pricing_type?:'per_unit' | 'flat_fee' | 'package';
       
      package_size?:number;
    }
    export interface ParentPeriod {  
      period_unit:'day' | 'week' | 'month' | 'year';
       
      period?:any[];
    }
  }
}