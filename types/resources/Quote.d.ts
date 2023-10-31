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
        * @description Retrieves the quotes identified by the &#x27;number&#x27; specified in the url.

        */
      
      retrieve(quote_id:string):ChargebeeRequest<RetrieveResponse>;
       
      /**
        * @description Create a quote for new subscription line items of a customer.

        */
      
      create_sub_items_for_customer_quote(customer_id:string, input?:CreateSubItemsForCustomerQuoteInputParam):ChargebeeRequest<CreateSubItemsForCustomerQuoteResponse>;
       
      /**
        * @description Changes the quote produced for creating a new subscription items

        */
      
      edit_create_sub_customer_quote_for_items(quote_id:string, input?:EditCreateSubCustomerQuoteForItemsInputParam):ChargebeeRequest<EditCreateSubCustomerQuoteForItemsResponse>;
       
      /**
        * @description Create a quote for updating subscription line items.

        */
      
      update_subscription_quote_for_items(input?:UpdateSubscriptionQuoteForItemsInputParam):ChargebeeRequest<UpdateSubscriptionQuoteForItemsResponse>;
       
      /**
        * @description Changes the quote produced for updating the subscription items.

        */
      
      edit_update_subscription_quote_for_items(quote_id:string, input?:EditUpdateSubscriptionQuoteForItemsInputParam):ChargebeeRequest<EditUpdateSubscriptionQuoteForItemsResponse>;
       
      /**
        * @description Creates a quote using charge-items and one-time charges.

        */
      
      create_for_charge_items_and_charges(input:CreateForChargeItemsAndChargesInputParam):ChargebeeRequest<CreateForChargeItemsAndChargesResponse>;
       
      /**
        * @description Changes the quote produced for adding one-time charges and charge items.

        */
      
      edit_for_charge_items_and_charges(quote_id:string, input?:EditForChargeItemsAndChargesInputParam):ChargebeeRequest<EditForChargeItemsAndChargesResponse>;
       
      /**
        * @description List all quotes.

        */
      
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
       
      /**
        * @description This API retrieves all the quote line groups and lineitems for a quote.

        */
      
      quote_line_groups_for_quote(quote_id:string, input?:QuoteLineGroupsForQuoteInputParam):ChargebeeRequest<QuoteLineGroupsForQuoteResponse>;
       
      /**
        * @description This API is to convert a quote to an invoice.

        */
      
      convert(quote_id:string, input?:ConvertInputParam):ChargebeeRequest<ConvertResponse>;
       
      /**
        * @description Updates the status of the quote. Status can be updated to Accepted, Declined, and Closed.

        */
      
      update_status(quote_id:string, input:UpdateStatusInputParam):ChargebeeRequest<UpdateStatusResponse>;
       
      /**
        * @description Can be used to extend the expiry date of a quote.

        */
      
      extend_expiry_date(quote_id:string, input:ExtendExpiryDateInputParam):ChargebeeRequest<ExtendExpiryDateResponse>;
       
      /**
        * @description Delete a quote using this API.

        */
      
      delete(quote_id:string, input?:DeleteInputParam):ChargebeeRequest<DeleteResponse>;
       
      /**
        * @description Retrieves the quote as a PDF. The returned URL is secure, allows download and expires in 60 minutes.

        */
      
      pdf(quote_id:string, input?:PdfInputParam):ChargebeeRequest<PdfResponse>;
    }
    export interface RetrieveResponse {  
       quote:Quote;
       
       quoted_subscription?:QuotedSubscription;
       
       quoted_charge?:QuotedCharge;
    }
    
    export interface CreateSubItemsForCustomerQuoteResponse {  
       quote:Quote;
       
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
    export interface EditCreateSubCustomerQuoteForItemsResponse {  
       quote:Quote;
       
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
    export interface UpdateSubscriptionQuoteForItemsResponse {  
       quote:Quote;
       
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
    export interface EditUpdateSubscriptionQuoteForItemsResponse {  
       quote:Quote;
       
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
    export interface CreateForChargeItemsAndChargesResponse {  
       quote:Quote;
       
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
    export interface EditForChargeItemsAndChargesResponse {  
       quote:Quote;
       
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
        * @description List all quotes.

        */
        
      limit?:number;
       
      /**
        * @description List all quotes.

        */
        
      offset?:string;
       
      /**
        * @description List all quotes.

        */
        
      include_deleted?:boolean;
       
      /**
        * @description List all quotes.

        */
        
      id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description List all quotes.

        */
        
      customer_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description List all quotes.

        */
        
      subscription_id?:{in?:string,is?:string,is_not?:string,is_present?:'true' | 'false',not_in?:string,starts_with?:string};
       
      /**
        * @description List all quotes.

        */
        
      status?:{in?:string,is?:'declined' | 'invoiced' | 'accepted' | 'closed' | 'open',is_not?:'declined' | 'invoiced' | 'accepted' | 'closed' | 'open',not_in?:string};
       
      /**
        * @description List all quotes.

        */
        
      date?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description List all quotes.

        */
        
      updated_at?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description List all quotes.

        */
        
      sort_by?:{asc?:'date',desc?:'date'};
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
        * @description This API retrieves all the quote line groups and lineitems for a quote.

        */
        
      limit?:number;
       
      /**
        * @description This API retrieves all the quote line groups and lineitems for a quote.

        */
        
      offset?:string;
    }
    export interface ConvertResponse {  
       quote:Quote;
       
       quoted_subscription?:QuotedSubscription;
       
       quoted_charge?:QuotedCharge;
       
       customer:Customer;
       
       subscription?:Subscription;
       
       invoice?:Invoice;
       
       credit_note?:CreditNote;
       
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
    export interface UpdateStatusResponse {  
       quote:Quote;
       
       quoted_subscription?:QuotedSubscription;
       
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
    export interface ExtendExpiryDateResponse {  
       quote:Quote;
       
       quoted_subscription?:QuotedSubscription;
       
       quoted_charge?:QuotedCharge;
    }
    export interface ExtendExpiryDateInputParam {
       
      /**
        * @description Quote will be valid till this date. After this date quote will be marked as closed.

        */
       
      valid_till:number;
    }
    export interface DeleteResponse {  
       quote:Quote;
       
       quoted_subscription?:QuotedSubscription;
       
       quoted_charge?:QuotedCharge;
    }
    export interface DeleteInputParam {
       
      /**
        * @description Reason for deleting quote. This comment will be added to the subscription entity if the quote belongs to a subscription or added to the customer entity if the quote is associated only with a customer.

        */
       
      comment?:string;
    }
    export interface PdfResponse {  
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
          * @description The [pricing scheme](https://www.chargebee.com/docs/2.0/plans.html#pricing-models) for this item price. \* per_unit - A fixed price per unit quantity. \* stairstep - A quantity-based pricing scheme. The item is charged a fixed price based on the tier that the total quantity falls in. \* flat_fee - A fixed price that is not quantity-based. \* tiered - The per unit price is based on the tier that the total quantity falls in. \* volume - There are quantity tiers for which per unit prices are set. Quantities are purchased from successive tiers.

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
          * @description Specifies the modelled entity this line item is based on. \* addon - Indicates that this lineitem is based on &#x27;Addon&#x27; entity. The &#x27;entity_id&#x27; attribute specifies the [addon](/docs/api/addons#addon_attributes) id \* plan_item_price - Indicates that this line item is based on plan Item Price \* addon_item_price - Indicates that this line item is based on addon Item Price \* charge_item_price - Indicates that this line item is based on charge Item Price \* adhoc - Indicates that this lineitem is not modelled. i.e created adhoc. So the &#x27;entity_id&#x27; attribute will be null in this case \* plan_setup - Indicates that this lineitem is based on &#x27;Plan Setup&#x27; charge. The &#x27;entity_id&#x27; attribute specifies the [plan](/docs/api/plans#plan_attributes) id \* plan - Indicates that this lineitem is based on &#x27;Plan&#x27; entity. The &#x27;entity_id&#x27; attribute specifies the [plan](/docs/api/plans#plan_attributes) id

          */
       
      entity_type:'addon_item_price' | 'plan_item_price' | 'charge_item_price' | 'adhoc';
       
         /**
          * @description The reason due to which the line item price/amount is exempted from tax. \* zero_value_item - If the total invoice value/amount is equal to zero. E.g., If the total order value is $10 and a $10 coupon has been applied against that order, the total order value becomes $0. Hence the invoice value also becomes $0. \* reverse_charge - If the Customer is identified as B2B customer (when VAT Number is entered), applicable for EU only \* tax_not_configured - If tax is not enabled for the site \* high_value_physical_goods - If physical goods are sold from outside Australia to customers in Australia, and the price of all the physical good line items is greater than AUD 1000, then tax will not be applied \* product_exempt - If the Plan or Addon is marked as Tax exempt \* zero_rated - If the rate of tax is 0% and no Sales/ GST tax is collectable for that line item \* customer_exempt - If the Customer is marked as Tax exempt \* region_non_taxable - If the product sold is not taxable in this region, but it is taxable in other regions, hence this region is not part of the Taxable jurisdiction \* export - You are not registered for tax in the customer&#x27;s region. This is also the reason code when both &#x60;billing_address&#x60; and &#x60;shipping_address&#x60; have not been provided for the customer and subscription respectively

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
          * @description The type of deduction and the amount to which it is applied. \* document_level_coupon - The deduction is due to a coupon applied to the invoice &#x60;sub_total&#x60;. The coupon id is passed as &#x60;entity_id&#x60;. \* prorated_credits - The deduction is due to a legacy adjustment credit applied to the invoice. The &#x60;entity_id&#x60; is &#x60;null&#x60; in this case. The legacy credits feature is superseded by [adjustment_credit_notes](/docs/api/invoices?prod_cat_ver&#x3D;2#invoice_adjustment_credit_notes). \* item_level_coupon - The deduction is due to a coupon applied to line item. The coupon &#x60;id&#x60; is passed as &#x60;entity_id&#x60;. \* item_level_discount - The deduction is due to a [discount](/docs/api/discounts?prod_cat_ver&#x3D;2) applied to a line item of the invoice. The discount &#x60;id&#x60; is available as the &#x60;entity_id&#x60;. \* promotional_credits - The deduction is due to a [promotional credit](/docs/api/promotional_credits?prod_cat_ver&#x3D;2) applied to the invoice. \* document_level_discount - The deduction is due to a [discount](/docs/api/discounts?prod_cat_ver&#x3D;2) applied to the invoice &#x60;sub_total&#x60;. The discount &#x60;id&#x60; is available as the &#x60;entity_id&#x60;.

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
          * @description The type of deduction and the amount to which it is applied. \* item_level_coupon - The deduction is due to a coupon applied to a line item of the invoice. The coupon &#x60;id&#x60; is available as &#x60;entity_id&#x60;. \* prorated_credits - The deduction is due to a legacy adjustment credit applied to the invoice. The &#x60;entity_id&#x60; is &#x60;null&#x60; in this case. The legacy credits feature is superseded by [adjustment_credit_notes](/docs/api/invoices?prod_cat_ver&#x3D;2#invoice_adjustment_credit_notes). \* document_level_coupon - The deduction is due to a coupon applied to the invoice &#x60;sub_total&#x60;. The coupon &#x60;id&#x60; is available as &#x60;entity_id&#x60;. \* document_level_discount - The deduction is due to a [discount](/docs/api/discounts?prod_cat_ver&#x3D;2) applied to the invoice &#x60;sub_total&#x60;. The discount &#x60;id&#x60; is available as the &#x60;entity_id&#x60;. \* item_level_discount - The deduction is due to a [discount](/docs/api/discounts?prod_cat_ver&#x3D;2) applied to a line item of the invoice. The discount &#x60;id&#x60; is available as the &#x60;entity_id&#x60;. \* promotional_credits - The deduction is due to a [promotional credit](/docs/api/promotional_credits) applied to the invoice. The &#x60;entity_id&#x60; is &#x60;null&#x60; in this case.

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
          * @description The type of tax jurisdiction \* unincorporated - Combined tax of state and county. \* federal - The tax jurisdiction is a federal \* state - The tax jurisdiction is a state \* county - The tax jurisdiction is a county \* country - The tax jurisdiction is a country \* city - The tax jurisdiction is a city \* other - Jurisdictions other than the ones listed above. \* special - Special tax jurisdiction.

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