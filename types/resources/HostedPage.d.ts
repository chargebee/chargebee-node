///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface HostedPage {
    

    id?:string;

    type?:'checkout_new' | 'checkout_existing' | 'update_payment_method' | 'manage_payment_sources' | 'collect_now' | 'extend_subscription' | 'checkout_one_time' | 'pre_cancel' | 'view_voucher' | 'checkout_gift' | 'claim_gift';

    url?:string;

    state?:'created' | 'requested' | 'succeeded' | 'cancelled' | 'acknowledged';

    failure_reason?:'card_error' | 'server_error';

    pass_thru_content?:string;

    embed:boolean;

    created_at?:number;

    expires_at?:number;

    updated_at?:number;

    resource_version?:number;

    checkout_info?:object;

    business_entity_id?:string;

  }
  export namespace HostedPage {
    export class HostedPageResource {  
      checkout_new(input:CheckoutNewInputParam):ChargebeeRequest<CheckoutNewResponse>;
       
      checkout_one_time(input?:CheckoutOneTimeInputParam):ChargebeeRequest<CheckoutOneTimeResponse>;
       
      checkout_one_time_for_items(input:CheckoutOneTimeForItemsInputParam):ChargebeeRequest<CheckoutOneTimeForItemsResponse>;
       
      checkout_new_for_items(input:CheckoutNewForItemsInputParam):ChargebeeRequest<CheckoutNewForItemsResponse>;
       
      checkout_existing(input:CheckoutExistingInputParam):ChargebeeRequest<CheckoutExistingResponse>;
       
      checkout_existing_for_items(input:CheckoutExistingForItemsInputParam):ChargebeeRequest<CheckoutExistingForItemsResponse>;
       
      update_card(input:UpdateCardInputParam):ChargebeeRequest<UpdateCardResponse>;
       
      update_payment_method(input:UpdatePaymentMethodInputParam):ChargebeeRequest<UpdatePaymentMethodResponse>;
       
      manage_payment_sources(input:ManagePaymentSourcesInputParam):ChargebeeRequest<ManagePaymentSourcesResponse>;
       
      collect_now(input:CollectNowInputParam):ChargebeeRequest<CollectNowResponse>;
       
      accept_quote(input:AcceptQuoteInputParam):ChargebeeRequest<AcceptQuoteResponse>;
       
      extend_subscription(input:ExtendSubscriptionInputParam):ChargebeeRequest<ExtendSubscriptionResponse>;
       
      checkout_gift(input:CheckoutGiftInputParam):ChargebeeRequest<CheckoutGiftResponse>;
       
      checkout_gift_for_items(input?:CheckoutGiftForItemsInputParam):ChargebeeRequest<CheckoutGiftForItemsResponse>;
       
      claim_gift(input:ClaimGiftInputParam):ChargebeeRequest<ClaimGiftResponse>;
       
      retrieve_agreement_pdf(input:RetrieveAgreementPdfInputParam):ChargebeeRequest<RetrieveAgreementPdfResponse>;
       
      acknowledge(hosted_page_id:string):ChargebeeRequest<AcknowledgeResponse>;
       
      retrieve(hosted_page_id:string):ChargebeeRequest<RetrieveResponse>;
       
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
       
      pre_cancel(input:PreCancelInputParam):ChargebeeRequest<PreCancelResponse>;
       
      events(input:EventsInputParam):ChargebeeRequest<EventsResponse>;
       
      view_voucher(input:ViewVoucherInputParam):ChargebeeRequest<ViewVoucherResponse>;
    }
    export interface CheckoutNewResponse {  
       hosted_page:HostedPage;
    }
    export interface CheckoutNewInputParam {
       
      subscription:object;
       
      customer?:object;
       
      card?:{gateway?:Gateway,gateway_account_id?:string};
       
      billing_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      contract_term?:{action_at_term_end?:'renew' | 'evergreen' | 'cancel',cancellation_cutoff_period?:number};
       
      addons?:{billing_cycles?:number,id?:string,quantity?:number,quantity_in_decimal?:string,unit_price?:number,unit_price_in_decimal?:string}[];
       
      event_based_addons?:{charge_on?:ChargeOn,charge_once?:boolean,id?:string,on_event?:OnEvent,quantity?:number,quantity_in_decimal?:string,service_period_in_days?:number,unit_price?:number,unit_price_in_decimal?:string}[];
       
      billing_cycles?:number;
       
      mandatory_addons_to_remove?:string[];
       
      terms_to_charge?:number;
       
      billing_alignment_mode?:BillingAlignmentMode;
       
      coupon_ids?:string[];
       
      redirect_url?:string;
       
      cancel_url?:string;
       
      pass_thru_content?:string;
       
      embed?:boolean;
       
      iframe_messaging?:boolean;
       
      allow_offline_payment_methods?:boolean;
    }
    export interface CheckoutOneTimeResponse {  
       hosted_page:HostedPage;
    }
    export interface CheckoutOneTimeInputParam {
       
      customer?:object;
       
      invoice?:{po_number?:string};
       
      card?:{gateway?:Gateway,gateway_account_id?:string};
       
      billing_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      addons?:{date_from?:number,date_to?:number,id?:string,quantity?:number,quantity_in_decimal?:string,unit_price?:number,unit_price_in_decimal?:string}[];
       
      charges?:{amount?:number,amount_in_decimal?:string,avalara_sale_type?:AvalaraSaleType,avalara_service_type?:number,avalara_tax_code?:string,avalara_transaction_type?:number,date_from?:number,date_to?:number,description?:string,hsn_code?:string,tax_profile_id?:string,taxable?:boolean,taxjar_product_code?:string}[];
       
      currency_code?:string;
       
      invoice_note?:string;
       
      coupon?:string;
       
      coupon_ids?:string[];
       
      redirect_url?:string;
       
      cancel_url?:string;
       
      pass_thru_content?:string;
       
      embed?:boolean;
       
      iframe_messaging?:boolean;
    }
    export interface CheckoutOneTimeForItemsResponse {  
       hosted_page:HostedPage;
    }
    export interface CheckoutOneTimeForItemsInputParam {
       
      customer?:object;
       
      invoice?:{po_number?:string};
       
      card?:{gateway?:Gateway,gateway_account_id?:string};
       
      billing_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      item_prices?:{date_from?:number,date_to?:number,item_price_id?:string,quantity?:number,quantity_in_decimal?:string,unit_price?:number,unit_price_in_decimal?:string}[];
       
      item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,item_price_id?:string,package_size?:number,price?:number,price_in_decimal?:string,pricing_type?:PricingType,starting_unit?:number,starting_unit_in_decimal?:string}[];
       
      charges?:{amount?:number,amount_in_decimal?:string,avalara_sale_type?:AvalaraSaleType,avalara_service_type?:number,avalara_tax_code?:string,avalara_transaction_type?:number,date_from?:number,date_to?:number,description?:string,hsn_code?:string,tax_profile_id?:string,taxable?:boolean,taxjar_product_code?:string}[];
       
      discounts:{amount?:number,apply_on:ApplyOn,item_price_id?:string,percentage?:number}[];
       
      entity_identifiers?:{id?:string,operation?:Operation,scheme?:string,standard?:string,value?:string}[];
       
      business_entity_id?:string;
       
      layout?:Layout;
       
      invoice_note?:string;
       
      coupon?:string;
       
      coupon_ids?:string[];
       
      currency_code?:string;
       
      redirect_url?:string;
       
      cancel_url?:string;
       
      pass_thru_content?:string;
    }
    export interface CheckoutNewForItemsResponse {  
       hosted_page:HostedPage;
    }
    export interface CheckoutNewForItemsInputParam {
       
      subscription?:object;
       
      customer?:object;
       
      card?:{gateway?:Gateway,gateway_account_id?:string};
       
      billing_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      contract_term?:{action_at_term_end?:'renew' | 'evergreen' | 'cancel',cancellation_cutoff_period?:number};
       
      subscription_items:{billing_cycles?:number,charge_on_event?:ChargeOnEvent,charge_on_option?:ChargeOnOption,charge_once?:boolean,item_price_id:string,item_type?:ItemType,quantity?:number,quantity_in_decimal?:string,service_period_days?:number,trial_end?:number,unit_price?:number,unit_price_in_decimal?:string}[];
       
      discounts:{amount?:number,apply_on:ApplyOn,duration_type:DurationType,included_in_mrr?:boolean,item_price_id?:string,percentage?:number,period?:number,period_unit?:PeriodUnit}[];
       
      item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,item_price_id?:string,package_size?:number,price?:number,price_in_decimal?:string,pricing_type?:PricingType,starting_unit?:number,starting_unit_in_decimal?:string}[];
       
      entity_identifiers?:{id?:string,operation?:Operation,scheme?:string,standard?:string,value?:string}[];
       
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
    }
    export interface CheckoutExistingResponse {  
       hosted_page:HostedPage;
    }
    export interface CheckoutExistingInputParam {
       
      subscription:object;
       
      customer?:object;
       
      card?:{gateway?:Gateway,gateway_account_id?:string};
       
      contract_term?:{action_at_term_end?:'renew' | 'evergreen' | 'cancel',cancellation_cutoff_period?:number};
       
      addons?:{billing_cycles?:number,id?:string,quantity?:number,quantity_in_decimal?:string,unit_price?:number,unit_price_in_decimal?:string}[];
       
      event_based_addons?:{charge_on?:ChargeOn,charge_once?:boolean,id?:string,on_event?:OnEvent,quantity?:number,quantity_in_decimal?:string,service_period_in_days?:number,unit_price?:number,unit_price_in_decimal?:string}[];
       
      replace_addon_list?:boolean;
       
      mandatory_addons_to_remove?:string[];
       
      invoice_date?:number;
       
      billing_cycles?:number;
       
      terms_to_charge?:number;
       
      reactivate_from?:number;
       
      billing_alignment_mode?:BillingAlignmentMode;
       
      coupon_ids?:string[];
       
      replace_coupon_list?:boolean;
       
      reactivate?:boolean;
       
      force_term_reset?:boolean;
       
      redirect_url?:string;
       
      cancel_url?:string;
       
      pass_thru_content?:string;
       
      embed?:boolean;
       
      iframe_messaging?:boolean;
       
      allow_offline_payment_methods?:boolean;
    }
    export interface CheckoutExistingForItemsResponse {  
       hosted_page:HostedPage;
    }
    export interface CheckoutExistingForItemsInputParam {
       
      subscription:object;
       
      customer?:object;
       
      card?:{gateway?:Gateway,gateway_account_id?:string};
       
      contract_term?:{action_at_term_end?:'renew' | 'evergreen' | 'cancel',cancellation_cutoff_period?:number};
       
      subscription_items:{billing_cycles?:number,charge_on_event?:ChargeOnEvent,charge_on_option?:ChargeOnOption,charge_once?:boolean,item_price_id:string,item_type?:ItemType,quantity?:number,quantity_in_decimal?:string,service_period_days?:number,trial_end?:number,unit_price?:number,unit_price_in_decimal?:string}[];
       
      discounts:{amount?:number,apply_on:ApplyOn,duration_type:DurationType,id?:string,included_in_mrr?:boolean,item_price_id?:string,operation_type:OperationType,percentage?:number,period?:number,period_unit?:PeriodUnit}[];
       
      item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,item_price_id?:string,package_size?:number,price?:number,price_in_decimal?:string,pricing_type?:PricingType,starting_unit?:number,starting_unit_in_decimal?:string}[];
       
      entity_identifiers?:{id?:string,operation?:Operation,scheme?:string,standard?:string,value?:string}[];
       
      layout?:Layout;
       
      mandatory_items_to_remove?:string[];
       
      replace_items_list?:boolean;
       
      invoice_date?:number;
       
      billing_cycles?:number;
       
      terms_to_charge?:number;
       
      reactivate_from?:number;
       
      billing_alignment_mode?:BillingAlignmentMode;
       
      coupon_ids?:string[];
       
      replace_coupon_list?:boolean;
       
      reactivate?:boolean;
       
      force_term_reset?:boolean;
       
      change_option?:ChangeOption;
       
      changes_scheduled_at?:number;
       
      redirect_url?:string;
       
      cancel_url?:string;
       
      pass_thru_content?:string;
       
      allow_offline_payment_methods?:boolean;
    }
    export interface UpdateCardResponse {  
       hosted_page:HostedPage;
    }
    export interface UpdateCardInputParam {
       
      customer:{id:string,vat_number?:string,vat_number_prefix?:string};
       
      card?:{gateway?:Gateway,gateway_account_id?:string};
       
      redirect_url?:string;
       
      cancel_url?:string;
       
      pass_thru_content?:string;
       
      embed?:boolean;
       
      iframe_messaging?:boolean;
    }
    export interface UpdatePaymentMethodResponse {  
       hosted_page:HostedPage;
    }
    export interface UpdatePaymentMethodInputParam {
       
      customer:{id:string,vat_number?:string,vat_number_prefix?:string};
       
      card?:{gateway?:Gateway,gateway_account_id?:string};
       
      redirect_url?:string;
       
      cancel_url?:string;
       
      pass_thru_content?:string;
       
      embed?:boolean;
       
      iframe_messaging?:boolean;
    }
    export interface ManagePaymentSourcesResponse {  
       hosted_page:HostedPage;
    }
    export interface ManagePaymentSourcesInputParam {
       
      customer:{id:string};
       
      card?:{gateway?:Gateway,gateway_account_id?:string};
       
      redirect_url?:string;
    }
    export interface CollectNowResponse {  
       hosted_page:HostedPage;
    }
    export interface CollectNowInputParam {
       
      customer:{id:string};
       
      card?:{gateway?:Gateway,gateway_account_id?:string};
       
      redirect_url?:string;
       
      currency_code?:string;
    }
    export interface AcceptQuoteResponse {  
       hosted_page:HostedPage;
    }
    export interface AcceptQuoteInputParam {
       
      quote:{id:string};
       
      redirect_url?:string;
       
      layout?:Layout;
    }
    export interface ExtendSubscriptionResponse {  
       hosted_page:HostedPage;
    }
    export interface ExtendSubscriptionInputParam {
       
      subscription:{id:string};
       
      expiry?:number;
       
      billing_cycle?:number;
    }
    export interface CheckoutGiftResponse {  
       hosted_page:HostedPage;
    }
    export interface CheckoutGiftInputParam {
       
      gifter?:{customer_id?:string};
       
      subscription:object;
       
      addons?:{id?:string,quantity?:number,quantity_in_decimal?:string}[];
       
      redirect_url?:string;
       
      coupon_ids?:string[];
    }
    export interface CheckoutGiftForItemsResponse {  
       hosted_page:HostedPage;
    }
    export interface CheckoutGiftForItemsInputParam {
       
      gifter?:{customer_id?:string};
       
      subscription_items?:{item_price_id?:string,quantity?:number,quantity_in_decimal?:string}[];
       
      business_entity_id?:string;
       
      redirect_url?:string;
       
      coupon_ids?:string[];
    }
    export interface ClaimGiftResponse {  
       hosted_page:HostedPage;
    }
    export interface ClaimGiftInputParam {
       
      gift:{id:string};
       
      customer?:{locale?:string};
       
      redirect_url?:string;
    }
    export interface RetrieveAgreementPdfResponse {  
       hosted_page:HostedPage;
    }
    export interface RetrieveAgreementPdfInputParam {
       
      payment_source_id:string;
    }
    export interface AcknowledgeResponse {  
       hosted_page:HostedPage;
    }
    
    export interface RetrieveResponse {  
       hosted_page:HostedPage;
    }
    
    export interface ListResponse {  
       list:{hosted_page:HostedPage}[];
       
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
        * @description Unique identifier generated for each hosted page requested.

        */
        
      id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Type of the requested hosted page.

        */
        
      type?:{in?:string,is?:'checkout_new' | 'checkout_existing' | 'update_payment_method' | 'manage_payment_sources' | 'collect_now' | 'extend_subscription' | 'checkout_one_time' | 'pre_cancel' | 'view_voucher',is_not?:'checkout_new' | 'checkout_existing' | 'update_payment_method' | 'manage_payment_sources' | 'collect_now' | 'extend_subscription' | 'checkout_one_time' | 'pre_cancel' | 'view_voucher',not_in?:string};
       
      /**
        * @description Indicating the current state of the hosted page resource.

        */
        
      state?:{in?:string,is?:'created' | 'requested' | 'succeeded' | 'cancelled' | 'acknowledged',is_not?:'created' | 'requested' | 'succeeded' | 'cancelled' | 'acknowledged',not_in?:string};
       
      /**
        * @description Timestamp indicating when this hosted page was last updated.

        */
        
      updated_at?:{after?:string,before?:string,between?:string,on?:string};
    }
    export interface PreCancelResponse {  
       hosted_page:HostedPage;
    }
    export interface PreCancelInputParam {
       
      subscription:{id:string};
       
      pass_thru_content?:string;
       
      cancel_url?:string;
       
      redirect_url?:string;
    }
    export interface EventsResponse {  
       success:boolean;
    }
    export interface EventsInputParam {
       
      event_name:EventName;
       
      occurred_at?:number;
       
      event_data:object;
    }
    export interface ViewVoucherResponse {  
       hosted_page:HostedPage;
    }
    export interface ViewVoucherInputParam {
       
      payment_voucher:{id:string};
       
      customer?:{locale?:string};
    }
    
  }
}