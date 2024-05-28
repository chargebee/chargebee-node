///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface Estimate {
    
    created_at:number;
    
    subscription_estimate?:SubscriptionEstimate;
    
    subscription_estimates?:SubscriptionEstimate[];
    
    invoice_estimate?:InvoiceEstimate;
    
    invoice_estimates?:InvoiceEstimate[];
    
    next_invoice_estimate?:InvoiceEstimate;
    
    credit_note_estimates?:CreditNoteEstimate[];
    
    unbilled_charge_estimates?:UnbilledCharge[];
  }
  export namespace Estimate {
    export class EstimateResource {  
      create_subscription(input:CreateSubscriptionInputParam):ChargebeeRequest<CreateSubscriptionResponse>;
       
      create_sub_item_estimate(input:CreateSubItemEstimateInputParam):ChargebeeRequest<CreateSubItemEstimateResponse>;
       
      create_sub_for_customer_estimate(customer_id:string, input:CreateSubForCustomerEstimateInputParam):ChargebeeRequest<CreateSubForCustomerEstimateResponse>;
       
      create_sub_item_for_customer_estimate(customer_id:string, input:CreateSubItemForCustomerEstimateInputParam):ChargebeeRequest<CreateSubItemForCustomerEstimateResponse>;
       
      update_subscription(input:UpdateSubscriptionInputParam):ChargebeeRequest<UpdateSubscriptionResponse>;
       
      update_subscription_for_items(input:UpdateSubscriptionForItemsInputParam):ChargebeeRequest<UpdateSubscriptionForItemsResponse>;
       
      renewal_estimate(subscription_id:string, input?:RenewalEstimateInputParam):ChargebeeRequest<RenewalEstimateResponse>;
       
      advance_invoice_estimate(subscription_id:string, input?:AdvanceInvoiceEstimateInputParam):ChargebeeRequest<AdvanceInvoiceEstimateResponse>;
       
      regenerate_invoice_estimate(subscription_id:string, input?:RegenerateInvoiceEstimateInputParam):ChargebeeRequest<RegenerateInvoiceEstimateResponse>;
       
      upcoming_invoices_estimate(customer_id:string):ChargebeeRequest<UpcomingInvoicesEstimateResponse>;
       
      change_term_end(subscription_id:string, input:ChangeTermEndInputParam):ChargebeeRequest<ChangeTermEndResponse>;
       
      cancel_subscription(subscription_id:string, input?:CancelSubscriptionInputParam):ChargebeeRequest<CancelSubscriptionResponse>;
       
      cancel_subscription_for_items(subscription_id:string, input?:CancelSubscriptionForItemsInputParam):ChargebeeRequest<CancelSubscriptionForItemsResponse>;
       
      pause_subscription(subscription_id:string, input?:PauseSubscriptionInputParam):ChargebeeRequest<PauseSubscriptionResponse>;
       
      resume_subscription(subscription_id:string, input?:ResumeSubscriptionInputParam):ChargebeeRequest<ResumeSubscriptionResponse>;
       
      gift_subscription(input:GiftSubscriptionInputParam):ChargebeeRequest<GiftSubscriptionResponse>;
       
      gift_subscription_for_items(input:GiftSubscriptionForItemsInputParam):ChargebeeRequest<GiftSubscriptionForItemsResponse>;
       
      create_invoice(input?:CreateInvoiceInputParam):ChargebeeRequest<CreateInvoiceResponse>;
       
      create_invoice_for_items(input:CreateInvoiceForItemsInputParam):ChargebeeRequest<CreateInvoiceForItemsResponse>;
    }
    export interface CreateSubscriptionResponse {  
       estimate:Estimate;
    }
    export interface CreateSubscriptionInputParam {
       
      subscription:null.null;
       
      billing_address?:null.null;
       
      shipping_address?:null.null;
       
      customer?:null.null;
       
      contract_term?:null.null;
       
      addons?:{billing_cycles?:number,id?:string,quantity?:number,quantity_in_decimal?:string,trial_end?:number,unit_price?:number,unit_price_in_decimal?:string}[];
       
      event_based_addons?:{charge_on?:ChargeOn,charge_once?:boolean,id?:string,on_event?:OnEvent,quantity?:number,quantity_in_decimal?:string,service_period_in_days?:number,unit_price?:number,unit_price_in_decimal?:string}[];
       
      tax_providers_fields?:{field_id?:string,field_value?:string,provider_name?:string}[];
       
      billing_cycles?:number;
       
      mandatory_addons_to_remove?:string[];
       
      terms_to_charge?:number;
       
      billing_alignment_mode?:BillingAlignmentMode;
       
      coupon_ids?:string[];
       
      invoice_immediately?:boolean;
       
      invoice_date?:number;
       
      client_profile_id?:string;
    }
    export interface CreateSubItemEstimateResponse {  
       estimate:Estimate;
    }
    export interface CreateSubItemEstimateInputParam {
       
      subscription?:null.null;
       
      billing_address?:null.null;
       
      shipping_address?:null.null;
       
      customer?:null.null;
       
      contract_term?:null.null;
       
      subscription_items:{billing_cycles?:number,charge_on_event?:ChargeOnEvent,charge_on_option?:ChargeOnOption,charge_once?:boolean,item_price_id:string,item_type?:ItemType,quantity?:number,quantity_in_decimal?:string,service_period_days?:number,trial_end?:number,unit_price?:number,unit_price_in_decimal?:string}[];
       
      discounts:{amount?:number,apply_on:ApplyOn,duration_type:DurationType,included_in_mrr?:boolean,item_price_id?:string,percentage?:number,period?:number,period_unit?:PeriodUnit}[];
       
      item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,item_price_id?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
       
      tax_providers_fields?:{field_id?:string,field_value?:string,provider_name?:string}[];
       
      billing_cycles?:number;
       
      mandatory_items_to_remove?:string[];
       
      terms_to_charge?:number;
       
      billing_alignment_mode?:BillingAlignmentMode;
       
      coupon_ids?:string[];
       
      invoice_immediately?:boolean;
       
      invoice_date?:number;
       
      client_profile_id?:string;
    }
    export interface CreateSubForCustomerEstimateResponse {  
       estimate:Estimate;
    }
    export interface CreateSubForCustomerEstimateInputParam {
       
      subscription?:null.null;
       
      shipping_address?:null.null;
       
      contract_term?:null.null;
       
      addons?:{billing_cycles?:number,id?:string,quantity?:number,quantity_in_decimal?:string,trial_end?:number,unit_price?:number,unit_price_in_decimal?:string}[];
       
      event_based_addons?:{charge_on?:ChargeOn,charge_once?:boolean,id?:string,on_event?:OnEvent,quantity?:number,quantity_in_decimal?:string,service_period_in_days?:number,unit_price?:number,unit_price_in_decimal?:string}[];
       
      use_existing_balances?:boolean;
       
      invoice_immediately?:boolean;
       
      billing_cycles?:number;
       
      mandatory_addons_to_remove?:string[];
       
      terms_to_charge?:number;
       
      next_renewal_date?:number;
       
      charge_model?:'full_charge' | 'prorate';
       
      billing_alignment_mode?:'immediate' | 'delayed';
       
      referral_details?:string;
       
      invoice_date?:number;
       
      coupon_ids?:string[];
       
      allow_gift_plan?:boolean;
    }
    export interface CreateSubItemForCustomerEstimateResponse {  
       estimate:Estimate;
    }
    export interface CreateSubItemForCustomerEstimateInputParam {
       
      subscription?:null.null;
       
      shipping_address?:null.null;
       
      billing_address?:null.null;
       
      contract_term?:null.null;
       
      subscription_items:{billing_cycles?:number,charge_on_event?:ChargeOnEvent,charge_on_option?:ChargeOnOption,charge_once?:boolean,item_price_id:string,item_type?:ItemType,quantity?:number,quantity_in_decimal?:string,service_period_days?:number,trial_end?:number,unit_price?:number,unit_price_in_decimal?:string}[];
       
      discounts:{amount?:number,apply_on:ApplyOn,duration_type:DurationType,included_in_mrr?:boolean,item_price_id?:string,percentage?:number,period?:number,period_unit?:PeriodUnit}[];
       
      item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,item_price_id?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
       
      use_existing_balances?:boolean;
       
      invoice_immediately?:boolean;
       
      billing_cycles?:number;
       
      mandatory_items_to_remove?:string[];
       
      terms_to_charge?:number;
       
      billing_alignment_mode?:BillingAlignmentMode;
       
      invoice_date?:number;
       
      coupon_ids?:string[];
    }
    export interface UpdateSubscriptionResponse {  
       estimate:Estimate;
    }
    export interface UpdateSubscriptionInputParam {
       
      subscription:null.null;
       
      billing_address?:null.null;
       
      shipping_address?:null.null;
       
      customer?:null.null;
       
      addons?:{billing_cycles?:number,id?:string,proration_type?:ProrationType,quantity?:number,quantity_in_decimal?:string,trial_end?:number,unit_price?:number,unit_price_in_decimal?:string}[];
       
      changes_scheduled_at?:number;
       
      change_option?:ChangeOption;
       
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
       
      prorate?:boolean;
       
      end_of_term?:boolean;
       
      force_term_reset?:boolean;
       
      reactivate?:boolean;
       
      include_delayed_charges?:boolean;
       
      use_existing_balances?:boolean;
       
      invoice_immediately?:boolean;
    }
    export interface UpdateSubscriptionForItemsResponse {  
       estimate:Estimate;
    }
    export interface UpdateSubscriptionForItemsInputParam {
       
      subscription:null.null;
       
      billing_address?:null.null;
       
      shipping_address?:null.null;
       
      customer?:null.null;
       
      subscription_items:{billing_cycles?:number,charge_on_event?:ChargeOnEvent,charge_on_option?:ChargeOnOption,charge_once?:boolean,item_price_id:string,item_type?:ItemType,proration_type?:ProrationType,quantity?:number,quantity_in_decimal?:string,service_period_days?:number,trial_end?:number,unit_price?:number,unit_price_in_decimal?:string}[];
       
      discounts:{amount?:number,apply_on:ApplyOn,duration_type:DurationType,id?:string,included_in_mrr?:boolean,item_price_id?:string,operation_type:OperationType,percentage?:number,period?:number,period_unit?:PeriodUnit}[];
       
      item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,item_price_id?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
       
      changes_scheduled_at?:number;
       
      change_option?:ChangeOption;
       
      mandatory_items_to_remove?:string[];
       
      replace_items_list?:boolean;
       
      invoice_date?:number;
       
      billing_cycles?:number;
       
      terms_to_charge?:number;
       
      reactivate_from?:number;
       
      billing_alignment_mode?:BillingAlignmentMode;
       
      coupon_ids?:string[];
       
      replace_coupon_list?:boolean;
       
      prorate?:boolean;
       
      end_of_term?:boolean;
       
      force_term_reset?:boolean;
       
      reactivate?:boolean;
       
      include_delayed_charges?:boolean;
       
      use_existing_balances?:boolean;
       
      invoice_immediately?:boolean;
    }
    export interface RenewalEstimateResponse {  
       estimate:Estimate;
    }
    export interface RenewalEstimateInputParam {
       
      include_delayed_charges?:boolean;
       
      use_existing_balances?:boolean;
       
      ignore_scheduled_cancellation?:boolean;
       
      ignore_scheduled_changes?:boolean;
    }
    export interface AdvanceInvoiceEstimateResponse {  
       estimate:Estimate;
    }
    export interface AdvanceInvoiceEstimateInputParam {
       
      fixed_interval_schedule?:null.null;
       
      specific_dates_schedule?:{date?:number,terms_to_charge?:number}[];
       
      terms_to_charge?:number;
       
      invoice_immediately?:boolean;
       
      schedule_type?:ScheduleType;
    }
    export interface RegenerateInvoiceEstimateResponse {  
       estimate:Estimate;
    }
    export interface RegenerateInvoiceEstimateInputParam {
       
      date_from?:number;
       
      date_to?:number;
       
      prorate?:boolean;
       
      invoice_immediately?:boolean;
    }
    export interface UpcomingInvoicesEstimateResponse {  
       estimate:Estimate;
    }
    
    export interface ChangeTermEndResponse {  
       estimate:Estimate;
    }
    export interface ChangeTermEndInputParam {
       
      term_ends_at:number;
       
      prorate?:boolean;
       
      invoice_immediately?:boolean;
    }
    export interface CancelSubscriptionResponse {  
       estimate:Estimate;
    }
    export interface CancelSubscriptionInputParam {
       
      end_of_term?:boolean;
       
      cancel_at?:number;
       
      credit_option_for_current_term_charges?:CreditOptionForCurrentTermCharges;
       
      unbilled_charges_option?:UnbilledChargesOption;
       
      account_receivables_handling?:AccountReceivablesHandling;
       
      refundable_credits_handling?:RefundableCreditsHandling;
       
      contract_term_cancel_option?:ContractTermCancelOption;
       
      invoice_date?:number;
       
      event_based_addons?:{id?:string,quantity?:number,service_period_in_days?:number,unit_price?:number}[];
       
      cancel_reason_code?:string;
    }
    export interface CancelSubscriptionForItemsResponse {  
       estimate:Estimate;
    }
    export interface CancelSubscriptionForItemsInputParam {
       
      end_of_term?:boolean;
       
      cancel_at?:number;
       
      credit_option_for_current_term_charges?:CreditOptionForCurrentTermCharges;
       
      unbilled_charges_option?:UnbilledChargesOption;
       
      account_receivables_handling?:AccountReceivablesHandling;
       
      refundable_credits_handling?:RefundableCreditsHandling;
       
      contract_term_cancel_option?:ContractTermCancelOption;
       
      invoice_date?:number;
       
      subscription_items?:{item_price_id?:string,quantity?:number,quantity_in_decimal?:string,service_period_days?:number,unit_price?:number,unit_price_in_decimal?:string}[];
       
      cancel_reason_code?:string;
    }
    export interface PauseSubscriptionResponse {  
       estimate:Estimate;
    }
    export interface PauseSubscriptionInputParam {
       
      subscription?:null.null;
       
      pause_option?:PauseOption;
       
      unbilled_charges_handling?:UnbilledChargesHandling;
    }
    export interface ResumeSubscriptionResponse {  
       estimate:Estimate;
    }
    export interface ResumeSubscriptionInputParam {
       
      subscription?:null.null;
       
      resume_option?:ResumeOption;
       
      charges_handling?:ChargesHandling;
    }
    export interface GiftSubscriptionResponse {  
       estimate:Estimate;
    }
    export interface GiftSubscriptionInputParam {
       
      gift?:null.null;
       
      gifter:null.null;
       
      gift_receiver:null.null;
       
      payment_intent?:null.null;
       
      shipping_address?:null.null;
       
      subscription:null.null;
       
      addons?:{id?:string,quantity?:number,quantity_in_decimal?:string}[];
       
      coupon_ids?:string[];
    }
    export interface GiftSubscriptionForItemsResponse {  
       estimate:Estimate;
    }
    export interface GiftSubscriptionForItemsInputParam {
       
      gift?:null.null;
       
      gifter:null.null;
       
      gift_receiver:null.null;
       
      payment_intent?:null.null;
       
      shipping_address?:null.null;
       
      subscription_items?:{item_price_id?:string,quantity?:number,quantity_in_decimal?:string}[];
       
      coupon_ids?:string[];
    }
    export interface CreateInvoiceResponse {  
       estimate:Estimate;
    }
    export interface CreateInvoiceInputParam {
       
      invoice?:null.null;
       
      shipping_address?:null.null;
       
      addons?:{date_from?:number,date_to?:number,id?:string,quantity?:number,quantity_in_decimal?:string,unit_price?:number,unit_price_in_decimal?:string}[];
       
      charges?:{amount?:number,amount_in_decimal?:string,avalara_sale_type?:AvalaraSaleType,avalara_service_type?:number,avalara_tax_code?:string,avalara_transaction_type?:number,date_from?:number,date_to?:number,description?:string,hsn_code?:string,tax_profile_id?:string,taxable?:boolean,taxjar_product_code?:string}[];
       
      notes_to_remove?:{entity_id?:string,entity_type?:EntityType}[];
       
      tax_providers_fields?:{field_id?:string,field_value?:string,provider_name?:string}[];
       
      currency_code?:string;
       
      invoice_note?:string;
       
      remove_general_note?:boolean;
       
      coupon?:string;
       
      coupon_ids?:string[];
       
      authorization_transaction_id?:string;
       
      payment_source_id?:string;
       
      auto_collection?:AutoCollection;
       
      invoice_date?:number;
    }
    export interface CreateInvoiceForItemsResponse {  
       estimate:Estimate;
    }
    export interface CreateInvoiceForItemsInputParam {
       
      invoice?:null.null;
       
      shipping_address?:null.null;
       
      item_prices?:{date_from?:number,date_to?:number,item_price_id?:string,quantity?:number,quantity_in_decimal?:string,unit_price?:number,unit_price_in_decimal?:string}[];
       
      item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,item_price_id?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
       
      charges?:{amount?:number,amount_in_decimal?:string,avalara_sale_type?:AvalaraSaleType,avalara_service_type?:number,avalara_tax_code?:string,avalara_transaction_type?:number,date_from?:number,date_to?:number,description?:string,hsn_code?:string,tax_profile_id?:string,taxable?:boolean,taxjar_product_code?:string}[];
       
      notes_to_remove?:{entity_id?:string,entity_type?:EntityType}[];
       
      discounts:{amount?:number,apply_on:ApplyOn,item_price_id?:string,percentage?:number}[];
       
      tax_providers_fields?:{field_id?:string,field_value?:string,provider_name?:string}[];
       
      currency_code?:string;
       
      invoice_note?:string;
       
      remove_general_note?:boolean;
       
      coupon?:string;
       
      coupon_ids?:string[];
       
      authorization_transaction_id?:string;
       
      payment_source_id?:string;
       
      auto_collection?:AutoCollection;
       
      invoice_date?:number;
    }
    
  }
}