///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'Chargebee' {
  export interface Export {
    id: string;

    operation_type: string;

    mime_type: 'pdf' | 'zip';

    status: 'in_process' | 'completed' | 'failed';

    created_at: number;

    download?: Export.Download;
  }
  export namespace Export {
    export class ExportResource {
      retrieve(
        export_id: string,
      ): ChargebeeRequest<ChargebeeResponse<RetrieveResponse>>;

      revenueRecognition(
        input: RevenueRecognitionInputParam,
      ): ChargebeeRequest<ChargebeeResponse<RevenueRecognitionResponse>>;

      deferredRevenue(
        input: DeferredRevenueInputParam,
      ): ChargebeeRequest<ChargebeeResponse<DeferredRevenueResponse>>;

      plans(
        input?: PlansInputParam,
      ): ChargebeeRequest<ChargebeeResponse<PlansResponse>>;

      addons(
        input?: AddonsInputParam,
      ): ChargebeeRequest<ChargebeeResponse<AddonsResponse>>;

      coupons(
        input?: CouponsInputParam,
      ): ChargebeeRequest<ChargebeeResponse<CouponsResponse>>;

      customers(
        input?: CustomersInputParam,
      ): ChargebeeRequest<ChargebeeResponse<CustomersResponse>>;

      subscriptions(
        input?: SubscriptionsInputParam,
      ): ChargebeeRequest<ChargebeeResponse<SubscriptionsResponse>>;

      invoices(
        input?: InvoicesInputParam,
      ): ChargebeeRequest<ChargebeeResponse<InvoicesResponse>>;

      creditNotes(
        input?: CreditNotesInputParam,
      ): ChargebeeRequest<ChargebeeResponse<CreditNotesResponse>>;

      transactions(
        input?: TransactionsInputParam,
      ): ChargebeeRequest<ChargebeeResponse<TransactionsResponse>>;

      orders(
        input?: OrdersInputParam,
      ): ChargebeeRequest<ChargebeeResponse<OrdersResponse>>;

      itemFamilies(
        input?: ItemFamiliesInputParam,
      ): ChargebeeRequest<ChargebeeResponse<ItemFamiliesResponse>>;

      items(
        input?: ItemsInputParam,
      ): ChargebeeRequest<ChargebeeResponse<ItemsResponse>>;

      itemPrices(
        input?: ItemPricesInputParam,
      ): ChargebeeRequest<ChargebeeResponse<ItemPricesResponse>>;

      attachedItems(
        input?: AttachedItemsInputParam,
      ): ChargebeeRequest<ChargebeeResponse<AttachedItemsResponse>>;

      differentialPrices(
        input?: DifferentialPricesInputParam,
      ): ChargebeeRequest<ChargebeeResponse<DifferentialPricesResponse>>;

      priceVariants(
        input?: PriceVariantsInputParam,
      ): ChargebeeRequest<ChargebeeResponse<PriceVariantsResponse>>;
    }
    export interface RetrieveResponse {
      export: Export;
    }

    export interface RevenueRecognitionResponse {
      export: Export;
    }

    export interface DeferredRevenueResponse {
      export: Export;
    }

    export interface PlansResponse {
      export: Export;
    }

    export interface AddonsResponse {
      export: Export;
    }

    export interface CouponsResponse {
      export: Export;
    }

    export interface CustomersResponse {
      export: Export;
    }

    export interface SubscriptionsResponse {
      export: Export;
    }

    export interface InvoicesResponse {
      export: Export;
    }

    export interface CreditNotesResponse {
      export: Export;
    }

    export interface TransactionsResponse {
      export: Export;
    }

    export interface OrdersResponse {
      export: Export;
    }

    export interface ItemFamiliesResponse {
      export: Export;
    }

    export interface ItemsResponse {
      export: Export;
    }

    export interface ItemPricesResponse {
      export: Export;
    }

    export interface AttachedItemsResponse {
      export: Export;
    }

    export interface DifferentialPricesResponse {
      export: Export;
    }

    export interface PriceVariantsResponse {
      export: Export;
    }

    export interface Download {
      download_url: string;

      valid_till: number;

      mime_type?: string;
    }
    // REQUEST PARAMS
    //---------------

    export interface RevenueRecognitionInputParam {
      report_by: ReportBy;
      currency_code?: string;
      report_from_month: number;
      report_from_year: number;
      report_to_month: number;
      report_to_year: number;
      include_discounts?: boolean;
      payment_owner?: filter.String;
      item_id?: filter.String;
      item_price_id?: filter.String;
      cancel_reason_code?: filter.String;
      business_entity_id?: filter.String;
      invoice?: InvoiceRevenueRecognitionInputParam;
      subscription?: SubscriptionRevenueRecognitionInputParam;
      customer?: CustomerRevenueRecognitionInputParam;
      relationship?: RelationshipRevenueRecognitionInputParam;
    }
    export interface DeferredRevenueInputParam {
      report_by: ReportBy;
      currency_code?: string;
      report_from_month: number;
      report_from_year: number;
      report_to_month: number;
      report_to_year: number;
      include_discounts?: boolean;
      payment_owner?: filter.String;
      item_id?: filter.String;
      item_price_id?: filter.String;
      cancel_reason_code?: filter.String;
      business_entity_id?: filter.String;
      invoice?: InvoiceDeferredRevenueInputParam;
      subscription?: SubscriptionDeferredRevenueInputParam;
      customer?: CustomerDeferredRevenueInputParam;
      relationship?: RelationshipDeferredRevenueInputParam;
    }
    export interface PlansInputParam {
      currency_code?: filter.String;
      plan?: PlanPlansInputParam;
    }
    export interface AddonsInputParam {
      currency_code?: filter.String;
      addon?: AddonAddonsInputParam;
    }
    export interface CouponsInputParam {
      currency_code?: filter.String;
      coupon?: CouponCouponsInputParam;
    }
    export interface CustomersInputParam {
      export_type?: ExportType;
      business_entity_id?: filter.String;
      customer?: CustomerCustomersInputParam;
      relationship?: RelationshipCustomersInputParam;
    }
    export interface SubscriptionsInputParam {
      export_type?: ExportType;
      item_id?: filter.String;
      item_price_id?: filter.String;
      cancel_reason_code?: filter.String;
      subscription?: SubscriptionSubscriptionsInputParam;
    }
    export interface InvoicesInputParam {
      payment_owner?: filter.String;
      invoice?: InvoiceInvoicesInputParam;
    }
    export interface CreditNotesInputParam {
      credit_note?: CreditNoteCreditNotesInputParam;
    }
    export interface TransactionsInputParam {
      transaction?: TransactionTransactionsInputParam;
    }
    export interface OrdersInputParam {
      total?: filter.Number;
      order?: OrderOrdersInputParam;
    }
    export interface ItemFamiliesInputParam {
      item_family?: ItemFamilyItemFamiliesInputParam;
    }
    export interface ItemsInputParam {
      item?: ItemItemsInputParam;
    }
    export interface ItemPricesInputParam {
      item_family_id?: filter.String;
      item_type?: filter.Enum;
      currency_code?: filter.String;
      item_price?: ItemPriceItemPricesInputParam;
    }
    export interface AttachedItemsInputParam {
      item_type?: filter.Enum;
      attached_item?: AttachedItemAttachedItemsInputParam;
    }
    export interface DifferentialPricesInputParam {
      differential_price?: DifferentialPriceDifferentialPricesInputParam;
      item_id?: filter.String;
    }
    export interface PriceVariantsInputParam {
      price_variant?: PriceVariantPriceVariantsInputParam;
    }
    export interface InvoiceRevenueRecognitionInputParam {
      id?: filter.String;

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

      updated_at?: filter.Timestamp;

      channel?: filter.Enum;
    }
    export interface CustomerRevenueRecognitionInputParam {
      id?: filter.String;

      first_name?: filter.String;

      last_name?: filter.String;

      email?: filter.String;

      company?: filter.String;

      phone?: filter.String;

      auto_collection?: filter.Enum;

      taxability?: filter.Enum;

      created_at?: filter.Timestamp;

      updated_at?: filter.Timestamp;

      offline_payment_method?: filter.Enum;

      auto_close_invoices?: filter.Boolean;

      channel?: filter.Enum;
    }
    export interface RelationshipRevenueRecognitionInputParam {
      parent_id?: filter.String;

      payment_owner_id?: filter.String;

      invoice_owner_id?: filter.String;
    }
    export interface SubscriptionRevenueRecognitionInputParam {
      id?: filter.String;

      customer_id?: filter.String;

      status?: filter.Enum;

      cancel_reason?: filter.Enum;

      remaining_billing_cycles?: filter.Number;

      created_at?: filter.Timestamp;

      activated_at?: filter.Timestamp;

      next_billing_at?: filter.Timestamp;

      cancelled_at?: filter.Timestamp;

      has_scheduled_changes?: filter.Boolean;

      updated_at?: filter.Timestamp;

      offline_payment_method?: filter.Enum;

      auto_close_invoices?: filter.Boolean;

      channel?: filter.Enum;

      plan_id?: filter.String;
    }

    export interface InvoiceDeferredRevenueInputParam {
      id?: filter.String;

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

      updated_at?: filter.Timestamp;

      channel?: filter.Enum;
    }
    export interface CustomerDeferredRevenueInputParam {
      id?: filter.String;

      first_name?: filter.String;

      last_name?: filter.String;

      email?: filter.String;

      company?: filter.String;

      phone?: filter.String;

      auto_collection?: filter.Enum;

      taxability?: filter.Enum;

      created_at?: filter.Timestamp;

      updated_at?: filter.Timestamp;

      offline_payment_method?: filter.Enum;

      auto_close_invoices?: filter.Boolean;

      channel?: filter.Enum;
    }
    export interface RelationshipDeferredRevenueInputParam {
      parent_id?: filter.String;

      payment_owner_id?: filter.String;

      invoice_owner_id?: filter.String;
    }
    export interface SubscriptionDeferredRevenueInputParam {
      id?: filter.String;

      customer_id?: filter.String;

      status?: filter.Enum;

      cancel_reason?: filter.Enum;

      remaining_billing_cycles?: filter.Number;

      created_at?: filter.Timestamp;

      activated_at?: filter.Timestamp;

      next_billing_at?: filter.Timestamp;

      cancelled_at?: filter.Timestamp;

      has_scheduled_changes?: filter.Boolean;

      updated_at?: filter.Timestamp;

      offline_payment_method?: filter.Enum;

      auto_close_invoices?: filter.Boolean;

      channel?: filter.Enum;

      plan_id?: filter.String;
    }

    export interface PlanPlansInputParam {
      id?: filter.String;

      name?: filter.String;

      price?: filter.Number;

      period?: filter.Number;

      period_unit?: filter.Enum;

      trial_period?: filter.Number;

      trial_period_unit?: filter.Enum;

      addon_applicability?: filter.Enum;

      giftable?: filter.Boolean;

      status?: filter.Enum;

      updated_at?: filter.Timestamp;

      channel?: filter.Enum;
    }

    export interface AddonAddonsInputParam {
      id?: filter.String;

      name?: filter.String;

      charge_type?: filter.Enum;

      price?: filter.Number;

      period?: filter.Number;

      period_unit?: filter.Enum;

      status?: filter.Enum;

      updated_at?: filter.Timestamp;

      channel?: filter.Enum;
    }

    export interface CouponCouponsInputParam {
      id?: filter.String;

      name?: filter.String;

      discount_type?: filter.Enum;

      duration_type?: filter.Enum;

      status?: filter.Enum;

      apply_on?: filter.Enum;

      created_at?: filter.Timestamp;

      updated_at?: filter.Timestamp;
    }

    export interface CustomerCustomersInputParam {
      id?: filter.String;

      first_name?: filter.String;

      last_name?: filter.String;

      email?: filter.String;

      company?: filter.String;

      phone?: filter.String;

      auto_collection?: filter.Enum;

      taxability?: filter.Enum;

      created_at?: filter.Timestamp;

      updated_at?: filter.Timestamp;

      offline_payment_method?: filter.Enum;

      auto_close_invoices?: filter.Boolean;

      channel?: filter.Enum;
    }
    export interface RelationshipCustomersInputParam {
      parent_id?: filter.String;

      payment_owner_id?: filter.String;

      invoice_owner_id?: filter.String;
    }

    export interface SubscriptionSubscriptionsInputParam {
      id?: filter.String;

      customer_id?: filter.String;

      status?: filter.Enum;

      cancel_reason?: filter.Enum;

      remaining_billing_cycles?: filter.Number;

      created_at?: filter.Timestamp;

      activated_at?: filter.Timestamp;

      next_billing_at?: filter.Timestamp;

      cancelled_at?: filter.Timestamp;

      has_scheduled_changes?: filter.Boolean;

      updated_at?: filter.Timestamp;

      offline_payment_method?: filter.Enum;

      auto_close_invoices?: filter.Boolean;

      channel?: filter.Enum;

      plan_id?: filter.String;
    }

    export interface InvoiceInvoicesInputParam {
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

      updated_at?: filter.Timestamp;

      channel?: filter.Enum;
    }

    export interface CreditNoteCreditNotesInputParam {
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
    }

    export interface TransactionTransactionsInputParam {
      id?: filter.String;

      customer_id?: filter.String;

      subscription_id?: filter.String;

      payment_source_id?: filter.String;

      payment_method?: filter.Enum;

      gateway?: filter.Enum;

      gateway_account_id?: filter.String;

      id_at_gateway?: filter.String;

      reference_number?: filter.String;

      type?: filter.Enum;

      date?: filter.Timestamp;

      amount?: filter.Number;

      amount_capturable?: filter.Number;

      status?: filter.Enum;

      updated_at?: filter.Timestamp;
    }

    export interface OrderOrdersInputParam {
      id?: filter.String;

      subscription_id?: filter.String;

      customer_id?: filter.String;

      status?: filter.Enum;

      price_type?: filter.Enum;

      order_date?: filter.Timestamp;

      shipping_date?: filter.Timestamp;

      shipped_at?: filter.Timestamp;

      delivered_at?: filter.Timestamp;

      cancelled_at?: filter.Timestamp;

      amount_paid?: filter.Number;

      refundable_credits?: filter.Number;

      refundable_credits_issued?: filter.Number;

      updated_at?: filter.Timestamp;

      resent_status?: filter.Enum;

      is_resent?: filter.Boolean;

      original_order_id?: filter.String;
    }

    export interface ItemFamilyItemFamiliesInputParam {
      id?: filter.String;

      name?: filter.String;

      updated_at?: filter.Timestamp;
    }

    export interface ItemItemsInputParam {
      id?: filter.String;

      item_family_id?: filter.String;

      type?: filter.Enum;

      name?: filter.String;

      item_applicability?: filter.Enum;

      status?: filter.Enum;

      is_giftable?: filter.Boolean;

      updated_at?: filter.Timestamp;

      enabled_for_checkout?: filter.Boolean;

      enabled_in_portal?: filter.Boolean;

      metered?: filter.Boolean;

      usage_calculation?: filter.Enum;

      channel?: filter.Enum;
    }

    export interface ItemPriceItemPricesInputParam {
      id?: filter.String;

      name?: filter.String;

      pricing_model?: filter.Enum;

      item_id?: filter.String;

      price_variant_id?: filter.String;

      trial_period?: filter.Number;

      trial_period_unit?: filter.Enum;

      status?: filter.Enum;

      updated_at?: filter.Timestamp;

      period_unit?: filter.Enum;

      period?: filter.Number;

      channel?: filter.Enum;
    }

    export interface AttachedItemAttachedItemsInputParam {
      id?: filter.String;

      item_id?: filter.String;

      type?: filter.Enum;

      charge_on_event?: filter.Enum;

      updated_at?: filter.Timestamp;

      parent_item_id?: filter.String;
    }

    export interface DifferentialPriceDifferentialPricesInputParam {
      item_price_id?: filter.String;

      id?: filter.String;

      parent_item_id?: filter.String;
    }

    export interface PriceVariantPriceVariantsInputParam {
      id?: filter.String;

      name?: filter.String;

      status?: filter.Enum;

      updated_at?: filter.Timestamp;

      created_at?: filter.Timestamp;
    }
  }
}
