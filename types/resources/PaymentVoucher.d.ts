///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
declare module 'chargebee' {
  export interface PaymentVoucher {
    

    id:string;

    id_at_gateway?:string;

    payment_voucher_type:PaymentVoucherType;

    expires_at?:number;

    status?:'active' | 'consumed' | 'expired' | 'failure';

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

    linked_invoices?:PaymentVoucher.LinkedInvoice[];

  }
  export namespace PaymentVoucher {
    export class PaymentVoucherResource {  
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
       
      retrieve(payment_voucher_id:string):ChargebeeRequest<RetrieveResponse>;
       
      payment_vouchers_for_invoice(invoice_id:string, input?:Payment_vouchersForInvoiceInputParam):ChargebeeRequest<PaymentVouchersForInvoiceResponse>;
       
      payment_vouchers_for_customer(customer_id:string, input?:Payment_vouchersForCustomerInputParam):ChargebeeRequest<PaymentVouchersForCustomerResponse>;
    }
    export interface CreateResponse {  
       payment_voucher:PaymentVoucher;
    }
    export interface CreateInputParam {
       
      voucher_payment_source:{voucher_type:VoucherType};
       
      invoice_allocations:{invoice_id:string}[];
       
      customer_id:string;
       
      payment_source_id?:string;
    }
    export interface RetrieveResponse {  
       payment_voucher:PaymentVoucher;
    }
    
    export interface PaymentVouchersForInvoiceResponse {  
       list:{payment_voucher:PaymentVoucher}[];
       
       next_offset?:string;
    }
    export interface Payment_vouchersForInvoiceInputParam {
      [key : string]: any;  
      /**
        * @description The number of resources to be returned.

        */
        
      limit?:number;
       
      /**
        * @description Determines your position in the list for pagination. To ensure that the next page is retrieved correctly, always set &#x27;offset&#x27; to the value of &#x27;next_offset&#x27; obtained in the previous iteration of the API call.

        */
        
      offset?:string;
       
      /**
        * @description Current status of Payment Voucher.

        */
        
      status?:{in?:string,is?:'active' | 'consumed' | 'expired' | 'failure',is_not?:'active' | 'consumed' | 'expired' | 'failure',not_in?:string};
       
      sort_by?:object;
    }
    export interface PaymentVouchersForCustomerResponse {  
       list:{payment_voucher:PaymentVoucher}[];
       
       next_offset?:string;
    }
    export interface Payment_vouchersForCustomerInputParam {
      [key : string]: any;  
      /**
        * @description The number of resources to be returned.

        */
        
      limit?:number;
       
      /**
        * @description Determines your position in the list for pagination. To ensure that the next page is retrieved correctly, always set &#x27;offset&#x27; to the value of &#x27;next_offset&#x27; obtained in the previous iteration of the API call.

        */
        
      offset?:string;
       
      /**
        * @description Current status of Payment Voucher.

        */
        
      status?:{in?:string,is?:'active' | 'consumed' | 'expired' | 'failure',is_not?:'active' | 'consumed' | 'expired' | 'failure',not_in?:string};
       
      sort_by?:object;
    }
    export interface LinkedInvoice {  
      invoice_id:string;
       
      txn_id:string;
       
      applied_at:number;
    }
  }
}