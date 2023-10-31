///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface VirtualBankAccount {
    
    /**
      * @description Identifier of the virtual bank account

      */
    
    id:string;
    
    /**
      * @description Identifier of the customer.

      */
    
    customer_id:string;
    
    /**
      * @description Email address associated with the virtual bank account

      */
    
    email:string;
    
    /**
      * @description type of the credit transfer \* ach_credit - ACH Credit Transfer \* sepa_credit - SEPA Credit Transfer

      */
    
    scheme?:'ach_credit' | 'sepa_credit';
    
    /**
      * @description Name of the bank

      */
    
    bank_name?:string;
    
    /**
      * @description The account number to which funds will be transferred.

      */
    
    account_number:string;
    
    /**
      * @description The routing number of the bank

      */
    
    routing_number?:string;
    
    /**
      * @description Swift code of the bank in which the account exists.

      */
    
    swift_code:string;
    
    /**
      * @description Name of the gateway this virtual bank account is stored in. \* ecentric - Ecentric provides a seamless payment processing service in South Africa specializing on omnichannel capabilities. \* bluesnap - BlueSnap is a payment gateway. \* tco - 2Checkout is a payment gateway. \* first_data_global - First Data Global Gateway Virtual Terminal Account \* exact - Exact Payments is a payment gateway. \* bluepay - BluePay is a payment gateway. \* paypal_express_checkout - PayPal Express Checkout is a payment gateway. \* eway - eWAY Account is a payment gateway. \* metrics_global - Metrics global is a leading payment service provider providing unified payment services in the US. \* paypal_payflow_pro - PayPal Payflow Pro is a payment gateway. \* razorpay - Razorpay is a fast growing payment service provider in India working with all leading banks and support for major local payment methods including Netbanking, UPI etc. \* global_payments - Global Payments is a payment service provider. \* amazon_payments - Amazon Payments is a payment service provider. \* not_applicable - Indicates that payment gateway is not applicable for this resource. \* windcave - Windcave provides an end to end payment processing solution in ANZ and other leading global markets. \* checkout_com - Checkout.com is a payment gateway. \* adyen - Adyen is a payment gateway. \* braintree - Braintree is a payment gateway. \* nmi - NMI is a payment gateway. \* quickbooks - Intuit QuickBooks Payments gateway \* wepay - WePay is a payment gateway. \* worldpay - WorldPay is a payment gateway \* wirecard - WireCard Account is a payment service provider. \* chargebee_payments - Chargebee Payments gateway \* sage_pay - Sage Pay is a payment gateway. \* moneris_us - Moneris USA is a payment gateway. \* pin - Pin is a payment gateway \* authorize_net - Authorize.net is a payment gateway \* elavon - Elavon Virtual Merchant is a payment solution. \* paypal_pro - PayPal Pro Account is a payment gateway. \* orbital - Chase Paymentech(Orbital) is a payment gateway. \* paypal - PayPal Commerce is a payment gateway. \* beanstream - Bambora(formerly known as Beanstream) is a payment gateway. \* hdfc - HDFC Account is a payment gateway. \* ingenico_direct - Worldline Online Payments is a payment gateway. \* ogone - Ingenico ePayments (formerly known as Ogone) is a payment gateway. \* migs - MasterCard Internet Gateway Service payment gateway. \* stripe - Stripe is a payment gateway. \* vantiv - Vantiv is a payment gateway. \* moneris - Moneris is a payment gateway. \* bank_of_america - Bank of America Gateway \* chargebee - Chargebee test gateway. \* eway_rapid - eWAY Rapid is a payment gateway. \* gocardless - GoCardless is a payment service provider. \* mollie - Mollie is a payment gateway. \* paymill - PAYMILL is a payment gateway. \* balanced_payments - Balanced is a payment gateway \* cybersource - CyberSource is a payment gateway.

      */
    
    gateway:Gateway;
    
    /**
      * @description The gateway account in which this virtual bank account is stored.

      */
    
    gateway_account_id:string;
    
    /**
      * @description Version number of this resource. The &#x60;resource_version&#x60; is updated with a new timestamp in milliseconds for every change made to the resource. This attribute will be present only if the resource has been updated after 2016-09-28.

      */
    
    resource_version?:number;
    
    /**
      * @description Timestamp indicating when this virtual bank account resource was last updated.

      */
    
    updated_at?:number;
    
    /**
      * @description Timestamp indicating when this virtual bank account resource is created.

      */
    
    created_at:number;
    
    /**
      * @description Identifier provided by the gateway for the virtual bank account source. In case of Stripe, the reference_id consists of a combination of Stripe Customer ID and Stripe Source ID separated by a forward slash (e.g. cus_63MnDn0t6kfDW7/src_6WjCF20vT9WN1G).

      */
    
    reference_id:string;
    
    /**
      * @description Indicates that this resource has been deleted.

      */
    
    deleted:boolean;
  }
  export namespace VirtualBankAccount {
    export class VirtualBankAccountResource {  
      /**
        * @description Creates a virtual bank account using the identifier provided by the gateway.

        */
      
      create_using_permanent_token(input:CreateUsingPermanentTokenInputParam):ChargebeeRequest<CreateUsingPermanentTokenResponse>;
       
      /**
        * @description Creates a virtual bank account for a customer. Email address is mandatory for virtual bank account creation. All notifications related to this virtual bank account will be sent to the email address you specify.

        */
      
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
       
      /**
        * @description Retrieves the virtual bank account identified by the unique identifier.

        */
      
      retrieve(virtual_bank_account_id:string):ChargebeeRequest<RetrieveResponse>;
       
      /**
        * @description Lists all the virtual bank accounts.

        */
      
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
       
      /**
        * @description Deletes a virtual bank account. If there is no virtual bank account present in the gateway for the customer, this API will return successfully without throwing an error.

        */
      
      delete(virtual_bank_account_id:string):ChargebeeRequest<DeleteResponse>;
       
      /**
        * @description Deletes virtual bank accounts from Chargebee. Payment method in the payment gateway, and Auto Collection settings in Chargebee are not affected.

        */
      
      delete_local(virtual_bank_account_id:string):ChargebeeRequest<DeleteLocalResponse>;
    }
    export interface CreateUsingPermanentTokenResponse {  
       virtual_bank_account:VirtualBankAccount;
       
       customer?:Customer;
    }
    export interface CreateUsingPermanentTokenInputParam {
       
      /**
        * @description Identifier of the customer.

        */
       
      customer_id:string;
       
      /**
        * @description Identifier provided by the gateway for the virtual bank account source. In case of Stripe, the reference_id consists of a combination of Stripe Customer ID and Stripe Source ID separated by a forward slash (e.g. cus_63MnDn0t6kfDW7/src_6WjCF20vT9WN1G).

        */
       
      reference_id:string;
       
      /**
        * @description type of the credit transfer. \* sepa_credit - SEPA Credit Transfer \* ach_credit - ACH Credit Transfer

        */
       
      scheme?:'ach_credit' | 'sepa_credit';
    }
    export interface CreateResponse {  
       virtual_bank_account:VirtualBankAccount;
       
       customer?:Customer;
    }
    export interface CreateInputParam {
       
      /**
        * @description Identifier of the customer.

        */
       
      customer_id:string;
       
      /**
        * @description Email address associated with the virtual bank account.

        */
       
      email?:string;
       
      /**
        * @description type of the credit transfer. \* sepa_credit - SEPA Credit Transfer \* ach_credit - ACH Credit Transfer

        */
       
      scheme?:'ach_credit' | 'sepa_credit';
    }
    export interface RetrieveResponse {  
       virtual_bank_account:VirtualBankAccount;
    }
    
    export interface ListResponse {  
      /**
        * @description Lists all the virtual bank accounts.

        */
       
       list:{virtual_bank_account:VirtualBankAccount}[];
       
      /**
        * @description Lists all the virtual bank accounts.

        */
       
       next_offset?:string;
    }
    export interface ListInputParam {
      [key : string]: any;  
      /**
        * @description Lists all the virtual bank accounts.

        */
        
      limit?:number;
       
      /**
        * @description Lists all the virtual bank accounts.

        */
        
      offset?:string;
       
      /**
        * @description Lists all the virtual bank accounts.

        */
        
      customer_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Lists all the virtual bank accounts.

        */
        
      updated_at?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description Lists all the virtual bank accounts.

        */
        
      created_at?:{after?:string,before?:string,between?:string,on?:string};
    }
    export interface DeleteResponse {  
       virtual_bank_account:VirtualBankAccount;
    }
    
    export interface DeleteLocalResponse {  
       virtual_bank_account:VirtualBankAccount;
    }
    
    
  }
}