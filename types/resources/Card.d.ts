///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface Card {
    
    /**
      * @description Identifier of the payment source

      */
    
    payment_source_id:string;
    
    /**
      * @description Current status of the card. \* valid - A valid and active credit card \* expiring - A card which is expiring in the current month. \* expired - An expired card

      */
    
    status:'valid' | 'expiring' | 'expired';
    
    /**
      * @description Name of the gateway this payment source is stored with. \* bluesnap - BlueSnap is a payment gateway. \* tco - 2Checkout is a payment gateway. \* bluepay - BluePay is a payment gateway. \* paypal_express_checkout - PayPal Express Checkout is a payment gateway. \* paypal_payflow_pro - PayPal Payflow Pro is a payment gateway. \* razorpay - Razorpay is a fast growing payment service provider in India working with all leading banks and support for major local payment methods including Netbanking, UPI etc. \* global_payments - Global Payments is a payment service provider. \* not_applicable - Indicates that payment gateway is not applicable for this resource. \* checkout_com - Checkout.com is a payment gateway. \* adyen - Adyen is a payment gateway. \* braintree - Braintree is a payment gateway. \* nmi - NMI is a payment gateway. \* worldpay - WorldPay is a payment gateway \* moneris_us - Moneris USA is a payment gateway. \* pin - Pin is a payment gateway \* authorize_net - Authorize.net is a payment gateway \* stripe - Stripe is a payment gateway. \* moneris - Moneris is a payment gateway. \* chargebee - Chargebee test gateway. \* cybersource - CyberSource is a payment gateway. \* ecentric - Ecentric provides a seamless payment processing service in South Africa specializing on omnichannel capabilities. \* first_data_global - First Data Global Gateway Virtual Terminal Account \* exact - Exact Payments is a payment gateway. \* eway - eWAY Account is a payment gateway. \* metrics_global - Metrics global is a leading payment service provider providing unified payment services in the US. \* amazon_payments - Amazon Payments is a payment service provider. \* windcave - Windcave provides an end to end payment processing solution in ANZ and other leading global markets. \* quickbooks - Intuit QuickBooks Payments gateway \* wepay - WePay is a payment gateway. \* wirecard - WireCard Account is a payment service provider. \* chargebee_payments - Chargebee Payments gateway \* sage_pay - Sage Pay is a payment gateway. \* elavon - Elavon Virtual Merchant is a payment solution. \* paypal_pro - PayPal Pro Account is a payment gateway. \* orbital - Chase Paymentech(Orbital) is a payment gateway. \* paypal - PayPal Commerce is a payment gateway. \* beanstream - Bambora(formerly known as Beanstream) is a payment gateway. \* hdfc - HDFC Account is a payment gateway. \* ingenico_direct - Worldline Online Payments is a payment gateway. \* ogone - Ingenico ePayments (formerly known as Ogone) is a payment gateway. \* migs - MasterCard Internet Gateway Service payment gateway. \* vantiv - Vantiv is a payment gateway. \* bank_of_america - Bank of America Gateway \* eway_rapid - eWAY Rapid is a payment gateway. \* gocardless - GoCardless is a payment service provider. \* mollie - Mollie is a payment gateway. \* paymill - PAYMILL is a payment gateway. \* balanced_payments - Balanced is a payment gateway

      */
    
    gateway:Gateway;
    
    /**
      * @description The gateway account to which this payment source is stored with.

      */
    
    gateway_account_id?:string;
    
    /**
      * @description Reference transaction id which used for transactions

      */
    
    ref_tx_id?:string;
    
    /**
      * @description Cardholder&#x27;s first name

      */
    
    first_name?:string;
    
    /**
      * @description Cardholder&#x27;s last name

      */
    
    last_name?:string;
    
    /**
      * @description The Issuer Identification Number, i.e. the first six digits of the card number

      */
    
    iin:string;
    
    /**
      * @description Last four digits of the card number

      */
    
    last4:string;
    
    /**
      * @description Card type \* bancontact - A Bancontact card. \* american_express - An American Express card. \* not_applicable - Used for offline entries in transactions. Not applicable for cards \* diners_club - A Diner&#x27;s Club card. \* discover - A Discover card. \* other - Card belonging to types other than those listed above. \* mastercard - A MasterCard. \* jcb - A JCB card. \* visa - A Visa card.

      */
    
    card_type?:'discover' | 'bancontact' | 'other' | 'visa' | 'jcb' | 'diners_club' | 'mastercard' | 'not_applicable' | 'american_express';
    
    /**
      * @description Card Funding type \* credit - A credit card. \* prepaid - A prepaid card. \* debit - A debit card. \* not_applicable - Used for ACH. Not applicable for cards \* not_known - An unknown card.

      */
    
    funding_type:'not_known' | 'prepaid' | 'not_applicable' | 'credit' | 'debit';
    
    /**
      * @description Card expiry month.

      */
    
    expiry_month:number;
    
    /**
      * @description Card expiry year.

      */
    
    expiry_year:number;
    
    /**
      * @description [two-letter(alpha2)](https://www.iso.org/iso-3166-country-codes.html) ISO country code.

      */
    
    issuing_country?:string;
    
    /**
      * @description Address line 1, as available in card billing address.

      */
    
    billing_addr1?:string;
    
    /**
      * @description Address line 2, as available in card billing address.

      */
    
    billing_addr2?:string;
    
    /**
      * @description City, as available in card billing address.

      */
    
    billing_city?:string;
    
    /**
      * @description The [ISO 3166-2 state/province code](https://www.iso.org/obp/ui/#search) without the country prefix. Currently supported for USA, Canada and India. For instance, for Arizona (USA), set &#x60;state_code&#x60; as &#x60;AZ&#x60; (not &#x60;US-AZ&#x60;). For Tamil Nadu (India), set as &#x60;TN&#x60; (not &#x60;IN-TN&#x60;). For British Columbia (Canada), set as &#x60;BC&#x60; (not &#x60;CA-BC&#x60;).

      */
    
    billing_state_code?:string;
    
    /**
      * @description The state/province name.

      */
    
    billing_state?:string;
    
    /**
      * @description The billing address country of the customer. Must be one of [ISO 3166 alpha-2 country code](https://www.iso.org/iso-3166-country-codes.html).   

**Note** : If you enter an invalid country code, the system will return an error.  

**Brexit**


If you have enabled [EU VAT](https://www.chargebee.com/docs/eu-vat.html) in 2021 or later, or have [manually enable](https://www.chargebee.com/docs/brexit.html#what-needs-to-be-done-in-chargebee) the Brexit configuration, then &#x60;XI&#x60; (the code for **United Kingdom -- Northern Ireland**) is available as an option.

      */
    
    billing_country?:string;
    
    /**
      * @description Postal or Zip code, as available in card billing address.

      */
    
    billing_zip?:string;
    
    /**
      * @description Timestamp indicating when this card resource is created.

      */
    
    created_at:number;
    
    /**
      * @description Version number of this resource. The &#x60;resource_version&#x60; is updated with a new timestamp in milliseconds for every change made to the resource. This attribute will be present only if the resource has been updated after 2016-09-28.

      */
    
    resource_version?:number;
    
    /**
      * @description Timestamp indicating when this credit card resource was last updated.

      */
    
    updated_at?:number;
    
    /**
      * @description The IP address of the customer. Used primarily for referral integration and EU VAT validation.

      */
    
    ip_address?:string;
    
    /**
      * @description Card is powered by payment method. \* card - card \* ideal - ideal \* sofort - sofort \* bancontact - bancontact \* giropay - giropay \* latam_local_card - latam_local_card \* not_applicable - not_applicable

      */
    
    powered_by?:'giropay' | 'bancontact' | 'ideal' | 'latam_local_card' | 'not_applicable' | 'sofort' | 'card';
    
    /**
      * @description Identifier of the customer.

      */
    
    customer_id:string;
    
    /**
      * @description Masked credit card number that is safe to show.

      */
    
    masked_number?:string;
  }
  export namespace Card {
    export class CardResource {  
      /**
        * @description #### Deprecated

This operation is obsoleted by the [Retrieve a payment source API](/docs/api/payment_sources#retrieve_a_payment_source).

Retrieves the credit card for the customer id.

        */
      
      retrieve(customer_id:string):ChargebeeRequest<RetrieveResponse>;
       
      /**
        * @description #### Deprecated

The [Payment Sources API](/docs/api/payment_sources), with its additional options and improvements, obsoletes the [Cards APIs](/docs/api/cards). This operation is obsoleted by the following:

* [Create using temporary token](/docs/api/payment_sources#create_using_temporary_token)
* [Create using permanent token](/docs/api/payment_sources#create_using_permanent_token)
* [Create a card payment source](/docs/api/payment_sources#create_a_card_payment_source)

Adds or replaces card details of a customer. Updating card details replaces the present payment method.

Passing credit card details to this API involves PCI liability at your end as sensitive card info passes through your servers. If you wish to avoid that, you can use one of the following integration methodologies if applicable

* If you are using Stripe gateway, you can use [Stripe.js](https://stripe.com/docs/stripe.js) with your card update form.
* If you are using Braintree gateway, you can use [Braintree.js](https://www.braintreepayments.com/docs/javascript) with your card update form.
* If you are using Authorize.Net gateway, you use [Accept.js](https://developer.authorize.net/api/reference/features/acceptjs.html) with your card update form.
* In case you are using the Adyen gateway, you will have to use the Adyen&#x27;s [Client Side Encryption](https://docs.adyen.com/online-payments/classic-integrations/api-integration-ecommerce/cse-integration-ecommerce) to encrypt sensitive cardholder data. Once the cardholder data is encrypted, pass the value in adyen.encrypted.data as temp token in this API.
* You can also use our [Hosted Pages](https://www.chargebee.com/docs/hosted_pages.html) based integration. Use our [Hosted Page - Update Card](/docs/api/hosted_pages#update_card) API to generate a &#x27;Update Card&#x27; Hosted Page link.



**Legacy behavior:**

* **For [sites](https://www.chargebee.com/docs/sites-intro.html) created before March 1st, 2014:** On making this request, the &#x60;billing_address&#x60; and &#x60;vat_number&#x60; of the customer are **deleted** and replaced by the values passed with this request. Ensure that you pass the [billing address parameters](/docs/api/subscriptions?prod_cat_ver&#x3D;1#create_a_subscription_card_billing_addr1) and the &#x60;vat_number&#x60; parameters each time you make this request, to avoid losing the same information at the customer-level.
* **For [sites](https://www.chargebee.com/docs/sites-intro.html) created on or after March 1st, 2014:** This request does not alter the &#x60;billing_address&#x60; and &#x60;vat_number&#x60; of the customer.

        */
      
      update_card_for_customer(customer_id:string, input:UpdateCardForCustomerInputParam):ChargebeeRequest<UpdateCardForCustomerResponse>;
       
      /**
        * @description #### Deprecated

This request is obsoleted by the [Switch gateway account API](/docs/api/payment_sources#switch_gateway_account) for Payment Sources.

Switches the gateway in which customer&#x27;s card information is stored. This is applicable only if the payment method is &#x60;card&#x60;.

**Limitation**   
This request does not support switching between Braintree and Stripe payment gateways. Contact [Chargebee Support](https://chargebee.freshdesk.com/support/home) to perform those actions.

        */
      
      switch_gateway_for_customer(customer_id:string, input:SwitchGatewayForCustomerInputParam):ChargebeeRequest<SwitchGatewayForCustomerResponse>;
       
      /**
        * @description #### deprecated

The [Payment Sources API](/docs/api/payment_sources), with its additional options and improvements, obsoletes the Cards APIs. This request is obsoleted by the [Export payment source API](/docs/api/payment_sources#export_payment_source).

Copies the customer&#x27;s card information to another payment gateway. This is useful if you want to port your customer&#x27;s card details to another gateway.

**Limitation**   
This request does not support copying of cards between Braintree and Stripe payment gateways. Contact [Chargebee Support](https://chargebee.freshdesk.com/support/home) to perform those actions.

        */
      
      copy_card_for_customer(customer_id:string, input:CopyCardForCustomerInputParam):ChargebeeRequest<CopyCardForCustomerResponse>;
       
      /**
        * @description #### deprecated

The [Payment Sources API](/docs/api/payment_sources), with its additional options and improvements, obsoletes the Cards APIs. This request is obsoleted by the [Delete a payment source API](/docs/api/payment_sources#delete_a_payment_source).

Deletes the card for a customer. Upon successful deletion the &#x60;auto_collection&#x60; attribute for the customer is set to &#x60;off&#x60; and a &#x60;card_deleted&#x60; event is triggered. If there is no card found at the gateway for the customer, this API returns without errors.

        */
      
      delete_card_for_customer(customer_id:string):ChargebeeRequest<DeleteCardForCustomerResponse>;
    }
    export interface RetrieveResponse {  
       card:Card;
    }
    
    export interface UpdateCardForCustomerResponse {  
       customer:Customer;
       
       card:Card;
    }
    export interface UpdateCardForCustomerInputParam {
       
      /**
        * @description The gateway account in which this payment source is stored.

        */
       
      gateway_account_id?:string;
       
      /**
        * @description The single-use card token returned by vaults like Stripe/Braintree which act as a substitute for your card details. Before calling this API, you should have submitted your card details to the gateway and gotten this token in return.  
**Note:** Supported only for Stripe, Braintree and Authorize.Net. If this value is specified, there is no need to specify other card details (like number, cvv, etc).

        */
       
      tmp_token?:string;
       
      /**
        * @description Cardholder&#x27;s first name.

        */
       
      first_name?:string;
       
      /**
        * @description Cardholder&#x27;s last name.

        */
       
      last_name?:string;
       
      /**
        * @description The credit card number without any format. If you are using [Braintree.js](https://developer.paypal.com/braintree/docs/guides/client-sdk/setup/javascript/v2#getting-braintree.js), you can specify the Braintree encrypted card number here.

        */
       
      number:string;
       
      /**
        * @description Card expiry month.

        */
       
      expiry_month:number;
       
      /**
        * @description Card expiry year.

        */
       
      expiry_year:number;
       
      /**
        * @description The card verification value (CVV). If you are using [Braintree.js](https://developer.paypal.com/braintree/docs/guides/client-sdk/setup/javascript/v2#getting-braintree.js), you can specify the Braintree encrypted CVV here.

        */
       
      cvv?:string;
       
      /**
        * @description Address line 1, as available in card billing address.

        */
       
      billing_addr1?:string;
       
      /**
        * @description Address line 2, as available in card billing address.

        */
       
      billing_addr2?:string;
       
      /**
        * @description City, as available in card billing address.

        */
       
      billing_city?:string;
       
      /**
        * @description The [ISO 3166-2 state/province code](https://www.iso.org/obp/ui/#search/code) without the country prefix. Currently supported for USA, Canada and India. For instance, for Arizona (USA), set &#x60;state_code&#x60; as &#x60;AZ&#x60; (not &#x60;US-AZ&#x60;). For Tamil Nadu (India), set as &#x60;TN&#x60; (not &#x60;IN-TN&#x60;). For British Columbia (Canada), set as &#x60;BC&#x60; (not &#x60;CA-BC&#x60;).

        */
       
      billing_state_code?:string;
       
      /**
        * @description The state/province name. Is set by Chargebee automatically for US, Canada and India If &#x60;state_code&#x60; is provided.

        */
       
      billing_state?:string;
       
      /**
        * @description Postal or Zip code, as available in card billing address.

        */
       
      billing_zip?:string;
       
      /**
        * @description The billing address country of the customer. Must be one of [ISO 3166 alpha-2 country code](https://www.iso.org/iso-3166-country-codes.html).   

**Note** : If you enter an invalid country code, the system will return an error.  

**Brexit**


If you have enabled [EU VAT](https://www.chargebee.com/docs/eu-vat.html) in 2021 or later, or have [manually enable](https://www.chargebee.com/docs/brexit.html#what-needs-to-be-done-in-chargebee) the Brexit configuration, then &#x60;XI&#x60; (the code for **United Kingdom -- Northern Ireland**) is available as an option.
.

        */
       
      billing_country?:string;
    }
    export interface SwitchGatewayForCustomerResponse {  
       customer:Customer;
       
       card:Card;
    }
    export interface SwitchGatewayForCustomerInputParam {
       
      /**
        * @description The gateway account you want to switch to.

        */
       
      gateway_account_id:string;
    }
    export interface CopyCardForCustomerResponse {  
       third_party_payment_method:ThirdPartyPaymentMethod;
    }
    export interface CopyCardForCustomerInputParam {
       
      /**
        * @description The gateway account you want to copy the card.

        */
       
      gateway_account_id:string;
    }
    export interface DeleteCardForCustomerResponse {  
       customer:Customer;
    }
    
    
  }
}