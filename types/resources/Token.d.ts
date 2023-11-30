///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface Token {
    
    /**
      * @description Identifier of the Chargebee Token

      */
    
    id:string;
    
    /**
      * @description Name of the gateway this token is stored in. \* bluesnap - BlueSnap is a payment gateway. \* tco - 2Checkout is a payment gateway. \* first_data_global - First Data Global Gateway Virtual Terminal Account \* exact - Exact Payments is a payment gateway. \* bluepay - BluePay is a payment gateway. \* paypal_express_checkout - PayPal Express Checkout is a payment gateway. \* eway - eWAY Account is a payment gateway. \* paypal_payflow_pro - PayPal Payflow Pro is a payment gateway. \* razorpay - Razorpay is a fast growing payment service provider in India working with all leading banks and support for major local payment methods including Netbanking, UPI etc. \* global_payments - Global Payments is a payment service provider. \* amazon_payments - Amazon Payments is a payment service provider. \* not_applicable - Indicates that payment gateway is not applicable for this resource. \* checkout_com - Checkout.com is a payment gateway. \* adyen - Adyen is a payment gateway. \* braintree - Braintree is a payment gateway. \* nmi - NMI is a payment gateway. \* quickbooks - Intuit QuickBooks Payments gateway \* wepay - WePay is a payment gateway. \* worldpay - WorldPay is a payment gateway \* wirecard - WireCard Account is a payment service provider. \* chargebee_payments - Chargebee Payments gateway \* sage_pay - Sage Pay is a payment gateway. \* moneris_us - Moneris USA is a payment gateway. \* pin - Pin is a payment gateway \* authorize_net - Authorize.net is a payment gateway \* elavon - Elavon Virtual Merchant is a payment solution. \* paypal_pro - PayPal Pro Account is a payment gateway. \* orbital - Chase Paymentech(Orbital) is a payment gateway. \* paypal - PayPal Commerce is a payment gateway. \* beanstream - Bambora(formerly known as Beanstream) is a payment gateway. \* hdfc - HDFC Account is a payment gateway. \* ingenico_direct - Worldline Online Payments is a payment gateway. \* ogone - Ingenico ePayments (formerly known as Ogone) is a payment gateway. \* migs - MasterCard Internet Gateway Service payment gateway. \* stripe - Stripe is a payment gateway. \* vantiv - Vantiv is a payment gateway. \* moneris - Moneris is a payment gateway. \* chargebee - Chargebee test gateway. \* eway_rapid - eWAY Rapid is a payment gateway. \* gocardless - GoCardless is a payment service provider. \* mollie - Mollie is a payment gateway. \* paymill - PAYMILL is a payment gateway. \* balanced_payments - Balanced is a payment gateway \* cybersource - CyberSource is a payment gateway.

      */
    
    gateway:Gateway;
    
    /**
      * @description The gateway account in which this token is stored.

      */
    
    gateway_account_id:string;
    
    /**
      * @description Type of payment method of the token. \* google_pay - Payments made via Google Pay. \* apple_pay - Payments made via Apple Pay. \* unionpay - Payments made via UnionPay. \* ideal - Payments made via iDEAL. \* bancontact - Payments made via Bancontact Card. \* netbanking_emandates - Netbanking (eMandates) Payments. \* alipay - Payments made via Alipay. \* dotpay - Payments made via Dotpay. \* giropay - Payments made via giropay. \* sofort - Payments made via Sofort. \* direct_debit - Represents bank account for which the direct debit or ACH agreement/mandate is created. \* paypal_express_checkout - Payments made via PayPal Express Checkout. \* amazon_payments - Payments made via Amazon Payments. \* card - Card based payment including credit cards and debit cards. Details about the card can be obtained from the card resource. \* upi - UPI Payments. \* generic - Payments made via Generic Payment Method. \* wechat_pay - Payments made via WeChat Pay.

      */
    
    payment_method_type:PaymentMethodType;
    
    /**
      * @description Status of the token \* new - new \* consumed - The token is already used \* expired - expired

      */
    
    status:'consumed' | 'new' | 'expired';
    
    /**
      * @description The id with which this token is referred in gateway

      */
    
    id_at_vault:string;
    
    /**
      * @description Name of the gateway/vault provider where the payment method is tokenized \* gateway - gateway \* spreedly - spreedly

      */
    
    vault:'spreedly' | 'gateway';
    
    /**
      * @description The IP address from where the token is created. Used primarily for EU VAT validation.

      */
    
    ip_address?:string;
    
    /**
      * @description Version number of this resource. The &#x60;resource_version&#x60; is updated with a new timestamp in milliseconds for every change made to the resource. This attribute will be present only if the resource has been updated after 2016-09-28.

      */
    
    resource_version?:number;
    
    /**
      * @description Timestamp indicating when this token resource was last updated.

      */
    
    updated_at?:number;
    
    /**
      * @description Timestamp indicating when this token resource is created.

      */
    
    created_at:number;
    
    /**
      * @description Timestamp indicating when this token is expired

      */
    
    expired_at?:number;
  }
}