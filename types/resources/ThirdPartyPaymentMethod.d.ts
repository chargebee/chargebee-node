///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface ThirdPartyPaymentMethod {
    
    /**
      * @description Type of the payment method. \* direct_debit - Represents bank account for which the direct debit or ACH agreement/mandate is created. \* unionpay - Payments made via UnionPay. \* google_pay - Payments made via Google Pay. \* dotpay - Payments made via Dotpay. \* generic - Payments made via Generic Payment Method. \* giropay - Payments made via giropay. \* paypal_express_checkout - Payments made via PayPal Express Checkout. \* alipay - Payments made via Alipay. \* sofort - Payments made via Sofort. \* wechat_pay - Payments made via WeChat Pay. \* ideal - Payments made via iDEAL. \* netbanking_emandates - Netbanking (eMandates) Payments. \* upi - UPI Payments. \* bancontact - Payments made via Bancontact Card. \* card - Card based payment including credit cards and debit cards. Details about the card can be obtained from the card resource. \* amazon_payments - Payments made via Amazon Payments. \* apple_pay - Payments made via Apple Pay.

      */
    
    type:Type;
    
    /**
      * @description Name of the gateway this card is stored with. \* ecentric - Ecentric provides a seamless payment processing service in South Africa specializing on omnichannel capabilities. \* bluesnap - BlueSnap is a payment gateway. \* tco - 2Checkout is a payment gateway. \* first_data_global - First Data Global Gateway Virtual Terminal Account \* exact - Exact Payments is a payment gateway. \* bluepay - BluePay is a payment gateway. \* paypal_express_checkout - PayPal Express Checkout is a payment gateway. \* eway - eWAY Account is a payment gateway. \* metrics_global - Metrics global is a leading payment service provider providing unified payment services in the US. \* paypal_payflow_pro - PayPal Payflow Pro is a payment gateway. \* razorpay - Razorpay is a fast growing payment service provider in India working with all leading banks and support for major local payment methods including Netbanking, UPI etc. \* global_payments - Global Payments is a payment service provider. \* amazon_payments - Amazon Payments is a payment service provider. \* not_applicable - Indicates that payment gateway is not applicable for this resource. \* windcave - Windcave provides an end to end payment processing solution in ANZ and other leading global markets. \* checkout_com - Checkout.com is a payment gateway. \* adyen - Adyen is a payment gateway. \* braintree - Braintree is a payment gateway. \* nmi - NMI is a payment gateway. \* quickbooks - Intuit QuickBooks Payments gateway \* wepay - WePay is a payment gateway. \* worldpay - WorldPay is a payment gateway \* wirecard - WireCard Account is a payment service provider. \* chargebee_payments - Chargebee Payments gateway \* sage_pay - Sage Pay is a payment gateway. \* moneris_us - Moneris USA is a payment gateway. \* pin - Pin is a payment gateway \* authorize_net - Authorize.net is a payment gateway \* elavon - Elavon Virtual Merchant is a payment solution. \* paypal_pro - PayPal Pro Account is a payment gateway. \* orbital - Chase Paymentech(Orbital) is a payment gateway. \* paypal - PayPal Commerce is a payment gateway. \* beanstream - Bambora(formerly known as Beanstream) is a payment gateway. \* hdfc - HDFC Account is a payment gateway. \* ingenico_direct - Worldline Online Payments is a payment gateway. \* ogone - Ingenico ePayments (formerly known as Ogone) is a payment gateway. \* migs - MasterCard Internet Gateway Service payment gateway. \* stripe - Stripe is a payment gateway. \* vantiv - Vantiv is a payment gateway. \* moneris - Moneris is a payment gateway. \* bank_of_america - Bank of America Gateway \* chargebee - Chargebee test gateway. \* eway_rapid - eWAY Rapid is a payment gateway. \* gocardless - GoCardless is a payment service provider. \* mollie - Mollie is a payment gateway. \* paymill - PAYMILL is a payment gateway. \* balanced_payments - Balanced is a payment gateway \* cybersource - CyberSource is a payment gateway.

      */
    
    gateway:Gateway;
    
    /**
      * @description The gateway account this payment method is stored with.

      */
    
    gateway_account_id?:string;
    
    /**
      * @description Identifier provided by the gateway to reference that specific card.

      */
    
    reference_id:string;
  }
}