///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
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

    card?:PaymentSource.Card;

    bank_account?:PaymentSource.BankAccount;

    boleto?:PaymentSource.CustVoucherSource;

    billing_address?:PaymentSource.BillingAddress;

    amazon_payment?:PaymentSource.AmazonPayment;

    upi?:PaymentSource.Upi;

    paypal?:PaymentSource.Paypal;

    venmo?:PaymentSource.Venmo;

    klarna_pay_now?:PaymentSource.KlarnaPayNow;

    mandates?:PaymentSource.Mandate[];

    deleted:boolean;

    business_entity_id?:string;

  }
  export namespace PaymentSource {
    export class PaymentSourceResource {  
      create_using_temp_token(input:CreateUsingTempTokenInputParam):ChargebeeRequest<CreateUsingTempTokenResponse>;
       
      create_using_permanent_token(input:CreateUsingPermanentTokenInputParam):ChargebeeRequest<CreateUsingPermanentTokenResponse>;
       
      create_using_token(input:CreateUsingTokenInputParam):ChargebeeRequest<CreateUsingTokenResponse>;
       
      create_using_payment_intent(input:CreateUsingPaymentIntentInputParam):ChargebeeRequest<CreateUsingPaymentIntentResponse>;
       
      create_voucher_payment_source(input:CreateVoucherPaymentSourceInputParam):ChargebeeRequest<CreateVoucherPaymentSourceResponse>;
       
      create_card(input:CreateCardInputParam):ChargebeeRequest<CreateCardResponse>;
       
      create_bank_account(input:CreateBankAccountInputParam):ChargebeeRequest<CreateBankAccountResponse>;
       
      update_card(cust_payment_source_id:string, input?:UpdateCardInputParam):ChargebeeRequest<UpdateCardResponse>;
       
      update_bank_account(cust_payment_source_id:string, input?:UpdateBankAccountInputParam):ChargebeeRequest<UpdateBankAccountResponse>;
       
      verify_bank_account(cust_payment_source_id:string, input:VerifyBankAccountInputParam):ChargebeeRequest<VerifyBankAccountResponse>;
       
      retrieve(cust_payment_source_id:string):ChargebeeRequest<RetrieveResponse>;
       
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
       
      switch_gateway_account(cust_payment_source_id:string, input:SwitchGatewayAccountInputParam):ChargebeeRequest<SwitchGatewayAccountResponse>;
       
      export_payment_source(cust_payment_source_id:string, input:ExportPaymentSourceInputParam):ChargebeeRequest<ExportPaymentSourceResponse>;
       
      delete(cust_payment_source_id:string):ChargebeeRequest<DeleteResponse>;
       
      delete_local(cust_payment_source_id:string):ChargebeeRequest<DeleteLocalResponse>;
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
    export interface CreateUsingPermanentTokenResponse {  
       customer:Customer;
       
       payment_source:PaymentSource;
    }
    export interface CreateUsingPermanentTokenInputParam {
       
      card?:{brand?:'visa' | 'mastercard' | 'american_express' | 'discover' | 'jcb' | 'diners_club' | 'other' | 'bancontact' | 'cmr_falabella' | 'tarjeta_naranja' | 'nativa' | 'cencosud' | 'cabal' | 'argencard' | 'elo' | 'hipercard' | 'carnet' | 'rupay' | 'maestro' | 'dankort' | 'cartes_bancaires',expiry_month?:number,expiry_year?:number,funding_type?:'credit' | 'debit' | 'prepaid' | 'not_known',iin?:string,last4?:string};
       
      billing_address?:{city?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,state?:string,state_code?:string,zip?:string};
       
      customer_id:string;
       
      type:Type;
       
      gateway_account_id?:string;
       
      reference_id?:string;
       
      issuing_country?:string;
       
      replace_primary_payment_source?:boolean;
       
      payment_method_token?:string;
       
      customer_profile_token?:string;
       
      network_transaction_id?:string;
       
      mandate_id?:string;
       
      skip_retrieval?:boolean;
       
      additional_information?:object;
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
    export interface CreateUsingPaymentIntentResponse {  
       customer:Customer;
       
       payment_source:PaymentSource;
    }
    export interface CreateUsingPaymentIntentInputParam {
       
      payment_intent?:{additional_info?:object,additional_information?:object,gateway_account_id?:string,gw_payment_method_id?:string,gw_token?:string,id?:string,payment_method_type?:'card' | 'ideal' | 'sofort' | 'bancontact' | 'google_pay' | 'dotpay' | 'giropay' | 'apple_pay' | 'upi' | 'netbanking_emandates' | 'paypal_express_checkout' | 'direct_debit' | 'boleto' | 'venmo' | 'amazon_payments' | 'pay_to' | 'faster_payments' | 'sepa_instant_transfer' | 'klarna_pay_now' | 'online_banking_poland' | 'payconiq_by_bancontact',reference_id?:string};
       
      customer_id:string;
       
      replace_primary_payment_source?:boolean;
    }
    export interface CreateVoucherPaymentSourceResponse {  
       customer:Customer;
       
       payment_source:PaymentSource;
    }
    export interface CreateVoucherPaymentSourceInputParam {
       
      voucher_payment_source:{billing_address?:object,gateway_account_id?:string,tax_id?:string,voucher_type:VoucherType};
       
      customer_id:string;
    }
    export interface CreateCardResponse {  
       customer:Customer;
       
       payment_source:PaymentSource;
    }
    export interface CreateCardInputParam {
       
      card:{additional_information?:object,billing_addr1?:string,billing_addr2?:string,billing_city?:string,billing_country?:string,billing_state?:string,billing_state_code?:string,billing_zip?:string,cvv?:string,expiry_month:number,expiry_year:number,first_name?:string,gateway_account_id?:string,last_name?:string,number:string,preferred_scheme?:'cartes_bancaires' | 'mastercard' | 'visa'};
       
      customer_id:string;
       
      replace_primary_payment_source?:boolean;
    }
    export interface CreateBankAccountResponse {  
       customer:Customer;
       
       payment_source:PaymentSource;
    }
    export interface CreateBankAccountInputParam {
       
      bank_account?:{account_holder_type?:AccountHolderType,account_number?:string,account_type?:AccountType,bank_code?:string,bank_name?:string,billing_address?:object,company?:string,echeck_type?:EcheckType,email?:string,first_name?:string,gateway_account_id?:string,iban?:string,last_name?:string,phone?:string,routing_number?:string,swedish_identity_number?:string};
       
      customer_id:string;
       
      issuing_country?:string;
       
      replace_primary_payment_source?:boolean;
    }
    export interface UpdateCardResponse {  
       customer:Customer;
       
       payment_source:PaymentSource;
    }
    export interface UpdateCardInputParam {
       
      card?:{additional_information?:object,billing_addr1?:string,billing_addr2?:string,billing_city?:string,billing_country?:string,billing_state?:string,billing_state_code?:string,billing_zip?:string,expiry_month?:number,expiry_year?:number,first_name?:string,last_name?:string};
       
      gateway_meta_data?:object;
       
      reference_transaction?:string;
    }
    export interface UpdateBankAccountResponse {  
       customer:Customer;
       
       payment_source:PaymentSource;
    }
    export interface UpdateBankAccountInputParam {
       
      bank_account?:{email?:string,first_name?:string,last_name?:string};
    }
    export interface VerifyBankAccountResponse {  
       payment_source:PaymentSource;
    }
    export interface VerifyBankAccountInputParam {
       
      amount1:number;
       
      amount2:number;
    }
    export interface RetrieveResponse {  
       payment_source:PaymentSource;
    }
    
    export interface ListResponse {  
       list:{payment_source:PaymentSource}[];
       
       next_offset?:string;
    }
    export interface ListInputParam {
      [key : string]: any;  
      /**
        * @description The number of resources to be returned.

        */
        
      limit?:number;
       
      /**
        * @description Determines your position in the list for pagination. To ensure that the next page is retrieved correctly, always set \&#x60;offset\&#x60; to the value of \&#x60;next_offset\&#x60; obtained in the previous iteration of the API call.

        */
        
      offset?:string;
       
      subscription_id?:string;
       
      /**
        * @description Indicates whether to include deleted objects in the list. The deleted objects have the attribute \&#x60;deleted\&#x60; as \&#x60;true\&#x60;.

        */
        
      include_deleted?:boolean;
       
      customer_id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description Type of payment source

        */
        
      type?:{in?:string,is?:'card' | 'paypal_express_checkout' | 'amazon_payments' | 'direct_debit' | 'generic' | 'alipay' | 'unionpay' | 'apple_pay' | 'wechat_pay' | 'ideal' | 'google_pay' | 'sofort' | 'bancontact' | 'giropay' | 'dotpay' | 'upi' | 'netbanking_emandates' | 'venmo' | 'pay_to' | 'faster_payments' | 'sepa_instant_transfer' | 'automated_bank_transfer' | 'klarna_pay_now' | 'online_banking_poland' | 'payconiq_by_bancontact',is_not?:'card' | 'paypal_express_checkout' | 'amazon_payments' | 'direct_debit' | 'generic' | 'alipay' | 'unionpay' | 'apple_pay' | 'wechat_pay' | 'ideal' | 'google_pay' | 'sofort' | 'bancontact' | 'giropay' | 'dotpay' | 'upi' | 'netbanking_emandates' | 'venmo' | 'pay_to' | 'faster_payments' | 'sepa_instant_transfer' | 'automated_bank_transfer' | 'klarna_pay_now' | 'online_banking_poland' | 'payconiq_by_bancontact',not_in?:string};
       
      /**
        * @description Current status of the payment source.

        */
        
      status?:{in?:string,is?:'valid' | 'expiring' | 'expired' | 'invalid' | 'pending_verification',is_not?:'valid' | 'expiring' | 'expired' | 'invalid' | 'pending_verification',not_in?:string};
       
      /**
        * @description Timestamp indicating when this payment source resource was last updated.

        */
        
      updated_at?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description Timestamp indicating when this payment source resource is created.

        */
        
      created_at?:{after?:string,before?:string,between?:string,on?:string};
       
      sort_by?:{asc?:'created_at' | 'updated_at',desc?:'created_at' | 'updated_at'};
    }
    export interface SwitchGatewayAccountResponse {  
       customer:Customer;
       
       payment_source:PaymentSource;
    }
    export interface SwitchGatewayAccountInputParam {
       
      gateway_account_id:string;
    }
    export interface ExportPaymentSourceResponse {  
       third_party_payment_method:ThirdPartyPaymentMethod;
    }
    export interface ExportPaymentSourceInputParam {
       
      gateway_account_id:string;
    }
    export interface DeleteResponse {  
       customer:Customer;
       
       payment_source:PaymentSource;
    }
    
    export interface DeleteLocalResponse {  
       customer:Customer;
       
       payment_source:PaymentSource;
    }
    
    export interface Card {  
      first_name?:string;
       
      last_name?:string;
       
      iin:string;
       
      last4:string;
       
      brand:'visa' | 'mastercard' | 'american_express' | 'discover' | 'jcb' | 'diners_club' | 'other' | 'bancontact' | 'cmr_falabella' | 'tarjeta_naranja' | 'nativa' | 'cencosud' | 'cabal' | 'argencard' | 'elo' | 'hipercard' | 'carnet' | 'rupay' | 'maestro' | 'dankort' | 'cartes_bancaires' | 'not_applicable';
       
      funding_type:'credit' | 'debit' | 'prepaid' | 'not_known' | 'not_applicable';
       
      expiry_month:number;
       
      expiry_year:number;
       
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
      last4:string;
       
      name_on_account?:string;
       
      first_name?:string;
       
      last_name?:string;
       
      direct_debit_scheme?:DirectDebitScheme;
       
      bank_name?:string;
       
      mandate_id?:string;
       
      account_type?:AccountType;
       
      echeck_type?:EcheckType;
       
      account_holder_type?:AccountHolderType;
       
      email?:string;
    }
    export interface CustVoucherSource {  
      last4:string;
       
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
    export interface Venmo {  
      user_name?:string;
    }
    export interface KlarnaPayNow {  
      email?:string;
    }
    export interface Mandate {  
      id:string;
       
      subscription_id:string;
       
      created_at:number;
    }
  }
}