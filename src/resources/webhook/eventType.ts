/**
 * Enum representing all possible webhook event types from Chargebee.
 * This enum provides both compile-time type safety and runtime values.
 */
export enum WebhookEventType {
  AddUsagesReminder = 'add_usages_reminder',

  AddonCreated = 'addon_created',

  AddonDeleted = 'addon_deleted',

  AddonUpdated = 'addon_updated',

  AttachedItemCreated = 'attached_item_created',

  AttachedItemDeleted = 'attached_item_deleted',

  AttachedItemUpdated = 'attached_item_updated',

  AuthorizationSucceeded = 'authorization_succeeded',

  AuthorizationVoided = 'authorization_voided',

  BusinessEntityCreated = 'business_entity_created',

  BusinessEntityDeleted = 'business_entity_deleted',

  BusinessEntityUpdated = 'business_entity_updated',

  CardAdded = 'card_added',

  CardDeleted = 'card_deleted',

  CardExpired = 'card_expired',

  CardExpiryReminder = 'card_expiry_reminder',

  CardUpdated = 'card_updated',

  ContractTermCancelled = 'contract_term_cancelled',

  ContractTermCompleted = 'contract_term_completed',

  ContractTermCreated = 'contract_term_created',

  ContractTermRenewed = 'contract_term_renewed',

  ContractTermTerminated = 'contract_term_terminated',

  CouponCodesAdded = 'coupon_codes_added',

  CouponCodesDeleted = 'coupon_codes_deleted',

  CouponCodesUpdated = 'coupon_codes_updated',

  CouponCreated = 'coupon_created',

  CouponDeleted = 'coupon_deleted',

  CouponSetCreated = 'coupon_set_created',

  CouponSetDeleted = 'coupon_set_deleted',

  CouponSetUpdated = 'coupon_set_updated',

  CouponUpdated = 'coupon_updated',

  CreditNoteCreated = 'credit_note_created',

  CreditNoteCreatedWithBackdating = 'credit_note_created_with_backdating',

  CreditNoteDeleted = 'credit_note_deleted',

  CreditNoteUpdated = 'credit_note_updated',

  CustomerBusinessEntityChanged = 'customer_business_entity_changed',

  CustomerChanged = 'customer_changed',

  CustomerCreated = 'customer_created',

  CustomerDeleted = 'customer_deleted',

  CustomerEntitlementsUpdated = 'customer_entitlements_updated',

  CustomerMovedIn = 'customer_moved_in',

  CustomerMovedOut = 'customer_moved_out',

  DifferentialPriceCreated = 'differential_price_created',

  DifferentialPriceDeleted = 'differential_price_deleted',

  DifferentialPriceUpdated = 'differential_price_updated',

  DunningUpdated = 'dunning_updated',

  EntitlementOverridesAutoRemoved = 'entitlement_overrides_auto_removed',

  EntitlementOverridesRemoved = 'entitlement_overrides_removed',

  EntitlementOverridesUpdated = 'entitlement_overrides_updated',

  FeatureActivated = 'feature_activated',

  FeatureArchived = 'feature_archived',

  FeatureCreated = 'feature_created',

  FeatureDeleted = 'feature_deleted',

  FeatureReactivated = 'feature_reactivated',

  FeatureUpdated = 'feature_updated',

  GiftCancelled = 'gift_cancelled',

  GiftClaimed = 'gift_claimed',

  GiftExpired = 'gift_expired',

  GiftScheduled = 'gift_scheduled',

  GiftUnclaimed = 'gift_unclaimed',

  GiftUpdated = 'gift_updated',

  HierarchyCreated = 'hierarchy_created',

  HierarchyDeleted = 'hierarchy_deleted',

  InvoiceDeleted = 'invoice_deleted',

  InvoiceGenerated = 'invoice_generated',

  InvoiceGeneratedWithBackdating = 'invoice_generated_with_backdating',

  InvoiceUpdated = 'invoice_updated',

  ItemCreated = 'item_created',

  ItemDeleted = 'item_deleted',

  ItemEntitlementsRemoved = 'item_entitlements_removed',

  ItemEntitlementsUpdated = 'item_entitlements_updated',

  ItemFamilyCreated = 'item_family_created',

  ItemFamilyDeleted = 'item_family_deleted',

  ItemFamilyUpdated = 'item_family_updated',

  ItemPriceCreated = 'item_price_created',

  ItemPriceDeleted = 'item_price_deleted',

  ItemPriceEntitlementsRemoved = 'item_price_entitlements_removed',

  ItemPriceEntitlementsUpdated = 'item_price_entitlements_updated',

  ItemPriceUpdated = 'item_price_updated',

  ItemUpdated = 'item_updated',

  MrrUpdated = 'mrr_updated',

  NetdPaymentDueReminder = 'netd_payment_due_reminder',

  OmnichannelOneTimeOrderCreated = 'omnichannel_one_time_order_created',

  OmnichannelOneTimeOrderItemCancelled = 'omnichannel_one_time_order_item_cancelled',

  OmnichannelSubscriptionCreated = 'omnichannel_subscription_created',

  OmnichannelSubscriptionImported = 'omnichannel_subscription_imported',

  OmnichannelSubscriptionItemCancellationScheduled = 'omnichannel_subscription_item_cancellation_scheduled',

  OmnichannelSubscriptionItemCancelled = 'omnichannel_subscription_item_cancelled',

  OmnichannelSubscriptionItemChangeScheduled = 'omnichannel_subscription_item_change_scheduled',

  OmnichannelSubscriptionItemChanged = 'omnichannel_subscription_item_changed',

  OmnichannelSubscriptionItemDowngradeScheduled = 'omnichannel_subscription_item_downgrade_scheduled',

  OmnichannelSubscriptionItemDowngraded = 'omnichannel_subscription_item_downgraded',

  OmnichannelSubscriptionItemDunningExpired = 'omnichannel_subscription_item_dunning_expired',

  OmnichannelSubscriptionItemDunningStarted = 'omnichannel_subscription_item_dunning_started',

  OmnichannelSubscriptionItemExpired = 'omnichannel_subscription_item_expired',

  OmnichannelSubscriptionItemGracePeriodExpired = 'omnichannel_subscription_item_grace_period_expired',

  OmnichannelSubscriptionItemGracePeriodStarted = 'omnichannel_subscription_item_grace_period_started',

  OmnichannelSubscriptionItemPauseScheduled = 'omnichannel_subscription_item_pause_scheduled',

  OmnichannelSubscriptionItemPaused = 'omnichannel_subscription_item_paused',

  OmnichannelSubscriptionItemReactivated = 'omnichannel_subscription_item_reactivated',

  OmnichannelSubscriptionItemRenewed = 'omnichannel_subscription_item_renewed',

  OmnichannelSubscriptionItemResubscribed = 'omnichannel_subscription_item_resubscribed',

  OmnichannelSubscriptionItemResumed = 'omnichannel_subscription_item_resumed',

  OmnichannelSubscriptionItemScheduledCancellationRemoved = 'omnichannel_subscription_item_scheduled_cancellation_removed',

  OmnichannelSubscriptionItemScheduledChangeRemoved = 'omnichannel_subscription_item_scheduled_change_removed',

  OmnichannelSubscriptionItemScheduledDowngradeRemoved = 'omnichannel_subscription_item_scheduled_downgrade_removed',

  OmnichannelSubscriptionItemUpgraded = 'omnichannel_subscription_item_upgraded',

  OmnichannelSubscriptionMovedIn = 'omnichannel_subscription_moved_in',

  OmnichannelTransactionCreated = 'omnichannel_transaction_created',

  OrderCancelled = 'order_cancelled',

  OrderCreated = 'order_created',

  OrderDeleted = 'order_deleted',

  OrderDelivered = 'order_delivered',

  OrderReadyToProcess = 'order_ready_to_process',

  OrderReadyToShip = 'order_ready_to_ship',

  OrderResent = 'order_resent',

  OrderReturned = 'order_returned',

  OrderUpdated = 'order_updated',

  PaymentFailed = 'payment_failed',

  PaymentInitiated = 'payment_initiated',

  PaymentIntentCreated = 'payment_intent_created',

  PaymentIntentUpdated = 'payment_intent_updated',

  PaymentRefunded = 'payment_refunded',

  PaymentScheduleSchemeCreated = 'payment_schedule_scheme_created',

  PaymentScheduleSchemeDeleted = 'payment_schedule_scheme_deleted',

  PaymentSchedulesCreated = 'payment_schedules_created',

  PaymentSchedulesUpdated = 'payment_schedules_updated',

  PaymentSourceAdded = 'payment_source_added',

  PaymentSourceDeleted = 'payment_source_deleted',

  PaymentSourceExpired = 'payment_source_expired',

  PaymentSourceExpiring = 'payment_source_expiring',

  PaymentSourceLocallyDeleted = 'payment_source_locally_deleted',

  PaymentSourceUpdated = 'payment_source_updated',

  PaymentSucceeded = 'payment_succeeded',

  PendingInvoiceCreated = 'pending_invoice_created',

  PendingInvoiceUpdated = 'pending_invoice_updated',

  PlanCreated = 'plan_created',

  PlanDeleted = 'plan_deleted',

  PlanUpdated = 'plan_updated',

  PriceVariantCreated = 'price_variant_created',

  PriceVariantDeleted = 'price_variant_deleted',

  PriceVariantUpdated = 'price_variant_updated',

  ProductCreated = 'product_created',

  ProductDeleted = 'product_deleted',

  ProductUpdated = 'product_updated',

  PromotionalCreditsAdded = 'promotional_credits_added',

  PromotionalCreditsDeducted = 'promotional_credits_deducted',

  PurchaseCreated = 'purchase_created',

  QuoteCreated = 'quote_created',

  QuoteDeleted = 'quote_deleted',

  QuoteUpdated = 'quote_updated',

  RecordPurchaseFailed = 'record_purchase_failed',

  RefundInitiated = 'refund_initiated',

  RuleCreated = 'rule_created',

  RuleDeleted = 'rule_deleted',

  RuleUpdated = 'rule_updated',

  SalesOrderCreated = 'sales_order_created',

  SalesOrderUpdated = 'sales_order_updated',

  SubscriptionActivated = 'subscription_activated',

  SubscriptionActivatedWithBackdating = 'subscription_activated_with_backdating',

  SubscriptionAdvanceInvoiceScheduleAdded = 'subscription_advance_invoice_schedule_added',

  SubscriptionAdvanceInvoiceScheduleRemoved = 'subscription_advance_invoice_schedule_removed',

  SubscriptionAdvanceInvoiceScheduleUpdated = 'subscription_advance_invoice_schedule_updated',

  SubscriptionBusinessEntityChanged = 'subscription_business_entity_changed',

  SubscriptionCanceledWithBackdating = 'subscription_canceled_with_backdating',

  SubscriptionCancellationReminder = 'subscription_cancellation_reminder',

  SubscriptionCancellationScheduled = 'subscription_cancellation_scheduled',

  SubscriptionCancelled = 'subscription_cancelled',

  SubscriptionChanged = 'subscription_changed',

  SubscriptionChangedWithBackdating = 'subscription_changed_with_backdating',

  SubscriptionChangesScheduled = 'subscription_changes_scheduled',

  SubscriptionCreated = 'subscription_created',

  SubscriptionCreatedWithBackdating = 'subscription_created_with_backdating',

  SubscriptionDeleted = 'subscription_deleted',

  SubscriptionEntitlementsCreated = 'subscription_entitlements_created',

  SubscriptionEntitlementsUpdated = 'subscription_entitlements_updated',

  SubscriptionItemsRenewed = 'subscription_items_renewed',

  SubscriptionMovedIn = 'subscription_moved_in',

  SubscriptionMovedOut = 'subscription_moved_out',

  SubscriptionMovementFailed = 'subscription_movement_failed',

  SubscriptionPauseScheduled = 'subscription_pause_scheduled',

  SubscriptionPaused = 'subscription_paused',

  SubscriptionRampApplied = 'subscription_ramp_applied',

  SubscriptionRampCreated = 'subscription_ramp_created',

  SubscriptionRampDeleted = 'subscription_ramp_deleted',

  SubscriptionRampDrafted = 'subscription_ramp_drafted',

  SubscriptionRampUpdated = 'subscription_ramp_updated',

  SubscriptionReactivated = 'subscription_reactivated',

  SubscriptionReactivatedWithBackdating = 'subscription_reactivated_with_backdating',

  SubscriptionRenewalReminder = 'subscription_renewal_reminder',

  SubscriptionRenewed = 'subscription_renewed',

  SubscriptionResumed = 'subscription_resumed',

  SubscriptionResumptionScheduled = 'subscription_resumption_scheduled',

  SubscriptionScheduledCancellationRemoved = 'subscription_scheduled_cancellation_removed',

  SubscriptionScheduledChangesRemoved = 'subscription_scheduled_changes_removed',

  SubscriptionScheduledPauseRemoved = 'subscription_scheduled_pause_removed',

  SubscriptionScheduledResumptionRemoved = 'subscription_scheduled_resumption_removed',

  SubscriptionShippingAddressUpdated = 'subscription_shipping_address_updated',

  SubscriptionStarted = 'subscription_started',

  SubscriptionTrialEndReminder = 'subscription_trial_end_reminder',

  SubscriptionTrialExtended = 'subscription_trial_extended',

  TaxWithheldDeleted = 'tax_withheld_deleted',

  TaxWithheldRecorded = 'tax_withheld_recorded',

  TaxWithheldRefunded = 'tax_withheld_refunded',

  TokenConsumed = 'token_consumed',

  TokenCreated = 'token_created',

  TokenExpired = 'token_expired',

  TransactionCreated = 'transaction_created',

  TransactionDeleted = 'transaction_deleted',

  TransactionUpdated = 'transaction_updated',

  UnbilledChargesCreated = 'unbilled_charges_created',

  UnbilledChargesDeleted = 'unbilled_charges_deleted',

  UnbilledChargesInvoiced = 'unbilled_charges_invoiced',

  UnbilledChargesVoided = 'unbilled_charges_voided',

  UsageFileIngested = 'usage_file_ingested',

  VariantCreated = 'variant_created',

  VariantDeleted = 'variant_deleted',

  VariantUpdated = 'variant_updated',

  VirtualBankAccountAdded = 'virtual_bank_account_added',

  VirtualBankAccountDeleted = 'virtual_bank_account_deleted',

  VirtualBankAccountUpdated = 'virtual_bank_account_updated',

  VoucherCreateFailed = 'voucher_create_failed',

  VoucherCreated = 'voucher_created',

  VoucherExpired = 'voucher_expired',
}

/**
 * @deprecated Renamed to `WebhookEventType` for clarity. Use `WebhookEventType` instead.
 * This alias will be removed in the next major version.
 *
 * @example
 * // Before (deprecated)
 * import { WebhookContentType } from 'chargebee';
 * if (event.event_type === WebhookContentType.SubscriptionCreated) { ... }
 *
 * // After (recommended)
 * import { WebhookEventType } from 'chargebee';
 * if (event.event_type === WebhookEventType.SubscriptionCreated) { ... }
 */
export const WebhookContentType = WebhookEventType;
