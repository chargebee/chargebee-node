///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface CreditNote {
    

    id:string;

    customer_id:string;

    subscription_id?:string;

    reference_invoice_id?:string;

    type:'adjustment' | 'refundable' | 'store';

    reason_code?:'write_off' | 'subscription_change' | 'subscription_cancellation' | 'subscription_pause' | 'chargeback' | 'product_unsatisfactory' | 'service_unsatisfactory' | 'order_change' | 'order_cancellation' | 'waiver' | 'other' | 'fraudulent';

    status:'adjusted' | 'refunded' | 'refund_due' | 'voided';

    vat_number?:string;

    date?:number;

    price_type:PriceType;

    currency_code:string;

    total?:number;

    amount_allocated?:number;

    amount_refunded?:number;

    amount_available?:number;

    refunded_at?:number;

    voided_at?:number;

    generated_at?:number;

    resource_version?:number;

    updated_at?:number;

    channel?:Channel;

    einvoice?:CreditNote.Einvoice;

    sub_total:number;

    sub_total_in_local_currency?:number;

    total_in_local_currency?:number;

    local_currency_code?:string;

    round_off_amount?:number;

    fractional_correction?:number;

    line_items?:CreditNote.LineItem[];

    discounts?:CreditNote.Discount[];

    line_item_discounts?:CreditNote.LineItemDiscount[];

    line_item_tiers?:CreditNote.LineItemTier[];

    taxes?:CreditNote.Tax[];

    line_item_taxes?:CreditNote.LineItemTax[];

    linked_refunds?:CreditNote.LinkedRefund[];

    allocations?:CreditNote.Allocation[];

    deleted:boolean;

    tax_category?:string;

    local_currency_exchange_rate?:number;

    create_reason_code?:string;

    vat_number_prefix?:string;

    business_entity_id?:string;

    shipping_address?:CreditNote.ShippingAddress;

    billing_address?:CreditNote.BillingAddress;

    site_details_at_creation?:CreditNote.SiteDetailsAtCreation;

    tax_origin?:CreditNote.TaxOrigin;

    line_item_addresses?:CreditNote.LineItemAddress[];

  }
  export namespace CreditNote {
    export class CreditNoteResource {  
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
       
      retrieve(credit_note_id:string, input?:RetrieveInputParam):ChargebeeRequest<RetrieveResponse>;
       
      pdf(credit_note_id:string, input?:PdfInputParam):ChargebeeRequest<PdfResponse>;
       
      download_einvoice(credit_note_id:string):ChargebeeRequest<DownloadEinvoiceResponse>;
       
      refund(credit_note_id:string, input?:RefundInputParam):ChargebeeRequest<RefundResponse>;
       
      record_refund(credit_note_id:string, input:RecordRefundInputParam):ChargebeeRequest<RecordRefundResponse>;
       
      void_credit_note(credit_note_id:string, input?:VoidCreditNoteInputParam):ChargebeeRequest<VoidCreditNoteResponse>;
       
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
       
      credit_notes_for_customer(customer_id:string, input?:CreditNotesForCustomerInputParam):ChargebeeRequest<CreditNotesForCustomerResponse>;
       
      delete(credit_note_id:string, input?:DeleteInputParam):ChargebeeRequest<DeleteResponse>;
       
      remove_tax_withheld_refund(credit_note_id:string, input:RemoveTaxWithheldRefundInputParam):ChargebeeRequest<RemoveTaxWithheldRefundResponse>;
       
      resend_einvoice(credit_note_id:string):ChargebeeRequest<ResendEinvoiceResponse>;
       
      send_einvoice(credit_note_id:string):ChargebeeRequest<SendEinvoiceResponse>;
       
      import_credit_note(input:ImportCreditNoteInputParam):ChargebeeRequest<ImportCreditNoteResponse>;
    }
    export interface CreateResponse {  
       credit_note:CreditNote;
       
       invoice?:Invoice;
    }
    export interface CreateInputParam {
       
      line_items?:{amount?:number,date_from?:number,date_to?:number,description?:string,entity_id?:string,entity_type?:'adhoc' | 'plan_item_price' | 'addon_item_price' | 'charge_item_price',quantity?:number,quantity_in_decimal?:string,reference_line_item_id?:string,unit_amount?:number,unit_amount_in_decimal?:string}[];
       
      reference_invoice_id?:string;
       
      customer_id?:string;
       
      total?:number;
       
      type:'adjustment' | 'refundable' | 'store';
       
      reason_code?:'product_unsatisfactory' | 'service_unsatisfactory' | 'order_change' | 'order_cancellation' | 'waiver' | 'other';
       
      create_reason_code?:string;
       
      date?:number;
       
      customer_notes?:string;
       
      currency_code?:string;
       
      comment?:string;
    }
    export interface RetrieveResponse {  
       credit_note:CreditNote;
    }
    export interface RetrieveInputParam {
       
      line_item?:{customer_id?:{is?:string},subscription_id?:{is?:string}};
       
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
    
    export interface RefundResponse {  
       credit_note:CreditNote;
       
       transaction:Transaction;
    }
    export interface RefundInputParam {
       
      refund_amount?:number;
       
      customer_notes?:string;
       
      refund_reason_code?:string;
    }
    export interface RecordRefundResponse {  
       credit_note:CreditNote;
       
       transaction?:Transaction;
    }
    export interface RecordRefundInputParam {
       
      transaction:{amount?:number,custom_payment_method_id?:string,date:number,payment_method:PaymentMethod,reference_number?:string};
       
      refund_reason_code?:string;
       
      comment?:string;
    }
    export interface VoidCreditNoteResponse {  
       credit_note:CreditNote;
    }
    export interface VoidCreditNoteInputParam {
       
      comment?:string;
    }
    export interface ListResponse {  
       list:{credit_note:CreditNote}[];
       
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
       
      show_exempted_tax_lines?:boolean;
       
      /**
        * @description Indicates whether to include deleted objects in the list. The deleted objects have the attribute \&#x60;deleted\&#x60; as \&#x60;true\&#x60;.

        */
        
      include_deleted?:boolean;
       
      /**
        * @description Credit-note id.

        */
        
      id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description The identifier of the customer this Credit Note belongs to.

        */
        
      customer_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description To filter based on subscription_id.   
NOTE: Not to be used if *consolidated invoicing* feature is enabled.

        */
        
      subscription_id?:{in?:string,is?:string,is_not?:string,is_present?:'true' | 'false',not_in?:string,starts_with?:string};
       
      /**
        * @description The identifier of the invoice against which this Credit Note is issued

        */
        
      reference_invoice_id?:{in?:string,is?:string,is_not?:string,is_present?:'true' | 'false',not_in?:string,starts_with?:string};
       
      /**
        * @description The credit note type.

        */
        
      type?:{in?:string,is?:'adjustment' | 'refundable' | 'store',is_not?:'adjustment' | 'refundable' | 'store',not_in?:string};
       
      /**
        * @description The reason for issuing this Credit Note. The following reason codes are supported now\[Deprecated; use the [create_reason_code](/docs/api/credit_notes#credit_note_create_reason_code) parameter instead\]

        */
        
      reason_code?:{in?:string,is?:'write_off' | 'subscription_change' | 'subscription_cancellation' | 'subscription_pause' | 'chargeback' | 'product_unsatisfactory' | 'service_unsatisfactory' | 'order_change' | 'order_cancellation' | 'waiver' | 'other' | 'fraudulent',is_not?:'write_off' | 'subscription_change' | 'subscription_cancellation' | 'subscription_pause' | 'chargeback' | 'product_unsatisfactory' | 'service_unsatisfactory' | 'order_change' | 'order_cancellation' | 'waiver' | 'other' | 'fraudulent',not_in?:string};
       
      /**
        * @description Reason code for creating the credit note. Must be one from a list of reason codes set in the Chargebee app in **Settings \&gt; Configure Chargebee \&gt; Reason Codes \&gt; Credit Notes \&gt; Create Credit Note**. Must be passed if set as mandatory in the app. The codes are case-sensitive

        */
        
      create_reason_code?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description The credit note status.

        */
        
      status?:{in?:string,is?:'adjusted' | 'refunded' | 'refund_due' | 'voided',is_not?:'adjusted' | 'refunded' | 'refund_due' | 'voided',not_in?:string};
       
      /**
        * @description The date the Credit Note is issued.

        */
        
      date?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description Credit Note amount in cents.

        */
        
      total?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
       
      /**
        * @description The price type of the Credit Note.

        */
        
      price_type?:{in?:string,is?:'tax_exclusive' | 'tax_inclusive',is_not?:'tax_exclusive' | 'tax_inclusive',not_in?:string};
       
      /**
        * @description The amount allocated to the invoices.

        */
        
      amount_allocated?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
       
      /**
        * @description The refunds issued from this Credit Note.

        */
        
      amount_refunded?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
       
      /**
        * @description The yet to be used credits of this Credit Note.

        */
        
      amount_available?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
       
      /**
        * @description Timestamp indicating the date and time this Credit Note gets voided.

        */
        
      voided_at?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description To filter based on updated at. This attribute will be present only if the resource has been updated after 2016-09-28.

        */
        
      updated_at?:{after?:string,before?:string,between?:string,on?:string};
       
      sort_by?:{asc?:'date',desc?:'date'};
       
      /**
        * @description The subscription channel this object originated from and is maintained in.

        */
        
      channel?:{in?:string,is?:'web' | 'app_store' | 'play_store',is_not?:'web' | 'app_store' | 'play_store',not_in?:string};
    }
    export interface CreditNotesForCustomerResponse {  
       list:{credit_note:CreditNote}[];
       
       next_offset?:string;
    }
    export interface CreditNotesForCustomerInputParam {
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
    export interface DeleteResponse {  
       credit_note:CreditNote;
    }
    export interface DeleteInputParam {
       
      comment?:string;
    }
    export interface RemoveTaxWithheldRefundResponse {  
       credit_note:CreditNote;
    }
    export interface RemoveTaxWithheldRefundInputParam {
       
      tax_withheld:{id:string};
    }
    export interface ResendEinvoiceResponse {  
       credit_note:CreditNote;
    }
    
    export interface SendEinvoiceResponse {  
       credit_note:CreditNote;
    }
    
    export interface ImportCreditNoteResponse {  
       credit_note:CreditNote;
    }
    export interface ImportCreditNoteInputParam {
       
      line_items:{amount?:number,amount_in_decimal?:string,date_from?:number,date_to?:number,description:string,entity_id?:string,entity_type?:'adhoc' | 'plan_item_price' | 'addon_item_price' | 'charge_item_price',id?:string,item_level_discount1_amount?:number,item_level_discount1_entity_id?:string,item_level_discount2_amount?:number,item_level_discount2_entity_id?:string,quantity?:number,quantity_in_decimal?:string,reference_line_item_id?:string,subscription_id?:string,tax10_amount?:number,tax10_name?:string,tax1_amount?:number,tax1_name?:string,tax2_amount?:number,tax2_name?:string,tax3_amount?:number,tax3_name?:string,tax4_amount?:number,tax4_name?:string,tax5_amount?:number,tax5_name?:string,tax6_amount?:number,tax6_name?:string,tax7_amount?:number,tax7_name?:string,tax8_amount?:number,tax8_name?:string,tax9_amount?:number,tax9_name?:string,unit_amount?:number,unit_amount_in_decimal?:string}[];
       
      line_item_tiers:{ending_unit?:number,ending_unit_in_decimal?:string,line_item_id:string,quantity_used?:number,quantity_used_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string,unit_amount?:number,unit_amount_in_decimal?:string}[];
       
      discounts:{amount:number,description?:string,entity_id?:string,entity_type:'item_level_coupon' | 'document_level_coupon' | 'promotional_credits' | 'item_level_discount' | 'document_level_discount'}[];
       
      taxes:{amount?:number,description?:string,juris_code?:string,juris_name?:string,juris_type?:'country' | 'federal' | 'state' | 'county' | 'city' | 'special' | 'unincorporated' | 'other',name:string,rate:number}[];
       
      allocations:{allocated_amount:number,allocated_at:number,invoice_id:string}[];
       
      linked_refunds:{amount:number,date:number,payment_method:PaymentMethod,reference_number?:string}[];
       
      id:string;
       
      customer_id?:string;
       
      subscription_id?:string;
       
      reference_invoice_id:string;
       
      type:'adjustment' | 'refundable' | 'store';
       
      currency_code?:string;
       
      create_reason_code:string;
       
      date:number;
       
      status?:'adjusted' | 'refunded' | 'refund_due' | 'voided';
       
      total?:number;
       
      refunded_at?:number;
       
      voided_at?:number;
       
      sub_total?:number;
       
      round_off_amount?:number;
       
      fractional_correction?:number;
       
      vat_number_prefix?:string;
    }
    export interface Einvoice {  
      id:string;
       
      reference_number?:string;
       
      status:'scheduled' | 'skipped' | 'in_progress' | 'success' | 'failed' | 'registered';
       
      message?:string;
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
       
      is_percentage_pricing?:boolean;
       
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
    export interface LinkedRefund {  
      txn_id:string;
       
      applied_amount:number;
       
      applied_at:number;
       
      txn_status?:'in_progress' | 'success' | 'voided' | 'failure' | 'timeout' | 'needs_attention' | 'late_failure';
       
      txn_date?:number;
       
      txn_amount?:number;
       
      refund_reason_code?:string;
    }
    export interface Allocation {  
      invoice_id:string;
       
      allocated_amount:number;
       
      allocated_at:number;
       
      invoice_date?:number;
       
      invoice_status:'paid' | 'posted' | 'payment_due' | 'not_paid' | 'voided' | 'pending';
       
      tax_application?:'pre_tax' | 'post_tax';
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