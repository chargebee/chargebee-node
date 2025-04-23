///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface Plan {
    [key : string] : any;

    id:string;

    name:string;

    invoice_name?:string;

    description?:string;

    price?:number;

    currency_code:string;

    period:number;

    period_unit:'day' | 'week' | 'month' | 'year';

    trial_period?:number;

    trial_period_unit?:'day' | 'month';

    trial_end_action?:'site_default' | 'activate_subscription' | 'cancel_subscription';

    pricing_model:PricingModel;

    charge_model:'flat_fee' | 'per_unit' | 'tiered' | 'volume' | 'stairstep';

    free_quantity:number;

    setup_cost?:number;

    downgrade_penalty?:number;

    status:'active' | 'archived' | 'deleted';

    archived_at?:number;

    billing_cycles?:number;

    redirect_url?:string;

    enabled_in_hosted_pages:boolean;

    enabled_in_portal:boolean;

    addon_applicability:'all' | 'restricted';

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

    giftable:boolean;

    claim_url?:string;

    free_quantity_in_decimal?:string;

    price_in_decimal?:string;

    channel?:Channel;

    invoice_notes?:string;

    taxable?:boolean;

    tax_profile_id?:string;

    meta_data?:object;

    tiers?:Plan.Tier[];

    tax_providers_fields?:Plan.TaxProvidersField[];

    applicable_addons?:Plan.ApplicableAddon[];

    attached_addons?:Plan.AttachedAddon[];

    event_based_addons?:Plan.EventBasedAddon[];

    show_description_in_invoices?:boolean;

    show_description_in_quotes?:boolean;

  }
  export namespace Plan {
    export class PlanResource {  
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
       
      update(plan_id:string, input:UpdateInputParam):ChargebeeRequest<UpdateResponse>;
       
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
       
      retrieve(plan_id:string):ChargebeeRequest<RetrieveResponse>;
       
      delete(plan_id:string):ChargebeeRequest<DeleteResponse>;
       
      copy(input:CopyInputParam):ChargebeeRequest<CopyResponse>;
       
      unarchive(plan_id:string):ChargebeeRequest<UnarchiveResponse>;
    }
    export interface CreateResponse {  
       plan:Plan;
    }
    export interface CreateInputParam {
      [key : string] : any;  
      tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
       
      tax_providers_fields:{field_id:string,field_value:string,provider_name:string}[];
       
      applicable_addons?:{id?:string}[];
       
      event_based_addons?:{charge_once?:boolean,id?:string,on_event?:OnEvent,quantity?:number,quantity_in_decimal?:string}[];
       
      attached_addons?:{billing_cycles?:number,id?:string,quantity?:number,quantity_in_decimal?:string,type?:'recommended' | 'mandatory'}[];
       
      id:string;
       
      name:string;
       
      invoice_name?:string;
       
      description?:string;
       
      trial_period?:number;
       
      trial_period_unit?:'day' | 'month';
       
      trial_end_action?:'site_default' | 'activate_subscription' | 'cancel_subscription';
       
      period?:number;
       
      period_unit?:'day' | 'week' | 'month' | 'year';
       
      setup_cost?:number;
       
      price?:number;
       
      price_in_decimal?:string;
       
      currency_code?:string;
       
      billing_cycles?:number;
       
      pricing_model?:PricingModel;
       
      charge_model?:'flat_fee' | 'per_unit' | 'tiered' | 'volume' | 'stairstep';
       
      free_quantity?:number;
       
      free_quantity_in_decimal?:string;
       
      addon_applicability?:'all' | 'restricted';
       
      downgrade_penalty?:number;
       
      redirect_url?:string;
       
      enabled_in_hosted_pages?:boolean;
       
      enabled_in_portal?:boolean;
       
      taxable?:boolean;
       
      tax_profile_id?:string;
       
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
       
      invoice_notes?:string;
       
      meta_data?:object;
       
      show_description_in_invoices?:boolean;
       
      show_description_in_quotes?:boolean;
       
      giftable?:boolean;
       
      status?:'active' | 'archived';
       
      claim_url?:string;
    }
    export interface UpdateResponse {  
       plan:Plan;
    }
    export interface UpdateInputParam {
      [key : string] : any;  
      tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
       
      tax_providers_fields:{field_id:string,field_value:string,provider_name:string}[];
       
      name?:string;
       
      invoice_name?:string;
       
      description?:string;
       
      trial_period?:number;
       
      trial_period_unit?:'day' | 'month';
       
      trial_end_action?:'site_default' | 'activate_subscription' | 'cancel_subscription';
       
      period?:number;
       
      period_unit?:'day' | 'week' | 'month' | 'year';
       
      setup_cost?:number;
       
      price?:number;
       
      price_in_decimal?:string;
       
      currency_code?:string;
       
      billing_cycles?:number;
       
      pricing_model?:PricingModel;
       
      charge_model?:'flat_fee' | 'per_unit' | 'tiered' | 'volume' | 'stairstep';
       
      free_quantity?:number;
       
      free_quantity_in_decimal?:string;
       
      addon_applicability?:'all' | 'restricted';
       
      downgrade_penalty?:number;
       
      redirect_url?:string;
       
      enabled_in_hosted_pages?:boolean;
       
      enabled_in_portal?:boolean;
       
      taxable?:boolean;
       
      tax_profile_id?:string;
       
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
       
      invoice_notes?:string;
       
      meta_data?:object;
       
      show_description_in_invoices?:boolean;
       
      show_description_in_quotes?:boolean;
       
      applicable_addons?:{id?:string}[];
       
      attached_addons?:{billing_cycles?:number,id?:string,quantity?:number,quantity_in_decimal?:string,type?:'recommended' | 'mandatory'}[];
       
      event_based_addons?:{charge_once?:boolean,id?:string,on_event?:OnEvent,quantity?:number,quantity_in_decimal?:string}[];
    }
    export interface ListResponse {  
       list:{plan:Plan}[];
       
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
        * @description A unique ID for your system to identify the plan.

        */
        
      id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description The display name used in web interface for identifying the plan.

        */
        
      name?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description The price of the plan. The unit depends on the [type of currency](/docs/api?prod_cat_ver&#x3D;1#md_disabled).

        */
        
      price?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
       
      /**
        * @description Defines billing frequency. Example: to bill customer every 3 months, provide &quot;3&quot; here.

        */
        
      period?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
       
      /**
        * @description Defines billing frequency in association with billing period.

        */
        
      period_unit?:{in?:string,is?:'day' | 'week' | 'month' | 'year',is_not?:'day' | 'week' | 'month' | 'year',not_in?:string};
       
      /**
        * @description The free time window for your customer to try your product

        */
        
      trial_period?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,is_present?:'true' | 'false',lt?:string,lte?:string};
       
      /**
        * @description Time unit for the trial period.

        */
        
      trial_period_unit?:{in?:string,is?:'day' | 'month',is_not?:'day' | 'month',not_in?:string};
       
      /**
        * @description Indicates if all or only some addons are applicable with the plan.

        */
        
      addon_applicability?:{in?:string,is?:'all' | 'restricted',is_not?:'all' | 'restricted',not_in?:string};
       
      /**
        * @description Specifies if the plan should be gifted or not.

        */
        
      giftable?:{is?:'true' | 'false'};
       
      /**
        * @description Defines how the subscription recurring charge for this plan should be calculated.

        */
        
      charge_model?:{in?:string,is?:'flat_fee' | 'per_unit' | 'tiered' | 'volume' | 'stairstep',is_not?:'flat_fee' | 'per_unit' | 'tiered' | 'volume' | 'stairstep',not_in?:string};
       
      /**
        * @description Defines how the recurring charges for the subscription is calculated.

        */
        
      pricing_model?:{in?:string,is?:'flat_fee' | 'per_unit' | 'tiered' | 'volume' | 'stairstep',is_not?:'flat_fee' | 'per_unit' | 'tiered' | 'volume' | 'stairstep',not_in?:string};
       
      /**
        * @description The plan state

        */
        
      status?:{in?:string,is?:'active' | 'archived' | 'deleted',is_not?:'active' | 'archived' | 'deleted',not_in?:string};
       
      /**
        * @description To filter based on updated at. This attribute will be present only if the resource has been updated after 2016-11-09.

        */
        
      updated_at?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description The currency code (ISO 4217 format) of the plan

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
       plan:Plan;
    }
    
    export interface DeleteResponse {  
       plan:Plan;
    }
    
    export interface CopyResponse {  
       plan:Plan;
    }
    export interface CopyInputParam {
       
      from_site:string;
       
      id_at_from_site:string;
       
      id?:string;
       
      for_site_merging?:boolean;
    }
    export interface UnarchiveResponse {  
       plan:Plan;
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
    export interface ApplicableAddon {  
      id:string;
    }
    export interface AttachedAddon {  
      id:string;
       
      quantity:number;
       
      billing_cycles?:number;
       
      type:'recommended' | 'mandatory';
       
      quantity_in_decimal?:string;
    }
    export interface EventBasedAddon {  
      id:string;
       
      quantity:number;
       
      on_event:'subscription_creation' | 'subscription_trial_start' | 'plan_activation' | 'subscription_activation' | 'contract_termination';
       
      charge_once:boolean;
       
      quantity_in_decimal?:string;
    }
  }
}