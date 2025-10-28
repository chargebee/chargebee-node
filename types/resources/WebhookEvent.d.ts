///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>

declare module 'chargebee' {
  export enum WebhookContentType {
    SubscriptionPauseScheduled = 'subscription_pause_scheduled',
    CustomerBusinessEntityChanged = 'customer_business_entity_changed',
    SubscriptionAdvanceInvoiceScheduleAdded = 'subscription_advance_invoice_schedule_added',
    GiftExpired = 'gift_expired',
    TaxWithheldDeleted = 'tax_withheld_deleted',
    UnbilledChargesDeleted = 'unbilled_charges_deleted',
    CouponUpdated = 'coupon_updated',
    OmnichannelSubscriptionItemReactivated = 'omnichannel_subscription_item_reactivated',
    OmnichannelSubscriptionItemRenewed = 'omnichannel_subscription_item_renewed',
    UnbilledChargesCreated = 'unbilled_charges_created',
    SubscriptionResumed = 'subscription_resumed',
    OmnichannelOneTimeOrderItemCancelled = 'omnichannel_one_time_order_item_cancelled',
    SubscriptionCancelled = 'subscription_cancelled',
    ItemEntitlementsRemoved = 'item_entitlements_removed',
    BusinessEntityCreated = 'business_entity_created',
    CouponSetUpdated = 'coupon_set_updated',
    DifferentialPriceUpdated = 'differential_price_updated',
    OmnichannelSubscriptionItemPaused = 'omnichannel_subscription_item_paused',
    EntitlementOverridesRemoved = 'entitlement_overrides_removed',
    SubscriptionActivatedWithBackdating = 'subscription_activated_with_backdating',
    SubscriptionTrialEndReminder = 'subscription_trial_end_reminder',
    SubscriptionShippingAddressUpdated = 'subscription_shipping_address_updated',
    VoucherCreateFailed = 'voucher_create_failed',
    GiftClaimed = 'gift_claimed',
    CustomerDeleted = 'customer_deleted',
    RefundInitiated = 'refund_initiated',
    InvoiceGeneratedWithBackdating = 'invoice_generated_with_backdating',
    OmnichannelTransactionCreated = 'omnichannel_transaction_created',
    AddUsagesReminder = 'add_usages_reminder',
    VoucherCreated = 'voucher_created',
    RuleUpdated = 'rule_updated',
    PaymentSchedulesCreated = 'payment_schedules_created',
    FeatureActivated = 'feature_activated',
    PaymentSourceLocallyDeleted = 'payment_source_locally_deleted',
    InvoiceGenerated = 'invoice_generated',
    VoucherExpired = 'voucher_expired',
    AuthorizationSucceeded = 'authorization_succeeded',
    GiftScheduled = 'gift_scheduled',
    SubscriptionChangesScheduled = 'subscription_changes_scheduled',
    SubscriptionChangedWithBackdating = 'subscription_changed_with_backdating',
    OmnichannelSubscriptionItemChanged = 'omnichannel_subscription_item_changed',
    GiftUnclaimed = 'gift_unclaimed',
    VirtualBankAccountAdded = 'virtual_bank_account_added',
    PaymentIntentCreated = 'payment_intent_created',
    CreditNoteCreatedWithBackdating = 'credit_note_created_with_backdating',
    ContractTermTerminated = 'contract_term_terminated',
    ItemFamilyUpdated = 'item_family_updated',
    OrderCreated = 'order_created',
    PriceVariantDeleted = 'price_variant_deleted',
    SubscriptionMovementFailed = 'subscription_movement_failed',
    CustomerMovedIn = 'customer_moved_in',
    SubscriptionAdvanceInvoiceScheduleUpdated = 'subscription_advance_invoice_schedule_updated',
    ItemDeleted = 'item_deleted',
    SubscriptionRampDrafted = 'subscription_ramp_drafted',
    DunningUpdated = 'dunning_updated',
    ItemEntitlementsUpdated = 'item_entitlements_updated',
    TokenConsumed = 'token_consumed',
    HierarchyDeleted = 'hierarchy_deleted',
    SubscriptionCancellationScheduled = 'subscription_cancellation_scheduled',
    SubscriptionRenewed = 'subscription_renewed',
    FeatureUpdated = 'feature_updated',
    FeatureDeleted = 'feature_deleted',
    ItemFamilyCreated = 'item_family_created',
    OmnichannelSubscriptionItemScheduledChangeRemoved = 'omnichannel_subscription_item_scheduled_change_removed',
    OmnichannelSubscriptionItemResumed = 'omnichannel_subscription_item_resumed',
    PurchaseCreated = 'purchase_created',
    EntitlementOverridesUpdated = 'entitlement_overrides_updated',
    ItemFamilyDeleted = 'item_family_deleted',
    SubscriptionResumptionScheduled = 'subscription_resumption_scheduled',
    FeatureReactivated = 'feature_reactivated',
    CouponCodesDeleted = 'coupon_codes_deleted',
    CardExpired = 'card_expired',
    CreditNoteUpdated = 'credit_note_updated',
    OmnichannelSubscriptionItemDowngraded = 'omnichannel_subscription_item_downgraded',
    PriceVariantUpdated = 'price_variant_updated',
    PromotionalCreditsDeducted = 'promotional_credits_deducted',
    SubscriptionRampApplied = 'subscription_ramp_applied',
    SubscriptionPaused = 'subscription_paused',
    OrderReadyToProcess = 'order_ready_to_process',
    FeatureCreated = 'feature_created',
    TransactionDeleted = 'transaction_deleted',
    CreditNoteCreated = 'credit_note_created',
    OmnichannelSubscriptionItemResubscribed = 'omnichannel_subscription_item_resubscribed',
    RecordPurchaseFailed = 'record_purchase_failed',
    ItemCreated = 'item_created',
    TransactionUpdated = 'transaction_updated',
    MrrUpdated = 'mrr_updated',
    UnbilledChargesInvoiced = 'unbilled_charges_invoiced',
    ItemPriceUpdated = 'item_price_updated',
    CouponCodesUpdated = 'coupon_codes_updated',
    VirtualBankAccountUpdated = 'virtual_bank_account_updated',
    ContractTermCreated = 'contract_term_created',
    SubscriptionChanged = 'subscription_changed',
    PaymentFailed = 'payment_failed',
    CreditNoteDeleted = 'credit_note_deleted',
    TaxWithheldRefunded = 'tax_withheld_refunded',
    ContractTermCompleted = 'contract_term_completed',
    PaymentSchedulesUpdated = 'payment_schedules_updated',
    OmnichannelSubscriptionItemExpired = 'omnichannel_subscription_item_expired',
    CardUpdated = 'card_updated',
    CustomerCreated = 'customer_created',
    SubscriptionRenewalReminder = 'subscription_renewal_reminder',
    OrderDelivered = 'order_delivered',
    OmnichannelSubscriptionItemCancellationScheduled = 'omnichannel_subscription_item_cancellation_scheduled',
    OmnichannelSubscriptionItemGracePeriodExpired = 'omnichannel_subscription_item_grace_period_expired',
    CouponCodesAdded = 'coupon_codes_added',
    GiftCancelled = 'gift_cancelled',
    OrderCancelled = 'order_cancelled',
    CouponDeleted = 'coupon_deleted',
    SubscriptionScheduledChangesRemoved = 'subscription_scheduled_changes_removed',
    PendingInvoiceCreated = 'pending_invoice_created',
    EntitlementOverridesAutoRemoved = 'entitlement_overrides_auto_removed',
    OmnichannelSubscriptionItemUpgraded = 'omnichannel_subscription_item_upgraded',
    SubscriptionBusinessEntityChanged = 'subscription_business_entity_changed',
    OmnichannelOneTimeOrderCreated = 'omnichannel_one_time_order_created',
    PaymentSourceDeleted = 'payment_source_deleted',
    OmnichannelSubscriptionItemCancelled = 'omnichannel_subscription_item_cancelled',
    QuoteDeleted = 'quote_deleted',
    InvoiceUpdated = 'invoice_updated',
    SubscriptionAdvanceInvoiceScheduleRemoved = 'subscription_advance_invoice_schedule_removed',
    CardDeleted = 'card_deleted',
    OrderReadyToShip = 'order_ready_to_ship',
    SubscriptionMovedOut = 'subscription_moved_out',
    PaymentScheduleSchemeCreated = 'payment_schedule_scheme_created',
    BusinessEntityUpdated = 'business_entity_updated',
    SubscriptionScheduledResumptionRemoved = 'subscription_scheduled_resumption_removed',
    PaymentInitiated = 'payment_initiated',
    FeatureArchived = 'feature_archived',
    SubscriptionReactivatedWithBackdating = 'subscription_reactivated_with_backdating',
    OmnichannelSubscriptionImported = 'omnichannel_subscription_imported',
    TokenExpired = 'token_expired',
    CardAdded = 'card_added',
    CouponCreated = 'coupon_created',
    RuleDeleted = 'rule_deleted',
    ItemPriceEntitlementsUpdated = 'item_price_entitlements_updated',
    ItemPriceDeleted = 'item_price_deleted',
    VirtualBankAccountDeleted = 'virtual_bank_account_deleted',
    PaymentScheduleSchemeDeleted = 'payment_schedule_scheme_deleted',
    SubscriptionCreated = 'subscription_created',
    SubscriptionEntitlementsCreated = 'subscription_entitlements_created',
    OrderReturned = 'order_returned',
    SubscriptionDeleted = 'subscription_deleted',
    PaymentSourceAdded = 'payment_source_added',
    SubscriptionMovedIn = 'subscription_moved_in',
    ItemPriceCreated = 'item_price_created',
    SubscriptionScheduledCancellationRemoved = 'subscription_scheduled_cancellation_removed',
    PaymentRefunded = 'payment_refunded',
    UsageFileIngested = 'usage_file_ingested',
    OmnichannelSubscriptionMovedIn = 'omnichannel_subscription_moved_in',
    DifferentialPriceCreated = 'differential_price_created',
    TransactionCreated = 'transaction_created',
    PaymentSucceeded = 'payment_succeeded',
    SubscriptionCanceledWithBackdating = 'subscription_canceled_with_backdating',
    UnbilledChargesVoided = 'unbilled_charges_voided',
    QuoteCreated = 'quote_created',
    CouponSetDeleted = 'coupon_set_deleted',
    AttachedItemCreated = 'attached_item_created',
    SalesOrderCreated = 'sales_order_created',
    CustomerChanged = 'customer_changed',
    SubscriptionStarted = 'subscription_started',
    SubscriptionActivated = 'subscription_activated',
    PaymentSourceExpiring = 'payment_source_expiring',
    SubscriptionReactivated = 'subscription_reactivated',
    OrderUpdated = 'order_updated',
    SubscriptionScheduledPauseRemoved = 'subscription_scheduled_pause_removed',
    SubscriptionCancellationReminder = 'subscription_cancellation_reminder',
    SubscriptionCreatedWithBackdating = 'subscription_created_with_backdating',
    SubscriptionRampCreated = 'subscription_ramp_created',
    OrderDeleted = 'order_deleted',
    OmnichannelSubscriptionItemPauseScheduled = 'omnichannel_subscription_item_pause_scheduled',
    GiftUpdated = 'gift_updated',
    SubscriptionTrialExtended = 'subscription_trial_extended',
    OmnichannelSubscriptionItemGracePeriodStarted = 'omnichannel_subscription_item_grace_period_started',
    CardExpiryReminder = 'card_expiry_reminder',
    TokenCreated = 'token_created',
    PromotionalCreditsAdded = 'promotional_credits_added',
    SubscriptionRampUpdated = 'subscription_ramp_updated',
    CustomerEntitlementsUpdated = 'customer_entitlements_updated',
    PaymentSourceExpired = 'payment_source_expired',
    CustomerMovedOut = 'customer_moved_out',
    SubscriptionEntitlementsUpdated = 'subscription_entitlements_updated',
    OmnichannelSubscriptionItemDunningExpired = 'omnichannel_subscription_item_dunning_expired',
    HierarchyCreated = 'hierarchy_created',
    AttachedItemDeleted = 'attached_item_deleted',
    OmnichannelSubscriptionItemScheduledCancellationRemoved = 'omnichannel_subscription_item_scheduled_cancellation_removed',
    ItemUpdated = 'item_updated',
    CouponSetCreated = 'coupon_set_created',
    PaymentIntentUpdated = 'payment_intent_updated',
    OrderResent = 'order_resent',
    OmnichannelSubscriptionCreated = 'omnichannel_subscription_created',
    TaxWithheldRecorded = 'tax_withheld_recorded',
    PriceVariantCreated = 'price_variant_created',
    DifferentialPriceDeleted = 'differential_price_deleted',
    SubscriptionItemsRenewed = 'subscription_items_renewed',
    RuleCreated = 'rule_created',
    ContractTermCancelled = 'contract_term_cancelled',
    ContractTermRenewed = 'contract_term_renewed',
    InvoiceDeleted = 'invoice_deleted',
    ItemPriceEntitlementsRemoved = 'item_price_entitlements_removed',
    SalesOrderUpdated = 'sales_order_updated',
    OmnichannelSubscriptionItemDunningStarted = 'omnichannel_subscription_item_dunning_started',
    OmnichannelSubscriptionItemChangeScheduled = 'omnichannel_subscription_item_change_scheduled',
    PendingInvoiceUpdated = 'pending_invoice_updated',
    QuoteUpdated = 'quote_updated',
    AttachedItemUpdated = 'attached_item_updated',
    PaymentSourceUpdated = 'payment_source_updated',
    BusinessEntityDeleted = 'business_entity_deleted',
    AuthorizationVoided = 'authorization_voided',
    SubscriptionRampDeleted = 'subscription_ramp_deleted',
  }

  export type WebhookContentMap = {
    [WebhookContentType.SubscriptionPauseScheduled]: SubscriptionPauseScheduledContent;
    [WebhookContentType.CustomerBusinessEntityChanged]: CustomerBusinessEntityChangedContent;
    [WebhookContentType.SubscriptionAdvanceInvoiceScheduleAdded]: SubscriptionAdvanceInvoiceScheduleAddedContent;
    [WebhookContentType.GiftExpired]: GiftExpiredContent;
    [WebhookContentType.TaxWithheldDeleted]: TaxWithheldDeletedContent;
    [WebhookContentType.UnbilledChargesDeleted]: UnbilledChargesDeletedContent;
    [WebhookContentType.CouponUpdated]: CouponUpdatedContent;
    [WebhookContentType.OmnichannelSubscriptionItemReactivated]: OmnichannelSubscriptionItemReactivatedContent;
    [WebhookContentType.OmnichannelSubscriptionItemRenewed]: OmnichannelSubscriptionItemRenewedContent;
    [WebhookContentType.UnbilledChargesCreated]: UnbilledChargesCreatedContent;
    [WebhookContentType.SubscriptionResumed]: SubscriptionResumedContent;
    [WebhookContentType.OmnichannelOneTimeOrderItemCancelled]: OmnichannelOneTimeOrderItemCancelledContent;
    [WebhookContentType.SubscriptionCancelled]: SubscriptionCancelledContent;
    [WebhookContentType.ItemEntitlementsRemoved]: ItemEntitlementsRemovedContent;
    [WebhookContentType.BusinessEntityCreated]: BusinessEntityCreatedContent;
    [WebhookContentType.CouponSetUpdated]: CouponSetUpdatedContent;
    [WebhookContentType.DifferentialPriceUpdated]: DifferentialPriceUpdatedContent;
    [WebhookContentType.OmnichannelSubscriptionItemPaused]: OmnichannelSubscriptionItemPausedContent;
    [WebhookContentType.EntitlementOverridesRemoved]: EntitlementOverridesRemovedContent;
    [WebhookContentType.SubscriptionActivatedWithBackdating]: SubscriptionActivatedWithBackdatingContent;
    [WebhookContentType.SubscriptionTrialEndReminder]: SubscriptionTrialEndReminderContent;
    [WebhookContentType.SubscriptionShippingAddressUpdated]: SubscriptionShippingAddressUpdatedContent;
    [WebhookContentType.VoucherCreateFailed]: VoucherCreateFailedContent;
    [WebhookContentType.GiftClaimed]: GiftClaimedContent;
    [WebhookContentType.CustomerDeleted]: CustomerDeletedContent;
    [WebhookContentType.RefundInitiated]: RefundInitiatedContent;
    [WebhookContentType.InvoiceGeneratedWithBackdating]: InvoiceGeneratedWithBackdatingContent;
    [WebhookContentType.OmnichannelTransactionCreated]: OmnichannelTransactionCreatedContent;
    [WebhookContentType.AddUsagesReminder]: AddUsagesReminderContent;
    [WebhookContentType.VoucherCreated]: VoucherCreatedContent;
    [WebhookContentType.RuleUpdated]: RuleUpdatedContent;
    [WebhookContentType.PaymentSchedulesCreated]: PaymentSchedulesCreatedContent;
    [WebhookContentType.FeatureActivated]: FeatureActivatedContent;
    [WebhookContentType.PaymentSourceLocallyDeleted]: PaymentSourceLocallyDeletedContent;
    [WebhookContentType.InvoiceGenerated]: InvoiceGeneratedContent;
    [WebhookContentType.VoucherExpired]: VoucherExpiredContent;
    [WebhookContentType.AuthorizationSucceeded]: AuthorizationSucceededContent;
    [WebhookContentType.GiftScheduled]: GiftScheduledContent;
    [WebhookContentType.SubscriptionChangesScheduled]: SubscriptionChangesScheduledContent;
    [WebhookContentType.SubscriptionChangedWithBackdating]: SubscriptionChangedWithBackdatingContent;
    [WebhookContentType.OmnichannelSubscriptionItemChanged]: OmnichannelSubscriptionItemChangedContent;
    [WebhookContentType.GiftUnclaimed]: GiftUnclaimedContent;
    [WebhookContentType.VirtualBankAccountAdded]: VirtualBankAccountAddedContent;
    [WebhookContentType.PaymentIntentCreated]: PaymentIntentCreatedContent;
    [WebhookContentType.CreditNoteCreatedWithBackdating]: CreditNoteCreatedWithBackdatingContent;
    [WebhookContentType.ContractTermTerminated]: ContractTermTerminatedContent;
    [WebhookContentType.ItemFamilyUpdated]: ItemFamilyUpdatedContent;
    [WebhookContentType.OrderCreated]: OrderCreatedContent;
    [WebhookContentType.PriceVariantDeleted]: PriceVariantDeletedContent;
    [WebhookContentType.SubscriptionMovementFailed]: SubscriptionMovementFailedContent;
    [WebhookContentType.CustomerMovedIn]: CustomerMovedInContent;
    [WebhookContentType.SubscriptionAdvanceInvoiceScheduleUpdated]: SubscriptionAdvanceInvoiceScheduleUpdatedContent;
    [WebhookContentType.ItemDeleted]: ItemDeletedContent;
    [WebhookContentType.SubscriptionRampDrafted]: SubscriptionRampDraftedContent;
    [WebhookContentType.DunningUpdated]: DunningUpdatedContent;
    [WebhookContentType.ItemEntitlementsUpdated]: ItemEntitlementsUpdatedContent;
    [WebhookContentType.TokenConsumed]: TokenConsumedContent;
    [WebhookContentType.HierarchyDeleted]: HierarchyDeletedContent;
    [WebhookContentType.SubscriptionCancellationScheduled]: SubscriptionCancellationScheduledContent;
    [WebhookContentType.SubscriptionRenewed]: SubscriptionRenewedContent;
    [WebhookContentType.FeatureUpdated]: FeatureUpdatedContent;
    [WebhookContentType.FeatureDeleted]: FeatureDeletedContent;
    [WebhookContentType.ItemFamilyCreated]: ItemFamilyCreatedContent;
    [WebhookContentType.OmnichannelSubscriptionItemScheduledChangeRemoved]: OmnichannelSubscriptionItemScheduledChangeRemovedContent;
    [WebhookContentType.OmnichannelSubscriptionItemResumed]: OmnichannelSubscriptionItemResumedContent;
    [WebhookContentType.PurchaseCreated]: PurchaseCreatedContent;
    [WebhookContentType.EntitlementOverridesUpdated]: EntitlementOverridesUpdatedContent;
    [WebhookContentType.ItemFamilyDeleted]: ItemFamilyDeletedContent;
    [WebhookContentType.SubscriptionResumptionScheduled]: SubscriptionResumptionScheduledContent;
    [WebhookContentType.FeatureReactivated]: FeatureReactivatedContent;
    [WebhookContentType.CouponCodesDeleted]: CouponCodesDeletedContent;
    [WebhookContentType.CardExpired]: CardExpiredContent;
    [WebhookContentType.CreditNoteUpdated]: CreditNoteUpdatedContent;
    [WebhookContentType.OmnichannelSubscriptionItemDowngraded]: OmnichannelSubscriptionItemDowngradedContent;
    [WebhookContentType.PriceVariantUpdated]: PriceVariantUpdatedContent;
    [WebhookContentType.PromotionalCreditsDeducted]: PromotionalCreditsDeductedContent;
    [WebhookContentType.SubscriptionRampApplied]: SubscriptionRampAppliedContent;
    [WebhookContentType.SubscriptionPaused]: SubscriptionPausedContent;
    [WebhookContentType.OrderReadyToProcess]: OrderReadyToProcessContent;
    [WebhookContentType.FeatureCreated]: FeatureCreatedContent;
    [WebhookContentType.TransactionDeleted]: TransactionDeletedContent;
    [WebhookContentType.CreditNoteCreated]: CreditNoteCreatedContent;
    [WebhookContentType.OmnichannelSubscriptionItemResubscribed]: OmnichannelSubscriptionItemResubscribedContent;
    [WebhookContentType.RecordPurchaseFailed]: RecordPurchaseFailedContent;
    [WebhookContentType.ItemCreated]: ItemCreatedContent;
    [WebhookContentType.TransactionUpdated]: TransactionUpdatedContent;
    [WebhookContentType.MrrUpdated]: MrrUpdatedContent;
    [WebhookContentType.UnbilledChargesInvoiced]: UnbilledChargesInvoicedContent;
    [WebhookContentType.ItemPriceUpdated]: ItemPriceUpdatedContent;
    [WebhookContentType.CouponCodesUpdated]: CouponCodesUpdatedContent;
    [WebhookContentType.VirtualBankAccountUpdated]: VirtualBankAccountUpdatedContent;
    [WebhookContentType.ContractTermCreated]: ContractTermCreatedContent;
    [WebhookContentType.SubscriptionChanged]: SubscriptionChangedContent;
    [WebhookContentType.PaymentFailed]: PaymentFailedContent;
    [WebhookContentType.CreditNoteDeleted]: CreditNoteDeletedContent;
    [WebhookContentType.TaxWithheldRefunded]: TaxWithheldRefundedContent;
    [WebhookContentType.ContractTermCompleted]: ContractTermCompletedContent;
    [WebhookContentType.PaymentSchedulesUpdated]: PaymentSchedulesUpdatedContent;
    [WebhookContentType.OmnichannelSubscriptionItemExpired]: OmnichannelSubscriptionItemExpiredContent;
    [WebhookContentType.CardUpdated]: CardUpdatedContent;
    [WebhookContentType.CustomerCreated]: CustomerCreatedContent;
    [WebhookContentType.SubscriptionRenewalReminder]: SubscriptionRenewalReminderContent;
    [WebhookContentType.OrderDelivered]: OrderDeliveredContent;
    [WebhookContentType.OmnichannelSubscriptionItemCancellationScheduled]: OmnichannelSubscriptionItemCancellationScheduledContent;
    [WebhookContentType.OmnichannelSubscriptionItemGracePeriodExpired]: OmnichannelSubscriptionItemGracePeriodExpiredContent;
    [WebhookContentType.CouponCodesAdded]: CouponCodesAddedContent;
    [WebhookContentType.GiftCancelled]: GiftCancelledContent;
    [WebhookContentType.OrderCancelled]: OrderCancelledContent;
    [WebhookContentType.CouponDeleted]: CouponDeletedContent;
    [WebhookContentType.SubscriptionScheduledChangesRemoved]: SubscriptionScheduledChangesRemovedContent;
    [WebhookContentType.PendingInvoiceCreated]: PendingInvoiceCreatedContent;
    [WebhookContentType.EntitlementOverridesAutoRemoved]: EntitlementOverridesAutoRemovedContent;
    [WebhookContentType.OmnichannelSubscriptionItemUpgraded]: OmnichannelSubscriptionItemUpgradedContent;
    [WebhookContentType.SubscriptionBusinessEntityChanged]: SubscriptionBusinessEntityChangedContent;
    [WebhookContentType.OmnichannelOneTimeOrderCreated]: OmnichannelOneTimeOrderCreatedContent;
    [WebhookContentType.PaymentSourceDeleted]: PaymentSourceDeletedContent;
    [WebhookContentType.OmnichannelSubscriptionItemCancelled]: OmnichannelSubscriptionItemCancelledContent;
    [WebhookContentType.QuoteDeleted]: QuoteDeletedContent;
    [WebhookContentType.InvoiceUpdated]: InvoiceUpdatedContent;
    [WebhookContentType.SubscriptionAdvanceInvoiceScheduleRemoved]: SubscriptionAdvanceInvoiceScheduleRemovedContent;
    [WebhookContentType.CardDeleted]: CardDeletedContent;
    [WebhookContentType.OrderReadyToShip]: OrderReadyToShipContent;
    [WebhookContentType.SubscriptionMovedOut]: SubscriptionMovedOutContent;
    [WebhookContentType.PaymentScheduleSchemeCreated]: PaymentScheduleSchemeCreatedContent;
    [WebhookContentType.BusinessEntityUpdated]: BusinessEntityUpdatedContent;
    [WebhookContentType.SubscriptionScheduledResumptionRemoved]: SubscriptionScheduledResumptionRemovedContent;
    [WebhookContentType.PaymentInitiated]: PaymentInitiatedContent;
    [WebhookContentType.FeatureArchived]: FeatureArchivedContent;
    [WebhookContentType.SubscriptionReactivatedWithBackdating]: SubscriptionReactivatedWithBackdatingContent;
    [WebhookContentType.OmnichannelSubscriptionImported]: OmnichannelSubscriptionImportedContent;
    [WebhookContentType.TokenExpired]: TokenExpiredContent;
    [WebhookContentType.CardAdded]: CardAddedContent;
    [WebhookContentType.CouponCreated]: CouponCreatedContent;
    [WebhookContentType.RuleDeleted]: RuleDeletedContent;
    [WebhookContentType.ItemPriceEntitlementsUpdated]: ItemPriceEntitlementsUpdatedContent;
    [WebhookContentType.ItemPriceDeleted]: ItemPriceDeletedContent;
    [WebhookContentType.VirtualBankAccountDeleted]: VirtualBankAccountDeletedContent;
    [WebhookContentType.PaymentScheduleSchemeDeleted]: PaymentScheduleSchemeDeletedContent;
    [WebhookContentType.SubscriptionCreated]: SubscriptionCreatedContent;
    [WebhookContentType.SubscriptionEntitlementsCreated]: SubscriptionEntitlementsCreatedContent;
    [WebhookContentType.OrderReturned]: OrderReturnedContent;
    [WebhookContentType.SubscriptionDeleted]: SubscriptionDeletedContent;
    [WebhookContentType.PaymentSourceAdded]: PaymentSourceAddedContent;
    [WebhookContentType.SubscriptionMovedIn]: SubscriptionMovedInContent;
    [WebhookContentType.ItemPriceCreated]: ItemPriceCreatedContent;
    [WebhookContentType.SubscriptionScheduledCancellationRemoved]: SubscriptionScheduledCancellationRemovedContent;
    [WebhookContentType.PaymentRefunded]: PaymentRefundedContent;
    [WebhookContentType.UsageFileIngested]: UsageFileIngestedContent;
    [WebhookContentType.OmnichannelSubscriptionMovedIn]: OmnichannelSubscriptionMovedInContent;
    [WebhookContentType.DifferentialPriceCreated]: DifferentialPriceCreatedContent;
    [WebhookContentType.TransactionCreated]: TransactionCreatedContent;
    [WebhookContentType.PaymentSucceeded]: PaymentSucceededContent;
    [WebhookContentType.SubscriptionCanceledWithBackdating]: SubscriptionCanceledWithBackdatingContent;
    [WebhookContentType.UnbilledChargesVoided]: UnbilledChargesVoidedContent;
    [WebhookContentType.QuoteCreated]: QuoteCreatedContent;
    [WebhookContentType.CouponSetDeleted]: CouponSetDeletedContent;
    [WebhookContentType.AttachedItemCreated]: AttachedItemCreatedContent;
    [WebhookContentType.SalesOrderCreated]: SalesOrderCreatedContent;
    [WebhookContentType.CustomerChanged]: CustomerChangedContent;
    [WebhookContentType.SubscriptionStarted]: SubscriptionStartedContent;
    [WebhookContentType.SubscriptionActivated]: SubscriptionActivatedContent;
    [WebhookContentType.PaymentSourceExpiring]: PaymentSourceExpiringContent;
    [WebhookContentType.SubscriptionReactivated]: SubscriptionReactivatedContent;
    [WebhookContentType.OrderUpdated]: OrderUpdatedContent;
    [WebhookContentType.SubscriptionScheduledPauseRemoved]: SubscriptionScheduledPauseRemovedContent;
    [WebhookContentType.SubscriptionCancellationReminder]: SubscriptionCancellationReminderContent;
    [WebhookContentType.SubscriptionCreatedWithBackdating]: SubscriptionCreatedWithBackdatingContent;
    [WebhookContentType.SubscriptionRampCreated]: SubscriptionRampCreatedContent;
    [WebhookContentType.OrderDeleted]: OrderDeletedContent;
    [WebhookContentType.OmnichannelSubscriptionItemPauseScheduled]: OmnichannelSubscriptionItemPauseScheduledContent;
    [WebhookContentType.GiftUpdated]: GiftUpdatedContent;
    [WebhookContentType.SubscriptionTrialExtended]: SubscriptionTrialExtendedContent;
    [WebhookContentType.OmnichannelSubscriptionItemGracePeriodStarted]: OmnichannelSubscriptionItemGracePeriodStartedContent;
    [WebhookContentType.CardExpiryReminder]: CardExpiryReminderContent;
    [WebhookContentType.TokenCreated]: TokenCreatedContent;
    [WebhookContentType.PromotionalCreditsAdded]: PromotionalCreditsAddedContent;
    [WebhookContentType.SubscriptionRampUpdated]: SubscriptionRampUpdatedContent;
    [WebhookContentType.CustomerEntitlementsUpdated]: CustomerEntitlementsUpdatedContent;
    [WebhookContentType.PaymentSourceExpired]: PaymentSourceExpiredContent;
    [WebhookContentType.CustomerMovedOut]: CustomerMovedOutContent;
    [WebhookContentType.SubscriptionEntitlementsUpdated]: SubscriptionEntitlementsUpdatedContent;
    [WebhookContentType.OmnichannelSubscriptionItemDunningExpired]: OmnichannelSubscriptionItemDunningExpiredContent;
    [WebhookContentType.HierarchyCreated]: HierarchyCreatedContent;
    [WebhookContentType.AttachedItemDeleted]: AttachedItemDeletedContent;
    [WebhookContentType.OmnichannelSubscriptionItemScheduledCancellationRemoved]: OmnichannelSubscriptionItemScheduledCancellationRemovedContent;
    [WebhookContentType.ItemUpdated]: ItemUpdatedContent;
    [WebhookContentType.CouponSetCreated]: CouponSetCreatedContent;
    [WebhookContentType.PaymentIntentUpdated]: PaymentIntentUpdatedContent;
    [WebhookContentType.OrderResent]: OrderResentContent;
    [WebhookContentType.OmnichannelSubscriptionCreated]: OmnichannelSubscriptionCreatedContent;
    [WebhookContentType.TaxWithheldRecorded]: TaxWithheldRecordedContent;
    [WebhookContentType.PriceVariantCreated]: PriceVariantCreatedContent;
    [WebhookContentType.DifferentialPriceDeleted]: DifferentialPriceDeletedContent;
    [WebhookContentType.SubscriptionItemsRenewed]: SubscriptionItemsRenewedContent;
    [WebhookContentType.RuleCreated]: RuleCreatedContent;
    [WebhookContentType.ContractTermCancelled]: ContractTermCancelledContent;
    [WebhookContentType.ContractTermRenewed]: ContractTermRenewedContent;
    [WebhookContentType.InvoiceDeleted]: InvoiceDeletedContent;
    [WebhookContentType.ItemPriceEntitlementsRemoved]: ItemPriceEntitlementsRemovedContent;
    [WebhookContentType.SalesOrderUpdated]: SalesOrderUpdatedContent;
    [WebhookContentType.OmnichannelSubscriptionItemDunningStarted]: OmnichannelSubscriptionItemDunningStartedContent;
    [WebhookContentType.OmnichannelSubscriptionItemChangeScheduled]: OmnichannelSubscriptionItemChangeScheduledContent;
    [WebhookContentType.PendingInvoiceUpdated]: PendingInvoiceUpdatedContent;
    [WebhookContentType.QuoteUpdated]: QuoteUpdatedContent;
    [WebhookContentType.AttachedItemUpdated]: AttachedItemUpdatedContent;
    [WebhookContentType.PaymentSourceUpdated]: PaymentSourceUpdatedContent;
    [WebhookContentType.BusinessEntityDeleted]: BusinessEntityDeletedContent;
    [WebhookContentType.AuthorizationVoided]: AuthorizationVoidedContent;
    [WebhookContentType.SubscriptionRampDeleted]: SubscriptionRampDeletedContent;
  };

  export type ContentFor<T extends WebhookContentType> = WebhookContentMap[T];

  export interface WebhookEvent<
    T extends WebhookContentType = WebhookContentType,
  > {
    content: ContentFor<T>;
    id: string;
    occurred_at: number;
    source: SourceEnum;
    user?: string;
    webhook_status:
      | 'not_configured'
      | 'scheduled'
      | 'succeeded'
      | 're_scheduled'
      | 'failed'
      | 'skipped'
      | 'not_applicable'
      | 'disabled';
    webhook_failure_reason?: string;
    webhooks?: Event.Webhook[];
    event_type?: EventTypeEnum;
    api_version?: ApiVersionEnum;
    origin_user?: string;
  }
  export type SubscriptionPauseScheduledContent = {
    subscription: Subscription;

    customer: Customer;

    card: Card;

    advance_invoice_schedule: AdvanceInvoiceSchedule;
  };
  export type CustomerBusinessEntityChangedContent = {
    business_entity_change: BusinessEntityChange;

    business_entity_transfer: BusinessEntityTransfer;

    customer: Customer;
  };
  export type SubscriptionAdvanceInvoiceScheduleAddedContent = {
    subscription: Subscription;

    customer: Customer;

    advance_invoice_schedule: AdvanceInvoiceSchedule;
  };
  export type GiftExpiredContent = {
    gift: Gift;
  };
  export type TaxWithheldDeletedContent = {
    tax_withheld: TaxWithheld;

    invoice: Invoice;

    credit_note: CreditNote;
  };
  export type UnbilledChargesDeletedContent = {
    unbilled_charge: UnbilledCharge;
  };
  export type CouponUpdatedContent = {
    coupon: Coupon;
  };
  export type OmnichannelSubscriptionItemReactivatedContent = {
    omnichannel_subscription: OmnichannelSubscription;

    omnichannel_subscription_item: OmnichannelSubscriptionItem;

    customer: Customer;
  };
  export type OmnichannelSubscriptionItemRenewedContent = {
    omnichannel_subscription_item: OmnichannelSubscriptionItem;

    omnichannel_subscription: OmnichannelSubscription;

    omnichannel_transaction: OmnichannelTransaction;

    omnichannel_subscription_item_scheduled_change: OmnichannelSubscriptionItemScheduledChange;

    customer: Customer;
  };
  export type UnbilledChargesCreatedContent = {
    unbilled_charge: UnbilledCharge;
  };
  export type SubscriptionResumedContent = {
    subscription: Subscription;

    customer: Customer;

    card: Card;

    invoice: Invoice;

    unbilled_charge: UnbilledCharge;
  };
  export type OmnichannelOneTimeOrderItemCancelledContent = {
    omnichannel_one_time_order: OmnichannelOneTimeOrder;

    omnichannel_one_time_order_item: OmnichannelOneTimeOrderItem;

    omnichannel_transaction: OmnichannelTransaction;

    customer: Customer;
  };
  export type SubscriptionCancelledContent = {
    subscription: Subscription;

    customer: Customer;

    card: Card;

    invoice: Invoice;

    credit_note: CreditNote;

    unbilled_charge: UnbilledCharge;
  };
  export type ItemEntitlementsRemovedContent = {
    feature: Feature;

    metadata: Metadata;

    impacted_item: ImpactedItem;

    impacted_subscription: ImpactedSubscription;
  };
  export type BusinessEntityCreatedContent = {
    business_entity: BusinessEntity;
  };
  export type CouponSetUpdatedContent = {
    coupon: Coupon;

    coupon_set: CouponSet;
  };
  export type DifferentialPriceUpdatedContent = {
    differential_price: DifferentialPrice;
  };
  export type OmnichannelSubscriptionItemPausedContent = {
    omnichannel_subscription: OmnichannelSubscription;

    omnichannel_subscription_item: OmnichannelSubscriptionItem;

    customer: Customer;
  };
  export type EntitlementOverridesRemovedContent = {
    impacted_subscription: ImpactedSubscription;

    metadata: Metadata;
  };
  export type SubscriptionActivatedWithBackdatingContent = {
    subscription: Subscription;

    customer: Customer;

    card: Card;

    invoice: Invoice;

    unbilled_charge: UnbilledCharge;
  };
  export type SubscriptionTrialEndReminderContent = {
    subscription: Subscription;

    customer: Customer;

    card: Card;

    advance_invoice_schedule: AdvanceInvoiceSchedule;
  };
  export type SubscriptionShippingAddressUpdatedContent = {
    subscription: Subscription;

    customer: Customer;

    card: Card;

    advance_invoice_schedule: AdvanceInvoiceSchedule;
  };
  export type VoucherCreateFailedContent = {
    payment_voucher: PaymentVoucher;
  };
  export type GiftClaimedContent = {
    gift: Gift;
  };
  export type CustomerDeletedContent = {
    customer: Customer;

    card: Card;

    subscription: Subscription;
  };
  export type RefundInitiatedContent = {
    transaction: Transaction;

    invoice: Invoice;

    credit_note: CreditNote;

    customer: Customer;

    subscription: Subscription;

    card: Card;
  };
  export type InvoiceGeneratedWithBackdatingContent = {
    invoice: Invoice;
  };
  export type OmnichannelTransactionCreatedContent = {
    omnichannel_transaction: OmnichannelTransaction;
  };
  export type AddUsagesReminderContent = {
    subscription: Subscription;

    customer: Customer;

    usage_reminder_info: UsageReminderInfo;
  };
  export type VoucherCreatedContent = {
    payment_voucher: PaymentVoucher;
  };
  export type RuleUpdatedContent = {
    rule: Rule;
  };
  export type PaymentSchedulesCreatedContent = {
    payment_schedule: PaymentSchedule;
  };
  export type FeatureActivatedContent = {
    feature: Feature;

    metadata: Metadata;

    impacted_item: ImpactedItem;

    impacted_subscription: ImpactedSubscription;
  };
  export type PaymentSourceLocallyDeletedContent = {
    customer: Customer;

    payment_source: PaymentSource;
  };
  export type InvoiceGeneratedContent = {
    invoice: Invoice;
  };
  export type VoucherExpiredContent = {
    payment_voucher: PaymentVoucher;
  };
  export type AuthorizationSucceededContent = {
    transaction: Transaction;
  };
  export type GiftScheduledContent = {
    gift: Gift;
  };
  export type SubscriptionChangesScheduledContent = {
    subscription: Subscription;

    customer: Customer;

    card: Card;

    advance_invoice_schedule: AdvanceInvoiceSchedule;
  };
  export type SubscriptionChangedWithBackdatingContent = {
    subscription: Subscription;

    customer: Customer;

    card: Card;

    invoice: Invoice;

    credit_note: CreditNote;

    unbilled_charge: UnbilledCharge;
  };
  export type OmnichannelSubscriptionItemChangedContent = {
    omnichannel_subscription_item: OmnichannelSubscriptionItem;

    omnichannel_subscription: OmnichannelSubscription;

    omnichannel_transaction: OmnichannelTransaction;

    omnichannel_subscription_item_scheduled_change: OmnichannelSubscriptionItemScheduledChange;

    customer: Customer;
  };
  export type GiftUnclaimedContent = {
    gift: Gift;
  };
  export type VirtualBankAccountAddedContent = {
    customer: Customer;

    virtual_bank_account: VirtualBankAccount;
  };
  export type PaymentIntentCreatedContent = {
    payment_intent: PaymentIntent;
  };
  export type CreditNoteCreatedWithBackdatingContent = {
    credit_note: CreditNote;
  };
  export type ContractTermTerminatedContent = {
    contract_term: ContractTerm;
  };
  export type ItemFamilyUpdatedContent = {
    item_family: ItemFamily;
  };
  export type OrderCreatedContent = {
    order: Order;
  };
  export type PriceVariantDeletedContent = {
    price_variant: PriceVariant;

    attribute: Attribute;
  };
  export type SubscriptionMovementFailedContent = {
    subscription: Subscription;
  };
  export type CustomerMovedInContent = {
    customer: Customer;

    card: Card;
  };
  export type SubscriptionAdvanceInvoiceScheduleUpdatedContent = {
    subscription: Subscription;

    customer: Customer;

    advance_invoice_schedule: AdvanceInvoiceSchedule;
  };
  export type ItemDeletedContent = {
    item: Item;
  };
  export type SubscriptionRampDraftedContent = {
    ramp: Ramp;
  };
  export type DunningUpdatedContent = {
    invoice: Invoice;
  };
  export type ItemEntitlementsUpdatedContent = {
    feature: Feature;

    metadata: Metadata;

    impacted_item: ImpactedItem;

    impacted_subscription: ImpactedSubscription;
  };
  export type TokenConsumedContent = {
    token: Token;
  };
  export type HierarchyDeletedContent = {
    customer: Customer;
  };
  export type SubscriptionCancellationScheduledContent = {
    subscription: Subscription;

    customer: Customer;

    card: Card;

    advance_invoice_schedule: AdvanceInvoiceSchedule;
  };
  export type SubscriptionRenewedContent = {
    subscription: Subscription;

    customer: Customer;

    card: Card;

    invoice: Invoice;

    unbilled_charge: UnbilledCharge;
  };
  export type FeatureUpdatedContent = {
    feature: Feature;

    metadata: Metadata;
  };
  export type FeatureDeletedContent = {
    feature: Feature;

    metadata: Metadata;

    impacted_item: ImpactedItem;

    impacted_subscription: ImpactedSubscription;
  };
  export type ItemFamilyCreatedContent = {
    item_family: ItemFamily;
  };
  export type OmnichannelSubscriptionItemScheduledChangeRemovedContent = {
    omnichannel_subscription_item: OmnichannelSubscriptionItem;

    omnichannel_subscription_item_scheduled_change: OmnichannelSubscriptionItemScheduledChange;

    customer: Customer;
  };
  export type OmnichannelSubscriptionItemResumedContent = {
    omnichannel_subscription: OmnichannelSubscription;

    omnichannel_subscription_item: OmnichannelSubscriptionItem;

    customer: Customer;
  };
  export type PurchaseCreatedContent = {
    purchase: Purchase;
  };
  export type EntitlementOverridesUpdatedContent = {
    impacted_subscription: ImpactedSubscription;

    metadata: Metadata;
  };
  export type ItemFamilyDeletedContent = {
    item_family: ItemFamily;
  };
  export type SubscriptionResumptionScheduledContent = {
    subscription: Subscription;

    customer: Customer;

    card: Card;

    advance_invoice_schedule: AdvanceInvoiceSchedule;
  };
  export type FeatureReactivatedContent = {
    feature: Feature;

    metadata: Metadata;
  };
  export type CouponCodesDeletedContent = {
    coupon: Coupon;

    coupon_set: CouponSet;

    coupon_code: CouponCode;
  };
  export type CardExpiredContent = {
    customer: Customer;

    card: Card;
  };
  export type CreditNoteUpdatedContent = {
    credit_note: CreditNote;
  };
  export type OmnichannelSubscriptionItemDowngradedContent = {
    omnichannel_subscription_item: OmnichannelSubscriptionItem;

    omnichannel_subscription: OmnichannelSubscription;

    omnichannel_transaction: OmnichannelTransaction;

    customer: Customer;
  };
  export type PriceVariantUpdatedContent = {
    price_variant: PriceVariant;

    attribute: Attribute;
  };
  export type PromotionalCreditsDeductedContent = {
    customer: Customer;

    promotional_credit: PromotionalCredit;
  };
  export type SubscriptionRampAppliedContent = {
    ramp: Ramp;
  };
  export type SubscriptionPausedContent = {
    subscription: Subscription;

    customer: Customer;

    card: Card;

    invoice: Invoice;

    credit_note: CreditNote;

    unbilled_charge: UnbilledCharge;
  };
  export type OrderReadyToProcessContent = {
    order: Order;
  };
  export type FeatureCreatedContent = {
    feature: Feature;

    metadata: Metadata;

    impacted_item: ImpactedItem;

    impacted_subscription: ImpactedSubscription;
  };
  export type TransactionDeletedContent = {
    transaction: Transaction;
  };
  export type CreditNoteCreatedContent = {
    credit_note: CreditNote;
  };
  export type OmnichannelSubscriptionItemResubscribedContent = {
    omnichannel_subscription_item: OmnichannelSubscriptionItem;

    omnichannel_subscription: OmnichannelSubscription;

    omnichannel_transaction: OmnichannelTransaction;

    omnichannel_subscription_item_scheduled_change: OmnichannelSubscriptionItemScheduledChange;

    customer: Customer;
  };
  export type RecordPurchaseFailedContent = {
    recorded_purchase: RecordedPurchase;

    customer: Customer;
  };
  export type ItemCreatedContent = {
    item: Item;
  };
  export type TransactionUpdatedContent = {
    transaction: Transaction;
  };
  export type MrrUpdatedContent = {
    subscription: Subscription;
  };
  export type UnbilledChargesInvoicedContent = {
    unbilled_charge: UnbilledCharge;

    invoice: Invoice;
  };
  export type ItemPriceUpdatedContent = {
    item_price: ItemPrice;
  };
  export type CouponCodesUpdatedContent = {
    coupon: Coupon;

    coupon_set: CouponSet;
  };
  export type VirtualBankAccountUpdatedContent = {
    customer: Customer;

    virtual_bank_account: VirtualBankAccount;
  };
  export type ContractTermCreatedContent = {
    contract_term: ContractTerm;
  };
  export type SubscriptionChangedContent = {
    subscription: Subscription;

    customer: Customer;

    card: Card;

    invoice: Invoice;

    credit_note: CreditNote;

    unbilled_charge: UnbilledCharge;
  };
  export type PaymentFailedContent = {
    transaction: Transaction;

    invoice: Invoice;

    customer: Customer;

    subscription: Subscription;

    card: Card;
  };
  export type CreditNoteDeletedContent = {
    credit_note: CreditNote;
  };
  export type TaxWithheldRefundedContent = {
    tax_withheld: TaxWithheld;

    invoice: Invoice;

    credit_note: CreditNote;
  };
  export type ContractTermCompletedContent = {
    contract_term: ContractTerm;
  };
  export type PaymentSchedulesUpdatedContent = {
    payment_schedule: PaymentSchedule;
  };
  export type OmnichannelSubscriptionItemExpiredContent = {
    omnichannel_subscription: OmnichannelSubscription;

    omnichannel_subscription_item: OmnichannelSubscriptionItem;

    customer: Customer;
  };
  export type CardUpdatedContent = {
    customer: Customer;

    card: Card;
  };
  export type CustomerCreatedContent = {
    customer: Customer;

    card: Card;
  };
  export type SubscriptionRenewalReminderContent = {
    subscription: Subscription;

    customer: Customer;

    card: Card;

    advance_invoice_schedule: AdvanceInvoiceSchedule;
  };
  export type OrderDeliveredContent = {
    order: Order;
  };
  export type OmnichannelSubscriptionItemCancellationScheduledContent = {
    omnichannel_subscription: OmnichannelSubscription;

    omnichannel_subscription_item: OmnichannelSubscriptionItem;

    customer: Customer;
  };
  export type OmnichannelSubscriptionItemGracePeriodExpiredContent = {
    omnichannel_subscription: OmnichannelSubscription;

    omnichannel_subscription_item: OmnichannelSubscriptionItem;

    customer: Customer;
  };
  export type CouponCodesAddedContent = {
    coupon: Coupon;

    coupon_set: CouponSet;
  };
  export type GiftCancelledContent = {
    gift: Gift;
  };
  export type OrderCancelledContent = {
    order: Order;
  };
  export type CouponDeletedContent = {
    coupon: Coupon;
  };
  export type SubscriptionScheduledChangesRemovedContent = {
    subscription: Subscription;

    customer: Customer;

    card: Card;

    advance_invoice_schedule: AdvanceInvoiceSchedule;
  };
  export type PendingInvoiceCreatedContent = {
    invoice: Invoice;
  };
  export type EntitlementOverridesAutoRemovedContent = {
    feature: Feature;

    metadata: Metadata;

    impacted_item: ImpactedItem;

    impacted_subscription: ImpactedSubscription;
  };
  export type OmnichannelSubscriptionItemUpgradedContent = {
    omnichannel_subscription_item: OmnichannelSubscriptionItem;

    omnichannel_subscription: OmnichannelSubscription;

    omnichannel_transaction: OmnichannelTransaction;

    omnichannel_subscription_item_scheduled_change: OmnichannelSubscriptionItemScheduledChange;

    customer: Customer;
  };
  export type SubscriptionBusinessEntityChangedContent = {
    business_entity_change: BusinessEntityChange;

    business_entity_transfer: BusinessEntityTransfer;

    subscription: Subscription;
  };
  export type OmnichannelOneTimeOrderCreatedContent = {
    omnichannel_one_time_order: OmnichannelOneTimeOrder;

    omnichannel_one_time_order_item: OmnichannelOneTimeOrderItem;

    omnichannel_transaction: OmnichannelTransaction;

    customer: Customer;
  };
  export type PaymentSourceDeletedContent = {
    customer: Customer;

    payment_source: PaymentSource;
  };
  export type OmnichannelSubscriptionItemCancelledContent = {
    omnichannel_subscription: OmnichannelSubscription;

    omnichannel_subscription_item: OmnichannelSubscriptionItem;

    customer: Customer;
  };
  export type QuoteDeletedContent = {
    quote: Quote;
  };
  export type InvoiceUpdatedContent = {
    invoice: Invoice;
  };
  export type SubscriptionAdvanceInvoiceScheduleRemovedContent = {
    subscription: Subscription;

    customer: Customer;

    advance_invoice_schedule: AdvanceInvoiceSchedule;
  };
  export type CardDeletedContent = {
    customer: Customer;

    card: Card;
  };
  export type OrderReadyToShipContent = {
    order: Order;
  };
  export type SubscriptionMovedOutContent = {
    subscription: Subscription;
  };
  export type PaymentScheduleSchemeCreatedContent = {
    payment_schedule_scheme: PaymentScheduleScheme;
  };
  export type BusinessEntityUpdatedContent = {
    business_entity: BusinessEntity;
  };
  export type SubscriptionScheduledResumptionRemovedContent = {
    subscription: Subscription;

    customer: Customer;

    card: Card;

    advance_invoice_schedule: AdvanceInvoiceSchedule;
  };
  export type PaymentInitiatedContent = {
    transaction: Transaction;

    invoice: Invoice;

    customer: Customer;

    subscription: Subscription;

    card: Card;
  };
  export type FeatureArchivedContent = {
    feature: Feature;

    metadata: Metadata;
  };
  export type SubscriptionReactivatedWithBackdatingContent = {
    subscription: Subscription;

    customer: Customer;

    card: Card;

    invoice: Invoice;

    unbilled_charge: UnbilledCharge;
  };
  export type OmnichannelSubscriptionImportedContent = {
    omnichannel_subscription_item: OmnichannelSubscriptionItem;

    omnichannel_subscription: OmnichannelSubscription;

    omnichannel_transaction: OmnichannelTransaction;

    omnichannel_subscription_item_scheduled_change: OmnichannelSubscriptionItemScheduledChange;

    customer: Customer;
  };
  export type TokenExpiredContent = {
    token: Token;
  };
  export type CardAddedContent = {
    customer: Customer;

    card: Card;
  };
  export type CouponCreatedContent = {
    coupon: Coupon;
  };
  export type RuleDeletedContent = {
    rule: Rule;
  };
  export type ItemPriceEntitlementsUpdatedContent = {
    feature: Feature;

    metadata: Metadata;

    impacted_item_price: ImpactedItemPrice;

    impacted_subscription: ImpactedSubscription;
  };
  export type ItemPriceDeletedContent = {
    item_price: ItemPrice;
  };
  export type VirtualBankAccountDeletedContent = {
    customer: Customer;

    virtual_bank_account: VirtualBankAccount;
  };
  export type PaymentScheduleSchemeDeletedContent = {
    payment_schedule_scheme: PaymentScheduleScheme;
  };
  export type SubscriptionCreatedContent = {
    subscription: Subscription;

    customer: Customer;

    card: Card;

    invoice: Invoice;

    unbilled_charge: UnbilledCharge;
  };
  export type SubscriptionEntitlementsCreatedContent = {
    subscription_entitlements_created_detail: SubscriptionEntitlementsCreatedDetail;
  };
  export type OrderReturnedContent = {
    order: Order;
  };
  export type SubscriptionDeletedContent = {
    subscription: Subscription;

    customer: Customer;

    card: Card;

    advance_invoice_schedule: AdvanceInvoiceSchedule;
  };
  export type PaymentSourceAddedContent = {
    customer: Customer;

    payment_source: PaymentSource;
  };
  export type SubscriptionMovedInContent = {
    subscription: Subscription;
  };
  export type ItemPriceCreatedContent = {
    item_price: ItemPrice;
  };
  export type SubscriptionScheduledCancellationRemovedContent = {
    subscription: Subscription;

    customer: Customer;

    card: Card;

    advance_invoice_schedule: AdvanceInvoiceSchedule;
  };
  export type PaymentRefundedContent = {
    transaction: Transaction;

    invoice: Invoice;

    credit_note: CreditNote;

    customer: Customer;

    subscription: Subscription;

    card: Card;
  };
  export type UsageFileIngestedContent = {
    usage_file: UsageFile;
  };
  export type OmnichannelSubscriptionMovedInContent = {
    omnichannel_subscription: OmnichannelSubscription;

    customer: Customer;
  };
  export type DifferentialPriceCreatedContent = {
    differential_price: DifferentialPrice;
  };
  export type TransactionCreatedContent = {
    transaction: Transaction;
  };
  export type PaymentSucceededContent = {
    transaction: Transaction;

    invoice: Invoice;

    customer: Customer;

    subscription: Subscription;

    card: Card;
  };
  export type SubscriptionCanceledWithBackdatingContent = {
    subscription: Subscription;

    customer: Customer;

    card: Card;

    invoice: Invoice;

    credit_note: CreditNote;

    unbilled_charge: UnbilledCharge;
  };
  export type UnbilledChargesVoidedContent = {
    unbilled_charge: UnbilledCharge;
  };
  export type QuoteCreatedContent = {
    quote: Quote;
  };
  export type CouponSetDeletedContent = {
    coupon: Coupon;

    coupon_set: CouponSet;
  };
  export type AttachedItemCreatedContent = {
    attached_item: AttachedItem;
  };
  export type SalesOrderCreatedContent = {
    sales_order: SalesOrder;
  };
  export type CustomerChangedContent = {
    customer: Customer;

    card: Card;
  };
  export type SubscriptionStartedContent = {
    subscription: Subscription;

    customer: Customer;

    card: Card;

    invoice: Invoice;
  };
  export type SubscriptionActivatedContent = {
    subscription: Subscription;

    customer: Customer;

    card: Card;

    invoice: Invoice;
  };
  export type PaymentSourceExpiringContent = {
    customer: Customer;

    payment_source: PaymentSource;
  };
  export type SubscriptionReactivatedContent = {
    subscription: Subscription;

    customer: Customer;

    card: Card;

    invoice: Invoice;

    unbilled_charge: UnbilledCharge;
  };
  export type OrderUpdatedContent = {
    order: Order;
  };
  export type SubscriptionScheduledPauseRemovedContent = {
    subscription: Subscription;

    customer: Customer;

    card: Card;

    advance_invoice_schedule: AdvanceInvoiceSchedule;
  };
  export type SubscriptionCancellationReminderContent = {
    subscription: Subscription;

    customer: Customer;

    card: Card;

    advance_invoice_schedule: AdvanceInvoiceSchedule;
  };
  export type SubscriptionCreatedWithBackdatingContent = {
    subscription: Subscription;

    customer: Customer;

    card: Card;

    invoice: Invoice;

    unbilled_charge: UnbilledCharge;
  };
  export type SubscriptionRampCreatedContent = {
    ramp: Ramp;
  };
  export type OrderDeletedContent = {
    order: Order;
  };
  export type OmnichannelSubscriptionItemPauseScheduledContent = {
    omnichannel_subscription_item: OmnichannelSubscriptionItem;

    omnichannel_subscription_item_scheduled_change: OmnichannelSubscriptionItemScheduledChange;

    customer: Customer;
  };
  export type GiftUpdatedContent = {
    gift: Gift;
  };
  export type SubscriptionTrialExtendedContent = {
    subscription: Subscription;

    customer: Customer;

    card: Card;

    advance_invoice_schedule: AdvanceInvoiceSchedule;
  };
  export type OmnichannelSubscriptionItemGracePeriodStartedContent = {
    omnichannel_subscription: OmnichannelSubscription;

    omnichannel_subscription_item: OmnichannelSubscriptionItem;

    customer: Customer;
  };
  export type CardExpiryReminderContent = {
    customer: Customer;

    card: Card;
  };
  export type TokenCreatedContent = {
    token: Token;
  };
  export type PromotionalCreditsAddedContent = {
    customer: Customer;

    promotional_credit: PromotionalCredit;
  };
  export type SubscriptionRampUpdatedContent = {
    ramp: Ramp;
  };
  export type CustomerEntitlementsUpdatedContent = {
    impacted_customer: ImpactedCustomer;
  };
  export type PaymentSourceExpiredContent = {
    customer: Customer;

    payment_source: PaymentSource;
  };
  export type CustomerMovedOutContent = {
    customer: Customer;

    card: Card;
  };
  export type SubscriptionEntitlementsUpdatedContent = {
    subscription_entitlements_updated_detail: SubscriptionEntitlementsUpdatedDetail;
  };
  export type OmnichannelSubscriptionItemDunningExpiredContent = {
    omnichannel_subscription: OmnichannelSubscription;

    omnichannel_subscription_item: OmnichannelSubscriptionItem;

    customer: Customer;
  };
  export type HierarchyCreatedContent = {
    customer: Customer;
  };
  export type AttachedItemDeletedContent = {
    attached_item: AttachedItem;
  };
  export type OmnichannelSubscriptionItemScheduledCancellationRemovedContent = {
    omnichannel_subscription: OmnichannelSubscription;

    omnichannel_subscription_item: OmnichannelSubscriptionItem;

    customer: Customer;
  };
  export type ItemUpdatedContent = {
    item: Item;
  };
  export type CouponSetCreatedContent = {
    coupon: Coupon;

    coupon_set: CouponSet;
  };
  export type PaymentIntentUpdatedContent = {
    payment_intent: PaymentIntent;
  };
  export type OrderResentContent = {
    order: Order;
  };
  export type OmnichannelSubscriptionCreatedContent = {
    omnichannel_subscription_item: OmnichannelSubscriptionItem;

    omnichannel_subscription: OmnichannelSubscription;

    omnichannel_transaction: OmnichannelTransaction;

    omnichannel_subscription_item_scheduled_change: OmnichannelSubscriptionItemScheduledChange;

    customer: Customer;
  };
  export type TaxWithheldRecordedContent = {
    tax_withheld: TaxWithheld;

    invoice: Invoice;

    credit_note: CreditNote;
  };
  export type PriceVariantCreatedContent = {
    price_variant: PriceVariant;

    attribute: Attribute;
  };
  export type DifferentialPriceDeletedContent = {
    differential_price: DifferentialPrice;
  };
  export type SubscriptionItemsRenewedContent = {
    subscription: Subscription;

    customer: Customer;

    card: Card;

    invoice: Invoice;

    credit_note: CreditNote;

    unbilled_charge: UnbilledCharge;
  };
  export type RuleCreatedContent = {
    rule: Rule;
  };
  export type ContractTermCancelledContent = {
    contract_term: ContractTerm;
  };
  export type ContractTermRenewedContent = {
    contract_term: ContractTerm;
  };
  export type InvoiceDeletedContent = {
    invoice: Invoice;
  };
  export type ItemPriceEntitlementsRemovedContent = {
    feature: Feature;

    metadata: Metadata;

    impacted_item_price: ImpactedItemPrice;

    impacted_subscription: ImpactedSubscription;
  };
  export type SalesOrderUpdatedContent = {
    sales_order: SalesOrder;
  };
  export type OmnichannelSubscriptionItemDunningStartedContent = {
    omnichannel_subscription: OmnichannelSubscription;

    omnichannel_subscription_item: OmnichannelSubscriptionItem;

    customer: Customer;
  };
  export type OmnichannelSubscriptionItemChangeScheduledContent = {
    omnichannel_subscription_item: OmnichannelSubscriptionItem;

    omnichannel_subscription_item_scheduled_change: OmnichannelSubscriptionItemScheduledChange;

    customer: Customer;
  };
  export type PendingInvoiceUpdatedContent = {
    invoice: Invoice;
  };
  export type QuoteUpdatedContent = {
    quote: Quote;
  };
  export type AttachedItemUpdatedContent = {
    attached_item: AttachedItem;
  };
  export type PaymentSourceUpdatedContent = {
    customer: Customer;

    payment_source: PaymentSource;
  };
  export type BusinessEntityDeletedContent = {
    business_entity: BusinessEntity;
  };
  export type AuthorizationVoidedContent = {
    transaction: Transaction;
  };
  export type SubscriptionRampDeletedContent = {
    ramp: Ramp;
  };
}
