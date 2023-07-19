declare module 'chargebee' {
  export interface Order {
    
    id:string;
    document_number?:string;
    invoice_id?:string;
    subscription_id?:string;
    customer_id?:string;
    status?:'new' | 'partially_delivered' | 'queued' | 'delivered' | 'on_hold' | 'shipped' | 'processing' | 'cancelled' | 'voided' | 'complete' | 'awaiting_shipment' | 'returned';
    cancellation_reason?:'delivery_date_missed' | 'subscription_cancelled' | 'product_unsatisfactory' | 'fraudulent_transaction' | 'third_party_cancellation' | 'order_resent' | 'payment_declined' | 'product_not_required' | 'invoice_voided' | 'invoice_written_off' | 'product_not_available' | 'shipping_cut_off_passed' | 'others' | 'alternative_found';
    payment_status?:'paid' | 'not_paid';
    order_type?:'system_generated' | 'manual';
    price_type:PriceType;
    reference_id?:string;
    fulfillment_status?:string;
    order_date?:number;
    shipping_date?:number;
    note?:string;
    tracking_id?:string;
    tracking_url?:string;
    batch_id?:string;
    created_by?:string;
    shipment_carrier?:string;
    invoice_round_off_amount?:number;
    tax?:number;
    amount_paid?:number;
    amount_adjusted?:number;
    refundable_credits_issued?:number;
    refundable_credits?:number;
    rounding_adjustement?:number;
    paid_on?:number;
    shipping_cut_off_date?:number;
    created_at:number;
    status_update_at?:number;
    delivered_at?:number;
    shipped_at?:number;
    resource_version?:number;
    updated_at?:number;
    cancelled_at?:number;
    resent_status?:'fully_resent' | 'partially_resent';
    is_resent:boolean;
    original_order_id?:string;
    discount?:number;
    sub_total?:number;
    total?:number;
    deleted:boolean;
    currency_code?:string;
    is_gifted?:boolean;
    gift_note?:string;
    gift_id?:string;
    resend_reason?:string;
    business_entity_id?:string;
    order_line_items?:Order.OrderLineItem[];
    shipping_address?:Order.ShippingAddress;
    billing_address?:Order.BillingAddress;
    line_item_taxes?:Order.LineItemTax[];
    line_item_discounts?:Order.LineItemDiscount[];
    linked_credit_notes?:Order.OrderLineItemLinkedCredit[];
    resent_orders?:Order.ResentOrder[];
  }
  export namespace Order {
    export class OrderResource {
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
      import_order(input:ImportOrderInputParam):ChargebeeRequest<ImportOrderResponse>;
      assign_order_number(order_id:string):ChargebeeRequest<AssignOrderNumberResponse>;
      resend(order_id:string, input?:ResendInputParam):ChargebeeRequest<ResendResponse>;
      reopen(order_id:string, input?:ReopenInputParam):ChargebeeRequest<ReopenResponse>;
      cancel(order_id:string, input:CancelInputParam):ChargebeeRequest<CancelResponse>;
      retrieve(order_id:string):ChargebeeRequest<RetrieveResponse>;
      update(order_id:string, input?:UpdateInputParam):ChargebeeRequest<UpdateResponse>;
      delete(order_id:string):ChargebeeRequest<DeleteResponse>;
      create_refundable_credit_note(order_id:string, input?:CreateRefundableCreditNoteInputParam):ChargebeeRequest<CreateRefundableCreditNoteResponse>;
    }
    export interface ListResponse {
      list:{order:Order}[];
      next_offset?:string;
    }
    export interface ListInputParam {
      [key: string]: string | number | object | boolean;
      limit?:number;
      offset?:string;
      include_deleted?:boolean;
      exclude_deleted_credit_notes?:boolean;
      id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      invoice_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      subscription_id?:{is?:string,is_not?:string,starts_with?:string};
      status?:{in?:string,is?:'new' | 'partially_delivered' | 'queued' | 'delivered' | 'on_hold' | 'shipped' | 'processing' | 'cancelled' | 'voided' | 'complete' | 'awaiting_shipment' | 'returned',is_not?:'new' | 'partially_delivered' | 'queued' | 'delivered' | 'on_hold' | 'shipped' | 'processing' | 'cancelled' | 'voided' | 'complete' | 'awaiting_shipment' | 'returned',not_in?:string};
      shipping_date?:{after?:string,before?:string,between?:string,on?:string};
      shipped_at?:{after?:string,before?:string,between?:string,on?:string};
      order_type?:{in?:string,is?:'system_generated' | 'manual',is_not?:'system_generated' | 'manual',not_in?:string};
      order_date?:{after?:string,before?:string,between?:string,on?:string};
      paid_on?:{after?:string,before?:string,between?:string,on?:string};
      updated_at?:{after?:string,before?:string,between?:string,on?:string};
      created_at?:{after?:string,before?:string,between?:string,on?:string};
      resent_status?:{in?:string,is?:'fully_resent' | 'partially_resent',is_not?:'fully_resent' | 'partially_resent',not_in?:string};
      is_resent?:{is?:'true' | 'false'};
      original_order_id?:{is?:string,is_not?:string,starts_with?:string};
      sort_by?:{asc?:'updated_at' | 'created_at',desc?:'updated_at' | 'created_at'};
    }
    export interface CreateResponse {
      order:Order;
    }
    export interface CreateInputParam {
      
      id?:string;
      invoice_id:string;
      status?:'new' | 'processing' | 'cancelled' | 'voided' | 'complete';
      reference_id?:string;
      fulfillment_status?:string;
      note?:string;
      tracking_id?:string;
      tracking_url?:string;
      batch_id?:string;
    }
    export interface ImportOrderResponse {
      order:Order;
    }
    export interface ImportOrderInputParam {
      
      id?:string;
      document_number?:string;
      invoice_id:string;
      status:'shipped' | 'partially_delivered' | 'queued' | 'cancelled' | 'delivered' | 'on_hold' | 'awaiting_shipment' | 'returned';
      subscription_id?:string;
      customer_id?:string;
      created_at:number;
      order_date:number;
      shipping_date:number;
      reference_id?:string;
      fulfillment_status?:string;
      note?:string;
      tracking_id?:string;
      tracking_url?:string;
      batch_id?:string;
      shipment_carrier?:string;
      shipping_cut_off_date?:number;
      delivered_at?:number;
      shipped_at?:number;
      cancelled_at?:number;
      cancellation_reason?:'delivery_date_missed' | 'subscription_cancelled' | 'product_unsatisfactory' | 'fraudulent_transaction' | 'third_party_cancellation' | 'order_resent' | 'payment_declined' | 'product_not_required' | 'invoice_voided' | 'invoice_written_off' | 'product_not_available' | 'shipping_cut_off_passed' | 'others' | 'alternative_found';
      refundable_credits_issued?:number;
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
      billing_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
    }
    export interface AssignOrderNumberResponse {
      order:Order;
    }
    
    export interface ResendResponse {
      order:Order;
    }
    export interface ResendInputParam {
      
      shipping_date?:number;
      resend_reason?:string;
      order_line_items?:{fulfillment_quantity?:number,id?:string}[];
    }
    export interface ReopenResponse {
      order:Order;
    }
    export interface ReopenInputParam {
      
      void_cancellation_credit_notes?:boolean;
    }
    export interface CancelResponse {
      order:Order;
    }
    export interface CancelInputParam {
      
      cancellation_reason:'delivery_date_missed' | 'subscription_cancelled' | 'product_unsatisfactory' | 'fraudulent_transaction' | 'third_party_cancellation' | 'order_resent' | 'payment_declined' | 'product_not_required' | 'invoice_voided' | 'invoice_written_off' | 'product_not_available' | 'shipping_cut_off_passed' | 'others' | 'alternative_found';
      customer_notes?:string;
      comment?:string;
      cancelled_at?:number;
      credit_note?:{total?:number};
    }
    export interface RetrieveResponse {
      order:Order;
    }
    
    export interface UpdateResponse {
      order:Order;
    }
    export interface UpdateInputParam {
      
      reference_id?:string;
      batch_id?:string;
      note?:string;
      shipping_date?:number;
      order_date?:number;
      cancelled_at?:number;
      cancellation_reason?:'delivery_date_missed' | 'subscription_cancelled' | 'product_unsatisfactory' | 'fraudulent_transaction' | 'third_party_cancellation' | 'order_resent' | 'payment_declined' | 'product_not_required' | 'invoice_voided' | 'invoice_written_off' | 'product_not_available' | 'shipping_cut_off_passed' | 'others' | 'alternative_found';
      shipped_at?:number;
      delivered_at?:number;
      tracking_url?:string;
      tracking_id?:string;
      shipment_carrier?:string;
      fulfillment_status?:string;
      status?:'new' | 'partially_delivered' | 'queued' | 'delivered' | 'on_hold' | 'shipped' | 'processing' | 'cancelled' | 'voided' | 'complete' | 'awaiting_shipment' | 'returned';
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
      order_line_items?:{id?:string,sku?:string,status?:'shipped' | 'partially_delivered' | 'queued' | 'cancelled' | 'delivered' | 'on_hold' | 'awaiting_shipment' | 'returned'}[];
    }
    export interface DeleteResponse {
      order:Order;
    }
    
    export interface CreateRefundableCreditNoteResponse {
      order:Order;
    }
    export interface CreateRefundableCreditNoteInputParam {
      
      customer_notes?:string;
      comment?:string;
      credit_note?:{reason_code:'other' | 'product_unsatisfactory' | 'subscription_pause' | 'order_cancellation' | 'service_unsatisfactory' | 'subscription_cancellation' | 'chargeback' | 'order_change' | 'write_off' | 'waiver' | 'subscription_change' | 'fraudulent',total:number};
    }
    export interface OrderLineItem {
      id?:string;
      invoice_id?:string;
      invoice_line_item_id?:string;
      unit_price?:number;
      description?:string;
      amount?:number;
      fulfillment_quantity?:number;
      fulfillment_amount?:number;
      tax_amount?:number;
      amount_paid?:number;
      amount_adjusted?:number;
      refundable_credits_issued?:number;
      refundable_credits?:number;
      is_shippable?:boolean;
      sku?:string;
      status?:'shipped' | 'partially_delivered' | 'queued' | 'cancelled' | 'delivered' | 'on_hold' | 'awaiting_shipment' | 'returned';
      entity_type?:'addon_item_price' | 'plan_item_price' | 'charge_item_price' | 'adhoc';
      item_level_discount_amount?:number;
      discount_amount?:number;
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
    export interface LineItemDiscount {
      line_item_id?:string;
      discount_type?:'custom_discount' | 'item_level_coupon' | 'promotional_credits' | 'item_level_discount' | 'prorated_credits' | 'document_level_discount' | 'document_level_coupon';
      entity_id?:string;
      discount_amount?:number;
    }
    export interface OrderLineItemLinkedCredit {
      amount?:number;
      type?:'adjustment' | 'refundable';
      id?:string;
      status?:'refund_due' | 'adjusted' | 'refunded' | 'voided';
      amount_adjusted?:number;
      amount_refunded?:number;
    }
    export interface ResentOrder {
      order_id?:string;
      reason?:string;
      amount?:number;
    }
  }
}