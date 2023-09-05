///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface PaymentSource {
    
    /**
      * @description Identifier of the payment source

      */
    
    id:string;
    
    /**
      * @description Version number of this resource. The &#x60;resource_version&#x60; is updated with a new timestamp in milliseconds for every change made to the resource. This attribute will be present only if the resource has been updated after 2016-09-28.

      */
    
    resource_version?:number;
    
    /**
      * @description Timestamp indicating when this payment source resource was last updated.

      */
    
    updated_at?:number;
    
    /**
      * @description Timestamp indicating when this payment source resource is created.

      */
    
    created_at:number;
    
    /**
      * @description Identifier of the customer with whom this payment source is associated.

      */
    
    customer_id:string;
    
    /**
      * @description Type of payment source \* direct_debit - Represents bank account for which the direct debit or ACH agreement/mandate is created. \* unionpay - Payments made via UnionPay. \* google_pay - Payments made via Google Pay. \* dotpay - Payments made via Dotpay. \* giropay - Payments made via giropay. \* alipay - Payments made via Alipay. \* sofort - Payments made via Sofort. \* wechat_pay - Payments made via WeChat Pay. \* netbanking_emandates - Netbanking (eMandates) Payments. \* bancontact - Payments made via Bancontact Card. \* card - Card based payment including credit cards and debit cards. Details about the card can be obtained from the card resource. \* amazon_payments - Payments made via Amazon Payments. \* generic - Payments made via Generic Payment Method. \* paypal_express_checkout - Payments made via PayPal Express Checkout. \* ideal - Payments made via iDEAL. \* upi - UPI Payments. \* apple_pay - Payments made via Apple Pay.

      */
    
    type:Type;
    
    /**
      * @description The reference id. In the case of Amazon and PayPal this will be the &#x27;billing agreement id&#x27;. For GoCardless direct debit this will be &#x27;mandate id&#x27;. In the case of card payments this will be the identifier provided by the gateway/card vault for the specific payment method resource.  
**Note:** This is not the one time temporary token provided by gateways like Stripe.

      */
    
    reference_id:string;
    
    /**
      * @description Current status of the payment source. \* valid - A payment source that is valid and active. \* expiring - A payment source that is expiring (like card&#x27;s status based on its expiry date). \* invalid - The billing agreement cannot be used. It might become valid again either automatically or due to customer action. \* pending_verification - The payment source needs to be verified \* expired - A payment source that has expired

      */
    
    status:'valid' | 'expiring' | 'expired' | 'invalid' | 'pending_verification';
    
    /**
      * @description Name of the gateway this payment source is stored with. \* bluesnap - BlueSnap is a payment gateway. \* tco - 2Checkout is a payment gateway. \* bluepay - BluePay is a payment gateway. \* paypal_express_checkout - PayPal Express Checkout is a payment gateway. \* paypal_payflow_pro - PayPal Payflow Pro is a payment gateway. \* razorpay - Razorpay is a fast growing payment service provider in India working with all leading banks and support for major local payment methods including Netbanking, UPI etc. \* global_payments - Global Payments is a payment service provider. \* not_applicable - Indicates that payment gateway is not applicable for this resource. \* checkout_com - Checkout.com is a payment gateway. \* adyen - Adyen is a payment gateway. \* braintree - Braintree is a payment gateway. \* nmi - NMI is a payment gateway. \* worldpay - WorldPay is a payment gateway \* moneris_us - Moneris USA is a payment gateway. \* pin - Pin is a payment gateway \* authorize_net - Authorize.net is a payment gateway \* stripe - Stripe is a payment gateway. \* moneris - Moneris is a payment gateway. \* chargebee - Chargebee test gateway. \* cybersource - CyberSource is a payment gateway. \* ecentric - Ecentric provides a seamless payment processing service in South Africa specializing on omnichannel capabilities. \* first_data_global - First Data Global Gateway Virtual Terminal Account \* exact - Exact Payments is a payment gateway. \* eway - eWAY Account is a payment gateway. \* metrics_global - Metrics global is a leading payment service provider providing unified payment services in the US. \* amazon_payments - Amazon Payments is a payment service provider. \* windcave - Windcave provides an end to end payment processing solution in ANZ and other leading global markets. \* quickbooks - Intuit QuickBooks Payments gateway \* wepay - WePay is a payment gateway. \* wirecard - WireCard Account is a payment service provider. \* chargebee_payments - Chargebee Payments gateway \* sage_pay - Sage Pay is a payment gateway. \* elavon - Elavon Virtual Merchant is a payment solution. \* paypal_pro - PayPal Pro Account is a payment gateway. \* orbital - Chase Paymentech(Orbital) is a payment gateway. \* paypal - PayPal Commerce is a payment gateway. \* beanstream - Bambora(formerly known as Beanstream) is a payment gateway. \* hdfc - HDFC Account is a payment gateway. \* ingenico_direct - Worldline Online Payments is a payment gateway. \* ogone - Ingenico ePayments (formerly known as Ogone) is a payment gateway. \* migs - MasterCard Internet Gateway Service payment gateway. \* vantiv - Vantiv is a payment gateway. \* bank_of_america - Bank of America Gateway \* eway_rapid - eWAY Rapid is a payment gateway. \* gocardless - GoCardless is a payment service provider. \* mollie - Mollie is a payment gateway. \* paymill - PAYMILL is a payment gateway. \* balanced_payments - Balanced is a payment gateway

      */
    
    gateway:Gateway;
    
    /**
      * @description The gateway account to which this payment source is stored with.

      */
    
    gateway_account_id?:string;
    
    /**
      * @description The IP address of the customer. Used primarily for referral integration and EU VAT validation.

      */
    
    ip_address?:string;
    
    /**
      * @description [two-letter(alpha2)](https://www.iso.org/iso-3166-country-codes.html) ISO country code.

      */
    
    issuing_country?:string;
    
    /**
      * @description Indicates that this resource has been deleted.

      */
    
    deleted:boolean;
    
    /**
      * @description The unique ID of the [business entity](/docs/api/advanced-features?prod_cat_ver&#x3D;2#mbe) of this &#x60;payment_source&#x60;. This is always the same as the business entity of the [customer](/docs/api/payment_sources?prod_cat_ver&#x3D;2#payment_source_customer_id).   

      */
    
    business_entity_id?:string;
    
    /**
      * @description Card details associated with this payment source.

      */
    
    card?:PaymentSource.Card;
    
    /**
      * @description Bank account details the direct debit or ACH or NetBanking agreement/mandate created with this payment source.

      */
    
    bank_account?:PaymentSource.BankAccount;
    
    /**
      * @description Boleto payment source details of the customer

      */
    
    boleto?:PaymentSource.CustVoucherSource;
    
    /**
      * @description Billing address for the payment source.

      */
    
    billing_address?:PaymentSource.BillingAddress;
    
    /**
      * @description Amazon payments details associated with this payment source.

      */
    
    amazon_payment?:PaymentSource.AmazonPayment;
    
    /**
      * @description Represents the payment method that allows you to make payments directly using a bank account.

      */
    
    upi?:PaymentSource.Upi;
    
    /**
      * @description PayPal Express Checkout details associated with this payment source.

      */
    
    paypal?:PaymentSource.Paypal;
    
    /**
      * @description Mandate details associated with the payment source.

      */
    
    mandates?:PaymentSource.Mandate[];
  }
  export namespace PaymentSource {
    export class PaymentSourceResource {  
      /**
        * @description This API provides an alternative way to create a payment source using a permanent token, instead of having to add the full payment method details via API or the Chargebee UI. Permanent tokens are provided by payment gateways such as Stripe.  
Storing card after successful 3DS completion is not supported in this API. Use [create using Payment Intent API](/docs/api/payment_sources#create_using_payment_intent) under Payment source to store the card after successful 3DS flow completion.

        */
      
      create_using_permanent_token(input:CreateUsingPermanentTokenInputParam):ChargebeeRequest<CreateUsingPermanentTokenResponse>;
       
      /**
        * @description Deletes a payment source. Once the payment source is deleted, if

* **Deleted payment source is Primary, and Backup is available**
  * The Backup payment source will become the Primary payment source.
* **Deleted payment source is Primary, and no Backup is available**
  * The other payment source available, but not assigned to any subscription, will become the Primary payment source. **Note** : *When multiple payment sources exist, the payment method added most recently will be considered*.

  * If other payment sources available are assigned to subscriptions, the auto collection attribute for the customer will be set to Off, and the events *card_deleted* and *payment_source_deleted* will be triggered.
* **Deleted payment source is attached to subscriptions**
  * Dunning will be initiated for subscriptions attached to this payment source if auto collection is set to On, and when no customer default is present.



If there is no such payment source present in the gateway for the customer, this API will return successfully without throwing any error.  
**Note** :   
If you delete the only available payment method of a customer in Chargebee, it also deletes the customer&#x27;s record at the gateway. To delete the payment method locally(delete only in Chargebee), use [Local Delete a Payment Source API](/docs/api/payment_sources#local_delete_a_payment_source).

        */
      
      delete(cust_payment_source_id:string):ChargebeeRequest<DeleteResponse>;
       
      /**
        * @description Storing card after successful 3DS completion is not supported in this API. Use [create using Payment Intent API](/docs/api/payment_sources#create_using_payment_intent) under Payment source to store the card after successful 3DS flow completion.

        */
      
      create_card(input:CreateCardInputParam):ChargebeeRequest<CreateCardResponse>;
       
      /**
        * @description This API can be used to verify bank accounts which have been added as payment source. This is applicable for **Stripe ACH with micro-deposit mode bank accounts** only. Stripe handles verification in two ways - via Plaid, and micro-deposit.

For verifying bank accounts via **micro-deposit**, Stripe deposits two small amounts to the bank account being added. These deposits will take 1-2 business days to appear on the customer&#x27;s bank statement. The bank statement description for the two micro-deposits contains the amount and the values deposited. Your customer will need to relay the value of the two deposits to you, after which you can verify the bank account. Once the bank account has been verified, the payment source will be marked as &quot;Valid&quot;.

        */
      
      verify_bank_account(cust_payment_source_id:string, input:VerifyBankAccountInputParam):ChargebeeRequest<VerifyBankAccountResponse>;
       
      /**
        * @description Lists all the payment sources

        */
      
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
       
      /**
        * @description Copies this payment source information to the gateway specified in the API.

This is useful if you want to port your customer&#x27;s card details into another gateway.

        */
      
      export_payment_source(cust_payment_source_id:string, input:ExportPaymentSourceInputParam):ChargebeeRequest<ExportPaymentSourceResponse>;
       
      /**
        * @description Used to attach the card to the customer after 3DS completion. [Learn more](/docs/api/3ds_card_payments) on the 3DS implementation via Chargebee APIs.

        */
      
      create_using_payment_intent(input:CreateUsingPaymentIntentInputParam):ChargebeeRequest<CreateUsingPaymentIntentResponse>;
       
      /**
        * @description Retrieves the payment source identified by the unique identifier.

        */
      
      retrieve(cust_payment_source_id:string):ChargebeeRequest<RetrieveResponse>;
       
      /**
        * @description Create a voucher payment method for the payment source.

        */
      
      create_voucher_payment_source(input:CreateVoucherPaymentSourceInputParam):ChargebeeRequest<CreateVoucherPaymentSourceResponse>;
       
      /**
        * @description This API offers an alternative way to create a payment source using a single-use gateway temporary token, which is generally provided by your payment gateway. In the case of Stripe, this temporary token is generated according to the instruction detailed in [Stripe documentation](https://stripe.com/docs/api/tokens/create_card).  
Storing card after successful 3DS completion is not supported in this API. Use [create using Payment Intent API](/docs/api/payment_sources#create_using_payment_intent) under Payment source to store the card after successful 3DS flow completion.

        */
      
      create_using_temp_token(input:CreateUsingTempTokenInputParam):ChargebeeRequest<CreateUsingTempTokenResponse>;
       
      /**
        * @description Merchants look to update card details when:

* The billing address of a customer has changed. In such a case, modify the billing address in the Chargebee and the payment gateway.
* The expiration date of the card has been extended by the bank. (This usually happens when the date of card expiry is in near future).

Multiple parameters such as address, expiry date, month, and so on, can be updated through this API.

Meta data can also be added additionally(supported in Stripe only). Metadata is a JSON object. It is used to store additional information about customers.

In **Stripe** and **Braintree** payment gateways, changes in card details are auto-updated. This feature can also be used for other payment gateways in which auto-update is not enabled or is not supported by Chargebee.  
**Note** : This endpoint supports Chargebee Test Gateway, [Stripe](https://www.chargebee.com/docs/2.0/stripe.html), [Braintree](https://www.chargebee.com/docs/2.0/braintree.html), [Authorize.net](https://www.chargebee.com/docs/2.0/authorize-index.html), [Worldpay US eCom](https://www.chargebee.com/docs/2.0/vantiv_worldpay.html), and [WorldPay Direct Integration](https://www.chargebee.com/docs/2.0/worldpay-direct.html). For all other gateways, your customers must re-enter the full [card details](/docs/api/payment_sources#update_a_card_payment_source_card_first_name) to update existing card details. For example, consider a customer not using the gateways mentioned above and wants to update the [card\[billing_addr1\]](/docs/api/payment_sources#update_a_card_payment_source_card_billing_addr1) parameter. In such a case, the customer must re-enter the value of all the parameters present in the [card](/docs/api/payment_sources#update_a_card_payment_source_card_first_name) object.

        */
      
      update_card(cust_payment_source_id:string, input?:UpdateCardInputParam):ChargebeeRequest<UpdateCardResponse>;
       
      /**
        * @description Switches the gateway in which this payment source information is stored.

This is applicable only if the payment source is present in Spreedly vault.

        */
      
      switch_gateway_account(cust_payment_source_id:string, input:SwitchGatewayAccountInputParam):ChargebeeRequest<SwitchGatewayAccountResponse>;
       
      /**
        * @description Storing card after successful 3DS completion is not supported in this API. Use [create using Payment Intent API](/docs/api/payment_sources#create_using_payment_intent) under Payment source to store the card after successful 3DS flow completion.

        */
      
      create_using_token(input:CreateUsingTokenInputParam):ChargebeeRequest<CreateUsingTokenResponse>;
       
      /**
        * @description Deletes a payment method from Chargebee. Payment method in the payment gateway will not be affected.

        */
      
      delete_local(cust_payment_source_id:string):ChargebeeRequest<DeleteLocalResponse>;
       
      /**
        * @description This API adds a Direct Debit payment source for a customer. The bank account details collected from your customer are passed as input to this API.

#### [Automated Clearing House (ACH) Network](https://www.chargebee.com/docs/direct-debit-payments.html#direct-debit-payments-in-the-united-states)

ACH is an electronic network for passing financial transactions in the US. Chargebee currently supports ACH via [Stripe](https://www.chargebee.com/docs/ach-payments-stripe.html) , [Authorize.Net](https://www.chargebee.com/docs/ach-payments-authorize_net.html), and [GoCardless](https://www.chargebee.com/docs/2.0/gocardless.html).

##### Bank account verification

Once the bank account has been added, it needs to be verified.

* For Stripe, perform this verification using the [Verify bank account payment source API](/docs/api/payment_sources#verify_bank_account_payment_source).
* For [Authorize.net](https://www.authorize.net/), the verification is done by them in 2-3 days after the account is added. No intervention is needed from your side or your customer.



#### Single Euro Payment Area (SEPA)

SEPA is an initiative that integrates bank transfer payments denominated in euro. It is supported via [GoCardless](https://www.chargebee.com/docs/gocardless.html), [Stripe](https://www.chargebee.com/docs/sepa-stripe.html) and [Adyen](https://www.chargebee.com/docs/adyen-sepa.html).  
**Note:**

* For SEPA via Stripe, it is mandatory to pass [user details](/docs/api#user_details) such as IP address and device information.
* For GoCardless, [local bank details](https://developer.gocardless.com/api-reference/#appendix-local-bank-details) can be passed instead of IBAN.

#### Bacs Payment Schemes Limited (Bacs) and Bg Autogiro

Bacs is an organization that manages the Direct Debit and Direct Credit payment methods in the UK. Bg Autogiro is a Direct Debit scheme for krona denominated payments in Sweden. Both Bacs and Bg Autogiro are supported via [GoCardless](https://www.chargebee.com/docs/gocardless.html).

#### Bulk Electronic Clearing System (BECS) and Pre-Authorized Debit (PAD)

BECS is an automated payment method for Direct Debit in Australia and New Zealand while PAD does the same for Canada. [GoCardless](https://www.chargebee.com/docs/gocardless.html) supports both.

For Direct Debit, the customer needs to accept a mandate that allows the merchant to debit their bank account. This agreement PDF can be obtained using the [Retrieve direct debit agreement PDF API](/docs/api/hosted_pages#retrieve_direct_debit_agreement_pdf).

If the customer has already reached the payment source limit allowed for the site, pass &#x60;replace_primary_payment_source&#x60; as &#x60;true&#x60;. Alternatively, [delete](/docs/api/payment_sources#delete_a_payment_source) one of the payment sources first and then add the bank account payment source for the customer.

        */
      
      create_bank_account(input:CreateBankAccountInputParam):ChargebeeRequest<CreateBankAccountResponse>;
       
      /**
        * @description This API is used to update the payment source details of a customer. Information related to bank account payment source such as email, first name, and last name can be updated.

* For GoCardless, Chargebee supports (ACH,BACS,SEPA,AUTOGIRO,BECS,BECS_NZ,PAD).
* For Stripe, Chargebee only supports SEPA.




        */
      
      update_bank_account(cust_payment_source_id:string, input?:UpdateBankAccountInputParam):ChargebeeRequest<UpdateBankAccountResponse>;
    }
    export interface CreateUsingPermanentTokenResponse {  
       customer:Customer;
       
       payment_source:PaymentSource;
    }
    export interface CreateUsingPermanentTokenInputParam {
       
      /**
        * @description Identifier of the customer with whom this payment source is associated.

        */
       
      customer_id:string;
       
      /**
        * @description The type of payment method. For more details refer [Update payment method for a customer](customers#update_payment_method_for_a_customer) API under Customer resource. \* direct_debit - Represents bank account for which the direct debit or ACH agreement/mandate is created. \* dotpay - Payments made via Dotpay. \* bancontact - Payments made via Bancontact Card. \* unionpay - Payments made via UnionPay. \* paypal_express_checkout - Payments made via PayPal Express Checkout. \* alipay - Payments made via Alipay. \* card - Card based payment including credit cards and debit cards. Details about the card can be obtained from the card resource. \* sofort - Payments made via Sofort. \* generic - Payments made via Generic Payment Method. \* amazon_payments - Payments made via Amazon Payments. \* google_pay - Payments made via Google Pay. \* giropay - Payments made via giropay. \* wechat_pay - Payments made via WeChat Pay. \* ideal - Payments made via iDEAL. \* netbanking_emandates - Netbanking (eMandates) Payments. \* apple_pay - Payments made via Apple Pay. \* upi - UPI Payments.

        */
       
      type:Type;
       
      /**
        * @description The gateway account to which the payment source is associated.

        */
       
      gateway_account_id?:string;
       
      /**
        * @description The reference id. In the case of Amazon and PayPal this will be the *billing agreement id* . For GoCardless direct debit this will be &#x27;mandate id&#x27;. In the case of card this will be the identifier provided by the gateway/card vault for the specific payment method resource. **Note:** This is not the one-time temporary token provided by gateways like Stripe.

        */
       
      reference_id:string;
       
      /**
        * @description 2-letter (alpha2) ISO country code. Indicates your customer&#x27;s payment method country of issuance. Applicable for PayPal via Braintree.

        */
       
      issuing_country?:string;
       
      /**
        * @description Indicates whether the primary payment source should be replaced with this payment source. In case of Create Subscription for Customer endpoint, the default value is True. Otherwise, the default value is False.

        */
       
      replace_primary_payment_source?:boolean;
       
      /**
        * @description * &#x60;checkout_com&#x60;: While adding a new payment method using [permanent token](./payment_sources?#create_using_permanent_token) or passing raw card details to Checkout.com, &#x60;document&#x60; ID and &#x60;country_of_residence&#x60; are required to support payments through [dLocal](https://www.checkout.com/docs/previous/payments/payment-methods/cards/dlocal).
  * &#x60;payer&#x60;: User related information.
    * &#x60;country_of_residence&#x60;: This is required since the billing country associated with the user&#x27;s payment method may not be the same as their country of residence. Hence the user&#x27;s country of residence needs to be specified. The country code should be a [two-character ISO code](https://docs.checkout.com/resources/codes/country-codes).
    * &#x60;document&#x60;: Document ID is the user&#x27;s [identification number](https://docs.dlocal.com/api-documentation/payins-api-reference/country-reference#documents) based on their country.
* &#x60;bluesnap&#x60;: While passing raw card details to BlueSnap, if &#x60;fraud_session_id&#x60; is added, [additional validation](https://developers.bluesnap.com/docs/fraud-prevention) is performed to avoid fraudulent transactions.
  * &#x60;fraud&#x60;: Fraud identification related information.
    * &#x60;fraud_session_id&#x60;: Your [BlueSnap fraud session ID](https://developers.bluesnap.com/docs/fraud-prevention#section-implementing-device-data-collector) required to perform anti-fraud validation.
* &#x60;braintree&#x60;: While passing raw card details to Braintree, your &#x60;fraud_merchant_id&#x60; and the user&#x27;s &#x60;device_session_id&#x60; can be added to perform [additional validation](https://developers.braintreepayments.com/guides/premium-fraud-management-tools/device-data-collection/javascript/v3#collecting-device-data) and avoid fraudulent transactions.
  * &#x60;fraud&#x60;: Fraud identification related information.
    * &#x60;device_session_id&#x60;: Session ID associated with the user&#x27;s device.
    * &#x60;fraud_merchant_id&#x60;: Your merchant ID for fraud detection.
* &#x60;chargebee_payments&#x60;: While passing raw card details to Chargebee Payments, if &#x60;fraud_session_id&#x60; is added, additional validation is performed to avoid fraudulent transactions.
  * &#x60;fraud&#x60;: Fraud identification related information.
    * &#x60;fraud_session_id&#x60;: Your Chargebee Payments fraud session ID required to perform anti-fraud validation.
.

        */
       
      additional_information?:object;
    }
    export interface DeleteResponse {  
       customer:Customer;
       
       payment_source:PaymentSource;
    }
    
    export interface CreateCardResponse {  
       customer:Customer;
       
       payment_source:PaymentSource;
    }
    export interface CreateCardInputParam {
       
      /**
        * @description Identifier of the customer with whom this payment source is associated.

        */
       
      customer_id:string;
       
      /**
        * @description Indicates whether the primary payment source should be replaced with this payment source. In case of Create Subscription for Customer endpoint, the default value is True. Otherwise, the default value is False.

        */
       
      replace_primary_payment_source?:boolean;
       
      /**
        * @description Parameters for card

        */
       
      card?:{additional_information?:object,billing_addr1?:string,billing_addr2?:string,billing_city?:string,billing_country?:string,billing_state?:string,billing_state_code?:string,billing_zip?:string,cvv?:string,expiry_month:number,expiry_year:number,first_name?:string,gateway_account_id?:string,last_name?:string,number:string};
    }
    export interface VerifyBankAccountResponse {  
       payment_source:PaymentSource;
    }
    export interface VerifyBankAccountInputParam {
       
      /**
        * @description Value of the micro-deposits sent to the bank account.

        */
       
      amount1:number;
       
      /**
        * @description Value of the micro-deposits sent to the bank account.

        */
       
      amount2:number;
    }
    export interface ListResponse {  
      /**
        * @description Lists all the payment sources

        */
       
       list:{payment_source:PaymentSource}[];
       
      /**
        * @description Lists all the payment sources

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
        * @description Lists all the payment sources

        */
        
      subscription_id?:string;
       
      /**
        * @description Lists all the payment sources

        */
        
      customer_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Type of payment source

        */
        
      type?:{in?:string,is?:'giropay' | 'alipay' | 'ideal' | 'google_pay' | 'netbanking_emandates' | 'dotpay' | 'unionpay' | 'direct_debit' | 'generic' | 'sofort' | 'amazon_payments' | 'upi' | 'apple_pay' | 'bancontact' | 'paypal_express_checkout' | 'wechat_pay' | 'card',is_not?:'giropay' | 'alipay' | 'ideal' | 'google_pay' | 'netbanking_emandates' | 'dotpay' | 'unionpay' | 'direct_debit' | 'generic' | 'sofort' | 'amazon_payments' | 'upi' | 'apple_pay' | 'bancontact' | 'paypal_express_checkout' | 'wechat_pay' | 'card',not_in?:string};
       
      /**
        * @description Current status of the payment source.

        */
        
      status?:{in?:string,is?:'valid' | 'expiring' | 'expired' | 'invalid' | 'pending_verification',is_not?:'valid' | 'expiring' | 'expired' | 'invalid' | 'pending_verification',not_in?:string};
       
      /**
        * @description Timestamp indicating when this payment source resource was last updated.

        */
        
      updated_at?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description Timestamp indicating when this payment source resource is created.

        */
        
      created_at?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description Lists all the payment sources

        */
        
      sort_by?:{asc?:'updated_at' | 'created_at',desc?:'updated_at' | 'created_at'};
    }
    export interface ExportPaymentSourceResponse {  
       third_party_payment_method:ThirdPartyPaymentMethod;
    }
    export interface ExportPaymentSourceInputParam {
       
      /**
        * @description The gateway account you want to copy the card.

        */
       
      gateway_account_id:string;
    }
    export interface CreateUsingPaymentIntentResponse {  
       customer:Customer;
       
       payment_source:PaymentSource;
    }
    export interface CreateUsingPaymentIntentInputParam {
       
      /**
        * @description Identifier of the customer with whom this payment source is associated.

        */
       
      customer_id:string;
       
      /**
        * @description Indicates whether the primary payment source should be replaced with this payment source. In case of Create Subscription for Customer endpoint, the default value is True. Otherwise, the default value is False.

        */
       
      replace_primary_payment_source?:boolean;
       
      /**
        * @description Parameters for payment_intent

        */
       
      payment_intent?:{additional_info?:object,additional_information?:object,gateway_account_id?:string,gw_token?:string,id?:string,payment_method_type?:'giropay' | 'ideal' | 'google_pay' | 'netbanking_emandates' | 'dotpay' | 'boleto' | 'direct_debit' | 'sofort' | 'upi' | 'apple_pay' | 'bancontact' | 'paypal_express_checkout' | 'card',reference_id?:string};
    }
    export interface RetrieveResponse {  
       payment_source:PaymentSource;
    }
    
    export interface CreateVoucherPaymentSourceResponse {  
       customer:Customer;
       
       payment_source:PaymentSource;
    }
    export interface CreateVoucherPaymentSourceInputParam {
       
      /**
        * @description Identifier of the customer with whom this payment source is associated.

        */
       
      customer_id:string;
       
      /**
        * @description Parameters for voucher_payment_source

        */
       
      voucher_payment_source?:{billing_address?:object,gateway_account_id?:string,tax_id?:string,voucher_type:VoucherType};
    }
    export interface CreateUsingTempTokenResponse {  
       customer:Customer;
       
       payment_source:PaymentSource;
    }
    export interface CreateUsingTempTokenInputParam {
       
      /**
        * @description Identifier of the customer with whom this payment source is associated.

        */
       
      customer_id:string;
       
      /**
        * @description The gateway account to which the payment source is associated.

        */
       
      gateway_account_id?:string;
       
      /**
        * @description Type of payment source. \* direct_debit - Represents bank account for which the direct debit or ACH agreement/mandate is created. \* dotpay - Payments made via Dotpay. \* bancontact - Payments made via Bancontact Card. \* unionpay - Payments made via UnionPay. \* paypal_express_checkout - Payments made via PayPal Express Checkout. \* alipay - Payments made via Alipay. \* card - Card based payment including credit cards and debit cards. Details about the card can be obtained from the card resource. \* sofort - Payments made via Sofort. \* generic - Payments made via Generic Payment Method. \* amazon_payments - Payments made via Amazon Payments. \* google_pay - Payments made via Google Pay. \* giropay - Payments made via giropay. \* wechat_pay - Payments made via WeChat Pay. \* ideal - Payments made via iDEAL. \* netbanking_emandates - Netbanking (eMandates) Payments. \* apple_pay - Payments made via Apple Pay. \* upi - UPI Payments.

        */
       
      type:Type;
       
      /**
        * @description Single-use token created by payment gateways. In Stripe, a single-use token is created for Apple Pay Wallet, card details or direct debit. In Braintree, a nonce is created for Apple Pay Wallet, PayPal, or card details. In Authorize.net, a nonce is created for card details. In Adyen, an encrypted data is created from the card details.

        */
       
      tmp_token:string;
       
      /**
        * @description 2-letter (alpha2) ISO country code. Indicates your customer&#x27;s payment method country of issuance. Applicable for PayPal via Braintree.

        */
       
      issuing_country?:string;
       
      /**
        * @description Indicates whether the primary payment source should be replaced with this payment source. In case of Create Subscription for Customer endpoint, the default value is True. Otherwise, the default value is False.

        */
       
      replace_primary_payment_source?:boolean;
       
      /**
        * @description * &#x60;checkout_com&#x60;: While adding a new payment method using [permanent token](./payment_sources?#create_using_permanent_token) or passing raw card details to Checkout.com, &#x60;document&#x60; ID and &#x60;country_of_residence&#x60; are required to support payments through [dLocal](https://www.checkout.com/docs/previous/payments/payment-methods/cards/dlocal).
  * &#x60;payer&#x60;: User related information.
    * &#x60;country_of_residence&#x60;: This is required since the billing country associated with the user&#x27;s payment method may not be the same as their country of residence. Hence the user&#x27;s country of residence needs to be specified. The country code should be a [two-character ISO code](https://docs.checkout.com/resources/codes/country-codes).
    * &#x60;document&#x60;: Document ID is the user&#x27;s [identification number](https://docs.dlocal.com/api-documentation/payins-api-reference/country-reference#documents) based on their country.
* &#x60;bluesnap&#x60;: While passing raw card details to BlueSnap, if &#x60;fraud_session_id&#x60; is added, [additional validation](https://developers.bluesnap.com/docs/fraud-prevention) is performed to avoid fraudulent transactions.
  * &#x60;fraud&#x60;: Fraud identification related information.
    * &#x60;fraud_session_id&#x60;: Your [BlueSnap fraud session ID](https://developers.bluesnap.com/docs/fraud-prevention#section-implementing-device-data-collector) required to perform anti-fraud validation.
* &#x60;braintree&#x60;: While passing raw card details to Braintree, your &#x60;fraud_merchant_id&#x60; and the user&#x27;s &#x60;device_session_id&#x60; can be added to perform [additional validation](https://developers.braintreepayments.com/guides/premium-fraud-management-tools/device-data-collection/javascript/v3#collecting-device-data) and avoid fraudulent transactions.
  * &#x60;fraud&#x60;: Fraud identification related information.
    * &#x60;device_session_id&#x60;: Session ID associated with the user&#x27;s device.
    * &#x60;fraud_merchant_id&#x60;: Your merchant ID for fraud detection.
* &#x60;chargebee_payments&#x60;: While passing raw card details to Chargebee Payments, if &#x60;fraud_session_id&#x60; is added, additional validation is performed to avoid fraudulent transactions.
  * &#x60;fraud&#x60;: Fraud identification related information.
    * &#x60;fraud_session_id&#x60;: Your Chargebee Payments fraud session ID required to perform anti-fraud validation.
.

        */
       
      additional_information?:object;
    }
    export interface UpdateCardResponse {  
       customer:Customer;
       
       payment_source:PaymentSource;
    }
    export interface UpdateCardInputParam {
       
      /**
        * @description Additional data about this resource can be passed to **Stripe** gateway here in the JSON Format. This will be stored along with payment source at the gateway account.

        */
       
      gateway_meta_data?:object;
       
      /**
        * @description Reference transaction is used for future purchases. This is only applicable for Vantiv.

        */
       
      reference_transaction?:string;
       
      /**
        * @description Parameters for card

        */
       
      card?:{billing_addr1?:string,billing_addr2?:string,billing_city?:string,billing_country?:string,billing_state?:string,billing_state_code?:string,billing_zip?:string,expiry_month?:number,expiry_year?:number,first_name?:string,last_name?:string};
    }
    export interface SwitchGatewayAccountResponse {  
       customer:Customer;
       
       payment_source:PaymentSource;
    }
    export interface SwitchGatewayAccountInputParam {
       
      /**
        * @description The gateway account you want to switch to.

        */
       
      gateway_account_id:string;
    }
    export interface CreateUsingTokenResponse {  
       customer:Customer;
       
       payment_source:PaymentSource;
    }
    export interface CreateUsingTokenInputParam {
       
      /**
        * @description Identifier of the customer with whom this payment source is associated.

        */
       
      customer_id:string;
       
      /**
        * @description Indicates whether the primary payment source should be replaced with this payment source. In case of Create Subscription for Customer endpoint, the default value is True. Otherwise, the default value is False.

        */
       
      replace_primary_payment_source?:boolean;
       
      /**
        * @description Token generated by Chargebee JS representing payment method details.

        */
       
      token_id:string;
    }
    export interface DeleteLocalResponse {  
       customer:Customer;
       
       payment_source:PaymentSource;
    }
    
    export interface CreateBankAccountResponse {  
       customer:Customer;
       
       payment_source:PaymentSource;
    }
    export interface CreateBankAccountInputParam {
       
      /**
        * @description Identifier of the customer with whom this payment source is associated.

        */
       
      customer_id:string;
       
      /**
        * @description 2-letter(alpha2) ISO country code. Required when local bank details are provided, and not IBAN.

        */
       
      issuing_country?:string;
       
      /**
        * @description Indicates whether the primary payment source should be replaced with this payment source. In case of Create Subscription for Customer endpoint, the default value is True. Otherwise, the default value is False.

        */
       
      replace_primary_payment_source?:boolean;
       
      /**
        * @description Parameters for bank_account

        */
       
      bank_account?:{account_holder_type?:AccountHolderType,account_number?:string,account_type?:AccountType,bank_code?:string,bank_name?:string,billing_address?:object,company?:string,echeck_type?:EcheckType,email?:string,first_name?:string,gateway_account_id?:string,iban?:string,last_name?:string,phone?:string,routing_number?:string,swedish_identity_number?:string};
    }
    export interface UpdateBankAccountResponse {  
       customer:Customer;
       
       payment_source:PaymentSource;
    }
    export interface UpdateBankAccountInputParam {
       
      /**
        * @description Parameters for bank_account

        */
       
      bank_account?:{email?:string,first_name?:string,last_name?:string};
    }
    export interface Card {  
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
       
      iin?:string;
       
         /**
          * @description Last four digits of the card number

          */
       
      last4?:string;
       
         /**
          * @description Card brand \* american_express - An American Express card. \* visa - A Visa card. \* not_applicable - Used for offline entries in transactions. Not applicable for cards \* mastercard - A MasterCard. \* jcb - A JCB card. \* other - Card belonging to types other than those listed above. \* bancontact - A Bancontact card. \* discover - A Discover card. \* diners_club - A Diner&#x27;s Club card.

          */
       
      brand?:'discover' | 'other' | 'bancontact' | 'visa' | 'jcb' | 'diners_club' | 'mastercard' | 'not_applicable' | 'american_express';
       
         /**
          * @description Card Funding type \* not_known - An unknown card. \* debit - A debit card. \* credit - A credit card. \* prepaid - A prepaid card. \* not_applicable - Used for ACH. Not applicable for cards

          */
       
      funding_type?:'not_known' | 'prepaid' | 'not_applicable' | 'credit' | 'debit';
       
         /**
          * @description Card expiry month.

          */
       
      expiry_month?:number;
       
         /**
          * @description Card expiry year.

          */
       
      expiry_year?:number;
       
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
          * @description Masked credit card number that is safe to show.

          */
       
      masked_number?:string;
    }
    export interface BankAccount {  
         /**
          * @description Last four digits of the bank account number

          */
       
      last4?:string;
       
         /**
          * @description Account holder&#x27;s name as per bank account.

          */
       
      name_on_account?:string;
       
         /**
          * @description Account holder&#x27;s first name as per bank account.

          */
       
      first_name?:string;
       
         /**
          * @description Account holder&#x27;s last name as per bank account.

          */
       
      last_name?:string;
       
         /**
          * @description Name of account holder&#x27;s bank.

          */
       
      bank_name?:string;
       
         /**
          * @description Mandate Id. Applicable for SEPA, BACS, Autogiro, and BECS.

          */
       
      mandate_id?:string;
       
         /**
          * @description Represents the account type used to create a payment source. Available for [Authorize.net](https://www.authorize.net/) ACH and Razorpay NetBanking users only. If not passed, account type is taken as null. \* checking - Checking Account \* business_checking - Business Checking Account \* savings - Savings Account \* current - Current Account

          */
       
      account_type?:AccountType;
       
         /**
          * @description For Authorize.net ACH users only. Indicates the type of eCheck. \* ppd - Payment Authorization is prearranged between the customer and the merchant. \* web - Payment Authorization obtained from the customer via the internet. \* ccd - Payment Authorization agreement from the corporate customer is required. Applicable for business_checking account_type.

          */
       
      echeck_type?:EcheckType;
       
         /**
          * @description For Stripe ACH users only. Indicates the account holder type. \* company - Company Account. \* individual - Individual Account.

          */
       
      account_holder_type?:AccountHolderType;
       
         /**
          * @description Account holder&#x27;s email address. If not passed, details from customer details will be considered. All Direct Debit compliant emails will be sent to this email address.

          */
       
      email?:string;
    }
    export interface CustVoucherSource {  
         /**
          * @description Last four digits of unique id for voucher payment source ex: tax_id

          */
       
      last4?:string;
       
         /**
          * @description Customer first name as per voucher payment source.

          */
       
      first_name?:string;
       
         /**
          * @description Customer last name as per voucher payment source.

          */
       
      last_name?:string;
       
         /**
          * @description Email address associated Customer&#x27;s voucher payment source.

          */
       
      email?:string;
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
    export interface AmazonPayment {  
         /**
          * @description Email address associated with Amazon payment account

          */
       
      email?:string;
       
         /**
          * @description Billing agreement id

          */
       
      agreement_id?:string;
    }
    export interface Upi {  
         /**
          * @description A unique identifier mapped with an individuals bank account to help UPI track the account.

          */
       
      vpa?:string;
    }
    export interface Paypal {  
         /**
          * @description Email address associated with PayPal Express Checkout

          */
       
      email?:string;
       
         /**
          * @description Billing agreement id

          */
       
      agreement_id?:string;
    }
    export interface Mandate {  
      id?:string;
       
      subscription_id?:string;
       
      created_at?:number;
    }
  }
}