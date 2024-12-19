///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface Subscription {
    [key : string] : any;

    id:string;

    currency_code:string;

    plan_id:string;

    plan_quantity:number;

    plan_unit_price?:number;

    setup_fee?:number;

    billing_period?:number;

    billing_period_unit?:'day' | 'week' | 'month' | 'year';

    start_date?:number;

    trial_end?:number;

    remaining_billing_cycles?:number;

    po_number?:string;

    auto_collection?:AutoCollection;

    plan_quantity_in_decimal?:string;

    plan_unit_price_in_decimal?:string;

    customer_id:string;

    plan_amount?:number;

    plan_free_quantity?:number;

    status:'future' | 'in_trial' | 'active' | 'non_renewing' | 'paused' | 'cancelled' | 'transferred';

    trial_start?:number;

    trial_end_action?:TrialEndAction;

    current_term_start?:number;

    current_term_end?:number;

    next_billing_at?:number;

    created_at?:number;

    started_at?:number;

    activated_at?:number;

    gift_id?:string;

    contract_term_billing_cycle_on_renewal?:number;

    override_relationship?:boolean;

    pause_date?:number;

    resume_date?:number;

    cancelled_at?:number;

    cancel_reason?:'not_paid' | 'no_card' | 'fraud_review_failed' | 'non_compliant_eu_customer' | 'tax_calculation_failed' | 'currency_incompatible_with_gateway' | 'non_compliant_customer';

    affiliate_token?:string;

    created_from_ip?:string;

    resource_version?:number;

    updated_at?:number;

    has_scheduled_advance_invoices:boolean;

    has_scheduled_changes:boolean;

    payment_source_id?:string;

    plan_free_quantity_in_decimal?:string;

    plan_amount_in_decimal?:string;

    cancel_schedule_created_at?:number;

    offline_payment_method?:OfflinePaymentMethod;

    channel?:Channel;

    net_term_days?:number;

    active_id?:string;

    subscription_items?:Subscription.SubscriptionItem[];

    item_tiers?:Subscription.ItemTier[];

    charged_items?:Subscription.ChargedItem[];

    due_invoices_count?:number;

    due_since?:number;

    total_dues?:number;

    mrr?:number;

    arr?:number;

    exchange_rate?:number;

    base_currency_code?:string;

    addons?:Subscription.Addon[];

    event_based_addons?:Subscription.EventBasedAddon[];

    charged_event_based_addons?:Subscription.ChargedEventBasedAddon[];

    coupon?:string;

    coupons?:Subscription.Coupon[];

    shipping_address?:Subscription.ShippingAddress;

    referral_info?:Subscription.ReferralInfo;

    billing_override?:Subscription.BillingOverride;

    invoice_notes?:string;

    meta_data?:object;

    deleted:boolean;

    changes_scheduled_at?:number;

    contract_term?:Subscription.ContractTerm;

    cancel_reason_code?:string;

    free_period?:number;

    free_period_unit?:FreePeriodUnit;

    create_pending_invoices?:boolean;

    auto_close_invoices?:boolean;

    discounts?:Subscription.Discount[];

    business_entity_id?:string;
   /**
    * @deprecated metadata is deprecated please use meta_data instead
    */
    metadata?:object;

  }
  export namespace Subscription {
    export class SubscriptionResource {  
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
       
      create_for_customer(customer_id:string, input:CreateForCustomerInputParam):ChargebeeRequest<CreateForCustomerResponse>;
       
      create_with_items(customer_id:string, input:CreateWithItemsInputParam):ChargebeeRequest<CreateWithItemsResponse>;
       
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
       
      subscriptions_for_customer(customer_id:string, input?:SubscriptionsForCustomerInputParam):ChargebeeRequest<SubscriptionsForCustomerResponse>;
       
      contract_terms_for_subscription(subscription_id:string, input?:ContractTermsForSubscriptionInputParam):ChargebeeRequest<ContractTermsForSubscriptionResponse>;
       
      list_discounts(subscription_id:string, input?:ListDiscountsInputParam):ChargebeeRequest<ListDiscountsResponse>;
       
      retrieve(subscription_id:string):ChargebeeRequest<RetrieveResponse>;
       
      retrieve_with_scheduled_changes(subscription_id:string):ChargebeeRequest<RetrieveWithScheduledChangesResponse>;
       
      remove_scheduled_changes(subscription_id:string):ChargebeeRequest<RemoveScheduledChangesResponse>;
       
      remove_scheduled_cancellation(subscription_id:string, input?:RemoveScheduledCancellationInputParam):ChargebeeRequest<RemoveScheduledCancellationResponse>;
       
      remove_coupons(subscription_id:string, input?:RemoveCouponsInputParam):ChargebeeRequest<RemoveCouponsResponse>;
       
      update(subscription_id:string, input?:UpdateInputParam):ChargebeeRequest<UpdateResponse>;
       
      update_for_items(subscription_id:string, input:UpdateForItemsInputParam):ChargebeeRequest<UpdateForItemsResponse>;
       
      change_term_end(subscription_id:string, input:ChangeTermEndInputParam):ChargebeeRequest<ChangeTermEndResponse>;
       
      reactivate(subscription_id:string, input?:ReactivateInputParam):ChargebeeRequest<ReactivateResponse>;
       
      add_charge_at_term_end(subscription_id:string, input:AddChargeAtTermEndInputParam):ChargebeeRequest<AddChargeAtTermEndResponse>;
       
      charge_addon_at_term_end(subscription_id:string, input:ChargeAddonAtTermEndInputParam):ChargebeeRequest<ChargeAddonAtTermEndResponse>;
       
      charge_future_renewals(subscription_id:string, input?:ChargeFutureRenewalsInputParam):ChargebeeRequest<ChargeFutureRenewalsResponse>;
       
      edit_advance_invoice_schedule(subscription_id:string, input?:EditAdvanceInvoiceScheduleInputParam):ChargebeeRequest<EditAdvanceInvoiceScheduleResponse>;
       
      retrieve_advance_invoice_schedule(subscription_id:string):ChargebeeRequest<RetrieveAdvanceInvoiceScheduleResponse>;
       
      remove_advance_invoice_schedule(subscription_id:string, input?:RemoveAdvanceInvoiceScheduleInputParam):ChargebeeRequest<RemoveAdvanceInvoiceScheduleResponse>;
       
      regenerate_invoice(subscription_id:string, input?:RegenerateInvoiceInputParam):ChargebeeRequest<RegenerateInvoiceResponse>;
       
      import_subscription(input:ImportSubscriptionInputParam):ChargebeeRequest<ImportSubscriptionResponse>;
       
      import_for_customer(customer_id:string, input:ImportForCustomerInputParam):ChargebeeRequest<ImportForCustomerResponse>;
       
      import_contract_term(subscription_id:string, input?:ImportContractTermInputParam):ChargebeeRequest<ImportContractTermResponse>;
       
      import_unbilled_charges(subscription_id:string, input:ImportUnbilledChargesInputParam):ChargebeeRequest<ImportUnbilledChargesResponse>;
       
      import_for_items(customer_id:string, input:ImportForItemsInputParam):ChargebeeRequest<ImportForItemsResponse>;
       
      override_billing_profile(subscription_id:string, input?:OverrideBillingProfileInputParam):ChargebeeRequest<OverrideBillingProfileResponse>;
       
      delete(subscription_id:string):ChargebeeRequest<DeleteResponse>;
       
      pause(subscription_id:string, input?:PauseInputParam):ChargebeeRequest<PauseResponse>;
       
      cancel(subscription_id:string, input?:CancelInputParam):ChargebeeRequest<CancelResponse>;
       
      cancel_for_items(subscription_id:string, input?:CancelForItemsInputParam):ChargebeeRequest<CancelForItemsResponse>;
       
      resume(subscription_id:string, input?:ResumeInputParam):ChargebeeRequest<ResumeResponse>;
       
      remove_scheduled_pause(subscription_id:string):ChargebeeRequest<RemoveScheduledPauseResponse>;
       
      remove_scheduled_resumption(subscription_id:string):ChargebeeRequest<RemoveScheduledResumptionResponse>;
       
      move(subscription_id:string, input:MoveInputParam):ChargebeeRequest<MoveResponse>;
    }
    export interface CreateResponse {  
       subscription:Subscription;
       
       customer:Customer;
       
       card?:Card;
       
       invoice?:Invoice;
       
       unbilled_charges?:UnbilledCharge[];
    }
    export interface CreateInputParam {
      [key : string] : any;  
      customer?:object;
       
      card?:{additional_information?:object,billing_addr1?:string,billing_addr2?:string,billing_city?:string,billing_country?:string,billing_state?:string,billing_state_code?:string,billing_zip?:string,cvv?:string,expiry_month?:number,expiry_year?:number,first_name?:string,gateway?:Gateway,gateway_account_id?:string,ip_address?:string,last_name?:string,number?:string,preferred_scheme?:'cartes_bancaires' | 'mastercard' | 'visa',tmp_token?:string};
       
      bank_account?:{account_holder_type?:AccountHolderType,account_number?:string,account_type?:AccountType,bank_code?:string,bank_name?:string,billing_address?:object,company?:string,echeck_type?:EcheckType,email?:string,first_name?:string,gateway_account_id?:string,iban?:string,issuing_country?:string,last_name?:string,phone?:string,routing_number?:string,swedish_identity_number?:string};
       
      payment_method?:{additional_information?:object,gateway?:Gateway,gateway_account_id?:string,issuing_country?:string,reference_id?:string,tmp_token?:string,type?:Type};
       
      payment_intent?:{additional_information?:object,gateway_account_id?:string,gw_payment_method_id?:string,gw_token?:string,id?:string,payment_method_type?:'card' | 'ideal' | 'sofort' | 'bancontact' | 'google_pay' | 'dotpay' | 'giropay' | 'apple_pay' | 'upi' | 'netbanking_emandates' | 'paypal_express_checkout' | 'direct_debit' | 'boleto' | 'venmo' | 'amazon_payments' | 'pay_to' | 'faster_payments' | 'sepa_instant_transfer' | 'klarna_pay_now' | 'online_banking_poland',reference_id?:string};
       
      billing_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      statement_descriptor?:{descriptor?:string};
       
      contract_term?:{action_at_term_end?:'renew' | 'evergreen' | 'cancel',cancellation_cutoff_period?:number};
       
      entity_identifiers?:{id?:string,scheme?:string,standard?:string,value?:string}[];
       
      tax_providers_fields?:{field_id?:string,field_value?:string,provider_name?:string}[];
       
      addons?:{billing_cycles?:number,id?:string,quantity?:number,quantity_in_decimal?:string,trial_end?:number,unit_price?:number,unit_price_in_decimal?:string}[];
       
      event_based_addons?:{charge_on?:ChargeOn,charge_once?:boolean,id?:string,on_event?:OnEvent,quantity?:number,quantity_in_decimal?:string,service_period_in_days?:number,unit_price?:number,unit_price_in_decimal?:string}[];
       
      coupons?:{apply_till?:number,coupon_id?:string}[];
       
      id?:string;
       
      plan_id:string;
       
      plan_quantity?:number;
       
      plan_quantity_in_decimal?:string;
       
      plan_unit_price?:number;
       
      plan_unit_price_in_decimal?:string;
       
      setup_fee?:number;
       
      trial_end?:number;
       
      billing_cycles?:number;
       
      mandatory_addons_to_remove?:string[];
       
      start_date?:number;
       
      coupon?:string;
       
      auto_collection?:AutoCollection;
       
      terms_to_charge?:number;
       
      billing_alignment_mode?:BillingAlignmentMode;
       
      offline_payment_method?:OfflinePaymentMethod;
       
      po_number?:string;
       
      coupon_ids?:string[];
       
      token_id?:string;
       
      affiliate_token?:string;
       
      created_from_ip?:string;
       
      invoice_notes?:string;
       
      invoice_date?:number;
       
      meta_data?:object;
       
      invoice_immediately?:boolean;
       
      free_period?:number;
       
      free_period_unit?:FreePeriodUnit;
       
      contract_term_billing_cycle_on_renewal?:number;
       
      trial_end_action?:TrialEndAction;
       
      client_profile_id?:string;
       
      payment_initiator?:PaymentInitiator;
    }
    export interface CreateForCustomerResponse {  
       subscription:Subscription;
       
       customer:Customer;
       
       card?:Card;
       
       invoice?:Invoice;
       
       unbilled_charges?:UnbilledCharge[];
    }
    export interface CreateForCustomerInputParam {
      [key : string] : any;  
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      statement_descriptor?:{descriptor?:string};
       
      payment_intent?:{additional_information?:object,gateway_account_id?:string,gw_payment_method_id?:string,gw_token?:string,id?:string,payment_method_type?:'card' | 'ideal' | 'sofort' | 'bancontact' | 'google_pay' | 'dotpay' | 'giropay' | 'apple_pay' | 'upi' | 'netbanking_emandates' | 'paypal_express_checkout' | 'direct_debit' | 'boleto' | 'venmo' | 'amazon_payments' | 'pay_to' | 'faster_payments' | 'sepa_instant_transfer' | 'klarna_pay_now' | 'online_banking_poland',reference_id?:string};
       
      contract_term?:{action_at_term_end?:'renew' | 'evergreen' | 'cancel',cancellation_cutoff_period?:number};
       
      addons?:{billing_cycles?:number,id?:string,quantity?:number,quantity_in_decimal?:string,trial_end?:number,unit_price?:number,unit_price_in_decimal?:string}[];
       
      event_based_addons?:{charge_on?:ChargeOn,charge_once?:boolean,id?:string,on_event?:OnEvent,quantity?:number,quantity_in_decimal?:string,service_period_in_days?:number,unit_price?:number,unit_price_in_decimal?:string}[];
       
      coupons?:{apply_till?:number,coupon_id?:string}[];
       
      id?:string;
       
      plan_id:string;
       
      plan_quantity?:number;
       
      plan_quantity_in_decimal?:string;
       
      plan_unit_price?:number;
       
      plan_unit_price_in_decimal?:string;
       
      setup_fee?:number;
       
      trial_end?:number;
       
      billing_cycles?:number;
       
      mandatory_addons_to_remove?:string[];
       
      start_date?:number;
       
      coupon?:string;
       
      auto_collection?:AutoCollection;
       
      terms_to_charge?:number;
       
      billing_alignment_mode?:BillingAlignmentMode;
       
      offline_payment_method?:OfflinePaymentMethod;
       
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
       
      trial_end_action?:TrialEndAction;
       
      payment_initiator?:PaymentInitiator;
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
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      statement_descriptor?:{descriptor?:string};
       
      payment_intent?:{additional_information?:object,gateway_account_id?:string,gw_payment_method_id?:string,gw_token?:string,id?:string,payment_method_type?:'card' | 'ideal' | 'sofort' | 'bancontact' | 'google_pay' | 'dotpay' | 'giropay' | 'apple_pay' | 'upi' | 'netbanking_emandates' | 'paypal_express_checkout' | 'direct_debit' | 'boleto' | 'venmo' | 'amazon_payments' | 'pay_to' | 'faster_payments' | 'sepa_instant_transfer' | 'klarna_pay_now' | 'online_banking_poland',reference_id?:string};
       
      contract_term?:{action_at_term_end?:'renew' | 'evergreen' | 'cancel',cancellation_cutoff_period?:number,contract_start?:number};
       
      billing_override?:{max_excess_payment_usage?:number,max_refundable_credits_usage?:number};
       
      subscription_items:{billing_cycles?:number,charge_on_event?:ChargeOnEvent,charge_on_option?:ChargeOnOption,charge_once?:boolean,item_price_id:string,item_type?:ItemType,quantity?:number,quantity_in_decimal?:string,service_period_days?:number,trial_end?:number,unit_price?:number,unit_price_in_decimal?:string,usage_accumulation_reset_frequency?:UsageAccumulationResetFrequency}[];
       
      discounts:{amount?:number,apply_on:ApplyOn,duration_type:DurationType,included_in_mrr?:boolean,item_price_id?:string,percentage?:number,period?:number,period_unit?:PeriodUnit}[];
       
      item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,item_price_id?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
       
      coupons?:{apply_till?:number,coupon_id?:string}[];
       
      id?:string;
       
      business_entity_id?:string;
       
      trial_end?:number;
       
      billing_cycles?:number;
       
      setup_fee?:number;
       
      mandatory_items_to_remove?:string[];
       
      net_term_days?:number;
       
      start_date?:number;
       
      coupon?:string;
       
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
       
      payment_initiator?:PaymentInitiator;
    }
    export interface ListResponse {  
       list:{subscription:Subscription,customer:Customer,card?:Card}[];
       
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
       
      include_deprecated?:boolean;
       
      /**
        * @description A unique and immutable identifier for the subscription. If not provided, it is autogenerated.

        */
        
      id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Identifier of the customer with whom this subscription is associated.

        */
        
      customer_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Identifier of the plan for this subscription

        */
        
      plan_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description The plan item code

        */
        
      item_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description The plan item price code

        */
        
      item_price_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Current state of the subscription

        */
        
      status?:{in?:string,is?:'future' | 'in_trial' | 'active' | 'non_renewing' | 'paused' | 'cancelled' | 'transferred',is_not?:'future' | 'in_trial' | 'active' | 'non_renewing' | 'paused' | 'cancelled' | 'transferred',not_in?:string};
       
      /**
        * @description The reason for canceling the subscription. Set by Chargebee automatically.

        */
        
      cancel_reason?:{in?:string,is?:'not_paid' | 'no_card' | 'fraud_review_failed' | 'non_compliant_eu_customer' | 'tax_calculation_failed' | 'currency_incompatible_with_gateway' | 'non_compliant_customer',is_not?:'not_paid' | 'no_card' | 'fraud_review_failed' | 'non_compliant_eu_customer' | 'tax_calculation_failed' | 'currency_incompatible_with_gateway' | 'non_compliant_customer',is_present?:'true' | 'false',not_in?:string};
       
      /**
        * @description Reason code for canceling the subscription. Must be one from a list of reason codes set in the Chargebee app in **Settings \&gt; Configure Chargebee \&gt; Reason Codes \&gt; Subscriptions \&gt; Subscription Cancellation**. Must be passed if set as mandatory in the app. The codes are case-sensitive

        */
        
      cancel_reason_code?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description * When the subscription is not on a contract term: this value is the number of billing cycles remaining after the current cycle, at the end of which, the subscription cancels.
* When the subscription is on a [contract term](contract_terms): this value is the number of billing cycles remaining in the contract term after the current billing cycle.

        */
        
      remaining_billing_cycles?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,is_present?:'true' | 'false',lt?:string,lte?:string};
       
      /**
        * @description The time at which the subscription was created.

        */
        
      created_at?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description Time at which the subscription &#x60;status&#x60; last changed to &#x60;active&#x60;. For example, this value is updated when an &#x60;in_trial&#x60; or &#x60;cancelled&#x60; subscription activates.

        */
        
      activated_at?:{after?:string,before?:string,between?:string,is_present?:'true' | 'false',on?:string};
       
      /**
        * @description The date/time at which the next billing for the subscription happens. This is usually right after &#x60;current_term_end&#x60; unless multiple subscription terms were invoiced in advance using the &#x60;terms_to_charge&#x60; parameter.

        */
        
      next_billing_at?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description Time at which subscription was cancelled or is set to be cancelled.

        */
        
      cancelled_at?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description If &#x60;true&#x60;, there are subscription changes scheduled on next renewal.

        */
        
      has_scheduled_changes?:{is?:'true' | 'false'};
       
      /**
        * @description To filter based on &#x60;updated_at&#x60;. This attribute will be present only if the resource has been updated after 2016-09-28. It is advisable when using this filter, to pass the &#x60;sort_by&#x60; input parameter as &#x60;updated_at&#x60; for a faster response.

        */
        
      updated_at?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description The preferred offline payment method for the subscription.

        */
        
      offline_payment_method?:{in?:string,is?:'no_preference' | 'cash' | 'check' | 'bank_transfer' | 'ach_credit' | 'sepa_credit' | 'boleto' | 'us_automated_bank_transfer' | 'eu_automated_bank_transfer' | 'uk_automated_bank_transfer' | 'jp_automated_bank_transfer' | 'mx_automated_bank_transfer' | 'custom',is_not?:'no_preference' | 'cash' | 'check' | 'bank_transfer' | 'ach_credit' | 'sepa_credit' | 'boleto' | 'us_automated_bank_transfer' | 'eu_automated_bank_transfer' | 'uk_automated_bank_transfer' | 'jp_automated_bank_transfer' | 'mx_automated_bank_transfer' | 'custom',not_in?:string};
       
      /**
        * @description Set to &#x60;false&#x60; to override for this subscription, the [site-level setting](https://www.chargebee.com/docs/2.0/metered_billing.html#configuring-metered-billing) for auto-closing invoices. Only applicable when auto-closing invoices has been enabled for the site. This attribute has a higher precedence than the same attribute at the [customer level](/docs/api/customers?prod_cat_ver&#x3D;2#customer_auto_close_invoices).

        */
        
      auto_close_invoices?:{is?:'true' | 'false'};
       
      /**
        * @description If &#x60;true&#x60;, ignores the [hierarchy relationship](./customers?prod_cat_ver&#x3D;2#customer_relationship) and uses customer as payment and invoice owner.

        */
        
      override_relationship?:{is?:'true' | 'false'};
       
      sort_by?:{asc?:'created_at' | 'updated_at',desc?:'created_at' | 'updated_at'};
       
      /**
        * @description The unique ID of the [business entity](/docs/api?prod_cat_ver&#x3D;2#mbe) of this subscription. This is always the same as the [business entity](/docs/api/subscriptions?prod_cat_ver&#x3D;2#subscription_customer_id) of the customer.  
The ID of the business entity created for the site. For Product Catalog 1.0, all the site data is tied to this business entity.  
**Note**

[Multiple Business Entities](/docs/api?prod_cat_ver&#x3D;2#mbe) is a feature available only on Product Catalog 2.0.

        */
        
      business_entity_id?:{is?:string};
       
      /**
        * @description The subscription channel this object originated from and is maintained in.

        */
        
      channel?:{in?:string,is?:'web' | 'app_store' | 'play_store',is_not?:'web' | 'app_store' | 'play_store',not_in?:string};
    }
    export interface SubscriptionsForCustomerResponse {  
       list:{subscription:Subscription}[];
       
       next_offset?:string;
    }
    export interface SubscriptionsForCustomerInputParam {
      [key : string]: any;  
      /**
        * @description The number of resources to be returned.

        */
        
      limit?:number;
       
      /**
        * @description Determines your position in the list for pagination. To ensure that the next page is retrieved correctly, always set \&#x60;offset\&#x60; to the value of \&#x60;next_offset\&#x60; obtained in the previous iteration of the API call.

        */
        
      offset?:string;
    }
    export interface ContractTermsForSubscriptionResponse {  
       list:{contract_term:ContractTerm}[];
       
       next_offset?:string;
    }
    export interface ContractTermsForSubscriptionInputParam {
      [key : string]: any;  
      /**
        * @description The number of resources to be returned.

        */
        
      limit?:number;
       
      /**
        * @description Determines your position in the list for pagination. To ensure that the next page is retrieved correctly, always set \&#x60;offset\&#x60; to the value of \&#x60;next_offset\&#x60; obtained in the previous iteration of the API call.

        */
        
      offset?:string;
    }
    export interface ListDiscountsResponse {  
       list:{discount:Discount}[];
       
       next_offset?:string;
    }
    export interface ListDiscountsInputParam {
      [key : string]: any;  
      /**
        * @description The number of resources to be returned.

        */
        
      limit?:number;
       
      /**
        * @description Determines your position in the list for pagination. To ensure that the next page is retrieved correctly, always set \&#x60;offset\&#x60; to the value of \&#x60;next_offset\&#x60; obtained in the previous iteration of the API call.

        */
        
      offset?:string;
    }
    export interface RetrieveResponse {  
       subscription:Subscription;
       
       customer:Customer;
       
       card?:Card;
    }
    
    export interface RetrieveWithScheduledChangesResponse {  
       subscription:Subscription;
       
       customer:Customer;
       
       card?:Card;
    }
    
    export interface RemoveScheduledChangesResponse {  
       subscription:Subscription;
       
       customer:Customer;
       
       card?:Card;
       
       credit_notes?:CreditNote[];
    }
    
    export interface RemoveScheduledCancellationResponse {  
       subscription:Subscription;
       
       customer:Customer;
       
       card?:Card;
    }
    export interface RemoveScheduledCancellationInputParam {
       
      billing_cycles?:number;
    }
    export interface RemoveCouponsResponse {  
       subscription:Subscription;
       
       customer:Customer;
       
       card?:Card;
    }
    export interface RemoveCouponsInputParam {
       
      coupon_ids?:string[];
    }
    export interface UpdateResponse {  
       subscription:Subscription;
       
       customer:Customer;
       
       card?:Card;
       
       invoice?:Invoice;
       
       unbilled_charges?:UnbilledCharge[];
       
       credit_notes?:CreditNote[];
    }
    export interface UpdateInputParam {
      [key : string] : any;  
      card?:{additional_information?:object,billing_addr1?:string,billing_addr2?:string,billing_city?:string,billing_country?:string,billing_state?:string,billing_state_code?:string,billing_zip?:string,cvv?:string,expiry_month?:number,expiry_year?:number,first_name?:string,gateway?:Gateway,gateway_account_id?:string,ip_address?:string,last_name?:string,number?:string,preferred_scheme?:'cartes_bancaires' | 'mastercard' | 'visa',tmp_token?:string};
       
      payment_method?:{additional_information?:object,gateway?:Gateway,gateway_account_id?:string,issuing_country?:string,reference_id?:string,tmp_token?:string,type?:Type};
       
      payment_intent?:{additional_information?:object,gateway_account_id?:string,gw_payment_method_id?:string,gw_token?:string,id?:string,payment_method_type?:'card' | 'ideal' | 'sofort' | 'bancontact' | 'google_pay' | 'dotpay' | 'giropay' | 'apple_pay' | 'upi' | 'netbanking_emandates' | 'paypal_express_checkout' | 'direct_debit' | 'boleto' | 'venmo' | 'amazon_payments' | 'pay_to' | 'faster_payments' | 'sepa_instant_transfer' | 'klarna_pay_now' | 'online_banking_poland',reference_id?:string};
       
      billing_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      statement_descriptor?:{descriptor?:string};
       
      customer?:{business_customer_without_vat_number?:boolean,einvoicing_method?:EinvoicingMethod,entity_identifier_scheme?:string,entity_identifier_standard?:string,is_einvoice_enabled?:boolean,registered_for_gst?:boolean,vat_number?:string,vat_number_prefix?:string};
       
      contract_term?:{action_at_term_end?:'renew' | 'evergreen' | 'cancel' | 'renew_once',cancellation_cutoff_period?:number};
       
      addons?:{billing_cycles?:number,id?:string,proration_type?:ProrationType,quantity?:number,quantity_in_decimal?:string,trial_end?:number,unit_price?:number,unit_price_in_decimal?:string}[];
       
      coupons?:{apply_till?:number,coupon_id?:string}[];
       
      plan_id?:string;
       
      plan_quantity?:number;
       
      plan_unit_price?:number;
       
      setup_fee?:number;
       
      event_based_addons?:{charge_on?:ChargeOn,charge_once?:boolean,id?:string,on_event?:OnEvent,quantity?:number,quantity_in_decimal?:string,service_period_in_days?:number,unit_price?:number,unit_price_in_decimal?:string}[];
       
      replace_addon_list?:boolean;
       
      mandatory_addons_to_remove?:string[];
       
      plan_quantity_in_decimal?:string;
       
      plan_unit_price_in_decimal?:string;
       
      invoice_date?:number;
       
      start_date?:number;
       
      trial_end?:number;
       
      billing_cycles?:number;
       
      coupon?:string;
       
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
       
      trial_end_action?:TrialEndAction;
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
      card?:{additional_information?:object,billing_addr1?:string,billing_addr2?:string,billing_city?:string,billing_country?:string,billing_state?:string,billing_state_code?:string,billing_zip?:string,cvv?:string,expiry_month?:number,expiry_year?:number,first_name?:string,gateway?:Gateway,gateway_account_id?:string,ip_address?:string,last_name?:string,number?:string,preferred_scheme?:'cartes_bancaires' | 'mastercard' | 'visa',tmp_token?:string};
       
      payment_method?:{additional_information?:object,gateway?:Gateway,gateway_account_id?:string,issuing_country?:string,reference_id?:string,tmp_token?:string,type?:Type};
       
      payment_intent?:{additional_information?:object,gateway_account_id?:string,gw_payment_method_id?:string,gw_token?:string,id?:string,payment_method_type?:'card' | 'ideal' | 'sofort' | 'bancontact' | 'google_pay' | 'dotpay' | 'giropay' | 'apple_pay' | 'upi' | 'netbanking_emandates' | 'paypal_express_checkout' | 'direct_debit' | 'boleto' | 'venmo' | 'amazon_payments' | 'pay_to' | 'faster_payments' | 'sepa_instant_transfer' | 'klarna_pay_now' | 'online_banking_poland',reference_id?:string};
       
      billing_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      statement_descriptor?:{descriptor?:string};
       
      customer?:{business_customer_without_vat_number?:boolean,einvoicing_method?:EinvoicingMethod,entity_identifier_scheme?:string,entity_identifier_standard?:string,is_einvoice_enabled?:boolean,registered_for_gst?:boolean,vat_number?:string,vat_number_prefix?:string};
       
      contract_term?:{action_at_term_end?:'renew' | 'evergreen' | 'cancel' | 'renew_once',cancellation_cutoff_period?:number,contract_start?:number};
       
      billing_override?:{max_excess_payment_usage?:number,max_refundable_credits_usage?:number};
       
      subscription_items:{billing_cycles?:number,charge_on_event?:ChargeOnEvent,charge_on_option?:ChargeOnOption,charge_once?:boolean,item_price_id:string,item_type?:ItemType,proration_type?:ProrationType,quantity?:number,quantity_in_decimal?:string,service_period_days?:number,trial_end?:number,unit_price?:number,unit_price_in_decimal?:string,usage_accumulation_reset_frequency?:UsageAccumulationResetFrequency}[];
       
      discounts:{amount?:number,apply_on:ApplyOn,duration_type:DurationType,id?:string,included_in_mrr?:boolean,item_price_id?:string,operation_type:OperationType,percentage?:number,period?:number,period_unit?:PeriodUnit}[];
       
      item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,item_price_id?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
       
      coupons?:{apply_till?:number,coupon_id?:string}[];
       
      mandatory_items_to_remove?:string[];
       
      replace_items_list?:boolean;
       
      setup_fee?:number;
       
      net_term_days?:number;
       
      invoice_date?:number;
       
      start_date?:number;
       
      trial_end?:number;
       
      billing_cycles?:number;
       
      coupon?:string;
       
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
       
      payment_initiator?:PaymentInitiator;
       
      invoice_usages?:boolean;
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
    export interface ReactivateResponse {  
       subscription:Subscription;
       
       customer:Customer;
       
       card?:Card;
       
       invoice?:Invoice;
       
       unbilled_charges?:UnbilledCharge[];
    }
    export interface ReactivateInputParam {
       
      contract_term?:{action_at_term_end?:'renew' | 'evergreen' | 'cancel',cancellation_cutoff_period?:number};
       
      statement_descriptor?:{descriptor?:string};
       
      payment_intent?:{additional_information?:object,gateway_account_id?:string,gw_payment_method_id?:string,gw_token?:string,id?:string,payment_method_type?:'card' | 'ideal' | 'sofort' | 'bancontact' | 'google_pay' | 'dotpay' | 'giropay' | 'apple_pay' | 'upi' | 'netbanking_emandates' | 'paypal_express_checkout' | 'direct_debit' | 'boleto' | 'venmo' | 'amazon_payments' | 'pay_to' | 'faster_payments' | 'sepa_instant_transfer' | 'klarna_pay_now' | 'online_banking_poland',reference_id?:string};
       
      trial_end?:number;
       
      billing_cycles?:number;
       
      trial_period_days?:number;
       
      reactivate_from?:number;
       
      invoice_immediately?:boolean;
       
      billing_alignment_mode?:BillingAlignmentMode;
       
      terms_to_charge?:number;
       
      invoice_date?:number;
       
      contract_term_billing_cycle_on_renewal?:number;
       
      payment_initiator?:PaymentInitiator;
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
    export interface ChargeAddonAtTermEndResponse {  
       estimate:Estimate;
    }
    export interface ChargeAddonAtTermEndInputParam {
       
      addon_id:string;
       
      addon_quantity?:number;
       
      addon_unit_price?:number;
       
      addon_quantity_in_decimal?:string;
       
      addon_unit_price_in_decimal?:string;
       
      date_from?:number;
       
      date_to?:number;
    }
    export interface ChargeFutureRenewalsResponse {  
       subscription:Subscription;
       
       customer:Customer;
       
       card?:Card;
       
       invoice?:Invoice;
       
       advance_invoice_schedules?:AdvanceInvoiceSchedule[];
    }
    export interface ChargeFutureRenewalsInputParam {
       
      fixed_interval_schedule?:{days_before_renewal?:number,end_date?:number,end_schedule_on?:EndScheduleOn,number_of_occurrences?:number};
       
      specific_dates_schedule?:{date?:number,terms_to_charge?:number}[];
       
      terms_to_charge?:number;
       
      invoice_immediately?:boolean;
       
      schedule_type?:ScheduleType;
    }
    export interface EditAdvanceInvoiceScheduleResponse {  
       advance_invoice_schedules:AdvanceInvoiceSchedule[];
    }
    export interface EditAdvanceInvoiceScheduleInputParam {
       
      fixed_interval_schedule?:{days_before_renewal?:number,end_date?:number,end_schedule_on?:EndScheduleOn,number_of_occurrences?:number};
       
      specific_dates_schedule?:{date?:number,id?:string,terms_to_charge?:number}[];
       
      terms_to_charge?:number;
       
      schedule_type?:ScheduleType;
    }
    export interface RetrieveAdvanceInvoiceScheduleResponse {  
       advance_invoice_schedules:AdvanceInvoiceSchedule[];
    }
    
    export interface RemoveAdvanceInvoiceScheduleResponse {  
       subscription:Subscription;
       
       advance_invoice_schedules?:AdvanceInvoiceSchedule[];
    }
    export interface RemoveAdvanceInvoiceScheduleInputParam {
       
      specific_dates_schedule?:{id?:string}[];
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
    export interface ImportSubscriptionResponse {  
       subscription:Subscription;
       
       customer:Customer;
       
       card?:Card;
       
       invoice?:Invoice;
    }
    export interface ImportSubscriptionInputParam {
      [key : string] : any;  
      customer?:object;
       
      contract_term?:{action_at_term_end?:'renew' | 'evergreen' | 'cancel' | 'renew_once',billing_cycle?:number,cancellation_cutoff_period?:number,contract_start?:number,created_at?:number,id?:string,total_amount_raised?:number,total_amount_raised_before_tax?:number};
       
      card?:{additional_information?:object,billing_addr1?:string,billing_addr2?:string,billing_city?:string,billing_country?:string,billing_state?:string,billing_state_code?:string,billing_zip?:string,cvv?:string,expiry_month?:number,expiry_year?:number,first_name?:string,gateway?:Gateway,gateway_account_id?:string,last_name?:string,number?:string,preferred_scheme?:'cartes_bancaires' | 'mastercard' | 'visa',tmp_token?:string};
       
      payment_method?:{additional_information?:object,gateway?:Gateway,gateway_account_id?:string,issuing_country?:string,reference_id?:string,type?:Type};
       
      billing_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      transaction?:{amount?:number,date?:number,payment_method?:PaymentMethod,reference_number?:string};
       
      addons?:{billing_cycles?:number,id?:string,quantity?:number,quantity_in_decimal?:string,unit_price?:number,unit_price_in_decimal?:string}[];
       
      event_based_addons?:{charge_once?:boolean,id?:string,on_event?:OnEvent,quantity?:number,quantity_in_decimal?:string,service_period_in_days?:number,unit_price?:number,unit_price_in_decimal?:string}[];
       
      charged_event_based_addons?:{id?:string,last_charged_at?:number}[];
       
      coupons?:{apply_till?:number,coupon_id?:string}[];
       
      id?:string;
       
      client_profile_id?:string;
       
      plan_id:string;
       
      plan_quantity?:number;
       
      plan_quantity_in_decimal?:string;
       
      plan_unit_price?:number;
       
      plan_unit_price_in_decimal?:string;
       
      setup_fee?:number;
       
      trial_end?:number;
       
      billing_cycles?:number;
       
      start_date?:number;
       
      auto_collection?:AutoCollection;
       
      po_number?:string;
       
      coupon_ids?:string[];
       
      contract_term_billing_cycle_on_renewal?:number;
       
      status:'future' | 'in_trial' | 'active' | 'non_renewing' | 'paused' | 'cancelled' | 'transferred';
       
      current_term_end?:number;
       
      current_term_start?:number;
       
      trial_start?:number;
       
      cancelled_at?:number;
       
      started_at?:number;
       
      activated_at?:number;
       
      pause_date?:number;
       
      resume_date?:number;
       
      create_current_term_invoice?:boolean;
       
      affiliate_token?:string;
       
      invoice_notes?:string;
       
      meta_data?:object;
    }
    export interface ImportForCustomerResponse {  
       subscription:Subscription;
       
       customer:Customer;
       
       card?:Card;
       
       invoice?:Invoice;
    }
    export interface ImportForCustomerInputParam {
      [key : string] : any;  
      contract_term?:{action_at_term_end?:'renew' | 'evergreen' | 'cancel' | 'renew_once',billing_cycle?:number,cancellation_cutoff_period?:number,contract_start?:number,created_at?:number,id?:string,total_amount_raised?:number,total_amount_raised_before_tax?:number};
       
      transaction?:{amount?:number,date?:number,payment_method?:PaymentMethod,reference_number?:string};
       
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      addons?:{billing_cycles?:number,id?:string,quantity?:number,quantity_in_decimal?:string,unit_price?:number,unit_price_in_decimal?:string}[];
       
      event_based_addons?:{charge_once?:boolean,id?:string,on_event?:OnEvent,quantity?:number,quantity_in_decimal?:string,service_period_in_days?:number,unit_price?:number,unit_price_in_decimal?:string}[];
       
      charged_event_based_addons?:{id?:string,last_charged_at?:number}[];
       
      coupons?:{apply_till?:number,coupon_id?:string}[];
       
      id?:string;
       
      plan_id:string;
       
      plan_quantity?:number;
       
      plan_quantity_in_decimal?:string;
       
      plan_unit_price?:number;
       
      plan_unit_price_in_decimal?:string;
       
      setup_fee?:number;
       
      trial_end?:number;
       
      billing_cycles?:number;
       
      start_date?:number;
       
      auto_collection?:AutoCollection;
       
      po_number?:string;
       
      coupon_ids?:string[];
       
      payment_source_id?:string;
       
      status:'future' | 'in_trial' | 'active' | 'non_renewing' | 'paused' | 'cancelled' | 'transferred';
       
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
    }
    export interface ImportContractTermResponse {  
       contract_term:ContractTerm;
    }
    export interface ImportContractTermInputParam {
       
      contract_term?:{action_at_term_end?:'renew' | 'evergreen' | 'cancel' | 'renew_once',billing_cycle?:number,cancellation_cutoff_period?:number,contract_end?:number,contract_start?:number,created_at?:number,id?:string,status?:'active' | 'completed' | 'cancelled' | 'terminated',total_amount_raised?:number,total_amount_raised_before_tax?:number,total_contract_value?:number,total_contract_value_before_tax?:number};
       
      contract_term_billing_cycle_on_renewal?:number;
    }
    export interface ImportUnbilledChargesResponse {  
       unbilled_charges:UnbilledCharge[];
    }
    export interface ImportUnbilledChargesInputParam {
       
      unbilled_charges:{amount?:number,amount_in_decimal?:string,date_from:number,date_to:number,description?:string,discount_amount?:number,entity_id?:string,entity_type:'adhoc' | 'plan_item_price' | 'addon_item_price' | 'charge_item_price',id?:string,is_advance_charge?:boolean,quantity?:number,quantity_in_decimal?:string,unit_amount?:number,unit_amount_in_decimal?:string,use_for_proration?:boolean}[];
       
      discounts:{amount:number,description?:string,entity_id?:string,entity_type?:'item_level_coupon' | 'document_level_coupon' | 'item_level_discount' | 'document_level_discount',unbilled_charge_id?:string}[];
       
      tiers:{ending_unit?:number,ending_unit_in_decimal?:string,quantity_used?:number,quantity_used_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string,unbilled_charge_id:string,unit_amount?:number,unit_amount_in_decimal?:string}[];
    }
    export interface ImportForItemsResponse {  
       subscription:Subscription;
       
       customer:Customer;
       
       card?:Card;
       
       invoice?:Invoice;
    }
    export interface ImportForItemsInputParam {
      [key : string] : any;  
      contract_term?:{action_at_term_end?:'renew' | 'evergreen' | 'cancel' | 'renew_once',billing_cycle?:number,cancellation_cutoff_period?:number,contract_start?:number,created_at?:number,id?:string,total_amount_raised?:number,total_amount_raised_before_tax?:number};
       
      transaction?:{amount?:number,date?:number,payment_method?:PaymentMethod,reference_number?:string};
       
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      subscription_items:{billing_cycles?:number,charge_on_event?:ChargeOnEvent,charge_once?:boolean,item_price_id:string,item_type?:ItemType,quantity?:number,quantity_in_decimal?:string,service_period_days?:number,trial_end?:number,unit_price?:number,unit_price_in_decimal?:string}[];
       
      discounts:{amount?:number,apply_on:ApplyOn,duration_type:DurationType,included_in_mrr?:boolean,item_price_id?:string,percentage?:number,period?:number,period_unit?:PeriodUnit}[];
       
      charged_items?:{item_price_id?:string,last_charged_at?:number}[];
       
      item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,item_price_id?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
       
      coupons?:{apply_till?:number,coupon_id?:string}[];
       
      id?:string;
       
      trial_end?:number;
       
      billing_cycles?:number;
       
      setup_fee?:number;
       
      net_term_days?:number;
       
      start_date?:number;
       
      auto_collection?:AutoCollection;
       
      po_number?:string;
       
      coupon_ids?:string[];
       
      payment_source_id?:string;
       
      status:'future' | 'in_trial' | 'active' | 'non_renewing' | 'paused' | 'cancelled' | 'transferred';
       
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
    }
    export interface OverrideBillingProfileResponse {  
       subscription:Subscription;
       
       payment_source?:PaymentSource;
    }
    export interface OverrideBillingProfileInputParam {
       
      payment_source_id?:string;
       
      auto_collection?:AutoCollection;
    }
    export interface DeleteResponse {  
       subscription:Subscription;
       
       customer:Customer;
       
       card?:Card;
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
    export interface CancelResponse {  
       subscription:Subscription;
       
       customer:Customer;
       
       card?:Card;
       
       invoice?:Invoice;
       
       unbilled_charges?:UnbilledCharge[];
       
       credit_notes?:CreditNote[];
    }
    export interface CancelInputParam {
       
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
    export interface CancelForItemsResponse {  
       subscription:Subscription;
       
       customer:Customer;
       
       card?:Card;
       
       invoice?:Invoice;
       
       unbilled_charges?:UnbilledCharge[];
       
       credit_notes?:CreditNote[];
    }
    export interface CancelForItemsInputParam {
       
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
    export interface ResumeResponse {  
       subscription:Subscription;
       
       customer:Customer;
       
       card?:Card;
       
       invoice?:Invoice;
       
       unbilled_charges?:UnbilledCharge[];
    }
    export interface ResumeInputParam {
       
      payment_intent?:{additional_information?:object,gateway_account_id?:string,gw_payment_method_id?:string,gw_token?:string,id?:string,payment_method_type?:'card' | 'ideal' | 'sofort' | 'bancontact' | 'google_pay' | 'dotpay' | 'giropay' | 'apple_pay' | 'upi' | 'netbanking_emandates' | 'paypal_express_checkout' | 'direct_debit' | 'boleto' | 'venmo' | 'amazon_payments' | 'pay_to' | 'faster_payments' | 'sepa_instant_transfer' | 'klarna_pay_now' | 'online_banking_poland',reference_id?:string};
       
      resume_option?:ResumeOption;
       
      resume_date?:number;
       
      charges_handling?:ChargesHandling;
       
      unpaid_invoices_handling?:UnpaidInvoicesHandling;
       
      payment_initiator?:PaymentInitiator;
    }
    export interface RemoveScheduledPauseResponse {  
       subscription:Subscription;
       
       customer:Customer;
       
       card?:Card;
    }
    
    export interface RemoveScheduledResumptionResponse {  
       subscription:Subscription;
       
       customer:Customer;
       
       card?:Card;
    }
    
    export interface MoveResponse {  
       subscription:Subscription;
    }
    export interface MoveInputParam {
       
      to_customer_id:string;
       
      copy_payment_source?:boolean;
    }
    export interface SubscriptionItem {  
      item_price_id:string;
       
      item_type:'plan' | 'addon' | 'charge';
       
      quantity?:number;
       
      quantity_in_decimal?:string;
       
      metered_quantity?:string;
       
      last_calculated_at?:number;
       
      unit_price?:number;
       
      unit_price_in_decimal?:string;
       
      amount?:number;
       
      current_term_start?:number;
       
      current_term_end?:number;
       
      next_billing_at?:number;
       
      amount_in_decimal?:string;
       
      billing_period?:number;
       
      billing_period_unit?:'day' | 'week' | 'month' | 'year';
       
      free_quantity?:number;
       
      free_quantity_in_decimal?:string;
       
      trial_end?:number;
       
      billing_cycles?:number;
       
      service_period_days?:number;
       
      charge_on_event?:'subscription_creation' | 'subscription_trial_start' | 'plan_activation' | 'subscription_activation' | 'contract_termination';
       
      charge_once?:boolean;
       
      charge_on_option?:'immediately' | 'on_event';
       
      proration_type?:'full_term' | 'partial_term' | 'none';
       
      usage_accumulation_reset_frequency?:'never' | 'subscription_billing_frequency';
    }
    export interface ItemTier {  
      item_price_id:string;
       
      starting_unit:number;
       
      ending_unit?:number;
       
      price:number;
       
      starting_unit_in_decimal?:string;
       
      ending_unit_in_decimal?:string;
       
      price_in_decimal?:string;
       
      index:number;
    }
    export interface ChargedItem {  
      item_price_id:string;
       
      last_charged_at:number;
    }
    export interface Addon {  
      id:string;
       
      quantity?:number;
       
      unit_price?:number;
       
      amount?:number;
       
      trial_end?:number;
       
      remaining_billing_cycles?:number;
       
      quantity_in_decimal?:string;
       
      unit_price_in_decimal?:string;
       
      amount_in_decimal?:string;
       
      proration_type?:'full_term' | 'partial_term' | 'none';
    }
    export interface EventBasedAddon {  
      id:string;
       
      quantity:number;
       
      unit_price:number;
       
      service_period_in_days?:number;
       
      on_event:'subscription_creation' | 'subscription_trial_start' | 'plan_activation' | 'subscription_activation' | 'contract_termination';
       
      charge_once:boolean;
       
      quantity_in_decimal?:string;
       
      unit_price_in_decimal?:string;
    }
    export interface ChargedEventBasedAddon {  
      id:string;
       
      last_charged_at:number;
    }
    export interface Coupon {  
      coupon_id:string;
       
      apply_till?:number;
       
      applied_count:number;
       
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
       
      index:number;
    }
    export interface ReferralInfo {  
      referral_code?:string;
       
      coupon_code?:string;
       
      referrer_id?:string;
       
      external_reference_id?:string;
       
      reward_status?:'pending' | 'paid' | 'invalid';
       
      referral_system?:ReferralSystem;
       
      account_id:string;
       
      campaign_id:string;
       
      external_campaign_id?:string;
       
      friend_offer_type?:FriendOfferType;
       
      referrer_reward_type?:ReferrerRewardType;
       
      notify_referral_system?:NotifyReferralSystem;
       
      destination_url?:string;
       
      post_purchase_widget_enabled:boolean;
    }
    export interface BillingOverride {  
      max_excess_payment_usage?:number;
       
      max_refundable_credits_usage?:number;
    }
    export interface ContractTerm {  
      id:string;
       
      status:'active' | 'completed' | 'cancelled' | 'terminated';
       
      contract_start:number;
       
      contract_end:number;
       
      billing_cycle:number;
       
      action_at_term_end:'renew' | 'evergreen' | 'cancel' | 'renew_once';
       
      total_contract_value:number;
       
      total_contract_value_before_tax:number;
       
      cancellation_cutoff_period?:number;
       
      created_at:number;
       
      subscription_id:string;
       
      remaining_billing_cycles?:number;
    }
    export interface Discount {  
      id:string;
       
      invoice_name?:string;
       
      type:'fixed_amount' | 'percentage';
       
      percentage?:number;
       
      amount?:number;
       
      currency_code?:string;
       
      duration_type:'one_time' | 'forever' | 'limited_period';
       
      period?:number;
       
      period_unit?:'day' | 'week' | 'month' | 'year';
       
      included_in_mrr:boolean;
       
      apply_on:'invoice_amount' | 'specific_item_price';
       
      item_price_id?:string;
       
      created_at:number;
       
      apply_till?:number;
       
      applied_count?:number;
       
      coupon_id:string;
       
      index:number;
    }
  }
}