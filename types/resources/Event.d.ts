///<reference path='./../core.d.ts'/>
///<reference path='./../index.d.ts'/>
///<reference path='./filter.d.ts'/>
declare module 'chargebee' {
  export interface Event {
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
      | 'disabled'
      | 'rate_limited';
    webhook_failure_reason?: string;
    webhooks?: Event.Webhook[];
    event_type?: EventTypeEnum;
    site_id?: string;
    api_version?: ApiVersionEnum;
    content: SubscriptionPauseScheduledContent &
      CustomerBusinessEntityChangedContent &
      SubscriptionAdvanceInvoiceScheduleAddedContent &
      GiftExpiredContent &
      TaxWithheldDeletedContent &
      UnbilledChargesDeletedContent &
      CouponUpdatedContent &
      GrantBlocksCreatedContent &
      ChargebackLostContent &
      PriceRampUpdatedContent &
      OmnichannelSubscriptionItemReactivatedContent &
      OmnichannelSubscriptionItemRenewedContent &
      UnbilledChargesCreatedContent &
      SubscriptionResumedContent &
      OmnichannelOneTimeOrderItemCancelledContent &
      SubscriptionCancelledContent &
      BusinessRuleDeletedContent &
      ItemEntitlementsRemovedContent &
      BusinessEntityCreatedContent &
      CouponSetUpdatedContent &
      DifferentialPriceUpdatedContent &
      OmnichannelSubscriptionItemPausedContent &
      EntitlementOverridesRemovedContent &
      SubscriptionActivatedWithBackdatingContent &
      SubscriptionTrialEndReminderContent &
      SubscriptionShippingAddressUpdatedContent &
      VoucherCreateFailedContent &
      GiftClaimedContent &
      CustomerDeletedContent &
      RefundInitiatedContent &
      InvoiceGeneratedWithBackdatingContent &
      OmnichannelTransactionCreatedContent &
      AddUsagesReminderContent &
      VoucherCreatedContent &
      RuleUpdatedContent &
      PaymentSchedulesCreatedContent &
      FeatureActivatedContent &
      PaymentSourceLocallyDeletedContent &
      InvoiceGeneratedContent &
      VoucherExpiredContent &
      AuthorizationSucceededContent &
      GiftScheduledContent &
      SubscriptionChangesScheduledContent &
      SubscriptionChangedWithBackdatingContent &
      OmnichannelSubscriptionItemChangedContent &
      GiftUnclaimedContent &
      VirtualBankAccountAddedContent &
      PaymentIntentCreatedContent &
      OmnichannelSubscriptionItemUpdatedContent &
      CreditNoteCreatedWithBackdatingContent &
      ContractTermTerminatedContent &
      ItemFamilyUpdatedContent &
      OrderCreatedContent &
      RefundFailedContent &
      PriceVariantDeletedContent &
      AlertStatusChangedContent &
      SubscriptionMovementFailedContent &
      BusinessRulesetUpdatedContent &
      CustomerMovedInContent &
      SubscriptionAdvanceInvoiceScheduleUpdatedContent &
      ItemDeletedContent &
      SubscriptionRampDraftedContent &
      ChargebackInitiatedContent &
      BusinessRuleCreatedContent &
      VaultTokenUpdatedContent &
      DunningUpdatedContent &
      EinvoiceCreatedContent &
      OmnichannelSubscriptionItemRecoveredContent &
      ItemEntitlementsUpdatedContent &
      TokenConsumedContent &
      HierarchyDeletedContent &
      VaultTokenDeletedContent &
      SubscriptionCancellationScheduledContent &
      SubscriptionRenewedContent &
      FeatureUpdatedContent &
      CollectionsPaymentPromiseFulfilledContent &
      FeatureDeletedContent &
      ItemFamilyCreatedContent &
      OmnichannelSubscriptionItemScheduledChangeRemovedContent &
      OmnichannelSubscriptionItemResumedContent &
      CollectionsDisputeResolvedContent &
      PurchaseCreatedContent &
      EntitlementOverridesUpdatedContent &
      ItemFamilyDeletedContent &
      SubscriptionResumptionScheduledContent &
      FeatureReactivatedContent &
      CouponCodesDeletedContent &
      CardExpiredContent &
      CreditNoteUpdatedContent &
      OmnichannelSubscriptionItemDowngradedContent &
      BusinessRulesetDeactivatedContent &
      PriceVariantUpdatedContent &
      CollectionsDisputeUpdatedContent &
      PromotionalCreditsDeductedContent &
      SubscriptionRampAppliedContent &
      BusinessRulesetDeletedContent &
      SubscriptionPausedContent &
      OrderReadyToProcessContent &
      FeatureCreatedContent &
      TransactionDeletedContent &
      CreditNoteCreatedContent &
      OmnichannelSubscriptionItemResubscribedContent &
      RecordPurchaseFailedContent &
      ItemCreatedContent &
      BusinessRulesetCreatedContent &
      TransactionUpdatedContent &
      CollectionsPaymentPromiseUpdatedContent &
      MrrUpdatedContent &
      UnbilledChargesInvoicedContent &
      ChargebackWonContent &
      ItemPriceUpdatedContent &
      CouponCodesUpdatedContent &
      VirtualBankAccountUpdatedContent &
      ContractTermCreatedContent &
      SubscriptionChangedContent &
      PaymentFailedContent &
      CreditNoteDeletedContent &
      TaxWithheldRefundedContent &
      ContractTermCompletedContent &
      PaymentSchedulesUpdatedContent &
      OmnichannelSubscriptionItemExpiredContent &
      CardUpdatedContent &
      PriceRampCreatedContent &
      CollectionsReminderSequenceCreatedContent &
      CustomerCreatedContent &
      SubscriptionRenewalReminderContent &
      OmnichannelSubscriptionItemMrrUpdatedContent &
      PaymentDueReminderContent &
      OrderDeliveredContent &
      OmnichannelSubscriptionItemCancellationScheduledContent &
      OmnichannelSubscriptionItemGracePeriodExpiredContent &
      CouponCodesAddedContent &
      EmailMessageReceivedContent &
      GiftCancelledContent &
      OrderCancelledContent &
      CouponDeletedContent &
      SubscriptionScheduledChangesRemovedContent &
      PendingInvoiceCreatedContent &
      CollectionsPaymentPromiseBrokenContent &
      EntitlementOverridesAutoRemovedContent &
      PriceRampDeletedContent &
      BusinessRulesetActivatedContent &
      OmnichannelSubscriptionItemUpgradedContent &
      SubscriptionBusinessEntityChangedContent &
      OmnichannelOneTimeOrderCreatedContent &
      CollectionsPaymentPromiseCreatedContent &
      PaymentSourceDeletedContent &
      OmnichannelSubscriptionItemCancelledContent &
      QuoteDeletedContent &
      InvoiceUpdatedContent &
      PrivateNoteAddedContent &
      SubscriptionAdvanceInvoiceScheduleRemovedContent &
      CardDeletedContent &
      OrderReadyToShipContent &
      SubscriptionMovedOutContent &
      PaymentScheduleSchemeCreatedContent &
      BusinessEntityUpdatedContent &
      SubscriptionScheduledResumptionRemovedContent &
      PaymentInitiatedContent &
      FeatureArchivedContent &
      SubscriptionReactivatedWithBackdatingContent &
      OmnichannelSubscriptionImportedContent &
      TokenExpiredContent &
      CardAddedContent &
      CouponCreatedContent &
      RuleDeletedContent &
      CollectionsDisputeCreatedContent &
      ItemPriceEntitlementsUpdatedContent &
      ItemPriceDeletedContent &
      VirtualBankAccountDeletedContent &
      PaymentScheduleSchemeDeletedContent &
      SubscriptionCreatedContent &
      SubscriptionEntitlementsCreatedContent &
      OrderReturnedContent &
      SubscriptionDeletedContent &
      PaymentSourceAddedContent &
      SubscriptionMovedInContent &
      LedgerUpdatedContent &
      CollectionsPaymentPromiseCancelledContent &
      ItemPriceCreatedContent &
      SubscriptionScheduledCancellationRemovedContent &
      PaymentRefundedContent &
      UsageFileIngestedContent &
      OmnichannelSubscriptionMovedInContent &
      DifferentialPriceCreatedContent &
      TransactionCreatedContent &
      PaymentSucceededContent &
      SubscriptionCanceledWithBackdatingContent &
      UnbilledChargesVoidedContent &
      QuoteCreatedContent &
      CouponSetDeletedContent &
      AttachedItemCreatedContent &
      SalesOrderCreatedContent &
      CustomerChangedContent &
      SubscriptionStartedContent &
      SubscriptionActivatedContent &
      PaymentSourceExpiringContent &
      SubscriptionReactivatedContent &
      OrderUpdatedContent &
      CollectionsDisputeWithdrawnContent &
      SubscriptionScheduledPauseRemovedContent &
      SubscriptionCancellationReminderContent &
      SubscriptionCreatedWithBackdatingContent &
      SubscriptionRampCreatedContent &
      OrderDeletedContent &
      OmnichannelSubscriptionItemPauseScheduledContent &
      GiftUpdatedContent &
      SubscriptionTrialExtendedContent &
      OmnichannelSubscriptionItemGracePeriodStartedContent &
      CardExpiryReminderContent &
      TokenCreatedContent &
      CollectionsReminderSequencePausedContent &
      PaymentSourceBusinessEntityChangedContent &
      PromotionalCreditsAddedContent &
      SubscriptionRampUpdatedContent &
      BusinessRuleDeactivatedContent &
      LedgerAccountBalanceUpdatedContent &
      VaultTokenCreatedContent &
      EinvoiceUpdatedContent &
      CustomerEntitlementsUpdatedContent &
      PaymentSourceExpiredContent &
      CustomerMovedOutContent &
      BusinessRuleReleasedContent &
      SubscriptionEntitlementsUpdatedContent &
      OmnichannelSubscriptionItemDunningExpiredContent &
      HierarchyCreatedContent &
      AttachedItemDeletedContent &
      OmnichannelSubscriptionItemScheduledCancellationRemovedContent &
      ItemUpdatedContent &
      CollectionsReminderSequenceResumedContent &
      CouponSetCreatedContent &
      PaymentIntentUpdatedContent &
      OrderResentContent &
      OmnichannelSubscriptionCreatedContent &
      TaxWithheldRecordedContent &
      PriceVariantCreatedContent &
      DifferentialPriceDeletedContent &
      BusinessRuleActivatedContent &
      SubscriptionItemsRenewedContent &
      PaymentSchedulesCancelledContent &
      RuleCreatedContent &
      ContractTermCancelledContent &
      ContractTermRenewedContent &
      InvoiceDeletedContent &
      BusinessRuleUpdatedContent &
      ItemPriceEntitlementsRemovedContent &
      SalesOrderUpdatedContent &
      OmnichannelSubscriptionItemDunningStartedContent &
      OmnichannelSubscriptionItemChangeScheduledContent &
      PendingInvoiceUpdatedContent &
      QuoteUpdatedContent &
      AttachedItemUpdatedContent &
      PaymentSourceUpdatedContent &
      BusinessEntityDeletedContent &
      GrantBlocksUpdatedContent &
      AuthorizationVoidedContent &
      CollectionsReminderSequenceCompletedContent &
      SubscriptionRampDeletedContent &
      PlanDeletedContent &
      AddonDeletedContent &
      AddonUpdatedContent &
      AddonCreatedContent &
      PlanCreatedContent &
      PlanUpdatedContent;
    origin_user?: string;
  }

  export namespace Event {
    export class EventResource {
      list(
        input?: ListInputParam,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<ListResponse>>;

      retrieve(
        event_id: string,
        headers?: ChargebeeRequestHeader,
      ): Promise<ChargebeeResponse<RetrieveResponse>>;
    }

    export interface ListResponse {
      list: { event: Event }[];
      next_offset?: string;
    }

    export interface RetrieveResponse {
      event: Event;
    }

    export interface Webhook {
      id: string;
      webhook_status:
        | 'not_configured'
        | 'scheduled'
        | 'succeeded'
        | 're_scheduled'
        | 'failed'
        | 'skipped'
        | 'not_applicable'
        | 'disabled'
        | 'rate_limited';
    }
    // REQUEST PARAMS
    //---------------

    export interface ListInputParam {
      limit?: number;
      offset?: string /**
       * @deprecated Please refer API docs to use other attributes
       */;

      start_time?: number /**
       * @deprecated Please refer API docs to use other attributes
       */;

      end_time?: number;
      id?: filter.String;
      webhook_status?: filter.Enum;
      event_type?: filter.Enum;
      source?: filter.Enum;
      occurred_at?: filter.Timestamp;
      'sort_by[asc]'?: string;
      'sort_by[desc]'?: string;
    }
  }
}
