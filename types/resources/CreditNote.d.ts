///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface CreditNote {
    
    /**
      * @description Credit-note id.

      */
    
    id:string;
    
    /**
      * @description The identifier of the customer this Credit Note belongs to.

      */
    
    customer_id:string;
    
    /**
      * @description The identifier of the subscription this Credit Note belongs to.   
**Note:** If *consolidated invoicing* is enabled, to know the subscriptions attached with this Credit Note you have to refer [line_item&#x27;s](/docs/api/credit_notes#credit_note_line_items) *subscription_id* . This attribute should **not** be used (which will be *null* if this credit note has lines from multiple subscriptions).

      */
    
    subscription_id?:string;
    
    /**
      * @description The identifier of the invoice against which this Credit Note is issued

      */
    
    reference_invoice_id:string;
    
    /**
      * @description The credit note type. \* refundable - Refundable Credit Note \* adjustment - Adjustment Credit Note

      */
    
    type:'adjustment' | 'refundable';
    
    /**
      * @description The reason for issuing this Credit Note. The following reason codes are supported now\[Deprecated; use the [create_reason_code](/docs/api/credit_notes#credit_note_create_reason_code) parameter instead\] \* subscription_change - This reason will be set automatically for Credit Notes created during Change Subscription operation when [proration](https://www.chargebee.com/docs/proration.html) is enabled \* order_change - Order Change \* other - Can be set when none of the above reason codes are applicable \* fraudulent - FRAUDULENT \* chargeback - Can be set when you are recording your customer Chargebacks \* subscription_pause - This reason will be automatically set to credit notes created during pause/resume subscription operation. \* waiver - Waiver \* subscription_cancellation - This reason will be set automatically for Credit Notes created during cancel subscription operation \* product_unsatisfactory - Product Unsatisfactory \* order_cancellation - Order Cancellation \* write_off - This reason will be set automatically for the Credit Notes created during invoice [Write Off](https://www.chargebee.com/docs/invoice-operations.html#write-off) operation. \* service_unsatisfactory - Service Unsatisfactory

      */
    
    reason_code?:'other' | 'product_unsatisfactory' | 'subscription_pause' | 'order_cancellation' | 'service_unsatisfactory' | 'subscription_cancellation' | 'chargeback' | 'order_change' | 'write_off' | 'waiver' | 'subscription_change' | 'fraudulent';
    
    /**
      * @description The credit note status. \* voided - When the Credit Note has been cancelled. \* refund_due - When the credits are yet to be used, or have been partially used. \* refunded - When the entire credits (Credit Note amount) have been used (i.e either allocated to invoices or refunded). \* adjusted - When the Credit Note has been adjusted against an invoice.

      */
    
    status:'refund_due' | 'adjusted' | 'refunded' | 'voided';
    
    /**
      * @description VAT number of the customer for whom this Credit Note is raised.

      */
    
    vat_number?:string;
    
    /**
      * @description The date the Credit Note is issued.

      */
    
    date?:number;
    
    /**
      * @description The price type of the Credit Note. \* tax_inclusive - All amounts in the document are inclusive of tax. \* tax_exclusive - All amounts in the document are exclusive of tax.

      */
    
    price_type:PriceType;
    
    /**
      * @description The currency code (ISO 4217 format) for the credit note

      */
    
    currency_code:string;
    
    /**
      * @description Credit Note amount in cents.

      */
    
    total?:number;
    
    /**
      * @description The amount allocated to the invoices.

      */
    
    amount_allocated?:number;
    
    /**
      * @description The refunds issued from this Credit Note.

      */
    
    amount_refunded?:number;
    
    /**
      * @description The yet to be used credits of this Credit Note.

      */
    
    amount_available?:number;
    
    /**
      * @description The time this Credit Note gets fully used. Please note that this field is not present when partial refunds are issued.

      */
    
    refunded_at?:number;
    
    /**
      * @description Timestamp indicating the date and time this Credit Note gets voided.

      */
    
    voided_at?:number;
    
    /**
      * @description The date/time when the credit note was raised. This date/time can be backdated, which means that the date/time can be earlier than the date/time the credit note was created.

      */
    
    generated_at?:number;
    
    /**
      * @description Version number of this resource. The &#x60;resource_version&#x60; is updated with a new timestamp in milliseconds for every change made to the resource. This attribute will be present only if the resource has been updated after 2016-09-28.

      */
    
    resource_version?:number;
    
    /**
      * @description Timestamp indicating when this Credit Note was last updated. This attribute will be present only if the resource has been updated after 2016-09-28.

      */
    
    updated_at?:number;
    
    /**
      * @description The subscription channel this object originated from and is maintained in. \* play_store - The object data is synchronized with data from [in-app subscription(s)](https://apidocs.chargebee.com/docs/api/in_app_subscriptions) created in Google Play Store. Direct manipulation of this object via UI or API is disallowed.  

In-App Subscriptions is currently in early access. Contact [eap@chargebee.com](mailto:eap@chargebee.com) for more information.
\* web - The object was created (and is maintained) for the web channel directly in Chargebee via API or UI. \* app_store - The object data is synchronized with data from [in-app subscription(s)](https://apidocs.chargebee.com/docs/api/in_app_subscriptions) created in Apple App Store. Direct manipulation of this object via UI or API is disallowed.

      */
    
    channel?:Channel;
    
    /**
      * @description The Credit Note sub-total

      */
    
    sub_total:number;
    
    /**
      * @description Invoice subtotal in the currency of the place of supply.

      */
    
    sub_total_in_local_currency?:number;
    
    /**
      * @description Total invoice amount in the currency of the place of supply.

      */
    
    total_in_local_currency?:number;
    
    /**
      * @description The currency code (ISO 4217 format) of the place of supply in which VAT needs to be converted and displayed.

      */
    
    local_currency_code?:string;
    
    /**
      * @description Indicates the rounded-off amount. For example, if your invoice amount is $99.99, and the amount is rounded off to $100.00, in this case, $100.00 is your invoice amount, $0.01 is the &#x60;round_off_amount&#x60;. If there is no &#x60;round-off amount&#x60;, it will display &#x60;0&#x60;.

      */
    
    round_off_amount?:number;
    
    /**
      * @description Indicates the fractional correction amount.

      */
    
    fractional_correction?:number;
    
    /**
      * @description Indicates that this resource has been deleted.

      */
    
    deleted:boolean;
    
    /**
      * @description Specifies the customer&#x27;s category for the Goods and Services Tax (GST). This field is returned only if you&#x27;ve configured GST for the India region.

      */
    
    tax_category?:string;
    
    /**
      * @description This parameter represents the exchange rate as a relative price of the base currency that appears as local currency in invoices and credit notes. The local currency exchange rate specifically refers to the exchange rate of a country&#x27;s currency when converting it to another currency. For example, if you want to convert US dollars to euros, the local currency exchange rate would be the rate at which you can convert US dollars to euros.

      */
    
    local_currency_exchange_rate?:number;
    
    /**
      * @description Reason code for creating the credit note. Must be one from a list of reason codes set in the Chargebee app in **Settings \&gt; Configure Chargebee \&gt; Reason Codes \&gt; Credit Notes \&gt; Create Credit Note**. Must be passed if set as mandatory in the app. The codes are case-sensitive

      */
    
    create_reason_code?:string;
    
    /**
      * @description An overridden value for the first two characters of the [full VAT
number](https://en.wikipedia.org/wiki/VAT_identification_number). Only applicable specifically for customers with [billing_address](customers#customer_billing_address) &#x60;country&#x60; as &#x60;XI&#x60; (which is **United Kingdom - Northern Ireland** ).  

When you have enabled [EU VAT](https://www.chargebee.com/docs/eu-vat.html) in 2021 or have [manually
enabled](https://www.chargebee.com/docs/brexit.html#what-needs-to-be-done-in-chargebee) the Brexit configuration, you have the option of setting [billing_address](customers#customer_billing_address) &#x60;country&#x60; as &#x60;XI&#x60;. That&#x27;s the code for **United Kingdom - Northern
Ireland** . The first two characters of the VAT number in such a case is &#x60;XI&#x60; by default. However, if the VAT number was registered in UK, the value should be &#x60;GB&#x60;. Set &#x60;vat_number_prefix&#x60; to &#x60;GB&#x60; for such cases.

      */
    
    vat_number_prefix?:string;
    
    /**
      * @description The unique ID of the [business entity](/docs/api/advanced-features?prod_cat_ver&#x3D;2#mbe) of this credit_note. This is always the same as the business entity of the invoice referred to by [reference_invoice_id](/docs/api/credit_notes?prod_cat_ver&#x3D;2#credit_note_reference_invoice_id).

      */
    
    business_entity_id:string;
    
    /**
      * @description An e-invoice or electronic invoice is a structured representation of an invoice that is interoperable between computerized invoicing systems. Depending on the country, e-invoicing can be necessary to meet financial/taxation authority regulations.

      */
    
    einvoice?:CreditNote.Einvoice;
    
    /**
      * @description The line items of this Credit Note

      */
    
    line_items?:CreditNote.LineItem[];
    
    /**
      * @description The list of discounts applied to this Credit Note

      */
    
    discounts?:CreditNote.Discount[];
    
    /**
      * @description The list of discount(s) applied for each line item of this invoice.

      */
    
    line_item_discounts?:CreditNote.LineItemDiscount[];
    
    /**
      * @description The list of tiers applicable for this line item

      */
    
    line_item_tiers?:CreditNote.LineItemTier[];
    
    /**
      * @description The tax-lines of this Credit Note

      */
    
    taxes?:CreditNote.Tax[];
    
    /**
      * @description The list of taxes applied on line items

      */
    
    line_item_taxes?:CreditNote.LineItemTax[];
    
    /**
      * @description Payment Refunds issued from this Credit Note

      */
    
    linked_refunds?:CreditNote.CreditNoteTransaction[];
    
    /**
      * @description The details of refunds recorded against the [invoice.linked_taxes_withheld](/docs/api/invoices#invoice_linked_taxes_withheld) component of the &#x60;invoice&#x60; [associated](/docs/api/credit_notes#credit_note_reference_invoice_id) with this &#x60;credit_note&#x60;.

      */
    
    linked_tax_withheld_refunds?:CreditNote.LinkedTaxWithheldRefund[];
    
    /**
      * @description Invoice allocations made from this Credit Note.

      */
    
    allocations?:CreditNote.AppliedCredit[];
    
    /**
      * @description Shipping address for the quote.

      */
    
    shipping_address?:CreditNote.ShippingAddress;
    
    /**
      * @description Billing address for the quote.

      */
    
    billing_address?:CreditNote.BillingAddress;
  }
  export namespace CreditNote {
    export class CreditNoteResource {  
      /**
        * @description Creates a &#x60;credit_note&#x60; for the specified invoice.  
**Note:**

If the &#x60;credit_note&#x60; [type](/docs/api/credit_notes#create_credit_note_type) is &#x60;refundable&#x60;, then &#x60;linked_taxes_withheld.amount&#x60; for the [invoice specified](/docs/api/credit_notes#create_credit_note_reference_invoice_id) can also be included in the [total](/docs/api/credit_notes#create_credit_note_total).

        */
      
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
       
      /**
        * @description Retrieves the Credit Note identified by the specified Credit Note number.

        */
      
      retrieve(credit_note_id:string):ChargebeeRequest<RetrieveResponse>;
       
      /**
        * @description Gets the credit note as PDF. The returned URL is secure and allows download. The URL will expire in 60 minutes.

        */
      
      pdf(credit_note_id:string, input?:PdfInputParam):ChargebeeRequest<PdfResponse>;
       
      /**
        * @description Download the e-invoice for the credit note in both XML and PDF formats. The response consists of a &#x60;download&#x60; object for each format. The XML format follows the [structure as per Peppol BIS Billing v3.0](https://docs.peppol.eu/poacc/billing/3.0/syntax/ubl-creditnote/tree/).  
**Note**

* You can only download e-invoices when their &#x60;status&#x60; is &#x60;success&#x60; or &#x60;registered&#x60;.
* There are some cases in which the PDF is not available for download. In such cases, you can obtain it from the XML by decoding the value for [cbc:EmbeddedDocumentBinaryObject](https://docs.peppol.eu/poacc/billing/3.0/syntax/ubl-creditnote/cac-AdditionalDocumentReference/cac-Attachment/cbc-EmbeddedDocumentBinaryObject/), which is the Base64-encoded version of the PDF.

        */
      
      download_einvoice(credit_note_id:string):ChargebeeRequest<DownloadEinvoiceResponse>;
       
      /**
        * @description Refunds a ([refundable](https://www.chargebee.com/docs/credit-notes.html#types-of-credit-notes_refundable-credit-note)) credit note to the [payment source](/docs/api/payment_sources) associated with the [transaction](/docs/api/transactions). Any [linked_tax_withheld_refunds](/docs/api/credit_notes#credit_note_linked_tax_withheld_refunds) recorded against the credit note are not refunded.

        */
      
      refund(credit_note_id:string, input?:RefundInputParam):ChargebeeRequest<RefundResponse>;
       
      /**
        * @description Refunds a ([refundable](https://www.chargebee.com/docs/credit-notes.html#types-of-credit-notes_refundable-credit-note)) credit note. The refund is provided against &#x60;linked_payments&#x60; first and then against any &#x60;linked_taxes_withheld&#x60; for the [invoice](/docs/api/credit_notes#credit_note_reference_invoice_id) associated with the &#x60;credit_note&#x60;. For payments made via online transactions, the refund request is processed via the [payment source](/docs/api/payment_sources) associated with the [transaction](/docs/api/transactions).

        */
      
      record_refund(credit_note_id:string, input?:RecordRefundInputParam):ChargebeeRequest<RecordRefundResponse>;
       
      /**
        * @description Use this API to [void a credit note.](https://www.chargebee.com/docs/credit-notes.html#voiding-or-deleting-a-credit-note) A voided credit is a null entity and cannot be used again. A credit note which has already been voided or refunded cannot be voided. An error message will be displayed when you render such credit notes void.

**Note:** When adjustment credit notes are voided, the associated invoice will reflect as NOT PAID, and the amount in the invoice will be recalculated to reflect the amount after considering the voided credit note.

        */
      
      void_credit_note(credit_note_id:string, input?:VoidCreditNoteInputParam):ChargebeeRequest<VoidCreditNoteResponse>;
       
      /**
        * @description Lists all the Credit Notes.

        */
      
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
       
      /**
        * @description This API [deletes a credit note.](https://www.chargebee.com/docs/credit-notes.html#voiding-or-deleting-a-credit-note) A credit note once deleted, is deleted permanently. You cannot delete a credit which has already been deleted or refunded. If you try to delete a refunded or deleted credit note, an error message will be displayed.

        */
      
      delete(credit_note_id:string, input?:DeleteInputParam):ChargebeeRequest<DeleteResponse>;
       
      /**
        * @description Removes a [linked_tax_withheld_refunds](/docs/api/credit_notes#credit_note_linked_tax_withheld_refunds) record from the &#x60;credit_note&#x60;.

        */
      
      remove_tax_withheld_refund(credit_note_id:string, input?:RemoveTaxWithheldRefundInputParam):ChargebeeRequest<RemoveTaxWithheldRefundResponse>;
       
      /**
        * @description Resend failed einvoice in credit notes.

        */
      
      resend_einvoice(credit_note_id:string):ChargebeeRequest<ResendEinvoiceResponse>;
       
      /**
        * @description This endpoint is used to send an e-invoice for invoice.

To support cases like TDS and invoice edits, we need to stop auto e-invoice sending and be able to send e-invoices manually.

This endpoint schedules e-invoices manually. This operation is not allowed when any of the following condition matches:

* If e-invoicing is not enabled at the site and customer level.

* If there is an e-invoice generated already for the invoice.

* If the &quot;**Use automatic e-invoicing**&quot; option is selected.

* If there are no generated e-invoices with the &#x60;failed&#x60; or &#x60;skipped&#x60; status.

* If the invoice status is &#x60;voided&#x60; or &#x60;pending&#x60;.


        */
      
      send_einvoice(credit_note_id:string):ChargebeeRequest<SendEinvoiceResponse>;
       
      /**
        * @description Use this api to import credit notes into your Chargebee site. Billing address, Shipping Address, Vat number will be copied from the reference invoice.

        */
      
      import_credit_note(input:ImportCreditNoteInputParam):ChargebeeRequest<ImportCreditNoteResponse>;
    }
    export interface CreateResponse {  
       credit_note:CreditNote;
       
       invoice:Invoice;
    }
    export interface CreateInputParam {
       
      /**
        * @description The identifier of the invoice against which this Credit Note is issued.

        */
       
      reference_invoice_id:string;
       
      /**
        * @description Credit Note amount in cents. You can either pass the total parameter or the line_items parameter. Passing both will result in an error.

        */
       
      total?:number;
       
      /**
        * @description The credit note type. \* refundable - Refundable Credit Note \* adjustment - Adjustment Credit Note

        */
       
      type:'adjustment' | 'refundable';
       
      /**
        * @description The reason for issuing this Credit Note. The following reason codes are supported now\[Deprecated; use the [create_reason_code](/docs/api/credit_notes#credit_note_create_reason_code) parameter instead\]. \* chargeback - Can be set when you are recording your customer Chargebacks \* subscription_change - This reason will be set automatically for Credit Notes created during Change Subscription operation when [proration](https://www.chargebee.com/docs/proration.html) is enabled \* waiver - Waiver \* order_cancellation - Order Cancellation \* order_change - Order Change \* product_unsatisfactory - Product Unsatisfactory \* subscription_pause - This reason will be automatically set to credit notes created during pause/resume subscription operation. \* service_unsatisfactory - Service Unsatisfactory \* other - Can be set when none of the above reason codes are applicable \* subscription_cancellation - This reason will be set automatically for Credit Notes created during cancel subscription operation \* write_off - This reason will be set automatically for the Credit Notes created during invoice [Write Off](https://www.chargebee.com/docs/invoice-operations.html#write-off) operation. \* fraudulent - FRAUDULENT

        */
       
      reason_code?:'order_cancellation' | 'service_unsatisfactory' | 'other' | 'product_unsatisfactory' | 'order_change' | 'waiver';
       
      /**
        * @description Reason code for creating the credit note. Must be one from a list of reason codes set in the Chargebee app in **Settings \&gt; Configure Chargebee \&gt; Reason Codes \&gt; Credit Notes \&gt; Create Credit Note**. Must be passed if set as mandatory in the app. The codes are case-sensitive.

        */
       
      create_reason_code?:string;
       
      /**
        * @description The date the Credit Note is issued.

        */
       
      date?:number;
       
      /**
        * @description A note to be added for this operation, to the credit note. This note is displayed on customer-facing documents such as the [Credit Note PDF](./credit_notes#retrieve_credit_note_as_pdf).

        */
       
      customer_notes?:string;
       
      /**
        * @description An internal [comment](./comments) to be added for this operation, to the credit note. This comment is displayed on the Chargebee UI. It is not displayed on any customer-facing [Hosted Page](./hosted_pages) or any document such as the [Credit Note PDF](./credit_notes#retrieve_credit_note_as_pdf).

        */
       
      comment?:string;
       
      /**
        * @description Parameters for line_items

        */
       
      line_items?:{amount?:number,date_from?:number,date_to?:number,description?:string,quantity?:number,quantity_in_decimal?:string,reference_line_item_id:string,unit_amount?:number,unit_amount_in_decimal?:string}[];
    }
    export interface RetrieveResponse {  
       credit_note:CreditNote;
    }
    
    export interface PdfResponse {  
       download:Download;
    }
    export interface PdfInputParam {
       
      /**
        * @description Determines the pdf should be rendered as inline or attachment in the browser. \* attachment - PDF is rendered as attachment in the browser \* inline - PDF is rendered as inline in the browser

        */
       
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
       
      /**
        * @description The amount to be refunded. If not specified, the entire [refundable amount](/docs/api/credit_notes#credit_note_amount_available) for this &#x60;credit_note&#x60; is refunded. **Note:** Any [linked_tax_withheld_refunds](/docs/api/credit_notes#credit_note_linked_tax_withheld_refunds) associated with the &#x60;credit_note&#x60; cannot be refunded via this operation.

        */
       
      refund_amount?:number;
       
      /**
        * @description A note to be added for this operation, to the credit note. This note is displayed on customer-facing documents such as the [Credit Note PDF](./credit_notes#retrieve_credit_note_as_pdf).

        */
       
      customer_notes?:string;
       
      /**
        * @description Reason code for the refund. Must be one from a list of reason codes set in the Chargebee app in **Settings \&gt; Configure Chargebee \&gt; Reason Codes \&gt; Credit Notes \&gt; Refund Credit Note**. Must be passed if set as mandatory in the app. The codes are case-sensitive.

        */
       
      refund_reason_code?:string;
    }
    export interface RecordRefundResponse {  
       credit_note:CreditNote;
       
       transaction?:Transaction;
    }
    export interface RecordRefundInputParam {
       
      /**
        * @description Reason code for the refund. Must be one from a list of reason codes set in the Chargebee app in **Settings \&gt; Configure Chargebee \&gt; Reason Codes \&gt; Credit Notes \&gt; Refund Credit Note**. Must be passed if set as mandatory in the app. The codes are case-sensitive.

        */
       
      refund_reason_code?:string;
       
      /**
        * @description Remarks, if any, on the refund.

        */
       
      comment?:string;
       
      /**
        * @description Parameters for transaction

        */
       
      transaction?:{amount?:number,date:number,payment_method:PaymentMethod,reference_number?:string};
    }
    export interface VoidCreditNoteResponse {  
       credit_note:CreditNote;
    }
    export interface VoidCreditNoteInputParam {
       
      /**
        * @description Reason for voiding credit note. This comment will be added to the credit note.

        */
       
      comment?:string;
    }
    export interface ListResponse {  
      /**
        * @description Lists all the Credit Notes.

        */
       
       list:{credit_note:CreditNote}[];
       
      /**
        * @description Lists all the Credit Notes.

        */
       
       next_offset?:string;
    }
    export interface ListInputParam {
      [key : string]: any;  
      /**
        * @description Lists all the Credit Notes.

        */
        
      limit?:number;
       
      /**
        * @description Lists all the Credit Notes.

        */
        
      offset?:string;
       
      /**
        * @description Lists all the Credit Notes.

        */
        
      include_deleted?:boolean;
       
      /**
        * @description Lists all the Credit Notes.

        */
        
      id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Lists all the Credit Notes.

        */
        
      customer_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Lists all the Credit Notes.

        */
        
      subscription_id?:{in?:string,is?:string,is_not?:string,is_present?:'true' | 'false',not_in?:string,starts_with?:string};
       
      /**
        * @description Lists all the Credit Notes.

        */
        
      reference_invoice_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Lists all the Credit Notes.

        */
        
      type?:{in?:string,is?:'adjustment' | 'refundable',is_not?:'adjustment' | 'refundable',not_in?:string};
       
      /**
        * @description Lists all the Credit Notes.

        */
        
      reason_code?:{in?:string,is?:'other' | 'product_unsatisfactory' | 'subscription_pause' | 'order_cancellation' | 'service_unsatisfactory' | 'subscription_cancellation' | 'chargeback' | 'order_change' | 'write_off' | 'waiver' | 'subscription_change' | 'fraudulent',is_not?:'other' | 'product_unsatisfactory' | 'subscription_pause' | 'order_cancellation' | 'service_unsatisfactory' | 'subscription_cancellation' | 'chargeback' | 'order_change' | 'write_off' | 'waiver' | 'subscription_change' | 'fraudulent',not_in?:string};
       
      /**
        * @description Lists all the Credit Notes.

        */
        
      create_reason_code?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Lists all the Credit Notes.

        */
        
      status?:{in?:string,is?:'refund_due' | 'adjusted' | 'refunded' | 'voided',is_not?:'refund_due' | 'adjusted' | 'refunded' | 'voided',not_in?:string};
       
      /**
        * @description Lists all the Credit Notes.

        */
        
      date?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description Lists all the Credit Notes.

        */
        
      total?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
       
      /**
        * @description Lists all the Credit Notes.

        */
        
      price_type?:{in?:string,is?:'tax_exclusive' | 'tax_inclusive',is_not?:'tax_exclusive' | 'tax_inclusive',not_in?:string};
       
      /**
        * @description Lists all the Credit Notes.

        */
        
      amount_allocated?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
       
      /**
        * @description Lists all the Credit Notes.

        */
        
      amount_refunded?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
       
      /**
        * @description Lists all the Credit Notes.

        */
        
      amount_available?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
       
      /**
        * @description Lists all the Credit Notes.

        */
        
      voided_at?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description Lists all the Credit Notes.

        */
        
      updated_at?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description Lists all the Credit Notes.

        */
        
      sort_by?:{asc?:'date',desc?:'date'};
       
      /**
        * @description Lists all the Credit Notes.

        */
        
      channel?:{in?:string,is?:'app_store' | 'web' | 'play_store',is_not?:'app_store' | 'web' | 'play_store',not_in?:string};
       
      /**
        * @description Lists all the Credit Notes.

        */
        
      einvoice?:{status?:{in?:string,is?:'in_progress' | 'scheduled' | 'success' | 'registered' | 'failed' | 'skipped',is_not?:'in_progress' | 'scheduled' | 'success' | 'registered' | 'failed' | 'skipped',not_in?:string}};
    }
    export interface DeleteResponse {  
       credit_note:CreditNote;
    }
    export interface DeleteInputParam {
       
      /**
        * @description Reason for deleting this credit note. This comment will be added to the associated invoice entity.

        */
       
      comment?:string;
    }
    export interface RemoveTaxWithheldRefundResponse {  
       credit_note:CreditNote;
    }
    export interface RemoveTaxWithheldRefundInputParam {
       
      /**
        * @description Parameters for tax_withheld

        */
       
      tax_withheld?:{id:string};
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
       
      /**
        * @description Credit Note Number.

        */
       
      id:string;
       
      /**
        * @description This identifies the customer for whom the credit note needs to be created.

        */
       
      customer_id?:string;
       
      /**
        * @description The identifier of the subscription for which this credit note needs to be created.

        */
       
      subscription_id?:string;
       
      /**
        * @description The identifier of the invoice against which this Credit Note is issued.

        */
       
      reference_invoice_id:string;
       
      /**
        * @description The credit note type. \* refundable - Refundable Credit Note \* adjustment - Adjustment Credit Note

        */
       
      type:'adjustment' | 'refundable';
       
      /**
        * @description The currency code (ISO 4217 format) for the credit note.

        */
       
      currency_code?:string;
       
      /**
        * @description Reason code for creating the credit note. Must be one from a list of reason codes set in the Chargebee app in **Settings \&gt; Configure Chargebee \&gt; Reason Codes \&gt; Credit Notes \&gt; Create Credit Note**. Must be passed if set as mandatory in the app. The codes are case-sensitive.

        */
       
      create_reason_code:string;
       
      /**
        * @description The date the Credit Note is issued.

        */
       
      date:number;
       
      /**
        * @description The credit note status. \* refund_due - When the credits are yet to be used, or have been partially used. \* refunded - When the entire credits (Credit Note amount) have been used (i.e either allocated to invoices or refunded). \* voided - When the Credit Note has been cancelled. \* adjusted - When the Credit Note has been adjusted against an invoice.

        */
       
      status?:'refund_due' | 'adjusted' | 'refunded' | 'voided';
       
      /**
        * @description Credit Note amount in cents.

        */
       
      total?:number;
       
      /**
        * @description The time this Credit Note gets fully used. Please note that this field is not present when partial refunds are issued.

        */
       
      refunded_at?:number;
       
      /**
        * @description Timestamp indicating the date and time this Credit Note gets voided.

        */
       
      voided_at?:number;
       
      /**
        * @description The Credit Note sub-total.

        */
       
      sub_total?:number;
       
      /**
        * @description Indicates the rounded-off amount. For example, if your invoice amount is $99.99, and the amount is rounded off to $100.00, in this case, $100.00 is your invoice amount, $0.01 is the &#x60;round_off_amount&#x60;. If there is no &#x60;round-off amount&#x60;, it will display &#x60;0&#x60;.

        */
       
      round_off_amount?:number;
       
      /**
        * @description Indicates the fractional correction amount.

        */
       
      fractional_correction?:number;
       
      /**
        * @description An overridden value for the first two characters of the [full VAT
number](https://en.wikipedia.org/wiki/VAT_identification_number). Only applicable specifically for customers with [billing_address](customers#customer_billing_address) &#x60;country&#x60; as &#x60;XI&#x60; (which is **United Kingdom - Northern Ireland** ).  

When you have enabled [EU VAT](https://www.chargebee.com/docs/eu-vat.html) in 2021 or have [manually
enabled](https://www.chargebee.com/docs/brexit.html#what-needs-to-be-done-in-chargebee) the Brexit configuration, you have the option of setting [billing_address](customers#customer_billing_address) &#x60;country&#x60; as &#x60;XI&#x60;. That&#x27;s the code for **United Kingdom - Northern
Ireland** . The first two characters of the VAT number in such a case is &#x60;XI&#x60; by default. However, if the VAT number was registered in UK, the value should be &#x60;GB&#x60;. Set &#x60;vat_number_prefix&#x60; to &#x60;GB&#x60; for such cases.

        */
       
      vat_number_prefix?:string;
       
      /**
        * @description Parameters for line_items

        */
       
      line_items?:{amount?:number,amount_in_decimal?:string,date_from?:number,date_to?:number,description:string,entity_id?:string,entity_type?:'addon_item_price' | 'plan_item_price' | 'charge_item_price' | 'adhoc',id?:string,item_level_discount1_amount?:number,item_level_discount1_entity_id?:string,item_level_discount2_amount?:number,item_level_discount2_entity_id?:string,quantity?:number,quantity_in_decimal?:string,reference_line_item_id?:string,subscription_id?:string,tax10_amount?:number,tax10_name?:string,tax1_amount?:number,tax1_name?:string,tax2_amount?:number,tax2_name?:string,tax3_amount?:number,tax3_name?:string,tax4_amount?:number,tax4_name?:string,tax5_amount?:number,tax5_name?:string,tax6_amount?:number,tax6_name?:string,tax7_amount?:number,tax7_name?:string,tax8_amount?:number,tax8_name?:string,tax9_amount?:number,tax9_name?:string,unit_amount?:number,unit_amount_in_decimal?:string}[];
       
      /**
        * @description Parameters for line_item_tiers

        */
       
      line_item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,line_item_id:string,quantity_used?:number,quantity_used_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string,unit_amount?:number,unit_amount_in_decimal?:string}[];
       
      /**
        * @description Parameters for discounts

        */
       
      discounts?:{amount:number,description?:string,entity_id?:string,entity_type:'item_level_coupon' | 'promotional_credits' | 'item_level_discount' | 'document_level_discount' | 'document_level_coupon',line_item_id?:string}[];
       
      /**
        * @description Parameters for taxes

        */
       
      taxes?:{amount?:number,description?:string,juris_code?:string,juris_name?:string,juris_type?:'special' | 'country' | 'unincorporated' | 'other' | 'city' | 'federal' | 'county' | 'state',name:string,rate:number}[];
       
      /**
        * @description Parameters for allocations

        */
       
      allocations?:{allocated_amount:number,allocated_at:number,invoice_id:string}[];
       
      /**
        * @description Parameters for linked_refunds

        */
       
      linked_refunds?:{amount:number,date:number,payment_method:PaymentMethod,reference_number?:string}[];
    }
    export interface Einvoice {  
         /**
          * @description The unique &#x60;id&#x60; for the e-invoice. This is auto-generated by Chargebee.

          */
       
      id:string;
       
         /**
          * @description This attribute is used to populate the unique reference number assigned to an invoice on the Invoice Registration Portal (IRP) network. It is essential for identifying and tracking invoices that are processed through the IRP network. In the future, this field may be used to store similar reference numbers for other networks.

          */
       
      reference_number?:string;
       
         /**
          * @description The status of processing the e-invoice. To obtain detailed information about the current &#x60;status&#x60;, see &#x60;message&#x60;. \* scheduled - Sending the e-invoice to the customer has been scheduled. \* skipped - The e-invoice was not sent. This could be due to missing information or because the &#x60;entity_identifier&#x60; is not registered on the e-invoicing network. \* success - The e-invoice has been successfully delivered to the customer. \* failed - The e-invoice was sent and there was an error due to which it was not delivered. \* in_progress - The e-invoice has been sent and Chargebee is waiting for confirmation from the receiving entity. \* registered - The e-invoice was sent and there was an error due to which it was not delivered but got cleared in the IRP.

          */
       
      status:'in_progress' | 'scheduled' | 'success' | 'registered' | 'failed' | 'skipped';
       
         /**
          * @description Detailed information about the status of the e-invoice. When &#x60;status&#x60; is &#x60;skipped&#x60; or &#x60;failed&#x60;, this contains the reason or error details. The following are some valid examples:

* Invoice successfully sent to customer via the e-invoicing network 9090:123456
* Invoice successfully sent to customer via email id abc@acme.com

          */
       
      message?:string;
    }
    export interface LineItem {  
         /**
          * @description Uniquely identifies a line_item

          */
       
      id?:string;
       
         /**
          * @description A unique identifier for the subscription this line item belongs to.

          */
       
      subscription_id?:string;
       
         /**
          * @description Start date of this line item.

          */
       
      date_from:number;
       
         /**
          * @description End date of this line item.

          */
       
      date_to:number;
       
         /**
          * @description Unit amount of the line item.

          */
       
      unit_amount:number;
       
         /**
          * @description [Quantity of the recurring item](/docs/api/invoices?prod_cat_ver&#x3D;2#invoice_line_items_quantity) which is represented by this line item. For &#x60;metered&#x60; line items, this value is updated from [usages](/docs/api/usages) once when the invoice is generated as &#x60;pending&#x60; and finally when the invoice is [closed](/docs/api/invoices#close_a_pending_invoice).

          */
       
      quantity?:number;
       
         /**
          * @description Total amount of this line item. Typically equals to unit amount x quantity

          */
       
      amount?:number;
       
         /**
          * @description The [pricing scheme](https://www.chargebee.com/docs/2.0/plans.html#pricing-models) for this item price. \* stairstep - A quantity-based pricing scheme. The item is charged a fixed price based on the tier that the total quantity falls in. \* flat_fee - A fixed price that is not quantity-based. \* tiered - The per unit price is based on the tier that the total quantity falls in. \* per_unit - A fixed price per unit quantity. \* volume - There are quantity tiers for which per unit prices are set. Quantities are purchased from successive tiers.

          */
       
      pricing_model?:'volume' | 'per_unit' | 'tiered' | 'flat_fee' | 'stairstep';
       
         /**
          * @description Specifies whether this line item is taxed or not

          */
       
      is_taxed:boolean;
       
         /**
          * @description The tax amount charged for this item

          */
       
      tax_amount?:number;
       
         /**
          * @description Rate of tax used to calculate tax for this lineitem

          */
       
      tax_rate?:number;
       
         /**
          * @description The decimal representation of the unit amount of the &#x60;line_item&#x60;. The value is in major units of the currency. Returned when the &#x60;line_item&#x60; is quantity-based and [multi-decimal pricing](https://apidocs.chargebee.com/docs/api#handling_currency_units ) is enabled.

          */
       
      unit_amount_in_decimal?:string;
       
         /**
          * @description The decimal representation of the quantity of this line_item. Returned when the &#x60;line_item&#x60; is quantity-based and [multi-decimal pricing](https://apidocs.chargebee.com/docs/api#handling_currency_units ) is enabled.

          */
       
      quantity_in_decimal?:string;
       
         /**
          * @description The decimal representation of the amount for the &#x60;line_item&#x60;, in major units of the currency. Typically equals to &#x60;unit_amount_in_decimal&#x60; x &#x60;quantity_in_decimal&#x60;. Returned when [multi-decimal pricing](https://apidocs.chargebee.com/docs/api#handling_currency_units ) is enabled.

          */
       
      amount_in_decimal?:string;
       
         /**
          * @description Total discounts for this line

          */
       
      discount_amount?:number;
       
         /**
          * @description Line Item-level discounts for this line.

          */
       
      item_level_discount_amount?:number;
       
         /**
          * @description Invoice Reference Line Item ID

          */
       
      reference_line_item_id?:string;
       
         /**
          * @description Detailed description about this line item.

          */
       
      description:string;
       
         /**
          * @description Detailed description about this item.

          */
       
      entity_description?:string;
       
         /**
          * @description Specifies the modelled entity this line item is based on. \* addon - Indicates that this lineitem is based on &#x27;Addon&#x27; entity. The &#x27;entity_id&#x27; attribute specifies the [addon](/docs/api/addons#addon_attributes) id \* plan - Indicates that this lineitem is based on &#x27;Plan&#x27; entity. The &#x27;entity_id&#x27; attribute specifies the [plan](/docs/api/plans#plan_attributes) id \* plan_item_price - Indicates that this line item is based on plan Item Price \* addon_item_price - Indicates that this line item is based on addon Item Price \* charge_item_price - Indicates that this line item is based on charge Item Price \* adhoc - Indicates that this lineitem is not modelled. i.e created adhoc. So the &#x27;entity_id&#x27; attribute will be null in this case \* plan_setup - Indicates that this lineitem is based on &#x27;Plan Setup&#x27; charge. The &#x27;entity_id&#x27; attribute specifies the [plan](/docs/api/plans#plan_attributes) id

          */
       
      entity_type:'addon_item_price' | 'plan_item_price' | 'charge_item_price' | 'adhoc';
       
         /**
          * @description The reason due to which the line item price/amount is exempted from tax. \* zero_value_item - If the total invoice value/amount is equal to zero. E.g., If the total order value is $10 and a $10 coupon has been applied against that order, the total order value becomes $0. Hence the invoice value also becomes $0. \* reverse_charge - If the Customer is identified as B2B customer (when VAT Number is entered), applicable for EU only \* tax_not_configured - If tax is not enabled for the site \* high_value_physical_goods - If physical goods are sold from outside Australia to customers in Australia, and the price of all the physical good line items is greater than AUD 1000, then tax will not be applied \* customer_exempt - If the Customer is marked as Tax exempt \* region_non_taxable - If the product sold is not taxable in this region, but it is taxable in other regions, hence this region is not part of the Taxable jurisdiction \* product_exempt - If the Plan or Addon is marked as Tax exempt \* zero_rated - If the rate of tax is 0% and no Sales/ GST tax is collectable for that line item \* export - You are not registered for tax in the customer&#x27;s region. This is also the reason code when both &#x60;billing_address&#x60; and &#x60;shipping_address&#x60; have not been provided for the customer and subscription respectively

          */
       
      tax_exempt_reason?:'high_value_physical_goods' | 'tax_not_configured' | 'reverse_charge' | 'zero_rated' | 'customer_exempt' | 'region_non_taxable' | 'zero_value_item' | 'export' | 'product_exempt';
       
         /**
          * @description The identifier of the modelled entity this line item is based on. Will be null for &#x27;adhoc&#x27; entity type

          */
       
      entity_id?:string;
       
         /**
          * @description A unique identifier for the customer this line item belongs to

          */
       
      customer_id?:string;
    }
    export interface Discount {  
         /**
          * @description The amount deducted. The format of this value depends on the [kind of currency](/docs/api?prod_cat_ver&#x3D;2#currencies).

          */
       
      amount:number;
       
         /**
          * @description Description for this deduction.

          */
       
      description?:string;
       
         /**
          * @description The unique id of the line item that this deduction is for. Is required when &#x60;discounts[entity_type]&#x60; is &#x60;item_level_coupon&#x60; or &#x60;document_level_coupon&#x60;.

          */
       
      line_item_id?:string;
       
         /**
          * @description The type of deduction and the amount to which it is applied. \* prorated_credits - The deduction is due to a legacy adjustment credit applied to the invoice. The &#x60;entity_id&#x60; is &#x60;null&#x60; in this case. The legacy credits feature is superseded by [adjustment_credit_notes](/docs/api/invoices?prod_cat_ver&#x3D;2#invoice_adjustment_credit_notes). \* item_level_coupon - The deduction is due to a coupon applied to line item. The coupon &#x60;id&#x60; is passed as &#x60;entity_id&#x60;. \* item_level_discount - The deduction is due to a [discount](/docs/api/discounts?prod_cat_ver&#x3D;2) applied to a line item of the invoice. The discount &#x60;id&#x60; is available as the &#x60;entity_id&#x60;. \* document_level_coupon - The deduction is due to a coupon applied to the invoice &#x60;sub_total&#x60;. The coupon id is passed as &#x60;entity_id&#x60;. \* promotional_credits - The deduction is due to a [promotional credit](/docs/api/promotional_credits?prod_cat_ver&#x3D;2) applied to the invoice. \* document_level_discount - The deduction is due to a [discount](/docs/api/discounts?prod_cat_ver&#x3D;2) applied to the invoice &#x60;sub_total&#x60;. The discount &#x60;id&#x60; is available as the &#x60;entity_id&#x60;.

          */
       
      entity_type:'item_level_coupon' | 'promotional_credits' | 'item_level_discount' | 'prorated_credits' | 'document_level_discount' | 'document_level_coupon';
       
         /**
          * @description The type of discount that is applied to the line item. Relevant only when &#x60;discounts[entity_type]&#x60; is one of &#x60;item_level_discount&#x60; , &#x60;item_level_coupon&#x60;, &#x60;document_level_discount&#x60;, or &#x60;document_level_coupon&#x60; \* percentage - when percentage is applied as discount \* fixed_amount - when amount is applied as discount

          */
       
      discount_type?:'fixed_amount' | 'percentage';
       
         /**
          * @description When the deduction is due to a &#x60;coupon&#x60; or a [discount](discounts), then this is the &#x60;id&#x60; of the coupon or discount.

          */
       
      entity_id?:string;
       
         /**
          * @description The [coupon code](/docs/api/coupon_codes#coupon_code_code), if applicable, used to provide the discount. The [coupon.id](/docs/api/coupons#coupon_id) is available in &#x60;entity_id&#x60;.

          */
       
      coupon_set_code?:string;
    }
    export interface LineItemDiscount {  
         /**
          * @description The unique id of the line item that this deduction is for.

          */
       
      line_item_id:string;
       
         /**
          * @description The type of deduction and the amount to which it is applied. \* prorated_credits - The deduction is due to a legacy adjustment credit applied to the invoice. The &#x60;entity_id&#x60; is &#x60;null&#x60; in this case. The legacy credits feature is superseded by [adjustment_credit_notes](/docs/api/invoices?prod_cat_ver&#x3D;2#invoice_adjustment_credit_notes). \* document_level_coupon - The deduction is due to a coupon applied to the invoice &#x60;sub_total&#x60;. The coupon &#x60;id&#x60; is available as &#x60;entity_id&#x60;. \* promotional_credits - The deduction is due to a [promotional credit](/docs/api/promotional_credits) applied to the invoice. The &#x60;entity_id&#x60; is &#x60;null&#x60; in this case. \* item_level_coupon - The deduction is due to a coupon applied to a line item of the invoice. The coupon &#x60;id&#x60; is available as &#x60;entity_id&#x60;. \* document_level_discount - The deduction is due to a [discount](/docs/api/discounts?prod_cat_ver&#x3D;2) applied to the invoice &#x60;sub_total&#x60;. The discount &#x60;id&#x60; is available as the &#x60;entity_id&#x60;. \* item_level_discount - The deduction is due to a [discount](/docs/api/discounts?prod_cat_ver&#x3D;2) applied to a line item of the invoice. The discount &#x60;id&#x60; is available as the &#x60;entity_id&#x60;.

          */
       
      discount_type:'item_level_coupon' | 'promotional_credits' | 'item_level_discount' | 'prorated_credits' | 'document_level_discount' | 'document_level_coupon';
       
      coupon_id?:string;
       
         /**
          * @description When the deduction is due to a &#x60;coupon&#x60; or a [discount](discounts), then this is the &#x60;id&#x60; of the coupon or discount.

          */
       
      entity_id?:string;
       
         /**
          * @description The amount deducted. The format of this value depends on the [kind of currency](/docs/api#currencies).

          */
       
      discount_amount:number;
    }
    export interface LineItemTier {  
         /**
          * @description Uniquely identifies a line_item

          */
       
      line_item_id?:string;
       
         /**
          * @description The lower limit of a range of units for the tier

          */
       
      starting_unit:number;
       
         /**
          * @description The upper limit of a range of units for the tier

          */
       
      ending_unit?:number;
       
         /**
          * @description The number of units purchased in a range.

          */
       
      quantity_used:number;
       
         /**
          * @description The price of the tier if the charge model is a &#x60;stairtstep&#x60; pricing , or the price of each unit in the tier if the charge model is &#x60;tiered&#x60;/&#x60;volume&#x60; pricing.

          */
       
      unit_amount:number;
       
         /**
          * @description The decimal representation of the the lowest value of quantity in this tier. This is zero for the lowest tier. For all other tiers, it is the same as &#x60;ending_unit_in_decimal&#x60; of the next lower tier. Returned only when the &#x60;line_items.pricing_model&#x60; is &#x60;tiered&#x60;, &#x60;volume&#x60; or &#x60;stairstep&#x60; and [multi-decimal pricing](https://apidocs.chargebee.com/docs/api#handling_currency_units ) is enabled.

          */
       
      starting_unit_in_decimal?:string;
       
         /**
          * @description The decimal representation of the highest value of quantity in this tier. This attribute is not applicable for the highest tier. For all other tiers, it must be equal to the &#x60;starting_unit_in_decimal&#x60; of the next higher tier. Returned only when the &#x60;line_items.pricing_model&#x60; is &#x60;tiered&#x60;, &#x60;volume&#x60; or stairstep and [multi-decimal pricing](https://apidocs.chargebee.com/docs/api#handling_currency_units ) is enabled.

          */
       
      ending_unit_in_decimal?:string;
       
         /**
          * @description The decimal representation of the quantity purchased from this tier. Returned when the &#x60;line_item&#x60; is quantity-based and [multi-decimal pricing](https://apidocs.chargebee.com/docs/api#handling_currency_units ) is enabled.

          */
       
      quantity_used_in_decimal?:string;
       
         /**
          * @description The decimal representation of the per-unit price for the tier when the &#x60;pricing_model&#x60; is &#x60;tiered&#x60; or &#x60;volume&#x60;. When the &#x60;pricing_model&#x60; is &#x60;stairstep&#x60;, it is the decimal representation of the total price for &#x60;line_item&#x60;. The value is in major units of the currency. Returned when the &#x60;line_item&#x60; is quantity-based and [multi-decimal pricing](https://apidocs.chargebee.com/docs/api#handling_currency_units ) is enabled.

          */
       
      unit_amount_in_decimal?:string;
    }
    export interface Tax {  
         /**
          * @description The name of the tax applied. E.g. GST.

          */
       
      name:string;
       
         /**
          * @description The tax amount.

          */
       
      amount:number;
       
         /**
          * @description Description of the tax item.

          */
       
      description?:string;
    }
    export interface LineItemTax {  
         /**
          * @description The unique reference id of the line item for which the tax is applicable

          */
       
      line_item_id?:string;
       
         /**
          * @description The name of the tax applied

          */
       
      tax_name:string;
       
         /**
          * @description The rate of tax used to calculate tax amount

          */
       
      tax_rate:number;
       
         /**
          * @description Indicates if tax is applied only on a portion of the line item amount.

          */
       
      is_partial_tax_applied?:boolean;
       
         /**
          * @description Indicates the non-compliance tax that should not be reported to the jurisdiction.

          */
       
      is_non_compliance_tax?:boolean;
       
         /**
          * @description Indicates the actual portion of the line item amount that is taxable.

          */
       
      taxable_amount:number;
       
         /**
          * @description The tax amount

          */
       
      tax_amount:number;
       
         /**
          * @description The type of tax jurisdiction \* federal - The tax jurisdiction is a federal \* state - The tax jurisdiction is a state \* county - The tax jurisdiction is a county \* country - The tax jurisdiction is a country \* city - The tax jurisdiction is a city \* special - Special tax jurisdiction. \* unincorporated - Combined tax of state and county. \* other - Jurisdictions other than the ones listed above.

          */
       
      tax_juris_type?:'special' | 'country' | 'unincorporated' | 'other' | 'city' | 'federal' | 'county' | 'state';
       
         /**
          * @description The name of the tax jurisdiction

          */
       
      tax_juris_name?:string;
       
         /**
          * @description The tax jurisdiction code

          */
       
      tax_juris_code?:string;
       
         /**
          * @description Total tax amount in the currency of the place of supply. This is applicable only for Invoice and Credit Notes API.

          */
       
      tax_amount_in_local_currency?:number;
       
         /**
          * @description The currency code (ISO 4217 format) of the place of supply in which VAT needs to be converted and displayed. This is applicable only for Invoice and Credit Notes API.

          */
       
      local_currency_code?:string;
    }
    export interface CreditNoteTransaction {  
         /**
          * @description Uniquely identifies the transaction.

          */
       
      txn_id:string;
       
         /**
          * @description The transaction amount applied to this invoice

          */
       
      applied_amount:number;
       
         /**
          * @description Time when the transaction amount applied to this invoice.

          */
       
      applied_at:number;
       
         /**
          * @description The status of this transaction. \* needs_attention - Connection with Gateway got terminated abruptly. So, status of this transaction needs to be resolved manually \* voided - The transaction got voided or authorization expired at gateway. \* timeout - Transaction failed because of Gateway not accepting the connection. \* success - The transaction is successful. \* failure - Transaction failed. Refer the &#x27;error_code&#x27; and &#x27;error_text&#x27; fields to know the reason for failure \* in_progress - Transaction is being processed by the gateway. This typically happens for [direct debit transactions](https://www.chargebee.com/docs/direct-debit-payments.html) or, in case of cards, refund transactions. Such transactions can take 2-7 days to complete, depending on the gateway and payment method.

          */
       
      txn_status?:'in_progress' | 'success' | 'failure' | 'voided' | 'timeout' | 'needs_attention';
       
         /**
          * @description Indicates when this transaction occurred.

          */
       
      txn_date?:number;
       
         /**
          * @description Total amount of the transaction

          */
       
      txn_amount?:number;
       
         /**
          * @description Reason code for the refund. Must be one from a list of reason codes set in the Chargebee app in **Settings \&gt; Configure Chargebee \&gt; Reason Codes \&gt; Credit Notes \&gt; Refund Credit Note**. Must be passed if set as mandatory in the app. The codes are case-sensitive

          */
       
      refund_reason_code?:string;
    }
    export interface LinkedTaxWithheldRefund {  
         /**
          * @description An auto-generated unique identifier for the tax withheld. The value starts with the prefix &#x60;tax_wh_&#x60;. For example, &#x60;tax_wh_16BdDXSlbu4uV1Ee6&#x60;.

          */
       
      id:string;
       
         /**
          * @description The amount withheld by the customer as tax from the invoice. The unit depends on the [type of currency](/docs/api#md_disabled).

          */
       
      amount?:number;
       
         /**
          * @description The description for this tax withheld.

          */
       
      description?:string;
       
         /**
          * @description Date or time associated with the tax withheld.

          */
       
      date?:number;
       
         /**
          * @description A unique external reference number for the tax withheld. Typically, this is the reference number used by the system you are integrating the API with. Depending on your integration, this could be the reference number issued by the taxation authority to identify the customer or the specific tax transaction.

          */
       
      reference_number?:string;
    }
    export interface AppliedCredit {  
         /**
          * @description Unique identifier of the invoice.

          */
       
      invoice_id:string;
       
         /**
          * @description Amount of this refund transaction.

          */
       
      allocated_amount:number;
       
         /**
          * @description Indicates when this refund occured.

          */
       
      allocated_at:number;
       
         /**
          * @description Closing date of the invoice. Typically this is the date on which invoice is generated

          */
       
      invoice_date?:number;
       
         /**
          * @description Current status of the invoice. \* not_paid - Indicates the payment is not made and all attempts to collect is failed. \* paid - Indicates a paid invoice. \* voided - Indicates a voided invoice. \* posted - Indicates the payment is not yet collected and will be in this state till the due date to indicate the due period \* pending -  
The [invoice](/docs/api/invoices?prod_cat_ver&#x3D;2#invoice_status) is yet to be closed (sent for payment collection). An invoice is generated with this &#x60;status&#x60; when it has line items that belong to items that are &#x60;metered&#x60; or when the &#x60;subscription.create_pending_invoices&#x60;attribute is set to &#x60;true&#x60;.  
The [invoice](/docs/api/invoices?prod_cat_ver&#x3D;1#invoice_status) is yet to be closed (sent for payment collection). All invoices are generated with this &#x60;status&#x60; when [Metered Billing](https://www.chargebee.com/docs/1.0/metered_billing.html) is enabled for the site. \* payment_due - Indicates the payment is not yet collected and is being retried as per retry settings.

          */
       
      invoice_status:'pending' | 'paid' | 'voided' | 'not_paid' | 'posted' | 'payment_due';
    }
    export interface ShippingAddress {  
         /**
          * @description The first name of the contact.

          */
       
      first_name?:string;
       
         /**
          * @description The last name of the contact.

          */
       
      last_name?:string;
       
         /**
          * @description The email address.

          */
       
      email?:string;
       
         /**
          * @description The company name.

          */
       
      company?:string;
       
         /**
          * @description The phone number.

          */
       
      phone?:string;
       
         /**
          * @description Address line 1

          */
       
      line1?:string;
       
         /**
          * @description Address line 2

          */
       
      line2?:string;
       
         /**
          * @description Address line 3

          */
       
      line3?:string;
       
         /**
          * @description The name of the city.

          */
       
      city?:string;
       
         /**
          * @description The [ISO 3166-2 state/province code](https://www.iso.org/obp/ui/#search) without the country prefix. Currently supported for USA, Canada and India. For instance, for Arizona (USA), set &#x60;state_code&#x60; as &#x60;AZ&#x60; (not &#x60;US-AZ&#x60;). For Tamil Nadu (India), set as &#x60;TN&#x60; (not &#x60;IN-TN&#x60;). For British Columbia (Canada), set as &#x60;BC&#x60; (not &#x60;CA-BC&#x60;).

          */
       
      state_code?:string;
       
         /**
          * @description The state/province name.

          */
       
      state?:string;
       
         /**
          * @description The billing address country of the customer. Must be one of [ISO 3166 alpha-2 country code](https://www.iso.org/iso-3166-country-codes.html).   

**Note** : If you enter an invalid country code, the system will return an error.  

**Brexit**


If you have enabled [EU VAT](https://www.chargebee.com/docs/eu-vat.html) in 2021 or later, or have [manually enable](https://www.chargebee.com/docs/brexit.html#what-needs-to-be-done-in-chargebee) the Brexit configuration, then &#x60;XI&#x60; (the code for **United Kingdom -- Northern Ireland**) is available as an option.

          */
       
      country?:string;
       
         /**
          * @description Zip or postal code. The number of characters is validated according to the rules [specified here](https://i18napis.appspot.com/address).

          */
       
      zip?:string;
       
         /**
          * @description The address verification status. \* not_validated - Address is not yet validated. \* valid - Address was validated successfully. \* partially_valid - The address is valid for taxability but has not been validated for shipping. \* invalid - Address is invalid.

          */
       
      validation_status?:ValidationStatus;
       
         /**
          * @description The index number of the subscription/one-time group to which the item price is added. Provide a unique number between &#x60;0&#x60; and &#x60;9&#x60; (inclusive) for each group that is to be created. To increase this limit, contact Chargebee Support

          */
       
      index:number;
    }
    export interface BillingAddress {  
         /**
          * @description The first name of the billing contact.

          */
       
      first_name?:string;
       
         /**
          * @description The last name of the billing contact.

          */
       
      last_name?:string;
       
         /**
          * @description The email address.

          */
       
      email?:string;
       
         /**
          * @description The company name.

          */
       
      company?:string;
       
         /**
          * @description The phone number.

          */
       
      phone?:string;
       
         /**
          * @description Address line 1

          */
       
      line1?:string;
       
         /**
          * @description Address line 2

          */
       
      line2?:string;
       
         /**
          * @description Address line 3

          */
       
      line3?:string;
       
         /**
          * @description The name of the city.

          */
       
      city?:string;
       
         /**
          * @description The [ISO 3166-2 state/province code](https://www.iso.org/obp/ui/#search) without the country prefix. Currently supported for USA, Canada and India. For instance, for Arizona (USA), set &#x60;state_code&#x60; as &#x60;AZ&#x60; (not &#x60;US-AZ&#x60;). For Tamil Nadu (India), set as &#x60;TN&#x60; (not &#x60;IN-TN&#x60;). For British Columbia (Canada), set as &#x60;BC&#x60; (not &#x60;CA-BC&#x60;).

          */
       
      state_code?:string;
       
         /**
          * @description State or Province

          */
       
      state?:string;
       
         /**
          * @description The billing address country of the customer. Must be one of [ISO 3166 alpha-2 country code](https://www.iso.org/iso-3166-country-codes.html).   

**Note** : If you enter an invalid country code, the system will return an error.  

**Brexit**


If you have enabled [EU VAT](https://www.chargebee.com/docs/eu-vat.html) in 2021 or later, or have [manually enable](https://www.chargebee.com/docs/brexit.html#what-needs-to-be-done-in-chargebee) the Brexit configuration, then &#x60;XI&#x60; (the code for **United Kingdom -- Northern Ireland**) is available as an option.

          */
       
      country?:string;
       
         /**
          * @description Zip or postal code. The number of characters is validated according to the rules [specified here](https://i18napis.appspot.com/address).

          */
       
      zip?:string;
       
         /**
          * @description The address verification status. \* valid - Address was validated successfully. \* partially_valid - The address is valid for taxability but has not been validated for shipping. \* invalid - Address is invalid. \* not_validated - Address is not yet validated.

          */
       
      validation_status?:ValidationStatus;
    }
  }
}