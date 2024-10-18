///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>

declare module 'chargebee' {
  export interface Estimate {
    created_at: number;
    subscription_estimate?: SubscriptionEstimate;
    subscription_estimates?: SubscriptionEstimate[];
    invoice_estimate?: InvoiceEstimate;
    invoice_estimates?: InvoiceEstimate[];
    payment_schedule_estimates?: PaymentScheduleEstimate[];
    next_invoice_estimate?: InvoiceEstimate;
    credit_note_estimates?: CreditNoteEstimate[];
    unbilled_charge_estimates?: UnbilledCharge[];
  }

  export namespace Estimate {
    export class EstimateResource {
      createSubscription(
        input: CreateSubscriptionInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateSubscriptionResponse>>;

      createSubItemEstimate(
        input: CreateSubItemEstimateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateSubItemEstimateResponse>>;

      createSubForCustomerEstimate(
        customer_id: string,
        input: CreateSubForCustomerEstimateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateSubForCustomerEstimateResponse>>;

      createSubItemForCustomerEstimate(
        customer_id: string,
        input: CreateSubItemForCustomerEstimateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateSubItemForCustomerEstimateResponse>>;

      updateSubscription(
        input: UpdateSubscriptionInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<UpdateSubscriptionResponse>>;

      updateSubscriptionForItems(
        input: UpdateSubscriptionForItemsInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<UpdateSubscriptionForItemsResponse>>;

      renewalEstimate(
        subscription_id: string,
        input?: RenewalEstimateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RenewalEstimateResponse>>;

      advanceInvoiceEstimate(
        subscription_id: string,
        input?: AdvanceInvoiceEstimateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<AdvanceInvoiceEstimateResponse>>;

      regenerateInvoiceEstimate(
        subscription_id: string,
        input?: RegenerateInvoiceEstimateInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RegenerateInvoiceEstimateResponse>>;

      upcomingInvoicesEstimate(
        customer_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<UpcomingInvoicesEstimateResponse>>;

      changeTermEnd(
        subscription_id: string,
        input: ChangeTermEndInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ChangeTermEndResponse>>;

      cancelSubscription(
        subscription_id: string,
        input?: CancelSubscriptionInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CancelSubscriptionResponse>>;

      cancelSubscriptionForItems(
        subscription_id: string,
        input?: CancelSubscriptionForItemsInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CancelSubscriptionForItemsResponse>>;

      pauseSubscription(
        subscription_id: string,
        input?: PauseSubscriptionInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<PauseSubscriptionResponse>>;

      resumeSubscription(
        subscription_id: string,
        input?: ResumeSubscriptionInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ResumeSubscriptionResponse>>;

      giftSubscription(
        input: GiftSubscriptionInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<GiftSubscriptionResponse>>;

      giftSubscriptionForItems(
        input: GiftSubscriptionForItemsInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<GiftSubscriptionForItemsResponse>>;

      createInvoice(
        input?: CreateInvoiceInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateInvoiceResponse>>;

      createInvoiceForItems(
        input: CreateInvoiceForItemsInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<CreateInvoiceForItemsResponse>>;

      paymentSchedules(
        input: PaymentSchedulesInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<PaymentSchedulesResponse>>;
    }

    export interface CreateSubscriptionResponse {
      estimate: Estimate;
    }

    export interface CreateSubItemEstimateResponse {
      estimate: Estimate;
    }

    export interface CreateSubForCustomerEstimateResponse {
      estimate: Estimate;
    }

    export interface CreateSubItemForCustomerEstimateResponse {
      estimate: Estimate;
    }

    export interface UpdateSubscriptionResponse {
      estimate: Estimate;
    }

    export interface UpdateSubscriptionForItemsResponse {
      estimate: Estimate;
    }

    export interface RenewalEstimateResponse {
      estimate: Estimate;
    }

    export interface AdvanceInvoiceEstimateResponse {
      estimate: Estimate;
    }

    export interface RegenerateInvoiceEstimateResponse {
      estimate: Estimate;
    }

    export interface UpcomingInvoicesEstimateResponse {
      estimate: Estimate;
    }

    export interface ChangeTermEndResponse {
      estimate: Estimate;
    }

    export interface CancelSubscriptionResponse {
      estimate: Estimate;
    }

    export interface CancelSubscriptionForItemsResponse {
      estimate: Estimate;
    }

    export interface PauseSubscriptionResponse {
      estimate: Estimate;
    }

    export interface ResumeSubscriptionResponse {
      estimate: Estimate;
    }

    export interface GiftSubscriptionResponse {
      estimate: Estimate;
    }

    export interface GiftSubscriptionForItemsResponse {
      estimate: Estimate;
    }

    export interface CreateInvoiceResponse {
      estimate: Estimate;
    }

    export interface CreateInvoiceForItemsResponse {
      estimate: Estimate;
    }

    export interface PaymentSchedulesResponse {
      estimate: Estimate;
    }

    // REQUEST PARAMS
    //---------------

    export interface CreateSubscriptionInputParam {
      billing_cycles?: number;
      mandatory_addons_to_remove?: string[];
      terms_to_charge?: number;
      billing_alignment_mode?: BillingAlignmentMode;
      coupon_ids?: string[];
      invoice_immediately?: boolean;
      invoice_date?: number;
      client_profile_id?: string;
      subscription?: SubscriptionCreateSubscriptionInputParam;
      billing_address?: BillingAddressCreateSubscriptionInputParam;
      shipping_address?: ShippingAddressCreateSubscriptionInputParam;
      customer?: CustomerCreateSubscriptionInputParam;
      contract_term?: ContractTermCreateSubscriptionInputParam;
      addons?: AddonsCreateSubscriptionInputParam[];
      event_based_addons?: EventBasedAddonsCreateSubscriptionInputParam[];
      tax_providers_fields?: TaxProvidersFieldsCreateSubscriptionInputParam[];
    }
    export interface CreateSubItemEstimateInputParam {
      billing_cycles?: number;
      mandatory_items_to_remove?: string[];
      terms_to_charge?: number;
      billing_alignment_mode?: BillingAlignmentMode;
      coupon_ids?: string[];
      invoice_immediately?: boolean;
      invoice_date?: number;
      client_profile_id?: string;
      subscription?: SubscriptionCreateSubItemEstimateInputParam;
      billing_address?: BillingAddressCreateSubItemEstimateInputParam;
      shipping_address?: ShippingAddressCreateSubItemEstimateInputParam;
      customer?: CustomerCreateSubItemEstimateInputParam;
      contract_term?: ContractTermCreateSubItemEstimateInputParam;
      subscription_items?: SubscriptionItemsCreateSubItemEstimateInputParam[];
      discounts?: DiscountsCreateSubItemEstimateInputParam[];
      item_tiers?: ItemTiersCreateSubItemEstimateInputParam[];
      tax_providers_fields?: TaxProvidersFieldsCreateSubItemEstimateInputParam[];
    }
    export interface CreateSubForCustomerEstimateInputParam {
      use_existing_balances?: boolean;
      invoice_immediately?: boolean;
      billing_cycles?: number;
      mandatory_addons_to_remove?: string[];
      terms_to_charge?: number;
      billing_alignment_mode?: 'immediate' | 'delayed';
      invoice_date?: number;
      coupon_ids?: string[];
      subscription?: SubscriptionCreateSubForCustomerEstimateInputParam;
      shipping_address?: ShippingAddressCreateSubForCustomerEstimateInputParam;
      contract_term?: ContractTermCreateSubForCustomerEstimateInputParam;
      addons?: AddonsCreateSubForCustomerEstimateInputParam[];
      event_based_addons?: EventBasedAddonsCreateSubForCustomerEstimateInputParam[];
    }
    export interface CreateSubItemForCustomerEstimateInputParam {
      use_existing_balances?: boolean;
      invoice_immediately?: boolean;
      billing_cycles?: number;
      mandatory_items_to_remove?: string[];
      terms_to_charge?: number;
      billing_alignment_mode?: BillingAlignmentMode;
      invoice_date?: number;
      coupon_ids?: string[];
      subscription?: SubscriptionCreateSubItemForCustomerEstimateInputParam;
      shipping_address?: ShippingAddressCreateSubItemForCustomerEstimateInputParam;
      billing_address?: BillingAddressCreateSubItemForCustomerEstimateInputParam;
      contract_term?: ContractTermCreateSubItemForCustomerEstimateInputParam;
      subscription_items?: SubscriptionItemsCreateSubItemForCustomerEstimateInputParam[];
      discounts?: DiscountsCreateSubItemForCustomerEstimateInputParam[];
      item_tiers?: ItemTiersCreateSubItemForCustomerEstimateInputParam[];
    }
    export interface UpdateSubscriptionInputParam {
      changes_scheduled_at?: number;
      change_option?: ChangeOption;
      replace_addon_list?: boolean;
      mandatory_addons_to_remove?: string[];
      invoice_date?: number;
      billing_cycles?: number;
      terms_to_charge?: number;
      reactivate_from?: number;
      billing_alignment_mode?: BillingAlignmentMode;
      coupon_ids?: string[];
      replace_coupon_list?: boolean;
      prorate?: boolean;
      end_of_term?: boolean;
      force_term_reset?: boolean;
      reactivate?: boolean;
      include_delayed_charges?: boolean;
      use_existing_balances?: boolean;
      invoice_immediately?: boolean;
      subscription?: SubscriptionUpdateSubscriptionInputParam;
      billing_address?: BillingAddressUpdateSubscriptionInputParam;
      shipping_address?: ShippingAddressUpdateSubscriptionInputParam;
      customer?: CustomerUpdateSubscriptionInputParam;
      addons?: AddonsUpdateSubscriptionInputParam[];
      event_based_addons?: EventBasedAddonsUpdateSubscriptionInputParam[];
    }
    export interface UpdateSubscriptionForItemsInputParam {
      changes_scheduled_at?: number;
      change_option?: ChangeOption;
      mandatory_items_to_remove?: string[];
      replace_items_list?: boolean;
      invoice_date?: number;
      billing_cycles?: number;
      terms_to_charge?: number;
      reactivate_from?: number;
      billing_alignment_mode?: BillingAlignmentMode;
      coupon_ids?: string[];
      replace_coupon_list?: boolean;
      prorate?: boolean;
      end_of_term?: boolean;
      force_term_reset?: boolean;
      reactivate?: boolean;
      include_delayed_charges?: boolean;
      use_existing_balances?: boolean;
      invoice_immediately?: boolean;
      invoice_usages?: boolean;
      subscription?: SubscriptionUpdateSubscriptionForItemsInputParam;
      billing_address?: BillingAddressUpdateSubscriptionForItemsInputParam;
      shipping_address?: ShippingAddressUpdateSubscriptionForItemsInputParam;
      customer?: CustomerUpdateSubscriptionForItemsInputParam;
      subscription_items?: SubscriptionItemsUpdateSubscriptionForItemsInputParam[];
      discounts?: DiscountsUpdateSubscriptionForItemsInputParam[];
      item_tiers?: ItemTiersUpdateSubscriptionForItemsInputParam[];
    }
    export interface RenewalEstimateInputParam {
      include_delayed_charges?: boolean;
      use_existing_balances?: boolean;
      ignore_scheduled_cancellation?: boolean;
      ignore_scheduled_changes?: boolean;
    }
    export interface AdvanceInvoiceEstimateInputParam {
      terms_to_charge?: number;
      invoice_immediately?: boolean;
      schedule_type?: ScheduleType;
      fixed_interval_schedule?: FixedIntervalScheduleAdvanceInvoiceEstimateInputParam;
      specific_dates_schedule?: SpecificDatesScheduleAdvanceInvoiceEstimateInputParam[];
    }
    export interface RegenerateInvoiceEstimateInputParam {
      date_from?: number;
      date_to?: number;
      prorate?: boolean;
      invoice_immediately?: boolean;
    }
    export interface ChangeTermEndInputParam {
      term_ends_at: number;
      prorate?: boolean;
      invoice_immediately?: boolean;
    }
    export interface CancelSubscriptionInputParam {
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
      event_based_addons?: EventBasedAddonsCancelSubscriptionInputParam[];
    }
    export interface CancelSubscriptionForItemsInputParam {
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
      subscription_items?: SubscriptionItemsCancelSubscriptionForItemsInputParam[];
    }
    export interface PauseSubscriptionInputParam {
      pause_option?: PauseOption;
      unbilled_charges_handling?: UnbilledChargesHandling;
      subscription?: SubscriptionPauseSubscriptionInputParam;
    }
    export interface ResumeSubscriptionInputParam {
      resume_option?: ResumeOption;
      charges_handling?: ChargesHandling;
      subscription?: SubscriptionResumeSubscriptionInputParam;
    }
    export interface GiftSubscriptionInputParam {
      coupon_ids?: string[];
      gift?: GiftGiftSubscriptionInputParam;
      gifter?: GifterGiftSubscriptionInputParam;
      gift_receiver?: GiftReceiverGiftSubscriptionInputParam;
      payment_intent?: PaymentIntentGiftSubscriptionInputParam;
      shipping_address?: ShippingAddressGiftSubscriptionInputParam;
      subscription?: SubscriptionGiftSubscriptionInputParam;
      addons?: AddonsGiftSubscriptionInputParam[];
    }
    export interface GiftSubscriptionForItemsInputParam {
      coupon_ids?: string[];
      gift?: GiftGiftSubscriptionForItemsInputParam;
      gifter?: GifterGiftSubscriptionForItemsInputParam;
      gift_receiver?: GiftReceiverGiftSubscriptionForItemsInputParam;
      payment_intent?: PaymentIntentGiftSubscriptionForItemsInputParam;
      shipping_address?: ShippingAddressGiftSubscriptionForItemsInputParam;
      subscription_items?: SubscriptionItemsGiftSubscriptionForItemsInputParam[];
    }
    export interface CreateInvoiceInputParam {
      currency_code?: string;
      invoice_note?: string;
      remove_general_note?: boolean /**
       * @deprecated Please refer API docs to use other attributes
       */;

      coupon?: string;
      coupon_ids?: string[];
      authorization_transaction_id?: string;
      payment_source_id?: string;
      auto_collection?: AutoCollection;
      invoice_date?: number;
      invoice?: InvoiceCreateInvoiceInputParam;
      shipping_address?: ShippingAddressCreateInvoiceInputParam;
      addons?: AddonsCreateInvoiceInputParam[];
      charges?: ChargesCreateInvoiceInputParam[];
      notes_to_remove?: NotesToRemoveCreateInvoiceInputParam[];
      tax_providers_fields?: TaxProvidersFieldsCreateInvoiceInputParam[];
    }
    export interface CreateInvoiceForItemsInputParam {
      currency_code?: string;
      invoice_note?: string;
      remove_general_note?: boolean /**
       * @deprecated Please refer API docs to use other attributes
       */;

      coupon?: string;
      coupon_ids?: string[];
      authorization_transaction_id?: string;
      payment_source_id?: string;
      auto_collection?: AutoCollection;
      invoice_date?: number;
      invoice?: InvoiceCreateInvoiceForItemsInputParam;
      shipping_address?: ShippingAddressCreateInvoiceForItemsInputParam;
      item_prices?: ItemPricesCreateInvoiceForItemsInputParam[];
      item_tiers?: ItemTiersCreateInvoiceForItemsInputParam[];
      charges?: ChargesCreateInvoiceForItemsInputParam[];
      notes_to_remove?: NotesToRemoveCreateInvoiceForItemsInputParam[];
      discounts?: DiscountsCreateInvoiceForItemsInputParam[];
      tax_providers_fields?: TaxProvidersFieldsCreateInvoiceForItemsInputParam[];
    }
    export interface PaymentSchedulesInputParam {
      scheme_id: string;
      amount?: number;
      invoice_id?: string;
      payment_schedule_start_date?: number;
    }
    export interface BillingAddressCreateSubscriptionInputParam {
      line1?: string;
      line2?: string;
      line3?: string;
      city?: string;
      state_code?: string;
      zip?: string;
      country?: string;
      validation_status?: ValidationStatus;
    }
    export interface CustomerCreateSubscriptionInputParam {
      vat_number?: string;
      vat_number_prefix?: string;
      registered_for_gst?: boolean;
      taxability?: Taxability;
      entity_code?: EntityCode;
      exempt_number?: string;
      exemption_details?: any;
      customer_type?: CustomerType;
    }
    export interface ShippingAddressCreateSubscriptionInputParam {
      line1?: string;
      line2?: string;
      line3?: string;
      city?: string;
      state_code?: string;
      zip?: string;
      country?: string;
      validation_status?: ValidationStatus;
    }
    export interface ContractTermCreateSubscriptionInputParam {
      action_at_term_end?: 'renew' | 'evergreen' | 'cancel';
      cancellation_cutoff_period?: number;
    }
    export interface SubscriptionCreateSubscriptionInputParam {
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
      offline_payment_method?: OfflinePaymentMethod;
      free_period?: number;
      free_period_unit?: FreePeriodUnit;
      contract_term_billing_cycle_on_renewal?: number;
      trial_end_action?: TrialEndAction;
    }

    export interface EventBasedAddonsCreateSubscriptionInputParam {
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
    export interface AddonsCreateSubscriptionInputParam {
      id?: string;
      quantity?: number;
      quantity_in_decimal?: string;
      unit_price?: number;
      unit_price_in_decimal?: string;
      billing_cycles?: number;
      trial_end?: number;
    }
    export interface TaxProvidersFieldsCreateSubscriptionInputParam {
      provider_name?: string;
      field_id?: string;
      field_value?: string;
    }
    export interface BillingAddressCreateSubItemEstimateInputParam {
      line1?: string;
      line2?: string;
      line3?: string;
      city?: string;
      state_code?: string;
      zip?: string;
      country?: string;
      validation_status?: ValidationStatus;
    }
    export interface CustomerCreateSubItemEstimateInputParam {
      vat_number?: string;
      vat_number_prefix?: string;
      registered_for_gst?: boolean;
      taxability?: Taxability;
      entity_code?: EntityCode;
      exempt_number?: string;
      exemption_details?: any;
      customer_type?: CustomerType;
    }
    export interface ShippingAddressCreateSubItemEstimateInputParam {
      line1?: string;
      line2?: string;
      line3?: string;
      city?: string;
      state_code?: string;
      zip?: string;
      country?: string;
      validation_status?: ValidationStatus;
    }
    export interface ContractTermCreateSubItemEstimateInputParam {
      action_at_term_end?: 'renew' | 'evergreen' | 'cancel';
      /**
       * @deprecated Please refer API docs to use other attributes
       */
      contract_start?: number;
      cancellation_cutoff_period?: number;
    }
    export interface SubscriptionCreateSubItemEstimateInputParam {
      id?: string;
      trial_end?: number;
      /**
       * @deprecated Please refer API docs to use other attributes
       */
      setup_fee?: number;
      start_date?: number;
      /**
       * @deprecated Please refer API docs to use other attributes
       */
      coupon?: string;
      free_period?: number;
      free_period_unit?: FreePeriodUnit;
      contract_term_billing_cycle_on_renewal?: number;
      trial_end_action?: TrialEndAction;
    }

    export interface SubscriptionItemsCreateSubItemEstimateInputParam {
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
    export interface DiscountsCreateSubItemEstimateInputParam {
      apply_on: ApplyOn;
      duration_type: DurationType;
      percentage?: number;
      amount?: number;
      period?: number;
      period_unit?: PeriodUnit;
      included_in_mrr?: boolean;
      item_price_id?: string;
    }
    export interface ItemTiersCreateSubItemEstimateInputParam {
      item_price_id?: string;
      starting_unit?: number;
      ending_unit?: number;
      price?: number;
      starting_unit_in_decimal?: string;
      ending_unit_in_decimal?: string;
      price_in_decimal?: string;
    }
    export interface TaxProvidersFieldsCreateSubItemEstimateInputParam {
      provider_name?: string;
      field_id?: string;
      field_value?: string;
    }
    export interface ShippingAddressCreateSubForCustomerEstimateInputParam {
      line1?: string;
      line2?: string;
      line3?: string;
      city?: string;
      state_code?: string;
      zip?: string;
      country?: string;
      validation_status?: ValidationStatus;
    }
    export interface ContractTermCreateSubForCustomerEstimateInputParam {
      action_at_term_end?: 'renew' | 'evergreen' | 'cancel';
      cancellation_cutoff_period?: number;
    }
    export interface SubscriptionCreateSubForCustomerEstimateInputParam {
      id?: string;
      plan_id: string;
      plan_quantity?: number;
      plan_quantity_in_decimal?: string;
      plan_unit_price?: number;
      plan_unit_price_in_decimal?: string;
      setup_fee?: number;
      trial_end?: number;
      start_date?: number;
      offline_payment_method?: OfflinePaymentMethod;
      free_period?: number;
      free_period_unit?: FreePeriodUnit;
      contract_term_billing_cycle_on_renewal?: number;
      trial_end_action?: TrialEndAction;
    }

    export interface EventBasedAddonsCreateSubForCustomerEstimateInputParam {
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
    export interface AddonsCreateSubForCustomerEstimateInputParam {
      id?: string;
      quantity?: number;
      quantity_in_decimal?: string;
      unit_price?: number;
      unit_price_in_decimal?: string;
      billing_cycles?: number;
      trial_end?: number;
    }
    export interface BillingAddressCreateSubItemForCustomerEstimateInputParam {
      line1?: string;
      line2?: string;
      line3?: string;
      city?: string;
      state_code?: string;
      zip?: string;
      country?: string;
      validation_status?: ValidationStatus;
    }
    export interface ShippingAddressCreateSubItemForCustomerEstimateInputParam {
      line1?: string;
      line2?: string;
      line3?: string;
      city?: string;
      state_code?: string;
      zip?: string;
      country?: string;
      validation_status?: ValidationStatus;
    }
    export interface ContractTermCreateSubItemForCustomerEstimateInputParam {
      action_at_term_end?: 'renew' | 'evergreen' | 'cancel';
      /**
       * @deprecated Please refer API docs to use other attributes
       */
      contract_start?: number;
      cancellation_cutoff_period?: number;
    }
    export interface SubscriptionCreateSubItemForCustomerEstimateInputParam {
      id?: string;
      trial_end?: number;
      /**
       * @deprecated Please refer API docs to use other attributes
       */
      setup_fee?: number;
      start_date?: number;
      free_period?: number;
      free_period_unit?: FreePeriodUnit;
      contract_term_billing_cycle_on_renewal?: number;
      trial_end_action?: TrialEndAction;
    }

    export interface SubscriptionItemsCreateSubItemForCustomerEstimateInputParam {
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
    export interface DiscountsCreateSubItemForCustomerEstimateInputParam {
      apply_on: ApplyOn;
      duration_type: DurationType;
      percentage?: number;
      amount?: number;
      period?: number;
      period_unit?: PeriodUnit;
      included_in_mrr?: boolean;
      item_price_id?: string;
    }
    export interface ItemTiersCreateSubItemForCustomerEstimateInputParam {
      item_price_id?: string;
      starting_unit?: number;
      ending_unit?: number;
      price?: number;
      starting_unit_in_decimal?: string;
      ending_unit_in_decimal?: string;
      price_in_decimal?: string;
    }
    export interface BillingAddressUpdateSubscriptionInputParam {
      line1?: string;
      line2?: string;
      line3?: string;
      city?: string;
      state_code?: string;
      zip?: string;
      country?: string;
      validation_status?: ValidationStatus;
    }
    export interface CustomerUpdateSubscriptionInputParam {
      vat_number?: string;
      vat_number_prefix?: string;
      registered_for_gst?: boolean;
      /**
       * @deprecated Please refer API docs to use other attributes
       */
      taxability?: Taxability;
    }
    export interface ShippingAddressUpdateSubscriptionInputParam {
      line1?: string;
      line2?: string;
      line3?: string;
      city?: string;
      state_code?: string;
      zip?: string;
      country?: string;
      validation_status?: ValidationStatus;
    }
    export interface SubscriptionUpdateSubscriptionInputParam {
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
      free_period?: number;
      free_period_unit?: FreePeriodUnit;
      trial_end_action?: TrialEndAction;
    }

    export interface EventBasedAddonsUpdateSubscriptionInputParam {
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
    export interface AddonsUpdateSubscriptionInputParam {
      id?: string;
      quantity?: number;
      unit_price?: number;
      billing_cycles?: number;
      quantity_in_decimal?: string;
      unit_price_in_decimal?: string;
      trial_end?: number;
      proration_type?: ProrationType;
    }
    export interface BillingAddressUpdateSubscriptionForItemsInputParam {
      line1?: string;
      line2?: string;
      line3?: string;
      city?: string;
      state_code?: string;
      zip?: string;
      country?: string;
      validation_status?: ValidationStatus;
    }
    export interface CustomerUpdateSubscriptionForItemsInputParam {
      vat_number?: string;
      vat_number_prefix?: string;
      registered_for_gst?: boolean;
      /**
       * @deprecated Please refer API docs to use other attributes
       */
      taxability?: Taxability;
    }
    export interface ShippingAddressUpdateSubscriptionForItemsInputParam {
      line1?: string;
      line2?: string;
      line3?: string;
      city?: string;
      state_code?: string;
      zip?: string;
      country?: string;
      validation_status?: ValidationStatus;
    }
    export interface SubscriptionUpdateSubscriptionForItemsInputParam {
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
      free_period?: number;
      free_period_unit?: FreePeriodUnit;
      trial_end_action?: TrialEndAction;
    }

    export interface SubscriptionItemsUpdateSubscriptionForItemsInputParam {
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
    }
    export interface DiscountsUpdateSubscriptionForItemsInputParam {
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
    export interface ItemTiersUpdateSubscriptionForItemsInputParam {
      item_price_id?: string;
      starting_unit?: number;
      ending_unit?: number;
      price?: number;
      starting_unit_in_decimal?: string;
      ending_unit_in_decimal?: string;
      price_in_decimal?: string;
    }
    export interface FixedIntervalScheduleAdvanceInvoiceEstimateInputParam {
      number_of_occurrences?: number;
      days_before_renewal?: number;
      end_schedule_on?: EndScheduleOn;
      end_date?: number;
    }

    export interface SpecificDatesScheduleAdvanceInvoiceEstimateInputParam {
      terms_to_charge?: number;
      date?: number;
    }
    export interface EventBasedAddonsCancelSubscriptionInputParam {
      id?: string;
      quantity?: number;
      unit_price?: number;
      service_period_in_days?: number;
    }
    export interface SubscriptionItemsCancelSubscriptionForItemsInputParam {
      item_price_id?: string;
      quantity?: number;
      quantity_in_decimal?: string;
      unit_price?: number;
      unit_price_in_decimal?: string;
      service_period_days?: number;
    }
    export interface SubscriptionPauseSubscriptionInputParam {
      pause_date?: number;
      resume_date?: number;
      skip_billing_cycles?: number;
    }

    export interface SubscriptionResumeSubscriptionInputParam {
      resume_date?: number;
    }

    export interface GiftGiftSubscriptionInputParam {
      scheduled_at?: number;
      auto_claim?: boolean;
      no_expiry?: boolean;
      claim_expiry_date?: number;
    }
    export interface GiftReceiverGiftSubscriptionInputParam {
      customer_id: string;
      first_name: string;
      last_name: string;
      email: string;
    }
    export interface GifterGiftSubscriptionInputParam {
      customer_id: string;
      signature: string;
      note?: string;
      payment_src_id?: string;
    }
    export interface ShippingAddressGiftSubscriptionInputParam {
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
    export interface PaymentIntentGiftSubscriptionInputParam {
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
    export interface SubscriptionGiftSubscriptionInputParam {
      plan_id: string;
      plan_quantity?: number;
      plan_quantity_in_decimal?: string;
    }

    export interface AddonsGiftSubscriptionInputParam {
      id?: string;
      quantity?: number;
      quantity_in_decimal?: string;
    }
    export interface GiftGiftSubscriptionForItemsInputParam {
      scheduled_at?: number;
      auto_claim?: boolean;
      no_expiry?: boolean;
      claim_expiry_date?: number;
    }
    export interface GiftReceiverGiftSubscriptionForItemsInputParam {
      customer_id: string;
      first_name: string;
      last_name: string;
      email: string;
    }
    export interface GifterGiftSubscriptionForItemsInputParam {
      customer_id: string;
      signature: string;
      note?: string;
      payment_src_id?: string;
    }
    export interface ShippingAddressGiftSubscriptionForItemsInputParam {
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
    export interface PaymentIntentGiftSubscriptionForItemsInputParam {
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

    export interface SubscriptionItemsGiftSubscriptionForItemsInputParam {
      item_price_id?: string;
      quantity?: number;
      quantity_in_decimal?: string;
    }
    export interface InvoiceCreateInvoiceInputParam {
      customer_id?: string;
      subscription_id?: string;
      po_number?: string;
    }
    export interface ShippingAddressCreateInvoiceInputParam {
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

    export interface ChargesCreateInvoiceInputParam {
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
    export interface AddonsCreateInvoiceInputParam {
      id?: string;
      quantity?: number;
      quantity_in_decimal?: string;
      unit_price?: number;
      unit_price_in_decimal?: string;
      date_from?: number;
      date_to?: number;
    }
    export interface TaxProvidersFieldsCreateInvoiceInputParam {
      provider_name?: string;
      field_id?: string;
      field_value?: string;
    }
    export interface NotesToRemoveCreateInvoiceInputParam {
      entity_type?: EntityType;
      entity_id?: string;
    }
    export interface InvoiceCreateInvoiceForItemsInputParam {
      customer_id?: string;
      subscription_id?: string;
      po_number?: string;
    }
    export interface ShippingAddressCreateInvoiceForItemsInputParam {
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

    export interface ChargesCreateInvoiceForItemsInputParam {
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
    export interface DiscountsCreateInvoiceForItemsInputParam {
      percentage?: number;
      amount?: number;
      apply_on: ApplyOn;
      item_price_id?: string;
    }
    export interface ItemTiersCreateInvoiceForItemsInputParam {
      item_price_id?: string;
      starting_unit?: number;
      ending_unit?: number;
      price?: number;
      starting_unit_in_decimal?: string;
      ending_unit_in_decimal?: string;
      price_in_decimal?: string;
    }
    export interface ItemPricesCreateInvoiceForItemsInputParam {
      item_price_id?: string;
      quantity?: number;
      quantity_in_decimal?: string;
      unit_price?: number;
      unit_price_in_decimal?: string;
      date_from?: number;
      date_to?: number;
    }
    export interface TaxProvidersFieldsCreateInvoiceForItemsInputParam {
      provider_name?: string;
      field_id?: string;
      field_value?: string;
    }
    export interface NotesToRemoveCreateInvoiceForItemsInputParam {
      entity_type?: EntityType;
      entity_id?: string;
    }
  }
}
