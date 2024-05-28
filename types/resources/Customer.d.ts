///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface Customer {
    [key : string] : any;
    /**
      * @description Identifier of the customer.

      */
    
    id:string;
    
    /**
      * @description First name of the customer

      */
    
    first_name?:string;
    
    /**
      * @description Last name of the customer

      */
    
    last_name?:string;
    
    /**
      * @description Email of the customer. Configured email notifications will be sent to this email.

      */
    
    email?:string;
    
    phone?:string;
    
    company?:string;
    
    vat_number?:string;
    
    auto_collection:AutoCollection;
    
    offline_payment_method?:OfflinePaymentMethod;
    
    net_term_days:number;
    
    vat_number_validated_time?:number;
    
    vat_number_status?:'valid' | 'invalid' | 'not_validated' | 'undetermined';
    
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
    
    billing_day_of_week?:'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday';
    
    billing_day_of_week_mode?:BillingDayOfWeekMode;
    
    pii_cleared?:'active' | 'scheduled_for_clear' | 'cleared';
    
    auto_close_invoices?:boolean;
    
    channel?:Channel;
    
    active_id?:string;
    
    card_status?:'no_card' | 'valid' | 'expiring' | 'expired' | 'pending_verification' | 'invalid';
    
    fraud_flag?:'safe' | 'suspicious' | 'fraudulent';
    
    primary_payment_source_id?:string;
    
    backup_payment_source_id?:string;
    
    billing_address?:Customer.BillingAddress;
    
    referral_urls?:Customer.ReferralUrl[];
    
    contacts?:Customer.Contact[];
    
    payment_method?:Customer.PaymentMethod;
    
    invoice_notes?:string;
    
    business_entity_id?:string;
    
    preferred_currency_code?:string;
    
    promotional_credits:number;
    
    unbilled_charges:number;
    
    refundable_credits:number;
    
    excess_payments:number;
    
    balances?:Customer.CustomerBalance[];
    
    entity_identifiers?:Customer.EntityIdentifier[];
    
    tax_providers_fields?:Customer.TaxProvidersField[];
    
    is_einvoice_enabled?:boolean;
    
    einvoicing_method?:EinvoicingMethod;
    
    meta_data?:object;
    
    deleted:boolean;
    
    registered_for_gst?:boolean;
    
    consolidated_invoicing?:boolean;
    
    customer_type?:CustomerType;
    
    business_customer_without_vat_number?:boolean;
    
    client_profile_id?:string;
    
    relationship?:Customer.Relationship;
    
    use_default_hierarchy_settings?:boolean;
    
    parent_account_access?:Customer.ParentAccountAccess;
    
    child_account_access?:Customer.ChildAccountAccess;
    
    vat_number_prefix?:string;
    
    entity_identifier_scheme?:string;
    
    entity_identifier_standard?:string;
  }
  export namespace Customer {
    export class CustomerResource {  
      create(input?:CreateInputParam):ChargebeeRequest<CreateResponse>;
       
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
       
      retrieve(customer_id:string):ChargebeeRequest<RetrieveResponse>;
       
      update(customer_id:string, input?:UpdateInputParam):ChargebeeRequest<UpdateResponse>;
       
      update_payment_method(customer_id:string, input:UpdatePaymentMethodInputParam):ChargebeeRequest<UpdatePaymentMethodResponse>;
       
      update_billing_info(customer_id:string, input?:UpdateBillingInfoInputParam):ChargebeeRequest<UpdateBillingInfoResponse>;
       
      contacts_for_customer(customer_id:string, input?:ContactsForCustomerInputParam):ChargebeeRequest<ContactsForCustomerResponse>;
       
      assign_payment_role(customer_id:string, input:AssignPaymentRoleInputParam):ChargebeeRequest<AssignPaymentRoleResponse>;
       
      add_contact(customer_id:string, input:AddContactInputParam):ChargebeeRequest<AddContactResponse>;
       
      update_contact(customer_id:string, input:UpdateContactInputParam):ChargebeeRequest<UpdateContactResponse>;
       
      delete_contact(customer_id:string, input:DeleteContactInputParam):ChargebeeRequest<DeleteContactResponse>;
       
      add_promotional_credits(customer_id:string, input:AddPromotionalCreditsInputParam):ChargebeeRequest<AddPromotionalCreditsResponse>;
       
      deduct_promotional_credits(customer_id:string, input:DeductPromotionalCreditsInputParam):ChargebeeRequest<DeductPromotionalCreditsResponse>;
       
      set_promotional_credits(customer_id:string, input:SetPromotionalCreditsInputParam):ChargebeeRequest<SetPromotionalCreditsResponse>;
       
      record_excess_payment(customer_id:string, input:RecordExcessPaymentInputParam):ChargebeeRequest<RecordExcessPaymentResponse>;
       
      collect_payment(customer_id:string, input:CollectPaymentInputParam):ChargebeeRequest<CollectPaymentResponse>;
       
      delete(customer_id:string, input?:DeleteInputParam):ChargebeeRequest<DeleteResponse>;
       
      move(input:MoveInputParam):ChargebeeRequest<MoveResponse>;
       
      change_billing_date(customer_id:string, input?:ChangeBillingDateInputParam):ChargebeeRequest<ChangeBillingDateResponse>;
       
      merge(input:MergeInputParam):ChargebeeRequest<MergeResponse>;
       
      clear_personal_data(customer_id:string):ChargebeeRequest<ClearPersonalDataResponse>;
       
      relationships(customer_id:string, input?:RelationshipsInputParam):ChargebeeRequest<RelationshipsResponse>;
       
      delete_relationship(customer_id:string):ChargebeeRequest<DeleteRelationshipResponse>;
       
      hierarchy(customer_id:string, input:HierarchyInputParam):ChargebeeRequest<HierarchyResponse>;
       
      update_hierarchy_settings(customer_id:string, input?:UpdateHierarchySettingsInputParam):ChargebeeRequest<UpdateHierarchySettingsResponse>;
    }
    export interface CreateResponse {  
       customer:Customer;
       
       card?:Card;
    }
    export interface CreateInputParam {
      [key : string] : any;  
      card?:null.null;
       
      bank_account?:null.null;
       
      payment_method?:null.null;
       
      payment_intent?:null.null;
       
      billing_address?:null.null;
       
      entity_identifiers?:{id?:string,scheme?:string,standard?:string,value?:string}[];
       
      tax_providers_fields?:{field_id?:string,field_value?:string,provider_name?:string}[];
       
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
       
      created_from_ip?:string;
       
      invoice_notes?:string;
    }
    export interface ListResponse {  
       list:{customer:Customer,card?:Card}[];
       
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
       
      /**
        * @description Parameters for relationship

        */
        
      relationship?:{invoice_owner_id?:null.null,parent_id?:null.null,payment_owner_id?:null.null};
       
      /**
        * @description Indicates whether to include deleted objects in the list. The deleted objects have the attribute \&#x60;deleted\&#x60; as \&#x60;true\&#x60;.

        */
        
      include_deleted?:boolean;
       
      include_deprecated?:boolean;
       
      /**
        * @description Identifier of the customer.

        */
        
      id?:{in?:string,is?:string,is_not?:string,not_in?:string,starts_with?:string};
       
      /**
        * @description First name of the customer

        */
        
      first_name?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string};
       
      /**
        * @description Last name of the customer

        */
        
      last_name?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string};
       
      /**
        * @description Email of the customer. Configured email notifications will be sent to this email.

        */
        
      email?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string};
       
      /**
        * @description Company name of the customer.

        */
        
      company?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string};
       
      /**
        * @description Phone number of the customer

        */
        
      phone?:{is?:string,is_not?:string,is_present?:'true' | 'false',starts_with?:string};
       
      /**
        * @description Whether payments needs to be collected automatically for this customer

        */
        
      auto_collection?:{in?:string,is?:'on' | 'off',is_not?:'on' | 'off',not_in?:string};
       
      /**
        * @description Specifies if the customer is liable for tax

        */
        
      taxability?:{in?:string,is?:'taxable' | 'exempt',is_not?:'taxable' | 'exempt',not_in?:string};
       
      /**
        * @description Timestamp indicating when this customer resource is created.

        */
        
      created_at?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description To filter based on &#x60;updated_at&#x60;. This attribute will be present only if the resource has been updated after 2016-09-28. It is advisable when using this filter, to pass the &#x60;sort_by&#x60; input parameter as &#x60;updated_at&#x60; for a faster response.

        */
        
      updated_at?:{after?:string,before?:string,between?:string,on?:string};
       
      /**
        * @description The unique ID of the [business entity](/docs/api?prod_cat_ver&#x3D;2#mbe) of this subscription. This is always the same as the [business entity](/docs/api/subscriptions?prod_cat_ver&#x3D;2#subscription_customer_id) of the customer.  
The ID of the business entity created for the site. For Product Catalog 1.0, all the site data is tied to this business entity.  
**Note**

[Multiple Business Entities](/docs/api?prod_cat_ver&#x3D;2#mbe) is a feature available only on Product Catalog 2.0.

        */
        
      business_entity_id?:{is?:string,is_not?:string,starts_with?:string};
       
      /**
        * @description The preferred offline payment method for the customer.

        */
        
      offline_payment_method?:{in?:string,is?:'no_preference' | 'cash' | 'check' | 'bank_transfer' | 'ach_credit' | 'sepa_credit' | 'boleto' | 'us_automated_bank_transfer' | 'eu_automated_bank_transfer' | 'uk_automated_bank_transfer' | 'jp_automated_bank_transfer' | 'mx_automated_bank_transfer' | 'custom',is_not?:'no_preference' | 'cash' | 'check' | 'bank_transfer' | 'ach_credit' | 'sepa_credit' | 'boleto' | 'us_automated_bank_transfer' | 'eu_automated_bank_transfer' | 'uk_automated_bank_transfer' | 'jp_automated_bank_transfer' | 'mx_automated_bank_transfer' | 'custom',not_in?:string};
       
      /**
        * @description Override for this customer, the [site-level setting](https://www.chargebee.com/docs/2.0/metered_billing.html#configuring-metered-billing) for auto-closing invoices. Only applicable when auto-closing invoices has been enabled for the site. This attribute is also available at the [subscription level](/docs/api/subscriptions?prod_cat_ver&#x3D;2#subscription_auto_close_invoices) which takes precedence.

        */
        
      auto_close_invoices?:{is?:'true' | 'false'};
       
      /**
        * @description The subscription channel this object originated from and is maintained in.

        */
        
      channel?:{in?:string,is?:'web' | 'app_store' | 'play_store',is_not?:'web' | 'app_store' | 'play_store',not_in?:string};
       
      sort_by?:{asc?:'created_at' | 'updated_at',desc?:'created_at' | 'updated_at'};
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
      tax_providers_fields?:{field_id?:string,field_value?:string,provider_name?:string}[];
       
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
    export interface UpdatePaymentMethodResponse {  
       customer:Customer;
       
       card?:Card;
    }
    export interface UpdatePaymentMethodInputParam {
       
      payment_method:null.null;
    }
    export interface UpdateBillingInfoResponse {  
       customer:Customer;
       
       card?:Card;
    }
    export interface UpdateBillingInfoInputParam {
       
      billing_address?:null.null;
       
      entity_identifiers?:{id?:string,operation?:Operation,scheme?:string,standard?:string,value?:string}[];
       
      tax_providers_fields?:{field_id?:string,field_value?:string,provider_name?:string}[];
       
      vat_number?:string;
       
      vat_number_prefix?:string;
       
      entity_identifier_scheme?:string;
       
      entity_identifier_standard?:string;
       
      registered_for_gst?:boolean;
       
      business_customer_without_vat_number?:boolean;
       
      is_einvoice_enabled?:boolean;
       
      einvoicing_method?:EinvoicingMethod;
    }
    export interface ContactsForCustomerResponse {  
       list:{contact:Contact}[];
       
       next_offset?:string;
    }
    export interface ContactsForCustomerInputParam {
      [key : string]: any;  
      /**
        * @description The number of resources to be returned.

        */
        
      limit?:number;
       
      /**
        * @description Determines your position in the list for pagination. To ensure that the next page is retrieved correctly, always set \&#x60;offset\&#x60; to the value of \&#x60;next_offset\&#x60; obtained in the previous iteration of the API call.

        */
        
      offset?:string;
    }
    export interface AssignPaymentRoleResponse {  
       customer:Customer;
       
       payment_source:PaymentSource;
    }
    export interface AssignPaymentRoleInputParam {
       
      payment_source_id:string;
       
      role:Role;
    }
    export interface AddContactResponse {  
       customer:Customer;
       
       card?:Card;
    }
    export interface AddContactInputParam {
       
      contact:null.null;
    }
    export interface UpdateContactResponse {  
       customer:Customer;
       
       card?:Card;
    }
    export interface UpdateContactInputParam {
       
      contact:null.null;
    }
    export interface DeleteContactResponse {  
       customer:Customer;
       
       card?:Card;
    }
    export interface DeleteContactInputParam {
       
      contact:null.null;
    }
    export interface AddPromotionalCreditsResponse {  
       customer:Customer;
    }
    export interface AddPromotionalCreditsInputParam {
       
      amount:number;
       
      currency_code?:string;
       
      description:string;
       
      credit_type?:CreditType;
       
      reference?:string;
    }
    export interface DeductPromotionalCreditsResponse {  
       customer:Customer;
    }
    export interface DeductPromotionalCreditsInputParam {
       
      amount:number;
       
      currency_code?:string;
       
      description:string;
       
      credit_type?:CreditType;
       
      reference?:string;
    }
    export interface SetPromotionalCreditsResponse {  
       customer:Customer;
    }
    export interface SetPromotionalCreditsInputParam {
       
      amount:number;
       
      currency_code?:string;
       
      description:string;
       
      credit_type?:CreditType;
       
      reference?:string;
    }
    export interface RecordExcessPaymentResponse {  
       customer:Customer;
       
       transaction:Transaction;
    }
    export interface RecordExcessPaymentInputParam {
       
      transaction:null.null;
       
      comment?:string;
    }
    export interface CollectPaymentResponse {  
       customer:Customer;
       
       transaction:Transaction;
    }
    export interface CollectPaymentInputParam {
       
      payment_method?:null.null;
       
      card?:null.null;
       
      payment_intent?:null.null;
       
      invoice_allocations:{allocation_amount?:number,invoice_id:string}[];
       
      amount?:number;
       
      payment_source_id?:string;
       
      token_id?:string;
       
      replace_primary_payment_source?:boolean;
       
      retain_payment_source?:boolean;
       
      payment_initiator?:PaymentInitiator;
    }
    export interface DeleteResponse {  
       customer:Customer;
       
       card?:Card;
    }
    export interface DeleteInputParam {
       
      delete_payment_method?:boolean;
    }
    export interface MoveResponse {  
       resource_migration:ResourceMigration;
    }
    export interface MoveInputParam {
       
      tax_providers_fields?:{field_id?:string,field_value?:string,provider_name?:string}[];
       
      id_at_from_site:string;
       
      from_site:string;
    }
    export interface ChangeBillingDateResponse {  
       customer:Customer;
    }
    export interface ChangeBillingDateInputParam {
       
      billing_date?:number;
       
      billing_month?:number;
       
      billing_date_mode?:BillingDateMode;
       
      billing_day_of_week?:'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday';
       
      billing_day_of_week_mode?:BillingDayOfWeekMode;
    }
    export interface MergeResponse {  
       customer:Customer;
    }
    export interface MergeInputParam {
       
      tax_providers_fields?:{field_id?:string,field_value?:string,provider_name?:string}[];
       
      from_customer_id:string;
       
      to_customer_id:string;
    }
    export interface ClearPersonalDataResponse {  
       customer:Customer;
    }
    
    export interface RelationshipsResponse {  
       customer:Customer;
    }
    export interface RelationshipsInputParam {
       
      parent_account_access?:null.null;
       
      child_account_access?:null.null;
       
      parent_id?:string;
       
      payment_owner_id?:string;
       
      invoice_owner_id?:string;
       
      use_default_hierarchy_settings?:boolean;
    }
    export interface DeleteRelationshipResponse {  
       customer:Customer;
    }
    
    export interface HierarchyResponse {  
       hierarchies:Hierarchy[];
    }
    export interface HierarchyInputParam {
       
      hierarchy_operation_type:'complete_hierarchy' | 'subordinates' | 'path_to_root';
    }
    export interface UpdateHierarchySettingsResponse {  
       customer:Customer;
    }
    export interface UpdateHierarchySettingsInputParam {
       
      parent_account_access?:null.null;
       
      child_account_access?:null.null;
       
      use_default_hierarchy_settings?:boolean;
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
       
      referral_sharing_url:string;
       
      created_at:number;
       
      updated_at:number;
       
      referral_campaign_id:string;
       
      referral_account_id:string;
       
      referral_external_campaign_id?:string;
       
      referral_system:'referral_candy' | 'referral_saasquatch' | 'friendbuy';
    }
    export interface Contact {  
      id:string;
       
      first_name?:string;
       
      last_name?:string;
       
      email:string;
       
      phone?:string;
       
      label?:string;
       
      enabled:boolean;
       
      send_account_email:boolean;
       
      send_billing_email:boolean;
    }
    export interface PaymentMethod {  
      type:Type;
       
      gateway:Gateway;
       
      gateway_account_id?:string;
       
      status:'valid' | 'expiring' | 'expired' | 'invalid' | 'pending_verification';
       
      reference_id:string;
    }
    export interface Balance {  
      promotional_credits:number;
       
      excess_payments:number;
       
      refundable_credits:number;
       
      unbilled_charges:number;
       
      currency_code:string;
       
      balance_currency_code:string;
    }
    export interface EntityIdentifier {  
      id:string;
       
      value?:string;
       
      scheme:string;
       
      standard?:string;
    }
    export interface TaxProvidersField {  
      provider_name:string;
       
      field_id:string;
       
      field_value:string;
    }
    export interface Relationship {  
      parent_id?:string;
       
      payment_owner_id:string;
       
      invoice_owner_id:string;
    }
    export interface ParentAccountAccess {  
      portal_edit_child_subscriptions?:'yes' | 'view_only' | 'no';
       
      portal_download_child_invoices?:'yes' | 'view_only' | 'no';
       
      send_subscription_emails:boolean;
       
      send_invoice_emails:boolean;
       
      send_payment_emails:boolean;
    }
    export interface ChildAccountAccess {  
      portal_edit_subscriptions?:'yes' | 'view_only';
       
      portal_download_invoices?:'yes' | 'view_only' | 'no';
       
      send_subscription_emails:boolean;
       
      send_invoice_emails:boolean;
       
      send_payment_emails:boolean;
    }
  }
}