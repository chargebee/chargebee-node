///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface Transaction {
    

    id:string;

    customer_id?:string;

    subscription_id?:string;

    gateway_account_id?:string;

    payment_source_id?:string;

    payment_method:PaymentMethod;

    reference_number?:string;

    gateway:Gateway;

    type:'authorization' | 'payment' | 'refund' | 'payment_reversal';

    date?:number;

    settled_at?:number;

    exchange_rate?:number;

    currency_code:string;

    amount?:number;

    id_at_gateway?:string;

    status?:'in_progress' | 'success' | 'voided' | 'failure' | 'timeout' | 'needs_attention' | 'late_failure';

    fraud_flag?:'safe' | 'suspicious' | 'fraudulent';

    initiator_type?:'customer' | 'merchant';

    three_d_secure?:boolean;

    authorization_reason?:'blocking_funds' | 'verification';

    error_code?:string;

    error_text?:string;

    voided_at?:number;

    resource_version?:number;

    updated_at?:number;

    fraud_reason?:string;

    custom_payment_method_id?:string;

    amount_unused?:number;

    masked_card_number?:string;

    reference_transaction_id?:string;

    refunded_txn_id?:string;

    reference_authorization_id?:string;

    amount_capturable?:number;

    reversal_transaction_id?:string;

    linked_invoices?:Transaction.LinkedInvoice[];

    linked_credit_notes?:Transaction.LinkedCreditNote[];

    linked_refunds?:Transaction.LinkedRefund[];

    linked_payments?:Transaction.LinkedPayment[];

    deleted:boolean;

    iin?:string;

    last4?:string;

    merchant_reference_id?:string;

    business_entity_id?:string;

    payment_method_details?:string;

    error_detail?:Transaction.GatewayErrorDetail;

    custom_payment_method_name?:string;

  }
  export namespace Transaction {
    export class TransactionResource {  
      create_authorization(input:CreateAuthorizationInputParam):ChargebeeRequest<CreateAuthorizationResponse>;
       
      void_transaction(transaction_id:string):ChargebeeRequest<VoidTransactionResponse>;
       
      record_refund(transaction_id:string, input:RecordRefundInputParam):ChargebeeRequest<RecordRefundResponse>;
       
      reconcile(transaction_id:string, input?:ReconcileInputParam):ChargebeeRequest<ReconcileResponse>;
       
      refund(transaction_id:string, input?:RefundInputParam):ChargebeeRequest<RefundResponse>;
       
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
       
      transactions_for_customer(customer_id:string, input?:TransactionsForCustomerInputParam):ChargebeeRequest<TransactionsForCustomerResponse>;
       
      transactions_for_subscription(subscription_id:string, input?:TransactionsForSubscriptionInputParam):ChargebeeRequest<TransactionsForSubscriptionResponse>;
       
      payments_for_invoice(invoice_id:string, input?:PaymentsForInvoiceInputParam):ChargebeeRequest<PaymentsForInvoiceResponse>;
       
      retrieve(transaction_id:string):ChargebeeRequest<RetrieveResponse>;
       
      delete_offline_transaction(transaction_id:string, input?:DeleteOfflineTransactionInputParam):ChargebeeRequest<DeleteOfflineTransactionResponse>;
    }
    export interface CreateAuthorizationResponse {  
       transaction:Transaction;
    }
    export interface CreateAuthorizationInputParam {
       
      customer_id:string;
       
      payment_source_id?:string;
       
      currency_code?:string;
       
      amount:number;
    }
    export interface VoidTransactionResponse {  
       transaction:Transaction;
    }
    
    export interface RecordRefundResponse {  
       transaction:Transaction;
    }
    export interface RecordRefundInputParam {
       
      amount?:number;
       
      payment_method:PaymentMethod;
       
      date:number;
       
      reference_number?:string;
       
      custom_payment_method_id?:string;
       
      comment?:string;
    }
    export interface ReconcileResponse {  
       transaction:Transaction;
    }
    export interface ReconcileInputParam {
       
      id_at_gateway?:string;
       
      customer_id?:string;
       
      status?:'success' | 'failure';
    }
    export interface RefundResponse {  
       transaction:Transaction;
    }
    export interface RefundInputParam {
       
      amount?:number;
       
      comment?:string;
    }
    export interface ListResponse {  
       list:{transaction:Transaction}[];
       
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
        
      payment_method?:{in?:string,is?:'card' | 'cash' | 'check' | 'chargeback' | 'bank_transfer' | 'amazon_payments' | 'paypal_express_checkout' | 'direct_debit' | 'alipay' | 'unionpay' | 'apple_pay' | 'wechat_pay' | 'ach_credit' | 'sepa_credit' | 'ideal' | 'google_pay' | 'sofort' | 'bancontact' | 'giropay' | 'dotpay' | 'other' | 'upi' | 'netbanking_emandates' | 'custom' | 'boleto' | 'venmo' | 'pay_to' | 'faster_payments' | 'sepa_instant_transfer' | 'automated_bank_transfer' | 'klarna_pay_now' | 'online_banking_poland' | 'payconiq_by_bancontact',is_not?:'card' | 'cash' | 'check' | 'chargeback' | 'bank_transfer' | 'amazon_payments' | 'paypal_express_checkout' | 'direct_debit' | 'alipay' | 'unionpay' | 'apple_pay' | 'wechat_pay' | 'ach_credit' | 'sepa_credit' | 'ideal' | 'google_pay' | 'sofort' | 'bancontact' | 'giropay' | 'dotpay' | 'other' | 'upi' | 'netbanking_emandates' | 'custom' | 'boleto' | 'venmo' | 'pay_to' | 'faster_payments' | 'sepa_instant_transfer' | 'automated_bank_transfer' | 'klarna_pay_now' | 'online_banking_poland' | 'payconiq_by_bancontact',not_in?:string};
       
      /**
        * @description Gateway through which this transaction was done. Applicable only for &#x27;Card&#x27; Payment Method

        */
        
      gateway?:{in?:string,is?:'chargebee' | 'chargebee_payments' | 'adyen' | 'stripe' | 'wepay' | 'braintree' | 'authorize_net' | 'paypal_pro' | 'pin' | 'eway' | 'eway_rapid' | 'worldpay' | 'balanced_payments' | 'beanstream' | 'bluepay' | 'elavon' | 'first_data_global' | 'hdfc' | 'migs' | 'nmi' | 'ogone' | 'paymill' | 'paypal_payflow_pro' | 'sage_pay' | 'tco' | 'wirecard' | 'amazon_payments' | 'paypal_express_checkout' | 'gocardless' | 'orbital' | 'moneris_us' | 'moneris' | 'bluesnap' | 'cybersource' | 'vantiv' | 'checkout_com' | 'paypal' | 'ingenico_direct' | 'exact' | 'mollie' | 'quickbooks' | 'razorpay' | 'global_payments' | 'bank_of_america' | 'ecentric' | 'metrics_global' | 'windcave' | 'pay_com' | 'ebanx' | 'dlocal' | 'nuvei' | 'solidgate' | 'paystack' | 'jp_morgan' | 'not_applicable',is_not?:'chargebee' | 'chargebee_payments' | 'adyen' | 'stripe' | 'wepay' | 'braintree' | 'authorize_net' | 'paypal_pro' | 'pin' | 'eway' | 'eway_rapid' | 'worldpay' | 'balanced_payments' | 'beanstream' | 'bluepay' | 'elavon' | 'first_data_global' | 'hdfc' | 'migs' | 'nmi' | 'ogone' | 'paymill' | 'paypal_payflow_pro' | 'sage_pay' | 'tco' | 'wirecard' | 'amazon_payments' | 'paypal_express_checkout' | 'gocardless' | 'orbital' | 'moneris_us' | 'moneris' | 'bluesnap' | 'cybersource' | 'vantiv' | 'checkout_com' | 'paypal' | 'ingenico_direct' | 'exact' | 'mollie' | 'quickbooks' | 'razorpay' | 'global_payments' | 'bank_of_america' | 'ecentric' | 'metrics_global' | 'windcave' | 'pay_com' | 'ebanx' | 'dlocal' | 'nuvei' | 'solidgate' | 'paystack' | 'jp_morgan' | 'not_applicable',not_in?:string};
       
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
        
      type?:{in?:string,is?:'authorization' | 'payment' | 'refund' | 'payment_reversal',is_not?:'authorization' | 'payment' | 'refund' | 'payment_reversal',not_in?:string};
       
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
        
      status?:{in?:string,is?:'in_progress' | 'success' | 'voided' | 'failure' | 'timeout' | 'needs_attention' | 'late_failure',is_not?:'in_progress' | 'success' | 'voided' | 'failure' | 'timeout' | 'needs_attention' | 'late_failure',not_in?:string};
       
      /**
        * @description To filter based on &#x60;updated_at&#x60;. This attribute will be present only if the resource has been updated after 2016-09-28. It is advisable when using this filter, to pass the &#x60;sort_by&#x60; input parameter as &#x60;updated_at&#x60; for a faster response.

        */
        
      updated_at?:{after?:string,before?:string,between?:string,on?:string};
       
      sort_by?:{asc?:'date' | 'updated_at',desc?:'date' | 'updated_at'};
    }
    export interface TransactionsForCustomerResponse {  
       list:{transaction:Transaction}[];
       
       next_offset?:string;
    }
    export interface TransactionsForCustomerInputParam {
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
    export interface TransactionsForSubscriptionResponse {  
       list:{transaction:Transaction}[];
       
       next_offset?:string;
    }
    export interface TransactionsForSubscriptionInputParam {
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
    export interface PaymentsForInvoiceResponse {  
       list:{transaction:Transaction}[];
       
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
    export interface RetrieveResponse {  
       transaction:Transaction;
    }
    
    export interface DeleteOfflineTransactionResponse {  
       transaction:Transaction;
    }
    export interface DeleteOfflineTransactionInputParam {
       
      comment?:string;
    }
    export interface LinkedInvoice {  
      invoice_id:string;
       
      applied_amount:number;
       
      applied_at:number;
       
      invoice_date?:number;
       
      invoice_total?:number;
       
      invoice_status:'paid' | 'posted' | 'payment_due' | 'not_paid' | 'voided' | 'pending';
    }
    export interface LinkedCreditNote {  
      cn_id:string;
       
      applied_amount:number;
       
      applied_at:number;
       
      cn_reason_code?:'write_off' | 'subscription_change' | 'subscription_cancellation' | 'subscription_pause' | 'chargeback' | 'product_unsatisfactory' | 'service_unsatisfactory' | 'order_change' | 'order_cancellation' | 'waiver' | 'other' | 'fraudulent';
       
      cn_create_reason_code?:string;
       
      cn_date?:number;
       
      cn_total?:number;
       
      cn_status:'adjusted' | 'refunded' | 'refund_due' | 'voided';
       
      cn_reference_invoice_id?:string;
    }
    export interface LinkedRefund {  
      txn_id:string;
       
      txn_status:'in_progress' | 'success' | 'voided' | 'failure' | 'timeout' | 'needs_attention' | 'late_failure';
       
      txn_date:number;
       
      txn_amount:number;
    }
    export interface LinkedPayment {  
      id:string;
       
      status?:'in_progress' | 'success' | 'voided' | 'failure' | 'timeout' | 'needs_attention' | 'late_failure';
       
      amount?:number;
       
      date?:number;
    }
    export interface GatewayErrorDetail {  
      request_id?:string;
       
      error_category?:string;
       
      error_code?:string;
       
      error_message?:string;
       
      decline_code?:string;
       
      decline_message?:string;
       
      network_error_code?:string;
       
      network_error_message?:string;
       
      error_field?:string;
       
      recommendation_code?:string;
       
      recommendation_message?:string;
       
      processor_error_code?:string;
       
      processor_error_message?:string;
       
      error_cause_id?:string;
    }
  }
}