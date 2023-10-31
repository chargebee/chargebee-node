///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface Invoice {
    
    /**
      * @description The invoice number. Acts as a identifier for invoice and typically generated sequentially.

      */
    
    id:string;
    
    /**
      * @description Purchase Order Number for this invoice

      */
    
    po_number?:string;
    
    /**
      * @description The identifier of the customer this invoice belongs to.

      */
    
    customer_id:string;
    
    /**
      * @description The identifier of the subscription this invoice belongs to.   
**Note** : When consolidated invoicing is enabled, you have to refer to [line_item\&#x60;s](https://apidocs.chargebee.com/docs/api/invoices#invoice_line_items) &#x60;subscription_id&#x60; to identify the subscriptions associated with this invoice. However, it is important to avoid using this attribute if the invoice includes charges from multiple subscriptions, as it will be null in such cases.

      */
    
    subscription_id?:string;
    
    /**
      * @description Boolean indicating whether this invoice belongs to a subscription

      */
    
    recurring:boolean;
    
    /**
      * @description Current status of this invoice. \* not_paid - Indicates the payment is not made and all attempts to collect is failed. \* voided - Indicates a voided invoice. \* paid - Indicates a paid invoice. \* posted - Indicates the payment is not yet collected and will be in this state till the due date to indicate the due period \* pending -  
The [invoice](/docs/api/invoices?prod_cat_ver&#x3D;2#invoice_status) is yet to be closed (sent for payment collection). An invoice is generated with this &#x60;status&#x60; when it has line items that belong to items that are &#x60;metered&#x60; or when the &#x60;subscription.create_pending_invoices&#x60;attribute is set to &#x60;true&#x60;.  
The [invoice](/docs/api/invoices?prod_cat_ver&#x3D;1#invoice_status) is yet to be closed (sent for payment collection). All invoices are generated with this &#x60;status&#x60; when [Metered Billing](https://www.chargebee.com/docs/1.0/metered_billing.html) is enabled for the site. \* payment_due - Indicates the payment is not yet collected and is being retried as per retry settings.

      */
    
    status:'pending' | 'paid' | 'voided' | 'not_paid' | 'posted' | 'payment_due';
    
    /**
      * @description VAT/ Tax registration number of the customer. [Learn more](https://www.chargebee.com/docs/tax.html#capture-tax-registration-number)

      */
    
    vat_number?:string;
    
    /**
      * @description The price type of the invoice. \* tax_inclusive - All amounts in the document are inclusive of tax. \* tax_exclusive - All amounts in the document are exclusive of tax.

      */
    
    price_type:PriceType;
    
    /**
      * @description The document date displayed on the invoice PDF. By default, it has the same value as the effective date of the action that created the invoice (subscription creation, update, or invoice creation). This date can be backdated (set to a value in the past) while performing the actions. Backdating an invoice is done for reasons such as booking revenue for a previous date or when the subscription or non-recurring charge is effective as of a past date. However, if the invoice is created as &#x60;pending&#x60;, and if the site is configured to set invoice dates to the date of closing, then upon invoice closure, this date is changed to the invoice closing date.

      */
    
    date?:number;
    
    /**
      * @description Due date of the invoice

      */
    
    due_date?:number;
    
    /**
      * @description Number of days within which the invoice has to be paid

      */
    
    net_term_days?:number;
    
    /**
      * @description Exchange rate used for base currency conversion.

Note that when converting foreign currency invoices to local currency for VAT purposes, the exchange rates used differ from the base currency exchange rate provided in this field. This is due to regulations set by tax authorities, which require the use of official sources such as European Central Bank rates for local currency conversion. To calculate the exchange rate utilized for VAT in local currency, you may use the following formula.  
**Exchange rate** &#x3D; tax_amount_in_local_currency / tax_amount

      */
    
    exchange_rate?:number;
    
    /**
      * @description The currency code (ISO 4217 format) for the invoice

      */
    
    currency_code:string;
    
    /**
      * @description Invoiced amount displayed in cents; that is, a decimal point is not present between the whole number and the decimal part. For example, $499.99 is displayed as 49999, and so on.

      */
    
    total?:number;
    
    /**
      * @description Payments collected successfully for the invoice. This is the sum of [linked_payments[]](invoices#invoice_linked_payments)&#x60;.txn_amount&#x60; for all &#x60;linked_payments[]&#x60; that have &#x60;txn_status&#x60; as &#x60;success&#x60;.

      */
    
    amount_paid?:number;
    
    /**
      * @description Total adjustments made against this invoice.

      */
    
    amount_adjusted?:number;
    
    /**
      * @description Amount written off against this invoice.

      */
    
    write_off_amount?:number;
    
    /**
      * @description Total credits applied against this invoice.

      */
    
    credits_applied?:number;
    
    /**
      * @description The unpaid amount that is due on the invoice. This is calculated as: [total](invoices#invoice_total) - [amount_paid](invoices#invoice_amount_paid) - sum of [applied_credits](invoices#invoice_applied_credits)&#x60;.applied_amount&#x60; - sum of [adjustment_credit_notes](invoices#invoice_adjustment_credit_notes)&#x60;.cn_total&#x60; - sum of [linked_taxes_withheld](invoices#invoice_linked_taxes_withheld)&#x60;.amount&#x60;.

      */
    
    amount_due?:number;
    
    /**
      * @description Timestamp indicating the date \&amp; time this invoice got paid.

      */
    
    paid_at?:number;
    
    /**
      * @description Current dunning status of the invoice. \* exhausted - Maximum number of attempts have been made. \* stopped - Dunning has stopped for this invoice. \* success - Payment successfully collected during dunning process. \* in_progress - Dunning is still in progress.

      */
    
    dunning_status?:'in_progress' | 'stopped' | 'success' | 'exhausted';
    
    /**
      * @description Timestamp indicating when will the next attempt to collect payment for this invoice occur.

      */
    
    next_retry_at?:number;
    
    /**
      * @description Timestamp indicating the date \&amp; time this invoice got voided.

      */
    
    voided_at?:number;
    
    /**
      * @description The version number of this resource. For every change made to the resource, &#x60;resource_version&#x60; is updated with a new timestamp in milliseconds.

      */
    
    resource_version?:number;
    
    /**
      * @description Timestamp indicating when this invoice was last updated. This attribute will be present only if the resource has been updated after 2016-09-28.   
**Note** : This value does not change when the following attributes are changed: *next_retry_at, dunning_status, has_advance_charges*

      */
    
    updated_at?:number;
    
    /**
      * @description The sum of all the line item amounts minus the sum of all line item discounts. In other words, this is the sum of all [line_items[]](invoices#invoice_line_items)&#x60;.amount&#x60; - the sum of all [line_item_discounts[]](invoices#invoice_line_item_discounts)&#x60;.discount_amount&#x60;.

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
      * @description Total tax amount for this invoice

      */
    
    tax:number;
    
    /**
      * @description This parameter represents the exchange rate as a relative price of the base currency that appears as local currency in invoices and credit notes. The local currency exchange rate specifically refers to the exchange rate of a country&#x27;s currency when converting it to another currency. For example, if you want to convert US dollars to euros, the local currency exchange rate would be the rate at which you can convert US dollars to euros.

      */
    
    local_currency_exchange_rate?:number;
    
    /**
      * @description Boolean indicating the first invoice raised for the subscription. In the case of a non-recurring invoice, it indicates the first invoice raised for the customer.

      */
    
    first_invoice?:boolean;
    
    /**
      * @description The share of the invoice total due to new sales. When &#x60;first_invoice&#x60; is &#x60;true&#x60;, this attribute is the same as total. However, when the invoice is a [consolidated](https://www.chargebee.com/docs/2.0/consolidated-invoicing.html )one, then it is the sum of all &#x60;line_items.amount&#x60; belonging to a new.

      */
    
    new_sales_amount?:number;
    
    /**
      * @description Boolean indicating any advance charge is present in this invoice.

      */
    
    has_advance_charges?:boolean;
    
    /**
      * @description Boolean indicating this invoice line_items terms are finalized or not.

      */
    
    term_finalized:boolean;
    
    /**
      * @description Boolean indicating this invoice is gifted or not.

      */
    
    is_gifted:boolean;
    
    /**
      * @description The date when the invoice is finalized. This is the date in the invoice lifecycle when its &#x60;status&#x60; becomes any one of the following for the first time: &#x60;payment_due&#x60;, &#x60;posted&#x60;, or &#x60;paid&#x60;. For an invoice with &#x60;status&#x60; as &#x60;pending&#x60;, this happens when it gets closed.

      */
    
    generated_at?:number;
    
    /**
      * @description Expected payment date recorded for this invoice.

      */
    
    expected_payment_date?:number;
    
    /**
      * @description Payments that are yet to be collected for the invoice. This is the same value as [amount_due](invoices#invoice_amount_due) - the sum of [linked_payments[]](invoices#invoice_linked_payments)&#x60;.txn_amount&#x60; for all &#x60;linked_payments[]&#x60; that have &#x60;txn_status&#x60; as &#x60;in_progress&#x60;.

      */
    
    amount_to_collect?:number;
    
    /**
      * @description Indicates the rounded-off amount. For example, if your invoice amount is $99.99, and the amount is rounded off to $100.00, in this case, $100.00 is your invoice amount, $0.01 is the &#x60;round_off_amount&#x60;. If there is no &#x60;round-off amount&#x60;, it will display &#x60;0&#x60;.

      */
    
    round_off_amount?:number;
    
    /**
      * @description Payment owner of an invoice

      */
    
    payment_owner?:string;
    
    /**
      * @description Reason code for voiding the invoice. Select from a list of reason codes set in the Chargebee app in **Settings \&gt; Configure Chargebee \&gt; Reason Codes \&gt; Invoices \&gt; Void invoice**. Must be passed if set as mandatory in the app. The codes are case-sensitive

      */
    
    void_reason_code?:string;
    
    /**
      * @description Indicates that this resource has been deleted.

      */
    
    deleted:boolean;
    
    /**
      * @description Specifies the customer&#x27;s category for the Goods and Services Tax (GST). This field is returned only if you&#x27;ve configured GST for the India region.

      */
    
    tax_category?:string;
    
    /**
      * @description An overridden value for the first two characters of the [full VAT
number](https://en.wikipedia.org/wiki/VAT_identification_number). Only applicable specifically for customers with [billing_address](customers#customer_billing_address) &#x60;country&#x60; as &#x60;XI&#x60; (which is **United Kingdom - Northern Ireland** ).  

When you have enabled [EU VAT](https://www.chargebee.com/docs/eu-vat.html) in 2021 or have [manually
enabled](https://www.chargebee.com/docs/brexit.html#what-needs-to-be-done-in-chargebee) the Brexit configuration, you have the option of setting [billing_address](customers#customer_billing_address) &#x60;country&#x60; as &#x60;XI&#x60;. That&#x27;s the code for **United Kingdom - Northern
Ireland** . The first two characters of the VAT number in such a case is &#x60;XI&#x60; by default. However, if the VAT number was registered in UK, the value should be &#x60;GB&#x60;. Set &#x60;vat_number_prefix&#x60; to &#x60;GB&#x60; for such cases.

      */
    
    vat_number_prefix?:string;
    
    /**
      * @description The subscription channel this object originated from and is maintained in. \* play_store - The object data is synchronized with data from [in-app subscription(s)](https://apidocs.chargebee.com/docs/api/in_app_subscriptions) created in Google Play Store. Direct manipulation of this object via UI or API is disallowed.  

In-App Subscriptions is currently in early access. Contact [eap@chargebee.com](mailto:eap@chargebee.com) for more information.
\* web - The object was created (and is maintained) for the web channel directly in Chargebee via API or UI. \* app_store - The object data is synchronized with data from [in-app subscription(s)](https://apidocs.chargebee.com/docs/api/in_app_subscriptions) created in Apple App Store. Direct manipulation of this object via UI or API is disallowed.

      */
    
    channel?:Channel;
    
    /**
      * @description The unique ID of the [business entity](/docs/api/advanced-features?prod_cat_ver&#x3D;2#mbe) of this invoice. Depending on whether the invoice was created directly for a customer or for a subscription, this is the business entity of the [customer](/docs/api/invoices?prod_cat_ver&#x3D;2#invoice_customer_id) or the [subscription](/docs/api/invoices?prod_cat_ver&#x3D;2#invoice_subscription_id) respectively.

      */
    
    business_entity_id?:string;
    
    /**
      * @description The list of line items for this invoice

      */
    
    line_items?:Invoice.LineItem[];
    
    /**
      * @description The list of all deductions applied to the invoice.

      */
    
    discounts?:Invoice.Discount[];
    
    /**
      * @description The list of deduction(s) applied for each line item of this invoice

      */
    
    line_item_discounts?:Invoice.LineItemDiscount[];
    
    /**
      * @description The list of taxes applied for this invoice

      */
    
    taxes?:Invoice.Tax[];
    
    /**
      * @description The list of taxes applied on line items

      */
    
    line_item_taxes?:Invoice.LineItemTax[];
    
    /**
      * @description The list of tiers applicable for this line item

      */
    
    line_item_tiers?:Invoice.LineItemTier[];
    
    /**
      * @description The list of transactions for this invoice

      */
    
    linked_payments?:Invoice.InvoiceTransaction[];
    
    /**
      * @description The list of dunning_attempts for this invoice

      */
    
    dunning_attempts?:Invoice.DunningAttempt[];
    
    /**
      * @description Refundable Credits applied on this invoice.

      */
    
    applied_credits?:Invoice.AppliedCredit[];
    
    /**
      * @description Adjustments created for this invoice

      */
    
    adjustment_credit_notes?:Invoice.CreatedCreditNote[];
    
    /**
      * @description Credit notes issued for this invoice

      */
    
    issued_credit_notes?:Invoice.CreatedCreditNote[];
    
    /**
      * @description The list of orders for this invoice

      */
    
    linked_orders?:Invoice.LinkedOrder[];
    
    /**
      * @description The list of [notes](https://www.chargebee.com/docs/2.0/invoice_notes.html) that appear on the invoice PDF sent to the customer. Notes that come from a specific resource related to the invoice have &#x60;entity_type&#x60; and &#x60;entity_id&#x60; defined. There can be up to two notes in this array for which &#x60;entity_type&#x60; and &#x60;entity_id&#x60; are not defined:

* **Invoice-specific note:** It is the note provided via the &#x60;invoice_note&#x60; parameter for various endpoints in the API that also create invoices. For example, [creating a subscription](https://apidocs.chargebee.com/docs/api/subscriptions?prod_cat_ver&#x3D;2#create_subscription_for_items_invoice_notes), [creating an invoice](https://apidocs.chargebee.com/docs/api/invoices?prod_cat_ver&#x3D;2&amp;lang&#x3D;curl#create_invoice_for_items_and_one_time_charges_invoice_note), and [closing a pending invoice](https://apidocs.chargebee.com/docs/api/invoices?prod_cat_ver&#x3D;2&amp;lang&#x3D;curl#close_a_pending_invoice_invoice_note).
* **General note:** This note is added to all invoices of the Chargebee site. You can [add/edit](https://www.chargebee.com/docs/invoice_notes.html#adding-general-notes) this note in the Chargebee admin console.

      */
    
    notes?:Invoice.Note[];
    
    /**
      * @description Shipping address for the invoice.

      */
    
    shipping_address?:Invoice.ShippingAddress;
    
    statement_descriptor?:Invoice.StatementDescriptor;
    
    /**
      * @description Billing address for the invoice.

      */
    
    billing_address?:Invoice.BillingAddress;
    
    /**
      * @description An e-invoice or electronic invoice is a structured representation of an invoice that is interoperable between computerized invoicing systems. Depending on the country, e-invoicing can be necessary to meet financial/taxation authority regulations.

      */
    
    einvoice?:Invoice.Einvoice;
    
    /**
      * @description Details of &#x60;tax_withheld&#x60; against this invoice.

      */
    
    linked_taxes_withheld?:Invoice.LinkedTaxWithheld[];
  }
  export namespace Invoice {
    export class InvoiceResource {  
      /**
        * @description Creates an invoice for [charge-items](./items?prod_cat_ver&#x3D;2) and [one-time charges](https://www.chargebee.com/docs/2.0/charges.html). The item prices must belong to items of &#x60;type&#x60; &#x60;charge&#x60;.

        */
      
      create_for_charge_items_and_charges(input?:CreateForChargeItemsAndChargesInputParam):ChargebeeRequest<CreateForChargeItemsAndChargesResponse>;
       
      /**
        * @description This API is used to stop dunning for &quot;Payment Due&quot; invoices that have been enabled for Auto Collection. When dunning is stopped, the status of the invoice will be changed to &quot;Not Paid&quot;.

        */
      
      stop_dunning(invoice_id:string, input?:StopDunningInputParam):ChargebeeRequest<StopDunningResponse>;
       
      /**
        * @description Use this endpoint to import invoices that are created outside of Chargebee; for example, import invoices created with a commercial accounting software to Chargebee. This allows you to conveniently manage invoices in one place.

        */
      
      import_invoice(input:ImportInvoiceInputParam):ChargebeeRequest<ImportInvoiceResponse>;
       
      /**
        * @description The API applies [excess payments](https://apidocs.chargebee.com/docs/api/customers#customer_excess_payments) to an invoice. Once an excess payment is applied, the [invoice.amount_due](invoices#invoice_amount_due) is recalculated. The invoice &#x60;status&#x60; changes to either &#x60;paid&#x60; or &#x60;payment_due&#x60; depending on how much excess payment is applied to the invoice amount.

For example, if you have an excess payment of $25.00, and the invoice to which you want to apply this excess payment has a balance of $50. Once you apply this excess payment, the invoice status changes to &#x60;paid&#x60;, and [invoice.amount_due](invoices#invoice_amount_due) is adjusted to $25.00.

        */
      
      apply_payments(invoice_id:string, input?:ApplyPaymentsInputParam):ChargebeeRequest<ApplyPaymentsResponse>;
       
      /**
        * @description Updates the [&#x60;quantity&#x60;](/docs/api/invoices#invoice_line_items_quantity) for &#x60;metered&#x60; [&#x60;line_items&#x60;](/docs/api/invoices#invoice_line_items) of an invoice to reflect the latest [usage](https://apidocs.chargebee.com/docs/api/usages) data.

**Note:** This operation is done automatically while [closing](https://apidocs.chargebee.com/docs/api/invoices#close_a_pending_invoice) the invoice.

        */
      
      sync_usages(invoice_id:string):ChargebeeRequest<SyncUsagesResponse>;
       
      /**
        * @description This endpoint is used to delete line items from &quot;Pending&quot; invoice.

        */
      
      delete_line_items(invoice_id:string, input?:DeleteLineItemsInputParam):ChargebeeRequest<DeleteLineItemsResponse>;
       
      /**
        * @description This API applies [available credits](customers#customer_balances) to an invoice. After credits are applied, [invoice.amount_due](invoices#invoice_amount_due) is recalculated. The invoice status changes to either &#x60;paid&#x60; or &#x60;payment_due&#x60; depending on how much credit is applied to the invoice amount.

        */
      
      apply_credits(invoice_id:string, input?:ApplyCreditsInputParam):ChargebeeRequest<ApplyCreditsResponse>;
       
      /**
        * @description Lists all the Invoices.

        */
      
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
       
      /**
        * @description Retrieve the invoice for the specified invoice id.

        */
      
      retrieve(invoice_id:string):ChargebeeRequest<RetrieveResponse>;
       
      /**
        * @description Gets the invoice as PDF. The returned URL is secure and allows download. The URL will expire in 60 minutes.

#### Related Tutorial

* [Check out customer portal tutorial on how to download invoice as PDF.](//www.chargebee.com/tutorials/customer-portal-sample.html#downloading_invoices_as_pdf)

        */
      
      pdf(invoice_id:string, input?:PdfInputParam):ChargebeeRequest<PdfResponse>;
       
      /**
        * @description Download the e-invoice in both XML and PDF formats. The response consists of a &#x60;download&#x60; object for each format. The XML format follows the [structure as per Peppol BIS Billing v3.0](https://docs.peppol.eu/poacc/billing/3.0/syntax/ubl-invoice/tree/).  
**Note**

* You can only download e-invoices when their &#x60;status&#x60; is &#x60;success&#x60;.
* There are some cases in which the PDF is not available for download. In such cases, you can obtain it from the XML by decoding the value for [cbc:EmbeddedDocumentBinaryObject](https://docs.peppol.eu/poacc/billing/3.0/syntax/ubl-invoice/cac-AdditionalDocumentReference/cac-Attachment/cbc-EmbeddedDocumentBinaryObject/), which is the Base64-encoded version of the PDF.

        */
      
      download_einvoice(invoice_id:string):ChargebeeRequest<DownloadEinvoiceResponse>;
       
      /**
        * @description This API endpoint allows users to retrieve the payment reference numbers (PRNs) associated with an invoice. Only one PRN is allowed per payment type. You can use the &#x60;invoice_id&#x60; or the &#x60;payment_reference_number[number]&#x60; to retrieve the PRN.

        */
      
      list_payment_reference_numbers(input?:ListPaymentReferenceNumbersInputParam):ChargebeeRequest<ListPaymentReferenceNumbersResponse>;
       
      /**
        * @description Adds a one-time charge to a [pending](https://apidocs.chargebee.com/docs/api/invoices#invoice_status) invoice. A one-time charge is a charge that is added ad hoc to the invoice and does not represent a predefined [item price](https:/apidocs.chargebee.com/docs/api/item_prices). It appears in the invoice as a [line_item](https://apidocs.chargebee.com/docs/api/invoices?prod_cat_ver&#x3D;2&amp;lang&#x3D;curl#invoice_line_items) of [entity_type](https://apidocs.chargebee.com/docs/api/invoices?prod_cat_ver&#x3D;2&amp;lang&#x3D;curl#invoice_line_items_entity_type) &#x60;adhoc&#x60;.

        */
      
      add_charge(invoice_id:string, input:AddChargeInputParam):ChargebeeRequest<AddChargeResponse>;
       
      /**
        * @description This endpoint is used when [metered billing](https://www.chargebee.com/docs/2.0/metered_billing.html) is enabled and it adds a [charge-item price](./item_prices?prod_cat_ver&#x3D;2) to a &#x60;pending&#x60; invoice. To collect the accumulated charges by closing the invoice, call [Close a pending invoice](./invoices?prod_cat_ver&#x3D;2#close_a_pending_invoice).

        */
      
      add_charge_item(invoice_id:string, input?:AddChargeItemInputParam):ChargebeeRequest<AddChargeItemResponse>;
       
      /**
        * @description Invoices for a subscription are created with a &#x60;pending&#x60; &#x60;status&#x60; when the subscription has &#x60;create_pending_invoices&#x60; attribute set to &#x60;true&#x60;. This API call finalizes a &#x60;pending&#x60; invoice. Any &#x60;refundable_credits&#x60; and &#x60;excess_payments&#x60; for the customer are applied to the invoice, and any payment due is collected automatically if &#x60;auto_collection&#x60; is &#x60;on&#x60; for the customer.

#### Automation

This operation can be automated by using a [site setting](https://www.chargebee.com/docs/2.0/metered_billing.html#configuring-metered-billing). Moreover, the automation can be overridden at the [customer](/docs/api/customers?prod_cat_ver&#x3D;2#customer_auto_close_invoices) and [subscription](/docs/api/subscriptions?prod_cat_ver&#x3D;2#subscription_auto_close_invoices) level.

        */
      
      close(invoice_id:string, input?:CloseInputParam):ChargebeeRequest<CloseResponse>;
       
      /**
        * @description Storing card after successful 3DS completion is not supported in this API. Use [create using Payment Intent API](/docs/api/payment_sources#create_using_payment_intent) under Payment source to store the card after successful 3DS flow completion.

This API is used to collect payments for &#x60;payment_due&#x60; and &#x60;not_paid&#x60; invoices. If no payment methods are present for the customer or if the payment is unsuccessful, the corresponding error will be thrown.

Pass &#x60;authorization_transaction_id&#x60; to capture the already blocked funds to collect payments. Note that if the invoice due amount is greater than the authorized amount, the invoice status is returned as &#x60;payment_due&#x60;.

        */
      
      collect_payment(invoice_id:string, input?:CollectPaymentInputParam):ChargebeeRequest<CollectPaymentResponse>;
       
      /**
        * @description To record a [offline payment](https://www.chargebee.com/docs/offline_payments.html) for an invoice.

The invoice status will be marked as &#x27;paid&#x27; if its amount due becomes 0 because of this recorded payment.

**Note:** If the payment transaction amount is more than the invoice due amount, the remaining transaction amount will be added to the customer&#x27;s Excess Payments balance to be used against other invoices.

        */
      
      record_payment(invoice_id:string, input?:RecordPaymentInputParam):ChargebeeRequest<RecordPaymentResponse>;
       
      /**
        * @description Records [tax_withheld](/docs/api/tax_withheld) by the customer against the invoice specified. This operation is allowed only when all of the following conditions are true:

* Tax Amount Withheld is enabled.
* The &#x60;invoice&#x60; does not have a &#x60;linked_taxes_withheld&#x60; record associated with it already.
* &#x60;invoice.amount_due&#x60; is greater than zero.
* &#x60;invoice.status&#x60; is one of the following: &#x60;payment_due&#x60;, &#x60;not_paid&#x60;, or &#x60;posted&#x60;.

        */
      
      record_tax_withheld(invoice_id:string, input?:RecordTaxWithheldInputParam):ChargebeeRequest<RecordTaxWithheldResponse>;
       
      /**
        * @description Removes a [linked_taxes_withheld](/docs/api/invoices#invoice_linked_taxes_withheld) record from the &#x60;invoice&#x60; specified. This operation is allowed only when all of the following conditions are true:

* [invoice.status](/docs/api/invoices#invoice_status) is one of the following: &#x60;payment_due&#x60;, &#x60;not_paid&#x60;, or &#x60;posted&#x60;.
* There are no [adjustment_credit_notes](/docs/api/invoices#invoice_adjustment_credit_notes) associated with the invoice.
* There are no [issued_credit_notes](/docs/api/invoices#invoice_issued_credit_notes) associated with the invoice.

        */
      
      remove_tax_withheld(invoice_id:string, input?:RemoveTaxWithheldInputParam):ChargebeeRequest<RemoveTaxWithheldResponse>;
       
      /**
        * @description Refunds the invoice. The [refund](https://www.chargebee.com/docs/refunds.html) request is processed via the payment gateway originally used to charge the customer. You can choose to either make a full refund for the entire amount or make many partial refunds until you reach the total amount charged for the invoice. The API returns an error if an attempt is made to:

* Refund an offline invoice. For such invoices, use the [Record refund API](/docs/api/invoices#record_refund_for_an_invoice).
* Refund a fully refunded invoice.

If the refund transaction succeeds, a &#x60;credit_note&#x60; capturing this refund detail is created for the invoice.

        */
      
      refund(invoice_id:string, input?:RefundInputParam):ChargebeeRequest<RefundResponse>;
       
      /**
        * @description Refunds the invoice. The refund is provided against the following in order of precedence:

* Offline [linked_payments](/docs/api/invoices#invoice_linked_payments)
* Any [linked_taxes_withheld](/docs/api/invoices#invoice_linked_taxes_withheld)
* Online [linked_payments](/docs/api/invoices#invoice_linked_payments)

**Example**

Consider an invoice with the following payments and tax withheld.

* Offline payments: $30
* Online payments: $20
* Tax withheld: $5

When recording a refund worth $40, the refund amount is split as follows:

* Refund against offline payments: $30
* Refund against tax withheld: $5
* Refund against online payments: $5

For payments made via online transactions, the [refund](https://www.chargebee.com/docs/refunds.html) request is processed via the payment gateway originally used to charge the customer.  
**Tip**

If the order of precendence described above does not work for your use case, and you want to provide a refund against online &#x60;linked_payments&#x60; first, use the [Refund an invoice API](/docs/api/invoices#refund_an_invoice).

        */
      
      record_refund(invoice_id:string, input?:RecordRefundInputParam):ChargebeeRequest<RecordRefundResponse>;
       
      /**
        * @description This API [removes payments](https://www.chargebee.com/docs/2.0/invoice-operations.html#actions-for-paid-invoices_remove-payment) applied to an invoice. Once the applied payment is removed, the invoice status returns to &#x60;not_paid&#x60; or &#x60;payment_due&#x60;. The removed payment is then added to the customer&#x27;s excess payment balance.

        */
      
      remove_payment(invoice_id:string, input?:RemovePaymentInputParam):ChargebeeRequest<RemovePaymentResponse>;
       
      /**
        * @description This API removes a credit note attached to an invoice. When you remove a credit note from an invoice, the invoice status returns to &#x60;not_paid&#x60;.

**Note:** You cannot remove a credit note from an invoice if it has already been refunded.

        */
      
      remove_credit_note(invoice_id:string, input?:RemoveCreditNoteInputParam):ChargebeeRequest<RemoveCreditNoteResponse>;
       
      /**
        * @description Voids the specified invoice. Any payments must be [removed](/docs/api/invoices?prod_cat_ver&#x3D;2#remove_payment_from_an_invoice) from the invoice before voiding it.

* Any [promotional credits](/docs/api/promotional_credits?prod_cat_ver&#x3D;2) or [credit notes](/docs/api/credit_notes?prod_cat_ver&#x3D;2) applied to the invoice are removed.
* If an invoice for the current term of a subscription is voided and the subscription is changed later with &#x60;proration&#x60; enabled, no prorated credits are issued.
* Any [usages](/docs/api/usages?prod_cat_ver&#x3D;2) associated with item prices in the invoice are delinked from the invoice. This is done by clearing the &#x60;invoice_id&#x60; field of said usages. However, before this is done, a [usage PDF](/docs/api/usages?prod_cat_ver&#x3D;2#retrieve_usages_for_an_invoice_as_pdf) is generated and saved to the invoice as an [attachment](https://www.chargebee.com/docs/2.0/file-attachment.html).

        */
      
      void_invoice(invoice_id:string, input?:VoidInvoiceInputParam):ChargebeeRequest<VoidInvoiceResponse>;
       
      /**
        * @description This API writes off an Invoice.

        */
      
      write_off(invoice_id:string, input?:WriteOffInputParam):ChargebeeRequest<WriteOffResponse>;
       
      /**
        * @description Deletes the specified invoice. Any payments must be [removed](/docs/api/invoices?prod_cat_ver&#x3D;2#remove_payment_from_an_invoice) from the invoice before deleting it.  
**Caution**   

All associated [usages](/docs/api/usages?prod_cat_ver&#x3D;2) are permanently deleted on deleting an invoice. If you want to regenerate such an invoice, [add](/docs/api/usages?prod_cat_ver&#x3D;2#create_a_usage) or [bulk import](https://www.chargebee.com/docs/2.0/bulk-operations.html#overview_available-bulk-operations) usages before invoice regeneration.

* Any [promotional credits](/docs/api/promotional_credits?prod_cat_ver&#x3D;2) or [credit notes](/docs/api/credit_notes?prod_cat_ver&#x3D;2) applied to the invoice are removed.
* If an invoice for the current term of a subscription is deleted and the subscription is changed later with &#x60;proration&#x60; enabled, no prorated credits are issued.

        */
      
      delete(invoice_id:string, input?:DeleteInputParam):ChargebeeRequest<DeleteResponse>;
       
      /**
        * @description This API allows you to update the invoice Billing/Shipping address, VAT and PO number. During this operation if Billing Info (Billing Address, vat_number), Shipping info and PO number are not already present in the system the data will be added. If data is already present, the existing values will be replaced. If info is present in the system, but not passed as part of the request, the info will not be removed from the system.

**Note:** Incase, tax is already applied will now vary due to address change, you cannot update the address. You cannot update the VAT Number if the billing address is not present in the API request.This will update the invoice only, it won&#x27;t change the corresponding customer/subscription details.

        */
      
      update_details(invoice_id:string, input?:UpdateDetailsInputParam):ChargebeeRequest<UpdateDetailsResponse>;
       
      /**
        * @description Resend failed einvoice of an invoice to the customer using this API.

        */
      
      resend_einvoice(invoice_id:string):ChargebeeRequest<ResendEinvoiceResponse>;
       
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
      
      send_einvoice(invoice_id:string):ChargebeeRequest<SendEinvoiceResponse>;
    }
    export interface CreateForChargeItemsAndChargesResponse {  
       invoice:Invoice;
    }
    export interface CreateForChargeItemsAndChargesInputParam {
       
      /**
        * @description Unique ID of the customer this invoice should be created for. Either this or &#x60;subscription_id&#x60; must be provided.  
**Note**

The invoice is [linked](/docs/api?prod_cat_ver&#x3D;2#mbe-linked-be) to the same [business entity](/docs/api?prod_cat_ver&#x3D;2#mbe) as this customer.
.

        */
       
      customer_id?:string;
       
      /**
        * @description Unique ID of the subscription this invoice should be created for. Either this or &#x60;customer_id&#x60; must be provided.  
**Note**

The invoice is [linked](/docs/api?prod_cat_ver&#x3D;2#mbe-linked-be) to the same [business entity](/docs/api?prod_cat_ver&#x3D;2#mbe) as this subscription.
.

        */
       
      subscription_id?:string;
       
      /**
        * @description The currency code (ISO 4217 format) of the invoice amount.

        */
       
      currency_code?:string;
       
      /**
        * @description A note for this particular invoice. This, and [all other notes](/docs/api/invoices#invoice_notes) for the invoice are displayed on the PDF invoice sent to the customer.

        */
       
      invoice_note?:string;
       
      /**
        * @description Set as &#x60;true&#x60; to remove the **[general note](https://www.chargebee.com/docs/invoice_notes.html#adding-general-notes)** from this invoice.

        */
       
      remove_general_note?:boolean;
       
      /**
        * @description Purchase Order Number for this invoice.

        */
       
      po_number?:string;
       
      /**
        * @description List of Coupons to be added.

        */
       
      coupon_ids?:string[];
       
      /**
        * @description Authorization transaction to be captured.

        */
       
      authorization_transaction_id?:string;
       
      /**
        * @description Payment source to be used for this payment.

        */
       
      payment_source_id?:string;
       
      /**
        * @description The customer level auto collection will be override if specified. \* on - Whenever an invoice is created, an automatic attempt will be made to charge. \* off - Whenever an invoice is created as payment due.

        */
       
      auto_collection?:AutoCollection;
       
      /**
        * @description The document date displayed on the invoice PDF. By default, it is the date of creation of the invoice or, when Metered Billing is enabled, it can be the date of closing the invoice. Provide this value to backdate the invoice (set the invoice date to a value in the past). Backdating an invoice is done for reasons such as booking revenue for a previous date or when the non-recurring charge is effective as of a past date. &#x60;taxes&#x60; and &#x60;line_item_taxes&#x60; are computed based on the tax configuration as of this date. The date should not be more than one calendar month into the past. For example, if today is 13th January, then you cannot pass a value that is earlier than 13th December.

        */
       
      invoice_date?:number;
       
      /**
        * @description Token generated by Chargebee JS representing payment method details.

        */
       
      token_id?:string;
       
      /**
        * @description Indicates whether the primary payment source should be replaced with this payment source. In case of Create Subscription for Customer endpoint, the default value is True. Otherwise, the default value is False.

        */
       
      replace_primary_payment_source?:boolean;
       
      /**
        * @description Indicates whether the payment source should be retained for the customer.

        */
       
      retain_payment_source?:boolean;
       
      /**
        * @description Parameters for shipping_address

        */
       
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      /**
        * @description Creates an invoice for [charge-items](./items?prod_cat_ver&#x3D;2) and [one-time charges](https://www.chargebee.com/docs/2.0/charges.html). The item prices must belong to items of &#x60;type&#x60; &#x60;charge&#x60;.

        */
       
      statement_descriptor?:{additional_info?:string,descriptor?:string};
       
      /**
        * @description Parameters for card

        */
       
      card?:{additional_information?:object,billing_addr1?:string,billing_addr2?:string,billing_city?:string,billing_country?:string,billing_state?:string,billing_state_code?:string,billing_zip?:string,cvv?:string,expiry_month?:number,expiry_year?:number,first_name?:string,gateway_account_id?:string,last_name?:string,number?:string};
       
      /**
        * @description Parameters for bank_account

        */
       
      bank_account?:{account_holder_type?:AccountHolderType,account_number?:string,account_type?:AccountType,bank_code?:string,bank_name?:string,billing_address?:object,company?:string,echeck_type?:EcheckType,email?:string,first_name?:string,gateway_account_id?:string,iban?:string,issuing_country?:string,last_name?:string,phone?:string,routing_number?:string,swedish_identity_number?:string};
       
      /**
        * @description Parameters for payment_method

        */
       
      payment_method?:{additional_information?:object,gateway_account_id?:string,issuing_country?:string,reference_id?:string,tmp_token?:string,type?:Type};
       
      /**
        * @description Parameters for payment_intent

        */
       
      payment_intent?:{additional_information?:object,gateway_account_id?:string,gw_token?:string,id?:string,payment_method_type?:'giropay' | 'ideal' | 'sepa_instant_transfer' | 'google_pay' | 'netbanking_emandates' | 'dotpay' | 'boleto' | 'direct_debit' | 'faster_payments' | 'sofort' | 'upi' | 'venmo' | 'amazon_payments' | 'apple_pay' | 'bancontact' | 'paypal_express_checkout' | 'pay_to' | 'card',reference_id?:string};
       
      /**
        * @description Parameters for item_prices

        */
       
      item_prices?:{date_from?:number,date_to?:number,item_price_id?:string,quantity?:number,quantity_in_decimal?:string,unit_price?:number,unit_price_in_decimal?:string}[];
       
      /**
        * @description Parameters for item_tiers

        */
       
      item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,item_price_id?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
       
      /**
        * @description Parameters for charges

        */
       
      charges?:{amount?:number,amount_in_decimal?:string,avalara_sale_type?:AvalaraSaleType,avalara_service_type?:number,avalara_tax_code?:string,avalara_transaction_type?:number,date_from?:number,date_to?:number,description?:string,hsn_code?:string,tax_profile_id?:string,taxable?:boolean,taxjar_product_code?:string}[];
       
      /**
        * @description Parameters for notes_to_remove

        */
       
      notes_to_remove?:{entity_id?:string,entity_type?:EntityType}[];
       
      /**
        * @description Parameters for discounts

        */
       
      discounts?:{amount?:number,apply_on:ApplyOn,item_price_id?:string,percentage?:number}[];
    }
    export interface StopDunningResponse {  
       invoice:Invoice;
    }
    export interface StopDunningInputParam {
       
      /**
        * @description An internal [comment](./comments) to be added for this operation, to the invoice. This comment is displayed on the Chargebee UI. It is not displayed on any customer-facing [Hosted Page](./hosted_pages) or any document such as the [Invoice PDF](./invoices#retrieve_invoice_as_pdf).

        */
       
      comment?:string;
    }
    export interface ImportInvoiceResponse {  
       invoice:Invoice;
       
       credit_note?:CreditNote;
    }
    export interface ImportInvoiceInputParam {
       
      /**
        * @description Invoice Number.

        */
       
      id:string;
       
      /**
        * @description The currency code (ISO 4217 format) for the invoice.

        */
       
      currency_code?:string;
       
      /**
        * @description Identifier of the customer for which this invoice needs to be created.

        */
       
      customer_id?:string;
       
      /**
        * @description If recurring items are present in line items then subscription id is required.

        */
       
      subscription_id?:string;
       
      /**
        * @description Purchase Order Number for this invoice.

        */
       
      po_number?:string;
       
      /**
        * @description The price type of the invoice. \* tax_inclusive - All amounts in the document are inclusive of tax. \* tax_exclusive - All amounts in the document are exclusive of tax.

        */
       
      price_type?:PriceType;
       
      /**
        * @description The reason for exempting the invoice from tax. (Applicable only for exempted invoices.). \* export - The customer is from a non-taxable region or the billing address and shipping address are unavailable. \* customer_exempt - The customer is [exempted](customers#customer_taxability) from tax. \* id_exempt - The customer is from a different country than your business and they have a valid VAT number or, the customer is a business entity. (This reason is only applicable when [EU VAT](https://www.chargebee.com/docs/eu-vat.html) or [UK VAT](https://www.chargebee.com/docs/uk-vat.html) is enabled.)

        */
       
      tax_override_reason?:TaxOverrideReason;
       
      /**
        * @description Vat Number. Required if this invoice is VAT exempted.

        */
       
      vat_number?:string;
       
      /**
        * @description An overridden value for the first two characters of the [full VAT
number](https://en.wikipedia.org/wiki/VAT_identification_number). Only applicable specifically for customers with [billing_address](customers#customer_billing_address) &#x60;country&#x60; as &#x60;XI&#x60; (which is **United Kingdom - Northern Ireland** ).  

When you have enabled [EU VAT](https://www.chargebee.com/docs/eu-vat.html) in 2021 or have [manually
enabled](https://www.chargebee.com/docs/brexit.html#what-needs-to-be-done-in-chargebee) the Brexit configuration, you have the option of setting [billing_address](customers#customer_billing_address) &#x60;country&#x60; as &#x60;XI&#x60;. That&#x27;s the code for **United Kingdom - Northern
Ireland** . The first two characters of the VAT number in such a case is &#x60;XI&#x60; by default. However, if the VAT number was registered in UK, the value should be &#x60;GB&#x60;. Set &#x60;vat_number_prefix&#x60; to &#x60;GB&#x60; for such cases.

        */
       
      vat_number_prefix?:string;
       
      /**
        * @description Date when invoice raised.

        */
       
      date:number;
       
      /**
        * @description Invoice total amount.

        */
       
      total:number;
       
      /**
        * @description Round off amount.

        */
       
      round_off?:number;
       
      /**
        * @description Current status of this invoice. \* not_paid - Indicates the payment is not made and all attempts to collect is failed. \* voided - Indicates a voided invoice. \* paid - Indicates a paid invoice. \* posted - Indicates the payment is not yet collected and will be in this state till the due date to indicate the due period \* pending -  
The [invoice](/docs/api/invoices?prod_cat_ver&#x3D;2#invoice_status) is yet to be closed (sent for payment collection). An invoice is generated with this &#x60;status&#x60; when it has line items that belong to items that are &#x60;metered&#x60; or when the &#x60;subscription.create_pending_invoices&#x60;attribute is set to &#x60;true&#x60;.  
The [invoice](/docs/api/invoices?prod_cat_ver&#x3D;1#invoice_status) is yet to be closed (sent for payment collection). All invoices are generated with this &#x60;status&#x60; when [Metered Billing](https://www.chargebee.com/docs/1.0/metered_billing.html) is enabled for the site. \* payment_due - Indicates the payment is not yet collected and is being retried as per retry settings.

        */
       
      status?:'pending' | 'paid' | 'voided' | 'not_paid' | 'posted' | 'payment_due';
       
      /**
        * @description Timestamp indicating the date \&amp; time this invoice got voided.

        */
       
      voided_at?:number;
       
      /**
        * @description Reason code for voiding the invoice. Select from a list of reason codes set in the Chargebee app in **Settings \&gt; Configure Chargebee \&gt; Reason Codes \&gt; Invoices \&gt; Void invoice**. Must be passed if set as mandatory in the app. The codes are case-sensitive.

        */
       
      void_reason_code?:string;
       
      /**
        * @description If is_written_off is true then the invoice is written off.

        */
       
      is_written_off?:boolean;
       
      /**
        * @description Amount written off against this invoice. If this value is not present then the due amount of the invoice will be written off.

        */
       
      write_off_amount?:number;
       
      /**
        * @description The date on which the write_off invoice has occurred. This is a mandatory field if is_written_off is true. The same date reflects on the created credit note.

        */
       
      write_off_date?:number;
       
      /**
        * @description Invoice Due Date.

        */
       
      due_date?:number;
       
      /**
        * @description Invoice net term days.

        */
       
      net_term_days?:number;
       
      /**
        * @description Boolean indicating any advance charge is present in this invoice.

        */
       
      has_advance_charges?:boolean;
       
      /**
        * @description If the invoice falls within the subscription current term will be used for proration.

        */
       
      use_for_proration?:boolean;
       
      /**
        * @description Parameters for credit_note

        */
       
      credit_note?:{id?:string};
       
      /**
        * @description Parameters for billing_address

        */
       
      billing_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      /**
        * @description Parameters for shipping_address

        */
       
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      /**
        * @description Parameters for line_items

        */
       
      line_items?:{amount?:number,amount_in_decimal?:string,date_from?:number,date_to?:number,description:string,entity_id?:string,entity_type?:'addon_item_price' | 'plan_item_price' | 'charge_item_price' | 'adhoc',id?:string,item_level_discount1_amount?:number,item_level_discount1_entity_id?:string,item_level_discount2_amount?:number,item_level_discount2_entity_id?:string,quantity?:number,quantity_in_decimal?:string,subscription_id?:string,tax10_amount?:number,tax10_name?:string,tax1_amount?:number,tax1_name?:string,tax2_amount?:number,tax2_name?:string,tax3_amount?:number,tax3_name?:string,tax4_amount?:number,tax4_name?:string,tax5_amount?:number,tax5_name?:string,tax6_amount?:number,tax6_name?:string,tax7_amount?:number,tax7_name?:string,tax8_amount?:number,tax8_name?:string,tax9_amount?:number,tax9_name?:string,unit_amount?:number,unit_amount_in_decimal?:string}[];
       
      /**
        * @description Parameters for payment_reference_numbers

        */
       
      payment_reference_numbers?:{id?:string,number:string,type:'frn' | 'kid' | 'fik' | 'ocr'}[];
       
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
        * @description Parameters for payments

        */
       
      payments?:{amount:number,date?:number,payment_method:PaymentMethod,reference_number?:string}[];
       
      /**
        * @description Parameters for notes

        */
       
      notes?:{entity_id?:string,entity_type?:'addon_item_price' | 'coupon' | 'plan_item_price' | 'charge_item_price',note?:string}[];
    }
    export interface ApplyPaymentsResponse {  
       invoice:Invoice;
    }
    export interface ApplyPaymentsInputParam {
       
      /**
        * @description An internal [comment](./comments) to be added for this operation, to the invoice. This comment is displayed on the Chargebee UI. It is not displayed on any customer-facing [Hosted Page](./hosted_pages) or any document such as the [Invoice PDF](./invoices#retrieve_invoice_as_pdf).

        */
       
      comment?:string;
       
      /**
        * @description Parameters for transactions

        */
       
      transactions?:{id?:string}[];
    }
    export interface SyncUsagesResponse {  
       invoice:Invoice;
    }
    
    export interface DeleteLineItemsResponse {  
       invoice:Invoice;
    }
    export interface DeleteLineItemsInputParam {
       
      /**
        * @description The list of line items which have to be deleted.

        */
       
      line_items?:{id?:string}[];
    }
    export interface ApplyCreditsResponse {  
       invoice:Invoice;
    }
    export interface ApplyCreditsInputParam {
       
      /**
        * @description An internal [comment](./comments) to be added for this operation, to the invoice. This comment is displayed on the Chargebee UI. It is not displayed on any customer-facing [Hosted Page](./hosted_pages) or any document such as the [Invoice PDF](./invoices#retrieve_invoice_as_pdf).

        */
       
      comment?:string;
       
      /**
        * @description Parameters for credit_notes

        */
       
      credit_notes?:{id?:string}[];
    }
    export interface ListResponse {  
      /**
        * @description Lists all the Invoices.

        */
       
       list:{invoice:Invoice}[];
       
      /**
        * @description Lists all the Invoices.

        */
       
       next_offset?:string;
    }
    export interface ListInputParam {
      [key : string]: any;  
      /**
        * @description Lists all the Invoices.

        */
        
      limit?:number;
       
      /**
        * @description Lists all the Invoices.

        */
        
      offset?:string;
       
      /**
        * @description Lists all the Invoices.

        */
        
      include_deleted?:boolean;
       
      /**
        * @description Lists all the Invoices.

        */
        
      id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Lists all the Invoices.

        */
        
      subscription_id?:{in?:string,is?:string,is_not?:string,is_present?:'true' | 'false',not_in?:string,starts_with?:string};
       
      /**
        * @description Lists all the Invoices.

        */
        
      customer_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Lists all the Invoices.

        */
        
      recurring?:{is?:'true' | 'false'};
       
      /**
        * @description Lists all the Invoices.

        */
        
      status?:{in?:string,is?:'pending' | 'paid' | 'voided' | 'not_paid' | 'posted' | 'payment_due',is_not?:'pending' | 'paid' | 'voided' | 'not_paid' | 'posted' | 'payment_due',not_in?:string};
       
      /**
        * @description Lists all the Invoices.

        */
        
      price_type?:{in?:string,is?:'tax_exclusive' | 'tax_inclusive',is_not?:'tax_exclusive' | 'tax_inclusive',not_in?:string};
       
      /**
        * @description Lists all the Invoices.

        */
        
      date?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description Lists all the Invoices.

        */
        
      paid_at?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description Lists all the Invoices.

        */
        
      total?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
       
      /**
        * @description Lists all the Invoices.

        */
        
      amount_paid?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
       
      /**
        * @description Lists all the Invoices.

        */
        
      amount_adjusted?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
       
      /**
        * @description Lists all the Invoices.

        */
        
      credits_applied?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
       
      /**
        * @description Lists all the Invoices.

        */
        
      amount_due?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
       
      /**
        * @description Lists all the Invoices.

        */
        
      dunning_status?:{in?:string,is?:'in_progress' | 'stopped' | 'success' | 'exhausted',is_not?:'in_progress' | 'stopped' | 'success' | 'exhausted',is_present?:'true' | 'false',not_in?:string};
       
      /**
        * @description Lists all the Invoices.

        */
        
      payment_owner?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Lists all the Invoices.

        */
        
      updated_at?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description Lists all the Invoices.

        */
        
      channel?:{in?:string,is?:'app_store' | 'web' | 'play_store',is_not?:'app_store' | 'web' | 'play_store',not_in?:string};
       
      /**
        * @description Lists all the Invoices.

        */
        
      voided_at?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description Lists all the Invoices.

        */
        
      void_reason_code?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Lists all the Invoices.

        */
        
      sort_by?:{asc?:'date' | 'updated_at',desc?:'date' | 'updated_at'};
       
      /**
        * @description Lists all the Invoices.

        */
        
      einvoice?:{status?:{in?:string,is?:'in_progress' | 'scheduled' | 'success' | 'registered' | 'failed' | 'skipped',is_not?:'in_progress' | 'scheduled' | 'success' | 'registered' | 'failed' | 'skipped',not_in?:string}};
    }
    export interface RetrieveResponse {  
       invoice:Invoice;
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
    
    export interface ListPaymentReferenceNumbersResponse {  
      /**
        * @description This API endpoint allows users to retrieve the payment reference numbers (PRNs) associated with an invoice. Only one PRN is allowed per payment type. You can use the &#x60;invoice_id&#x60; or the &#x60;payment_reference_number[number]&#x60; to retrieve the PRN.

        */
       
       list:{payment_reference_number:PaymentReferenceNumber}[];
       
      /**
        * @description This API endpoint allows users to retrieve the payment reference numbers (PRNs) associated with an invoice. Only one PRN is allowed per payment type. You can use the &#x60;invoice_id&#x60; or the &#x60;payment_reference_number[number]&#x60; to retrieve the PRN.

        */
       
       next_offset?:string;
    }
    export interface ListPaymentReferenceNumbersInputParam {
      [key : string]: any;  
      /**
        * @description This API endpoint allows users to retrieve the payment reference numbers (PRNs) associated with an invoice. Only one PRN is allowed per payment type. You can use the &#x60;invoice_id&#x60; or the &#x60;payment_reference_number[number]&#x60; to retrieve the PRN.

        */
        
      limit?:number;
       
      /**
        * @description This API endpoint allows users to retrieve the payment reference numbers (PRNs) associated with an invoice. Only one PRN is allowed per payment type. You can use the &#x60;invoice_id&#x60; or the &#x60;payment_reference_number[number]&#x60; to retrieve the PRN.

        */
        
      offset?:string;
       
      /**
        * @description This API endpoint allows users to retrieve the payment reference numbers (PRNs) associated with an invoice. Only one PRN is allowed per payment type. You can use the &#x60;invoice_id&#x60; or the &#x60;payment_reference_number[number]&#x60; to retrieve the PRN.

        */
        
      id?:{in?:string,is?:string};
       
      /**
        * @description This API endpoint allows users to retrieve the payment reference numbers (PRNs) associated with an invoice. Only one PRN is allowed per payment type. You can use the &#x60;invoice_id&#x60; or the &#x60;payment_reference_number[number]&#x60; to retrieve the PRN.

        */
        
      payment_reference_number?:{number?:{in?:string,is?:string}};
    }
    export interface AddChargeResponse {  
       invoice:Invoice;
    }
    export interface AddChargeInputParam {
       
      /**
        * @description The amount to be charged. The unit depends on the [type of currency](/docs/api#md_disabled).

        */
       
      amount:number;
       
      /**
        * @description Detailed description about this lineitem.

        */
       
      description:string;
       
      /**
        * @description Indicates the type of sale carried out. This is applicable only if you use [Chargebee&#x27;s AvaTax for Communications](https://www.chargebee.com/docs/avatax-for-communication.html) integration. \* retail - Transaction is a sale to an end user \* wholesale - Transaction is a sale to another company that will resell your product or service to another consumer \* vendor_use - Transaction is for an item that is subject to vendor use tax \* consumed - Transaction is for an item that is consumed directly

        */
       
      avalara_sale_type?:AvalaraSaleType;
       
      /**
        * @description Indicates the type of product to be taxed. Values for this field can be taken from Avalara. This is applicable only if you use [Chargebee&#x27;s AvaTax for Communications](https://www.chargebee.com/docs/avatax-for-communication.html) integration.

        */
       
      avalara_transaction_type?:number;
       
      /**
        * @description Indicates the type of service for the product to be taxed. Values for this field can be taken from Avalara. This is applicable only if you use [Chargebee&#x27;s AvaTax for Communications](https://www.chargebee.com/docs/avatax-for-communication.html) integration.

        */
       
      avalara_service_type?:number;
       
      /**
        * @description This represents the Avalara tax code to which the one-time charge is mapped. Applicable only if you use Chargebee&#x27;s [AvaTax for Sales integration](https://www.chargebee.com/docs/avatax-for-sales.html).

        */
       
      avalara_tax_code?:string;
       
      /**
        * @description The [HSN code](https://cbic-gst.gov.in/gst-goods-services-rates.html) to which the one-time charge is mapped for calculating the customer&#x27;s tax in India. Applicable when both the conditions are true:

* **[India](https://www.chargebee.com/docs/indian-gst.html#configuring-indian-gst)** has been enabled as a **Tax Region**. (An error is returned when this condition is not true.)
* The [**AvaTax for Sales** integration](https://www.chargebee.com/docs/avalara.html) has been enabled in Chargebee.
.

        */
       
      hsn_code?:string;
       
      /**
        * @description This represents the TaxJar product code to which the one-time charge is mapped. Applicable only if you use Chargebee&#x27;s [TaxJar integration](https://www.chargebee.com/docs/taxjar.html).

        */
       
      taxjar_product_code?:string;
       
      /**
        * @description An internal [comment](./comments) to be added for this operation, to the invoice. This comment is displayed on the Chargebee UI. It is not displayed on any customer-facing [Hosted Page](./hosted_pages) or any document such as the [Invoice PDF](./invoices#retrieve_invoice_as_pdf).

        */
       
      comment?:string;
       
      /**
        * @description Identifier of the subscription for which this charge needs to be created. Applicable for consolidated invoice.

        */
       
      subscription_id?:string;
       
      /**
        * @description Parameters for line_item

        */
       
      line_item?:{date_from?:number,date_to?:number};
    }
    export interface AddChargeItemResponse {  
       invoice:Invoice;
    }
    export interface AddChargeItemInputParam {
       
      /**
        * @description An internal [comment](./comments) to be added for this operation, to the invoice. This comment is displayed on the Chargebee UI. It is not displayed on any customer-facing [Hosted Page](./hosted_pages) or any document such as the [Invoice PDF](./invoices#retrieve_invoice_as_pdf).

        */
       
      comment?:string;
       
      /**
        * @description Identifier of the subscription for which this addon needs to be created. Applicable for consolidated invoice.

        */
       
      subscription_id?:string;
       
      /**
        * @description Parameters for item_price

        */
       
      item_price?:{date_from?:number,date_to?:number,item_price_id:string,quantity?:number,quantity_in_decimal?:string,unit_price?:number,unit_price_in_decimal?:string};
       
      /**
        * @description Parameters for item_tiers

        */
       
      item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
    }
    export interface CloseResponse {  
       invoice:Invoice;
    }
    export interface CloseInputParam {
       
      /**
        * @description An internal [comment](./comments) to be added for this operation, to the invoice. This comment is displayed on the Chargebee UI. It is not displayed on any customer-facing [Hosted Page](./hosted_pages) or any document such as the [Invoice PDF](./invoices#retrieve_invoice_as_pdf).

        */
       
      comment?:string;
       
      /**
        * @description A note for this particular invoice. This, and [all other notes](/docs/api/invoices#invoice_notes) for the invoice are displayed on the PDF invoice sent to the customer.

        */
       
      invoice_note?:string;
       
      /**
        * @description Set as &#x60;true&#x60; to remove the **[general note](https://www.chargebee.com/docs/invoice_notes.html#adding-general-notes)** from this invoice.

        */
       
      remove_general_note?:boolean;
       
      /**
        * @description Set the [invoice date](https://apidocs.chargebee.com/docs/api/invoices#invoice_date). Must lie between the date when the invoice was generated and current date. Can only be passed when the site setting to allow overriding is enabled. If not passed, then the default value [set at the site level](https://www.chargebee.com/docs/metered_billing.html#overview) is used.

        */
       
      invoice_date?:number;
       
      /**
        * @description Parameters for notes_to_remove

        */
       
      notes_to_remove?:{entity_id?:string,entity_type?:EntityType}[];
    }
    export interface CollectPaymentResponse {  
       invoice:Invoice;
       
       transaction:Transaction;
    }
    export interface CollectPaymentInputParam {
       
      /**
        * @description Amount to be collected. If this parameter is not passed then the entire amount due will be collected.

        */
       
      amount?:number;
       
      /**
        * @description Authorization transaction to be captured.

        */
       
      authorization_transaction_id?:string;
       
      /**
        * @description Payment source to be used for this payment.

        */
       
      payment_source_id?:string;
       
      /**
        * @description An internal [comment](./comments) to be added for this operation, to the invoice. This comment is displayed on the Chargebee UI. It is not displayed on any customer-facing [Hosted Page](./hosted_pages) or any document such as the [Invoice PDF](./invoices#retrieve_invoice_as_pdf).

        */
       
      comment?:string;
       
      /**
        * @description The type of initiator to be used for the payment request triggered by this operation. \* merchant - Pass this value to indicate that the request is initiated by the merchant \* customer - Pass this value to indicate that the request is initiated by the customer

        */
       
      payment_initiator?:PaymentInitiator;
    }
    export interface RecordPaymentResponse {  
       invoice:Invoice;
       
       transaction:Transaction;
    }
    export interface RecordPaymentInputParam {
       
      /**
        * @description Remarks, if any, on the payment.

        */
       
      comment?:string;
       
      /**
        * @description Parameters for transaction

        */
       
      transaction?:{amount?:number,date?:number,error_code?:string,error_text?:string,id_at_gateway?:string,payment_method:PaymentMethod,reference_number?:string,status?:'success' | 'failure'};
    }
    export interface RecordTaxWithheldResponse {  
       invoice:Invoice;
    }
    export interface RecordTaxWithheldInputParam {
       
      /**
        * @description Parameters for tax_withheld

        */
       
      tax_withheld?:{amount:number,date?:number,description?:string,reference_number?:string};
    }
    export interface RemoveTaxWithheldResponse {  
       invoice:Invoice;
    }
    export interface RemoveTaxWithheldInputParam {
       
      /**
        * @description Parameters for tax_withheld

        */
       
      tax_withheld?:{id:string};
    }
    export interface RefundResponse {  
       invoice:Invoice;
       
       transaction:Transaction;
       
       credit_note?:CreditNote;
    }
    export interface RefundInputParam {
       
      /**
        * @description The amount to be refunded. If not specified, the entire refundable amount for this invoice is refunded. The refundable amount is the total amount paid via online &#x60;transaction&#x60;s, and not already refunded. **Note:** Any [linked_taxes_withheld](/docs/api/invoices#invoice_linked_taxes_withheld) associated with the invoice cannot be refunded via this operation.

        */
       
      refund_amount?:number;
       
      /**
        * @description Comment, if any, on the refund.

        */
       
      comment?:string;
       
      /**
        * @description The Customer Notes to be filled in the Credit Notes created to capture this refund detail.

        */
       
      customer_notes?:string;
       
      /**
        * @description Parameters for credit_note

        */
       
      credit_note?:{create_reason_code?:string,reason_code?:'order_cancellation' | 'service_unsatisfactory' | 'other' | 'product_unsatisfactory' | 'order_change' | 'waiver'};
    }
    export interface RecordRefundResponse {  
       invoice:Invoice;
       
       transaction?:Transaction;
       
       credit_note?:CreditNote;
    }
    export interface RecordRefundInputParam {
       
      /**
        * @description Remarks, if any, on the refund.

        */
       
      comment?:string;
       
      /**
        * @description The Customer Notes to be filled in the Credit Notes created to capture this refund detail.

        */
       
      customer_notes?:string;
       
      /**
        * @description Parameters for transaction

        */
       
      transaction?:{amount?:number,date:number,payment_method:PaymentMethod,reference_number?:string};
       
      /**
        * @description Parameters for credit_note

        */
       
      credit_note?:{create_reason_code?:string,reason_code?:'order_cancellation' | 'service_unsatisfactory' | 'other' | 'product_unsatisfactory' | 'chargeback' | 'order_change' | 'waiver'};
    }
    export interface RemovePaymentResponse {  
       invoice:Invoice;
       
       transaction:Transaction;
    }
    export interface RemovePaymentInputParam {
       
      /**
        * @description Parameters for transaction

        */
       
      transaction?:{id:string};
    }
    export interface RemoveCreditNoteResponse {  
       invoice:Invoice;
       
       credit_note:CreditNote;
    }
    export interface RemoveCreditNoteInputParam {
       
      /**
        * @description Parameters for credit_note

        */
       
      credit_note?:{id:string};
    }
    export interface VoidInvoiceResponse {  
       invoice:Invoice;
       
       credit_note?:CreditNote;
    }
    export interface VoidInvoiceInputParam {
       
      /**
        * @description An internal [comment](./comments) to be added for this operation, to the invoice. This comment is displayed on the Chargebee UI. It is not displayed on any customer-facing [Hosted Page](./hosted_pages) or any document such as the [Invoice PDF](./invoices#retrieve_invoice_as_pdf).

        */
       
      comment?:string;
       
      /**
        * @description Reason code for voiding the invoice. Select from a list of reason codes set in the Chargebee app in **Settings \&gt; Configure Chargebee \&gt; Reason Codes \&gt; Invoices \&gt; Void invoice**. Must be passed if set as mandatory in the app. The codes are case-sensitive.

        */
       
      void_reason_code?:string;
    }
    export interface WriteOffResponse {  
       invoice:Invoice;
       
       credit_note:CreditNote;
    }
    export interface WriteOffInputParam {
       
      /**
        * @description An internal [comment](./comments) to be added for this operation, to the invoice. This comment is displayed on the Chargebee UI. It is not displayed on any customer-facing [Hosted Page](./hosted_pages) or any document such as the [Invoice PDF](./invoices#retrieve_invoice_as_pdf).

        */
       
      comment?:string;
    }
    export interface DeleteResponse {  
       invoice:Invoice;
    }
    export interface DeleteInputParam {
       
      /**
        * @description Reason for deleting the invoice. This comment will be added to the subscription entity if the invoice belongs to a subscription. It is added to the customer entity if the invoice is associated only with a customer.

        */
       
      comment?:string;
       
      /**
        * @description Indicates whether to put prorated credits back to the subscription or ignore while deleting the invoice.

        */
       
      claim_credits?:boolean;
    }
    export interface UpdateDetailsResponse {  
       invoice:Invoice;
    }
    export interface UpdateDetailsInputParam {
       
      /**
        * @description VAT/ Tax registration number of the customer. [Learn more](https://www.chargebee.com/docs/tax.html#capture-tax-registration-number).

        */
       
      vat_number?:string;
       
      /**
        * @description An overridden value for the first two characters of the [full VAT
number](https://en.wikipedia.org/wiki/VAT_identification_number). Only applicable specifically for customers with [billing_address](customers#customer_billing_address) &#x60;country&#x60; as &#x60;XI&#x60; (which is **United Kingdom - Northern Ireland** ).  

When you have enabled [EU VAT](https://www.chargebee.com/docs/eu-vat.html) in 2021 or have [manually
enabled](https://www.chargebee.com/docs/brexit.html#what-needs-to-be-done-in-chargebee) the Brexit configuration, you have the option of setting [billing_address](customers#customer_billing_address) &#x60;country&#x60; as &#x60;XI&#x60;. That&#x27;s the code for **United Kingdom - Northern
Ireland** . The first two characters of the VAT number in such a case is &#x60;XI&#x60; by default. However, if the VAT number was registered in UK, the value should be &#x60;GB&#x60;. Set &#x60;vat_number_prefix&#x60; to &#x60;GB&#x60; for such cases.

        */
       
      vat_number_prefix?:string;
       
      /**
        * @description Purchase Order Number for this invoice.

        */
       
      po_number?:string;
       
      /**
        * @description An internal [comment](./comments) to be added for this operation, to the invoice. This comment is displayed on the Chargebee UI. It is not displayed on any customer-facing [Hosted Page](./hosted_pages) or any document such as the [Invoice PDF](./invoices#retrieve_invoice_as_pdf).

        */
       
      comment?:string;
       
      /**
        * @description Parameters for billing_address

        */
       
      billing_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      /**
        * @description Parameters for shipping_address

        */
       
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      /**
        * @description This API allows you to update the invoice Billing/Shipping address, VAT and PO number. During this operation if Billing Info (Billing Address, vat_number), Shipping info and PO number are not already present in the system the data will be added. If data is already present, the existing values will be replaced. If info is present in the system, but not passed as part of the request, the info will not be removed from the system.

**Note:** Incase, tax is already applied will now vary due to address change, you cannot update the address. You cannot update the VAT Number if the billing address is not present in the API request.This will update the invoice only, it won&#x27;t change the corresponding customer/subscription details.

        */
       
      statement_descriptor?:{additional_info?:string,descriptor?:string};
    }
    export interface ResendEinvoiceResponse {  
       invoice:Invoice;
    }
    
    export interface SendEinvoiceResponse {  
       invoice:Invoice;
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
          * @description [Quantity of the recurring item](https://apidocs.chargebee.com/docs/api/invoices?prod_cat_ver&#x3D;2#invoice_line_items_quantity) represented by this line item.

For metered line items, this value is updated from [usages](https://apidocs.chargebee.com/docs/api/usages) when:

* the invoice is generated as pending

* the invoice is [closed](https://apidocs.chargebee.com/docs/api/invoices#close_a_pending_invoice)

* the sync usages API is called


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
          * @description The unique identifier of the invoice line item to which this credit note line item is related. This is the same as [invoice.line_items.id](https://apidocs.chargebee.com/docs/api/invoices#invoice_line_items_id ).

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
    export interface InvoiceTransaction {  
         /**
          * @description Uniquely identifies the transaction.

          */
       
      txn_id:string;
       
         /**
          * @description The transaction amount applied to this invoice

          */
       
      applied_amount:number;
       
         /**
          * @description Timestamp at which the transaction is applied.

          */
       
      applied_at:number;
       
         /**
          * @description The status of this transaction. \* timeout - Transaction failed because of Gateway not accepting the connection. \* voided - The transaction got voided or authorization expired at gateway. \* needs_attention - Connection with Gateway got terminated abruptly. So, status of this transaction needs to be resolved manually \* failure - Transaction failed. Refer the &#x27;error_code&#x27; and &#x27;error_text&#x27; fields to know the reason for failure \* in_progress - Transaction is being processed by the gateway. This typically happens for [direct debit transactions](https://www.chargebee.com/docs/direct-debit-payments.html) or, in case of cards, refund transactions. Such transactions can take 2-7 days to complete, depending on the gateway and payment method. \* success - The transaction is successful.

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
    }
    export interface DunningAttempt {  
         /**
          * @description Dunning attempt number.

          */
       
      attempt:number;
       
         /**
          * @description Transaction associated with attempt.

          */
       
      transaction_id?:string;
       
         /**
          * @description Types of dunning \* offline - Dunning type is offline. \* direct_debit - Dunning type is direct debit. \* auto_collect - Dunning type is auto collection.

          */
       
      dunning_type:'offline' | 'auto_collect' | 'direct_debit';
       
         /**
          * @description Timestamp at which the attempt was made.

          */
       
      created_at?:number;
       
         /**
          * @description The status of this transaction. \* success - The transaction is successful. \* voided - The transaction got voided or authorization expired at gateway. \* needs_attention - Connection with Gateway got terminated abruptly. So, status of this transaction needs to be resolved manually \* failure - Transaction failed. Refer the &#x27;error_code&#x27; and &#x27;error_text&#x27; fields to know the reason for failure \* in_progress - Transaction is being processed by the gateway. This typically happens for [direct debit transactions](https://www.chargebee.com/docs/direct-debit-payments.html) or, in case of cards, refund transactions. Such transactions can take 2-7 days to complete, depending on the gateway and payment method. \* timeout - Transaction failed because of Gateway not accepting the connection.

          */
       
      txn_status?:'in_progress' | 'success' | 'failure' | 'voided' | 'timeout' | 'needs_attention';
       
         /**
          * @description Total amount of the transaction

          */
       
      txn_amount?:number;
    }
    export interface AppliedCredit {  
         /**
          * @description Credit applied on the credit note ID.

          */
       
      cn_id:string;
       
         /**
          * @description Total credit amount applied to this invoice.

          */
       
      applied_amount:number;
       
         /**
          * @description Timestamp when the credit amount was applied to this invoice.

          */
       
      applied_at:number;
       
         /**
          * @description Credit note reason code. Deprecated; use the cn_create_reason_code parameter instead \* subscription_change - This reason will be set automatically for Credit Notes created during Change Subscription operation when [proration](https://www.chargebee.com/docs/proration.html) is enabled \* write_off - This reason will be set automatically for the Credit Notes created during invoice [Write Off](https://www.chargebee.com/docs/invoice-operations.html#write-off) operation. \* other - Can be set when none of the above reason codes are applicable \* order_cancellation - Order Cancellation \* order_change - Order Change \* product_unsatisfactory - Product Unsatisfactory \* waiver - Waiver \* chargeback - Can be set when you are recording your customer Chargebacks \* subscription_cancellation - This reason will be set automatically for Credit Notes created during cancel subscription operation \* fraudulent - FRAUDULENT \* subscription_pause - This reason will be automatically set to credit notes created during pause/resume subscription operation. \* service_unsatisfactory - Service Unsatisfactory

          */
       
      cn_reason_code?:'other' | 'product_unsatisfactory' | 'subscription_pause' | 'order_cancellation' | 'service_unsatisfactory' | 'subscription_cancellation' | 'chargeback' | 'order_change' | 'write_off' | 'waiver' | 'subscription_change' | 'fraudulent';
       
         /**
          * @description Credit note reason code

          */
       
      cn_create_reason_code?:string;
       
         /**
          * @description Indicates the date at which this credit note is created

          */
       
      cn_date?:number;
       
         /**
          * @description Credit note status. \* refunded - When the entire credits (Credit Note amount) have been used (i.e either allocated to invoices or refunded). \* voided - When the Credit Note has been cancelled. \* adjusted - When the Credit Note has been adjusted against an invoice. \* refund_due - When the credits are yet to be used, or have been partially used.

          */
       
      cn_status:'refund_due' | 'adjusted' | 'refunded' | 'voided';
    }
    export interface CreatedCreditNote {  
         /**
          * @description Credit-note id

          */
       
      cn_id:string;
       
         /**
          * @description Credit note reason code. Deprecated; use the cn_create_reason_code parameter instead \* subscription_cancellation - This reason will be set automatically for Credit Notes created during cancel subscription operation \* waiver - Waiver \* subscription_change - This reason will be set automatically for Credit Notes created during Change Subscription operation when [proration](https://www.chargebee.com/docs/proration.html) is enabled \* write_off - This reason will be set automatically for the Credit Notes created during invoice [Write Off](https://www.chargebee.com/docs/invoice-operations.html#write-off) operation. \* service_unsatisfactory - Service Unsatisfactory \* order_cancellation - Order Cancellation \* fraudulent - FRAUDULENT \* product_unsatisfactory - Product Unsatisfactory \* other - Can be set when none of the above reason codes are applicable \* chargeback - Can be set when you are recording your customer Chargebacks \* order_change - Order Change \* subscription_pause - This reason will be automatically set to credit notes created during pause/resume subscription operation.

          */
       
      cn_reason_code?:'other' | 'product_unsatisfactory' | 'subscription_pause' | 'order_cancellation' | 'service_unsatisfactory' | 'subscription_cancellation' | 'chargeback' | 'order_change' | 'write_off' | 'waiver' | 'subscription_change' | 'fraudulent';
       
         /**
          * @description Credit note reason code

          */
       
      cn_create_reason_code?:string;
       
         /**
          * @description Indicates the date at which this credit note is created

          */
       
      cn_date?:number;
       
         /**
          * @description Total amount of the credit note.

          */
       
      cn_total?:number;
       
         /**
          * @description Credit note status. \* voided - When the Credit Note has been cancelled. \* refund_due - When the credits are yet to be used, or have been partially used. \* refunded - When the entire credits (Credit Note amount) have been used (i.e either allocated to invoices or refunded). \* adjusted - When the Credit Note has been adjusted against an invoice.

          */
       
      cn_status:'refund_due' | 'adjusted' | 'refunded' | 'voided';
    }
    export interface CreatedCreditNote {  
         /**
          * @description Credit-note id

          */
       
      cn_id:string;
       
         /**
          * @description Credit note reason code. Deprecated; use the cn_create_reason_code parameter instead \* fraudulent - FRAUDULENT \* product_unsatisfactory - Product Unsatisfactory \* write_off - This reason will be set automatically for the Credit Notes created during invoice [Write Off](https://www.chargebee.com/docs/invoice-operations.html#write-off) operation. \* subscription_cancellation - This reason will be set automatically for Credit Notes created during cancel subscription operation \* service_unsatisfactory - Service Unsatisfactory \* chargeback - Can be set when you are recording your customer Chargebacks \* subscription_pause - This reason will be automatically set to credit notes created during pause/resume subscription operation. \* waiver - Waiver \* order_change - Order Change \* subscription_change - This reason will be set automatically for Credit Notes created during Change Subscription operation when [proration](https://www.chargebee.com/docs/proration.html) is enabled \* order_cancellation - Order Cancellation \* other - Can be set when none of the above reason codes are applicable

          */
       
      cn_reason_code?:'other' | 'product_unsatisfactory' | 'subscription_pause' | 'order_cancellation' | 'service_unsatisfactory' | 'subscription_cancellation' | 'chargeback' | 'order_change' | 'write_off' | 'waiver' | 'subscription_change' | 'fraudulent';
       
         /**
          * @description Credit note reason code

          */
       
      cn_create_reason_code?:string;
       
         /**
          * @description Indicates the date at which this credit note is created

          */
       
      cn_date?:number;
       
         /**
          * @description Total amount of the credit note.

          */
       
      cn_total?:number;
       
         /**
          * @description Credit note status. \* refund_due - When the credits are yet to be used, or have been partially used. \* adjusted - When the Credit Note has been adjusted against an invoice. \* refunded - When the entire credits (Credit Note amount) have been used (i.e either allocated to invoices or refunded). \* voided - When the Credit Note has been cancelled.

          */
       
      cn_status:'refund_due' | 'adjusted' | 'refunded' | 'voided';
    }
    export interface LinkedOrder {  
         /**
          * @description Uniquely identifies the order. It is the api identifier for the order

          */
       
      id:string;
       
         /**
          * @description The order&#x27;s serial number

          */
       
      document_number?:string;
       
         /**
          * @description The status of this order. \* awaiting_shipment - The order has been picked up by an integration system, and synced to a shipping management platform \* new - Order has been created. Applicable only if you are using Chargebee&#x27;s legacy order management system. \* shipped - The order has moved from order management system to a shipping system. \* on_hold - The order is paused from being processed. \* queued - Order is yet to be processed by any system, these are scheduled orders created by Chargebee \* returned - The order has been returned after delivery. \* complete - Order has been processed successfully. Applicable only if you are using Chargebee&#x27;s legacy order management system \* cancelled - Order has been cancelled. Applicable only if you are using Chargebee&#x27;s legacy order management system \* delivered - The order has been delivered to the customer. \* partially_delivered - The order has been partially delivered to the customer. \* voided - Order has been voided. Applicable only if you are using Chargebee&#x27;s legacy order management system \* processing - Order is being processed. Applicable only if you are using Chargebee&#x27;s legacy order management system

          */
       
      status?:'new' | 'partially_delivered' | 'queued' | 'delivered' | 'on_hold' | 'shipped' | 'processing' | 'cancelled' | 'voided' | 'complete' | 'awaiting_shipment' | 'returned';
       
         /**
          * @description Order type \* manual - The order has been created by the the user using Chargebee&#x27;s legacy order management system. \* system_generated - The order has been created by Chargebee automatically based on the preferences set by the user.

          */
       
      order_type?:'system_generated' | 'manual';
       
         /**
          * @description Reference id can be used to map the orders in the shipping/order management application to the orders in ChargeBee. The reference_id generally is same as the order id in the third party application.

          */
       
      reference_id?:string;
       
         /**
          * @description The fulfillment status of an order as reflected in the shipping/order management application. Typical statuses include Shipped,Awaiting Shipment,Not fulfilled etc;

          */
       
      fulfillment_status?:string;
       
         /**
          * @description Unique id to identify a group of orders.

          */
       
      batch_id?:string;
       
         /**
          * @description The time at which the order was created

          */
       
      created_at:number;
    }
    export interface Note {  
         /**
          * @description Type of entity to which the note belongs. \* subscription - Entity that represents a subscription of customer. \* plan_item_price - Indicates that this line item is based on plan Item Price \* customer - Entity that represents a customer. \* plan - Entity that represents a plan. \* coupon - Entity that represents a coupon. \* tax - The note is configured as part of the [tax configuration](https://www.chargebee.com/docs/tax.html) in Chargebee Billing. \* addon_item_price - Indicates that this line item is based on addon Item Price \* charge_item_price - Indicates that this line item is based on charge Item Price \* addon - Entity that represents an addon.

          */
       
      entity_type:'addon_item_price' | 'coupon' | 'plan_item_price' | 'charge_item_price' | 'tax' | 'subscription' | 'customer';
       
         /**
          * @description Actual note.

          */
       
      note:string;
       
         /**
          * @description Unique identifier of the entity.

          */
       
      entity_id?:string;
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
          * @description Zip or postal code. The number of characters is validated according to the rules [specified here](https://chromium-i18n.appspot.com/ssl-address).

          */
       
      zip?:string;
       
         /**
          * @description The address verification status. \* not_validated - Address is not yet validated. \* valid - Address was validated successfully. \* partially_valid - The address is valid for taxability but has not been validated for shipping. \* invalid - Address is invalid.

          */
       
      validation_status?:ValidationStatus;
       
         /**
          * @description The index number of the subscription to which the item price is added. Provide a unique number between &#x60;0&#x60; and &#x60;4&#x60; (inclusive) for each subscription that is to be created.

          */
       
      index:number;
    }
    export interface StatementDescriptor {  
      id:string;
       
      descriptor?:string;
       
      additional_info?:string;
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
          * @description Zip or postal code. The number of characters is validated according to the rules [specified here](https://chromium-i18n.appspot.com/ssl-address).

          */
       
      zip?:string;
       
         /**
          * @description The address verification status. \* valid - Address was validated successfully. \* partially_valid - The address is valid for taxability but has not been validated for shipping. \* invalid - Address is invalid. \* not_validated - Address is not yet validated.

          */
       
      validation_status?:ValidationStatus;
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
    export interface LinkedTaxWithheld {  
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
  }
}