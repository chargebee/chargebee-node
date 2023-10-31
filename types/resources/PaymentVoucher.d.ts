///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface PaymentVoucher {
    
    /**
      * @description Uniquely identifies the payment voucher.

      */
    
    id:string;
    
    /**
      * @description The id with which this voucher is referred in gateway.

      */
    
    id_at_gateway?:string;
    
    /**
      * @description Type of the payment source. \* boleto - Boleto

      */
    
    payment_voucher_type:PaymentVoucherType;
    
    /**
      * @description Timestamp indicating when the Voucher will expire if left unconsumed.

      */
    
    expires_at?:number;
    
    /**
      * @description Current status of the payment voucher. \* consumed - Consumed for a transaction and cannot be used again \* expired - Expired before consumed and cannot be used again \* active - Active and ready to be consumed \* failure - Failed to create the voucher due to gateway rejection

      */
    
    status?:'consumed' | 'expired' | 'failure' | 'active';
    
    /**
      * @description Identifier of the subscription for which this payment voucher is made.

      */
    
    subscription_id?:string;
    
    /**
      * @description The currency code (ISO 4217 format) for the voucher.

      */
    
    currency_code:string;
    
    /**
      * @description Amount for this payment voucher.

      */
    
    amount?:number;
    
    /**
      * @description The gateway account used for this voucher

      */
    
    gateway_account_id?:string;
    
    /**
      * @description Identifier of the payment source for which this payment voucher is created

      */
    
    payment_source_id?:string;
    
    /**
      * @description The gateway through which this payment voucher was created.  
**Note** : Note: Currently, &#x60;stripe&#x60; is the only supported gateway through which you can create the payment voucher. \* ecentric - Ecentric provides a seamless payment processing service in South Africa specializing on omnichannel capabilities. \* bluesnap - BlueSnap is a payment gateway. \* tco - 2Checkout is a payment gateway. \* first_data_global - First Data Global Gateway Virtual Terminal Account \* exact - Exact Payments is a payment gateway. \* bluepay - BluePay is a payment gateway. \* paypal_express_checkout - PayPal Express Checkout is a payment gateway. \* eway - eWAY Account is a payment gateway. \* metrics_global - Metrics global is a leading payment service provider providing unified payment services in the US. \* paypal_payflow_pro - PayPal Payflow Pro is a payment gateway. \* razorpay - Razorpay is a fast growing payment service provider in India working with all leading banks and support for major local payment methods including Netbanking, UPI etc. \* global_payments - Global Payments is a payment service provider. \* amazon_payments - Amazon Payments is a payment service provider. \* not_applicable - Indicates that payment gateway is not applicable for this resource. \* windcave - Windcave provides an end to end payment processing solution in ANZ and other leading global markets. \* checkout_com - Checkout.com is a payment gateway. \* adyen - Adyen is a payment gateway. \* braintree - Braintree is a payment gateway. \* nmi - NMI is a payment gateway. \* quickbooks - Intuit QuickBooks Payments gateway \* wepay - WePay is a payment gateway. \* worldpay - WorldPay is a payment gateway \* wirecard - WireCard Account is a payment service provider. \* chargebee_payments - Chargebee Payments gateway \* sage_pay - Sage Pay is a payment gateway. \* moneris_us - Moneris USA is a payment gateway. \* pin - Pin is a payment gateway \* authorize_net - Authorize.net is a payment gateway \* elavon - Elavon Virtual Merchant is a payment solution. \* paypal_pro - PayPal Pro Account is a payment gateway. \* orbital - Chase Paymentech(Orbital) is a payment gateway. \* paypal - PayPal Commerce is a payment gateway. \* beanstream - Bambora(formerly known as Beanstream) is a payment gateway. \* hdfc - HDFC Account is a payment gateway. \* ingenico_direct - Worldline Online Payments is a payment gateway. \* ogone - Ingenico ePayments (formerly known as Ogone) is a payment gateway. \* migs - MasterCard Internet Gateway Service payment gateway. \* stripe - Stripe is a payment gateway. \* vantiv - Vantiv is a payment gateway. \* moneris - Moneris is a payment gateway. \* bank_of_america - Bank of America Gateway \* chargebee - Chargebee test gateway. \* eway_rapid - eWAY Rapid is a payment gateway. \* gocardless - GoCardless is a payment service provider. \* mollie - Mollie is a payment gateway. \* paymill - PAYMILL is a payment gateway. \* balanced_payments - Balanced is a payment gateway \* cybersource - CyberSource is a payment gateway.

      */
    
    gateway:Gateway;
    
    /**
      * @description Payload from the gateway response with voucher details

      */
    
    payload?:string;
    
    /**
      * @description Error code received from the payment gateway on failure.

      */
    
    error_code?:string;
    
    /**
      * @description Error message received from the payment gateway on failure.

      */
    
    error_text?:string;
    
    /**
      * @description Chargebee Hosted Page url for payment voucher

      */
    
    url?:string;
    
    /**
      * @description Indicates when this payment voucher occurred date.

      */
    
    date?:number;
    
    /**
      * @description Version number of this resource. The &#x60;resource_version&#x60; is updated with a new timestamp in milliseconds for every change made to the resource. This attribute will be present only if the resource has been updated after 2016-09-28.

      */
    
    resource_version?:number;
    
    /**
      * @description Timestamp indicating when this voucher was last updated.

      */
    
    updated_at?:number;
    
    /**
      * @description The unique identifier of the customer.

      */
    
    customer_id:string;
    
    /**
      * @description Invoices related to the generated voucher

      */
    
    linked_invoices?:PaymentVoucher.InvoicePaymentVoucher[];
  }
  export namespace PaymentVoucher {
    export class PaymentVoucherResource {  
      /**
        * @description Creates a voucher type payment source. If you create this voucher type payment source using customer details, like tax ID, you can then generate a voucher with that payment source.

        */
      
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
       
      /**
        * @description Retrieves a voucher using the unique &#x60;payment_voucher_id&#x60;.

        */
      
      retrieve(payment_voucher_id:string):ChargebeeRequest<RetrieveResponse>;
       
      /**
        * @description Retrieves vouchers for an invoice in reverse chronological order.

        */
      
      payment_vouchers_for_invoice(invoice_id:string, input?:Payment_vouchersForInvoiceInputParam):ChargebeeRequest<Payment_vouchersForInvoiceResponse>;
       
      /**
        * @description Retrieves vouchers for a customer in reverse chronological order.

        */
      
      payment_vouchers_for_customer(customer_id:string, input?:Payment_vouchersForCustomerInputParam):ChargebeeRequest<Payment_vouchersForCustomerResponse>;
    }
    export interface CreateResponse {  
       payment_voucher:PaymentVoucher;
    }
    export interface CreateInputParam {
       
      /**
        * @description The unique identifier of the customer for whom you want to create the voucher.

        */
       
      customer_id:string;
       
      /**
        * @description The identifier of the payment source used for generating the voucher.

        */
       
      payment_source_id?:string;
       
      /**
        * @description Parameters for voucher_payment_source

        */
       
      voucher_payment_source?:{voucher_type:VoucherType};
       
      /**
        * @description Parameters for &#x60;invoice_allocations&#x60;

        */
       
      invoice_allocations?:{invoice_id:string}[];
    }
    export interface RetrieveResponse {  
       payment_voucher:PaymentVoucher;
    }
    
    export interface Payment_vouchersForInvoiceResponse {  
      /**
        * @description Retrieves vouchers for an invoice in reverse chronological order.

        */
       
       list:{payment_voucher:PaymentVoucher}[];
       
      /**
        * @description Retrieves vouchers for an invoice in reverse chronological order.

        */
       
       next_offset?:string;
    }
    export interface Payment_vouchersForInvoiceInputParam {
      [key : string]: any;  
      /**
        * @description Retrieves vouchers for an invoice in reverse chronological order.

        */
        
      limit?:number;
       
      /**
        * @description Retrieves vouchers for an invoice in reverse chronological order.

        */
        
      offset?:string;
       
      /**
        * @description Retrieves vouchers for an invoice in reverse chronological order.

        */
        
      status?:{in?:string,is?:'consumed' | 'expired' | 'failure' | 'active',is_not?:'consumed' | 'expired' | 'failure' | 'active',not_in?:string};
       
      /**
        * @description Retrieves vouchers for an invoice in reverse chronological order.

        */
        
      sort_by?:{asc?:'date' | 'updated_at',desc?:'date' | 'updated_at'};
    }
    export interface Payment_vouchersForCustomerResponse {  
      /**
        * @description Retrieves vouchers for a customer in reverse chronological order.

        */
       
       list:{payment_voucher:PaymentVoucher}[];
       
      /**
        * @description Retrieves vouchers for a customer in reverse chronological order.

        */
       
       next_offset?:string;
    }
    export interface Payment_vouchersForCustomerInputParam {
      [key : string]: any;  
      /**
        * @description Retrieves vouchers for a customer in reverse chronological order.

        */
        
      limit?:number;
       
      /**
        * @description Retrieves vouchers for a customer in reverse chronological order.

        */
        
      offset?:string;
       
      /**
        * @description Retrieves vouchers for a customer in reverse chronological order.

        */
        
      status?:{in?:string,is?:'consumed' | 'expired' | 'failure' | 'active',is_not?:'consumed' | 'expired' | 'failure' | 'active',not_in?:string};
       
      /**
        * @description Retrieves vouchers for a customer in reverse chronological order.

        */
        
      sort_by?:{asc?:'date' | 'updated_at',desc?:'date' | 'updated_at'};
    }
    export interface InvoicePaymentVoucher {  
         /**
          * @description Identifier for the invoice.

          */
       
      invoice_id:string;
       
         /**
          * @description Uniquely identifies the payment voucher.

          */
       
      txn_id:string;
       
         /**
          * @description Timestamp at which the transaction is applied.

          */
       
      applied_at:number;
    }
  }
}