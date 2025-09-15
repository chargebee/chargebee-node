///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>

declare module 'chargebee' {
  export enum WebhookContentTypeEnum {
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
    [WebhookContentTypeEnum.SubscriptionPauseScheduled]: SubscriptionPauseScheduledContent;
    [WebhookContentTypeEnum.CustomerBusinessEntityChanged]: CustomerBusinessEntityChangedContent;
    [WebhookContentTypeEnum.SubscriptionAdvanceInvoiceScheduleAdded]: SubscriptionAdvanceInvoiceScheduleAddedContent;
    [WebhookContentTypeEnum.GiftExpired]: GiftExpiredContent;
    [WebhookContentTypeEnum.TaxWithheldDeleted]: TaxWithheldDeletedContent;
    [WebhookContentTypeEnum.UnbilledChargesDeleted]: UnbilledChargesDeletedContent;
    [WebhookContentTypeEnum.CouponUpdated]: CouponUpdatedContent;
    [WebhookContentTypeEnum.OmnichannelSubscriptionItemReactivated]: OmnichannelSubscriptionItemReactivatedContent;
    [WebhookContentTypeEnum.OmnichannelSubscriptionItemRenewed]: OmnichannelSubscriptionItemRenewedContent;
    [WebhookContentTypeEnum.UnbilledChargesCreated]: UnbilledChargesCreatedContent;
    [WebhookContentTypeEnum.SubscriptionResumed]: SubscriptionResumedContent;
    [WebhookContentTypeEnum.OmnichannelOneTimeOrderItemCancelled]: OmnichannelOneTimeOrderItemCancelledContent;
    [WebhookContentTypeEnum.SubscriptionCancelled]: SubscriptionCancelledContent;
    [WebhookContentTypeEnum.ItemEntitlementsRemoved]: ItemEntitlementsRemovedContent;
    [WebhookContentTypeEnum.BusinessEntityCreated]: BusinessEntityCreatedContent;
    [WebhookContentTypeEnum.CouponSetUpdated]: CouponSetUpdatedContent;
    [WebhookContentTypeEnum.DifferentialPriceUpdated]: DifferentialPriceUpdatedContent;
    [WebhookContentTypeEnum.OmnichannelSubscriptionItemPaused]: OmnichannelSubscriptionItemPausedContent;
    [WebhookContentTypeEnum.EntitlementOverridesRemoved]: EntitlementOverridesRemovedContent;
    [WebhookContentTypeEnum.SubscriptionActivatedWithBackdating]: SubscriptionActivatedWithBackdatingContent;
    [WebhookContentTypeEnum.SubscriptionTrialEndReminder]: SubscriptionTrialEndReminderContent;
    [WebhookContentTypeEnum.SubscriptionShippingAddressUpdated]: SubscriptionShippingAddressUpdatedContent;
    [WebhookContentTypeEnum.VoucherCreateFailed]: VoucherCreateFailedContent;
    [WebhookContentTypeEnum.GiftClaimed]: GiftClaimedContent;
    [WebhookContentTypeEnum.CustomerDeleted]: CustomerDeletedContent;
    [WebhookContentTypeEnum.RefundInitiated]: RefundInitiatedContent;
    [WebhookContentTypeEnum.InvoiceGeneratedWithBackdating]: InvoiceGeneratedWithBackdatingContent;
    [WebhookContentTypeEnum.AddUsagesReminder]: AddUsagesReminderContent;
    [WebhookContentTypeEnum.VoucherCreated]: VoucherCreatedContent;
    [WebhookContentTypeEnum.RuleUpdated]: RuleUpdatedContent;
    [WebhookContentTypeEnum.PaymentSchedulesCreated]: PaymentSchedulesCreatedContent;
    [WebhookContentTypeEnum.FeatureActivated]: FeatureActivatedContent;
    [WebhookContentTypeEnum.PaymentSourceLocallyDeleted]: PaymentSourceLocallyDeletedContent;
    [WebhookContentTypeEnum.InvoiceGenerated]: InvoiceGeneratedContent;
    [WebhookContentTypeEnum.VoucherExpired]: VoucherExpiredContent;
    [WebhookContentTypeEnum.AuthorizationSucceeded]: AuthorizationSucceededContent;
    [WebhookContentTypeEnum.GiftScheduled]: GiftScheduledContent;
    [WebhookContentTypeEnum.SubscriptionChangesScheduled]: SubscriptionChangesScheduledContent;
    [WebhookContentTypeEnum.SubscriptionChangedWithBackdating]: SubscriptionChangedWithBackdatingContent;
    [WebhookContentTypeEnum.OmnichannelSubscriptionItemChanged]: OmnichannelSubscriptionItemChangedContent;
    [WebhookContentTypeEnum.GiftUnclaimed]: GiftUnclaimedContent;
    [WebhookContentTypeEnum.VirtualBankAccountAdded]: VirtualBankAccountAddedContent;
    [WebhookContentTypeEnum.PaymentIntentCreated]: PaymentIntentCreatedContent;
    [WebhookContentTypeEnum.CreditNoteCreatedWithBackdating]: CreditNoteCreatedWithBackdatingContent;
    [WebhookContentTypeEnum.ContractTermTerminated]: ContractTermTerminatedContent;
    [WebhookContentTypeEnum.ItemFamilyUpdated]: ItemFamilyUpdatedContent;
    [WebhookContentTypeEnum.OrderCreated]: OrderCreatedContent;
    [WebhookContentTypeEnum.PriceVariantDeleted]: PriceVariantDeletedContent;
    [WebhookContentTypeEnum.SubscriptionMovementFailed]: SubscriptionMovementFailedContent;
    [WebhookContentTypeEnum.CustomerMovedIn]: CustomerMovedInContent;
    [WebhookContentTypeEnum.SubscriptionAdvanceInvoiceScheduleUpdated]: SubscriptionAdvanceInvoiceScheduleUpdatedContent;
    [WebhookContentTypeEnum.ItemDeleted]: ItemDeletedContent;
    [WebhookContentTypeEnum.SubscriptionRampDrafted]: SubscriptionRampDraftedContent;
    [WebhookContentTypeEnum.ItemEntitlementsUpdated]: ItemEntitlementsUpdatedContent;
    [WebhookContentTypeEnum.TokenConsumed]: TokenConsumedContent;
    [WebhookContentTypeEnum.HierarchyDeleted]: HierarchyDeletedContent;
    [WebhookContentTypeEnum.SubscriptionCancellationScheduled]: SubscriptionCancellationScheduledContent;
    [WebhookContentTypeEnum.SubscriptionRenewed]: SubscriptionRenewedContent;
    [WebhookContentTypeEnum.FeatureUpdated]: FeatureUpdatedContent;
    [WebhookContentTypeEnum.FeatureDeleted]: FeatureDeletedContent;
    [WebhookContentTypeEnum.ItemFamilyCreated]: ItemFamilyCreatedContent;
    [WebhookContentTypeEnum.OmnichannelSubscriptionItemScheduledChangeRemoved]: OmnichannelSubscriptionItemScheduledChangeRemovedContent;
    [WebhookContentTypeEnum.OmnichannelSubscriptionItemResumed]: OmnichannelSubscriptionItemResumedContent;
    [WebhookContentTypeEnum.PurchaseCreated]: PurchaseCreatedContent;
    [WebhookContentTypeEnum.EntitlementOverridesUpdated]: EntitlementOverridesUpdatedContent;
    [WebhookContentTypeEnum.ItemFamilyDeleted]: ItemFamilyDeletedContent;
    [WebhookContentTypeEnum.SubscriptionResumptionScheduled]: SubscriptionResumptionScheduledContent;
    [WebhookContentTypeEnum.FeatureReactivated]: FeatureReactivatedContent;
    [WebhookContentTypeEnum.CouponCodesDeleted]: CouponCodesDeletedContent;
    [WebhookContentTypeEnum.CardExpired]: CardExpiredContent;
    [WebhookContentTypeEnum.CreditNoteUpdated]: CreditNoteUpdatedContent;
    [WebhookContentTypeEnum.OmnichannelSubscriptionItemDowngraded]: OmnichannelSubscriptionItemDowngradedContent;
    [WebhookContentTypeEnum.PriceVariantUpdated]: PriceVariantUpdatedContent;
    [WebhookContentTypeEnum.PromotionalCreditsDeducted]: PromotionalCreditsDeductedContent;
    [WebhookContentTypeEnum.SubscriptionRampApplied]: SubscriptionRampAppliedContent;
    [WebhookContentTypeEnum.SubscriptionPaused]: SubscriptionPausedContent;
    [WebhookContentTypeEnum.OrderReadyToProcess]: OrderReadyToProcessContent;
    [WebhookContentTypeEnum.FeatureCreated]: FeatureCreatedContent;
    [WebhookContentTypeEnum.TransactionDeleted]: TransactionDeletedContent;
    [WebhookContentTypeEnum.CreditNoteCreated]: CreditNoteCreatedContent;
    [WebhookContentTypeEnum.OmnichannelSubscriptionItemResubscribed]: OmnichannelSubscriptionItemResubscribedContent;
    [WebhookContentTypeEnum.RecordPurchaseFailed]: RecordPurchaseFailedContent;
    [WebhookContentTypeEnum.ItemCreated]: ItemCreatedContent;
    [WebhookContentTypeEnum.TransactionUpdated]: TransactionUpdatedContent;
    [WebhookContentTypeEnum.MrrUpdated]: MrrUpdatedContent;
    [WebhookContentTypeEnum.UnbilledChargesInvoiced]: UnbilledChargesInvoicedContent;
    [WebhookContentTypeEnum.ItemPriceUpdated]: ItemPriceUpdatedContent;
    [WebhookContentTypeEnum.CouponCodesUpdated]: CouponCodesUpdatedContent;
    [WebhookContentTypeEnum.VirtualBankAccountUpdated]: VirtualBankAccountUpdatedContent;
    [WebhookContentTypeEnum.ContractTermCreated]: ContractTermCreatedContent;
    [WebhookContentTypeEnum.SubscriptionChanged]: SubscriptionChangedContent;
    [WebhookContentTypeEnum.PaymentFailed]: PaymentFailedContent;
    [WebhookContentTypeEnum.CreditNoteDeleted]: CreditNoteDeletedContent;
    [WebhookContentTypeEnum.TaxWithheldRefunded]: TaxWithheldRefundedContent;
    [WebhookContentTypeEnum.ContractTermCompleted]: ContractTermCompletedContent;
    [WebhookContentTypeEnum.PaymentSchedulesUpdated]: PaymentSchedulesUpdatedContent;
    [WebhookContentTypeEnum.OmnichannelSubscriptionItemExpired]: OmnichannelSubscriptionItemExpiredContent;
    [WebhookContentTypeEnum.CardUpdated]: CardUpdatedContent;
    [WebhookContentTypeEnum.CustomerCreated]: CustomerCreatedContent;
    [WebhookContentTypeEnum.SubscriptionRenewalReminder]: SubscriptionRenewalReminderContent;
    [WebhookContentTypeEnum.OrderDelivered]: OrderDeliveredContent;
    [WebhookContentTypeEnum.OmnichannelSubscriptionItemCancellationScheduled]: OmnichannelSubscriptionItemCancellationScheduledContent;
    [WebhookContentTypeEnum.OmnichannelSubscriptionItemGracePeriodExpired]: OmnichannelSubscriptionItemGracePeriodExpiredContent;
    [WebhookContentTypeEnum.CouponCodesAdded]: CouponCodesAddedContent;
    [WebhookContentTypeEnum.GiftCancelled]: GiftCancelledContent;
    [WebhookContentTypeEnum.OrderCancelled]: OrderCancelledContent;
    [WebhookContentTypeEnum.CouponDeleted]: CouponDeletedContent;
    [WebhookContentTypeEnum.SubscriptionScheduledChangesRemoved]: SubscriptionScheduledChangesRemovedContent;
    [WebhookContentTypeEnum.PendingInvoiceCreated]: PendingInvoiceCreatedContent;
    [WebhookContentTypeEnum.EntitlementOverridesAutoRemoved]: EntitlementOverridesAutoRemovedContent;
    [WebhookContentTypeEnum.OmnichannelSubscriptionItemUpgraded]: OmnichannelSubscriptionItemUpgradedContent;
    [WebhookContentTypeEnum.SubscriptionBusinessEntityChanged]: SubscriptionBusinessEntityChangedContent;
    [WebhookContentTypeEnum.OmnichannelOneTimeOrderCreated]: OmnichannelOneTimeOrderCreatedContent;
    [WebhookContentTypeEnum.PaymentSourceDeleted]: PaymentSourceDeletedContent;
    [WebhookContentTypeEnum.OmnichannelSubscriptionItemCancelled]: OmnichannelSubscriptionItemCancelledContent;
    [WebhookContentTypeEnum.QuoteDeleted]: QuoteDeletedContent;
    [WebhookContentTypeEnum.InvoiceUpdated]: InvoiceUpdatedContent;
    [WebhookContentTypeEnum.SubscriptionAdvanceInvoiceScheduleRemoved]: SubscriptionAdvanceInvoiceScheduleRemovedContent;
    [WebhookContentTypeEnum.CardDeleted]: CardDeletedContent;
    [WebhookContentTypeEnum.OrderReadyToShip]: OrderReadyToShipContent;
    [WebhookContentTypeEnum.SubscriptionMovedOut]: SubscriptionMovedOutContent;
    [WebhookContentTypeEnum.PaymentScheduleSchemeCreated]: PaymentScheduleSchemeCreatedContent;
    [WebhookContentTypeEnum.BusinessEntityUpdated]: BusinessEntityUpdatedContent;
    [WebhookContentTypeEnum.SubscriptionScheduledResumptionRemoved]: SubscriptionScheduledResumptionRemovedContent;
    [WebhookContentTypeEnum.PaymentInitiated]: PaymentInitiatedContent;
    [WebhookContentTypeEnum.FeatureArchived]: FeatureArchivedContent;
    [WebhookContentTypeEnum.SubscriptionReactivatedWithBackdating]: SubscriptionReactivatedWithBackdatingContent;
    [WebhookContentTypeEnum.OmnichannelSubscriptionImported]: OmnichannelSubscriptionImportedContent;
    [WebhookContentTypeEnum.TokenExpired]: TokenExpiredContent;
    [WebhookContentTypeEnum.CardAdded]: CardAddedContent;
    [WebhookContentTypeEnum.CouponCreated]: CouponCreatedContent;
    [WebhookContentTypeEnum.RuleDeleted]: RuleDeletedContent;
    [WebhookContentTypeEnum.ItemPriceEntitlementsUpdated]: ItemPriceEntitlementsUpdatedContent;
    [WebhookContentTypeEnum.ItemPriceDeleted]: ItemPriceDeletedContent;
    [WebhookContentTypeEnum.VirtualBankAccountDeleted]: VirtualBankAccountDeletedContent;
    [WebhookContentTypeEnum.PaymentScheduleSchemeDeleted]: PaymentScheduleSchemeDeletedContent;
    [WebhookContentTypeEnum.SubscriptionCreated]: SubscriptionCreatedContent;
    [WebhookContentTypeEnum.SubscriptionEntitlementsCreated]: SubscriptionEntitlementsCreatedContent;
    [WebhookContentTypeEnum.OrderReturned]: OrderReturnedContent;
    [WebhookContentTypeEnum.SubscriptionDeleted]: SubscriptionDeletedContent;
    [WebhookContentTypeEnum.PaymentSourceAdded]: PaymentSourceAddedContent;
    [WebhookContentTypeEnum.SubscriptionMovedIn]: SubscriptionMovedInContent;
    [WebhookContentTypeEnum.ItemPriceCreated]: ItemPriceCreatedContent;
    [WebhookContentTypeEnum.SubscriptionScheduledCancellationRemoved]: SubscriptionScheduledCancellationRemovedContent;
    [WebhookContentTypeEnum.PaymentRefunded]: PaymentRefundedContent;
    [WebhookContentTypeEnum.UsageFileIngested]: UsageFileIngestedContent;
    [WebhookContentTypeEnum.DifferentialPriceCreated]: DifferentialPriceCreatedContent;
    [WebhookContentTypeEnum.TransactionCreated]: TransactionCreatedContent;
    [WebhookContentTypeEnum.PaymentSucceeded]: PaymentSucceededContent;
    [WebhookContentTypeEnum.SubscriptionCanceledWithBackdating]: SubscriptionCanceledWithBackdatingContent;
    [WebhookContentTypeEnum.UnbilledChargesVoided]: UnbilledChargesVoidedContent;
    [WebhookContentTypeEnum.QuoteCreated]: QuoteCreatedContent;
    [WebhookContentTypeEnum.CouponSetDeleted]: CouponSetDeletedContent;
    [WebhookContentTypeEnum.AttachedItemCreated]: AttachedItemCreatedContent;
    [WebhookContentTypeEnum.SalesOrderCreated]: SalesOrderCreatedContent;
    [WebhookContentTypeEnum.CustomerChanged]: CustomerChangedContent;
    [WebhookContentTypeEnum.SubscriptionStarted]: SubscriptionStartedContent;
    [WebhookContentTypeEnum.SubscriptionActivated]: SubscriptionActivatedContent;
    [WebhookContentTypeEnum.PaymentSourceExpiring]: PaymentSourceExpiringContent;
    [WebhookContentTypeEnum.SubscriptionReactivated]: SubscriptionReactivatedContent;
    [WebhookContentTypeEnum.OrderUpdated]: OrderUpdatedContent;
    [WebhookContentTypeEnum.SubscriptionScheduledPauseRemoved]: SubscriptionScheduledPauseRemovedContent;
    [WebhookContentTypeEnum.SubscriptionCancellationReminder]: SubscriptionCancellationReminderContent;
    [WebhookContentTypeEnum.SubscriptionCreatedWithBackdating]: SubscriptionCreatedWithBackdatingContent;
    [WebhookContentTypeEnum.SubscriptionRampCreated]: SubscriptionRampCreatedContent;
    [WebhookContentTypeEnum.OrderDeleted]: OrderDeletedContent;
    [WebhookContentTypeEnum.OmnichannelSubscriptionItemPauseScheduled]: OmnichannelSubscriptionItemPauseScheduledContent;
    [WebhookContentTypeEnum.GiftUpdated]: GiftUpdatedContent;
    [WebhookContentTypeEnum.SubscriptionTrialExtended]: SubscriptionTrialExtendedContent;
    [WebhookContentTypeEnum.OmnichannelSubscriptionItemGracePeriodStarted]: OmnichannelSubscriptionItemGracePeriodStartedContent;
    [WebhookContentTypeEnum.CardExpiryReminder]: CardExpiryReminderContent;
    [WebhookContentTypeEnum.TokenCreated]: TokenCreatedContent;
    [WebhookContentTypeEnum.PromotionalCreditsAdded]: PromotionalCreditsAddedContent;
    [WebhookContentTypeEnum.SubscriptionRampUpdated]: SubscriptionRampUpdatedContent;
    [WebhookContentTypeEnum.CustomerEntitlementsUpdated]: CustomerEntitlementsUpdatedContent;
    [WebhookContentTypeEnum.PaymentSourceExpired]: PaymentSourceExpiredContent;
    [WebhookContentTypeEnum.CustomerMovedOut]: CustomerMovedOutContent;
    [WebhookContentTypeEnum.SubscriptionEntitlementsUpdated]: SubscriptionEntitlementsUpdatedContent;
    [WebhookContentTypeEnum.OmnichannelSubscriptionItemDunningExpired]: OmnichannelSubscriptionItemDunningExpiredContent;
    [WebhookContentTypeEnum.HierarchyCreated]: HierarchyCreatedContent;
    [WebhookContentTypeEnum.AttachedItemDeleted]: AttachedItemDeletedContent;
    [WebhookContentTypeEnum.OmnichannelSubscriptionItemScheduledCancellationRemoved]: OmnichannelSubscriptionItemScheduledCancellationRemovedContent;
    [WebhookContentTypeEnum.ItemUpdated]: ItemUpdatedContent;
    [WebhookContentTypeEnum.CouponSetCreated]: CouponSetCreatedContent;
    [WebhookContentTypeEnum.PaymentIntentUpdated]: PaymentIntentUpdatedContent;
    [WebhookContentTypeEnum.OrderResent]: OrderResentContent;
    [WebhookContentTypeEnum.OmnichannelSubscriptionCreated]: OmnichannelSubscriptionCreatedContent;
    [WebhookContentTypeEnum.TaxWithheldRecorded]: TaxWithheldRecordedContent;
    [WebhookContentTypeEnum.PriceVariantCreated]: PriceVariantCreatedContent;
    [WebhookContentTypeEnum.DifferentialPriceDeleted]: DifferentialPriceDeletedContent;
    [WebhookContentTypeEnum.SubscriptionItemsRenewed]: SubscriptionItemsRenewedContent;
    [WebhookContentTypeEnum.RuleCreated]: RuleCreatedContent;
    [WebhookContentTypeEnum.ContractTermCancelled]: ContractTermCancelledContent;
    [WebhookContentTypeEnum.ContractTermRenewed]: ContractTermRenewedContent;
    [WebhookContentTypeEnum.InvoiceDeleted]: InvoiceDeletedContent;
    [WebhookContentTypeEnum.ItemPriceEntitlementsRemoved]: ItemPriceEntitlementsRemovedContent;
    [WebhookContentTypeEnum.SalesOrderUpdated]: SalesOrderUpdatedContent;
    [WebhookContentTypeEnum.OmnichannelSubscriptionItemDunningStarted]: OmnichannelSubscriptionItemDunningStartedContent;
    [WebhookContentTypeEnum.OmnichannelSubscriptionItemChangeScheduled]: OmnichannelSubscriptionItemChangeScheduledContent;
    [WebhookContentTypeEnum.PendingInvoiceUpdated]: PendingInvoiceUpdatedContent;
    [WebhookContentTypeEnum.QuoteUpdated]: QuoteUpdatedContent;
    [WebhookContentTypeEnum.AttachedItemUpdated]: AttachedItemUpdatedContent;
    [WebhookContentTypeEnum.PaymentSourceUpdated]: PaymentSourceUpdatedContent;
    [WebhookContentTypeEnum.BusinessEntityDeleted]: BusinessEntityDeletedContent;
    [WebhookContentTypeEnum.AuthorizationVoided]: AuthorizationVoidedContent;
    [WebhookContentTypeEnum.SubscriptionRampDeleted]: SubscriptionRampDeletedContent;
  };

  export type ContentFor<T extends WebhookContentTypeEnum> =
    WebhookContentMap[T];

  export interface WebhookContent<
    T extends WebhookContentTypeEnum = WebhookContentTypeEnum,
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
