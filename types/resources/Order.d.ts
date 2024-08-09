///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'Chargebee' {
  export interface Order {
    id: string;

    document_number?: string;

    invoice_id?: string;

    subscription_id?: string;

    customer_id?: string;

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

    cancellation_reason?:
      | 'shipping_cut_off_passed'
      | 'product_unsatisfactory'
      | 'third_party_cancellation'
      | 'product_not_required'
      | 'delivery_date_missed'
      | 'alternative_found'
      | 'invoice_written_off'
      | 'invoice_voided'
      | 'fraudulent_transaction'
      | 'payment_declined'
      | 'subscription_cancelled'
      | 'product_not_available'
      | 'others'
      | 'order_resent';

    payment_status?: 'not_paid' | 'paid';

    order_type?: 'manual' | 'system_generated';

    price_type: PriceType;

    reference_id?: string;

    fulfillment_status?: string;

    order_date?: number;

    shipping_date?: number;

    note?: string;

    tracking_id?: string;

    tracking_url?: string;

    batch_id?: string;

    created_by?: string;

    shipment_carrier?: string;

    invoice_round_off_amount?: number;

    tax?: number;

    amount_paid?: number;

    amount_adjusted?: number;

    refundable_credits_issued?: number;

    refundable_credits?: number;

    rounding_adjustement?: number;

    paid_on?: number;

    shipping_cut_off_date?: number;

    created_at: number;

    status_update_at?: number;

    delivered_at?: number;

    shipped_at?: number;

    resource_version?: number;

    updated_at?: number;

    cancelled_at?: number;

    resent_status?: 'fully_resent' | 'partially_resent';

    is_resent: boolean;

    original_order_id?: string;

    order_line_items?: Order.OrderLineItem[];

    shipping_address?: Order.ShippingAddress;

    billing_address?: Order.BillingAddress;

    discount?: number;

    sub_total?: number;

    total?: number;

    line_item_taxes?: Order.LineItemTax[];

    line_item_discounts?: Order.LineItemDiscount[];

    linked_credit_notes?: Order.LinkedCreditNote[];

    deleted: boolean;

    currency_code?: string;

    is_gifted?: boolean;

    gift_note?: string;

    gift_id?: string;

    resend_reason?: string;

    resent_orders?: Order.ResentOrder[];

    business_entity_id?: string;
  }
  export namespace Order {
    export class OrderResource {
      create(
        input: CreateInputParam,
      ): ChargebeeRequest<ChargebeeResponse<CreateResponse>>;

      update(
        order_id: string,
        input?: UpdateInputParam,
      ): ChargebeeRequest<ChargebeeResponse<UpdateResponse>>;

      importOrder(
        input: ImportOrderInputParam,
      ): ChargebeeRequest<ChargebeeResponse<ImportOrderResponse>>;

      assignOrderNumber(
        order_id: string,
      ): ChargebeeRequest<ChargebeeResponse<AssignOrderNumberResponse>>;

      cancel(
        order_id: string,
        input: CancelInputParam,
      ): ChargebeeRequest<ChargebeeResponse<CancelResponse>>;

      createRefundableCreditNote(
        order_id: string,
        input: CreateRefundableCreditNoteInputParam,
      ): ChargebeeRequest<
        ChargebeeResponse<CreateRefundableCreditNoteResponse>
      >;

      reopen(
        order_id: string,
        input?: ReopenInputParam,
      ): ChargebeeRequest<ChargebeeResponse<ReopenResponse>>;

      retrieve(
        order_id: string,
      ): ChargebeeRequest<ChargebeeResponse<RetrieveResponse>>;

      delete(
        order_id: string,
      ): ChargebeeRequest<ChargebeeResponse<DeleteResponse>>;

      list(
        input?: ListInputParam,
      ): ChargebeeRequest<ChargebeeResponse<ListResponse>>;

      ordersForInvoice(
        invoice_id: string,
        input?: OrdersForInvoiceInputParam,
      ): ChargebeeRequest<ChargebeeResponse<OrdersForInvoiceResponse>>;

      resend(
        order_id: string,
        input?: ResendInputParam,
      ): ChargebeeRequest<ChargebeeResponse<ResendResponse>>;
    }
    export interface CreateResponse {
      order: Order;
    }

    export interface UpdateResponse {
      order: Order;
    }

    export interface ImportOrderResponse {
      order: Order;
    }

    export interface AssignOrderNumberResponse {
      order: Order;
    }

    export interface CancelResponse {
      order: Order;
    }

    export interface CreateRefundableCreditNoteResponse {
      order: Order;
    }

    export interface ReopenResponse {
      order: Order;
    }

    export interface RetrieveResponse {
      order: Order;
    }

    export interface DeleteResponse {
      order: Order;
    }

    export interface ListResponse {
      list: { order: Order }[];

      next_offset?: string;
    }

    export interface OrdersForInvoiceResponse {
      list: { order: Order }[];

      next_offset?: string;
    }

    export interface ResendResponse {
      order: Order;
    }

    export interface OrderLineItem {
      id: string;

      invoice_id: string;

      invoice_line_item_id: string;

      unit_price?: number;

      description?: string;

      amount?: number;

      fulfillment_quantity?: number;

      fulfillment_amount?: number;

      tax_amount?: number;

      amount_paid?: number;

      amount_adjusted?: number;

      refundable_credits_issued?: number;

      refundable_credits?: number;

      is_shippable: boolean;

      sku?: string;

      status?:
        | 'queued'
        | 'awaiting_shipment'
        | 'on_hold'
        | 'delivered'
        | 'shipped'
        | 'partially_delivered'
        | 'returned'
        | 'cancelled';

      entity_type:
        | 'adhoc'
        | 'plan_item_price'
        | 'addon_item_price'
        | 'charge_item_price'
        | 'plan_setup'
        | 'plan'
        | 'addon';

      item_level_discount_amount?: number;

      discount_amount?: number;

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

      validation_status?: ValidationStatus;

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

      validation_status?: ValidationStatus;
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
    export interface LineItemDiscount {
      line_item_id: string;

      discount_type:
        | 'item_level_coupon'
        | 'document_level_coupon'
        | 'promotional_credits'
        | 'prorated_credits'
        | 'custom_discount'
        | 'item_level_discount'
        | 'document_level_discount';

      coupon_id?: string;

      entity_id?: string;

      discount_amount: number;
    }
    export interface LinkedCreditNote {
      amount?: number;

      type: 'adjustment' | 'refundable';

      id: string;

      status: 'adjusted' | 'refunded' | 'refund_due' | 'voided';

      amount_adjusted?: number;

      amount_refunded?: number;
    }
    export interface ResentOrder {
      order_id: string;

      reason?: string;

      amount?: number;
    }
    // REQUEST PARAMS
    //---------------

    export interface CreateInputParam {
      id?: string;
      invoice_id: string;
      status?: 'new' | 'processing' | 'complete' | 'cancelled' | 'voided';
      reference_id?: string;
      fulfillment_status?: string;
      note?: string;
      tracking_id?: string;
      tracking_url?: string;
      batch_id?: string;
    }
    export interface UpdateInputParam {
      reference_id?: string;
      batch_id?: string;
      note?: string;
      shipping_date?: number;
      order_date?: number;
      cancelled_at?: number;
      cancellation_reason?:
        | 'shipping_cut_off_passed'
        | 'product_unsatisfactory'
        | 'third_party_cancellation'
        | 'product_not_required'
        | 'delivery_date_missed'
        | 'alternative_found'
        | 'invoice_written_off'
        | 'invoice_voided'
        | 'fraudulent_transaction'
        | 'payment_declined'
        | 'subscription_cancelled'
        | 'product_not_available'
        | 'others'
        | 'order_resent';
      shipped_at?: number;
      delivered_at?: number;
      tracking_url?: string;
      tracking_id?: string;
      shipment_carrier?: string;
      fulfillment_status?: string;
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
      shipping_address?: ShippingAddressUpdateInputParam;
      order_line_items?: OrderLineItemsUpdateInputParam[];
    }
    export interface ImportOrderInputParam {
      id?: string;
      document_number?: string;
      invoice_id: string;
      status:
        | 'cancelled'
        | 'queued'
        | 'awaiting_shipment'
        | 'on_hold'
        | 'delivered'
        | 'shipped'
        | 'partially_delivered'
        | 'returned';
      subscription_id?: string;
      customer_id?: string;
      created_at: number;
      order_date: number;
      shipping_date: number;
      reference_id?: string;
      fulfillment_status?: string;
      note?: string;
      tracking_id?: string;
      tracking_url?: string;
      batch_id?: string;
      shipment_carrier?: string;
      shipping_cut_off_date?: number;
      delivered_at?: number;
      shipped_at?: number;
      cancelled_at?: number;
      cancellation_reason?:
        | 'shipping_cut_off_passed'
        | 'product_unsatisfactory'
        | 'third_party_cancellation'
        | 'product_not_required'
        | 'delivery_date_missed'
        | 'alternative_found'
        | 'invoice_written_off'
        | 'invoice_voided'
        | 'fraudulent_transaction'
        | 'payment_declined'
        | 'subscription_cancelled'
        | 'product_not_available'
        | 'others'
        | 'order_resent';
      refundable_credits_issued?: number;
      shipping_address?: ShippingAddressImportOrderInputParam;
      billing_address?: BillingAddressImportOrderInputParam;
    }
    export interface CancelInputParam {
      cancellation_reason:
        | 'shipping_cut_off_passed'
        | 'product_unsatisfactory'
        | 'third_party_cancellation'
        | 'product_not_required'
        | 'delivery_date_missed'
        | 'alternative_found'
        | 'invoice_written_off'
        | 'invoice_voided'
        | 'fraudulent_transaction'
        | 'payment_declined'
        | 'subscription_cancelled'
        | 'product_not_available'
        | 'others'
        | 'order_resent';
      customer_notes?: string;
      comment?: string;
      cancelled_at?: number;
      credit_note?: CreditNoteCancelInputParam;
    }
    export interface CreateRefundableCreditNoteInputParam {
      customer_notes?: string;
      comment?: string;
      credit_note?: CreditNoteCreateRefundableCreditNoteInputParam;
    }
    export interface ReopenInputParam {
      void_cancellation_credit_notes?: boolean;
    }
    export interface ListInputParam {
      limit?: number;
      offset?: string;
      include_deleted?: boolean;
      exclude_deleted_credit_notes?: boolean;
      id?: filter.String;
      invoice_id?: filter.String;
      subscription_id?: filter.String;
      status?: filter.Enum;
      shipping_date?: filter.Timestamp;
      shipped_at?: filter.Timestamp;
      order_type?: filter.Enum;
      order_date?: filter.Timestamp;
      paid_on?: filter.Timestamp;
      updated_at?: filter.Timestamp;
      created_at?: filter.Timestamp;
      resent_status?: filter.Enum;
      is_resent?: filter.Boolean;
      original_order_id?: filter.String;
      'sort_by[asc]'?: string;
      'sort_by[desc]'?: string;
    }
    export interface OrdersForInvoiceInputParam {
      limit?: number;
      offset?: string;
    }
    export interface ResendInputParam {
      shipping_date?: number;
      resend_reason?: string;
      order_line_items?: OrderLineItemsResendInputParam[];
    }
    export interface ShippingAddressUpdateInputParam {
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

      validation_status?: ValidationStatus;
    }

    export interface OrderLineItemsUpdateInputParam {
      id?: string;

      status?:
        | 'queued'
        | 'awaiting_shipment'
        | 'on_hold'
        | 'delivered'
        | 'shipped'
        | 'partially_delivered'
        | 'returned'
        | 'cancelled';

      sku?: string;
    }
    export interface BillingAddressImportOrderInputParam {
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

      validation_status?: ValidationStatus;
    }
    export interface ShippingAddressImportOrderInputParam {
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

      validation_status?: ValidationStatus;
    }

    export interface CreditNoteCancelInputParam {
      total?: number;
    }

    export interface CreditNoteCreateRefundableCreditNoteInputParam {
      reason_code:
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

      total: number;
    }

    export interface OrderLineItemsResendInputParam {
      id?: string;

      fulfillment_quantity?: number;
    }
  }
}
