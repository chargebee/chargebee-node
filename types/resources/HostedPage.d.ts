///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface HostedPage {
    
    /**
      * @description Unique identifier generated for each hosted page requested.

      */
    
    id?:string;
    
    /**
      * @description Type of the requested hosted page. \* collect_now - Collect Unpaid Invoices for a Customer \* checkout_gift - Checkout a gift subscription \* checkout_new - Checkout new Subscription \* extend_subscription - To extend a Subscription period \* checkout_one_time - Checkout one time \* update_payment_method - Update Payment Method for a Customer \* view_voucher - View Details of a voucher \* pre_cancel - This hosted page is used to help retain customers when they attempt to cancel their account or subscription. \* manage_payment_sources - Manage Payments for a customer \* checkout_existing - Checkout existing Subscription \* claim_gift - Claim a gift subscription

      */
    
    type?:'update_payment_method' | 'checkout_one_time' | 'manage_payment_sources' | 'checkout_new' | 'view_voucher' | 'collect_now' | 'checkout_existing' | 'extend_subscription' | 'pre_cancel';
    
    /**
      * @description Unique URL for the hosted page that will be included in your website.

      */
    
    url?:string;
    
    /**
      * @description Indicating the current state of the hosted page resource. \* acknowledged - Indicates the succeeded hosted page is acknowledged. \* created - Indicates the hosted page is just created. \* requested - Indicates the hosted page is requested by the website \* cancelled - Indicates the page is cancelled by the end user after requesting it. \* succeeded - Indicates the hosted page is successfully submitted by the user and response is sent to the return url.

      */
    
    state?:'requested' | 'acknowledged' | 'created' | 'cancelled' | 'succeeded';
    
    /**
      * @description You can pass through any content specific to the hosted page request and get it back after user had submitted the hosted page.

      */
    
    pass_thru_content?:string;
    
    /**
      * @description Indicates when this hosted page url is generated.

      */
    
    created_at?:number;
    
    /**
      * @description Indicates when this hosted page url will expire. After this, the hosted page cannot be accessed.

      */
    
    expires_at?:number;
    
    /**
      * @description This attribute will be returned only during retrieve hosted page API call and also the retrieved hosted page resource state should be either in &quot;succeeded&quot; or &quot;cancelled&quot; state.  
If hosted page state is &quot;succeeded&quot;, then the subscription, customer, card \&amp; invoice(optional) resources during checkout can be obtained.   
If hosted page is state is &quot;cancelled&quot;, then it will be empty i.e no information about checkout.

      */
    
    content:object;
    
    /**
      * @description Timestamp indicating when this hosted page was last updated.

      */
    
    updated_at?:number;
    
    /**
      * @description The version number of this resource. For every change made to the resource, &#x60;resource_version&#x60; is updated with a new timestamp in milliseconds.

      */
    
    resource_version?:number;
    
    /**
      * @description Customer Info (email, first name and last name) given in the checkout page used for tracking abandoned carts.  
[Learn more](https://www.chargebee.com/docs/abandoned-carts.html)

      */
    
    checkout_info?:object;
    
    /**
      * @description The unique ID of the [business entity](/docs/api/advanced-features?prod_cat_ver&#x3D;2#mbe) of this &#x60;hosted_page&#x60;.

      */
    
    business_entity_id?:string;
  }
  export namespace HostedPage {
    export class HostedPageResource {  
      /**
        * @description Create a Chargebee hosted page to accept payment details from a customer and checkout [charge-items](./items?prod_cat_ver&#x3D;2) and [one-time charges](./invoices?prod_cat_ver&#x3D;2#create_invoice_for_items_and_one-time_charges).

The following steps describe how best to use this API:

1. Call this endpoint, providing [item prices](./item_prices?prod_cat_ver&#x3D;2), [charges](./items?prod_cat_ver&#x3D;2), [coupons](./coupons?prod_cat_ver&#x3D;2) and a host of other details such as billing and shipping addresses of the customer, to be prefilled on the checkout page.
2. Send the customer to the Checkout &#x60;url&#x60; received in the response.
3. Once they complete checkout, the set of charge-items and one-time charges are automatically invoiced against the respective &#x60;customer&#x60; record in Chargebee, and they are redirected to the &#x60;redirect_url&#x60; with the &#x60;id&#x60; and &#x60;state&#x60; attributes passed as query string parameters.
4. [Retrieve the hosted page](./hosted_pages?prod_cat_ver&#x3D;2#retrieve_a_hosted_page) at this stage to get the invoice details.

#### Customer resource lookup and creation {#customer_lookup1}

When [customer[id]](/docs/api/hosted_pages#checkout_charge_items_and_one_time_charges_customer_id) is provided for this operation, it is looked up by Chargebee, and if found, the hosted_page is created for it. If not found, a new customer resource is created with the ID provided, and the hosted_page is created.

##### Multiple business entities

If multiple [business entities](/docs/api/advanced-features#mbe) are created for the site, the customer resource lookup and creation happen within the [context](/docs/api/advanced-features#mbe-context) of the business entity [specified](/docs/api/advanced-features#mbe-header-main) in this API call. If no business entity is specified, the customer resource lookup is performed within the [site context](/docs/api/advanced-features#mbe-context) , and if not found, the resource is created for the [default business entity](/docs/api/advanced-features#mbe-default-be) of the site.

        */
      
      checkout_one_time_for_items(input?:CheckoutOneTimeForItemsInputParam):ChargebeeRequest<CheckoutOneTimeForItemsResponse>;
       
      /**
        * @description Create a Chargebee hosted page to accept payment details from a customer and checkout a new subscription.

The following steps describe how best to use this API:

1. Call this endpoint, providing [item prices](./item_prices?prod_cat_ver&#x3D;2), [coupons](./coupons?prod_cat_ver&#x3D;2) and a host of other details such as billing and shipping addresses to be prefilled for the customer on the checkout page.
2. Send the customer to the Checkout &#x60;url&#x60; received in the response.
3. Once they complete checkout, a new subscription is automatically created and the customer is redirected to the &#x60;redirect_url&#x60; with the &#x60;id&#x60; and &#x60;state&#x60; attributes passed as query string parameters.  
   Although the customer will be redirected to the &#x60;redirect_url&#x60; after successful checkout, we do not recommend relying on it for completing critical post-checkout actions. This is because redirection may not happen due to unforeseen reasons. Chargebee recommends listening to appropriate webhooks such as [subscription_created](./events#subscription_created) or [invoice_generated](./events#invoice_generated) to verify a successful checkout.
4. [Retrieve the hosted page](./hosted_pages?prod_cat_ver&#x3D;2#retrieve_a_hosted_page) at this stage to get the subscription and invoice details.



#### Customer resource lookup and creation {#customer_lookup2}

When the [customer[id]](/docs/api/hosted_pages#create_checkout_for_a_new_subscription_customer_id) parameter is provided and if a customer resource with the ID is found to be already created in Chargebee, the subscription is created under that customer resource. If not found, then a new customer resource is created with the ID provided and the subscription is created under it.

##### Multiple business entities

If multiple [business entities](/docs/api/advanced-features?prod_cat_ver&#x3D;2#mbe) are created for the site, the customer resource lookup and creation happen within the [context](/docs/api/advanced-features#mbe-context) of the business entity [specified](/docs/api/advanced-features#mbe-header-main) in this API call. If no business entity is specified, the customer resource lookup is performed within the [site context](/docs/api/advanced-features#mbe-context), and if not found, the resource is created for the [default business entity](/docs/api/advanced-features#mbe-default-be) of the site.

        */
      
      checkout_new_for_items(input?:CheckoutNewForItemsInputParam):ChargebeeRequest<CheckoutNewForItemsResponse>;
       
      /**
        * @description Create a Chargebee hosted page to accept payment details from a customer and checkout to update the subscription.

The following steps describe how best to use this API:

1. Provide [item prices](./item_prices?prod_cat_ver&#x3D;2), [coupons](./coupons?prod_cat_ver&#x3D;2) and a host of other details such as billing and shipping addresses to be prefilled for the customer on the checkout page.
2. Send the customer to the Checkout &#x60;url&#x60; received in the response. They can now add a payment method or use an existing one, to complete the checkout.
3. The subscription is updated and the customer is redirected to the &#x60;redirect_url&#x60; with the &#x60;id&#x60; and &#x60;state&#x60; attributes passed as query string parameters.  
   Although the customer will be redirected to the &#x60;redirect_url&#x60; after successful checkout, we do not recommend relying on it for completing critical post-checkout actions. This is because redirection may not happen due to unforeseen reasons. Chargebee recommends listening to appropriate webhooks such as [subscription_created](./events#subscription_created) or [invoice_generated](./events#invoice_generated) to verify a successful checkout.
4. [Retrieve the hosted page](./hosted_pages?prod_cat_ver&#x3D;2#retrieve_a_hosted_page) at this stage to get the subscription and invoice details.




        */
      
      checkout_existing_for_items(input?:CheckoutExistingForItemsInputParam):ChargebeeRequest<CheckoutExistingForItemsResponse>;
       
      /**
        * @description **Note:** If you&#x27;re using [In-App Checkout](https://www.chargebee.com/docs/2.0/checkout.html), use [Manage Payment Sources API](/docs/api/hosted_pages#manage_payment_sources) to request your customers to update their payment method details or change their payment method.

Using this API, you can request your customers to update their payment method details or change their payment method. This is used in scenarios like customers updating their payment methods before the end of trial or customers switching among payment methods.

When this API is invoked, it returns a hosted page URL. When the customers are directed to this URL, they will be able to change/update their payment methods.

Depending on the payment methods (Card, PayPal Express Checkout, Amazon Payments) that you offer your customers, they will find options to switch among the various methods of payment.
**Note:**

* If the card\[gateway\] parameter is passed, and the customer chooses Card as a payment method, then the card details are stored in the gateway which is passed. However, if the card\[gateway\] parameter is passed and the customer chooses PayPal Express Checkout/Amazon Payments as a payment method, the gateway passed will be ignored.
* The option of embedding into an iframe is not supported for PayPal Express Checkout and Amazon Payments as customers are redirected to the respective website pages. Hence if you have PayPal Express Checkout/Amazon Payments configured and pass the parameter embed&#x3D;true, this will result in an unsuccessful API request. Also, if you have all the three payment methods (Card, Paypal Express Checkout and Amazon Payments) configured and pass the parameter embed&#x3D;true, the returned hosted page URL will show only Card Payment as a payment method.

        */
      
      update_payment_method(input?:UpdatePaymentMethodInputParam):ChargebeeRequest<UpdatePaymentMethodResponse>;
       
      /**
        * @description This API generates a hosted page URL to add new or update existing payment sources for the customer.

        */
      
      manage_payment_sources(input?:ManagePaymentSourcesInputParam):ChargebeeRequest<ManagePaymentSourcesResponse>;
       
      /**
        * @description This API generates a hosted page URL to collect due payments for the customer.

        */
      
      collect_now(input?:CollectNowInputParam):ChargebeeRequest<CollectNowResponse>;
       
      /**
        * @description This API generates a hosted page URL for the customer to accept a quote. If the hosted page URL has expired, a new URL will be generated automatically.

        */
      
      accept_quote(input?:AcceptQuoteInputParam):ChargebeeRequest<AcceptQuoteResponse>;
       
      /**
        * @description This API generates a hosted page URL to extend the billing cycle of a subscription.

        */
      
      extend_subscription(input?:ExtendSubscriptionInputParam):ChargebeeRequest<ExtendSubscriptionResponse>;
       
      /**
        * @description Creates a hosted page for a customer (called the gifter) to gift a subscription to another customer (called the receiver).

#### Gifter customer resource lookup and creation {#gifter_lookup}

When [gifter[customer_id]](/docs/api/hosted_pages#checkout_gift_subscription_for_items_gifter_customer_id) is provided, it is looked up in Chargebee when the gifter completes the hosted page checkout. If not found, a new customer resource is created with this ID.

##### Multiple business entities

If multiple [business entities](/docs/api/advanced-features?prod_cat_ver&#x3D;2#mbe) are created for the site, the lookup and creation of the gifter customer resource happen within the [context](/docs/api/advanced-features#mbe-context) of the business entity specified in this API call. If no business entity is [specified](/docs/api/advanced-features#mbe-header-main), the customer resource lookup is performed within the [site context](/docs/api/advanced-features#mbe-context), and if not found, the resource is created for the [default business entity](/docs/api/advanced-features#mbe-default-be) of the site.

#### Gift receiver customer resource lookup and creation {#receiver_lookup}

Once the gifter checks out using the hosted page returned by this endpoint, Chargebee checks if a customer resource with the receiver&#x27;s email address exists. The first such customer record is considered the receiver&#x27;s customer resource. A new customer resource is created for the receiver if none are found.

##### Multiple business entities

If multiple [business entities](/docs/api/advanced-features?prod_cat_ver&#x3D;2#mbe) are created for the site, the lookup and creation of the gift receiver&#x27;s customer resource happen within the [context](/docs/api/advanced-features#mbe-context) of the business entity of the gifter

        */
      
      checkout_gift_for_items(input?:CheckoutGiftForItemsInputParam):ChargebeeRequest<CheckoutGiftForItemsResponse>;
       
      /**
        * @description This API generates a hosted page URL to claim a gifted subscription.

        */
      
      claim_gift(input?:ClaimGiftInputParam):ChargebeeRequest<ClaimGiftResponse>;
       
      /**
        * @description This is applicable only for Direct Debit via SEPA, Bacs, Bg Autogiro, BECS (for both Australia and New Zealand) and PAD. For Direct Debit, the customer needs to accept an agreement that allows the merchant to debit their bank account. This agreement PDF allows you to easily display scheme-rules compliant Direct Debit mandates to your customers.

This API retrieves the redirect link to the corresponding agreement for customers. The agreement PDF can be your &quot;Thank You&quot; page or sent by email to customers. Communicating this PDF to your customers is mandatory.

Customer locale is used to generate the PDF in the required language. If a customer language is not supported, the PDF is generated in English. Checkout the [list of languages](https://developer.gocardless.com/api-reference/#mandate-pdfs-create-a-mandate-pdf) supported by GoCardless.

        */
      
      retrieve_agreement_pdf(input:RetrieveAgreementPdfInputParam):ChargebeeRequest<RetrieveAgreementPdfResponse>;
       
      /**
        * @description When a hosted page is successfully completed by the user and processed by Chargebee, its [&#x60;state&#x60;](hosted_pages#hosted_page_state) is automatically changed to &#x60;succeeded&#x60;. Acknowledging a hosted page confirms that you have moved the customer details from Chargebee into your system and are ready to fulfill it. This API is used to acknowledge the hosted page in &#x60;succeeded&#x60; state and change its state to &#x60;acknowledged&#x60;.  

**Note:** The hosted page status must be succeeded for this API call to be allowed.

        */
      
      acknowledge(hosted_page_id:string):ChargebeeRequest<AcknowledgeResponse>;
       
      /**
        * @description When you retrieve a hosted page whose &#x60;status&#x60; is &#x60;successful&#x60;, the &#x60;content&#x60; attribute has the following objects based on the &#x60;type&#x60; of the hosted page.

|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **&#x60;type&#x60; of hosted page** | **&#x60;content&#x60; attribute constituents**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| &#x60;checkout_new&#x60;            | * &#x60;customer&#x60;: the object representing the details of the [Customer](/docs/api/customers#customer_attributes) for whom the subscription was created. * &#x60;subscription&#x60;: the new Subscription object created. * &#x60;card&#x60;: the [Card](/docs/api/cards#card_attributes) object if the [payment method](/docs/api/customers#customer_payment_method) &#x60;type&#x60; used was &#x60;card&#x60;. * &#x60;invoice&#x60;: the Invoice object, if an invoice was generated.                                                                                                                                                            |
| &#x60;checkout_existing&#x60;       | * &#x60;customer&#x60;: the object representing the details of the [Customer](/docs/api/customers#customer_attributes) whose subscription was changed. * &#x60;subscription&#x60;: the updated Subscription object created. * &#x60;card&#x60;: the [Card](/docs/api/cards#card_attributes) object if the [payment method](/docs/api/customers#customer_payment_method) &#x60;type&#x60; used was &#x60;card&#x60;. * &#x60;invoice&#x60;: the Invoice object, if an invoice was generated for the subscription change.                                                                                                                                   |
| &#x60;update_payment_method&#x60;   | * &#x60;customer&#x60;: the object representing the details of the [Customer](/docs/api/customers#customer_attributes) whose subscription was changed. * &#x60;card&#x60;: the [Card](/docs/api/cards#card_attributes) object if the new [payment method](/docs/api/customers#customer_payment_method) added was of &#x60;type&#x60; &#x60;card&#x60;.                                                                                                                                                                                                                                                                                |
| &#x60;pre_cancel&#x60;              | &#x60;retention&#x60;: Use the &#x60;bypass&#x60; flag in this object to route the cancellation flow to the merchants&#x27; portal or the Chargebee Retention. * If &#x60;bypass&#x60; flag is &#x60;true&#x60;, you should route the end-customers to your native cancellation flow. * If the &#x60;bypass&#x60; flag is &#x60;false&#x60;, you should route the end-customers to the hosted page URL. **Note:** Retention is currently in &#x60;beta&#x60;. To enable Retention, [Contact Support.](https://support.chargebee.com/support/home)                                                                                                                        |
| &#x60;collect_now&#x60;             | * &#x60;transactions&#x60;: this object should contain a list of [transactions](/docs/api/transactions#transaction_attributes) triggered from the &#x60;collect_now&#x60; hosted page. Each transaction in the list should be represented as an array that includes relevant information about the transaction, such as transaction ID, customer ID, amount, currency, payment method, and any other relevant details. * &#x60;customer&#x60;: this object should contain the customer record associated with the transaction. The key, &#x60;customer_id&#x60; is used to link the transaction to the corresponding customer record. |


        */
      
      retrieve(hosted_page_id:string):ChargebeeRequest<RetrieveResponse>;
       
      /**
        * @description This API retrieves the list of hosted page resources.

        */
      
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
       
      /**
        * @description Creates a &#x60;hosted_page&#x60; resource of &#x60;type&#x60; &#x60;pre_cancel&#x60;. Route canceling users to this page to provide them a retention experience and start saving revenue.  
The hosted page is created in accordance with the retention experience [configured in the Chargebee Retention app](https://help.brightback.com/article/239-steps-to-get-brightback-ready-to-launch-for-chargebee-billing-merchants), along with the data provided as input to this endpoint. Call the endpoint before your customer clicks the **Cancel** button, and when they do, route them to the [url](https://apidocs.chargebee.com/docs/api/hosted_pages#hosted_page_url) in the endpoint response.

        */
      
      pre_cancel(input?:PreCancelInputParam):ChargebeeRequest<PreCancelResponse>;
       
      /**
        * @description Use this API to notify Chargebee about important events that occur on your web pages, such as subscription cancellations. An event contains data about affected resources and additional details such as when the change occurred.

        */
      
      events(input:EventsInputParam):ChargebeeRequest<EventsResponse>;
       
      /**
        * @description Creates a &#x60;hosted_page&#x60; resource of type, &#x60;view_voucher&#x60;. When your end customers choose the Boleto payment method, you can generate a voucher for their pending invoice. Using this API, you can create a voucher_detail hosted page for your customers and email them a link to this hosted page. Your customers can review the voucher details on the page by clicking the link in the email.

        */
      
      view_voucher(input?:ViewVoucherInputParam):ChargebeeRequest<ViewVoucherResponse>;
    }
    export interface CheckoutOneTimeForItemsResponse {  
       hosted_page:HostedPage;
    }
    export interface CheckoutOneTimeForItemsInputParam {
       
      /**
        * @description Sets the [context]() for this operation to the [business entity](/docs/api/advanced-features?prod_cat_ver&#x3D;2#mbe) specified. Applicable only when multiple business entities have been created for the site. When this parameter is provided, the operation is able to read/write data associated only to the business entity specified. When not provided, the operation can read/write data for the entire site.  
**Note**

An alternative way of passing this parameter is by means of a [custom HTTP header](/docs/api/advanced-features?prod_cat_ver&#x3D;2#mbe-header-main).  
**See also**

[Customer resource lookup and creation.](/docs/api/hosted_pages#customer_lookup1)

        */
       
      business_entity_id?:string;
       
      /**
        * @description Specifies the checkout layout that overrides the default checkout layout configured in the Checkout \&amp; Self-Serve Portal settings. . \* in_app - Indicates in-app checkout version \* full_page - Indicates full page checkout version

        */
       
      layout?:Layout;
       
      /**
        * @description A note for this particular invoice. This, and [all other notes](/docs/api/invoices#invoice_notes) for the invoice are displayed on the PDF invoice sent to the customer.

        */
       
      invoice_note?:string;
       
      /**
        * @description List of Coupons to be added.

        */
       
      coupon_ids?:string[];
       
      /**
        * @description The currency code (ISO 4217 format) of the invoice amount.

        */
       
      currency_code?:string;
       
      /**
        * @description The customers will be redirected to this URL upon successful checkout. The hosted page id and state will be passed as parameters to this URL.  

**Note** :

* Although the customer will be redirected to the &#x60;redirect_url&#x60; after successful checkout, we do not recommend relying on it for completing critical post-checkout actions. This is because redirection may not happen due to unforeseen reasons such as user closing the tab, or exiting the browser, and so on. If there is any synchronization that you are doing after the redirection, you will have to have a backup. Chargebee recommends listening to appropriate webhooks such as [&#x60;subscription_created&#x60;](https://apidocs.chargebee.com/docs/api/events#subscription_created) or [&#x60;invoice_generated&#x60;](https://apidocs.chargebee.com/docs/api/events#invoice_generated)to verify a successful checkout.
* Redirect URL configured in Settings \&gt; Hosted Pages Settings would be overriden by this redirect URL.
* *Eg :* *http://yoursite.com?id&#x3D;* *\&lt;hosted_page_id\&gt;\&amp;state&#x3D;succeeded*
* This parameter is not applicable for iframe messaging.

        */
       
      redirect_url?:string;
       
      /**
        * @description The customers will be redirected to this URL upon canceling checkout. The hosted page id and state will be passed as parameters to this URL.   

**Note** :

* Cancel URL configured in Settings \&gt; Hosted Pages Settings would be overriden by this cancel URL.  
  *Eg : http://yoursite.com?id&#x3D;\&lt;hosted_page_id\&gt;\&amp;state&#x3D;cancelled*
* This parameter is not applicable for iframe messaging and [in-app](https://www.chargebee.com/docs/2.0/checkout.html) checkout.

        */
       
      cancel_url?:string;
       
      /**
        * @description You can pass through any content specific to the hosted page request and get it back after user had submitted the hosted page.

        */
       
      pass_thru_content?:string;
       
      /**
        * @description Parameters for customer

        */
       
      customer?:object;
       
      /**
        * @description Parameters for invoice

        */
       
      invoice?:{po_number?:string};
       
      /**
        * @description Parameters for card

        */
       
      card?:{gateway_account_id?:string};
       
      /**
        * @description Parameters for billing_address

        */
       
      billing_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
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
        * @description Parameters for discounts

        */
       
      discounts?:{amount?:number,apply_on:ApplyOn,item_price_id?:string,percentage?:number}[];
       
      /**
        * @description Parameters for entity_identifiers

        */
       
      entity_identifiers?:{id?:string,operation?:Operation,scheme?:string,standard?:string,value?:string}[];
    }
    export interface CheckoutNewForItemsResponse {  
       hosted_page:HostedPage;
    }
    export interface CheckoutNewForItemsInputParam {
       
      /**
        * @description Specifies the checkout layout that overrides the default checkout layout configured in the Checkout \&amp; Self-Serve Portal settings. . \* in_app - Indicates in-app checkout version \* full_page - Indicates full page checkout version

        */
       
      layout?:Layout;
       
      /**
        * @description Sets the [context]() for this operation to the [business entity](/docs/api/advanced-features?prod_cat_ver&#x3D;2#mbe) specified. Applicable only when multiple business entities have been created for the site. When this parameter is provided, the operation is able to read/write data associated only to the business entity specified. When not provided, the operation can read/write data for the entire site.  
**Note**

An alternative way of passing this parameter is by means of a [custom HTTP header](/docs/api/advanced-features?prod_cat_ver&#x3D;2#mbe-header-main).  
**See also**

[Customer resource lookup and creation.](/docs/api/hosted_pages#customer_lookup2)

        */
       
      business_entity_id?:string;
       
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
        * @description List of coupons to be applied to this subscription. You can provide coupon ids or [coupon codes](https://apidocs.chargebee.com/docs/api/coupon_codes).

        */
       
      coupon_ids?:string[];
       
      /**
        * @description The customers will be redirected to this URL upon successful checkout. The hosted page id and state will be passed as parameters to this URL.  

**Note** :

* Although the customer will be redirected to the &#x60;redirect_url&#x60; after successful checkout, we do not recommend relying on it for completing critical post-checkout actions. This is because redirection may not happen due to unforeseen reasons such as user closing the tab, or exiting the browser, and so on. If there is any synchronization that you are doing after the redirection, you will have to have a backup. Chargebee recommends listening to appropriate webhooks such as [&#x60;subscription_created&#x60;](https://apidocs.chargebee.com/docs/api/events#subscription_created) or [&#x60;invoice_generated&#x60;](https://apidocs.chargebee.com/docs/api/events#invoice_generated)to verify a successful checkout.
* Redirect URL configured in Settings \&gt; Hosted Pages Settings would be overriden by this redirect URL.
* *Eg :* *http://yoursite.com?id&#x3D;* *\&lt;hosted_page_id\&gt;\&amp;state&#x3D;succeeded*
* This parameter is not applicable for iframe messaging.

        */
       
      redirect_url?:string;
       
      /**
        * @description The customers will be redirected to this URL upon canceling checkout. The hosted page id and state will be passed as parameters to this URL.   

**Note** :

* Cancel URL configured in Settings \&gt; Hosted Pages Settings would be overriden by this cancel URL.  
  *Eg : http://yoursite.com?id&#x3D;\&lt;hosted_page_id\&gt;\&amp;state&#x3D;cancelled*
* This parameter is not applicable for iframe messaging and [in-app](https://www.chargebee.com/docs/2.0/checkout.html) checkout.

        */
       
      cancel_url?:string;
       
      /**
        * @description You can pass through any content specific to the hosted page request and get it back after user had submitted the hosted page.

        */
       
      pass_thru_content?:string;
       
      /**
        * @description Allow the customer to select an offline payment method during checkout. The choice of payment methods can be configured via the Chargebee UI.

        */
       
      allow_offline_payment_methods?:boolean;
       
      /**
        * @description Parameters for subscription

        */
       
      subscription?:object;
       
      /**
        * @description Parameters for customer

        */
       
      customer?:object;
       
      /**
        * @description Parameters for card

        */
       
      card?:{gateway_account_id?:string};
       
      /**
        * @description Parameters for billing_address

        */
       
      billing_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
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
       
      /**
        * @description Parameters for entity_identifiers

        */
       
      entity_identifiers?:{id?:string,operation?:Operation,scheme?:string,standard?:string,value?:string}[];
    }
    export interface CheckoutExistingForItemsResponse {  
       hosted_page:HostedPage;
    }
    export interface CheckoutExistingForItemsInputParam {
       
      /**
        * @description Specifies the checkout layout that overrides the default checkout layout configured in the Checkout \&amp; Self-Serve Portal settings. . \* in_app - Indicates in-app checkout version \* full_page - Indicates full page checkout version

        */
       
      layout?:Layout;
       
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
        * @description Applicable only for &#x60;cancelled&#x60; subscriptions. When passed as &#x60;true&#x60;, the canceled subscription is activated; otherwise subscription changes are made without changing its &#x60;status&#x60;. If not passed, subscription will be activated only if &#x60;subscription_items&#x60; is passed.

        */
       
      reactivate?:boolean;
       
      /**
        * @description Say the subscription has the renewal date as 28th of every month. When the plan-item price of the subscription is set to one that has the same billing period as the current plan-item price, the subscription change does not change the term. In other words, the subscription still renews on the 28th. Passing this parameter as &#x60;true&#x60; will have the subscription reset its term to the current date (provided &#x60;end_of_term&#x60; is false).  
**Note**: When the new plan-item price has a billing period different from the current plan-item price of the subscription, the term is always reset, regardless of the value passed for this parameter.

        */
       
      force_term_reset?:boolean;
       
      /**
        * @description The customers will be redirected to this URL upon successful checkout. The hosted page id and state will be passed as parameters to this URL.  

**Note** :

* Although the customer will be redirected to the &#x60;redirect_url&#x60; after successful checkout, we do not recommend relying on it for completing critical post-checkout actions. This is because redirection may not happen due to unforeseen reasons such as user closing the tab, or exiting the browser, and so on. If there is any synchronization that you are doing after the redirection, you will have to have a backup. Chargebee recommends listening to appropriate webhooks such as [&#x60;subscription_created&#x60;](https://apidocs.chargebee.com/docs/api/events#subscription_created) or [&#x60;invoice_generated&#x60;](https://apidocs.chargebee.com/docs/api/events#invoice_generated)to verify a successful checkout.
* Redirect URL configured in Settings \&gt; Hosted Pages Settings would be overriden by this redirect URL.
* *Eg :* *http://yoursite.com?id&#x3D;* *\&lt;hosted_page_id\&gt;\&amp;state&#x3D;succeeded*
* This parameter is not applicable for iframe messaging.

        */
       
      redirect_url?:string;
       
      /**
        * @description The customers will be redirected to this URL upon canceling checkout. The hosted page id and state will be passed as parameters to this URL.   

**Note** :

* Cancel URL configured in Settings \&gt; Hosted Pages Settings would be overriden by this cancel URL.  
  *Eg : http://yoursite.com?id&#x3D;\&lt;hosted_page_id\&gt;\&amp;state&#x3D;cancelled*
* This parameter is not applicable for iframe messaging and [in-app](https://www.chargebee.com/docs/2.0/checkout.html) checkout.

        */
       
      cancel_url?:string;
       
      /**
        * @description You can pass through any content specific to the hosted page request and get it back after user had submitted the hosted page.

        */
       
      pass_thru_content?:string;
       
      /**
        * @description Allow the customer to select an offline payment method during checkout. The choice of payment methods can be configured via the Chargebee UI.

        */
       
      allow_offline_payment_methods?:boolean;
       
      /**
        * @description Parameters for subscription

        */
       
      subscription?:object;
       
      /**
        * @description Parameters for customer

        */
       
      customer?:object;
       
      /**
        * @description Parameters for card

        */
       
      card?:{gateway_account_id?:string};
       
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
       
      discounts?:{amount?:number,apply_on:ApplyOn,duration_type:DurationType,id?:string,included_in_mrr?:boolean,item_price_id?:string,operation_type:OperationType,percentage?:number,period?:number,period_unit?:PeriodUnit}[];
       
      /**
        * @description Parameters for item_tiers

        */
       
      item_tiers?:{ending_unit?:number,ending_unit_in_decimal?:string,item_price_id?:string,price?:number,price_in_decimal?:string,starting_unit?:number,starting_unit_in_decimal?:string}[];
       
      /**
        * @description Parameters for entity_identifiers

        */
       
      entity_identifiers?:{id?:string,operation?:Operation,scheme?:string,standard?:string,value?:string}[];
    }
    export interface UpdatePaymentMethodResponse {  
       hosted_page:HostedPage;
    }
    export interface UpdatePaymentMethodInputParam {
       
      /**
        * @description The customers will be redirected to this URL upon successful checkout. The hosted page id and state will be passed as parameters to this URL.  

**Note** :

* Although the customer will be redirected to the &#x60;redirect_url&#x60; after successful checkout, we do not recommend relying on it for completing critical post-checkout actions. This is because redirection may not happen due to unforeseen reasons such as user closing the tab, or exiting the browser, and so on. If there is any synchronization that you are doing after the redirection, you will have to have a backup. Chargebee recommends listening to appropriate webhooks such as [&#x60;subscription_created&#x60;](https://apidocs.chargebee.com/docs/api/events#subscription_created) or [&#x60;invoice_generated&#x60;](https://apidocs.chargebee.com/docs/api/events#invoice_generated)to verify a successful checkout.
* Redirect URL configured in Settings \&gt; Hosted Pages Settings would be overriden by this redirect URL.
* *Eg :* *http://yoursite.com?id&#x3D;* *\&lt;hosted_page_id\&gt;\&amp;state&#x3D;succeeded*
* This parameter is not applicable for iframe messaging.

        */
       
      redirect_url?:string;
       
      /**
        * @description The customers will be redirected to this URL upon canceling checkout. The hosted page id and state will be passed as parameters to this URL.   

**Note** :

* Cancel URL configured in Settings \&gt; Hosted Pages Settings would be overriden by this cancel URL.  
  *Eg : http://yoursite.com?id&#x3D;\&lt;hosted_page_id\&gt;\&amp;state&#x3D;cancelled*
* This parameter is not applicable for iframe messaging and [in-app](https://www.chargebee.com/docs/2.0/checkout.html) checkout.

        */
       
      cancel_url?:string;
       
      /**
        * @description You can pass through any content specific to the hosted page request and get it back after user had submitted the hosted page.

        */
       
      pass_thru_content?:string;
       
      /**
        * @description If true then iframe will communicate with the parent window. Applicable only for embedded(iframe) hosted pages. If you&#x27;re using iframe_messaging you need to implement onSuccess \&amp; onCancel callbacks.  

**Note** : This parameter is not applicable for [in-app](https://www.chargebee.com/docs/checkout-v3.html) checkout.

        */
       
      iframe_messaging?:boolean;
       
      /**
        * @description Parameters for customer

        */
       
      customer?:{id:string};
       
      /**
        * @description Parameters for card

        */
       
      card?:{gateway_account_id?:string};
    }
    export interface ManagePaymentSourcesResponse {  
       hosted_page:HostedPage;
    }
    export interface ManagePaymentSourcesInputParam {
       
      /**
        * @description URL to redirect after payment method is added.

        */
       
      redirect_url?:string;
       
      /**
        * @description Parameters for customer

        */
       
      customer?:{id:string};
       
      /**
        * @description Parameters for card

        */
       
      card?:{gateway_account_id?:string};
    }
    export interface CollectNowResponse {  
       hosted_page:HostedPage;
    }
    export interface CollectNowInputParam {
       
      /**
        * @description Used to specify the destination URL to which a user is redirected after invoices are paid. The [transaction ID](/docs/api/transactions#transaction_id) of the transactions made through the Pay Now hosted page will be sent as return variables along with the URL.

        */
       
      redirect_url?:string;
       
      /**
        * @description The currency code (ISO 4217 format) of the specified *credit amount*.

        */
       
      currency_code?:string;
       
      /**
        * @description Parameters for customer

        */
       
      customer?:{id:string};
       
      /**
        * @description Parameters for card

        */
       
      card?:{gateway_account_id?:string};
    }
    export interface AcceptQuoteResponse {  
       hosted_page:HostedPage;
    }
    export interface AcceptQuoteInputParam {
       
      /**
        * @description The customers will be redirected to this URL upon successful checkout. The hosted page id and state will be passed as parameters to this URL.  

**Note** :

* Although the customer will be redirected to the &#x60;redirect_url&#x60; after successful checkout, we do not recommend relying on it for completing critical post-checkout actions. This is because redirection may not happen due to unforeseen reasons such as user closing the tab, or exiting the browser, and so on. If there is any synchronization that you are doing after the redirection, you will have to have a backup. Chargebee recommends listening to appropriate webhooks such as [&#x60;subscription_created&#x60;](https://apidocs.chargebee.com/docs/api/events#subscription_created) or [&#x60;invoice_generated&#x60;](https://apidocs.chargebee.com/docs/api/events#invoice_generated)to verify a successful checkout.
* Redirect URL configured in Settings \&gt; Hosted Pages Settings would be overriden by this redirect URL.
* *Eg :* *http://yoursite.com?id&#x3D;* *\&lt;hosted_page_id\&gt;\&amp;state&#x3D;succeeded*
* This parameter is not applicable for iframe messaging.

        */
       
      redirect_url?:string;
       
      /**
        * @description Parameters for quote

        */
       
      quote?:{id:string};
    }
    export interface ExtendSubscriptionResponse {  
       hosted_page:HostedPage;
    }
    export interface ExtendSubscriptionInputParam {
       
      /**
        * @description Expiry (in days) for the link generated. No expiry will be set if this is not specified.

        */
       
      expiry?:number;
       
      /**
        * @description Number of billing cycles to extend. If not specified, plan&#x27;s billing cycle will be used.

        */
       
      billing_cycle?:number;
       
      /**
        * @description Parameters for subscription

        */
       
      subscription?:{id:string};
    }
    export interface CheckoutGiftForItemsResponse {  
       hosted_page:HostedPage;
    }
    export interface CheckoutGiftForItemsInputParam {
       
      /**
        * @description Sets the [context]() for this operation to the [business entity](/docs/api/advanced-features?prod_cat_ver&#x3D;2#mbe) specified. Applicable only when multiple business entities have been created for the site. When this parameter is provided, the operation is able to read/write data associated only to the business entity specified. When not provided, the operation can read/write data for the entire site.  
**Note**

An alternative way of passing this parameter is by means of a [custom HTTP header](/docs/api/advanced-features?prod_cat_ver&#x3D;2#mbe-header-main).  
**See also**

Gifter customer resource lookup and creation.

        */
       
      business_entity_id?:string;
       
      /**
        * @description The customers will be redirected to this URL upon successful checkout. The hosted page id and state will be passed as parameters to this URL.  

**Note** :

* Although the customer will be redirected to the &#x60;redirect_url&#x60; after successful checkout, we do not recommend relying on it for completing critical post-checkout actions. This is because redirection may not happen due to unforeseen reasons such as user closing the tab, or exiting the browser, and so on. If there is any synchronization that you are doing after the redirection, you will have to have a backup. Chargebee recommends listening to appropriate webhooks such as [&#x60;subscription_created&#x60;](https://apidocs.chargebee.com/docs/api/events#subscription_created) or [&#x60;invoice_generated&#x60;](https://apidocs.chargebee.com/docs/api/events#invoice_generated)to verify a successful checkout.
* Redirect URL configured in Settings \&gt; Hosted Pages Settings would be overriden by this redirect URL.
* *Eg :* *http://yoursite.com?id&#x3D;* *\&lt;hosted_page_id\&gt;\&amp;state&#x3D;succeeded*
* This parameter is not applicable for iframe messaging.

        */
       
      redirect_url?:string;
       
      /**
        * @description List of coupons to be applied to this subscription. You can provide coupon ids or [coupon codes](https://apidocs.chargebee.com/docs/api/coupon_codes).

        */
       
      coupon_ids?:string[];
       
      /**
        * @description Parameters for gifter

        */
       
      gifter?:{customer_id?:string,locale?:string};
       
      /**
        * @description Parameters for subscription_items

        */
       
      subscription_items?:{item_price_id?:string,quantity?:number,quantity_in_decimal?:string}[];
    }
    export interface ClaimGiftResponse {  
       hosted_page:HostedPage;
    }
    export interface ClaimGiftInputParam {
       
      /**
        * @description The customers will be redirected to this URL upon successful checkout. The hosted page id and state will be passed as parameters to this URL.  

**Note** :

* Although the customer will be redirected to the &#x60;redirect_url&#x60; after successful checkout, we do not recommend relying on it for completing critical post-checkout actions. This is because redirection may not happen due to unforeseen reasons such as user closing the tab, or exiting the browser, and so on. If there is any synchronization that you are doing after the redirection, you will have to have a backup. Chargebee recommends listening to appropriate webhooks such as [&#x60;subscription_created&#x60;](https://apidocs.chargebee.com/docs/api/events#subscription_created) or [&#x60;invoice_generated&#x60;](https://apidocs.chargebee.com/docs/api/events#invoice_generated)to verify a successful checkout.
* Redirect URL configured in Settings \&gt; Hosted Pages Settings would be overriden by this redirect URL.
* *Eg :* *http://yoursite.com?id&#x3D;* *\&lt;hosted_page_id\&gt;\&amp;state&#x3D;succeeded*
* This parameter is not applicable for iframe messaging.

        */
       
      redirect_url?:string;
       
      /**
        * @description Parameters for gift

        */
       
      gift?:{id:string};
       
      /**
        * @description Parameters for customer

        */
       
      customer?:{locale?:string};
    }
    export interface RetrieveAgreementPdfResponse {  
       hosted_page:HostedPage;
    }
    export interface RetrieveAgreementPdfInputParam {
       
      /**
        * @description Payment source to be used for this payment.

        */
       
      payment_source_id:string;
    }
    export interface AcknowledgeResponse {  
       hosted_page:HostedPage;
    }
    
    export interface RetrieveResponse {  
       hosted_page:HostedPage;
    }
    
    export interface ListResponse {  
      /**
        * @description This API retrieves the list of hosted page resources.

        */
       
       list:{hosted_page:HostedPage}[];
       
      /**
        * @description This API retrieves the list of hosted page resources.

        */
       
       next_offset?:string;
    }
    export interface ListInputParam {
      [key : string]: any;  
      /**
        * @description This API retrieves the list of hosted page resources.

        */
        
      limit?:number;
       
      /**
        * @description This API retrieves the list of hosted page resources.

        */
        
      offset?:string;
       
      /**
        * @description This API retrieves the list of hosted page resources.

        */
        
      id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description This API retrieves the list of hosted page resources.

        */
        
      type?:{in?:string,is?:'update_payment_method' | 'checkout_one_time' | 'manage_payment_sources' | 'checkout_new' | 'view_voucher' | 'collect_now' | 'checkout_existing' | 'extend_subscription' | 'pre_cancel',is_not?:'update_payment_method' | 'checkout_one_time' | 'manage_payment_sources' | 'checkout_new' | 'view_voucher' | 'collect_now' | 'checkout_existing' | 'extend_subscription' | 'pre_cancel',not_in?:string};
       
      /**
        * @description This API retrieves the list of hosted page resources.

        */
        
      state?:{in?:string,is?:'requested' | 'acknowledged' | 'created' | 'cancelled' | 'succeeded',is_not?:'requested' | 'acknowledged' | 'created' | 'cancelled' | 'succeeded',not_in?:string};
       
      /**
        * @description This API retrieves the list of hosted page resources.

        */
        
      updated_at?:{after?:string,before?:string,between?:string,on?:string};
    }
    export interface PreCancelResponse {  
       hosted_page:HostedPage;
    }
    export interface PreCancelInputParam {
       
      /**
        * @description Additional data to be passed to Chargebee Retention. Only the value of &#x60;pass_thru_content.custom&#x60; is sent to Chargebee Retention. It is sent as the value of the [&#x60;custom&#x60; property](https://help.brightback.com/article/43-installing-brightback). The fields provided in &#x60;pass_thru_content.custom&#x60; must be preconfigured in Chargebee Retention.

Although only &#x60;pass_thru_content.custom&#x60; is sent to Chargebee Retention, all of &#x60;pass_thru_content&#x60; is stored by Chargebee billing and is retrievable as an [attribute](/docs/api/hosted_pages#hosted_page_pass_thru_content) of the &#x60;hosted_page&#x60;.
.

        */
       
      pass_thru_content?:string;
       
      /**
        * @description The customer is sent to this URL if they finally decide to cancel the subscription, despite the attempt to retain them.

        */
       
      cancel_url?:string;
       
      /**
        * @description The customer is sent to this URL upon successful retention. In other words, this is the page to which the customer is sent when they decide **not** to cancel the subscription.

        */
       
      redirect_url?:string;
       
      /**
        * @description Parameters for subscription

        */
       
      subscription?:{id:string};
    }
    export interface EventsResponse {  
       success:boolean;
    }
    export interface EventsInputParam {
       
      /**
        * @description The event that need to passed to a different system. \* cancellation_page_loaded - Indicates native cancellation flow provided by the merchant is loaded rather than the retention flow.

        */
       
      event_name:EventName;
       
      /**
        * @description Timestamp indicating when this event had occurred. .

        */
       
      occurred_at?:number;
       
      /**
        * @description The meta data description of the event in key-value pair. The value is a JSON object with the following keys and their values.

* &#x60;subscription_id&#x60;: A unique and immutable identifier for the subscription.
.

        */
       
      event_data:object;
    }
    export interface ViewVoucherResponse {  
       hosted_page:HostedPage;
    }
    export interface ViewVoucherInputParam {
       
      /**
        * @description Parameters for payment_voucher

        */
       
      payment_voucher?:{id:string};
       
      /**
        * @description Parameters for customer

        */
       
      customer?:{locale?:string};
    }
    
  }
}