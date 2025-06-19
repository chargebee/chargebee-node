///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface CreditNote {
    id: string;
    customer_id: string;
    subscription_id?: string;
    reference_invoice_id?: string;
    type: 'adjustment' | 'refundable' | 'store';
    reason_code?:
      | 'write_off'
      | 'subscription_change'
      | 'subscription_cancellation'
      | 'subscription_pause'
      | 'chargeback'
      | 'product_unsatisfactory'
      | 'service_unsatisfactory'
      | 'order_change'
      | 'order_cancellation'
      | 'waiver'
      | 'other'
      | 'fraudulent';
    status: 'adjusted' | 'refunded' | 'refund_due' | 'voided';
    vat_number?: string;
    date?: number;
    price_type: PriceTypeEnum;
    currency_code: string;
    total?: number;
    amount_allocated?: number;
    amount_refunded?: number;
    amount_available?: number;
    refunded_at?: number;
    voided_at?: number;
    generated_at?: number;
    resource_version?: number;
    updated_at?: number;
    channel?: ChannelEnum;
    einvoice?: CreditNote.Einvoice;
    sub_total: number;
    sub_total_in_local_currency?: number;
    total_in_local_currency?: number;
    local_currency_code?: string;
    round_off_amount?: number;
    fractional_correction?: number;
    line_items?: CreditNote.LineItem[];
    discounts?: CreditNote.Discount[];
    line_item_discounts?: CreditNote.LineItemDiscount[];
    line_item_tiers?: CreditNote.LineItemTier[];
    taxes?: CreditNote.Tax[];
    line_item_taxes?: CreditNote.LineItemTax[];
    linked_refunds?: CreditNote.LinkedRefund[];
    allocations?: CreditNote.Allocation[];
    deleted: boolean;
    tax_category?: string;
    local_currency_exchange_rate?: number;
    create_reason_code?: string;
    vat_number_prefix?: string;
    business_entity_id?: string;
    shipping_address?: CreditNote.ShippingAddress;
    billing_address?: CreditNote.BillingAddress;
    site_details_at_creation?: CreditNote.SiteDetailsAtCreation;
    tax_origin?: CreditNote.TaxOrigin;
    line_item_addresses?: CreditNote.LineItemAddress[];
  }

  export namespace CreditNote {
    export class CreditNoteResource {
      create(
        input: CreateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateResponse>>;

      retrieve(
        credit_note_id: string,
        input?: RetrieveInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RetrieveResponse>>;

      pdf(
        credit_note_id: string,
        input?: PdfInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<PdfResponse>>;

      downloadEinvoice(
        credit_note_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<DownloadEinvoiceResponse>>;

      refund(
        credit_note_id: string,
        input?: RefundInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RefundResponse>>;

      recordRefund(
        credit_note_id: string,
        input: RecordRefundInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RecordRefundResponse>>;

      voidCreditNote(
        credit_note_id: string,
        input?: VoidCreditNoteInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<VoidCreditNoteResponse>>;

      list(
        input?: ListInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ListResponse>>;

      creditNotesForCustomer(
        customer_id: string,
        input?: CreditNotesForCustomerInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreditNotesForCustomerResponse>>;

      delete(
        credit_note_id: string,
        input?: DeleteInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<DeleteResponse>>;

      removeTaxWithheldRefund(
        credit_note_id: string,
        input: RemoveTaxWithheldRefundInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RemoveTaxWithheldRefundResponse>>;

      resendEinvoice(
        credit_note_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ResendEinvoiceResponse>>;

      sendEinvoice(
        credit_note_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<SendEinvoiceResponse>>;

      importCreditNote(
        input: ImportCreditNoteInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ImportCreditNoteResponse>>;
    }

    export interface CreateResponse {
      credit_note: CreditNote;
      invoice?: Invoice;
    }

    export interface RetrieveResponse {
      credit_note: CreditNote;
    }

    export interface PdfResponse {
      download: Download;
    }

    export interface DownloadEinvoiceResponse {
      downloads: Download[];
    }

    export interface RefundResponse {
      credit_note: CreditNote;
      transaction: Transaction;
    }

    export interface RecordRefundResponse {
      credit_note: CreditNote;
      transaction?: Transaction;
    }

    export interface VoidCreditNoteResponse {
      credit_note: CreditNote;
    }

    export interface ListResponse {
      list: { credit_note: CreditNote }[];
      next_offset?: string;
    }

    export interface CreditNotesForCustomerResponse {
      list: { credit_note: CreditNote }[];
      next_offset?: string;
    }

    export interface DeleteResponse {
      credit_note: CreditNote;
    }

    export interface RemoveTaxWithheldRefundResponse {
      credit_note: CreditNote;
    }

    export interface ResendEinvoiceResponse {
      credit_note: CreditNote;
    }

    export interface SendEinvoiceResponse {
      credit_note: CreditNote;
    }

    export interface ImportCreditNoteResponse {
      credit_note: CreditNote;
    }

    export interface Einvoice {
      id: string;
      reference_number?: string;
      status:
        | 'scheduled'
        | 'skipped'
        | 'in_progress'
        | 'success'
        | 'failed'
        | 'registered';
      message?: string;
    }
    export interface LineItem {
      id?: string;
      subscription_id?: string;
      date_from: number;
      date_to: number;
      unit_amount: number;
      quantity?: number;
      amount?: number;
      pricing_model?:
        | 'flat_fee'
        | 'per_unit'
        | 'tiered'
        | 'volume'
        | 'stairstep';
      is_taxed: boolean;
      tax_amount?: number;
      tax_rate?: number;
      unit_amount_in_decimal?: string;
      quantity_in_decimal?: string;
      amount_in_decimal?: string;
      discount_amount?: number;
      item_level_discount_amount?: number;
      metered?: boolean;
      is_percentage_pricing?: boolean;
      reference_line_item_id?: string;
      description: string;
      entity_description?: string;
      entity_type:
        | 'adhoc'
        | 'plan_item_price'
        | 'addon_item_price'
        | 'charge_item_price'
        | 'plan_setup'
        | 'plan'
        | 'addon';
      tax_exempt_reason?:
        | 'tax_not_configured'
        | 'region_non_taxable'
        | 'export'
        | 'customer_exempt'
        | 'product_exempt'
        | 'zero_rated'
        | 'reverse_charge'
        | 'high_value_physical_goods'
        | 'zero_value_item'
        | 'tax_not_configured_external_provider';
      entity_id?: string;
      customer_id?: string;
    }
    export interface Discount {
      amount: number;
      description?: string;
      entity_type:
        | 'item_level_coupon'
        | 'document_level_coupon'
        | 'promotional_credits'
        | 'prorated_credits'
        | 'item_level_discount'
        | 'document_level_discount';
      discount_type?: 'fixed_amount' | 'percentage';
      entity_id?: string;
      coupon_set_code?: string;
    }
    export interface LineItemDiscount {
      line_item_id: string;
      discount_type:
        | 'item_level_coupon'
        | 'document_level_coupon'
        | 'promotional_credits'
        | 'prorated_credits'
        | 'item_level_discount'
        | 'document_level_discount';
      coupon_id?: string;
      entity_id?: string;
      discount_amount: number;
    }
    export interface LineItemTier {
      line_item_id?: string;
      starting_unit: number;
      ending_unit?: number;
      quantity_used: number;
      unit_amount: number;
      starting_unit_in_decimal?: string;
      ending_unit_in_decimal?: string;
      quantity_used_in_decimal?: string;
      unit_amount_in_decimal?: string;
      pricing_type?: 'per_unit' | 'flat_fee' | 'package';
      package_size?: number;
    }
    export interface Tax {
      name: string;
      amount: number;
      description?: string;
    }
    export interface LineItemTax {
      line_item_id?: string;
      tax_name: string;
      tax_rate: number;
      date_to?: number;
      date_from?: number;
      prorated_taxable_amount?: number;
      is_partial_tax_applied?: boolean;
      is_non_compliance_tax?: boolean;
      taxable_amount: number;
      tax_amount: number;
      tax_juris_type?:
        | 'country'
        | 'federal'
        | 'state'
        | 'county'
        | 'city'
        | 'special'
        | 'unincorporated'
        | 'other';
      tax_juris_name?: string;
      tax_juris_code?: string;
      tax_amount_in_local_currency?: number;
      local_currency_code?: string;
    }
    export interface LinkedRefund {
      txn_id: string;
      applied_amount: number;
      applied_at: number;
      txn_status?:
        | 'in_progress'
        | 'success'
        | 'voided'
        | 'failure'
        | 'timeout'
        | 'needs_attention'
        | 'late_failure';
      txn_date?: number;
      txn_amount?: number;
      refund_reason_code?: string;
    }
    export interface Allocation {
      invoice_id: string;
      allocated_amount: number;
      allocated_at: number;
      invoice_date?: number;
      invoice_status:
        | 'paid'
        | 'posted'
        | 'payment_due'
        | 'not_paid'
        | 'voided'
        | 'pending';
      tax_application?: 'pre_tax' | 'post_tax';
    }
    export interface ShippingAddress {
      first_name?: string;
      last_name?: string;
      email?: string;
      company?: string;
      phone?: string;
      line1?: string;
      line2?: string;
      line3?: string;
      city?: string;
      state_code?: string;
      state?: string;
      country?: string;
      zip?: string;
      validation_status?: ValidationStatusEnum;
      index: number;
    }
    export interface BillingAddress {
      first_name?: string;
      last_name?: string;
      email?: string;
      company?: string;
      phone?: string;
      line1?: string;
      line2?: string;
      line3?: string;
      city?: string;
      state_code?: string;
      state?: string;
      country?: string;
      zip?: string;
      validation_status?: ValidationStatusEnum;
    }
    export interface SiteDetailsAtCreation {
      timezone?: string;
      organization_address?: object;
    }
    export interface TaxOrigin {
      country?: string;
      registration_number?: string;
    }
    export interface LineItemAddress {
      line_item_id?: string;
      first_name?: string;
      last_name?: string;
      email?: string;
      company?: string;
      phone?: string;
      line1?: string;
      line2?: string;
      line3?: string;
      city?: string;
      state_code?: string;
      state?: string;
      country?: string;
      zip?: string;
      validation_status?:
        | 'not_validated'
        | 'valid'
        | 'partially_valid'
        | 'invalid';
    }
    // REQUEST PARAMS
    //---------------

    export interface CreateInputParam {
      reference_invoice_id?: string;
      customer_id?: string;
      total?: number;
      type: 'adjustment' | 'refundable' | 'store';
      reason_code?:
        | 'product_unsatisfactory'
        | 'service_unsatisfactory'
        | 'order_change'
        | 'order_cancellation'
        | 'waiver'
        | 'other';
      create_reason_code?: string;
      date?: number;
      customer_notes?: string;
      currency_code?: string;
      comment?: string;
      line_items?: LineItemsCreateInputParam[];
    }
    export interface RetrieveInputParam {
      line_item?: LineItemRetrieveInputParam;
    }
    export interface PdfInputParam {
      disposition_type?: DispositionTypeEnum;
    }
    export interface RefundInputParam {
      refund_amount?: number;
      customer_notes?: string;
      refund_reason_code?: string;
    }
    export interface RecordRefundInputParam {
      refund_reason_code?: string;
      comment?: string;
      transaction?: TransactionRecordRefundInputParam;
    }
    export interface VoidCreditNoteInputParam {
      comment?: string;
    }
    export interface ListInputParam {
      limit?: number;
      offset?: string;
      einvoice?: EinvoiceCreditNoteListInputParam;
      include_deleted?: boolean;
      id?: filter.String;
      customer_id?: filter.String;
      subscription_id?: filter.String;
      reference_invoice_id?: filter.String;
      type?: filter.Enum;
      reason_code?: filter.Enum;
      create_reason_code?: filter.String;
      status?: filter.Enum;
      date?: filter.Timestamp;
      total?: filter.Number;
      price_type?: filter.Enum;
      amount_allocated?: filter.Number;
      amount_refunded?: filter.Number;
      amount_available?: filter.Number;
      voided_at?: filter.Timestamp;
      updated_at?: filter.Timestamp;
      channel?: filter.Enum;
      'sort_by[asc]'?: string;
      'sort_by[desc]'?: string;
    }
    export interface CreditNotesForCustomerInputParam {
      limit?: number;
      offset?: string;
    }
    export interface DeleteInputParam {
      comment?: string;
    }
    export interface RemoveTaxWithheldRefundInputParam {
      tax_withheld?: TaxWithheldRemoveTaxWithheldRefundInputParam;
    }
    export interface ImportCreditNoteInputParam {
      id: string;
      customer_id?: string;
      subscription_id?: string;
      reference_invoice_id: string;
      type: 'adjustment' | 'refundable' | 'store';
      currency_code?: string;
      create_reason_code: string;
      date: number;
      status?: 'adjusted' | 'refunded' | 'refund_due' | 'voided';
      total?: number;
      refunded_at?: number;
      voided_at?: number;
      sub_total?: number;
      round_off_amount?: number;
      fractional_correction?: number;
      vat_number_prefix?: string;
      line_items?: LineItemsImportCreditNoteInputParam[];
      line_item_tiers?: LineItemTiersImportCreditNoteInputParam[];
      discounts?: DiscountsImportCreditNoteInputParam[];
      taxes?: TaxesImportCreditNoteInputParam[];
      allocations?: AllocationsImportCreditNoteInputParam[];
      linked_refunds?: LinkedRefundsImportCreditNoteInputParam[];
    }
    export interface LineItemsCreateInputParam {
      reference_line_item_id?: string;
      unit_amount?: number;
      unit_amount_in_decimal?: string;
      quantity?: number;
      quantity_in_decimal?: string;
      amount?: number;
      date_from?: number;
      date_to?: number;
      description?: string;
      entity_type?:
        | 'adhoc'
        | 'plan_item_price'
        | 'addon_item_price'
        | 'charge_item_price';
      entity_id?: string;
    }
    export interface LineItemRetrieveInputParam {
      subscription_id?: filter.String;
      customer_id?: filter.String;
    }

    export interface TransactionRecordRefundInputParam {
      amount?: number;
      payment_method: PaymentMethodEnum;
      reference_number?: string;
      custom_payment_method_id?: string;
      date: number;
    }

    export interface EinvoiceCreditNoteListInputParam {
      status?: filter.Enum;
    }

    export interface TaxWithheldRemoveTaxWithheldRefundInputParam {
      id: string;
    }

    export interface AllocationsImportCreditNoteInputParam {
      invoice_id: string;
      allocated_amount: number;
      allocated_at: number;
    }
    export interface DiscountsImportCreditNoteInputParam {
      entity_type:
        | 'item_level_coupon'
        | 'document_level_coupon'
        | 'promotional_credits'
        | 'item_level_discount'
        | 'document_level_discount';
      entity_id?: string;
      description?: string;
      amount: number;
    }
    export interface LinkedRefundsImportCreditNoteInputParam {
      amount: number;
      payment_method: PaymentMethodEnum;
      date: number;
      reference_number?: string;
    }
    export interface TaxesImportCreditNoteInputParam {
      name: string;
      rate: number;
      amount?: number;
      description?: string;
      juris_type?:
        | 'country'
        | 'federal'
        | 'state'
        | 'county'
        | 'city'
        | 'special'
        | 'unincorporated'
        | 'other';
      juris_name?: string;
      juris_code?: string;
    }
    export interface LineItemTiersImportCreditNoteInputParam {
      line_item_id: string;
      starting_unit?: number;
      ending_unit?: number;
      quantity_used?: number;
      unit_amount?: number;
      starting_unit_in_decimal?: string;
      ending_unit_in_decimal?: string;
      quantity_used_in_decimal?: string;
      unit_amount_in_decimal?: string;
    }
    export interface LineItemsImportCreditNoteInputParam {
      reference_line_item_id?: string;
      id?: string;
      date_from?: number;
      date_to?: number;
      subscription_id?: string;
      description: string;
      unit_amount?: number;
      quantity?: number;
      amount?: number;
      unit_amount_in_decimal?: string;
      quantity_in_decimal?: string;
      amount_in_decimal?: string;
      entity_type?:
        | 'adhoc'
        | 'plan_item_price'
        | 'addon_item_price'
        | 'charge_item_price';
      entity_id?: string;
      item_level_discount1_entity_id?: string;
      item_level_discount1_amount?: number;
      item_level_discount2_entity_id?: string;
      item_level_discount2_amount?: number;
      tax1_name?: string;
      tax1_amount?: number;
      tax2_name?: string;
      tax2_amount?: number;
      tax3_name?: string;
      tax3_amount?: number;
      tax4_name?: string;
      tax4_amount?: number;
      tax5_name?: string;
      tax5_amount?: number;
      tax6_name?: string;
      tax6_amount?: number;
      tax7_name?: string;
      tax7_amount?: number;
      tax8_name?: string;
      tax8_amount?: number;
      tax9_name?: string;
      tax9_amount?: number;
      tax10_name?: string;
      tax10_amount?: number;
    }
  }
}
