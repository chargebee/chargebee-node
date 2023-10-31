///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface Token {
    
    /**
      * @description Identifier of the Chargebee Token

      */
    
    id:string;
    
    /**
      * @description Name of the gateway this token is stored in. \* bluesnap - BlueSnap is a payment gateway. \* tco - 2Checkout is a payment gateway. \* first_data_global - First Data Global Gateway Virtual Terminal Account \* exact - Exact Payments is a payment gateway. \* bluepay - BluePay is a payment gateway. \* paypal_express_checkout - PayPal Express Checkout is a payment gateway. \* eway - eWAY Account is a payment gateway. \* paypal_payflow_pro - PayPal Payflow Pro is a payment gateway. \* razorpay - Razorpay is a fast growing payment service provider in India working with all leading banks and support for major local payment methods including Netbanking, UPI etc. \* global_payments - Global Payments is a payment service provider. \* amazon_payments - Amazon Payments is a payment service provider. \* not_applicable - Indicates that payment gateway is not applicable for this resource. \* checkout_com - Checkout.com is a payment gateway. \* adyen - Adyen is a payment gateway. \* braintree - Braintree is a payment gateway. \* nmi - NMI is a payment gateway. \* quickbooks - Intuit QuickBooks Payments gateway \* wepay - WePay is a payment gateway. \* worldpay - WorldPay is a payment gateway \* wirecard - WireCard Account is a payment service provider. \* chargebee_payments - Chargebee Payments gateway \* sage_pay - Sage Pay is a payment gateway. \* moneris_us - Moneris USA is a payment gateway. \* pin - Pin is a payment gateway \* authorize_net - Authorize.net is a payment gateway \* elavon - Elavon Virtual Merchant is a payment solution. \* paypal_pro - PayPal Pro Account is a payment gateway. \* orbital - Chase Paymentech(Orbital) is a payment gateway. \* paypal - PayPal Commerce is a payment gateway. \* beanstream - Bambora(formerly known as Beanstream) is a payment gateway. \* hdfc - HDFC Account is a payment gateway. \* ingenico_direct - Worldline Online Payments is a payment gateway. \* ogone - Ingenico ePayments (formerly known as Ogone) is a payment gateway. \* migs - MasterCard Internet Gateway Service payment gateway. \* stripe - Stripe is a payment gateway. \* vantiv - Vantiv is a payment gateway. \* moneris - Moneris is a payment gateway. \* chargebee - Chargebee test gateway. \* eway_rapid - eWAY Rapid is a payment gateway. \* gocardless - GoCardless is a payment service provider. \* mollie - Mollie is a payment gateway. \* paymill - PAYMILL is a payment gateway. \* balanced_payments - Balanced is a payment gateway \* cybersource - CyberSource is a payment gateway.

      */
    
    gateway:Gateway;
    
    /**
      * @description The gateway account in which this token is stored.

      */
    
    gateway_account_id:string;
    
    /**
      * @description Type of payment method of the token. \* google_pay - Payments made via Google Pay. \* apple_pay - Payments made via Apple Pay. \* unionpay - Payments made via UnionPay. \* ideal - Payments made via iDEAL. \* bancontact - Payments made via Bancontact Card. \* netbanking_emandates - Netbanking (eMandates) Payments. \* alipay - Payments made via Alipay. \* dotpay - Payments made via Dotpay. \* giropay - Payments made via giropay. \* sofort - Payments made via Sofort. \* direct_debit - Represents bank account for which the direct debit or ACH agreement/mandate is created. \* paypal_express_checkout - Payments made via PayPal Express Checkout. \* amazon_payments - Payments made via Amazon Payments. \* card - Card based payment including credit cards and debit cards. Details about the card can be obtained from the card resource. \* upi - UPI Payments. \* generic - Payments made via Generic Payment Method. \* wechat_pay - Payments made via WeChat Pay.

      */
    
    payment_method_type:PaymentMethodType;
    
    /**
      * @description Status of the token \* new - new \* consumed - The token is already used \* expired - expired

      */
    
    status:'consumed' | 'new' | 'expired';
    
    /**
      * @description The id with which this token is referred in gateway

      */
    
    id_at_vault:string;
    
    /**
      * @description Name of the gateway/vault provider where the payment method is tokenized \* gateway - gateway \* spreedly - spreedly

      */
    
    vault:'spreedly' | 'gateway';
    
    /**
      * @description The IP address from where the token is created. Used primarily for EU VAT validation.

      */
    
    ip_address?:string;
    
    /**
      * @description Version number of this resource. The &#x60;resource_version&#x60; is updated with a new timestamp in milliseconds for every change made to the resource. This attribute will be present only if the resource has been updated after 2016-09-28.

      */
    
    resource_version?:number;
    
    /**
      * @description Timestamp indicating when this token resource was last updated.

      */
    
    updated_at?:number;
    
    /**
      * @description Timestamp indicating when this token resource is created.

      */
    
    created_at:number;
    
    /**
      * @description Timestamp indicating when this token is expired

      */
    
    expired_at?:number;
  }
  export namespace Token {
    export class TokenResource {  
      /**
        * @description Generate a token that holds card related information.

        */
      
      create_for_card(input?:CreateForCardInputParam):ChargebeeRequest<CreateForCardResponse>;
       
      /**
        * @description Generate a token using the one time token created by payment gateways for any specific payment method.

        */
      
      create_using_temp_token(input:CreateUsingTempTokenInputParam):ChargebeeRequest<CreateUsingTempTokenResponse>;
       
      /**
        * @description Retrieve a token using token ID.

        */
      
      retrieve(cb_token_id:string):ChargebeeRequest<RetrieveResponse>;
    }
    export interface CreateForCardResponse {  
       token:Token;
    }
    export interface CreateForCardInputParam {
       
      /**
        * @description Parameters for card

        */
       
      card?:{additional_information?:object,billing_addr1?:string,billing_addr2?:string,billing_city?:string,billing_country?:string,billing_state?:string,billing_state_code?:string,billing_zip?:string,card_type?:'discover' | 'bancontact' | 'other' | 'visa' | 'jcb' | 'diners_club' | 'mastercard' | 'not_applicable' | 'american_express',cvv?:string,expiry_month:number,expiry_year:number,first_name?:string,gateway_account_id?:string,last_name?:string,number:string};
    }
    export interface CreateUsingTempTokenResponse {  
       token:Token;
    }
    export interface CreateUsingTempTokenInputParam {
       
      /**
        * @description The gateway account to which the token is associated.

        */
       
      gateway_account_id?:string;
       
      /**
        * @description Type of payment method of the token. \* google_pay - Payments made via Google Pay. \* apple_pay - Payments made via Apple Pay. \* unionpay - Payments made via UnionPay. \* ideal - Payments made via iDEAL. \* amazon_payments - Payments made via Amazon Payments. \* bancontact - Payments made via Bancontact Card. \* netbanking_emandates - Netbanking (eMandates) Payments. \* alipay - Payments made via Alipay. \* card - Card based payment including credit cards and debit cards. Details about the card can be obtained from the card resource. \* dotpay - Payments made via Dotpay. \* giropay - Payments made via giropay. \* upi - UPI Payments. \* sofort - Payments made via Sofort. \* direct_debit - Represents bank account for which the direct debit or ACH agreement/mandate is created. \* generic - Payments made via Generic Payment Method. \* wechat_pay - Payments made via WeChat Pay. \* paypal_express_checkout - Payments made via PayPal Express Checkout.

        */
       
      payment_method_type:PaymentMethodType;
       
      /**
        * @description Single-use token created by payment gateways. In Stripe, a single-use token is created for Apple Pay Wallet, card details or direct debit. In Braintree, a nonce is created for Apple Pay Wallet, PayPal, or card details. In Authorize.net, a nonce is created for card details. In Adyen, an encrypted data is created from the card details.

        */
       
      id_at_vault:string;
       
      /**
        * @description Represents what type of object at gateway eg. &quot;token&quot; in case Stripe token and &quot;source&quot; in case of Stripe Source.

        */
       
      gw_obj_type?:string;
       
      /**
        * @description Used to derieve Bank Account Scheme by default will take site default currency.

        */
       
      currency_code?:string;
       
      /**
        * @description * &#x60;checkout_com&#x60;: While adding a new payment method using [permanent token](./payment_sources?#create_using_permanent_token) or passing raw card details to Checkout.com, &#x60;document&#x60; ID and &#x60;country_of_residence&#x60; are required to support payments through [dLocal](https://www.checkout.com/docs/previous/payments/payment-methods/cards/dlocal).
  * &#x60;payer&#x60;: User related information.
    * &#x60;country_of_residence&#x60;: This is required since the billing country associated with the user&#x27;s payment method may not be the same as their country of residence. Hence the user&#x27;s country of residence needs to be specified. The country code should be a [two-character ISO code](https://www.checkout.com/docs/developer-resources/testing/codes/country-codes).
    * &#x60;document&#x60;: Document ID is the user&#x27;s [identification number](https://docs.dlocal.com/reference/country-reference#documents) based on their country.
* &#x60;bluesnap&#x60;: While passing raw card details to BlueSnap, if &#x60;fraud_session_id&#x60; is added, [additional validation](https://developers.bluesnap.com/reference/fraud-prevention) is performed to avoid fraudulent transactions.
  * &#x60;fraud&#x60;: Fraud identification related information.
    * &#x60;fraud_session_id&#x60;: Your [BlueSnap fraud session ID](https://developers.bluesnap.com/reference/fraud-prevention#section-implementing-device-data-collector) required to perform anti-fraud validation.
* &#x60;braintree&#x60;: While passing raw card details to Braintree, your &#x60;fraud_merchant_id&#x60; and the user&#x27;s &#x60;device_session_id&#x60; can be added to perform [additional validation](https://developer.paypal.com/braintree/docs/guides/premium-fraud-management-tools/device-data-collection/javascript/v3#collecting-device-data) and avoid fraudulent transactions.
  * &#x60;fraud&#x60;: Fraud identification related information.
    * &#x60;device_session_id&#x60;: Session ID associated with the user&#x27;s device.
    * &#x60;fraud_merchant_id&#x60;: Your [merchant ID](https://developer.paypal.com/braintree/docs/guides/premium-fraud-management-tools/device-data-collection/javascript/v3#collecting-device-data) for fraud detection.
* &#x60;chargebee_payments&#x60;: While passing raw card details to Chargebee Payments, if &#x60;fraud_session_id&#x60; is added, additional validation is performed to avoid fraudulent transactions.
  * &#x60;fraud&#x60;: Fraud identification related information.
    * &#x60;fraud_session_id&#x60;: Your Chargebee Payments fraud session ID required to perform anti-fraud validation.
.

        */
       
      additional_information?:object;
       
      /**
        * @description Parameters for token_additional_detail

        */
       
      token_additional_detail?:{expiry_month?:number,expiry_year?:number,first_name?:string,last_name?:string};
       
      /**
        * @description Parameters for token_billing_address

        */
       
      token_billing_address?:{city?:string,country_code?:string,line1?:string,line2?:string,state?:string,state_code?:string,zip?:string};
    }
    export interface RetrieveResponse {  
       token:Token;
    }
    
    
  }
}