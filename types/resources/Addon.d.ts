///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface Addon {
    [key : string] : any;

    id:string;

    name:string;

    invoice_name?:string;

    description?:string;

    pricing_model:PricingModel;

    type:'on_off' | 'quantity' | 'tiered' | 'volume' | 'stairstep';

    charge_type:'recurring' | 'non_recurring';

    price?:number;

    currency_code:string;

    period?:number;

    period_unit:'day' | 'week' | 'month' | 'year' | 'not_applicable';

    unit?:string;

    status:'active' | 'archived' | 'deleted';

    archived_at?:number;

    enabled_in_portal:boolean;

    tax_code?:string;

    hsn_code?:string;

    taxjar_product_code?:string;

    avalara_sale_type?:AvalaraSaleType;

    avalara_transaction_type?:number;

    avalara_service_type?:number;

    sku?:string;

    accounting_code?:string;

    accounting_category1?:string;

    accounting_category2?:string;

    accounting_category3?:string;

    accounting_category4?:string;

    is_shippable?:boolean;

    shipping_frequency_period?:number;

    shipping_frequency_period_unit?:'year' | 'month' | 'week' | 'day';

    resource_version?:number;

    updated_at?:number;

    price_in_decimal?:string;

    included_in_mrr?:boolean;

    channel?:Channel;

    proration_type?:'site_default' | 'partial_term' | 'full_term';

    invoice_notes?:string;

    taxable?:boolean;

    tax_profile_id?:string;

    meta_data?:object;

    tiers?:Addon.Tier[];

    tax_providers_fields?:Addon.TaxProvidersField[];

    show_description_in_invoices?:boolean;

    show_description_in_quotes?:boolean;

  }
  export namespace Addon {
    export class AddonResource {  
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
       
      update(addon_id:string, input:UpdateInputParam):ChargebeeRequest<UpdateResponse>;
       
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
       
      retrieve(addon_id:string):ChargebeeRequest<RetrieveResponse>;
       
      delete(addon_id:string):ChargebeeRequest<DeleteResponse>;
       
      copy(input:CopyInputParam):ChargebeeRequest<CopyResponse>;
       
      unarchive(addon_id:string):ChargebeeRequest<UnarchiveResponse>;
    }
    export interface CreateResponse {  
       addon:Addon;
    }
    export interface CreateInputParam {
      [key : string] : any;  
      tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
       
      tax_providers_fields:{field_id:string,field_value:string,provider_name:string}[];
       
      id:string;
       
      name:string;
       
      invoice_name?:string;
       
      description?:string;
       
      charge_type:'recurring' | 'non_recurring';
       
      price?:number;
       
      currency_code?:string;
       
      period?:number;
       
      period_unit?:'day' | 'week' | 'month' | 'year' | 'not_applicable';
       
      pricing_model?:PricingModel;
       
      type?:'on_off' | 'quantity' | 'tiered' | 'volume' | 'stairstep';
       
      unit?:string;
       
      enabled_in_portal?:boolean;
       
      taxable?:boolean;
       
      tax_profile_id?:string;
       
      avalara_sale_type?:AvalaraSaleType;
       
      avalara_transaction_type?:number;
       
      avalara_service_type?:number;
       
      tax_code?:string;
       
      hsn_code?:string;
       
      taxjar_product_code?:string;
       
      invoice_notes?:string;
       
      meta_data?:object;
       
      sku?:string;
       
      accounting_code?:string;
       
      accounting_category1?:string;
       
      accounting_category2?:string;
       
      accounting_category3?:string;
       
      accounting_category4?:string;
       
      is_shippable?:boolean;
       
      shipping_frequency_period?:number;
       
      shipping_frequency_period_unit?:'year' | 'month' | 'week' | 'day';
       
      included_in_mrr?:boolean;
       
      show_description_in_invoices?:boolean;
       
      show_description_in_quotes?:boolean;
       
      price_in_decimal?:string;
       
      proration_type?:'site_default' | 'partial_term' | 'full_term';
       
      status?:'active' | 'archived';
    }
    export interface UpdateResponse {  
       addon:Addon;
    }
    export interface UpdateInputParam {
      [key : string] : any;  
      tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
       
      tax_providers_fields:{field_id:string,field_value:string,provider_name:string}[];
       
      name?:string;
       
      invoice_name?:string;
       
      description?:string;
       
      charge_type?:'recurring' | 'non_recurring';
       
      price?:number;
       
      currency_code?:string;
       
      period?:number;
       
      period_unit?:'day' | 'week' | 'month' | 'year' | 'not_applicable';
       
      pricing_model?:PricingModel;
       
      type?:'on_off' | 'quantity' | 'tiered' | 'volume' | 'stairstep';
       
      unit?:string;
       
      enabled_in_portal?:boolean;
       
      taxable?:boolean;
       
      tax_profile_id?:string;
       
      avalara_sale_type?:AvalaraSaleType;
       
      avalara_transaction_type?:number;
       
      avalara_service_type?:number;
       
      tax_code?:string;
       
      hsn_code?:string;
       
      taxjar_product_code?:string;
       
      invoice_notes?:string;
       
      meta_data?:object;
       
      sku?:string;
       
      accounting_code?:string;
       
      accounting_category1?:string;
       
      accounting_category2?:string;
       
      accounting_category3?:string;
       
      accounting_category4?:string;
       
      is_shippable?:boolean;
       
      shipping_frequency_period?:number;
       
      shipping_frequency_period_unit?:'year' | 'month' | 'week' | 'day';
       
      included_in_mrr?:boolean;
       
      show_description_in_invoices?:boolean;
       
      show_description_in_quotes?:boolean;
       
      price_in_decimal?:string;
       
      proration_type?:'site_default' | 'partial_term' | 'full_term';
    }
    export interface ListResponse {  
       list:{addon:Addon}[];
       
       next_offset?:string;
    }
    export interface ListInputParam {
      [key : string]: any;  
      /**
        * @description The number of resources to be returned.

        */
        
      limit?:number;
       
      /**
        * @description Determines your position in the list for pagination. To ensure that the next page is retrieved correctly, always set \&#x60;offset\&#x60; to the value of \&#x60;next_offset\&#x60; obtained in the previous iteration of the API call.

        */
        
      offset?:string;
       
      /**
        * @description A unique ID for your system to identify the addon.

        */
        
      id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description The display name used in web interface for identifying the addon.

        */
        
      name?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Defines how the charges for the addons are calculated.

        */
        
      pricing_model?:{in?:string,is?:'flat_fee' | 'per_unit' | 'tiered' | 'volume' | 'stairstep',is_not?:'flat_fee' | 'per_unit' | 'tiered' | 'volume' | 'stairstep',not_in?:string};
       
      /**
        * @description Select &quot;On-Off&quot; to charge a flat fee or &quot;Quantity&quot; for unit based charges.

        */
        
      type?:{in?:string,is?:'on_off' | 'quantity' | 'tiered' | 'volume' | 'stairstep',is_not?:'on_off' | 'quantity' | 'tiered' | 'volume' | 'stairstep',not_in?:string};
       
      /**
        * @description Type of charge

        */
        
      charge_type?:{in?:string,is?:'recurring' | 'non_recurring',is_not?:'recurring' | 'non_recurring',not_in?:string};
       
      /**
        * @description Addon price is calculated based on the addon type and charge type. [Learn more](https://www.chargebee.com/docs/addons.html#charge-type-and-pricing). The unit depends on the [type of currency](/docs/api?prod_cat_ver&#x3D;1#md_disabled).

        */
        
      price?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
       
      /**
        * @description Applicable only for recurring-addons. Along with &#x27;period_unit&#x27; decides the term-price of this addon.

        */
        
      period?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
       
      /**
        * @description Applicable only for recurring-addons. Along with &#x27;period&#x27; decides the term-price of this addon

        */
        
      period_unit?:{in?:string,is?:'day' | 'week' | 'month' | 'year' | 'not_applicable',is_not?:'day' | 'week' | 'month' | 'year' | 'not_applicable',not_in?:string};
       
      /**
        * @description Status of the addon

        */
        
      status?:{in?:string,is?:'active' | 'archived' | 'deleted',is_not?:'active' | 'archived' | 'deleted',not_in?:string};
       
      /**
        * @description To filter based on updated at. This attribute will be present only if the resource has been updated after 2016-11-09.

        */
        
      updated_at?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description The currency code (ISO 4217 format) of the addon

        */
        
      currency_code?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description The subscription channel this object originated from and is maintained in.

        */
        
      channel?:{in?:string,is?:'web' | 'app_store' | 'play_store',is_not?:'web' | 'app_store' | 'play_store',not_in?:string};
       
      /**
        * @description Indicates whether to include deleted objects in the list. The deleted objects have the attribute \&#x60;deleted\&#x60; as \&#x60;true\&#x60;.

        */
        
      include_deleted?:boolean;
    }
    export interface RetrieveResponse {  
       addon:Addon;
    }
    
    export interface DeleteResponse {  
       addon:Addon;
    }
    
    export interface CopyResponse {  
       addon:Addon;
    }
    export interface CopyInputParam {
       
      from_site:string;
       
      id_at_from_site:string;
       
      id?:string;
       
      for_site_merging?:boolean;
    }
    export interface UnarchiveResponse {  
       addon:Addon;
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
    export interface TaxProvidersField {  
      provider_name:string;
       
      field_id:string;
       
      field_value:string;
    }
  }
}