///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface Order {
    

    id:string;

    document_number?:string;

    invoice_id?:string;

    subscription_id?:string;

    customer_id?:string;

    status?:'new' | 'processing' | 'complete' | 'cancelled' | 'voided' | 'queued' | 'awaiting_shipment' | 'on_hold' | 'delivered' | 'shipped' | 'partially_delivered' | 'returned';

    cancellation_reason?:'shipping_cut_off_passed' | 'product_unsatisfactory' | 'third_party_cancellation' | 'product_not_required' | 'delivery_date_missed' | 'alternative_found' | 'invoice_written_off' | 'invoice_voided' | 'fraudulent_transaction' | 'payment_declined' | 'subscription_cancelled' | 'product_not_available' | 'others' | 'order_resent';

    payment_status?:'not_paid' | 'paid';

    order_type?:'manual' | 'system_generated';

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

    order_line_items?:Order.OrderLineItem[];

    shipping_address?:Order.ShippingAddress;

    billing_address?:Order.BillingAddress;

    discount?:number;

    sub_total?:number;

    total?:number;

    line_item_taxes?:Order.LineItemTax[];

    line_item_discounts?:Order.LineItemDiscount[];

    linked_credit_notes?:Order.LinkedCreditNote[];

    deleted:boolean;

    currency_code?:string;

    is_gifted?:boolean;

    gift_note?:string;

    gift_id?:string;

    resend_reason?:string;

    resent_orders?:Order.ResentOrder[];

    business_entity_id?:string;

  }
  export namespace Order {
    export class OrderResource {  
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
       
      update(order_id:string, input?:UpdateInputParam):ChargebeeRequest<UpdateResponse>;
       
      import_order(input:ImportOrderInputParam):ChargebeeRequest<ImportOrderResponse>;
       
      assign_order_number(order_id:string):ChargebeeRequest<AssignOrderNumberResponse>;
       
      cancel(order_id:string, input:CancelInputParam):ChargebeeRequest<CancelResponse>;
       
      create_refundable_credit_note(order_id:string, input:CreateRefundableCreditNoteInputParam):ChargebeeRequest<CreateRefundableCreditNoteResponse>;
       
      reopen(order_id:string, input?:ReopenInputParam):ChargebeeRequest<ReopenResponse>;
       
      retrieve(order_id:string):ChargebeeRequest<RetrieveResponse>;
       
      delete(order_id:string):ChargebeeRequest<DeleteResponse>;
       
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
       
      orders_for_invoice(invoice_id:string, input?:OrdersForInvoiceInputParam):ChargebeeRequest<OrdersForInvoiceResponse>;
       
      resend(order_id:string, input?:ResendInputParam):ChargebeeRequest<ResendResponse>;
    }
    export interface CreateResponse {  
       order:Order;
    }
    export interface CreateInputParam {
       
      id?:string;
       
      invoice_id:string;
       
      status?:'new' | 'processing' | 'complete' | 'cancelled' | 'voided';
       
      reference_id?:string;
       
      fulfillment_status?:string;
       
      note?:string;
       
      tracking_id?:string;
       
      tracking_url?:string;
       
      batch_id?:string;
    }
    export interface UpdateResponse {  
       order:Order;
    }
    export interface UpdateInputParam {
       
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      order_line_items?:{id?:string,sku?:string,status?:'queued' | 'awaiting_shipment' | 'on_hold' | 'delivered' | 'shipped' | 'partially_delivered' | 'returned' | 'cancelled'}[];
       
      reference_id?:string;
       
      batch_id?:string;
       
      note?:string;
       
      shipping_date?:number;
       
      order_date?:number;
       
      cancelled_at?:number;
       
      cancellation_reason?:'shipping_cut_off_passed' | 'product_unsatisfactory' | 'third_party_cancellation' | 'product_not_required' | 'delivery_date_missed' | 'alternative_found' | 'invoice_written_off' | 'invoice_voided' | 'fraudulent_transaction' | 'payment_declined' | 'subscription_cancelled' | 'product_not_available' | 'others' | 'order_resent';
       
      shipped_at?:number;
       
      delivered_at?:number;
       
      tracking_url?:string;
       
      tracking_id?:string;
       
      shipment_carrier?:string;
       
      fulfillment_status?:string;
       
      status?:'new' | 'processing' | 'complete' | 'cancelled' | 'voided' | 'queued' | 'awaiting_shipment' | 'on_hold' | 'delivered' | 'shipped' | 'partially_delivered' | 'returned';
    }
    export interface ImportOrderResponse {  
       order:Order;
    }
    export interface ImportOrderInputParam {
       
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      billing_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      id?:string;
       
      document_number?:string;
       
      invoice_id:string;
       
      status:'cancelled' | 'queued' | 'awaiting_shipment' | 'on_hold' | 'delivered' | 'shipped' | 'partially_delivered' | 'returned';
       
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
       
      cancellation_reason?:'shipping_cut_off_passed' | 'product_unsatisfactory' | 'third_party_cancellation' | 'product_not_required' | 'delivery_date_missed' | 'alternative_found' | 'invoice_written_off' | 'invoice_voided' | 'fraudulent_transaction' | 'payment_declined' | 'subscription_cancelled' | 'product_not_available' | 'others' | 'order_resent';
       
      refundable_credits_issued?:number;
    }
    export interface AssignOrderNumberResponse {  
       order:Order;
    }
    
    export interface CancelResponse {  
       order:Order;
    }
    export interface CancelInputParam {
       
      credit_note?:{total?:number};
       
      cancellation_reason:'shipping_cut_off_passed' | 'product_unsatisfactory' | 'third_party_cancellation' | 'product_not_required' | 'delivery_date_missed' | 'alternative_found' | 'invoice_written_off' | 'invoice_voided' | 'fraudulent_transaction' | 'payment_declined' | 'subscription_cancelled' | 'product_not_available' | 'others' | 'order_resent';
       
      customer_notes?:string;
       
      comment?:string;
       
      cancelled_at?:number;
    }
    export interface CreateRefundableCreditNoteResponse {  
       order:Order;
    }
    export interface CreateRefundableCreditNoteInputParam {
       
      credit_note:{reason_code:'write_off' | 'subscription_change' | 'subscription_cancellation' | 'subscription_pause' | 'chargeback' | 'product_unsatisfactory' | 'service_unsatisfactory' | 'order_change' | 'order_cancellation' | 'waiver' | 'other' | 'fraudulent',total:number};
       
      customer_notes?:string;
       
      comment?:string;
    }
    export interface ReopenResponse {  
       order:Order;
    }
    export interface ReopenInputParam {
       
      void_cancellation_credit_notes?:boolean;
    }
    export interface RetrieveResponse {  
       order:Order;
    }
    
    export interface DeleteResponse {  
       order:Order;
    }
    
    export interface ListResponse {  
       list:{order:Order}[];
       
       next_offset?:string;
    }
    export interface ListInputParam {
      [key : string]: any;  
      /**
        * @description The number of resources to be returned.

        */
        
      limit?:number;
       
      /**
        * @description Determines your position in the list for pagination. To ensure that the next page is retrieved correctly, always set &#x27;offset&#x27; to the value of &#x27;next_offset&#x27; obtained in the previous iteration of the API call.

        */
        
      offset?:string;
       
      /**
        * @description Indicates whether to include deleted objects in the list. The deleted objects have the attribute \&#x60;deleted\&#x60; as \&#x60;true\&#x60;.

        */
        
      include_deleted?:boolean;
       
      exclude_deleted_credit_notes?:boolean;
       
      /**
        * @description Uniquely identifies the order. It is the api identifier for the order

        */
        
      id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description The invoice number which acts as an identifier for invoice and is generated sequentially.

        */
        
      invoice_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description The subscription for which the order is created

        */
        
      subscription_id?:{is?:string,is_not?:string,starts_with?:string};
       
      /**
        * @description The status of this order.

        */
        
      status?:{in?:string,is?:'new' | 'processing' | 'complete' | 'cancelled' | 'voided' | 'queued' | 'awaiting_shipment' | 'on_hold' | 'delivered' | 'shipped' | 'partially_delivered' | 'returned',is_not?:'new' | 'processing' | 'complete' | 'cancelled' | 'voided' | 'queued' | 'awaiting_shipment' | 'on_hold' | 'delivered' | 'shipped' | 'partially_delivered' | 'returned',not_in?:string};
       
      /**
        * @description This is the date on which the order will be delivered to the customer.

        */
        
      shipping_date?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description The time at which the order was shipped.

        */
        
      shipped_at?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description Order type

        */
        
      order_type?:{in?:string,is?:'manual' | 'system_generated',is_not?:'manual' | 'system_generated',not_in?:string};
       
      /**
        * @description The date on which the order will start getting processed.

        */
        
      order_date?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description The timestamp indicating the date \&amp; time the order&#x27;s invoice got paid.

        */
        
      paid_on?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description To filter based on updated at .

        */
        
      updated_at?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description The time at which the order was created

        */
        
      created_at?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description Resent order status.

        */
        
      resent_status?:{in?:string,is?:'fully_resent' | 'partially_resent',is_not?:'fully_resent' | 'partially_resent',not_in?:string};
       
      /**
        * @description Order is resent order or not.

        */
        
      is_resent?:{is?:'true' | 'false'};
       
      /**
        * @description If resent order what is the parent order id.

        */
        
      original_order_id?:{is?:string,is_not?:string,starts_with?:string};
       
      sort_by?:object;
    }
    export interface OrdersForInvoiceResponse {  
       list:{order:Order}[];
       
       next_offset?:string;
    }
    export interface OrdersForInvoiceInputParam {
      [key : string]: any;  
      /**
        * @description The number of resources to be returned.

        */
        
      limit?:number;
       
      /**
        * @description Determines your position in the list for pagination. To ensure that the next page is retrieved correctly, always set &#x27;offset&#x27; to the value of &#x27;next_offset&#x27; obtained in the previous iteration of the API call.

        */
        
      offset?:string;
    }
    export interface ResendResponse {  
       order:Order;
    }
    export interface ResendInputParam {
       
      order_line_items?:{fulfillment_quantity?:number,id?:string}[];
       
      shipping_date?:number;
       
      resend_reason?:string;
    }
    export interface OrderLineItem {  
      id:string;
       
      invoice_id:string;
       
      invoice_line_item_id:string;
       
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
       
      is_shippable:boolean;
       
      sku?:string;
       
      status?:'queued' | 'awaiting_shipment' | 'on_hold' | 'delivered' | 'shipped' | 'partially_delivered' | 'returned' | 'cancelled';
       
      entity_type:'adhoc' | 'plan_item_price' | 'addon_item_price' | 'charge_item_price' | 'plan_setup' | 'plan' | 'addon';
       
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
    export interface LineItemDiscount {  
      line_item_id:string;
       
      discount_type:'item_level_coupon' | 'document_level_coupon' | 'promotional_credits' | 'prorated_credits' | 'custom_discount' | 'item_level_discount' | 'document_level_discount';
       
      coupon_id?:string;
       
      entity_id?:string;
       
      discount_amount:number;
    }
    export interface LinkedCreditNote {  
      amount?:number;
       
      type:'adjustment' | 'refundable' | 'store';
       
      id:string;
       
      status:'adjusted' | 'refunded' | 'refund_due' | 'voided';
       
      amount_adjusted?:number;
       
      amount_refunded?:number;
    }
    export interface ResentOrder {  
      order_id:string;
       
      reason?:string;
       
      amount?:number;
    }
  }
}