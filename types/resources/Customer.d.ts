///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface Customer {
    [key : string] : any;
    /**
      * @description Identifier of the customer.

      */
    
    id:string;
    
    /**
      * @description First name of the customer

      */
    
    first_name?:string;
    
    /**
      * @description Last name of the customer

      */
    
    last_name?:string;
    
    /**
      * @description Email of the customer. Configured email notifications will be sent to this email.

      */
    
    email?:string;
    
    /**
      * @description Phone number of the customer

      */
    
    phone?:string;
    
    /**
      * @description Company name of the customer.

      */
    
    company?:string;
    
    /**
      * @description The VAT/tax registration number for the customer. For customers with [billing_address](customers#customer_billing_address) &#x60;country&#x60; as &#x60;XI&#x60; (which is **United Kingdom - Northern Ireland** ), the first two characters of the [full VAT
number](https://en.wikipedia.org/wiki/VAT_identification_number) can be overridden by setting [vat_number_prefix](customers#customer_vat_number_prefix).

      */
    
    vat_number?:string;
    
    /**
      * @description Whether payments needs to be collected automatically for this customer \* on - Whenever an invoice is created, an automatic attempt to charge the customer&#x27;s payment method is made. \* off - Automatic collection of charges will not be made. All payments must be recorded offline.

      */
    
    auto_collection:AutoCollection;
    
    /**
      * @description The preferred offline payment method for the customer. \* sepa_credit - SEPA Credit \* cash - Cash \* no_preference - No Preference \* bank_transfer - Bank Transfer \* check - Check \* boleto - Boleto \* ach_credit - ACH Credit

      */
    
    offline_payment_method?:OfflinePaymentMethod;
    
    /**
      * @description The number of days within which the customer has to make payment for the invoice.

      */
    
    net_term_days:number;
    
    /**
      * @description Returns the recent VAT number validation time.

      */
    
    vat_number_validated_time?:number;
    
    /**
      * @description Represents the VAT validation status. This is applicable if you have configured EU, UK or Australian taxes and the [VAT number validation](https://www.chargebee.com/docs/2.0/uk-vat.html#uk-vat-validation) is enabled. \* not_validated - This status is only applicable for countries in European Zone. This is applicable when both the customer&#x27;s billing address and the organization&#x27;s address should be of the same European Zone and EU tax should be configured with the &quot;&#x27;Also validate VAT Number for Country of Business&#x27;&quot; option in the disabled status. \* undetermined - When Chargebee is not able to validate the VAT number it is stored as &#x27;undetermined&#x27;. This can occur due to reasons like service outage etc. VAT numbers with &#x27;undetermined&#x27; status will be in queue for validation on daily basis. \* valid - If the given VAT number is valid. \* invalid - If the given VAT number is invalid.

      */
    
    vat_number_status?:'valid' | 'undetermined' | 'invalid' | 'not_validated';
    
    /**
      * @description Whether the customer can pay via Direct Debit

      */
    
    allow_direct_debit:boolean;
    
    /**
      * @description Customer location is validated based on IP address and Card issuing country. If the location is valid, it returns True. If not, it returns False. Applicable only for EU, New Zealand and Australia.

      */
    
    is_location_valid?:boolean;
    
    /**
      * @description Timestamp indicating when this customer resource is created.

      */
    
    created_at:number;
    
    /**
      * @description The IP address of the customer. Used primarily for [referral integrations](https://www.chargebee.com/docs/marketing-integration-index.html) and EU/UK VAT validation.

      */
    
    created_from_ip?:string;
    
    /**
      * @description Indicates the exemption information. You can customize customer exemption based on specific Location, Tax level (Federal, State, County and Local), Category of Tax or specific Tax Name. This is applicable only if you use [Chargebee&#x27;s AvaTax for Communications](https://www.chargebee.com/docs/avatax-for-communication.html) integration.  
To know more about what values you need to provide, refer to this [Avalara&#x27;s API document](https://developer.avalara.com/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/exemption/).

      */
    
    exemption_details?:any[];
    
    /**
      * @description Specifies if the customer is liable for tax \* taxable - Computes tax for the customer based on the [site configuration](https://www.chargebee.com/docs/tax.html). In some cases, depending on the region, shipping_address is needed. If not provided, then billing_address is used to compute tax. If that&#x27;s not available either, the tax is taken as zero. \* exempt -

* Customer is exempted from tax. When using Chargebee&#x27;s native [Taxes](https://www.chargebee.com/docs/tax.html) feature or when using the [TaxJar integration](https://www.chargebee.com/docs/taxjar.html), no other action is needed.
* However, when using our [Avalara integration](https://www.chargebee.com/docs/avalara.html), optionally, specify &#x60;entity_code&#x60; or &#x60;exempt_number&#x60; attributes if you use Chargebee&#x27;s [AvaTax for Sales](https://www.chargebee.com/docs/avalara.html#configuring-tax-exemption) or specify &#x60;exemption_details&#x60; attribute if you use [Chargebee&#x27;s AvaTax for Communications](https://www.chargebee.com/docs/avatax-for-communication.html) integration. Tax may still be applied by Avalara for certain values of &#x60;entity_code&#x60;/&#x60;exempt_number&#x60;/&#x60;exemption_details&#x60; based on the state/region/province of the taxable address.

      */
    
    taxability?:Taxability;
    
    /**
      * @description The exemption category of the customer, for USA and Canada. Applicable if you use Chargebee&#x27;s [AvaTax for Sales integration](https://www.chargebee.com/docs/avalara.html#configuring-tax-exemption). \* l - Other or custom \* m - Educational organization \* n - Local government \* h - Commercial agricultural production \* i - Industrial production/manufacturer \* j - Direct pay permit \* k - Direct mail \* p - Commercial aquaculture \* q - Commercial Fishery \* r - Non-resident \* d - Foreign diplomat \* e - Charitable or benevolent organization \* f - Religious organization \* g - Resale \* a - Federal government \* b - State government \* c - Tribe/Status Indian/Indian Band \* med2 - US Medical Device Excise Tax with taxable sales tax \* med1 - US Medical Device Excise Tax with exempt sales tax

      */
    
    entity_code?:EntityCode;
    
    /**
      * @description Any string value that will cause the sale to be exempted. Use this if your finance team manually verifies and tracks exemption certificates. Applicable if you use Chargebee&#x27;s [AvaTax for Sales integration](https://www.chargebee.com/docs/avalara.html#configuring-tax-exemption).

      */
    
    exempt_number?:string;
    
    /**
      * @description Version number of this resource. The &#x60;resource_version&#x60; is updated with a new timestamp in milliseconds for every change made to the resource. This attribute will be present only if the resource has been updated after 2016-09-28.

      */
    
    resource_version?:number;
    
    /**
      * @description Timestamp indicating when this customer was last updated. This attribute will be present only if the resource has been updated after 2016-09-28.

      */
    
    updated_at?:number;
    
    /**
      * @description Determines which region-specific language Chargebee uses to communicate with the customer. In the absence of the locale attribute, Chargebee will use your site&#x27;s default language for customer communication.

      */
    
    locale?:string;
    
    /**
      * @description Applicable when *calendar billing* (with customer specific billing date support) is enabled. When set, renewals of all the monthly and yearly subscriptions of this customer will be aligned to this date.

      */
    
    billing_date?:number;
    
    /**
      * @description &#x60;billing_month&#x60;, together with &#x60;billing_date&#x60;, specify, for this customer, the day of the year when the renewals of all the year-based subscriptions take place.

For example, the renewals happen on 15th July when &#x60;billing_month&#x60; is &#x60;7&#x60; and &#x60;billing_date&#x60; is &#x60;15&#x60;.  
**Note**

Applicable when [Calendar Billing](https://www.chargebee.com/docs/calendar-billing.html) (with customer-specific billing date support) is enabled and &#x60;billing_date_mode&#x60; is &#x60;manually_set&#x60;.

      */
    
    billing_month?:number;
    
    /**
      * @description Indicates whether this customer&#x27;s *billing_date* value is derived as per configurations or its specifically set (overriden). When specifically set, the *billing_date* will not be reset even when all of the monthly/yearly subscriptions are cancelled. \* manually_set - Billing date is specifically set (default configuration is overridden) \* using_defaults - Billing date is set based on defaults configured.

      */
    
    billing_date_mode?:BillingDateMode;
    
    /**
      * @description Applicable when *calendar billing* (with customer specific billing date support) is enabled. When set, renewals of all the weekly subscriptions of this customer will be aligned to this week day. \* saturday - Saturday \* monday - Monday \* friday - Friday \* sunday - Sunday \* wednesday - Wednesday \* thursday - Thursday \* tuesday - Tuesday

      */
    
    billing_day_of_week?:'sunday' | 'saturday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'monday';
    
    /**
      * @description Indicates whether this customer&#x27;s *billing_day_of_week* value is derived as per configurations or its specifically set (overriden). When specifically set, the *billing_day_of_week* will not be reset even when all of the weekly subscriptions are cancelled. \* using_defaults - Billing date is set based on defaults configured. \* manually_set - Billing date is specifically set (default configuration is overridden)

      */
    
    billing_day_of_week_mode?:BillingDayOfWeekMode;
    
    /**
      * @description Indicates whether this customer&#x27;s personal information has been cleared \* cleared - Cleared \* scheduled_for_clear - Scheduled For Clear \* active - Active

      */
    
    pii_cleared?:'active' | 'scheduled_for_clear' | 'cleared';
    
    /**
      * @description Override for this customer, the [site-level setting](https://www.chargebee.com/docs/2.0/metered_billing.html#configuring-metered-billing) for auto-closing invoices. Only applicable when auto-closing invoices has been enabled for the site. This attribute is also available at the [subscription level](/docs/api/subscriptions?prod_cat_ver&#x3D;2#subscription_auto_close_invoices) which takes precedence.

      */
    
    auto_close_invoices?:boolean;
    
    /**
      * @description The subscription channel this object originated from and is maintained in. \* play_store - The object data is synchronized with data from [in-app subscription(s)](https://apidocs.chargebee.com/docs/api/in_app_subscriptions) created in Google Play Store. Direct manipulation of this object via UI or API is disallowed.  

In-App Subscriptions is currently in early access. Contact [eap@chargebee.com](mailto:eap@chargebee.com) for more information.
\* web - The object was created (and is maintained) for the web channel directly in Chargebee via API or UI. \* app_store - The object data is synchronized with data from [in-app subscription(s)](https://apidocs.chargebee.com/docs/api/in_app_subscriptions) created in Apple App Store. Direct manipulation of this object via UI or API is disallowed.

      */
    
    channel?:Channel;
    
    /**
      * @description Indicates whether or not the customer has been identified as fraudulent. \* suspicious - The customer has been identified as potentially fraudulent by the gateway \* safe - The customer has been marked as safe \* fraudulent - The customer has been marked as fraudulent

      */
    
    fraud_flag?:'safe' | 'suspicious' | 'fraudulent';
    
    /**
      * @description Primary payment source for the customer.

      */
    
    primary_payment_source_id?:string;
    
    /**
      * @description Backup payment source for the customer. Used to collect payment if primary payment source fails.

      */
    
    backup_payment_source_id?:string;
    
    /**
      * @description A customer-facing note added to all invoices associated with this API resource. This note becomes one among [all the notes](/docs/api/invoices#invoice_notes) displayed on the invoice PDF.

      */
    
    invoice_notes?:string;
    
    /**
      * @description The unique ID of the [business entity](https://apidocs.chargebee.com/docs/api/advanced-features?prod_cat_ver&#x3D;2#mbe) of this subscription. This is always the same as the [business entity](/docs/api/subscriptions?prod_cat_ver&#x3D;2#subscription_customer_id) of the customer.

      */
    
    business_entity_id?:string;
    
    /**
      * @description The currency code of the customer&#x27;s preferred currency (ISO 4217 format). Applicable if the Multicurrency feature is enabled.

      */
    
    preferred_currency_code?:string;
    
    /**
      * @description Promotional credits balance of this customer

      */
    
    promotional_credits:number;
    
    /**
      * @description Total unbilled charges for this customer

      */
    
    unbilled_charges:number;
    
    /**
      * @description Refundable credits balance of this customer

      */
    
    refundable_credits:number;
    
    /**
      * @description Total unused payments associated with the customer

      */
    
    excess_payments:number;
    
    /**
      * @description Determines whether the customer is e-invoiced. When set to &#x60;true&#x60; or not set to any value, the customer is e-invoiced so long as e-invoicing is enabled for their country (&#x60;billing_address.country&#x60;). When set to &#x60;false&#x60;, the customer is not e-invoiced even if e-invoicing is enabled for their country.  
**Tip:**


It is possible to set a value for this flag even when E-Invoicing is disabled. However, it comes into effect only when E-Invoicing is enabled.

      */
    
    is_einvoice_enabled?:boolean;
    
    /**
      * @description Determines whether to send e-invoice manually or automatic. \* automatic - Use this value to send e-invoice every time an invoice or credit note is created. \* manual - When manual is selected the automatic e-invoice sending is disabled. Use this value to send e-invoice manually through UI or API. \* site_default - The default value of the site which can be overridden at the customer level.

      */
    
    einvoicing_method?:EinvoicingMethod;
    
    /**
      * @description Indicates that this resource has been deleted.

      */
    
    deleted:boolean;
    
    /**
      * @description Confirms that a customer is registered under GST. If set to &#x60;true&#x60; then the [Reverse Charge Mechanism](https://www.chargebee.com/docs/australian-gst.html#reverse-charge-mechanism) is applicable. This field is applicable only when Australian GST is configured for your site.

      */
    
    registered_for_gst?:boolean;
    
    /**
      * @description Indicates whether invoices raised on the same day for the &#x60;customer&#x60; are consolidated. When present, this value overrides the default configuration at the [site-level](https://www.chargebee.com/docs/consolidated-invoicing.html#configuring-consolidated-invoicing). This attribute is applicable only when [Consolidated Invoicing](https://www.chargebee.com/docs/consolidated-invoicing.html) is enabled.  
**Note:**


Any invoices raised when a subscription activates from &#x60;in_trial&#x60; or &#x60;future&#x60; &#x60;status&#x60;, are not consolidated by default. [Contact Support](https://chargebee.freshdesk.com/support/home) to enable consolidation for such invoices.

      */
    
    consolidated_invoicing?:boolean;
    
    /**
      * @description Indicates the type of the customer. This is applicable only if you use [Chargebee&#x27;s AvaTax for Communications](https://www.chargebee.com/docs/avatax-for-communication.html) integration. \* industrial - When the purchase is made by an industrial business \* residential - When the purchase is made by a customer for home use \* senior_citizen - When the purchase is made by a customer who meets the jurisdiction requirements to be considered a senior citizen and qualifies for senior citizen tax breaks \* business - When the purchase is made at a place of business

      */
    
    customer_type?:CustomerType;
    
    /**
      * @description Confirms that a customer is a valid business without an EU/UK VAT number.

      */
    
    business_customer_without_vat_number?:boolean;
    
    /**
      * @description Indicates the Client profile id for the customer. This is applicable only if you use [Chargebee&#x27;s AvaTax for Communications](https://www.chargebee.com/docs/avatax-for-communication.html) integration.

      */
    
    client_profile_id?:string;
    
    /**
      * @description Indicates whether the site-default settings are being used for controlling access to the customer&#x27;s information.
The level of access is for data falling into two categories:

* **Self-Serve Portal data:** subscriptions and invoices of the customer.
* **Email Notifications:** subscription-, invoice- and payment-related notifications for the customer.

      */
    
    use_default_hierarchy_settings?:boolean;
    
    /**
      * @description An overridden value for the first two characters of the [full VAT
number](https://en.wikipedia.org/wiki/VAT_identification_number). Only applicable specifically for customers with [billing_address](customers#customer_billing_address) &#x60;country&#x60; as &#x60;XI&#x60; (which is **United Kingdom - Northern Ireland** ).  

When you have enabled [EU VAT](https://www.chargebee.com/docs/eu-vat.html) in 2021 or have [manually
enabled](https://www.chargebee.com/docs/brexit.html#what-needs-to-be-done-in-chargebee) the Brexit configuration, you have the option of setting [billing_address](customers#customer_billing_address) &#x60;country&#x60; as &#x60;XI&#x60;. That&#x27;s the code for **United Kingdom - Northern
Ireland** . The first two characters of the VAT number in such a case is &#x60;XI&#x60; by default. However, if the VAT number was registered in UK, the value should be &#x60;GB&#x60;. Set &#x60;vat_number_prefix&#x60; to &#x60;GB&#x60; for such cases.

      */
    
    vat_number_prefix?:string;
    
    /**
      * @description The Peppol BIS scheme associated with the [vat_number](customers#customer_vat_number) of the customer. This helps identify the specific type of customer entity. For example, &#x60;DE:VAT&#x60; is used for a German business entity while &#x60;DE:LWID45&#x60; is used for a German government entity. The value must be from the list of possible values and must correspond to the country provided under &#x60;billing_address.country&#x60;. See [list of possible values](https://www.chargebee.com/docs/e-invoicing.html#supported-countries).  
**Tip:**


If there are additional entity identifiers for the customer not associated with the &#x60;vat_number&#x60;, they can be provided as the &#x60;entity_identifiers[]&#x60; array.

      */
    
    entity_identifier_scheme?:string;
    
    /**
      * @description The standard used for specifying the &#x60;entity_identifier_scheme&#x60;. Currently only &#x60;iso6523-actorid-upis&#x60; is supported and is used by default when not provided.  
**Tip:**


If there are additional entity identifiers for the customer not associated with the &#x60;vat_number&#x60;, they can be provided as the &#x60;entity_identifiers[]&#x60; array.

      */
    
    entity_identifier_standard?:string;
    
    /**
      * @description Billing address for a customer.

      */
    
    billing_address?:Customer.BillingAddress;
    
    /**
      * @description List of referral urls for the customer (if applicable)

      */
    
    referral_urls?:Customer.ReferralUrl[];
    
    /**
      * @description contacts

      */
    
    contacts?:Customer.Contact[];
    
    /**
      * @description Primary Payment Source of the customer.

      */
    
    payment_method?:Customer.PaymentMethod;
    
    /**
      * @description The list of balances for this customer

      */
    
    balances?:Customer.CustomerBalance[];
    
    /**
      * @description Each element of the &#x60;entity_identifiers[]&#x60; array identifies a specific customer entity with the e-invoicing system. If the customer has only one entity identifier whose &#x60;value&#x60; is the &#x60;vat_number&#x60;, then this array is not needed as the &#x60;scheme&#x60; can be provided via &#x60;entity_identifier_scheme&#x60;. This array holds any additional entity identifiers that the customer may have.

      */
    
    entity_identifiers?:Customer.EntityIdentifier[];
    
    /**
      * @description The [Account Hierarchy](https://www.chargebee.com/docs/account-hierarchy.html) relationship that the customer is part of.

      */
    
    relationship?:Customer.Relationship;
    
    /**
      * @description Defines the level of access that the parent account has to the customer&#x27;s information.
**Note:** the &#x27;parent&#x27; is the customer whose id is [payment_owner_id](/docs/api/customers#customer_relationship_payment_owner_id). However, if the &#x60;payment_owner_id&#x60; is the customer itself, then the parent is [parent_id](/docs/api/customers#customer_relationship_parent_id).

      */
    
    parent_account_access?:Customer.ParentAccountAccess;
    
    /**
      * @description Defines the level of access that the customer has to its own information.

      */
    
    child_account_access?:Customer.ChildAccountAccess;
  }
  export namespace Customer {
    export class CustomerResource {  
      /**
        * @description **Note:** This operation optionally supports 3DS verification flow. To achieve the same, create the [Payment Intent](/docs/api/3ds_card_payments?prod_cat_ver&#x3D;1) and pass it as input parameter to this API.

Creates a customer. You can create a customer and then create subscriptions for the customer when required. When creating a customer, you can pass along the billing address and card details.

Passing raw card data via API involves PCI liability at your end due to the sensitivity of the data. Instead, you can use one of the following integration options as applicable:

Here&#x27;s some resources you can use to collect card information within your checkout form based on the payment gateway you use:

* [Stripe.js](https://stripe.com/docs/js) for Stripe users.
* [Braintree.js](https://developer.paypal.com/braintree/docs/guides/client-sdk/setup/javascript/v2) for Braintree users.
* [Accept.js](https://developer.authorize.net/api/reference/features/acceptjs.html), if you use [Authorize.Net](https://www.authorize.net/).
* If you are using the Adyen gateway, you will have to use the Adyen&#x27;s [Client-Side Encryption](https://docs.adyen.com/online-payments/classic-integrations/api-integration-ecommerce/cse-integration-ecommerce) to encrypt sensitive cardholder data. Once the cardholder data is encrypted, pass the value in &#x60;adyen.encrypted.data&#x60;as temp token in this API.
* You can also use our [Hosted Pages](https://www.chargebee.com/docs/1.0/hosted_pages.html) based integration.

When billing address is not passed (say, for customers making offline payments), you can always provide it later using the [Update billing info for a customer API](/docs/api/customers#update_billing_info_for_a_customer).

**Note:**When an invoice is generated for a customer, the billing address provided for the customer is stored with the invoice. If the First Name, Last Name, and Company fields of the billing address do not contain any information, they&#x27;re picked up from the customer details.

        */
      
      create(input?:CreateInputParam):ChargebeeRequest<CreateResponse>;
       
      /**
        * @description Retrieves a list of customers added to your Chargebee site. The list contains the necessary customer details such as First Name, Last Name and the Customer ID.

        */
      
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
       
      /**
        * @description Retrieves the details of the desired customer. You can use the unique identifier for a particular customer to retrieve the desired details.

        */
      
      retrieve(customer_id:string):ChargebeeRequest<RetrieveResponse>;
       
      /**
        * @description Updates the customer resource. However, this method cannot be used for updating the &#x27;Billing Info&#x27; - the Billing Address and &#x27;vat_number&#x27; attributes - of the customer. To update the same, use our [Update Billing Info](/docs/api/customers#update_billing_info_for_a_customer) API.

        */
      
      update(customer_id:string, input?:UpdateInputParam):ChargebeeRequest<UpdateResponse>;
       
      /**
        * @description We recently released [Payment Sources](/docs/api/payment_sources), which comes with additional options and improvements to the [Card APIs](/docs/api/cards). For this operation, use the [Create using temporary token](/docs/api/payment_sources#create_using_temporary_token) API or [Create using permanent token](/docs/api/payment_sources#create_using_permanent_token) API under Payment Sources to update payment method for the customer.

Updates payment method details for a customer.

**Note:** If you wish to pass the card number, CVV, or the single-use card tokens provided by gateways like Stripe, then use the [Update card for a customer](cards#update_card_for_a_customer) API under Cards resource. This API is not supported for Chargebee Test Gateway, it is provided to help you understand the billing workflow in Chargebee.

**PayPal Express Checkout**   
You can use this API if you are directly integrating PayPal Express Checkout in your website instead of using Chargebee&#x27;s hosted pages. When your customer updates his payment method using PayPal Express Checkout, you will be provided with the *Billing Agreement ID* by PayPal. You can update the payment method for that customer in Chargebee by passing &#x60;type&#x60; as &#x60;paypal_express_checkout&#x60; and &#x60;reference_id&#x60; with the *Billing Agreement ID*.

**Login and Pay with Amazon**   
You can use this API if you are directly integrating *Login and Pay with Amazon* in your website instead of using Chargebee&#x27;s hosted pages. When your customer updates Amazon as a payment method, you will be provided with the *Billing Agreement ID* by Amazon. You can update the payment method for that customer in Chargebee by passing &#x60;type&#x60; as &#x60;amazon_payments&#x60; and &#x60;reference_id&#x60; with the *Billing Agreement ID*.

**Card Payments**   
When the card details of your customer are stored in the vault of gateways such as Stripe or Braintree, you can use this API to update the *reference id* provided by them in Chargebee. To use this API, pass   

* &#x60;type&#x60; as &#x60;card&#x60;.
* &#x60;gateway&#x60; with the gateway associated with the card. If the gateway is not specified, the default gateway will be used.
* &#x60;reference_id&#x60; with the identifier provided by the gateway/Spreedly to reference that specific card.

**Reference id format for Card Payments**   
The format of reference_id will differ based on where the card is stored.  
**Stripe:** In case of Stripe, the reference_id consists of combination of Stripe Customer ID and Stripe Card ID separated by forward slash (e.g. *cus_63MnDn0t6kfDW7/card_6WjCF20vT9WN1G*). If you are passing Stripe Customer ID alone, then Chargebee will store the card marked as active for that customer in Stripe.

**Braintree:** In case of Braintree, the reference_id consists of combination of Braintree Customer ID and Braintree Payment Method Token separated by forward slash   
(e.g. *cus_63MnDn0t6kfDW7/card_6WjCF20vT9WN1G* ). If you are passing Braintree Customer ID alone, then Chargebee will store the card marked as default for that customer in Braintree.

**Spreedly Card vault:** If the card details are stored in Spreedly vault, then you need to provide the Spreedly token as &#x60;reference_id&#x60;.

**Direct Debit Payments**   
When the bank account details of your customer are stored in the gateway vault, you can use this API to update the reference id provided by them in Chargebee. To use this API, pass   

* &#x60;type&#x60; as &#x60;direct_debit&#x60;.
* &#x60;gateway&#x60; with the gateway where the bank account details are stored (e.g. *authorize_net*). If the gateway is not specified, the gateway supporting the direct debit will be used.
* &#x60;reference_id&#x60; with the identifier provided by the gateway to reference the customer&#x27;s bank account details.
* &#x60;tmp_token&#x60; with the single use token provided by the gateway ( Should be passed only if reference_id is not passed ).

**Reference id format for Direct Debit Payments**   
The format of reference_id will differ based on where the bank account is stored.  
**Stripe:** In case of Stripe, the reference_id consists of combination of Stripe Customer ID and Stripe Bank Account ID separated by forward slash   
(e.g. *cus_8suoHaLQH4G5AW/ba_18b8z2KmcbENlhgU03RznRYW*). If you are passing Stripe Customer ID alone, then Chargebee will store the first bank account details present in payment profile list of that customer in Stripe.

**Authorize.Net:** The reference_id consists of combination of Authorize.Net&#x27;s Customer Profile ID and Payment Profile ID separated by forward slash (e.g. *2384383/34834382*). If you are passing Authorize.Net&#x27;s Customer Profile ID alone, then Chargebee will store the first bank account details present in payment profile list of that customer in Authorize.Net.

**GoCardless:** The reference_id is the GoCardless Customer Mandate ID (e.g. *MD0077Z99TTQXK*).

**Note:** While using this API to update payment method details, [Card Verification](https://www.chargebee.com/docs/cards.html#card-verification) will not happen even if it is enabled for that particular gateway.

        */
      
      update_payment_method(customer_id:string, input?:UpdatePaymentMethodInputParam):ChargebeeRequest<UpdatePaymentMethodResponse>;
       
      /**
        * @description This method is used for updating the &#x60;billing_address&#x60; and &#x60;vat_number&#x60; attributes of the &#x60;customer&#x60;. For updating the other customer attributes use [Update Customer API](customers#update_a_customer).

During this operation, if &#x60;billing_address&#x60; and &#x60;vat_number&#x60; are not already present, they&#x27;re added. Whereas if present, the existing values are replaced with the new values passed. The only exception here is for &#x60;entity_identifiers[i]&#x60; when &#x60;entity_identifiers[operation][i]&#x60; is passed as &#x60;delete&#x60;.

**Note:**When an invoice is generated for a customer, the billing address provided for the customer will be stored with the invoice. If the First Name, Last Name, and Company fields do not contain any information under Billing Info, the same will be picked from Customer Details if the same is available there.Please ensure that the VAT number is provided whenever the billing address is updated, as failing to do so will override any existing VAT numbers if new values are not provided.

        */
      
      update_billing_info(customer_id:string, input?:UpdateBillingInfoInputParam):ChargebeeRequest<UpdateBillingInfoResponse>;
       
      /**
        * @description This API retrieves all the contacts for a customer.

        */
      
      contacts_for_customer(customer_id:string, input?:ContactsForCustomerInputParam):ChargebeeRequest<ContactsForCustomerResponse>;
       
      /**
        * @description Assign Primary or Backup payment role or unassign role for the payment source based on the preference for the payment collection.

        */
      
      assign_payment_role(customer_id:string, input:AssignPaymentRoleInputParam):ChargebeeRequest<AssignPaymentRoleResponse>;
       
      /**
        * @description Adds the required contact to a customer. You can give the First Name, Last Name, Email ID and more details as input parameters to add them under the desired customer.

        */
      
      add_contact(customer_id:string, input?:AddContactInputParam):ChargebeeRequest<AddContactResponse>;
       
      /**
        * @description Updates the details of a contact for a customer. You can give the field data to be updated as input parameters along with the Contact ID to update it.

        */
      
      update_contact(customer_id:string, input?:UpdateContactInputParam):ChargebeeRequest<UpdateContactResponse>;
       
      /**
        * @description Deletes a particular contact for a customer. You can delete a contact by giving the Contact ID as the input parameter.

        */
      
      delete_contact(customer_id:string, input?:DeleteContactInputParam):ChargebeeRequest<DeleteContactResponse>;
       
      /**
        * @description Use this API to record any [excess payments](//www.chargebee.com/docs/customers.html#excess-payments) made by the customer, such as advance payments. Such payments will be automatically applied to the future invoices. It can also be [manually applied](//www.chargebee.com/docs/invoice-operations.html#apply-excess-payments) to the existing *Not Paid* or *Payment Due* invoices.

        */
      
      record_excess_payment(customer_id:string, input?:RecordExcessPaymentInputParam):ChargebeeRequest<RecordExcessPaymentResponse>;
       
      /**
        * @description **Note:** This operation optionally supports 3DS verification flow. To achieve the same, create the [Payment Intent](/docs/api/#3ds_card_payments) and pass it as input parameter to this API.

This API can be used to collect the payments for customer&#x27;s **payment_due** and **not_paid** invoices. You can either choose to collect the payment from an existing payment source or a new payment source. You can choose to either retain or discard the new payment source, which is being used for payment. If the amount collected exceeds the invoice amount, the surplus will be counted in as excess payments.

        */
      
      collect_payment(customer_id:string, input?:CollectPaymentInputParam):ChargebeeRequest<CollectPaymentResponse>;
       
      /**
        * @description Deletes a particular customer identified by the a unique identifier.

        */
      
      delete(customer_id:string, input?:DeleteInputParam):ChargebeeRequest<DeleteResponse>;
       
      /**
        * @description This API copies a customer object from one site to another. The destination site (the site to which the customer is copied) is specified by the path parameter &#x60;{site}&#x60;; whereas, the source site (the site from which the customer is copied) is specified by the query parameter &#x60;from_site&#x60;.

        */
      
      move(input:MoveInputParam):ChargebeeRequest<MoveResponse>;
       
      /**
        * @description Applicable when *calendar billing* (with customer specific billing date support) is enabled. Changes the customer&#x27;s *billing_date* and/or *billing_day_of_week*.

        */
      
      change_billing_date(customer_id:string, input?:ChangeBillingDateInputParam):ChargebeeRequest<ChangeBillingDateResponse>;
       
      /**
        * @description This API moves a customer&#x27;s payment methods, subscriptions, invoices, credit notes, transactions, unbilled charges, and orders to another customer. Events and email logs will not be moved. The API execution is asynchronous.  
**Note**

* Moving virtual bank accounts from one customer to another is not supported in this API.
* Merging customers from different [business entities](/docs/api?prod_cat_ver&#x3D;2#mbe) is not permitted.

        */
      
      merge(input:MergeInputParam):ChargebeeRequest<MergeResponse>;
       
      /**
        * @description Clear personal details of a customer using this API.

        */
      
      clear_personal_data(customer_id:string):ChargebeeRequest<ClearPersonalDataResponse>;
       
      /**
        * @description Sets a customer into a [hierarchical relationship](https://www.chargebee.com/docs/account-hierarchy.html) with another. The path parameter &#x60;customer_id&#x60; is the ID of the child in the relationship.  
**Note**

* In the descriptions for &#x60;use_default_hierarchy_settings&#x60;, &#x60;parent_account_access&#x60;, and &#x60;child_account_access&#x60; parameters, the &quot;parent&quot; is the customer whose ID is [payment_owner_id](/docs/api/customers?prod_cat_ver&#x3D;2#link_a_customer_payment_owner_id). However, if the &#x60;payment_owner_id&#x60; is set as the ID of the child itself (&#x60;{customer_id}&#x60;), then the &quot;parent&quot; is [parent_id](/docs/api/customers?prod_cat_ver&#x3D;2#link_a_customer_parent_id).
* The parent and the child customers must belong to the same [business entity](/docs/api?prod_cat_ver&#x3D;2#mbe).

        */
      
      relationships(customer_id:string, input?:RelationshipsInputParam):ChargebeeRequest<RelationshipsResponse>;
       
      /**
        * @description Disconnects a child customer from its parent. &#x60;customer_id&#x60; is the [id](/docs/api/customers#customer_id) of the child.

        */
      
      delete_relationship(customer_id:string):ChargebeeRequest<DeleteRelationshipResponse>;
       
      /**
        * @description Retrieves the [account hierarchy tree](/docs/api/hierarchies) for the customer.

        */
      
      hierarchy(customer_id:string, input:HierarchyInputParam):ChargebeeRequest<HierarchyResponse>;
       
      /**
        * @description Changes the level of access that the parent or the child itself has to the child&#x27;s information.

This data falls into two categories:  

* **Self-Serve Portal data:** subscriptions and invoices of the child.
* **Email Notifications:** subscription-, invoice- and payment-related notifications for the child.

The &#x27;parent&#x27; is the customer whose id is [payment_owner_id](/docs/api/customers#customer_relationship_payment_owner_id). However, if the &#x60;payment_owner_id&#x60; is the child itself, then the parent is [parent_id](/docs/api/customers#customer_relationship_parent_id). The path parameter &#x60;customer_id&#x60; is the [id](/docs/api/customers#customer_id) of the child in the relationship.



**Note:** This endpoint cannot be used to change the &#x60;parent_id&#x60;, &#x60;invoice_owner_id&#x60; or &#x60;payment_owner_id&#x60; for the customer. To change them, [delink](/docs/api/customers#delink_a_customer) the customer and then call **Link a customer** again.

        */
      
      update_hierarchy_settings(customer_id:string, input?:UpdateHierarchySettingsInputParam):ChargebeeRequest<UpdateHierarchySettingsResponse>;
    }
    export interface CreateResponse {  
       customer:Customer;
       
       card?:Card;
    }
    export interface CreateInputParam {
      [key : string] : any;  
      /**
        * @description Id for the new customer. If not given, this will be auto-generated.

        */
       
      id?:string;
       
      /**
        * @description First name of the customer.

        */
       
      first_name?:string;
       
      /**
        * @description Last name of the customer.

        */
       
      last_name?:string;
       
      /**
        * @description Email of the customer. Configured email notifications will be sent to this email.

        */
       
      email?:string;
       
      /**
        * @description The currency code (ISO 4217 format) of the customer. Applicable if Multicurrency is enabled.

        */
       
      preferred_currency_code?:string;
       
      /**
        * @description Phone number of the customer.

        */
       
      phone?:string;
       
      /**
        * @description Company name of the customer.

        */
       
      company?:string;
       
      /**
        * @description Whether payments needs to be collected automatically for this customer. \* on - Whenever an invoice is created, an automatic attempt to charge the customer&#x27;s payment method is made. \* off - Automatic collection of charges will not be made. All payments must be recorded offline.

        */
       
      auto_collection?:AutoCollection;
       
      /**
        * @description The number of days within which the customer has to make payment for the invoice. .

        */
       
      net_term_days?:number;
       
      /**
        * @description Whether the customer can pay via Direct Debit.

        */
       
      allow_direct_debit?:boolean;
       
      /**
        * @description The VAT/tax registration number for the customer. For customers with [billing_address](customers#customer_billing_address) &#x60;country&#x60; as &#x60;XI&#x60; (which is **United Kingdom - Northern Ireland** ), the first two characters of the [full VAT
number](https://en.wikipedia.org/wiki/VAT_identification_number) can be overridden by setting [vat_number_prefix](customers#customer_vat_number_prefix).

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
        * @description The Peppol BIS scheme associated with the [vat_number](customers#customer_vat_number) of the customer. This helps identify the specific type of customer entity. For example, &#x60;DE:VAT&#x60; is used for a German business entity while &#x60;DE:LWID45&#x60; is used for a German government entity. The value must be from the list of possible values and must correspond to the country provided under &#x60;billing_address.country&#x60;. See [list of possible values](https://www.chargebee.com/docs/e-invoicing.html#supported-countries).  
**Tip:**


If there are additional entity identifiers for the customer not associated with the &#x60;vat_number&#x60;, they can be provided as the &#x60;entity_identifiers[]&#x60; array.
.

        */
       
      entity_identifier_scheme?:string;
       
      /**
        * @description The standard used for specifying the &#x60;entity_identifier_scheme&#x60;. Currently only &#x60;iso6523-actorid-upis&#x60; is supported and is used by default when not provided.  
**Tip:**


If there are additional entity identifiers for the customer not associated with the &#x60;vat_number&#x60;, they can be provided as the &#x60;entity_identifiers[]&#x60; array.
.

        */
       
      entity_identifier_standard?:string;
       
      /**
        * @description Confirms that a customer is registered under GST. If set to &#x60;true&#x60; then the [Reverse Charge Mechanism](https://www.chargebee.com/docs/australian-gst.html#reverse-charge-mechanism) is applicable. This field is applicable only when Australian GST is configured for your site.

        */
       
      registered_for_gst?:boolean;
       
      /**
        * @description Determines whether the customer is e-invoiced. When set to &#x60;true&#x60; or not set to any value, the customer is e-invoiced so long as e-invoicing is enabled for their country (&#x60;billing_address.country&#x60;). When set to &#x60;false&#x60;, the customer is not e-invoiced even if e-invoicing is enabled for their country.  
**Tip:**


It is possible to set a value for this flag even when E-Invoicing is disabled. However, it comes into effect only when E-Invoicing is enabled.
.

        */
       
      is_einvoice_enabled?:boolean;
       
      /**
        * @description Determines whether to send an e-invoice manually or automatic. \* automatic - Use this value to send e-invoice every time an invoice or credit note is created. \* manual - When manual is selected the automatic e-invoice sending is disabled. Use this value to send e-invoice manually through UI or API. \* site_default - The default value of the site which can be overridden at the customer level.

        */
       
      einvoicing_method?:EinvoicingMethod;
       
      /**
        * @description Specifies if the customer is liable for tax. \* taxable - Computes tax for the customer based on the [site configuration](https://www.chargebee.com/docs/tax.html). In some cases, depending on the region, shipping_address is needed. If not provided, then billing_address is used to compute tax. If that&#x27;s not available either, the tax is taken as zero. \* exempt -

* Customer is exempted from tax. When using Chargebee&#x27;s native [Taxes](https://www.chargebee.com/docs/tax.html) feature or when using the [TaxJar integration](https://www.chargebee.com/docs/taxjar.html), no other action is needed.
* However, when using our [Avalara integration](https://www.chargebee.com/docs/avalara.html), optionally, specify &#x60;entity_code&#x60; or &#x60;exempt_number&#x60; attributes if you use Chargebee&#x27;s [AvaTax for Sales](https://www.chargebee.com/docs/avalara.html#configuring-tax-exemption) or specify &#x60;exemption_details&#x60; attribute if you use [Chargebee&#x27;s AvaTax for Communications](https://www.chargebee.com/docs/avatax-for-communication.html) integration. Tax may still be applied by Avalara for certain values of &#x60;entity_code&#x60;/&#x60;exempt_number&#x60;/&#x60;exemption_details&#x60; based on the state/region/province of the taxable address.

        */
       
      taxability?:Taxability;
       
      /**
        * @description Indicates the exemption information. You can customize customer exemption based on specific Location, Tax level (Federal, State, County and Local), Category of Tax or specific Tax Name. This is applicable only if you use [Chargebee&#x27;s AvaTax for Communications](https://www.chargebee.com/docs/avatax-for-communication.html) integration.  
To know more about what values you need to provide, refer to this [Avalara&#x27;s API document](https://developer.avalara.com/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/exemption/).

        */
       
      exemption_details?:any[];
       
      /**
        * @description Indicates the type of the customer. This is applicable only if you use [Chargebee&#x27;s AvaTax for Communications](https://www.chargebee.com/docs/avatax-for-communication.html) integration. \* industrial - When the purchase is made by an industrial business \* senior_citizen - When the purchase is made by a customer who meets the jurisdiction requirements to be considered a senior citizen and qualifies for senior citizen tax breaks \* business - When the purchase is made at a place of business \* residential - When the purchase is made by a customer for home use

        */
       
      customer_type?:CustomerType;
       
      /**
        * @description Indicates the Client profile id for the customer. This is applicable only if you use [Chargebee&#x27;s AvaTax for Communications](https://www.chargebee.com/docs/avatax-for-communication.html) integration.

        */
       
      client_profile_id?:string;
       
      /**
        * @description Indicates the exemption type of the customer. This is applicable only if you use Chargebee&#x27;s TaxJar integration. \* other - Other \* government - Government \* wholesale - Whole-sale

        */
       
      taxjar_exemption_category?:TaxjarExemptionCategory;
       
      /**
        * @description Confirms that a customer is a valid business without an EU/UK VAT number.

        */
       
      business_customer_without_vat_number?:boolean;
       
      /**
        * @description Determines which region-specific language Chargebee uses to communicate with the customer. In the absence of the locale attribute, Chargebee will use your site&#x27;s default language for customer communication.

        */
       
      locale?:string;
       
      /**
        * @description The exemption category of the customer, for USA and Canada. Applicable if you use Chargebee&#x27;s [AvaTax for Sales integration](https://www.chargebee.com/docs/avalara.html#configuring-tax-exemption). \* l - Other or custom \* m - Educational organization \* n - Local government \* h - Commercial agricultural production \* i - Industrial production/manufacturer \* j - Direct pay permit \* k - Direct mail \* p - Commercial aquaculture \* q - Commercial Fishery \* r - Non-resident \* med2 - US Medical Device Excise Tax with taxable sales tax \* med1 - US Medical Device Excise Tax with exempt sales tax \* d - Foreign diplomat \* e - Charitable or benevolent organization \* f - Religious organization \* g - Resale \* a - Federal government \* b - State government \* c - Tribe/Status Indian/Indian Band

        */
       
      entity_code?:EntityCode;
       
      /**
        * @description Any string value that will cause the sale to be exempted. Use this if your finance team manually verifies and tracks exemption certificates. Applicable if you use Chargebee&#x27;s [AvaTax for Sales integration](https://www.chargebee.com/docs/avalara.html#configuring-tax-exemption).

        */
       
      exempt_number?:string;
       
      /**
        * @description A collection of key-value pairs that provides extra information about the customer.  
**Note:** There&#x27;s a character limit of 65,535.
[Learn more](advanced-features?prod_cat_ver&#x3D;2#metadata).

        */
       
      meta_data?:object;
       
      /**
        * @description The preferred offline payment method for the customer. \* sepa_credit - SEPA Credit \* cash - Cash \* no_preference - No Preference \* bank_transfer - Bank Transfer \* boleto - Boleto \* check - Check \* ach_credit - ACH Credit

        */
       
      offline_payment_method?:OfflinePaymentMethod;
       
      /**
        * @description Override for this customer, the [site-level setting](https://www.chargebee.com/docs/2.0/metered_billing.html#configuring-metered-billing) for auto-closing invoices. Only applicable when auto-closing invoices has been enabled for the site. This attribute is also available at the [subscription level](/docs/api/subscriptions?prod_cat_ver&#x3D;2#subscription_auto_close_invoices) which takes precedence.

        */
       
      auto_close_invoices?:boolean;
       
      /**
        * @description Indicates whether invoices raised on the same day for the &#x60;customer&#x60; are consolidated. When provided, this overrides the default configuration at the [site-level](https://www.chargebee.com/docs/consolidated-invoicing.html#configuring-consolidated-invoicing). This parameter can be provided only when [Consolidated Invoicing](https://www.chargebee.com/docs/consolidated-invoicing.html) is enabled.  
**Note:**

Any invoices raised when a subscription activates from &#x60;in_trial&#x60; or &#x60;future&#x60; &#x60;status&#x60;, are not consolidated by default. [Contact Support](https://chargebee.freshdesk.com/support/home) to enable consolidation for such invoices.
.

        */
       
      consolidated_invoicing?:boolean;
       
      /**
        * @description The Chargebee payment token generated by Chargebee JS.

        */
       
      token_id?:string;
       
      /**
        * @description The unique ID of the [business entity](https://apidocs.chargebee.com/docs/api/advanced-features?prod_cat_ver&#x3D;2#mbe) this customer should be [linked](https://apidocs.chargebee.com/docs/api/advanced-features?prod_cat_ver&#x3D;2#mbe-linked-be) to. Applicable only when multiple business entities have been created for the site. When not provided, the customer is linked to the [default business entity](https://apidocs.chargebee.com/docs/api/advanced-features?prod_cat_ver&#x3D;2#mbe-default-be) defined for the site.  
**Note**

An alternative way of passing this parameter is by means of a [custom HTTP header](https://apidocs.chargebee.com/docs/api/advanced-features?prod_cat_ver&#x3D;2#mbe-header-main).
.

        */
       
      business_entity_id?:string;
       
      /**
        * @description A customer-facing note added to all invoices associated with this API resource. This note becomes one among [all the notes](/docs/api/invoices#invoice_notes) displayed on the invoice PDF.

        */
       
      invoice_notes?:string;
       
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
        * @description Parameters for billing_address

        */
       
      billing_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      /**
        * @description Parameters for entity_identifiers

        */
       
      entity_identifiers?:{id?:string,scheme?:string,standard?:string,value?:string}[];
    }
    export interface ListResponse {  
      /**
        * @description Retrieves a list of customers added to your Chargebee site. The list contains the necessary customer details such as First Name, Last Name and the Customer ID.

        */
       
       list:{customer:Customer,card?:Card}[];
       
      /**
        * @description Retrieves a list of customers added to your Chargebee site. The list contains the necessary customer details such as First Name, Last Name and the Customer ID.

        */
       
       next_offset?:string;
    }
    export interface ListInputParam {
      [key : string]: any;  
      /**
        * @description Retrieves a list of customers added to your Chargebee site. The list contains the necessary customer details such as First Name, Last Name and the Customer ID.

        */
        
      limit?:number;
       
      /**
        * @description Retrieves a list of customers added to your Chargebee site. The list contains the necessary customer details such as First Name, Last Name and the Customer ID.

        */
        
      offset?:string;
       
      /**
        * @description Retrieves a list of customers added to your Chargebee site. The list contains the necessary customer details such as First Name, Last Name and the Customer ID.

        */
        
      include_deleted?:boolean;
       
      /**
        * @description Retrieves a list of customers added to your Chargebee site. The list contains the necessary customer details such as First Name, Last Name and the Customer ID.

        */
        
      id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Retrieves a list of customers added to your Chargebee site. The list contains the necessary customer details such as First Name, Last Name and the Customer ID.

        */
        
      first_name?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string};
       
      /**
        * @description Retrieves a list of customers added to your Chargebee site. The list contains the necessary customer details such as First Name, Last Name and the Customer ID.

        */
        
      last_name?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string};
       
      /**
        * @description Retrieves a list of customers added to your Chargebee site. The list contains the necessary customer details such as First Name, Last Name and the Customer ID.

        */
        
      email?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string};
       
      /**
        * @description Retrieves a list of customers added to your Chargebee site. The list contains the necessary customer details such as First Name, Last Name and the Customer ID.

        */
        
      company?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string};
       
      /**
        * @description Retrieves a list of customers added to your Chargebee site. The list contains the necessary customer details such as First Name, Last Name and the Customer ID.

        */
        
      phone?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string};
       
      /**
        * @description Retrieves a list of customers added to your Chargebee site. The list contains the necessary customer details such as First Name, Last Name and the Customer ID.

        */
        
      auto_collection?:{in?:string,is?:'off' | 'on',is_not?:'off' | 'on',not_in?:string};
       
      /**
        * @description Retrieves a list of customers added to your Chargebee site. The list contains the necessary customer details such as First Name, Last Name and the Customer ID.

        */
        
      taxability?:{in?:string,is?:'taxable' | 'exempt',is_not?:'taxable' | 'exempt',not_in?:string};
       
      /**
        * @description Retrieves a list of customers added to your Chargebee site. The list contains the necessary customer details such as First Name, Last Name and the Customer ID.

        */
        
      created_at?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description Retrieves a list of customers added to your Chargebee site. The list contains the necessary customer details such as First Name, Last Name and the Customer ID.

        */
        
      updated_at?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description Retrieves a list of customers added to your Chargebee site. The list contains the necessary customer details such as First Name, Last Name and the Customer ID.

        */
        
      business_entity_id?:{is?:string,is_not?:string,starts_with?:string};
       
      /**
        * @description Retrieves a list of customers added to your Chargebee site. The list contains the necessary customer details such as First Name, Last Name and the Customer ID.

        */
        
      offline_payment_method?:{in?:string,is?:'bank_transfer' | 'no_preference' | 'ach_credit' | 'boleto' | 'check' | 'sepa_credit' | 'cash',is_not?:'bank_transfer' | 'no_preference' | 'ach_credit' | 'boleto' | 'check' | 'sepa_credit' | 'cash',not_in?:string};
       
      /**
        * @description Retrieves a list of customers added to your Chargebee site. The list contains the necessary customer details such as First Name, Last Name and the Customer ID.

        */
        
      auto_close_invoices?:{is?:'true' | 'false'};
       
      /**
        * @description Retrieves a list of customers added to your Chargebee site. The list contains the necessary customer details such as First Name, Last Name and the Customer ID.

        */
        
      channel?:{in?:string,is?:'app_store' | 'web' | 'play_store',is_not?:'app_store' | 'web' | 'play_store',not_in?:string};
       
      /**
        * @description Retrieves a list of customers added to your Chargebee site. The list contains the necessary customer details such as First Name, Last Name and the Customer ID.

        */
        
      sort_by?:{asc?:'updated_at' | 'created_at',desc?:'updated_at' | 'created_at'};
       
      /**
        * @description Retrieves a list of customers added to your Chargebee site. The list contains the necessary customer details such as First Name, Last Name and the Customer ID.

        */
        
      relationship?:{invoice_owner_id?:{is?:string,is_not?:string,starts_with?:string},parent_id?:{is?:string,is_not?:string,starts_with?:string},payment_owner_id?:{is?:string,is_not?:string,starts_with?:string}};
    }
    export interface RetrieveResponse {  
       customer:Customer;
       
       card?:Card;
    }
    
    export interface UpdateResponse {  
       customer:Customer;
       
       card?:Card;
    }
    export interface UpdateInputParam {
      [key : string] : any;  
      /**
        * @description First name of the customer.

        */
       
      first_name?:string;
       
      /**
        * @description Last name of the customer.

        */
       
      last_name?:string;
       
      /**
        * @description Email of the customer. Configured email notifications will be sent to this email.

        */
       
      email?:string;
       
      /**
        * @description The currency code (ISO 4217 format) of the customer. Applicable if Multicurrency is enabled.

        */
       
      preferred_currency_code?:string;
       
      /**
        * @description Phone number of the customer.

        */
       
      phone?:string;
       
      /**
        * @description Company name of the customer.

        */
       
      company?:string;
       
      /**
        * @description Whether payments needs to be collected automatically for this customer. \* on - Whenever an invoice is created, an automatic attempt to charge the customer&#x27;s payment method is made. \* off - Automatic collection of charges will not be made. All payments must be recorded offline.

        */
       
      auto_collection?:AutoCollection;
       
      /**
        * @description Whether the customer can pay via Direct Debit.

        */
       
      allow_direct_debit?:boolean;
       
      /**
        * @description The number of days within which the customer has to make payment for the invoice. .

        */
       
      net_term_days?:number;
       
      /**
        * @description Specifies if the customer is liable for tax. \* taxable - Computes tax for the customer based on the [site configuration](https://www.chargebee.com/docs/tax.html). In some cases, depending on the region, shipping_address is needed. If not provided, then billing_address is used to compute tax. If that&#x27;s not available either, the tax is taken as zero. \* exempt -

* Customer is exempted from tax. When using Chargebee&#x27;s native [Taxes](https://www.chargebee.com/docs/tax.html) feature or when using the [TaxJar integration](https://www.chargebee.com/docs/taxjar.html), no other action is needed.
* However, when using our [Avalara integration](https://www.chargebee.com/docs/avalara.html), optionally, specify &#x60;entity_code&#x60; or &#x60;exempt_number&#x60; attributes if you use Chargebee&#x27;s [AvaTax for Sales](https://www.chargebee.com/docs/avalara.html#configuring-tax-exemption) or specify &#x60;exemption_details&#x60; attribute if you use [Chargebee&#x27;s AvaTax for Communications](https://www.chargebee.com/docs/avatax-for-communication.html) integration. Tax may still be applied by Avalara for certain values of &#x60;entity_code&#x60;/&#x60;exempt_number&#x60;/&#x60;exemption_details&#x60; based on the state/region/province of the taxable address.

        */
       
      taxability?:Taxability;
       
      /**
        * @description Indicates the exemption information. You can customize customer exemption based on specific Location, Tax level (Federal, State, County and Local), Category of Tax or specific Tax Name. This is applicable only if you use [Chargebee&#x27;s AvaTax for Communications](https://www.chargebee.com/docs/avatax-for-communication.html) integration.  
To know more about what values you need to provide, refer to this [Avalara&#x27;s API document](https://developer.avalara.com/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/exemption/).

        */
       
      exemption_details?:any[];
       
      /**
        * @description Indicates the type of the customer. This is applicable only if you use [Chargebee&#x27;s AvaTax for Communications](https://www.chargebee.com/docs/avatax-for-communication.html) integration. \* senior_citizen - When the purchase is made by a customer who meets the jurisdiction requirements to be considered a senior citizen and qualifies for senior citizen tax breaks \* industrial - When the purchase is made by an industrial business \* business - When the purchase is made at a place of business \* residential - When the purchase is made by a customer for home use

        */
       
      customer_type?:CustomerType;
       
      /**
        * @description Indicates the Client profile id for the customer. This is applicable only if you use [Chargebee&#x27;s AvaTax for Communications](https://www.chargebee.com/docs/avatax-for-communication.html) integration.

        */
       
      client_profile_id?:string;
       
      /**
        * @description Indicates the exemption type of the customer. This is applicable only if you use Chargebee&#x27;s TaxJar integration. \* government - Government \* other - Other \* wholesale - Whole-sale

        */
       
      taxjar_exemption_category?:TaxjarExemptionCategory;
       
      /**
        * @description Determines which region-specific language Chargebee uses to communicate with the customer. In the absence of the locale attribute, Chargebee will use your site&#x27;s default language for customer communication.

        */
       
      locale?:string;
       
      /**
        * @description The exemption category of the customer, for USA and Canada. Applicable if you use Chargebee&#x27;s [AvaTax for Sales integration](https://www.chargebee.com/docs/avalara.html#configuring-tax-exemption). \* med2 - US Medical Device Excise Tax with taxable sales tax \* med1 - US Medical Device Excise Tax with exempt sales tax \* d - Foreign diplomat \* e - Charitable or benevolent organization \* f - Religious organization \* g - Resale \* a - Federal government \* b - State government \* c - Tribe/Status Indian/Indian Band \* l - Other or custom \* m - Educational organization \* n - Local government \* h - Commercial agricultural production \* i - Industrial production/manufacturer \* j - Direct pay permit \* k - Direct mail \* p - Commercial aquaculture \* q - Commercial Fishery \* r - Non-resident

        */
       
      entity_code?:EntityCode;
       
      /**
        * @description Any string value that will cause the sale to be exempted. Use this if your finance team manually verifies and tracks exemption certificates. Applicable if you use Chargebee&#x27;s [AvaTax for Sales integration](https://www.chargebee.com/docs/avalara.html#configuring-tax-exemption).

        */
       
      exempt_number?:string;
       
      /**
        * @description The preferred offline payment method for the customer. \* bank_transfer - Bank Transfer \* boleto - Boleto \* sepa_credit - SEPA Credit \* cash - Cash \* check - Check \* no_preference - No Preference \* ach_credit - ACH Credit

        */
       
      offline_payment_method?:OfflinePaymentMethod;
       
      /**
        * @description A customer-facing note added to all invoices associated with this API resource. This note becomes one among [all the notes](/docs/api/invoices#invoice_notes) displayed on the invoice PDF.

        */
       
      invoice_notes?:string;
       
      /**
        * @description Override for this customer, the [site-level setting](https://www.chargebee.com/docs/2.0/metered_billing.html#configuring-metered-billing) for auto-closing invoices. Only applicable when auto-closing invoices has been enabled for the site. This attribute is also available at the [subscription level](/docs/api/subscriptions?prod_cat_ver&#x3D;2#subscription_auto_close_invoices) which takes precedence.

        */
       
      auto_close_invoices?:boolean;
       
      /**
        * @description A collection of key-value pairs that provides extra information about the customer.  
**Note:** There&#x27;s a character limit of 65,535.
[Learn more](advanced-features?prod_cat_ver&#x3D;2#metadata).

        */
       
      meta_data?:object;
       
      /**
        * @description Indicates whether or not the customer has been identified as fraudulent. \* fraudulent - The customer has been marked as fraudulent \* suspicious - The customer has been identified as potentially fraudulent by the gateway \* safe - The customer has been marked as safe

        */
       
      fraud_flag?:'safe' | 'fraudulent';
       
      /**
        * @description Indicates whether invoices raised on the same day for the &#x60;customer&#x60; are consolidated. When provided, this overrides the default configuration at the [site-level](https://www.chargebee.com/docs/consolidated-invoicing.html#configuring-consolidated-invoicing). This parameter can be provided only when [Consolidated Invoicing](https://www.chargebee.com/docs/consolidated-invoicing.html) is enabled.  
**Note:**

Any invoices raised when a subscription activates from &#x60;in_trial&#x60; or &#x60;future&#x60; &#x60;status&#x60;, are not consolidated by default. [Contact Support](https://chargebee.freshdesk.com/support/home) to enable consolidation for such invoices.
.

        */
       
      consolidated_invoicing?:boolean;
    }
    export interface UpdatePaymentMethodResponse {  
       customer:Customer;
       
       card?:Card;
    }
    export interface UpdatePaymentMethodInputParam {
       
      /**
        * @description Parameters for payment_method

        */
       
      payment_method?:{additional_information?:object,gateway_account_id?:string,issuing_country?:string,reference_id?:string,tmp_token?:string,type:Type};
    }
    export interface UpdateBillingInfoResponse {  
       customer:Customer;
       
       card?:Card;
    }
    export interface UpdateBillingInfoInputParam {
       
      /**
        * @description The VAT/tax registration number for the customer. For customers with [billing_address](customers#customer_billing_address) &#x60;country&#x60; as &#x60;XI&#x60; (which is **United Kingdom - Northern Ireland** ), the first two characters of the [full VAT
number](https://en.wikipedia.org/wiki/VAT_identification_number) can be overridden by setting [vat_number_prefix](customers#customer_vat_number_prefix).

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
        * @description The Peppol BIS scheme associated with the [vat_number](customers#customer_vat_number) of the customer. This helps identify the specific type of customer entity. For example, &#x60;DE:VAT&#x60; is used for a German business entity while &#x60;DE:LWID45&#x60; is used for a German government entity. The value must be from the list of possible values and must correspond to the country provided under &#x60;billing_address.country&#x60;. See [list of possible values](https://www.chargebee.com/docs/e-invoicing.html#supported-countries).  
**Tip:**


If there are additional entity identifiers for the customer not associated with the &#x60;vat_number&#x60;, they can be provided as the &#x60;entity_identifiers[]&#x60; array.
.

        */
       
      entity_identifier_scheme?:string;
       
      /**
        * @description The standard used for specifying the &#x60;entity_identifier_scheme&#x60;. Currently only &#x60;iso6523-actorid-upis&#x60; is supported and is used by default when not provided.  
**Tip:**


If there are additional entity identifiers for the customer not associated with the &#x60;vat_number&#x60;, they can be provided as the &#x60;entity_identifiers[]&#x60; array.
.

        */
       
      entity_identifier_standard?:string;
       
      /**
        * @description Confirms that a customer is registered under GST. If set to &#x60;true&#x60; then the [Reverse Charge Mechanism](https://www.chargebee.com/docs/australian-gst.html#reverse-charge-mechanism) is applicable. This field is applicable only when Australian GST is configured for your site.

        */
       
      registered_for_gst?:boolean;
       
      /**
        * @description Confirms that a customer is a valid business without an EU/UK VAT number.

        */
       
      business_customer_without_vat_number?:boolean;
       
      /**
        * @description Determines whether the customer is e-invoiced. When set to &#x60;true&#x60; or not set to any value, the customer is e-invoiced so long as e-invoicing is enabled for their country (&#x60;billing_address.country&#x60;). When set to &#x60;false&#x60;, the customer is not e-invoiced even if e-invoicing is enabled for their country.  
**Tip:**


It is possible to set a value for this flag even when E-Invoicing is disabled. However, it comes into effect only when E-Invoicing is enabled.
.

        */
       
      is_einvoice_enabled?:boolean;
       
      /**
        * @description Determines whether to send einvoice manually or automatic. \* automatic - Use this value to send e-invoice every time an invoice or credit note is created. \* manual - When manual is selected the automatic e-invoice sending is disabled. Use this value to send e-invoice manually through UI or API. \* site_default - The default value of the site which can be overridden at the customer level.

        */
       
      einvoicing_method?:EinvoicingMethod;
       
      /**
        * @description Parameters for billing_address

        */
       
      billing_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
       
      /**
        * @description Parameters for entity_identifiers

        */
       
      entity_identifiers?:{id?:string,operation?:Operation,scheme?:string,standard?:string,value?:string}[];
    }
    export interface ContactsForCustomerResponse {  
      /**
        * @description This API retrieves all the contacts for a customer.

        */
       
       list:{contact:Contact}[];
       
      /**
        * @description This API retrieves all the contacts for a customer.

        */
       
       next_offset?:string;
    }
    export interface ContactsForCustomerInputParam {
      [key : string]: any;  
      /**
        * @description This API retrieves all the contacts for a customer.

        */
        
      limit?:number;
       
      /**
        * @description This API retrieves all the contacts for a customer.

        */
        
      offset?:string;
    }
    export interface AssignPaymentRoleResponse {  
       customer:Customer;
       
       payment_source:PaymentSource;
    }
    export interface AssignPaymentRoleInputParam {
       
      /**
        * @description Payment source id this role will be assigned to.

        */
       
      payment_source_id:string;
       
      /**
        * @description Indicates whether the payment source is Primary, Backup, or neither. \* backup - Backup \* none - None \* primary - Primary

        */
       
      role:Role;
    }
    export interface AddContactResponse {  
       customer:Customer;
       
       card?:Card;
    }
    export interface AddContactInputParam {
       
      /**
        * @description Parameters for contact

        */
       
      contact?:{email:string,enabled?:boolean,first_name?:string,id?:string,label?:string,last_name?:string,phone?:string,send_account_email?:boolean,send_billing_email?:boolean};
    }
    export interface UpdateContactResponse {  
       customer:Customer;
       
       card?:Card;
    }
    export interface UpdateContactInputParam {
       
      /**
        * @description Parameters for contact

        */
       
      contact?:{email?:string,enabled?:boolean,first_name?:string,id:string,label?:string,last_name?:string,phone?:string,send_account_email?:boolean,send_billing_email?:boolean};
    }
    export interface DeleteContactResponse {  
       customer:Customer;
       
       card?:Card;
    }
    export interface DeleteContactInputParam {
       
      /**
        * @description Parameters for contact

        */
       
      contact?:{id:string};
    }
    export interface RecordExcessPaymentResponse {  
       customer:Customer;
       
       transaction:Transaction;
    }
    export interface RecordExcessPaymentInputParam {
       
      /**
        * @description Remarks, if any, on the payment.

        */
       
      comment?:string;
       
      /**
        * @description Parameters for transaction

        */
       
      transaction?:{amount:number,currency_code?:string,date:number,payment_method:PaymentMethod,reference_number?:string};
    }
    export interface CollectPaymentResponse {  
       customer:Customer;
       
       transaction:Transaction;
    }
    export interface CollectPaymentInputParam {
       
      /**
        * @description Amount to be collected. If this parameter is not passed then the invoice(s) amount to collect will be collected.

        */
       
      amount?:number;
       
      /**
        * @description Payment source used for the payment.

        */
       
      payment_source_id?:string;
       
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
        * @description The type of initiator to be used for the payment request triggered by this operation. \* customer - Pass this value to indicate that the request is initiated by the customer \* merchant - Pass this value to indicate that the request is initiated by the merchant

        */
       
      payment_initiator?:PaymentInitiator;
       
      /**
        * @description Parameters for payment_method

        */
       
      payment_method?:{additional_information?:object,gateway_account_id?:string,reference_id?:string,tmp_token?:string,type?:Type};
       
      /**
        * @description Parameters for card

        */
       
      card?:{additional_information?:object,billing_addr1?:string,billing_addr2?:string,billing_city?:string,billing_country?:string,billing_state?:string,billing_state_code?:string,billing_zip?:string,cvv?:string,expiry_month?:number,expiry_year?:number,first_name?:string,gateway_account_id?:string,last_name?:string,number?:string};
       
      /**
        * @description Parameters for payment_intent

        */
       
      payment_intent?:{additional_information?:object,gateway_account_id?:string,gw_token?:string,id?:string,payment_method_type?:'giropay' | 'ideal' | 'sepa_instant_transfer' | 'google_pay' | 'netbanking_emandates' | 'dotpay' | 'boleto' | 'direct_debit' | 'faster_payments' | 'sofort' | 'upi' | 'venmo' | 'amazon_payments' | 'apple_pay' | 'bancontact' | 'paypal_express_checkout' | 'pay_to' | 'card',reference_id?:string};
       
      /**
        * @description Parameters for invoice_allocations

        */
       
      invoice_allocations?:{allocation_amount?:number,invoice_id:string}[];
    }
    export interface DeleteResponse {  
       customer:Customer;
       
       card?:Card;
    }
    export interface DeleteInputParam {
       
      /**
        * @description Deletes the Payment Method from the gateway/vault.

        */
       
      delete_payment_method?:boolean;
    }
    export interface MoveResponse {  
       resource_migration:ResourceMigration;
    }
    export interface MoveInputParam {
       
      /**
        * @description Id of the customer to be copied.

        */
       
      id_at_from_site:string;
       
      /**
        * @description Name of the site from which this customer need to be copied.

        */
       
      from_site:string;
    }
    export interface ChangeBillingDateResponse {  
       customer:Customer;
    }
    export interface ChangeBillingDateInputParam {
       
      /**
        * @description Applicable when *calendar billing* (with customer specific billing date support) is enabled. When set, renewals of all the monthly and yearly subscriptions of this customer will be aligned to this date.

        */
       
      billing_date?:number;
       
      /**
        * @description &#x60;billing_month&#x60;, together with &#x60;billing_date&#x60;, specify, for this customer, the day of the year when the renewals of all the year-based subscriptions take place.

For example, the renewals happen on 15th July when &#x60;billing_month&#x60; is &#x60;7&#x60; and &#x60;billing_date&#x60; is &#x60;15&#x60;.  
**Note**

Applicable when [Calendar Billing](https://www.chargebee.com/docs/calendar-billing.html) (with customer-specific billing date support) is enabled and &#x60;billing_date_mode&#x60; is &#x60;manually_set&#x60;.

        */
       
      billing_month?:number;
       
      /**
        * @description Indicates whether this customer&#x27;s *billing_date* value is derived as per configurations or its specifically set (overriden). When specifically set, the *billing_date* will not be reset even when all of the monthly/yearly subscriptions are cancelled. \* manually_set - Billing date is specifically set (default configuration is overridden) \* using_defaults - Billing date is set based on defaults configured.

        */
       
      billing_date_mode?:BillingDateMode;
       
      /**
        * @description Applicable when *calendar billing* (with customer specific billing date support) is enabled. When set, renewals of all the weekly subscriptions of this customer will be aligned to this week day. \* sunday - Sunday \* wednesday - Wednesday \* tuesday - Tuesday \* monday - Monday \* saturday - Saturday \* friday - Friday \* thursday - Thursday

        */
       
      billing_day_of_week?:'sunday' | 'saturday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'monday';
       
      /**
        * @description Indicates whether this customer&#x27;s *billing_day_of_week* value is derived as per configurations or its specifically set (overriden). When specifically set, the *billing_day_of_week* will not be reset even when all of the weekly subscriptions are cancelled. \* manually_set - Billing date is specifically set (default configuration is overridden) \* using_defaults - Billing date is set based on defaults configured.

        */
       
      billing_day_of_week_mode?:BillingDayOfWeekMode;
    }
    export interface MergeResponse {  
       customer:Customer;
    }
    export interface MergeInputParam {
       
      /**
        * @description From customer id.

        */
       
      from_customer_id:string;
       
      /**
        * @description To customer id.

        */
       
      to_customer_id:string;
    }
    export interface ClearPersonalDataResponse {  
       customer:Customer;
    }
    
    export interface RelationshipsResponse {  
       customer:Customer;
    }
    export interface RelationshipsInputParam {
       
      /**
        * @description The &#x60;id&#x60; of the customer which is to be set as the immediate parent.

        */
       
      parent_id?:string;
       
      /**
        * @description The &#x60;id&#x60; of the customer who will pay the invoices for this customer. Can be the child itself or the &#x60;invoice_owner_id&#x60;.

        */
       
      payment_owner_id?:string;
       
      /**
        * @description The &#x60;id&#x60; of the customer who will be invoiced for charges incurred. Can be the child itself or any parent in its hierarchy.

        */
       
      invoice_owner_id?:string;
       
      /**
        * @description The level of access that the parent and the child itself have to the child&#x27;s information can be set here. This data falls into two categories:

* **Self-Serve Portal data:** subscriptions and invoices of the child.
* **Email Notifications:** subscription-, invoice- and payment-related notifications for the child.



**Usage:**

* Value set to &#x60;true&#x60;: Applies the global access levels defined in the Account Hierarchy settings to this child. These global settings are configured in the admin console
* Value set to &#x60;false&#x60;: Customizes the access levels for this customer. Pass the &#x60;parent_account_access&#x60; and &#x60;child_account_access&#x60; parameters to specify the settings. If you skip passing any parameters, the global settings are applied for them.
.

        */
       
      use_default_hierarchy_settings?:boolean;
       
      /**
        * @description Parameters for parent_account_access

        */
       
      parent_account_access?:{portal_download_child_invoices?:'no' | 'yes' | 'view_only',portal_edit_child_subscriptions?:'no' | 'yes' | 'view_only',send_invoice_emails?:boolean,send_payment_emails?:boolean,send_subscription_emails?:boolean};
       
      /**
        * @description Parameters for child_account_access

        */
       
      child_account_access?:{portal_download_invoices?:'no' | 'yes' | 'view_only',portal_edit_subscriptions?:'yes' | 'view_only',send_invoice_emails?:boolean,send_payment_emails?:boolean,send_subscription_emails?:boolean};
    }
    export interface DeleteRelationshipResponse {  
       customer:Customer;
    }
    
    export interface HierarchyResponse {  
       hierarchies:Hierarchy[];
    }
    export interface HierarchyInputParam {
       
      /**
        * @description Retrieves the [account hierarchy tree](/docs/api/hierarchies) for the customer.

        */
        
      hierarchy_operation_type:'complete_hierarchy' | 'subordinates' | 'path_to_root';
    }
    export interface UpdateHierarchySettingsResponse {  
       customer:Customer;
    }
    export interface UpdateHierarchySettingsInputParam {
       
      /**
        * @description Determines whether the site default settings are applied for the access levels.

* Value set to &#x60;true&#x60;: Removes any customized access levels for the customer. The global settings configured in the admin console now apply.
* Value set to &#x60;false&#x60;: Changes the access levels for this customer. Pass the &#x60;parent_account_access&#x60; and &#x60;child_account_access&#x60; parameters to specify the new settings. If you skip passing any parameters, they will remain unchanged.
.

        */
       
      use_default_hierarchy_settings?:boolean;
       
      /**
        * @description Parameters for parent_account_access

        */
       
      parent_account_access?:{portal_download_child_invoices?:'no' | 'yes' | 'view_only',portal_edit_child_subscriptions?:'no' | 'yes' | 'view_only',send_invoice_emails?:boolean,send_payment_emails?:boolean,send_subscription_emails?:boolean};
       
      /**
        * @description Parameters for child_account_access

        */
       
      child_account_access?:{portal_download_invoices?:'no' | 'yes' | 'view_only',portal_edit_subscriptions?:'yes' | 'view_only',send_invoice_emails?:boolean,send_payment_emails?:boolean,send_subscription_emails?:boolean};
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
    export interface ReferralUrl {  
         /**
          * @description External customer id in the referral system

          */
       
      external_customer_id?:string;
       
         /**
          * @description Referral sharing url for the customer

          */
       
      referral_sharing_url:string;
       
         /**
          * @description The referral url creation time

          */
       
      created_at:number;
       
         /**
          * @description The referral url updation time

          */
       
      updated_at:number;
       
         /**
          * @description Referral campaign id

          */
       
      referral_campaign_id:string;
       
         /**
          * @description Referral account id

          */
       
      referral_account_id:string;
       
         /**
          * @description Referral external campaign id

          */
       
      referral_external_campaign_id?:string;
       
         /**
          * @description Url for the referral system account \* referral_saasquatch - Referral Saasquatch \* friendbuy - Friendbuy \* referral_candy - Referral Candy

          */
       
      referral_system:'referral_candy' | 'friendbuy' | 'referral_saasquatch';
    }
    export interface Contact {  
         /**
          * @description Unique reference ID provided for the contact.

          */
       
      id:string;
       
         /**
          * @description First name of the contact.

          */
       
      first_name?:string;
       
         /**
          * @description Last name of the contact.

          */
       
      last_name?:string;
       
         /**
          * @description Email of the contact.

          */
       
      email:string;
       
         /**
          * @description Phone number of the contact.

          */
       
      phone?:string;
       
         /**
          * @description Label/Tag provided for contact.

          */
       
      label?:string;
       
         /**
          * @description Contact enabled / disabled

          */
       
      enabled:boolean;
       
         /**
          * @description Whether Account Emails option is enabled for the contact.

          */
       
      send_account_email:boolean;
       
         /**
          * @description Whether Billing Emails option is enabled for the contact.

          */
       
      send_billing_email:boolean;
    }
    export interface PaymentMethod {  
         /**
          * @description Type of payment source \* google_pay - Payments made via Google Pay. \* sofort - Payments made via Sofort. \* netbanking_emandates - Netbanking (eMandates) Payments. \* apple_pay - Payments made via Apple Pay. \* unionpay - Payments made via UnionPay. \* giropay - Payments made via giropay. \* direct_debit - Represents bank account for which the direct debit or ACH agreement/mandate is created. \* bancontact - Payments made via Bancontact Card. \* upi - UPI Payments. \* alipay - Payments made via Alipay. \* wechat_pay - Payments made via WeChat Pay. \* dotpay - Payments made via Dotpay. \* paypal_express_checkout - Payments made via PayPal Express Checkout. \* ideal - Payments made via iDEAL. \* generic - Payments made via Generic Payment Method. \* amazon_payments - Payments made via Amazon Payments. \* card - Card based payment including credit cards and debit cards. Details about the card can be obtained from the card resource.

          */
       
      type:Type;
       
         /**
          * @description Name of the gateway the payment method is associated with. \* ecentric - Ecentric provides a seamless payment processing service in South Africa specializing on omnichannel capabilities. \* paypal_payflow_pro - PayPal Payflow Pro is a payment gateway. \* sage_pay - Sage Pay is a payment gateway. \* wepay - WePay is a payment gateway. \* wirecard - WireCard Account is a payment service provider. \* migs - MasterCard Internet Gateway Service payment gateway. \* beanstream - Bambora(formerly known as Beanstream) is a payment gateway. \* adyen - Adyen is a payment gateway. \* razorpay - Razorpay is a fast growing payment service provider in India working with all leading banks and support for major local payment methods including Netbanking, UPI etc. \* braintree - Braintree is a payment gateway. \* nmi - NMI is a payment gateway. \* chargebee_payments - Chargebee Payments gateway \* bluepay - BluePay is a payment gateway. \* paypal - PayPal Commerce is a payment gateway. \* bank_of_america - Bank of America is a payment gateway. \* paypal_pro - PayPal Pro Account is a payment gateway. \* eway_rapid - eWAY Rapid is a payment gateway. \* windcave - Windcave provides an end to end payment processing solution in ANZ and other leading global markets. \* moneris_us - Moneris USA is a payment gateway. \* exact - Exact Payments is a payment gateway. \* paypal_express_checkout - PayPal Express Checkout is a payment gateway. \* tco - 2Checkout is a payment gateway. \* chargebee - Chargebee test gateway. \* stripe - Stripe is a payment gateway. \* eway - eWAY Account is a payment gateway. \* authorize_net - Authorize.net is a payment gateway \* moneris - Moneris is a payment gateway. \* worldpay - WorldPay is a payment gateway \* pin - Pin is a payment gateway \* gocardless - GoCardless is a payment service provider. \* elavon - Elavon Virtual Merchant is a payment solution. \* cybersource - CyberSource is a payment gateway. \* vantiv - Vantiv is a payment gateway. \* amazon_payments - Amazon Payments is a payment service provider. \* global_payments - Global Payments is a payment service provider. \* first_data_global - First Data Global Gateway Virtual Terminal Account \* orbital - Chase Paymentech(Orbital) is a payment gateway. \* checkout_com - Checkout.com is a payment gateway. \* quickbooks - Intuit QuickBooks Payments gateway \* mollie - Mollie is a payment gateway. \* bluesnap - BlueSnap is a payment gateway. \* paymill - PAYMILL is a payment gateway. \* ogone - Ingenico ePayments (formerly known as Ogone) is a payment gateway. \* not_applicable - Indicates that payment gateway is not applicable for this resource. \* hdfc - HDFC Account is a payment gateway. \* balanced_payments - Balanced is a payment gateway \* ingenico_direct - Worldline Online Payments is a payment gateway. \* metrics_global - Metrics global is a leading payment service provider providing unified payment services in the US.

          */
       
      gateway:Gateway;
       
         /**
          * @description The gateway account this payment method is stored with.

          */
       
      gateway_account_id?:string;
       
         /**
          * @description Current status of the payment source. \* expired - A payment source that has expired \* invalid - The billing agreement cannot be used. It might become valid again either automatically or due to customer action. \* valid - A payment source that is valid and active. \* pending_verification - The payment source needs to be verified \* expiring - A payment source that is expiring (like card&#x27;s status based on its expiry date).

          */
       
      status:'valid' | 'expiring' | 'expired' | 'invalid' | 'pending_verification';
       
         /**
          * @description The reference id. In the case of Amazon and PayPal this will be the &#x27;billing agreement id&#x27;. For GoCardless direct debit this will be &#x27;mandate id&#x27;. In the case of card payments this will be the identifier provided by the gateway/card vault for the specific payment method resource.  
**Note:** This is not the one time temporary token provided by gateways like Stripe.

          */
       
      reference_id:string;
    }
    export interface CustomerBalance {  
         /**
          * @description Promotional credits balance of this customer.

          */
       
      promotional_credits:number;
       
         /**
          * @description Total unused payments associated with the customer.

          */
       
      excess_payments:number;
       
         /**
          * @description Refundable credits balance of this customer

          */
       
      refundable_credits:number;
       
         /**
          * @description Total unbilled charges for this customer.

          */
       
      unbilled_charges:number;
       
         /**
          * @description The currency code (ISO 4217 format) for balance

          */
       
      currency_code:string;
    }
    export interface EntityIdentifier {  
         /**
          * @description The unique id for the &#x60;entity_identifier&#x60; in Chargebee. When not provided, it is autogenerated.

          */
       
      id:string;
       
         /**
          * @description The value of the &#x60;entity_identifier&#x60;. This identifies the customer entity on the Peppol network. For example: &#x60;10101010-STO-10&#x60;.  
**Tip:**


If there is only one entity identifier for the customer and the value is the same as &#x60;vat_number&#x60;, then there is no need to provide the &#x60;entity_identifiers[]&#x60; array. See [description for &#x60;entity_identifiers[]&#x60;](customers#customer_entity_identifiers).

          */
       
      value?:string;
       
         /**
          * @description The Peppol BIS scheme associated with the [vat_number](customers#customer_vat_number) of the customer. This helps identify the specific type of customer entity. For example, &#x60;DE:VAT&#x60; is used for a German business entity while &#x60;DE:LWID45&#x60; is used for a German government entity. The value must be from the list of possible values and must correspond to the country provided under &#x60;billing_address.country&#x60;. See [list of possible values](https://www.chargebee.com/docs/e-invoicing.html#supported-countries).  
**Tip:**


If there is only one entity identifier for the customer and the value is the same as &#x60;vat_number&#x60;, then there is no need to provide the &#x60;entity_identifiers[]&#x60; array. See [description for &#x60;entity_identifiers[]&#x60;](customers#customer_entity_identifiers).

          */
       
      scheme:string;
       
         /**
          * @description The standard used for specifying the &#x60;entity_identifier&#x60; &#x60;scheme&#x60;. Currently, only &#x60;iso6523-actorid-upis&#x60; is supported and is used by default when not provided.  
**Tip:**


If there is only one entity identifier for the customer and the value is the same as &#x60;vat_number&#x60;, then there is no need to provide the &#x60;entity_identifiers[]&#x60; array. See [description for &#x60;entity_identifiers[]&#x60;](customers#customer_entity_identifiers).

          */
       
      standard?:string;
    }
    export interface Relationship {  
         /**
          * @description The &#x60;id&#x60; of the customer who is the immediate parent.

          */
       
      parent_id?:string;
       
         /**
          * @description The &#x60;id&#x60; of the customer who pays the invoices for this customer. Can be the customer itself or the &#x60;invoice_owner_id&#x60;

          */
       
      payment_owner_id:string;
       
         /**
          * @description The &#x60;id&#x60; of the customer who is invoiced for charges incurred. Can be the customer itself or any parent in its hierarchy.

          */
       
      invoice_owner_id:string;
    }
    export interface ParentAccountAccess {  
         /**
          * @description Sets parent&#x27;s level of access to child subscriptions on the Self-Serve Portal. \* no - The parent account cannot view or edit the subscriptions of the child account. \* view_only - The parent account can only view the subscriptions of the child account. \* yes - The parent account can view and edit the subscriptions of the child account.

          */
       
      portal_edit_child_subscriptions?:'no' | 'yes' | 'view_only';
       
         /**
          * @description Sets parent&#x27;s level of access to child invoices on the Self-Serve Portal. \* no - The parent account can neither view nor download the invoices of the child account. \* yes - The parent account can view and download the invoices of the child account. \* view_only - The parent account can only view the invoices of the child account.

          */
       
      portal_download_child_invoices?:'no' | 'yes' | 'view_only';
       
         /**
          * @description If &#x60;true&#x60;, the parent account will receive subscription-related emails sent to the child account.

          */
       
      send_subscription_emails:boolean;
       
         /**
          * @description If &#x60;true&#x60;, the parent account will receive invoice-related emails sent to the child account.

          */
       
      send_invoice_emails:boolean;
       
         /**
          * @description If &#x60;true&#x60;, the parent account will receive payment-related emails sent to the child account.

          */
       
      send_payment_emails:boolean;
    }
    export interface ChildAccountAccess {  
         /**
          * @description Sets the child&#x27;s level of access to its own subscriptions on the Self-Serve Portal. \* yes - The child account can view and edit its own subscriptions. \* view_only - The child account can only view its own subscriptions.

          */
       
      portal_edit_subscriptions?:'yes' | 'view_only';
       
         /**
          * @description Sets the child&#x27;s level of access to its own invoices on the Self-Serve Portal. \* view_only - The child account can only view its invoices and not download them. \* yes - The child account can view and download its own invoices. \* no - The child account can neither view nor download its own invoices.

          */
       
      portal_download_invoices?:'no' | 'yes' | 'view_only';
       
         /**
          * @description If &#x60;true&#x60;, the child account will receive subscription-related emails for its own subscriptions.

          */
       
      send_subscription_emails:boolean;
       
         /**
          * @description If &#x60;true&#x60;, the child account will receive invoice-related emails for its own invoices.

          */
       
      send_invoice_emails:boolean;
       
         /**
          * @description If &#x60;true&#x60;, the child account will receive payment-related emails for its own invoices.

          */
       
      send_payment_emails:boolean;
    }
  }
}