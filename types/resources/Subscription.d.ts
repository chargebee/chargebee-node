///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface Subscription {
    [key : string] : any;
    id:string;
    currency_code:string;
    start_date?:number;
    trial_end?:number;
    remaining_billing_cycles?:number;
    po_number?:string;
    plan_quantity_in_decimal?:string;
    plan_unit_price_in_decimal?:string;
    customer_id:string;
    status:'in_trial' | 'paused' | 'future' | 'active' | 'cancelled' | 'non_renewing';
    trial_start?:number;
    trial_end_action?:TrialEndAction;
    current_term_start?:number;
    current_term_end?:number;
    next_billing_at?:number;
    created_at?:number;
    started_at?:number;
    activated_at?:number;
    contract_term_billing_cycle_on_renewal?:number;
    override_relationship?:boolean;
    pause_date?:number;
    resume_date?:number;
    cancelled_at?:number;
    cancel_reason?:'tax_calculation_failed' | 'fraud_review_failed' | 'currency_incompatible_with_gateway' | 'non_compliant_eu_customer' | 'non_compliant_customer' | 'not_paid' | 'no_card';
    created_from_ip?:string;
    resource_version?:number;
    updated_at?:number;
    has_scheduled_advance_invoices:boolean;
    has_scheduled_changes:boolean;
    payment_source_id?:string;
    plan_free_quantity_in_decimal?:string;
    plan_amount_in_decimal?:string;
    cancel_schedule_created_at?:number;
    channel?:Channel;
    net_term_days?:number;
    due_invoices_count?:number;
    due_since?:number;
    total_dues?:number;
    mrr?:number;
    exchange_rate?:number;
    base_currency_code?:string;
    invoice_notes?:string;
    metadata?:object;
    deleted:boolean;
    changes_scheduled_at?:number;
    cancel_reason_code?:string;
    free_period?:number;
    free_period_unit?:FreePeriodUnit;
    create_pending_invoices?:boolean;
    auto_close_invoices?:boolean;
    business_entity_id?:string;
    subscription_items?:Subscription.SubscriptionItem[];
    item_tiers?:Subscription.ItemTier[];
    charged_items?:Subscription.ChargedItem[];
    coupons?:Subscription.Coupon[];
    shipping_address?:Subscription.ShippingAddress;
    referral_info?:Subscription.ReferralInfo;
    contract_term?:Subscription.ContractTerm;
    discounts?:Subscription.Discount[];
  }
  export namespace Subscription {
    export class SubscriptionResource {
      remove_advance_invoice_schedule(subscription_id:string, input?:RemoveAdvanceInvoiceScheduleInputParam):ChargebeeRequest<RemoveAdvanceInvoiceScheduleResponse>;
      update_for_items(subscription_id:string, input?:UpdateForItemsInputParam):ChargebeeRequest<UpdateForItemsResponse>;
      remove_coupons(subscription_id:string, input?:RemoveCouponsInputParam):ChargebeeRequest<RemoveCouponsResponse>;
      resume(subscription_id:string, input?:ResumeInputParam):ChargebeeRequest<ResumeResponse>;
      cancel_for_items(subscription_id:string, input?:CancelForItemsInputParam):ChargebeeRequest<CancelForItemsResponse>;
      regenerate_invoice(subscription_id:string, input?:RegenerateInvoiceInputParam):ChargebeeRequest<RegenerateInvoiceResponse>;
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
      import_for_items(customer_id:string, input:ImportForItemsInputParam):ChargebeeRequest<ImportForItemsResponse>;
      retrieve_advance_invoice_schedule(subscription_id:string):ChargebeeRequest<RetrieveAdvanceInvoiceScheduleResponse>;
      remove_scheduled_cancellation(subscription_id:string, input?:RemoveScheduledCancellationInputParam):ChargebeeRequest<RemoveScheduledCancellationResponse>;
      retrieve_with_scheduled_changes(subscription_id:string):ChargebeeRequest<RetrieveWithScheduledChangesResponse>;
      reactivate(subscription_id:string, input?:ReactivateInputParam):ChargebeeRequest<ReactivateResponse>;
      charge_future_renewals(subscription_id:string, input?:ChargeFutureRenewalsInputParam):ChargebeeRequest<ChargeFutureRenewalsResponse>;
      add_charge_at_term_end(subscription_id:string, input:AddChargeAtTermEndInputParam):ChargebeeRequest<AddChargeAtTermEndResponse>;
      remove_scheduled_changes(subscription_id:string):ChargebeeRequest<RemoveScheduledChangesResponse>;
      change_term_end(subscription_id:string, input:ChangeTermEndInputParam):ChargebeeRequest<ChangeTermEndResponse>;
      delete(subscription_id:string):ChargebeeRequest<DeleteResponse>;
      create_with_items(customer_id:string, input?:CreateWithItemsInputParam):ChargebeeRequest<CreateWithItemsResponse>;
      import_unbilled_charges(subscription_id:string, input?:ImportUnbilledChargesInputParam):ChargebeeRequest<ImportUnbilledChargesResponse>;
      remove_scheduled_resumption(subscription_id:string):ChargebeeRequest<RemoveScheduledResumptionResponse>;
      retrieve(subscription_id:string):ChargebeeRequest<RetrieveResponse>;
      import_contract_term(subscription_id:string, input?:ImportContractTermInputParam):ChargebeeRequest<ImportContractTermResponse>;
      override_billing_profile(subscription_id:string, input?:OverrideBillingProfileInputParam):ChargebeeRequest<OverrideBillingProfileResponse>;
      remove_scheduled_pause(subscription_id:string):ChargebeeRequest<RemoveScheduledPauseResponse>;
      edit_advance_invoice_schedule(subscription_id:string, input?:EditAdvanceInvoiceScheduleInputParam):ChargebeeRequest<EditAdvanceInvoiceScheduleResponse>;
      list_discounts(subscription_id:string, input?:ListDiscountsInputParam):ChargebeeRequest<ListDiscountsResponse>;
      contract_terms_for_subscription(subscription_id:string, input?:ContractTermsForSubscriptionInputParam):ChargebeeRequest<ContractTermsForSubscriptionResponse>;
      pause(subscription_id:string, input?:PauseInputParam):ChargebeeRequest<PauseResponse>;
    }
    export interface RemoveAdvanceInvoiceScheduleResponse {
      subscription:Subscription;
      advance_invoice_schedules?:AdvanceInvoiceSchedule[];
    }
    export interface RemoveAdvanceInvoiceScheduleInputParam {
      specific_dates_schedule?:{id?:string}[];
    }
    export interface UpdateForItemsResponse {
      subscription:Subscription;
      customer:Customer;
      card?:Card;
      invoice?:Invoice;
      unbilled_charges?:UnbilledCharge[];
      credit_notes?:CreditNote[];
    }
    export interface UpdateForItemsInputParam {
      [key : string] : any;
      mandatory_items_to_remove?:string[];
      replace_items_list?:boolean;
      net_term_days?:number;
      invoice_date?:number;
      start_date?:number;
      trial_end?:number;
      billing_cycles?:number;
      terms_to_charge?:number;
      reactivate_from?:number;
      billing_alignment_mode?:BillingAlignmentMode;
      auto_collection?:AutoCollection;
      offline_payment_method?:OfflinePaymentMethod;
      po_number?:string;
      coupon_ids?:string[];
      replace_coupon_list?:boolean;
      prorate?:boolean;
      end_of_term?:boolean;
      force_term_reset?:boolean;
      reactivate?:boolean;
      token_id?:string;
      invoice_notes?:string;
      meta_data?:object;
      invoice_immediately?:boolean;
      override_relationship?:boolean;
      changes_scheduled_at?:number;
      change_option?:ChangeOption;
      contract_term_billing_cycle_on_renewal?:number;
      free_period?:number;
      free_period_unit?:FreePeriodUnit;
      create_pending_invoices?:boolean;
      auto_close_invoices?:boolean;
      trial_end_action?:TrialEndAction;
      payment_initiator?:'merchant' | 'customer';
      card?:{additional_information?:object,billing_addr1?:string,billing_addr2?:string,billing_city?:string,billing_country?:string,billing_state?:string,billing_state_code?:string,billing_zip?:string,cvv?:string,expiry_month?:number,expiry_year?:number,first_name?:string,gateway_account_id?:string,last_name?:string,number?:string};
      payment_method?:{additional_information?:object,gateway_account_id?:string,issuing_country?:string,reference_id?:string,tmp_token?:string,type?:Type};
      payment_intent?:{additional_information?:object,gateway_account_id?:string,gw_token?:string,id?:string,payment_method_type?:'giropay' | 'ideal' | 'google_pay' | 'netbanking_emandates' | 'dotpay' | 'boleto' | 'direct_debit' | 'sofort' | 'upi' | 'apple_pay' | 'bancontact' | 'paypal_express_checkout' | 'card',reference_id?:string};
      billing_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
      customer?:{business_customer_without_vat_number?:boolean,einvoicing_method?:EinvoicingMethod,entity_identifier_scheme?:string,entity_identifier_standard?:string,is_einvoice_enabled?:boolean,registered_for_gst?:boolean,vat_number?:string,vat_number_prefix?:string};
      contract_term?:{action_at_term_end?:'cancel' | 'renew_once' | 'renew' | 'evergreen',cancellation_cutoff_period?:number};
      subscription_items?:{billing_cycles?:number,charge_on_event?:ChargeOnEvent,charge_on_option?:ChargeOnOption,charge_once?:boolean,item_price_id:string,quantity?:number,quantity_in_decimal?:string,service_period_days?:number,trial_end?:number,unit_price?:number,unit_price_in_decimal?:string}[];
      discounts?:{amount?:number,apply_on:ApplyOn,duration_type:DurationType,id?:string,included_in_mrr?:boolean,item_price_id?:string,operation_type:OperationType,percentage?:number,period?:number,period_unit?:PeriodUnit}[];
      item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,item_price_id?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
    }
    export interface RemoveCouponsResponse {
      subscription:Subscription;
      customer:Customer;
      card?:Card;
    }
    export interface RemoveCouponsInputParam {
      coupon_ids?:string[];
    }
    export interface ResumeResponse {
      subscription:Subscription;
      customer:Customer;
      card?:Card;
      invoice?:Invoice;
      unbilled_charges?:UnbilledCharge[];
    }
    export interface ResumeInputParam {
      resume_option?:ResumeOption;
      resume_date?:number;
      charges_handling?:ChargesHandling;
      unpaid_invoices_handling?:UnpaidInvoicesHandling;
      payment_initiator?:'merchant' | 'customer';
      payment_intent?:{additional_information?:object,gateway_account_id?:string,gw_token?:string,id?:string,payment_method_type?:'giropay' | 'ideal' | 'google_pay' | 'netbanking_emandates' | 'dotpay' | 'boleto' | 'direct_debit' | 'sofort' | 'upi' | 'apple_pay' | 'bancontact' | 'paypal_express_checkout' | 'card',reference_id?:string};
    }
    export interface CancelForItemsResponse {
      subscription:Subscription;
      customer:Customer;
      card?:Card;
      invoice?:Invoice;
      unbilled_charges?:UnbilledCharge[];
      credit_notes?:CreditNote[];
    }
    export interface CancelForItemsInputParam {
      end_of_term?:boolean;
      cancel_at?:number;
      credit_option_for_current_term_charges?:CreditOptionForCurrentTermCharges;
      unbilled_charges_option?:UnbilledChargesOption;
      account_receivables_handling?:AccountReceivablesHandling;
      refundable_credits_handling?:RefundableCreditsHandling;
      contract_term_cancel_option?:ContractTermCancelOption;
      invoice_date?:number;
      cancel_reason_code?:string;
      subscription_items?:{item_price_id?:string,quantity?:number,quantity_in_decimal?:string,service_period_days?:number,unit_price?:number,unit_price_in_decimal?:string}[];
    }
    export interface RegenerateInvoiceResponse {
      invoice?:Invoice;
      unbilled_charges?:UnbilledCharge[];
    }
    export interface RegenerateInvoiceInputParam {
      date_from?:number;
      date_to?:number;
      prorate?:boolean;
      invoice_immediately?:boolean;
    }
    export interface ListResponse {
      list:{subscription:Subscription,customer:Customer,card?:Card}[];
      next_offset?:string;
    }
    export interface ListInputParam {
      [key : string]: any;
      limit?:number;
      offset?:string;
      include_deleted?:boolean;
      id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      customer_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      plan_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      item_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      item_price_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      status?:{in?:string,is?:'in_trial' | 'paused' | 'future' | 'active' | 'cancelled' | 'non_renewing',is_not?:'in_trial' | 'paused' | 'future' | 'active' | 'cancelled' | 'non_renewing',not_in?:string};
      cancel_reason?:{in?:string,is?:'tax_calculation_failed' | 'fraud_review_failed' | 'currency_incompatible_with_gateway' | 'non_compliant_eu_customer' | 'non_compliant_customer' | 'not_paid' | 'no_card',is_not?:'tax_calculation_failed' | 'fraud_review_failed' | 'currency_incompatible_with_gateway' | 'non_compliant_eu_customer' | 'non_compliant_customer' | 'not_paid' | 'no_card',is_present?:'true' | 'false',not_in?:string};
      cancel_reason_code?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      remaining_billing_cycles?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,is_present?:'true' | 'false',lt?:string,lte?:string};
      created_at?:{after?:string,before?:string,between?:string,on?:string};
      activated_at?:{after?:string,before?:string,between?:string,is_present?:'true' | 'false',on?:string};
      next_billing_at?:{after?:string,before?:string,between?:string,on?:string};
      cancelled_at?:{after?:string,before?:string,between?:string,on?:string};
      has_scheduled_changes?:{is?:'true' | 'false'};
      updated_at?:{after?:string,before?:string,between?:string,on?:string};
      offline_payment_method?:{in?:string,is?:'bank_transfer' | 'no_preference' | 'ach_credit' | 'boleto' | 'check' | 'sepa_credit' | 'cash',is_not?:'bank_transfer' | 'no_preference' | 'ach_credit' | 'boleto' | 'check' | 'sepa_credit' | 'cash',not_in?:string};
      auto_close_invoices?:{is?:'true' | 'false'};
      override_relationship?:{is?:'true' | 'false'};
      sort_by?:{asc?:'updated_at' | 'created_at',desc?:'updated_at' | 'created_at'};
      business_entity_id?:{is?:string,is_not?:string,starts_with?:string};
      channel?:{in?:string,is?:'app_store' | 'web' | 'play_store',is_not?:'app_store' | 'web' | 'play_store',not_in?:string};
    }
    export interface ImportForItemsResponse {
      subscription:Subscription;
      customer:Customer;
      card?:Card;
      invoice?:Invoice;
    }
    export interface ImportForItemsInputParam {
      [key : string] : any;
      id?:string;
      trial_end?:number;
      billing_cycles?:number;
      net_term_days?:number;
      start_date?:number;
      auto_collection?:AutoCollection;
      po_number?:string;
      coupon_ids?:string[];
      payment_source_id?:string;
      status:'in_trial' | 'paused' | 'future' | 'active' | 'cancelled' | 'non_renewing';
      current_term_end?:number;
      current_term_start?:number;
      trial_start?:number;
      cancelled_at?:number;
      started_at?:number;
      activated_at?:number;
      pause_date?:number;
      resume_date?:number;
      contract_term_billing_cycle_on_renewal?:number;
      create_current_term_invoice?:boolean;
      invoice_notes?:string;
      meta_data?:object;
      cancel_reason_code?:string;
      create_pending_invoices?:boolean;
      auto_close_invoices?:boolean;
      contract_term?:{action_at_term_end?:'cancel' | 'renew_once' | 'renew' | 'evergreen',billing_cycle?:number,cancellation_cutoff_period?:number,contract_start?:number,created_at?:number,id?:string,total_amount_raised?:number,total_amount_raised_before_tax?:number};
      transaction?:{amount?:number,date?:number,payment_method?:PaymentMethod,reference_number?:string};
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
      subscription_items?:{billing_cycles?:number,charge_on_event?:ChargeOnEvent,charge_once?:boolean,item_price_id:string,quantity?:number,quantity_in_decimal?:string,service_period_days?:number,trial_end?:number,unit_price?:number,unit_price_in_decimal?:string}[];
      discounts?:{amount?:number,apply_on:ApplyOn,duration_type:DurationType,included_in_mrr?:boolean,item_price_id?:string,percentage?:number,period?:number,period_unit?:PeriodUnit}[];
      charged_items?:{item_price_id?:string,last_charged_at?:number}[];
      item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,item_price_id?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
    }
    export interface RetrieveAdvanceInvoiceScheduleResponse {
      advance_invoice_schedules:AdvanceInvoiceSchedule[];
    }
    
    export interface RemoveScheduledCancellationResponse {
      subscription:Subscription;
      customer:Customer;
      card?:Card;
    }
    export interface RemoveScheduledCancellationInputParam {
      billing_cycles?:number;
    }
    export interface RetrieveWithScheduledChangesResponse {
      subscription:Subscription;
      customer:Customer;
      card?:Card;
    }
    
    export interface ReactivateResponse {
      subscription:Subscription;
      customer:Customer;
      card?:Card;
      invoice?:Invoice;
      unbilled_charges?:UnbilledCharge[];
    }
    export interface ReactivateInputParam {
      trial_end?:number;
      billing_cycles?:number;
      reactivate_from?:number;
      invoice_immediately?:boolean;
      billing_alignment_mode?:BillingAlignmentMode;
      terms_to_charge?:number;
      invoice_date?:number;
      contract_term_billing_cycle_on_renewal?:number;
      payment_initiator?:'merchant' | 'customer';
      contract_term?:{action_at_term_end?:'cancel' | 'renew' | 'evergreen',cancellation_cutoff_period?:number};
      payment_intent?:{additional_information?:object,gateway_account_id?:string,gw_token?:string,id?:string,payment_method_type?:'giropay' | 'ideal' | 'google_pay' | 'netbanking_emandates' | 'dotpay' | 'boleto' | 'direct_debit' | 'sofort' | 'upi' | 'apple_pay' | 'bancontact' | 'paypal_express_checkout' | 'card',reference_id?:string};
    }
    export interface ChargeFutureRenewalsResponse {
      subscription:Subscription;
      customer:Customer;
      card?:Card;
      invoice?:Invoice;
      advance_invoice_schedules?:AdvanceInvoiceSchedule[];
    }
    export interface ChargeFutureRenewalsInputParam {
      terms_to_charge?:number;
      invoice_immediately?:boolean;
      schedule_type?:ScheduleType;
      fixed_interval_schedule?:{days_before_renewal?:number,end_date?:number,end_schedule_on?:EndScheduleOn,number_of_occurrences?:number};
      specific_dates_schedule?:{date?:number,terms_to_charge?:number}[];
    }
    export interface AddChargeAtTermEndResponse {
      estimate:Estimate;
    }
    export interface AddChargeAtTermEndInputParam {
      amount?:number;
      description:string;
      amount_in_decimal?:string;
      avalara_sale_type?:AvalaraSaleType;
      avalara_transaction_type?:number;
      avalara_service_type?:number;
      date_from?:number;
      date_to?:number;
    }
    export interface RemoveScheduledChangesResponse {
      subscription:Subscription;
      customer:Customer;
      card?:Card;
      credit_notes?:CreditNote[];
    }
    
    export interface ChangeTermEndResponse {
      subscription:Subscription;
      customer:Customer;
      card?:Card;
      invoice?:Invoice;
      unbilled_charges?:UnbilledCharge[];
      credit_notes?:CreditNote[];
    }
    export interface ChangeTermEndInputParam {
      term_ends_at:number;
      prorate?:boolean;
      invoice_immediately?:boolean;
    }
    export interface DeleteResponse {
      subscription:Subscription;
      customer:Customer;
      card?:Card;
    }
    
    export interface CreateWithItemsResponse {
      subscription:Subscription;
      customer:Customer;
      card?:Card;
      invoice?:Invoice;
      unbilled_charges?:UnbilledCharge[];
    }
    export interface CreateWithItemsInputParam {
      [key : string] : any;
      id?:string;
      business_entity_id?:string;
      trial_end?:number;
      billing_cycles?:number;
      mandatory_items_to_remove?:string[];
      net_term_days?:number;
      start_date?:number;
      auto_collection?:AutoCollection;
      terms_to_charge?:number;
      billing_alignment_mode?:BillingAlignmentMode;
      po_number?:string;
      coupon_ids?:string[];
      payment_source_id?:string;
      override_relationship?:boolean;
      invoice_notes?:string;
      invoice_date?:number;
      meta_data?:object;
      invoice_immediately?:boolean;
      replace_primary_payment_source?:boolean;
      free_period?:number;
      free_period_unit?:FreePeriodUnit;
      contract_term_billing_cycle_on_renewal?:number;
      create_pending_invoices?:boolean;
      auto_close_invoices?:boolean;
      first_invoice_pending?:boolean;
      trial_end_action?:TrialEndAction;
      payment_initiator?:'merchant' | 'customer';
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
      payment_intent?:{additional_information?:object,gateway_account_id?:string,gw_token?:string,id?:string,payment_method_type?:'giropay' | 'ideal' | 'google_pay' | 'netbanking_emandates' | 'dotpay' | 'boleto' | 'direct_debit' | 'sofort' | 'upi' | 'apple_pay' | 'bancontact' | 'paypal_express_checkout' | 'card',reference_id?:string};
      contract_term?:{action_at_term_end?:'cancel' | 'renew' | 'evergreen',cancellation_cutoff_period?:number};
      subscription_items?:{billing_cycles?:number,charge_on_event?:ChargeOnEvent,charge_on_option?:ChargeOnOption,charge_once?:boolean,item_price_id:string,quantity?:number,quantity_in_decimal?:string,service_period_days?:number,trial_end?:number,unit_price?:number,unit_price_in_decimal?:string}[];
      discounts?:{amount?:number,apply_on:ApplyOn,duration_type:DurationType,included_in_mrr?:boolean,item_price_id?:string,percentage?:number,period?:number,period_unit?:PeriodUnit}[];
      item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,item_price_id?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
    }
    export interface ImportUnbilledChargesResponse {
      unbilled_charges:UnbilledCharge[];
    }
    export interface ImportUnbilledChargesInputParam {
      unbilled_charges?:{amount?:number,amount_in_decimal?:string,date_from:number,date_to:number,description?:string,discount_amount?:number,entity_id?:string,entity_type:'addon_item_price' | 'plan_item_price' | 'charge_item_price' | 'adhoc',id?:string,is_advance_charge?:boolean,quantity?:number,quantity_in_decimal?:string,unit_amount?:number,unit_amount_in_decimal?:string,use_for_proration?:boolean}[];
      discounts?:{amount:number,description?:string,entity_id?:string,entity_type?:'item_level_coupon' | 'item_level_discount' | 'document_level_discount' | 'document_level_coupon',unbilled_charge_id?:string}[];
      tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,quantity_used?:number,quantity_used_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string,unbilled_charge_id:string,unit_amount?:number,unit_amount_in_decimal?:string}[];
    }
    export interface RemoveScheduledResumptionResponse {
      subscription:Subscription;
      customer:Customer;
      card?:Card;
    }
    
    export interface RetrieveResponse {
      subscription:Subscription;
      customer:Customer;
      card?:Card;
    }
    
    export interface ImportContractTermResponse {
      contract_term:ContractTerm;
    }
    export interface ImportContractTermInputParam {
      contract_term_billing_cycle_on_renewal?:number;
      contract_term?:{action_at_term_end?:'cancel' | 'renew_once' | 'renew' | 'evergreen',billing_cycle?:number,cancellation_cutoff_period?:number,contract_end?:number,contract_start?:number,created_at?:number,id?:string,status?:'active' | 'cancelled' | 'completed' | 'terminated',total_amount_raised?:number,total_amount_raised_before_tax?:number,total_contract_value?:number,total_contract_value_before_tax?:number};
    }
    export interface OverrideBillingProfileResponse {
      subscription:Subscription;
      payment_source?:PaymentSource;
    }
    export interface OverrideBillingProfileInputParam {
      payment_source_id?:string;
      auto_collection?:AutoCollection;
    }
    export interface RemoveScheduledPauseResponse {
      subscription:Subscription;
      customer:Customer;
      card?:Card;
    }
    
    export interface EditAdvanceInvoiceScheduleResponse {
      advance_invoice_schedules:AdvanceInvoiceSchedule[];
    }
    export interface EditAdvanceInvoiceScheduleInputParam {
      terms_to_charge?:number;
      schedule_type?:ScheduleType;
      fixed_interval_schedule?:{days_before_renewal?:number,end_date?:number,end_schedule_on?:EndScheduleOn,number_of_occurrences?:number};
      specific_dates_schedule?:{date?:number,id?:string,terms_to_charge?:number}[];
    }
    export interface ListDiscountsResponse {
      list:{discount:Discount}[];
      next_offset?:string;
    }
    export interface ListDiscountsInputParam {
      [key : string]: any;
      limit?:number;
      offset?:string;
    }
    export interface ContractTermsForSubscriptionResponse {
      list:{contract_term:ContractTerm}[];
      next_offset?:string;
    }
    export interface ContractTermsForSubscriptionInputParam {
      [key : string]: any;
      limit?:number;
      offset?:string;
    }
    export interface PauseResponse {
      subscription:Subscription;
      customer:Customer;
      card?:Card;
      invoice?:Invoice;
      unbilled_charges?:UnbilledCharge[];
      credit_notes?:CreditNote[];
    }
    export interface PauseInputParam {
      pause_option?:PauseOption;
      pause_date?:number;
      unbilled_charges_handling?:UnbilledChargesHandling;
      invoice_dunning_handling?:InvoiceDunningHandling;
      skip_billing_cycles?:number;
      resume_date?:number;
    }
    export interface SubscriptionItem {
      item_price_id?:string;
      item_type?:'charge' | 'addon' | 'plan';
      quantity?:number;
      quantity_in_decimal?:string;
      unit_price?:number;
      unit_price_in_decimal?:string;
      amount?:number;
      amount_in_decimal?:string;
      free_quantity?:number;
      free_quantity_in_decimal?:string;
      trial_end?:number;
      billing_cycles?:number;
      service_period_days?:number;
      charge_on_event?:'subscription_creation' | 'subscription_activation' | 'subscription_trial_start' | 'contract_termination' | 'plan_activation';
      charge_once?:boolean;
      charge_on_option?:'on_event' | 'immediately';
    }
    export interface ItemTier {
      item_price_id?:string;
      starting_unit?:number;
      ending_unit?:number;
      price?:number;
      starting_unit_in_decimal?:string;
      ending_unit_in_decimal?:string;
      price_in_decimal?:string;
      index?:number;
    }
    export interface ChargedItem {
      item_price_id?:string;
      last_charged_at?:number;
    }
    export interface Coupon {
      coupon_id?:string;
      apply_till?:number;
      applied_count?:number;
      coupon_code?:string;
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
    export interface ReferralInfo {
      referral_code?:string;
      coupon_code?:string;
      referrer_id?:string;
      external_reference_id?:string;
      reward_status?:'pending' | 'paid' | 'invalid';
      referral_system?:ReferralSystem;
      account_id?:string;
      campaign_id?:string;
      external_campaign_id?:string;
      friend_offer_type?:FriendOfferType;
      referrer_reward_type?:ReferrerRewardType;
      notify_referral_system?:NotifyReferralSystem;
      destination_url?:string;
      post_purchase_widget_enabled?:boolean;
    }
    export interface ContractTerm {
      id?:string;
      status?:'active' | 'cancelled' | 'completed' | 'terminated';
      contract_start?:number;
      contract_end?:number;
      billing_cycle?:number;
      action_at_term_end?:'cancel' | 'renew_once' | 'renew' | 'evergreen';
      total_contract_value?:number;
      total_contract_value_before_tax?:number;
      cancellation_cutoff_period?:number;
      created_at?:number;
      subscription_id?:string;
      remaining_billing_cycles?:number;
    }
    export interface Discount {
      id?:string;
      invoice_name?:string;
      type?:'fixed_amount' | 'percentage';
      percentage?:number;
      amount?:number;
      currency_code?:string;
      duration_type?:'limited_period' | 'one_time' | 'forever';
      period?:number;
      period_unit?:'week' | 'month' | 'year' | 'day';
      included_in_mrr?:boolean;
      apply_on?:'specific_item_price' | 'invoice_amount';
      item_price_id?:string;
      created_at?:number;
      apply_till?:number;
      applied_count?:number;
      coupon_id?:string;
      index?:number;
    }
  }
}