///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'Chargebee' {
  export interface PaymentSource {
    id: string;

    resource_version?: number;

    updated_at?: number;

    created_at: number;

    customer_id: string;

    type: Type;

    reference_id: string;

    status:
      | 'valid'
      | 'expiring'
      | 'expired'
      | 'invalid'
      | 'pending_verification';

    gateway: Gateway;

    gateway_account_id?: string;

    ip_address?: string;

    issuing_country?: string;

    card?: PaymentSource.Card;

    bank_account?: PaymentSource.BankAccount;

    boleto?: PaymentSource.CustVoucherSource;

    billing_address?: PaymentSource.BillingAddress;

    amazon_payment?: PaymentSource.AmazonPayment;

    upi?: PaymentSource.Upi;

    paypal?: PaymentSource.Paypal;

    venmo?: PaymentSource.Venmo;

    klarna_pay_now?: PaymentSource.KlarnaPayNow;

    mandates?: PaymentSource.Mandate[];

    deleted: boolean;

    business_entity_id?: string;
  }
  export namespace PaymentSource {
    export class PaymentSourceResource {
      createUsingTempToken(
        input: CreateUsingTempTokenInputParam,
      ): ChargebeeRequest<ChargebeeResponse<CreateUsingTempTokenResponse>>;

      createUsingPermanentToken(
        input: CreateUsingPermanentTokenInputParam,
      ): ChargebeeRequest<ChargebeeResponse<CreateUsingPermanentTokenResponse>>;

      createUsingToken(
        input: CreateUsingTokenInputParam,
      ): ChargebeeRequest<ChargebeeResponse<CreateUsingTokenResponse>>;

      createUsingPaymentIntent(
        input: CreateUsingPaymentIntentInputParam,
      ): ChargebeeRequest<ChargebeeResponse<CreateUsingPaymentIntentResponse>>;

      createVoucherPaymentSource(
        input: CreateVoucherPaymentSourceInputParam,
      ): ChargebeeRequest<
        ChargebeeResponse<CreateVoucherPaymentSourceResponse>
      >;

      createCard(
        input: CreateCardInputParam,
      ): ChargebeeRequest<ChargebeeResponse<CreateCardResponse>>;

      createBankAccount(
        input: CreateBankAccountInputParam,
      ): ChargebeeRequest<ChargebeeResponse<CreateBankAccountResponse>>;

      updateCard(
        cust_payment_source_id: string,
        input?: UpdateCardInputParam,
      ): ChargebeeRequest<ChargebeeResponse<UpdateCardResponse>>;

      updateBankAccount(
        cust_payment_source_id: string,
        input?: UpdateBankAccountInputParam,
      ): ChargebeeRequest<ChargebeeResponse<UpdateBankAccountResponse>>;

      verifyBankAccount(
        cust_payment_source_id: string,
        input: VerifyBankAccountInputParam,
      ): ChargebeeRequest<ChargebeeResponse<VerifyBankAccountResponse>>;

      retrieve(
        cust_payment_source_id: string,
      ): ChargebeeRequest<ChargebeeResponse<RetrieveResponse>>;

      list(
        input?: ListInputParam,
      ): ChargebeeRequest<ChargebeeResponse<ListResponse>>;

      switchGatewayAccount(
        cust_payment_source_id: string,
        input: SwitchGatewayAccountInputParam,
      ): ChargebeeRequest<ChargebeeResponse<SwitchGatewayAccountResponse>>;

      exportPaymentSource(
        cust_payment_source_id: string,
        input: ExportPaymentSourceInputParam,
      ): ChargebeeRequest<ChargebeeResponse<ExportPaymentSourceResponse>>;

      delete(
        cust_payment_source_id: string,
      ): ChargebeeRequest<ChargebeeResponse<DeleteResponse>>;

      deleteLocal(
        cust_payment_source_id: string,
      ): ChargebeeRequest<ChargebeeResponse<DeleteLocalResponse>>;
    }
    export interface CreateUsingTempTokenResponse {
      customer: Customer;

      payment_source: PaymentSource;
    }

    export interface CreateUsingPermanentTokenResponse {
      customer: Customer;

      payment_source: PaymentSource;
    }

    export interface CreateUsingTokenResponse {
      customer: Customer;

      payment_source: PaymentSource;
    }

    export interface CreateUsingPaymentIntentResponse {
      customer: Customer;

      payment_source: PaymentSource;
    }

    export interface CreateVoucherPaymentSourceResponse {
      customer: Customer;

      payment_source: PaymentSource;
    }

    export interface CreateCardResponse {
      customer: Customer;

      payment_source: PaymentSource;
    }

    export interface CreateBankAccountResponse {
      customer: Customer;

      payment_source: PaymentSource;
    }

    export interface UpdateCardResponse {
      customer: Customer;

      payment_source: PaymentSource;
    }

    export interface UpdateBankAccountResponse {
      customer: Customer;

      payment_source: PaymentSource;
    }

    export interface VerifyBankAccountResponse {
      payment_source: PaymentSource;
    }

    export interface RetrieveResponse {
      payment_source: PaymentSource;
    }

    export interface ListResponse {
      list: { payment_source: PaymentSource }[];

      next_offset?: string;
    }

    export interface SwitchGatewayAccountResponse {
      customer: Customer;

      payment_source: PaymentSource;
    }

    export interface ExportPaymentSourceResponse {
      third_party_payment_method: ThirdPartyPaymentMethod;
    }

    export interface DeleteResponse {
      customer: Customer;

      payment_source: PaymentSource;
    }

    export interface DeleteLocalResponse {
      customer: Customer;

      payment_source: PaymentSource;
    }

    export interface Card {
      first_name?: string;

      last_name?: string;

      iin: string;

      last4: string;

      brand:
        | 'visa'
        | 'mastercard'
        | 'american_express'
        | 'discover'
        | 'jcb'
        | 'diners_club'
        | 'other'
        | 'bancontact'
        | 'cmr_falabella'
        | 'tarjeta_naranja'
        | 'nativa'
        | 'cencosud'
        | 'cabal'
        | 'argencard'
        | 'elo'
        | 'hipercard'
        | 'carnet'
        | 'rupay'
        | 'maestro'
        | 'not_applicable';

      funding_type:
        | 'credit'
        | 'debit'
        | 'prepaid'
        | 'not_known'
        | 'not_applicable';

      expiry_month: number;

      expiry_year: number;

      billing_addr1?: string;

      billing_addr2?: string;

      billing_city?: string;

      billing_state_code?: string;

      billing_state?: string;

      billing_country?: string;

      billing_zip?: string;

      masked_number?: string;
    }
    export interface BankAccount {
      last4: string;

      name_on_account?: string;

      first_name?: string;

      last_name?: string;

      direct_debit_scheme?: DirectDebitScheme;

      bank_name?: string;

      mandate_id?: string;

      account_type?: AccountType;

      echeck_type?: EcheckType;

      account_holder_type?: AccountHolderType;

      email?: string;
    }
    export interface CustVoucherSource {
      last4: string;

      first_name?: string;

      last_name?: string;

      email?: string;
    }
    export interface BillingAddress {
      first_name?: string;

      last_name?: string;

      email?: string;

      company?: string;

      phone?: string;

      line1?: string;

      line2?: string;

      line3?: string;

      city?: string;

      state_code?: string;

      state?: string;

      country?: string;

      zip?: string;

      validation_status?: ValidationStatus;
    }
    export interface AmazonPayment {
      email?: string;

      agreement_id?: string;
    }
    export interface Upi {
      vpa?: string;
    }
    export interface Paypal {
      email?: string;

      agreement_id?: string;
    }
    export interface Venmo {
      user_name?: string;
    }
    export interface KlarnaPayNow {
      email?: string;
    }
    export interface Mandate {
      id: string;

      subscription_id: string;

      created_at: number;
    }
    // REQUEST PARAMS
    //---------------

    export interface CreateUsingTempTokenInputParam {
      customer_id: string;
      gateway_account_id?: string;
      type: Type;
      tmp_token: string;
      issuing_country?: string;
      replace_primary_payment_source?: boolean;
      additional_information?: any;
    }
    export interface CreateUsingPermanentTokenInputParam {
      customer_id: string;
      type: Type;
      gateway_account_id?: string;
      reference_id?: string;
      issuing_country?: string;
      replace_primary_payment_source?: boolean;
      payment_method_token?: string;
      customer_profile_token?: string;
      network_transaction_id?: string;
      mandate_id?: string;
      skip_retrieval?: boolean;
      additional_information?: any;
      card?: CardCreateUsingPermanentTokenInputParam;
      billing_address?: BillingAddressCreateUsingPermanentTokenInputParam;
    }
    export interface CreateUsingTokenInputParam {
      customer_id: string;
      replace_primary_payment_source?: boolean;
      token_id: string;
    }
    export interface CreateUsingPaymentIntentInputParam {
      customer_id: string;
      replace_primary_payment_source?: boolean;
      payment_intent?: PaymentIntentCreateUsingPaymentIntentInputParam;
    }
    export interface CreateVoucherPaymentSourceInputParam {
      customer_id: string;
      voucher_payment_source?: VoucherPaymentSourceCreateVoucherPaymentSourceInputParam;
    }
    export interface CreateCardInputParam {
      customer_id: string;
      replace_primary_payment_source?: boolean;
      card?: CardCreateCardInputParam;
    }
    export interface CreateBankAccountInputParam {
      customer_id: string;
      issuing_country?: string;
      replace_primary_payment_source?: boolean;
      bank_account?: BankAccountCreateBankAccountInputParam;
    }
    export interface UpdateCardInputParam {
      gateway_meta_data?: any;
      reference_transaction?: string;
      card?: CardUpdateCardInputParam;
    }
    export interface UpdateBankAccountInputParam {
      bank_account?: BankAccountUpdateBankAccountInputParam;
    }
    export interface VerifyBankAccountInputParam {
      amount1: number;
      amount2: number;
    }
    export interface ListInputParam {
      limit?: number;
      offset?: string;
      subscription_id?: string;
      customer_id?: filter.String;
      type?: filter.Enum;
      status?: filter.Enum;
      updated_at?: filter.Timestamp;
      created_at?: filter.Timestamp;
      'sort_by[asc]'?: string;
      'sort_by[desc]'?: string;
    }
    export interface SwitchGatewayAccountInputParam {
      gateway_account_id: string;
    }
    export interface ExportPaymentSourceInputParam {
      gateway_account_id: string;
    }
    export interface BillingAddressCreateUsingPermanentTokenInputParam {
      first_name?: string;

      last_name?: string;

      email?: string;

      line1?: string;

      line2?: string;

      line3?: string;

      city?: string;

      state_code?: string;

      state?: string;

      zip?: string;

      country?: string;
    }
    export interface CardCreateUsingPermanentTokenInputParam {
      last4?: string;

      iin?: string;

      expiry_month?: number;

      expiry_year?: number;

      brand?:
        | 'visa'
        | 'mastercard'
        | 'american_express'
        | 'discover'
        | 'jcb'
        | 'diners_club'
        | 'other'
        | 'bancontact'
        | 'cmr_falabella'
        | 'tarjeta_naranja'
        | 'nativa'
        | 'cencosud'
        | 'cabal'
        | 'argencard'
        | 'elo'
        | 'hipercard'
        | 'carnet'
        | 'rupay'
        | 'maestro';

      funding_type?: 'credit' | 'debit' | 'prepaid' | 'not_known';
    }

    export interface PaymentIntentCreateUsingPaymentIntentInputParam {
      id?: string;

      gateway_account_id?: string;

      gw_token?: string;

      payment_method_type?:
        | 'card'
        | 'ideal'
        | 'sofort'
        | 'bancontact'
        | 'google_pay'
        | 'dotpay'
        | 'giropay'
        | 'apple_pay'
        | 'upi'
        | 'netbanking_emandates'
        | 'paypal_express_checkout'
        | 'direct_debit'
        | 'boleto'
        | 'venmo'
        | 'amazon_payments'
        | 'pay_to'
        | 'faster_payments'
        | 'sepa_instant_transfer'
        | 'klarna_pay_now'
        | 'online_banking_poland';

      reference_id?: string;

      /**
       * @deprecated Please refer API docs to use other attributes
       */

      gw_payment_method_id?: string;

      additional_info?: any;

      additional_information?: any;
    }

    export interface VoucherPaymentSourceCreateVoucherPaymentSourceInputParam {
      voucher_type: VoucherType;

      gateway_account_id?: string;

      tax_id?: string;

      billing_address?: any;
    }

    export interface CardCreateCardInputParam {
      gateway_account_id?: string;

      first_name?: string;

      last_name?: string;

      number: string;

      expiry_month: number;

      expiry_year: number;

      cvv?: string;

      billing_addr1?: string;

      billing_addr2?: string;

      billing_city?: string;

      billing_state_code?: string;

      billing_state?: string;

      billing_zip?: string;

      billing_country?: string;

      additional_information?: any;
    }

    export interface BankAccountCreateBankAccountInputParam {
      gateway_account_id?: string;

      iban?: string;

      first_name?: string;

      last_name?: string;

      company?: string;

      email?: string;

      phone?: string;

      bank_name?: string;

      account_number?: string;

      routing_number?: string;

      bank_code?: string;

      account_type?: AccountType;

      account_holder_type?: AccountHolderType;

      echeck_type?: EcheckType;

      swedish_identity_number?: string;

      billing_address?: any;
    }

    export interface CardUpdateCardInputParam {
      first_name?: string;

      last_name?: string;

      expiry_month?: number;

      expiry_year?: number;

      billing_addr1?: string;

      billing_addr2?: string;

      billing_city?: string;

      billing_zip?: string;

      billing_state_code?: string;

      billing_state?: string;

      billing_country?: string;

      additional_information?: any;
    }

    export interface BankAccountUpdateBankAccountInputParam {
      first_name?: string;

      last_name?: string;

      email?: string;
    }
  }
}
