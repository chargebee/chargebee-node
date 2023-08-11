///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface Quote {
    
    /**
      * @description The quote number. Acts as a identifier for quote and typically generated sequentially.

      */
    
    id:string;
    
    /**
      * @description The quote name will be used as the pdf name of the quote.

      */
    
    name?:string;
    
    /**
      * @description Purchase Order Number

      */
    
    po_number?:string;
    
    /**
      * @description The identifier of the customer this quote belongs to.

      */
    
    customer_id:string;
    
    /**
      * @description The identifier of the subscription this quote belongs to.

      */
    
    subscription_id?:string;
    
    /**
      * @description The identifier of the invoice generated while converting this quote.

      */
    
    invoice_id?:string;
    
    /**
      * @description Current status of this quote. \* open - Open \* closed - Closed \* declined - Declined. \* invoiced - Invoiced \* accepted - Accepted.

      */
    
    status:'declined' | 'invoiced' | 'accepted' | 'closed' | 'open';
    
    /**
      * @description Operation Type \* onetime_invoice - onetime_invoice \* change_subscription - change_subscription \* create_subscription_for_customer - create_subscription_for_customer

      */
    
    operation_type:'onetime_invoice' | 'change_subscription' | 'create_subscription_for_customer';
    
    /**
      * @description VAT/ Tax registration number of the customer. [Learn more](https://www.chargebee.com/docs/tax.html#capture-tax-registration-number)

      */
    
    vat_number?:string;
    
    /**
      * @description The price type of the quote. \* tax_inclusive - All amounts in the document are inclusive of tax. \* tax_exclusive - All amounts in the document are exclusive of tax.

      */
    
    price_type:PriceType;
    
    /**
      * @description Quote will be valid till this date. After this date quote will be marked as closed.

      */
    
    valid_till:number;
    
    /**
      * @description Creation date of the quote. Typically this is the date on which quote is generated.

      */
    
    date:number;
    
    /**
      * @description Total contract value. Applicable when multi billing cycle quote is enabled.

      */
    
    total_payable?:number;
    
    /**
      * @description Charge on acceptance. Applicable when multi billing cycle quote is enabled.

      */
    
    charge_on_acceptance?:number;
    
    /**
      * @description Subtotal (in cents) of the first quote line group.

      */
    
    sub_total:number;
    
    /**
      * @description Total (in cents) of the first quote line group.

      */
    
    total?:number;
    
    /**
      * @description Credits applied (in cents) for the first quote line group.

      */
    
    credits_applied?:number;
    
    /**
      * @description Existing outstanding payments (in cents) if any, applied to the first quote line group.

      */
    
    amount_paid?:number;
    
    /**
      * @description Amount due (in cents) for the first quote line group.

      */
    
    amount_due?:number;
    
    /**
      * @description Version of the quote.

      */
    
    version?:number;
    
    /**
      * @description Version number of this resource. The &#x60;resource_version&#x60; is updated with a new timestamp in milliseconds for every change made to the resource. This attribute will be present only if the resource has been updated after 2016-09-28.

      */
    
    resource_version?:number;
    
    /**
      * @description Timestamp indicating when this quote was last updated.

      */
    
    updated_at?:number;
    
    /**
      * @description An overridden value for the first two characters of the [full VAT
number](https://en.wikipedia.org/wiki/VAT_identification_number). Only applicable specifically for customers with [billing_address](customers#customer_billing_address) &#x60;country&#x60; as &#x60;XI&#x60; (which is **United Kingdom - Northern Ireland** ).  

When you have enabled [EU VAT](https://www.chargebee.com/docs/eu-vat.html) in 2021 or have [manually
enabled](https://www.chargebee.com/docs/brexit.html#what-needs-to-be-done-in-chargebee) the Brexit configuration, you have the option of setting [billing_address](customers#customer_billing_address) &#x60;country&#x60; as &#x60;XI&#x60;. That&#x27;s the code for **United Kingdom - Northern
Ireland** . The first two characters of the VAT number in such a case is &#x60;XI&#x60; by default. However, if the VAT number was registered in UK, the value should be &#x60;GB&#x60;. Set &#x60;vat_number_prefix&#x60; to &#x60;GB&#x60; for such cases.

      */
    
    vat_number_prefix?:string;
    
    /**
      * @description Specifies the customer&#x27;s category for the Goods and Services Tax (GST). This field is returned only if you&#x27;ve configured GST for the India region.

      */
    
    tax_category?:string;
    
    /**
      * @description The currency code (ISO 4217 format) of the quote.

      */
    
    currency_code:string;
    
    /**
      * @description List of notes associated with this quotes.

      */
    
    notes?:any[];
    
    /**
      * @description Specifies the contract term&#x27;s start date.

      */
    
    contract_term_start?:number;
    
    /**
      * @description Specifies the contract term&#x27;s end date. It indicates when the action set in &#x60;action_at_term_end&#x60; gets triggered.

      */
    
    contract_term_end?:number;
    
    /**
      * @description Specifies the charge to be applied for terminating the contract term.

      */
    
    contract_term_termination_fee?:number;
    
    /**
      * @description The unique ID of the [business entity](/docs/api/advanced-features?prod_cat_ver&#x3D;2#mbe) of this quote.

      */
    
    business_entity_id:string;
    
    /**
      * @description The list of line items for this quote.

      */
    
    line_items?:Quote.LineItem[];
    
    /**
      * @description The list of all deductions applied to the quote.

      */
    
    discounts?:Quote.Discount[];
    
    /**
      * @description The list of deductions applied for each line item of this quote.

      */
    
    line_item_discounts?:Quote.LineItemDiscount[];
    
    /**
      * @description The list of taxes applicable for this quote.

      */
    
    taxes?:Quote.Tax[];
    
    /**
      * @description The list of taxes applied on the line items of this quote.

      */
    
    line_item_taxes?:Quote.LineItemTax[];
    
    /**
      * @description The list of tiers applicable for the various line items in this quote.

      */
    
    line_item_tiers?:Quote.LineItemTier[];
    
    /**
      * @description Shipping address for the quote.

      */
    
    shipping_address?:Quote.ShippingAddress;
    
    /**
      * @description Billing address for the quote.

      */
    
    billing_address?:Quote.BillingAddress;
  }
  export namespace Quote {
    export class QuoteResource {  
      /**
        * @description Create a quote for new subscription line items of a customer.

        */
      
      create_sub_items_for_customer_quote(customer_id:string, input?:CreateSubItemsForCustomerQuoteInputParam):ChargebeeRequest<CreateSubItemsForCustomerQuoteResponse>;
       
      /**
        * @description Retrieves the quotes identified by the &#x27;number&#x27; specified in the url.

        */
      
      retrieve(quote_id:string):ChargebeeRequest<RetrieveResponse>;
       
      /**
        * @description Changes the quote produced for creating a new subscription items

        */
      
      edit_create_sub_customer_quote_for_items(quote_id:string, input?:EditCreateSubCustomerQuoteForItemsInputParam):ChargebeeRequest<EditCreateSubCustomerQuoteForItemsResponse>;
       
      /**
        * @description Updates the status of the quote. Status can be updated to Accepted, Declined, and Closed.

        */
      
      update_status(quote_id:string, input:UpdateStatusInputParam):ChargebeeRequest<UpdateStatusResponse>;
       
      /**
        * @description Create a quote for updating subscription line items.

        */
      
      update_subscription_quote_for_items(input?:UpdateSubscriptionQuoteForItemsInputParam):ChargebeeRequest<UpdateSubscriptionQuoteForItemsResponse>;
       
      /**
        * @description This API retrieves all the quote line groups and lineitems for a quote.

        */
      
      quote_line_groups_for_quote(quote_id:string, input?:QuoteLineGroupsForQuoteInputParam):ChargebeeRequest<QuoteLineGroupsForQuoteResponse>;
       
      /**
        * @description Can be used to extend the expiry date of a quote.

        */
      
      extend_expiry_date(quote_id:string, input:ExtendExpiryDateInputParam):ChargebeeRequest<ExtendExpiryDateResponse>;
       
      /**
        * @description Changes the quote produced for adding one-time charges and charge items.

        */
      
      edit_for_charge_items_and_charges(quote_id:string, input?:EditForChargeItemsAndChargesInputParam):ChargebeeRequest<EditForChargeItemsAndChargesResponse>;
       
      /**
        * @description Changes the quote produced for updating the subscription items.

        */
      
      edit_update_subscription_quote_for_items(quote_id:string, input?:EditUpdateSubscriptionQuoteForItemsInputParam):ChargebeeRequest<EditUpdateSubscriptionQuoteForItemsResponse>;
       
      /**
        * @description List all quotes.

        */
      
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
       
      /**
        * @description Retrieves the quote as a PDF. The returned URL is secure, allows download and expires in 60 minutes.

        */
      
      pdf(quote_id:string, input?:PdfInputParam):ChargebeeRequest<PdfResponse>;
       
      /**
        * @description This API is to convert a quote to an invoice.

        */
      
      convert(quote_id:string, input?:ConvertInputParam):ChargebeeRequest<ConvertResponse>;
       
      /**
        * @description Creates a quote using charge-items and one-time charges.

        */
      
      create_for_charge_items_and_charges(input:CreateForChargeItemsAndChargesInputParam):ChargebeeRequest<CreateForChargeItemsAndChargesResponse>;
       
      /**
        * @description Delete a quote using this API.

        */
      
      delete(quote_id:string, input?:DeleteInputParam):ChargebeeRequest<DeleteResponse>;
    }
    export interface CreateSubItemsForCustomerQuoteResponse {  
      /**
        * @description Create a quote for new subscription line items of a customer.

        */
       
       quote:Quote;
       
      /**
        * @description Create a quote for new subscription line items of a customer.

        */
       
       quoted_subscription?:QuotedSubscription;
    }
    export interface CreateSubItemsForCustomerQuoteInputParam {
       
      /**
        * @description The quote name will be used as the pdf name of the quote.

        */
       
      name?:string;
       
      /**
        * @description Notes specific to this quote that you want customers to see on the quote PDF.

        */
       
      notes?:string;
       
      /**
        * @description Quotes will be vaild till this date. After this quote will be marked as closed.

        */
       
      expires_at?:number;
       
      /**
        * @description The number of billing cycles the subscription runs before canceling. If not provided, then the billing cycles [set for the plan-item price](https://apidocs.chargebee.com/docs/api/item_prices?prod_cat_ver&#x3D;2#item_price_billing_cycles) is used.

        */
       
      billing_cycles?:number;
       
      /**
        * @description Item ids of [mandatorily attached addons](./attached_items?prod_cat_ver&#x3D;2) that are to be removed from the subscription.

        */
       
      mandatory_items_to_remove?:string[];
       
      /**
        * @description The number of subscription billing cycles (including the first one) to [invoice in advance](https://www.chargebee.com/docs/advance-invoices.html).

        */
       
      terms_to_charge?:number;
       
      /**
        * @description Override the [billing alignment mode](https://www.chargebee.com/docs/calendar-billing.html#alignment-of-billing-date) for Calendar Billing. Only applicable when using Calendar Billing. The default value is that which has been configured for the site. \* delayed - Subscription period will be aligned with the configured billing date at the next renewal. \* immediate - Subscription period will be aligned with the configured billing date immediately, with credits or charges raised accordingly..

        */
       
      billing_alignment_mode?:BillingAlignmentMode;
       
      /**
        * @description Identifier of the coupon as a List. Coupon Codes can also be passed.

        */
       
      coupon_ids?:string[];
       
      /**
        * @description Parameters for subscription

        */
       
      subscription?:{contract_term_billing_cycle_on_renewal?:number,id?:string,po_number?:string,start_date?:number,trial_end?:number};
       
      /**
        * @description Parameters for shipping_address

        */
       
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      /**
        * @description Parameters for contract_term

        */
       
      contract_term?:{action_at_term_end?:'cancel' | 'renew' | 'evergreen',cancellation_cutoff_period?:number};
       
      /**
        * @description Parameters for subscription_items

        */
       
      subscription_items?:{billing_cycles?:number,charge_on_event?:ChargeOnEvent,charge_on_option?:ChargeOnOption,charge_once?:boolean,item_price_id:string,quantity?:number,quantity_in_decimal?:string,service_period_days?:number,trial_end?:number,unit_price?:number,unit_price_in_decimal?:string}[];
       
      /**
        * @description Parameters for discounts

        */
       
      discounts?:{amount?:number,apply_on:ApplyOn,duration_type:DurationType,included_in_mrr?:boolean,item_price_id?:string,percentage?:number,period?:number,period_unit?:PeriodUnit}[];
       
      /**
        * @description Parameters for item_tiers

        */
       
      item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,item_price_id?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
    }
    export interface RetrieveResponse {  
      /**
        * @description Retrieves the quotes identified by the &#x27;number&#x27; specified in the url.

        */
       
       quote:Quote;
       
      /**
        * @description Retrieves the quotes identified by the &#x27;number&#x27; specified in the url.

        */
       
       quoted_subscription?:QuotedSubscription;
       
      /**
        * @description Retrieves the quotes identified by the &#x27;number&#x27; specified in the url.

        */
       
       quoted_charge?:QuotedCharge;
    }
    
    export interface EditCreateSubCustomerQuoteForItemsResponse {  
      /**
        * @description Changes the quote produced for creating a new subscription items

        */
       
       quote:Quote;
       
      /**
        * @description Changes the quote produced for creating a new subscription items

        */
       
       quoted_subscription?:QuotedSubscription;
    }
    export interface EditCreateSubCustomerQuoteForItemsInputParam {
       
      /**
        * @description Notes specific to this quote that you want customers to see on the quote PDF.

        */
       
      notes?:string;
       
      /**
        * @description Quotes will be vaild till this date. After this quote will be marked as closed.

        */
       
      expires_at?:number;
       
      /**
        * @description The number of billing cycles the subscription runs before canceling. If not provided, then the billing cycles [set for the plan-item price](https://apidocs.chargebee.com/docs/api/item_prices?prod_cat_ver&#x3D;2#item_price_billing_cycles) is used.

        */
       
      billing_cycles?:number;
       
      /**
        * @description Item ids of [mandatorily attached addons](./attached_items?prod_cat_ver&#x3D;2) that are to be removed from the subscription.

        */
       
      mandatory_items_to_remove?:string[];
       
      /**
        * @description The number of subscription billing cycles (including the first one) to [invoice in advance](https://www.chargebee.com/docs/advance-invoices.html).

        */
       
      terms_to_charge?:number;
       
      /**
        * @description Override the [billing alignment mode](https://www.chargebee.com/docs/calendar-billing.html#alignment-of-billing-date) for Calendar Billing. Only applicable when using Calendar Billing. The default value is that which has been configured for the site. \* delayed - Subscription period will be aligned with the configured billing date at the next renewal. \* immediate - Subscription period will be aligned with the configured billing date immediately, with credits or charges raised accordingly..

        */
       
      billing_alignment_mode?:BillingAlignmentMode;
       
      /**
        * @description Identifier of the coupon as a List. Coupon Codes can also be passed.

        */
       
      coupon_ids?:string[];
       
      /**
        * @description Parameters for subscription

        */
       
      subscription?:{contract_term_billing_cycle_on_renewal?:number,id?:string,start_date?:number,trial_end?:number};
       
      /**
        * @description Parameters for shipping_address

        */
       
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      /**
        * @description Parameters for contract_term

        */
       
      contract_term?:{action_at_term_end?:'cancel' | 'renew' | 'evergreen',cancellation_cutoff_period?:number};
       
      /**
        * @description Parameters for subscription_items

        */
       
      subscription_items?:{billing_cycles?:number,charge_on_event?:ChargeOnEvent,charge_on_option?:ChargeOnOption,charge_once?:boolean,item_price_id:string,quantity?:number,quantity_in_decimal?:string,service_period_days?:number,trial_end?:number,unit_price?:number,unit_price_in_decimal?:string}[];
       
      /**
        * @description Parameters for discounts

        */
       
      discounts?:{amount?:number,apply_on:ApplyOn,duration_type:DurationType,included_in_mrr?:boolean,item_price_id?:string,percentage?:number,period?:number,period_unit?:PeriodUnit}[];
       
      /**
        * @description Parameters for item_tiers

        */
       
      item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,item_price_id?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
    }
    export interface UpdateStatusResponse {  
      /**
        * @description Updates the status of the quote. Status can be updated to Accepted, Declined, and Closed.

        */
       
       quote:Quote;
       
      /**
        * @description Updates the status of the quote. Status can be updated to Accepted, Declined, and Closed.

        */
       
       quoted_subscription?:QuotedSubscription;
       
      /**
        * @description Updates the status of the quote. Status can be updated to Accepted, Declined, and Closed.

        */
       
       quoted_charge?:QuotedCharge;
    }
    export interface UpdateStatusInputParam {
       
      /**
        * @description Status to update for the quote. \* accepted - Accepted. \* closed - Closed \* declined - Declined.

        */
       
      status:'declined' | 'accepted' | 'closed';
       
      /**
        * @description An internal [comment](./comments) to be added for this operation, to the quote. This comment is displayed on the Chargebee UI. It is not displayed on any customer-facing [Hosted Page](./hosted_pages) or any document such as the [Quote PDF](./quotes#retrieve_quote_as_pdf).

        */
       
      comment?:string;
    }
    export interface UpdateSubscriptionQuoteForItemsResponse {  
      /**
        * @description Create a quote for updating subscription line items.

        */
       
       quote:Quote;
       
      /**
        * @description Create a quote for updating subscription line items.

        */
       
       quoted_subscription?:QuotedSubscription;
    }
    export interface UpdateSubscriptionQuoteForItemsInputParam {
       
      /**
        * @description The quote name will be used as the pdf name of the quote.

        */
       
      name?:string;
       
      /**
        * @description Notes specific to this quote that you want customers to see on the quote PDF.

        */
       
      notes?:string;
       
      /**
        * @description Quotes will be vaild till this date. After this quote will be marked as closed.

        */
       
      expires_at?:number;
       
      /**
        * @description Item ids of [mandatorily attached addons](./attached_items?prod_cat_ver&#x3D;2) that are to be removed from the subscription.

        */
       
      mandatory_items_to_remove?:string[];
       
      /**
        * @description If &#x60;true&#x60; then the existing &#x60;subscription_items&#x60; list for the subscription is replaced by the one provided. If &#x60;false&#x60; then the provided &#x60;subscription_items&#x60; list gets added to the existing list.

        */
       
      replace_items_list?:boolean;
       
      /**
        * @description Billing cycles set for plan-item price is used by default.

        */
       
      billing_cycles?:number;
       
      /**
        * @description The number of subscription billing cycles to [invoice in advance](https://www.chargebee.com/docs/advance-invoices.html). If a new term is started for the subscription due to this API call, then &#x60;terms_to_charge&#x60; is inclusive of this new term. See description for the &#x60;force_term_reset&#x60; parameter to learn more about when a subscription term is reset.

        */
       
      terms_to_charge?:number;
       
      /**
        * @description If the subscription &#x60;status&#x60; is &#x60;cancelled&#x60; and it is being reactivated via this operation, this is the date/time at which the subscription should be reactivated.  
**Note:** It is recommended not to pass this parameter along with &#x60;changed_scheduled_at&#x60;. &#x60;reactivate_from&#x60; can be backdated (set to a value in the past). Use backdating when the subscription has been reactivated already but its billing has been delayed. Backdating is allowed only when the following prerequisites are met:

* Backdating must be enabled for subscription reactivation operations.
* The current day of the month does not exceed the limit set in Chargebee for backdating subscription change. This limit is the day of the month by which the accounting for the previous month must be closed.
* The date is on or after the last date/time any of the product catalog items of the subscription were changed.
* The date is not more than duration X into the past where X is the billing period of the plan. For example, if the period of the plan in the subscription is 2 months and today is 14th April, &#x60;changes_scheduled_at&#x60; cannot be earlier than 14th February.
.

        */
       
      reactivate_from?:number;
       
      /**
        * @description Override the [billing alignment mode](https://www.chargebee.com/docs/calendar-billing.html#alignment-of-billing-date) chosen for the site for calendar billing. Only applicable when using calendar billing. \* immediate - Subscription period will be aligned with the configured billing date immediately, with credits or charges raised accordingly.. \* delayed - Subscription period will be aligned with the configured billing date at the next renewal.

        */
       
      billing_alignment_mode?:BillingAlignmentMode;
       
      /**
        * @description Identifier of the coupon as a List. Coupon Codes can also be passed.

        */
       
      coupon_ids?:string[];
       
      /**
        * @description Should be true if the existing coupons should be replaced with the ones that are being passed.

        */
       
      replace_coupon_list?:boolean;
       
      /**
        * @description When the quote is converted, this attribute determines the date/time as of when the subscription change is to be carried out. \* end_of_term - The change is carried out at the end of the current billing cycle of the subscription. \* specific_date - The change is carried out as of the date specified under &#x60;changes_scheduled_at&#x60;. \* immediately - The change is carried out immediately.

        */
       
      change_option?:ChangeOption;
       
      /**
        * @description When &#x60;change_option&#x60; is set to &#x60;specific_date&#x60;, then set the date/time at which the subscription change is to happen or has happened. &#x60;changes_scheduled_at&#x60; can be set to a value in the past. This is called backdating the subscription change and is performed when the subscription change has already been provisioned but its billing has been delayed. Backdating is allowed only when the following prerequisites are met:

* Backdating must be enabled for subscription change operations.
* Only the following changes can be backdated:
  * Changes in the recurring items or their prices.
  * Addition of non-recurring items.
* Subscription &#x60;status&#x60; is &#x60;active&#x60;, &#x60;cancelled&#x60;, or &#x60;non_renewing&#x60;.
* The current day of the month does not exceed the limit set in Chargebee for backdating subscription change. This limit is the day of the month by which the accounting for the previous month must be closed.
* The date is on or after &#x60;current_term_start&#x60;.
* The date is on or after the last date/time any of the following changes were made:
  * Changes in the recurring items or their prices.
  * Addition of non-recurring items.
* The date is not more than duration X into the past where X is the billing period of the plan. For example, if the period of the subscription&#x27;s plan is 2 months and today is 14th April, &#x60;changes_scheduled_at&#x60; cannot be earlier than 14th February.
.

        */
       
      changes_scheduled_at?:number;
       
      /**
        * @description Applicable for &#x27;Active&#x27; \&amp; &#x27;Non Renewing&#x27; states alone. Generally, subscription&#x27;s term will be reset (i.e current term is ended and a new term starts immediately) when a new plan having different billing frequency is specified in the input. For all the other cases, the subscription&#x27;s term will remain intact. Now for this later scenario, if you want to force a term reset you can specify this param as &#x27;true&#x27;.   
**Note**: Specifying this value as &#x27;false&#x27; has no impact on the default behaviour.

        */
       
      force_term_reset?:boolean;
       
      /**
        * @description Applicable only for cancelled subscriptions. Once this is passed as true, cancelled subscription will become active; otherwise subscription changes will be made but the subscription state will remain cancelled. If not passed, subscription will be activated only if there is any change in subscription data.

        */
       
      reactivate?:boolean;
       
      /**
        * @description Parameters for subscription

        */
       
      subscription?:{auto_collection?:AutoCollection,contract_term_billing_cycle_on_renewal?:number,id:string,offline_payment_method?:OfflinePaymentMethod,start_date?:number,trial_end?:number};
       
      /**
        * @description Parameters for billing_address

        */
       
      billing_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      /**
        * @description Parameters for shipping_address

        */
       
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      /**
        * @description Parameters for customer

        */
       
      customer?:{registered_for_gst?:boolean,vat_number?:string,vat_number_prefix?:string};
       
      /**
        * @description Parameters for contract_term

        */
       
      contract_term?:{action_at_term_end?:'cancel' | 'renew_once' | 'renew' | 'evergreen',cancellation_cutoff_period?:number};
       
      /**
        * @description Parameters for subscription_items

        */
       
      subscription_items?:{billing_cycles?:number,charge_on_event?:ChargeOnEvent,charge_on_option?:ChargeOnOption,charge_once?:boolean,item_price_id:string,quantity?:number,quantity_in_decimal?:string,service_period_days?:number,trial_end?:number,unit_price?:number,unit_price_in_decimal?:string}[];
       
      /**
        * @description Parameters for discounts

        */
       
      discounts?:{amount?:number,apply_on:ApplyOn,duration_type:DurationType,id?:string,included_in_mrr?:boolean,item_price_id?:string,operation_type:OperationType,percentage?:number,period?:number,period_unit?:PeriodUnit}[];
       
      /**
        * @description Parameters for item_tiers

        */
       
      item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,item_price_id?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
    }
    export interface QuoteLineGroupsForQuoteResponse {  
      /**
        * @description This API retrieves all the quote line groups and lineitems for a quote.

        */
       
       list:{quote_line_group:QuoteLineGroup}[];
       
      /**
        * @description This API retrieves all the quote line groups and lineitems for a quote.

        */
       
       next_offset?:string;
    }
    export interface QuoteLineGroupsForQuoteInputParam {
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
    export interface ExtendExpiryDateResponse {  
      /**
        * @description Can be used to extend the expiry date of a quote.

        */
       
       quote:Quote;
       
      /**
        * @description Can be used to extend the expiry date of a quote.

        */
       
       quoted_subscription?:QuotedSubscription;
       
      /**
        * @description Can be used to extend the expiry date of a quote.

        */
       
       quoted_charge?:QuotedCharge;
    }
    export interface ExtendExpiryDateInputParam {
       
      /**
        * @description Quote will be valid till this date. After this date quote will be marked as closed.

        */
       
      valid_till:number;
    }
    export interface EditForChargeItemsAndChargesResponse {  
      /**
        * @description Changes the quote produced for adding one-time charges and charge items.

        */
       
       quote:Quote;
       
      /**
        * @description Changes the quote produced for adding one-time charges and charge items.

        */
       
       quoted_charge?:QuotedCharge;
    }
    export interface EditForChargeItemsAndChargesInputParam {
       
      /**
        * @description Purchase Order Number for this quote.

        */
       
      po_number?:string;
       
      /**
        * @description Notes specific to this quote that you want customers to see on the quote PDF.

        */
       
      notes?:string;
       
      /**
        * @description Quotes will be vaild till this date. After this quote will be marked as closed.

        */
       
      expires_at?:number;
       
      /**
        * @description The currency code (ISO 4217 format) of the quote.

        */
       
      currency_code?:string;
       
      /**
        * @description The &#x27;One Time&#x27; coupon to be applied.

        */
       
      coupon?:string;
       
      /**
        * @description List of Coupons to be added.

        */
       
      coupon_ids?:string[];
       
      /**
        * @description Parameters for shipping_address

        */
       
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      /**
        * @description Parameters for item_prices

        */
       
      item_prices?:{item_price_id?:string,quantity?:number,quantity_in_decimal?:string,service_period_days?:number,unit_price?:number,unit_price_in_decimal?:string}[];
       
      /**
        * @description Parameters for item_tiers

        */
       
      item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,item_price_id?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
       
      /**
        * @description Parameters for charges

        */
       
      charges?:{amount?:number,amount_in_decimal?:string,avalara_sale_type?:AvalaraSaleType,avalara_service_type?:number,avalara_transaction_type?:number,description?:string,service_period?:number}[];
       
      /**
        * @description Parameters for discounts

        */
       
      discounts?:{amount?:number,apply_on:ApplyOn,item_price_id?:string,percentage?:number}[];
    }
    export interface EditUpdateSubscriptionQuoteForItemsResponse {  
      /**
        * @description Changes the quote produced for updating the subscription items.

        */
       
       quote:Quote;
       
      /**
        * @description Changes the quote produced for updating the subscription items.

        */
       
       quoted_subscription?:QuotedSubscription;
    }
    export interface EditUpdateSubscriptionQuoteForItemsInputParam {
       
      /**
        * @description Notes specific to this quote that you want customers to see on the quote PDF.

        */
       
      notes?:string;
       
      /**
        * @description Quotes will be vaild till this date. After this quote will be marked as closed.

        */
       
      expires_at?:number;
       
      /**
        * @description Item ids of [mandatorily attached addons](./attached_items?prod_cat_ver&#x3D;2) that are to be removed from the subscription.

        */
       
      mandatory_items_to_remove?:string[];
       
      /**
        * @description If &#x60;true&#x60; then the existing &#x60;subscription_items&#x60; list for the subscription is replaced by the one provided. If &#x60;false&#x60; then the provided &#x60;subscription_items&#x60; list gets added to the existing list.

        */
       
      replace_items_list?:boolean;
       
      /**
        * @description Billing cycles set for plan-item price is used by default.

        */
       
      billing_cycles?:number;
       
      /**
        * @description The number of subscription billing cycles to [invoice in advance](https://www.chargebee.com/docs/advance-invoices.html). If a new term is started for the subscription due to this API call, then &#x60;terms_to_charge&#x60; is inclusive of this new term. See description for the &#x60;force_term_reset&#x60; parameter to learn more about when a subscription term is reset.

        */
       
      terms_to_charge?:number;
       
      /**
        * @description If the subscription &#x60;status&#x60; is &#x60;cancelled&#x60; and it is being reactivated via this operation, this is the date/time at which the subscription should be reactivated.  
**Note:** It is recommended not to pass this parameter along with &#x60;changed_scheduled_at&#x60;. &#x60;reactivate_from&#x60; can be backdated (set to a value in the past). Use backdating when the subscription has been reactivated already but its billing has been delayed. Backdating is allowed only when the following prerequisites are met:

* Backdating must be enabled for subscription reactivation operations.
* The current day of the month does not exceed the limit set in Chargebee for backdating subscription change. This limit is the day of the month by which the accounting for the previous month must be closed.
* The date is on or after the last date/time any of the product catalog items of the subscription were changed.
* The date is not more than duration X into the past where X is the billing period of the plan. For example, if the period of the plan in the subscription is 2 months and today is 14th April, &#x60;changes_scheduled_at&#x60; cannot be earlier than 14th February.
.

        */
       
      reactivate_from?:number;
       
      /**
        * @description Override the [billing alignment mode](https://www.chargebee.com/docs/calendar-billing.html#alignment-of-billing-date) chosen for the site for calendar billing. Only applicable when using calendar billing. \* immediate - Subscription period will be aligned with the configured billing date immediately, with credits or charges raised accordingly.. \* delayed - Subscription period will be aligned with the configured billing date at the next renewal.

        */
       
      billing_alignment_mode?:BillingAlignmentMode;
       
      /**
        * @description Identifier of the coupon as a List. Coupon Codes can also be passed.

        */
       
      coupon_ids?:string[];
       
      /**
        * @description Should be true if the existing coupons should be replaced with the ones that are being passed.

        */
       
      replace_coupon_list?:boolean;
       
      /**
        * @description When the quote is converted, this attribute determines the date/time as of when the subscription change is to be carried out. \* end_of_term - The change is carried out at the end of the current billing cycle of the subscription. \* specific_date - The change is carried out as of the date specified under &#x60;changes_scheduled_at&#x60;. \* immediately - The change is carried out immediately.

        */
       
      change_option?:ChangeOption;
       
      /**
        * @description When &#x60;change_option&#x60; is set to &#x60;specific_date&#x60;, then set the date/time at which the subscription change is to happen or has happened. &#x60;changes_scheduled_at&#x60; can be set to a value in the past. This is called backdating the subscription change and is performed when the subscription change has already been provisioned but its billing has been delayed. Backdating is allowed only when the following prerequisites are met:

* Backdating must be enabled for subscription change operations.
* Only the following changes can be backdated:
  * Changes in the recurring items or their prices.
  * Addition of non-recurring items.
* Subscription &#x60;status&#x60; is &#x60;active&#x60;, &#x60;cancelled&#x60;, or &#x60;non_renewing&#x60;.
* The current day of the month does not exceed the limit set in Chargebee for backdating subscription change. This limit is the day of the month by which the accounting for the previous month must be closed.
* The date is on or after &#x60;current_term_start&#x60;.
* The date is on or after the last date/time any of the following changes were made:
  * Changes in the recurring items or their prices.
  * Addition of non-recurring items.
* The date is not more than duration X into the past where X is the billing period of the plan. For example, if the period of the subscription&#x27;s plan is 2 months and today is 14th April, &#x60;changes_scheduled_at&#x60; cannot be earlier than 14th February.
.

        */
       
      changes_scheduled_at?:number;
       
      /**
        * @description Applicable for &#x27;Active&#x27; \&amp; &#x27;Non Renewing&#x27; states alone. Generally, subscription&#x27;s term will be reset (i.e current term is ended and a new term starts immediately) when a new plan having different billing frequency is specified in the input. For all the other cases, the subscription&#x27;s term will remain intact. Now for this later scenario, if you want to force a term reset you can specify this param as &#x27;true&#x27;.   
**Note**: Specifying this value as &#x27;false&#x27; has no impact on the default behaviour.

        */
       
      force_term_reset?:boolean;
       
      /**
        * @description Applicable only for cancelled subscriptions. Once this is passed as true, cancelled subscription will become active; otherwise subscription changes will be made but the subscription state will remain cancelled. If not passed, subscription will be activated only if there is any change in subscription data.

        */
       
      reactivate?:boolean;
       
      /**
        * @description Parameters for subscription

        */
       
      subscription?:{auto_collection?:AutoCollection,contract_term_billing_cycle_on_renewal?:number,offline_payment_method?:OfflinePaymentMethod,start_date?:number,trial_end?:number};
       
      /**
        * @description Parameters for billing_address

        */
       
      billing_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      /**
        * @description Parameters for shipping_address

        */
       
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      /**
        * @description Parameters for customer

        */
       
      customer?:{registered_for_gst?:boolean,vat_number?:string,vat_number_prefix?:string};
       
      /**
        * @description Parameters for contract_term

        */
       
      contract_term?:{action_at_term_end?:'cancel' | 'renew_once' | 'renew' | 'evergreen',cancellation_cutoff_period?:number};
       
      /**
        * @description Parameters for subscription_items

        */
       
      subscription_items?:{billing_cycles?:number,charge_on_event?:ChargeOnEvent,charge_on_option?:ChargeOnOption,charge_once?:boolean,item_price_id:string,quantity?:number,quantity_in_decimal?:string,service_period_days?:number,trial_end?:number,unit_price?:number,unit_price_in_decimal?:string}[];
       
      /**
        * @description Parameters for discounts

        */
       
      discounts?:{amount?:number,apply_on:ApplyOn,duration_type:DurationType,id?:string,included_in_mrr?:boolean,item_price_id?:string,operation_type:OperationType,percentage?:number,period?:number,period_unit?:PeriodUnit}[];
       
      /**
        * @description Parameters for item_tiers

        */
       
      item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,item_price_id?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
    }
    export interface ListResponse {  
      /**
        * @description List all quotes.

        */
       
       list:{quote:Quote,quoted_subscription?:QuotedSubscription}[];
       
      /**
        * @description List all quotes.

        */
       
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
        * @description Indicates whether to include deleted objects in the list. The deleted objects have the attribute \&#x60;deleted\&#x60; as \&#x60;true\&#x60;.

        */
        
      include_deleted?:boolean;
       
      /**
        * @description The quote number. Acts as a identifier for quote and typically generated sequentially.

        */
        
      id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description The identifier of the customer this quote belongs to.

        */
        
      customer_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description To filter based on subscription_id.   
NOTE: Not to be used if *consolidated invoicing* feature is enabled.

        */
        
      subscription_id?:{in?:string,is?:string,is_not?:string,is_present?:'true' | 'false',not_in?:string,starts_with?:string};
       
      /**
        * @description Current status of this quote.

        */
        
      status?:{in?:string,is?:'declined' | 'invoiced' | 'accepted' | 'closed' | 'open',is_not?:'declined' | 'invoiced' | 'accepted' | 'closed' | 'open',not_in?:string};
       
      /**
        * @description Creation date of the quote. Typically this is the date on which quote is generated.

        */
        
      date?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description To filter based on updated at. This attribute will be present only if the resource has been updated after 2016-09-28.

        */
        
      updated_at?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description List all quotes.

        */
        
      sort_by?:{asc?:'date',desc?:'date'};
    }
    export interface PdfResponse {  
      /**
        * @description Retrieves the quote as a PDF. The returned URL is secure, allows download and expires in 60 minutes.

        */
       
       download:Download;
    }
    export interface PdfInputParam {
       
      /**
        * @description When true, the quote PDF has summary of all charges on the quote. When false, the quote PDF has a detailed view of charges grouped by charge event. This parameter does not affect one-time quotes.

        */
       
      consolidated_view?:boolean;
       
      /**
        * @description Determines the pdf should be rendered as inline or attachment in the browser. \* attachment - PDF is rendered as attachment in the browser \* inline - PDF is rendered as inline in the browser

        */
       
      disposition_type?:DispositionType;
    }
    export interface ConvertResponse {  
      /**
        * @description This API is to convert a quote to an invoice.

        */
       
       quote:Quote;
       
      /**
        * @description This API is to convert a quote to an invoice.

        */
       
       quoted_subscription?:QuotedSubscription;
       
      /**
        * @description This API is to convert a quote to an invoice.

        */
       
       quoted_charge?:QuotedCharge;
       
      /**
        * @description This API is to convert a quote to an invoice.

        */
       
       customer:Customer;
       
      /**
        * @description This API is to convert a quote to an invoice.

        */
       
       subscription?:Subscription;
       
      /**
        * @description This API is to convert a quote to an invoice.

        */
       
       invoice?:Invoice;
       
      /**
        * @description This API is to convert a quote to an invoice.

        */
       
       credit_note?:CreditNote;
       
      /**
        * @description This API is to convert a quote to an invoice.

        */
       
       unbilled_charges?:UnbilledCharge[];
    }
    export interface ConvertInputParam {
       
      /**
        * @description The document date displayed on the invoice PDF. Provide this value to backdate the invoice. Backdating an invoice is done for reasons such as booking revenue for a previous date or when the subscription is effective as of a past date. When not provided, the value is the same as current date. Moreover, if the invoice is created as &#x60;pending&#x60;, and if the site is configured to set invoice dates to date of closing, then upon invoice closure, this date is changed to the invoice closing date. &#x60;taxes&#x60; and &#x60;line_item_taxes&#x60; are computed based on the tax configuration as of &#x60;invoice_date&#x60;. When passing this parameter, the following prerequisites must be met:

* &#x60;invoice_date&#x60; must be in the past.
* &#x60;invoice_date&#x60; is not more than one calendar month into the past. For example, if today is 13th January, then you cannot pass a value that is earlier than 13th December.
* The date is not earlier than &#x60;quoted_subscription.start_date&#x60; or &#x60;quoted_subscription.changes_scheduled_at&#x60; (whichever is applicable).
* &#x60;invoice_immediately&#x60; must be &#x60;true&#x60;.
.

        */
       
      invoice_date?:number;
       
      /**
        * @description This attribute is set to &#x60;true&#x60; automatically for the subscription when it has one or more &#x60;metered&#x60; items. However, when there are no &#x60;metered&#x60; items, you can pass this parameter as &#x60;true&#x60; to force all invoices (except the first) to be created as &#x60;pending&#x60;. This is useful in the following scenarios:

* When you manage metered billing at your end by calculating usage-based charges yourself and add them to the subscription as [one-time charges](https://www.chargebee.com/docs/2.0/charges.html).
* When your workflow involves inspecting all charges before you close invoices.

**Note:**

* You must enable [Metered Billing](https://www.chargebee.com/docs/2.0/metered_billing.html) for this parameter to be acceptable.
* To create the first invoice also as &#x60;pending&#x60;, pass &#x60;first_invoice_pending&#x60; as &#x60;true&#x60;.
.

        */
       
      create_pending_invoices?:boolean;
       
      /**
        * @description Non-metered items are billed at the beginning of a billing cycle while metered items are billed at the end. Consequently, the first invoice of the subscription contains only the non-metered items.

By passing this parameter as &#x60;true&#x60;, you create the first invoice as &#x60;pending&#x60; allowing you to add the previous term&#x27;s metered charges to it before closing. This is useful when the subscription is moved to Chargebee from a different billing system. As applicable to all &#x60;pending&#x60; invoices, this invoice is also [closed automatically](https://www.chargebee.com/docs/2.0/metered_billing.html#configuring-metered-billing) or via an [API call](/docs/api/invoices?prod_cat_ver&#x3D;2#close_a_pending_invoice).  
**Note:**

This parameter is passed only when there are metered items in the subscription or when &#x60;create_pending_invoices&#x60; is &#x60;true&#x60;.
.

        */
       
      first_invoice_pending?:boolean;
       
      /**
        * @description Parameters for subscription

        */
       
      subscription?:{auto_close_invoices?:boolean,auto_collection?:AutoCollection,id?:string,po_number?:string};
    }
    export interface CreateForChargeItemsAndChargesResponse {  
      /**
        * @description Creates a quote using charge-items and one-time charges.

        */
       
       quote:Quote;
       
      /**
        * @description Creates a quote using charge-items and one-time charges.

        */
       
       quoted_charge?:QuotedCharge;
    }
    export interface CreateForChargeItemsAndChargesInputParam {
       
      /**
        * @description The quote name will be used as the pdf name of the quote.

        */
       
      name?:string;
       
      /**
        * @description Identifier of the customer for which the quote needs to be created.

        */
       
      customer_id:string;
       
      /**
        * @description Purchase Order Number for this quote.

        */
       
      po_number?:string;
       
      /**
        * @description Notes specific to this quote that you want customers to see on the quote PDF.

        */
       
      notes?:string;
       
      /**
        * @description Quotes will be vaild till this date. After this quote will be marked as closed.

        */
       
      expires_at?:number;
       
      /**
        * @description The currency code (ISO 4217 format) of the quote.

        */
       
      currency_code?:string;
       
      /**
        * @description The &#x27;One Time&#x27; coupon to be applied.

        */
       
      coupon?:string;
       
      /**
        * @description List of Coupons to be added.

        */
       
      coupon_ids?:string[];
       
      /**
        * @description Parameters for shipping_address

        */
       
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      /**
        * @description Parameters for item_prices

        */
       
      item_prices?:{item_price_id?:string,quantity?:number,quantity_in_decimal?:string,service_period_days?:number,unit_price?:number,unit_price_in_decimal?:string}[];
       
      /**
        * @description Parameters for item_tiers

        */
       
      item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,item_price_id?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
       
      /**
        * @description Parameters for charges

        */
       
      charges?:{amount?:number,amount_in_decimal?:string,avalara_sale_type?:AvalaraSaleType,avalara_service_type?:number,avalara_transaction_type?:number,description?:string,service_period?:number}[];
       
      /**
        * @description Parameters for discounts

        */
       
      discounts?:{amount?:number,apply_on:ApplyOn,item_price_id?:string,percentage?:number}[];
    }
    export interface DeleteResponse {  
      /**
        * @description Delete a quote using this API.

        */
       
       quote:Quote;
       
      /**
        * @description Delete a quote using this API.

        */
       
       quoted_subscription?:QuotedSubscription;
       
      /**
        * @description Delete a quote using this API.

        */
       
       quoted_charge?:QuotedCharge;
    }
    export interface DeleteInputParam {
       
      /**
        * @description Reason for deleting quote. This comment will be added to the subscription entity if the quote belongs to a subscription or added to the customer entity if the quote is associated only with a customer.

        */
       
      comment?:string;
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
          * @description The address verification status. \* partially_valid - The address is valid for taxability but has not been validated for shipping. \* invalid - Address is invalid. \* not_validated - Address is not yet validated. \* valid - Address was validated successfully.

          */
       
      validation_status?:ValidationStatus;
       
         /**
          * @description The index number of the subscription to which the item price is added. Provide a unique number between &#x60;0&#x60; and &#x60;4&#x60; (inclusive) for each subscription that is to be created.

          */
       
      index?:number;
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
  }
}