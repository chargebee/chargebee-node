///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface Customer {
    [key : string] : any;
    id:string;
    first_name?:string;
    last_name?:string;
    email?:string;
    phone?:string;
    company?:string;
    vat_number?:string;
    auto_collection:AutoCollection;
    offline_payment_method?:OfflinePaymentMethod;
    net_term_days:number;
    vat_number_validated_time?:number;
    vat_number_status?:'valid' | 'undetermined' | 'invalid' | 'not_validated';
    allow_direct_debit:boolean;
    is_location_valid?:boolean;
    created_at:number;
    created_from_ip?:string;
    exemption_details?:any[];
    taxability?:Taxability;
    entity_code?:EntityCode;
    exempt_number?:string;
    resource_version?:number;
    updated_at?:number;
    locale?:string;
    billing_date?:number;
    billing_month?:number;
    billing_date_mode?:BillingDateMode;
    billing_day_of_week?:'sunday' | 'saturday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'monday';
    billing_day_of_week_mode?:BillingDayOfWeekMode;
    pii_cleared?:'active' | 'scheduled_for_clear' | 'cleared';
    auto_close_invoices?:boolean;
    channel?:Channel;
    fraud_flag?:'safe' | 'suspicious' | 'fraudulent';
    primary_payment_source_id?:string;
    backup_payment_source_id?:string;
    invoice_notes?:string;
    business_entity_id?:string;
    preferred_currency_code?:string;
    promotional_credits:number;
    unbilled_charges:number;
    refundable_credits:number;
    excess_payments:number;
    is_einvoice_enabled?:boolean;
    einvoicing_method?:EinvoicingMethod;
    deleted:boolean;
    registered_for_gst?:boolean;
    consolidated_invoicing?:boolean;
    customer_type?:CustomerType;
    business_customer_without_vat_number?:boolean;
    client_profile_id?:string;
    use_default_hierarchy_settings?:boolean;
    vat_number_prefix?:string;
    entity_identifier_scheme?:string;
    entity_identifier_standard?:string;
    billing_address?:Customer.BillingAddress;
    referral_urls?:Customer.ReferralUrl[];
    contacts?:Customer.Contact[];
    payment_method?:Customer.PaymentMethod;
    balances?:Customer.CustomerBalance[];
    entity_identifiers?:Customer.EntityIdentifier[];
    relationship?:Customer.Relationship;
    parent_account_access?:Customer.ParentAccountAccess;
    child_account_access?:Customer.ChildAccountAccess;
  }
  export namespace Customer {
    export class CustomerResource {
      delete(customer_id:string, input?:DeleteInputParam):ChargebeeRequest<DeleteResponse>;
      relationships(customer_id:string, input?:RelationshipsInputParam):ChargebeeRequest<RelationshipsResponse>;
      delete_relationship(customer_id:string):ChargebeeRequest<DeleteRelationshipResponse>;
      delete_contact(customer_id:string, input?:DeleteContactInputParam):ChargebeeRequest<DeleteContactResponse>;
      assign_payment_role(customer_id:string, input:AssignPaymentRoleInputParam):ChargebeeRequest<AssignPaymentRoleResponse>;
      move(input:MoveInputParam):ChargebeeRequest<MoveResponse>;
      hierarchy(customer_id:string, input:HierarchyInputParam):ChargebeeRequest<HierarchyResponse>;
      update_payment_method(customer_id:string, input?:UpdatePaymentMethodInputParam):ChargebeeRequest<UpdatePaymentMethodResponse>;
      retrieve(customer_id:string):ChargebeeRequest<RetrieveResponse>;
      update(customer_id:string, input?:UpdateInputParam):ChargebeeRequest<UpdateResponse>;
      change_billing_date(customer_id:string, input?:ChangeBillingDateInputParam):ChargebeeRequest<ChangeBillingDateResponse>;
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
      create(input?:CreateInputParam):ChargebeeRequest<CreateResponse>;
      add_contact(customer_id:string, input?:AddContactInputParam):ChargebeeRequest<AddContactResponse>;
      contacts_for_customer(customer_id:string, input?:ContactsForCustomerInputParam):ChargebeeRequest<ContactsForCustomerResponse>;
      clear_personal_data(customer_id:string):ChargebeeRequest<ClearPersonalDataResponse>;
      merge(input:MergeInputParam):ChargebeeRequest<MergeResponse>;
      collect_payment(customer_id:string, input?:CollectPaymentInputParam):ChargebeeRequest<CollectPaymentResponse>;
      record_excess_payment(customer_id:string, input?:RecordExcessPaymentInputParam):ChargebeeRequest<RecordExcessPaymentResponse>;
      update_contact(customer_id:string, input?:UpdateContactInputParam):ChargebeeRequest<UpdateContactResponse>;
      update_hierarchy_settings(customer_id:string, input?:UpdateHierarchySettingsInputParam):ChargebeeRequest<UpdateHierarchySettingsResponse>;
      update_billing_info(customer_id:string, input?:UpdateBillingInfoInputParam):ChargebeeRequest<UpdateBillingInfoResponse>;
    }
    export interface DeleteResponse {
      customer:Customer;
      card?:Card;
    }
    export interface DeleteInputParam {
      
      delete_payment_method?:boolean;
    }
    export interface RelationshipsResponse {
      customer:Customer;
    }
    export interface RelationshipsInputParam {
      
      parent_id?:string;
      payment_owner_id?:string;
      invoice_owner_id?:string;
      use_default_hierarchy_settings?:boolean;
      parent_account_access?:{portal_download_child_invoices?:'no' | 'yes' | 'view_only',portal_edit_child_subscriptions?:'no' | 'yes' | 'view_only',send_invoice_emails?:boolean,send_payment_emails?:boolean,send_subscription_emails?:boolean};
      child_account_access?:{portal_download_invoices?:'no' | 'yes' | 'view_only',portal_edit_subscriptions?:'yes' | 'view_only',send_invoice_emails?:boolean,send_payment_emails?:boolean,send_subscription_emails?:boolean};
    }
    export interface DeleteRelationshipResponse {
      customer:Customer;
    }
    
    export interface DeleteContactResponse {
      customer:Customer;
      card?:Card;
    }
    export interface DeleteContactInputParam {
      
      contact?:{id:string};
    }
    export interface AssignPaymentRoleResponse {
      customer:Customer;
      payment_source:PaymentSource;
    }
    export interface AssignPaymentRoleInputParam {
      
      payment_source_id:string;
      role:Role;
    }
    export interface MoveResponse {
      resource_migration:ResourceMigration;
    }
    export interface MoveInputParam {
      
      id_at_from_site:string;
      from_site:string;
    }
    export interface HierarchyResponse {
      hierarchies:Hierarchy[];
    }
    export interface HierarchyInputParam {
      
      hierarchy_operation_type:'complete_hierarchy' | 'subordinates' | 'path_to_root';
    }
    export interface UpdatePaymentMethodResponse {
      customer:Customer;
      card?:Card;
    }
    export interface UpdatePaymentMethodInputParam {
      
      payment_method?:{additional_information?:object,gateway_account_id?:string,issuing_country?:string,reference_id?:string,tmp_token?:string,type:Type};
    }
    export interface RetrieveResponse {
      customer:Customer;
      card?:Card;
    }
    
    export interface UpdateResponse {
      customer:Customer;
      card?:Card;
    }
    export interface UpdateInputParam {
      [key : string] : any;
      first_name?:string;
      last_name?:string;
      email?:string;
      preferred_currency_code?:string;
      phone?:string;
      company?:string;
      auto_collection?:AutoCollection;
      allow_direct_debit?:boolean;
      net_term_days?:number;
      taxability?:Taxability;
      exemption_details?:any[];
      customer_type?:CustomerType;
      client_profile_id?:string;
      taxjar_exemption_category?:TaxjarExemptionCategory;
      locale?:string;
      entity_code?:EntityCode;
      exempt_number?:string;
      offline_payment_method?:OfflinePaymentMethod;
      invoice_notes?:string;
      auto_close_invoices?:boolean;
      meta_data?:object;
      fraud_flag?:'safe' | 'fraudulent';
      consolidated_invoicing?:boolean;
    }
    export interface ChangeBillingDateResponse {
      customer:Customer;
    }
    export interface ChangeBillingDateInputParam {
      
      billing_date?:number;
      billing_month?:number;
      billing_date_mode?:BillingDateMode;
      billing_day_of_week?:'sunday' | 'saturday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'monday';
      billing_day_of_week_mode?:BillingDayOfWeekMode;
    }
    export interface ListResponse {
      list:{customer:Customer,card?:Card}[];
      next_offset?:string;
    }
    export interface ListInputParam {
      [key: string]: string | number | object | boolean;
      limit?:number;
      offset?:string;
      include_deleted?:boolean;
      id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
      first_name?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string};
      last_name?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string};
      email?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string};
      company?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string};
      phone?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string};
      auto_collection?:{in?:string,is?:'off' | 'on',is_not?:'off' | 'on',not_in?:string};
      taxability?:{in?:string,is?:'taxable' | 'exempt',is_not?:'taxable' | 'exempt',not_in?:string};
      created_at?:{after?:string,before?:string,between?:string,on?:string};
      updated_at?:{after?:string,before?:string,between?:string,on?:string};
      business_entity_id?:{is?:string,is_not?:string,starts_with?:string};
      offline_payment_method?:{in?:string,is?:'bank_transfer' | 'no_preference' | 'ach_credit' | 'boleto' | 'check' | 'sepa_credit' | 'cash',is_not?:'bank_transfer' | 'no_preference' | 'ach_credit' | 'boleto' | 'check' | 'sepa_credit' | 'cash',not_in?:string};
      auto_close_invoices?:{is?:'true' | 'false'};
      channel?:{in?:string,is?:'app_store' | 'web' | 'play_store',is_not?:'app_store' | 'web' | 'play_store',not_in?:string};
      sort_by?:{asc?:'updated_at' | 'created_at',desc?:'updated_at' | 'created_at'};
      relationship?:{invoice_owner_id?:{is?:string,is_not?:string,starts_with?:string},parent_id?:{is?:string,is_not?:string,starts_with?:string},payment_owner_id?:{is?:string,is_not?:string,starts_with?:string}};
    }
    export interface CreateResponse {
      customer:Customer;
      card?:Card;
    }
    export interface CreateInputParam {
      [key : string] : any;
      id?:string;
      first_name?:string;
      last_name?:string;
      email?:string;
      preferred_currency_code?:string;
      phone?:string;
      company?:string;
      auto_collection?:AutoCollection;
      net_term_days?:number;
      allow_direct_debit?:boolean;
      vat_number?:string;
      vat_number_prefix?:string;
      entity_identifier_scheme?:string;
      entity_identifier_standard?:string;
      registered_for_gst?:boolean;
      is_einvoice_enabled?:boolean;
      einvoicing_method?:EinvoicingMethod;
      taxability?:Taxability;
      exemption_details?:any[];
      customer_type?:CustomerType;
      client_profile_id?:string;
      taxjar_exemption_category?:TaxjarExemptionCategory;
      business_customer_without_vat_number?:boolean;
      locale?:string;
      entity_code?:EntityCode;
      exempt_number?:string;
      meta_data?:object;
      offline_payment_method?:OfflinePaymentMethod;
      auto_close_invoices?:boolean;
      consolidated_invoicing?:boolean;
      token_id?:string;
      business_entity_id?:string;
      invoice_notes?:string;
      card?:{additional_information?:object,billing_addr1?:string,billing_addr2?:string,billing_city?:string,billing_country?:string,billing_state?:string,billing_state_code?:string,billing_zip?:string,cvv?:string,expiry_month?:number,expiry_year?:number,first_name?:string,gateway_account_id?:string,last_name?:string,number?:string};
      bank_account?:{account_holder_type?:AccountHolderType,account_number?:string,account_type?:AccountType,bank_code?:string,bank_name?:string,billing_address?:object,company?:string,echeck_type?:EcheckType,email?:string,first_name?:string,gateway_account_id?:string,iban?:string,issuing_country?:string,last_name?:string,phone?:string,routing_number?:string,swedish_identity_number?:string};
      payment_method?:{additional_information?:object,gateway_account_id?:string,issuing_country?:string,reference_id?:string,tmp_token?:string,type?:Type};
      payment_intent?:{additional_information?:object,gateway_account_id?:string,gw_token?:string,id?:string,payment_method_type?:'giropay' | 'ideal' | 'google_pay' | 'netbanking_emandates' | 'dotpay' | 'boleto' | 'direct_debit' | 'sofort' | 'upi' | 'apple_pay' | 'bancontact' | 'paypal_express_checkout' | 'card',reference_id?:string};
      billing_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
      entity_identifiers?:{id?:string,scheme?:string,standard?:string,value?:string}[];
    }
    export interface AddContactResponse {
      customer:Customer;
      card?:Card;
    }
    export interface AddContactInputParam {
      
      contact?:{email:string,enabled?:boolean,first_name?:string,id?:string,label?:string,last_name?:string,phone?:string,send_account_email?:boolean,send_billing_email?:boolean};
    }
    export interface ContactsForCustomerResponse {
      list:{contact:Contact}[];
      next_offset?:string;
    }
    export interface ContactsForCustomerInputParam {
      [key: string]: string | number | object | boolean;
      limit?:number;
      offset?:string;
    }
    export interface ClearPersonalDataResponse {
      customer:Customer;
    }
    
    export interface MergeResponse {
      customer:Customer;
    }
    export interface MergeInputParam {
      
      from_customer_id:string;
      to_customer_id:string;
    }
    export interface CollectPaymentResponse {
      customer:Customer;
      transaction:Transaction;
    }
    export interface CollectPaymentInputParam {
      
      amount?:number;
      payment_source_id?:string;
      token_id?:string;
      replace_primary_payment_source?:boolean;
      retain_payment_source?:boolean;
      payment_initiator?:'merchant' | 'customer';
      payment_method?:{additional_information?:object,gateway_account_id?:string,reference_id?:string,tmp_token?:string,type?:Type};
      card?:{additional_information?:object,billing_addr1?:string,billing_addr2?:string,billing_city?:string,billing_country?:string,billing_state?:string,billing_state_code?:string,billing_zip?:string,cvv?:string,expiry_month?:number,expiry_year?:number,first_name?:string,gateway_account_id?:string,last_name?:string,number?:string};
      payment_intent?:{additional_information?:object,gateway_account_id?:string,gw_token?:string,id?:string,payment_method_type?:'giropay' | 'ideal' | 'google_pay' | 'netbanking_emandates' | 'dotpay' | 'boleto' | 'direct_debit' | 'sofort' | 'upi' | 'apple_pay' | 'bancontact' | 'paypal_express_checkout' | 'card',reference_id?:string};
      invoice_allocations?:{allocation_amount?:number,invoice_id:string}[];
    }
    export interface RecordExcessPaymentResponse {
      customer:Customer;
      transaction:Transaction;
    }
    export interface RecordExcessPaymentInputParam {
      
      comment?:string;
      transaction?:{amount:number,currency_code?:string,date:number,payment_method:PaymentMethod,reference_number?:string};
    }
    export interface UpdateContactResponse {
      customer:Customer;
      card?:Card;
    }
    export interface UpdateContactInputParam {
      
      contact?:{email?:string,enabled?:boolean,first_name?:string,id:string,label?:string,last_name?:string,phone?:string,send_account_email?:boolean,send_billing_email?:boolean};
    }
    export interface UpdateHierarchySettingsResponse {
      customer:Customer;
    }
    export interface UpdateHierarchySettingsInputParam {
      
      use_default_hierarchy_settings?:boolean;
      parent_account_access?:{portal_download_child_invoices?:'no' | 'yes' | 'view_only',portal_edit_child_subscriptions?:'no' | 'yes' | 'view_only',send_invoice_emails?:boolean,send_payment_emails?:boolean,send_subscription_emails?:boolean};
      child_account_access?:{portal_download_invoices?:'no' | 'yes' | 'view_only',portal_edit_subscriptions?:'yes' | 'view_only',send_invoice_emails?:boolean,send_payment_emails?:boolean,send_subscription_emails?:boolean};
    }
    export interface UpdateBillingInfoResponse {
      customer:Customer;
      card?:Card;
    }
    export interface UpdateBillingInfoInputParam {
      
      vat_number?:string;
      vat_number_prefix?:string;
      entity_identifier_scheme?:string;
      entity_identifier_standard?:string;
      registered_for_gst?:boolean;
      business_customer_without_vat_number?:boolean;
      is_einvoice_enabled?:boolean;
      einvoicing_method?:EinvoicingMethod;
      billing_address?:{city?:string,company?:string,country?:string,email?:string,first_name?:string,last_name?:string,line1?:string,line2?:string,line3?:string,phone?:string,state?:string,state_code?:string,validation_status?:ValidationStatus,zip?:string};
      entity_identifiers?:{id?:string,operation?:Operation,scheme?:string,standard?:string,value?:string}[];
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
    export interface ReferralUrl {
      external_customer_id?:string;
      referral_sharing_url?:string;
      created_at?:number;
      updated_at?:number;
      referral_campaign_id?:string;
      referral_account_id?:string;
      referral_external_campaign_id?:string;
      referral_system?:'referral_candy' | 'friendbuy' | 'referral_saasquatch';
    }
    export interface Contact {
      id?:string;
      first_name?:string;
      last_name?:string;
      email?:string;
      phone?:string;
      label?:string;
      enabled?:boolean;
      send_account_email?:boolean;
      send_billing_email?:boolean;
    }
    export interface PaymentMethod {
      type?:Type;
      gateway?:Gateway;
      gateway_account_id?:string;
      status?:'valid' | 'expiring' | 'expired' | 'invalid' | 'pending_verification';
      reference_id?:string;
    }
    export interface CustomerBalance {
      promotional_credits?:number;
      excess_payments?:number;
      refundable_credits?:number;
      unbilled_charges?:number;
      currency_code?:string;
    }
    export interface EntityIdentifier {
      id?:string;
      value?:string;
      scheme?:string;
      standard?:string;
    }
    export interface Relationship {
      parent_id?:string;
      payment_owner_id?:string;
      invoice_owner_id?:string;
    }
    export interface ParentAccountAccess {
      portal_edit_child_subscriptions?:'no' | 'yes' | 'view_only';
      portal_download_child_invoices?:'no' | 'yes' | 'view_only';
      send_subscription_emails?:boolean;
      send_invoice_emails?:boolean;
      send_payment_emails?:boolean;
    }
    export interface ChildAccountAccess {
      portal_edit_subscriptions?:'yes' | 'view_only';
      portal_download_invoices?:'no' | 'yes' | 'view_only';
      send_subscription_emails?:boolean;
      send_invoice_emails?:boolean;
      send_payment_emails?:boolean;
    }
  }
}