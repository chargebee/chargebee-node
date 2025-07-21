///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface Export {
    

    id:string;

    operation_type:string;

    mime_type:'pdf' | 'zip';

    status:'in_process' | 'completed' | 'failed';

    created_at:number;

    download?:Export.Download;

  }
  export namespace Export {
    export class ExportResource {  
      retrieve(export_id:string):ChargebeeRequest<RetrieveResponse>;
       
      revenue_recognition(input:RevenueRecognitionInputParam):ChargebeeRequest<RevenueRecognitionResponse>;
       
      deferred_revenue(input:DeferredRevenueInputParam):ChargebeeRequest<DeferredRevenueResponse>;
       
      plans(input?:PlansInputParam):ChargebeeRequest<PlansResponse>;
       
      addons(input?:AddonsInputParam):ChargebeeRequest<AddonsResponse>;
       
      coupons(input?:CouponsInputParam):ChargebeeRequest<CouponsResponse>;
       
      customers(input?:CustomersInputParam):ChargebeeRequest<CustomersResponse>;
       
      subscriptions(input?:SubscriptionsInputParam):ChargebeeRequest<SubscriptionsResponse>;
       
      invoices(input?:InvoicesInputParam):ChargebeeRequest<InvoicesResponse>;
       
      credit_notes(input?:CreditNotesInputParam):ChargebeeRequest<CreditNotesResponse>;
       
      transactions(input?:TransactionsInputParam):ChargebeeRequest<TransactionsResponse>;
       
      orders(input?:OrdersInputParam):ChargebeeRequest<OrdersResponse>;
       
      item_families(input?:ItemFamiliesInputParam):ChargebeeRequest<ItemFamiliesResponse>;
       
      items(input?:ItemsInputParam):ChargebeeRequest<ItemsResponse>;
       
      item_prices(input?:ItemPricesInputParam):ChargebeeRequest<ItemPricesResponse>;
       
      attached_items(input?:AttachedItemsInputParam):ChargebeeRequest<AttachedItemsResponse>;
       
      differential_prices(input?:DifferentialPricesInputParam):ChargebeeRequest<DifferentialPricesResponse>;
       
      price_variants(input?:PriceVariantsInputParam):ChargebeeRequest<PriceVariantsResponse>;
    }
    export interface RetrieveResponse {  
       export:Export;
    }
    
    export interface RevenueRecognitionResponse {  
       export:Export;
    }
    export interface RevenueRecognitionInputParam {
       
      invoice?:{amount_adjusted?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},amount_due?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},amount_paid?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},channel?:{in?:string,is?:'web' | 'app_store' | 'play_store',is_not?:'web' | 'app_store' | 'play_store',not_in?:string},credits_applied?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},date?:{after?:string,before?:string,between?:string,on?:string},dunning_status?:{in?:string,is?:'in_progress' | 'exhausted' | 'stopped' | 'success',is_not?:'in_progress' | 'exhausted' | 'stopped' | 'success',is_present?:'true' | 'false',not_in?:string},id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},paid_at?:{after?:string,before?:string,between?:string,on?:string},price_type?:{in?:string,is?:'tax_exclusive' | 'tax_inclusive',is_not?:'tax_exclusive' | 'tax_inclusive',not_in?:string},recurring?:{is?:'true' | 'false'},status?:{in?:string,is?:'paid' | 'posted' | 'payment_due' | 'not_paid' | 'voided' | 'pending',is_not?:'paid' | 'posted' | 'payment_due' | 'not_paid' | 'voided' | 'pending',not_in?:string},total?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string}};
       
      subscription?:{activated_at?:{after?:string,before?:string,between?:string,is_present?:'true' | 'false',on?:string},auto_close_invoices?:{is?:'true' | 'false'},cancel_reason?:{in?:string,is?:'not_paid' | 'no_card' | 'fraud_review_failed' | 'non_compliant_eu_customer' | 'tax_calculation_failed' | 'currency_incompatible_with_gateway' | 'non_compliant_customer',is_not?:'not_paid' | 'no_card' | 'fraud_review_failed' | 'non_compliant_eu_customer' | 'tax_calculation_failed' | 'currency_incompatible_with_gateway' | 'non_compliant_customer',is_present?:'true' | 'false',not_in?:string},cancelled_at?:{after?:string,before?:string,between?:string,on?:string},channel?:{in?:string,is?:'web' | 'app_store' | 'play_store',is_not?:'web' | 'app_store' | 'play_store',not_in?:string},created_at?:{after?:string,before?:string,between?:string,on?:string},customer_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},has_scheduled_changes?:{is?:'true' | 'false'},id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},next_billing_at?:{after?:string,before?:string,between?:string,on?:string},offline_payment_method?:{in?:string,is?:'no_preference' | 'cash' | 'check' | 'bank_transfer' | 'ach_credit' | 'sepa_credit' | 'boleto' | 'us_automated_bank_transfer' | 'eu_automated_bank_transfer' | 'uk_automated_bank_transfer' | 'jp_automated_bank_transfer' | 'mx_automated_bank_transfer' | 'custom',is_not?:'no_preference' | 'cash' | 'check' | 'bank_transfer' | 'ach_credit' | 'sepa_credit' | 'boleto' | 'us_automated_bank_transfer' | 'eu_automated_bank_transfer' | 'uk_automated_bank_transfer' | 'jp_automated_bank_transfer' | 'mx_automated_bank_transfer' | 'custom',not_in?:string},plan_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},remaining_billing_cycles?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,is_present?:'true' | 'false',lt?:string,lte?:string},status?:{in?:string,is?:'future' | 'in_trial' | 'active' | 'non_renewing' | 'paused' | 'cancelled' | 'transferred',is_not?:'future' | 'in_trial' | 'active' | 'non_renewing' | 'paused' | 'cancelled' | 'transferred',not_in?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string}};
       
      customer?:{auto_close_invoices?:{is?:'true' | 'false'},auto_collection?:{in?:string,is?:'on' | 'off',is_not?:'on' | 'off',not_in?:string},channel?:{in?:string,is?:'web' | 'app_store' | 'play_store',is_not?:'web' | 'app_store' | 'play_store',not_in?:string},company?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string},created_at?:{after?:string,before?:string,between?:string,on?:string},email?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string},first_name?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string},id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},last_name?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string},offline_payment_method?:{in?:string,is?:'no_preference' | 'cash' | 'check' | 'bank_transfer' | 'ach_credit' | 'sepa_credit' | 'boleto' | 'us_automated_bank_transfer' | 'eu_automated_bank_transfer' | 'uk_automated_bank_transfer' | 'jp_automated_bank_transfer' | 'mx_automated_bank_transfer' | 'custom',is_not?:'no_preference' | 'cash' | 'check' | 'bank_transfer' | 'ach_credit' | 'sepa_credit' | 'boleto' | 'us_automated_bank_transfer' | 'eu_automated_bank_transfer' | 'uk_automated_bank_transfer' | 'jp_automated_bank_transfer' | 'mx_automated_bank_transfer' | 'custom',not_in?:string},phone?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string},taxability?:{in?:string,is?:'taxable' | 'exempt',is_not?:'taxable' | 'exempt',not_in?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string}};
       
      relationship?:{invoice_owner_id?:{is?:string,is_not?:string,starts_with?:string},parent_id?:{is?:string,is_not?:string,starts_with?:string},payment_owner_id?:{is?:string,is_not?:string,starts_with?:string}};
       
      report_by:ReportBy;
       
      currency_code?:string;
       
      report_from_month:number;
       
      report_from_year:number;
       
      report_to_month:number;
       
      report_to_year:number;
       
      include_discounts?:boolean;
       
      /**
        * @description Payment owner of an invoice

        */
       
      payment_owner?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description The plan item code

        */
       
      item_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description The plan item price code

        */
       
      item_price_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Reason code for canceling the subscription. Must be one from a list of reason codes set in the Chargebee app in **Settings \&gt; Configure Chargebee \&gt; Reason Codes \&gt; Subscriptions \&gt; Subscription Cancellation**. Must be passed if set as mandatory in the app. The codes are case-sensitive

        */
       
      cancel_reason_code?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description The unique ID of the [business entity](/docs/api?prod_cat_ver&#x3D;2#mbe) of this subscription. This is always the same as the [business entity](/docs/api/subscriptions?prod_cat_ver&#x3D;2#subscription_customer_id) of the customer.  
The ID of the business entity created for the site. For Product Catalog 1.0, all the site data is tied to this business entity.  
**Note**

[Multiple Business Entities](/docs/api?prod_cat_ver&#x3D;2#mbe) is a feature available only on Product Catalog 2.0.

        */
       
      business_entity_id?:{is?:string,is_not?:string,starts_with?:string};
    }
    export interface DeferredRevenueResponse {  
       export:Export;
    }
    export interface DeferredRevenueInputParam {
       
      invoice?:{amount_adjusted?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},amount_due?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},amount_paid?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},channel?:{in?:string,is?:'web' | 'app_store' | 'play_store',is_not?:'web' | 'app_store' | 'play_store',not_in?:string},credits_applied?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},date?:{after?:string,before?:string,between?:string,on?:string},dunning_status?:{in?:string,is?:'in_progress' | 'exhausted' | 'stopped' | 'success',is_not?:'in_progress' | 'exhausted' | 'stopped' | 'success',is_present?:'true' | 'false',not_in?:string},id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},paid_at?:{after?:string,before?:string,between?:string,on?:string},price_type?:{in?:string,is?:'tax_exclusive' | 'tax_inclusive',is_not?:'tax_exclusive' | 'tax_inclusive',not_in?:string},recurring?:{is?:'true' | 'false'},status?:{in?:string,is?:'paid' | 'posted' | 'payment_due' | 'not_paid' | 'voided' | 'pending',is_not?:'paid' | 'posted' | 'payment_due' | 'not_paid' | 'voided' | 'pending',not_in?:string},total?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string}};
       
      subscription?:{activated_at?:{after?:string,before?:string,between?:string,is_present?:'true' | 'false',on?:string},auto_close_invoices?:{is?:'true' | 'false'},cancel_reason?:{in?:string,is?:'not_paid' | 'no_card' | 'fraud_review_failed' | 'non_compliant_eu_customer' | 'tax_calculation_failed' | 'currency_incompatible_with_gateway' | 'non_compliant_customer',is_not?:'not_paid' | 'no_card' | 'fraud_review_failed' | 'non_compliant_eu_customer' | 'tax_calculation_failed' | 'currency_incompatible_with_gateway' | 'non_compliant_customer',is_present?:'true' | 'false',not_in?:string},cancelled_at?:{after?:string,before?:string,between?:string,on?:string},channel?:{in?:string,is?:'web' | 'app_store' | 'play_store',is_not?:'web' | 'app_store' | 'play_store',not_in?:string},created_at?:{after?:string,before?:string,between?:string,on?:string},customer_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},has_scheduled_changes?:{is?:'true' | 'false'},id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},next_billing_at?:{after?:string,before?:string,between?:string,on?:string},offline_payment_method?:{in?:string,is?:'no_preference' | 'cash' | 'check' | 'bank_transfer' | 'ach_credit' | 'sepa_credit' | 'boleto' | 'us_automated_bank_transfer' | 'eu_automated_bank_transfer' | 'uk_automated_bank_transfer' | 'jp_automated_bank_transfer' | 'mx_automated_bank_transfer' | 'custom',is_not?:'no_preference' | 'cash' | 'check' | 'bank_transfer' | 'ach_credit' | 'sepa_credit' | 'boleto' | 'us_automated_bank_transfer' | 'eu_automated_bank_transfer' | 'uk_automated_bank_transfer' | 'jp_automated_bank_transfer' | 'mx_automated_bank_transfer' | 'custom',not_in?:string},plan_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},remaining_billing_cycles?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,is_present?:'true' | 'false',lt?:string,lte?:string},status?:{in?:string,is?:'future' | 'in_trial' | 'active' | 'non_renewing' | 'paused' | 'cancelled' | 'transferred',is_not?:'future' | 'in_trial' | 'active' | 'non_renewing' | 'paused' | 'cancelled' | 'transferred',not_in?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string}};
       
      customer?:{auto_close_invoices?:{is?:'true' | 'false'},auto_collection?:{in?:string,is?:'on' | 'off',is_not?:'on' | 'off',not_in?:string},channel?:{in?:string,is?:'web' | 'app_store' | 'play_store',is_not?:'web' | 'app_store' | 'play_store',not_in?:string},company?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string},created_at?:{after?:string,before?:string,between?:string,on?:string},email?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string},first_name?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string},id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},last_name?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string},offline_payment_method?:{in?:string,is?:'no_preference' | 'cash' | 'check' | 'bank_transfer' | 'ach_credit' | 'sepa_credit' | 'boleto' | 'us_automated_bank_transfer' | 'eu_automated_bank_transfer' | 'uk_automated_bank_transfer' | 'jp_automated_bank_transfer' | 'mx_automated_bank_transfer' | 'custom',is_not?:'no_preference' | 'cash' | 'check' | 'bank_transfer' | 'ach_credit' | 'sepa_credit' | 'boleto' | 'us_automated_bank_transfer' | 'eu_automated_bank_transfer' | 'uk_automated_bank_transfer' | 'jp_automated_bank_transfer' | 'mx_automated_bank_transfer' | 'custom',not_in?:string},phone?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string},taxability?:{in?:string,is?:'taxable' | 'exempt',is_not?:'taxable' | 'exempt',not_in?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string}};
       
      relationship?:{invoice_owner_id?:{is?:string,is_not?:string,starts_with?:string},parent_id?:{is?:string,is_not?:string,starts_with?:string},payment_owner_id?:{is?:string,is_not?:string,starts_with?:string}};
       
      report_by:ReportBy;
       
      currency_code?:string;
       
      report_from_month:number;
       
      report_from_year:number;
       
      report_to_month:number;
       
      report_to_year:number;
       
      include_discounts?:boolean;
       
      /**
        * @description Payment owner of an invoice

        */
       
      payment_owner?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description The plan item code

        */
       
      item_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description The plan item price code

        */
       
      item_price_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Reason code for canceling the subscription. Must be one from a list of reason codes set in the Chargebee app in **Settings \&gt; Configure Chargebee \&gt; Reason Codes \&gt; Subscriptions \&gt; Subscription Cancellation**. Must be passed if set as mandatory in the app. The codes are case-sensitive

        */
       
      cancel_reason_code?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description The unique ID of the [business entity](/docs/api?prod_cat_ver&#x3D;2#mbe) of this subscription. This is always the same as the [business entity](/docs/api/subscriptions?prod_cat_ver&#x3D;2#subscription_customer_id) of the customer.  
The ID of the business entity created for the site. For Product Catalog 1.0, all the site data is tied to this business entity.  
**Note**

[Multiple Business Entities](/docs/api?prod_cat_ver&#x3D;2#mbe) is a feature available only on Product Catalog 2.0.

        */
       
      business_entity_id?:{is?:string,is_not?:string,starts_with?:string};
    }
    export interface PlansResponse {  
       export:Export;
    }
    export interface PlansInputParam {
       
      plan?:{addon_applicability?:{in?:string,is?:'all' | 'restricted',is_not?:'all' | 'restricted',not_in?:string},channel?:{in?:string,is?:'web' | 'app_store' | 'play_store',is_not?:'web' | 'app_store' | 'play_store',not_in?:string},giftable?:{is?:'true' | 'false'},id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},name?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},period?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},period_unit?:{in?:string,is?:'day' | 'week' | 'month' | 'year',is_not?:'day' | 'week' | 'month' | 'year',not_in?:string},price?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},status?:{in?:string,is?:'active' | 'archived' | 'deleted',is_not?:'active' | 'archived' | 'deleted',not_in?:string},trial_period?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,is_present?:'true' | 'false',lt?:string,lte?:string},trial_period_unit?:{in?:string,is?:'day' | 'month',is_not?:'day' | 'month',not_in?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string}};
       
      /**
        * @description The currency code (ISO 4217 format) of the plan

        */
       
      currency_code?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
    }
    export interface AddonsResponse {  
       export:Export;
    }
    export interface AddonsInputParam {
       
      addon?:{channel?:{in?:string,is?:'web' | 'app_store' | 'play_store',is_not?:'web' | 'app_store' | 'play_store',not_in?:string},charge_type?:{in?:string,is?:'recurring' | 'non_recurring',is_not?:'recurring' | 'non_recurring',not_in?:string},id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},name?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},period?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},period_unit?:{in?:string,is?:'day' | 'week' | 'month' | 'year' | 'not_applicable',is_not?:'day' | 'week' | 'month' | 'year' | 'not_applicable',not_in?:string},price?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},status?:{in?:string,is?:'active' | 'archived' | 'deleted',is_not?:'active' | 'archived' | 'deleted',not_in?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string}};
       
      /**
        * @description The currency code (ISO 4217 format) of the addon

        */
       
      currency_code?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
    }
    export interface CouponsResponse {  
       export:Export;
    }
    export interface CouponsInputParam {
       
      coupon?:{apply_on?:{in?:string,is?:'invoice_amount' | 'each_specified_item',is_not?:'invoice_amount' | 'each_specified_item',not_in?:string},created_at?:{after?:string,before?:string,between?:string,on?:string},discount_type?:{in?:string,is?:'fixed_amount' | 'percentage' | 'offer_quantity',is_not?:'fixed_amount' | 'percentage' | 'offer_quantity',not_in?:string},duration_type?:{in?:string,is?:'one_time' | 'forever' | 'limited_period',is_not?:'one_time' | 'forever' | 'limited_period',not_in?:string},id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},name?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},status?:{in?:string,is?:'active' | 'expired' | 'archived' | 'deleted' | 'future',is_not?:'active' | 'expired' | 'archived' | 'deleted' | 'future',not_in?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string}};
       
      /**
        * @description The currency code ([ISO 4217 format](https://www.chargebee.com/docs/supported-currencies.html)) of the coupon. Applicable for *fixed_amount* coupons alone.

        */
       
      currency_code?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
    }
    export interface CustomersResponse {  
       export:Export;
    }
    export interface CustomersInputParam {
       
      customer?:{auto_close_invoices?:{is?:'true' | 'false'},auto_collection?:{in?:string,is?:'on' | 'off',is_not?:'on' | 'off',not_in?:string},channel?:{in?:string,is?:'web' | 'app_store' | 'play_store',is_not?:'web' | 'app_store' | 'play_store',not_in?:string},company?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string},created_at?:{after?:string,before?:string,between?:string,on?:string},email?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string},first_name?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string},id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},last_name?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string},offline_payment_method?:{in?:string,is?:'no_preference' | 'cash' | 'check' | 'bank_transfer' | 'ach_credit' | 'sepa_credit' | 'boleto' | 'us_automated_bank_transfer' | 'eu_automated_bank_transfer' | 'uk_automated_bank_transfer' | 'jp_automated_bank_transfer' | 'mx_automated_bank_transfer' | 'custom',is_not?:'no_preference' | 'cash' | 'check' | 'bank_transfer' | 'ach_credit' | 'sepa_credit' | 'boleto' | 'us_automated_bank_transfer' | 'eu_automated_bank_transfer' | 'uk_automated_bank_transfer' | 'jp_automated_bank_transfer' | 'mx_automated_bank_transfer' | 'custom',not_in?:string},phone?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string},taxability?:{in?:string,is?:'taxable' | 'exempt',is_not?:'taxable' | 'exempt',not_in?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string}};
       
      relationship?:{invoice_owner_id?:{is?:string,is_not?:string,starts_with?:string},parent_id?:{is?:string,is_not?:string,starts_with?:string},payment_owner_id?:{is?:string,is_not?:string,starts_with?:string}};
       
      export_type?:ExportType;
       
      /**
        * @description The unique ID of the [business entity](/docs/api?prod_cat_ver&#x3D;2#mbe) of this subscription. This is always the same as the [business entity](/docs/api/subscriptions?prod_cat_ver&#x3D;2#subscription_customer_id) of the customer.  
The ID of the business entity created for the site. For Product Catalog 1.0, all the site data is tied to this business entity.  
**Note**

[Multiple Business Entities](/docs/api?prod_cat_ver&#x3D;2#mbe) is a feature available only on Product Catalog 2.0.

        */
       
      business_entity_id?:{is?:string,is_not?:string,starts_with?:string};
    }
    export interface SubscriptionsResponse {  
       export:Export;
    }
    export interface SubscriptionsInputParam {
       
      subscription?:{activated_at?:{after?:string,before?:string,between?:string,is_present?:'true' | 'false',on?:string},auto_close_invoices?:{is?:'true' | 'false'},cancel_reason?:{in?:string,is?:'not_paid' | 'no_card' | 'fraud_review_failed' | 'non_compliant_eu_customer' | 'tax_calculation_failed' | 'currency_incompatible_with_gateway' | 'non_compliant_customer',is_not?:'not_paid' | 'no_card' | 'fraud_review_failed' | 'non_compliant_eu_customer' | 'tax_calculation_failed' | 'currency_incompatible_with_gateway' | 'non_compliant_customer',is_present?:'true' | 'false',not_in?:string},cancelled_at?:{after?:string,before?:string,between?:string,on?:string},channel?:{in?:string,is?:'web' | 'app_store' | 'play_store',is_not?:'web' | 'app_store' | 'play_store',not_in?:string},created_at?:{after?:string,before?:string,between?:string,on?:string},customer_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},has_scheduled_changes?:{is?:'true' | 'false'},id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},next_billing_at?:{after?:string,before?:string,between?:string,on?:string},offline_payment_method?:{in?:string,is?:'no_preference' | 'cash' | 'check' | 'bank_transfer' | 'ach_credit' | 'sepa_credit' | 'boleto' | 'us_automated_bank_transfer' | 'eu_automated_bank_transfer' | 'uk_automated_bank_transfer' | 'jp_automated_bank_transfer' | 'mx_automated_bank_transfer' | 'custom',is_not?:'no_preference' | 'cash' | 'check' | 'bank_transfer' | 'ach_credit' | 'sepa_credit' | 'boleto' | 'us_automated_bank_transfer' | 'eu_automated_bank_transfer' | 'uk_automated_bank_transfer' | 'jp_automated_bank_transfer' | 'mx_automated_bank_transfer' | 'custom',not_in?:string},plan_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},remaining_billing_cycles?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,is_present?:'true' | 'false',lt?:string,lte?:string},status?:{in?:string,is?:'future' | 'in_trial' | 'active' | 'non_renewing' | 'paused' | 'cancelled' | 'transferred',is_not?:'future' | 'in_trial' | 'active' | 'non_renewing' | 'paused' | 'cancelled' | 'transferred',not_in?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string}};
       
      export_type?:ExportType;
       
      /**
        * @description The plan item code

        */
       
      item_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description The plan item price code

        */
       
      item_price_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Reason code for canceling the subscription. Must be one from a list of reason codes set in the Chargebee app in **Settings \&gt; Configure Chargebee \&gt; Reason Codes \&gt; Subscriptions \&gt; Subscription Cancellation**. Must be passed if set as mandatory in the app. The codes are case-sensitive

        */
       
      cancel_reason_code?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
    }
    export interface InvoicesResponse {  
       export:Export;
    }
    export interface InvoicesInputParam {
       
      invoice?:{amount_adjusted?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},amount_due?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},amount_paid?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},channel?:{in?:string,is?:'web' | 'app_store' | 'play_store',is_not?:'web' | 'app_store' | 'play_store',not_in?:string},credits_applied?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},customer_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},date?:{after?:string,before?:string,between?:string,on?:string},dunning_status?:{in?:string,is?:'in_progress' | 'exhausted' | 'stopped' | 'success',is_not?:'in_progress' | 'exhausted' | 'stopped' | 'success',is_present?:'true' | 'false',not_in?:string},id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},paid_at?:{after?:string,before?:string,between?:string,on?:string},price_type?:{in?:string,is?:'tax_exclusive' | 'tax_inclusive',is_not?:'tax_exclusive' | 'tax_inclusive',not_in?:string},recurring?:{is?:'true' | 'false'},status?:{in?:string,is?:'paid' | 'posted' | 'payment_due' | 'not_paid' | 'voided' | 'pending',is_not?:'paid' | 'posted' | 'payment_due' | 'not_paid' | 'voided' | 'pending',not_in?:string},subscription_id?:{in?:string,is?:string,is_not?:string,is_present?:'true' | 'false',not_in?:string,starts_with?:string},total?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string}};
       
      /**
        * @description Payment owner of an invoice

        */
       
      payment_owner?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
    }
    export interface CreditNotesResponse {  
       export:Export;
    }
    export interface CreditNotesInputParam {
       
      credit_note?:{amount_allocated?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},amount_available?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},amount_refunded?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},channel?:{in?:string,is?:'web' | 'app_store' | 'play_store',is_not?:'web' | 'app_store' | 'play_store',not_in?:string},create_reason_code?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},customer_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},date?:{after?:string,before?:string,between?:string,on?:string},id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},price_type?:{in?:string,is?:'tax_exclusive' | 'tax_inclusive',is_not?:'tax_exclusive' | 'tax_inclusive',not_in?:string},reason_code?:{in?:string,is?:'write_off' | 'subscription_change' | 'subscription_cancellation' | 'subscription_pause' | 'chargeback' | 'product_unsatisfactory' | 'service_unsatisfactory' | 'order_change' | 'order_cancellation' | 'waiver' | 'other' | 'fraudulent',is_not?:'write_off' | 'subscription_change' | 'subscription_cancellation' | 'subscription_pause' | 'chargeback' | 'product_unsatisfactory' | 'service_unsatisfactory' | 'order_change' | 'order_cancellation' | 'waiver' | 'other' | 'fraudulent',not_in?:string},reference_invoice_id?:{in?:string,is?:string,is_not?:string,is_present?:'true' | 'false',not_in?:string,starts_with?:string},status?:{in?:string,is?:'adjusted' | 'refunded' | 'refund_due' | 'voided',is_not?:'adjusted' | 'refunded' | 'refund_due' | 'voided',not_in?:string},subscription_id?:{in?:string,is?:string,is_not?:string,is_present?:'true' | 'false',not_in?:string,starts_with?:string},total?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},type?:{in?:string,is?:'adjustment' | 'refundable' | 'store',is_not?:'adjustment' | 'refundable' | 'store',not_in?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string},voided_at?:{after?:string,before?:string,between?:string,on?:string}};
    }
    export interface TransactionsResponse {  
       export:Export;
    }
    export interface TransactionsInputParam {
       
      transaction?:{amount?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},amount_capturable?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},customer_id?:{in?:string,is?:string,is_not?:string,is_present?:'true' | 'false',not_in?:string,starts_with?:string},date?:{after?:string,before?:string,between?:string,on?:string},gateway?:{in?:string,is?:'chargebee' | 'chargebee_payments' | 'adyen' | 'stripe' | 'wepay' | 'braintree' | 'authorize_net' | 'paypal_pro' | 'pin' | 'eway' | 'eway_rapid' | 'worldpay' | 'balanced_payments' | 'beanstream' | 'bluepay' | 'elavon' | 'first_data_global' | 'hdfc' | 'migs' | 'nmi' | 'ogone' | 'paymill' | 'paypal_payflow_pro' | 'sage_pay' | 'tco' | 'wirecard' | 'amazon_payments' | 'paypal_express_checkout' | 'gocardless' | 'orbital' | 'moneris_us' | 'moneris' | 'bluesnap' | 'cybersource' | 'vantiv' | 'checkout_com' | 'paypal' | 'ingenico_direct' | 'exact' | 'mollie' | 'quickbooks' | 'razorpay' | 'global_payments' | 'bank_of_america' | 'ecentric' | 'metrics_global' | 'windcave' | 'pay_com' | 'ebanx' | 'dlocal' | 'nuvei' | 'solidgate' | 'paystack' | 'jp_morgan' | 'not_applicable',is_not?:'chargebee' | 'chargebee_payments' | 'adyen' | 'stripe' | 'wepay' | 'braintree' | 'authorize_net' | 'paypal_pro' | 'pin' | 'eway' | 'eway_rapid' | 'worldpay' | 'balanced_payments' | 'beanstream' | 'bluepay' | 'elavon' | 'first_data_global' | 'hdfc' | 'migs' | 'nmi' | 'ogone' | 'paymill' | 'paypal_payflow_pro' | 'sage_pay' | 'tco' | 'wirecard' | 'amazon_payments' | 'paypal_express_checkout' | 'gocardless' | 'orbital' | 'moneris_us' | 'moneris' | 'bluesnap' | 'cybersource' | 'vantiv' | 'checkout_com' | 'paypal' | 'ingenico_direct' | 'exact' | 'mollie' | 'quickbooks' | 'razorpay' | 'global_payments' | 'bank_of_america' | 'ecentric' | 'metrics_global' | 'windcave' | 'pay_com' | 'ebanx' | 'dlocal' | 'nuvei' | 'solidgate' | 'paystack' | 'jp_morgan' | 'not_applicable',not_in?:string},gateway_account_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},id_at_gateway?:{is?:string,is_not?:string,starts_with?:string},payment_method?:{in?:string,is?:'card' | 'cash' | 'check' | 'chargeback' | 'bank_transfer' | 'amazon_payments' | 'paypal_express_checkout' | 'direct_debit' | 'alipay' | 'unionpay' | 'apple_pay' | 'wechat_pay' | 'ach_credit' | 'sepa_credit' | 'ideal' | 'google_pay' | 'sofort' | 'bancontact' | 'giropay' | 'dotpay' | 'other' | 'upi' | 'netbanking_emandates' | 'custom' | 'boleto' | 'venmo' | 'pay_to' | 'faster_payments' | 'sepa_instant_transfer' | 'automated_bank_transfer' | 'klarna_pay_now' | 'online_banking_poland' | 'payconiq_by_bancontact',is_not?:'card' | 'cash' | 'check' | 'chargeback' | 'bank_transfer' | 'amazon_payments' | 'paypal_express_checkout' | 'direct_debit' | 'alipay' | 'unionpay' | 'apple_pay' | 'wechat_pay' | 'ach_credit' | 'sepa_credit' | 'ideal' | 'google_pay' | 'sofort' | 'bancontact' | 'giropay' | 'dotpay' | 'other' | 'upi' | 'netbanking_emandates' | 'custom' | 'boleto' | 'venmo' | 'pay_to' | 'faster_payments' | 'sepa_instant_transfer' | 'automated_bank_transfer' | 'klarna_pay_now' | 'online_banking_poland' | 'payconiq_by_bancontact',not_in?:string},payment_source_id?:{in?:string,is?:string,is_not?:string,is_present?:'true' | 'false',not_in?:string,starts_with?:string},reference_number?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string},status?:{in?:string,is?:'in_progress' | 'success' | 'voided' | 'failure' | 'timeout' | 'needs_attention' | 'late_failure',is_not?:'in_progress' | 'success' | 'voided' | 'failure' | 'timeout' | 'needs_attention' | 'late_failure',not_in?:string},subscription_id?:{in?:string,is?:string,is_not?:string,is_present?:'true' | 'false',not_in?:string,starts_with?:string},type?:{in?:string,is?:'authorization' | 'payment' | 'refund' | 'payment_reversal',is_not?:'authorization' | 'payment' | 'refund' | 'payment_reversal',not_in?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string}};
    }
    export interface OrdersResponse {  
       export:Export;
    }
    export interface OrdersInputParam {
       
      order?:{amount_paid?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},cancelled_at?:{after?:string,before?:string,between?:string,on?:string},customer_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},delivered_at?:{after?:string,before?:string,between?:string,on?:string},id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},is_resent?:{is?:'true' | 'false'},order_date?:{after?:string,before?:string,between?:string,on?:string},original_order_id?:{is?:string,is_not?:string,starts_with?:string},price_type?:{in?:string,is?:'tax_exclusive' | 'tax_inclusive',is_not?:'tax_exclusive' | 'tax_inclusive',not_in?:string},refundable_credits?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},refundable_credits_issued?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},resent_status?:{in?:string,is?:'fully_resent' | 'partially_resent',is_not?:'fully_resent' | 'partially_resent',not_in?:string},shipped_at?:{after?:string,before?:string,between?:string,on?:string},shipping_date?:{after?:string,before?:string,between?:string,on?:string},status?:{in?:string,is?:'new' | 'processing' | 'complete' | 'cancelled' | 'voided' | 'queued' | 'awaiting_shipment' | 'on_hold' | 'delivered' | 'shipped' | 'partially_delivered' | 'returned',is_not?:'new' | 'processing' | 'complete' | 'cancelled' | 'voided' | 'queued' | 'awaiting_shipment' | 'on_hold' | 'delivered' | 'shipped' | 'partially_delivered' | 'returned',not_in?:string},subscription_id?:{in?:string,is?:string,is_not?:string,is_present?:'true' | 'false',not_in?:string,starts_with?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string}};
       
      /**
        * @description Total amount charged for the order.

        */
       
      total?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
    }
    export interface ItemFamiliesResponse {  
       export:Export;
    }
    export interface ItemFamiliesInputParam {
       
      item_family?:{id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},name?:{is?:string,is_not?:string,starts_with?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string}};
       
      /**
        * @description The unique ID of the [business entity](/docs/api?prod_cat_ver&#x3D;2#mbe) of this subscription. This is always the same as the [business entity](/docs/api/subscriptions?prod_cat_ver&#x3D;2#subscription_customer_id) of the customer.  
The ID of the business entity created for the site. For Product Catalog 1.0, all the site data is tied to this business entity.  
**Note**

[Multiple Business Entities](/docs/api?prod_cat_ver&#x3D;2#mbe) is a feature available only on Product Catalog 2.0.

        */
       
      business_entity_id?:{is?:string,is_present?:'true' | 'false'};
       
      include_site_level_resources?:{is?:'true' | 'false'};
    }
    export interface ItemsResponse {  
       export:Export;
    }
    export interface ItemsInputParam {
       
      item?:{channel?:{in?:string,is?:'web' | 'app_store' | 'play_store',is_not?:'web' | 'app_store' | 'play_store',not_in?:string},enabled_for_checkout?:{is?:'true' | 'false'},enabled_in_portal?:{is?:'true' | 'false'},id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},is_giftable?:{is?:'true' | 'false'},item_applicability?:{in?:string,is?:'all' | 'restricted',is_not?:'all' | 'restricted',not_in?:string},item_family_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},metered?:{is?:'true' | 'false'},name?:{is?:string,is_not?:string,starts_with?:string},status?:{in?:string,is?:'active' | 'archived' | 'deleted',is_not?:'active' | 'archived' | 'deleted',not_in?:string},type?:{in?:string,is?:'plan' | 'addon' | 'charge',is_not?:'plan' | 'addon' | 'charge',not_in?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string},usage_calculation?:{in?:string,is?:'sum_of_usages' | 'last_usage' | 'max_usage',is_not?:'sum_of_usages' | 'last_usage' | 'max_usage',not_in?:string}};
       
      /**
        * @description The unique ID of the [business entity](/docs/api?prod_cat_ver&#x3D;2#mbe) of this subscription. This is always the same as the [business entity](/docs/api/subscriptions?prod_cat_ver&#x3D;2#subscription_customer_id) of the customer.  
The ID of the business entity created for the site. For Product Catalog 1.0, all the site data is tied to this business entity.  
**Note**

[Multiple Business Entities](/docs/api?prod_cat_ver&#x3D;2#mbe) is a feature available only on Product Catalog 2.0.

        */
       
      business_entity_id?:{is?:string,is_present?:'true' | 'false'};
       
      include_site_level_resources?:{is?:'true' | 'false'};
    }
    export interface ItemPricesResponse {  
       export:Export;
    }
    export interface ItemPricesInputParam {
       
      item_price?:{channel?:{in?:string,is?:'web' | 'app_store' | 'play_store',is_not?:'web' | 'app_store' | 'play_store',not_in?:string},id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},item_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},name?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},period?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},period_unit?:{in?:string,is?:'day' | 'week' | 'month' | 'year',is_not?:'day' | 'week' | 'month' | 'year',not_in?:string},price_variant_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},pricing_model?:{in?:string,is?:'flat_fee' | 'per_unit' | 'tiered' | 'volume' | 'stairstep',is_not?:'flat_fee' | 'per_unit' | 'tiered' | 'volume' | 'stairstep',not_in?:string},status?:{in?:string,is?:'active' | 'archived' | 'deleted',is_not?:'active' | 'archived' | 'deleted',not_in?:string},trial_period?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},trial_period_unit?:{in?:string,is?:'day' | 'month',is_not?:'day' | 'month',not_in?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string}};
       
      /**
        * @description Filter item prices based on &#x60;item_family_id&#x60;.

        */
       
      item_family_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Filter item prices based on &#x60;item_type&#x60;.

        */
       
      item_type?:{in?:string,is?:'plan' | 'addon' | 'charge',is_not?:'plan' | 'addon' | 'charge',not_in?:string};
       
      /**
        * @description Filter item prices based on their &#x60;currency_code&#x60;.

        */
       
      currency_code?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description The unique ID of the [business entity](/docs/api?prod_cat_ver&#x3D;2#mbe) of this subscription. This is always the same as the [business entity](/docs/api/subscriptions?prod_cat_ver&#x3D;2#subscription_customer_id) of the customer.  
The ID of the business entity created for the site. For Product Catalog 1.0, all the site data is tied to this business entity.  
**Note**

[Multiple Business Entities](/docs/api?prod_cat_ver&#x3D;2#mbe) is a feature available only on Product Catalog 2.0.

        */
       
      business_entity_id?:{is?:string,is_present?:'true' | 'false'};
       
      include_site_level_resources?:{is?:'true' | 'false'};
    }
    export interface AttachedItemsResponse {  
       export:Export;
    }
    export interface AttachedItemsInputParam {
       
      attached_item?:{charge_on_event?:{in?:string,is?:'subscription_creation' | 'subscription_trial_start' | 'plan_activation' | 'subscription_activation' | 'contract_termination' | 'on_demand',is_not?:'subscription_creation' | 'subscription_trial_start' | 'plan_activation' | 'subscription_activation' | 'contract_termination' | 'on_demand',not_in?:string},id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},item_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},parent_item_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},type?:{in?:string,is?:'recommended' | 'mandatory' | 'optional',is_not?:'recommended' | 'mandatory' | 'optional',not_in?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string}};
       
      /**
        * @description To filter based on the type of of the attached item. Possible values are : &#x60;addon&#x60;, &#x60;charge&#x60;.

        */
       
      item_type?:{in?:string,is?:'plan' | 'addon' | 'charge',is_not?:'plan' | 'addon' | 'charge',not_in?:string};
    }
    export interface DifferentialPricesResponse {  
       export:Export;
    }
    export interface DifferentialPricesInputParam {
       
      differential_price?:{id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},item_price_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},parent_item_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string}};
       
      /**
        * @description Item Id of Addon / Charge item price for which differential pricing is applied to

        */
       
      item_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
    }
    export interface PriceVariantsResponse {  
       export:Export;
    }
    export interface PriceVariantsInputParam {
       
      price_variant?:{created_at?:{after?:string,before?:string,between?:string,on?:string},id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},name?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},status?:{in?:string,is?:'active' | 'archived',is_not?:'active' | 'archived',not_in?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string}};
       
      /**
        * @description The unique ID of the [business entity](/docs/api?prod_cat_ver&#x3D;2#mbe) of this subscription. This is always the same as the [business entity](/docs/api/subscriptions?prod_cat_ver&#x3D;2#subscription_customer_id) of the customer.  
The ID of the business entity created for the site. For Product Catalog 1.0, all the site data is tied to this business entity.  
**Note**

[Multiple Business Entities](/docs/api?prod_cat_ver&#x3D;2#mbe) is a feature available only on Product Catalog 2.0.

        */
       
      business_entity_id?:{is?:string,is_present?:'true' | 'false'};
       
      include_site_level_resources?:{is?:'true' | 'false'};
    }
    export interface Download {  
      download_url:string;
       
      valid_till:number;
       
      mime_type?:string;
    }
  }
}