///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface Subscription {
    [key: string]: unknown;
    id: string;
    currency_code: string;
    plan_id: string;
    plan_quantity: number;
    plan_unit_price?: number;
    setup_fee?: number;
    billing_period?: number;
    billing_period_unit?: 'day' | 'week' | 'month' | 'year';
    start_date?: number;
    trial_end?: number;
    remaining_billing_cycles?: number;
    po_number?: string;
    auto_collection?: AutoCollection;
    plan_quantity_in_decimal?: string;
    plan_unit_price_in_decimal?: string;
    customer_id: string;
    plan_amount?: number;
    plan_free_quantity?: number;
    status:
      | 'future'
      | 'in_trial'
      | 'active'
      | 'non_renewing'
      | 'paused'
      | 'cancelled'
      | 'transferred';
    trial_start?: number;
    trial_end_action?: TrialEndAction;
    current_term_start?: number;
    current_term_end?: number;
    next_billing_at?: number;
    created_at?: number;
    started_at?: number;
    activated_at?: number;
    gift_id?: string;
    contract_term_billing_cycle_on_renewal?: number;
    override_relationship?: boolean;
    pause_date?: number;
    resume_date?: number;
    cancelled_at?: number;
    cancel_reason?:
      | 'not_paid'
      | 'no_card'
      | 'fraud_review_failed'
      | 'non_compliant_eu_customer'
      | 'tax_calculation_failed'
      | 'currency_incompatible_with_gateway'
      | 'non_compliant_customer';
    affiliate_token?: string;
    created_from_ip?: string;
    resource_version?: number;
    updated_at?: number;
    has_scheduled_advance_invoices: boolean;
    has_scheduled_changes: boolean;
    payment_source_id?: string;
    plan_free_quantity_in_decimal?: string;
    plan_amount_in_decimal?: string;
    cancel_schedule_created_at?: number;
    offline_payment_method?: OfflinePaymentMethod;
    channel?: Channel;
    net_term_days?: number;
    active_id?: string;
    subscription_items?: Subscription.SubscriptionItem[];
    item_tiers?: Subscription.ItemTier[];
    charged_items?: Subscription.ChargedItem[];
    due_invoices_count?: number;
    due_since?: number;
    total_dues?: number;
    mrr?: number;
    arr?: number;
    exchange_rate?: number;
    base_currency_code?: string;
    addons?: Subscription.Addon[];
    event_based_addons?: Subscription.EventBasedAddon[];
    charged_event_based_addons?: Subscription.ChargedEventBasedAddon[];
    coupon?: string;
    coupons?: Subscription.Coupon[];
    shipping_address?: Subscription.ShippingAddress;
    referral_info?: Subscription.ReferralInfo;
    invoice_notes?: string;
    meta_data?: any;
    metadata?: any;
    deleted: boolean;
    changes_scheduled_at?: number;
    contract_term?: Subscription.ContractTerm;
    cancel_reason_code?: string;
    free_period?: number;
    free_period_unit?: FreePeriodUnit;
    create_pending_invoices?: boolean;
    auto_close_invoices?: boolean;
    discounts?: Subscription.Discount[];
    business_entity_id?: string;
  }

  export namespace Subscription {
    export class SubscriptionResource {
      create(
        input: CreateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateResponse>>;

      createForCustomer(
        customer_id: string,
        input: CreateForCustomerInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateForCustomerResponse>>;

      createWithItems(
        customer_id: string,
        input: CreateWithItemsInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateWithItemsResponse>>;

      list(
        input?: ListInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ListResponse>>;

      subscriptionsForCustomer(
        customer_id: string,
        input?: SubscriptionsForCustomerInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<SubscriptionsForCustomerResponse>>;

      contractTermsForSubscription(
        subscription_id: string,
        input?: ContractTermsForSubscriptionInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ContractTermsForSubscriptionResponse>>;

      listDiscounts(
        subscription_id: string,
        input?: ListDiscountsInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ListDiscountsResponse>>;

      retrieve(
        subscription_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RetrieveResponse>>;

      retrieveWithScheduledChanges(
        subscription_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RetrieveWithScheduledChangesResponse>>;

      removeScheduledChanges(
        subscription_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RemoveScheduledChangesResponse>>;

      removeScheduledCancellation(
        subscription_id: string,
        input?: RemoveScheduledCancellationInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RemoveScheduledCancellationResponse>>;

      removeCoupons(
        subscription_id: string,
        input?: RemoveCouponsInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RemoveCouponsResponse>>;

      update(
        subscription_id: string,
        input?: UpdateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<UpdateResponse>>;

      updateForItems(
        subscription_id: string,
        input: UpdateForItemsInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<UpdateForItemsResponse>>;

      changeTermEnd(
        subscription_id: string,
        input: ChangeTermEndInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ChangeTermEndResponse>>;

      reactivate(
        subscription_id: string,
        input?: ReactivateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ReactivateResponse>>;

      addChargeAtTermEnd(
        subscription_id: string,
        input: AddChargeAtTermEndInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<AddChargeAtTermEndResponse>>;

      chargeAddonAtTermEnd(
        subscription_id: string,
        input: ChargeAddonAtTermEndInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ChargeAddonAtTermEndResponse>>;

      chargeFutureRenewals(
        subscription_id: string,
        input?: ChargeFutureRenewalsInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ChargeFutureRenewalsResponse>>;

      editAdvanceInvoiceSchedule(
        subscription_id: string,
        input?: EditAdvanceInvoiceScheduleInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<EditAdvanceInvoiceScheduleResponse>>;

      retrieveAdvanceInvoiceSchedule(
        subscription_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RetrieveAdvanceInvoiceScheduleResponse>>;

      removeAdvanceInvoiceSchedule(
        subscription_id: string,
        input?: RemoveAdvanceInvoiceScheduleInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RemoveAdvanceInvoiceScheduleResponse>>;

      regenerateInvoice(
        subscription_id: string,
        input?: RegenerateInvoiceInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RegenerateInvoiceResponse>>;

      importSubscription(
        input: ImportSubscriptionInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ImportSubscriptionResponse>>;

      importForCustomer(
        customer_id: string,
        input: ImportForCustomerInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ImportForCustomerResponse>>;

      importContractTerm(
        subscription_id: string,
        input?: ImportContractTermInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ImportContractTermResponse>>;

      importUnbilledCharges(
        subscription_id: string,
        input: ImportUnbilledChargesInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ImportUnbilledChargesResponse>>;

      importForItems(
        customer_id: string,
        input: ImportForItemsInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ImportForItemsResponse>>;

      overrideBillingProfile(
        subscription_id: string,
        input?: OverrideBillingProfileInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<OverrideBillingProfileResponse>>;

      delete(
        subscription_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<DeleteResponse>>;

      pause(
        subscription_id: string,
        input?: PauseInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<PauseResponse>>;

      cancel(
        subscription_id: string,
        input?: CancelInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CancelResponse>>;

      cancelForItems(
        subscription_id: string,
        input?: CancelForItemsInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CancelForItemsResponse>>;

      resume(
        subscription_id: string,
        input?: ResumeInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ResumeResponse>>;

      removeScheduledPause(
        subscription_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RemoveScheduledPauseResponse>>;

      removeScheduledResumption(
        subscription_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RemoveScheduledResumptionResponse>>;

      move(
        subscription_id: string,
        input: MoveInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<MoveResponse>>;
    }

    export interface CreateResponse {
      subscription: Subscription;
      customer: Customer;
      card?: Card;
      invoice?: Invoice;
      unbilled_charges?: UnbilledCharge[];
    }

    export interface CreateForCustomerResponse {
      subscription: Subscription;
      customer: Customer;
      card?: Card;
      invoice?: Invoice;
      unbilled_charges?: UnbilledCharge[];
    }

    export interface CreateWithItemsResponse {
      subscription: Subscription;
      customer: Customer;
      card?: Card;
      invoice?: Invoice;
      unbilled_charges?: UnbilledCharge[];
    }

    export interface ListResponse {
      list: { subscription: Subscription; customer: Customer; card?: Card }[];
      next_offset?: string;
    }

    export interface SubscriptionsForCustomerResponse {
      list: { subscription: Subscription }[];
      next_offset?: string;
    }

    export interface ContractTermsForSubscriptionResponse {
      list: { contract_term: ContractTerm }[];
      next_offset?: string;
    }

    export interface ListDiscountsResponse {
      list: { discount: Discount }[];
      next_offset?: string;
    }

    export interface RetrieveResponse {
      subscription: Subscription;
      customer: Customer;
      card?: Card;
    }

    export interface RetrieveWithScheduledChangesResponse {
      subscription: Subscription;
      customer: Customer;
      card?: Card;
    }

    export interface RemoveScheduledChangesResponse {
      subscription: Subscription;
      customer: Customer;
      card?: Card;
      credit_notes?: CreditNote[];
    }

    export interface RemoveScheduledCancellationResponse {
      subscription: Subscription;
      customer: Customer;
      card?: Card;
    }

    export interface RemoveCouponsResponse {
      subscription: Subscription;
      customer: Customer;
      card?: Card;
    }

    export interface UpdateResponse {
      subscription: Subscription;
      customer: Customer;
      card?: Card;
      invoice?: Invoice;
      unbilled_charges?: UnbilledCharge[];
      credit_notes?: CreditNote[];
    }

    export interface UpdateForItemsResponse {
      subscription: Subscription;
      customer: Customer;
      card?: Card;
      invoice?: Invoice;
      unbilled_charges?: UnbilledCharge[];
      credit_notes?: CreditNote[];
    }

    export interface ChangeTermEndResponse {
      subscription: Subscription;
      customer: Customer;
      card?: Card;
      invoice?: Invoice;
      unbilled_charges?: UnbilledCharge[];
      credit_notes?: CreditNote[];
    }

    export interface ReactivateResponse {
      subscription: Subscription;
      customer: Customer;
      card?: Card;
      invoice?: Invoice;
      unbilled_charges?: UnbilledCharge[];
    }

    export interface AddChargeAtTermEndResponse {
      estimate: Estimate;
    }

    export interface ChargeAddonAtTermEndResponse {
      estimate: Estimate;
    }

    export interface ChargeFutureRenewalsResponse {
      subscription: Subscription;
      customer: Customer;
      card?: Card;
      invoice?: Invoice;
      advance_invoice_schedules?: AdvanceInvoiceSchedule[];
    }

    export interface EditAdvanceInvoiceScheduleResponse {
      advance_invoice_schedules: AdvanceInvoiceSchedule[];
    }

    export interface RetrieveAdvanceInvoiceScheduleResponse {
      advance_invoice_schedules: AdvanceInvoiceSchedule[];
    }

    export interface RemoveAdvanceInvoiceScheduleResponse {
      subscription: Subscription;
      advance_invoice_schedules?: AdvanceInvoiceSchedule[];
    }

    export interface RegenerateInvoiceResponse {
      invoice?: Invoice;
      unbilled_charges?: UnbilledCharge[];
    }

    export interface ImportSubscriptionResponse {
      subscription: Subscription;
      customer: Customer;
      card?: Card;
      invoice?: Invoice;
    }

    export interface ImportForCustomerResponse {
      subscription: Subscription;
      customer: Customer;
      card?: Card;
      invoice?: Invoice;
    }

    export interface ImportContractTermResponse {
      contract_term: ContractTerm;
    }

    export interface ImportUnbilledChargesResponse {
      unbilled_charges: UnbilledCharge[];
    }

    export interface ImportForItemsResponse {
      subscription: Subscription;
      customer: Customer;
      card?: Card;
      invoice?: Invoice;
    }

    export interface OverrideBillingProfileResponse {
      subscription: Subscription;
      payment_source?: PaymentSource;
    }

    export interface DeleteResponse {
      subscription: Subscription;
      customer: Customer;
      card?: Card;
    }

    export interface PauseResponse {
      subscription: Subscription;
      customer: Customer;
      card?: Card;
      invoice?: Invoice;
      unbilled_charges?: UnbilledCharge[];
      credit_notes?: CreditNote[];
    }

    export interface CancelResponse {
      subscription: Subscription;
      customer: Customer;
      card?: Card;
      invoice?: Invoice;
      unbilled_charges?: UnbilledCharge[];
      credit_notes?: CreditNote[];
    }

    export interface CancelForItemsResponse {
      subscription: Subscription;
      customer: Customer;
      card?: Card;
      invoice?: Invoice;
      unbilled_charges?: UnbilledCharge[];
      credit_notes?: CreditNote[];
    }

    export interface ResumeResponse {
      subscription: Subscription;
      customer: Customer;
      card?: Card;
      invoice?: Invoice;
      unbilled_charges?: UnbilledCharge[];
    }

    export interface RemoveScheduledPauseResponse {
      subscription: Subscription;
      customer: Customer;
      card?: Card;
    }

    export interface RemoveScheduledResumptionResponse {
      subscription: Subscription;
      customer: Customer;
      card?: Card;
    }

    export interface MoveResponse {
      subscription: Subscription;
    }

    export interface SubscriptionItem {
      item_price_id: string;
      item_type: 'plan' | 'addon' | 'charge';
      quantity?: number;
      quantity_in_decimal?: string;
      metered_quantity?: string;
      last_calculated_at?: number;
      unit_price?: number;
      unit_price_in_decimal?: string;
      amount?: number;
      amount_in_decimal?: string;
      billing_period?: number;
      billing_period_unit?: 'day' | 'week' | 'month' | 'year';
      free_quantity?: number;
      free_quantity_in_decimal?: string;
      trial_end?: number;
      billing_cycles?: number;
      service_period_days?: number;
      charge_on_event?:
        | 'subscription_creation'
        | 'subscription_trial_start'
        | 'plan_activation'
        | 'subscription_activation'
        | 'contract_termination';
      charge_once?: boolean;
      charge_on_option?: 'immediately' | 'on_event';
      proration_type?: 'full_term' | 'partial_term' | 'none';
      usage_accumulation_reset_frequency?:
        | 'never'
        | 'subscription_billing_frequency';
    }
    export interface ItemTier {
      item_price_id: string;
      starting_unit: number;
      ending_unit?: number;
      price: number;
      starting_unit_in_decimal?: string;
      ending_unit_in_decimal?: string;
      price_in_decimal?: string;
      index: number;
    }
    export interface ChargedItem {
      item_price_id: string;
      last_charged_at: number;
    }
    export interface Addon {
      id: string;
      quantity?: number;
      unit_price?: number;
      amount?: number;
      trial_end?: number;
      remaining_billing_cycles?: number;
      quantity_in_decimal?: string;
      unit_price_in_decimal?: string;
      amount_in_decimal?: string;
      proration_type?: 'full_term' | 'partial_term' | 'none';
    }
    export interface EventBasedAddon {
      id: string;
      quantity: number;
      unit_price: number;
      service_period_in_days?: number;
      on_event:
        | 'subscription_creation'
        | 'subscription_trial_start'
        | 'plan_activation'
        | 'subscription_activation'
        | 'contract_termination';
      charge_once: boolean;
      quantity_in_decimal?: string;
      unit_price_in_decimal?: string;
    }
    export interface ChargedEventBasedAddon {
      id: string;
      last_charged_at: number;
    }
    export interface Coupon {
      coupon_id: string;
      apply_till?: number;
      applied_count: number;
      coupon_code?: string;
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
      validation_status?: ValidationStatus;
      index: number;
    }
    export interface ReferralInfo {
      referral_code?: string;
      coupon_code?: string;
      referrer_id?: string;
      external_reference_id?: string;
      reward_status?: 'pending' | 'paid' | 'invalid';
      referral_system?: ReferralSystem;
      account_id: string;
      campaign_id: string;
      external_campaign_id?: string;
      friend_offer_type?: FriendOfferType;
      referrer_reward_type?: ReferrerRewardType;
      notify_referral_system?: NotifyReferralSystem;
      destination_url?: string;
      post_purchase_widget_enabled: boolean;
    }
    export interface ContractTerm {
      id: string;
      status: 'active' | 'completed' | 'cancelled' | 'terminated';
      contract_start: number;
      contract_end: number;
      billing_cycle: number;
      action_at_term_end: 'renew' | 'evergreen' | 'cancel' | 'renew_once';
      total_contract_value: number;
      total_contract_value_before_tax: number;
      cancellation_cutoff_period?: number;
      created_at: number;
      subscription_id: string;
      remaining_billing_cycles?: number;
    }
    export interface Discount {
      id: string;
      invoice_name?: string;
      type: 'fixed_amount' | 'percentage';
      percentage?: number;
      amount?: number;
      currency_code?: string;
      duration_type: 'one_time' | 'forever' | 'limited_period';
      period?: number;
      period_unit?: 'day' | 'week' | 'month' | 'year';
      included_in_mrr: boolean;
      apply_on: 'invoice_amount' | 'specific_item_price';
      item_price_id?: string;
      created_at: number;
      apply_till?: number;
      applied_count?: number;
      coupon_id: string;
      index: number;
    }
    // REQUEST PARAMS
    //---------------

    export interface CreateInputParam {
      id?: string;
      plan_id: string;
      plan_quantity?: number;
      plan_quantity_in_decimal?: string;
      plan_unit_price?: number;
      plan_unit_price_in_decimal?: string;
      setup_fee?: number;
      trial_end?: number;
      billing_cycles?: number;
      mandatory_addons_to_remove?: string[];
      start_date?: number /**
       * @deprecated Please refer API docs to use other attributes
       */;

      coupon?: string;
      auto_collection?: AutoCollection;
      terms_to_charge?: number;
      billing_alignment_mode?: BillingAlignmentMode;
      offline_payment_method?: OfflinePaymentMethod;
      po_number?: string;
      coupon_ids?: string[];
      token_id?: string;
      affiliate_token?: string /**
       * @deprecated Please refer API docs to use other attributes
       */;

      created_from_ip?: string;
      invoice_notes?: string;
      invoice_date?: number;
      meta_data?: any;
      invoice_immediately?: boolean;
      free_period?: number;
      free_period_unit?: FreePeriodUnit;
      contract_term_billing_cycle_on_renewal?: number;
      trial_end_action?: TrialEndAction;
      client_profile_id?: string;
      payment_initiator?: PaymentInitiator;
      customer?: CustomerCreateInputParam;
      card?: CardCreateInputParam;
      bank_account?: BankAccountCreateInputParam;
      payment_method?: PaymentMethodCreateInputParam;
      payment_intent?: PaymentIntentCreateInputParam;
      billing_address?: BillingAddressCreateInputParam;
      shipping_address?: ShippingAddressCreateInputParam;
      statement_descriptor?: StatementDescriptorCreateInputParam;
      contract_term?: ContractTermCreateInputParam;
      entity_identifiers?: EntityIdentifiersCreateInputParam[];
      tax_providers_fields?: TaxProvidersFieldsCreateInputParam[];
      addons?: AddonsCreateInputParam[];
      event_based_addons?: EventBasedAddonsCreateInputParam[];
      coupons?: CouponsCreateInputParam[];
      [key: `cf_${string}`]: unknown;
    }
    export interface CreateForCustomerInputParam {
      id?: string;
      plan_id: string;
      plan_quantity?: number;
      plan_quantity_in_decimal?: string;
      plan_unit_price?: number;
      plan_unit_price_in_decimal?: string;
      setup_fee?: number;
      trial_end?: number;
      billing_cycles?: number;
      mandatory_addons_to_remove?: string[];
      start_date?: number /**
       * @deprecated Please refer API docs to use other attributes
       */;

      coupon?: string;
      auto_collection?: AutoCollection;
      terms_to_charge?: number;
      billing_alignment_mode?: BillingAlignmentMode;
      offline_payment_method?: OfflinePaymentMethod;
      po_number?: string;
      coupon_ids?: string[];
      payment_source_id?: string;
      override_relationship?: boolean;
      invoice_notes?: string;
      invoice_date?: number;
      meta_data?: any;
      invoice_immediately?: boolean;
      replace_primary_payment_source?: boolean;
      free_period?: number;
      free_period_unit?: FreePeriodUnit;
      contract_term_billing_cycle_on_renewal?: number;
      trial_end_action?: TrialEndAction;
      payment_initiator?: PaymentInitiator;
      shipping_address?: ShippingAddressCreateForCustomerInputParam;
      statement_descriptor?: StatementDescriptorCreateForCustomerInputParam;
      payment_intent?: PaymentIntentCreateForCustomerInputParam;
      contract_term?: ContractTermCreateForCustomerInputParam;
      addons?: AddonsCreateForCustomerInputParam[];
      event_based_addons?: EventBasedAddonsCreateForCustomerInputParam[];
      coupons?: CouponsCreateForCustomerInputParam[];
      [key: `cf_${string}`]: unknown;
    }
    export interface CreateWithItemsInputParam {
      id?: string;
      business_entity_id?: string;
      trial_end?: number;
      billing_cycles?: number /**
       * @deprecated Please refer API docs to use other attributes
       */;

      setup_fee?: number;
      mandatory_items_to_remove?: string[];
      net_term_days?: number;
      start_date?: number /**
       * @deprecated Please refer API docs to use other attributes
       */;

      coupon?: string;
      auto_collection?: AutoCollection;
      terms_to_charge?: number;
      billing_alignment_mode?: BillingAlignmentMode;
      po_number?: string;
      coupon_ids?: string[];
      payment_source_id?: string;
      override_relationship?: boolean;
      invoice_notes?: string;
      invoice_date?: number;
      meta_data?: any;
      invoice_immediately?: boolean;
      replace_primary_payment_source?: boolean;
      free_period?: number;
      free_period_unit?: FreePeriodUnit;
      contract_term_billing_cycle_on_renewal?: number;
      create_pending_invoices?: boolean;
      auto_close_invoices?: boolean;
      first_invoice_pending?: boolean;
      trial_end_action?: TrialEndAction;
      payment_initiator?: PaymentInitiator;
      shipping_address?: ShippingAddressCreateWithItemsInputParam;
      statement_descriptor?: StatementDescriptorCreateWithItemsInputParam;
      payment_intent?: PaymentIntentCreateWithItemsInputParam;
      contract_term?: ContractTermCreateWithItemsInputParam;
      subscription_items?: SubscriptionItemsCreateWithItemsInputParam[];
      discounts?: DiscountsCreateWithItemsInputParam[];
      item_tiers?: ItemTiersCreateWithItemsInputParam[];
      coupons?: CouponsCreateWithItemsInputParam[];
      [key: `cf_${string}`]: unknown;
    }
    export interface ListInputParam {
      limit?: number;
      offset?: string;
      include_deleted?: boolean;
      id?: filter.String;
      customer_id?: filter.String;
      plan_id?: filter.String;
      item_id?: filter.String;
      item_price_id?: filter.String;
      status?: filter.Enum;
      cancel_reason?: filter.Enum;
      cancel_reason_code?: filter.String;
      remaining_billing_cycles?: filter.Number;
      created_at?: filter.Timestamp;
      activated_at?: filter.Timestamp;
      next_billing_at?: filter.Timestamp;
      cancelled_at?: filter.Timestamp;
      has_scheduled_changes?: filter.Boolean;
      updated_at?: filter.Timestamp;
      offline_payment_method?: filter.Enum;
      auto_close_invoices?: filter.Boolean;
      override_relationship?: filter.Boolean;
      business_entity_id?: filter.String;
      channel?: filter.Enum;
      'sort_by[asc]'?: string;
      'sort_by[desc]'?: string;
      [key: `cf_${string}`]: unknown;
    }
    export interface SubscriptionsForCustomerInputParam {
      limit?: number;
      offset?: string;
    }
    export interface ContractTermsForSubscriptionInputParam {
      limit?: number;
      offset?: string;
    }
    export interface ListDiscountsInputParam {
      limit?: number;
      offset?: string;
    }
    export interface RemoveScheduledCancellationInputParam {
      billing_cycles?: number;
    }
    export interface RemoveCouponsInputParam {
      coupon_ids?: string[];
    }
    export interface UpdateInputParam {
      plan_id?: string;
      plan_quantity?: number;
      plan_unit_price?: number;
      setup_fee?: number;
      replace_addon_list?: boolean;
      mandatory_addons_to_remove?: string[];
      plan_quantity_in_decimal?: string;
      plan_unit_price_in_decimal?: string;
      invoice_date?: number;
      start_date?: number;
      trial_end?: number;
      billing_cycles?: number /**
       * @deprecated Please refer API docs to use other attributes
       */;

      coupon?: string;
      terms_to_charge?: number;
      reactivate_from?: number;
      billing_alignment_mode?: BillingAlignmentMode;
      auto_collection?: AutoCollection;
      offline_payment_method?: OfflinePaymentMethod;
      po_number?: string;
      coupon_ids?: string[];
      replace_coupon_list?: boolean;
      prorate?: boolean;
      end_of_term?: boolean;
      force_term_reset?: boolean;
      reactivate?: boolean;
      token_id?: string;
      invoice_notes?: string;
      meta_data?: any;
      invoice_immediately?: boolean;
      override_relationship?: boolean;
      changes_scheduled_at?: number;
      change_option?: ChangeOption;
      contract_term_billing_cycle_on_renewal?: number;
      free_period?: number;
      free_period_unit?: FreePeriodUnit;
      trial_end_action?: TrialEndAction;
      card?: CardUpdateInputParam;
      payment_method?: PaymentMethodUpdateInputParam;
      payment_intent?: PaymentIntentUpdateInputParam;
      billing_address?: BillingAddressUpdateInputParam;
      shipping_address?: ShippingAddressUpdateInputParam;
      statement_descriptor?: StatementDescriptorUpdateInputParam;
      customer?: CustomerUpdateInputParam;
      contract_term?: ContractTermUpdateInputParam;
      addons?: AddonsUpdateInputParam[];
      coupons?: CouponsUpdateInputParam[];
      event_based_addons?: EventBasedAddonsUpdateInputParam[];
      [key: `cf_${string}`]: unknown;
    }
    export interface UpdateForItemsInputParam {
      mandatory_items_to_remove?: string[];
      replace_items_list?: boolean /**
       * @deprecated Please refer API docs to use other attributes
       */;

      setup_fee?: number;
      net_term_days?: number;
      invoice_date?: number;
      start_date?: number;
      trial_end?: number;
      billing_cycles?: number /**
       * @deprecated Please refer API docs to use other attributes
       */;

      coupon?: string;
      terms_to_charge?: number;
      reactivate_from?: number;
      billing_alignment_mode?: BillingAlignmentMode;
      auto_collection?: AutoCollection;
      offline_payment_method?: OfflinePaymentMethod;
      po_number?: string;
      coupon_ids?: string[];
      replace_coupon_list?: boolean;
      prorate?: boolean;
      end_of_term?: boolean;
      force_term_reset?: boolean;
      reactivate?: boolean;
      token_id?: string;
      invoice_notes?: string;
      meta_data?: any;
      invoice_immediately?: boolean;
      override_relationship?: boolean;
      changes_scheduled_at?: number;
      change_option?: ChangeOption;
      contract_term_billing_cycle_on_renewal?: number;
      free_period?: number;
      free_period_unit?: FreePeriodUnit;
      create_pending_invoices?: boolean;
      auto_close_invoices?: boolean;
      trial_end_action?: TrialEndAction;
      payment_initiator?: PaymentInitiator;
      invoice_usages?: boolean;
      card?: CardUpdateForItemsInputParam;
      payment_method?: PaymentMethodUpdateForItemsInputParam;
      payment_intent?: PaymentIntentUpdateForItemsInputParam;
      billing_address?: BillingAddressUpdateForItemsInputParam;
      shipping_address?: ShippingAddressUpdateForItemsInputParam;
      statement_descriptor?: StatementDescriptorUpdateForItemsInputParam;
      customer?: CustomerUpdateForItemsInputParam;
      contract_term?: ContractTermUpdateForItemsInputParam;
      subscription_items?: SubscriptionItemsUpdateForItemsInputParam[];
      discounts?: DiscountsUpdateForItemsInputParam[];
      item_tiers?: ItemTiersUpdateForItemsInputParam[];
      coupons?: CouponsUpdateForItemsInputParam[];
      [key: `cf_${string}`]: unknown;
    }
    export interface ChangeTermEndInputParam {
      term_ends_at: number;
      prorate?: boolean;
      invoice_immediately?: boolean;
    }
    export interface ReactivateInputParam {
      trial_end?: number;
      billing_cycles?: number /**
       * @deprecated Please refer API docs to use other attributes
       */;

      trial_period_days?: number;
      reactivate_from?: number;
      invoice_immediately?: boolean;
      billing_alignment_mode?: BillingAlignmentMode;
      terms_to_charge?: number;
      invoice_date?: number;
      contract_term_billing_cycle_on_renewal?: number;
      payment_initiator?: PaymentInitiator;
      contract_term?: ContractTermReactivateInputParam;
      statement_descriptor?: StatementDescriptorReactivateInputParam;
      payment_intent?: PaymentIntentReactivateInputParam;
    }
    export interface AddChargeAtTermEndInputParam {
      amount?: number;
      description: string;
      amount_in_decimal?: string;
      avalara_sale_type?: AvalaraSaleType;
      avalara_transaction_type?: number;
      avalara_service_type?: number;
      date_from?: number;
      date_to?: number;
    }
    export interface ChargeAddonAtTermEndInputParam {
      addon_id: string;
      addon_quantity?: number;
      addon_unit_price?: number;
      addon_quantity_in_decimal?: string;
      addon_unit_price_in_decimal?: string;
      date_from?: number;
      date_to?: number;
    }
    export interface ChargeFutureRenewalsInputParam {
      terms_to_charge?: number;
      invoice_immediately?: boolean;
      schedule_type?: ScheduleType;
      fixed_interval_schedule?: FixedIntervalScheduleChargeFutureRenewalsInputParam;
      specific_dates_schedule?: SpecificDatesScheduleChargeFutureRenewalsInputParam[];
    }
    export interface EditAdvanceInvoiceScheduleInputParam {
      terms_to_charge?: number;
      schedule_type?: ScheduleType;
      fixed_interval_schedule?: FixedIntervalScheduleEditAdvanceInvoiceScheduleInputParam;
      specific_dates_schedule?: SpecificDatesScheduleEditAdvanceInvoiceScheduleInputParam[];
    }
    export interface RemoveAdvanceInvoiceScheduleInputParam {
      specific_dates_schedule?: SpecificDatesScheduleRemoveAdvanceInvoiceScheduleInputParam[];
    }
    export interface RegenerateInvoiceInputParam {
      date_from?: number;
      date_to?: number;
      prorate?: boolean;
      invoice_immediately?: boolean;
    }
    export interface ImportSubscriptionInputParam {
      id?: string;
      client_profile_id?: string;
      plan_id: string;
      plan_quantity?: number;
      plan_quantity_in_decimal?: string;
      plan_unit_price?: number;
      plan_unit_price_in_decimal?: string;
      setup_fee?: number;
      trial_end?: number;
      billing_cycles?: number;
      start_date?: number;
      auto_collection?: AutoCollection;
      po_number?: string;
      coupon_ids?: string[];
      contract_term_billing_cycle_on_renewal?: number;
      status:
        | 'future'
        | 'in_trial'
        | 'active'
        | 'non_renewing'
        | 'paused'
        | 'cancelled'
        | 'transferred';
      current_term_end?: number;
      current_term_start?: number;
      trial_start?: number;
      cancelled_at?: number;
      started_at?: number;
      activated_at?: number;
      pause_date?: number;
      resume_date?: number;
      create_current_term_invoice?: boolean;
      affiliate_token?: string;
      invoice_notes?: string;
      meta_data?: any;
      customer?: CustomerImportSubscriptionInputParam;
      contract_term?: ContractTermImportSubscriptionInputParam;
      card?: CardImportSubscriptionInputParam;
      payment_method?: PaymentMethodImportSubscriptionInputParam;
      billing_address?: BillingAddressImportSubscriptionInputParam;
      shipping_address?: ShippingAddressImportSubscriptionInputParam;
      transaction?: TransactionImportSubscriptionInputParam;
      addons?: AddonsImportSubscriptionInputParam[];
      event_based_addons?: EventBasedAddonsImportSubscriptionInputParam[];
      charged_event_based_addons?: ChargedEventBasedAddonsImportSubscriptionInputParam[];
      coupons?: CouponsImportSubscriptionInputParam[];
      [key: `cf_${string}`]: unknown;
    }
    export interface ImportForCustomerInputParam {
      id?: string;
      plan_id: string;
      plan_quantity?: number;
      plan_quantity_in_decimal?: string;
      plan_unit_price?: number;
      plan_unit_price_in_decimal?: string;
      setup_fee?: number;
      trial_end?: number;
      billing_cycles?: number;
      start_date?: number;
      auto_collection?: AutoCollection;
      po_number?: string;
      coupon_ids?: string[];
      payment_source_id?: string;
      status:
        | 'future'
        | 'in_trial'
        | 'active'
        | 'non_renewing'
        | 'paused'
        | 'cancelled'
        | 'transferred';
      current_term_end?: number;
      current_term_start?: number;
      trial_start?: number;
      cancelled_at?: number;
      started_at?: number;
      activated_at?: number;
      pause_date?: number;
      resume_date?: number;
      contract_term_billing_cycle_on_renewal?: number;
      create_current_term_invoice?: boolean;
      invoice_notes?: string;
      meta_data?: any;
      contract_term?: ContractTermImportForCustomerInputParam;
      transaction?: TransactionImportForCustomerInputParam;
      shipping_address?: ShippingAddressImportForCustomerInputParam;
      addons?: AddonsImportForCustomerInputParam[];
      event_based_addons?: EventBasedAddonsImportForCustomerInputParam[];
      charged_event_based_addons?: ChargedEventBasedAddonsImportForCustomerInputParam[];
      coupons?: CouponsImportForCustomerInputParam[];
      [key: `cf_${string}`]: unknown;
    }
    export interface ImportContractTermInputParam {
      contract_term_billing_cycle_on_renewal?: number;
      contract_term?: ContractTermImportContractTermInputParam;
    }
    export interface ImportUnbilledChargesInputParam {
      unbilled_charges?: UnbilledChargesImportUnbilledChargesInputParam[];
      discounts?: DiscountsImportUnbilledChargesInputParam[];
      tiers?: TiersImportUnbilledChargesInputParam[];
    }
    export interface ImportForItemsInputParam {
      id?: string;
      trial_end?: number;
      billing_cycles?: number /**
       * @deprecated Please refer API docs to use other attributes
       */;

      setup_fee?: number;
      net_term_days?: number;
      start_date?: number;
      auto_collection?: AutoCollection;
      po_number?: string;
      coupon_ids?: string[];
      payment_source_id?: string;
      status:
        | 'future'
        | 'in_trial'
        | 'active'
        | 'non_renewing'
        | 'paused'
        | 'cancelled'
        | 'transferred';
      current_term_end?: number;
      current_term_start?: number;
      trial_start?: number;
      cancelled_at?: number;
      started_at?: number;
      activated_at?: number;
      pause_date?: number;
      resume_date?: number;
      contract_term_billing_cycle_on_renewal?: number;
      create_current_term_invoice?: boolean;
      invoice_notes?: string;
      meta_data?: any;
      cancel_reason_code?: string;
      create_pending_invoices?: boolean;
      auto_close_invoices?: boolean;
      contract_term?: ContractTermImportForItemsInputParam;
      transaction?: TransactionImportForItemsInputParam;
      shipping_address?: ShippingAddressImportForItemsInputParam;
      subscription_items?: SubscriptionItemsImportForItemsInputParam[];
      discounts?: DiscountsImportForItemsInputParam[];
      charged_items?: ChargedItemsImportForItemsInputParam[];
      item_tiers?: ItemTiersImportForItemsInputParam[];
      coupons?: CouponsImportForItemsInputParam[];
      [key: `cf_${string}`]: unknown;
    }
    export interface OverrideBillingProfileInputParam {
      payment_source_id?: string;
      auto_collection?: AutoCollection;
    }
    export interface PauseInputParam {
      pause_option?: PauseOption;
      pause_date?: number;
      unbilled_charges_handling?: UnbilledChargesHandling;
      invoice_dunning_handling?: InvoiceDunningHandling;
      skip_billing_cycles?: number;
      resume_date?: number;
    }
    export interface CancelInputParam {
      cancel_option?: CancelOption;
      end_of_term?: boolean;
      cancel_at?: number;
      credit_option_for_current_term_charges?: CreditOptionForCurrentTermCharges;
      unbilled_charges_option?: UnbilledChargesOption;
      account_receivables_handling?: AccountReceivablesHandling;
      refundable_credits_handling?: RefundableCreditsHandling;
      contract_term_cancel_option?: ContractTermCancelOption;
      invoice_date?: number;
      cancel_reason_code?: string;
      event_based_addons?: EventBasedAddonsCancelInputParam[];
    }
    export interface CancelForItemsInputParam {
      cancel_option?: CancelOption;
      end_of_term?: boolean;
      cancel_at?: number;
      credit_option_for_current_term_charges?: CreditOptionForCurrentTermCharges;
      unbilled_charges_option?: UnbilledChargesOption;
      account_receivables_handling?: AccountReceivablesHandling;
      refundable_credits_handling?: RefundableCreditsHandling;
      contract_term_cancel_option?: ContractTermCancelOption;
      invoice_date?: number;
      cancel_reason_code?: string;
      subscription_items?: SubscriptionItemsCancelForItemsInputParam[];
    }
    export interface ResumeInputParam {
      resume_option?: ResumeOption;
      resume_date?: number;
      charges_handling?: ChargesHandling;
      unpaid_invoices_handling?: UnpaidInvoicesHandling;
      payment_initiator?: PaymentInitiator;
      payment_intent?: PaymentIntentResumeInputParam;
    }
    export interface MoveInputParam {
      to_customer_id: string;
      copy_payment_source?: boolean;
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
    export interface StatementDescriptorCreateInputParam {
      descriptor?: string;
    }
    export interface CustomerCreateInputParam {
      id?: string;
      email?: string;
      first_name?: string;
      last_name?: string;
      company?: string;
      phone?: string;
      locale?: string;
      taxability?: Taxability;
      entity_code?: EntityCode;
      exempt_number?: string;
      net_term_days?: number;
      taxjar_exemption_category?: TaxjarExemptionCategory;
      auto_collection?: AutoCollection;
      offline_payment_method?: OfflinePaymentMethod;
      allow_direct_debit?: boolean;
      consolidated_invoicing?: boolean;
      vat_number?: string;
      vat_number_prefix?: string;
      entity_identifier_scheme?: string;
      entity_identifier_standard?: string;
      is_einvoice_enabled?: boolean;
      einvoicing_method?: EinvoicingMethod;
      registered_for_gst?: boolean;
      business_customer_without_vat_number?: boolean;
      exemption_details?: any;
      customer_type?: CustomerType;
    }
    export interface ShippingAddressCreateInputParam {
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
    export interface ContractTermCreateInputParam {
      action_at_term_end?: 'renew' | 'evergreen' | 'cancel';
      cancellation_cutoff_period?: number;
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

    export interface EventBasedAddonsCreateInputParam {
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
    export interface CouponsCreateInputParam {
      /**
       * @deprecated Please refer API docs to use other attributes
       */
      coupon_id?: string;
      /**
       * @deprecated Please refer API docs to use other attributes
       */
      apply_till?: number;
    }
    export interface AddonsCreateInputParam {
      id?: string;
      quantity?: number;
      quantity_in_decimal?: string;
      unit_price?: number;
      unit_price_in_decimal?: string;
      billing_cycles?: number;
      trial_end?: number;
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
    export interface StatementDescriptorCreateForCustomerInputParam {
      descriptor?: string;
    }
    export interface ShippingAddressCreateForCustomerInputParam {
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
    export interface ContractTermCreateForCustomerInputParam {
      action_at_term_end?: 'renew' | 'evergreen' | 'cancel';
      cancellation_cutoff_period?: number;
    }
    export interface PaymentIntentCreateForCustomerInputParam {
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

    export interface EventBasedAddonsCreateForCustomerInputParam {
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
    export interface CouponsCreateForCustomerInputParam {
      /**
       * @deprecated Please refer API docs to use other attributes
       */
      coupon_id?: string;
      /**
       * @deprecated Please refer API docs to use other attributes
       */
      apply_till?: number;
    }
    export interface AddonsCreateForCustomerInputParam {
      id?: string;
      quantity?: number;
      quantity_in_decimal?: string;
      unit_price?: number;
      unit_price_in_decimal?: string;
      billing_cycles?: number;
      trial_end?: number;
    }
    export interface StatementDescriptorCreateWithItemsInputParam {
      descriptor?: string;
    }
    export interface ShippingAddressCreateWithItemsInputParam {
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
    export interface ContractTermCreateWithItemsInputParam {
      action_at_term_end?: 'renew' | 'evergreen' | 'cancel';
      /**
       * @deprecated Please refer API docs to use other attributes
       */
      contract_start?: number;
      cancellation_cutoff_period?: number;
    }
    export interface PaymentIntentCreateWithItemsInputParam {
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

    export interface SubscriptionItemsCreateWithItemsInputParam {
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
      usage_accumulation_reset_frequency?: UsageAccumulationResetFrequency;
    }
    export interface DiscountsCreateWithItemsInputParam {
      apply_on: ApplyOn;
      duration_type: DurationType;
      percentage?: number;
      amount?: number;
      period?: number;
      period_unit?: PeriodUnit;
      included_in_mrr?: boolean;
      item_price_id?: string;
    }
    export interface CouponsCreateWithItemsInputParam {
      /**
       * @deprecated Please refer API docs to use other attributes
       */
      coupon_id?: string;
      /**
       * @deprecated Please refer API docs to use other attributes
       */
      apply_till?: number;
    }
    export interface ItemTiersCreateWithItemsInputParam {
      item_price_id?: string;
      starting_unit?: number;
      ending_unit?: number;
      price?: number;
      starting_unit_in_decimal?: string;
      ending_unit_in_decimal?: string;
      price_in_decimal?: string;
    }
    export interface BillingAddressUpdateInputParam {
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
    export interface CustomerUpdateInputParam {
      vat_number?: string;
      vat_number_prefix?: string;
      entity_identifier_scheme?: string;
      is_einvoice_enabled?: boolean;
      einvoicing_method?: EinvoicingMethod;
      entity_identifier_standard?: string;
      business_customer_without_vat_number?: boolean;
      registered_for_gst?: boolean;
    }
    export interface StatementDescriptorUpdateInputParam {
      descriptor?: string;
    }
    export interface ShippingAddressUpdateInputParam {
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
    export interface PaymentMethodUpdateInputParam {
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
    export interface ContractTermUpdateInputParam {
      action_at_term_end?: 'renew' | 'evergreen' | 'cancel' | 'renew_once';
      cancellation_cutoff_period?: number;
    }
    export interface PaymentIntentUpdateInputParam {
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
    export interface CardUpdateInputParam {
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

    export interface EventBasedAddonsUpdateInputParam {
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
    export interface CouponsUpdateInputParam {
      /**
       * @deprecated Please refer API docs to use other attributes
       */
      coupon_id?: string;
      /**
       * @deprecated Please refer API docs to use other attributes
       */
      apply_till?: number;
    }
    export interface AddonsUpdateInputParam {
      id?: string;
      quantity?: number;
      unit_price?: number;
      billing_cycles?: number;
      quantity_in_decimal?: string;
      unit_price_in_decimal?: string;
      trial_end?: number;
      proration_type?: ProrationType;
    }
    export interface BillingAddressUpdateForItemsInputParam {
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
    export interface CustomerUpdateForItemsInputParam {
      vat_number?: string;
      vat_number_prefix?: string;
      entity_identifier_scheme?: string;
      is_einvoice_enabled?: boolean;
      einvoicing_method?: EinvoicingMethod;
      entity_identifier_standard?: string;
      business_customer_without_vat_number?: boolean;
      registered_for_gst?: boolean;
    }
    export interface StatementDescriptorUpdateForItemsInputParam {
      descriptor?: string;
    }
    export interface ShippingAddressUpdateForItemsInputParam {
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
    export interface PaymentMethodUpdateForItemsInputParam {
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
    export interface ContractTermUpdateForItemsInputParam {
      action_at_term_end?: 'renew' | 'evergreen' | 'cancel' | 'renew_once';
      cancellation_cutoff_period?: number;
      /**
       * @deprecated Please refer API docs to use other attributes
       */
      contract_start?: number;
    }
    export interface PaymentIntentUpdateForItemsInputParam {
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
    export interface CardUpdateForItemsInputParam {
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

    export interface SubscriptionItemsUpdateForItemsInputParam {
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
      proration_type?: ProrationType;
      usage_accumulation_reset_frequency?: UsageAccumulationResetFrequency;
    }
    export interface DiscountsUpdateForItemsInputParam {
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
    export interface CouponsUpdateForItemsInputParam {
      /**
       * @deprecated Please refer API docs to use other attributes
       */
      coupon_id?: string;
      /**
       * @deprecated Please refer API docs to use other attributes
       */
      apply_till?: number;
    }
    export interface ItemTiersUpdateForItemsInputParam {
      item_price_id?: string;
      starting_unit?: number;
      ending_unit?: number;
      price?: number;
      starting_unit_in_decimal?: string;
      ending_unit_in_decimal?: string;
      price_in_decimal?: string;
    }
    export interface StatementDescriptorReactivateInputParam {
      descriptor?: string;
    }
    export interface PaymentIntentReactivateInputParam {
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
    export interface ContractTermReactivateInputParam {
      action_at_term_end?: 'renew' | 'evergreen' | 'cancel';
      cancellation_cutoff_period?: number;
    }

    export interface FixedIntervalScheduleChargeFutureRenewalsInputParam {
      number_of_occurrences?: number;
      days_before_renewal?: number;
      end_schedule_on?: EndScheduleOn;
      end_date?: number;
    }

    export interface SpecificDatesScheduleChargeFutureRenewalsInputParam {
      terms_to_charge?: number;
      date?: number;
    }
    export interface FixedIntervalScheduleEditAdvanceInvoiceScheduleInputParam {
      number_of_occurrences?: number;
      days_before_renewal?: number;
      end_schedule_on?: EndScheduleOn;
      end_date?: number;
    }

    export interface SpecificDatesScheduleEditAdvanceInvoiceScheduleInputParam {
      id?: string;
      terms_to_charge?: number;
      date?: number;
    }
    export interface SpecificDatesScheduleRemoveAdvanceInvoiceScheduleInputParam {
      id?: string;
    }
    export interface BillingAddressImportSubscriptionInputParam {
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
    export interface TransactionImportSubscriptionInputParam {
      amount?: number;
      payment_method?: PaymentMethod;
      reference_number?: string;
      date?: number;
    }
    export interface CustomerImportSubscriptionInputParam {
      id?: string;
      email?: string;
      first_name?: string;
      last_name?: string;
      company?: string;
      phone?: string;
      locale?: string;
      taxability?: Taxability;
      entity_code?: EntityCode;
      exempt_number?: string;
      net_term_days?: number;
      taxjar_exemption_category?: TaxjarExemptionCategory;
      customer_type?: CustomerType;
      auto_collection?: AutoCollection;
      allow_direct_debit?: boolean;
      vat_number?: string;
      vat_number_prefix?: string;
    }
    export interface ShippingAddressImportSubscriptionInputParam {
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
    export interface PaymentMethodImportSubscriptionInputParam {
      type?: Type;
      /**
       * @deprecated Please refer API docs to use other attributes
       */
      gateway?: Gateway;
      gateway_account_id?: string;
      reference_id?: string;
      issuing_country?: string;
      additional_information?: any;
    }
    export interface ContractTermImportSubscriptionInputParam {
      id?: string;
      created_at?: number;
      contract_start?: number;
      billing_cycle?: number;
      total_amount_raised?: number;
      total_amount_raised_before_tax?: number;
      action_at_term_end?: 'renew' | 'evergreen' | 'cancel' | 'renew_once';
      cancellation_cutoff_period?: number;
    }
    export interface CardImportSubscriptionInputParam {
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
      additional_information?: any;
    }

    export interface ChargedEventBasedAddonsImportSubscriptionInputParam {
      id?: string;
      last_charged_at?: number;
    }
    export interface EventBasedAddonsImportSubscriptionInputParam {
      id?: string;
      quantity?: number;
      unit_price?: number;
      quantity_in_decimal?: string;
      unit_price_in_decimal?: string;
      service_period_in_days?: number;
      on_event?: OnEvent;
      charge_once?: boolean;
    }
    export interface CouponsImportSubscriptionInputParam {
      /**
       * @deprecated Please refer API docs to use other attributes
       */
      coupon_id?: string;
      /**
       * @deprecated Please refer API docs to use other attributes
       */
      apply_till?: number;
    }
    export interface AddonsImportSubscriptionInputParam {
      id?: string;
      quantity?: number;
      quantity_in_decimal?: string;
      unit_price?: number;
      unit_price_in_decimal?: string;
      billing_cycles?: number;
    }
    export interface TransactionImportForCustomerInputParam {
      amount?: number;
      payment_method?: PaymentMethod;
      reference_number?: string;
      date?: number;
    }
    export interface ShippingAddressImportForCustomerInputParam {
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
    export interface ContractTermImportForCustomerInputParam {
      id?: string;
      created_at?: number;
      contract_start?: number;
      billing_cycle?: number;
      total_amount_raised?: number;
      total_amount_raised_before_tax?: number;
      action_at_term_end?: 'renew' | 'evergreen' | 'cancel' | 'renew_once';
      cancellation_cutoff_period?: number;
    }

    export interface ChargedEventBasedAddonsImportForCustomerInputParam {
      id?: string;
      last_charged_at?: number;
    }
    export interface EventBasedAddonsImportForCustomerInputParam {
      id?: string;
      quantity?: number;
      unit_price?: number;
      quantity_in_decimal?: string;
      unit_price_in_decimal?: string;
      service_period_in_days?: number;
      on_event?: OnEvent;
      charge_once?: boolean;
    }
    export interface CouponsImportForCustomerInputParam {
      /**
       * @deprecated Please refer API docs to use other attributes
       */
      coupon_id?: string;
      /**
       * @deprecated Please refer API docs to use other attributes
       */
      apply_till?: number;
    }
    export interface AddonsImportForCustomerInputParam {
      id?: string;
      quantity?: number;
      quantity_in_decimal?: string;
      unit_price?: number;
      unit_price_in_decimal?: string;
      billing_cycles?: number;
    }
    export interface ContractTermImportContractTermInputParam {
      id?: string;
      created_at?: number;
      contract_start?: number;
      contract_end?: number;
      status?: 'active' | 'completed' | 'cancelled' | 'terminated';
      total_amount_raised?: number;
      total_amount_raised_before_tax?: number;
      total_contract_value?: number;
      total_contract_value_before_tax?: number;
      billing_cycle?: number;
      action_at_term_end?: 'renew' | 'evergreen' | 'cancel' | 'renew_once';
      cancellation_cutoff_period?: number;
    }

    export interface TiersImportUnbilledChargesInputParam {
      unbilled_charge_id: string;
      starting_unit?: number;
      ending_unit?: number;
      quantity_used?: number;
      unit_amount?: number;
      starting_unit_in_decimal?: string;
      ending_unit_in_decimal?: string;
      quantity_used_in_decimal?: string;
      unit_amount_in_decimal?: string;
    }
    export interface DiscountsImportUnbilledChargesInputParam {
      unbilled_charge_id?: string;
      entity_type?:
        | 'item_level_coupon'
        | 'document_level_coupon'
        | 'item_level_discount'
        | 'document_level_discount';
      entity_id?: string;
      description?: string;
      amount: number;
    }
    export interface UnbilledChargesImportUnbilledChargesInputParam {
      id?: string;
      date_from: number;
      date_to: number;
      entity_type:
        | 'adhoc'
        | 'plan_item_price'
        | 'addon_item_price'
        | 'charge_item_price';
      entity_id?: string;
      description?: string;
      unit_amount?: number;
      quantity?: number;
      amount?: number;
      unit_amount_in_decimal?: string;
      quantity_in_decimal?: string;
      amount_in_decimal?: string;
      discount_amount?: number;
      use_for_proration?: boolean;
      is_advance_charge?: boolean;
    }
    export interface TransactionImportForItemsInputParam {
      amount?: number;
      payment_method?: PaymentMethod;
      reference_number?: string;
      date?: number;
    }
    export interface ShippingAddressImportForItemsInputParam {
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
    export interface ContractTermImportForItemsInputParam {
      id?: string;
      created_at?: number;
      contract_start?: number;
      billing_cycle?: number;
      total_amount_raised?: number;
      total_amount_raised_before_tax?: number;
      action_at_term_end?: 'renew' | 'evergreen' | 'cancel' | 'renew_once';
      cancellation_cutoff_period?: number;
    }

    export interface SubscriptionItemsImportForItemsInputParam {
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
    }
    export interface DiscountsImportForItemsInputParam {
      apply_on: ApplyOn;
      duration_type: DurationType;
      percentage?: number;
      amount?: number;
      period?: number;
      period_unit?: PeriodUnit;
      included_in_mrr?: boolean;
      item_price_id?: string;
    }
    export interface CouponsImportForItemsInputParam {
      /**
       * @deprecated Please refer API docs to use other attributes
       */
      coupon_id?: string;
      /**
       * @deprecated Please refer API docs to use other attributes
       */
      apply_till?: number;
    }
    export interface ItemTiersImportForItemsInputParam {
      item_price_id?: string;
      starting_unit?: number;
      ending_unit?: number;
      price?: number;
      starting_unit_in_decimal?: string;
      ending_unit_in_decimal?: string;
      price_in_decimal?: string;
    }
    export interface ChargedItemsImportForItemsInputParam {
      item_price_id?: string;
      last_charged_at?: number;
    }
    export interface EventBasedAddonsCancelInputParam {
      id?: string;
      quantity?: number;
      unit_price?: number;
      service_period_in_days?: number;
    }
    export interface SubscriptionItemsCancelForItemsInputParam {
      item_price_id?: string;
      quantity?: number;
      quantity_in_decimal?: string;
      unit_price?: number;
      unit_price_in_decimal?: string;
      service_period_days?: number;
    }
    export interface PaymentIntentResumeInputParam {
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
  }
}
