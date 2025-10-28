///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface Transaction {
    id: string;
    customer_id?: string;
    subscription_id?: string;
    gateway_account_id?: string;
    payment_source_id?: string;
    payment_method: PaymentMethodEnum;
    reference_number?: string;
    gateway: GatewayEnum;
    type: 'authorization' | 'payment' | 'refund' | 'payment_reversal';
    date?: number;
    settled_at?: number;
    exchange_rate?: number;
    currency_code: string;
    amount?: number;
    id_at_gateway?: string;
    status?:
      | 'in_progress'
      | 'success'
      | 'voided'
      | 'failure'
      | 'timeout'
      | 'needs_attention'
      | 'late_failure';
    fraud_flag?: 'safe' | 'suspicious' | 'fraudulent';
    initiator_type?: 'customer' | 'merchant';
    three_d_secure?: boolean;
    authorization_reason?:
      | 'blocking_funds'
      | 'verification'
      | 'scheduled_capture';
    error_code?: string;
    error_text?: string;
    voided_at?: number;
    resource_version?: number;
    updated_at?: number;
    fraud_reason?: string;
    custom_payment_method_id?: string;
    amount_unused?: number;
    masked_card_number?: string;
    reference_transaction_id?: string;
    refunded_txn_id?: string;
    reference_authorization_id?: string;
    amount_capturable?: number;
    reversal_transaction_id?: string;
    linked_invoices?: Transaction.LinkedInvoice[];
    linked_credit_notes?: Transaction.LinkedCreditNote[];
    linked_refunds?: Transaction.LinkedRefund[];
    linked_payments?: Transaction.LinkedPayment[];
    deleted: boolean;
    iin?: string;
    last4?: string;
    merchant_reference_id?: string;
    business_entity_id?: string;
    payment_method_details?: string;
    error_detail?: Transaction.GatewayErrorDetail;
    custom_payment_method_name?: string;
  }

  export namespace Transaction {
    export class TransactionResource {
      createAuthorization(
        input: CreateAuthorizationInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateAuthorizationResponse>>;

      voidTransaction(
        transaction_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<VoidTransactionResponse>>;

      recordRefund(
        transaction_id: string,
        input: RecordRefundInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RecordRefundResponse>>;

      reconcile(
        transaction_id: string,
        input?: ReconcileInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ReconcileResponse>>;

      refund(
        transaction_id: string,
        input?: RefundInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RefundResponse>>;

      list(
        input?: ListInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ListResponse>>;

      transactionsForCustomer(
        customer_id: string,
        input?: TransactionsForCustomerInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<TransactionsForCustomerResponse>>;

      transactionsForSubscription(
        subscription_id: string,
        input?: TransactionsForSubscriptionInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<TransactionsForSubscriptionResponse>>;

      paymentsForInvoice(
        invoice_id: string,
        input?: PaymentsForInvoiceInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<PaymentsForInvoiceResponse>>;

      retrieve(
        transaction_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RetrieveResponse>>;

      deleteOfflineTransaction(
        transaction_id: string,
        input?: DeleteOfflineTransactionInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<DeleteOfflineTransactionResponse>>;
    }

    export interface CreateAuthorizationResponse {
      transaction: Transaction;
    }

    export interface VoidTransactionResponse {
      transaction: Transaction;
    }

    export interface RecordRefundResponse {
      transaction: Transaction;
    }

    export interface ReconcileResponse {
      transaction: Transaction;
    }

    export interface RefundResponse {
      transaction: Transaction;
    }

    export interface ListResponse {
      list: { transaction: Transaction }[];
      next_offset?: string;
    }

    export interface TransactionsForCustomerResponse {
      list: { transaction: Transaction }[];
      next_offset?: string;
    }

    export interface TransactionsForSubscriptionResponse {
      list: { transaction: Transaction }[];
      next_offset?: string;
    }

    export interface PaymentsForInvoiceResponse {
      list: { transaction: Transaction }[];
      next_offset?: string;
    }

    export interface RetrieveResponse {
      transaction: Transaction;
    }

    export interface DeleteOfflineTransactionResponse {
      transaction: Transaction;
    }

    export interface LinkedInvoice {
      invoice_id: string;
      applied_amount: number;
      applied_at: number;
      invoice_date?: number;
      invoice_total?: number;
      invoice_status:
        | 'paid'
        | 'posted'
        | 'payment_due'
        | 'not_paid'
        | 'voided'
        | 'pending';
    }
    export interface LinkedCreditNote {
      cn_id: string;
      applied_amount: number;
      applied_at: number;
      cn_reason_code?:
        | 'write_off'
        | 'subscription_change'
        | 'subscription_cancellation'
        | 'subscription_pause'
        | 'chargeback'
        | 'product_unsatisfactory'
        | 'service_unsatisfactory'
        | 'order_change'
        | 'order_cancellation'
        | 'waiver'
        | 'other'
        | 'fraudulent';
      cn_create_reason_code?: string;
      cn_date?: number;
      cn_total?: number;
      cn_status: 'adjusted' | 'refunded' | 'refund_due' | 'voided';
      cn_reference_invoice_id?: string;
    }
    export interface LinkedRefund {
      txn_id: string;
      txn_status:
        | 'in_progress'
        | 'success'
        | 'voided'
        | 'failure'
        | 'timeout'
        | 'needs_attention'
        | 'late_failure';
      txn_date: number;
      txn_amount: number;
    }
    export interface LinkedPayment {
      id: string;
      status?:
        | 'in_progress'
        | 'success'
        | 'voided'
        | 'failure'
        | 'timeout'
        | 'needs_attention'
        | 'late_failure';
      amount?: number;
      date?: number;
    }
    export interface GatewayErrorDetail {
      request_id?: string;
      error_category?: string;
      error_code?: string;
      error_message?: string;
      decline_code?: string;
      decline_message?: string;
      network_error_code?: string;
      network_error_message?: string;
      error_field?: string;
      recommendation_code?: string;
      recommendation_message?: string;
      processor_error_code?: string;
      processor_error_message?: string;
      error_cause_id?: string;
      processor_advice_code?: string;
    }
    // REQUEST PARAMS
    //---------------

    export interface CreateAuthorizationInputParam {
      customer_id: string;
      payment_source_id?: string;
      currency_code?: string;
      amount: number;
    }
    export interface RecordRefundInputParam {
      amount?: number;
      payment_method: PaymentMethodEnum;
      date: number;
      reference_number?: string;
      custom_payment_method_id?: string;
      comment?: string;
    }
    export interface ReconcileInputParam {
      id_at_gateway?: string;
      customer_id?: string;
      status?: 'success' | 'failure';
    }
    export interface RefundInputParam {
      amount?: number;
      comment?: string;
    }
    export interface ListInputParam {
      limit?: number;
      offset?: string;
      include_deleted?: boolean;
      id?: filter.String;
      customer_id?: filter.String;
      subscription_id?: filter.String;
      payment_source_id?: filter.String;
      payment_method?: filter.Enum;
      gateway?: filter.Enum;
      gateway_account_id?: filter.String;
      id_at_gateway?: filter.String;
      reference_number?: filter.String;
      type?: filter.Enum;
      date?: filter.Timestamp;
      amount?: filter.Number;
      amount_capturable?: filter.Number;
      status?: filter.Enum;
      updated_at?: filter.Timestamp;
      'sort_by[asc]'?: string;
      'sort_by[desc]'?: string;
    }
    export interface TransactionsForCustomerInputParam {
      limit?: number;
      offset?: string;
    }
    export interface TransactionsForSubscriptionInputParam {
      limit?: number;
      offset?: string;
    }
    export interface PaymentsForInvoiceInputParam {
      limit?: number;
      offset?: string;
    }
    export interface DeleteOfflineTransactionInputParam {
      comment?: string;
    }
  }
}
