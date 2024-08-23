///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface PaymentVoucher {
    id: string;

    id_at_gateway?: string;

    payment_voucher_type: PaymentVoucherType;

    expires_at?: number;

    status?: 'active' | 'consumed' | 'expired' | 'failure';

    subscription_id?: string;

    currency_code: string;

    amount?: number;

    gateway_account_id?: string;

    payment_source_id?: string;

    gateway: Gateway;

    payload?: string;

    error_code?: string;

    error_text?: string;

    url?: string;

    date?: number;

    resource_version?: number;

    updated_at?: number;

    customer_id: string;

    linked_invoices?: PaymentVoucher.LinkedInvoice[];
  }
  export namespace PaymentVoucher {
    export class PaymentVoucherResource {
      create(
        input: CreateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateResponse>>;

      retrieve(
        payment_voucher_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RetrieveResponse>>;

      payment_vouchersForInvoice(
        invoice_id: string,
        input?: PaymentVouchersForInvoiceInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<Payment_vouchersForInvoiceResponse>>;

      payment_vouchersForCustomer(
        customer_id: string,
        input?: PaymentVouchersForCustomerInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<Payment_vouchersForCustomerResponse>>;
    }
    export interface CreateResponse {
      payment_voucher: PaymentVoucher;
    }

    export interface RetrieveResponse {
      payment_voucher: PaymentVoucher;
    }

    export interface Payment_vouchersForInvoiceResponse {
      list: { payment_voucher: PaymentVoucher }[];

      next_offset?: string;
    }

    export interface Payment_vouchersForCustomerResponse {
      list: { payment_voucher: PaymentVoucher }[];

      next_offset?: string;
    }

    export interface LinkedInvoice {
      invoice_id: string;

      txn_id: string;

      applied_at: number;
    }
    // REQUEST PARAMS
    //---------------

    export interface CreateInputParam {
      customer_id: string;
      payment_source_id?: string;
      voucher_payment_source?: VoucherPaymentSourceCreateInputParam;
      invoice_allocations?: InvoiceAllocationsCreateInputParam[];
    }
    export interface PaymentVouchersForInvoiceInputParam {
      limit?: number;
      offset?: string;
      status?: filter.Enum;
      'sort_by[asc]'?: string;
      'sort_by[desc]'?: string;
    }
    export interface PaymentVouchersForCustomerInputParam {
      limit?: number;
      offset?: string;
      status?: filter.Enum;
      'sort_by[asc]'?: string;
      'sort_by[desc]'?: string;
    }
    export interface VoucherPaymentSourceCreateInputParam {
      voucher_type: VoucherType;
    }

    export interface InvoiceAllocationsCreateInputParam {
      invoice_id: string;
    }
  }
}
