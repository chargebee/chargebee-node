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
      | 'disabled';
    webhook_failure_reason?: string;
    webhooks?: Event.Webhook[];
    event_type?: EventTypeEnum;
    api_version?: ApiVersionEnum;
    content: SubscriptionPauseScheduledContent &
      CustomerBusinessEntityChangedContent &
      SubscriptionAdvanceInvoiceScheduleAddedContent &
      GiftExpiredContent &
      TaxWithheldDeletedContent &
      UnbilledChargesDeletedContent &
      CouponUpdatedContent &
      OmnichannelSubscriptionItemReactivatedContent &
      OmnichannelSubscriptionItemRenewedContent &
      UnbilledChargesCreatedContent &
      SubscriptionResumedContent &
      OmnichannelOneTimeOrderItemCancelledContent &
      SubscriptionCancelledContent &
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
      CreditNoteCreatedWithBackdatingContent &
      ContractTermTerminatedContent &
      ItemFamilyUpdatedContent &
      OrderCreatedContent &
      PriceVariantDeletedContent &
      SubscriptionMovementFailedContent &
      CustomerMovedInContent &
      SubscriptionAdvanceInvoiceScheduleUpdatedContent &
      ItemDeletedContent &
      SubscriptionRampDraftedContent &
      DunningUpdatedContent &
      ItemEntitlementsUpdatedContent &
      TokenConsumedContent &
      HierarchyDeletedContent &
      SubscriptionCancellationScheduledContent &
      SubscriptionRenewedContent &
      FeatureUpdatedContent &
      FeatureDeletedContent &
      ItemFamilyCreatedContent &
      OmnichannelSubscriptionItemScheduledChangeRemovedContent &
      OmnichannelSubscriptionItemResumedContent &
      PurchaseCreatedContent &
      EntitlementOverridesUpdatedContent &
      ItemFamilyDeletedContent &
      SubscriptionResumptionScheduledContent &
      FeatureReactivatedContent &
      CouponCodesDeletedContent &
      CardExpiredContent &
      CreditNoteUpdatedContent &
      OmnichannelSubscriptionItemDowngradedContent &
      PriceVariantUpdatedContent &
      PromotionalCreditsDeductedContent &
      SubscriptionRampAppliedContent &
      SubscriptionPausedContent &
      OrderReadyToProcessContent &
      FeatureCreatedContent &
      TransactionDeletedContent &
      CreditNoteCreatedContent &
      OmnichannelSubscriptionItemResubscribedContent &
      RecordPurchaseFailedContent &
      ItemCreatedContent &
      TransactionUpdatedContent &
      MrrUpdatedContent &
      UnbilledChargesInvoicedContent &
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
      CustomerCreatedContent &
      SubscriptionRenewalReminderContent &
      PaymentDueReminderContent &
      OrderDeliveredContent &
      OmnichannelSubscriptionItemCancellationScheduledContent &
      OmnichannelSubscriptionItemGracePeriodExpiredContent &
      CouponCodesAddedContent &
      GiftCancelledContent &
      OrderCancelledContent &
      CouponDeletedContent &
      SubscriptionScheduledChangesRemovedContent &
      PendingInvoiceCreatedContent &
      EntitlementOverridesAutoRemovedContent &
      OmnichannelSubscriptionItemUpgradedContent &
      SubscriptionBusinessEntityChangedContent &
      OmnichannelOneTimeOrderCreatedContent &
      PaymentSourceDeletedContent &
      OmnichannelSubscriptionItemCancelledContent &
      QuoteDeletedContent &
      InvoiceUpdatedContent &
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
      PromotionalCreditsAddedContent &
      SubscriptionRampUpdatedContent &
      CustomerEntitlementsUpdatedContent &
      PaymentSourceExpiredContent &
      CustomerMovedOutContent &
      SubscriptionEntitlementsUpdatedContent &
      OmnichannelSubscriptionItemDunningExpiredContent &
      HierarchyCreatedContent &
      AttachedItemDeletedContent &
      OmnichannelSubscriptionItemScheduledCancellationRemovedContent &
      ItemUpdatedContent &
      CouponSetCreatedContent &
      PaymentIntentUpdatedContent &
      OrderResentContent &
      OmnichannelSubscriptionCreatedContent &
      TaxWithheldRecordedContent &
      PriceVariantCreatedContent &
      DifferentialPriceDeletedContent &
      SubscriptionItemsRenewedContent &
      RuleCreatedContent &
      ContractTermCancelledContent &
      ContractTermRenewedContent &
      InvoiceDeletedContent &
      ItemPriceEntitlementsRemovedContent &
      SalesOrderUpdatedContent &
      OmnichannelSubscriptionItemDunningStartedContent &
      OmnichannelSubscriptionItemChangeScheduledContent &
      PendingInvoiceUpdatedContent &
      QuoteUpdatedContent &
      AttachedItemUpdatedContent &
      PaymentSourceUpdatedContent &
      BusinessEntityDeletedContent &
      AuthorizationVoidedContent &
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
        | 'disabled';
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
