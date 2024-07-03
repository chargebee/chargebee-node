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
       
      subscription:{contract_term_billing_cycle_on_renewal?:number,coupon?:string,free_period?:number,free_period_unit?:FreePeriodUnit,id?:string,offline_payment_method?:OfflinePaymentMethod,plan_id:string,plan_quantity?:number,plan_quantity_in_decimal?:string,plan_unit_price?:number,plan_unit_price_in_decimal?:string,setup_fee?:number,start_date?:number,trial_end?:number,trial_end_action?:TrialEndAction};
       
      billing_address?:{city?:string,country?:string,line1?:string,line2?:string,line3?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      shipping_address?:{city?:string,country?:string,line1?:string,line2?:string,line3?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      customer?:{customer_type?:CustomerType,entity_code?:EntityCode,exempt_number?:string,exemption_details?:any[],registered_for_gst?:boolean,taxability?:Taxability,vat_number?:string,vat_number_prefix?:string};
       
      contract_term?:{action_at_term_end?:'renew' | 'evergreen' | 'cancel',cancellation_cutoff_period?:number};
       
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
       
      subscription?:{contract_term_billing_cycle_on_renewal?:number,coupon?:string,free_period?:number,free_period_unit?:FreePeriodUnit,id?:string,setup_fee?:number,start_date?:number,trial_end?:number,trial_end_action?:TrialEndAction};
       
      billing_address?:{city?:string,country?:string,line1?:string,line2?:string,line3?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      shipping_address?:{city?:string,country?:string,line1?:string,line2?:string,line3?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      customer?:{customer_type?:CustomerType,entity_code?:EntityCode,exempt_number?:string,exemption_details?:any[],registered_for_gst?:boolean,taxability?:Taxability,vat_number?:string,vat_number_prefix?:string};
       
      contract_term?:{action_at_term_end?:'renew' | 'evergreen' | 'cancel',cancellation_cutoff_period?:number,contract_start?:number};
       
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
       
      subscription?:{contract_term_billing_cycle_on_renewal?:number,free_period?:number,free_period_unit?:FreePeriodUnit,id?:string,offline_payment_method?:OfflinePaymentMethod,plan_id:string,plan_quantity?:number,plan_quantity_in_decimal?:string,plan_unit_price?:number,plan_unit_price_in_decimal?:string,setup_fee?:number,start_date?:number,trial_end?:number,trial_end_action?:TrialEndAction};
       
      shipping_address?:{city?:string,country?:string,line1?:string,line2?:string,line3?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      contract_term?:{action_at_term_end?:'renew' | 'evergreen' | 'cancel',cancellation_cutoff_period?:number};
       
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
       
      subscription?:{contract_term_billing_cycle_on_renewal?:number,free_period?:number,free_period_unit?:FreePeriodUnit,id?:string,setup_fee?:number,start_date?:number,trial_end?:number,trial_end_action?:TrialEndAction};
       
      shipping_address?:{city?:string,country?:string,line1?:string,line2?:string,line3?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      billing_address?:{city?:string,country?:string,line1?:string,line2?:string,line3?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      contract_term?:{action_at_term_end?:'renew' | 'evergreen' | 'cancel',cancellation_cutoff_period?:number,contract_start?:number};
       
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
       
      subscription:{auto_collection?:AutoCollection,coupon?:string,free_period?:number,free_period_unit?:FreePeriodUnit,id:string,offline_payment_method?:OfflinePaymentMethod,plan_id?:string,plan_quantity?:number,plan_quantity_in_decimal?:string,plan_unit_price?:number,plan_unit_price_in_decimal?:string,setup_fee?:number,start_date?:number,trial_end?:number,trial_end_action?:TrialEndAction};
       
      billing_address?:{city?:string,country?:string,line1?:string,line2?:string,line3?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      shipping_address?:{city?:string,country?:string,line1?:string,line2?:string,line3?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      customer?:{registered_for_gst?:boolean,taxability?:Taxability,vat_number?:string,vat_number_prefix?:string};
       
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
       
      subscription:{auto_collection?:AutoCollection,coupon?:string,free_period?:number,free_period_unit?:FreePeriodUnit,id:string,offline_payment_method?:OfflinePaymentMethod,setup_fee?:number,start_date?:number,trial_end?:number,trial_end_action?:TrialEndAction};
       
      billing_address?:{city?:string,country?:string,line1?:string,line2?:string,line3?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      shipping_address?:{city?:string,country?:string,line1?:string,line2?:string,line3?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      customer?:{registered_for_gst?:boolean,taxability?:Taxability,vat_number?:string,vat_number_prefix?:string};
       
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
       
      fixed_interval_schedule?:{days_before_renewal?:number,end_date?:number,end_schedule_on?:EndScheduleOn,number_of_occurrences?:number};
       
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
       
      cancel_option?:CancelOption;
       
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
       
      cancel_option?:CancelOption;
       
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
       
      subscription?:{pause_date?:number,resume_date?:number,skip_billing_cycles?:number};
       
      pause_option?:PauseOption;
       
      unbilled_charges_handling?:UnbilledChargesHandling;
    }
    export interface ResumeSubscriptionResponse {  
       estimate:Estimate;
    }
    export interface ResumeSubscriptionInputParam {
       
      subscription?:{resume_date?:number};
       
      resume_option?:ResumeOption;
       
      charges_handling?:ChargesHandling;
    }
    export interface GiftSubscriptionResponse {  
       estimate:Estimate;
    }
    export interface GiftSubscriptionInputParam {
       
      gift?:{auto_claim?:boolean,claim_expiry_date?:number,no_expiry?:boolean,scheduled_at?:number};
       
      gifter:{customer_id:string,note?:string,payment_src_id?:string,signature:string};
       
      gift_receiver:{customer_id:string,email:string,first_name:string,last_name:string};
       
      payment_intent?:{additional_information?:object,gateway_account_id?:string,gw_payment_method_id?:string,gw_token?:string,id?:string,payment_method_type?:'card' | 'ideal' | 'sofort' | 'bancontact' | 'google_pay' | 'dotpay' | 'giropay' | 'apple_pay' | 'upi' | 'netbanking_emandates' | 'paypal_express_checkout' | 'direct_debit' | 'boleto' | 'venmo' | 'amazon_payments' | 'pay_to' | 'faster_payments' | 'sepa_instant_transfer' | 'klarna_pay_now' | 'online_banking_poland',reference_id?:string};
       
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      subscription:{plan_id:string,plan_quantity?:number,plan_quantity_in_decimal?:string};
       
      addons?:{id?:string,quantity?:number,quantity_in_decimal?:string}[];
       
      coupon_ids?:string[];
    }
    export interface GiftSubscriptionForItemsResponse {  
       estimate:Estimate;
    }
    export interface GiftSubscriptionForItemsInputParam {
       
      gift?:{auto_claim?:boolean,claim_expiry_date?:number,no_expiry?:boolean,scheduled_at?:number};
       
      gifter:{customer_id:string,note?:string,payment_src_id?:string,signature:string};
       
      gift_receiver:{customer_id:string,email:string,first_name:string,last_name:string};
       
      payment_intent?:{additional_information?:object,gateway_account_id?:string,gw_payment_method_id?:string,gw_token?:string,id?:string,payment_method_type?:'card' | 'ideal' | 'sofort' | 'bancontact' | 'google_pay' | 'dotpay' | 'giropay' | 'apple_pay' | 'upi' | 'netbanking_emandates' | 'paypal_express_checkout' | 'direct_debit' | 'boleto' | 'venmo' | 'amazon_payments' | 'pay_to' | 'faster_payments' | 'sepa_instant_transfer' | 'klarna_pay_now' | 'online_banking_poland',reference_id?:string};
       
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      subscription_items?:{item_price_id?:string,quantity?:number,quantity_in_decimal?:string}[];
       
      coupon_ids?:string[];
    }
    export interface CreateInvoiceResponse {  
       estimate:Estimate;
    }
    export interface CreateInvoiceInputParam {
       
      invoice?:{customer_id?:string,po_number?:string,subscription_id?:string};
       
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
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
       
      invoice?:{customer_id?:string,po_number?:string,subscription_id?:string};
       
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
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