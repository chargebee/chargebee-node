declare module 'chargebee' {
  export interface ItemPrice {
    [key : string] : any;
    id:string;
    name:string;
    item_family_id?:string;
    product_id?:string;
    item_id?:string;
    description?:string;
    status?:'archived' | 'deleted' | 'active';
    external_name?:string;
    pricing_model:PricingModel;
    price?:number;
    price_in_decimal?:string;
    period?:number;
    currency_code:string;
    period_unit?:'week' | 'month' | 'year' | 'day';
    trial_period?:number;
    trial_period_unit?:'month' | 'day';
    trial_end_action?:'activate_subscription' | 'cancel_subscription' | 'site_default';
    shipping_period?:number;
    shipping_period_unit?:'week' | 'month' | 'year' | 'day';
    billing_cycles?:number;
    free_quantity:number;
    free_quantity_in_decimal?:string;
    channel?:Channel;
    resource_version?:number;
    updated_at?:number;
    created_at:number;
    archived_at?:number;
    invoice_notes?:string;
    is_taxable?:boolean;
    metadata?:object;
    item_type?:ItemType;
    show_description_in_invoices?:boolean;
    show_description_in_quotes?:boolean;
    tiers?:ItemPrice.Tier[];
    tax_detail?:ItemPrice.TaxDetail;
    accounting_detail?:ItemPrice.AccountingDetail;
  }
  export namespace ItemPrice {
    export class ItemPriceResource {
      find_applicable_items(item_price_id:string, input?:FindApplicableItemsInputParam):ChargebeeRequest<FindApplicableItemsResponse>;
      retrieve(item_price_id:string):ChargebeeRequest<RetrieveResponse>;
      update(item_price_id:string, input?:UpdateInputParam):ChargebeeRequest<UpdateResponse>;
      delete(item_price_id:string):ChargebeeRequest<DeleteResponse>;
      find_applicable_item_prices(item_price_id:string, input?:FindApplicableItemPricesInputParam):ChargebeeRequest<FindApplicableItemPricesResponse>;
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
    }
    export interface FindApplicableItemsResponse {
      list:{item:Item}[];
      next_offset?:string;
    }
    export interface FindApplicableItemsInputParam {
      [key: string]: string | number | object | boolean;
      limit?:number;
      offset?:string;
      sort_by?:{asc?:'updated_at' | 'name' | 'id',desc?:'updated_at' | 'name' | 'id'};
    }
    export interface RetrieveResponse {
      item_price:ItemPrice;
    }
    
    export interface UpdateResponse {
      item_price:ItemPrice;
    }
    export interface UpdateInputParam {
      [key : string] : any;
      name?:string;
      description?:string;
      status?:'archived' | 'active';
      external_name?:string;
      currency_code?:string;
      invoice_notes?:string;
      is_taxable?:boolean;
      free_quantity?:number;
      free_quantity_in_decimal?:string;
      metadata?:object;
      pricing_model?:PricingModel;
      price?:number;
      price_in_decimal?:string;
      period_unit?:'week' | 'month' | 'year' | 'day';
      period?:number;
      trial_period_unit?:'month' | 'day';
      trial_period?:number;
      shipping_period?:number;
      shipping_period_unit?:'week' | 'month' | 'year' | 'day';
      billing_cycles?:number;
      trial_end_action?:'activate_subscription' | 'cancel_subscription' | 'site_default';
      show_description_in_invoices?:boolean;
      show_description_in_quotes?:boolean;
      tax_detail?:{avalara_sale_type?:AvalaraSaleType,avalara_service_type?:number,avalara_tax_code?:string,avalara_transaction_type?:number,hsn_code?:string,tax_profile_id?:string,taxjar_product_code?:string};
      accounting_detail?:{accounting_category1?:string,accounting_category2?:string,accounting_category3?:string,accounting_category4?:string,accounting_code?:string,sku?:string};
      tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
    }
    export interface DeleteResponse {
      item_price:ItemPrice;
    }
    
    export interface FindApplicableItemPricesResponse {
      list:{item_price:ItemPrice}[];
      next_offset?:string;
    }
    export interface FindApplicableItemPricesInputParam {
      [key: string]: string | number | object | boolean;
      limit?:number;
      offset?:string;
      item_id?:string;
      sort_by?:{asc?:'updated_at' | 'name' | 'id',desc?:'updated_at' | 'name' | 'id'};
    }
    export interface ListResponse {
      list:{item_price:ItemPrice}[];
      next_offset?:string;
    }
    export interface ListInputParam {
      [key: string]: string | number | object | boolean;
      limit?:number;
      offset?:string;
      id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      name?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      pricing_model?:{in?:string,is?:'volume' | 'per_unit' | 'tiered' | 'flat_fee' | 'stairstep',is_not?:'volume' | 'per_unit' | 'tiered' | 'flat_fee' | 'stairstep',not_in?:string};
      item_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      item_family_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      item_type?:{in?:string,is?:'charge' | 'addon' | 'plan',is_not?:'charge' | 'addon' | 'plan',not_in?:string};
      currency_code?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      trial_period?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
      trial_period_unit?:{in?:string,is?:'month' | 'day',is_not?:'month' | 'day',not_in?:string};
      status?:{in?:string,is?:'archived' | 'deleted' | 'active',is_not?:'archived' | 'deleted' | 'active',not_in?:string};
      updated_at?:{after?:string,before?:string,between?:string,on?:string};
      period_unit?:{in?:string,is?:'week' | 'month' | 'year' | 'day',is_not?:'week' | 'month' | 'year' | 'day',not_in?:string};
      period?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
      channel?:{in?:string,is?:'app_store' | 'web' | 'play_store',is_not?:'app_store' | 'web' | 'play_store',not_in?:string};
      sort_by?:{asc?:'updated_at' | 'name' | 'id',desc?:'updated_at' | 'name' | 'id'};
    }
    export interface CreateResponse {
      item_price:ItemPrice;
    }
    export interface CreateInputParam {
      [key : string] : any;
      id:string;
      name:string;
      description?:string;
      item_id:string;
      invoice_notes?:string;
      external_name?:string;
      currency_code?:string;
      is_taxable?:boolean;
      free_quantity?:number;
      free_quantity_in_decimal?:string;
      metadata?:object;
      show_description_in_invoices?:boolean;
      show_description_in_quotes?:boolean;
      pricing_model?:PricingModel;
      price?:number;
      price_in_decimal?:string;
      period_unit?:'week' | 'month' | 'year' | 'day';
      period?:number;
      trial_period_unit?:'month' | 'day';
      trial_period?:number;
      shipping_period?:number;
      shipping_period_unit?:'week' | 'month' | 'year' | 'day';
      billing_cycles?:number;
      trial_end_action?:'activate_subscription' | 'cancel_subscription' | 'site_default';
      tax_detail?:{avalara_sale_type?:AvalaraSaleType,avalara_service_type?:number,avalara_tax_code?:string,avalara_transaction_type?:number,hsn_code?:string,tax_profile_id?:string,taxjar_product_code?:string};
      accounting_detail?:{accounting_category1?:string,accounting_category2?:string,accounting_category3?:string,accounting_category4?:string,accounting_code?:string,sku?:string};
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
    export interface TaxDetail {
      tax_profile_id?:string;
      avalara_sale_type?:AvalaraSaleType;
      avalara_transaction_type?:number;
      avalara_service_type?:number;
      avalara_tax_code?:string;
      hsn_code?:string;
      taxjar_product_code?:string;
    }
    export interface AccountingDetail {
      sku?:string;
      accounting_code?:string;
      accounting_category1?:string;
      accounting_category2?:string;
      accounting_category3?:string;
      accounting_category4?:string;
    }
  }
}