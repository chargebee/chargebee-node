///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface Export {
    
    /**
      * @description A unique identifier to identify the export

      */
    
    id:string;
    
    /**
      * @description Describes the type of export

      */
    
    operation_type:string;
    
    /**
      * @description Describes the mime type of download file \* pdf - PDF \* zip - ZIP

      */
    
    mime_type:'zip' | 'pdf';
    
    /**
      * @description Current status of the export operation \* completed - Completed \* failed - Failed \* in_process - In Process

      */
    
    status:'in_process' | 'completed' | 'failed';
    
    /**
      * @description Export created time

      */
    
    created_at:number;
    
    /**
      * @description Returns the download_url for the export. The download URL is valid upto a specific date.

      */
    
    download?:Export.Download;
  }
  export namespace Export {
    export class ExportResource {  
      /**
        * @description This API gets the status of the export job initiated by the Exports API. If the export job is completed, the downloads resource will also be obtained in the API response. The returned URL in the downloads resource is secure and can be downloaded. The URL expires after 4 hours. Please note that this is a public URL, and can be downloaded by anyone with whom it&#x27;s shared.

**Note:** In case the export is in Failed or In-process state, then the downloads resource will not be available.

        */
      
      retrieve(export_id:string):ChargebeeRequest<RetrieveResponse>;
       
      /**
        * @description This API triggers export for the revenue recognition report.

**Note:** This API call is asynchronous. You need to check if this operation has completed by checking if the export status is **completed** . You can do this by retrieving the export in a loop with a minimum delay of 10 secs between two retrieve requests. In case you are using any of the client libraries, use the **wait for export completion** function provided as an instance method in the library. You need to check if this operation has completed by checking if the export status is **completed** . You can do this by retrieving the export in a loop with a minimum delay of 10 secs between two retrieve requests. Use the method **waitForExportCompletion()** on the returned **Export** resource which will wait until the export status changes. You need to check if this operation has completed by checking if the export status is **completed** . You can do this by retrieving the export in a loop with a minimum delay of 10 secs between two retrieve requests. Use the method **waitForExportCompletion()** on the returned **Export** resource which will wait until the export status changes. You need to check if this operation has completed by checking if the export status is **completed** . You can do this by retrieving the export in a loop with a minimum delay of 10 secs between two retrieve requests. Use the method **wait_for_export_completion** on the returned **export** resource which will wait until the export status changes. You need to check if this operation has completed by checking if the export status is **completed** . You can do this by retrieving the export in a loop with a minimum delay of 10 secs between two retrieve requests. Use the method **wait_for_export_completion** on the returned **export** resource which will wait until the export status changes. You need to check if this operation has completed by checking if the export status is **completed** . You can do this by retrieving the export in a loop with a minimum delay of 10 secs between two retrieve requests. Use the method **WaitForExportCompletion** on the returned **Export** resource which will wait until the export status changes. You need to check if this operation has completed by checking if the export status is **completed** . You can do this by retrieving the export in a loop with a minimum delay of 10 secs between two retrieve requests. Use the method **wait_for_export_completion** on the returned **export** resource which wait until the export status changes. You need to check if this operation has completed by checking if the export status is **completed** . You can do this by retrieving the export in a loop with a minimum delay of 10 secs between two retrieve requests. Use the method **wait_for_export_completion** on the returned **export** resource which wait until the export status changes.

        */
      
      revenue_recognition(input:RevenueRecognitionInputParam):ChargebeeRequest<RevenueRecognitionResponse>;
       
      /**
        * @description This API triggers export for the Deferred Revenue Report.

**Note:** This API call is asynchronous. You need to check if this operation has completed by checking if the export status is **completed** . You can do this by retrieving the export in a loop with a minimum delay of 10 secs between two retrieve requests. In case you are using any of the client libraries, use the **wait for export completion** function provided as an instance method in the library. You need to check if this operation has completed by checking if the export status is **completed** . You can do this by retrieving the export in a loop with a minimum delay of 10 secs between two retrieve requests. Use the method **waitForExportCompletion()** on the returned **Export** resource which will wait until the export status changes. You need to check if this operation has completed by checking if the export status is **completed** . You can do this by retrieving the export in a loop with a minimum delay of 10 secs between two retrieve requests. Use the method **waitForExportCompletion()** on the returned **Export** resource which will wait until the export status changes. You need to check if this operation has completed by checking if the export status is **completed** . You can do this by retrieving the export in a loop with a minimum delay of 10 secs between two retrieve requests. Use the method **wait_for_export_completion** on the returned **export** resource which will wait until the export status changes. You need to check if this operation has completed by checking if the export status is **completed** . You can do this by retrieving the export in a loop with a minimum delay of 10 secs between two retrieve requests. Use the method **wait_for_export_completion** on the returned **export** resource which will wait until the export status changes. You need to check if this operation has completed by checking if the export status is **completed** . You can do this by retrieving the export in a loop with a minimum delay of 10 secs between two retrieve requests. Use the method **WaitForExportCompletion** on the returned **Export** resource which will wait until the export status changes. You need to check if this operation has completed by checking if the export status is **completed** . You can do this by retrieving the export in a loop with a minimum delay of 10 secs between two retrieve requests. Use the method **wait_for_export_completion** on the returned **export** resource which wait until the export status changes. You need to check if this operation has completed by checking if the export status is **completed** . You can do this by retrieving the export in a loop with a minimum delay of 10 secs between two retrieve requests. Use the method **wait_for_export_completion** on the returned **export** resource which wait until the export status changes.

        */
      
      deferred_revenue(input:DeferredRevenueInputParam):ChargebeeRequest<DeferredRevenueResponse>;
       
      /**
        * @description This API triggers export of coupon data. The exported zip file contains CSV files with coupon-related data.

        */
      
      coupons(input?:CouponsInputParam):ChargebeeRequest<CouponsResponse>;
       
      /**
        * @description This API triggers export of customer data. The exported zip file contains CSV files with customer-related data.

        */
      
      customers(input?:CustomersInputParam):ChargebeeRequest<CustomersResponse>;
       
      /**
        * @description This API triggers export of subscription data. The exported zip file contains CSV files with subscription-related data.

        */
      
      subscriptions(input?:SubscriptionsInputParam):ChargebeeRequest<SubscriptionsResponse>;
       
      /**
        * @description This API triggers export of invoice data. The exported zip file contains CSV files with invoice-related data.

        */
      
      invoices(input?:InvoicesInputParam):ChargebeeRequest<InvoicesResponse>;
       
      /**
        * @description This API triggers export of credit note data. The exported zip file contains CSV files with credit note-related data.

        */
      
      credit_notes(input?:CreditNotesInputParam):ChargebeeRequest<CreditNotesResponse>;
       
      /**
        * @description This API triggers export of transaction data. The exported zip file contains CSV files with transaction-related data.

        */
      
      transactions(input?:TransactionsInputParam):ChargebeeRequest<TransactionsResponse>;
       
      /**
        * @description This API triggers export of order data. The exported zip file contains CSV files with order-related data.

        */
      
      orders(input?:OrdersInputParam):ChargebeeRequest<OrdersResponse>;
       
      /**
        * @description This API triggers export of item family data. The exported zip file contains CSV files with item family-related data.

        */
      
      item_families(input?:ItemFamiliesInputParam):ChargebeeRequest<ItemFamiliesResponse>;
       
      /**
        * @description This API triggers export of item data. The exported zip file contains CSV files with item-related data.

        */
      
      items(input?:ItemsInputParam):ChargebeeRequest<ItemsResponse>;
       
      /**
        * @description This API triggers export of item price data. The exported zip file contains CSV files with item price-related data.

        */
      
      item_prices(input?:ItemPricesInputParam):ChargebeeRequest<ItemPricesResponse>;
       
      /**
        * @description This API triggers export of attached item data. The exported zip file contains CSV files with attached item-related data.

        */
      
      attached_items(input?:AttachedItemsInputParam):ChargebeeRequest<AttachedItemsResponse>;
       
      /**
        * @description This API triggers export of differential price data. The exported zip file contains CSV files with differential price-related data.

        */
      
      differential_prices(input?:DifferentialPricesInputParam):ChargebeeRequest<DifferentialPricesResponse>;
    }
    export interface RetrieveResponse {  
       export:Export;
    }
    
    export interface RevenueRecognitionResponse {  
       export:Export;
    }
    export interface RevenueRecognitionInputParam {
       
      /**
        * @description Determines the scope of the report. Returns the report based on the value specified. \* subscription - Subscription \* invoice - Invoice \* product - Product (Includes Plan, Addon and Adhoc) \* customer - Customer

        */
       
      report_by:ReportBy;
       
      /**
        * @description Value must be in [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html) format. Generates the report based on the value specified. If no currency_code value is specified, then consolidated report based on base currency is returned.

        */
       
      currency_code?:string;
       
      /**
        * @description Obtains report data from the specified month, combined with the value specified for report_from_year. Values must be between 1 and 12, where 1 is January and 12 is December.

        */
       
      report_from_month:number;
       
      /**
        * @description Obtains report data from the specified year, combined with the value specified for report_from_month.

        */
       
      report_from_year:number;
       
      /**
        * @description Obtains report data from the specified month, combined with the value specified for report_to_year. Values must be between 1 and 12, where 1 is January and 12 is December.

        */
       
      report_to_month:number;
       
      /**
        * @description Obtains report data until the specified year, combined with the value specified for report_to_month.

        */
       
      report_to_year:number;
       
      /**
        * @description Returns amount with discount in the report. If value specified is false, it returns amount without discount.

        */
       
      include_discounts?:boolean;
       
      /**
        * @description optional, string filter  
Payment owner of an invoice.  
**Supported operators :** is, is_not, starts_with, in, not_in  

**Example →** *payment_owner\[is\] &#x3D; &quot;payment_customer&quot;*

        */
       
      payment_owner?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description optional, string filter  
The plan item code.  
**Supported operators :** is, is_not, starts_with, in, not_in  

**Example →** *item_id\[is\] &#x3D; &quot;silver&quot;*

        */
       
      item_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description optional, string filter  
The plan item price code.  
**Supported operators :** is, is_not, starts_with, in, not_in  

**Example →** *item_price_id\[is\] &#x3D; &quot;silver-USD-monthly&quot;*

        */
       
      item_price_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description optional, string filter  
Reason code for canceling the subscription. Must be one from a list of reason codes set in the Chargebee app in **Settings \&gt; Configure Chargebee \&gt; Reason Codes \&gt; Subscriptions \&gt; Subscription Cancellation** . Must be passed if set as mandatory in the app. The codes are case-sensitive.  
**Supported operators :** is, is_not, starts_with, in, not_in  

**Example →** *cancel_reason_code\[is\] &#x3D; &quot;Not Paid&quot;*

        */
       
      cancel_reason_code?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description optional, string filter  
The unique ID of the [business entity](/docs/api?prod_cat_ver&#x3D;2#mbe) of this subscription. This is always the same as the [business entity](/docs/api/subscriptions?prod_cat_ver&#x3D;2#subscription_customer_id) of the customer.   
**Supported operators :** is, is_not, starts_with  

**Example →** *business_entity_id\[is_not\] &#x3D; &quot;business_entity_id&quot;*

        */
       
      business_entity_id?:{is?:string,is_not?:string,starts_with?:string};
       
      /**
        * @description Parameters for invoice

        */
       
      invoice?:{amount_adjusted?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},amount_due?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},amount_paid?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},channel?:{in?:string,is?:'app_store' | 'web' | 'play_store',is_not?:'app_store' | 'web' | 'play_store',not_in?:string},credits_applied?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},date?:{after?:string,before?:string,between?:string,on?:string},dunning_status?:{in?:string,is?:'in_progress' | 'stopped' | 'success' | 'exhausted',is_not?:'in_progress' | 'stopped' | 'success' | 'exhausted',is_present?:'true' | 'false',not_in?:string},id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},paid_at?:{after?:string,before?:string,between?:string,on?:string},price_type?:{in?:string,is?:'tax_exclusive' | 'tax_inclusive',is_not?:'tax_exclusive' | 'tax_inclusive',not_in?:string},recurring?:{is?:'true' | 'false'},status?:{in?:string,is?:'pending' | 'paid' | 'voided' | 'not_paid' | 'posted' | 'payment_due',is_not?:'pending' | 'paid' | 'voided' | 'not_paid' | 'posted' | 'payment_due',not_in?:string},total?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string}};
       
      /**
        * @description Parameters for subscription

        */
       
      subscription?:{activated_at?:{after?:string,before?:string,between?:string,is_present?:'true' | 'false',on?:string},auto_close_invoices?:{is?:'true' | 'false'},cancel_reason?:{in?:string,is?:'tax_calculation_failed' | 'fraud_review_failed' | 'currency_incompatible_with_gateway' | 'non_compliant_eu_customer' | 'non_compliant_customer' | 'not_paid' | 'no_card',is_not?:'tax_calculation_failed' | 'fraud_review_failed' | 'currency_incompatible_with_gateway' | 'non_compliant_eu_customer' | 'non_compliant_customer' | 'not_paid' | 'no_card',is_present?:'true' | 'false',not_in?:string},cancelled_at?:{after?:string,before?:string,between?:string,on?:string},channel?:{in?:string,is?:'app_store' | 'web' | 'play_store',is_not?:'app_store' | 'web' | 'play_store',not_in?:string},created_at?:{after?:string,before?:string,between?:string,on?:string},customer_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},has_scheduled_changes?:{is?:'true' | 'false'},id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},next_billing_at?:{after?:string,before?:string,between?:string,on?:string},offline_payment_method?:{in?:string,is?:'bank_transfer' | 'no_preference' | 'ach_credit' | 'boleto' | 'check' | 'sepa_credit' | 'cash',is_not?:'bank_transfer' | 'no_preference' | 'ach_credit' | 'boleto' | 'check' | 'sepa_credit' | 'cash',not_in?:string},remaining_billing_cycles?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,is_present?:'true' | 'false',lt?:string,lte?:string},status?:{in?:string,is?:'in_trial' | 'paused' | 'future' | 'active' | 'cancelled' | 'non_renewing',is_not?:'in_trial' | 'paused' | 'future' | 'active' | 'cancelled' | 'non_renewing',not_in?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string}};
       
      /**
        * @description Parameters for customer

        */
       
      customer?:{auto_close_invoices?:{is?:'true' | 'false'},auto_collection?:{in?:string,is?:'off' | 'on',is_not?:'off' | 'on',not_in?:string},channel?:{in?:string,is?:'app_store' | 'web' | 'play_store',is_not?:'app_store' | 'web' | 'play_store',not_in?:string},company?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string},created_at?:{after?:string,before?:string,between?:string,on?:string},email?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string},first_name?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string},id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},last_name?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string},offline_payment_method?:{in?:string,is?:'bank_transfer' | 'no_preference' | 'ach_credit' | 'boleto' | 'check' | 'sepa_credit' | 'cash',is_not?:'bank_transfer' | 'no_preference' | 'ach_credit' | 'boleto' | 'check' | 'sepa_credit' | 'cash',not_in?:string},phone?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string},taxability?:{in?:string,is?:'taxable' | 'exempt',is_not?:'taxable' | 'exempt',not_in?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string}};
       
      /**
        * @description Parameters for relationship

        */
       
      relationship?:{invoice_owner_id?:{is?:string,is_not?:string,starts_with?:string},parent_id?:{is?:string,is_not?:string,starts_with?:string},payment_owner_id?:{is?:string,is_not?:string,starts_with?:string}};
    }
    export interface DeferredRevenueResponse {  
       export:Export;
    }
    export interface DeferredRevenueInputParam {
       
      /**
        * @description Determines the scope of the report. Returns the report based on the value specified. \* subscription - Subscription \* invoice - Invoice \* product - Product (Includes Plan, Addon and Adhoc) \* customer - Customer

        */
       
      report_by:ReportBy;
       
      /**
        * @description Value must be in ISO 4217 format. Generates the report based on the value specified. If no currency_code value is specified, then consolidated report based on base currency is returned.

        */
       
      currency_code?:string;
       
      /**
        * @description Obtains report data from the specified month, combined with the value specified for report_from_year.Values must be between 1 and 12, where 1 is January and 12 is December.

        */
       
      report_from_month:number;
       
      /**
        * @description Obtains report data from the specified year, combined with the value specified for report_from_month.

        */
       
      report_from_year:number;
       
      /**
        * @description Obtains report data from the specified month, combined with the value specified for report_to_year.Values must be between 1 and 12, where 1 is January and 12 is December.

        */
       
      report_to_month:number;
       
      /**
        * @description Obtains report data until the specified year, combined with the value specified for report_to_month.

        */
       
      report_to_year:number;
       
      /**
        * @description Returns amount with discount in the report. If value specified is false, it returns amount without discount.

        */
       
      include_discounts?:boolean;
       
      /**
        * @description optional, string filter  
Payment owner of an invoice.  
**Supported operators :** is, is_not, starts_with, in, not_in  

**Example →** *payment_owner\[is\] &#x3D; &quot;payment_customer&quot;*

        */
       
      payment_owner?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description optional, string filter  
The plan item code.  
**Supported operators :** is, is_not, starts_with, in, not_in  

**Example →** *item_id\[is\] &#x3D; &quot;silver&quot;*

        */
       
      item_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description optional, string filter  
The plan item price code.  
**Supported operators :** is, is_not, starts_with, in, not_in  

**Example →** *item_price_id\[is\] &#x3D; &quot;silver-USD-monthly&quot;*

        */
       
      item_price_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description optional, string filter  
Reason code for canceling the subscription. Must be one from a list of reason codes set in the Chargebee app in **Settings \&gt; Configure Chargebee \&gt; Reason Codes \&gt; Subscriptions \&gt; Subscription Cancellation** . Must be passed if set as mandatory in the app. The codes are case-sensitive.  
**Supported operators :** is, is_not, starts_with, in, not_in  

**Example →** *cancel_reason_code\[is\] &#x3D; &quot;Not Paid&quot;*

        */
       
      cancel_reason_code?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description optional, string filter  
The unique ID of the [business entity](/docs/api?prod_cat_ver&#x3D;2#mbe) of this subscription. This is always the same as the [business entity](/docs/api/subscriptions?prod_cat_ver&#x3D;2#subscription_customer_id) of the customer.   
**Supported operators :** is, is_not, starts_with  

**Example →** *business_entity_id\[is_not\] &#x3D; &quot;business_entity_id&quot;*

        */
       
      business_entity_id?:{is?:string,is_not?:string,starts_with?:string};
       
      /**
        * @description Parameters for invoice

        */
       
      invoice?:{amount_adjusted?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},amount_due?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},amount_paid?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},channel?:{in?:string,is?:'app_store' | 'web' | 'play_store',is_not?:'app_store' | 'web' | 'play_store',not_in?:string},credits_applied?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},date?:{after?:string,before?:string,between?:string,on?:string},dunning_status?:{in?:string,is?:'in_progress' | 'stopped' | 'success' | 'exhausted',is_not?:'in_progress' | 'stopped' | 'success' | 'exhausted',is_present?:'true' | 'false',not_in?:string},id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},paid_at?:{after?:string,before?:string,between?:string,on?:string},price_type?:{in?:string,is?:'tax_exclusive' | 'tax_inclusive',is_not?:'tax_exclusive' | 'tax_inclusive',not_in?:string},recurring?:{is?:'true' | 'false'},status?:{in?:string,is?:'pending' | 'paid' | 'voided' | 'not_paid' | 'posted' | 'payment_due',is_not?:'pending' | 'paid' | 'voided' | 'not_paid' | 'posted' | 'payment_due',not_in?:string},total?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string}};
       
      /**
        * @description Parameters for subscription

        */
       
      subscription?:{activated_at?:{after?:string,before?:string,between?:string,is_present?:'true' | 'false',on?:string},auto_close_invoices?:{is?:'true' | 'false'},cancel_reason?:{in?:string,is?:'tax_calculation_failed' | 'fraud_review_failed' | 'currency_incompatible_with_gateway' | 'non_compliant_eu_customer' | 'non_compliant_customer' | 'not_paid' | 'no_card',is_not?:'tax_calculation_failed' | 'fraud_review_failed' | 'currency_incompatible_with_gateway' | 'non_compliant_eu_customer' | 'non_compliant_customer' | 'not_paid' | 'no_card',is_present?:'true' | 'false',not_in?:string},cancelled_at?:{after?:string,before?:string,between?:string,on?:string},channel?:{in?:string,is?:'app_store' | 'web' | 'play_store',is_not?:'app_store' | 'web' | 'play_store',not_in?:string},created_at?:{after?:string,before?:string,between?:string,on?:string},customer_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},has_scheduled_changes?:{is?:'true' | 'false'},id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},next_billing_at?:{after?:string,before?:string,between?:string,on?:string},offline_payment_method?:{in?:string,is?:'bank_transfer' | 'no_preference' | 'ach_credit' | 'boleto' | 'check' | 'sepa_credit' | 'cash',is_not?:'bank_transfer' | 'no_preference' | 'ach_credit' | 'boleto' | 'check' | 'sepa_credit' | 'cash',not_in?:string},remaining_billing_cycles?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,is_present?:'true' | 'false',lt?:string,lte?:string},status?:{in?:string,is?:'in_trial' | 'paused' | 'future' | 'active' | 'cancelled' | 'non_renewing',is_not?:'in_trial' | 'paused' | 'future' | 'active' | 'cancelled' | 'non_renewing',not_in?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string}};
       
      /**
        * @description Parameters for customer

        */
       
      customer?:{auto_close_invoices?:{is?:'true' | 'false'},auto_collection?:{in?:string,is?:'off' | 'on',is_not?:'off' | 'on',not_in?:string},channel?:{in?:string,is?:'app_store' | 'web' | 'play_store',is_not?:'app_store' | 'web' | 'play_store',not_in?:string},company?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string},created_at?:{after?:string,before?:string,between?:string,on?:string},email?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string},first_name?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string},id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},last_name?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string},offline_payment_method?:{in?:string,is?:'bank_transfer' | 'no_preference' | 'ach_credit' | 'boleto' | 'check' | 'sepa_credit' | 'cash',is_not?:'bank_transfer' | 'no_preference' | 'ach_credit' | 'boleto' | 'check' | 'sepa_credit' | 'cash',not_in?:string},phone?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string},taxability?:{in?:string,is?:'taxable' | 'exempt',is_not?:'taxable' | 'exempt',not_in?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string}};
       
      /**
        * @description Parameters for relationship

        */
       
      relationship?:{invoice_owner_id?:{is?:string,is_not?:string,starts_with?:string},parent_id?:{is?:string,is_not?:string,starts_with?:string},payment_owner_id?:{is?:string,is_not?:string,starts_with?:string}};
    }
    export interface CouponsResponse {  
       export:Export;
    }
    export interface CouponsInputParam {
       
      /**
        * @description optional, string filter  
The currency code ([ISO 4217 format](https://www.chargebee.com/docs/supported-currencies.html)) of the coupon. Applicable for *fixed_amount* coupons alone.  
**Supported operators :** is, is_not, starts_with, in, not_in  

**Example →** *currency_code\[is\] &#x3D; &quot;USD&quot;*

        */
       
      currency_code?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Parameters for coupon

        */
       
      coupon?:{apply_on?:{in?:string,is?:'invoice_amount' | 'each_specified_item',is_not?:'invoice_amount' | 'each_specified_item',not_in?:string},created_at?:{after?:string,before?:string,between?:string,on?:string},discount_type?:{in?:string,is?:'fixed_amount' | 'percentage',is_not?:'fixed_amount' | 'percentage',not_in?:string},duration_type?:{in?:string,is?:'limited_period' | 'one_time' | 'forever',is_not?:'limited_period' | 'one_time' | 'forever',not_in?:string},id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},name?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},status?:{in?:string,is?:'archived' | 'expired' | 'deleted' | 'active',is_not?:'archived' | 'expired' | 'deleted' | 'active',not_in?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string}};
    }
    export interface CustomersResponse {  
       export:Export;
    }
    export interface CustomersInputParam {
       
      /**
        * @description Determines the format of the data. Returns the export type based on the selected value. \* data - Download your current data in CSV. \* import_friendly_data - Download import friendly data in CSV. This CSV can be used to perform [bulk operations](https://www.chargebee.com/docs/bulk-operations.html).

        */
       
      export_type?:ExportType;
       
      /**
        * @description optional, string filter  
The unique ID of the [business entity](/docs/api?prod_cat_ver&#x3D;2#mbe) of this subscription. This is always the same as the [business entity](/docs/api/subscriptions?prod_cat_ver&#x3D;2#subscription_customer_id) of the customer.   
**Supported operators :** is, is_not, starts_with  

**Example →** *business_entity_id\[is\] &#x3D; &quot;business_entity_id&quot;*

        */
       
      business_entity_id?:{is?:string,is_not?:string,starts_with?:string};
       
      /**
        * @description Parameters for customer

        */
       
      customer?:{auto_close_invoices?:{is?:'true' | 'false'},auto_collection?:{in?:string,is?:'off' | 'on',is_not?:'off' | 'on',not_in?:string},channel?:{in?:string,is?:'app_store' | 'web' | 'play_store',is_not?:'app_store' | 'web' | 'play_store',not_in?:string},company?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string},created_at?:{after?:string,before?:string,between?:string,on?:string},email?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string},first_name?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string},id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},last_name?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string},offline_payment_method?:{in?:string,is?:'bank_transfer' | 'no_preference' | 'ach_credit' | 'boleto' | 'check' | 'sepa_credit' | 'cash',is_not?:'bank_transfer' | 'no_preference' | 'ach_credit' | 'boleto' | 'check' | 'sepa_credit' | 'cash',not_in?:string},phone?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string},taxability?:{in?:string,is?:'taxable' | 'exempt',is_not?:'taxable' | 'exempt',not_in?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string}};
       
      /**
        * @description Parameters for relationship

        */
       
      relationship?:{invoice_owner_id?:{is?:string,is_not?:string,starts_with?:string},parent_id?:{is?:string,is_not?:string,starts_with?:string},payment_owner_id?:{is?:string,is_not?:string,starts_with?:string}};
    }
    export interface SubscriptionsResponse {  
       export:Export;
    }
    export interface SubscriptionsInputParam {
       
      /**
        * @description Determines the format of the data. Returns the export type based on the selected value. \* data - Download your current data in CSV. \* import_friendly_data - Download import friendly data in CSV. This CSV can be used to perform [bulk operations](https://www.chargebee.com/docs/bulk-operations.html).

        */
       
      export_type?:ExportType;
       
      /**
        * @description optional, string filter  
The plan item code.  
**Supported operators :** is, is_not, starts_with, in, not_in  

**Example →** *item_id\[is\] &#x3D; &quot;silver&quot;*

        */
       
      item_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description optional, string filter  
The plan item price code.  
**Supported operators :** is, is_not, starts_with, in, not_in  

**Example →** *item_price_id\[is\] &#x3D; &quot;silver-USD-monthly&quot;*

        */
       
      item_price_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description optional, string filter  
Reason code for canceling the subscription. Must be one from a list of reason codes set in the Chargebee app in **Settings \&gt; Configure Chargebee \&gt; Reason Codes \&gt; Subscriptions \&gt; Subscription Cancellation** . Must be passed if set as mandatory in the app. The codes are case-sensitive.  
**Supported operators :** is, is_not, starts_with, in, not_in  

**Example →** *cancel_reason_code\[is\] &#x3D; &quot;Not Paid&quot;*

        */
       
      cancel_reason_code?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Parameters for subscription

        */
       
      subscription?:{activated_at?:{after?:string,before?:string,between?:string,is_present?:'true' | 'false',on?:string},auto_close_invoices?:{is?:'true' | 'false'},cancel_reason?:{in?:string,is?:'tax_calculation_failed' | 'fraud_review_failed' | 'currency_incompatible_with_gateway' | 'non_compliant_eu_customer' | 'non_compliant_customer' | 'not_paid' | 'no_card',is_not?:'tax_calculation_failed' | 'fraud_review_failed' | 'currency_incompatible_with_gateway' | 'non_compliant_eu_customer' | 'non_compliant_customer' | 'not_paid' | 'no_card',is_present?:'true' | 'false',not_in?:string},cancelled_at?:{after?:string,before?:string,between?:string,on?:string},channel?:{in?:string,is?:'app_store' | 'web' | 'play_store',is_not?:'app_store' | 'web' | 'play_store',not_in?:string},created_at?:{after?:string,before?:string,between?:string,on?:string},customer_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},has_scheduled_changes?:{is?:'true' | 'false'},id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},next_billing_at?:{after?:string,before?:string,between?:string,on?:string},offline_payment_method?:{in?:string,is?:'bank_transfer' | 'no_preference' | 'ach_credit' | 'boleto' | 'check' | 'sepa_credit' | 'cash',is_not?:'bank_transfer' | 'no_preference' | 'ach_credit' | 'boleto' | 'check' | 'sepa_credit' | 'cash',not_in?:string},remaining_billing_cycles?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,is_present?:'true' | 'false',lt?:string,lte?:string},status?:{in?:string,is?:'in_trial' | 'paused' | 'future' | 'active' | 'cancelled' | 'non_renewing',is_not?:'in_trial' | 'paused' | 'future' | 'active' | 'cancelled' | 'non_renewing',not_in?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string}};
    }
    export interface InvoicesResponse {  
       export:Export;
    }
    export interface InvoicesInputParam {
       
      /**
        * @description optional, string filter  
Payment owner of an invoice.  
**Supported operators :** is, is_not, starts_with, in, not_in  

**Example →** *payment_owner\[is\] &#x3D; &quot;payment_customer&quot;*

        */
       
      payment_owner?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Parameters for invoice

        */
       
      invoice?:{amount_adjusted?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},amount_due?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},amount_paid?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},channel?:{in?:string,is?:'app_store' | 'web' | 'play_store',is_not?:'app_store' | 'web' | 'play_store',not_in?:string},credits_applied?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},customer_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},date?:{after?:string,before?:string,between?:string,on?:string},dunning_status?:{in?:string,is?:'in_progress' | 'stopped' | 'success' | 'exhausted',is_not?:'in_progress' | 'stopped' | 'success' | 'exhausted',is_present?:'true' | 'false',not_in?:string},id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},paid_at?:{after?:string,before?:string,between?:string,on?:string},price_type?:{in?:string,is?:'tax_exclusive' | 'tax_inclusive',is_not?:'tax_exclusive' | 'tax_inclusive',not_in?:string},recurring?:{is?:'true' | 'false'},status?:{in?:string,is?:'pending' | 'paid' | 'voided' | 'not_paid' | 'posted' | 'payment_due',is_not?:'pending' | 'paid' | 'voided' | 'not_paid' | 'posted' | 'payment_due',not_in?:string},subscription_id?:{in?:string,is?:string,is_not?:string,is_present?:'true' | 'false',not_in?:string,starts_with?:string},total?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string}};
    }
    export interface CreditNotesResponse {  
       export:Export;
    }
    export interface CreditNotesInputParam {
       
      /**
        * @description Parameters for credit_note

        */
       
      credit_note?:{amount_allocated?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},amount_available?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},amount_refunded?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},channel?:{in?:string,is?:'app_store' | 'web' | 'play_store',is_not?:'app_store' | 'web' | 'play_store',not_in?:string},create_reason_code?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},customer_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},date?:{after?:string,before?:string,between?:string,on?:string},id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},price_type?:{in?:string,is?:'tax_exclusive' | 'tax_inclusive',is_not?:'tax_exclusive' | 'tax_inclusive',not_in?:string},reason_code?:{in?:string,is?:'other' | 'product_unsatisfactory' | 'subscription_pause' | 'order_cancellation' | 'service_unsatisfactory' | 'subscription_cancellation' | 'chargeback' | 'order_change' | 'write_off' | 'waiver' | 'subscription_change' | 'fraudulent',is_not?:'other' | 'product_unsatisfactory' | 'subscription_pause' | 'order_cancellation' | 'service_unsatisfactory' | 'subscription_cancellation' | 'chargeback' | 'order_change' | 'write_off' | 'waiver' | 'subscription_change' | 'fraudulent',not_in?:string},reference_invoice_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},status?:{in?:string,is?:'refund_due' | 'adjusted' | 'refunded' | 'voided',is_not?:'refund_due' | 'adjusted' | 'refunded' | 'voided',not_in?:string},subscription_id?:{in?:string,is?:string,is_not?:string,is_present?:'true' | 'false',not_in?:string,starts_with?:string},total?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},type?:{in?:string,is?:'adjustment' | 'refundable',is_not?:'adjustment' | 'refundable',not_in?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string},voided_at?:{after?:string,before?:string,between?:string,on?:string}};
    }
    export interface TransactionsResponse {  
       export:Export;
    }
    export interface TransactionsInputParam {
       
      /**
        * @description Parameters for transaction

        */
       
      transaction?:{amount?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},amount_capturable?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},customer_id?:{in?:string,is?:string,is_not?:string,is_present?:'true' | 'false',not_in?:string,starts_with?:string},date?:{after?:string,before?:string,between?:string,on?:string},gateway?:{in?:string,is?:'bluepay' | 'beanstream' | 'elavon' | 'orbital' | 'hdfc' | 'nmi' | 'moneris' | 'metrics_global' | 'ebanx' | 'pin' | 'stripe' | 'quickbooks' | 'razorpay' | 'eway_rapid' | 'balanced_payments' | 'ecentric' | 'wepay' | 'chargebee_payments' | 'bank_of_america' | 'braintree' | 'first_data_global' | 'paypal_express_checkout' | 'ingenico_direct' | 'moneris_us' | 'exact' | 'migs' | 'checkout_com' | 'not_applicable' | 'paypal_pro' | 'ogone' | 'eway' | 'gocardless' | 'global_payments' | 'paymill' | 'adyen' | 'paypal' | 'chargebee' | 'authorize_net' | 'tco' | 'bluesnap' | 'windcave' | 'paypal_payflow_pro' | 'amazon_payments' | 'mollie' | 'cybersource' | 'wirecard' | 'sage_pay' | 'vantiv' | 'worldpay' | 'pay_com',is_not?:'bluepay' | 'beanstream' | 'elavon' | 'orbital' | 'hdfc' | 'nmi' | 'moneris' | 'metrics_global' | 'ebanx' | 'pin' | 'stripe' | 'quickbooks' | 'razorpay' | 'eway_rapid' | 'balanced_payments' | 'ecentric' | 'wepay' | 'chargebee_payments' | 'bank_of_america' | 'braintree' | 'first_data_global' | 'paypal_express_checkout' | 'ingenico_direct' | 'moneris_us' | 'exact' | 'migs' | 'checkout_com' | 'not_applicable' | 'paypal_pro' | 'ogone' | 'eway' | 'gocardless' | 'global_payments' | 'paymill' | 'adyen' | 'paypal' | 'chargebee' | 'authorize_net' | 'tco' | 'bluesnap' | 'windcave' | 'paypal_payflow_pro' | 'amazon_payments' | 'mollie' | 'cybersource' | 'wirecard' | 'sage_pay' | 'vantiv' | 'worldpay' | 'pay_com',not_in?:string},gateway_account_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},id_at_gateway?:{is?:string,is_not?:string,starts_with?:string},payment_method?:{in?:string,is?:'other' | 'netbanking_emandates' | 'ach_credit' | 'dotpay' | 'boleto' | 'direct_debit' | 'chargeback' | 'wechat_pay' | 'pay_to' | 'cash' | 'giropay' | 'bank_transfer' | 'alipay' | 'ideal' | 'sepa_instant_transfer' | 'google_pay' | 'custom' | 'unionpay' | 'check' | 'faster_payments' | 'sofort' | 'amazon_payments' | 'upi' | 'venmo' | 'apple_pay' | 'bancontact' | 'paypal_express_checkout' | 'sepa_credit' | 'card',is_not?:'other' | 'netbanking_emandates' | 'ach_credit' | 'dotpay' | 'boleto' | 'direct_debit' | 'chargeback' | 'wechat_pay' | 'pay_to' | 'cash' | 'giropay' | 'bank_transfer' | 'alipay' | 'ideal' | 'sepa_instant_transfer' | 'google_pay' | 'custom' | 'unionpay' | 'check' | 'faster_payments' | 'sofort' | 'amazon_payments' | 'upi' | 'venmo' | 'apple_pay' | 'bancontact' | 'paypal_express_checkout' | 'sepa_credit' | 'card',not_in?:string},payment_source_id?:{in?:string,is?:string,is_not?:string,is_present?:'true' | 'false',not_in?:string,starts_with?:string},reference_number?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string},status?:{in?:string,is?:'in_progress' | 'success' | 'failure' | 'voided' | 'timeout' | 'needs_attention',is_not?:'in_progress' | 'success' | 'failure' | 'voided' | 'timeout' | 'needs_attention',not_in?:string},subscription_id?:{in?:string,is?:string,is_not?:string,is_present?:'true' | 'false',not_in?:string,starts_with?:string},type?:{in?:string,is?:'authorization' | 'payment_reversal' | 'payment' | 'refund',is_not?:'authorization' | 'payment_reversal' | 'payment' | 'refund',not_in?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string}};
    }
    export interface OrdersResponse {  
       export:Export;
    }
    export interface OrdersInputParam {
       
      /**
        * @description optional, in cents filter  
Total amount charged for the order.  
**Supported operators :** is, is_not, lt, lte, gt, gte, between  

**Example →** *total\[is\] &#x3D; &quot;1394532759&quot;*

        */
       
      total?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
       
      /**
        * @description Parameters for order

        */
       
      order?:{amount_paid?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},cancelled_at?:{after?:string,before?:string,between?:string,on?:string},customer_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},delivered_at?:{after?:string,before?:string,between?:string,on?:string},id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},is_resent?:{is?:'true' | 'false'},order_date?:{after?:string,before?:string,between?:string,on?:string},original_order_id?:{is?:string,is_not?:string,starts_with?:string},price_type?:{in?:string,is?:'tax_exclusive' | 'tax_inclusive',is_not?:'tax_exclusive' | 'tax_inclusive',not_in?:string},refundable_credits?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},refundable_credits_issued?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},resent_status?:{in?:string,is?:'fully_resent' | 'partially_resent',is_not?:'fully_resent' | 'partially_resent',not_in?:string},shipped_at?:{after?:string,before?:string,between?:string,on?:string},shipping_date?:{after?:string,before?:string,between?:string,on?:string},status?:{in?:string,is?:'new' | 'partially_delivered' | 'queued' | 'delivered' | 'on_hold' | 'shipped' | 'processing' | 'cancelled' | 'voided' | 'complete' | 'awaiting_shipment' | 'returned',is_not?:'new' | 'partially_delivered' | 'queued' | 'delivered' | 'on_hold' | 'shipped' | 'processing' | 'cancelled' | 'voided' | 'complete' | 'awaiting_shipment' | 'returned',not_in?:string},subscription_id?:{in?:string,is?:string,is_not?:string,is_present?:'true' | 'false',not_in?:string,starts_with?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string}};
    }
    export interface ItemFamiliesResponse {  
       export:Export;
    }
    export interface ItemFamiliesInputParam {
       
      /**
        * @description Parameters for item_family

        */
       
      item_family?:{id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},name?:{is?:string,is_not?:string,starts_with?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string}};
    }
    export interface ItemsResponse {  
       export:Export;
    }
    export interface ItemsInputParam {
       
      /**
        * @description Parameters for item

        */
       
      item?:{channel?:{in?:string,is?:'app_store' | 'web' | 'play_store',is_not?:'app_store' | 'web' | 'play_store',not_in?:string},enabled_for_checkout?:{is?:'true' | 'false'},enabled_in_portal?:{is?:'true' | 'false'},id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},is_giftable?:{is?:'true' | 'false'},item_applicability?:{in?:string,is?:'all' | 'restricted',is_not?:'all' | 'restricted',not_in?:string},item_family_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},metered?:{is?:'true' | 'false'},name?:{is?:string,is_not?:string,starts_with?:string},status?:{in?:string,is?:'archived' | 'deleted' | 'active',is_not?:'archived' | 'deleted' | 'active',not_in?:string},type?:{in?:string,is?:'charge' | 'addon' | 'plan',is_not?:'charge' | 'addon' | 'plan',not_in?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string},usage_calculation?:{in?:string,is?:'max_usage' | 'sum_of_usages' | 'last_usage',is_not?:'max_usage' | 'sum_of_usages' | 'last_usage',not_in?:string}};
    }
    export interface ItemPricesResponse {  
       export:Export;
    }
    export interface ItemPricesInputParam {
       
      /**
        * @description optional, string filter  
Filter item prices based on &#x60;item_family_id&#x60;.  
**Supported operators :** is, is_not, starts_with, in, not_in  

**Example →** *item_family_id\[is\] &#x3D; &quot;Acme&quot;*

        */
       
      item_family_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description optional, enumerated string filter  
Filter item prices based on &#x60;item_type&#x60;. Possible values are : plan, addon, charge.  
**Supported operators :** is, is_not, in, not_in  

**Example →** *item_type\[is_not\] &#x3D; &quot;plan&quot;*

        */
       
      item_type?:{in?:string,is?:'charge' | 'addon' | 'plan',is_not?:'charge' | 'addon' | 'plan',not_in?:string};
       
      /**
        * @description optional, string filter  
Filter item prices based on their &#x60;currency_code&#x60;.  
**Supported operators :** is, is_not, starts_with, in, not_in  

**Example →** *currency_code\[is\] &#x3D; &quot;USD&quot;*

        */
       
      currency_code?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Parameters for item_price

        */
       
      item_price?:{channel?:{in?:string,is?:'app_store' | 'web' | 'play_store',is_not?:'app_store' | 'web' | 'play_store',not_in?:string},id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},item_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},name?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},period?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},period_unit?:{in?:string,is?:'week' | 'month' | 'year' | 'day',is_not?:'week' | 'month' | 'year' | 'day',not_in?:string},pricing_model?:{in?:string,is?:'volume' | 'per_unit' | 'tiered' | 'flat_fee' | 'stairstep',is_not?:'volume' | 'per_unit' | 'tiered' | 'flat_fee' | 'stairstep',not_in?:string},status?:{in?:string,is?:'archived' | 'deleted' | 'active',is_not?:'archived' | 'deleted' | 'active',not_in?:string},trial_period?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string},trial_period_unit?:{in?:string,is?:'month' | 'day',is_not?:'month' | 'day',not_in?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string}};
    }
    export interface AttachedItemsResponse {  
       export:Export;
    }
    export interface AttachedItemsInputParam {
       
      /**
        * @description optional, enumerated string filter  
To filter based on the type of of the attached item. Possible values are : &#x60;addon&#x60;, &#x60;charge&#x60;. Possible values are : plan, addon, charge.  
**Supported operators :** is, is_not, in, not_in  

**Example →** *item_type\[is_not\] &#x3D; &quot;plan&quot;*

        */
       
      item_type?:{in?:string,is?:'charge' | 'addon' | 'plan',is_not?:'charge' | 'addon' | 'plan',not_in?:string};
       
      /**
        * @description Parameters for attached_item

        */
       
      attached_item?:{charge_on_event?:{in?:string,is?:'subscription_creation' | 'subscription_activation' | 'subscription_trial_start' | 'contract_termination' | 'plan_activation' | 'on_demand',is_not?:'subscription_creation' | 'subscription_activation' | 'subscription_trial_start' | 'contract_termination' | 'plan_activation' | 'on_demand',not_in?:string},id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},item_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},parent_item_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},type?:{in?:string,is?:'optional' | 'mandatory' | 'recommended',is_not?:'optional' | 'mandatory' | 'recommended',not_in?:string},updated_at?:{after?:string,before?:string,between?:string,on?:string}};
    }
    export interface DifferentialPricesResponse {  
       export:Export;
    }
    export interface DifferentialPricesInputParam {
       
      /**
        * @description optional, string filter  
Item Id of Addon / Charge item price for which differential pricing is applied to.  
**Supported operators :** is, is_not, starts_with, in, not_in  

**Example →** *item_id\[is\] &#x3D; &quot;day-pass&quot;*

        */
       
      item_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Parameters for differential_price

        */
       
      differential_price?:{id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},item_price_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string},parent_item_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string}};
    }
    export interface Download {  
         /**
          * @description The URL at which the file is available for download.

          */
       
      download_url:string;
       
         /**
          * @description The time until which the &#x60;download_url&#x60; is valid.

          */
       
      valid_till:number;
       
         /**
          * @description The [media type](https://en.wikipedia.org/wiki/Media_type) of the file.

          */
       
      mime_type?:string;
    }
  }
}