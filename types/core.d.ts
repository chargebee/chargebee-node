declare module 'chargebee' {
  export class RequestConfig {
    site?: string;
    apiKey?: string;
    timeout?: number;
    timemachineWaitInMillis?: number;
    exportWaitInMillis?: number;
  }
  export type ChargebeeResponse<T> = T & {
    headers: { [key: string]: string };
    isIdempotencyReplayed?: boolean | string;
  };
  export type ChargebeeRequestHeader = {
    [key: string]: string | undefined;
    'chargebee-idempotency-key'?: string;
    'chargebee-event-email'?: string;
    'chargebee-request-origin-ip'?: string;
    'chargebee-request-origin-user'?: string;
    'chargebee-request-origin-user-encoded'?: string;
    'chargebee-request-origin-device'?: string;
  };
  type AccountHolderTypeEnum = 'individual' | 'company';
  type AccountReceivablesHandlingEnum =
    | 'no_action'
    | 'schedule_payment_collection'
    | 'write_off';
  type AccountTypeEnum =
    | 'checking'
    | 'savings'
    | 'business_checking'
    | 'current';
  type ActionEnum = 'upsert' | 'remove';
  type ApiVersionEnum = 'v1' | 'v2';
  type ApplyOnEnum = 'invoice_amount' | 'specific_item_price';
  type AutoCollectionEnum = 'on' | 'off';
  type AvalaraSaleTypeEnum = 'wholesale' | 'retail' | 'consumed' | 'vendor_use';
  type BillingAlignmentModeEnum = 'immediate' | 'delayed';
  type BillingDateModeEnum = 'using_defaults' | 'manually_set';
  type BillingDayOfWeekModeEnum = 'using_defaults' | 'manually_set';
  type CancelOptionEnum =
    | 'immediately'
    | 'end_of_term'
    | 'specific_date'
    | 'end_of_billing_term';
  type ChangeOptionEnum = 'immediately' | 'end_of_term' | 'specific_date';
  type ChannelEnum = 'web' | 'app_store' | 'play_store';
  type ChargeModelEnum = 'full_charge' | 'prorate';
  type ChargeOnEventEnum =
    | 'subscription_creation'
    | 'subscription_trial_start'
    | 'plan_activation'
    | 'subscription_activation'
    | 'contract_termination'
    | 'on_demand';
  type ChargeOnOptionEnum = 'immediately' | 'on_event';
  type ChargesHandlingEnum = 'invoice_immediately' | 'add_to_unbilled_charges';
  type ContractTermCancelOptionEnum =
    | 'terminate_immediately'
    | 'end_of_contract_term';
  type CreditOptionForCurrentTermChargesEnum = 'none' | 'prorate' | 'full';
  type CreditTypeEnum = 'loyalty_credits' | 'referral_rewards' | 'general';
  type CustomerTypeEnum =
    | 'residential'
    | 'business'
    | 'senior_citizen'
    | 'industrial';
  type DedupeOptionEnum = 'skip' | 'update_existing';
  type DirectDebitSchemeEnum =
    | 'ach'
    | 'bacs'
    | 'sepa_core'
    | 'autogiro'
    | 'becs'
    | 'becs_nz'
    | 'pad'
    | 'not_applicable';
  type DispositionTypeEnum = 'attachment' | 'inline';
  type DunningTypeEnum = 'auto_collect' | 'offline' | 'direct_debit';
  type DurationTypeEnum = 'one_time' | 'forever' | 'limited_period';
  type EcheckTypeEnum = 'web' | 'ppd' | 'ccd';
  type EinvoicingMethodEnum = 'automatic' | 'manual' | 'site_default';
  type EndScheduleOnEnum =
    | 'after_number_of_intervals'
    | 'specific_date'
    | 'subscription_end';
  type EntityCodeEnum =
    | 'a'
    | 'b'
    | 'c'
    | 'd'
    | 'e'
    | 'f'
    | 'g'
    | 'h'
    | 'i'
    | 'j'
    | 'k'
    | 'l'
    | 'm'
    | 'n'
    | 'p'
    | 'q'
    | 'r'
    | 'med1'
    | 'med2';
  type EntityTypeEnum =
    | 'customer'
    | 'subscription'
    | 'coupon'
    | 'plan_item_price'
    | 'addon_item_price'
    | 'charge_item_price'
    | 'invoice'
    | 'quote'
    | 'credit_note'
    | 'transaction'
    | 'plan'
    | 'addon'
    | 'order'
    | 'item_family'
    | 'item'
    | 'item_price'
    | 'plan_item'
    | 'addon_item'
    | 'charge_item'
    | 'plan_price'
    | 'addon_price'
    | 'charge_price'
    | 'differential_price'
    | 'attached_item'
    | 'feature'
    | 'subscription_entitlement'
    | 'item_entitlement'
    | 'business_entity'
    | 'price_variant'
    | 'omnichannel_subscription'
    | 'omnichannel_subscription_item'
    | 'omnichannel_transaction';
  type EventNameEnum = 'cancellation_page_loaded';
  type EventTypeEnum =
    | 'coupon_created'
    | 'coupon_updated'
    | 'coupon_deleted'
    | 'coupon_set_created'
    | 'coupon_set_updated'
    | 'coupon_set_deleted'
    | 'coupon_codes_added'
    | 'coupon_codes_deleted'
    | 'coupon_codes_updated'
    | 'customer_created'
    | 'customer_changed'
    | 'customer_deleted'
    | 'customer_moved_out'
    | 'customer_moved_in'
    | 'promotional_credits_added'
    | 'promotional_credits_deducted'
    | 'subscription_created'
    | 'subscription_created_with_backdating'
    | 'subscription_started'
    | 'subscription_trial_end_reminder'
    | 'subscription_activated'
    | 'subscription_activated_with_backdating'
    | 'subscription_changed'
    | 'subscription_trial_extended'
    | 'mrr_updated'
    | 'subscription_changed_with_backdating'
    | 'subscription_cancellation_scheduled'
    | 'subscription_cancellation_reminder'
    | 'subscription_cancelled'
    | 'subscription_canceled_with_backdating'
    | 'subscription_reactivated'
    | 'subscription_reactivated_with_backdating'
    | 'subscription_renewed'
    | 'subscription_items_renewed'
    | 'subscription_scheduled_cancellation_removed'
    | 'subscription_changes_scheduled'
    | 'subscription_scheduled_changes_removed'
    | 'subscription_shipping_address_updated'
    | 'subscription_deleted'
    | 'subscription_paused'
    | 'subscription_pause_scheduled'
    | 'subscription_scheduled_pause_removed'
    | 'subscription_resumed'
    | 'subscription_resumption_scheduled'
    | 'subscription_scheduled_resumption_removed'
    | 'subscription_advance_invoice_schedule_added'
    | 'subscription_advance_invoice_schedule_updated'
    | 'subscription_advance_invoice_schedule_removed'
    | 'pending_invoice_created'
    | 'pending_invoice_updated'
    | 'invoice_generated'
    | 'invoice_generated_with_backdating'
    | 'invoice_updated'
    | 'invoice_deleted'
    | 'credit_note_created'
    | 'credit_note_created_with_backdating'
    | 'credit_note_updated'
    | 'credit_note_deleted'
    | 'payment_schedules_created'
    | 'payment_schedules_updated'
    | 'payment_schedule_scheme_created'
    | 'payment_schedule_scheme_deleted'
    | 'subscription_renewal_reminder'
    | 'add_usages_reminder'
    | 'transaction_created'
    | 'transaction_updated'
    | 'transaction_deleted'
    | 'payment_succeeded'
    | 'payment_failed'
    | 'payment_refunded'
    | 'payment_initiated'
    | 'refund_initiated'
    | 'authorization_succeeded'
    | 'authorization_voided'
    | 'card_added'
    | 'card_updated'
    | 'card_expiry_reminder'
    | 'card_expired'
    | 'card_deleted'
    | 'payment_source_added'
    | 'payment_source_updated'
    | 'payment_source_deleted'
    | 'payment_source_expiring'
    | 'payment_source_expired'
    | 'payment_source_locally_deleted'
    | 'virtual_bank_account_added'
    | 'virtual_bank_account_updated'
    | 'virtual_bank_account_deleted'
    | 'token_created'
    | 'token_consumed'
    | 'token_expired'
    | 'unbilled_charges_created'
    | 'unbilled_charges_voided'
    | 'unbilled_charges_deleted'
    | 'unbilled_charges_invoiced'
    | 'order_created'
    | 'order_updated'
    | 'order_cancelled'
    | 'order_delivered'
    | 'order_returned'
    | 'order_ready_to_process'
    | 'order_ready_to_ship'
    | 'order_deleted'
    | 'order_resent'
    | 'quote_created'
    | 'quote_updated'
    | 'quote_deleted'
    | 'tax_withheld_recorded'
    | 'tax_withheld_deleted'
    | 'tax_withheld_refunded'
    | 'gift_scheduled'
    | 'gift_unclaimed'
    | 'gift_claimed'
    | 'gift_expired'
    | 'gift_cancelled'
    | 'gift_updated'
    | 'hierarchy_created'
    | 'hierarchy_deleted'
    | 'payment_intent_created'
    | 'payment_intent_updated'
    | 'contract_term_created'
    | 'contract_term_renewed'
    | 'contract_term_terminated'
    | 'contract_term_completed'
    | 'contract_term_cancelled'
    | 'item_family_created'
    | 'item_family_updated'
    | 'item_family_deleted'
    | 'item_created'
    | 'item_updated'
    | 'item_deleted'
    | 'item_price_created'
    | 'item_price_updated'
    | 'item_price_deleted'
    | 'attached_item_created'
    | 'attached_item_updated'
    | 'attached_item_deleted'
    | 'differential_price_created'
    | 'differential_price_updated'
    | 'differential_price_deleted'
    | 'feature_created'
    | 'feature_updated'
    | 'feature_deleted'
    | 'feature_activated'
    | 'feature_reactivated'
    | 'feature_archived'
    | 'item_entitlements_updated'
    | 'entitlement_overrides_updated'
    | 'entitlement_overrides_removed'
    | 'item_entitlements_removed'
    | 'entitlement_overrides_auto_removed'
    | 'subscription_entitlements_created'
    | 'business_entity_created'
    | 'business_entity_updated'
    | 'business_entity_deleted'
    | 'customer_business_entity_changed'
    | 'subscription_business_entity_changed'
    | 'purchase_created'
    | 'voucher_created'
    | 'voucher_expired'
    | 'voucher_create_failed'
    | 'item_price_entitlements_updated'
    | 'item_price_entitlements_removed'
    | 'subscription_ramp_created'
    | 'subscription_ramp_deleted'
    | 'subscription_ramp_applied'
    | 'subscription_ramp_drafted'
    | 'subscription_ramp_updated'
    | 'price_variant_created'
    | 'price_variant_updated'
    | 'price_variant_deleted'
    | 'customer_entitlements_updated'
    | 'subscription_moved_in'
    | 'subscription_moved_out'
    | 'subscription_movement_failed'
    | 'omnichannel_subscription_created'
    | 'omnichannel_subscription_item_renewed'
    | 'omnichannel_subscription_item_downgrade_scheduled'
    | 'omnichannel_subscription_item_scheduled_downgrade_removed'
    | 'omnichannel_subscription_item_downgraded'
    | 'omnichannel_subscription_item_expired'
    | 'omnichannel_subscription_item_cancellation_scheduled'
    | 'omnichannel_subscription_item_scheduled_cancellation_removed'
    | 'omnichannel_subscription_item_resubscribed'
    | 'omnichannel_subscription_item_upgraded'
    | 'omnichannel_subscription_item_cancelled'
    | 'omnichannel_subscription_imported'
    | 'omnichannel_subscription_item_grace_period_started'
    | 'omnichannel_subscription_item_grace_period_expired'
    | 'omnichannel_subscription_item_dunning_started'
    | 'omnichannel_subscription_item_dunning_expired'
    | 'plan_created'
    | 'plan_updated'
    | 'plan_deleted'
    | 'addon_created'
    | 'addon_updated'
    | 'addon_deleted';
  type ExportTypeEnum = 'data' | 'import_friendly_data';
  type FreePeriodUnitEnum = 'day' | 'week' | 'month' | 'year';
  type FriendOfferTypeEnum = 'none' | 'coupon' | 'coupon_code';
  type GatewayEnum =
    | 'chargebee'
    | 'chargebee_payments'
    | 'stripe'
    | 'wepay'
    | 'braintree'
    | 'authorize_net'
    | 'paypal_pro'
    | 'pin'
    | 'eway'
    | 'eway_rapid'
    | 'worldpay'
    | 'balanced_payments'
    | 'beanstream'
    | 'bluepay'
    | 'elavon'
    | 'first_data_global'
    | 'hdfc'
    | 'migs'
    | 'nmi'
    | 'ogone'
    | 'paymill'
    | 'paypal_payflow_pro'
    | 'sage_pay'
    | 'tco'
    | 'wirecard'
    | 'amazon_payments'
    | 'paypal_express_checkout'
    | 'adyen'
    | 'orbital'
    | 'moneris_us'
    | 'moneris'
    | 'bluesnap'
    | 'cybersource'
    | 'vantiv'
    | 'checkout_com'
    | 'paypal'
    | 'ingenico_direct'
    | 'exact'
    | 'mollie'
    | 'quickbooks'
    | 'razorpay'
    | 'global_payments'
    | 'bank_of_america'
    | 'ecentric'
    | 'metrics_global'
    | 'windcave'
    | 'pay_com'
    | 'ebanx'
    | 'dlocal'
    | 'nuvei'
    | 'gocardless'
    | 'not_applicable';
  type HierarchyOperationTypeEnum =
    | 'complete_hierarchy'
    | 'subordinates'
    | 'path_to_root';
  type InvoiceDunningHandlingEnum = 'continue' | 'stop';
  type ItemTypeEnum = 'plan' | 'addon' | 'charge';
  type LayoutEnum = 'in_app' | 'full_page';
  type NotifyReferralSystemEnum =
    | 'none'
    | 'first_paid_conversion'
    | 'all_invoices';
  type OfflinePaymentMethodEnum =
    | 'no_preference'
    | 'cash'
    | 'check'
    | 'bank_transfer'
    | 'ach_credit'
    | 'sepa_credit'
    | 'boleto'
    | 'us_automated_bank_transfer'
    | 'eu_automated_bank_transfer'
    | 'uk_automated_bank_transfer'
    | 'jp_automated_bank_transfer'
    | 'mx_automated_bank_transfer'
    | 'custom';
  type OnEventEnum =
    | 'subscription_creation'
    | 'subscription_trial_start'
    | 'plan_activation'
    | 'subscription_activation'
    | 'contract_termination';
  type OperationEnum = 'create' | 'update' | 'delete';
  type OperationTypeEnum = 'add' | 'remove';
  type PauseOptionEnum =
    | 'immediately'
    | 'end_of_term'
    | 'specific_date'
    | 'billing_cycles';
  type PaymentInitiatorEnum = 'customer' | 'merchant';
  type PaymentMethodEnum =
    | 'cash'
    | 'check'
    | 'bank_transfer'
    | 'other'
    | 'custom'
    | 'chargeback'
    | 'card'
    | 'amazon_payments'
    | 'paypal_express_checkout'
    | 'direct_debit'
    | 'alipay'
    | 'unionpay'
    | 'apple_pay'
    | 'wechat_pay'
    | 'ach_credit'
    | 'sepa_credit'
    | 'ideal'
    | 'google_pay'
    | 'sofort'
    | 'bancontact'
    | 'giropay'
    | 'dotpay'
    | 'upi'
    | 'netbanking_emandates'
    | 'boleto'
    | 'venmo'
    | 'pay_to'
    | 'faster_payments'
    | 'sepa_instant_transfer'
    | 'automated_bank_transfer'
    | 'klarna_pay_now'
    | 'online_banking_poland';
  type PaymentMethodTypeEnum =
    | 'card'
    | 'paypal_express_checkout'
    | 'amazon_payments'
    | 'direct_debit'
    | 'generic'
    | 'alipay'
    | 'unionpay'
    | 'apple_pay'
    | 'wechat_pay'
    | 'ideal'
    | 'google_pay'
    | 'sofort'
    | 'bancontact'
    | 'giropay'
    | 'dotpay'
    | 'upi'
    | 'netbanking_emandates'
    | 'venmo'
    | 'pay_to'
    | 'faster_payments'
    | 'sepa_instant_transfer'
    | 'automated_bank_transfer'
    | 'klarna_pay_now'
    | 'online_banking_poland';
  type PaymentVoucherTypeEnum = 'boleto';
  type PeriodUnitEnum = 'day' | 'week' | 'month' | 'year';
  type PriceTypeEnum = 'tax_exclusive' | 'tax_inclusive';
  type PricingModelEnum =
    | 'flat_fee'
    | 'per_unit'
    | 'tiered'
    | 'volume'
    | 'stairstep';
  type ProductCatalogVersionEnum = 'v1' | 'v2';
  type ProrationTypeEnum = 'full_term' | 'partial_term' | 'none';
  type ReferralSystemEnum =
    | 'referral_candy'
    | 'referral_saasquatch'
    | 'friendbuy';
  type ReferrerRewardTypeEnum =
    | 'none'
    | 'referral_direct_reward'
    | 'custom_promotional_credit'
    | 'custom_revenue_percent_based';
  type RefundableCreditsHandlingEnum = 'no_action' | 'schedule_refund';
  type ReportByEnum = 'customer' | 'invoice' | 'product' | 'subscription';
  type ResumeOptionEnum = 'immediately' | 'specific_date';
  type RoleEnum = 'primary' | 'backup' | 'none';
  type ScheduleTypeEnum = 'immediate' | 'specific_dates' | 'fixed_intervals';
  type SourceEnum =
    | 'admin_console'
    | 'api'
    | 'bulk_operation'
    | 'scheduled_job'
    | 'hosted_page'
    | 'portal'
    | 'system'
    | 'none'
    | 'js_api'
    | 'migration'
    | 'external_service';
  type TaxExemptReasonEnum =
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
  type TaxJurisTypeEnum =
    | 'country'
    | 'federal'
    | 'state'
    | 'county'
    | 'city'
    | 'special'
    | 'unincorporated'
    | 'other';
  type TaxOverrideReasonEnum = 'id_exempt' | 'customer_exempt' | 'export';
  type TaxabilityEnum = 'taxable' | 'exempt';
  type TaxjarExemptionCategoryEnum = 'wholesale' | 'government' | 'other';
  type TrialEndActionEnum =
    | 'site_default'
    | 'plan_default'
    | 'activate_subscription'
    | 'cancel_subscription';
  type TypeEnum =
    | 'card'
    | 'paypal_express_checkout'
    | 'amazon_payments'
    | 'direct_debit'
    | 'generic'
    | 'alipay'
    | 'unionpay'
    | 'apple_pay'
    | 'wechat_pay'
    | 'ideal'
    | 'google_pay'
    | 'sofort'
    | 'bancontact'
    | 'giropay'
    | 'dotpay'
    | 'upi'
    | 'netbanking_emandates'
    | 'venmo'
    | 'pay_to'
    | 'faster_payments'
    | 'sepa_instant_transfer'
    | 'automated_bank_transfer'
    | 'klarna_pay_now'
    | 'online_banking_poland';
  type UnbilledChargesHandlingEnum = 'no_action' | 'invoice';
  type UnbilledChargesOptionEnum = 'invoice' | 'delete';
  type UnpaidInvoicesHandlingEnum = 'no_action' | 'schedule_payment_collection';
  type UsageAccumulationResetFrequencyEnum =
    | 'never'
    | 'subscription_billing_frequency';
  type ValidationStatusEnum =
    | 'not_validated'
    | 'valid'
    | 'partially_valid'
    | 'invalid';
  type VoucherTypeEnum = 'boleto';
  type ChargeOnEnum = 'immediately' | 'on_event';
}
