///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface PaymentSource {
    
    id:string;
    resource_version?:number;
    updated_at?:number;
    created_at:number;
    customer_id:string;
    type:Type;
    reference_id:string;
    status:'valid' | 'expiring' | 'expired' | 'invalid' | 'pending_verification';
    gateway:Gateway;
    gateway_account_id?:string;
    ip_address?:string;
    issuing_country?:string;
    deleted:boolean;
    business_entity_id?:string;
    card?:PaymentSource.Card;
    bank_account?:PaymentSource.BankAccount;
    boleto?:PaymentSource.CustVoucherSource;
    billing_address?:PaymentSource.BillingAddress;
    amazon_payment?:PaymentSource.AmazonPayment;
    upi?:PaymentSource.Upi;
    paypal?:PaymentSource.Paypal;
    mandates?:PaymentSource.Mandate[];
  }
  export namespace PaymentSource {
    export class PaymentSourceResource {
      create_using_permanent_token(input:CreateUsingPermanentTokenInputParam):ChargebeeRequest<CreateUsingPermanentTokenResponse>;
      delete(cust_payment_source_id:string):ChargebeeRequest<DeleteResponse>;
      create_card(input:CreateCardInputParam):ChargebeeRequest<CreateCardResponse>;
      verify_bank_account(cust_payment_source_id:string, input:VerifyBankAccountInputParam):ChargebeeRequest<VerifyBankAccountResponse>;
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
      export_payment_source(cust_payment_source_id:string, input:ExportPaymentSourceInputParam):ChargebeeRequest<ExportPaymentSourceResponse>;
      create_using_payment_intent(input:CreateUsingPaymentIntentInputParam):ChargebeeRequest<CreateUsingPaymentIntentResponse>;
      retrieve(cust_payment_source_id:string):ChargebeeRequest<RetrieveResponse>;
      create_voucher_payment_source(input:CreateVoucherPaymentSourceInputParam):ChargebeeRequest<CreateVoucherPaymentSourceResponse>;
      create_using_temp_token(input:CreateUsingTempTokenInputParam):ChargebeeRequest<CreateUsingTempTokenResponse>;
      update_card(cust_payment_source_id:string, input?:UpdateCardInputParam):ChargebeeRequest<UpdateCardResponse>;
      switch_gateway_account(cust_payment_source_id:string, input:SwitchGatewayAccountInputParam):ChargebeeRequest<SwitchGatewayAccountResponse>;
      create_using_token(input:CreateUsingTokenInputParam):ChargebeeRequest<CreateUsingTokenResponse>;
      delete_local(cust_payment_source_id:string):ChargebeeRequest<DeleteLocalResponse>;
      create_bank_account(input:CreateBankAccountInputParam):ChargebeeRequest<CreateBankAccountResponse>;
      update_bank_account(cust_payment_source_id:string, input?:UpdateBankAccountInputParam):ChargebeeRequest<UpdateBankAccountResponse>;
    }
    export interface CreateUsingPermanentTokenResponse {
      customer:Customer;
      payment_source:PaymentSource;
    }
    export interface CreateUsingPermanentTokenInputParam {
      
      customer_id:string;
      type:Type;
      gateway_account_id?:string;
      reference_id:string;
      issuing_country?:string;
      replace_primary_payment_source?:boolean;
      additional_information?:object;
    }
    export interface DeleteResponse {
      customer:Customer;
      payment_source:PaymentSource;
    }
    
    export interface CreateCardResponse {
      customer:Customer;
      payment_source:PaymentSource;
    }
    export interface CreateCardInputParam {
      
      customer_id:string;
      replace_primary_payment_source?:boolean;
      card?:{additional_information?:object,billing_addr1?:string,billing_addr2?:string,billing_city?:string,billing_country?:string,billing_state?:string,billing_state_code?:string,billing_zip?:string,cvv?:string,expiry_month:number,expiry_year:number,first_name?:string,gateway_account_id?:string,last_name?:string,number:string};
    }
    export interface VerifyBankAccountResponse {
      payment_source:PaymentSource;
    }
    export interface VerifyBankAccountInputParam {
      
      amount1:number;
      amount2:number;
    }
    export interface ListResponse {
      list:{payment_source:PaymentSource}[];
      next_offset?:string;
    }
    export interface ListInputParam {
      [key: string]: string | number | object | boolean;
      limit?:number;
      offset?:string;
      subscription_id?:string;
      customer_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      type?:{in?:string,is?:'giropay' | 'alipay' | 'ideal' | 'google_pay' | 'netbanking_emandates' | 'dotpay' | 'unionpay' | 'direct_debit' | 'generic' | 'sofort' | 'amazon_payments' | 'upi' | 'apple_pay' | 'bancontact' | 'paypal_express_checkout' | 'wechat_pay' | 'card',is_not?:'giropay' | 'alipay' | 'ideal' | 'google_pay' | 'netbanking_emandates' | 'dotpay' | 'unionpay' | 'direct_debit' | 'generic' | 'sofort' | 'amazon_payments' | 'upi' | 'apple_pay' | 'bancontact' | 'paypal_express_checkout' | 'wechat_pay' | 'card',not_in?:string};
      status?:{in?:string,is?:'valid' | 'expiring' | 'expired' | 'invalid' | 'pending_verification',is_not?:'valid' | 'expiring' | 'expired' | 'invalid' | 'pending_verification',not_in?:string};
      updated_at?:{after?:string,before?:string,between?:string,on?:string};
      created_at?:{after?:string,before?:string,between?:string,on?:string};
      sort_by?:{asc?:'updated_at' | 'created_at',desc?:'updated_at' | 'created_at'};
    }
    export interface ExportPaymentSourceResponse {
      third_party_payment_method:ThirdPartyPaymentMethod;
    }
    export interface ExportPaymentSourceInputParam {
      
      gateway_account_id:string;
    }
    export interface CreateUsingPaymentIntentResponse {
      customer:Customer;
      payment_source:PaymentSource;
    }
    export interface CreateUsingPaymentIntentInputParam {
      
      customer_id:string;
      replace_primary_payment_source?:boolean;
      payment_intent?:{additional_info?:object,additional_information?:object,gateway_account_id?:string,gw_token?:string,id?:string,payment_method_type?:'giropay' | 'ideal' | 'google_pay' | 'netbanking_emandates' | 'dotpay' | 'boleto' | 'direct_debit' | 'sofort' | 'upi' | 'apple_pay' | 'bancontact' | 'paypal_express_checkout' | 'card',reference_id?:string};
    }
    export interface RetrieveResponse {
      payment_source:PaymentSource;
    }
    
    export interface CreateVoucherPaymentSourceResponse {
      customer:Customer;
      payment_source:PaymentSource;
    }
    export interface CreateVoucherPaymentSourceInputParam {
      
      customer_id:string;
      voucher_payment_source?:{billing_address?:object,gateway_account_id?:string,tax_id?:string,voucher_type:VoucherType};
    }
    export interface CreateUsingTempTokenResponse {
      customer:Customer;
      payment_source:PaymentSource;
    }
    export interface CreateUsingTempTokenInputParam {
      
      customer_id:string;
      gateway_account_id?:string;
      type:Type;
      tmp_token:string;
      issuing_country?:string;
      replace_primary_payment_source?:boolean;
      additional_information?:object;
    }
    export interface UpdateCardResponse {
      customer:Customer;
      payment_source:PaymentSource;
    }
    export interface UpdateCardInputParam {
      
      gateway_meta_data?:object;
      reference_transaction?:string;
      card?:{billing_addr1?:string,billing_addr2?:string,billing_city?:string,billing_country?:string,billing_state?:string,billing_state_code?:string,billing_zip?:string,expiry_month?:number,expiry_year?:number,first_name?:string,last_name?:string};
    }
    export interface SwitchGatewayAccountResponse {
      customer:Customer;
      payment_source:PaymentSource;
    }
    export interface SwitchGatewayAccountInputParam {
      
      gateway_account_id:string;
    }
    export interface CreateUsingTokenResponse {
      customer:Customer;
      payment_source:PaymentSource;
    }
    export interface CreateUsingTokenInputParam {
      
      customer_id:string;
      replace_primary_payment_source?:boolean;
      token_id:string;
    }
    export interface DeleteLocalResponse {
      customer:Customer;
      payment_source:PaymentSource;
    }
    
    export interface CreateBankAccountResponse {
      customer:Customer;
      payment_source:PaymentSource;
    }
    export interface CreateBankAccountInputParam {
      
      customer_id:string;
      issuing_country?:string;
      replace_primary_payment_source?:boolean;
      bank_account?:{account_holder_type?:AccountHolderType,account_number?:string,account_type?:AccountType,bank_code?:string,bank_name?:string,billing_address?:object,company?:string,echeck_type?:EcheckType,email?:string,first_name?:string,gateway_account_id?:string,iban?:string,last_name?:string,phone?:string,routing_number?:string,swedish_identity_number?:string};
    }
    export interface UpdateBankAccountResponse {
      customer:Customer;
      payment_source:PaymentSource;
    }
    export interface UpdateBankAccountInputParam {
      
      bank_account?:{email?:string,first_name?:string,last_name?:string};
    }
    export interface Card {
      first_name?:string;
      last_name?:string;
      iin?:string;
      last4?:string;
      brand?:'discover' | 'other' | 'bancontact' | 'visa' | 'jcb' | 'diners_club' | 'mastercard' | 'not_applicable' | 'american_express';
      funding_type?:'not_known' | 'prepaid' | 'not_applicable' | 'credit' | 'debit';
      expiry_month?:number;
      expiry_year?:number;
      billing_addr1?:string;
      billing_addr2?:string;
      billing_city?:string;
      billing_state_code?:string;
      billing_state?:string;
      billing_country?:string;
      billing_zip?:string;
      masked_number?:string;
    }
    export interface BankAccount {
      last4?:string;
      name_on_account?:string;
      first_name?:string;
      last_name?:string;
      bank_name?:string;
      mandate_id?:string;
      account_type?:AccountType;
      echeck_type?:EcheckType;
      account_holder_type?:AccountHolderType;
      email?:string;
    }
    export interface CustVoucherSource {
      last4?:string;
      first_name?:string;
      last_name?:string;
      email?:string;
    }
    export interface BillingAddress {
      first_name?:string;
      last_name?:string;
      email?:string;
      company?:string;
      phone?:string;
      line1?:string;
      line2?:string;
      line3?:string;
      city?:string;
      state_code?:string;
      state?:string;
      country?:string;
      zip?:string;
      validation_status?:ValidationStatus;
    }
    export interface AmazonPayment {
      email?:string;
      agreement_id?:string;
    }
    export interface Upi {
      vpa?:string;
    }
    export interface Paypal {
      email?:string;
      agreement_id?:string;
    }
    export interface Mandate {
      id?:string;
      subscription_id?:string;
      created_at?:number;
    }
  }
}