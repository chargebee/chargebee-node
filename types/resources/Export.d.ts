///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface Export {
    id:string;
    operation_type:string;
    mime_type:'zip' | 'pdf';
    status:'in_process' | 'completed' | 'failed';
    created_at:number;
    download?:Export.Download;
  }
  export namespace Export {
    export class ExportResource {
      customers(input?:CustomersInputParam):ChargebeeRequest<CustomersResponse>;
      attached_items(input?:AttachedItemsInputParam):ChargebeeRequest<AttachedItemsResponse>;
      transactions(input?:TransactionsInputParam):ChargebeeRequest<TransactionsResponse>;
      differential_prices(input?:DifferentialPricesInputParam):ChargebeeRequest<DifferentialPricesResponse>;
      item_families(input?:ItemFamiliesInputParam):ChargebeeRequest<ItemFamiliesResponse>;
      invoices(input?:InvoicesInputParam):ChargebeeRequest<InvoicesResponse>;
      retrieve(export_id:string):ChargebeeRequest<RetrieveResponse>;
      items(input?:ItemsInputParam):ChargebeeRequest<ItemsResponse>;
      deferred_revenue(input:DeferredRevenueInputParam):ChargebeeRequest<DeferredRevenueResponse>;
      revenue_recognition(input:RevenueRecognitionInputParam):ChargebeeRequest<RevenueRecognitionResponse>;
      credit_notes(input?:CreditNotesInputParam):ChargebeeRequest<CreditNotesResponse>;
      coupons(input?:CouponsInputParam):ChargebeeRequest<CouponsResponse>;
      orders(input?:OrdersInputParam):ChargebeeRequest<OrdersResponse>;
      item_prices(input?:ItemPricesInputParam):ChargebeeRequest<ItemPricesResponse>;
      subscriptions(input?:SubscriptionsInputParam):ChargebeeRequest<SubscriptionsResponse>;
    }
    export interface CustomersResponse {
      export:Export;
    }
    export interface CustomersInputParam {
      export_type?:ExportType;
      business_entity_id?:{is?:string,is_not?:string,starts_with?:string};
      customer?:{auto_close_invoices?:{is?:'true' | 'false'},auto_collection?:{in?:string,is?:'off' | 'on',is_not?:'off' | 'on',not_in?:string},channel?:{in?:string,is?:'app_store' | 'web' | 'play_store',is_not?:'app_store' | 'web' | 'play_store',not_in?:string},company?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string},created_at?:{after?:string,before?:string,between?:string,on?:string},email?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string},first_name?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string},id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},last_name?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string},offline_payment_method?:{in?:string,is?:'bank_transfer' | 'no_preference' | 'ach_credit' | 'boleto' | 'check' | 'sepa_credit' | 'cash',is_not?:'bank_transfer' | 'no_preference' | 'ach_credit' | 'boleto' | 'check' | 'sepa_credit' | 'cash',not_in?:string},phone?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string},taxability?:{in?:string,is?:'taxable' | 'exempt',is_not?:'taxable' | 'exempt',not_in?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string}};
      relationship?:{invoice_owner_id?:{is?:string,is_not?:string,starts_with?:string},parent_id?:{is?:string,is_not?:string,starts_with?:string},payment_owner_id?:{is?:string,is_not?:string,starts_with?:string}};
    }
    export interface AttachedItemsResponse {
      export:Export;
    }
    export interface AttachedItemsInputParam {
      item_type?:{in?:string,is?:'charge' | 'addon' | 'plan',is_not?:'charge' | 'addon' | 'plan',not_in?:string};
      attached_item?:{charge_on_event?:{in?:string,is?:'subscription_creation' | 'subscription_activation' | 'subscription_trial_start' | 'contract_termination' | 'plan_activation' | 'on_demand',is_not?:'subscription_creation' | 'subscription_activation' | 'subscription_trial_start' | 'contract_termination' | 'plan_activation' | 'on_demand',not_in?:string},id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},item_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},parent_item_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},type?:{in?:string,is?:'optional' | 'mandatory' | 'recommended',is_not?:'optional' | 'mandatory' | 'recommended',not_in?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string}};
    }
    export interface TransactionsResponse {
      export:Export;
    }
    export interface TransactionsInputParam {
      transaction?:{amount?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},amount_capturable?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},customer_id?:{in?:string,is?:string,is_not?:string,is_present?:'true' | 'false',not_in?:string,starts_with?:string},date?:{after?:string,before?:string,between?:string,on?:string},gateway?:{in?:string,is?:'bluepay' | 'beanstream' | 'elavon' | 'orbital' | 'hdfc' | 'nmi' | 'moneris' | 'metrics_global' | 'pin' | 'stripe' | 'quickbooks' | 'razorpay' | 'eway_rapid' | 'balanced_payments' | 'ecentric' | 'wepay' | 'chargebee_payments' | 'bank_of_america' | 'braintree' | 'first_data_global' | 'paypal_express_checkout' | 'ingenico_direct' | 'moneris_us' | 'exact' | 'migs' | 'checkout_com' | 'not_applicable' | 'paypal_pro' | 'ogone' | 'eway' | 'gocardless' | 'global_payments' | 'paymill' | 'adyen' | 'paypal' | 'chargebee' | 'authorize_net' | 'tco' | 'bluesnap' | 'windcave' | 'paypal_payflow_pro' | 'amazon_payments' | 'mollie' | 'cybersource' | 'wirecard' | 'sage_pay' | 'vantiv' | 'worldpay',is_not?:'bluepay' | 'beanstream' | 'elavon' | 'orbital' | 'hdfc' | 'nmi' | 'moneris' | 'metrics_global' | 'pin' | 'stripe' | 'quickbooks' | 'razorpay' | 'eway_rapid' | 'balanced_payments' | 'ecentric' | 'wepay' | 'chargebee_payments' | 'bank_of_america' | 'braintree' | 'first_data_global' | 'paypal_express_checkout' | 'ingenico_direct' | 'moneris_us' | 'exact' | 'migs' | 'checkout_com' | 'not_applicable' | 'paypal_pro' | 'ogone' | 'eway' | 'gocardless' | 'global_payments' | 'paymill' | 'adyen' | 'paypal' | 'chargebee' | 'authorize_net' | 'tco' | 'bluesnap' | 'windcave' | 'paypal_payflow_pro' | 'amazon_payments' | 'mollie' | 'cybersource' | 'wirecard' | 'sage_pay' | 'vantiv' | 'worldpay',not_in?:string},gateway_account_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},id_at_gateway?:{is?:string,is_not?:string,starts_with?:string},payment_method?:{in?:string,is?:'other' | 'netbanking_emandates' | 'ach_credit' | 'dotpay' | 'boleto' | 'direct_debit' | 'chargeback' | 'wechat_pay' | 'cash' | 'giropay' | 'bank_transfer' | 'alipay' | 'ideal' | 'google_pay' | 'custom' | 'unionpay' | 'check' | 'sofort' | 'amazon_payments' | 'upi' | 'apple_pay' | 'bancontact' | 'paypal_express_checkout' | 'sepa_credit' | 'card',is_not?:'other' | 'netbanking_emandates' | 'ach_credit' | 'dotpay' | 'boleto' | 'direct_debit' | 'chargeback' | 'wechat_pay' | 'cash' | 'giropay' | 'bank_transfer' | 'alipay' | 'ideal' | 'google_pay' | 'custom' | 'unionpay' | 'check' | 'sofort' | 'amazon_payments' | 'upi' | 'apple_pay' | 'bancontact' | 'paypal_express_checkout' | 'sepa_credit' | 'card',not_in?:string},payment_source_id?:{in?:string,is?:string,is_not?:string,is_present?:'true' | 'false',not_in?:string,starts_with?:string},reference_number?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string},status?:{in?:string,is?:'in_progress' | 'success' | 'failure' | 'voided' | 'timeout' | 'needs_attention',is_not?:'in_progress' | 'success' | 'failure' | 'voided' | 'timeout' | 'needs_attention',not_in?:string},subscription_id?:{in?:string,is?:string,is_not?:string,is_present?:'true' | 'false',not_in?:string,starts_with?:string},type?:{in?:string,is?:'authorization' | 'payment_reversal' | 'payment' | 'refund',is_not?:'authorization' | 'payment_reversal' | 'payment' | 'refund',not_in?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string}};
    }
    export interface DifferentialPricesResponse {
      export:Export;
    }
    export interface DifferentialPricesInputParam {
      item_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      differential_price?:{id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},item_price_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},parent_item_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string}};
    }
    export interface ItemFamiliesResponse {
      export:Export;
    }
    export interface ItemFamiliesInputParam {
      item_family?:{id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},name?:{is?:string,is_not?:string,starts_with?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string}};
    }
    export interface InvoicesResponse {
      export:Export;
    }
    export interface InvoicesInputParam {
      payment_owner?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      invoice?:{amount_adjusted?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},amount_due?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},amount_paid?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},channel?:{in?:string,is?:'app_store' | 'web' | 'play_store',is_not?:'app_store' | 'web' | 'play_store',not_in?:string},credits_applied?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},customer_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},date?:{after?:string,before?:string,between?:string,on?:string},dunning_status?:{in?:string,is?:'in_progress' | 'stopped' | 'success' | 'exhausted',is_not?:'in_progress' | 'stopped' | 'success' | 'exhausted',is_present?:'true' | 'false',not_in?:string},id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},paid_at?:{after?:string,before?:string,between?:string,on?:string},price_type?:{in?:string,is?:'tax_exclusive' | 'tax_inclusive',is_not?:'tax_exclusive' | 'tax_inclusive',not_in?:string},recurring?:{is?:'true' | 'false'},status?:{in?:string,is?:'pending' | 'paid' | 'voided' | 'not_paid' | 'posted' | 'payment_due',is_not?:'pending' | 'paid' | 'voided' | 'not_paid' | 'posted' | 'payment_due',not_in?:string},subscription_id?:{in?:string,is?:string,is_not?:string,is_present?:'true' | 'false',not_in?:string,starts_with?:string},total?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string}};
    }
    export interface RetrieveResponse {
      export:Export;
    }
    
    export interface ItemsResponse {
      export:Export;
    }
    export interface ItemsInputParam {
      item?:{channel?:{in?:string,is?:'app_store' | 'web' | 'play_store',is_not?:'app_store' | 'web' | 'play_store',not_in?:string},enabled_for_checkout?:{is?:'true' | 'false'},enabled_in_portal?:{is?:'true' | 'false'},id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},is_giftable?:{is?:'true' | 'false'},item_applicability?:{in?:string,is?:'all' | 'restricted',is_not?:'all' | 'restricted',not_in?:string},item_family_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},metered?:{is?:'true' | 'false'},name?:{is?:string,is_not?:string,starts_with?:string},status?:{in?:string,is?:'archived' | 'deleted' | 'active',is_not?:'archived' | 'deleted' | 'active',not_in?:string},type?:{in?:string,is?:'charge' | 'addon' | 'plan',is_not?:'charge' | 'addon' | 'plan',not_in?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string},usage_calculation?:{in?:string,is?:'max_usage' | 'sum_of_usages' | 'last_usage',is_not?:'max_usage' | 'sum_of_usages' | 'last_usage',not_in?:string}};
    }
    export interface DeferredRevenueResponse {
      export:Export;
    }
    export interface DeferredRevenueInputParam {
      report_by:ReportBy;
      currency_code?:string;
      report_from_month:number;
      report_from_year:number;
      report_to_month:number;
      report_to_year:number;
      include_discounts?:boolean;
      payment_owner?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      item_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      item_price_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      cancel_reason_code?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      business_entity_id?:{is?:string,is_not?:string,starts_with?:string};
      invoice?:{amount_adjusted?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},amount_due?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},amount_paid?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},channel?:{in?:string,is?:'app_store' | 'web' | 'play_store',is_not?:'app_store' | 'web' | 'play_store',not_in?:string},credits_applied?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},date?:{after?:string,before?:string,between?:string,on?:string},dunning_status?:{in?:string,is?:'in_progress' | 'stopped' | 'success' | 'exhausted',is_not?:'in_progress' | 'stopped' | 'success' | 'exhausted',is_present?:'true' | 'false',not_in?:string},id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},paid_at?:{after?:string,before?:string,between?:string,on?:string},price_type?:{in?:string,is?:'tax_exclusive' | 'tax_inclusive',is_not?:'tax_exclusive' | 'tax_inclusive',not_in?:string},recurring?:{is?:'true' | 'false'},status?:{in?:string,is?:'pending' | 'paid' | 'voided' | 'not_paid' | 'posted' | 'payment_due',is_not?:'pending' | 'paid' | 'voided' | 'not_paid' | 'posted' | 'payment_due',not_in?:string},total?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string}};
      subscription?:{activated_at?:{after?:string,before?:string,between?:string,is_present?:'true' | 'false',on?:string},auto_close_invoices?:{is?:'true' | 'false'},cancel_reason?:{in?:string,is?:'tax_calculation_failed' | 'fraud_review_failed' | 'currency_incompatible_with_gateway' | 'non_compliant_eu_customer' | 'non_compliant_customer' | 'not_paid' | 'no_card',is_not?:'tax_calculation_failed' | 'fraud_review_failed' | 'currency_incompatible_with_gateway' | 'non_compliant_eu_customer' | 'non_compliant_customer' | 'not_paid' | 'no_card',is_present?:'true' | 'false',not_in?:string},cancelled_at?:{after?:string,before?:string,between?:string,on?:string},channel?:{in?:string,is?:'app_store' | 'web' | 'play_store',is_not?:'app_store' | 'web' | 'play_store',not_in?:string},created_at?:{after?:string,before?:string,between?:string,on?:string},customer_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},has_scheduled_changes?:{is?:'true' | 'false'},id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},next_billing_at?:{after?:string,before?:string,between?:string,on?:string},offline_payment_method?:{in?:string,is?:'bank_transfer' | 'no_preference' | 'ach_credit' | 'boleto' | 'check' | 'sepa_credit' | 'cash',is_not?:'bank_transfer' | 'no_preference' | 'ach_credit' | 'boleto' | 'check' | 'sepa_credit' | 'cash',not_in?:string},remaining_billing_cycles?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,is_present?:'true' | 'false',lt?:string,lte?:string},status?:{in?:string,is?:'in_trial' | 'paused' | 'future' | 'active' | 'cancelled' | 'non_renewing',is_not?:'in_trial' | 'paused' | 'future' | 'active' | 'cancelled' | 'non_renewing',not_in?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string}};
      customer?:{auto_close_invoices?:{is?:'true' | 'false'},auto_collection?:{in?:string,is?:'off' | 'on',is_not?:'off' | 'on',not_in?:string},channel?:{in?:string,is?:'app_store' | 'web' | 'play_store',is_not?:'app_store' | 'web' | 'play_store',not_in?:string},company?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string},created_at?:{after?:string,before?:string,between?:string,on?:string},email?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string},first_name?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string},id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},last_name?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string},offline_payment_method?:{in?:string,is?:'bank_transfer' | 'no_preference' | 'ach_credit' | 'boleto' | 'check' | 'sepa_credit' | 'cash',is_not?:'bank_transfer' | 'no_preference' | 'ach_credit' | 'boleto' | 'check' | 'sepa_credit' | 'cash',not_in?:string},phone?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string},taxability?:{in?:string,is?:'taxable' | 'exempt',is_not?:'taxable' | 'exempt',not_in?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string}};
      relationship?:{invoice_owner_id?:{is?:string,is_not?:string,starts_with?:string},parent_id?:{is?:string,is_not?:string,starts_with?:string},payment_owner_id?:{is?:string,is_not?:string,starts_with?:string}};
    }
    export interface RevenueRecognitionResponse {
      export:Export;
    }
    export interface RevenueRecognitionInputParam {
      report_by:ReportBy;
      currency_code?:string;
      report_from_month:number;
      report_from_year:number;
      report_to_month:number;
      report_to_year:number;
      include_discounts?:boolean;
      payment_owner?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      item_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      item_price_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      cancel_reason_code?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      business_entity_id?:{is?:string,is_not?:string,starts_with?:string};
      invoice?:{amount_adjusted?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},amount_due?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},amount_paid?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},channel?:{in?:string,is?:'app_store' | 'web' | 'play_store',is_not?:'app_store' | 'web' | 'play_store',not_in?:string},credits_applied?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},date?:{after?:string,before?:string,between?:string,on?:string},dunning_status?:{in?:string,is?:'in_progress' | 'stopped' | 'success' | 'exhausted',is_not?:'in_progress' | 'stopped' | 'success' | 'exhausted',is_present?:'true' | 'false',not_in?:string},id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},paid_at?:{after?:string,before?:string,between?:string,on?:string},price_type?:{in?:string,is?:'tax_exclusive' | 'tax_inclusive',is_not?:'tax_exclusive' | 'tax_inclusive',not_in?:string},recurring?:{is?:'true' | 'false'},status?:{in?:string,is?:'pending' | 'paid' | 'voided' | 'not_paid' | 'posted' | 'payment_due',is_not?:'pending' | 'paid' | 'voided' | 'not_paid' | 'posted' | 'payment_due',not_in?:string},total?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string}};
      subscription?:{activated_at?:{after?:string,before?:string,between?:string,is_present?:'true' | 'false',on?:string},auto_close_invoices?:{is?:'true' | 'false'},cancel_reason?:{in?:string,is?:'tax_calculation_failed' | 'fraud_review_failed' | 'currency_incompatible_with_gateway' | 'non_compliant_eu_customer' | 'non_compliant_customer' | 'not_paid' | 'no_card',is_not?:'tax_calculation_failed' | 'fraud_review_failed' | 'currency_incompatible_with_gateway' | 'non_compliant_eu_customer' | 'non_compliant_customer' | 'not_paid' | 'no_card',is_present?:'true' | 'false',not_in?:string},cancelled_at?:{after?:string,before?:string,between?:string,on?:string},channel?:{in?:string,is?:'app_store' | 'web' | 'play_store',is_not?:'app_store' | 'web' | 'play_store',not_in?:string},created_at?:{after?:string,before?:string,between?:string,on?:string},customer_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},has_scheduled_changes?:{is?:'true' | 'false'},id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},next_billing_at?:{after?:string,before?:string,between?:string,on?:string},offline_payment_method?:{in?:string,is?:'bank_transfer' | 'no_preference' | 'ach_credit' | 'boleto' | 'check' | 'sepa_credit' | 'cash',is_not?:'bank_transfer' | 'no_preference' | 'ach_credit' | 'boleto' | 'check' | 'sepa_credit' | 'cash',not_in?:string},remaining_billing_cycles?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,is_present?:'true' | 'false',lt?:string,lte?:string},status?:{in?:string,is?:'in_trial' | 'paused' | 'future' | 'active' | 'cancelled' | 'non_renewing',is_not?:'in_trial' | 'paused' | 'future' | 'active' | 'cancelled' | 'non_renewing',not_in?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string}};
      customer?:{auto_close_invoices?:{is?:'true' | 'false'},auto_collection?:{in?:string,is?:'off' | 'on',is_not?:'off' | 'on',not_in?:string},channel?:{in?:string,is?:'app_store' | 'web' | 'play_store',is_not?:'app_store' | 'web' | 'play_store',not_in?:string},company?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string},created_at?:{after?:string,before?:string,between?:string,on?:string},email?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string},first_name?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string},id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},last_name?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string},offline_payment_method?:{in?:string,is?:'bank_transfer' | 'no_preference' | 'ach_credit' | 'boleto' | 'check' | 'sepa_credit' | 'cash',is_not?:'bank_transfer' | 'no_preference' | 'ach_credit' | 'boleto' | 'check' | 'sepa_credit' | 'cash',not_in?:string},phone?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string},taxability?:{in?:string,is?:'taxable' | 'exempt',is_not?:'taxable' | 'exempt',not_in?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string}};
      relationship?:{invoice_owner_id?:{is?:string,is_not?:string,starts_with?:string},parent_id?:{is?:string,is_not?:string,starts_with?:string},payment_owner_id?:{is?:string,is_not?:string,starts_with?:string}};
    }
    export interface CreditNotesResponse {
      export:Export;
    }
    export interface CreditNotesInputParam {
      credit_note?:{amount_allocated?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},amount_available?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},amount_refunded?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},channel?:{in?:string,is?:'app_store' | 'web' | 'play_store',is_not?:'app_store' | 'web' | 'play_store',not_in?:string},create_reason_code?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},customer_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},date?:{after?:string,before?:string,between?:string,on?:string},id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},price_type?:{in?:string,is?:'tax_exclusive' | 'tax_inclusive',is_not?:'tax_exclusive' | 'tax_inclusive',not_in?:string},reason_code?:{in?:string,is?:'other' | 'product_unsatisfactory' | 'subscription_pause' | 'order_cancellation' | 'service_unsatisfactory' | 'subscription_cancellation' | 'chargeback' | 'order_change' | 'write_off' | 'waiver' | 'subscription_change' | 'fraudulent',is_not?:'other' | 'product_unsatisfactory' | 'subscription_pause' | 'order_cancellation' | 'service_unsatisfactory' | 'subscription_cancellation' | 'chargeback' | 'order_change' | 'write_off' | 'waiver' | 'subscription_change' | 'fraudulent',not_in?:string},reference_invoice_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},status?:{in?:string,is?:'refund_due' | 'adjusted' | 'refunded' | 'voided',is_not?:'refund_due' | 'adjusted' | 'refunded' | 'voided',not_in?:string},subscription_id?:{in?:string,is?:string,is_not?:string,is_present?:'true' | 'false',not_in?:string,starts_with?:string},total?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},type?:{in?:string,is?:'adjustment' | 'refundable',is_not?:'adjustment' | 'refundable',not_in?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string},voided_at?:{after?:string,before?:string,between?:string,on?:string}};
    }
    export interface CouponsResponse {
      export:Export;
    }
    export interface CouponsInputParam {
      currency_code?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      coupon?:{apply_on?:{in?:string,is?:'invoice_amount' | 'each_specified_item',is_not?:'invoice_amount' | 'each_specified_item',not_in?:string},created_at?:{after?:string,before?:string,between?:string,on?:string},discount_type?:{in?:string,is?:'fixed_amount' | 'percentage',is_not?:'fixed_amount' | 'percentage',not_in?:string},duration_type?:{in?:string,is?:'limited_period' | 'one_time' | 'forever',is_not?:'limited_period' | 'one_time' | 'forever',not_in?:string},id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},name?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},status?:{in?:string,is?:'archived' | 'expired' | 'deleted' | 'active',is_not?:'archived' | 'expired' | 'deleted' | 'active',not_in?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string}};
    }
    export interface OrdersResponse {
      export:Export;
    }
    export interface OrdersInputParam {
      total?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
      order?:{amount_paid?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},cancelled_at?:{after?:string,before?:string,between?:string,on?:string},customer_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},delivered_at?:{after?:string,before?:string,between?:string,on?:string},id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},is_resent?:{is?:'true' | 'false'},order_date?:{after?:string,before?:string,between?:string,on?:string},original_order_id?:{is?:string,is_not?:string,starts_with?:string},price_type?:{in?:string,is?:'tax_exclusive' | 'tax_inclusive',is_not?:'tax_exclusive' | 'tax_inclusive',not_in?:string},refundable_credits?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},refundable_credits_issued?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},resent_status?:{in?:string,is?:'fully_resent' | 'partially_resent',is_not?:'fully_resent' | 'partially_resent',not_in?:string},shipped_at?:{after?:string,before?:string,between?:string,on?:string},shipping_date?:{after?:string,before?:string,between?:string,on?:string},status?:{in?:string,is?:'new' | 'partially_delivered' | 'queued' | 'delivered' | 'on_hold' | 'shipped' | 'processing' | 'cancelled' | 'voided' | 'complete' | 'awaiting_shipment' | 'returned',is_not?:'new' | 'partially_delivered' | 'queued' | 'delivered' | 'on_hold' | 'shipped' | 'processing' | 'cancelled' | 'voided' | 'complete' | 'awaiting_shipment' | 'returned',not_in?:string},subscription_id?:{in?:string,is?:string,is_not?:string,is_present?:'true' | 'false',not_in?:string,starts_with?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string}};
    }
    export interface ItemPricesResponse {
      export:Export;
    }
    export interface ItemPricesInputParam {
      item_family_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      item_type?:{in?:string,is?:'charge' | 'addon' | 'plan',is_not?:'charge' | 'addon' | 'plan',not_in?:string};
      currency_code?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      item_price?:{channel?:{in?:string,is?:'app_store' | 'web' | 'play_store',is_not?:'app_store' | 'web' | 'play_store',not_in?:string},id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},item_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},name?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},period?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},period_unit?:{in?:string,is?:'week' | 'month' | 'year' | 'day',is_not?:'week' | 'month' | 'year' | 'day',not_in?:string},pricing_model?:{in?:string,is?:'volume' | 'per_unit' | 'tiered' | 'flat_fee' | 'stairstep',is_not?:'volume' | 'per_unit' | 'tiered' | 'flat_fee' | 'stairstep',not_in?:string},status?:{in?:string,is?:'archived' | 'deleted' | 'active',is_not?:'archived' | 'deleted' | 'active',not_in?:string},trial_period?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},trial_period_unit?:{in?:string,is?:'month' | 'day',is_not?:'month' | 'day',not_in?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string}};
    }
    export interface SubscriptionsResponse {
      export:Export;
    }
    export interface SubscriptionsInputParam {
      export_type?:ExportType;
      item_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      item_price_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      cancel_reason_code?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      subscription?:{activated_at?:{after?:string,before?:string,between?:string,is_present?:'true' | 'false',on?:string},auto_close_invoices?:{is?:'true' | 'false'},cancel_reason?:{in?:string,is?:'tax_calculation_failed' | 'fraud_review_failed' | 'currency_incompatible_with_gateway' | 'non_compliant_eu_customer' | 'non_compliant_customer' | 'not_paid' | 'no_card',is_not?:'tax_calculation_failed' | 'fraud_review_failed' | 'currency_incompatible_with_gateway' | 'non_compliant_eu_customer' | 'non_compliant_customer' | 'not_paid' | 'no_card',is_present?:'true' | 'false',not_in?:string},cancelled_at?:{after?:string,before?:string,between?:string,on?:string},channel?:{in?:string,is?:'app_store' | 'web' | 'play_store',is_not?:'app_store' | 'web' | 'play_store',not_in?:string},created_at?:{after?:string,before?:string,between?:string,on?:string},customer_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},has_scheduled_changes?:{is?:'true' | 'false'},id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},next_billing_at?:{after?:string,before?:string,between?:string,on?:string},offline_payment_method?:{in?:string,is?:'bank_transfer' | 'no_preference' | 'ach_credit' | 'boleto' | 'check' | 'sepa_credit' | 'cash',is_not?:'bank_transfer' | 'no_preference' | 'ach_credit' | 'boleto' | 'check' | 'sepa_credit' | 'cash',not_in?:string},remaining_billing_cycles?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,is_present?:'true' | 'false',lt?:string,lte?:string},status?:{in?:string,is?:'in_trial' | 'paused' | 'future' | 'active' | 'cancelled' | 'non_renewing',is_not?:'in_trial' | 'paused' | 'future' | 'active' | 'cancelled' | 'non_renewing',not_in?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string}};
    }
    export interface Download {
      download_url?:string;
      valid_till?:number;
      mime_type?:string;
    }
  }
}