declare module 'chargebee' {
  export interface Invoice {
    
    id:string;
    po_number?:string;
    customer_id:string;
    subscription_id?:string;
    recurring:boolean;
    status:'pending' | 'paid' | 'voided' | 'not_paid' | 'posted' | 'payment_due';
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
    dunning_status?:'in_progress' | 'stopped' | 'success' | 'exhausted';
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
    payment_owner?:string;
    void_reason_code?:string;
    deleted:boolean;
    tax_category?:string;
    vat_number_prefix?:string;
    channel?:Channel;
    business_entity_id?:string;
    line_items?:Invoice.LineItem[];
    discounts?:Invoice.Discount[];
    line_item_discounts?:Invoice.LineItemDiscount[];
    taxes?:Invoice.Tax[];
    line_item_taxes?:Invoice.LineItemTax[];
    line_item_tiers?:Invoice.LineItemTier[];
    linked_payments?:Invoice.InvoiceTransaction[];
    dunning_attempts?:Invoice.DunningAttempt[];
    applied_credits?:Invoice.AppliedCredit[];
    adjustment_credit_notes?:Invoice.CreatedCreditNote[];
    issued_credit_notes?:Invoice.CreatedCreditNote[];
    linked_orders?:Invoice.LinkedOrder[];
    notes?:Invoice.Note[];
    shipping_address?:Invoice.ShippingAddress;
    billing_address?:Invoice.BillingAddress;
    einvoice?:Invoice.Einvoice;
    linked_taxes_withheld?:Invoice.LinkedTaxWithheld[];
  }
  export namespace Invoice {
    export class InvoiceResource {
      delete_line_items(invoice_id:string, input?:DeleteLineItemsInputParam):ChargebeeRequest<DeleteLineItemsResponse>;
      remove_credit_note(invoice_id:string, input?:RemoveCreditNoteInputParam):ChargebeeRequest<RemoveCreditNoteResponse>;
      remove_payment(invoice_id:string, input?:RemovePaymentInputParam):ChargebeeRequest<RemovePaymentResponse>;
      stop_dunning(invoice_id:string, input?:StopDunningInputParam):ChargebeeRequest<StopDunningResponse>;
      apply_payments(invoice_id:string, input?:ApplyPaymentsInputParam):ChargebeeRequest<ApplyPaymentsResponse>;
      void_invoice(invoice_id:string, input?:VoidInvoiceInputParam):ChargebeeRequest<VoidInvoiceResponse>;
      add_charge(invoice_id:string, input:AddChargeInputParam):ChargebeeRequest<AddChargeResponse>;
      send_einvoice(invoice_id:string):ChargebeeRequest<SendEinvoiceResponse>;
      write_off(invoice_id:string, input?:WriteOffInputParam):ChargebeeRequest<WriteOffResponse>;
      add_charge_item(invoice_id:string, input?:AddChargeItemInputParam):ChargebeeRequest<AddChargeItemResponse>;
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
      close(invoice_id:string, input?:CloseInputParam):ChargebeeRequest<CloseResponse>;
      apply_credits(invoice_id:string, input?:ApplyCreditsInputParam):ChargebeeRequest<ApplyCreditsResponse>;
      retrieve(invoice_id:string):ChargebeeRequest<RetrieveResponse>;
      create_for_charge_items_and_charges(input?:CreateForChargeItemsAndChargesInputParam):ChargebeeRequest<CreateForChargeItemsAndChargesResponse>;
      update_details(invoice_id:string, input?:UpdateDetailsInputParam):ChargebeeRequest<UpdateDetailsResponse>;
      record_payment(invoice_id:string, input?:RecordPaymentInputParam):ChargebeeRequest<RecordPaymentResponse>;
      delete(invoice_id:string, input?:DeleteInputParam):ChargebeeRequest<DeleteResponse>;
      import_invoice(input:ImportInvoiceInputParam):ChargebeeRequest<ImportInvoiceResponse>;
      record_tax_withheld(invoice_id:string, input?:RecordTaxWithheldInputParam):ChargebeeRequest<RecordTaxWithheldResponse>;
      resend_einvoice(invoice_id:string):ChargebeeRequest<ResendEinvoiceResponse>;
      remove_tax_withheld(invoice_id:string, input?:RemoveTaxWithheldInputParam):ChargebeeRequest<RemoveTaxWithheldResponse>;
      list_payment_reference_numbers(input?:ListPaymentReferenceNumbersInputParam):ChargebeeRequest<ListPaymentReferenceNumbersResponse>;
      collect_payment(invoice_id:string, input?:CollectPaymentInputParam):ChargebeeRequest<CollectPaymentResponse>;
      sync_usages(invoice_id:string):ChargebeeRequest<SyncUsagesResponse>;
      refund(invoice_id:string, input?:RefundInputParam):ChargebeeRequest<RefundResponse>;
      record_refund(invoice_id:string, input?:RecordRefundInputParam):ChargebeeRequest<RecordRefundResponse>;
      pdf(invoice_id:string, input?:PdfInputParam):ChargebeeRequest<PdfResponse>;
      download_einvoice(invoice_id:string):ChargebeeRequest<DownloadEinvoiceResponse>;
    }
    export interface DeleteLineItemsResponse {
      invoice:Invoice;
    }
    export interface DeleteLineItemsInputParam {
      
      line_items?:{id?:string}[];
    }
    export interface RemoveCreditNoteResponse {
      invoice:Invoice;
      credit_note:CreditNote;
    }
    export interface RemoveCreditNoteInputParam {
      
      credit_note?:{id:string};
    }
    export interface RemovePaymentResponse {
      invoice:Invoice;
      transaction:Transaction;
    }
    export interface RemovePaymentInputParam {
      
      transaction?:{id:string};
    }
    export interface StopDunningResponse {
      invoice:Invoice;
    }
    export interface StopDunningInputParam {
      
      comment?:string;
    }
    export interface ApplyPaymentsResponse {
      invoice:Invoice;
    }
    export interface ApplyPaymentsInputParam {
      
      comment?:string;
      transactions?:{id?:string}[];
    }
    export interface VoidInvoiceResponse {
      invoice:Invoice;
      credit_note?:CreditNote;
    }
    export interface VoidInvoiceInputParam {
      
      comment?:string;
      void_reason_code?:string;
    }
    export interface AddChargeResponse {
      invoice:Invoice;
    }
    export interface AddChargeInputParam {
      
      amount:number;
      description:string;
      avalara_sale_type?:AvalaraSaleType;
      avalara_transaction_type?:number;
      avalara_service_type?:number;
      comment?:string;
      subscription_id?:string;
      line_item?:{date_from?:number,date_to?:number};
    }
    export interface SendEinvoiceResponse {
      invoice:Invoice;
    }
    
    export interface WriteOffResponse {
      invoice:Invoice;
      credit_note:CreditNote;
    }
    export interface WriteOffInputParam {
      
      comment?:string;
    }
    export interface AddChargeItemResponse {
      invoice:Invoice;
    }
    export interface AddChargeItemInputParam {
      
      comment?:string;
      subscription_id?:string;
      item_price?:{date_from?:number,date_to?:number,item_price_id:string,quantity?:number,quantity_in_decimal?:string,unit_price?:number,unit_price_in_decimal?:string};
      item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
    }
    export interface ListResponse {
      list:{invoice:Invoice}[];
      next_offset?:string;
    }
    export interface ListInputParam {
      [key: string]: string | number | object | boolean;
      limit?:number;
      offset?:string;
      include_deleted?:boolean;
      id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      subscription_id?:{in?:string,is?:string,is_not?:string,is_present?:'true' | 'false',not_in?:string,starts_with?:string};
      customer_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      recurring?:{is?:'true' | 'false'};
      status?:{in?:string,is?:'pending' | 'paid' | 'voided' | 'not_paid' | 'posted' | 'payment_due',is_not?:'pending' | 'paid' | 'voided' | 'not_paid' | 'posted' | 'payment_due',not_in?:string};
      price_type?:{in?:string,is?:'tax_exclusive' | 'tax_inclusive',is_not?:'tax_exclusive' | 'tax_inclusive',not_in?:string};
      date?:{after?:string,before?:string,between?:string,on?:string};
      paid_at?:{after?:string,before?:string,between?:string,on?:string};
      total?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
      amount_paid?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
      amount_adjusted?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
      credits_applied?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
      amount_due?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
      dunning_status?:{in?:string,is?:'in_progress' | 'stopped' | 'success' | 'exhausted',is_not?:'in_progress' | 'stopped' | 'success' | 'exhausted',is_present?:'true' | 'false',not_in?:string};
      payment_owner?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      updated_at?:{after?:string,before?:string,between?:string,on?:string};
      channel?:{in?:string,is?:'app_store' | 'web' | 'play_store',is_not?:'app_store' | 'web' | 'play_store',not_in?:string};
      voided_at?:{after?:string,before?:string,between?:string,on?:string};
      void_reason_code?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      sort_by?:{asc?:'date' | 'updated_at',desc?:'date' | 'updated_at'};
      einvoice?:{status?:{in?:string,is?:'in_progress' | 'scheduled' | 'success' | 'registered' | 'failed' | 'skipped',is_not?:'in_progress' | 'scheduled' | 'success' | 'registered' | 'failed' | 'skipped',not_in?:string}};
    }
    export interface CloseResponse {
      invoice:Invoice;
    }
    export interface CloseInputParam {
      
      comment?:string;
      invoice_note?:string;
      remove_general_note?:boolean;
      invoice_date?:number;
      notes_to_remove?:{entity_id?:string,entity_type?:EntityType}[];
    }
    export interface ApplyCreditsResponse {
      invoice:Invoice;
    }
    export interface ApplyCreditsInputParam {
      
      comment?:string;
      credit_notes?:{id?:string}[];
    }
    export interface RetrieveResponse {
      invoice:Invoice;
    }
    
    export interface CreateForChargeItemsAndChargesResponse {
      invoice:Invoice;
    }
    export interface CreateForChargeItemsAndChargesInputParam {
      
      customer_id?:string;
      subscription_id?:string;
      currency_code?:string;
      invoice_note?:string;
      remove_general_note?:boolean;
      po_number?:string;
      coupon_ids?:string[];
      authorization_transaction_id?:string;
      payment_source_id?:string;
      auto_collection?:AutoCollection;
      invoice_date?:number;
      token_id?:string;
      replace_primary_payment_source?:boolean;
      retain_payment_source?:boolean;
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
      card?:{additional_information?:object,billing_addr1?:string,billing_addr2?:string,billing_city?:string,billing_country?:string,billing_state?:string,billing_state_code?:string,billing_zip?:string,cvv?:string,expiry_month?:number,expiry_year?:number,first_name?:string,gateway_account_id?:string,last_name?:string,number?:string};
      bank_account?:{account_holder_type?:AccountHolderType,account_number?:string,account_type?:AccountType,bank_code?:string,bank_name?:string,billing_address?:object,company?:string,echeck_type?:EcheckType,email?:string,first_name?:string,gateway_account_id?:string,iban?:string,issuing_country?:string,last_name?:string,phone?:string,routing_number?:string,swedish_identity_number?:string};
      payment_method?:{additional_information?:object,gateway_account_id?:string,issuing_country?:string,reference_id?:string,tmp_token?:string,type?:Type};
      payment_intent?:{additional_information?:object,gateway_account_id?:string,gw_token?:string,id?:string,payment_method_type?:'giropay' | 'ideal' | 'google_pay' | 'netbanking_emandates' | 'dotpay' | 'boleto' | 'direct_debit' | 'sofort' | 'upi' | 'apple_pay' | 'bancontact' | 'paypal_express_checkout' | 'card',reference_id?:string};
      item_prices?:{date_from?:number,date_to?:number,item_price_id?:string,quantity?:number,quantity_in_decimal?:string,unit_price?:number,unit_price_in_decimal?:string}[];
      item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,item_price_id?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
      charges?:{amount?:number,amount_in_decimal?:string,avalara_sale_type?:AvalaraSaleType,avalara_service_type?:number,avalara_tax_code?:string,avalara_transaction_type?:number,date_from?:number,date_to?:number,description?:string,hsn_code?:string,tax_profile_id?:string,taxable?:boolean,taxjar_product_code?:string}[];
      notes_to_remove?:{entity_id?:string,entity_type?:EntityType}[];
      discounts?:{amount?:number,apply_on:ApplyOn,item_price_id?:string,percentage?:number}[];
    }
    export interface UpdateDetailsResponse {
      invoice:Invoice;
    }
    export interface UpdateDetailsInputParam {
      
      vat_number?:string;
      vat_number_prefix?:string;
      po_number?:string;
      comment?:string;
      billing_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
    }
    export interface RecordPaymentResponse {
      invoice:Invoice;
      transaction:Transaction;
    }
    export interface RecordPaymentInputParam {
      
      comment?:string;
      transaction?:{amount?:number,date?:number,error_code?:string,error_text?:string,id_at_gateway?:string,payment_method:PaymentMethod,reference_number?:string,status?:'success' | 'failure'};
    }
    export interface DeleteResponse {
      invoice:Invoice;
    }
    export interface DeleteInputParam {
      
      comment?:string;
      claim_credits?:boolean;
    }
    export interface ImportInvoiceResponse {
      invoice:Invoice;
      credit_note?:CreditNote;
    }
    export interface ImportInvoiceInputParam {
      
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
      status?:'pending' | 'paid' | 'voided' | 'not_paid' | 'posted' | 'payment_due';
      voided_at?:number;
      void_reason_code?:string;
      is_written_off?:boolean;
      write_off_amount?:number;
      write_off_date?:number;
      due_date?:number;
      net_term_days?:number;
      has_advance_charges?:boolean;
      use_for_proration?:boolean;
      credit_note?:{id?:string};
      billing_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
      line_items?:{amount?:number,amount_in_decimal?:string,date_from?:number,date_to?:number,description:string,entity_id?:string,entity_type?:'addon_item_price' | 'plan_item_price' | 'charge_item_price' | 'adhoc',id?:string,item_level_discount1_amount?:number,item_level_discount1_entity_id?:string,item_level_discount2_amount?:number,item_level_discount2_entity_id?:string,quantity?:number,quantity_in_decimal?:string,subscription_id?:string,tax10_amount?:number,tax10_name?:string,tax1_amount?:number,tax1_name?:string,tax2_amount?:number,tax2_name?:string,tax3_amount?:number,tax3_name?:string,tax4_amount?:number,tax4_name?:string,tax5_amount?:number,tax5_name?:string,tax6_amount?:number,tax6_name?:string,tax7_amount?:number,tax7_name?:string,tax8_amount?:number,tax8_name?:string,tax9_amount?:number,tax9_name?:string,unit_amount?:number,unit_amount_in_decimal?:string}[];
      payment_reference_numbers?:{id?:string,number:string,type:'frn' | 'kid' | 'fik' | 'ocr'}[];
      line_item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,line_item_id:string,quantity_used?:number,quantity_used_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string,unit_amount?:number,unit_amount_in_decimal?:string}[];
      discounts?:{amount:number,description?:string,entity_id?:string,entity_type:'item_level_coupon' | 'promotional_credits' | 'item_level_discount' | 'document_level_discount' | 'document_level_coupon',line_item_id?:string}[];
      taxes?:{amount?:number,description?:string,juris_code?:string,juris_name?:string,juris_type?:'special' | 'country' | 'unincorporated' | 'other' | 'city' | 'federal' | 'county' | 'state',name:string,rate:number}[];
      payments?:{amount:number,date?:number,payment_method:PaymentMethod,reference_number?:string}[];
      notes?:{entity_id?:string,entity_type?:'addon_item_price' | 'coupon' | 'plan_item_price' | 'charge_item_price',note?:string}[];
    }
    export interface RecordTaxWithheldResponse {
      invoice:Invoice;
    }
    export interface RecordTaxWithheldInputParam {
      
      tax_withheld?:{amount:number,date?:number,description?:string,reference_number?:string};
    }
    export interface ResendEinvoiceResponse {
      invoice:Invoice;
    }
    
    export interface RemoveTaxWithheldResponse {
      invoice:Invoice;
    }
    export interface RemoveTaxWithheldInputParam {
      
      tax_withheld?:{id:string};
    }
    export interface ListPaymentReferenceNumbersResponse {
      list:{payment_reference_number:PaymentReferenceNumber}[];
      next_offset?:string;
    }
    export interface ListPaymentReferenceNumbersInputParam {
      [key: string]: string | number | object | boolean;
      limit?:number;
      offset?:string;
      id?:{in?:string,is?:string};
      payment_reference_number?:{number?:{in?:string,is?:string}};
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
      payment_initiator?:'merchant' | 'customer';
    }
    export interface SyncUsagesResponse {
      invoice:Invoice;
    }
    
    export interface RefundResponse {
      invoice:Invoice;
      transaction:Transaction;
      credit_note?:CreditNote;
    }
    export interface RefundInputParam {
      
      refund_amount?:number;
      comment?:string;
      customer_notes?:string;
      credit_note?:{create_reason_code?:string,reason_code?:'order_cancellation' | 'service_unsatisfactory' | 'other' | 'product_unsatisfactory' | 'order_change' | 'waiver'};
    }
    export interface RecordRefundResponse {
      invoice:Invoice;
      transaction?:Transaction;
      credit_note?:CreditNote;
    }
    export interface RecordRefundInputParam {
      
      comment?:string;
      customer_notes?:string;
      transaction?:{amount?:number,date:number,payment_method:PaymentMethod,reference_number?:string};
      credit_note?:{create_reason_code?:string,reason_code?:'order_cancellation' | 'service_unsatisfactory' | 'other' | 'product_unsatisfactory' | 'chargeback' | 'order_change' | 'waiver'};
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
    
    export interface LineItem {
      id?:string;
      subscription_id?:string;
      date_from?:number;
      date_to?:number;
      unit_amount?:number;
      quantity?:number;
      amount?:number;
      pricing_model?:'volume' | 'per_unit' | 'tiered' | 'flat_fee' | 'stairstep';
      is_taxed?:boolean;
      tax_amount?:number;
      tax_rate?:number;
      unit_amount_in_decimal?:string;
      quantity_in_decimal?:string;
      amount_in_decimal?:string;
      discount_amount?:number;
      item_level_discount_amount?:number;
      reference_line_item_id?:string;
      description?:string;
      entity_description?:string;
      entity_type?:'addon_item_price' | 'plan_item_price' | 'charge_item_price' | 'adhoc';
      tax_exempt_reason?:'high_value_physical_goods' | 'tax_not_configured' | 'reverse_charge' | 'zero_rated' | 'customer_exempt' | 'region_non_taxable' | 'zero_value_item' | 'export' | 'product_exempt';
      entity_id?:string;
      customer_id?:string;
    }
    export interface Discount {
      amount?:number;
      description?:string;
      line_item_id?:string;
      entity_type?:'item_level_coupon' | 'promotional_credits' | 'item_level_discount' | 'prorated_credits' | 'document_level_discount' | 'document_level_coupon';
      discount_type?:'fixed_amount' | 'percentage';
      entity_id?:string;
      coupon_set_code?:string;
    }
    export interface LineItemDiscount {
      line_item_id?:string;
      discount_type?:'item_level_coupon' | 'promotional_credits' | 'item_level_discount' | 'prorated_credits' | 'document_level_discount' | 'document_level_coupon';
      coupon_id?:string;
      entity_id?:string;
      discount_amount?:number;
    }
    export interface Tax {
      name?:string;
      amount?:number;
      description?:string;
    }
    export interface LineItemTax {
      line_item_id?:string;
      tax_name?:string;
      tax_rate?:number;
      is_partial_tax_applied?:boolean;
      is_non_compliance_tax?:boolean;
      taxable_amount?:number;
      tax_amount?:number;
      tax_juris_type?:'special' | 'country' | 'unincorporated' | 'other' | 'city' | 'federal' | 'county' | 'state';
      tax_juris_name?:string;
      tax_juris_code?:string;
      tax_amount_in_local_currency?:number;
      local_currency_code?:string;
    }
    export interface LineItemTier {
      line_item_id?:string;
      starting_unit?:number;
      ending_unit?:number;
      quantity_used?:number;
      unit_amount?:number;
      starting_unit_in_decimal?:string;
      ending_unit_in_decimal?:string;
      quantity_used_in_decimal?:string;
      unit_amount_in_decimal?:string;
    }
    export interface InvoiceTransaction {
      txn_id?:string;
      applied_amount?:number;
      applied_at?:number;
      txn_status?:'in_progress' | 'success' | 'failure' | 'voided' | 'timeout' | 'needs_attention';
      txn_date?:number;
      txn_amount?:number;
    }
    export interface DunningAttempt {
      attempt?:number;
      transaction_id?:string;
      dunning_type?:'offline' | 'auto_collect' | 'direct_debit';
      created_at?:number;
      txn_status?:'in_progress' | 'success' | 'failure' | 'voided' | 'timeout' | 'needs_attention';
      txn_amount?:number;
    }
    export interface AppliedCredit {
      cn_id?:string;
      applied_amount?:number;
      applied_at?:number;
      cn_reason_code?:'other' | 'product_unsatisfactory' | 'subscription_pause' | 'order_cancellation' | 'service_unsatisfactory' | 'subscription_cancellation' | 'chargeback' | 'order_change' | 'write_off' | 'waiver' | 'subscription_change' | 'fraudulent';
      cn_create_reason_code?:string;
      cn_date?:number;
      cn_status?:'refund_due' | 'adjusted' | 'refunded' | 'voided';
    }
    export interface CreatedCreditNote {
      cn_id?:string;
      cn_reason_code?:'other' | 'product_unsatisfactory' | 'subscription_pause' | 'order_cancellation' | 'service_unsatisfactory' | 'subscription_cancellation' | 'chargeback' | 'order_change' | 'write_off' | 'waiver' | 'subscription_change' | 'fraudulent';
      cn_create_reason_code?:string;
      cn_date?:number;
      cn_total?:number;
      cn_status?:'refund_due' | 'adjusted' | 'refunded' | 'voided';
    }
    export interface CreatedCreditNote {
      cn_id?:string;
      cn_reason_code?:'other' | 'product_unsatisfactory' | 'subscription_pause' | 'order_cancellation' | 'service_unsatisfactory' | 'subscription_cancellation' | 'chargeback' | 'order_change' | 'write_off' | 'waiver' | 'subscription_change' | 'fraudulent';
      cn_create_reason_code?:string;
      cn_date?:number;
      cn_total?:number;
      cn_status?:'refund_due' | 'adjusted' | 'refunded' | 'voided';
    }
    export interface LinkedOrder {
      id?:string;
      document_number?:string;
      status?:'new' | 'partially_delivered' | 'queued' | 'delivered' | 'on_hold' | 'shipped' | 'processing' | 'cancelled' | 'voided' | 'complete' | 'awaiting_shipment' | 'returned';
      order_type?:'system_generated' | 'manual';
      reference_id?:string;
      fulfillment_status?:string;
      batch_id?:string;
      created_at?:number;
    }
    export interface Note {
      entity_type?:'addon_item_price' | 'coupon' | 'plan_item_price' | 'charge_item_price' | 'tax' | 'subscription' | 'customer';
      note?:string;
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
      index?:number;
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
      id?:string;
      reference_number?:string;
      status?:'in_progress' | 'scheduled' | 'success' | 'registered' | 'failed' | 'skipped';
      message?:string;
    }
    export interface LinkedTaxWithheld {
      id?:string;
      amount?:number;
      description?:string;
      date?:number;
      reference_number?:string;
    }
  }
}