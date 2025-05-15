///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface Invoice {
    

    id:string;

    po_number?:string;

    customer_id:string;

    subscription_id?:string;

    recurring:boolean;

    status:'paid' | 'posted' | 'payment_due' | 'not_paid' | 'voided' | 'pending';

    vat_number?:string;

    price_type:PriceType;

    date?:number;

    due_date?:number;

    net_term_days?:number;

    exchange_rate?:number;

    currency_code:string;

    total?:number;

    amount_paid?:number;

    amount_adjusted?:number;

    write_off_amount?:number;

    credits_applied?:number;

    amount_due?:number;

    paid_at?:number;

    dunning_status?:'in_progress' | 'exhausted' | 'stopped' | 'success';

    next_retry_at?:number;

    voided_at?:number;

    resource_version?:number;

    updated_at?:number;

    sub_total:number;

    sub_total_in_local_currency?:number;

    total_in_local_currency?:number;

    local_currency_code?:string;

    tax:number;

    local_currency_exchange_rate?:number;

    first_invoice?:boolean;

    new_sales_amount?:number;

    has_advance_charges?:boolean;

    term_finalized:boolean;

    is_gifted:boolean;

    generated_at?:number;

    expected_payment_date?:number;

    amount_to_collect?:number;

    round_off_amount?:number;

    line_items?:Invoice.LineItem[];

    discounts?:Invoice.Discount[];

    line_item_discounts?:Invoice.LineItemDiscount[];

    taxes?:Invoice.Tax[];

    line_item_taxes?:Invoice.LineItemTax[];

    line_item_credits?:Invoice.LineItemCredit[];

    line_item_tiers?:Invoice.LineItemTier[];

    linked_payments?:Invoice.LinkedPayment[];

    dunning_attempts?:Invoice.DunningAttempt[];

    applied_credits?:Invoice.AppliedCredit[];

    adjustment_credit_notes?:Invoice.AdjustmentCreditNote[];

    issued_credit_notes?:Invoice.IssuedCreditNote[];

    linked_orders?:Invoice.LinkedOrder[];

    notes?:Invoice.Note[];

    shipping_address?:Invoice.ShippingAddress;

    statement_descriptor?:Invoice.StatementDescriptor;

    billing_address?:Invoice.BillingAddress;

    einvoice?:Invoice.Einvoice;

    payment_owner?:string;

    void_reason_code?:string;

    deleted:boolean;

    tax_category?:string;

    vat_number_prefix?:string;

    channel?:Channel;

    business_entity_id?:string;

    site_details_at_creation?:Invoice.SiteDetailsAtCreation;

    tax_origin?:Invoice.TaxOrigin;

    line_item_addresses?:Invoice.LineItemAddress[];

  }
  export namespace Invoice {
    export class InvoiceResource {  
      create(input?:CreateInputParam):ChargebeeRequest<CreateResponse>;
       
      create_for_charge_items_and_charges(input:CreateForChargeItemsAndChargesInputParam):ChargebeeRequest<CreateForChargeItemsAndChargesResponse>;
       
      charge(input:ChargeInputParam):ChargebeeRequest<ChargeResponse>;
       
      charge_addon(input:ChargeAddonInputParam):ChargebeeRequest<ChargeAddonResponse>;
       
      create_for_charge_item(input:CreateForChargeItemInputParam):ChargebeeRequest<CreateForChargeItemResponse>;
       
      stop_dunning(invoice_id:string, input?:StopDunningInputParam):ChargebeeRequest<StopDunningResponse>;
       
      import_invoice(input:ImportInvoiceInputParam):ChargebeeRequest<ImportInvoiceResponse>;
       
      apply_payments(invoice_id:string, input?:ApplyPaymentsInputParam):ChargebeeRequest<ApplyPaymentsResponse>;
       
      sync_usages(invoice_id:string):ChargebeeRequest<SyncUsagesResponse>;
       
      delete_line_items(invoice_id:string, input?:DeleteLineItemsInputParam):ChargebeeRequest<DeleteLineItemsResponse>;
       
      apply_credits(invoice_id:string, input?:ApplyCreditsInputParam):ChargebeeRequest<ApplyCreditsResponse>;
       
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
       
      invoices_for_customer(customer_id:string, input?:InvoicesForCustomerInputParam):ChargebeeRequest<InvoicesForCustomerResponse>;
       
      invoices_for_subscription(subscription_id:string, input?:InvoicesForSubscriptionInputParam):ChargebeeRequest<InvoicesForSubscriptionResponse>;
       
      retrieve(invoice_id:string, input?:RetrieveInputParam):ChargebeeRequest<RetrieveResponse>;
       
      pdf(invoice_id:string, input?:PdfInputParam):ChargebeeRequest<PdfResponse>;
       
      download_einvoice(invoice_id:string):ChargebeeRequest<DownloadEinvoiceResponse>;
       
      list_payment_reference_numbers(input?:ListPaymentReferenceNumbersInputParam):ChargebeeRequest<ListPaymentReferenceNumbersResponse>;
       
      add_charge(invoice_id:string, input:AddChargeInputParam):ChargebeeRequest<AddChargeResponse>;
       
      add_addon_charge(invoice_id:string, input:AddAddonChargeInputParam):ChargebeeRequest<AddAddonChargeResponse>;
       
      add_charge_item(invoice_id:string, input:AddChargeItemInputParam):ChargebeeRequest<AddChargeItemResponse>;
       
      close(invoice_id:string, input?:CloseInputParam):ChargebeeRequest<CloseResponse>;
       
      collect_payment(invoice_id:string, input?:CollectPaymentInputParam):ChargebeeRequest<CollectPaymentResponse>;
       
      record_payment(invoice_id:string, input:RecordPaymentInputParam):ChargebeeRequest<RecordPaymentResponse>;
       
      record_tax_withheld(invoice_id:string, input:RecordTaxWithheldInputParam):ChargebeeRequest<RecordTaxWithheldResponse>;
       
      remove_tax_withheld(invoice_id:string, input:RemoveTaxWithheldInputParam):ChargebeeRequest<RemoveTaxWithheldResponse>;
       
      refund(invoice_id:string, input?:RefundInputParam):ChargebeeRequest<RefundResponse>;
       
      record_refund(invoice_id:string, input:RecordRefundInputParam):ChargebeeRequest<RecordRefundResponse>;
       
      remove_payment(invoice_id:string, input:RemovePaymentInputParam):ChargebeeRequest<RemovePaymentResponse>;
       
      remove_credit_note(invoice_id:string, input:RemoveCreditNoteInputParam):ChargebeeRequest<RemoveCreditNoteResponse>;
       
      void_invoice(invoice_id:string, input?:VoidInvoiceInputParam):ChargebeeRequest<VoidInvoiceResponse>;
       
      write_off(invoice_id:string, input?:WriteOffInputParam):ChargebeeRequest<WriteOffResponse>;
       
      delete(invoice_id:string, input?:DeleteInputParam):ChargebeeRequest<DeleteResponse>;
       
      update_details(invoice_id:string, input?:UpdateDetailsInputParam):ChargebeeRequest<UpdateDetailsResponse>;
       
      apply_payment_schedule_scheme(invoice_id:string, input:ApplyPaymentScheduleSchemeInputParam):ChargebeeRequest<ApplyPaymentScheduleSchemeResponse>;
       
      payment_schedules(invoice_id:string):ChargebeeRequest<PaymentSchedulesResponse>;
       
      resend_einvoice(invoice_id:string):ChargebeeRequest<ResendEinvoiceResponse>;
       
      send_einvoice(invoice_id:string):ChargebeeRequest<SendEinvoiceResponse>;
    }
    export interface CreateResponse {  
       invoice:Invoice;
    }
    export interface CreateInputParam {
       
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      statement_descriptor?:{descriptor?:string};
       
      card?:{additional_information?:object,billing_addr1?:string,billing_addr2?:string,billing_city?:string,billing_country?:string,billing_state?:string,billing_state_code?:string,billing_zip?:string,cvv?:string,expiry_month?:number,expiry_year?:number,first_name?:string,gateway?:Gateway,gateway_account_id?:string,ip_address?:string,last_name?:string,number?:string,preferred_scheme?:'cartes_bancaires' | 'mastercard' | 'visa',tmp_token?:string};
       
      bank_account?:{account_holder_type?:AccountHolderType,account_number?:string,account_type?:AccountType,bank_code?:string,bank_name?:string,billing_address?:object,company?:string,echeck_type?:EcheckType,email?:string,first_name?:string,gateway_account_id?:string,iban?:string,issuing_country?:string,last_name?:string,phone?:string,routing_number?:string,swedish_identity_number?:string};
       
      payment_method?:{additional_information?:object,gateway?:Gateway,gateway_account_id?:string,issuing_country?:string,reference_id?:string,tmp_token?:string,type?:Type};
       
      payment_intent?:{additional_information?:object,gateway_account_id?:string,gw_payment_method_id?:string,gw_token?:string,id?:string,payment_method_type?:'card' | 'ideal' | 'sofort' | 'bancontact' | 'google_pay' | 'dotpay' | 'giropay' | 'apple_pay' | 'upi' | 'netbanking_emandates' | 'paypal_express_checkout' | 'direct_debit' | 'boleto' | 'venmo' | 'amazon_payments' | 'pay_to' | 'faster_payments' | 'sepa_instant_transfer' | 'klarna_pay_now' | 'online_banking_poland',reference_id?:string};
       
      addons?:{date_from?:number,date_to?:number,id?:string,quantity?:number,quantity_in_decimal?:string,unit_price?:number,unit_price_in_decimal?:string}[];
       
      charges?:{amount?:number,amount_in_decimal?:string,avalara_sale_type?:AvalaraSaleType,avalara_service_type?:number,avalara_tax_code?:string,avalara_transaction_type?:number,date_from?:number,date_to?:number,description?:string,hsn_code?:string,tax_profile_id?:string,taxable?:boolean,taxjar_product_code?:string}[];
       
      tax_providers_fields?:{field_id?:string,field_value?:string,provider_name?:string}[];
       
      notes_to_remove?:{entity_id?:string,entity_type?:EntityType}[];
       
      customer_id?:string;
       
      subscription_id?:string;
       
      currency_code?:string;
       
      invoice_date?:number;
       
      invoice_note?:string;
       
      remove_general_note?:boolean;
       
      po_number?:string;
       
      coupon?:string;
       
      coupon_ids?:string[];
       
      authorization_transaction_id?:string;
       
      payment_source_id?:string;
       
      auto_collection?:AutoCollection;
       
      token_id?:string;
       
      replace_primary_payment_source?:boolean;
       
      retain_payment_source?:boolean;
       
      payment_initiator?:PaymentInitiator;
    }
    export interface CreateForChargeItemsAndChargesResponse {  
       invoice:Invoice;
    }
    export interface CreateForChargeItemsAndChargesInputParam {
       
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      statement_descriptor?:{descriptor?:string};
       
      card?:{additional_information?:object,billing_addr1?:string,billing_addr2?:string,billing_city?:string,billing_country?:string,billing_state?:string,billing_state_code?:string,billing_zip?:string,cvv?:string,expiry_month?:number,expiry_year?:number,first_name?:string,gateway?:Gateway,gateway_account_id?:string,ip_address?:string,last_name?:string,number?:string,preferred_scheme?:'cartes_bancaires' | 'mastercard' | 'visa',tmp_token?:string};
       
      bank_account?:{account_holder_type?:AccountHolderType,account_number?:string,account_type?:AccountType,bank_code?:string,bank_name?:string,billing_address?:object,company?:string,echeck_type?:EcheckType,email?:string,first_name?:string,gateway_account_id?:string,iban?:string,issuing_country?:string,last_name?:string,phone?:string,routing_number?:string,swedish_identity_number?:string};
       
      payment_method?:{additional_information?:object,gateway?:Gateway,gateway_account_id?:string,issuing_country?:string,reference_id?:string,tmp_token?:string,type?:Type};
       
      payment_intent?:{additional_information?:object,gateway_account_id?:string,gw_payment_method_id?:string,gw_token?:string,id?:string,payment_method_type?:'card' | 'ideal' | 'sofort' | 'bancontact' | 'google_pay' | 'dotpay' | 'giropay' | 'apple_pay' | 'upi' | 'netbanking_emandates' | 'paypal_express_checkout' | 'direct_debit' | 'boleto' | 'venmo' | 'amazon_payments' | 'pay_to' | 'faster_payments' | 'sepa_instant_transfer' | 'klarna_pay_now' | 'online_banking_poland',reference_id?:string};
       
      item_prices?:{date_from?:number,date_to?:number,item_price_id?:string,quantity?:number,quantity_in_decimal?:string,unit_price?:number,unit_price_in_decimal?:string}[];
       
      item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,item_price_id?:string,package_size?:number,price?:number,price_in_decimal?:string,pricing_type?:PricingType,starting_unit?:number,starting_unit_in_decimal?:string}[];
       
      charges?:{amount?:number,amount_in_decimal?:string,avalara_sale_type?:AvalaraSaleType,avalara_service_type?:number,avalara_tax_code?:string,avalara_transaction_type?:number,date_from?:number,date_to?:number,description?:string,hsn_code?:string,tax_profile_id?:string,taxable?:boolean,taxjar_product_code?:string}[];
       
      notes_to_remove?:{entity_id?:string,entity_type?:EntityType}[];
       
      tax_providers_fields?:{field_id?:string,field_value?:string,provider_name?:string}[];
       
      discounts:{amount?:number,apply_on:ApplyOn,item_price_id?:string,percentage?:number}[];
       
      customer_id?:string;
       
      subscription_id?:string;
       
      currency_code?:string;
       
      invoice_note?:string;
       
      remove_general_note?:boolean;
       
      po_number?:string;
       
      coupon?:string;
       
      coupon_ids?:string[];
       
      authorization_transaction_id?:string;
       
      payment_source_id?:string;
       
      auto_collection?:AutoCollection;
       
      invoice_date?:number;
       
      token_id?:string;
       
      replace_primary_payment_source?:boolean;
       
      retain_payment_source?:boolean;
       
      payment_initiator?:PaymentInitiator;
    }
    export interface ChargeResponse {  
       invoice:Invoice;
    }
    export interface ChargeInputParam {
       
      tax_providers_fields?:{field_id?:string,field_value?:string,provider_name?:string}[];
       
      customer_id?:string;
       
      subscription_id?:string;
       
      currency_code?:string;
       
      amount?:number;
       
      amount_in_decimal?:string;
       
      description:string;
       
      date_from?:number;
       
      date_to?:number;
       
      coupon_ids?:string[];
       
      coupon?:string;
       
      avalara_sale_type?:AvalaraSaleType;
       
      avalara_transaction_type?:number;
       
      avalara_service_type?:number;
       
      po_number?:string;
       
      invoice_date?:number;
       
      payment_source_id?:string;
       
      payment_initiator?:PaymentInitiator;
    }
    export interface ChargeAddonResponse {  
       invoice:Invoice;
    }
    export interface ChargeAddonInputParam {
       
      customer_id?:string;
       
      subscription_id?:string;
       
      addon_id:string;
       
      addon_quantity?:number;
       
      addon_unit_price?:number;
       
      addon_quantity_in_decimal?:string;
       
      addon_unit_price_in_decimal?:string;
       
      date_from?:number;
       
      date_to?:number;
       
      coupon_ids?:string[];
       
      coupon?:string;
       
      po_number?:string;
       
      invoice_date?:number;
       
      payment_source_id?:string;
       
      payment_initiator?:PaymentInitiator;
    }
    export interface CreateForChargeItemResponse {  
       invoice:Invoice;
    }
    export interface CreateForChargeItemInputParam {
       
      item_price:{date_from?:number,date_to?:number,item_price_id:string,quantity?:number,quantity_in_decimal?:string,unit_price?:number,unit_price_in_decimal?:string};
       
      item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,package_size?:number,price?:number,price_in_decimal?:string,pricing_type?:PricingType,starting_unit?:number,starting_unit_in_decimal?:string}[];
       
      customer_id?:string;
       
      subscription_id?:string;
       
      po_number?:string;
       
      coupon?:string;
       
      payment_source_id?:string;
       
      payment_initiator?:PaymentInitiator;
       
      invoice_date?:number;
    }
    export interface StopDunningResponse {  
       invoice:Invoice;
    }
    export interface StopDunningInputParam {
       
      comment?:string;
    }
    export interface ImportInvoiceResponse {  
       invoice:Invoice;
       
       credit_note?:CreditNote;
    }
    export interface ImportInvoiceInputParam {
       
      credit_note?:{id?:string};
       
      billing_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      line_items:{amount?:number,amount_in_decimal?:string,created_at?:number,date_from?:number,date_to?:number,description:string,entity_id?:string,entity_type?:'adhoc' | 'plan_item_price' | 'addon_item_price' | 'charge_item_price',id?:string,item_level_discount1_amount?:number,item_level_discount1_entity_id?:string,item_level_discount2_amount?:number,item_level_discount2_entity_id?:string,quantity?:number,quantity_in_decimal?:string,subscription_id?:string,tax10_amount?:number,tax10_name?:string,tax1_amount?:number,tax1_name?:string,tax2_amount?:number,tax2_name?:string,tax3_amount?:number,tax3_name?:string,tax4_amount?:number,tax4_name?:string,tax5_amount?:number,tax5_name?:string,tax6_amount?:number,tax6_name?:string,tax7_amount?:number,tax7_name?:string,tax8_amount?:number,tax8_name?:string,tax9_amount?:number,tax9_name?:string,unit_amount?:number,unit_amount_in_decimal?:string}[];
       
      payment_reference_numbers:{id?:string,number:string,type:'kid' | 'ocr' | 'frn' | 'fik' | 'swiss_reference'}[];
       
      line_item_tiers:{ending_unit?:number,ending_unit_in_decimal?:string,line_item_id:string,quantity_used?:number,quantity_used_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string,unit_amount?:number,unit_amount_in_decimal?:string}[];
       
      discounts:{amount:number,description?:string,entity_id?:string,entity_type:'item_level_coupon' | 'document_level_coupon' | 'promotional_credits' | 'item_level_discount' | 'document_level_discount'}[];
       
      taxes:{amount?:number,description?:string,juris_code?:string,juris_name?:string,juris_type?:'country' | 'federal' | 'state' | 'county' | 'city' | 'special' | 'unincorporated' | 'other',name:string,rate:number}[];
       
      payments:{amount:number,date?:number,payment_method:PaymentMethod,reference_number?:string}[];
       
      notes?:{entity_id?:string,entity_type?:'coupon' | 'plan_item_price' | 'addon_item_price' | 'charge_item_price',note?:string}[];
       
      line_item_addresses?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,line_item_id?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string}[];
       
      id:string;
       
      currency_code?:string;
       
      customer_id?:string;
       
      subscription_id?:string;
       
      po_number?:string;
       
      price_type?:PriceType;
       
      tax_override_reason?:TaxOverrideReason;
       
      vat_number?:string;
       
      vat_number_prefix?:string;
       
      date:number;
       
      total:number;
       
      round_off?:number;
       
      status?:'paid' | 'posted' | 'payment_due' | 'not_paid' | 'voided' | 'pending';
       
      voided_at?:number;
       
      void_reason_code?:string;
       
      is_written_off?:boolean;
       
      write_off_amount?:number;
       
      write_off_date?:number;
       
      due_date?:number;
       
      net_term_days?:number;
       
      has_advance_charges?:boolean;
       
      use_for_proration?:boolean;
    }
    export interface ApplyPaymentsResponse {  
       invoice:Invoice;
    }
    export interface ApplyPaymentsInputParam {
       
      transactions?:{amount?:number,id?:string}[];
       
      comment?:string;
    }
    export interface SyncUsagesResponse {  
       invoice:Invoice;
    }
    
    export interface DeleteLineItemsResponse {  
       invoice:Invoice;
    }
    export interface DeleteLineItemsInputParam {
       
      line_items?:{id?:string}[];
    }
    export interface ApplyCreditsResponse {  
       invoice:Invoice;
    }
    export interface ApplyCreditsInputParam {
       
      credit_notes?:{id?:string}[];
       
      comment?:string;
    }
    export interface ListResponse {  
       list:{invoice:Invoice}[];
       
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
        * @description Parameters for einvoice

        */
        
      einvoice?:{status?:{in?:string,is?:'scheduled' | 'skipped' | 'in_progress' | 'success' | 'failed' | 'registered',is_not?:'scheduled' | 'skipped' | 'in_progress' | 'success' | 'failed' | 'registered',not_in?:string}};
       
      paid_on_after?:number;
       
      /**
        * @description Indicates whether to include deleted objects in the list. The deleted objects have the attribute \&#x60;deleted\&#x60; as \&#x60;true\&#x60;.

        */
        
      include_deleted?:boolean;
       
      hide_zero_line_item?:boolean;
       
      show_zero_tax_lines?:boolean;
       
      show_exempted_tax_lines?:boolean;
       
      include_consolidated_invoices?:boolean;
       
      ignore_imported_invoice?:boolean;
       
      /**
        * @description The invoice number. Acts as a identifier for invoice and typically generated sequentially.

        */
        
      id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description To filter based on subscription_id.   
NOTE: Not to be used if *consolidated invoicing* is enabled.

        */
        
      subscription_id?:{in?:string,is?:string,is_not?:string,is_present?:'true' | 'false',not_in?:string,starts_with?:string};
       
      /**
        * @description The identifier of the customer this invoice belongs to.

        */
        
      customer_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Boolean indicating whether this invoice belongs to a subscription

        */
        
      recurring?:{is?:'true' | 'false'};
       
      /**
        * @description Current status of this invoice.

        */
        
      status?:{in?:string,is?:'paid' | 'posted' | 'payment_due' | 'not_paid' | 'voided' | 'pending',is_not?:'paid' | 'posted' | 'payment_due' | 'not_paid' | 'voided' | 'pending',not_in?:string};
       
      /**
        * @description The price type of the invoice.

        */
        
      price_type?:{in?:string,is?:'tax_exclusive' | 'tax_inclusive',is_not?:'tax_exclusive' | 'tax_inclusive',not_in?:string};
       
      /**
        * @description The document date displayed on the invoice PDF.

        */
        
      date?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description Timestamp indicating the date \&amp; time this invoice got paid.

        */
        
      paid_at?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description Invoiced amount displayed in cents; that is, a decimal point is not present between the whole number and the decimal part. For example, $499.99 is displayed as 49999, and so on.

        */
        
      total?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
       
      /**
        * @description Payments collected successfully for the invoice. This is the sum of [linked_payments[]](invoices#invoice_linked_payments)&#x60;.txn_amount&#x60; for all &#x60;linked_payments[]&#x60; that have &#x60;txn_status&#x60; as &#x60;success&#x60;.

        */
        
      amount_paid?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
       
      /**
        * @description Total adjustments made against this invoice.

        */
        
      amount_adjusted?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
       
      /**
        * @description Total credits applied against this invoice.

        */
        
      credits_applied?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
       
      /**
        * @description The unpaid amount that is due on the invoice. This is calculated as: [total](invoices#invoice_total) - [amount_paid](invoices#invoice_amount_paid) - sum of [applied_credits](invoices#invoice_applied_credits)&#x60;.applied_amount&#x60; - sum of [adjustment_credit_notes](invoices#invoice_adjustment_credit_notes)&#x60;.cn_total&#x60; - sum of [linked_taxes_withheld](invoices#invoice_linked_taxes_withheld)&#x60;.amount&#x60;.

        */
        
      amount_due?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
       
      /**
        * @description Current dunning status of the invoice.

        */
        
      dunning_status?:{in?:string,is?:'in_progress' | 'exhausted' | 'stopped' | 'success',is_not?:'in_progress' | 'exhausted' | 'stopped' | 'success',is_present?:'true' | 'false',not_in?:string};
       
      /**
        * @description Payment owner of an invoice

        */
        
      payment_owner?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description To filter based on &#x60;updated_at&#x60;. This attribute will be present only if the resource has been updated after 2016-09-28. It is advisable when using this filter, to pass the &#x60;sort_by&#x60; input parameter as &#x60;updated_at&#x60; for a faster response.

        */
        
      updated_at?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description The subscription channel this object originated from and is maintained in.

        */
        
      channel?:{in?:string,is?:'web' | 'app_store' | 'play_store',is_not?:'web' | 'app_store' | 'play_store',not_in?:string};
       
      /**
        * @description Timestamp indicating the date \&amp; time this invoice got voided.

        */
        
      voided_at?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description Reason code for voiding the invoice. Select from a list of reason codes set in the Chargebee app in **Settings \&gt; Configure Chargebee \&gt; Reason Codes \&gt; Invoices \&gt; Void invoice**. Must be passed if set as mandatory in the app. The codes are case-sensitive

        */
        
      void_reason_code?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      sort_by?:{asc?:'date' | 'updated_at',desc?:'date' | 'updated_at'};
    }
    export interface InvoicesForCustomerResponse {  
       list:{invoice:Invoice}[];
       
       next_offset?:string;
    }
    export interface InvoicesForCustomerInputParam {
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
    export interface InvoicesForSubscriptionResponse {  
       list:{invoice:Invoice}[];
       
       next_offset?:string;
    }
    export interface InvoicesForSubscriptionInputParam {
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
       invoice:Invoice;
    }
    export interface RetrieveInputParam {
       
      line_items_limit?:number;
       
      line_items_offset?:string;
    }
    export interface PdfResponse {  
       download:Download;
    }
    export interface PdfInputParam {
       
      disposition_type?:DispositionType;
    }
    export interface DownloadEinvoiceResponse {  
       downloads:Download[];
    }
    
    export interface ListPaymentReferenceNumbersResponse {  
       list:{payment_reference_number:PaymentReferenceNumber}[];
       
       next_offset?:string;
    }
    export interface ListPaymentReferenceNumbersInputParam {
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
        * @description Parameters for payment_reference_number

        */
        
      payment_reference_number?:{number?:{in?:string,is?:string}};
       
      /**
        * @description An unique identifier for the invoice serves that links the invoice to the corresponding payment reference number (PRN).  
**Note**: To retrieve the PRN, the API requires either the invoice ID or the payment reference number to be provided by the user. If both values are missing, an error will be returned by the API.

        */
        
      id?:{in?:string,is?:string};
    }
    export interface AddChargeResponse {  
       invoice:Invoice;
    }
    export interface AddChargeInputParam {
       
      line_item?:{date_from?:number,date_to?:number};
       
      amount:number;
       
      description:string;
       
      avalara_sale_type?:AvalaraSaleType;
       
      avalara_transaction_type?:number;
       
      avalara_service_type?:number;
       
      avalara_tax_code?:string;
       
      hsn_code?:string;
       
      taxjar_product_code?:string;
       
      comment?:string;
       
      subscription_id?:string;
    }
    export interface AddAddonChargeResponse {  
       invoice:Invoice;
    }
    export interface AddAddonChargeInputParam {
       
      line_item?:{date_from?:number,date_to?:number};
       
      addon_id:string;
       
      addon_quantity?:number;
       
      addon_unit_price?:number;
       
      addon_quantity_in_decimal?:string;
       
      addon_unit_price_in_decimal?:string;
       
      comment?:string;
       
      subscription_id?:string;
    }
    export interface AddChargeItemResponse {  
       invoice:Invoice;
    }
    export interface AddChargeItemInputParam {
       
      item_price:{date_from?:number,date_to?:number,item_price_id:string,quantity?:number,quantity_in_decimal?:string,unit_price?:number,unit_price_in_decimal?:string};
       
      item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,package_size?:number,price?:number,price_in_decimal?:string,pricing_type?:PricingType,starting_unit?:number,starting_unit_in_decimal?:string}[];
       
      comment?:string;
       
      subscription_id?:string;
    }
    export interface CloseResponse {  
       invoice:Invoice;
    }
    export interface CloseInputParam {
       
      notes_to_remove?:{entity_id?:string,entity_type?:EntityType}[];
       
      comment?:string;
       
      invoice_note?:string;
       
      remove_general_note?:boolean;
       
      invoice_date?:number;
    }
    export interface CollectPaymentResponse {  
       invoice:Invoice;
       
       transaction:Transaction;
    }
    export interface CollectPaymentInputParam {
       
      amount?:number;
       
      authorization_transaction_id?:string;
       
      payment_source_id?:string;
       
      comment?:string;
       
      payment_initiator?:PaymentInitiator;
    }
    export interface RecordPaymentResponse {  
       invoice:Invoice;
       
       transaction:Transaction;
    }
    export interface RecordPaymentInputParam {
       
      transaction:{amount?:number,custom_payment_method_id?:string,date?:number,error_code?:string,error_text?:string,id_at_gateway?:string,payment_method:PaymentMethod,reference_number?:string,status?:'success' | 'failure' | 'late_failure'};
       
      comment?:string;
    }
    export interface RecordTaxWithheldResponse {  
       invoice:Invoice;
    }
    export interface RecordTaxWithheldInputParam {
       
      tax_withheld:{amount:number,date?:number,description?:string,reference_number?:string};
    }
    export interface RemoveTaxWithheldResponse {  
       invoice:Invoice;
    }
    export interface RemoveTaxWithheldInputParam {
       
      tax_withheld:{id:string};
    }
    export interface RefundResponse {  
       invoice:Invoice;
       
       transaction:Transaction;
       
       credit_note?:CreditNote;
    }
    export interface RefundInputParam {
       
      credit_note?:{create_reason_code?:string,reason_code?:'product_unsatisfactory' | 'service_unsatisfactory' | 'order_change' | 'order_cancellation' | 'waiver' | 'other'};
       
      refund_amount?:number;
       
      comment?:string;
       
      customer_notes?:string;
    }
    export interface RecordRefundResponse {  
       invoice:Invoice;
       
       transaction?:Transaction;
       
       credit_note?:CreditNote;
    }
    export interface RecordRefundInputParam {
       
      transaction:{amount?:number,custom_payment_method_id?:string,date:number,payment_method:PaymentMethod,reference_number?:string};
       
      credit_note?:{create_reason_code?:string,reason_code?:'chargeback' | 'product_unsatisfactory' | 'service_unsatisfactory' | 'order_change' | 'order_cancellation' | 'waiver' | 'other'};
       
      comment?:string;
       
      customer_notes?:string;
    }
    export interface RemovePaymentResponse {  
       invoice:Invoice;
       
       transaction:Transaction;
    }
    export interface RemovePaymentInputParam {
       
      transaction:{id:string};
    }
    export interface RemoveCreditNoteResponse {  
       invoice:Invoice;
       
       credit_note:CreditNote;
    }
    export interface RemoveCreditNoteInputParam {
       
      credit_note:{id:string};
    }
    export interface VoidInvoiceResponse {  
       invoice:Invoice;
       
       credit_note?:CreditNote;
    }
    export interface VoidInvoiceInputParam {
       
      comment?:string;
       
      void_reason_code?:string;
    }
    export interface WriteOffResponse {  
       invoice:Invoice;
       
       credit_note:CreditNote;
    }
    export interface WriteOffInputParam {
       
      comment?:string;
    }
    export interface DeleteResponse {  
       invoice:Invoice;
    }
    export interface DeleteInputParam {
       
      comment?:string;
    }
    export interface UpdateDetailsResponse {  
       invoice:Invoice;
    }
    export interface UpdateDetailsInputParam {
       
      billing_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      statement_descriptor?:{descriptor?:string};
       
      vat_number?:string;
       
      vat_number_prefix?:string;
       
      po_number?:string;
       
      comment?:string;
    }
    export interface ApplyPaymentScheduleSchemeResponse {  
       invoice:Invoice;
    }
    export interface ApplyPaymentScheduleSchemeInputParam {
       
      scheme_id:string;
       
      amount?:number;
    }
    export interface PaymentSchedulesResponse {  
       payment_schedules:PaymentSchedule[];
    }
    
    export interface ResendEinvoiceResponse {  
       invoice:Invoice;
    }
    
    export interface SendEinvoiceResponse {  
       invoice:Invoice;
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
       
      metered?:boolean;
       
      percentage?:string;
       
      reference_line_item_id?:string;
       
      description:string;
       
      entity_description?:string;
       
      entity_type:'adhoc' | 'plan_item_price' | 'addon_item_price' | 'charge_item_price' | 'plan_setup' | 'plan' | 'addon';
       
      tax_exempt_reason?:'tax_not_configured' | 'region_non_taxable' | 'export' | 'customer_exempt' | 'product_exempt' | 'zero_rated' | 'reverse_charge' | 'high_value_physical_goods' | 'zero_value_item' | 'tax_not_configured_external_provider';
       
      entity_id?:string;
       
      customer_id?:string;
    }
    export interface Discount {  
      amount:number;
       
      description?:string;
       
      entity_type:'item_level_coupon' | 'document_level_coupon' | 'promotional_credits' | 'prorated_credits' | 'item_level_discount' | 'document_level_discount';
       
      discount_type?:'fixed_amount' | 'percentage';
       
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
    export interface LineItemCredit {  
      cn_id:string;
       
      applied_amount:number;
       
      line_item_id?:string;
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
       
      pricing_type?:'per_unit' | 'flat_fee' | 'package';
       
      package_size?:number;
    }
    export interface LinkedPayment {  
      txn_id:string;
       
      applied_amount:number;
       
      applied_at:number;
       
      txn_status?:'in_progress' | 'success' | 'voided' | 'failure' | 'timeout' | 'needs_attention' | 'late_failure';
       
      txn_date?:number;
       
      txn_amount?:number;
    }
    export interface DunningAttempt {  
      attempt:number;
       
      transaction_id?:string;
       
      dunning_type:'auto_collect' | 'offline' | 'direct_debit';
       
      created_at?:number;
       
      txn_status?:'in_progress' | 'success' | 'voided' | 'failure' | 'timeout' | 'needs_attention' | 'late_failure';
       
      txn_amount?:number;
    }
    export interface AppliedCredit {  
      cn_id:string;
       
      applied_amount:number;
       
      applied_at:number;
       
      cn_reason_code?:'write_off' | 'subscription_change' | 'subscription_cancellation' | 'subscription_pause' | 'chargeback' | 'product_unsatisfactory' | 'service_unsatisfactory' | 'order_change' | 'order_cancellation' | 'waiver' | 'other' | 'fraudulent';
       
      cn_create_reason_code?:string;
       
      cn_date?:number;
       
      cn_status:'adjusted' | 'refunded' | 'refund_due' | 'voided';
       
      tax_application?:'pre_tax' | 'post_tax';
    }
    export interface AdjustmentCreditNote {  
      cn_id:string;
       
      cn_reason_code?:'write_off' | 'subscription_change' | 'subscription_cancellation' | 'subscription_pause' | 'chargeback' | 'product_unsatisfactory' | 'service_unsatisfactory' | 'order_change' | 'order_cancellation' | 'waiver' | 'other' | 'fraudulent';
       
      cn_create_reason_code?:string;
       
      cn_date?:number;
       
      cn_total?:number;
       
      cn_status:'adjusted' | 'refunded' | 'refund_due' | 'voided';
    }
    export interface IssuedCreditNote {  
      cn_id:string;
       
      cn_reason_code?:'write_off' | 'subscription_change' | 'subscription_cancellation' | 'subscription_pause' | 'chargeback' | 'product_unsatisfactory' | 'service_unsatisfactory' | 'order_change' | 'order_cancellation' | 'waiver' | 'other' | 'fraudulent';
       
      cn_create_reason_code?:string;
       
      cn_date?:number;
       
      cn_total?:number;
       
      cn_status:'adjusted' | 'refunded' | 'refund_due' | 'voided';
    }
    export interface LinkedOrder {  
      id:string;
       
      document_number?:string;
       
      status?:'new' | 'processing' | 'complete' | 'cancelled' | 'voided' | 'queued' | 'awaiting_shipment' | 'on_hold' | 'delivered' | 'shipped' | 'partially_delivered' | 'returned';
       
      order_type?:'manual' | 'system_generated';
       
      reference_id?:string;
       
      fulfillment_status?:string;
       
      batch_id?:string;
       
      created_at:number;
    }
    export interface Note {  
      entity_type:'coupon' | 'subscription' | 'customer' | 'plan_item_price' | 'addon_item_price' | 'charge_item_price' | 'tax' | 'plan' | 'addon';
       
      note:string;
       
      entity_id?:string;
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
    export interface StatementDescriptor {  
      id:string;
       
      descriptor?:string;
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
    export interface Einvoice {  
      id:string;
       
      reference_number?:string;
       
      status:'scheduled' | 'skipped' | 'in_progress' | 'success' | 'failed' | 'registered';
       
      message?:string;
    }
    export interface SiteDetailsAtCreation {  
      timezone?:string;
       
      organization_address?:object;
    }
    export interface TaxOrigin {  
      country?:string;
       
      registration_number?:string;
    }
    export interface LineItemAddress {  
      line_item_id?:string;
       
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
       
      validation_status?:'not_validated' | 'valid' | 'partially_valid' | 'invalid';
    }
  }
}