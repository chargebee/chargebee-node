///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface HostedPage {
    id?:string;
    type?:'update_payment_method' | 'checkout_one_time' | 'manage_payment_sources' | 'checkout_new' | 'view_voucher' | 'collect_now' | 'checkout_existing' | 'extend_subscription' | 'pre_cancel';
    url?:string;
    state?:'requested' | 'acknowledged' | 'created' | 'cancelled' | 'succeeded';
    pass_thru_content?:string;
    created_at?:number;
    expires_at?:number;
    content:object;
    updated_at?:number;
    resource_version?:number;
    checkout_info?:object;
    business_entity_id?:string;
  }
  export namespace HostedPage {
    export class HostedPageResource {
      checkout_one_time_for_items(input?:CheckoutOneTimeForItemsInputParam):ChargebeeRequest<CheckoutOneTimeForItemsResponse>;
      update_payment_method(input?:UpdatePaymentMethodInputParam):ChargebeeRequest<UpdatePaymentMethodResponse>;
      extend_subscription(input?:ExtendSubscriptionInputParam):ChargebeeRequest<ExtendSubscriptionResponse>;
      events(input:EventsInputParam):ChargebeeRequest<EventsResponse>;
      checkout_gift_for_items(input?:CheckoutGiftForItemsInputParam):ChargebeeRequest<CheckoutGiftForItemsResponse>;
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
      view_voucher(input?:ViewVoucherInputParam):ChargebeeRequest<ViewVoucherResponse>;
      collect_now(input?:CollectNowInputParam):ChargebeeRequest<CollectNowResponse>;
      accept_quote(input?:AcceptQuoteInputParam):ChargebeeRequest<AcceptQuoteResponse>;
      checkout_new_for_items(input?:CheckoutNewForItemsInputParam):ChargebeeRequest<CheckoutNewForItemsResponse>;
      claim_gift(input?:ClaimGiftInputParam):ChargebeeRequest<ClaimGiftResponse>;
      checkout_existing_for_items(input?:CheckoutExistingForItemsInputParam):ChargebeeRequest<CheckoutExistingForItemsResponse>;
      pre_cancel(input?:PreCancelInputParam):ChargebeeRequest<PreCancelResponse>;
      acknowledge(hosted_page_id:string):ChargebeeRequest<AcknowledgeResponse>;
      retrieve_agreement_pdf(input:RetrieveAgreementPdfInputParam):ChargebeeRequest<RetrieveAgreementPdfResponse>;
      retrieve(hosted_page_id:string):ChargebeeRequest<RetrieveResponse>;
      manage_payment_sources(input?:ManagePaymentSourcesInputParam):ChargebeeRequest<ManagePaymentSourcesResponse>;
    }
    export interface CheckoutOneTimeForItemsResponse {
      hosted_page:HostedPage;
    }
    export interface CheckoutOneTimeForItemsInputParam {
      business_entity_id?:string;
      layout?:Layout;
      invoice_note?:string;
      coupon_ids?:string[];
      currency_code?:string;
      redirect_url?:string;
      cancel_url?:string;
      pass_thru_content?:string;
      customer?:object;
      invoice?:{po_number?:string};
      card?:{gateway_account_id?:string};
      billing_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
      item_prices?:{date_from?:number,date_to?:number,item_price_id?:string,quantity?:number,quantity_in_decimal?:string,unit_price?:number,unit_price_in_decimal?:string}[];
      item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,item_price_id?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
      charges?:{amount?:number,amount_in_decimal?:string,avalara_sale_type?:AvalaraSaleType,avalara_service_type?:number,avalara_tax_code?:string,avalara_transaction_type?:number,date_from?:number,date_to?:number,description?:string,hsn_code?:string,tax_profile_id?:string,taxable?:boolean,taxjar_product_code?:string}[];
      discounts?:{amount?:number,apply_on:ApplyOn,item_price_id?:string,percentage?:number}[];
      entity_identifiers?:{id?:string,operation?:Operation,scheme?:string,standard?:string,value?:string}[];
    }
    export interface UpdatePaymentMethodResponse {
      hosted_page:HostedPage;
    }
    export interface UpdatePaymentMethodInputParam {
      redirect_url?:string;
      cancel_url?:string;
      pass_thru_content?:string;
      iframe_messaging?:boolean;
      customer?:{id:string};
      card?:{gateway_account_id?:string};
    }
    export interface ExtendSubscriptionResponse {
      hosted_page:HostedPage;
    }
    export interface ExtendSubscriptionInputParam {
      expiry?:number;
      billing_cycle?:number;
      subscription?:{id:string};
    }
    export interface EventsResponse {
      success:boolean;
    }
    export interface EventsInputParam {
      event_name:EventName;
      occurred_at?:number;
      event_data:object;
    }
    export interface CheckoutGiftForItemsResponse {
      hosted_page:HostedPage;
    }
    export interface CheckoutGiftForItemsInputParam {
      business_entity_id?:string;
      redirect_url?:string;
      coupon_ids?:string[];
      gifter?:{customer_id?:string,locale?:string};
      subscription_items?:{item_price_id?:string,quantity?:number,quantity_in_decimal?:string}[];
    }
    export interface ListResponse {
      list:{hosted_page:HostedPage}[];
      next_offset?:string;
    }
    export interface ListInputParam {
      [key : string]: any;
      limit?:number;
      offset?:string;
      id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      type?:{in?:string,is?:'update_payment_method' | 'checkout_one_time' | 'manage_payment_sources' | 'checkout_new' | 'view_voucher' | 'collect_now' | 'checkout_existing' | 'extend_subscription' | 'pre_cancel',is_not?:'update_payment_method' | 'checkout_one_time' | 'manage_payment_sources' | 'checkout_new' | 'view_voucher' | 'collect_now' | 'checkout_existing' | 'extend_subscription' | 'pre_cancel',not_in?:string};
      state?:{in?:string,is?:'requested' | 'acknowledged' | 'created' | 'cancelled' | 'succeeded',is_not?:'requested' | 'acknowledged' | 'created' | 'cancelled' | 'succeeded',not_in?:string};
      updated_at?:{after?:string,before?:string,between?:string,on?:string};
    }
    export interface ViewVoucherResponse {
      hosted_page:HostedPage;
    }
    export interface ViewVoucherInputParam {
      payment_voucher?:{id:string};
      customer?:{locale?:string};
    }
    export interface CollectNowResponse {
      hosted_page:HostedPage;
    }
    export interface CollectNowInputParam {
      redirect_url?:string;
      currency_code?:string;
      customer?:{id:string};
      card?:{gateway_account_id?:string};
    }
    export interface AcceptQuoteResponse {
      hosted_page:HostedPage;
    }
    export interface AcceptQuoteInputParam {
      redirect_url?:string;
      quote?:{id:string};
    }
    export interface CheckoutNewForItemsResponse {
      hosted_page:HostedPage;
    }
    export interface CheckoutNewForItemsInputParam {
      layout?:Layout;
      business_entity_id?:string;
      billing_cycles?:number;
      mandatory_items_to_remove?:string[];
      terms_to_charge?:number;
      billing_alignment_mode?:BillingAlignmentMode;
      coupon_ids?:string[];
      redirect_url?:string;
      cancel_url?:string;
      pass_thru_content?:string;
      allow_offline_payment_methods?:boolean;
      subscription?:object;
      customer?:object;
      card?:{gateway_account_id?:string};
      billing_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
      contract_term?:{action_at_term_end?:'cancel' | 'renew' | 'evergreen',cancellation_cutoff_period?:number};
      subscription_items?:{billing_cycles?:number,charge_on_event?:ChargeOnEvent,charge_on_option?:ChargeOnOption,charge_once?:boolean,item_price_id:string,quantity?:number,quantity_in_decimal?:string,service_period_days?:number,trial_end?:number,unit_price?:number,unit_price_in_decimal?:string}[];
      discounts?:{amount?:number,apply_on:ApplyOn,duration_type:DurationType,included_in_mrr?:boolean,item_price_id?:string,percentage?:number,period?:number,period_unit?:PeriodUnit}[];
      item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,item_price_id?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
      entity_identifiers?:{id?:string,operation?:Operation,scheme?:string,standard?:string,value?:string}[];
    }
    export interface ClaimGiftResponse {
      hosted_page:HostedPage;
    }
    export interface ClaimGiftInputParam {
      redirect_url?:string;
      gift?:{id:string};
      customer?:{locale?:string};
    }
    export interface CheckoutExistingForItemsResponse {
      hosted_page:HostedPage;
    }
    export interface CheckoutExistingForItemsInputParam {
      layout?:Layout;
      mandatory_items_to_remove?:string[];
      replace_items_list?:boolean;
      invoice_date?:number;
      billing_cycles?:number;
      terms_to_charge?:number;
      reactivate_from?:number;
      billing_alignment_mode?:BillingAlignmentMode;
      coupon_ids?:string[];
      reactivate?:boolean;
      force_term_reset?:boolean;
      redirect_url?:string;
      cancel_url?:string;
      pass_thru_content?:string;
      allow_offline_payment_methods?:boolean;
      subscription?:object;
      customer?:object;
      card?:{gateway_account_id?:string};
      contract_term?:{action_at_term_end?:'cancel' | 'renew' | 'evergreen',cancellation_cutoff_period?:number};
      subscription_items?:{billing_cycles?:number,charge_on_event?:ChargeOnEvent,charge_on_option?:ChargeOnOption,charge_once?:boolean,item_price_id:string,quantity?:number,quantity_in_decimal?:string,service_period_days?:number,trial_end?:number,unit_price?:number,unit_price_in_decimal?:string}[];
      discounts?:{amount?:number,apply_on:ApplyOn,duration_type:DurationType,id?:string,included_in_mrr?:boolean,item_price_id?:string,operation_type:OperationType,percentage?:number,period?:number,period_unit?:PeriodUnit}[];
      item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,item_price_id?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
      entity_identifiers?:{id?:string,operation?:Operation,scheme?:string,standard?:string,value?:string}[];
    }
    export interface PreCancelResponse {
      hosted_page:HostedPage;
    }
    export interface PreCancelInputParam {
      pass_thru_content?:string;
      cancel_url?:string;
      redirect_url?:string;
      subscription?:{id:string};
    }
    export interface AcknowledgeResponse {
      hosted_page:HostedPage;
    }
    
    export interface RetrieveAgreementPdfResponse {
      hosted_page:HostedPage;
    }
    export interface RetrieveAgreementPdfInputParam {
      payment_source_id:string;
    }
    export interface RetrieveResponse {
      hosted_page:HostedPage;
    }
    
    export interface ManagePaymentSourcesResponse {
      hosted_page:HostedPage;
    }
    export interface ManagePaymentSourcesInputParam {
      redirect_url?:string;
      customer?:{id:string};
      card?:{gateway_account_id?:string};
    }
    
  }
}