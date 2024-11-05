///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface Invoice {
    id: string;
    po_number?: string;
    customer_id: string;
    subscription_id?: string;
    recurring: boolean;
    status:
      | 'paid'
      | 'posted'
      | 'payment_due'
      | 'not_paid'
      | 'voided'
      | 'pending';
    vat_number?: string;
    price_type: PriceTypeEnum;
    date?: number;
    due_date?: number;
    net_term_days?: number;
    exchange_rate?: number;
    currency_code: string;
    total?: number;
    amount_paid?: number;
    amount_adjusted?: number;
    write_off_amount?: number;
    credits_applied?: number;
    amount_due?: number;
    paid_at?: number;
    dunning_status?: 'in_progress' | 'exhausted' | 'stopped' | 'success';
    next_retry_at?: number;
    voided_at?: number;
    resource_version?: number;
    updated_at?: number;
    sub_total: number;
    sub_total_in_local_currency?: number;
    total_in_local_currency?: number;
    local_currency_code?: string;
    tax: number;
    local_currency_exchange_rate?: number;
    first_invoice?: boolean;
    new_sales_amount?: number;
    has_advance_charges?: boolean;
    term_finalized: boolean;
    is_gifted: boolean;
    generated_at?: number;
    expected_payment_date?: number;
    amount_to_collect?: number;
    round_off_amount?: number;
    line_items?: Invoice.LineItem[];
    discounts?: Invoice.Discount[];
    line_item_discounts?: Invoice.LineItemDiscount[];
    taxes?: Invoice.Tax[];
    line_item_taxes?: Invoice.LineItemTax[];
    line_item_tiers?: Invoice.LineItemTier[];
    linked_payments?: Invoice.LinkedPayment[];
    dunning_attempts?: Invoice.DunningAttempt[];
    applied_credits?: Invoice.AppliedCredit[];
    adjustment_credit_notes?: Invoice.AdjustmentCreditNote[];
    issued_credit_notes?: Invoice.IssuedCreditNote[];
    linked_orders?: Invoice.LinkedOrder[];
    notes?: Invoice.Note[];
    shipping_address?: Invoice.ShippingAddress;
    statement_descriptor?: Invoice.StatementDescriptor;
    billing_address?: Invoice.BillingAddress;
    einvoice?: Invoice.Einvoice;
    payment_owner?: string;
    void_reason_code?: string;
    deleted: boolean;
    tax_category?: string;
    vat_number_prefix?: string;
    channel?: ChannelEnum;
    business_entity_id?: string;
    site_details_at_creation?: Invoice.SiteDetailsAtCreation;
    tax_origin?: Invoice.TaxOrigin;
  }

  export namespace Invoice {
    export class InvoiceResource {
      create(
        input?: CreateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateResponse>>;

      createForChargeItemsAndCharges(
        input: CreateForChargeItemsAndChargesInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateForChargeItemsAndChargesResponse>>;

      charge(
        input: ChargeInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ChargeResponse>>;

      chargeAddon(
        input: ChargeAddonInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ChargeAddonResponse>>;

      createForChargeItem(
        input: CreateForChargeItemInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateForChargeItemResponse>>;

      stopDunning(
        invoice_id: string,
        input?: StopDunningInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<StopDunningResponse>>;

      importInvoice(
        input: ImportInvoiceInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ImportInvoiceResponse>>;

      applyPayments(
        invoice_id: string,
        input?: ApplyPaymentsInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ApplyPaymentsResponse>>;

      syncUsages(
        invoice_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<SyncUsagesResponse>>;

      deleteLineItems(
        invoice_id: string,
        input?: DeleteLineItemsInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<DeleteLineItemsResponse>>;

      applyCredits(
        invoice_id: string,
        input?: ApplyCreditsInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ApplyCreditsResponse>>;

      list(
        input?: ListInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ListResponse>>;

      invoicesForCustomer(
        customer_id: string,
        input?: InvoicesForCustomerInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<InvoicesForCustomerResponse>>;

      invoicesForSubscription(
        subscription_id: string,
        input?: InvoicesForSubscriptionInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<InvoicesForSubscriptionResponse>>;

      retrieve(
        invoice_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RetrieveResponse>>;

      pdf(
        invoice_id: string,
        input?: PdfInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<PdfResponse>>;

      downloadEinvoice(
        invoice_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<DownloadEinvoiceResponse>>;

      listPaymentReferenceNumbers(
        input?: ListPaymentReferenceNumbersInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ListPaymentReferenceNumbersResponse>>;

      addCharge(
        invoice_id: string,
        input: AddChargeInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<AddChargeResponse>>;

      addAddonCharge(
        invoice_id: string,
        input: AddAddonChargeInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<AddAddonChargeResponse>>;

      addChargeItem(
        invoice_id: string,
        input: AddChargeItemInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<AddChargeItemResponse>>;

      close(
        invoice_id: string,
        input?: CloseInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CloseResponse>>;

      collectPayment(
        invoice_id: string,
        input?: CollectPaymentInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CollectPaymentResponse>>;

      recordPayment(
        invoice_id: string,
        input: RecordPaymentInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RecordPaymentResponse>>;

      recordTaxWithheld(
        invoice_id: string,
        input: RecordTaxWithheldInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RecordTaxWithheldResponse>>;

      removeTaxWithheld(
        invoice_id: string,
        input: RemoveTaxWithheldInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RemoveTaxWithheldResponse>>;

      refund(
        invoice_id: string,
        input?: RefundInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RefundResponse>>;

      recordRefund(
        invoice_id: string,
        input: RecordRefundInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RecordRefundResponse>>;

      removePayment(
        invoice_id: string,
        input: RemovePaymentInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RemovePaymentResponse>>;

      removeCreditNote(
        invoice_id: string,
        input: RemoveCreditNoteInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RemoveCreditNoteResponse>>;

      voidInvoice(
        invoice_id: string,
        input?: VoidInvoiceInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<VoidInvoiceResponse>>;

      writeOff(
        invoice_id: string,
        input?: WriteOffInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<WriteOffResponse>>;

      delete(
        invoice_id: string,
        input?: DeleteInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<DeleteResponse>>;

      updateDetails(
        invoice_id: string,
        input?: UpdateDetailsInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<UpdateDetailsResponse>>;

      applyPaymentScheduleScheme(
        invoice_id: string,
        input: ApplyPaymentScheduleSchemeInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ApplyPaymentScheduleSchemeResponse>>;

      paymentSchedules(
        invoice_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<PaymentSchedulesResponse>>;

      resendEinvoice(
        invoice_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ResendEinvoiceResponse>>;

      sendEinvoice(
        invoice_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<SendEinvoiceResponse>>;
    }

    export interface CreateResponse {
      invoice: Invoice;
    }

    export interface CreateForChargeItemsAndChargesResponse {
      invoice: Invoice;
    }

    export interface ChargeResponse {
      invoice: Invoice;
    }

    export interface ChargeAddonResponse {
      invoice: Invoice;
    }

    export interface CreateForChargeItemResponse {
      invoice: Invoice;
    }

    export interface StopDunningResponse {
      invoice: Invoice;
    }

    export interface ImportInvoiceResponse {
      invoice: Invoice;
      credit_note?: CreditNote;
    }

    export interface ApplyPaymentsResponse {
      invoice: Invoice;
    }

    export interface SyncUsagesResponse {
      invoice: Invoice;
    }

    export interface DeleteLineItemsResponse {
      invoice: Invoice;
    }

    export interface ApplyCreditsResponse {
      invoice: Invoice;
    }

    export interface ListResponse {
      list: { invoice: Invoice }[];
      next_offset?: string;
    }

    export interface InvoicesForCustomerResponse {
      list: { invoice: Invoice }[];
      next_offset?: string;
    }

    export interface InvoicesForSubscriptionResponse {
      list: { invoice: Invoice }[];
      next_offset?: string;
    }

    export interface RetrieveResponse {
      invoice: Invoice;
    }

    export interface PdfResponse {
      download: Download;
    }

    export interface DownloadEinvoiceResponse {
      downloads: Download[];
    }

    export interface ListPaymentReferenceNumbersResponse {
      list: { payment_reference_number: PaymentReferenceNumber }[];
      next_offset?: string;
    }

    export interface AddChargeResponse {
      invoice: Invoice;
    }

    export interface AddAddonChargeResponse {
      invoice: Invoice;
    }

    export interface AddChargeItemResponse {
      invoice: Invoice;
    }

    export interface CloseResponse {
      invoice: Invoice;
    }

    export interface CollectPaymentResponse {
      invoice: Invoice;
      transaction: Transaction;
    }

    export interface RecordPaymentResponse {
      invoice: Invoice;
      transaction: Transaction;
    }

    export interface RecordTaxWithheldResponse {
      invoice: Invoice;
    }

    export interface RemoveTaxWithheldResponse {
      invoice: Invoice;
    }

    export interface RefundResponse {
      invoice: Invoice;
      transaction: Transaction;
      credit_note?: CreditNote;
    }

    export interface RecordRefundResponse {
      invoice: Invoice;
      transaction?: Transaction;
      credit_note?: CreditNote;
    }

    export interface RemovePaymentResponse {
      invoice: Invoice;
      transaction: Transaction;
    }

    export interface RemoveCreditNoteResponse {
      invoice: Invoice;
      credit_note: CreditNote;
    }

    export interface VoidInvoiceResponse {
      invoice: Invoice;
      credit_note?: CreditNote;
    }

    export interface WriteOffResponse {
      invoice: Invoice;
      credit_note: CreditNote;
    }

    export interface DeleteResponse {
      invoice: Invoice;
    }

    export interface UpdateDetailsResponse {
      invoice: Invoice;
    }

    export interface ApplyPaymentScheduleSchemeResponse {
      invoice: Invoice;
    }

    export interface PaymentSchedulesResponse {
      payment_schedules: PaymentSchedule[];
    }

    export interface ResendEinvoiceResponse {
      invoice: Invoice;
    }

    export interface SendEinvoiceResponse {
      invoice: Invoice;
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
      usage_percentage?: string;
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
    }
    export interface LinkedPayment {
      txn_id: string;
      applied_amount: number;
      applied_at: number;
      txn_status?:
        | 'in_progress'
        | 'success'
        | 'voided'
        | 'failure'
        | 'timeout'
        | 'needs_attention';
      txn_date?: number;
      txn_amount?: number;
    }
    export interface DunningAttempt {
      attempt: number;
      transaction_id?: string;
      dunning_type: 'auto_collect' | 'offline' | 'direct_debit';
      created_at?: number;
      txn_status?:
        | 'in_progress'
        | 'success'
        | 'voided'
        | 'failure'
        | 'timeout'
        | 'needs_attention';
      txn_amount?: number;
    }
    export interface AppliedCredit {
      cn_id: string;
      applied_amount: number;
      applied_at: number;
      cn_reason_code?:
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
      cn_create_reason_code?: string;
      cn_date?: number;
      cn_status: 'adjusted' | 'refunded' | 'refund_due' | 'voided';
    }
    export interface AdjustmentCreditNote {
      cn_id: string;
      cn_reason_code?:
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
      cn_create_reason_code?: string;
      cn_date?: number;
      cn_total?: number;
      cn_status: 'adjusted' | 'refunded' | 'refund_due' | 'voided';
    }
    export interface IssuedCreditNote {
      cn_id: string;
      cn_reason_code?:
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
      cn_create_reason_code?: string;
      cn_date?: number;
      cn_total?: number;
      cn_status: 'adjusted' | 'refunded' | 'refund_due' | 'voided';
    }
    export interface LinkedOrder {
      id: string;
      document_number?: string;
      status?:
        | 'new'
        | 'processing'
        | 'complete'
        | 'cancelled'
        | 'voided'
        | 'queued'
        | 'awaiting_shipment'
        | 'on_hold'
        | 'delivered'
        | 'shipped'
        | 'partially_delivered'
        | 'returned';
      order_type?: 'manual' | 'system_generated';
      reference_id?: string;
      fulfillment_status?: string;
      batch_id?: string;
      created_at: number;
    }
    export interface Note {
      entity_type:
        | 'coupon'
        | 'subscription'
        | 'customer'
        | 'plan_item_price'
        | 'addon_item_price'
        | 'charge_item_price'
        | 'tax'
        | 'plan'
        | 'addon';
      note: string;
      entity_id?: string;
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
    export interface StatementDescriptor {
      id: string;
      descriptor?: string;
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
    export interface SiteDetailsAtCreation {
      timezone?: string;
      organization_address?: object;
    }
    export interface TaxOrigin {
      country?: string;
      registration_number?: string;
    }
    // REQUEST PARAMS
    //---------------

    export interface CreateInputParam {
      customer_id?: string;
      subscription_id?: string;
      currency_code?: string;
      invoice_date?: number;
      invoice_note?: string;
      remove_general_note?: boolean;
      po_number?: string /**
       * @deprecated Please refer API docs to use other attributes
       */;

      coupon?: string;
      coupon_ids?: string[];
      authorization_transaction_id?: string;
      payment_source_id?: string;
      auto_collection?: AutoCollectionEnum;
      token_id?: string;
      replace_primary_payment_source?: boolean;
      retain_payment_source?: boolean;
      payment_initiator?: PaymentInitiatorEnum;
      shipping_address?: ShippingAddressCreateInputParam;
      statement_descriptor?: StatementDescriptorCreateInputParam;
      card?: CardCreateInputParam;
      bank_account?: BankAccountCreateInputParam;
      payment_method?: PaymentMethodCreateInputParam;
      payment_intent?: PaymentIntentCreateInputParam;
      addons?: AddonsCreateInputParam[];
      charges?: ChargesCreateInputParam[];
      tax_providers_fields?: TaxProvidersFieldsCreateInputParam[];
      notes_to_remove?: NotesToRemoveCreateInputParam[];
    }
    export interface CreateForChargeItemsAndChargesInputParam {
      customer_id?: string;
      subscription_id?: string;
      currency_code?: string;
      invoice_note?: string;
      remove_general_note?: boolean;
      po_number?: string /**
       * @deprecated Please refer API docs to use other attributes
       */;

      coupon?: string;
      coupon_ids?: string[];
      authorization_transaction_id?: string;
      payment_source_id?: string;
      auto_collection?: AutoCollectionEnum;
      invoice_date?: number;
      token_id?: string;
      replace_primary_payment_source?: boolean;
      retain_payment_source?: boolean;
      payment_initiator?: PaymentInitiatorEnum;
      shipping_address?: ShippingAddressCreateForChargeItemsAndChargesInputParam;
      statement_descriptor?: StatementDescriptorCreateForChargeItemsAndChargesInputParam;
      card?: CardCreateForChargeItemsAndChargesInputParam;
      bank_account?: BankAccountCreateForChargeItemsAndChargesInputParam;
      payment_method?: PaymentMethodCreateForChargeItemsAndChargesInputParam;
      payment_intent?: PaymentIntentCreateForChargeItemsAndChargesInputParam;
      item_prices?: ItemPricesCreateForChargeItemsAndChargesInputParam[];
      item_tiers?: ItemTiersCreateForChargeItemsAndChargesInputParam[];
      charges?: ChargesCreateForChargeItemsAndChargesInputParam[];
      notes_to_remove?: NotesToRemoveCreateForChargeItemsAndChargesInputParam[];
      tax_providers_fields?: TaxProvidersFieldsCreateForChargeItemsAndChargesInputParam[];
      discounts?: DiscountsCreateForChargeItemsAndChargesInputParam[];
    }
    export interface ChargeInputParam {
      customer_id?: string;
      subscription_id?: string;
      currency_code?: string;
      amount?: number;
      amount_in_decimal?: string;
      description: string;
      date_from?: number;
      date_to?: number;
      coupon_ids?: string[] /**
       * @deprecated Please refer API docs to use other attributes
       */;

      coupon?: string;
      avalara_sale_type?: AvalaraSaleTypeEnum;
      avalara_transaction_type?: number;
      avalara_service_type?: number;
      po_number?: string;
      invoice_date?: number;
      payment_source_id?: string;
      payment_initiator?: PaymentInitiatorEnum;
      tax_providers_fields?: TaxProvidersFieldsChargeInputParam[];
    }
    export interface ChargeAddonInputParam {
      customer_id?: string;
      subscription_id?: string;
      addon_id: string;
      addon_quantity?: number;
      addon_unit_price?: number;
      addon_quantity_in_decimal?: string;
      addon_unit_price_in_decimal?: string;
      date_from?: number;
      date_to?: number;
      coupon_ids?: string[] /**
       * @deprecated Please refer API docs to use other attributes
       */;

      coupon?: string;
      po_number?: string;
      invoice_date?: number;
      payment_source_id?: string;
      payment_initiator?: PaymentInitiatorEnum;
    }
    export interface CreateForChargeItemInputParam {
      customer_id?: string;
      subscription_id?: string;
      po_number?: string;
      coupon?: string;
      payment_source_id?: string;
      payment_initiator?: PaymentInitiatorEnum;
      invoice_date?: number;
      item_price?: ItemPriceCreateForChargeItemInputParam;
      item_tiers?: ItemTiersCreateForChargeItemInputParam[];
    }
    export interface StopDunningInputParam {
      comment?: string;
    }
    export interface ImportInvoiceInputParam {
      id: string;
      currency_code?: string;
      customer_id?: string;
      subscription_id?: string;
      po_number?: string;
      price_type?: PriceTypeEnum;
      tax_override_reason?: TaxOverrideReasonEnum;
      vat_number?: string;
      vat_number_prefix?: string;
      date: number;
      total: number;
      round_off?: number;
      status?:
        | 'paid'
        | 'posted'
        | 'payment_due'
        | 'not_paid'
        | 'voided'
        | 'pending';
      voided_at?: number;
      void_reason_code?: string;
      is_written_off?: boolean;
      write_off_amount?: number;
      write_off_date?: number;
      due_date?: number;
      net_term_days?: number;
      has_advance_charges?: boolean;
      use_for_proration?: boolean;
      credit_note?: CreditNoteImportInvoiceInputParam;
      billing_address?: BillingAddressImportInvoiceInputParam;
      shipping_address?: ShippingAddressImportInvoiceInputParam;
      line_items?: LineItemsImportInvoiceInputParam[];
      payment_reference_numbers?: PaymentReferenceNumbersImportInvoiceInputParam[];
      line_item_tiers?: LineItemTiersImportInvoiceInputParam[];
      discounts?: DiscountsImportInvoiceInputParam[];
      taxes?: TaxesImportInvoiceInputParam[];
      payments?: PaymentsImportInvoiceInputParam[];
      notes?: NotesImportInvoiceInputParam[];
    }
    export interface ApplyPaymentsInputParam {
      comment?: string;
      transactions?: TransactionsApplyPaymentsInputParam[];
    }
    export interface DeleteLineItemsInputParam {
      line_items?: LineItemsDeleteLineItemsInputParam[];
    }
    export interface ApplyCreditsInputParam {
      comment?: string;
      credit_notes?: CreditNotesApplyCreditsInputParam[];
    }
    export interface ListInputParam {
      limit?: number;
      offset?: string;
      einvoice?: EinvoiceInvoiceListInputParam /**
       * @deprecated Please refer API docs to use other attributes
       */;

      paid_on_after?: number;
      include_deleted?: boolean;
      id?: filter.String;
      subscription_id?: filter.String;
      customer_id?: filter.String;
      recurring?: filter.Boolean;
      status?: filter.Enum;
      price_type?: filter.Enum;
      date?: filter.Timestamp;
      paid_at?: filter.Timestamp;
      total?: filter.Number;
      amount_paid?: filter.Number;
      amount_adjusted?: filter.Number;
      credits_applied?: filter.Number;
      amount_due?: filter.Number;
      dunning_status?: filter.Enum;
      payment_owner?: filter.String;
      updated_at?: filter.Timestamp;
      channel?: filter.Enum;
      voided_at?: filter.Timestamp;
      void_reason_code?: filter.String;
      'sort_by[asc]'?: string;
      'sort_by[desc]'?: string;
    }
    export interface InvoicesForCustomerInputParam {
      limit?: number;
      offset?: string;
    }
    export interface InvoicesForSubscriptionInputParam {
      limit?: number;
      offset?: string;
    }
    export interface PdfInputParam {
      disposition_type?: DispositionTypeEnum;
    }
    export interface ListPaymentReferenceNumbersInputParam {
      limit?: number;
      offset?: string;
      payment_reference_number?: PaymentReferenceNumberInvoiceListPaymentReferenceNumbersInputParam;
      id?: filter.String;
    }
    export interface AddChargeInputParam {
      amount: number;
      description: string;
      avalara_sale_type?: AvalaraSaleTypeEnum;
      avalara_transaction_type?: number;
      avalara_service_type?: number;
      avalara_tax_code?: string;
      hsn_code?: string;
      taxjar_product_code?: string;
      comment?: string;
      subscription_id?: string;
      line_item?: LineItemAddChargeInputParam;
    }
    export interface AddAddonChargeInputParam {
      addon_id: string;
      addon_quantity?: number;
      addon_unit_price?: number;
      addon_quantity_in_decimal?: string;
      addon_unit_price_in_decimal?: string;
      comment?: string;
      subscription_id?: string;
      line_item?: LineItemAddAddonChargeInputParam;
    }
    export interface AddChargeItemInputParam {
      comment?: string;
      subscription_id?: string;
      item_price?: ItemPriceAddChargeItemInputParam;
      item_tiers?: ItemTiersAddChargeItemInputParam[];
    }
    export interface CloseInputParam {
      comment?: string;
      invoice_note?: string;
      remove_general_note?: boolean;
      invoice_date?: number;
      notes_to_remove?: NotesToRemoveCloseInputParam[];
    }
    export interface CollectPaymentInputParam {
      amount?: number;
      authorization_transaction_id?: string;
      payment_source_id?: string;
      comment?: string;
      payment_initiator?: PaymentInitiatorEnum;
    }
    export interface RecordPaymentInputParam {
      comment?: string;
      transaction?: TransactionRecordPaymentInputParam;
    }
    export interface RecordTaxWithheldInputParam {
      tax_withheld?: TaxWithheldRecordTaxWithheldInputParam;
    }
    export interface RemoveTaxWithheldInputParam {
      tax_withheld?: TaxWithheldRemoveTaxWithheldInputParam;
    }
    export interface RefundInputParam {
      refund_amount?: number;
      comment?: string;
      customer_notes?: string;
      credit_note?: CreditNoteRefundInputParam;
    }
    export interface RecordRefundInputParam {
      comment?: string;
      customer_notes?: string;
      transaction?: TransactionRecordRefundInputParam;
      credit_note?: CreditNoteRecordRefundInputParam;
    }
    export interface RemovePaymentInputParam {
      transaction?: TransactionRemovePaymentInputParam;
    }
    export interface RemoveCreditNoteInputParam {
      credit_note?: CreditNoteRemoveCreditNoteInputParam;
    }
    export interface VoidInvoiceInputParam {
      comment?: string;
      void_reason_code?: string;
    }
    export interface WriteOffInputParam {
      comment?: string;
    }
    export interface DeleteInputParam {
      comment?: string;
    }
    export interface UpdateDetailsInputParam {
      vat_number?: string;
      vat_number_prefix?: string;
      po_number?: string;
      comment?: string;
      billing_address?: BillingAddressUpdateDetailsInputParam;
      shipping_address?: ShippingAddressUpdateDetailsInputParam;
      statement_descriptor?: StatementDescriptorUpdateDetailsInputParam;
    }
    export interface ApplyPaymentScheduleSchemeInputParam {
      scheme_id: string;
      amount?: number;
    }
    export interface StatementDescriptorCreateInputParam {
      descriptor?: string;
    }
    export interface ShippingAddressCreateInputParam {
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
      zip?: string;
      country?: string;
      validation_status?: ValidationStatusEnum;
    }
    export interface PaymentMethodCreateInputParam {
      type?: TypeEnum;
      /**
       * @deprecated Please refer API docs to use other attributes
       */
      gateway?: GatewayEnum;
      gateway_account_id?: string;
      reference_id?: string;
      tmp_token?: string;
      issuing_country?: string;
      additional_information?: any;
    }
    export interface BankAccountCreateInputParam {
      gateway_account_id?: string;
      iban?: string;
      first_name?: string;
      last_name?: string;
      company?: string;
      email?: string;
      phone?: string;
      bank_name?: string;
      account_number?: string;
      routing_number?: string;
      bank_code?: string;
      account_type?: AccountTypeEnum;
      account_holder_type?: AccountHolderTypeEnum;
      echeck_type?: EcheckTypeEnum;
      issuing_country?: string;
      swedish_identity_number?: string;
      billing_address?: any;
    }
    export interface PaymentIntentCreateInputParam {
      id?: string;
      gateway_account_id?: string;
      gw_token?: string;
      payment_method_type?:
        | 'card'
        | 'ideal'
        | 'sofort'
        | 'bancontact'
        | 'google_pay'
        | 'dotpay'
        | 'giropay'
        | 'apple_pay'
        | 'upi'
        | 'netbanking_emandates'
        | 'paypal_express_checkout'
        | 'direct_debit'
        | 'boleto'
        | 'venmo'
        | 'amazon_payments'
        | 'pay_to'
        | 'faster_payments'
        | 'sepa_instant_transfer'
        | 'klarna_pay_now'
        | 'online_banking_poland';
      reference_id?: string;
      /**
       * @deprecated Please refer API docs to use other attributes
       */
      gw_payment_method_id?: string;
      additional_information?: any;
    }
    export interface CardCreateInputParam {
      /**
       * @deprecated Please refer API docs to use other attributes
       */
      gateway?: GatewayEnum;
      gateway_account_id?: string;
      /**
       * @deprecated Please refer API docs to use other attributes
       */
      tmp_token?: string;
      first_name?: string;
      last_name?: string;
      number?: string;
      expiry_month?: number;
      expiry_year?: number;
      cvv?: string;
      billing_addr1?: string;
      billing_addr2?: string;
      billing_city?: string;
      billing_state_code?: string;
      billing_state?: string;
      billing_zip?: string;
      billing_country?: string;
      /**
       * @deprecated Please refer API docs to use other attributes
       */
      ip_address?: string;
      additional_information?: any;
    }

    export interface ChargesCreateInputParam {
      amount?: number;
      amount_in_decimal?: string;
      description?: string;
      taxable?: boolean;
      tax_profile_id?: string;
      avalara_tax_code?: string;
      hsn_code?: string;
      taxjar_product_code?: string;
      avalara_sale_type?: AvalaraSaleTypeEnum;
      avalara_transaction_type?: number;
      avalara_service_type?: number;
      date_from?: number;
      date_to?: number;
    }
    export interface AddonsCreateInputParam {
      id?: string;
      quantity?: number;
      unit_price?: number;
      quantity_in_decimal?: string;
      unit_price_in_decimal?: string;
      date_from?: number;
      date_to?: number;
    }
    export interface TaxProvidersFieldsCreateInputParam {
      provider_name?: string;
      field_id?: string;
      field_value?: string;
    }
    export interface NotesToRemoveCreateInputParam {
      entity_type?: EntityTypeEnum;
      entity_id?: string;
    }
    export interface StatementDescriptorCreateForChargeItemsAndChargesInputParam {
      descriptor?: string;
    }
    export interface ShippingAddressCreateForChargeItemsAndChargesInputParam {
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
      zip?: string;
      country?: string;
      validation_status?: ValidationStatusEnum;
    }
    export interface PaymentMethodCreateForChargeItemsAndChargesInputParam {
      type?: TypeEnum;
      /**
       * @deprecated Please refer API docs to use other attributes
       */
      gateway?: GatewayEnum;
      gateway_account_id?: string;
      reference_id?: string;
      tmp_token?: string;
      issuing_country?: string;
      additional_information?: any;
    }
    export interface BankAccountCreateForChargeItemsAndChargesInputParam {
      gateway_account_id?: string;
      iban?: string;
      first_name?: string;
      last_name?: string;
      company?: string;
      email?: string;
      phone?: string;
      bank_name?: string;
      account_number?: string;
      routing_number?: string;
      bank_code?: string;
      account_type?: AccountTypeEnum;
      account_holder_type?: AccountHolderTypeEnum;
      echeck_type?: EcheckTypeEnum;
      issuing_country?: string;
      swedish_identity_number?: string;
      billing_address?: any;
    }
    export interface PaymentIntentCreateForChargeItemsAndChargesInputParam {
      id?: string;
      gateway_account_id?: string;
      gw_token?: string;
      payment_method_type?:
        | 'card'
        | 'ideal'
        | 'sofort'
        | 'bancontact'
        | 'google_pay'
        | 'dotpay'
        | 'giropay'
        | 'apple_pay'
        | 'upi'
        | 'netbanking_emandates'
        | 'paypal_express_checkout'
        | 'direct_debit'
        | 'boleto'
        | 'venmo'
        | 'amazon_payments'
        | 'pay_to'
        | 'faster_payments'
        | 'sepa_instant_transfer'
        | 'klarna_pay_now'
        | 'online_banking_poland';
      reference_id?: string;
      /**
       * @deprecated Please refer API docs to use other attributes
       */
      gw_payment_method_id?: string;
      additional_information?: any;
    }
    export interface CardCreateForChargeItemsAndChargesInputParam {
      /**
       * @deprecated Please refer API docs to use other attributes
       */
      gateway?: GatewayEnum;
      gateway_account_id?: string;
      /**
       * @deprecated Please refer API docs to use other attributes
       */
      tmp_token?: string;
      first_name?: string;
      last_name?: string;
      number?: string;
      expiry_month?: number;
      expiry_year?: number;
      cvv?: string;
      billing_addr1?: string;
      billing_addr2?: string;
      billing_city?: string;
      billing_state_code?: string;
      billing_state?: string;
      billing_zip?: string;
      billing_country?: string;
      /**
       * @deprecated Please refer API docs to use other attributes
       */
      ip_address?: string;
      additional_information?: any;
    }

    export interface ChargesCreateForChargeItemsAndChargesInputParam {
      amount?: number;
      amount_in_decimal?: string;
      description?: string;
      taxable?: boolean;
      tax_profile_id?: string;
      avalara_tax_code?: string;
      hsn_code?: string;
      taxjar_product_code?: string;
      avalara_sale_type?: AvalaraSaleTypeEnum;
      avalara_transaction_type?: number;
      avalara_service_type?: number;
      date_from?: number;
      date_to?: number;
    }
    export interface DiscountsCreateForChargeItemsAndChargesInputParam {
      percentage?: number;
      amount?: number;
      apply_on: ApplyOnEnum;
      item_price_id?: string;
    }
    export interface ItemTiersCreateForChargeItemsAndChargesInputParam {
      item_price_id?: string;
      starting_unit?: number;
      ending_unit?: number;
      price?: number;
      starting_unit_in_decimal?: string;
      ending_unit_in_decimal?: string;
      price_in_decimal?: string;
    }
    export interface ItemPricesCreateForChargeItemsAndChargesInputParam {
      item_price_id?: string;
      quantity?: number;
      quantity_in_decimal?: string;
      unit_price?: number;
      unit_price_in_decimal?: string;
      date_from?: number;
      date_to?: number;
    }
    export interface TaxProvidersFieldsCreateForChargeItemsAndChargesInputParam {
      provider_name?: string;
      field_id?: string;
      field_value?: string;
    }
    export interface NotesToRemoveCreateForChargeItemsAndChargesInputParam {
      entity_type?: EntityTypeEnum;
      entity_id?: string;
    }
    export interface TaxProvidersFieldsChargeInputParam {
      provider_name?: string;
      field_id?: string;
      field_value?: string;
    }
    export interface ItemPriceCreateForChargeItemInputParam {
      item_price_id: string;
      quantity?: number;
      quantity_in_decimal?: string;
      unit_price?: number;
      unit_price_in_decimal?: string;
      date_from?: number;
      date_to?: number;
    }

    export interface ItemTiersCreateForChargeItemInputParam {
      starting_unit?: number;
      ending_unit?: number;
      price?: number;
      starting_unit_in_decimal?: string;
      ending_unit_in_decimal?: string;
      price_in_decimal?: string;
    }
    export interface BillingAddressImportInvoiceInputParam {
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
      zip?: string;
      country?: string;
      validation_status?: ValidationStatusEnum;
    }
    export interface ShippingAddressImportInvoiceInputParam {
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
      zip?: string;
      country?: string;
      validation_status?: ValidationStatusEnum;
    }
    export interface CreditNoteImportInvoiceInputParam {
      id?: string;
    }

    export interface PaymentReferenceNumbersImportInvoiceInputParam {
      id?: string;
      type: 'kid' | 'ocr' | 'frn' | 'fik' | 'swiss_reference';
      number: string;
    }
    export interface NotesImportInvoiceInputParam {
      entity_type?:
        | 'coupon'
        | 'plan_item_price'
        | 'addon_item_price'
        | 'charge_item_price';
      entity_id?: string;
      note?: string;
    }
    export interface DiscountsImportInvoiceInputParam {
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
    export interface PaymentsImportInvoiceInputParam {
      amount: number;
      payment_method: PaymentMethodEnum;
      date?: number;
      reference_number?: string;
    }
    export interface TaxesImportInvoiceInputParam {
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
    export interface LineItemTiersImportInvoiceInputParam {
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
    export interface LineItemsImportInvoiceInputParam {
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
    export interface TransactionsApplyPaymentsInputParam {
      id?: string;
      amount?: number;
    }
    export interface LineItemsDeleteLineItemsInputParam {
      id?: string;
    }
    export interface CreditNotesApplyCreditsInputParam {
      id?: string;
    }
    export interface EinvoiceInvoiceListInputParam {
      status?: filter.Enum;
    }

    export interface PaymentReferenceNumberInvoiceListPaymentReferenceNumbersInputParam {
      number?: filter.String;
    }

    export interface LineItemAddChargeInputParam {
      date_from?: number;
      date_to?: number;
    }

    export interface LineItemAddAddonChargeInputParam {
      date_from?: number;
      date_to?: number;
    }

    export interface ItemPriceAddChargeItemInputParam {
      item_price_id: string;
      quantity?: number;
      quantity_in_decimal?: string;
      unit_price?: number;
      unit_price_in_decimal?: string;
      date_from?: number;
      date_to?: number;
    }

    export interface ItemTiersAddChargeItemInputParam {
      starting_unit?: number;
      ending_unit?: number;
      price?: number;
      starting_unit_in_decimal?: string;
      ending_unit_in_decimal?: string;
      price_in_decimal?: string;
    }
    export interface NotesToRemoveCloseInputParam {
      entity_type?: EntityTypeEnum;
      entity_id?: string;
    }
    export interface TransactionRecordPaymentInputParam {
      amount?: number;
      payment_method: PaymentMethodEnum;
      reference_number?: string;
      custom_payment_method_id?: string;
      id_at_gateway?: string;
      status?: 'success' | 'failure';
      date?: number;
      error_code?: string;
      error_text?: string;
    }

    export interface TaxWithheldRecordTaxWithheldInputParam {
      amount: number;
      reference_number?: string;
      date?: number;
      description?: string;
    }

    export interface TaxWithheldRemoveTaxWithheldInputParam {
      id: string;
    }

    export interface CreditNoteRefundInputParam {
      reason_code?:
        | 'product_unsatisfactory'
        | 'service_unsatisfactory'
        | 'order_change'
        | 'order_cancellation'
        | 'waiver'
        | 'other';
      create_reason_code?: string;
    }

    export interface TransactionRecordRefundInputParam {
      amount?: number;
      payment_method: PaymentMethodEnum;
      reference_number?: string;
      custom_payment_method_id?: string;
      date: number;
    }
    export interface CreditNoteRecordRefundInputParam {
      reason_code?:
        | 'chargeback'
        | 'product_unsatisfactory'
        | 'service_unsatisfactory'
        | 'order_change'
        | 'order_cancellation'
        | 'waiver'
        | 'other';
      create_reason_code?: string;
    }

    export interface TransactionRemovePaymentInputParam {
      id: string;
    }

    export interface CreditNoteRemoveCreditNoteInputParam {
      id: string;
    }

    export interface BillingAddressUpdateDetailsInputParam {
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
      zip?: string;
      country?: string;
      validation_status?: ValidationStatusEnum;
    }
    export interface StatementDescriptorUpdateDetailsInputParam {
      descriptor?: string;
    }
    export interface ShippingAddressUpdateDetailsInputParam {
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
      zip?: string;
      country?: string;
      validation_status?: ValidationStatusEnum;
    }
  }
}
