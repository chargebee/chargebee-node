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
  type AccountHolderType = 'individual' | 'company';
  type AccountReceivablesHandling =
    | 'no_action'
    | 'schedule_payment_collection'
    | 'write_off';
  type AccountType = 'checking' | 'savings' | 'business_checking' | 'current';
  type Action = 'upsert' | 'remove';
  type ApiVersion = 'v1' | 'v2';
  type ApplyOn = 'invoice_amount' | 'specific_item_price';
  type AutoCollection = 'on' | 'off';
  type AvalaraSaleType = 'wholesale' | 'retail' | 'consumed' | 'vendor_use';
  type BillingAlignmentMode = 'immediate' | 'delayed';
  type BillingDateMode = 'using_defaults' | 'manually_set';
  type BillingDayOfWeekMode = 'using_defaults' | 'manually_set';
  type CancelOption =
    | 'immediately'
    | 'end_of_term'
    | 'specific_date'
    | 'end_of_billing_term';
  type ChangeOption = 'immediately' | 'end_of_term' | 'specific_date';
  type Channel = 'web' | 'app_store' | 'play_store';
  type ChargeModel = 'full_charge' | 'prorate';
  type ChargeOnEvent =
    | 'subscription_creation'
    | 'subscription_trial_start'
    | 'plan_activation'
    | 'subscription_activation'
    | 'contract_termination'
    | 'on_demand';
  type ChargeOnOption = 'immediately' | 'on_event';
  type ChargesHandling = 'invoice_immediately' | 'add_to_unbilled_charges';
  type ContractTermCancelOption =
    | 'terminate_immediately'
    | 'end_of_contract_term';
  type CreditOptionForCurrentTermCharges = 'none' | 'prorate' | 'full';
  type CreditType = 'loyalty_credits' | 'referral_rewards' | 'general';
  type CustomerType =
    | 'residential'
    | 'business'
    | 'senior_citizen'
    | 'industrial';
  type DedupeOption = 'skip' | 'update_existing';
  type DirectDebitScheme =
    | 'ach'
    | 'bacs'
    | 'sepa_core'
    | 'autogiro'
    | 'becs'
    | 'becs_nz'
    | 'pad'
    | 'not_applicable';
  type DispositionType = 'attachment' | 'inline';
  type DunningType = 'auto_collect' | 'offline' | 'direct_debit';
  type DurationType = 'one_time' | 'forever' | 'limited_period';
  type EcheckType = 'web' | 'ppd' | 'ccd';
  type EinvoicingMethod = 'automatic' | 'manual' | 'site_default';
  type EndScheduleOn =
    | 'after_number_of_intervals'
    | 'specific_date'
    | 'subscription_end';
  type EntityCode =
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
  type EntityType =
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
    | 'price_variant';
  type EventName = 'cancellation_page_loaded';
  type EventType =
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
    | 'invoice_installments_created'
    | 'invoice_installment_updated'
    | 'installment_config_created'
    | 'installment_config_deleted'
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
    | 'ramp_created'
    | 'ramp_deleted'
    | 'ramp_applied'
    | 'subscription_ramp_drafted'
    | 'subscription_ramp_updated'
    | 'price_variant_created'
    | 'price_variant_updated'
    | 'price_variant_deleted'
    | 'plan_created'
    | 'plan_updated'
    | 'plan_deleted'
    | 'addon_created'
    | 'addon_updated'
    | 'addon_deleted';
  type ExportType = 'data' | 'import_friendly_data';
  type FreePeriodUnit = 'day' | 'week' | 'month' | 'year';
  type FriendOfferType = 'none' | 'coupon' | 'coupon_code';
  type Gateway =
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
  type HierarchyOperationType =
    | 'complete_hierarchy'
    | 'subordinates'
    | 'path_to_root';
  type InvoiceDunningHandling = 'continue' | 'stop';
  type ItemType = 'plan' | 'addon' | 'charge';
  type Layout = 'in_app' | 'full_page';
  type NotifyReferralSystem = 'none' | 'first_paid_conversion' | 'all_invoices';
  type OfflinePaymentMethod =
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
  type OnEvent =
    | 'subscription_creation'
    | 'subscription_trial_start'
    | 'plan_activation'
    | 'subscription_activation'
    | 'contract_termination';
  type Operation = 'create' | 'update' | 'delete';
  type OperationType = 'add' | 'remove';
  type PauseOption =
    | 'immediately'
    | 'end_of_term'
    | 'specific_date'
    | 'billing_cycles';
  type PaymentInitiator = 'customer' | 'merchant';
  type PaymentMethod =
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
  type PaymentMethodType =
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
  type PaymentVoucherType = 'boleto';
  type PeriodUnit = 'day' | 'week' | 'month' | 'year';
  type PriceType = 'tax_exclusive' | 'tax_inclusive';
  type PricingModel =
    | 'flat_fee'
    | 'per_unit'
    | 'tiered'
    | 'volume'
    | 'stairstep';
  type ProrationType = 'full_term' | 'partial_term' | 'none';
  type ReferralSystem = 'referral_candy' | 'referral_saasquatch' | 'friendbuy';
  type ReferrerRewardType =
    | 'none'
    | 'referral_direct_reward'
    | 'custom_promotional_credit'
    | 'custom_revenue_percent_based';
  type RefundableCreditsHandling = 'no_action' | 'schedule_refund';
  type ReportBy = 'customer' | 'invoice' | 'product' | 'subscription';
  type ResumeOption = 'immediately' | 'specific_date';
  type Role = 'primary' | 'backup' | 'none';
  type ScheduleType = 'immediate' | 'specific_dates' | 'fixed_intervals';
  type Source =
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
  type TaxExemptReason =
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
  type TaxJurisType =
    | 'country'
    | 'federal'
    | 'state'
    | 'county'
    | 'city'
    | 'special'
    | 'unincorporated'
    | 'other';
  type TaxOverrideReason = 'id_exempt' | 'customer_exempt' | 'export';
  type Taxability = 'taxable' | 'exempt';
  type TaxjarExemptionCategory = 'wholesale' | 'government' | 'other';
  type TrialEndAction =
    | 'site_default'
    | 'plan_default'
    | 'activate_subscription'
    | 'cancel_subscription';
  type Type =
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
  type UnbilledChargesHandling = 'no_action' | 'invoice';
  type UnbilledChargesOption = 'invoice' | 'delete';
  type UnpaidInvoicesHandling = 'no_action' | 'schedule_payment_collection';
  type ValidationStatus =
    | 'not_validated'
    | 'valid'
    | 'partially_valid'
    | 'invalid';
  type VoucherType = 'boleto';
  type ChargeOn = 'immediately' | 'on_event';
}
