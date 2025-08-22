///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface ItemPrice {
    [key : string] : any;

    id:string;

    name:string;

    item_family_id?:string;

    item_id?:string;

    description?:string;

    status?:'active' | 'archived' | 'deleted';

    external_name?:string;

    price_variant_id?:string;

    proration_type?:'site_default' | 'partial_term' | 'full_term';

    pricing_model:PricingModel;

    price?:number;

    price_in_decimal?:string;

    period?:number;

    currency_code:string;

    period_unit?:'day' | 'week' | 'month' | 'year';

    trial_period?:number;

    trial_period_unit?:'day' | 'month';

    trial_end_action?:'site_default' | 'activate_subscription' | 'cancel_subscription';

    shipping_period?:number;

    shipping_period_unit?:'day' | 'week' | 'month' | 'year';

    billing_cycles?:number;

    free_quantity:number;

    free_quantity_in_decimal?:string;

    channel?:Channel;

    resource_version?:number;

    updated_at?:number;

    created_at:number;

    usage_accumulation_reset_frequency?:UsageAccumulationResetFrequency;

    archived_at?:number;

    invoice_notes?:string;

    tiers?:ItemPrice.Tier[];

    is_taxable?:boolean;

    tax_detail?:ItemPrice.TaxDetail;

    tax_providers_fields?:ItemPrice.TaxProvidersField[];

    accounting_detail?:ItemPrice.AccountingDetail;

    metadata?:object;

    item_type?:ItemType;

    archivable?:boolean;

    parent_item_id?:string;

    show_description_in_invoices?:boolean;

    show_description_in_quotes?:boolean;

    deleted:boolean;

    business_entity_id?:string;

  }
  export namespace ItemPrice {
    export class ItemPriceResource {  
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
       
      retrieve(item_price_id:string):ChargebeeRequest<RetrieveResponse>;
       
      update(item_price_id:string, input:UpdateInputParam):ChargebeeRequest<UpdateResponse>;
       
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
       
      delete(item_price_id:string):ChargebeeRequest<DeleteResponse>;
       
      find_applicable_items(item_price_id:string, input?:FindApplicableItemsInputParam):ChargebeeRequest<FindApplicableItemsResponse>;
       
      find_applicable_item_prices(item_price_id:string, input?:FindApplicableItemPricesInputParam):ChargebeeRequest<FindApplicableItemPricesResponse>;
    }
    export interface CreateResponse {  
       item_price:ItemPrice;
    }
    export interface CreateInputParam {
      [key : string] : any;  
      tax_detail?:{avalara_sale_type?:AvalaraSaleType,avalara_service_type?:number,avalara_tax_code?:string,avalara_transaction_type?:number,hsn_code?:string,tax_profile_id?:string,taxjar_product_code?:string};
       
      accounting_detail?:{accounting_category1?:string,accounting_category2?:string,accounting_category3?:string,accounting_category4?:string,accounting_code?:string,sku?:string};
       
      tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,package_size?:number,price?:number,price_in_decimal?:string,pricing_type?:PricingType,starting_unit?:number,starting_unit_in_decimal?:string}[];
       
      tax_providers_fields:{field_id:string,field_value:string,provider_name:string}[];
       
      id:string;
       
      name:string;
       
      description?:string;
       
      item_id:string;
       
      invoice_notes?:string;
       
      proration_type?:'site_default' | 'partial_term' | 'full_term';
       
      external_name?:string;
       
      currency_code?:string;
       
      price_variant_id?:string;
       
      is_taxable?:boolean;
       
      free_quantity?:number;
       
      free_quantity_in_decimal?:string;
       
      metadata?:object;
       
      show_description_in_invoices?:boolean;
       
      show_description_in_quotes?:boolean;
       
      usage_accumulation_reset_frequency?:UsageAccumulationResetFrequency;
       
      business_entity_id?:string;
       
      pricing_model?:PricingModel;
       
      price?:number;
       
      price_in_decimal?:string;
       
      period_unit?:'day' | 'week' | 'month' | 'year';
       
      period?:number;
       
      trial_period_unit?:'day' | 'month';
       
      trial_period?:number;
       
      shipping_period?:number;
       
      shipping_period_unit?:'day' | 'week' | 'month' | 'year';
       
      billing_cycles?:number;
       
      trial_end_action?:'site_default' | 'activate_subscription' | 'cancel_subscription';
    }
    export interface RetrieveResponse {  
       item_price:ItemPrice;
    }
    
    export interface UpdateResponse {  
       item_price:ItemPrice;
    }
    export interface UpdateInputParam {
      [key : string] : any;  
      tax_detail?:{avalara_sale_type?:AvalaraSaleType,avalara_service_type?:number,avalara_tax_code?:string,avalara_transaction_type?:number,hsn_code?:string,tax_profile_id?:string,taxjar_product_code?:string};
       
      accounting_detail?:{accounting_category1?:string,accounting_category2?:string,accounting_category3?:string,accounting_category4?:string,accounting_code?:string,sku?:string};
       
      tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,package_size?:number,price?:number,price_in_decimal?:string,pricing_type?:PricingType,starting_unit?:number,starting_unit_in_decimal?:string}[];
       
      tax_providers_fields:{field_id:string,field_value:string,provider_name:string}[];
       
      name?:string;
       
      description?:string;
       
      proration_type?:'site_default' | 'partial_term' | 'full_term';
       
      price_variant_id?:string;
       
      status?:'active' | 'archived';
       
      external_name?:string;
       
      usage_accumulation_reset_frequency?:UsageAccumulationResetFrequency;
       
      currency_code?:string;
       
      invoice_notes?:string;
       
      is_taxable?:boolean;
       
      free_quantity?:number;
       
      free_quantity_in_decimal?:string;
       
      metadata?:object;
       
      pricing_model?:PricingModel;
       
      price?:number;
       
      price_in_decimal?:string;
       
      period_unit?:'day' | 'week' | 'month' | 'year';
       
      period?:number;
       
      trial_period_unit?:'day' | 'month';
       
      trial_period?:number;
       
      shipping_period?:number;
       
      shipping_period_unit?:'day' | 'week' | 'month' | 'year';
       
      billing_cycles?:number;
       
      trial_end_action?:'site_default' | 'activate_subscription' | 'cancel_subscription';
       
      show_description_in_invoices?:boolean;
       
      show_description_in_quotes?:boolean;
    }
    export interface ListResponse {  
       list:{item_price:ItemPrice}[];
       
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
        * @description Filter item prices based on their [id](#).

        */
        
      id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Filter item prices based on their &#x60;name&#x60;s.

        */
        
      name?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Filter item prices based on their &#x60;pricing_model&#x60;.

        */
        
      pricing_model?:{in?:string,is?:'flat_fee' | 'per_unit' | 'tiered' | 'volume' | 'stairstep',is_not?:'flat_fee' | 'per_unit' | 'tiered' | 'volume' | 'stairstep',not_in?:string};
       
      /**
        * @description Filter item prices based on their &#x60;item_id&#x60;.

        */
        
      item_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Filter item prices based on &#x60;item_family_id&#x60;.

        */
        
      item_family_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Filter item prices based on &#x60;item_type&#x60;.

        */
        
      item_type?:{in?:string,is?:'plan' | 'addon' | 'charge',is_not?:'plan' | 'addon' | 'charge',not_in?:string};
       
      /**
        * @description Filter item prices based on their &#x60;currency_code&#x60;.

        */
        
      currency_code?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Filter item prices based on their &#x60;price_variant_id&#x60;.

        */
        
      price_variant_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Filter item prices based on their &#x60;trial_period&#x60;.

        */
        
      trial_period?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
       
      /**
        * @description Filter item prices based on their &#x60;trial_period_unit&#x60;.

        */
        
      trial_period_unit?:{in?:string,is?:'day' | 'month',is_not?:'day' | 'month',not_in?:string};
       
      /**
        * @description Filter item prices based on their &#x60;status&#x60;.

        */
        
      status?:{in?:string,is?:'active' | 'archived' | 'deleted',is_not?:'active' | 'archived' | 'deleted',not_in?:string};
       
      /**
        * @description Filter item prices based on their &#x60;updated_at&#x60;.

        */
        
      updated_at?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description The unique ID of the [business entity](/docs/api?prod_cat_ver&#x3D;2#mbe) of this subscription. This is always the same as the [business entity](/docs/api/subscriptions?prod_cat_ver&#x3D;2#subscription_customer_id) of the customer.  
The ID of the business entity created for the site. For Product Catalog 1.0, all the site data is tied to this business entity.  
**Note**

[Multiple Business Entities](/docs/api?prod_cat_ver&#x3D;2#mbe) is a feature available only on Product Catalog 2.0.

        */
        
      business_entity_id?:{is?:string,is_present?:'true' | 'false'};
       
      include_site_level_resources?:{is?:'true' | 'false'};
       
      /**
        * @description Filter item prices based on their &#x60;period_unit&#x60;.

        */
        
      period_unit?:{in?:string,is?:'day' | 'week' | 'month' | 'year',is_not?:'day' | 'week' | 'month' | 'year',not_in?:string};
       
      /**
        * @description Filter item prices based on their &#x60;period&#x60;.

        */
        
      period?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
       
      /**
        * @description The subscription channel this object originated from and is maintained in.

        */
        
      channel?:{in?:string,is?:'web' | 'app_store' | 'play_store',is_not?:'web' | 'app_store' | 'play_store',not_in?:string};
       
      sort_by?:{asc?:'name' | 'id' | 'updated_at',desc?:'name' | 'id' | 'updated_at'};
    }
    export interface DeleteResponse {  
       item_price:ItemPrice;
    }
    
    export interface FindApplicableItemsResponse {  
       list:{item:Item}[];
       
       next_offset?:string;
    }
    export interface FindApplicableItemsInputParam {
      [key : string]: any;  
      /**
        * @description The number of resources to be returned.

        */
        
      limit?:number;
       
      /**
        * @description Determines your position in the list for pagination. To ensure that the next page is retrieved correctly, always set &#x27;offset&#x27; to the value of &#x27;next_offset&#x27; obtained in the previous iteration of the API call.

        */
        
      offset?:string;
       
      sort_by?:{asc?:'name' | 'id' | 'updated_at',desc?:'name' | 'id' | 'updated_at'};
    }
    export interface FindApplicableItemPricesResponse {  
       list:{item_price:ItemPrice}[];
       
       next_offset?:string;
    }
    export interface FindApplicableItemPricesInputParam {
      [key : string]: any;  
      /**
        * @description The number of resources to be returned.

        */
        
      limit?:number;
       
      /**
        * @description Determines your position in the list for pagination. To ensure that the next page is retrieved correctly, always set &#x27;offset&#x27; to the value of &#x27;next_offset&#x27; obtained in the previous iteration of the API call.

        */
        
      offset?:string;
       
      item_id?:string;
       
      sort_by?:{asc?:'name' | 'id' | 'updated_at',desc?:'name' | 'id' | 'updated_at'};
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
    export interface TaxDetail {  
      tax_profile_id?:string;
       
      avalara_sale_type?:AvalaraSaleType;
       
      avalara_transaction_type?:number;
       
      avalara_service_type?:number;
       
      avalara_tax_code?:string;
       
      hsn_code?:string;
       
      taxjar_product_code?:string;
    }
    export interface TaxProvidersField {  
      provider_name:string;
       
      field_id:string;
       
      field_value:string;
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