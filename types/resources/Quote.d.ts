///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface Quote {
    
    id:string;
    
    name?:string;
    
    po_number?:string;
    
    customer_id:string;
    
    subscription_id?:string;
    
    invoice_id?:string;
    
    status:'open' | 'accepted' | 'declined' | 'invoiced' | 'closed';
    
    operation_type:'create_subscription_for_customer' | 'change_subscription' | 'onetime_invoice';
    
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
    
    line_items?:Quote.LineItem[];
    
    discounts?:Quote.Discount[];
    
    line_item_discounts?:Quote.LineItemDiscount[];
    
    taxes?:Quote.Tax[];
    
    line_item_taxes?:Quote.LineItemTax[];
    
    line_item_tiers?:Quote.LineItemTier[];
    
    tax_category?:string;
    
    currency_code:string;
    
    notes?:any[];
    
    shipping_address?:Quote.ShippingAddress;
    
    billing_address?:Quote.BillingAddress;
    
    contract_term_start?:number;
    
    contract_term_end?:number;
    
    contract_term_termination_fee?:number;
    
    business_entity_id:string;
  }
  export namespace Quote {
    export class QuoteResource {  
      retrieve(quote_id:string):ChargebeeRequest<RetrieveResponse>;
       
      create_sub_for_customer_quote(customer_id:string, input:CreateSubForCustomerQuoteInputParam):ChargebeeRequest<CreateSubForCustomerQuoteResponse>;
       
      edit_create_sub_for_customer_quote(quote_id:string, input:EditCreateSubForCustomerQuoteInputParam):ChargebeeRequest<EditCreateSubForCustomerQuoteResponse>;
       
      update_subscription_quote(input:UpdateSubscriptionQuoteInputParam):ChargebeeRequest<UpdateSubscriptionQuoteResponse>;
       
      edit_update_subscription_quote(quote_id:string, input?:EditUpdateSubscriptionQuoteInputParam):ChargebeeRequest<EditUpdateSubscriptionQuoteResponse>;
       
      create_for_onetime_charges(input:CreateForOnetimeChargesInputParam):ChargebeeRequest<CreateForOnetimeChargesResponse>;
       
      edit_one_time_quote(quote_id:string, input?:EditOneTimeQuoteInputParam):ChargebeeRequest<EditOneTimeQuoteResponse>;
       
      create_sub_items_for_customer_quote(customer_id:string, input:CreateSubItemsForCustomerQuoteInputParam):ChargebeeRequest<CreateSubItemsForCustomerQuoteResponse>;
       
      edit_create_sub_customer_quote_for_items(quote_id:string, input:EditCreateSubCustomerQuoteForItemsInputParam):ChargebeeRequest<EditCreateSubCustomerQuoteForItemsResponse>;
       
      update_subscription_quote_for_items(input:UpdateSubscriptionQuoteForItemsInputParam):ChargebeeRequest<UpdateSubscriptionQuoteForItemsResponse>;
       
      edit_update_subscription_quote_for_items(quote_id:string, input:EditUpdateSubscriptionQuoteForItemsInputParam):ChargebeeRequest<EditUpdateSubscriptionQuoteForItemsResponse>;
       
      create_for_charge_items_and_charges(input:CreateForChargeItemsAndChargesInputParam):ChargebeeRequest<CreateForChargeItemsAndChargesResponse>;
       
      edit_for_charge_items_and_charges(quote_id:string, input:EditForChargeItemsAndChargesInputParam):ChargebeeRequest<EditForChargeItemsAndChargesResponse>;
       
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
       
      quote_line_groups_for_quote(quote_id:string, input?:QuoteLineGroupsForQuoteInputParam):ChargebeeRequest<QuoteLineGroupsForQuoteResponse>;
       
      convert(quote_id:string, input?:ConvertInputParam):ChargebeeRequest<ConvertResponse>;
       
      update_status(quote_id:string, input:UpdateStatusInputParam):ChargebeeRequest<UpdateStatusResponse>;
       
      extend_expiry_date(quote_id:string, input:ExtendExpiryDateInputParam):ChargebeeRequest<ExtendExpiryDateResponse>;
       
      delete(quote_id:string, input?:DeleteInputParam):ChargebeeRequest<DeleteResponse>;
       
      pdf(quote_id:string, input?:PdfInputParam):ChargebeeRequest<PdfResponse>;
    }
    export interface RetrieveResponse {  
       quote:Quote;
       
       quoted_subscription?:QuotedSubscription;
       
       quoted_charge?:QuotedCharge;
    }
    
    export interface CreateSubForCustomerQuoteResponse {  
       quote:Quote;
       
       quoted_subscription?:QuotedSubscription;
    }
    export interface CreateSubForCustomerQuoteInputParam {
       
      subscription:null.null;
       
      shipping_address?:null.null;
       
      contract_term?:null.null;
       
      addons?:{billing_cycles?:number,id?:string,quantity?:number,quantity_in_decimal?:string,trial_end?:number,unit_price?:number,unit_price_in_decimal?:string}[];
       
      event_based_addons?:{charge_on?:ChargeOn,charge_once?:boolean,id?:string,on_event?:OnEvent,quantity?:number,quantity_in_decimal?:string,service_period_in_days?:number,unit_price?:number,unit_price_in_decimal?:string}[];
       
      name?:string;
       
      notes?:string;
       
      expires_at?:number;
       
      billing_cycles?:number;
       
      mandatory_addons_to_remove?:string[];
       
      terms_to_charge?:number;
       
      billing_alignment_mode?:BillingAlignmentMode;
       
      coupon_ids?:string[];
    }
    export interface EditCreateSubForCustomerQuoteResponse {  
       quote:Quote;
       
       quoted_subscription?:QuotedSubscription;
    }
    export interface EditCreateSubForCustomerQuoteInputParam {
       
      subscription:null.null;
       
      shipping_address?:null.null;
       
      contract_term?:null.null;
       
      addons?:{billing_cycles?:number,id?:string,quantity?:number,quantity_in_decimal?:string,trial_end?:number,unit_price?:number,unit_price_in_decimal?:string}[];
       
      event_based_addons?:{charge_on?:ChargeOn,charge_once?:boolean,id?:string,on_event?:OnEvent,quantity?:number,quantity_in_decimal?:string,service_period_in_days?:number,unit_price?:number,unit_price_in_decimal?:string}[];
       
      notes?:string;
       
      expires_at?:number;
       
      billing_cycles?:number;
       
      mandatory_addons_to_remove?:string[];
       
      terms_to_charge?:number;
       
      billing_alignment_mode?:BillingAlignmentMode;
       
      coupon_ids?:string[];
    }
    export interface UpdateSubscriptionQuoteResponse {  
       quote:Quote;
       
       quoted_subscription?:QuotedSubscription;
    }
    export interface UpdateSubscriptionQuoteInputParam {
       
      subscription:null.null;
       
      billing_address?:null.null;
       
      shipping_address?:null.null;
       
      customer?:null.null;
       
      contract_term?:null.null;
       
      addons?:{billing_cycles?:number,id?:string,quantity?:number,quantity_in_decimal?:string,trial_end?:number,unit_price?:number,unit_price_in_decimal?:string}[];
       
      name?:string;
       
      notes?:string;
       
      expires_at?:number;
       
      event_based_addons?:{charge_on?:ChargeOn,charge_once?:boolean,id?:string,on_event?:OnEvent,quantity?:number,quantity_in_decimal?:string,service_period_in_days?:number,unit_price?:number,unit_price_in_decimal?:string}[];
       
      replace_addon_list?:boolean;
       
      mandatory_addons_to_remove?:string[];
       
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
    }
    export interface EditUpdateSubscriptionQuoteResponse {  
       quote:Quote;
       
       quoted_subscription?:QuotedSubscription;
    }
    export interface EditUpdateSubscriptionQuoteInputParam {
       
      subscription?:null.null;
       
      billing_address?:null.null;
       
      shipping_address?:null.null;
       
      customer?:null.null;
       
      contract_term?:null.null;
       
      addons?:{billing_cycles?:number,id?:string,quantity?:number,quantity_in_decimal?:string,trial_end?:number,unit_price?:number,unit_price_in_decimal?:string}[];
       
      notes?:string;
       
      expires_at?:number;
       
      event_based_addons?:{charge_on?:ChargeOn,charge_once?:boolean,id?:string,on_event?:OnEvent,quantity?:number,quantity_in_decimal?:string,service_period_in_days?:number,unit_price?:number,unit_price_in_decimal?:string}[];
       
      replace_addon_list?:boolean;
       
      mandatory_addons_to_remove?:string[];
       
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
    }
    export interface CreateForOnetimeChargesResponse {  
       quote:Quote;
       
       quoted_charge?:QuotedCharge;
    }
    export interface CreateForOnetimeChargesInputParam {
       
      shipping_address?:null.null;
       
      addons?:{id?:string,quantity?:number,quantity_in_decimal?:string,service_period?:number,unit_price?:number,unit_price_in_decimal?:string}[];
       
      charges?:{amount?:number,amount_in_decimal?:string,avalara_sale_type?:AvalaraSaleType,avalara_service_type?:number,avalara_transaction_type?:number,description?:string,service_period?:number}[];
       
      tax_providers_fields?:{field_id?:string,field_value?:string,provider_name?:string}[];
       
      name?:string;
       
      customer_id:string;
       
      po_number?:string;
       
      notes?:string;
       
      expires_at?:number;
       
      currency_code?:string;
       
      coupon?:string;
       
      coupon_ids?:string[];
    }
    export interface EditOneTimeQuoteResponse {  
       quote:Quote;
       
       quoted_charge?:QuotedCharge;
    }
    export interface EditOneTimeQuoteInputParam {
       
      shipping_address?:null.null;
       
      addons?:{id?:string,quantity?:number,quantity_in_decimal?:string,service_period?:number,unit_price?:number,unit_price_in_decimal?:string}[];
       
      charges?:{amount?:number,amount_in_decimal?:string,avalara_sale_type?:AvalaraSaleType,avalara_service_type?:number,avalara_transaction_type?:number,description?:string,service_period?:number}[];
       
      tax_providers_fields?:{field_id?:string,field_value?:string,provider_name?:string}[];
       
      po_number?:string;
       
      notes?:string;
       
      expires_at?:number;
       
      currency_code?:string;
       
      coupon?:string;
       
      coupon_ids?:string[];
    }
    export interface CreateSubItemsForCustomerQuoteResponse {  
       quote:Quote;
       
       quoted_subscription?:QuotedSubscription;
    }
    export interface CreateSubItemsForCustomerQuoteInputParam {
       
      subscription?:null.null;
       
      shipping_address?:null.null;
       
      contract_term?:null.null;
       
      subscription_items:{billing_cycles?:number,charge_on_event?:ChargeOnEvent,charge_on_option?:ChargeOnOption,charge_once?:boolean,item_price_id:string,item_type?:ItemType,quantity?:number,quantity_in_decimal?:string,service_period_days?:number,trial_end?:number,unit_price?:number,unit_price_in_decimal?:string}[];
       
      discounts:{amount?:number,apply_on:ApplyOn,duration_type:DurationType,included_in_mrr?:boolean,item_price_id?:string,percentage?:number,period?:number,period_unit?:PeriodUnit}[];
       
      item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,item_price_id?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
       
      name?:string;
       
      notes?:string;
       
      expires_at?:number;
       
      billing_cycles?:number;
       
      mandatory_items_to_remove?:string[];
       
      terms_to_charge?:number;
       
      billing_alignment_mode?:BillingAlignmentMode;
       
      coupon_ids?:string[];
    }
    export interface EditCreateSubCustomerQuoteForItemsResponse {  
       quote:Quote;
       
       quoted_subscription?:QuotedSubscription;
    }
    export interface EditCreateSubCustomerQuoteForItemsInputParam {
       
      subscription?:null.null;
       
      shipping_address?:null.null;
       
      contract_term?:null.null;
       
      subscription_items:{billing_cycles?:number,charge_on_event?:ChargeOnEvent,charge_on_option?:ChargeOnOption,charge_once?:boolean,item_price_id:string,item_type?:ItemType,quantity?:number,quantity_in_decimal?:string,service_period_days?:number,trial_end?:number,unit_price?:number,unit_price_in_decimal?:string}[];
       
      discounts:{amount?:number,apply_on:ApplyOn,duration_type:DurationType,included_in_mrr?:boolean,item_price_id?:string,percentage?:number,period?:number,period_unit?:PeriodUnit}[];
       
      item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,item_price_id?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
       
      notes?:string;
       
      expires_at?:number;
       
      billing_cycles?:number;
       
      mandatory_items_to_remove?:string[];
       
      terms_to_charge?:number;
       
      billing_alignment_mode?:BillingAlignmentMode;
       
      coupon_ids?:string[];
    }
    export interface UpdateSubscriptionQuoteForItemsResponse {  
       quote:Quote;
       
       quoted_subscription?:QuotedSubscription;
    }
    export interface UpdateSubscriptionQuoteForItemsInputParam {
       
      subscription:null.null;
       
      billing_address?:null.null;
       
      shipping_address?:null.null;
       
      customer?:null.null;
       
      contract_term?:null.null;
       
      subscription_items:{billing_cycles?:number,charge_on_event?:ChargeOnEvent,charge_on_option?:ChargeOnOption,charge_once?:boolean,item_price_id:string,item_type?:ItemType,quantity?:number,quantity_in_decimal?:string,service_period_days?:number,trial_end?:number,unit_price?:number,unit_price_in_decimal?:string}[];
       
      discounts:{amount?:number,apply_on:ApplyOn,duration_type:DurationType,id?:string,included_in_mrr?:boolean,item_price_id?:string,operation_type:OperationType,percentage?:number,period?:number,period_unit?:PeriodUnit}[];
       
      item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,item_price_id?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
       
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
    }
    export interface EditUpdateSubscriptionQuoteForItemsResponse {  
       quote:Quote;
       
       quoted_subscription?:QuotedSubscription;
    }
    export interface EditUpdateSubscriptionQuoteForItemsInputParam {
       
      subscription?:null.null;
       
      billing_address?:null.null;
       
      shipping_address?:null.null;
       
      customer?:null.null;
       
      contract_term?:null.null;
       
      subscription_items:{billing_cycles?:number,charge_on_event?:ChargeOnEvent,charge_on_option?:ChargeOnOption,charge_once?:boolean,item_price_id:string,item_type?:ItemType,quantity?:number,quantity_in_decimal?:string,service_period_days?:number,trial_end?:number,unit_price?:number,unit_price_in_decimal?:string}[];
       
      discounts:{amount?:number,apply_on:ApplyOn,duration_type:DurationType,id?:string,included_in_mrr?:boolean,item_price_id?:string,operation_type:OperationType,percentage?:number,period?:number,period_unit?:PeriodUnit}[];
       
      item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,item_price_id?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
       
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
    }
    export interface CreateForChargeItemsAndChargesResponse {  
       quote:Quote;
       
       quoted_charge?:QuotedCharge;
    }
    export interface CreateForChargeItemsAndChargesInputParam {
       
      shipping_address?:null.null;
       
      item_prices?:{item_price_id?:string,quantity?:number,quantity_in_decimal?:string,service_period_days?:number,unit_price?:number,unit_price_in_decimal?:string}[];
       
      item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,item_price_id?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
       
      charges?:{amount?:number,amount_in_decimal?:string,avalara_sale_type?:AvalaraSaleType,avalara_service_type?:number,avalara_transaction_type?:number,description?:string,service_period?:number}[];
       
      discounts:{amount?:number,apply_on:ApplyOn,item_price_id?:string,percentage?:number}[];
       
      tax_providers_fields?:{field_id?:string,field_value?:string,provider_name?:string}[];
       
      name?:string;
       
      customer_id:string;
       
      po_number?:string;
       
      notes?:string;
       
      expires_at?:number;
       
      currency_code?:string;
       
      coupon?:string;
       
      coupon_ids?:string[];
    }
    export interface EditForChargeItemsAndChargesResponse {  
       quote:Quote;
       
       quoted_charge?:QuotedCharge;
    }
    export interface EditForChargeItemsAndChargesInputParam {
       
      shipping_address?:null.null;
       
      item_prices?:{item_price_id?:string,quantity?:number,quantity_in_decimal?:string,service_period_days?:number,unit_price?:number,unit_price_in_decimal?:string}[];
       
      item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,item_price_id?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
       
      charges?:{amount?:number,amount_in_decimal?:string,avalara_sale_type?:AvalaraSaleType,avalara_service_type?:number,avalara_transaction_type?:number,description?:string,service_period?:number}[];
       
      discounts:{amount?:number,apply_on:ApplyOn,item_price_id?:string,percentage?:number}[];
       
      tax_providers_fields?:{field_id?:string,field_value?:string,provider_name?:string}[];
       
      po_number?:string;
       
      notes?:string;
       
      expires_at?:number;
       
      currency_code?:string;
       
      coupon?:string;
       
      coupon_ids?:string[];
    }
    export interface ListResponse {  
       list:{quote:Quote,quoted_subscription?:QuotedSubscription}[];
       
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
       
      /**
        * @description The quote number. Acts as a identifier for quote and typically generated sequentially.

        */
        
      id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description The identifier of the customer this quote belongs to.

        */
        
      customer_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description To filter based on subscription_id.   
NOTE: Not to be used if *consolidated invoicing* feature is enabled.

        */
        
      subscription_id?:{in?:string,is?:string,is_not?:string,is_present?:'true' | 'false',not_in?:string,starts_with?:string};
       
      /**
        * @description Current status of this quote.

        */
        
      status?:{in?:string,is?:'open' | 'accepted' | 'declined' | 'invoiced' | 'closed',is_not?:'open' | 'accepted' | 'declined' | 'invoiced' | 'closed',not_in?:string};
       
      /**
        * @description Creation date of the quote. Typically this is the date on which quote is generated.

        */
        
      date?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description To filter based on updated at. This attribute will be present only if the resource has been updated after 2016-09-28.

        */
        
      updated_at?:{after?:string,before?:string,between?:string,on?:string};
       
      sort_by?:{asc?:'date',desc?:'date'};
    }
    export interface QuoteLineGroupsForQuoteResponse {  
       list:{quote_line_group:QuoteLineGroup}[];
       
       next_offset?:string;
    }
    export interface QuoteLineGroupsForQuoteInputParam {
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
       
      subscription?:null.null;
       
      invoice_date?:number;
       
      create_pending_invoices?:boolean;
       
      first_invoice_pending?:boolean;
    }
    export interface UpdateStatusResponse {  
       quote:Quote;
       
       quoted_subscription?:QuotedSubscription;
       
       quoted_charge?:QuotedCharge;
    }
    export interface UpdateStatusInputParam {
       
      status:'accepted' | 'declined' | 'closed';
       
      comment?:string;
    }
    export interface ExtendExpiryDateResponse {  
       quote:Quote;
       
       quoted_subscription?:QuotedSubscription;
       
       quoted_charge?:QuotedCharge;
    }
    export interface ExtendExpiryDateInputParam {
       
      valid_till:number;
    }
    export interface DeleteResponse {  
       quote:Quote;
       
       quoted_subscription?:QuotedSubscription;
       
       quoted_charge?:QuotedCharge;
    }
    export interface DeleteInputParam {
       
      comment?:string;
    }
    export interface PdfResponse {  
       download:Download;
    }
    export interface PdfInputParam {
       
      consolidated_view?:boolean;
       
      disposition_type?:DispositionType;
    }
    export interface LineItem {  
      id?:string;
       
      subscription_id?:string;
       
      date_from:number;
       
      date_to:number;
       
      unit_amount:number;
       
      quantity?:number;
       
      amount?:number;
       
      pricing_model?:'flat_fee' | 'per_unit' | 'tiered' | 'volume' | 'stairstep';
       
      is_taxed:boolean;
       
      tax_amount?:number;
       
      tax_rate?:number;
       
      unit_amount_in_decimal?:string;
       
      quantity_in_decimal?:string;
       
      amount_in_decimal?:string;
       
      discount_amount?:number;
       
      item_level_discount_amount?:number;
       
      usage_percentage?:string;
       
      reference_line_item_id?:string;
       
      description:string;
       
      entity_description?:string;
       
      entity_type:'plan_setup' | 'plan' | 'addon' | 'adhoc' | 'plan_item_price' | 'addon_item_price' | 'charge_item_price';
       
      tax_exempt_reason?:'tax_not_configured' | 'region_non_taxable' | 'export' | 'customer_exempt' | 'product_exempt' | 'zero_rated' | 'reverse_charge' | 'high_value_physical_goods' | 'zero_value_item' | 'tax_not_configured_external_provider';
       
      entity_id?:string;
       
      customer_id?:string;
    }
    export interface Discount {  
      amount:number;
       
      description?:string;
       
      entity_type:'item_level_coupon' | 'document_level_coupon' | 'promotional_credits' | 'prorated_credits' | 'item_level_discount' | 'document_level_discount';
       
      entity_id?:string;
       
      coupon_set_code?:string;
    }
    export interface LineItemDiscount {  
      line_item_id:string;
       
      discount_type:'item_level_coupon' | 'document_level_coupon' | 'promotional_credits' | 'prorated_credits' | 'item_level_discount' | 'document_level_discount';
       
      coupon_id?:string;
       
      entity_id?:string;
       
      discount_amount:number;
    }
    export interface Tax {  
      name:string;
       
      amount:number;
       
      description?:string;
    }
    export interface LineItemTax {  
      line_item_id?:string;
       
      tax_name:string;
       
      tax_rate:number;
       
      date_to?:number;
       
      date_from?:number;
       
      prorated_taxable_amount?:number;
       
      is_partial_tax_applied?:boolean;
       
      is_non_compliance_tax?:boolean;
       
      taxable_amount:number;
       
      tax_amount:number;
       
      tax_juris_type?:'country' | 'federal' | 'state' | 'county' | 'city' | 'special' | 'unincorporated' | 'other';
       
      tax_juris_name?:string;
       
      tax_juris_code?:string;
       
      tax_amount_in_local_currency?:number;
       
      local_currency_code?:string;
    }
    export interface LineItemTier {  
      line_item_id?:string;
       
      starting_unit:number;
       
      ending_unit?:number;
       
      quantity_used:number;
       
      unit_amount:number;
       
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
       
      index:number;
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