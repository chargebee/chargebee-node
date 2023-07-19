declare module 'chargebee' {
  export interface PaymentVoucher {
    
    id:string;
    id_at_gateway?:string;
    payment_voucher_type:PaymentVoucherType;
    expires_at?:number;
    status?:'consumed' | 'expired' | 'failure' | 'active';
    subscription_id?:string;
    currency_code:string;
    amount?:number;
    gateway_account_id?:string;
    payment_source_id?:string;
    gateway:Gateway;
    payload?:string;
    error_code?:string;
    error_text?:string;
    url?:string;
    date?:number;
    resource_version?:number;
    updated_at?:number;
    customer_id:string;
    linked_invoices?:PaymentVoucher.InvoicePaymentVoucher[];
  }
  export namespace PaymentVoucher {
    export class PaymentVoucherResource {
      payment_vouchers_for_customer(customer_id:string, input?:Payment_vouchersForCustomerInputParam):ChargebeeRequest<Payment_vouchersForCustomerResponse>;
      payment_vouchers_for_invoice(invoice_id:string, input?:Payment_vouchersForInvoiceInputParam):ChargebeeRequest<Payment_vouchersForInvoiceResponse>;
      retrieve(payment_voucher_id:string):ChargebeeRequest<RetrieveResponse>;
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
    }
    export interface Payment_vouchersForCustomerResponse {
      list:{payment_voucher:PaymentVoucher}[];
      next_offset?:string;
    }
    export interface Payment_vouchersForCustomerInputParam {
      [key: string]: string | number | object | boolean;
      limit?:number;
      offset?:string;
      status?:{in?:string,is?:'consumed' | 'expired' | 'failure' | 'active',is_not?:'consumed' | 'expired' | 'failure' | 'active',not_in?:string};
      sort_by?:{asc?:'date' | 'updated_at',desc?:'date' | 'updated_at'};
    }
    export interface Payment_vouchersForInvoiceResponse {
      list:{payment_voucher:PaymentVoucher}[];
      next_offset?:string;
    }
    export interface Payment_vouchersForInvoiceInputParam {
      [key: string]: string | number | object | boolean;
      limit?:number;
      offset?:string;
      status?:{in?:string,is?:'consumed' | 'expired' | 'failure' | 'active',is_not?:'consumed' | 'expired' | 'failure' | 'active',not_in?:string};
      sort_by?:{asc?:'date' | 'updated_at',desc?:'date' | 'updated_at'};
    }
    export interface RetrieveResponse {
      payment_voucher:PaymentVoucher;
    }
    
    export interface CreateResponse {
      payment_voucher:PaymentVoucher;
    }
    export interface CreateInputParam {
      
      customer_id:string;
      payment_source_id?:string;
      voucher_payment_source?:{voucher_type:VoucherType};
      invoice_allocations?:{invoice_id:string}[];
    }
    export interface InvoicePaymentVoucher {
      invoice_id?:string;
      txn_id?:string;
      applied_at?:number;
    }
  }
}