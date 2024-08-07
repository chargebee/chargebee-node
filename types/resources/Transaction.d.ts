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

    payment_method: PaymentMethod;

    reference_number?: string;

    gateway: Gateway;

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
      | 'needs_attention';

    fraud_flag?: 'safe' | 'suspicious' | 'fraudulent';

    initiator_type?: 'customer' | 'merchant';

    three_d_secure?: boolean;

    authorization_reason?: 'blocking_funds' | 'verification';

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
      create_authorization(
        input: CreateAuthorizationInputParam,
      ): ChargebeeRequest<ChargebeeResponse<CreateAuthorizationResponse>>;

      void_transaction(
        transaction_id: string,
      ): ChargebeeRequest<ChargebeeResponse<VoidTransactionResponse>>;

      record_refund(
        transaction_id: string,
        input: RecordRefundInputParam,
      ): ChargebeeRequest<ChargebeeResponse<RecordRefundResponse>>;

      update(
        transaction_id: string,
        input?: UpdateInputParam,
      ): ChargebeeRequest<ChargebeeResponse<UpdateResponse>>;

      refund(
        transaction_id: string,
        input?: RefundInputParam,
      ): ChargebeeRequest<ChargebeeResponse<RefundResponse>>;

      list(
        input?: ListInputParam,
      ): ChargebeeRequest<ChargebeeResponse<ListResponse>>;

      transactions_for_customer(
        customer_id: string,
        input?: TransactionsForCustomerInputParam,
      ): ChargebeeRequest<ChargebeeResponse<TransactionsForCustomerResponse>>;

      transactions_for_subscription(
        subscription_id: string,
        input?: TransactionsForSubscriptionInputParam,
      ): ChargebeeRequest<
        ChargebeeResponse<TransactionsForSubscriptionResponse>
      >;

      payments_for_invoice(
        invoice_id: string,
        input?: PaymentsForInvoiceInputParam,
      ): ChargebeeRequest<ChargebeeResponse<PaymentsForInvoiceResponse>>;

      retrieve(
        transaction_id: string,
      ): ChargebeeRequest<ChargebeeResponse<RetrieveResponse>>;

      delete_offline_transaction(
        transaction_id: string,
        input?: DeleteOfflineTransactionInputParam,
      ): ChargebeeRequest<ChargebeeResponse<DeleteOfflineTransactionResponse>>;
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

    export interface UpdateResponse {
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

      cn_reference_invoice_id: string;
    }
    export interface LinkedRefund {
      txn_id: string;

      txn_status:
        | 'in_progress'
        | 'success'
        | 'voided'
        | 'failure'
        | 'timeout'
        | 'needs_attention';

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
        | 'needs_attention';

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
      payment_method: PaymentMethod;
      date: number;
      reference_number?: string;
      custom_payment_method_id?: string;
      comment?: string;
    }
    export interface UpdateInputParam {
      id_at_gateway?: string;
      customer_id?: string;
      status?: Status;
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
