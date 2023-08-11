///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface Transaction {
    
    /**
      * @description Uniquely identifies the transaction.

      */
    
    id:string;
    
    /**
      * @description Identifier of the customer for which this transaction is made

      */
    
    customer_id?:string;
    
    /**
      * @description Identifier of the subscription for which this transaction is made.

      */
    
    subscription_id?:string;
    
    /**
      * @description The gateway account used for this transaction

      */
    
    gateway_account_id?:string;
    
    /**
      * @description Identifier of the payment source for which this transaction is made

      */
    
    payment_source_id?:string;
    
    /**
      * @description The payment method of this transaction \* unionpay - Unionpay \* bank_transfer - Bank Transfer \* paypal_express_checkout - Paypal Express Checkout \* other - Payment Methods other than the above types \* upi - upi \* ach_credit - ACH Credit \* sepa_credit - SEPA Credit \* check - Check \* card - Card \* amazon_payments - Amazon Payments \* ideal - IDEAL \* chargeback - Only applicable for a transaction of [type](transactions#transaction_type) &#x3D; &#x60;refund&#x60;. This value is set by Chargebee when an automated [chargeback](https://www.chargebee.com/docs/chargeback.html#chargeback-process) occurs. You can also set this explicitly when [recording a refund](transactions#record_an_offline_refund). \* google_pay - Google Pay \* netbanking_emandates - netbanking_emandates \* direct_debit - Direct Debit \* dotpay - Dotpay \* alipay - Alipay \* sofort - Sofort \* apple_pay - Apple Pay \* giropay - giropay \* wechat_pay - WeChat Pay \* cash - Cash \* bancontact - Bancontact

      */
    
    payment_method:PaymentMethod;
    
    /**
      * @description The reference number for this transaction. For example, the check number when [payment_method](transactions#transaction_payment_method) &#x3D; &#x60;check&#x60;.

      */
    
    reference_number?:string;
    
    /**
      * @description Gateway through which this transaction was done. Applicable only for &#x27;Card&#x27; Payment Method \* bluesnap - BlueSnap is a payment gateway. \* tco - 2Checkout is a payment gateway. \* bluepay - BluePay is a payment gateway. \* paypal_express_checkout - PayPal Express Checkout is a payment gateway. \* paypal_payflow_pro - PayPal Payflow Pro is a payment gateway. \* razorpay - Razorpay is a fast growing payment service provider in India working with all leading banks and support for major local payment methods including Netbanking, UPI etc. \* global_payments - Global Payments is a payment service provider. \* not_applicable - Indicates that payment gateway is not applicable for this resource. \* checkout_com - Checkout.com is a payment gateway. \* adyen - Adyen is a payment gateway. \* braintree - Braintree is a payment gateway. \* nmi - NMI is a payment gateway. \* worldpay - WorldPay is a payment gateway \* moneris_us - Moneris USA is a payment gateway. \* pin - Pin is a payment gateway \* authorize_net - Authorize.net is a payment gateway \* stripe - Stripe is a payment gateway. \* moneris - Moneris is a payment gateway. \* chargebee - Chargebee test gateway. \* cybersource - CyberSource is a payment gateway. \* first_data_global - First Data Global Gateway Virtual Terminal Account \* exact - Exact Payments is a payment gateway. \* eway - eWAY Account is a payment gateway. \* amazon_payments - Amazon Payments is a payment service provider. \* quickbooks - Intuit QuickBooks Payments gateway \* wepay - WePay is a payment gateway. \* wirecard - WireCard Account is a payment service provider. \* chargebee_payments - Chargebee Payments gateway \* sage_pay - Sage Pay is a payment gateway. \* elavon - Elavon Virtual Merchant is a payment solution. \* paypal_pro - PayPal Pro Account is a payment gateway. \* orbital - Chase Paymentech(Orbital) is a payment gateway. \* paypal - PayPal Commerce is a payment gateway. \* beanstream - Bambora(formerly known as Beanstream) is a payment gateway. \* hdfc - HDFC Account is a payment gateway. \* ingenico_direct - Worldline Online Payments is a payment gateway. \* ogone - Ingenico ePayments (formerly known as Ogone) is a payment gateway. \* migs - MasterCard Internet Gateway Service payment gateway. \* vantiv - Vantiv is a payment gateway. \* eway_rapid - eWAY Rapid is a payment gateway. \* gocardless - GoCardless is a payment service provider. \* mollie - Mollie is a payment gateway. \* paymill - PAYMILL is a payment gateway. \* balanced_payments - Balanced is a payment gateway

      */
    
    gateway:Gateway;
    
    /**
      * @description Type of the transaction. \* refund - The transaction represents a refund of [amount](transactions#transaction_amount) to the customer&#x27;s [payment_source](payment_sources). \* authorization - The transaction represents an authorization for capturing the [amount](transactions#transaction_amount) from the customer&#x27;s [payment_source](payment_sources). \* payment_reversal - Indicates a reversal transaction. \* payment - The transaction represents capture of [amount](transactions#transaction_amount) from the customer&#x27;s [payment_source](payment_sources).

      */
    
    type:'authorization' | 'payment_reversal' | 'payment' | 'refund';
    
    /**
      * @description Indicates when this transaction occurred.

      */
    
    date?:number;
    
    /**
      * @description Indicates the time at which the final status of the transaction has been marked.

      */
    
    settled_at?:number;
    
    /**
      * @description Exchange rate used for base currency conversion

      */
    
    exchange_rate?:number;
    
    /**
      * @description The currency code (ISO 4217 format) for the transaction.

      */
    
    currency_code:string;
    
    /**
      * @description Amount for this transaction.

      */
    
    amount?:number;
    
    /**
      * @description The id with which this transaction is referred in gateway.

      */
    
    id_at_gateway?:string;
    
    /**
      * @description The status of this transaction. \* in_progress - Transaction is being processed by the gateway. This typically happens for [direct debit transactions](https://www.chargebee.com/docs/direct-debit-payments.html) or, in case of cards, refund transactions. Such transactions can take 2-7 days to complete, depending on the gateway and payment method. \* timeout - Transaction failed because of Gateway not accepting the connection. \* failure - Transaction failed. Refer the &#x27;error_code&#x27; and &#x27;error_text&#x27; fields to know the reason for failure \* success - The transaction is successful. \* voided - The transaction got voided or authorization expired at gateway. \* needs_attention - Connection with Gateway got terminated abruptly. So, status of this transaction needs to be resolved manually

      */
    
    status?:'in_progress' | 'success' | 'failure' | 'voided' | 'timeout' | 'needs_attention';
    
    /**
      * @description Indicates whether or not the transaction has been identified as fraudulent. \* fraudulent - The transaction has been marked as fraudulent \* suspicious - The transaction has been identified as potentially fraudulent by the gateway \* safe - The transaction has been marked as safe

      */
    
    fraud_flag?:'safe' | 'suspicious' | 'fraudulent';
    
    /**
      * @description Marker for on-session payments (3DS). null indicates &#x27;merchant&#x27;. \* customer - Customer initiated 3DS payment \* merchant - Payment initiated on stored payment method by the merchant

      */
    
    initiator_type?:'merchant' | 'customer';
    
    /**
      * @description Indicates whether this transaction has gone through 3DS. Applicable only for &#x27;on-session&#x27; payments \&amp; verifications.If 3DS is not enforced by the gateway/bank or if the customers&#x27; card is not enrolled, this will be false.

      */
    
    three_d_secure?:boolean;
    
    /**
      * @description Type of authorization transaction. \* verification - The transaction has been created for payment method verification. \* blocking_funds - The transaction has been created to block the funds from payment method.

      */
    
    authorization_reason?:'blocking_funds' | 'verification';
    
    /**
      * @description Error code received from the payment gateway on failure.

      */
    
    error_code?:string;
    
    /**
      * @description Error message received from the payment gateway on failure.

      */
    
    error_text?:string;
    
    /**
      * @description Timestamp indicating when the payment was voided or authorization expired at gateway.

      */
    
    voided_at?:number;
    
    /**
      * @description Version number of this resource. The &#x60;resource_version&#x60; is updated with a new timestamp in milliseconds for every change made to the resource. This attribute will be present only if the resource has been updated after 2016-09-28.

      */
    
    resource_version?:number;
    
    /**
      * @description Timestamp indicating when this transaction was last updated. This attribute will be present only if the resource has been updated after 2016-09-28.

      */
    
    updated_at?:number;
    
    /**
      * @description Short description why the transaction was marked as fraud/suspicious

      */
    
    fraud_reason?:string;
    
    /**
      * @description This is the part of the &#x60;amount&#x60; which has not been invoiced yet and is therefore added to [excess_payments](customers#customer_excess_payments) for the customer. Applicable only for a transaction of &#x60;type&#x60; &#x3D; &#x60;payment&#x60;.

      */
    
    amount_unused?:number;
    
    /**
      * @description The masked card number used for this transaction. Applicable only for &#x27;Card&#x27; Payment Method

      */
    
    masked_card_number?:string;
    
    /**
      * @description This is the &#x60;id&#x60; of the offline transaction that is being refunded or reversed. Applicable only for transaction of &#x60;type&#x60; &#x3D; &#x60;refund&#x60; or &#x60;payment_reversal&#x60;.

      */
    
    reference_transaction_id?:string;
    
    /**
      * @description This is the &#x60;id&#x60; of the transaction (always of &#x60;type&#x60; &#x3D; &#x60;payment&#x60;) being refunded. Applicable only for transaction of &#x60;type&#x60; &#x3D; &#x60;refund&#x60;.

      */
    
    refunded_txn_id?:string;
    
    /**
      * @description This is the &#x60;id&#x60; of the transaction (always of &#x60;type&#x60; &#x3D; &#x60;authorization&#x60;) which authorizes the payment being captured. Applicable only for transaction of &#x60;type&#x60; &#x3D; &#x60;payment&#x60;.

      */
    
    reference_authorization_id?:string;
    
    /**
      * @description This is the part of the authorized &#x60;amount&#x60; that is yet to be captured. The payment capture is recorded as a transaction of of &#x60;type&#x60; &#x3D; &#x60;payment&#x60;. Applicable only for a transaction of &#x60;type&#x60; &#x3D; &#x60;authorization&#x60;.

      */
    
    amount_capturable?:number;
    
    /**
      * @description Reversal transaction id. Applicable only for payment transactions.

      */
    
    reversal_transaction_id?:string;
    
    /**
      * @description Indicates that this resource has been deleted.

      */
    
    deleted:boolean;
    
    /**
      * @description First 6 digits of the card payment method.

      */
    
    iin?:string;
    
    /**
      * @description Last 4 digits of the card payment method.

      */
    
    last4?:string;
    
    /**
      * @description A unique id used to track this transaction across various systems you integrate with. This id is passed to the payment gateway when the transaction is initiated. Supported only for the [Exact payment gateway](https://www.chargebee.com/docs/exact-direct.html).

      */
    
    merchant_reference_id?:string;
    
    /**
      * @description The unique ID of the [business entity](/docs/api?prod_cat_ver&#x3D;2#mbe) of this &#x60;transaction&#x60;. This is always the same as the business entity of the [customer](/docs/api/transactions?prod_cat_ver&#x3D;2#transaction_customer_id).   

      */
    
    business_entity_id?:string;
    
    /**
      * @description Payment method details of the corresponding transaction

      */
    
    payment_method_details?:string;
    
    /**
      * @description Applicable only for &#x27;Payment&#x27; transactions. The list of invoices this &#x27;payment&#x27; transaction is applied to.

      */
    
    linked_invoices?:Transaction.InvoiceTransaction[];
    
    /**
      * @description Applicable only for &#x27;Refund&#x27; transactions. The list of Credit Notes this &#x27;refund&#x27; transaction is associated with.

      */
    
    linked_credit_notes?:Transaction.CreditNoteTransaction[];
    
    /**
      * @description Applicable only for Payment transactions. It only returns values when the transaction is not associated with an invoice, and that there is a refund for the transaction.

      */
    
    linked_refunds?:Transaction.TxnRefundsAndReversal[];
    
    /**
      * @description The list of payments captured for this authorization transaction.

      */
    
    linked_payments?:Transaction.LinkedPayment[];
  }
  export namespace Transaction {
    export class TransactionResource {  
      /**
        * @description Records a refund made offline. Applicable only for &#x60;transaction&#x60;s of [type](transactions#transaction_type) &#x3D; &#x60;payment&#x60;.

        */
      
      record_refund(transaction_id:string, input:RecordRefundInputParam):ChargebeeRequest<RecordRefundResponse>;
       
      /**
        * @description Lists all the transactions.

        */
      
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
       
      /**
        * @description This API voids the specific authorization transaction in order to release the blocked funds from the customer&#x27;s card. Voiding an already captured or voided transaction is not possible.

        */
      
      void_transaction(transaction_id:string):ChargebeeRequest<VoidTransactionResponse>;
       
      /**
        * @description Authorizes a specific amount in customer&#x27;s Credit card, which can be collected within a span of time. Read more on authorization and capture [here](https://www.chargebee.com/docs/stripe.html#auth-and-capture).

        */
      
      create_authorization(input:CreateAuthorizationInputParam):ChargebeeRequest<CreateAuthorizationResponse>;
       
      /**
        * @description Retrieve a transaction identified by its unique id.

        */
      
      retrieve(transaction_id:string):ChargebeeRequest<RetrieveResponse>;
       
      /**
        * @description Retrieves the payments for an invoice with the recent ones on top. This returns all the payment attempts(manual \&amp; automatic) made for this invoice.

        */
      
      payments_for_invoice(invoice_id:string, input?:PaymentsForInvoiceInputParam):ChargebeeRequest<PaymentsForInvoiceResponse>;
       
      /**
        * @description This API deletes an offline transaction. However, to delete an offline transaction all payment allocations associated with the transaction must be removed.

        */
      
      delete_offline_transaction(transaction_id:string, input?:DeleteOfflineTransactionInputParam):ChargebeeRequest<DeleteOfflineTransactionResponse>;
       
      /**
        * @description Refunds an online payment. Applicable only for &#x60;transaction&#x60;s of [type](transactions#transaction_type) &#x3D; &#x60;payment&#x60;. You can only refund a &#x60;transaction&#x60; whose [status](transactions#transaction_status)&#x60; &#x60; is &#x60;success&#x60;.

        */
      
      refund(transaction_id:string, input?:RefundInputParam):ChargebeeRequest<RefundResponse>;
    }
    export interface RecordRefundResponse {  
      /**
        * @description Records a refund made offline. Applicable only for &#x60;transaction&#x60;s of [type](transactions#transaction_type) &#x3D; &#x60;payment&#x60;.

        */
       
       transaction:Transaction;
    }
    export interface RecordRefundInputParam {
       
      /**
        * @description The amount to be recorded as refunded. Must not exceed [amount_unused](transactions#transaction_amount_unused). If not passed then all of [amount_unused](transactions#transaction_amount_unused) is recorded as refunded.

        */
       
      amount?:number;
       
      /**
        * @description The payment method used to make the refund. \* card - Card \* alipay - Alipay \* sofort - Sofort \* play_store - Play Store \* upi - upi \* ach_credit - ACH Credit \* amazon_payments - Amazon Payments \* apple_pay - Apple Pay \* ideal - IDEAL \* giropay - giropay \* chargeback - Only applicable for a transaction of [type](transactions#transaction_type) &#x3D; &#x60;refund&#x60;. This value is set by Chargebee when an automated [chargeback](https://www.chargebee.com/docs/chargeback.html#chargeback-process) occurs. You can also set this explicitly when [recording a refund](transactions#record_an_offline_refund). \* wechat_pay - WeChat Pay \* sepa_credit - SEPA Credit \* google_pay - Google Pay \* cash - Cash \* netbanking_emandates - netbanking_emandates \* unionpay - Unionpay \* bancontact - Bancontact \* bank_transfer - Bank Transfer \* paypal_express_checkout - Paypal Express Checkout \* app_store - App Store \* check - Check \* direct_debit - Direct Debit \* dotpay - Dotpay \* other - Payment Methods other than the above types

        */
       
      payment_method:PaymentMethod;
       
      /**
        * @description The date when the refund was made.

        */
       
      date:number;
       
      /**
        * @description The reference number for this transaction. For example, the check number when &#x60;payment_method&#x60; &#x3D; &#x60;check&#x60;.

        */
       
      reference_number?:string;
       
      /**
        * @description Remarks, if any, on the refund.

        */
       
      comment?:string;
    }
    export interface ListResponse {  
      /**
        * @description Lists all the transactions.

        */
       
       list:{transaction:Transaction}[];
       
      /**
        * @description Lists all the transactions.

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
        * @description Uniquely identifies the transaction.

        */
        
      id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Identifier of the customer for which this transaction is made

        */
        
      customer_id?:{in?:string,is?:string,is_not?:string,is_present?:'true' | 'false',not_in?:string,starts_with?:string};
       
      /**
        * @description Identifier of the subscription for which this transaction is made.

        */
        
      subscription_id?:{in?:string,is?:string,is_not?:string,is_present?:'true' | 'false',not_in?:string,starts_with?:string};
       
      /**
        * @description To filter based on Transaction payment source id.

        */
        
      payment_source_id?:{in?:string,is?:string,is_not?:string,is_present?:'true' | 'false',not_in?:string,starts_with?:string};
       
      /**
        * @description The payment method of this transaction

        */
        
      payment_method?:{in?:string,is?:'other' | 'netbanking_emandates' | 'ach_credit' | 'dotpay' | 'boleto' | 'direct_debit' | 'chargeback' | 'wechat_pay' | 'cash' | 'giropay' | 'bank_transfer' | 'alipay' | 'ideal' | 'google_pay' | 'custom' | 'unionpay' | 'check' | 'sofort' | 'amazon_payments' | 'upi' | 'apple_pay' | 'bancontact' | 'paypal_express_checkout' | 'sepa_credit' | 'card',is_not?:'other' | 'netbanking_emandates' | 'ach_credit' | 'dotpay' | 'boleto' | 'direct_debit' | 'chargeback' | 'wechat_pay' | 'cash' | 'giropay' | 'bank_transfer' | 'alipay' | 'ideal' | 'google_pay' | 'custom' | 'unionpay' | 'check' | 'sofort' | 'amazon_payments' | 'upi' | 'apple_pay' | 'bancontact' | 'paypal_express_checkout' | 'sepa_credit' | 'card',not_in?:string};
       
      /**
        * @description Gateway through which this transaction was done. Applicable only for &#x27;Card&#x27; Payment Method

        */
        
      gateway?:{in?:string,is?:'bluepay' | 'beanstream' | 'elavon' | 'orbital' | 'hdfc' | 'nmi' | 'moneris' | 'metrics_global' | 'pin' | 'stripe' | 'quickbooks' | 'razorpay' | 'eway_rapid' | 'balanced_payments' | 'ecentric' | 'wepay' | 'chargebee_payments' | 'bank_of_america' | 'braintree' | 'first_data_global' | 'paypal_express_checkout' | 'ingenico_direct' | 'moneris_us' | 'exact' | 'migs' | 'checkout_com' | 'not_applicable' | 'paypal_pro' | 'ogone' | 'eway' | 'gocardless' | 'global_payments' | 'paymill' | 'adyen' | 'paypal' | 'chargebee' | 'authorize_net' | 'tco' | 'bluesnap' | 'windcave' | 'paypal_payflow_pro' | 'amazon_payments' | 'mollie' | 'cybersource' | 'wirecard' | 'sage_pay' | 'vantiv' | 'worldpay',is_not?:'bluepay' | 'beanstream' | 'elavon' | 'orbital' | 'hdfc' | 'nmi' | 'moneris' | 'metrics_global' | 'pin' | 'stripe' | 'quickbooks' | 'razorpay' | 'eway_rapid' | 'balanced_payments' | 'ecentric' | 'wepay' | 'chargebee_payments' | 'bank_of_america' | 'braintree' | 'first_data_global' | 'paypal_express_checkout' | 'ingenico_direct' | 'moneris_us' | 'exact' | 'migs' | 'checkout_com' | 'not_applicable' | 'paypal_pro' | 'ogone' | 'eway' | 'gocardless' | 'global_payments' | 'paymill' | 'adyen' | 'paypal' | 'chargebee' | 'authorize_net' | 'tco' | 'bluesnap' | 'windcave' | 'paypal_payflow_pro' | 'amazon_payments' | 'mollie' | 'cybersource' | 'wirecard' | 'sage_pay' | 'vantiv' | 'worldpay',not_in?:string};
       
      /**
        * @description The gateway account used for this transaction

        */
        
      gateway_account_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description The id with which this transaction is referred in gateway.

        */
        
      id_at_gateway?:{is?:string,is_not?:string,starts_with?:string};
       
      /**
        * @description The reference number for this transaction. For example, the check number when [payment_method](transactions#transaction_payment_method) &#x3D; &#x60;check&#x60;.

        */
        
      reference_number?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string};
       
      /**
        * @description Type of the transaction.

        */
        
      type?:{in?:string,is?:'authorization' | 'payment_reversal' | 'payment' | 'refund',is_not?:'authorization' | 'payment_reversal' | 'payment' | 'refund',not_in?:string};
       
      /**
        * @description Indicates when this transaction occurred.

        */
        
      date?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description Amount for this transaction.

        */
        
      amount?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
       
      /**
        * @description To filter based on transaction&#x27;s unused authorized/blocked amount.

        */
        
      amount_capturable?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
       
      /**
        * @description The status of this transaction.

        */
        
      status?:{in?:string,is?:'in_progress' | 'success' | 'failure' | 'voided' | 'timeout' | 'needs_attention',is_not?:'in_progress' | 'success' | 'failure' | 'voided' | 'timeout' | 'needs_attention',not_in?:string};
       
      /**
        * @description To filter based on &#x60;updated_at&#x60;. This attribute will be present only if the resource has been updated after 2016-09-28. It is advisable when using this filter, to pass the &#x60;sort_by&#x60; input parameter as &#x60;updated_at&#x60; for a faster response.

        */
        
      updated_at?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description Lists all the transactions.

        */
        
      sort_by?:{asc?:'date' | 'updated_at',desc?:'date' | 'updated_at'};
    }
    export interface VoidTransactionResponse {  
      /**
        * @description This API voids the specific authorization transaction in order to release the blocked funds from the customer&#x27;s card. Voiding an already captured or voided transaction is not possible.

        */
       
       transaction:Transaction;
    }
    
    export interface CreateAuthorizationResponse {  
      /**
        * @description Authorizes a specific amount in customer&#x27;s Credit card, which can be collected within a span of time. Read more on authorization and capture [here](https://www.chargebee.com/docs/stripe.html#auth-and-capture).

        */
       
       transaction:Transaction;
    }
    export interface CreateAuthorizationInputParam {
       
      /**
        * @description Identifier of the customer.

        */
       
      customer_id:string;
       
      /**
        * @description Payment source to be used for authorizing the transaction.

        */
       
      payment_source_id?:string;
       
      /**
        * @description The currency code (ISO 4217 format) of the transaction amount.

        */
       
      currency_code?:string;
       
      /**
        * @description The amount to be blocked.

        */
       
      amount:number;
    }
    export interface RetrieveResponse {  
      /**
        * @description Retrieve a transaction identified by its unique id.

        */
       
       transaction:Transaction;
    }
    
    export interface PaymentsForInvoiceResponse {  
      /**
        * @description Retrieves the payments for an invoice with the recent ones on top. This returns all the payment attempts(manual \&amp; automatic) made for this invoice.

        */
       
       list:{transaction:Transaction}[];
       
      /**
        * @description Retrieves the payments for an invoice with the recent ones on top. This returns all the payment attempts(manual \&amp; automatic) made for this invoice.

        */
       
       next_offset?:string;
    }
    export interface PaymentsForInvoiceInputParam {
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
    export interface DeleteOfflineTransactionResponse {  
      /**
        * @description This API deletes an offline transaction. However, to delete an offline transaction all payment allocations associated with the transaction must be removed.

        */
       
       transaction:Transaction;
    }
    export interface DeleteOfflineTransactionInputParam {
       
      /**
        * @description Reason for deleting this transaction. This comment will be added to the associated entity.

        */
       
      comment?:string;
    }
    export interface RefundResponse {  
      /**
        * @description Refunds an online payment. Applicable only for &#x60;transaction&#x60;s of [type](transactions#transaction_type) &#x3D; &#x60;payment&#x60;. You can only refund a &#x60;transaction&#x60; whose [status](transactions#transaction_status)&#x60; &#x60; is &#x60;success&#x60;.

        */
       
       transaction:Transaction;
    }
    export interface RefundInputParam {
       
      /**
        * @description The amount to be refunded. Must not exceed [amount_unused](transactions#transaction_amount_unused). If not passed then all of [amount_unused](transactions#transaction_amount_unused) is refunded.

        */
       
      amount?:number;
       
      /**
        * @description Remarks, if any, on the refund.

        */
       
      comment?:string;
    }
    export interface InvoiceTransaction {  
      invoice_id?:string;
       
      applied_amount?:number;
       
      applied_at?:number;
       
      invoice_date?:number;
       
      invoice_total?:number;
       
      invoice_status?:'pending' | 'paid' | 'voided' | 'not_paid' | 'posted' | 'payment_due';
    }
    export interface CreditNoteTransaction {  
      cn_id?:string;
       
      applied_amount?:number;
       
      applied_at?:number;
       
      cn_reason_code?:'other' | 'product_unsatisfactory' | 'subscription_pause' | 'order_cancellation' | 'service_unsatisfactory' | 'subscription_cancellation' | 'chargeback' | 'order_change' | 'write_off' | 'waiver' | 'subscription_change' | 'fraudulent';
       
      cn_create_reason_code?:string;
       
      cn_date?:number;
       
      cn_total?:number;
       
      cn_status?:'refund_due' | 'adjusted' | 'refunded' | 'voided';
       
      cn_reference_invoice_id?:string;
    }
    export interface TxnRefundsAndReversal {  
      txn_id?:string;
       
      txn_status?:'in_progress' | 'success' | 'failure' | 'voided' | 'timeout' | 'needs_attention';
       
      txn_date?:number;
       
      txn_amount?:number;
    }
    export interface LinkedPayment {  
      id?:string;
       
      status?:'in_progress' | 'success' | 'failure' | 'voided' | 'timeout' | 'needs_attention';
       
      amount?:number;
       
      date?:number;
    }
  }
}