///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface Estimate {
    
    /**
      * @description The time at which this estimate got generated

      */
    
    created_at:number;
    
    /**
      * @description Represents the subscription details when the &#x27;estimate&#x27; operations are invoked.

      */
    
    subscription_estimate?:SubscriptionEstimate;
    
    /**
      * @description Is a list of estimated subscriptions i.e., an array of *subscription_estimate* objects. It is generated when &#x27;Create an estimate for purchase&#x27; operation is invoked

      */
    
    subscription_estimates?:SubscriptionEstimate[];
    
    /**
      * @description Represents the preview of the invoice generated immediately when the &#x27;estimate&#x27; operations are invoked.

      */
    
    invoice_estimate?:InvoiceEstimate;
    
    /**
      * @description Is a list of estimated invoices i.e., an array of *invoice_estimate* objects. It is generated when &#x27;Create an estimate for unbilled charges&#x27; operation is invoked

      */
    
    invoice_estimates?:InvoiceEstimate[];
    
    /**
      * @description Represents the preview of the invoice generated at term end when the &#x27;estimate&#x27; operations are invoked.

      */
    
    next_invoice_estimate?:InvoiceEstimate;
    
    /**
      * @description Represents the preview of the credit-notes generated during &#x27;estimate&#x27; operation. Currently applicable only for the &#x27;Update Subscription Estimate&#x27; operation.

      */
    
    credit_note_estimates?:CreditNoteEstimate[];
    
    /**
      * @description Represents the preview of the unbilled charges generated during &#x27;estimate&#x27; operation. Currently not applicable for the &#x27;Subscription renewal estimate&#x27; operation.

      */
    
    unbilled_charge_estimates?:UnbilledCharge[];
  }
  export namespace Estimate {
    export class EstimateResource {  
      /**
        * @description Generates an estimate for creating a subscription when the customer does not exist in Chargebee. This estimate API can be called when the customer has not yet signed up and you want to preview how a new subscription would look like for them.

**Note:** Estimate operations do not make any changes in Chargebee; hence this API does not create an actual &#x60;customer&#x60; or &#x60;subscription&#x60; record.  
**See also**

* [Estimate a purchase](https://apidocs.chargebee.com/docs/api/purchases#estimates_for_purchase): an operation that estimates a &#x60;purchase&#x60; representing multiple subscriptions bought together by a customer.

The response contains one or more of the following objects:

* &#x60;subscription_estimate&#x60;: The subscription details like the status of the subscription (such as &#x60;in_trial&#x60; or &#x60;active&#x60;), next billing date, and so on.
* &#x60;invoice_estimate&#x60;:The details of the immediate invoice, if there is one. If the subscription is created in &#x60;trial&#x60;/&#x60;future&#x60; states, &#x60;invoice_estimate&#x60; is unavailable as no immediate invoice is generated.
* &#x60;next_invoice_estimate&#x60;:This is returned when an immediate invoice is not generated. It contains the details of the invoice that will be generated on the next billing date of the subscription.
* &#x60;unbilled_charge_estimates&#x60;: This contains the details of charges that have not been invoiced. This is returned only if the &#x60;invoice_immediately&#x60; parameter is set to &#x60;false&#x60;.




        */
      
      create_sub_item_estimate(input?:CreateSubItemEstimateInputParam):ChargebeeRequest<CreateSubItemEstimateResponse>;
       
      /**
        * @description Generates an estimate without creating a subscription. This endpoint can be called when you want to preview details of a new subscription before actually creating one.  
**See also**

* [Estimate a purchase](https://apidocs.chargebee.com/docs/api/purchases#estimates_for_purchase): an operation that estimates a &#x60;purchase&#x60; representing multiple subscriptions bought together by a customer.

        */
      
      create_sub_item_for_customer_estimate(customer_id:string, input?:CreateSubItemForCustomerEstimateInputParam):ChargebeeRequest<CreateSubItemForCustomerEstimateResponse>;
       
      /**
        * @description Returns an estimate for updating a subscription.

In the response,

* [subscription_estimate](/docs/api/estimates#subscription_estimate_attributes): The details of the changed subscription such as &#x60;status&#x60;, next billing date, and so on.
* [invoice_estimate](/docs/api/estimates#invoice_estimate_attributes):The details of the immediate invoice, if it is generated. An immediate invoice is not generated when:
  * &#x60;end_of_term&#x60; parameter is true
  * &#x60;prorate&#x60; parameter is &#x60;false&#x60;
  * No changes are made to the plan item prices or addon item prices in &#x60;subscription_items&#x60;.
  * For changes such as [quantity downgrades](https://www.chargebee.com/docs/proration.html#proration-mechanism_plan-quantity-downgrade-paid-invoice).
* [next_invoice_estimate](/docs/api/estimates#next_invoice_estimate_attributes):The details of the invoice to be generated later (if any) on the occasion that no immediate invoice has been generated.
* [credit_note_estimates](/docs/api/estimates#credit_note_estimate_attributes):The list of credit notes (if any) generated during this operation.
* [unbilled_charge_estimates](/docs/api/estimates#unbilled_charge_estimate_attributes): The details of charges that have not been invoiced. This is returned only if the &#x60;invoice_immediately&#x60; parameter is set to &#x60;false&#x60;.

        */
      
      update_subscription_for_items(input?:UpdateSubscriptionForItemsInputParam):ChargebeeRequest<UpdateSubscriptionForItemsResponse>;
       
      /**
        * @description This returns an estimate of the amount that will be charged when the subscription is billed next. The estimate is calculated based on the current recurring items of the subscription - plan, addons, and coupons.

In the response,

* **estimate.subscription_estimate** has the current subscription details like its status, next billing date, and so on.
* **estimate.invoice_estimate** has details of the invoice that will be generated at the next billing date.

  The generated invoice estimate will include all the balances - [Promotional Credits](https://www.chargebee.com/docs/promotional-credits.html), Refundable Credits, and Excess Payments - if any. If you don&#x27;t want these balances to be included you can specify &#x27;false&#x27; for the parameter *use_existing_balances*.

  To exclude the [delayed charges](https://www.chargebee.com/docs/charges.html) from the invoice estimate, specify &#x27;false&#x27; for the parameter *include_delayed_charges*.

**Note:**

* This API will not generate a renewal invoice if an [advance invoice](https://www.chargebee.com/docs/advance-invoices.html) is already present for the subscription.
* For &#x27;Non Renewing&#x27; subscriptions, only the [delayed charges](https://www.chargebee.com/docs/charges.html) will be included in the invoice estimate.
* This API is not supported for &#x27;Cancelled&#x27; subscriptions.
* Only the subscription&#x27;s charges will be included. If you have enabled the Consolidated invoicing feature, use the *Upcoming Invoices* estimate available for the Customer object to get the actual estimate invoice for the customer.

        */
      
      renewal_estimate(subscription_id:string, input?:RenewalEstimateInputParam):ChargebeeRequest<RenewalEstimateResponse>;
       
      /**
        * @description This API is used to generate an invoice estimate for preview. Estimate details include the number of billing cycles to be invoiced in advance, the number of billing cycles in one interval, advance invoicing schedules, and so on.

        */
      
      advance_invoice_estimate(subscription_id:string, input?:AdvanceInvoiceEstimateInputParam):ChargebeeRequest<AdvanceInvoiceEstimateResponse>;
       
      /**
        * @description Regenerates the invoice for the current term of the subscription. The subscription must have &#x60;status&#x60; as &#x60;active&#x60; or &#x60;non_renewing&#x60;. This operation is not allowed when any of the following conditions hold true for the subscription:

* An invoice exists for the current term and its &#x60;status&#x60; is not &#x60;voided&#x60;.
* There are [unbilled charges](https://www.chargebee.com/docs/unbilled-charges.html) for the current term.
* The subscription has an [advance invoice](https://www.chargebee.com/docs/advance-invoices.html).



#### Response

Returns an &#x60;estimate&#x60; object with one of the following components depending on the value of &#x60;invoice_immediately&#x60;.

* If the value is &#x60;true&#x60;: an &#x60;invoice_estimate&#x60; object that corresponds to the regenerated invoice.
* If the value is &#x60;false&#x60;: a list of &#x60;unbilled_charge_estimate&#x60; objects corresponding to all the unbilled charges created for the current term of the subscription.




        */
      
      regenerate_invoice_estimate(subscription_id:string, input?:RegenerateInvoiceEstimateInputParam):ChargebeeRequest<RegenerateInvoiceEstimateResponse>;
       
      /**
        * @description Estimate of the upcoming scheduled invoices (subscription activations, renewals etc) of a customer. For now preview of the invoices generated on the immediate upcoming date is supported. Say a customer has couple of subscription renewals scheduled on *Jan,10th* and another subscription renewal scheduled on *Jan,15th* . This API gives the preview of all the invoices scheduled to be generated on *Jan,10th* (immediate upcoming date).

In the response:

* **estimate.invoice_estimates\[\]** has details of the invoices scheduled to be generated.

**Note:** If *consolidated invoicing* is enabled you may use this API to test whether upcoming renewals are consolidated.

        */
      
      upcoming_invoices_estimate(customer_id:string):ChargebeeRequest<UpcomingInvoicesEstimateResponse>;
       
      /**
        * @description Generates an estimate for the &#x27;change term end&#x27; operation. This is similar to the [Change term end](/docs/api/subscriptions#change_term_end) API but the subscription&#x27;s term end will not be changed, only an estimate for this operation is created. This is applicable only for subscriptions in &#x27;in-trial&#x27;, &#x27;active&#x27; and &#x27;non-renewing&#x27; states.

In the response,

* **estimate.subscription_estimate** has the subscription details like the status of the subscription (in_trial, active, etc.), next billing date, and so on.
* **estimate.invoice_estimate** has details of the invoice that will be generated immediately. This will not be present if no immediate invoice is generated for this operation. This will happen when
  * *prorate* parameter is false, or
  * *invoice_immediately* parameter is false, or
  * subscription is in *in-trial* state
* **estimate.credit_note_estimates\[\]** has details of the credit-notes that will get generated during this operation. This list will be empty if no credit-note gets generated during this operation.
* **estimate.unbilled_charge_estimates\[\]** has details of the unbilled charges. This is returned only if *invoice_immediately* is set as false.

        */
      
      change_term_end(subscription_id:string, input:ChangeTermEndInputParam):ChargebeeRequest<ChangeTermEndResponse>;
       
      /**
        * @description This creates an estimate for canceling a subscription without actually canceling it. Estimate details include canceling date, unbilled charge options, refund credit handling, the amount to be credited after cancellation, and so on.

        */
      
      cancel_subscription_for_items(subscription_id:string, input?:CancelSubscriptionForItemsInputParam):ChargebeeRequest<CancelSubscriptionForItemsResponse>;
       
      /**
        * @description This API provides an estimate of the details pertaining to the [pause_subscription](/docs/api/subscriptions#pause_a_subscription) operation. It returns attributes such as [pause_date](/docs/api/estimates#estimate_subscription_estimate_pause_date) and [resume_date](/docs/api/estimates#estimate_subscription_estimate_resume_date). This is similar to the [Pause a subscription](/docs/api/subscriptions#pause_a_subscription) API with the exception that the subscription is not paused. Only an estimate for this operation is created.

In the response,

* **estimate.subscription_estimate** has the subscription details.
* **estimate.invoice_estimate** has details of the invoice that are generated immediately. This is not present if no immediate invoices are generated for this operation.
* **estimate.credit_note_estimates\[\]** has details of the credit notes that are generated during this operation. This list is empty if no credit notes are generated.

        */
      
      pause_subscription(subscription_id:string, input?:PauseSubscriptionInputParam):ChargebeeRequest<PauseSubscriptionResponse>;
       
      /**
        * @description Generates an estimate for the &#x27;resume subscription&#x27; operation. This is similar to the [Resume a subscription](/docs/api/subscriptions#resume_a_subscription) API, but the subscription will not be resumed. Only an estimate for this operation is created.

In the response,

* **estimate.subscription_estimate** has the subscription details.
* **estimate.invoice_estimate** has details of the invoice that will be generated immediately. This will not be present if no immediate invoice is generated for this operation. This will happen for in-term resumption^++^.   

  **^++^What is an &quot;in-term resumption&quot;?**   
  An &quot;in-term resumption&quot; is when the resumption happens within the billing term of the subscription.
* **estimate.next_invoice_estimate** has details of the invoice that will be generated during the next billing date of this subscription. This will be present only if no immediate invoice is generated during this operation (scenario mentioned above) and this subscription has next billing.   

  The generated invoice_estimate/next_invoice_estimate will include all the balances - [Promotional Credits](https://www.chargebee.com/docs/promotional-credits.html), Refundable Credits, and Excess Payments - if any.

        */
      
      resume_subscription(subscription_id:string, input?:ResumeSubscriptionInputParam):ChargebeeRequest<ResumeSubscriptionResponse>;
       
      /**
        * @description This endpoint generates an estimate for a subscription that is intended to be a gift. The estimate provides details about the gift sender, gift recipient, address details of the recipient, and the type and details of subscription items included in the gift.

        */
      
      gift_subscription_for_items(input?:GiftSubscriptionForItemsInputParam):ChargebeeRequest<GiftSubscriptionForItemsResponse>;
       
      /**
        * @description This endpoint creates an invoice estimate for non-recurring items.

        */
      
      create_invoice_for_items(input?:CreateInvoiceForItemsInputParam):ChargebeeRequest<CreateInvoiceForItemsResponse>;
    }
    export interface CreateSubItemEstimateResponse {  
       estimate:Estimate;
    }
    export interface CreateSubItemEstimateInputParam {
       
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
        * @description Override the [billing alignment mode](https://www.chargebee.com/docs/calendar-billing.html#alignment-of-billing-date) for Calendar Billing. Only applicable when using Calendar Billing. The default value is that which has been configured for the site. \* immediate - Subscription period will be aligned with the configured billing date immediately, with credits or charges raised accordingly.. \* delayed - Subscription period will be aligned with the configured billing date at the next renewal.

        */
       
      billing_alignment_mode?:BillingAlignmentMode;
       
      /**
        * @description List of coupons to be applied to this subscription. You can provide coupon ids or coupon codes.

        */
       
      coupon_ids?:string[];
       
      /**
        * @description If there are charges raised immediately for the subscription, this parameter specifies whether those charges are to be invoiced immediately or added to [unbilled charges](https://www.chargebee.com/docs/unbilled-charges.html). The default value is as per the [site settings](https://www.chargebee.com/docs/unbilled-charges.html#configuration).  
**Note:** &#x60;invoice_immediately&#x60; only affects charges that are raised at the time of execution of this API call. Any charges scheduled to be raised in the future are not affected by this parameter. .

        */
       
      invoice_immediately?:boolean;
       
      /**
        * @description The document date displayed on the invoice PDF. By default, it is the date of creation of the invoice or, when Metered Billing is enabled, it can be the date of closing the invoice. Provide this value to backdate the invoice (set the invoice date to a value in the past). Backdating an invoice is done for reasons such as booking revenue for a previous date or when the non-recurring charge is effective as of a past date. &#x60;taxes&#x60; and &#x60;line_item_taxes&#x60; are computed based on the tax configuration as of this date. The date should not be more than one calendar month into the past. For example, if today is 13th January, then you cannot pass a value that is earlier than 13th December.

        */
       
      invoice_date?:number;
       
      /**
        * @description Indicates the Client profile id for the customer. This is applicable only if you use [Chargebee&#x27;s AvaTax for Communications](https://www.chargebee.com/docs/avatax-for-communication.html) integration.

        */
       
      client_profile_id?:string;
       
      /**
        * @description Parameters for subscription

        */
       
      subscription?:{contract_term_billing_cycle_on_renewal?:number,free_period?:number,free_period_unit?:FreePeriodUnit,id?:string,start_date?:number,trial_end?:number,trial_end_action?:TrialEndAction};
       
      /**
        * @description Parameters for billing_address

        */
       
      billing_address?:{city?:string,country?:string,line1?:string,line2?:string,line3?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      /**
        * @description Parameters for shipping_address

        */
       
      shipping_address?:{city?:string,country?:string,line1?:string,line2?:string,line3?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      /**
        * @description Parameters for customer

        */
       
      customer?:{customer_type?:CustomerType,entity_code?:EntityCode,exempt_number?:string,exemption_details?:any[],registered_for_gst?:boolean,taxability?:Taxability,vat_number?:string,vat_number_prefix?:string};
       
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
    export interface CreateSubItemForCustomerEstimateResponse {  
       estimate:Estimate;
    }
    export interface CreateSubItemForCustomerEstimateInputParam {
       
      /**
        * @description The generated invoice_estimate/next_invoice_estimate will include all the balances - Promotional Credits, Refundable Credits, and Excess Payments - if any. If you don&#x27;t want these balances to be included you can specify &#x27;false&#x27; for the parameter *use_existing_balances*.

        */
       
      use_existing_balances?:boolean;
       
      /**
        * @description If there are charges raised immediately for the subscription, this parameter specifies whether those charges are to be invoiced immediately or added to [unbilled charges](https://www.chargebee.com/docs/unbilled-charges.html). The default value is as per the [site settings](https://www.chargebee.com/docs/unbilled-charges.html#configuration).  
**Note:** &#x60;invoice_immediately&#x60; only affects charges that are raised at the time of execution of this API call. Any charges scheduled to be raised in the future are not affected by this parameter. .

        */
       
      invoice_immediately?:boolean;
       
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
        * @description The document date displayed on the invoice PDF. By default, it is the date of creation of the invoice or, when Metered Billing is enabled, it can be the date of closing the invoice. Provide this value to backdate the invoice (set the invoice date to a value in the past). Backdating an invoice is done for reasons such as booking revenue for a previous date or when the non-recurring charge is effective as of a past date. &#x60;taxes&#x60; and &#x60;line_item_taxes&#x60; are computed based on the tax configuration as of this date. The date should not be more than one calendar month into the past. For example, if today is 13th January, then you cannot pass a value that is earlier than 13th December.

        */
       
      invoice_date?:number;
       
      /**
        * @description List of coupons to be applied to this subscription. You can provide coupon ids or coupon codes.

        */
       
      coupon_ids?:string[];
       
      /**
        * @description Parameters for subscription

        */
       
      subscription?:{contract_term_billing_cycle_on_renewal?:number,free_period?:number,free_period_unit?:FreePeriodUnit,id?:string,start_date?:number,trial_end?:number,trial_end_action?:TrialEndAction};
       
      /**
        * @description Parameters for shipping_address

        */
       
      shipping_address?:{city?:string,country?:string,line1?:string,line2?:string,line3?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
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
    export interface UpdateSubscriptionForItemsResponse {  
       estimate:Estimate;
    }
    export interface UpdateSubscriptionForItemsInputParam {
       
      /**
        * @description Item ids of [mandatorily attached addons](./attached_items?prod_cat_ver&#x3D;2) that are to be removed from the subscription.

        */
       
      mandatory_items_to_remove?:string[];
       
      /**
        * @description If &#x60;true&#x60; then the existing &#x60;subscription_items&#x60; list for the subscription is replaced by the one provided. If &#x60;false&#x60; then the provided &#x60;subscription_items&#x60; list gets added to the existing list.

        */
       
      replace_items_list?:boolean;
       
      /**
        * @description The document date displayed on the invoice PDF. The default value is the current date. Provide this value to backdate the invoice. Backdating an invoice is done for reasons such as booking revenue for a previous date or when the subscription is effective as of a past date. Moreover, if &#x60;create_pending_invoices&#x60; is set to &#x60;true&#x60;, and if the site is configured to set invoice dates to date of closing, then upon invoice closure, this date is changed to the invoice closing date. taxes and line_item_taxes are computed based on the tax configuration as of &#x60;invoice_date&#x60;. When passing this parameter, the following prerequisites must be met:

* &#x60;invoice_date&#x60; must be in the past.
* &#x60;invoice_date&#x60; is not more than one calendar month into the past. For example, if today is 13th January, then you cannot pass a value that is earlier than 13th December.
* It is not earlier than &#x60;changes_scheduled_at&#x60;, &#x60;reactivate_from&#x60;, or &#x60;trial_end&#x60;.
* &#x60;invoice_immediately&#x60; is &#x60;true&#x60;.
.

        */
       
      invoice_date?:number;
       
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
        * @description List of coupons to be applied to this subscription. You can provide coupon ids or [coupon codes](https://apidocs.chargebee.com/docs/api/coupon_codes).

        */
       
      coupon_ids?:string[];
       
      /**
        * @description If &#x60;true&#x60; then the existing &#x60;coupon_ids&#x60; list for the subscription is replaced by the one provided. If &#x60;false&#x60; then the provided list gets added to the existing &#x60;coupon_ids&#x60;.

        */
       
      replace_coupon_list?:boolean;
       
      /**
        * @description * When &#x60;true&#x60;: [Prorated credits or charges](https://www.chargebee.com/docs/2.0/proration.html#proration-mechanism) are created as applicable for this change.
* When &#x60;false&#x60;: The subscription is changed without creating any credits or charges.
* When not provided, the value configured in the [site settings](https://www.chargebee.com/docs/2.0/proration.html#proration-for-subscription-change) is considered.

**Caveat**

For further changes within the same billing term, when &#x60;prorate&#x60; is set to &#x60;true&#x60;, **credits** are **not created** when **all** the conditions below hold true:

An immediate previous change was made

* with &#x60;prorate&#x60; set to &#x60;false&#x60; and
* no changes were made to the subscription&#x27;s billing term and
* a change was made to either the subscription&#x27;s items or their prices.

        */
       
      prorate?:boolean;
       
      /**
        * @description Set this to true if you want the update to be applied at the end of the current subscription billing cycle.

        */
       
      end_of_term?:boolean;
       
      /**
        * @description Say the subscription has the renewal date as 28th of every month. When the plan-item price of the subscription is set to one that has the same billing period as the current plan-item price, the subscription change does not change the term. In other words, the subscription still renews on the 28th. Passing this parameter as &#x60;true&#x60; will have the subscription reset its term to the current date (provided &#x60;end_of_term&#x60; is false).  
**Note**: When the new plan-item price has a billing period different from the current plan-item price of the subscription, the term is always reset, regardless of the value passed for this parameter.

        */
       
      force_term_reset?:boolean;
       
      /**
        * @description Applicable only for &#x60;cancelled&#x60; subscriptions. When passed as &#x60;true&#x60;, the canceled subscription is activated; otherwise subscription changes are made without changing its &#x60;status&#x60;. If not passed, subscription will be activated only if &#x60;subscription_items&#x60; is passed.

        */
       
      reactivate?:boolean;
       
      /**
        * @description If true, all the unbilled charges will be included for the invoice estimate.

        */
       
      include_delayed_charges?:boolean;
       
      /**
        * @description The generated invoice_estimate/next_invoice_estimate will include all the balances - Promotional Credits, Refundable Credits, and Excess Payments - if any. If you don&#x27;t want these balances to be included you can specify &#x27;false&#x27; for the parameter *use_existing_balances*.

        */
       
      use_existing_balances?:boolean;
       
      /**
        * @description If there are charges raised immediately for the subscription, this parameter specifies whether those charges are to be invoiced immediately or added to [unbilled charges](https://www.chargebee.com/docs/unbilled-charges.html). The default value is as per the [site settings](https://www.chargebee.com/docs/unbilled-charges.html#configuration).  
**Note:** &#x60;invoice_immediately&#x60; only affects charges that are raised at the time of execution of this API call. Any charges scheduled to be raised in the future are not affected by this parameter. .

        */
       
      invoice_immediately?:boolean;
       
      /**
        * @description Parameters for subscription

        */
       
      subscription?:{auto_collection?:AutoCollection,free_period?:number,free_period_unit?:FreePeriodUnit,id:string,offline_payment_method?:OfflinePaymentMethod,start_date?:number,trial_end?:number,trial_end_action?:TrialEndAction};
       
      /**
        * @description Parameters for billing_address

        */
       
      billing_address?:{city?:string,country?:string,line1?:string,line2?:string,line3?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      /**
        * @description Parameters for shipping_address

        */
       
      shipping_address?:{city?:string,country?:string,line1?:string,line2?:string,line3?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      /**
        * @description Parameters for customer

        */
       
      customer?:{registered_for_gst?:boolean,vat_number?:string,vat_number_prefix?:string};
       
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
    export interface RenewalEstimateResponse {  
       estimate:Estimate;
    }
    export interface RenewalEstimateInputParam {
       
      /**
        * @description This returns an estimate of the amount that will be charged when the subscription is billed next. The estimate is calculated based on the current recurring items of the subscription - plan, addons, and coupons.

In the response,

* **estimate.subscription_estimate** has the current subscription details like its status, next billing date, and so on.
* **estimate.invoice_estimate** has details of the invoice that will be generated at the next billing date.

  The generated invoice estimate will include all the balances - [Promotional Credits](https://www.chargebee.com/docs/promotional-credits.html), Refundable Credits, and Excess Payments - if any. If you don&#x27;t want these balances to be included you can specify &#x27;false&#x27; for the parameter *use_existing_balances*.

  To exclude the [delayed charges](https://www.chargebee.com/docs/charges.html) from the invoice estimate, specify &#x27;false&#x27; for the parameter *include_delayed_charges*.

**Note:**

* This API will not generate a renewal invoice if an [advance invoice](https://www.chargebee.com/docs/advance-invoices.html) is already present for the subscription.
* For &#x27;Non Renewing&#x27; subscriptions, only the [delayed charges](https://www.chargebee.com/docs/charges.html) will be included in the invoice estimate.
* This API is not supported for &#x27;Cancelled&#x27; subscriptions.
* Only the subscription&#x27;s charges will be included. If you have enabled the Consolidated invoicing feature, use the *Upcoming Invoices* estimate available for the Customer object to get the actual estimate invoice for the customer.

        */
        
      include_delayed_charges?:boolean;
       
      /**
        * @description This returns an estimate of the amount that will be charged when the subscription is billed next. The estimate is calculated based on the current recurring items of the subscription - plan, addons, and coupons.

In the response,

* **estimate.subscription_estimate** has the current subscription details like its status, next billing date, and so on.
* **estimate.invoice_estimate** has details of the invoice that will be generated at the next billing date.

  The generated invoice estimate will include all the balances - [Promotional Credits](https://www.chargebee.com/docs/promotional-credits.html), Refundable Credits, and Excess Payments - if any. If you don&#x27;t want these balances to be included you can specify &#x27;false&#x27; for the parameter *use_existing_balances*.

  To exclude the [delayed charges](https://www.chargebee.com/docs/charges.html) from the invoice estimate, specify &#x27;false&#x27; for the parameter *include_delayed_charges*.

**Note:**

* This API will not generate a renewal invoice if an [advance invoice](https://www.chargebee.com/docs/advance-invoices.html) is already present for the subscription.
* For &#x27;Non Renewing&#x27; subscriptions, only the [delayed charges](https://www.chargebee.com/docs/charges.html) will be included in the invoice estimate.
* This API is not supported for &#x27;Cancelled&#x27; subscriptions.
* Only the subscription&#x27;s charges will be included. If you have enabled the Consolidated invoicing feature, use the *Upcoming Invoices* estimate available for the Customer object to get the actual estimate invoice for the customer.

        */
        
      use_existing_balances?:boolean;
       
      /**
        * @description This returns an estimate of the amount that will be charged when the subscription is billed next. The estimate is calculated based on the current recurring items of the subscription - plan, addons, and coupons.

In the response,

* **estimate.subscription_estimate** has the current subscription details like its status, next billing date, and so on.
* **estimate.invoice_estimate** has details of the invoice that will be generated at the next billing date.

  The generated invoice estimate will include all the balances - [Promotional Credits](https://www.chargebee.com/docs/promotional-credits.html), Refundable Credits, and Excess Payments - if any. If you don&#x27;t want these balances to be included you can specify &#x27;false&#x27; for the parameter *use_existing_balances*.

  To exclude the [delayed charges](https://www.chargebee.com/docs/charges.html) from the invoice estimate, specify &#x27;false&#x27; for the parameter *include_delayed_charges*.

**Note:**

* This API will not generate a renewal invoice if an [advance invoice](https://www.chargebee.com/docs/advance-invoices.html) is already present for the subscription.
* For &#x27;Non Renewing&#x27; subscriptions, only the [delayed charges](https://www.chargebee.com/docs/charges.html) will be included in the invoice estimate.
* This API is not supported for &#x27;Cancelled&#x27; subscriptions.
* Only the subscription&#x27;s charges will be included. If you have enabled the Consolidated invoicing feature, use the *Upcoming Invoices* estimate available for the Customer object to get the actual estimate invoice for the customer.

        */
        
      ignore_scheduled_cancellation?:boolean;
       
      /**
        * @description This returns an estimate of the amount that will be charged when the subscription is billed next. The estimate is calculated based on the current recurring items of the subscription - plan, addons, and coupons.

In the response,

* **estimate.subscription_estimate** has the current subscription details like its status, next billing date, and so on.
* **estimate.invoice_estimate** has details of the invoice that will be generated at the next billing date.

  The generated invoice estimate will include all the balances - [Promotional Credits](https://www.chargebee.com/docs/promotional-credits.html), Refundable Credits, and Excess Payments - if any. If you don&#x27;t want these balances to be included you can specify &#x27;false&#x27; for the parameter *use_existing_balances*.

  To exclude the [delayed charges](https://www.chargebee.com/docs/charges.html) from the invoice estimate, specify &#x27;false&#x27; for the parameter *include_delayed_charges*.

**Note:**

* This API will not generate a renewal invoice if an [advance invoice](https://www.chargebee.com/docs/advance-invoices.html) is already present for the subscription.
* For &#x27;Non Renewing&#x27; subscriptions, only the [delayed charges](https://www.chargebee.com/docs/charges.html) will be included in the invoice estimate.
* This API is not supported for &#x27;Cancelled&#x27; subscriptions.
* Only the subscription&#x27;s charges will be included. If you have enabled the Consolidated invoicing feature, use the *Upcoming Invoices* estimate available for the Customer object to get the actual estimate invoice for the customer.

        */
        
      ignore_scheduled_changes?:boolean;
    }
    export interface AdvanceInvoiceEstimateResponse {  
       estimate:Estimate;
    }
    export interface AdvanceInvoiceEstimateInputParam {
       
      /**
        * @description * For &#x60;schedule_type &#x3D; immediate&#x60;: the number of future billing cycles to be invoiced in advance. The invoicing is done for the [&#x60;remaining_billing_cycles&#x60;](subscriptions#subscription_remaining_billing_cycles) of the subscription if that is less than &#x60;terms_to_charge&#x60;.
* For &#x60;schedule_type &#x3D; fixed_intervals&#x60;: The number of future billing cycles in one [interval](advance_invoice_schedules#fixed_interval_schedule). The schedule is created such that the total number of billing cycles in the schedule does not exceed the [remaining_billing_cycles](subscriptions#subscription_remaining_billing_cycles) of the subscription.
.

        */
       
      terms_to_charge?:number;
       
      /**
        * @description Whether the charge should be invoiced immediately or added to [&#x60;unbilled_charges&#x60;](unbilled_charges). Applicable only when [&#x60;schedule_type&#x60;](subscriptions#charge_future_renewals_schedule_type) is &#x60;immediate&#x60;.

        */
       
      invoice_immediately?:boolean;
       
      /**
        * @description The type of advance invoice or advance invoicing schedule. \* immediate - Charge immediately for the number of billing cycles specified by [&#x60;terms_to_charge&#x60;](subscriptions#charge_future_renewals_terms_to_charge). \* specific_dates - Charge on [specific dates](subscriptions#charge_future_renewals_specific_dates_schedule_date). For each date, specify the [number of billing cycles](subscriptions#charge_future_renewals_specific_dates_schedule_terms_to_charge) to charge for. Up to 5 dates can be configured. \* fixed_intervals - Charge at fixed intervals of time. Specify the [number of billing cycles](subscriptions#charge_future_renewals_terms_to_charge) that constitute an interval and the number of [days before each interval](subscriptions#charge_future_renewals_fixed_interval_schedule_days_before_renewal) that the invoice should be generated. Also specify [when the schedule should end](subscriptions#charge_future_renewals_fixed_interval_schedule_end_schedule_on).

        */
       
      schedule_type?:ScheduleType;
       
      /**
        * @description Parameters for fixed_interval_schedule

        */
       
      fixed_interval_schedule?:{days_before_renewal?:number,end_date?:number,end_schedule_on?:EndScheduleOn,number_of_occurrences?:number};
       
      /**
        * @description Parameters for specific_dates_schedule

        */
       
      specific_dates_schedule?:{date?:number,terms_to_charge?:number}[];
    }
    export interface RegenerateInvoiceEstimateResponse {  
       estimate:Estimate;
    }
    export interface RegenerateInvoiceEstimateInputParam {
       
      /**
        * @description The start date of the period being invoiced. The default value is [current_term_start](https://apidocs.chargebee.com/docs/api/subscriptions#subscription_current_term_start ).

        */
       
      date_from?:number;
       
      /**
        * @description The end date of the period being invoiced. The default value is [current_term_end](https://apidocs.chargebee.com/docs/api/subscriptions#subscription_current_term_end ).

        */
       
      date_to?:number;
       
      /**
        * @description Whether the charges should be prorated according to the term specified by &#x60;date_from&#x60; and &#x60;date_to&#x60;. Should not be passed without &#x60;date_from&#x60; and &#x60;date_to&#x60;.

        */
       
      prorate?:boolean;
       
      /**
        * @description Only applicable when [Consolidated Invoicing](https://www.chargebee.com/docs/consolidated-invoicing.html ) is enabled for the customer. Set to &#x60;false&#x60; to leave the current term charge for the subscription as [unbilled](https://www.chargebee.com/docs/unbilled-charges.html ). Once you have done this for all suitable subscriptions of the customer, call [Create an invoice for unbilled charges](https://apidocs.chargebee.com/docs/api/unbilled_charges#create_an_invoice_for_unbilled_charges ) to invoice them.

        */
       
      invoice_immediately?:boolean;
    }
    export interface UpcomingInvoicesEstimateResponse {  
       estimate:Estimate;
    }
    
    export interface ChangeTermEndResponse {  
       estimate:Estimate;
    }
    export interface ChangeTermEndInputParam {
       
      /**
        * @description The time at which the current term should end for this subscription.

        */
       
      term_ends_at:number;
       
      /**
        * @description Applicable for *active* / *non_renewing* subscriptions. If specified as *true* prorated charges / credits will be added during this operation.

        */
       
      prorate?:boolean;
       
      /**
        * @description If there are charges raised immediately for the subscription, this parameter specifies whether those charges are to be invoiced immediately or added to [unbilled charges](https://www.chargebee.com/docs/unbilled-charges.html). The default value is as per the [site settings](https://www.chargebee.com/docs/unbilled-charges.html#configuration).  
**Note:** &#x60;invoice_immediately&#x60; only affects charges that are raised at the time of execution of this API call. Any charges scheduled to be raised in the future are not affected by this parameter. .

        */
       
      invoice_immediately?:boolean;
    }
    export interface CancelSubscriptionForItemsResponse {  
       estimate:Estimate;
    }
    export interface CancelSubscriptionForItemsInputParam {
       
      /**
        * @description Set this to &#x60;true&#x60; if you want to cancel the subscription at the end of the current subscription billing cycle. The subscription &#x60;status&#x60; changes to &#x60;non_renewing&#x60;.

        */
       
      end_of_term?:boolean;
       
      /**
        * @description Specify the date/time at which you want to cancel the subscription. This parameter should not be provided when &#x60;end_of_term&#x60; is passed as &#x60;true&#x60;. &#x60;cancel_at&#x60; can be set to a value in the past. This is called backdating. Use backdating when the subscription has been canceled already but its billing has been delayed. The following prerequisites must be met to allow backdating:

* Backdating must be enabled for subscription cancellation.
* The current day of the month does not exceed the limit set in Chargebee for backdating subscription cancellation. This limit is typically the day of the month by which the accounting for the previous month must be closed.
* The date is on or after &#x60;current_term_start&#x60;.
* The date is on or after the last date/time any of the following changes were made:
  * Changes in the recurring items or their prices.
  * Addition of non-recurring items.
* The date is not more than duration X into the past where X is the billing period of the plan. For example, if the period of the subscription&#x27;s plan is 2 months and today is 14th April, &#x60;changes_scheduled_at&#x60; cannot be earlier than 14th February.
.

        */
       
      cancel_at?:number;
       
      /**
        * @description For immediate cancellation (&#x60;end_of_term&#x60; &#x3D; &#x60;false&#x60;), specify how to provide credits for current term charges. When not provided, the [site default](https://www.chargebee.com/docs/cancellations.html#configure-subscription-cancellation) is considered. \* none - No credits notes are created. \* full - Credits are issues for the full value of the current term charges. \* prorate - Prorated credits are issued.

        */
       
      credit_option_for_current_term_charges?:CreditOptionForCurrentTermCharges;
       
      /**
        * @description For immediate cancellation (&#x60;end_of_term&#x60; &#x3D; &#x60;false&#x60;), specify how to handle any unbilled charges. When not provided, the [site default](https://www.chargebee.com/docs/cancellations.html#configure-subscription-cancellation) is considered. \* invoice - An invoice is generated immediately with the unbilled charges. \* delete - The unbilled charges are deleted.

        */
       
      unbilled_charges_option?:UnbilledChargesOption;
       
      /**
        * @description Applicable when the subscription has past due invoices. Specify this if you want to close the due invoices of the subscription. If specified as schedule_payment_collection/write_off, the due invoices of the subscription will be qualified for the selected operation after the remaining refundable credits and excess payments are applied. **Note:** The payment collection attempt will be asynchronous. Not applicable when &#x27;end_of_term&#x27; is true. \* no_action - No action is taken. \* write_off - The amount due in the invoices will be written-off. Credit notes created due to write-off will not be sent in the response. \* schedule_payment_collection - An automatic charge for the due amount of the past invoices will be attempted on the payment method available, if customer&#x27;s auto-collection property is &#x27;ON&#x27;.

        */
       
      account_receivables_handling?:AccountReceivablesHandling;
       
      /**
        * @description Applicable when the customer has remaining refundable credits(issued against online payments). If specified as schedule_refund, the refund will be initiated for these credits after they are applied against the subscription&#x27;s past due invoices if any. **Note:** The refunds initiated will be asynchronous. Not applicable when &#x27;end_of_term&#x27; is true. \* schedule_refund - Initiates refund of the remaining credits. \* no_action - No action is taken.

        */
       
      refundable_credits_handling?:RefundableCreditsHandling;
       
      /**
        * @description Cancels the current contract term.

* &#x60;terminate_immediately&#x60; immediately does the following:
  * sets the contract term [&#x60;status&#x60;](contract_terms#contract_term_status) to &#x60;terminated&#x60;.
  * Cancels the subscription.
  * Collects any [termination fee](contract_terms#termintation_fee).
* &#x60;end_of_contract_term&#x60; Sets the [&#x60;contract_term[action_at_term_end]&#x60;](contract_terms#contract_term_action_at_term_end) to &#x60;cancel&#x60;. In other words, the contract term is not renewed and the subscription is canceled at the end of the contract term.
. \* terminate_immediately - Terminate immediately \* end_of_contract_term - End of contract term

        */
       
      contract_term_cancel_option?:ContractTermCancelOption;
       
      /**
        * @description The document date displayed on the invoice PDF. The default value is the current date. Provide this value to backdate the invoice. Backdating an invoice is done for reasons such as booking revenue for a previous date or when the subscription is effective as of a past date. Moreover, if &#x60;create_pending_invoices&#x60; is &#x60;true&#x60;, and if the site is configured to set invoice dates to date of closing, then upon invoice closure, this date is changed to the invoice closing date. &#x60;taxes&#x60; and &#x60;line_item_taxes&#x60; are computed based on the &#x60;tax&#x60; configuration as of &#x60;invoice_date&#x60;. When passing this parameter, the following prerequisites must be met:

* &#x60;invoice_date&#x60; must be in the past.
* &#x60;invoice_date&#x60; is not more than one calendar month into the past. For example, if today is 13th January, then you cannot pass a value that is earlier than 13th December.
* It is not earlier than &#x60;cancel_at&#x60;.
.

        */
       
      invoice_date?:number;
       
      /**
        * @description Reason code for canceling the subscription. Must be one from a list of reason codes set in the Chargebee app in **Settings \&gt; Configure Chargebee \&gt; Reason Codes \&gt; Subscriptions \&gt; Subscription Cancellation**. Must be passed if set as mandatory in the app. The codes are case-sensitive.

        */
       
      cancel_reason_code?:string;
       
      /**
        * @description Parameters for subscription_items

        */
       
      subscription_items?:{item_price_id?:string,quantity?:number,quantity_in_decimal?:string,service_period_days?:number,unit_price?:number,unit_price_in_decimal?:string}[];
    }
    export interface PauseSubscriptionResponse {  
       estimate:Estimate;
    }
    export interface PauseSubscriptionInputParam {
       
      /**
        * @description List of options to pause the subscription. \* billing_cycles -

Pause at the end of the current term, and resume automatically after the number of billing cycles you specify in [skip_billing_cycles](/docs/api/estimates?prod_cat_ver&#x3D;2#pause_subscription_estimate_subscription_skip_billing_cycles)
\* immediately - Pause immediately
\* end_of_term - Pause at the end of current term
\* specific_date - Pause on a specific date

        */
       
      pause_option?:PauseOption;
       
      /**
        * @description Applicable when unbilled charges are present for the subscription and [pause_option](/docs/api/estimates#pause_subscription_estimate_pause_option) is set as &#x60;immediately&#x60;. **Note:** On the invoice raised, an automatic charge is attempted on the payment method available, if customer&#x27;s auto-collection property is set to &#x60;on&#x60;.
\* invoice -

Invoice charges

If &#x60;invoice&#x60; is chosen, an automatic charge is attempted on the payment method available if the customer has enabled auto-collection. If a payment collection fails or when auto-collection is not enabled, the invoice is closed as unpaid.
\* no_action -

Retain as unbilled

If &#x60;no_action&#x60; is chosen, charges are added to the resumption invoice.

        */
       
      unbilled_charges_handling?:UnbilledChargesHandling;
       
      /**
        * @description Parameters for subscription

        */
       
      subscription?:{pause_date?:number,resume_date?:number,skip_billing_cycles?:number};
    }
    export interface ResumeSubscriptionResponse {  
       estimate:Estimate;
    }
    export interface ResumeSubscriptionInputParam {
       
      /**
        * @description List of options to resume the subscription. \* immediately - Resume immediately \* specific_date - Resume on a specific date

        */
       
      resume_option?:ResumeOption;
       
      /**
        * @description Applicable when charges get added during this operation and **resume_option** is set as &#x27;immediately&#x27;. Allows to raise invoice immediately or add them to unbilled charges. \* add_to_unbilled_charges - Add to unbilled charges \* invoice_immediately - Invoice immediately

        */
       
      charges_handling?:ChargesHandling;
       
      /**
        * @description Parameters for subscription

        */
       
      subscription?:{resume_date?:number};
    }
    export interface GiftSubscriptionForItemsResponse {  
       estimate:Estimate;
    }
    export interface GiftSubscriptionForItemsInputParam {
       
      /**
        * @description List of coupons to be applied to this subscription. You can provide coupon ids or coupon codes.

        */
       
      coupon_ids?:string[];
       
      /**
        * @description Parameters for gift

        */
       
      gift?:{auto_claim?:boolean,claim_expiry_date?:number,no_expiry?:boolean,scheduled_at?:number};
       
      /**
        * @description Parameters for gifter

        */
       
      gifter?:{customer_id:string,note?:string,payment_src_id?:string,signature:string};
       
      /**
        * @description Parameters for gift_receiver

        */
       
      gift_receiver?:{customer_id:string,email:string,first_name:string,last_name:string};
       
      /**
        * @description Parameters for payment_intent

        */
       
      payment_intent?:{additional_information?:object,gateway_account_id?:string,gw_token?:string,id?:string,payment_method_type?:'giropay' | 'ideal' | 'sepa_instant_transfer' | 'google_pay' | 'netbanking_emandates' | 'dotpay' | 'boleto' | 'direct_debit' | 'faster_payments' | 'sofort' | 'upi' | 'venmo' | 'amazon_payments' | 'apple_pay' | 'bancontact' | 'paypal_express_checkout' | 'pay_to' | 'card',reference_id?:string};
       
      /**
        * @description Parameters for shipping_address

        */
       
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      /**
        * @description Parameters for subscription_items

        */
       
      subscription_items?:{item_price_id?:string,quantity?:number,quantity_in_decimal?:string}[];
    }
    export interface CreateInvoiceForItemsResponse {  
       estimate:Estimate;
    }
    export interface CreateInvoiceForItemsInputParam {
       
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
        * @description Parameters for invoice

        */
       
      invoice?:{customer_id?:string,po_number?:string,subscription_id?:string};
       
      /**
        * @description Parameters for shipping_address

        */
       
      shipping_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
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
    
  }
}