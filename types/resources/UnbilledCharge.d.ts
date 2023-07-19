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
    entity_type:'addon_item_price' | 'plan_item_price' | 'charge_item_price' | 'adhoc';
    entity_id?:string;
    is_voided:boolean;
    voided_at?:number;
    unit_amount_in_decimal?:string;
    quantity_in_decimal?:string;
    amount_in_decimal?:string;
    updated_at:number;
    is_advance_charge?:boolean;
    deleted:boolean;
    tiers?:UnbilledCharge.LineItemTier[];
  }
  export namespace UnbilledCharge {
    export class UnbilledChargeResource {
      delete(unbilled_charge_id:string):ChargebeeRequest<DeleteResponse>;
      invoice_now_estimate(input?:InvoiceNowEstimateInputParam):ChargebeeRequest<InvoiceNowEstimateResponse>;
      invoice_unbilled_charges(input?:InvoiceUnbilledChargesInputParam):ChargebeeRequest<InvoiceUnbilledChargesResponse>;
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
    }
    export interface DeleteResponse {
      unbilled_charge:UnbilledCharge;
    }
    
    export interface InvoiceNowEstimateResponse {
      estimate:Estimate;
    }
    export interface InvoiceNowEstimateInputParam {
      
      subscription_id?:string;
      customer_id?:string;
    }
    export interface InvoiceUnbilledChargesResponse {
      invoices:Invoice[];
    }
    export interface InvoiceUnbilledChargesInputParam {
      
      subscription_id?:string;
      customer_id?:string;
    }
    export interface ListResponse {
      list:{unbilled_charge:UnbilledCharge}[];
      next_offset?:string;
    }
    export interface ListInputParam {
      [key: string]: string | number | object | boolean;
      limit?:number;
      offset?:string;
      include_deleted?:boolean;
      is_voided?:boolean;
      subscription_id?:{in?:string,is?:string,is_not?:string,is_present?:'true' | 'false',not_in?:string,starts_with?:string};
      customer_id?:{in?:string,is?:string,is_not?:string,is_present?:'true' | 'false',not_in?:string,starts_with?:string};
    }
    export interface CreateResponse {
      unbilled_charges:UnbilledCharge[];
    }
    export interface CreateInputParam {
      
      subscription_id:string;
      currency_code?:string;
      item_prices?:{date_from?:number,date_to?:number,item_price_id?:string,quantity?:number,quantity_in_decimal?:string,unit_price?:number,unit_price_in_decimal?:string}[];
      item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,item_price_id?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
      charges?:{amount?:number,amount_in_decimal?:string,avalara_sale_type?:AvalaraSaleType,avalara_service_type?:number,avalara_tax_code?:string,avalara_transaction_type?:number,date_from?:number,date_to?:number,description?:string,hsn_code?:string,tax_profile_id?:string,taxable?:boolean,taxjar_product_code?:string}[];
    }
    export interface LineItemTier {
      starting_unit?:number;
      ending_unit?:number;
      quantity_used?:number;
      unit_amount?:number;
      starting_unit_in_decimal?:string;
      ending_unit_in_decimal?:string;
      quantity_used_in_decimal?:string;
      unit_amount_in_decimal?:string;
    }
  }
}