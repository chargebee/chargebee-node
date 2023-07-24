///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface Purchase {
    id?:string;
    customer_id:string;
    created_at?:number;
    modified_at?:number;
    subscription_ids?:string[];
    invoice_ids?:string[];
  }
  export namespace Purchase {
    export class PurchaseResource {
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
      estimate(input?:EstimateInputParam):ChargebeeRequest<EstimateResponse>;
    }
    export interface CreateResponse {
      purchase:Purchase;
    }
    export interface CreateInputParam {
      customer_id:string;
      invoice_info?:{notes?:string,po_number?:string};
      purchase_items?:{index:number,item_price_id:string,quantity?:number,quantity_in_decimal?:string,unit_amount?:number,unit_amount_in_decimal?:string}[];
      item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,index:number,item_price_id?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
      shipping_addresses?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string}[];
      discounts?:{amount?:number,coupon_id?:string,included_in_mrr?:boolean,index?:number,percentage?:number}[];
      subscription_info?:{billing_cycles?:number,index:number,meta_data?:object,subscription_id?:string}[];
    }
    export interface EstimateResponse {
      estimate:Estimate;
    }
    export interface EstimateInputParam {
      client_profile_id?:string;
      customer_id?:string;
      customer?:{customer_type?:CustomerType,entity_code?:EntityCode,exempt_number?:string,exemption_details?:any[],registered_for_gst?:boolean,taxability?:Taxability,vat_number?:string,vat_number_prefix?:string};
      billing_address?:{city?:string,country?:string,line1?:string,line2?:string,line3?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
      purchase_items?:{index:number,item_price_id:string,quantity?:number,quantity_in_decimal?:string,unit_amount?:number,unit_amount_in_decimal?:string}[];
      item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,index:number,item_price_id?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
      shipping_addresses?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string}[];
      discounts?:{amount?:number,coupon_id?:string,included_in_mrr?:boolean,index?:number,percentage?:number}[];
      subscription_info?:{billing_cycles?:number,index:number,subscription_id?:string}[];
    }
    
  }
}