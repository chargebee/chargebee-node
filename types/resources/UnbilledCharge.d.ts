///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface UnbilledCharge {
    
    id?:string;
    
    customer_id?:string;
    
    subscription_id?:string;
    
    date_from?:number;
    
    date_to?:number;
    
    unit_amount?:number;
    
    pricing_model?:PricingModel;
    
    quantity?:number;
    
    amount?:number;
    
    currency_code:string;
    
    discount_amount?:number;
    
    description?:string;
    
    entity_type:'plan_setup' | 'plan' | 'addon' | 'adhoc' | 'plan_item_price' | 'addon_item_price' | 'charge_item_price';
    
    entity_id?:string;
    
    is_voided:boolean;
    
    voided_at?:number;
    
    unit_amount_in_decimal?:string;
    
    quantity_in_decimal?:string;
    
    amount_in_decimal?:string;
    
    updated_at:number;
    
    tiers?:UnbilledCharge.LineItemTier[];
    
    is_advance_charge?:boolean;
    
    business_entity_id?:string;
    
    deleted:boolean;
  }
  export namespace UnbilledCharge {
    export class UnbilledChargeResource {  
      create_unbilled_charge(input:CreateUnbilledChargeInputParam):ChargebeeRequest<CreateUnbilledChargeResponse>;
       
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
       
      invoice_unbilled_charges(input?:InvoiceUnbilledChargesInputParam):ChargebeeRequest<InvoiceUnbilledChargesResponse>;
       
      delete(unbilled_charge_id:string):ChargebeeRequest<DeleteResponse>;
       
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
       
      invoice_now_estimate(input?:InvoiceNowEstimateInputParam):ChargebeeRequest<InvoiceNowEstimateResponse>;
    }
    export interface CreateUnbilledChargeResponse {  
       unbilled_charges:UnbilledCharge[];
    }
    export interface CreateUnbilledChargeInputParam {
       
      addons?:{date_from?:number,date_to?:number,id?:string,quantity?:number,quantity_in_decimal?:string,unit_price?:number,unit_price_in_decimal?:string}[];
       
      charges?:{amount?:number,amount_in_decimal?:string,avalara_sale_type?:AvalaraSaleType,avalara_service_type?:number,avalara_tax_code?:string,avalara_transaction_type?:number,date_from?:number,date_to?:number,description?:string,hsn_code?:string,tax_profile_id?:string,taxable?:boolean,taxjar_product_code?:string}[];
       
      tax_providers_fields?:{field_id?:string,field_value?:string,provider_name?:string}[];
       
      subscription_id:string;
       
      currency_code?:string;
    }
    export interface CreateResponse {  
       unbilled_charges:UnbilledCharge[];
    }
    export interface CreateInputParam {
       
      item_prices?:{date_from?:number,date_to?:number,item_price_id?:string,quantity?:number,quantity_in_decimal?:string,unit_price?:number,unit_price_in_decimal?:string}[];
       
      item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,item_price_id?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
       
      charges?:{amount?:number,amount_in_decimal?:string,avalara_sale_type?:AvalaraSaleType,avalara_service_type?:number,avalara_tax_code?:string,avalara_transaction_type?:number,date_from?:number,date_to?:number,description?:string,hsn_code?:string,tax_profile_id?:string,taxable?:boolean,taxjar_product_code?:string}[];
       
      tax_providers_fields?:{field_id?:string,field_value?:string,provider_name?:string}[];
       
      subscription_id:string;
       
      currency_code?:string;
    }
    export interface InvoiceUnbilledChargesResponse {  
       invoices:Invoice[];
    }
    export interface InvoiceUnbilledChargesInputParam {
       
      subscription_id?:string;
       
      customer_id?:string;
    }
    export interface DeleteResponse {  
       unbilled_charge:UnbilledCharge;
    }
    
    export interface ListResponse {  
       list:{unbilled_charge:UnbilledCharge}[];
       
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
        * @description Indicates whether to include deleted objects in the list. The deleted objects have the attribute \&#x60;deleted\&#x60; as \&#x60;true\&#x60;.

        */
        
      include_deleted?:boolean;
       
      is_voided?:boolean;
       
      /**
        * @description A unique identifier for the subscription this charge belongs to.

        */
        
      subscription_id?:{in?:string,is?:string,is_not?:string,is_present?:'true' | 'false',not_in?:string,starts_with?:string};
       
      /**
        * @description A unique identifier for the customer being charged.

        */
        
      customer_id?:{in?:string,is?:string,is_not?:string,is_present?:'true' | 'false',not_in?:string,starts_with?:string};
    }
    export interface InvoiceNowEstimateResponse {  
       estimate:Estimate;
    }
    export interface InvoiceNowEstimateInputParam {
       
      subscription_id?:string;
       
      customer_id?:string;
    }
    export interface Tier {  
      starting_unit:number;
       
      ending_unit?:number;
       
      quantity_used:number;
       
      unit_amount:number;
       
      starting_unit_in_decimal?:string;
       
      ending_unit_in_decimal?:string;
       
      quantity_used_in_decimal?:string;
       
      unit_amount_in_decimal?:string;
    }
  }
}