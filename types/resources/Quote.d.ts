///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface Quote {
    id:string;
    name?:string;
    po_number?:string;
    customer_id:string;
    subscription_id?:string;
    invoice_id?:string;
    status:'declined' | 'invoiced' | 'accepted' | 'closed' | 'open';
    operation_type:'onetime_invoice' | 'change_subscription' | 'create_subscription_for_customer';
    vat_number?:string;
    price_type:PriceType;
    valid_till:number;
    date:number;
    total_payable?:number;
    charge_on_acceptance?:number;
    sub_total:number;
    total?:number;
    credits_applied?:number;
    amount_paid?:number;
    amount_due?:number;
    version?:number;
    resource_version?:number;
    updated_at?:number;
    vat_number_prefix?:string;
    tax_category?:string;
    currency_code:string;
    notes?:any[];
    contract_term_start?:number;
    contract_term_end?:number;
    contract_term_termination_fee?:number;
    business_entity_id:string;
    line_items?:Quote.LineItem[];
    discounts?:Quote.Discount[];
    line_item_discounts?:Quote.LineItemDiscount[];
    taxes?:Quote.Tax[];
    line_item_taxes?:Quote.LineItemTax[];
    line_item_tiers?:Quote.LineItemTier[];
    shipping_address?:Quote.ShippingAddress;
    billing_address?:Quote.BillingAddress;
  }
  export namespace Quote {
    export class QuoteResource {
      create_sub_items_for_customer_quote(customer_id:string, input?:CreateSubItemsForCustomerQuoteInputParam):ChargebeeRequest<CreateSubItemsForCustomerQuoteResponse>;
      retrieve(quote_id:string):ChargebeeRequest<RetrieveResponse>;
      edit_create_sub_customer_quote_for_items(quote_id:string, input?:EditCreateSubCustomerQuoteForItemsInputParam):ChargebeeRequest<EditCreateSubCustomerQuoteForItemsResponse>;
      update_status(quote_id:string, input:UpdateStatusInputParam):ChargebeeRequest<UpdateStatusResponse>;
      update_subscription_quote_for_items(input?:UpdateSubscriptionQuoteForItemsInputParam):ChargebeeRequest<UpdateSubscriptionQuoteForItemsResponse>;
      quote_line_groups_for_quote(quote_id:string, input?:QuoteLineGroupsForQuoteInputParam):ChargebeeRequest<QuoteLineGroupsForQuoteResponse>;
      extend_expiry_date(quote_id:string, input:ExtendExpiryDateInputParam):ChargebeeRequest<ExtendExpiryDateResponse>;
      edit_for_charge_items_and_charges(quote_id:string, input?:EditForChargeItemsAndChargesInputParam):ChargebeeRequest<EditForChargeItemsAndChargesResponse>;
      edit_update_subscription_quote_for_items(quote_id:string, input?:EditUpdateSubscriptionQuoteForItemsInputParam):ChargebeeRequest<EditUpdateSubscriptionQuoteForItemsResponse>;
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
      pdf(quote_id:string, input?:PdfInputParam):ChargebeeRequest<PdfResponse>;
      convert(quote_id:string, input?:ConvertInputParam):ChargebeeRequest<ConvertResponse>;
      create_for_charge_items_and_charges(input:CreateForChargeItemsAndChargesInputParam):ChargebeeRequest<CreateForChargeItemsAndChargesResponse>;
      delete(quote_id:string, input?:DeleteInputParam):ChargebeeRequest<DeleteResponse>;
    }
    export interface CreateSubItemsForCustomerQuoteResponse {
      quote:Quote;
      quoted_subscription?:QuotedSubscription;
    }
    export interface CreateSubItemsForCustomerQuoteInputParam {
      name?:string;
      notes?:string;
      expires_at?:number;
      billing_cycles?:number;
      mandatory_items_to_remove?:string[];
      terms_to_charge?:number;
      billing_alignment_mode?:BillingAlignmentMode;
      coupon_ids?:string[];
      subscription?:{contract_term_billing_cycle_on_renewal?:number,id?:string,po_number?:string,start_date?:number,trial_end?:number};
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
      contract_term?:{action_at_term_end?:'cancel' | 'renew' | 'evergreen',cancellation_cutoff_period?:number};
      subscription_items?:{billing_cycles?:number,charge_on_event?:ChargeOnEvent,charge_on_option?:ChargeOnOption,charge_once?:boolean,item_price_id:string,quantity?:number,quantity_in_decimal?:string,service_period_days?:number,trial_end?:number,unit_price?:number,unit_price_in_decimal?:string}[];
      discounts?:{amount?:number,apply_on:ApplyOn,duration_type:DurationType,included_in_mrr?:boolean,item_price_id?:string,percentage?:number,period?:number,period_unit?:PeriodUnit}[];
      item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,item_price_id?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
    }
    export interface RetrieveResponse {
      quote:Quote;
      quoted_subscription?:QuotedSubscription;
      quoted_charge?:QuotedCharge;
    }
    
    export interface EditCreateSubCustomerQuoteForItemsResponse {
      quote:Quote;
      quoted_subscription?:QuotedSubscription;
    }
    export interface EditCreateSubCustomerQuoteForItemsInputParam {
      notes?:string;
      expires_at?:number;
      billing_cycles?:number;
      mandatory_items_to_remove?:string[];
      terms_to_charge?:number;
      billing_alignment_mode?:BillingAlignmentMode;
      coupon_ids?:string[];
      subscription?:{contract_term_billing_cycle_on_renewal?:number,id?:string,start_date?:number,trial_end?:number};
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
      contract_term?:{action_at_term_end?:'cancel' | 'renew' | 'evergreen',cancellation_cutoff_period?:number};
      subscription_items?:{billing_cycles?:number,charge_on_event?:ChargeOnEvent,charge_on_option?:ChargeOnOption,charge_once?:boolean,item_price_id:string,quantity?:number,quantity_in_decimal?:string,service_period_days?:number,trial_end?:number,unit_price?:number,unit_price_in_decimal?:string}[];
      discounts?:{amount?:number,apply_on:ApplyOn,duration_type:DurationType,included_in_mrr?:boolean,item_price_id?:string,percentage?:number,period?:number,period_unit?:PeriodUnit}[];
      item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,item_price_id?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
    }
    export interface UpdateStatusResponse {
      quote:Quote;
      quoted_subscription?:QuotedSubscription;
      quoted_charge?:QuotedCharge;
    }
    export interface UpdateStatusInputParam {
      status:'declined' | 'accepted' | 'closed';
      comment?:string;
    }
    export interface UpdateSubscriptionQuoteForItemsResponse {
      quote:Quote;
      quoted_subscription?:QuotedSubscription;
    }
    export interface UpdateSubscriptionQuoteForItemsInputParam {
      name?:string;
      notes?:string;
      expires_at?:number;
      mandatory_items_to_remove?:string[];
      replace_items_list?:boolean;
      billing_cycles?:number;
      terms_to_charge?:number;
      reactivate_from?:number;
      billing_alignment_mode?:BillingAlignmentMode;
      coupon_ids?:string[];
      replace_coupon_list?:boolean;
      change_option?:ChangeOption;
      changes_scheduled_at?:number;
      force_term_reset?:boolean;
      reactivate?:boolean;
      subscription?:{auto_collection?:AutoCollection,contract_term_billing_cycle_on_renewal?:number,id:string,offline_payment_method?:OfflinePaymentMethod,start_date?:number,trial_end?:number};
      billing_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
      customer?:{registered_for_gst?:boolean,vat_number?:string,vat_number_prefix?:string};
      contract_term?:{action_at_term_end?:'cancel' | 'renew_once' | 'renew' | 'evergreen',cancellation_cutoff_period?:number};
      subscription_items?:{billing_cycles?:number,charge_on_event?:ChargeOnEvent,charge_on_option?:ChargeOnOption,charge_once?:boolean,item_price_id:string,quantity?:number,quantity_in_decimal?:string,service_period_days?:number,trial_end?:number,unit_price?:number,unit_price_in_decimal?:string}[];
      discounts?:{amount?:number,apply_on:ApplyOn,duration_type:DurationType,id?:string,included_in_mrr?:boolean,item_price_id?:string,operation_type:OperationType,percentage?:number,period?:number,period_unit?:PeriodUnit}[];
      item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,item_price_id?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
    }
    export interface QuoteLineGroupsForQuoteResponse {
      list:{quote_line_group:QuoteLineGroup}[];
      next_offset?:string;
    }
    export interface QuoteLineGroupsForQuoteInputParam {
      [key : string]: any;
      limit?:number;
      offset?:string;
    }
    export interface ExtendExpiryDateResponse {
      quote:Quote;
      quoted_subscription?:QuotedSubscription;
      quoted_charge?:QuotedCharge;
    }
    export interface ExtendExpiryDateInputParam {
      valid_till:number;
    }
    export interface EditForChargeItemsAndChargesResponse {
      quote:Quote;
      quoted_charge?:QuotedCharge;
    }
    export interface EditForChargeItemsAndChargesInputParam {
      po_number?:string;
      notes?:string;
      expires_at?:number;
      currency_code?:string;
      coupon?:string;
      coupon_ids?:string[];
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
      item_prices?:{item_price_id?:string,quantity?:number,quantity_in_decimal?:string,service_period_days?:number,unit_price?:number,unit_price_in_decimal?:string}[];
      item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,item_price_id?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
      charges?:{amount?:number,amount_in_decimal?:string,avalara_sale_type?:AvalaraSaleType,avalara_service_type?:number,avalara_transaction_type?:number,description?:string,service_period?:number}[];
      discounts?:{amount?:number,apply_on:ApplyOn,item_price_id?:string,percentage?:number}[];
    }
    export interface EditUpdateSubscriptionQuoteForItemsResponse {
      quote:Quote;
      quoted_subscription?:QuotedSubscription;
    }
    export interface EditUpdateSubscriptionQuoteForItemsInputParam {
      notes?:string;
      expires_at?:number;
      mandatory_items_to_remove?:string[];
      replace_items_list?:boolean;
      billing_cycles?:number;
      terms_to_charge?:number;
      reactivate_from?:number;
      billing_alignment_mode?:BillingAlignmentMode;
      coupon_ids?:string[];
      replace_coupon_list?:boolean;
      change_option?:ChangeOption;
      changes_scheduled_at?:number;
      force_term_reset?:boolean;
      reactivate?:boolean;
      subscription?:{auto_collection?:AutoCollection,contract_term_billing_cycle_on_renewal?:number,offline_payment_method?:OfflinePaymentMethod,start_date?:number,trial_end?:number};
      billing_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
      customer?:{registered_for_gst?:boolean,vat_number?:string,vat_number_prefix?:string};
      contract_term?:{action_at_term_end?:'cancel' | 'renew_once' | 'renew' | 'evergreen',cancellation_cutoff_period?:number};
      subscription_items?:{billing_cycles?:number,charge_on_event?:ChargeOnEvent,charge_on_option?:ChargeOnOption,charge_once?:boolean,item_price_id:string,quantity?:number,quantity_in_decimal?:string,service_period_days?:number,trial_end?:number,unit_price?:number,unit_price_in_decimal?:string}[];
      discounts?:{amount?:number,apply_on:ApplyOn,duration_type:DurationType,id?:string,included_in_mrr?:boolean,item_price_id?:string,operation_type:OperationType,percentage?:number,period?:number,period_unit?:PeriodUnit}[];
      item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,item_price_id?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
    }
    export interface ListResponse {
      list:{quote:Quote,quoted_subscription?:QuotedSubscription}[];
      next_offset?:string;
    }
    export interface ListInputParam {
      [key : string]: any;
      limit?:number;
      offset?:string;
      include_deleted?:boolean;
      id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      customer_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      subscription_id?:{in?:string,is?:string,is_not?:string,is_present?:'true' | 'false',not_in?:string,starts_with?:string};
      status?:{in?:string,is?:'declined' | 'invoiced' | 'accepted' | 'closed' | 'open',is_not?:'declined' | 'invoiced' | 'accepted' | 'closed' | 'open',not_in?:string};
      date?:{after?:string,before?:string,between?:string,on?:string};
      updated_at?:{after?:string,before?:string,between?:string,on?:string};
      sort_by?:{asc?:'date',desc?:'date'};
    }
    export interface PdfResponse {
      download:Download;
    }
    export interface PdfInputParam {
      consolidated_view?:boolean;
      disposition_type?:DispositionType;
    }
    export interface ConvertResponse {
      quote:Quote;
      quoted_subscription?:QuotedSubscription;
      quoted_charge?:QuotedCharge;
      customer:Customer;
      subscription?:Subscription;
      invoice?:Invoice;
      credit_note?:CreditNote;
      unbilled_charges?:UnbilledCharge[];
    }
    export interface ConvertInputParam {
      invoice_date?:number;
      create_pending_invoices?:boolean;
      first_invoice_pending?:boolean;
      subscription?:{auto_close_invoices?:boolean,auto_collection?:AutoCollection,id?:string,po_number?:string};
    }
    export interface CreateForChargeItemsAndChargesResponse {
      quote:Quote;
      quoted_charge?:QuotedCharge;
    }
    export interface CreateForChargeItemsAndChargesInputParam {
      name?:string;
      customer_id:string;
      po_number?:string;
      notes?:string;
      expires_at?:number;
      currency_code?:string;
      coupon?:string;
      coupon_ids?:string[];
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
      item_prices?:{item_price_id?:string,quantity?:number,quantity_in_decimal?:string,service_period_days?:number,unit_price?:number,unit_price_in_decimal?:string}[];
      item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,item_price_id?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
      charges?:{amount?:number,amount_in_decimal?:string,avalara_sale_type?:AvalaraSaleType,avalara_service_type?:number,avalara_transaction_type?:number,description?:string,service_period?:number}[];
      discounts?:{amount?:number,apply_on:ApplyOn,item_price_id?:string,percentage?:number}[];
    }
    export interface DeleteResponse {
      quote:Quote;
      quoted_subscription?:QuotedSubscription;
      quoted_charge?:QuotedCharge;
    }
    export interface DeleteInputParam {
      comment?:string;
    }
    export interface LineItem {
      id?:string;
      subscription_id?:string;
      date_from?:number;
      date_to?:number;
      unit_amount?:number;
      quantity?:number;
      amount?:number;
      pricing_model?:'volume' | 'per_unit' | 'tiered' | 'flat_fee' | 'stairstep';
      is_taxed?:boolean;
      tax_amount?:number;
      tax_rate?:number;
      unit_amount_in_decimal?:string;
      quantity_in_decimal?:string;
      amount_in_decimal?:string;
      discount_amount?:number;
      item_level_discount_amount?:number;
      reference_line_item_id?:string;
      description?:string;
      entity_description?:string;
      entity_type?:'addon_item_price' | 'plan_item_price' | 'charge_item_price' | 'adhoc';
      tax_exempt_reason?:'high_value_physical_goods' | 'tax_not_configured' | 'reverse_charge' | 'zero_rated' | 'customer_exempt' | 'region_non_taxable' | 'zero_value_item' | 'export' | 'product_exempt';
      entity_id?:string;
      customer_id?:string;
    }
    export interface Discount {
      amount?:number;
      description?:string;
      line_item_id?:string;
      entity_type?:'item_level_coupon' | 'promotional_credits' | 'item_level_discount' | 'prorated_credits' | 'document_level_discount' | 'document_level_coupon';
      discount_type?:'fixed_amount' | 'percentage';
      entity_id?:string;
      coupon_set_code?:string;
    }
    export interface LineItemDiscount {
      line_item_id?:string;
      discount_type?:'item_level_coupon' | 'promotional_credits' | 'item_level_discount' | 'prorated_credits' | 'document_level_discount' | 'document_level_coupon';
      coupon_id?:string;
      entity_id?:string;
      discount_amount?:number;
    }
    export interface Tax {
      name?:string;
      amount?:number;
      description?:string;
    }
    export interface LineItemTax {
      line_item_id?:string;
      tax_name?:string;
      tax_rate?:number;
      is_partial_tax_applied?:boolean;
      is_non_compliance_tax?:boolean;
      taxable_amount?:number;
      tax_amount?:number;
      tax_juris_type?:'special' | 'country' | 'unincorporated' | 'other' | 'city' | 'federal' | 'county' | 'state';
      tax_juris_name?:string;
      tax_juris_code?:string;
      tax_amount_in_local_currency?:number;
      local_currency_code?:string;
    }
    export interface LineItemTier {
      line_item_id?:string;
      starting_unit?:number;
      ending_unit?:number;
      quantity_used?:number;
      unit_amount?:number;
      starting_unit_in_decimal?:string;
      ending_unit_in_decimal?:string;
      quantity_used_in_decimal?:string;
      unit_amount_in_decimal?:string;
    }
    export interface ShippingAddress {
      first_name?:string;
      last_name?:string;
      email?:string;
      company?:string;
      phone?:string;
      line1?:string;
      line2?:string;
      line3?:string;
      city?:string;
      state_code?:string;
      state?:string;
      country?:string;
      zip?:string;
      validation_status?:ValidationStatus;
      index?:number;
    }
    export interface BillingAddress {
      first_name?:string;
      last_name?:string;
      email?:string;
      company?:string;
      phone?:string;
      line1?:string;
      line2?:string;
      line3?:string;
      city?:string;
      state_code?:string;
      state?:string;
      country?:string;
      zip?:string;
      validation_status?:ValidationStatus;
    }
  }
}