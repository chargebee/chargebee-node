///<reference path='./../core.d.ts'/>
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
    type:'authorization' | 'payment_reversal' | 'payment' | 'refund';
    date?:number;
    settled_at?:number;
    exchange_rate?:number;
    currency_code:string;
    amount?:number;
    id_at_gateway?:string;
    status?:'in_progress' | 'success' | 'failure' | 'voided' | 'timeout' | 'needs_attention';
    fraud_flag?:'safe' | 'suspicious' | 'fraudulent';
    initiator_type?:'merchant' | 'customer';
    three_d_secure?:boolean;
    authorization_reason?:'blocking_funds' | 'verification';
    error_code?:string;
    error_text?:string;
    voided_at?:number;
    resource_version?:number;
    updated_at?:number;
    fraud_reason?:string;
    amount_unused?:number;
    masked_card_number?:string;
    reference_transaction_id?:string;
    refunded_txn_id?:string;
    reference_authorization_id?:string;
    amount_capturable?:number;
    reversal_transaction_id?:string;
    deleted:boolean;
    iin?:string;
    last4?:string;
    merchant_reference_id?:string;
    business_entity_id?:string;
    payment_method_details?:string;
    linked_invoices?:Transaction.InvoiceTransaction[];
    linked_credit_notes?:Transaction.CreditNoteTransaction[];
    linked_refunds?:Transaction.TxnRefundsAndReversal[];
    linked_payments?:Transaction.LinkedPayment[];
  }
  export namespace Transaction {
    export class TransactionResource {
      record_refund(transaction_id:string, input:RecordRefundInputParam):ChargebeeRequest<RecordRefundResponse>;
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
      void_transaction(transaction_id:string):ChargebeeRequest<VoidTransactionResponse>;
      create_authorization(input:CreateAuthorizationInputParam):ChargebeeRequest<CreateAuthorizationResponse>;
      retrieve(transaction_id:string):ChargebeeRequest<RetrieveResponse>;
      payments_for_invoice(invoice_id:string, input?:PaymentsForInvoiceInputParam):ChargebeeRequest<PaymentsForInvoiceResponse>;
      delete_offline_transaction(transaction_id:string, input?:DeleteOfflineTransactionInputParam):ChargebeeRequest<DeleteOfflineTransactionResponse>;
      refund(transaction_id:string, input?:RefundInputParam):ChargebeeRequest<RefundResponse>;
    }
    export interface RecordRefundResponse {
      transaction:Transaction;
    }
    export interface RecordRefundInputParam {
      
      amount?:number;
      payment_method:PaymentMethod;
      date:number;
      reference_number?:string;
      comment?:string;
    }
    export interface ListResponse {
      list:{transaction:Transaction}[];
      next_offset?:string;
    }
    export interface ListInputParam {
      [key: string]: string | number | object | boolean;
      limit?:number;
      offset?:string;
      include_deleted?:boolean;
      id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      customer_id?:{in?:string,is?:string,is_not?:string,is_present?:'true' | 'false',not_in?:string,starts_with?:string};
      subscription_id?:{in?:string,is?:string,is_not?:string,is_present?:'true' | 'false',not_in?:string,starts_with?:string};
      payment_source_id?:{in?:string,is?:string,is_not?:string,is_present?:'true' | 'false',not_in?:string,starts_with?:string};
      payment_method?:{in?:string,is?:'other' | 'netbanking_emandates' | 'ach_credit' | 'dotpay' | 'boleto' | 'direct_debit' | 'chargeback' | 'wechat_pay' | 'cash' | 'giropay' | 'bank_transfer' | 'alipay' | 'ideal' | 'google_pay' | 'custom' | 'unionpay' | 'check' | 'sofort' | 'amazon_payments' | 'upi' | 'apple_pay' | 'bancontact' | 'paypal_express_checkout' | 'sepa_credit' | 'card',is_not?:'other' | 'netbanking_emandates' | 'ach_credit' | 'dotpay' | 'boleto' | 'direct_debit' | 'chargeback' | 'wechat_pay' | 'cash' | 'giropay' | 'bank_transfer' | 'alipay' | 'ideal' | 'google_pay' | 'custom' | 'unionpay' | 'check' | 'sofort' | 'amazon_payments' | 'upi' | 'apple_pay' | 'bancontact' | 'paypal_express_checkout' | 'sepa_credit' | 'card',not_in?:string};
      gateway?:{in?:string,is?:'bluepay' | 'beanstream' | 'elavon' | 'orbital' | 'hdfc' | 'nmi' | 'moneris' | 'metrics_global' | 'pin' | 'stripe' | 'quickbooks' | 'razorpay' | 'eway_rapid' | 'balanced_payments' | 'ecentric' | 'wepay' | 'chargebee_payments' | 'bank_of_america' | 'braintree' | 'first_data_global' | 'paypal_express_checkout' | 'ingenico_direct' | 'moneris_us' | 'exact' | 'migs' | 'checkout_com' | 'not_applicable' | 'paypal_pro' | 'ogone' | 'eway' | 'gocardless' | 'global_payments' | 'paymill' | 'adyen' | 'paypal' | 'chargebee' | 'authorize_net' | 'tco' | 'bluesnap' | 'windcave' | 'paypal_payflow_pro' | 'amazon_payments' | 'mollie' | 'cybersource' | 'wirecard' | 'sage_pay' | 'vantiv' | 'worldpay',is_not?:'bluepay' | 'beanstream' | 'elavon' | 'orbital' | 'hdfc' | 'nmi' | 'moneris' | 'metrics_global' | 'pin' | 'stripe' | 'quickbooks' | 'razorpay' | 'eway_rapid' | 'balanced_payments' | 'ecentric' | 'wepay' | 'chargebee_payments' | 'bank_of_america' | 'braintree' | 'first_data_global' | 'paypal_express_checkout' | 'ingenico_direct' | 'moneris_us' | 'exact' | 'migs' | 'checkout_com' | 'not_applicable' | 'paypal_pro' | 'ogone' | 'eway' | 'gocardless' | 'global_payments' | 'paymill' | 'adyen' | 'paypal' | 'chargebee' | 'authorize_net' | 'tco' | 'bluesnap' | 'windcave' | 'paypal_payflow_pro' | 'amazon_payments' | 'mollie' | 'cybersource' | 'wirecard' | 'sage_pay' | 'vantiv' | 'worldpay',not_in?:string};
      gateway_account_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      id_at_gateway?:{is?:string,is_not?:string,starts_with?:string};
      reference_number?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string};
      type?:{in?:string,is?:'authorization' | 'payment_reversal' | 'payment' | 'refund',is_not?:'authorization' | 'payment_reversal' | 'payment' | 'refund',not_in?:string};
      date?:{after?:string,before?:string,between?:string,on?:string};
      amount?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
      amount_capturable?:{between?:string,gt?:string,gte?:string,is?:string,is_not?:string,lt?:string,lte?:string};
      status?:{in?:string,is?:'in_progress' | 'success' | 'failure' | 'voided' | 'timeout' | 'needs_attention',is_not?:'in_progress' | 'success' | 'failure' | 'voided' | 'timeout' | 'needs_attention',not_in?:string};
      updated_at?:{after?:string,before?:string,between?:string,on?:string};
      sort_by?:{asc?:'date' | 'updated_at',desc?:'date' | 'updated_at'};
    }
    export interface VoidTransactionResponse {
      transaction:Transaction;
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
    export interface RetrieveResponse {
      transaction:Transaction;
    }
    
    export interface PaymentsForInvoiceResponse {
      list:{transaction:Transaction}[];
      next_offset?:string;
    }
    export interface PaymentsForInvoiceInputParam {
      [key: string]: string | number | object | boolean;
      limit?:number;
      offset?:string;
    }
    export interface DeleteOfflineTransactionResponse {
      transaction:Transaction;
    }
    export interface DeleteOfflineTransactionInputParam {
      
      comment?:string;
    }
    export interface RefundResponse {
      transaction:Transaction;
    }
    export interface RefundInputParam {
      
      amount?:number;
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