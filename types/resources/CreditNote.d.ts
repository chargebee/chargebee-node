declare module 'chargebee' {
  export interface CreditNote {
    
    id:string;
    customer_id:string;
    subscription_id?:string;
    reference_invoice_id:string;
    type:'adjustment' | 'refundable';
    reason_code?:'other' | 'product_unsatisfactory' | 'subscription_pause' | 'order_cancellation' | 'service_unsatisfactory' | 'subscription_cancellation' | 'chargeback' | 'order_change' | 'write_off' | 'waiver' | 'subscription_change' | 'fraudulent';
    status:'refund_due' | 'adjusted' | 'refunded' | 'voided';
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
    sub_total:number;
    sub_total_in_local_currency?:number;
    total_in_local_currency?:number;
    local_currency_code?:string;
    round_off_amount?:number;
    fractional_correction?:number;
    deleted:boolean;
    tax_category?:string;
    local_currency_exchange_rate?:number;
    create_reason_code?:string;
    vat_number_prefix?:string;
    business_entity_id:string;
    einvoice?:CreditNote.Einvoice;
    line_items?:CreditNote.LineItem[];
    discounts?:CreditNote.Discount[];
    line_item_discounts?:CreditNote.LineItemDiscount[];
    line_item_tiers?:CreditNote.LineItemTier[];
    taxes?:CreditNote.Tax[];
    line_item_taxes?:CreditNote.LineItemTax[];
    linked_refunds?:CreditNote.CreditNoteTransaction[];
    linked_tax_withheld_refunds?:CreditNote.LinkedTaxWithheldRefund[];
    allocations?:CreditNote.AppliedCredit[];
    shipping_address?:CreditNote.ShippingAddress;
    billing_address?:CreditNote.BillingAddress;
  }
  export namespace CreditNote {
    export class CreditNoteResource {
      void_credit_note(credit_note_id:string, input?:VoidCreditNoteInputParam):ChargebeeRequest<VoidCreditNoteResponse>;
      refund(credit_note_id:string, input?:RefundInputParam):ChargebeeRequest<RefundResponse>;
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
      record_refund(credit_note_id:string, input?:RecordRefundInputParam):ChargebeeRequest<RecordRefundResponse>;
      import_credit_note(input:ImportCreditNoteInputParam):ChargebeeRequest<ImportCreditNoteResponse>;
      delete(credit_note_id:string, input?:DeleteInputParam):ChargebeeRequest<DeleteResponse>;
      download_einvoice(credit_note_id:string):ChargebeeRequest<DownloadEinvoiceResponse>;
      pdf(credit_note_id:string, input?:PdfInputParam):ChargebeeRequest<PdfResponse>;
      resend_einvoice(credit_note_id:string):ChargebeeRequest<ResendEinvoiceResponse>;
      remove_tax_withheld_refund(credit_note_id:string, input?:RemoveTaxWithheldRefundInputParam):ChargebeeRequest<RemoveTaxWithheldRefundResponse>;
      retrieve(credit_note_id:string):ChargebeeRequest<RetrieveResponse>;
      send_einvoice(credit_note_id:string):ChargebeeRequest<SendEinvoiceResponse>;
    }
    export interface VoidCreditNoteResponse {
      credit_note:CreditNote;
    }
    export interface VoidCreditNoteInputParam {
      
      comment?:string;
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
    export interface ListResponse {
      list:{credit_note:CreditNote}[];
      next_offset?:string;
    }
    export interface ListInputParam {
      [key: string]: string | number | object | boolean;
      limit?:number;
      offset?:string;
      include_deleted?:boolean;
      id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      customer_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      subscription_id?:{in?:string,is?:string,is_not?:string,is_present?:'true' | 'false',not_in?:string,starts_with?:string};
      reference_invoice_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      type?:{in?:string,is?:'adjustment' | 'refundable',is_not?:'adjustment' | 'refundable',not_in?:string};
      reason_code?:{in?:string,is?:'other' | 'product_unsatisfactory' | 'subscription_pause' | 'order_cancellation' | 'service_unsatisfactory' | 'subscription_cancellation' | 'chargeback' | 'order_change' | 'write_off' | 'waiver' | 'subscription_change' | 'fraudulent',is_not?:'other' | 'product_unsatisfactory' | 'subscription_pause' | 'order_cancellation' | 'service_unsatisfactory' | 'subscription_cancellation' | 'chargeback' | 'order_change' | 'write_off' | 'waiver' | 'subscription_change' | 'fraudulent',not_in?:string};
      create_reason_code?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      status?:{in?:string,is?:'refund_due' | 'adjusted' | 'refunded' | 'voided',is_not?:'refund_due' | 'adjusted' | 'refunded' | 'voided',not_in?:string};
      date?:{after?:string,before?:string,between?:string,on?:string};
      total?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
      price_type?:{in?:string,is?:'tax_exclusive' | 'tax_inclusive',is_not?:'tax_exclusive' | 'tax_inclusive',not_in?:string};
      amount_allocated?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
      amount_refunded?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
      amount_available?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
      voided_at?:{after?:string,before?:string,between?:string,on?:string};
      updated_at?:{after?:string,before?:string,between?:string,on?:string};
      sort_by?:{asc?:'date',desc?:'date'};
      channel?:{in?:string,is?:'app_store' | 'web' | 'play_store',is_not?:'app_store' | 'web' | 'play_store',not_in?:string};
      einvoice?:{status?:{in?:string,is?:'in_progress' | 'scheduled' | 'success' | 'registered' | 'failed' | 'skipped',is_not?:'in_progress' | 'scheduled' | 'success' | 'registered' | 'failed' | 'skipped',not_in?:string}};
    }
    export interface CreateResponse {
      credit_note:CreditNote;
      invoice:Invoice;
    }
    export interface CreateInputParam {
      
      reference_invoice_id:string;
      total?:number;
      type:'adjustment' | 'refundable';
      reason_code?:'order_cancellation' | 'service_unsatisfactory' | 'other' | 'product_unsatisfactory' | 'order_change' | 'waiver';
      create_reason_code?:string;
      date?:number;
      customer_notes?:string;
      comment?:string;
      line_items?:{amount?:number,date_from?:number,date_to?:number,description?:string,quantity?:number,quantity_in_decimal?:string,reference_line_item_id:string,unit_amount?:number,unit_amount_in_decimal?:string}[];
    }
    export interface RecordRefundResponse {
      credit_note:CreditNote;
      transaction?:Transaction;
    }
    export interface RecordRefundInputParam {
      
      refund_reason_code?:string;
      comment?:string;
      transaction?:{amount?:number,date:number,payment_method:PaymentMethod,reference_number?:string};
    }
    export interface ImportCreditNoteResponse {
      credit_note:CreditNote;
    }
    export interface ImportCreditNoteInputParam {
      
      id:string;
      customer_id?:string;
      subscription_id?:string;
      reference_invoice_id:string;
      type:'adjustment' | 'refundable';
      currency_code?:string;
      create_reason_code:string;
      date:number;
      status?:'refund_due' | 'adjusted' | 'refunded' | 'voided';
      total?:number;
      refunded_at?:number;
      voided_at?:number;
      sub_total?:number;
      round_off_amount?:number;
      fractional_correction?:number;
      vat_number_prefix?:string;
      line_items?:{amount?:number,amount_in_decimal?:string,date_from?:number,date_to?:number,description:string,entity_id?:string,entity_type?:'addon_item_price' | 'plan_item_price' | 'charge_item_price' | 'adhoc',id?:string,item_level_discount1_amount?:number,item_level_discount1_entity_id?:string,item_level_discount2_amount?:number,item_level_discount2_entity_id?:string,quantity?:number,quantity_in_decimal?:string,reference_line_item_id?:string,subscription_id?:string,tax10_amount?:number,tax10_name?:string,tax1_amount?:number,tax1_name?:string,tax2_amount?:number,tax2_name?:string,tax3_amount?:number,tax3_name?:string,tax4_amount?:number,tax4_name?:string,tax5_amount?:number,tax5_name?:string,tax6_amount?:number,tax6_name?:string,tax7_amount?:number,tax7_name?:string,tax8_amount?:number,tax8_name?:string,tax9_amount?:number,tax9_name?:string,unit_amount?:number,unit_amount_in_decimal?:string}[];
      line_item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,line_item_id:string,quantity_used?:number,quantity_used_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string,unit_amount?:number,unit_amount_in_decimal?:string}[];
      discounts?:{amount:number,description?:string,entity_id?:string,entity_type:'item_level_coupon' | 'promotional_credits' | 'item_level_discount' | 'document_level_discount' | 'document_level_coupon',line_item_id?:string}[];
      taxes?:{amount?:number,description?:string,juris_code?:string,juris_name?:string,juris_type?:'special' | 'country' | 'unincorporated' | 'other' | 'city' | 'federal' | 'county' | 'state',name:string,rate:number}[];
      allocations?:{allocated_amount:number,allocated_at:number,invoice_id:string}[];
      linked_refunds?:{amount:number,date:number,payment_method:PaymentMethod,reference_number?:string}[];
    }
    export interface DeleteResponse {
      credit_note:CreditNote;
    }
    export interface DeleteInputParam {
      
      comment?:string;
    }
    export interface DownloadEinvoiceResponse {
      downloads:Download[];
    }
    
    export interface PdfResponse {
      download:Download;
    }
    export interface PdfInputParam {
      
      disposition_type?:DispositionType;
    }
    export interface ResendEinvoiceResponse {
      credit_note:CreditNote;
    }
    
    export interface RemoveTaxWithheldRefundResponse {
      credit_note:CreditNote;
    }
    export interface RemoveTaxWithheldRefundInputParam {
      
      tax_withheld?:{id:string};
    }
    export interface RetrieveResponse {
      credit_note:CreditNote;
    }
    
    export interface SendEinvoiceResponse {
      credit_note:CreditNote;
    }
    
    export interface Einvoice {
      id?:string;
      reference_number?:string;
      status?:'in_progress' | 'scheduled' | 'success' | 'registered' | 'failed' | 'skipped';
      message?:string;
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
    export interface CreditNoteTransaction {
      txn_id?:string;
      applied_amount?:number;
      applied_at?:number;
      txn_status?:'in_progress' | 'success' | 'failure' | 'voided' | 'timeout' | 'needs_attention';
      txn_date?:number;
      txn_amount?:number;
      refund_reason_code?:string;
    }
    export interface LinkedTaxWithheldRefund {
      id?:string;
      amount?:number;
      description?:string;
      date?:number;
      reference_number?:string;
    }
    export interface AppliedCredit {
      invoice_id?:string;
      allocated_amount?:number;
      allocated_at?:number;
      invoice_date?:number;
      invoice_status?:'pending' | 'paid' | 'voided' | 'not_paid' | 'posted' | 'payment_due';
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
  }
}