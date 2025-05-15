///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface Quote {
    [key: string]: unknown;
    id: string;
    name?: string;
    po_number?: string;
    customer_id: string;
    subscription_id?: string;
    invoice_id?: string;
    status: 'open' | 'accepted' | 'declined' | 'invoiced' | 'closed';
    operation_type:
      | 'create_subscription_for_customer'
      | 'change_subscription'
      | 'onetime_invoice';
    vat_number?: string;
    price_type: PriceTypeEnum;
    valid_till: number;
    date: number;
    total_payable?: number;
    charge_on_acceptance?: number;
    sub_total: number;
    total?: number;
    credits_applied?: number;
    amount_paid?: number;
    amount_due?: number;
    version?: number;
    resource_version?: number;
    updated_at?: number;
    vat_number_prefix?: string;
    line_items?: Quote.LineItem[];
    discounts?: Quote.Discount[];
    line_item_discounts?: Quote.LineItemDiscount[];
    taxes?: Quote.Tax[];
    line_item_taxes?: Quote.LineItemTax[];
    line_item_tiers?: Quote.LineItemTier[];
    tax_category?: string;
    currency_code: string;
    notes?: any;
    shipping_address?: Quote.ShippingAddress;
    billing_address?: Quote.BillingAddress;
    contract_term_start?: number;
    contract_term_end?: number;
    contract_term_termination_fee?: number;
    business_entity_id?: string;
    deleted: boolean;
  }

  export namespace Quote {
    export class QuoteResource {
      retrieve(
        quote_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RetrieveResponse>>;

      createSubForCustomerQuote(
        customer_id: string,
        input: CreateSubForCustomerQuoteInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateSubForCustomerQuoteResponse>>;

      editCreateSubForCustomerQuote(
        quote_id: string,
        input: EditCreateSubForCustomerQuoteInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<EditCreateSubForCustomerQuoteResponse>>;

      updateSubscriptionQuote(
        input: UpdateSubscriptionQuoteInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<UpdateSubscriptionQuoteResponse>>;

      editUpdateSubscriptionQuote(
        quote_id: string,
        input?: EditUpdateSubscriptionQuoteInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<EditUpdateSubscriptionQuoteResponse>>;

      createForOnetimeCharges(
        input: CreateForOnetimeChargesInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateForOnetimeChargesResponse>>;

      editOneTimeQuote(
        quote_id: string,
        input?: EditOneTimeQuoteInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<EditOneTimeQuoteResponse>>;

      createSubItemsForCustomerQuote(
        customer_id: string,
        input: CreateSubItemsForCustomerQuoteInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateSubItemsForCustomerQuoteResponse>>;

      editCreateSubCustomerQuoteForItems(
        quote_id: string,
        input: EditCreateSubCustomerQuoteForItemsInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<EditCreateSubCustomerQuoteForItemsResponse>>;

      updateSubscriptionQuoteForItems(
        input: UpdateSubscriptionQuoteForItemsInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<UpdateSubscriptionQuoteForItemsResponse>>;

      editUpdateSubscriptionQuoteForItems(
        quote_id: string,
        input: EditUpdateSubscriptionQuoteForItemsInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<
        ChargebeeResponse<EditUpdateSubscriptionQuoteForItemsResponse>
      >;

      createForChargeItemsAndCharges(
        input: CreateForChargeItemsAndChargesInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateForChargeItemsAndChargesResponse>>;

      editForChargeItemsAndCharges(
        quote_id: string,
        input: EditForChargeItemsAndChargesInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<EditForChargeItemsAndChargesResponse>>;

      list(
        input?: ListInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ListResponse>>;

      quoteLineGroupsForQuote(
        quote_id: string,
        input?: QuoteLineGroupsForQuoteInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<QuoteLineGroupsForQuoteResponse>>;

      convert(
        quote_id: string,
        input?: ConvertInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ConvertResponse>>;

      updateStatus(
        quote_id: string,
        input: UpdateStatusInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<UpdateStatusResponse>>;

      extendExpiryDate(
        quote_id: string,
        input: ExtendExpiryDateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ExtendExpiryDateResponse>>;

      delete(
        quote_id: string,
        input?: DeleteInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<DeleteResponse>>;

      pdf(
        quote_id: string,
        input?: PdfInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<PdfResponse>>;
    }

    export interface RetrieveResponse {
      quote: Quote;
      quoted_subscription?: QuotedSubscription;
      quoted_charge?: QuotedCharge;
    }

    export interface CreateSubForCustomerQuoteResponse {
      quote: Quote;
      quoted_subscription?: QuotedSubscription;
    }

    export interface EditCreateSubForCustomerQuoteResponse {
      quote: Quote;
      quoted_subscription?: QuotedSubscription;
    }

    export interface UpdateSubscriptionQuoteResponse {
      quote: Quote;
      quoted_subscription?: QuotedSubscription;
    }

    export interface EditUpdateSubscriptionQuoteResponse {
      quote: Quote;
      quoted_subscription?: QuotedSubscription;
    }

    export interface CreateForOnetimeChargesResponse {
      quote: Quote;
      quoted_charge?: QuotedCharge;
    }

    export interface EditOneTimeQuoteResponse {
      quote: Quote;
      quoted_charge?: QuotedCharge;
    }

    export interface CreateSubItemsForCustomerQuoteResponse {
      quote: Quote;
      quoted_subscription?: QuotedSubscription;
    }

    export interface EditCreateSubCustomerQuoteForItemsResponse {
      quote: Quote;
      quoted_subscription?: QuotedSubscription;
    }

    export interface UpdateSubscriptionQuoteForItemsResponse {
      quote: Quote;
      quoted_subscription?: QuotedSubscription;
    }

    export interface EditUpdateSubscriptionQuoteForItemsResponse {
      quote: Quote;
      quoted_subscription?: QuotedSubscription;
    }

    export interface CreateForChargeItemsAndChargesResponse {
      quote: Quote;
      quoted_charge?: QuotedCharge;
    }

    export interface EditForChargeItemsAndChargesResponse {
      quote: Quote;
      quoted_charge?: QuotedCharge;
    }

    export interface ListResponse {
      list: { quote: Quote; quoted_subscription?: QuotedSubscription }[];
      next_offset?: string;
    }

    export interface QuoteLineGroupsForQuoteResponse {
      list: { quote_line_group: QuoteLineGroup }[];
      next_offset?: string;
    }

    export interface ConvertResponse {
      quote: Quote;
      quoted_subscription?: QuotedSubscription;
      quoted_charge?: QuotedCharge;
      customer: Customer;
      subscription?: Subscription;
      invoice?: Invoice;
      credit_note?: CreditNote;
      unbilled_charges?: UnbilledCharge[];
    }

    export interface UpdateStatusResponse {
      quote: Quote;
      quoted_subscription?: QuotedSubscription;
      quoted_charge?: QuotedCharge;
    }

    export interface ExtendExpiryDateResponse {
      quote: Quote;
      quoted_subscription?: QuotedSubscription;
      quoted_charge?: QuotedCharge;
    }

    export interface DeleteResponse {
      quote: Quote;
      quoted_subscription?: QuotedSubscription;
      quoted_charge?: QuotedCharge;
    }

    export interface PdfResponse {
      download: Download;
    }

    export interface LineItem {
      id?: string;
      subscription_id?: string;
      date_from: number;
      date_to: number;
      unit_amount: number;
      quantity?: number;
      amount?: number;
      pricing_model?:
        | 'flat_fee'
        | 'per_unit'
        | 'tiered'
        | 'volume'
        | 'stairstep';
      is_taxed: boolean;
      tax_amount?: number;
      tax_rate?: number;
      unit_amount_in_decimal?: string;
      quantity_in_decimal?: string;
      amount_in_decimal?: string;
      discount_amount?: number;
      item_level_discount_amount?: number;
      metered?: boolean;
      percentage?: string;
      reference_line_item_id?: string;
      description: string;
      entity_description?: string;
      entity_type:
        | 'adhoc'
        | 'plan_item_price'
        | 'addon_item_price'
        | 'charge_item_price'
        | 'plan_setup'
        | 'plan'
        | 'addon';
      tax_exempt_reason?:
        | 'tax_not_configured'
        | 'region_non_taxable'
        | 'export'
        | 'customer_exempt'
        | 'product_exempt'
        | 'zero_rated'
        | 'reverse_charge'
        | 'high_value_physical_goods'
        | 'zero_value_item'
        | 'tax_not_configured_external_provider';
      entity_id?: string;
      customer_id?: string;
    }
    export interface Discount {
      amount: number;
      description?: string;
      entity_type:
        | 'item_level_coupon'
        | 'document_level_coupon'
        | 'promotional_credits'
        | 'prorated_credits'
        | 'item_level_discount'
        | 'document_level_discount';
      discount_type?: 'fixed_amount' | 'percentage';
      entity_id?: string;
      coupon_set_code?: string;
    }
    export interface LineItemDiscount {
      line_item_id: string;
      discount_type:
        | 'item_level_coupon'
        | 'document_level_coupon'
        | 'promotional_credits'
        | 'prorated_credits'
        | 'item_level_discount'
        | 'document_level_discount';
      coupon_id?: string;
      entity_id?: string;
      discount_amount: number;
    }
    export interface Tax {
      name: string;
      amount: number;
      description?: string;
    }
    export interface LineItemTax {
      line_item_id?: string;
      tax_name: string;
      tax_rate: number;
      date_to?: number;
      date_from?: number;
      prorated_taxable_amount?: number;
      is_partial_tax_applied?: boolean;
      is_non_compliance_tax?: boolean;
      taxable_amount: number;
      tax_amount: number;
      tax_juris_type?:
        | 'country'
        | 'federal'
        | 'state'
        | 'county'
        | 'city'
        | 'special'
        | 'unincorporated'
        | 'other';
      tax_juris_name?: string;
      tax_juris_code?: string;
      tax_amount_in_local_currency?: number;
      local_currency_code?: string;
    }
    export interface LineItemTier {
      line_item_id?: string;
      starting_unit: number;
      ending_unit?: number;
      quantity_used: number;
      unit_amount: number;
      starting_unit_in_decimal?: string;
      ending_unit_in_decimal?: string;
      quantity_used_in_decimal?: string;
      unit_amount_in_decimal?: string;
      pricing_type?: 'per_unit' | 'flat_fee' | 'package';
      package_size?: number;
    }
    export interface ShippingAddress {
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
      validation_status?: ValidationStatusEnum;
      index: number;
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
      validation_status?: ValidationStatusEnum;
    }
    // REQUEST PARAMS
    //---------------

    export interface CreateSubForCustomerQuoteInputParam {
      name?: string;
      notes?: string;
      expires_at?: number;
      billing_cycles?: number;
      mandatory_addons_to_remove?: string[];
      terms_to_charge?: number;
      billing_alignment_mode?: BillingAlignmentModeEnum;
      coupon_ids?: string[];
      subscription?: SubscriptionCreateSubForCustomerQuoteInputParam;
      shipping_address?: ShippingAddressCreateSubForCustomerQuoteInputParam;
      contract_term?: ContractTermCreateSubForCustomerQuoteInputParam;
      addons?: AddonsCreateSubForCustomerQuoteInputParam[];
      event_based_addons?: EventBasedAddonsCreateSubForCustomerQuoteInputParam[];
    }
    export interface EditCreateSubForCustomerQuoteInputParam {
      notes?: string;
      expires_at?: number;
      billing_cycles?: number;
      mandatory_addons_to_remove?: string[];
      terms_to_charge?: number;
      billing_alignment_mode?: BillingAlignmentModeEnum;
      coupon_ids?: string[];
      subscription?: SubscriptionEditCreateSubForCustomerQuoteInputParam;
      shipping_address?: ShippingAddressEditCreateSubForCustomerQuoteInputParam;
      contract_term?: ContractTermEditCreateSubForCustomerQuoteInputParam;
      addons?: AddonsEditCreateSubForCustomerQuoteInputParam[];
      event_based_addons?: EventBasedAddonsEditCreateSubForCustomerQuoteInputParam[];
    }
    export interface UpdateSubscriptionQuoteInputParam {
      name?: string;
      notes?: string;
      expires_at?: number;
      replace_addon_list?: boolean;
      mandatory_addons_to_remove?: string[];
      billing_cycles?: number;
      terms_to_charge?: number;
      reactivate_from?: number;
      billing_alignment_mode?: BillingAlignmentModeEnum;
      coupon_ids?: string[];
      replace_coupon_list?: boolean;
      change_option?: ChangeOptionEnum;
      changes_scheduled_at?: number;
      force_term_reset?: boolean;
      reactivate?: boolean;
      subscription?: SubscriptionUpdateSubscriptionQuoteInputParam;
      billing_address?: BillingAddressUpdateSubscriptionQuoteInputParam;
      shipping_address?: ShippingAddressUpdateSubscriptionQuoteInputParam;
      customer?: CustomerUpdateSubscriptionQuoteInputParam;
      contract_term?: ContractTermUpdateSubscriptionQuoteInputParam;
      addons?: AddonsUpdateSubscriptionQuoteInputParam[];
      event_based_addons?: EventBasedAddonsUpdateSubscriptionQuoteInputParam[];
    }
    export interface EditUpdateSubscriptionQuoteInputParam {
      notes?: string;
      expires_at?: number;
      replace_addon_list?: boolean;
      mandatory_addons_to_remove?: string[];
      billing_cycles?: number;
      terms_to_charge?: number;
      reactivate_from?: number;
      billing_alignment_mode?: BillingAlignmentModeEnum;
      coupon_ids?: string[];
      replace_coupon_list?: boolean;
      change_option?: ChangeOptionEnum;
      changes_scheduled_at?: number;
      force_term_reset?: boolean;
      reactivate?: boolean;
      subscription?: SubscriptionEditUpdateSubscriptionQuoteInputParam;
      billing_address?: BillingAddressEditUpdateSubscriptionQuoteInputParam;
      shipping_address?: ShippingAddressEditUpdateSubscriptionQuoteInputParam;
      customer?: CustomerEditUpdateSubscriptionQuoteInputParam;
      contract_term?: ContractTermEditUpdateSubscriptionQuoteInputParam;
      addons?: AddonsEditUpdateSubscriptionQuoteInputParam[];
      event_based_addons?: EventBasedAddonsEditUpdateSubscriptionQuoteInputParam[];
    }
    export interface CreateForOnetimeChargesInputParam {
      name?: string;
      customer_id: string;
      po_number?: string;
      notes?: string;
      expires_at?: number;
      currency_code?: string;
      coupon?: string;
      coupon_ids?: string[];
      shipping_address?: ShippingAddressCreateForOnetimeChargesInputParam;
      addons?: AddonsCreateForOnetimeChargesInputParam[];
      charges?: ChargesCreateForOnetimeChargesInputParam[];
      tax_providers_fields?: TaxProvidersFieldsCreateForOnetimeChargesInputParam[];
    }
    export interface EditOneTimeQuoteInputParam {
      po_number?: string;
      notes?: string;
      expires_at?: number;
      currency_code?: string;
      coupon?: string;
      coupon_ids?: string[];
      shipping_address?: ShippingAddressEditOneTimeQuoteInputParam;
      addons?: AddonsEditOneTimeQuoteInputParam[];
      charges?: ChargesEditOneTimeQuoteInputParam[];
      tax_providers_fields?: TaxProvidersFieldsEditOneTimeQuoteInputParam[];
    }
    export interface CreateSubItemsForCustomerQuoteInputParam {
      name?: string;
      notes?: string;
      expires_at?: number;
      billing_cycles?: number;
      mandatory_items_to_remove?: string[];
      terms_to_charge?: number;
      billing_alignment_mode?: BillingAlignmentModeEnum;
      coupon_ids?: string[];
      subscription?: SubscriptionCreateSubItemsForCustomerQuoteInputParam;
      shipping_address?: ShippingAddressCreateSubItemsForCustomerQuoteInputParam;
      contract_term?: ContractTermCreateSubItemsForCustomerQuoteInputParam;
      subscription_items?: SubscriptionItemsCreateSubItemsForCustomerQuoteInputParam[];
      discounts?: DiscountsCreateSubItemsForCustomerQuoteInputParam[];
      item_tiers?: ItemTiersCreateSubItemsForCustomerQuoteInputParam[];
      [key: `cf_${string}`]: unknown;
    }
    export interface EditCreateSubCustomerQuoteForItemsInputParam {
      notes?: string;
      expires_at?: number;
      billing_cycles?: number;
      mandatory_items_to_remove?: string[];
      terms_to_charge?: number;
      billing_alignment_mode?: BillingAlignmentModeEnum;
      coupon_ids?: string[];
      subscription?: SubscriptionEditCreateSubCustomerQuoteForItemsInputParam;
      shipping_address?: ShippingAddressEditCreateSubCustomerQuoteForItemsInputParam;
      contract_term?: ContractTermEditCreateSubCustomerQuoteForItemsInputParam;
      subscription_items?: SubscriptionItemsEditCreateSubCustomerQuoteForItemsInputParam[];
      discounts?: DiscountsEditCreateSubCustomerQuoteForItemsInputParam[];
      item_tiers?: ItemTiersEditCreateSubCustomerQuoteForItemsInputParam[];
      [key: `cf_${string}`]: unknown;
    }
    export interface UpdateSubscriptionQuoteForItemsInputParam {
      name?: string;
      notes?: string;
      expires_at?: number;
      mandatory_items_to_remove?: string[];
      replace_items_list?: boolean;
      billing_cycles?: number;
      terms_to_charge?: number;
      reactivate_from?: number;
      billing_alignment_mode?: BillingAlignmentModeEnum;
      coupon_ids?: string[];
      replace_coupon_list?: boolean;
      change_option?: ChangeOptionEnum;
      changes_scheduled_at?: number;
      force_term_reset?: boolean;
      reactivate?: boolean;
      subscription?: SubscriptionUpdateSubscriptionQuoteForItemsInputParam;
      billing_address?: BillingAddressUpdateSubscriptionQuoteForItemsInputParam;
      shipping_address?: ShippingAddressUpdateSubscriptionQuoteForItemsInputParam;
      customer?: CustomerUpdateSubscriptionQuoteForItemsInputParam;
      contract_term?: ContractTermUpdateSubscriptionQuoteForItemsInputParam;
      subscription_items?: SubscriptionItemsUpdateSubscriptionQuoteForItemsInputParam[];
      discounts?: DiscountsUpdateSubscriptionQuoteForItemsInputParam[];
      item_tiers?: ItemTiersUpdateSubscriptionQuoteForItemsInputParam[];
      [key: `cf_${string}`]: unknown;
    }
    export interface EditUpdateSubscriptionQuoteForItemsInputParam {
      notes?: string;
      expires_at?: number;
      mandatory_items_to_remove?: string[];
      replace_items_list?: boolean;
      billing_cycles?: number;
      terms_to_charge?: number;
      reactivate_from?: number;
      billing_alignment_mode?: BillingAlignmentModeEnum;
      coupon_ids?: string[];
      replace_coupon_list?: boolean;
      change_option?: ChangeOptionEnum;
      changes_scheduled_at?: number;
      force_term_reset?: boolean;
      reactivate?: boolean;
      subscription?: SubscriptionEditUpdateSubscriptionQuoteForItemsInputParam;
      billing_address?: BillingAddressEditUpdateSubscriptionQuoteForItemsInputParam;
      shipping_address?: ShippingAddressEditUpdateSubscriptionQuoteForItemsInputParam;
      customer?: CustomerEditUpdateSubscriptionQuoteForItemsInputParam;
      contract_term?: ContractTermEditUpdateSubscriptionQuoteForItemsInputParam;
      subscription_items?: SubscriptionItemsEditUpdateSubscriptionQuoteForItemsInputParam[];
      discounts?: DiscountsEditUpdateSubscriptionQuoteForItemsInputParam[];
      item_tiers?: ItemTiersEditUpdateSubscriptionQuoteForItemsInputParam[];
      [key: `cf_${string}`]: unknown;
    }
    export interface CreateForChargeItemsAndChargesInputParam {
      name?: string;
      customer_id: string;
      po_number?: string;
      notes?: string;
      expires_at?: number;
      currency_code?: string;
      coupon?: string;
      coupon_ids?: string[];
      shipping_address?: ShippingAddressCreateForChargeItemsAndChargesInputParam;
      item_prices?: ItemPricesCreateForChargeItemsAndChargesInputParam[];
      item_tiers?: ItemTiersCreateForChargeItemsAndChargesInputParam[];
      charges?: ChargesCreateForChargeItemsAndChargesInputParam[];
      discounts?: DiscountsCreateForChargeItemsAndChargesInputParam[];
      tax_providers_fields?: TaxProvidersFieldsCreateForChargeItemsAndChargesInputParam[];
    }
    export interface EditForChargeItemsAndChargesInputParam {
      po_number?: string;
      notes?: string;
      expires_at?: number;
      currency_code?: string;
      coupon?: string;
      coupon_ids?: string[];
      shipping_address?: ShippingAddressEditForChargeItemsAndChargesInputParam;
      item_prices?: ItemPricesEditForChargeItemsAndChargesInputParam[];
      item_tiers?: ItemTiersEditForChargeItemsAndChargesInputParam[];
      charges?: ChargesEditForChargeItemsAndChargesInputParam[];
      discounts?: DiscountsEditForChargeItemsAndChargesInputParam[];
      tax_providers_fields?: TaxProvidersFieldsEditForChargeItemsAndChargesInputParam[];
    }
    export interface ListInputParam {
      limit?: number;
      offset?: string;
      include_deleted?: boolean;
      id?: filter.String;
      customer_id?: filter.String;
      subscription_id?: filter.String;
      status?: filter.Enum;
      date?: filter.Timestamp;
      updated_at?: filter.Timestamp;
      'sort_by[asc]'?: string;
      'sort_by[desc]'?: string;
      [key: `cf_${string}`]: unknown;
    }
    export interface QuoteLineGroupsForQuoteInputParam {
      limit?: number;
      offset?: string;
    }
    export interface ConvertInputParam {
      invoice_date?: number;
      invoice_immediately?: boolean;
      create_pending_invoices?: boolean;
      first_invoice_pending?: boolean;
      subscription?: SubscriptionConvertInputParam;
    }
    export interface UpdateStatusInputParam {
      status: 'accepted' | 'declined' | 'closed';
      comment?: string;
    }
    export interface ExtendExpiryDateInputParam {
      valid_till: number;
    }
    export interface DeleteInputParam {
      comment?: string;
    }
    export interface PdfInputParam {
      consolidated_view?: boolean;
      disposition_type?: DispositionTypeEnum;
    }
    export interface ShippingAddressCreateSubForCustomerQuoteInputParam {
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
      validation_status?: ValidationStatusEnum;
    }
    export interface ContractTermCreateSubForCustomerQuoteInputParam {
      action_at_term_end?: 'renew' | 'evergreen' | 'cancel';
      cancellation_cutoff_period?: number;
    }
    export interface SubscriptionCreateSubForCustomerQuoteInputParam {
      id?: string;
      po_number?: string;
      plan_id: string;
      plan_quantity?: number;
      plan_quantity_in_decimal?: string;
      plan_unit_price?: number;
      plan_unit_price_in_decimal?: string;
      setup_fee?: number;
      trial_end?: number;
      start_date?: number;
      offline_payment_method?: OfflinePaymentMethodEnum;
      contract_term_billing_cycle_on_renewal?: number;
    }

    export interface EventBasedAddonsCreateSubForCustomerQuoteInputParam {
      id?: string;
      quantity?: number;
      unit_price?: number;
      quantity_in_decimal?: string;
      unit_price_in_decimal?: string;
      service_period_in_days?: number;
      on_event?: OnEventEnum;
      charge_once?: boolean;
      charge_on?: ChargeOnEnum;
    }
    export interface AddonsCreateSubForCustomerQuoteInputParam {
      id?: string;
      quantity?: number;
      quantity_in_decimal?: string;
      unit_price?: number;
      unit_price_in_decimal?: string;
      billing_cycles?: number;
      trial_end?: number;
    }
    export interface ShippingAddressEditCreateSubForCustomerQuoteInputParam {
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
      validation_status?: ValidationStatusEnum;
    }
    export interface ContractTermEditCreateSubForCustomerQuoteInputParam {
      action_at_term_end?: 'renew' | 'evergreen' | 'cancel';
      cancellation_cutoff_period?: number;
    }
    export interface SubscriptionEditCreateSubForCustomerQuoteInputParam {
      id?: string;
      po_number?: string;
      plan_id: string;
      plan_quantity?: number;
      plan_quantity_in_decimal?: string;
      plan_unit_price?: number;
      plan_unit_price_in_decimal?: string;
      setup_fee?: number;
      trial_end?: number;
      start_date?: number;
      offline_payment_method?: OfflinePaymentMethodEnum;
      contract_term_billing_cycle_on_renewal?: number;
    }

    export interface EventBasedAddonsEditCreateSubForCustomerQuoteInputParam {
      id?: string;
      quantity?: number;
      unit_price?: number;
      quantity_in_decimal?: string;
      unit_price_in_decimal?: string;
      service_period_in_days?: number;
      on_event?: OnEventEnum;
      charge_once?: boolean;
      charge_on?: ChargeOnEnum;
    }
    export interface AddonsEditCreateSubForCustomerQuoteInputParam {
      id?: string;
      quantity?: number;
      quantity_in_decimal?: string;
      unit_price?: number;
      unit_price_in_decimal?: string;
      billing_cycles?: number;
      trial_end?: number;
    }
    export interface BillingAddressUpdateSubscriptionQuoteInputParam {
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
      validation_status?: ValidationStatusEnum;
    }
    export interface CustomerUpdateSubscriptionQuoteInputParam {
      vat_number?: string;
      vat_number_prefix?: string;
      registered_for_gst?: boolean;
    }
    export interface ShippingAddressUpdateSubscriptionQuoteInputParam {
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
      validation_status?: ValidationStatusEnum;
    }
    export interface ContractTermUpdateSubscriptionQuoteInputParam {
      action_at_term_end?: 'renew' | 'evergreen' | 'cancel' | 'renew_once';
      cancellation_cutoff_period?: number;
    }
    export interface SubscriptionUpdateSubscriptionQuoteInputParam {
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
      auto_collection?: AutoCollectionEnum;
      offline_payment_method?: OfflinePaymentMethodEnum;
      contract_term_billing_cycle_on_renewal?: number;
    }

    export interface EventBasedAddonsUpdateSubscriptionQuoteInputParam {
      id?: string;
      quantity?: number;
      unit_price?: number;
      service_period_in_days?: number;
      charge_on?: ChargeOnEnum;
      on_event?: OnEventEnum;
      charge_once?: boolean;
      quantity_in_decimal?: string;
      unit_price_in_decimal?: string;
    }
    export interface AddonsUpdateSubscriptionQuoteInputParam {
      id?: string;
      quantity?: number;
      unit_price?: number;
      billing_cycles?: number;
      quantity_in_decimal?: string;
      unit_price_in_decimal?: string;
      trial_end?: number;
    }
    export interface BillingAddressEditUpdateSubscriptionQuoteInputParam {
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
      validation_status?: ValidationStatusEnum;
    }
    export interface CustomerEditUpdateSubscriptionQuoteInputParam {
      vat_number?: string;
      vat_number_prefix?: string;
      registered_for_gst?: boolean;
    }
    export interface ShippingAddressEditUpdateSubscriptionQuoteInputParam {
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
      validation_status?: ValidationStatusEnum;
    }
    export interface ContractTermEditUpdateSubscriptionQuoteInputParam {
      action_at_term_end?: 'renew' | 'evergreen' | 'cancel' | 'renew_once';
      cancellation_cutoff_period?: number;
    }
    export interface SubscriptionEditUpdateSubscriptionQuoteInputParam {
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
      auto_collection?: AutoCollectionEnum;
      offline_payment_method?: OfflinePaymentMethodEnum;
      contract_term_billing_cycle_on_renewal?: number;
    }

    export interface EventBasedAddonsEditUpdateSubscriptionQuoteInputParam {
      id?: string;
      quantity?: number;
      unit_price?: number;
      service_period_in_days?: number;
      charge_on?: ChargeOnEnum;
      on_event?: OnEventEnum;
      charge_once?: boolean;
      quantity_in_decimal?: string;
      unit_price_in_decimal?: string;
    }
    export interface AddonsEditUpdateSubscriptionQuoteInputParam {
      id?: string;
      quantity?: number;
      unit_price?: number;
      billing_cycles?: number;
      quantity_in_decimal?: string;
      unit_price_in_decimal?: string;
      trial_end?: number;
    }
    export interface ShippingAddressCreateForOnetimeChargesInputParam {
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
      validation_status?: ValidationStatusEnum;
    }

    export interface ChargesCreateForOnetimeChargesInputParam {
      amount?: number;
      amount_in_decimal?: string;
      description?: string;
      avalara_sale_type?: AvalaraSaleTypeEnum;
      avalara_transaction_type?: number;
      avalara_service_type?: number;
      service_period?: number;
    }
    export interface AddonsCreateForOnetimeChargesInputParam {
      id?: string;
      quantity?: number;
      quantity_in_decimal?: string;
      unit_price?: number;
      unit_price_in_decimal?: string;
      service_period?: number;
    }
    export interface TaxProvidersFieldsCreateForOnetimeChargesInputParam {
      provider_name?: string;
      field_id?: string;
      field_value?: string;
    }
    export interface ShippingAddressEditOneTimeQuoteInputParam {
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
      validation_status?: ValidationStatusEnum;
    }

    export interface ChargesEditOneTimeQuoteInputParam {
      amount?: number;
      amount_in_decimal?: string;
      description?: string;
      avalara_sale_type?: AvalaraSaleTypeEnum;
      avalara_transaction_type?: number;
      avalara_service_type?: number;
      service_period?: number;
    }
    export interface AddonsEditOneTimeQuoteInputParam {
      id?: string;
      quantity?: number;
      quantity_in_decimal?: string;
      unit_price?: number;
      unit_price_in_decimal?: string;
      service_period?: number;
    }
    export interface TaxProvidersFieldsEditOneTimeQuoteInputParam {
      provider_name?: string;
      field_id?: string;
      field_value?: string;
    }
    export interface ShippingAddressCreateSubItemsForCustomerQuoteInputParam {
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
      validation_status?: ValidationStatusEnum;
    }
    export interface ContractTermCreateSubItemsForCustomerQuoteInputParam {
      action_at_term_end?: 'renew' | 'evergreen' | 'cancel';
      cancellation_cutoff_period?: number;
    }
    export interface SubscriptionCreateSubItemsForCustomerQuoteInputParam {
      id?: string;
      po_number?: string;
      trial_end?: number;
      /**
       * @deprecated Please refer API docs to use other attributes
       */
      setup_fee?: number;
      start_date?: number;
      contract_term_billing_cycle_on_renewal?: number;
    }

    export interface SubscriptionItemsCreateSubItemsForCustomerQuoteInputParam {
      item_price_id: string;
      quantity?: number;
      quantity_in_decimal?: string;
      unit_price?: number;
      unit_price_in_decimal?: string;
      billing_cycles?: number;
      trial_end?: number;
      service_period_days?: number;
      charge_on_event?: ChargeOnEventEnum;
      charge_once?: boolean;
      /**
       * @deprecated Please refer API docs to use other attributes
       */
      item_type?: ItemTypeEnum;
      charge_on_option?: ChargeOnOptionEnum;
    }
    export interface DiscountsCreateSubItemsForCustomerQuoteInputParam {
      apply_on?: ApplyOnEnum;
      duration_type: DurationTypeEnum;
      percentage?: number;
      amount?: number;
      period?: number;
      period_unit?: PeriodUnitEnum;
      included_in_mrr?: boolean;
      item_price_id?: string;
    }
    export interface ItemTiersCreateSubItemsForCustomerQuoteInputParam {
      item_price_id?: string;
      starting_unit?: number;
      ending_unit?: number;
      price?: number;
      starting_unit_in_decimal?: string;
      ending_unit_in_decimal?: string;
      price_in_decimal?: string;
      pricing_type?: PricingTypeEnum;
      package_size?: number;
    }
    export interface ShippingAddressEditCreateSubCustomerQuoteForItemsInputParam {
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
      validation_status?: ValidationStatusEnum;
    }
    export interface ContractTermEditCreateSubCustomerQuoteForItemsInputParam {
      action_at_term_end?: 'renew' | 'evergreen' | 'cancel';
      cancellation_cutoff_period?: number;
    }
    export interface SubscriptionEditCreateSubCustomerQuoteForItemsInputParam {
      id?: string;
      po_number?: string;
      trial_end?: number;
      /**
       * @deprecated Please refer API docs to use other attributes
       */
      setup_fee?: number;
      start_date?: number;
      contract_term_billing_cycle_on_renewal?: number;
    }

    export interface SubscriptionItemsEditCreateSubCustomerQuoteForItemsInputParam {
      item_price_id: string;
      quantity?: number;
      quantity_in_decimal?: string;
      unit_price?: number;
      unit_price_in_decimal?: string;
      billing_cycles?: number;
      trial_end?: number;
      service_period_days?: number;
      charge_on_event?: ChargeOnEventEnum;
      charge_once?: boolean;
      /**
       * @deprecated Please refer API docs to use other attributes
       */
      item_type?: ItemTypeEnum;
      charge_on_option?: ChargeOnOptionEnum;
    }
    export interface DiscountsEditCreateSubCustomerQuoteForItemsInputParam {
      apply_on?: ApplyOnEnum;
      duration_type: DurationTypeEnum;
      percentage?: number;
      amount?: number;
      period?: number;
      period_unit?: PeriodUnitEnum;
      included_in_mrr?: boolean;
      item_price_id?: string;
    }
    export interface ItemTiersEditCreateSubCustomerQuoteForItemsInputParam {
      item_price_id?: string;
      starting_unit?: number;
      ending_unit?: number;
      price?: number;
      starting_unit_in_decimal?: string;
      ending_unit_in_decimal?: string;
      price_in_decimal?: string;
      pricing_type?: PricingTypeEnum;
      package_size?: number;
    }
    export interface BillingAddressUpdateSubscriptionQuoteForItemsInputParam {
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
      validation_status?: ValidationStatusEnum;
    }
    export interface CustomerUpdateSubscriptionQuoteForItemsInputParam {
      vat_number?: string;
      vat_number_prefix?: string;
      registered_for_gst?: boolean;
    }
    export interface ShippingAddressUpdateSubscriptionQuoteForItemsInputParam {
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
      validation_status?: ValidationStatusEnum;
    }
    export interface ContractTermUpdateSubscriptionQuoteForItemsInputParam {
      action_at_term_end?: 'renew' | 'evergreen' | 'cancel' | 'renew_once';
      cancellation_cutoff_period?: number;
    }
    export interface SubscriptionUpdateSubscriptionQuoteForItemsInputParam {
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
      auto_collection?: AutoCollectionEnum;
      offline_payment_method?: OfflinePaymentMethodEnum;
      contract_term_billing_cycle_on_renewal?: number;
    }

    export interface SubscriptionItemsUpdateSubscriptionQuoteForItemsInputParam {
      item_price_id: string;
      quantity?: number;
      quantity_in_decimal?: string;
      unit_price?: number;
      unit_price_in_decimal?: string;
      billing_cycles?: number;
      trial_end?: number;
      service_period_days?: number;
      charge_on_event?: ChargeOnEventEnum;
      charge_once?: boolean;
      charge_on_option?: ChargeOnOptionEnum;
      /**
       * @deprecated Please refer API docs to use other attributes
       */
      item_type?: ItemTypeEnum;
    }
    export interface DiscountsUpdateSubscriptionQuoteForItemsInputParam {
      apply_on?: ApplyOnEnum;
      duration_type: DurationTypeEnum;
      percentage?: number;
      amount?: number;
      period?: number;
      period_unit?: PeriodUnitEnum;
      included_in_mrr?: boolean;
      item_price_id?: string;
      operation_type: OperationTypeEnum;
      id?: string;
    }
    export interface ItemTiersUpdateSubscriptionQuoteForItemsInputParam {
      item_price_id?: string;
      starting_unit?: number;
      ending_unit?: number;
      price?: number;
      starting_unit_in_decimal?: string;
      ending_unit_in_decimal?: string;
      price_in_decimal?: string;
      pricing_type?: PricingTypeEnum;
      package_size?: number;
    }
    export interface BillingAddressEditUpdateSubscriptionQuoteForItemsInputParam {
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
      validation_status?: ValidationStatusEnum;
    }
    export interface CustomerEditUpdateSubscriptionQuoteForItemsInputParam {
      vat_number?: string;
      vat_number_prefix?: string;
      registered_for_gst?: boolean;
    }
    export interface ShippingAddressEditUpdateSubscriptionQuoteForItemsInputParam {
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
      validation_status?: ValidationStatusEnum;
    }
    export interface ContractTermEditUpdateSubscriptionQuoteForItemsInputParam {
      action_at_term_end?: 'renew' | 'evergreen' | 'cancel' | 'renew_once';
      cancellation_cutoff_period?: number;
    }
    export interface SubscriptionEditUpdateSubscriptionQuoteForItemsInputParam {
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
      auto_collection?: AutoCollectionEnum;
      offline_payment_method?: OfflinePaymentMethodEnum;
      contract_term_billing_cycle_on_renewal?: number;
    }

    export interface SubscriptionItemsEditUpdateSubscriptionQuoteForItemsInputParam {
      item_price_id: string;
      quantity?: number;
      quantity_in_decimal?: string;
      unit_price?: number;
      unit_price_in_decimal?: string;
      billing_cycles?: number;
      trial_end?: number;
      service_period_days?: number;
      charge_on_event?: ChargeOnEventEnum;
      charge_once?: boolean;
      charge_on_option?: ChargeOnOptionEnum;
      /**
       * @deprecated Please refer API docs to use other attributes
       */
      item_type?: ItemTypeEnum;
    }
    export interface DiscountsEditUpdateSubscriptionQuoteForItemsInputParam {
      apply_on?: ApplyOnEnum;
      duration_type: DurationTypeEnum;
      percentage?: number;
      amount?: number;
      period?: number;
      period_unit?: PeriodUnitEnum;
      included_in_mrr?: boolean;
      item_price_id?: string;
      operation_type: OperationTypeEnum;
      id?: string;
    }
    export interface ItemTiersEditUpdateSubscriptionQuoteForItemsInputParam {
      item_price_id?: string;
      starting_unit?: number;
      ending_unit?: number;
      price?: number;
      starting_unit_in_decimal?: string;
      ending_unit_in_decimal?: string;
      price_in_decimal?: string;
      pricing_type?: PricingTypeEnum;
      package_size?: number;
    }
    export interface ShippingAddressCreateForChargeItemsAndChargesInputParam {
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
      validation_status?: ValidationStatusEnum;
    }

    export interface ChargesCreateForChargeItemsAndChargesInputParam {
      amount?: number;
      amount_in_decimal?: string;
      description?: string;
      avalara_sale_type?: AvalaraSaleTypeEnum;
      avalara_transaction_type?: number;
      avalara_service_type?: number;
      service_period?: number;
    }
    export interface DiscountsCreateForChargeItemsAndChargesInputParam {
      percentage?: number;
      amount?: number;
      apply_on: ApplyOnEnum;
      item_price_id?: string;
    }
    export interface ItemTiersCreateForChargeItemsAndChargesInputParam {
      item_price_id?: string;
      starting_unit?: number;
      ending_unit?: number;
      price?: number;
      starting_unit_in_decimal?: string;
      ending_unit_in_decimal?: string;
      price_in_decimal?: string;
      pricing_type?: PricingTypeEnum;
      package_size?: number;
    }
    export interface ItemPricesCreateForChargeItemsAndChargesInputParam {
      item_price_id?: string;
      quantity?: number;
      quantity_in_decimal?: string;
      unit_price?: number;
      unit_price_in_decimal?: string;
      service_period_days?: number;
    }
    export interface TaxProvidersFieldsCreateForChargeItemsAndChargesInputParam {
      provider_name?: string;
      field_id?: string;
      field_value?: string;
    }
    export interface ShippingAddressEditForChargeItemsAndChargesInputParam {
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
      validation_status?: ValidationStatusEnum;
    }

    export interface ChargesEditForChargeItemsAndChargesInputParam {
      amount?: number;
      amount_in_decimal?: string;
      description?: string;
      avalara_sale_type?: AvalaraSaleTypeEnum;
      avalara_transaction_type?: number;
      avalara_service_type?: number;
      service_period?: number;
    }
    export interface DiscountsEditForChargeItemsAndChargesInputParam {
      percentage?: number;
      amount?: number;
      apply_on: ApplyOnEnum;
      item_price_id?: string;
    }
    export interface ItemTiersEditForChargeItemsAndChargesInputParam {
      item_price_id?: string;
      starting_unit?: number;
      ending_unit?: number;
      price?: number;
      starting_unit_in_decimal?: string;
      ending_unit_in_decimal?: string;
      price_in_decimal?: string;
      pricing_type?: PricingTypeEnum;
      package_size?: number;
    }
    export interface ItemPricesEditForChargeItemsAndChargesInputParam {
      item_price_id?: string;
      quantity?: number;
      quantity_in_decimal?: string;
      unit_price?: number;
      unit_price_in_decimal?: string;
      service_period_days?: number;
    }
    export interface TaxProvidersFieldsEditForChargeItemsAndChargesInputParam {
      provider_name?: string;
      field_id?: string;
      field_value?: string;
    }
    export interface SubscriptionConvertInputParam {
      id?: string;
      auto_collection?: AutoCollectionEnum;
      po_number?: string;
      auto_close_invoices?: boolean;
    }
  }
}
