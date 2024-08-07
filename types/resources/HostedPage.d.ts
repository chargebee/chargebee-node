///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface HostedPage {
    id?: string;

    type?:
      | 'checkout_new'
      | 'checkout_existing'
      | 'update_payment_method'
      | 'manage_payment_sources'
      | 'collect_now'
      | 'extend_subscription'
      | 'checkout_one_time'
      | 'pre_cancel'
      | 'view_voucher'
      | 'checkout_gift'
      | 'claim_gift';

    url?: string;

    state?:
      | 'created'
      | 'requested'
      | 'succeeded'
      | 'cancelled'
      | 'acknowledged';

    failure_reason?: 'card_error' | 'server_error';

    pass_thru_content?: string;

    embed: boolean;

    created_at?: number;

    expires_at?: number;

    updated_at?: number;

    resource_version?: number;

    checkout_info?: any;

    business_entity_id?: string;
  }
  export namespace HostedPage {
    export class HostedPageResource {
      checkout_new(
        input: CheckoutNewInputParam,
      ): ChargebeeRequest<ChargebeeResponse<CheckoutNewResponse>>;

      checkout_one_time(
        input?: CheckoutOneTimeInputParam,
      ): ChargebeeRequest<ChargebeeResponse<CheckoutOneTimeResponse>>;

      checkout_one_time_for_items(
        input: CheckoutOneTimeForItemsInputParam,
      ): ChargebeeRequest<ChargebeeResponse<CheckoutOneTimeForItemsResponse>>;

      checkout_new_for_items(
        input: CheckoutNewForItemsInputParam,
      ): ChargebeeRequest<ChargebeeResponse<CheckoutNewForItemsResponse>>;

      checkout_existing(
        input: CheckoutExistingInputParam,
      ): ChargebeeRequest<ChargebeeResponse<CheckoutExistingResponse>>;

      checkout_existing_for_items(
        input: CheckoutExistingForItemsInputParam,
      ): ChargebeeRequest<ChargebeeResponse<CheckoutExistingForItemsResponse>>;

      update_card(
        input: UpdateCardInputParam,
      ): ChargebeeRequest<ChargebeeResponse<UpdateCardResponse>>;

      update_payment_method(
        input: UpdatePaymentMethodInputParam,
      ): ChargebeeRequest<ChargebeeResponse<UpdatePaymentMethodResponse>>;

      manage_payment_sources(
        input: ManagePaymentSourcesInputParam,
      ): ChargebeeRequest<ChargebeeResponse<ManagePaymentSourcesResponse>>;

      collect_now(
        input: CollectNowInputParam,
      ): ChargebeeRequest<ChargebeeResponse<CollectNowResponse>>;

      accept_quote(
        input: AcceptQuoteInputParam,
      ): ChargebeeRequest<ChargebeeResponse<AcceptQuoteResponse>>;

      extend_subscription(
        input: ExtendSubscriptionInputParam,
      ): ChargebeeRequest<ChargebeeResponse<ExtendSubscriptionResponse>>;

      checkout_gift(
        input: CheckoutGiftInputParam,
      ): ChargebeeRequest<ChargebeeResponse<CheckoutGiftResponse>>;

      checkout_gift_for_items(
        input?: CheckoutGiftForItemsInputParam,
      ): ChargebeeRequest<ChargebeeResponse<CheckoutGiftForItemsResponse>>;

      claim_gift(
        input: ClaimGiftInputParam,
      ): ChargebeeRequest<ChargebeeResponse<ClaimGiftResponse>>;

      retrieve_agreement_pdf(
        input: RetrieveAgreementPdfInputParam,
      ): ChargebeeRequest<ChargebeeResponse<RetrieveAgreementPdfResponse>>;

      acknowledge(
        hosted_page_id: string,
      ): ChargebeeRequest<ChargebeeResponse<AcknowledgeResponse>>;

      retrieve(
        hosted_page_id: string,
      ): ChargebeeRequest<ChargebeeResponse<RetrieveResponse>>;

      list(
        input?: ListInputParam,
      ): ChargebeeRequest<ChargebeeResponse<ListResponse>>;

      pre_cancel(
        input: PreCancelInputParam,
      ): ChargebeeRequest<ChargebeeResponse<PreCancelResponse>>;

      events(
        input: EventsInputParam,
      ): ChargebeeRequest<ChargebeeResponse<EventsResponse>>;

      view_voucher(
        input: ViewVoucherInputParam,
      ): ChargebeeRequest<ChargebeeResponse<ViewVoucherResponse>>;
    }
    export interface CheckoutNewResponse {
      hosted_page: HostedPage;
    }

    export interface CheckoutOneTimeResponse {
      hosted_page: HostedPage;
    }

    export interface CheckoutOneTimeForItemsResponse {
      hosted_page: HostedPage;
    }

    export interface CheckoutNewForItemsResponse {
      hosted_page: HostedPage;
    }

    export interface CheckoutExistingResponse {
      hosted_page: HostedPage;
    }

    export interface CheckoutExistingForItemsResponse {
      hosted_page: HostedPage;
    }

    export interface UpdateCardResponse {
      hosted_page: HostedPage;
    }

    export interface UpdatePaymentMethodResponse {
      hosted_page: HostedPage;
    }

    export interface ManagePaymentSourcesResponse {
      hosted_page: HostedPage;
    }

    export interface CollectNowResponse {
      hosted_page: HostedPage;
    }

    export interface AcceptQuoteResponse {
      hosted_page: HostedPage;
    }

    export interface ExtendSubscriptionResponse {
      hosted_page: HostedPage;
    }

    export interface CheckoutGiftResponse {
      hosted_page: HostedPage;
    }

    export interface CheckoutGiftForItemsResponse {
      hosted_page: HostedPage;
    }

    export interface ClaimGiftResponse {
      hosted_page: HostedPage;
    }

    export interface RetrieveAgreementPdfResponse {
      hosted_page: HostedPage;
    }

    export interface AcknowledgeResponse {
      hosted_page: HostedPage;
    }

    export interface RetrieveResponse {
      hosted_page: HostedPage;
    }

    export interface ListResponse {
      list: { hosted_page: HostedPage }[];

      next_offset?: string;
    }

    export interface PreCancelResponse {
      hosted_page: HostedPage;
    }

    export interface EventsResponse {
      success: boolean;
    }

    export interface ViewVoucherResponse {
      hosted_page: HostedPage;
    }

    // REQUEST PARAMS
    //---------------

    export interface CheckoutNewInputParam {
      billing_cycles?: number;
      mandatory_addons_to_remove?: string[];
      terms_to_charge?: number;
      billing_alignment_mode?: BillingAlignmentMode;
      coupon_ids?: string[];
      redirect_url?: string;
      cancel_url?: string;
      pass_thru_content?: string;
      embed?: boolean;
      iframe_messaging?: boolean;
      allow_offline_payment_methods?: boolean;
      subscription?: SubscriptionCheckoutNewInputParam;
      customer?: CustomerCheckoutNewInputParam;
      card?: CardCheckoutNewInputParam;
      billing_address?: BillingAddressCheckoutNewInputParam;
      shipping_address?: ShippingAddressCheckoutNewInputParam;
      contract_term?: ContractTermCheckoutNewInputParam;
      addons?: AddonsCheckoutNewInputParam[];
      event_based_addons?: EventBasedAddonsCheckoutNewInputParam[];
    }
    export interface CheckoutOneTimeInputParam {
      currency_code?: string;
      invoice_note?: string;
      /**
       * @deprecated Please refer API docs to use other attributes
       */

      coupon?: string;
      coupon_ids?: string[];
      redirect_url?: string;
      cancel_url?: string;
      pass_thru_content?: string;
      embed?: boolean;
      iframe_messaging?: boolean;
      customer?: CustomerCheckoutOneTimeInputParam;
      invoice?: InvoiceCheckoutOneTimeInputParam;
      card?: CardCheckoutOneTimeInputParam;
      billing_address?: BillingAddressCheckoutOneTimeInputParam;
      shipping_address?: ShippingAddressCheckoutOneTimeInputParam;
      addons?: AddonsCheckoutOneTimeInputParam[];
      charges?: ChargesCheckoutOneTimeInputParam[];
    }
    export interface CheckoutOneTimeForItemsInputParam {
      business_entity_id?: string;
      layout?: Layout;
      invoice_note?: string;
      /**
       * @deprecated Please refer API docs to use other attributes
       */

      coupon?: string;
      coupon_ids?: string[];
      currency_code?: string;
      redirect_url?: string;
      cancel_url?: string;
      pass_thru_content?: string;
      customer?: CustomerCheckoutOneTimeForItemsInputParam;
      invoice?: InvoiceCheckoutOneTimeForItemsInputParam;
      card?: CardCheckoutOneTimeForItemsInputParam;
      billing_address?: BillingAddressCheckoutOneTimeForItemsInputParam;
      shipping_address?: ShippingAddressCheckoutOneTimeForItemsInputParam;
      item_prices?: ItemPricesCheckoutOneTimeForItemsInputParam[];
      item_tiers?: ItemTiersCheckoutOneTimeForItemsInputParam[];
      charges?: ChargesCheckoutOneTimeForItemsInputParam[];
      discounts?: DiscountsCheckoutOneTimeForItemsInputParam[];
      entity_identifiers?: EntityIdentifiersCheckoutOneTimeForItemsInputParam[];
    }
    export interface CheckoutNewForItemsInputParam {
      layout?: Layout;
      business_entity_id?: string;
      billing_cycles?: number;
      mandatory_items_to_remove?: string[];
      terms_to_charge?: number;
      billing_alignment_mode?: BillingAlignmentMode;
      coupon_ids?: string[];
      redirect_url?: string;
      cancel_url?: string;
      pass_thru_content?: string;
      allow_offline_payment_methods?: boolean;
      subscription?: SubscriptionCheckoutNewForItemsInputParam;
      customer?: CustomerCheckoutNewForItemsInputParam;
      card?: CardCheckoutNewForItemsInputParam;
      billing_address?: BillingAddressCheckoutNewForItemsInputParam;
      shipping_address?: ShippingAddressCheckoutNewForItemsInputParam;
      contract_term?: ContractTermCheckoutNewForItemsInputParam;
      subscription_items?: SubscriptionItemsCheckoutNewForItemsInputParam[];
      discounts?: DiscountsCheckoutNewForItemsInputParam[];
      item_tiers?: ItemTiersCheckoutNewForItemsInputParam[];
      entity_identifiers?: EntityIdentifiersCheckoutNewForItemsInputParam[];
    }
    export interface CheckoutExistingInputParam {
      replace_addon_list?: boolean;
      mandatory_addons_to_remove?: string[];
      invoice_date?: number;
      billing_cycles?: number;
      terms_to_charge?: number;
      reactivate_from?: number;
      billing_alignment_mode?: BillingAlignmentMode;
      coupon_ids?: string[];
      reactivate?: boolean;
      force_term_reset?: boolean;
      redirect_url?: string;
      cancel_url?: string;
      pass_thru_content?: string;
      embed?: boolean;
      iframe_messaging?: boolean;
      allow_offline_payment_methods?: boolean;
      subscription?: SubscriptionCheckoutExistingInputParam;
      customer?: CustomerCheckoutExistingInputParam;
      card?: CardCheckoutExistingInputParam;
      contract_term?: ContractTermCheckoutExistingInputParam;
      addons?: AddonsCheckoutExistingInputParam[];
      event_based_addons?: EventBasedAddonsCheckoutExistingInputParam[];
    }
    export interface CheckoutExistingForItemsInputParam {
      layout?: Layout;
      mandatory_items_to_remove?: string[];
      replace_items_list?: boolean;
      invoice_date?: number;
      billing_cycles?: number;
      terms_to_charge?: number;
      reactivate_from?: number;
      billing_alignment_mode?: BillingAlignmentMode;
      coupon_ids?: string[];
      reactivate?: boolean;
      force_term_reset?: boolean;
      redirect_url?: string;
      cancel_url?: string;
      pass_thru_content?: string;
      allow_offline_payment_methods?: boolean;
      subscription?: SubscriptionCheckoutExistingForItemsInputParam;
      customer?: CustomerCheckoutExistingForItemsInputParam;
      card?: CardCheckoutExistingForItemsInputParam;
      contract_term?: ContractTermCheckoutExistingForItemsInputParam;
      subscription_items?: SubscriptionItemsCheckoutExistingForItemsInputParam[];
      discounts?: DiscountsCheckoutExistingForItemsInputParam[];
      item_tiers?: ItemTiersCheckoutExistingForItemsInputParam[];
      entity_identifiers?: EntityIdentifiersCheckoutExistingForItemsInputParam[];
    }
    export interface UpdateCardInputParam {
      redirect_url?: string;
      cancel_url?: string;
      pass_thru_content?: string;
      embed?: boolean;
      iframe_messaging?: boolean;
      customer?: CustomerUpdateCardInputParam;
      card?: CardUpdateCardInputParam;
    }
    export interface UpdatePaymentMethodInputParam {
      redirect_url?: string;
      cancel_url?: string;
      pass_thru_content?: string;
      embed?: boolean;
      iframe_messaging?: boolean;
      customer?: CustomerUpdatePaymentMethodInputParam;
      card?: CardUpdatePaymentMethodInputParam;
    }
    export interface ManagePaymentSourcesInputParam {
      redirect_url?: string;
      customer?: CustomerManagePaymentSourcesInputParam;
      card?: CardManagePaymentSourcesInputParam;
    }
    export interface CollectNowInputParam {
      redirect_url?: string;
      currency_code?: string;
      customer?: CustomerCollectNowInputParam;
      card?: CardCollectNowInputParam;
    }
    export interface AcceptQuoteInputParam {
      redirect_url?: string;
      layout?: Layout;
      quote?: QuoteAcceptQuoteInputParam;
    }
    export interface ExtendSubscriptionInputParam {
      expiry?: number;
      billing_cycle?: number;
      subscription?: SubscriptionExtendSubscriptionInputParam;
    }
    export interface CheckoutGiftInputParam {
      redirect_url?: string;
      coupon_ids?: string[];
      gifter?: GifterCheckoutGiftInputParam;
      subscription?: SubscriptionCheckoutGiftInputParam;
      addons?: AddonsCheckoutGiftInputParam[];
    }
    export interface CheckoutGiftForItemsInputParam {
      business_entity_id?: string;
      redirect_url?: string;
      coupon_ids?: string[];
      gifter?: GifterCheckoutGiftForItemsInputParam;
      subscription_items?: SubscriptionItemsCheckoutGiftForItemsInputParam[];
    }
    export interface ClaimGiftInputParam {
      redirect_url?: string;
      gift?: GiftClaimGiftInputParam;
      customer?: CustomerClaimGiftInputParam;
    }
    export interface RetrieveAgreementPdfInputParam {
      payment_source_id: string;
    }
    export interface ListInputParam {
      limit?: number;
      offset?: string;
      id?: filter.String;
      type?: filter.Enum;
      state?: filter.Enum;
      updated_at?: filter.Timestamp;
    }
    export interface PreCancelInputParam {
      pass_thru_content?: string;
      cancel_url?: string;
      redirect_url?: string;
      subscription?: SubscriptionPreCancelInputParam;
    }
    export interface EventsInputParam {
      event_name: EventName;
      occurred_at?: number;
      event_data: any;
    }
    export interface ViewVoucherInputParam {
      payment_voucher?: PaymentVoucherViewVoucherInputParam;
      customer?: CustomerViewVoucherInputParam;
    }
    export interface BillingAddressCheckoutNewInputParam {
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
    export interface CustomerCheckoutNewInputParam {
      id?: string;

      email?: string;

      first_name?: string;

      last_name?: string;

      company?: string;

      phone?: string;

      locale?: string;

      taxability?: Taxability;

      vat_number?: string;

      vat_number_prefix?: string;

      consolidated_invoicing?: boolean;
    }
    export interface ShippingAddressCheckoutNewInputParam {
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
    export interface ContractTermCheckoutNewInputParam {
      action_at_term_end?: 'renew' | 'evergreen' | 'cancel';

      cancellation_cutoff_period?: number;
    }
    export interface SubscriptionCheckoutNewInputParam {
      id?: string;

      plan_id: string;

      plan_quantity?: number;

      plan_quantity_in_decimal?: string;

      plan_unit_price?: number;

      plan_unit_price_in_decimal?: string;

      setup_fee?: number;

      trial_end?: number;

      start_date?: number;

      /**
       * @deprecated Please refer API docs to use other attributes
       */

      coupon?: string;

      auto_collection?: AutoCollection;

      offline_payment_method?: OfflinePaymentMethod;

      invoice_notes?: string;

      affiliate_token?: string;

      contract_term_billing_cycle_on_renewal?: number;
    }
    export interface CardCheckoutNewInputParam {
      /**
       * @deprecated Please refer API docs to use other attributes
       */

      gateway?: Gateway;

      gateway_account_id?: string;
    }

    export interface EventBasedAddonsCheckoutNewInputParam {
      id?: string;

      quantity?: number;

      unit_price?: number;

      quantity_in_decimal?: string;

      unit_price_in_decimal?: string;

      service_period_in_days?: number;

      on_event?: OnEvent;

      charge_once?: boolean;

      charge_on?: ChargeOn;
    }
    export interface AddonsCheckoutNewInputParam {
      id?: string;

      quantity?: number;

      quantity_in_decimal?: string;

      unit_price?: number;

      unit_price_in_decimal?: string;

      billing_cycles?: number;
    }
    export interface BillingAddressCheckoutOneTimeInputParam {
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
    export interface InvoiceCheckoutOneTimeInputParam {
      po_number?: string;
    }
    export interface CustomerCheckoutOneTimeInputParam {
      id?: string;

      email?: string;

      first_name?: string;

      last_name?: string;

      company?: string;

      phone?: string;

      locale?: string;

      taxability?: Taxability;

      vat_number?: string;

      vat_number_prefix?: string;

      consolidated_invoicing?: boolean;
    }
    export interface ShippingAddressCheckoutOneTimeInputParam {
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
    export interface CardCheckoutOneTimeInputParam {
      /**
       * @deprecated Please refer API docs to use other attributes
       */

      gateway?: Gateway;

      gateway_account_id?: string;
    }

    export interface ChargesCheckoutOneTimeInputParam {
      amount?: number;

      amount_in_decimal?: string;

      description?: string;

      taxable?: boolean;

      tax_profile_id?: string;

      avalara_tax_code?: string;

      hsn_code?: string;

      taxjar_product_code?: string;

      avalara_sale_type?: AvalaraSaleType;

      avalara_transaction_type?: number;

      avalara_service_type?: number;

      date_from?: number;

      date_to?: number;
    }
    export interface AddonsCheckoutOneTimeInputParam {
      id?: string;

      quantity?: number;

      unit_price?: number;

      quantity_in_decimal?: string;

      unit_price_in_decimal?: string;

      date_from?: number;

      date_to?: number;
    }
    export interface BillingAddressCheckoutOneTimeForItemsInputParam {
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
    export interface InvoiceCheckoutOneTimeForItemsInputParam {
      po_number?: string;
    }
    export interface CustomerCheckoutOneTimeForItemsInputParam {
      id?: string;

      email?: string;

      first_name?: string;

      last_name?: string;

      company?: string;

      phone?: string;

      locale?: string;

      taxability?: Taxability;

      vat_number?: string;

      vat_number_prefix?: string;

      einvoicing_method?: EinvoicingMethod;

      is_einvoice_enabled?: boolean;

      entity_identifier_scheme?: string;

      entity_identifier_standard?: string;

      consolidated_invoicing?: boolean;
    }
    export interface ShippingAddressCheckoutOneTimeForItemsInputParam {
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
    export interface CardCheckoutOneTimeForItemsInputParam {
      /**
       * @deprecated Please refer API docs to use other attributes
       */

      gateway?: Gateway;

      gateway_account_id?: string;
    }

    export interface ChargesCheckoutOneTimeForItemsInputParam {
      amount?: number;

      amount_in_decimal?: string;

      description?: string;

      taxable?: boolean;

      tax_profile_id?: string;

      avalara_tax_code?: string;

      hsn_code?: string;

      taxjar_product_code?: string;

      avalara_sale_type?: AvalaraSaleType;

      avalara_transaction_type?: number;

      avalara_service_type?: number;

      date_from?: number;

      date_to?: number;
    }
    export interface DiscountsCheckoutOneTimeForItemsInputParam {
      percentage?: number;

      amount?: number;

      apply_on: ApplyOn;

      item_price_id?: string;
    }
    export interface EntityIdentifiersCheckoutOneTimeForItemsInputParam {
      id?: string;

      scheme?: string;

      value?: string;

      operation?: Operation;

      standard?: string;
    }
    export interface ItemTiersCheckoutOneTimeForItemsInputParam {
      item_price_id?: string;

      starting_unit?: number;

      ending_unit?: number;

      price?: number;

      starting_unit_in_decimal?: string;

      ending_unit_in_decimal?: string;

      price_in_decimal?: string;
    }
    export interface ItemPricesCheckoutOneTimeForItemsInputParam {
      item_price_id?: string;

      quantity?: number;

      quantity_in_decimal?: string;

      unit_price?: number;

      unit_price_in_decimal?: string;

      date_from?: number;

      date_to?: number;
    }
    export interface BillingAddressCheckoutNewForItemsInputParam {
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
    export interface CustomerCheckoutNewForItemsInputParam {
      id?: string;

      email?: string;

      first_name?: string;

      last_name?: string;

      company?: string;

      phone?: string;

      locale?: string;

      taxability?: Taxability;

      vat_number?: string;

      vat_number_prefix?: string;

      is_einvoice_enabled?: boolean;

      entity_identifier_scheme?: string;

      entity_identifier_standard?: string;

      einvoicing_method?: EinvoicingMethod;
    }
    export interface ShippingAddressCheckoutNewForItemsInputParam {
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
    export interface ContractTermCheckoutNewForItemsInputParam {
      action_at_term_end?: 'renew' | 'evergreen' | 'cancel';

      cancellation_cutoff_period?: number;
    }
    export interface SubscriptionCheckoutNewForItemsInputParam {
      id?: string;

      trial_end?: number;

      /**
       * @deprecated Please refer API docs to use other attributes
       */

      setup_fee?: number;

      start_date?: number;

      coupon?: string;

      auto_collection?: AutoCollection;

      invoice_notes?: string;

      contract_term_billing_cycle_on_renewal?: number;
    }
    export interface CardCheckoutNewForItemsInputParam {
      /**
       * @deprecated Please refer API docs to use other attributes
       */

      gateway?: Gateway;

      gateway_account_id?: string;
    }

    export interface SubscriptionItemsCheckoutNewForItemsInputParam {
      item_price_id: string;

      quantity?: number;

      quantity_in_decimal?: string;

      unit_price?: number;

      unit_price_in_decimal?: string;

      billing_cycles?: number;

      trial_end?: number;

      service_period_days?: number;

      charge_on_event?: ChargeOnEvent;

      charge_once?: boolean;

      /**
       * @deprecated Please refer API docs to use other attributes
       */

      item_type?: ItemType;

      charge_on_option?: ChargeOnOption;
    }
    export interface DiscountsCheckoutNewForItemsInputParam {
      apply_on: ApplyOn;

      duration_type: DurationType;

      percentage?: number;

      amount?: number;

      period?: number;

      period_unit?: PeriodUnit;

      included_in_mrr?: boolean;

      item_price_id?: string;
    }
    export interface EntityIdentifiersCheckoutNewForItemsInputParam {
      id?: string;

      scheme?: string;

      value?: string;

      operation?: Operation;

      standard?: string;
    }
    export interface ItemTiersCheckoutNewForItemsInputParam {
      item_price_id?: string;

      starting_unit?: number;

      ending_unit?: number;

      price?: number;

      starting_unit_in_decimal?: string;

      ending_unit_in_decimal?: string;

      price_in_decimal?: string;
    }
    export interface CustomerCheckoutExistingInputParam {
      vat_number?: string;

      vat_number_prefix?: string;
    }
    export interface ContractTermCheckoutExistingInputParam {
      action_at_term_end?: 'renew' | 'evergreen' | 'cancel';

      cancellation_cutoff_period?: number;
    }
    export interface SubscriptionCheckoutExistingInputParam {
      id: string;

      plan_id?: string;

      plan_quantity?: number;

      plan_unit_price?: number;

      setup_fee?: number;

      plan_quantity_in_decimal?: string;

      plan_unit_price_in_decimal?: string;

      start_date?: number;

      trial_end?: number;

      /**
       * @deprecated Please refer API docs to use other attributes
       */

      coupon?: string;

      auto_collection?: AutoCollection;

      offline_payment_method?: OfflinePaymentMethod;

      invoice_notes?: string;

      contract_term_billing_cycle_on_renewal?: number;
    }
    export interface CardCheckoutExistingInputParam {
      /**
       * @deprecated Please refer API docs to use other attributes
       */

      gateway?: Gateway;

      gateway_account_id?: string;
    }

    export interface EventBasedAddonsCheckoutExistingInputParam {
      id?: string;

      quantity?: number;

      unit_price?: number;

      service_period_in_days?: number;

      charge_on?: ChargeOn;

      on_event?: OnEvent;

      charge_once?: boolean;

      quantity_in_decimal?: string;

      unit_price_in_decimal?: string;
    }
    export interface AddonsCheckoutExistingInputParam {
      id?: string;

      quantity?: number;

      unit_price?: number;

      billing_cycles?: number;

      quantity_in_decimal?: string;

      unit_price_in_decimal?: string;
    }
    export interface CustomerCheckoutExistingForItemsInputParam {
      vat_number?: string;

      vat_number_prefix?: string;

      is_einvoice_enabled?: boolean;

      entity_identifier_scheme?: string;

      entity_identifier_standard?: string;
    }
    export interface ContractTermCheckoutExistingForItemsInputParam {
      action_at_term_end?: 'renew' | 'evergreen' | 'cancel';

      cancellation_cutoff_period?: number;
    }
    export interface SubscriptionCheckoutExistingForItemsInputParam {
      id: string;

      /**
       * @deprecated Please refer API docs to use other attributes
       */

      setup_fee?: number;

      start_date?: number;

      trial_end?: number;

      /**
       * @deprecated Please refer API docs to use other attributes
       */

      coupon?: string;

      auto_collection?: AutoCollection;

      offline_payment_method?: OfflinePaymentMethod;

      invoice_notes?: string;

      contract_term_billing_cycle_on_renewal?: number;
    }
    export interface CardCheckoutExistingForItemsInputParam {
      /**
       * @deprecated Please refer API docs to use other attributes
       */

      gateway?: Gateway;

      gateway_account_id?: string;
    }

    export interface SubscriptionItemsCheckoutExistingForItemsInputParam {
      item_price_id: string;

      quantity?: number;

      quantity_in_decimal?: string;

      unit_price?: number;

      unit_price_in_decimal?: string;

      billing_cycles?: number;

      trial_end?: number;

      service_period_days?: number;

      charge_on_event?: ChargeOnEvent;

      charge_once?: boolean;

      charge_on_option?: ChargeOnOption;

      /**
       * @deprecated Please refer API docs to use other attributes
       */

      item_type?: ItemType;
    }
    export interface DiscountsCheckoutExistingForItemsInputParam {
      apply_on: ApplyOn;

      duration_type: DurationType;

      percentage?: number;

      amount?: number;

      period?: number;

      period_unit?: PeriodUnit;

      included_in_mrr?: boolean;

      item_price_id?: string;

      operation_type: OperationType;

      id?: string;
    }
    export interface EntityIdentifiersCheckoutExistingForItemsInputParam {
      id?: string;

      scheme?: string;

      value?: string;

      operation?: Operation;

      standard?: string;
    }
    export interface ItemTiersCheckoutExistingForItemsInputParam {
      item_price_id?: string;

      starting_unit?: number;

      ending_unit?: number;

      price?: number;

      starting_unit_in_decimal?: string;

      ending_unit_in_decimal?: string;

      price_in_decimal?: string;
    }
    export interface CustomerUpdateCardInputParam {
      id: string;

      /**
       * @deprecated Please refer API docs to use other attributes
       */

      vat_number?: string;

      /**
       * @deprecated Please refer API docs to use other attributes
       */

      vat_number_prefix?: string;
    }
    export interface CardUpdateCardInputParam {
      /**
       * @deprecated Please refer API docs to use other attributes
       */

      gateway?: Gateway;

      gateway_account_id?: string;
    }

    export interface CustomerUpdatePaymentMethodInputParam {
      id: string;

      /**
       * @deprecated Please refer API docs to use other attributes
       */

      vat_number?: string;

      /**
       * @deprecated Please refer API docs to use other attributes
       */

      vat_number_prefix?: string;
    }
    export interface CardUpdatePaymentMethodInputParam {
      /**
       * @deprecated Please refer API docs to use other attributes
       */

      gateway?: Gateway;

      gateway_account_id?: string;
    }

    export interface CustomerManagePaymentSourcesInputParam {
      id: string;
    }
    export interface CardManagePaymentSourcesInputParam {
      /**
       * @deprecated Please refer API docs to use other attributes
       */

      gateway?: Gateway;

      gateway_account_id?: string;
    }

    export interface CustomerCollectNowInputParam {
      id: string;
    }
    export interface CardCollectNowInputParam {
      /**
       * @deprecated Please refer API docs to use other attributes
       */

      gateway?: Gateway;

      gateway_account_id?: string;
    }

    export interface QuoteAcceptQuoteInputParam {
      id: string;
    }

    export interface SubscriptionExtendSubscriptionInputParam {
      id: string;
    }

    export interface GifterCheckoutGiftInputParam {
      customer_id?: string;
    }
    export interface SubscriptionCheckoutGiftInputParam {
      plan_id: string;

      plan_quantity?: number;

      plan_quantity_in_decimal?: string;

      /**
       * @deprecated Please refer API docs to use other attributes
       */

      coupon?: string;
    }

    export interface AddonsCheckoutGiftInputParam {
      id?: string;

      quantity?: number;

      quantity_in_decimal?: string;
    }
    export interface GifterCheckoutGiftForItemsInputParam {
      customer_id?: string;
    }

    export interface SubscriptionItemsCheckoutGiftForItemsInputParam {
      item_price_id?: string;

      quantity?: number;

      quantity_in_decimal?: string;
    }
    export interface GiftClaimGiftInputParam {
      id: string;
    }
    export interface CustomerClaimGiftInputParam {
      locale?: string;
    }

    export interface SubscriptionPreCancelInputParam {
      id: string;
    }

    export interface CustomerViewVoucherInputParam {
      locale?: string;
    }
    export interface PaymentVoucherViewVoucherInputParam {
      id: string;
    }
  }
}
