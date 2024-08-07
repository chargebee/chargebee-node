///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface Customer {
    [key: string]: any;

    id: string;

    first_name?: string;

    last_name?: string;

    email?: string;

    phone?: string;

    company?: string;

    vat_number?: string;

    auto_collection: AutoCollection;

    offline_payment_method?: OfflinePaymentMethod;

    net_term_days: number;

    vat_number_validated_time?: number;

    vat_number_status?: 'valid' | 'invalid' | 'not_validated' | 'undetermined';

    allow_direct_debit: boolean;

    is_location_valid?: boolean;

    created_at: number;

    created_from_ip?: string;

    exemption_details?: any;

    taxability?: Taxability;

    entity_code?: EntityCode;

    exempt_number?: string;

    resource_version?: number;

    updated_at?: number;

    locale?: string;

    billing_date?: number;

    billing_month?: number;

    billing_date_mode?: BillingDateMode;

    billing_day_of_week?:
      | 'sunday'
      | 'monday'
      | 'tuesday'
      | 'wednesday'
      | 'thursday'
      | 'friday'
      | 'saturday';

    billing_day_of_week_mode?: BillingDayOfWeekMode;

    pii_cleared?: 'active' | 'scheduled_for_clear' | 'cleared';

    auto_close_invoices?: boolean;

    channel?: Channel;

    active_id?: string;

    card_status?:
      | 'no_card'
      | 'valid'
      | 'expiring'
      | 'expired'
      | 'pending_verification'
      | 'invalid';

    fraud_flag?: 'safe' | 'suspicious' | 'fraudulent';

    primary_payment_source_id?: string;

    backup_payment_source_id?: string;

    billing_address?: Customer.BillingAddress;

    referral_urls?: Customer.ReferralUrl[];

    contacts?: Customer.Contact[];

    payment_method?: Customer.PaymentMethod;

    invoice_notes?: string;

    business_entity_id?: string;

    preferred_currency_code?: string;

    promotional_credits: number;

    unbilled_charges: number;

    refundable_credits: number;

    excess_payments: number;

    balances?: Customer.Balance[];

    entity_identifiers?: Customer.EntityIdentifier[];

    tax_providers_fields?: Customer.TaxProvidersField[];

    is_einvoice_enabled?: boolean;

    einvoicing_method?: EinvoicingMethod;

    meta_data?: any;

    deleted: boolean;

    registered_for_gst?: boolean;

    consolidated_invoicing?: boolean;

    customer_type?: CustomerType;

    business_customer_without_vat_number?: boolean;

    client_profile_id?: string;

    relationship?: Customer.Relationship;

    use_default_hierarchy_settings?: boolean;

    parent_account_access?: Customer.ParentAccountAccess;

    child_account_access?: Customer.ChildAccountAccess;

    vat_number_prefix?: string;

    entity_identifier_scheme?: string;

    entity_identifier_standard?: string;
  }
  export namespace Customer {
    export class CustomerResource {
      create(
        input?: CreateInputParam,
      ): ChargebeeRequest<ChargebeeResponse<CreateResponse>>;

      list(
        input?: ListInputParam,
      ): ChargebeeRequest<ChargebeeResponse<ListResponse>>;

      retrieve(
        customer_id: string,
      ): ChargebeeRequest<ChargebeeResponse<RetrieveResponse>>;

      update(
        customer_id: string,
        input?: UpdateInputParam,
      ): ChargebeeRequest<ChargebeeResponse<UpdateResponse>>;

      update_payment_method(
        customer_id: string,
        input: UpdatePaymentMethodInputParam,
      ): ChargebeeRequest<ChargebeeResponse<UpdatePaymentMethodResponse>>;

      update_billing_info(
        customer_id: string,
        input?: UpdateBillingInfoInputParam,
      ): ChargebeeRequest<ChargebeeResponse<UpdateBillingInfoResponse>>;

      contacts_for_customer(
        customer_id: string,
        input?: ContactsForCustomerInputParam,
      ): ChargebeeRequest<ChargebeeResponse<ContactsForCustomerResponse>>;

      assign_payment_role(
        customer_id: string,
        input: AssignPaymentRoleInputParam,
      ): ChargebeeRequest<ChargebeeResponse<AssignPaymentRoleResponse>>;

      add_contact(
        customer_id: string,
        input: AddContactInputParam,
      ): ChargebeeRequest<ChargebeeResponse<AddContactResponse>>;

      update_contact(
        customer_id: string,
        input: UpdateContactInputParam,
      ): ChargebeeRequest<ChargebeeResponse<UpdateContactResponse>>;

      delete_contact(
        customer_id: string,
        input: DeleteContactInputParam,
      ): ChargebeeRequest<ChargebeeResponse<DeleteContactResponse>>;

      add_promotional_credits(
        customer_id: string,
        input: AddPromotionalCreditsInputParam,
      ): ChargebeeRequest<ChargebeeResponse<AddPromotionalCreditsResponse>>;

      deduct_promotional_credits(
        customer_id: string,
        input: DeductPromotionalCreditsInputParam,
      ): ChargebeeRequest<ChargebeeResponse<DeductPromotionalCreditsResponse>>;

      set_promotional_credits(
        customer_id: string,
        input: SetPromotionalCreditsInputParam,
      ): ChargebeeRequest<ChargebeeResponse<SetPromotionalCreditsResponse>>;

      record_excess_payment(
        customer_id: string,
        input: RecordExcessPaymentInputParam,
      ): ChargebeeRequest<ChargebeeResponse<RecordExcessPaymentResponse>>;

      collect_payment(
        customer_id: string,
        input: CollectPaymentInputParam,
      ): ChargebeeRequest<ChargebeeResponse<CollectPaymentResponse>>;

      delete(
        customer_id: string,
        input?: DeleteInputParam,
      ): ChargebeeRequest<ChargebeeResponse<DeleteResponse>>;

      move(
        input: MoveInputParam,
      ): ChargebeeRequest<ChargebeeResponse<MoveResponse>>;

      change_billing_date(
        customer_id: string,
        input?: ChangeBillingDateInputParam,
      ): ChargebeeRequest<ChargebeeResponse<ChangeBillingDateResponse>>;

      merge(
        input: MergeInputParam,
      ): ChargebeeRequest<ChargebeeResponse<MergeResponse>>;

      clear_personal_data(
        customer_id: string,
      ): ChargebeeRequest<ChargebeeResponse<ClearPersonalDataResponse>>;

      relationships(
        customer_id: string,
        input?: RelationshipsInputParam,
      ): ChargebeeRequest<ChargebeeResponse<RelationshipsResponse>>;

      delete_relationship(
        customer_id: string,
      ): ChargebeeRequest<ChargebeeResponse<DeleteRelationshipResponse>>;

      hierarchy(
        customer_id: string,
        input: HierarchyInputParam,
      ): ChargebeeRequest<ChargebeeResponse<HierarchyResponse>>;

      update_hierarchy_settings(
        customer_id: string,
        input?: UpdateHierarchySettingsInputParam,
      ): ChargebeeRequest<ChargebeeResponse<UpdateHierarchySettingsResponse>>;
    }
    export interface CreateResponse {
      customer: Customer;

      card?: Card;
    }

    export interface ListResponse {
      list: { customer: Customer; card?: Card }[];

      next_offset?: string;
    }

    export interface RetrieveResponse {
      customer: Customer;

      card?: Card;
    }

    export interface UpdateResponse {
      customer: Customer;

      card?: Card;
    }

    export interface UpdatePaymentMethodResponse {
      customer: Customer;

      card?: Card;
    }

    export interface UpdateBillingInfoResponse {
      customer: Customer;

      card?: Card;
    }

    export interface ContactsForCustomerResponse {
      list: { contact: Contact }[];

      next_offset?: string;
    }

    export interface AssignPaymentRoleResponse {
      customer: Customer;

      payment_source: PaymentSource;
    }

    export interface AddContactResponse {
      customer: Customer;

      card?: Card;
    }

    export interface UpdateContactResponse {
      customer: Customer;

      card?: Card;
    }

    export interface DeleteContactResponse {
      customer: Customer;

      card?: Card;
    }

    export interface AddPromotionalCreditsResponse {
      customer: Customer;
    }

    export interface DeductPromotionalCreditsResponse {
      customer: Customer;
    }

    export interface SetPromotionalCreditsResponse {
      customer: Customer;
    }

    export interface RecordExcessPaymentResponse {
      customer: Customer;

      transaction: Transaction;
    }

    export interface CollectPaymentResponse {
      customer: Customer;

      transaction: Transaction;
    }

    export interface DeleteResponse {
      customer: Customer;

      card?: Card;
    }

    export interface MoveResponse {
      resource_migration: ResourceMigration;
    }

    export interface ChangeBillingDateResponse {
      customer: Customer;
    }

    export interface MergeResponse {
      customer: Customer;
    }

    export interface ClearPersonalDataResponse {
      customer: Customer;
    }

    export interface RelationshipsResponse {
      customer: Customer;
    }

    export interface DeleteRelationshipResponse {
      customer: Customer;
    }

    export interface HierarchyResponse {
      hierarchies: Hierarchy[];
    }

    export interface UpdateHierarchySettingsResponse {
      customer: Customer;
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
    export interface ReferralUrl {
      external_customer_id?: string;

      referral_sharing_url: string;

      created_at: number;

      updated_at: number;

      referral_campaign_id: string;

      referral_account_id: string;

      referral_external_campaign_id?: string;

      referral_system: 'referral_candy' | 'referral_saasquatch' | 'friendbuy';
    }
    export interface Contact {
      id: string;

      first_name?: string;

      last_name?: string;

      email: string;

      phone?: string;

      label?: string;

      enabled: boolean;

      send_account_email: boolean;

      send_billing_email: boolean;
    }
    export interface PaymentMethod {
      type: Type;

      gateway: Gateway;

      gateway_account_id?: string;

      status:
        | 'valid'
        | 'expiring'
        | 'expired'
        | 'invalid'
        | 'pending_verification';

      reference_id: string;
    }
    export interface Balance {
      promotional_credits: number;

      excess_payments: number;

      refundable_credits: number;

      unbilled_charges: number;

      currency_code: string;

      balance_currency_code: string;
    }
    export interface EntityIdentifier {
      id: string;

      value?: string;

      scheme: string;

      standard?: string;
    }
    export interface TaxProvidersField {
      provider_name: string;

      field_id: string;

      field_value: string;
    }
    export interface Relationship {
      parent_id?: string;

      payment_owner_id: string;

      invoice_owner_id: string;
    }
    export interface ParentAccountAccess {
      portal_edit_child_subscriptions?: 'yes' | 'view_only' | 'no';

      portal_download_child_invoices?: 'yes' | 'view_only' | 'no';

      send_subscription_emails: boolean;

      send_invoice_emails: boolean;

      send_payment_emails: boolean;
    }
    export interface ChildAccountAccess {
      portal_edit_subscriptions?: 'yes' | 'view_only';

      portal_download_invoices?: 'yes' | 'view_only' | 'no';

      send_subscription_emails: boolean;

      send_invoice_emails: boolean;

      send_payment_emails: boolean;
    }
    // REQUEST PARAMS
    //---------------

    export interface CreateInputParam {
      id?: string;
      first_name?: string;
      last_name?: string;
      email?: string;
      preferred_currency_code?: string;
      phone?: string;
      company?: string;
      auto_collection?: AutoCollection;
      net_term_days?: number;
      allow_direct_debit?: boolean;
      vat_number?: string;
      vat_number_prefix?: string;
      entity_identifier_scheme?: string;
      entity_identifier_standard?: string;
      registered_for_gst?: boolean;
      is_einvoice_enabled?: boolean;
      einvoicing_method?: EinvoicingMethod;
      taxability?: Taxability;
      exemption_details?: any;
      customer_type?: CustomerType;
      client_profile_id?: string;
      taxjar_exemption_category?: TaxjarExemptionCategory;
      business_customer_without_vat_number?: boolean;
      locale?: string;
      entity_code?: EntityCode;
      exempt_number?: string;
      meta_data?: any;
      offline_payment_method?: OfflinePaymentMethod;
      auto_close_invoices?: boolean;
      consolidated_invoicing?: boolean;
      token_id?: string;
      business_entity_id?: string;
      /**
       * @deprecated Please refer API docs to use other attributes
       */

      created_from_ip?: string;
      invoice_notes?: string;
      card?: CardCreateInputParam;
      bank_account?: BankAccountCreateInputParam;
      payment_method?: PaymentMethodCreateInputParam;
      payment_intent?: PaymentIntentCreateInputParam;
      billing_address?: BillingAddressCreateInputParam;
      entity_identifiers?: EntityIdentifiersCreateInputParam[];
      tax_providers_fields?: TaxProvidersFieldsCreateInputParam[];
    }
    export interface ListInputParam {
      limit?: number;
      offset?: string;
      relationship?: RelationshipCustomerListInputParam;
      include_deleted?: boolean;
      id?: filter.String;
      first_name?: filter.String;
      last_name?: filter.String;
      email?: filter.String;
      company?: filter.String;
      phone?: filter.String;
      auto_collection?: filter.Enum;
      taxability?: filter.Enum;
      created_at?: filter.Timestamp;
      updated_at?: filter.Timestamp;
      offline_payment_method?: filter.Enum;
      auto_close_invoices?: filter.Boolean;
      channel?: filter.Enum;
      business_entity_id?: filter.String;
      'sort_by[asc]'?: string;
      'sort_by[desc]'?: string;
    }
    export interface UpdateInputParam {
      first_name?: string;
      last_name?: string;
      email?: string;
      preferred_currency_code?: string;
      phone?: string;
      company?: string;
      auto_collection?: AutoCollection;
      allow_direct_debit?: boolean;
      net_term_days?: number;
      taxability?: Taxability;
      exemption_details?: any;
      customer_type?: CustomerType;
      client_profile_id?: string;
      taxjar_exemption_category?: TaxjarExemptionCategory;
      locale?: string;
      entity_code?: EntityCode;
      exempt_number?: string;
      offline_payment_method?: OfflinePaymentMethod;
      invoice_notes?: string;
      auto_close_invoices?: boolean;
      meta_data?: any;
      fraud_flag?: 'safe' | 'fraudulent';
      consolidated_invoicing?: boolean;
      tax_providers_fields?: TaxProvidersFieldsUpdateInputParam[];
    }
    export interface UpdatePaymentMethodInputParam {
      payment_method?: PaymentMethodUpdatePaymentMethodInputParam;
    }
    export interface UpdateBillingInfoInputParam {
      vat_number?: string;
      vat_number_prefix?: string;
      entity_identifier_scheme?: string;
      entity_identifier_standard?: string;
      registered_for_gst?: boolean;
      business_customer_without_vat_number?: boolean;
      is_einvoice_enabled?: boolean;
      einvoicing_method?: EinvoicingMethod;
      billing_address?: BillingAddressUpdateBillingInfoInputParam;
      entity_identifiers?: EntityIdentifiersUpdateBillingInfoInputParam[];
      tax_providers_fields?: TaxProvidersFieldsUpdateBillingInfoInputParam[];
    }
    export interface ContactsForCustomerInputParam {
      limit?: number;
      offset?: string;
    }
    export interface AssignPaymentRoleInputParam {
      payment_source_id: string;
      role: Role;
    }
    export interface AddContactInputParam {
      contact?: ContactAddContactInputParam;
    }
    export interface UpdateContactInputParam {
      contact?: ContactUpdateContactInputParam;
    }
    export interface DeleteContactInputParam {
      contact?: ContactDeleteContactInputParam;
    }
    export interface AddPromotionalCreditsInputParam {
      amount: number;
      currency_code?: string;
      description: string;
      credit_type?: CreditType;
      reference?: string;
    }
    export interface DeductPromotionalCreditsInputParam {
      amount: number;
      currency_code?: string;
      description: string;
      credit_type?: CreditType;
      reference?: string;
    }
    export interface SetPromotionalCreditsInputParam {
      amount: number;
      currency_code?: string;
      description: string;
      credit_type?: CreditType;
      reference?: string;
    }
    export interface RecordExcessPaymentInputParam {
      comment?: string;
      transaction?: TransactionRecordExcessPaymentInputParam;
    }
    export interface CollectPaymentInputParam {
      amount?: number;
      payment_source_id?: string;
      token_id?: string;
      replace_primary_payment_source?: boolean;
      retain_payment_source?: boolean;
      payment_initiator?: PaymentInitiator;
      payment_method?: PaymentMethodCollectPaymentInputParam;
      card?: CardCollectPaymentInputParam;
      payment_intent?: PaymentIntentCollectPaymentInputParam;
      invoice_allocations?: InvoiceAllocationsCollectPaymentInputParam[];
    }
    export interface DeleteInputParam {
      delete_payment_method?: boolean;
    }
    export interface MoveInputParam {
      id_at_from_site: string;
      from_site: string;
      tax_providers_fields?: TaxProvidersFieldsMoveInputParam[];
    }
    export interface ChangeBillingDateInputParam {
      billing_date?: number;
      billing_month?: number;
      billing_date_mode?: BillingDateMode;
      billing_day_of_week?:
        | 'sunday'
        | 'monday'
        | 'tuesday'
        | 'wednesday'
        | 'thursday'
        | 'friday'
        | 'saturday';
      billing_day_of_week_mode?: BillingDayOfWeekMode;
    }
    export interface MergeInputParam {
      from_customer_id: string;
      to_customer_id: string;
      tax_providers_fields?: TaxProvidersFieldsMergeInputParam[];
    }
    export interface RelationshipsInputParam {
      parent_id?: string;
      payment_owner_id?: string;
      invoice_owner_id?: string;
      use_default_hierarchy_settings?: boolean;
      parent_account_access?: ParentAccountAccessRelationshipsInputParam;
      child_account_access?: ChildAccountAccessRelationshipsInputParam;
    }
    export interface HierarchyInputParam {
      hierarchy_operation_type:
        | 'complete_hierarchy'
        | 'subordinates'
        | 'path_to_root';
    }
    export interface UpdateHierarchySettingsInputParam {
      use_default_hierarchy_settings?: boolean;
      parent_account_access?: ParentAccountAccessUpdateHierarchySettingsInputParam;
      child_account_access?: ChildAccountAccessUpdateHierarchySettingsInputParam;
    }
    export interface BillingAddressCreateInputParam {
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

      zip?: string;

      country?: string;

      validation_status?: ValidationStatus;
    }
    export interface PaymentMethodCreateInputParam {
      type?: Type;

      /**
       * @deprecated Please refer API docs to use other attributes
       */

      gateway?: Gateway;

      gateway_account_id?: string;

      reference_id?: string;

      tmp_token?: string;

      issuing_country?: string;

      additional_information?: any;
    }
    export interface BankAccountCreateInputParam {
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

      issuing_country?: string;

      swedish_identity_number?: string;

      billing_address?: any;
    }
    export interface PaymentIntentCreateInputParam {
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

      additional_information?: any;
    }
    export interface CardCreateInputParam {
      /**
       * @deprecated Please refer API docs to use other attributes
       */

      gateway?: Gateway;

      gateway_account_id?: string;

      /**
       * @deprecated Please refer API docs to use other attributes
       */

      tmp_token?: string;

      first_name?: string;

      last_name?: string;

      number?: string;

      expiry_month?: number;

      expiry_year?: number;

      cvv?: string;

      billing_addr1?: string;

      billing_addr2?: string;

      billing_city?: string;

      billing_state_code?: string;

      billing_state?: string;

      billing_zip?: string;

      billing_country?: string;

      /**
       * @deprecated Please refer API docs to use other attributes
       */

      ip_address?: string;

      additional_information?: any;
    }

    export interface EntityIdentifiersCreateInputParam {
      id?: string;

      scheme?: string;

      value?: string;

      standard?: string;
    }
    export interface TaxProvidersFieldsCreateInputParam {
      provider_name?: string;

      field_id?: string;

      field_value?: string;
    }
    export interface RelationshipCustomerListInputParam {
      parent_id?: filter.String;

      payment_owner_id?: filter.String;

      invoice_owner_id?: filter.String;
    }

    export interface TaxProvidersFieldsUpdateInputParam {
      provider_name?: string;

      field_id?: string;

      field_value?: string;
    }
    export interface PaymentMethodUpdatePaymentMethodInputParam {
      type: Type;

      /**
       * @deprecated Please refer API docs to use other attributes
       */

      gateway?: Gateway;

      gateway_account_id?: string;

      reference_id?: string;

      tmp_token?: string;

      issuing_country?: string;

      additional_information?: any;
    }

    export interface BillingAddressUpdateBillingInfoInputParam {
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

      zip?: string;

      country?: string;

      validation_status?: ValidationStatus;
    }

    export interface EntityIdentifiersUpdateBillingInfoInputParam {
      id?: string;

      scheme?: string;

      value?: string;

      operation?: Operation;

      standard?: string;
    }
    export interface TaxProvidersFieldsUpdateBillingInfoInputParam {
      provider_name?: string;

      field_id?: string;

      field_value?: string;
    }
    export interface ContactAddContactInputParam {
      id?: string;

      first_name?: string;

      last_name?: string;

      email: string;

      phone?: string;

      label?: string;

      enabled?: boolean;

      send_billing_email?: boolean;

      send_account_email?: boolean;
    }

    export interface ContactUpdateContactInputParam {
      id: string;

      first_name?: string;

      last_name?: string;

      email?: string;

      phone?: string;

      label?: string;

      enabled?: boolean;

      send_billing_email?: boolean;

      send_account_email?: boolean;
    }

    export interface ContactDeleteContactInputParam {
      id: string;
    }

    export interface TransactionRecordExcessPaymentInputParam {
      amount: number;

      currency_code?: string;

      date: number;

      payment_method: PaymentMethod;

      reference_number?: string;

      custom_payment_method_id?: string;
    }

    export interface PaymentMethodCollectPaymentInputParam {
      type?: Type;

      gateway_account_id?: string;

      reference_id?: string;

      tmp_token?: string;

      additional_information?: any;
    }
    export interface PaymentIntentCollectPaymentInputParam {
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

      /**
       * @deprecated Please refer API docs to use other attributes
       */

      gw_payment_method_id?: string;

      reference_id?: string;

      additional_information?: any;
    }
    export interface CardCollectPaymentInputParam {
      gateway_account_id?: string;

      first_name?: string;

      last_name?: string;

      number?: string;

      expiry_month?: number;

      expiry_year?: number;

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

    export interface InvoiceAllocationsCollectPaymentInputParam {
      invoice_id: string;

      allocation_amount?: number;
    }
    export interface TaxProvidersFieldsMoveInputParam {
      provider_name?: string;

      field_id?: string;

      field_value?: string;
    }
    export interface TaxProvidersFieldsMergeInputParam {
      provider_name?: string;

      field_id?: string;

      field_value?: string;
    }
    export interface ParentAccountAccessRelationshipsInputParam {
      portal_edit_child_subscriptions?: 'yes' | 'view_only' | 'no';

      portal_download_child_invoices?: 'yes' | 'view_only' | 'no';

      send_subscription_emails?: boolean;

      send_payment_emails?: boolean;

      send_invoice_emails?: boolean;
    }
    export interface ChildAccountAccessRelationshipsInputParam {
      portal_edit_subscriptions?: 'yes' | 'view_only';

      portal_download_invoices?: 'yes' | 'view_only' | 'no';

      send_subscription_emails?: boolean;

      send_payment_emails?: boolean;

      send_invoice_emails?: boolean;
    }

    export interface ParentAccountAccessUpdateHierarchySettingsInputParam {
      portal_edit_child_subscriptions?: 'yes' | 'view_only' | 'no';

      portal_download_child_invoices?: 'yes' | 'view_only' | 'no';

      send_subscription_emails?: boolean;

      send_payment_emails?: boolean;

      send_invoice_emails?: boolean;
    }
    export interface ChildAccountAccessUpdateHierarchySettingsInputParam {
      portal_edit_subscriptions?: 'yes' | 'view_only';

      portal_download_invoices?: 'yes' | 'view_only' | 'no';

      send_subscription_emails?: boolean;

      send_payment_emails?: boolean;

      send_invoice_emails?: boolean;
    }
  }
}
