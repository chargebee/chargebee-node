import { EventType } from './event_types.js';
import {
  AddUsagesReminderContent,
  AddonCreatedContent,
  AddonDeletedContent,
  AddonUpdatedContent,
  AttachedItemCreatedContent,
  AttachedItemDeletedContent,
  AttachedItemUpdatedContent,
  AuthorizationSucceededContent,
  AuthorizationVoidedContent,
  BusinessEntityCreatedContent,
  BusinessEntityDeletedContent,
  BusinessEntityUpdatedContent,
  CardAddedContent,
  CardDeletedContent,
  CardExpiredContent,
  CardExpiryReminderContent,
  CardUpdatedContent,
  ContractTermCancelledContent,
  ContractTermCompletedContent,
  ContractTermCreatedContent,
  ContractTermRenewedContent,
  ContractTermTerminatedContent,
  CouponCodesAddedContent,
  CouponCodesDeletedContent,
  CouponCodesUpdatedContent,
  CouponCreatedContent,
  CouponDeletedContent,
  CouponSetCreatedContent,
  CouponSetDeletedContent,
  CouponSetUpdatedContent,
  CouponUpdatedContent,
  CreditNoteCreatedContent,
  CreditNoteCreatedWithBackdatingContent,
  CreditNoteDeletedContent,
  CreditNoteUpdatedContent,
  CustomerBusinessEntityChangedContent,
  CustomerChangedContent,
  CustomerCreatedContent,
  CustomerDeletedContent,
  CustomerEntitlementsUpdatedContent,
  CustomerMovedInContent,
  CustomerMovedOutContent,
  DifferentialPriceCreatedContent,
  DifferentialPriceDeletedContent,
  DifferentialPriceUpdatedContent,
  DunningUpdatedContent,
  EntitlementOverridesAutoRemovedContent,
  EntitlementOverridesRemovedContent,
  EntitlementOverridesUpdatedContent,
  FeatureActivatedContent,
  FeatureArchivedContent,
  FeatureCreatedContent,
  FeatureDeletedContent,
  FeatureReactivatedContent,
  FeatureUpdatedContent,
  GiftCancelledContent,
  GiftClaimedContent,
  GiftExpiredContent,
  GiftScheduledContent,
  GiftUnclaimedContent,
  GiftUpdatedContent,
  HierarchyCreatedContent,
  HierarchyDeletedContent,
  InvoiceDeletedContent,
  InvoiceGeneratedContent,
  InvoiceGeneratedWithBackdatingContent,
  InvoiceUpdatedContent,
  ItemCreatedContent,
  ItemDeletedContent,
  ItemEntitlementsRemovedContent,
  ItemEntitlementsUpdatedContent,
  ItemFamilyCreatedContent,
  ItemFamilyDeletedContent,
  ItemFamilyUpdatedContent,
  ItemPriceCreatedContent,
  ItemPriceDeletedContent,
  ItemPriceEntitlementsRemovedContent,
  ItemPriceEntitlementsUpdatedContent,
  ItemPriceUpdatedContent,
  ItemUpdatedContent,
  MrrUpdatedContent,
  NetdPaymentDueReminderContent,
  OmnichannelOneTimeOrderCreatedContent,
  OmnichannelOneTimeOrderItemCancelledContent,
  OmnichannelSubscriptionCreatedContent,
  OmnichannelSubscriptionImportedContent,
  OmnichannelSubscriptionItemCancellationScheduledContent,
  OmnichannelSubscriptionItemCancelledContent,
  OmnichannelSubscriptionItemChangeScheduledContent,
  OmnichannelSubscriptionItemChangedContent,
  OmnichannelSubscriptionItemDowngradeScheduledContent,
  OmnichannelSubscriptionItemDowngradedContent,
  OmnichannelSubscriptionItemDunningExpiredContent,
  OmnichannelSubscriptionItemDunningStartedContent,
  OmnichannelSubscriptionItemExpiredContent,
  OmnichannelSubscriptionItemGracePeriodExpiredContent,
  OmnichannelSubscriptionItemGracePeriodStartedContent,
  OmnichannelSubscriptionItemPauseScheduledContent,
  OmnichannelSubscriptionItemPausedContent,
  OmnichannelSubscriptionItemReactivatedContent,
  OmnichannelSubscriptionItemRenewedContent,
  OmnichannelSubscriptionItemResubscribedContent,
  OmnichannelSubscriptionItemResumedContent,
  OmnichannelSubscriptionItemScheduledCancellationRemovedContent,
  OmnichannelSubscriptionItemScheduledChangeRemovedContent,
  OmnichannelSubscriptionItemScheduledDowngradeRemovedContent,
  OmnichannelSubscriptionItemUpgradedContent,
  OmnichannelSubscriptionMovedInContent,
  OmnichannelTransactionCreatedContent,
  OrderCancelledContent,
  OrderCreatedContent,
  OrderDeletedContent,
  OrderDeliveredContent,
  OrderReadyToProcessContent,
  OrderReadyToShipContent,
  OrderResentContent,
  OrderReturnedContent,
  OrderUpdatedContent,
  PaymentFailedContent,
  PaymentInitiatedContent,
  PaymentIntentCreatedContent,
  PaymentIntentUpdatedContent,
  PaymentRefundedContent,
  PaymentScheduleSchemeCreatedContent,
  PaymentScheduleSchemeDeletedContent,
  PaymentSchedulesCreatedContent,
  PaymentSchedulesUpdatedContent,
  PaymentSourceAddedContent,
  PaymentSourceDeletedContent,
  PaymentSourceExpiredContent,
  PaymentSourceExpiringContent,
  PaymentSourceLocallyDeletedContent,
  PaymentSourceUpdatedContent,
  PaymentSucceededContent,
  PendingInvoiceCreatedContent,
  PendingInvoiceUpdatedContent,
  PlanCreatedContent,
  PlanDeletedContent,
  PlanUpdatedContent,
  PriceVariantCreatedContent,
  PriceVariantDeletedContent,
  PriceVariantUpdatedContent,
  ProductCreatedContent,
  ProductDeletedContent,
  ProductUpdatedContent,
  PromotionalCreditsAddedContent,
  PromotionalCreditsDeductedContent,
  PurchaseCreatedContent,
  QuoteCreatedContent,
  QuoteDeletedContent,
  QuoteUpdatedContent,
  RecordPurchaseFailedContent,
  RefundInitiatedContent,
  RuleCreatedContent,
  RuleDeletedContent,
  RuleUpdatedContent,
  SalesOrderCreatedContent,
  SalesOrderUpdatedContent,
  SubscriptionActivatedContent,
  SubscriptionActivatedWithBackdatingContent,
  SubscriptionAdvanceInvoiceScheduleAddedContent,
  SubscriptionAdvanceInvoiceScheduleRemovedContent,
  SubscriptionAdvanceInvoiceScheduleUpdatedContent,
  SubscriptionBusinessEntityChangedContent,
  SubscriptionCanceledWithBackdatingContent,
  SubscriptionCancellationReminderContent,
  SubscriptionCancellationScheduledContent,
  SubscriptionCancelledContent,
  SubscriptionChangedContent,
  SubscriptionChangedWithBackdatingContent,
  SubscriptionChangesScheduledContent,
  SubscriptionCreatedContent,
  SubscriptionCreatedWithBackdatingContent,
  SubscriptionDeletedContent,
  SubscriptionEntitlementsCreatedContent,
  SubscriptionEntitlementsUpdatedContent,
  SubscriptionItemsRenewedContent,
  SubscriptionMovedInContent,
  SubscriptionMovedOutContent,
  SubscriptionMovementFailedContent,
  SubscriptionPauseScheduledContent,
  SubscriptionPausedContent,
  SubscriptionRampAppliedContent,
  SubscriptionRampCreatedContent,
  SubscriptionRampDeletedContent,
  SubscriptionRampDraftedContent,
  SubscriptionRampUpdatedContent,
  SubscriptionReactivatedContent,
  SubscriptionReactivatedWithBackdatingContent,
  SubscriptionRenewalReminderContent,
  SubscriptionRenewedContent,
  SubscriptionResumedContent,
  SubscriptionResumptionScheduledContent,
  SubscriptionScheduledCancellationRemovedContent,
  SubscriptionScheduledChangesRemovedContent,
  SubscriptionScheduledPauseRemovedContent,
  SubscriptionScheduledResumptionRemovedContent,
  SubscriptionShippingAddressUpdatedContent,
  SubscriptionStartedContent,
  SubscriptionTrialEndReminderContent,
  SubscriptionTrialExtendedContent,
  TaxWithheldDeletedContent,
  TaxWithheldRecordedContent,
  TaxWithheldRefundedContent,
  TokenConsumedContent,
  TokenCreatedContent,
  TokenExpiredContent,
  TransactionCreatedContent,
  TransactionDeletedContent,
  TransactionUpdatedContent,
  UnbilledChargesCreatedContent,
  UnbilledChargesDeletedContent,
  UnbilledChargesInvoicedContent,
  UnbilledChargesVoidedContent,
  UsageFileIngestedContent,
  VariantCreatedContent,
  VariantDeletedContent,
  VariantUpdatedContent,
  VirtualBankAccountAddedContent,
  VirtualBankAccountDeletedContent,
  VirtualBankAccountUpdatedContent,
  VoucherCreateFailedContent,
  VoucherCreatedContent,
  VoucherExpiredContent,
  WebhookEvent,
} from './content.js';

export interface WebhookHandlers {
  onAddUsagesReminder?: (
    event: WebhookEvent & { content: AddUsagesReminderContent },
  ) => Promise<void>;

  onAddonCreated?: (
    event: WebhookEvent & { content: AddonCreatedContent },
  ) => Promise<void>;

  onAddonDeleted?: (
    event: WebhookEvent & { content: AddonDeletedContent },
  ) => Promise<void>;

  onAddonUpdated?: (
    event: WebhookEvent & { content: AddonUpdatedContent },
  ) => Promise<void>;

  onAttachedItemCreated?: (
    event: WebhookEvent & { content: AttachedItemCreatedContent },
  ) => Promise<void>;

  onAttachedItemDeleted?: (
    event: WebhookEvent & { content: AttachedItemDeletedContent },
  ) => Promise<void>;

  onAttachedItemUpdated?: (
    event: WebhookEvent & { content: AttachedItemUpdatedContent },
  ) => Promise<void>;

  onAuthorizationSucceeded?: (
    event: WebhookEvent & { content: AuthorizationSucceededContent },
  ) => Promise<void>;

  onAuthorizationVoided?: (
    event: WebhookEvent & { content: AuthorizationVoidedContent },
  ) => Promise<void>;

  onBusinessEntityCreated?: (
    event: WebhookEvent & { content: BusinessEntityCreatedContent },
  ) => Promise<void>;

  onBusinessEntityDeleted?: (
    event: WebhookEvent & { content: BusinessEntityDeletedContent },
  ) => Promise<void>;

  onBusinessEntityUpdated?: (
    event: WebhookEvent & { content: BusinessEntityUpdatedContent },
  ) => Promise<void>;

  onCardAdded?: (
    event: WebhookEvent & { content: CardAddedContent },
  ) => Promise<void>;

  onCardDeleted?: (
    event: WebhookEvent & { content: CardDeletedContent },
  ) => Promise<void>;

  onCardExpired?: (
    event: WebhookEvent & { content: CardExpiredContent },
  ) => Promise<void>;

  onCardExpiryReminder?: (
    event: WebhookEvent & { content: CardExpiryReminderContent },
  ) => Promise<void>;

  onCardUpdated?: (
    event: WebhookEvent & { content: CardUpdatedContent },
  ) => Promise<void>;

  onContractTermCancelled?: (
    event: WebhookEvent & { content: ContractTermCancelledContent },
  ) => Promise<void>;

  onContractTermCompleted?: (
    event: WebhookEvent & { content: ContractTermCompletedContent },
  ) => Promise<void>;

  onContractTermCreated?: (
    event: WebhookEvent & { content: ContractTermCreatedContent },
  ) => Promise<void>;

  onContractTermRenewed?: (
    event: WebhookEvent & { content: ContractTermRenewedContent },
  ) => Promise<void>;

  onContractTermTerminated?: (
    event: WebhookEvent & { content: ContractTermTerminatedContent },
  ) => Promise<void>;

  onCouponCodesAdded?: (
    event: WebhookEvent & { content: CouponCodesAddedContent },
  ) => Promise<void>;

  onCouponCodesDeleted?: (
    event: WebhookEvent & { content: CouponCodesDeletedContent },
  ) => Promise<void>;

  onCouponCodesUpdated?: (
    event: WebhookEvent & { content: CouponCodesUpdatedContent },
  ) => Promise<void>;

  onCouponCreated?: (
    event: WebhookEvent & { content: CouponCreatedContent },
  ) => Promise<void>;

  onCouponDeleted?: (
    event: WebhookEvent & { content: CouponDeletedContent },
  ) => Promise<void>;

  onCouponSetCreated?: (
    event: WebhookEvent & { content: CouponSetCreatedContent },
  ) => Promise<void>;

  onCouponSetDeleted?: (
    event: WebhookEvent & { content: CouponSetDeletedContent },
  ) => Promise<void>;

  onCouponSetUpdated?: (
    event: WebhookEvent & { content: CouponSetUpdatedContent },
  ) => Promise<void>;

  onCouponUpdated?: (
    event: WebhookEvent & { content: CouponUpdatedContent },
  ) => Promise<void>;

  onCreditNoteCreated?: (
    event: WebhookEvent & { content: CreditNoteCreatedContent },
  ) => Promise<void>;

  onCreditNoteCreatedWithBackdating?: (
    event: WebhookEvent & { content: CreditNoteCreatedWithBackdatingContent },
  ) => Promise<void>;

  onCreditNoteDeleted?: (
    event: WebhookEvent & { content: CreditNoteDeletedContent },
  ) => Promise<void>;

  onCreditNoteUpdated?: (
    event: WebhookEvent & { content: CreditNoteUpdatedContent },
  ) => Promise<void>;

  onCustomerBusinessEntityChanged?: (
    event: WebhookEvent & { content: CustomerBusinessEntityChangedContent },
  ) => Promise<void>;

  onCustomerChanged?: (
    event: WebhookEvent & { content: CustomerChangedContent },
  ) => Promise<void>;

  onCustomerCreated?: (
    event: WebhookEvent & { content: CustomerCreatedContent },
  ) => Promise<void>;

  onCustomerDeleted?: (
    event: WebhookEvent & { content: CustomerDeletedContent },
  ) => Promise<void>;

  onCustomerEntitlementsUpdated?: (
    event: WebhookEvent & { content: CustomerEntitlementsUpdatedContent },
  ) => Promise<void>;

  onCustomerMovedIn?: (
    event: WebhookEvent & { content: CustomerMovedInContent },
  ) => Promise<void>;

  onCustomerMovedOut?: (
    event: WebhookEvent & { content: CustomerMovedOutContent },
  ) => Promise<void>;

  onDifferentialPriceCreated?: (
    event: WebhookEvent & { content: DifferentialPriceCreatedContent },
  ) => Promise<void>;

  onDifferentialPriceDeleted?: (
    event: WebhookEvent & { content: DifferentialPriceDeletedContent },
  ) => Promise<void>;

  onDifferentialPriceUpdated?: (
    event: WebhookEvent & { content: DifferentialPriceUpdatedContent },
  ) => Promise<void>;

  onDunningUpdated?: (
    event: WebhookEvent & { content: DunningUpdatedContent },
  ) => Promise<void>;

  onEntitlementOverridesAutoRemoved?: (
    event: WebhookEvent & { content: EntitlementOverridesAutoRemovedContent },
  ) => Promise<void>;

  onEntitlementOverridesRemoved?: (
    event: WebhookEvent & { content: EntitlementOverridesRemovedContent },
  ) => Promise<void>;

  onEntitlementOverridesUpdated?: (
    event: WebhookEvent & { content: EntitlementOverridesUpdatedContent },
  ) => Promise<void>;

  onFeatureActivated?: (
    event: WebhookEvent & { content: FeatureActivatedContent },
  ) => Promise<void>;

  onFeatureArchived?: (
    event: WebhookEvent & { content: FeatureArchivedContent },
  ) => Promise<void>;

  onFeatureCreated?: (
    event: WebhookEvent & { content: FeatureCreatedContent },
  ) => Promise<void>;

  onFeatureDeleted?: (
    event: WebhookEvent & { content: FeatureDeletedContent },
  ) => Promise<void>;

  onFeatureReactivated?: (
    event: WebhookEvent & { content: FeatureReactivatedContent },
  ) => Promise<void>;

  onFeatureUpdated?: (
    event: WebhookEvent & { content: FeatureUpdatedContent },
  ) => Promise<void>;

  onGiftCancelled?: (
    event: WebhookEvent & { content: GiftCancelledContent },
  ) => Promise<void>;

  onGiftClaimed?: (
    event: WebhookEvent & { content: GiftClaimedContent },
  ) => Promise<void>;

  onGiftExpired?: (
    event: WebhookEvent & { content: GiftExpiredContent },
  ) => Promise<void>;

  onGiftScheduled?: (
    event: WebhookEvent & { content: GiftScheduledContent },
  ) => Promise<void>;

  onGiftUnclaimed?: (
    event: WebhookEvent & { content: GiftUnclaimedContent },
  ) => Promise<void>;

  onGiftUpdated?: (
    event: WebhookEvent & { content: GiftUpdatedContent },
  ) => Promise<void>;

  onHierarchyCreated?: (
    event: WebhookEvent & { content: HierarchyCreatedContent },
  ) => Promise<void>;

  onHierarchyDeleted?: (
    event: WebhookEvent & { content: HierarchyDeletedContent },
  ) => Promise<void>;

  onInvoiceDeleted?: (
    event: WebhookEvent & { content: InvoiceDeletedContent },
  ) => Promise<void>;

  onInvoiceGenerated?: (
    event: WebhookEvent & { content: InvoiceGeneratedContent },
  ) => Promise<void>;

  onInvoiceGeneratedWithBackdating?: (
    event: WebhookEvent & { content: InvoiceGeneratedWithBackdatingContent },
  ) => Promise<void>;

  onInvoiceUpdated?: (
    event: WebhookEvent & { content: InvoiceUpdatedContent },
  ) => Promise<void>;

  onItemCreated?: (
    event: WebhookEvent & { content: ItemCreatedContent },
  ) => Promise<void>;

  onItemDeleted?: (
    event: WebhookEvent & { content: ItemDeletedContent },
  ) => Promise<void>;

  onItemEntitlementsRemoved?: (
    event: WebhookEvent & { content: ItemEntitlementsRemovedContent },
  ) => Promise<void>;

  onItemEntitlementsUpdated?: (
    event: WebhookEvent & { content: ItemEntitlementsUpdatedContent },
  ) => Promise<void>;

  onItemFamilyCreated?: (
    event: WebhookEvent & { content: ItemFamilyCreatedContent },
  ) => Promise<void>;

  onItemFamilyDeleted?: (
    event: WebhookEvent & { content: ItemFamilyDeletedContent },
  ) => Promise<void>;

  onItemFamilyUpdated?: (
    event: WebhookEvent & { content: ItemFamilyUpdatedContent },
  ) => Promise<void>;

  onItemPriceCreated?: (
    event: WebhookEvent & { content: ItemPriceCreatedContent },
  ) => Promise<void>;

  onItemPriceDeleted?: (
    event: WebhookEvent & { content: ItemPriceDeletedContent },
  ) => Promise<void>;

  onItemPriceEntitlementsRemoved?: (
    event: WebhookEvent & { content: ItemPriceEntitlementsRemovedContent },
  ) => Promise<void>;

  onItemPriceEntitlementsUpdated?: (
    event: WebhookEvent & { content: ItemPriceEntitlementsUpdatedContent },
  ) => Promise<void>;

  onItemPriceUpdated?: (
    event: WebhookEvent & { content: ItemPriceUpdatedContent },
  ) => Promise<void>;

  onItemUpdated?: (
    event: WebhookEvent & { content: ItemUpdatedContent },
  ) => Promise<void>;

  onMrrUpdated?: (
    event: WebhookEvent & { content: MrrUpdatedContent },
  ) => Promise<void>;

  onNetdPaymentDueReminder?: (
    event: WebhookEvent & { content: NetdPaymentDueReminderContent },
  ) => Promise<void>;

  onOmnichannelOneTimeOrderCreated?: (
    event: WebhookEvent & { content: OmnichannelOneTimeOrderCreatedContent },
  ) => Promise<void>;

  onOmnichannelOneTimeOrderItemCancelled?: (
    event: WebhookEvent & {
      content: OmnichannelOneTimeOrderItemCancelledContent;
    },
  ) => Promise<void>;

  onOmnichannelSubscriptionCreated?: (
    event: WebhookEvent & { content: OmnichannelSubscriptionCreatedContent },
  ) => Promise<void>;

  onOmnichannelSubscriptionImported?: (
    event: WebhookEvent & { content: OmnichannelSubscriptionImportedContent },
  ) => Promise<void>;

  onOmnichannelSubscriptionItemCancellationScheduled?: (
    event: WebhookEvent & {
      content: OmnichannelSubscriptionItemCancellationScheduledContent;
    },
  ) => Promise<void>;

  onOmnichannelSubscriptionItemCancelled?: (
    event: WebhookEvent & {
      content: OmnichannelSubscriptionItemCancelledContent;
    },
  ) => Promise<void>;

  onOmnichannelSubscriptionItemChangeScheduled?: (
    event: WebhookEvent & {
      content: OmnichannelSubscriptionItemChangeScheduledContent;
    },
  ) => Promise<void>;

  onOmnichannelSubscriptionItemChanged?: (
    event: WebhookEvent & {
      content: OmnichannelSubscriptionItemChangedContent;
    },
  ) => Promise<void>;

  onOmnichannelSubscriptionItemDowngradeScheduled?: (
    event: WebhookEvent & {
      content: OmnichannelSubscriptionItemDowngradeScheduledContent;
    },
  ) => Promise<void>;

  onOmnichannelSubscriptionItemDowngraded?: (
    event: WebhookEvent & {
      content: OmnichannelSubscriptionItemDowngradedContent;
    },
  ) => Promise<void>;

  onOmnichannelSubscriptionItemDunningExpired?: (
    event: WebhookEvent & {
      content: OmnichannelSubscriptionItemDunningExpiredContent;
    },
  ) => Promise<void>;

  onOmnichannelSubscriptionItemDunningStarted?: (
    event: WebhookEvent & {
      content: OmnichannelSubscriptionItemDunningStartedContent;
    },
  ) => Promise<void>;

  onOmnichannelSubscriptionItemExpired?: (
    event: WebhookEvent & {
      content: OmnichannelSubscriptionItemExpiredContent;
    },
  ) => Promise<void>;

  onOmnichannelSubscriptionItemGracePeriodExpired?: (
    event: WebhookEvent & {
      content: OmnichannelSubscriptionItemGracePeriodExpiredContent;
    },
  ) => Promise<void>;

  onOmnichannelSubscriptionItemGracePeriodStarted?: (
    event: WebhookEvent & {
      content: OmnichannelSubscriptionItemGracePeriodStartedContent;
    },
  ) => Promise<void>;

  onOmnichannelSubscriptionItemPauseScheduled?: (
    event: WebhookEvent & {
      content: OmnichannelSubscriptionItemPauseScheduledContent;
    },
  ) => Promise<void>;

  onOmnichannelSubscriptionItemPaused?: (
    event: WebhookEvent & { content: OmnichannelSubscriptionItemPausedContent },
  ) => Promise<void>;

  onOmnichannelSubscriptionItemReactivated?: (
    event: WebhookEvent & {
      content: OmnichannelSubscriptionItemReactivatedContent;
    },
  ) => Promise<void>;

  onOmnichannelSubscriptionItemRenewed?: (
    event: WebhookEvent & {
      content: OmnichannelSubscriptionItemRenewedContent;
    },
  ) => Promise<void>;

  onOmnichannelSubscriptionItemResubscribed?: (
    event: WebhookEvent & {
      content: OmnichannelSubscriptionItemResubscribedContent;
    },
  ) => Promise<void>;

  onOmnichannelSubscriptionItemResumed?: (
    event: WebhookEvent & {
      content: OmnichannelSubscriptionItemResumedContent;
    },
  ) => Promise<void>;

  onOmnichannelSubscriptionItemScheduledCancellationRemoved?: (
    event: WebhookEvent & {
      content: OmnichannelSubscriptionItemScheduledCancellationRemovedContent;
    },
  ) => Promise<void>;

  onOmnichannelSubscriptionItemScheduledChangeRemoved?: (
    event: WebhookEvent & {
      content: OmnichannelSubscriptionItemScheduledChangeRemovedContent;
    },
  ) => Promise<void>;

  onOmnichannelSubscriptionItemScheduledDowngradeRemoved?: (
    event: WebhookEvent & {
      content: OmnichannelSubscriptionItemScheduledDowngradeRemovedContent;
    },
  ) => Promise<void>;

  onOmnichannelSubscriptionItemUpgraded?: (
    event: WebhookEvent & {
      content: OmnichannelSubscriptionItemUpgradedContent;
    },
  ) => Promise<void>;

  onOmnichannelSubscriptionMovedIn?: (
    event: WebhookEvent & { content: OmnichannelSubscriptionMovedInContent },
  ) => Promise<void>;

  onOmnichannelTransactionCreated?: (
    event: WebhookEvent & { content: OmnichannelTransactionCreatedContent },
  ) => Promise<void>;

  onOrderCancelled?: (
    event: WebhookEvent & { content: OrderCancelledContent },
  ) => Promise<void>;

  onOrderCreated?: (
    event: WebhookEvent & { content: OrderCreatedContent },
  ) => Promise<void>;

  onOrderDeleted?: (
    event: WebhookEvent & { content: OrderDeletedContent },
  ) => Promise<void>;

  onOrderDelivered?: (
    event: WebhookEvent & { content: OrderDeliveredContent },
  ) => Promise<void>;

  onOrderReadyToProcess?: (
    event: WebhookEvent & { content: OrderReadyToProcessContent },
  ) => Promise<void>;

  onOrderReadyToShip?: (
    event: WebhookEvent & { content: OrderReadyToShipContent },
  ) => Promise<void>;

  onOrderResent?: (
    event: WebhookEvent & { content: OrderResentContent },
  ) => Promise<void>;

  onOrderReturned?: (
    event: WebhookEvent & { content: OrderReturnedContent },
  ) => Promise<void>;

  onOrderUpdated?: (
    event: WebhookEvent & { content: OrderUpdatedContent },
  ) => Promise<void>;

  onPaymentFailed?: (
    event: WebhookEvent & { content: PaymentFailedContent },
  ) => Promise<void>;

  onPaymentInitiated?: (
    event: WebhookEvent & { content: PaymentInitiatedContent },
  ) => Promise<void>;

  onPaymentIntentCreated?: (
    event: WebhookEvent & { content: PaymentIntentCreatedContent },
  ) => Promise<void>;

  onPaymentIntentUpdated?: (
    event: WebhookEvent & { content: PaymentIntentUpdatedContent },
  ) => Promise<void>;

  onPaymentRefunded?: (
    event: WebhookEvent & { content: PaymentRefundedContent },
  ) => Promise<void>;

  onPaymentScheduleSchemeCreated?: (
    event: WebhookEvent & { content: PaymentScheduleSchemeCreatedContent },
  ) => Promise<void>;

  onPaymentScheduleSchemeDeleted?: (
    event: WebhookEvent & { content: PaymentScheduleSchemeDeletedContent },
  ) => Promise<void>;

  onPaymentSchedulesCreated?: (
    event: WebhookEvent & { content: PaymentSchedulesCreatedContent },
  ) => Promise<void>;

  onPaymentSchedulesUpdated?: (
    event: WebhookEvent & { content: PaymentSchedulesUpdatedContent },
  ) => Promise<void>;

  onPaymentSourceAdded?: (
    event: WebhookEvent & { content: PaymentSourceAddedContent },
  ) => Promise<void>;

  onPaymentSourceDeleted?: (
    event: WebhookEvent & { content: PaymentSourceDeletedContent },
  ) => Promise<void>;

  onPaymentSourceExpired?: (
    event: WebhookEvent & { content: PaymentSourceExpiredContent },
  ) => Promise<void>;

  onPaymentSourceExpiring?: (
    event: WebhookEvent & { content: PaymentSourceExpiringContent },
  ) => Promise<void>;

  onPaymentSourceLocallyDeleted?: (
    event: WebhookEvent & { content: PaymentSourceLocallyDeletedContent },
  ) => Promise<void>;

  onPaymentSourceUpdated?: (
    event: WebhookEvent & { content: PaymentSourceUpdatedContent },
  ) => Promise<void>;

  onPaymentSucceeded?: (
    event: WebhookEvent & { content: PaymentSucceededContent },
  ) => Promise<void>;

  onPendingInvoiceCreated?: (
    event: WebhookEvent & { content: PendingInvoiceCreatedContent },
  ) => Promise<void>;

  onPendingInvoiceUpdated?: (
    event: WebhookEvent & { content: PendingInvoiceUpdatedContent },
  ) => Promise<void>;

  onPlanCreated?: (
    event: WebhookEvent & { content: PlanCreatedContent },
  ) => Promise<void>;

  onPlanDeleted?: (
    event: WebhookEvent & { content: PlanDeletedContent },
  ) => Promise<void>;

  onPlanUpdated?: (
    event: WebhookEvent & { content: PlanUpdatedContent },
  ) => Promise<void>;

  onPriceVariantCreated?: (
    event: WebhookEvent & { content: PriceVariantCreatedContent },
  ) => Promise<void>;

  onPriceVariantDeleted?: (
    event: WebhookEvent & { content: PriceVariantDeletedContent },
  ) => Promise<void>;

  onPriceVariantUpdated?: (
    event: WebhookEvent & { content: PriceVariantUpdatedContent },
  ) => Promise<void>;

  onProductCreated?: (
    event: WebhookEvent & { content: ProductCreatedContent },
  ) => Promise<void>;

  onProductDeleted?: (
    event: WebhookEvent & { content: ProductDeletedContent },
  ) => Promise<void>;

  onProductUpdated?: (
    event: WebhookEvent & { content: ProductUpdatedContent },
  ) => Promise<void>;

  onPromotionalCreditsAdded?: (
    event: WebhookEvent & { content: PromotionalCreditsAddedContent },
  ) => Promise<void>;

  onPromotionalCreditsDeducted?: (
    event: WebhookEvent & { content: PromotionalCreditsDeductedContent },
  ) => Promise<void>;

  onPurchaseCreated?: (
    event: WebhookEvent & { content: PurchaseCreatedContent },
  ) => Promise<void>;

  onQuoteCreated?: (
    event: WebhookEvent & { content: QuoteCreatedContent },
  ) => Promise<void>;

  onQuoteDeleted?: (
    event: WebhookEvent & { content: QuoteDeletedContent },
  ) => Promise<void>;

  onQuoteUpdated?: (
    event: WebhookEvent & { content: QuoteUpdatedContent },
  ) => Promise<void>;

  onRecordPurchaseFailed?: (
    event: WebhookEvent & { content: RecordPurchaseFailedContent },
  ) => Promise<void>;

  onRefundInitiated?: (
    event: WebhookEvent & { content: RefundInitiatedContent },
  ) => Promise<void>;

  onRuleCreated?: (
    event: WebhookEvent & { content: RuleCreatedContent },
  ) => Promise<void>;

  onRuleDeleted?: (
    event: WebhookEvent & { content: RuleDeletedContent },
  ) => Promise<void>;

  onRuleUpdated?: (
    event: WebhookEvent & { content: RuleUpdatedContent },
  ) => Promise<void>;

  onSalesOrderCreated?: (
    event: WebhookEvent & { content: SalesOrderCreatedContent },
  ) => Promise<void>;

  onSalesOrderUpdated?: (
    event: WebhookEvent & { content: SalesOrderUpdatedContent },
  ) => Promise<void>;

  onSubscriptionActivated?: (
    event: WebhookEvent & { content: SubscriptionActivatedContent },
  ) => Promise<void>;

  onSubscriptionActivatedWithBackdating?: (
    event: WebhookEvent & {
      content: SubscriptionActivatedWithBackdatingContent;
    },
  ) => Promise<void>;

  onSubscriptionAdvanceInvoiceScheduleAdded?: (
    event: WebhookEvent & {
      content: SubscriptionAdvanceInvoiceScheduleAddedContent;
    },
  ) => Promise<void>;

  onSubscriptionAdvanceInvoiceScheduleRemoved?: (
    event: WebhookEvent & {
      content: SubscriptionAdvanceInvoiceScheduleRemovedContent;
    },
  ) => Promise<void>;

  onSubscriptionAdvanceInvoiceScheduleUpdated?: (
    event: WebhookEvent & {
      content: SubscriptionAdvanceInvoiceScheduleUpdatedContent;
    },
  ) => Promise<void>;

  onSubscriptionBusinessEntityChanged?: (
    event: WebhookEvent & { content: SubscriptionBusinessEntityChangedContent },
  ) => Promise<void>;

  onSubscriptionCanceledWithBackdating?: (
    event: WebhookEvent & {
      content: SubscriptionCanceledWithBackdatingContent;
    },
  ) => Promise<void>;

  onSubscriptionCancellationReminder?: (
    event: WebhookEvent & { content: SubscriptionCancellationReminderContent },
  ) => Promise<void>;

  onSubscriptionCancellationScheduled?: (
    event: WebhookEvent & { content: SubscriptionCancellationScheduledContent },
  ) => Promise<void>;

  onSubscriptionCancelled?: (
    event: WebhookEvent & { content: SubscriptionCancelledContent },
  ) => Promise<void>;

  onSubscriptionChanged?: (
    event: WebhookEvent & { content: SubscriptionChangedContent },
  ) => Promise<void>;

  onSubscriptionChangedWithBackdating?: (
    event: WebhookEvent & { content: SubscriptionChangedWithBackdatingContent },
  ) => Promise<void>;

  onSubscriptionChangesScheduled?: (
    event: WebhookEvent & { content: SubscriptionChangesScheduledContent },
  ) => Promise<void>;

  onSubscriptionCreated?: (
    event: WebhookEvent & { content: SubscriptionCreatedContent },
  ) => Promise<void>;

  onSubscriptionCreatedWithBackdating?: (
    event: WebhookEvent & { content: SubscriptionCreatedWithBackdatingContent },
  ) => Promise<void>;

  onSubscriptionDeleted?: (
    event: WebhookEvent & { content: SubscriptionDeletedContent },
  ) => Promise<void>;

  onSubscriptionEntitlementsCreated?: (
    event: WebhookEvent & { content: SubscriptionEntitlementsCreatedContent },
  ) => Promise<void>;

  onSubscriptionEntitlementsUpdated?: (
    event: WebhookEvent & { content: SubscriptionEntitlementsUpdatedContent },
  ) => Promise<void>;

  onSubscriptionItemsRenewed?: (
    event: WebhookEvent & { content: SubscriptionItemsRenewedContent },
  ) => Promise<void>;

  onSubscriptionMovedIn?: (
    event: WebhookEvent & { content: SubscriptionMovedInContent },
  ) => Promise<void>;

  onSubscriptionMovedOut?: (
    event: WebhookEvent & { content: SubscriptionMovedOutContent },
  ) => Promise<void>;

  onSubscriptionMovementFailed?: (
    event: WebhookEvent & { content: SubscriptionMovementFailedContent },
  ) => Promise<void>;

  onSubscriptionPauseScheduled?: (
    event: WebhookEvent & { content: SubscriptionPauseScheduledContent },
  ) => Promise<void>;

  onSubscriptionPaused?: (
    event: WebhookEvent & { content: SubscriptionPausedContent },
  ) => Promise<void>;

  onSubscriptionRampApplied?: (
    event: WebhookEvent & { content: SubscriptionRampAppliedContent },
  ) => Promise<void>;

  onSubscriptionRampCreated?: (
    event: WebhookEvent & { content: SubscriptionRampCreatedContent },
  ) => Promise<void>;

  onSubscriptionRampDeleted?: (
    event: WebhookEvent & { content: SubscriptionRampDeletedContent },
  ) => Promise<void>;

  onSubscriptionRampDrafted?: (
    event: WebhookEvent & { content: SubscriptionRampDraftedContent },
  ) => Promise<void>;

  onSubscriptionRampUpdated?: (
    event: WebhookEvent & { content: SubscriptionRampUpdatedContent },
  ) => Promise<void>;

  onSubscriptionReactivated?: (
    event: WebhookEvent & { content: SubscriptionReactivatedContent },
  ) => Promise<void>;

  onSubscriptionReactivatedWithBackdating?: (
    event: WebhookEvent & {
      content: SubscriptionReactivatedWithBackdatingContent;
    },
  ) => Promise<void>;

  onSubscriptionRenewalReminder?: (
    event: WebhookEvent & { content: SubscriptionRenewalReminderContent },
  ) => Promise<void>;

  onSubscriptionRenewed?: (
    event: WebhookEvent & { content: SubscriptionRenewedContent },
  ) => Promise<void>;

  onSubscriptionResumed?: (
    event: WebhookEvent & { content: SubscriptionResumedContent },
  ) => Promise<void>;

  onSubscriptionResumptionScheduled?: (
    event: WebhookEvent & { content: SubscriptionResumptionScheduledContent },
  ) => Promise<void>;

  onSubscriptionScheduledCancellationRemoved?: (
    event: WebhookEvent & {
      content: SubscriptionScheduledCancellationRemovedContent;
    },
  ) => Promise<void>;

  onSubscriptionScheduledChangesRemoved?: (
    event: WebhookEvent & {
      content: SubscriptionScheduledChangesRemovedContent;
    },
  ) => Promise<void>;

  onSubscriptionScheduledPauseRemoved?: (
    event: WebhookEvent & { content: SubscriptionScheduledPauseRemovedContent },
  ) => Promise<void>;

  onSubscriptionScheduledResumptionRemoved?: (
    event: WebhookEvent & {
      content: SubscriptionScheduledResumptionRemovedContent;
    },
  ) => Promise<void>;

  onSubscriptionShippingAddressUpdated?: (
    event: WebhookEvent & {
      content: SubscriptionShippingAddressUpdatedContent;
    },
  ) => Promise<void>;

  onSubscriptionStarted?: (
    event: WebhookEvent & { content: SubscriptionStartedContent },
  ) => Promise<void>;

  onSubscriptionTrialEndReminder?: (
    event: WebhookEvent & { content: SubscriptionTrialEndReminderContent },
  ) => Promise<void>;

  onSubscriptionTrialExtended?: (
    event: WebhookEvent & { content: SubscriptionTrialExtendedContent },
  ) => Promise<void>;

  onTaxWithheldDeleted?: (
    event: WebhookEvent & { content: TaxWithheldDeletedContent },
  ) => Promise<void>;

  onTaxWithheldRecorded?: (
    event: WebhookEvent & { content: TaxWithheldRecordedContent },
  ) => Promise<void>;

  onTaxWithheldRefunded?: (
    event: WebhookEvent & { content: TaxWithheldRefundedContent },
  ) => Promise<void>;

  onTokenConsumed?: (
    event: WebhookEvent & { content: TokenConsumedContent },
  ) => Promise<void>;

  onTokenCreated?: (
    event: WebhookEvent & { content: TokenCreatedContent },
  ) => Promise<void>;

  onTokenExpired?: (
    event: WebhookEvent & { content: TokenExpiredContent },
  ) => Promise<void>;

  onTransactionCreated?: (
    event: WebhookEvent & { content: TransactionCreatedContent },
  ) => Promise<void>;

  onTransactionDeleted?: (
    event: WebhookEvent & { content: TransactionDeletedContent },
  ) => Promise<void>;

  onTransactionUpdated?: (
    event: WebhookEvent & { content: TransactionUpdatedContent },
  ) => Promise<void>;

  onUnbilledChargesCreated?: (
    event: WebhookEvent & { content: UnbilledChargesCreatedContent },
  ) => Promise<void>;

  onUnbilledChargesDeleted?: (
    event: WebhookEvent & { content: UnbilledChargesDeletedContent },
  ) => Promise<void>;

  onUnbilledChargesInvoiced?: (
    event: WebhookEvent & { content: UnbilledChargesInvoicedContent },
  ) => Promise<void>;

  onUnbilledChargesVoided?: (
    event: WebhookEvent & { content: UnbilledChargesVoidedContent },
  ) => Promise<void>;

  onUsageFileIngested?: (
    event: WebhookEvent & { content: UsageFileIngestedContent },
  ) => Promise<void>;

  onVariantCreated?: (
    event: WebhookEvent & { content: VariantCreatedContent },
  ) => Promise<void>;

  onVariantDeleted?: (
    event: WebhookEvent & { content: VariantDeletedContent },
  ) => Promise<void>;

  onVariantUpdated?: (
    event: WebhookEvent & { content: VariantUpdatedContent },
  ) => Promise<void>;

  onVirtualBankAccountAdded?: (
    event: WebhookEvent & { content: VirtualBankAccountAddedContent },
  ) => Promise<void>;

  onVirtualBankAccountDeleted?: (
    event: WebhookEvent & { content: VirtualBankAccountDeletedContent },
  ) => Promise<void>;

  onVirtualBankAccountUpdated?: (
    event: WebhookEvent & { content: VirtualBankAccountUpdatedContent },
  ) => Promise<void>;

  onVoucherCreateFailed?: (
    event: WebhookEvent & { content: VoucherCreateFailedContent },
  ) => Promise<void>;

  onVoucherCreated?: (
    event: WebhookEvent & { content: VoucherCreatedContent },
  ) => Promise<void>;

  onVoucherExpired?: (
    event: WebhookEvent & { content: VoucherExpiredContent },
  ) => Promise<void>;
}

export class WebhookHandler {
  private _handlers: WebhookHandlers = {};

  /**
   * Optional callback for unhandled events.
   */
  onUnhandledEvent?: (event: WebhookEvent) => Promise<void>;

  /**
   * Optional callback for errors during processing.
   */
  onError?: (error: any) => void;

  /**
   * Optional validator for request headers.
   */
  requestValidator?: (
    headers: Record<string, string | string[] | undefined>,
  ) => void;

  constructor(handlers: WebhookHandlers = {}) {
    this._handlers = handlers;
  }

  set onAddUsagesReminder(
    handler:
      | ((
          event: WebhookEvent & { content: AddUsagesReminderContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onAddUsagesReminder = handler;
  }

  get onAddUsagesReminder() {
    return this._handlers.onAddUsagesReminder;
  }

  set onAddonCreated(
    handler:
      | ((
          event: WebhookEvent & { content: AddonCreatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onAddonCreated = handler;
  }

  get onAddonCreated() {
    return this._handlers.onAddonCreated;
  }

  set onAddonDeleted(
    handler:
      | ((
          event: WebhookEvent & { content: AddonDeletedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onAddonDeleted = handler;
  }

  get onAddonDeleted() {
    return this._handlers.onAddonDeleted;
  }

  set onAddonUpdated(
    handler:
      | ((
          event: WebhookEvent & { content: AddonUpdatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onAddonUpdated = handler;
  }

  get onAddonUpdated() {
    return this._handlers.onAddonUpdated;
  }

  set onAttachedItemCreated(
    handler:
      | ((
          event: WebhookEvent & { content: AttachedItemCreatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onAttachedItemCreated = handler;
  }

  get onAttachedItemCreated() {
    return this._handlers.onAttachedItemCreated;
  }

  set onAttachedItemDeleted(
    handler:
      | ((
          event: WebhookEvent & { content: AttachedItemDeletedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onAttachedItemDeleted = handler;
  }

  get onAttachedItemDeleted() {
    return this._handlers.onAttachedItemDeleted;
  }

  set onAttachedItemUpdated(
    handler:
      | ((
          event: WebhookEvent & { content: AttachedItemUpdatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onAttachedItemUpdated = handler;
  }

  get onAttachedItemUpdated() {
    return this._handlers.onAttachedItemUpdated;
  }

  set onAuthorizationSucceeded(
    handler:
      | ((
          event: WebhookEvent & { content: AuthorizationSucceededContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onAuthorizationSucceeded = handler;
  }

  get onAuthorizationSucceeded() {
    return this._handlers.onAuthorizationSucceeded;
  }

  set onAuthorizationVoided(
    handler:
      | ((
          event: WebhookEvent & { content: AuthorizationVoidedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onAuthorizationVoided = handler;
  }

  get onAuthorizationVoided() {
    return this._handlers.onAuthorizationVoided;
  }

  set onBusinessEntityCreated(
    handler:
      | ((
          event: WebhookEvent & { content: BusinessEntityCreatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onBusinessEntityCreated = handler;
  }

  get onBusinessEntityCreated() {
    return this._handlers.onBusinessEntityCreated;
  }

  set onBusinessEntityDeleted(
    handler:
      | ((
          event: WebhookEvent & { content: BusinessEntityDeletedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onBusinessEntityDeleted = handler;
  }

  get onBusinessEntityDeleted() {
    return this._handlers.onBusinessEntityDeleted;
  }

  set onBusinessEntityUpdated(
    handler:
      | ((
          event: WebhookEvent & { content: BusinessEntityUpdatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onBusinessEntityUpdated = handler;
  }

  get onBusinessEntityUpdated() {
    return this._handlers.onBusinessEntityUpdated;
  }

  set onCardAdded(
    handler:
      | ((event: WebhookEvent & { content: CardAddedContent }) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onCardAdded = handler;
  }

  get onCardAdded() {
    return this._handlers.onCardAdded;
  }

  set onCardDeleted(
    handler:
      | ((
          event: WebhookEvent & { content: CardDeletedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onCardDeleted = handler;
  }

  get onCardDeleted() {
    return this._handlers.onCardDeleted;
  }

  set onCardExpired(
    handler:
      | ((
          event: WebhookEvent & { content: CardExpiredContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onCardExpired = handler;
  }

  get onCardExpired() {
    return this._handlers.onCardExpired;
  }

  set onCardExpiryReminder(
    handler:
      | ((
          event: WebhookEvent & { content: CardExpiryReminderContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onCardExpiryReminder = handler;
  }

  get onCardExpiryReminder() {
    return this._handlers.onCardExpiryReminder;
  }

  set onCardUpdated(
    handler:
      | ((
          event: WebhookEvent & { content: CardUpdatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onCardUpdated = handler;
  }

  get onCardUpdated() {
    return this._handlers.onCardUpdated;
  }

  set onContractTermCancelled(
    handler:
      | ((
          event: WebhookEvent & { content: ContractTermCancelledContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onContractTermCancelled = handler;
  }

  get onContractTermCancelled() {
    return this._handlers.onContractTermCancelled;
  }

  set onContractTermCompleted(
    handler:
      | ((
          event: WebhookEvent & { content: ContractTermCompletedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onContractTermCompleted = handler;
  }

  get onContractTermCompleted() {
    return this._handlers.onContractTermCompleted;
  }

  set onContractTermCreated(
    handler:
      | ((
          event: WebhookEvent & { content: ContractTermCreatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onContractTermCreated = handler;
  }

  get onContractTermCreated() {
    return this._handlers.onContractTermCreated;
  }

  set onContractTermRenewed(
    handler:
      | ((
          event: WebhookEvent & { content: ContractTermRenewedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onContractTermRenewed = handler;
  }

  get onContractTermRenewed() {
    return this._handlers.onContractTermRenewed;
  }

  set onContractTermTerminated(
    handler:
      | ((
          event: WebhookEvent & { content: ContractTermTerminatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onContractTermTerminated = handler;
  }

  get onContractTermTerminated() {
    return this._handlers.onContractTermTerminated;
  }

  set onCouponCodesAdded(
    handler:
      | ((
          event: WebhookEvent & { content: CouponCodesAddedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onCouponCodesAdded = handler;
  }

  get onCouponCodesAdded() {
    return this._handlers.onCouponCodesAdded;
  }

  set onCouponCodesDeleted(
    handler:
      | ((
          event: WebhookEvent & { content: CouponCodesDeletedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onCouponCodesDeleted = handler;
  }

  get onCouponCodesDeleted() {
    return this._handlers.onCouponCodesDeleted;
  }

  set onCouponCodesUpdated(
    handler:
      | ((
          event: WebhookEvent & { content: CouponCodesUpdatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onCouponCodesUpdated = handler;
  }

  get onCouponCodesUpdated() {
    return this._handlers.onCouponCodesUpdated;
  }

  set onCouponCreated(
    handler:
      | ((
          event: WebhookEvent & { content: CouponCreatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onCouponCreated = handler;
  }

  get onCouponCreated() {
    return this._handlers.onCouponCreated;
  }

  set onCouponDeleted(
    handler:
      | ((
          event: WebhookEvent & { content: CouponDeletedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onCouponDeleted = handler;
  }

  get onCouponDeleted() {
    return this._handlers.onCouponDeleted;
  }

  set onCouponSetCreated(
    handler:
      | ((
          event: WebhookEvent & { content: CouponSetCreatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onCouponSetCreated = handler;
  }

  get onCouponSetCreated() {
    return this._handlers.onCouponSetCreated;
  }

  set onCouponSetDeleted(
    handler:
      | ((
          event: WebhookEvent & { content: CouponSetDeletedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onCouponSetDeleted = handler;
  }

  get onCouponSetDeleted() {
    return this._handlers.onCouponSetDeleted;
  }

  set onCouponSetUpdated(
    handler:
      | ((
          event: WebhookEvent & { content: CouponSetUpdatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onCouponSetUpdated = handler;
  }

  get onCouponSetUpdated() {
    return this._handlers.onCouponSetUpdated;
  }

  set onCouponUpdated(
    handler:
      | ((
          event: WebhookEvent & { content: CouponUpdatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onCouponUpdated = handler;
  }

  get onCouponUpdated() {
    return this._handlers.onCouponUpdated;
  }

  set onCreditNoteCreated(
    handler:
      | ((
          event: WebhookEvent & { content: CreditNoteCreatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onCreditNoteCreated = handler;
  }

  get onCreditNoteCreated() {
    return this._handlers.onCreditNoteCreated;
  }

  set onCreditNoteCreatedWithBackdating(
    handler:
      | ((
          event: WebhookEvent & {
            content: CreditNoteCreatedWithBackdatingContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onCreditNoteCreatedWithBackdating = handler;
  }

  get onCreditNoteCreatedWithBackdating() {
    return this._handlers.onCreditNoteCreatedWithBackdating;
  }

  set onCreditNoteDeleted(
    handler:
      | ((
          event: WebhookEvent & { content: CreditNoteDeletedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onCreditNoteDeleted = handler;
  }

  get onCreditNoteDeleted() {
    return this._handlers.onCreditNoteDeleted;
  }

  set onCreditNoteUpdated(
    handler:
      | ((
          event: WebhookEvent & { content: CreditNoteUpdatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onCreditNoteUpdated = handler;
  }

  get onCreditNoteUpdated() {
    return this._handlers.onCreditNoteUpdated;
  }

  set onCustomerBusinessEntityChanged(
    handler:
      | ((
          event: WebhookEvent & {
            content: CustomerBusinessEntityChangedContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onCustomerBusinessEntityChanged = handler;
  }

  get onCustomerBusinessEntityChanged() {
    return this._handlers.onCustomerBusinessEntityChanged;
  }

  set onCustomerChanged(
    handler:
      | ((
          event: WebhookEvent & { content: CustomerChangedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onCustomerChanged = handler;
  }

  get onCustomerChanged() {
    return this._handlers.onCustomerChanged;
  }

  set onCustomerCreated(
    handler:
      | ((
          event: WebhookEvent & { content: CustomerCreatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onCustomerCreated = handler;
  }

  get onCustomerCreated() {
    return this._handlers.onCustomerCreated;
  }

  set onCustomerDeleted(
    handler:
      | ((
          event: WebhookEvent & { content: CustomerDeletedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onCustomerDeleted = handler;
  }

  get onCustomerDeleted() {
    return this._handlers.onCustomerDeleted;
  }

  set onCustomerEntitlementsUpdated(
    handler:
      | ((
          event: WebhookEvent & { content: CustomerEntitlementsUpdatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onCustomerEntitlementsUpdated = handler;
  }

  get onCustomerEntitlementsUpdated() {
    return this._handlers.onCustomerEntitlementsUpdated;
  }

  set onCustomerMovedIn(
    handler:
      | ((
          event: WebhookEvent & { content: CustomerMovedInContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onCustomerMovedIn = handler;
  }

  get onCustomerMovedIn() {
    return this._handlers.onCustomerMovedIn;
  }

  set onCustomerMovedOut(
    handler:
      | ((
          event: WebhookEvent & { content: CustomerMovedOutContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onCustomerMovedOut = handler;
  }

  get onCustomerMovedOut() {
    return this._handlers.onCustomerMovedOut;
  }

  set onDifferentialPriceCreated(
    handler:
      | ((
          event: WebhookEvent & { content: DifferentialPriceCreatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onDifferentialPriceCreated = handler;
  }

  get onDifferentialPriceCreated() {
    return this._handlers.onDifferentialPriceCreated;
  }

  set onDifferentialPriceDeleted(
    handler:
      | ((
          event: WebhookEvent & { content: DifferentialPriceDeletedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onDifferentialPriceDeleted = handler;
  }

  get onDifferentialPriceDeleted() {
    return this._handlers.onDifferentialPriceDeleted;
  }

  set onDifferentialPriceUpdated(
    handler:
      | ((
          event: WebhookEvent & { content: DifferentialPriceUpdatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onDifferentialPriceUpdated = handler;
  }

  get onDifferentialPriceUpdated() {
    return this._handlers.onDifferentialPriceUpdated;
  }

  set onDunningUpdated(
    handler:
      | ((
          event: WebhookEvent & { content: DunningUpdatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onDunningUpdated = handler;
  }

  get onDunningUpdated() {
    return this._handlers.onDunningUpdated;
  }

  set onEntitlementOverridesAutoRemoved(
    handler:
      | ((
          event: WebhookEvent & {
            content: EntitlementOverridesAutoRemovedContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onEntitlementOverridesAutoRemoved = handler;
  }

  get onEntitlementOverridesAutoRemoved() {
    return this._handlers.onEntitlementOverridesAutoRemoved;
  }

  set onEntitlementOverridesRemoved(
    handler:
      | ((
          event: WebhookEvent & { content: EntitlementOverridesRemovedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onEntitlementOverridesRemoved = handler;
  }

  get onEntitlementOverridesRemoved() {
    return this._handlers.onEntitlementOverridesRemoved;
  }

  set onEntitlementOverridesUpdated(
    handler:
      | ((
          event: WebhookEvent & { content: EntitlementOverridesUpdatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onEntitlementOverridesUpdated = handler;
  }

  get onEntitlementOverridesUpdated() {
    return this._handlers.onEntitlementOverridesUpdated;
  }

  set onFeatureActivated(
    handler:
      | ((
          event: WebhookEvent & { content: FeatureActivatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onFeatureActivated = handler;
  }

  get onFeatureActivated() {
    return this._handlers.onFeatureActivated;
  }

  set onFeatureArchived(
    handler:
      | ((
          event: WebhookEvent & { content: FeatureArchivedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onFeatureArchived = handler;
  }

  get onFeatureArchived() {
    return this._handlers.onFeatureArchived;
  }

  set onFeatureCreated(
    handler:
      | ((
          event: WebhookEvent & { content: FeatureCreatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onFeatureCreated = handler;
  }

  get onFeatureCreated() {
    return this._handlers.onFeatureCreated;
  }

  set onFeatureDeleted(
    handler:
      | ((
          event: WebhookEvent & { content: FeatureDeletedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onFeatureDeleted = handler;
  }

  get onFeatureDeleted() {
    return this._handlers.onFeatureDeleted;
  }

  set onFeatureReactivated(
    handler:
      | ((
          event: WebhookEvent & { content: FeatureReactivatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onFeatureReactivated = handler;
  }

  get onFeatureReactivated() {
    return this._handlers.onFeatureReactivated;
  }

  set onFeatureUpdated(
    handler:
      | ((
          event: WebhookEvent & { content: FeatureUpdatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onFeatureUpdated = handler;
  }

  get onFeatureUpdated() {
    return this._handlers.onFeatureUpdated;
  }

  set onGiftCancelled(
    handler:
      | ((
          event: WebhookEvent & { content: GiftCancelledContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onGiftCancelled = handler;
  }

  get onGiftCancelled() {
    return this._handlers.onGiftCancelled;
  }

  set onGiftClaimed(
    handler:
      | ((
          event: WebhookEvent & { content: GiftClaimedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onGiftClaimed = handler;
  }

  get onGiftClaimed() {
    return this._handlers.onGiftClaimed;
  }

  set onGiftExpired(
    handler:
      | ((
          event: WebhookEvent & { content: GiftExpiredContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onGiftExpired = handler;
  }

  get onGiftExpired() {
    return this._handlers.onGiftExpired;
  }

  set onGiftScheduled(
    handler:
      | ((
          event: WebhookEvent & { content: GiftScheduledContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onGiftScheduled = handler;
  }

  get onGiftScheduled() {
    return this._handlers.onGiftScheduled;
  }

  set onGiftUnclaimed(
    handler:
      | ((
          event: WebhookEvent & { content: GiftUnclaimedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onGiftUnclaimed = handler;
  }

  get onGiftUnclaimed() {
    return this._handlers.onGiftUnclaimed;
  }

  set onGiftUpdated(
    handler:
      | ((
          event: WebhookEvent & { content: GiftUpdatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onGiftUpdated = handler;
  }

  get onGiftUpdated() {
    return this._handlers.onGiftUpdated;
  }

  set onHierarchyCreated(
    handler:
      | ((
          event: WebhookEvent & { content: HierarchyCreatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onHierarchyCreated = handler;
  }

  get onHierarchyCreated() {
    return this._handlers.onHierarchyCreated;
  }

  set onHierarchyDeleted(
    handler:
      | ((
          event: WebhookEvent & { content: HierarchyDeletedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onHierarchyDeleted = handler;
  }

  get onHierarchyDeleted() {
    return this._handlers.onHierarchyDeleted;
  }

  set onInvoiceDeleted(
    handler:
      | ((
          event: WebhookEvent & { content: InvoiceDeletedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onInvoiceDeleted = handler;
  }

  get onInvoiceDeleted() {
    return this._handlers.onInvoiceDeleted;
  }

  set onInvoiceGenerated(
    handler:
      | ((
          event: WebhookEvent & { content: InvoiceGeneratedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onInvoiceGenerated = handler;
  }

  get onInvoiceGenerated() {
    return this._handlers.onInvoiceGenerated;
  }

  set onInvoiceGeneratedWithBackdating(
    handler:
      | ((
          event: WebhookEvent & {
            content: InvoiceGeneratedWithBackdatingContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onInvoiceGeneratedWithBackdating = handler;
  }

  get onInvoiceGeneratedWithBackdating() {
    return this._handlers.onInvoiceGeneratedWithBackdating;
  }

  set onInvoiceUpdated(
    handler:
      | ((
          event: WebhookEvent & { content: InvoiceUpdatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onInvoiceUpdated = handler;
  }

  get onInvoiceUpdated() {
    return this._handlers.onInvoiceUpdated;
  }

  set onItemCreated(
    handler:
      | ((
          event: WebhookEvent & { content: ItemCreatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onItemCreated = handler;
  }

  get onItemCreated() {
    return this._handlers.onItemCreated;
  }

  set onItemDeleted(
    handler:
      | ((
          event: WebhookEvent & { content: ItemDeletedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onItemDeleted = handler;
  }

  get onItemDeleted() {
    return this._handlers.onItemDeleted;
  }

  set onItemEntitlementsRemoved(
    handler:
      | ((
          event: WebhookEvent & { content: ItemEntitlementsRemovedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onItemEntitlementsRemoved = handler;
  }

  get onItemEntitlementsRemoved() {
    return this._handlers.onItemEntitlementsRemoved;
  }

  set onItemEntitlementsUpdated(
    handler:
      | ((
          event: WebhookEvent & { content: ItemEntitlementsUpdatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onItemEntitlementsUpdated = handler;
  }

  get onItemEntitlementsUpdated() {
    return this._handlers.onItemEntitlementsUpdated;
  }

  set onItemFamilyCreated(
    handler:
      | ((
          event: WebhookEvent & { content: ItemFamilyCreatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onItemFamilyCreated = handler;
  }

  get onItemFamilyCreated() {
    return this._handlers.onItemFamilyCreated;
  }

  set onItemFamilyDeleted(
    handler:
      | ((
          event: WebhookEvent & { content: ItemFamilyDeletedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onItemFamilyDeleted = handler;
  }

  get onItemFamilyDeleted() {
    return this._handlers.onItemFamilyDeleted;
  }

  set onItemFamilyUpdated(
    handler:
      | ((
          event: WebhookEvent & { content: ItemFamilyUpdatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onItemFamilyUpdated = handler;
  }

  get onItemFamilyUpdated() {
    return this._handlers.onItemFamilyUpdated;
  }

  set onItemPriceCreated(
    handler:
      | ((
          event: WebhookEvent & { content: ItemPriceCreatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onItemPriceCreated = handler;
  }

  get onItemPriceCreated() {
    return this._handlers.onItemPriceCreated;
  }

  set onItemPriceDeleted(
    handler:
      | ((
          event: WebhookEvent & { content: ItemPriceDeletedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onItemPriceDeleted = handler;
  }

  get onItemPriceDeleted() {
    return this._handlers.onItemPriceDeleted;
  }

  set onItemPriceEntitlementsRemoved(
    handler:
      | ((
          event: WebhookEvent & {
            content: ItemPriceEntitlementsRemovedContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onItemPriceEntitlementsRemoved = handler;
  }

  get onItemPriceEntitlementsRemoved() {
    return this._handlers.onItemPriceEntitlementsRemoved;
  }

  set onItemPriceEntitlementsUpdated(
    handler:
      | ((
          event: WebhookEvent & {
            content: ItemPriceEntitlementsUpdatedContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onItemPriceEntitlementsUpdated = handler;
  }

  get onItemPriceEntitlementsUpdated() {
    return this._handlers.onItemPriceEntitlementsUpdated;
  }

  set onItemPriceUpdated(
    handler:
      | ((
          event: WebhookEvent & { content: ItemPriceUpdatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onItemPriceUpdated = handler;
  }

  get onItemPriceUpdated() {
    return this._handlers.onItemPriceUpdated;
  }

  set onItemUpdated(
    handler:
      | ((
          event: WebhookEvent & { content: ItemUpdatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onItemUpdated = handler;
  }

  get onItemUpdated() {
    return this._handlers.onItemUpdated;
  }

  set onMrrUpdated(
    handler:
      | ((
          event: WebhookEvent & { content: MrrUpdatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onMrrUpdated = handler;
  }

  get onMrrUpdated() {
    return this._handlers.onMrrUpdated;
  }

  set onNetdPaymentDueReminder(
    handler:
      | ((
          event: WebhookEvent & { content: NetdPaymentDueReminderContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onNetdPaymentDueReminder = handler;
  }

  get onNetdPaymentDueReminder() {
    return this._handlers.onNetdPaymentDueReminder;
  }

  set onOmnichannelOneTimeOrderCreated(
    handler:
      | ((
          event: WebhookEvent & {
            content: OmnichannelOneTimeOrderCreatedContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onOmnichannelOneTimeOrderCreated = handler;
  }

  get onOmnichannelOneTimeOrderCreated() {
    return this._handlers.onOmnichannelOneTimeOrderCreated;
  }

  set onOmnichannelOneTimeOrderItemCancelled(
    handler:
      | ((
          event: WebhookEvent & {
            content: OmnichannelOneTimeOrderItemCancelledContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onOmnichannelOneTimeOrderItemCancelled = handler;
  }

  get onOmnichannelOneTimeOrderItemCancelled() {
    return this._handlers.onOmnichannelOneTimeOrderItemCancelled;
  }

  set onOmnichannelSubscriptionCreated(
    handler:
      | ((
          event: WebhookEvent & {
            content: OmnichannelSubscriptionCreatedContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onOmnichannelSubscriptionCreated = handler;
  }

  get onOmnichannelSubscriptionCreated() {
    return this._handlers.onOmnichannelSubscriptionCreated;
  }

  set onOmnichannelSubscriptionImported(
    handler:
      | ((
          event: WebhookEvent & {
            content: OmnichannelSubscriptionImportedContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onOmnichannelSubscriptionImported = handler;
  }

  get onOmnichannelSubscriptionImported() {
    return this._handlers.onOmnichannelSubscriptionImported;
  }

  set onOmnichannelSubscriptionItemCancellationScheduled(
    handler:
      | ((
          event: WebhookEvent & {
            content: OmnichannelSubscriptionItemCancellationScheduledContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onOmnichannelSubscriptionItemCancellationScheduled = handler;
  }

  get onOmnichannelSubscriptionItemCancellationScheduled() {
    return this._handlers.onOmnichannelSubscriptionItemCancellationScheduled;
  }

  set onOmnichannelSubscriptionItemCancelled(
    handler:
      | ((
          event: WebhookEvent & {
            content: OmnichannelSubscriptionItemCancelledContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onOmnichannelSubscriptionItemCancelled = handler;
  }

  get onOmnichannelSubscriptionItemCancelled() {
    return this._handlers.onOmnichannelSubscriptionItemCancelled;
  }

  set onOmnichannelSubscriptionItemChangeScheduled(
    handler:
      | ((
          event: WebhookEvent & {
            content: OmnichannelSubscriptionItemChangeScheduledContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onOmnichannelSubscriptionItemChangeScheduled = handler;
  }

  get onOmnichannelSubscriptionItemChangeScheduled() {
    return this._handlers.onOmnichannelSubscriptionItemChangeScheduled;
  }

  set onOmnichannelSubscriptionItemChanged(
    handler:
      | ((
          event: WebhookEvent & {
            content: OmnichannelSubscriptionItemChangedContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onOmnichannelSubscriptionItemChanged = handler;
  }

  get onOmnichannelSubscriptionItemChanged() {
    return this._handlers.onOmnichannelSubscriptionItemChanged;
  }

  set onOmnichannelSubscriptionItemDowngradeScheduled(
    handler:
      | ((
          event: WebhookEvent & {
            content: OmnichannelSubscriptionItemDowngradeScheduledContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onOmnichannelSubscriptionItemDowngradeScheduled = handler;
  }

  get onOmnichannelSubscriptionItemDowngradeScheduled() {
    return this._handlers.onOmnichannelSubscriptionItemDowngradeScheduled;
  }

  set onOmnichannelSubscriptionItemDowngraded(
    handler:
      | ((
          event: WebhookEvent & {
            content: OmnichannelSubscriptionItemDowngradedContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onOmnichannelSubscriptionItemDowngraded = handler;
  }

  get onOmnichannelSubscriptionItemDowngraded() {
    return this._handlers.onOmnichannelSubscriptionItemDowngraded;
  }

  set onOmnichannelSubscriptionItemDunningExpired(
    handler:
      | ((
          event: WebhookEvent & {
            content: OmnichannelSubscriptionItemDunningExpiredContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onOmnichannelSubscriptionItemDunningExpired = handler;
  }

  get onOmnichannelSubscriptionItemDunningExpired() {
    return this._handlers.onOmnichannelSubscriptionItemDunningExpired;
  }

  set onOmnichannelSubscriptionItemDunningStarted(
    handler:
      | ((
          event: WebhookEvent & {
            content: OmnichannelSubscriptionItemDunningStartedContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onOmnichannelSubscriptionItemDunningStarted = handler;
  }

  get onOmnichannelSubscriptionItemDunningStarted() {
    return this._handlers.onOmnichannelSubscriptionItemDunningStarted;
  }

  set onOmnichannelSubscriptionItemExpired(
    handler:
      | ((
          event: WebhookEvent & {
            content: OmnichannelSubscriptionItemExpiredContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onOmnichannelSubscriptionItemExpired = handler;
  }

  get onOmnichannelSubscriptionItemExpired() {
    return this._handlers.onOmnichannelSubscriptionItemExpired;
  }

  set onOmnichannelSubscriptionItemGracePeriodExpired(
    handler:
      | ((
          event: WebhookEvent & {
            content: OmnichannelSubscriptionItemGracePeriodExpiredContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onOmnichannelSubscriptionItemGracePeriodExpired = handler;
  }

  get onOmnichannelSubscriptionItemGracePeriodExpired() {
    return this._handlers.onOmnichannelSubscriptionItemGracePeriodExpired;
  }

  set onOmnichannelSubscriptionItemGracePeriodStarted(
    handler:
      | ((
          event: WebhookEvent & {
            content: OmnichannelSubscriptionItemGracePeriodStartedContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onOmnichannelSubscriptionItemGracePeriodStarted = handler;
  }

  get onOmnichannelSubscriptionItemGracePeriodStarted() {
    return this._handlers.onOmnichannelSubscriptionItemGracePeriodStarted;
  }

  set onOmnichannelSubscriptionItemPauseScheduled(
    handler:
      | ((
          event: WebhookEvent & {
            content: OmnichannelSubscriptionItemPauseScheduledContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onOmnichannelSubscriptionItemPauseScheduled = handler;
  }

  get onOmnichannelSubscriptionItemPauseScheduled() {
    return this._handlers.onOmnichannelSubscriptionItemPauseScheduled;
  }

  set onOmnichannelSubscriptionItemPaused(
    handler:
      | ((
          event: WebhookEvent & {
            content: OmnichannelSubscriptionItemPausedContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onOmnichannelSubscriptionItemPaused = handler;
  }

  get onOmnichannelSubscriptionItemPaused() {
    return this._handlers.onOmnichannelSubscriptionItemPaused;
  }

  set onOmnichannelSubscriptionItemReactivated(
    handler:
      | ((
          event: WebhookEvent & {
            content: OmnichannelSubscriptionItemReactivatedContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onOmnichannelSubscriptionItemReactivated = handler;
  }

  get onOmnichannelSubscriptionItemReactivated() {
    return this._handlers.onOmnichannelSubscriptionItemReactivated;
  }

  set onOmnichannelSubscriptionItemRenewed(
    handler:
      | ((
          event: WebhookEvent & {
            content: OmnichannelSubscriptionItemRenewedContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onOmnichannelSubscriptionItemRenewed = handler;
  }

  get onOmnichannelSubscriptionItemRenewed() {
    return this._handlers.onOmnichannelSubscriptionItemRenewed;
  }

  set onOmnichannelSubscriptionItemResubscribed(
    handler:
      | ((
          event: WebhookEvent & {
            content: OmnichannelSubscriptionItemResubscribedContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onOmnichannelSubscriptionItemResubscribed = handler;
  }

  get onOmnichannelSubscriptionItemResubscribed() {
    return this._handlers.onOmnichannelSubscriptionItemResubscribed;
  }

  set onOmnichannelSubscriptionItemResumed(
    handler:
      | ((
          event: WebhookEvent & {
            content: OmnichannelSubscriptionItemResumedContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onOmnichannelSubscriptionItemResumed = handler;
  }

  get onOmnichannelSubscriptionItemResumed() {
    return this._handlers.onOmnichannelSubscriptionItemResumed;
  }

  set onOmnichannelSubscriptionItemScheduledCancellationRemoved(
    handler:
      | ((
          event: WebhookEvent & {
            content: OmnichannelSubscriptionItemScheduledCancellationRemovedContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onOmnichannelSubscriptionItemScheduledCancellationRemoved =
      handler;
  }

  get onOmnichannelSubscriptionItemScheduledCancellationRemoved() {
    return this._handlers
      .onOmnichannelSubscriptionItemScheduledCancellationRemoved;
  }

  set onOmnichannelSubscriptionItemScheduledChangeRemoved(
    handler:
      | ((
          event: WebhookEvent & {
            content: OmnichannelSubscriptionItemScheduledChangeRemovedContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onOmnichannelSubscriptionItemScheduledChangeRemoved =
      handler;
  }

  get onOmnichannelSubscriptionItemScheduledChangeRemoved() {
    return this._handlers.onOmnichannelSubscriptionItemScheduledChangeRemoved;
  }

  set onOmnichannelSubscriptionItemScheduledDowngradeRemoved(
    handler:
      | ((
          event: WebhookEvent & {
            content: OmnichannelSubscriptionItemScheduledDowngradeRemovedContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onOmnichannelSubscriptionItemScheduledDowngradeRemoved =
      handler;
  }

  get onOmnichannelSubscriptionItemScheduledDowngradeRemoved() {
    return this._handlers
      .onOmnichannelSubscriptionItemScheduledDowngradeRemoved;
  }

  set onOmnichannelSubscriptionItemUpgraded(
    handler:
      | ((
          event: WebhookEvent & {
            content: OmnichannelSubscriptionItemUpgradedContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onOmnichannelSubscriptionItemUpgraded = handler;
  }

  get onOmnichannelSubscriptionItemUpgraded() {
    return this._handlers.onOmnichannelSubscriptionItemUpgraded;
  }

  set onOmnichannelSubscriptionMovedIn(
    handler:
      | ((
          event: WebhookEvent & {
            content: OmnichannelSubscriptionMovedInContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onOmnichannelSubscriptionMovedIn = handler;
  }

  get onOmnichannelSubscriptionMovedIn() {
    return this._handlers.onOmnichannelSubscriptionMovedIn;
  }

  set onOmnichannelTransactionCreated(
    handler:
      | ((
          event: WebhookEvent & {
            content: OmnichannelTransactionCreatedContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onOmnichannelTransactionCreated = handler;
  }

  get onOmnichannelTransactionCreated() {
    return this._handlers.onOmnichannelTransactionCreated;
  }

  set onOrderCancelled(
    handler:
      | ((
          event: WebhookEvent & { content: OrderCancelledContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onOrderCancelled = handler;
  }

  get onOrderCancelled() {
    return this._handlers.onOrderCancelled;
  }

  set onOrderCreated(
    handler:
      | ((
          event: WebhookEvent & { content: OrderCreatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onOrderCreated = handler;
  }

  get onOrderCreated() {
    return this._handlers.onOrderCreated;
  }

  set onOrderDeleted(
    handler:
      | ((
          event: WebhookEvent & { content: OrderDeletedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onOrderDeleted = handler;
  }

  get onOrderDeleted() {
    return this._handlers.onOrderDeleted;
  }

  set onOrderDelivered(
    handler:
      | ((
          event: WebhookEvent & { content: OrderDeliveredContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onOrderDelivered = handler;
  }

  get onOrderDelivered() {
    return this._handlers.onOrderDelivered;
  }

  set onOrderReadyToProcess(
    handler:
      | ((
          event: WebhookEvent & { content: OrderReadyToProcessContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onOrderReadyToProcess = handler;
  }

  get onOrderReadyToProcess() {
    return this._handlers.onOrderReadyToProcess;
  }

  set onOrderReadyToShip(
    handler:
      | ((
          event: WebhookEvent & { content: OrderReadyToShipContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onOrderReadyToShip = handler;
  }

  get onOrderReadyToShip() {
    return this._handlers.onOrderReadyToShip;
  }

  set onOrderResent(
    handler:
      | ((
          event: WebhookEvent & { content: OrderResentContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onOrderResent = handler;
  }

  get onOrderResent() {
    return this._handlers.onOrderResent;
  }

  set onOrderReturned(
    handler:
      | ((
          event: WebhookEvent & { content: OrderReturnedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onOrderReturned = handler;
  }

  get onOrderReturned() {
    return this._handlers.onOrderReturned;
  }

  set onOrderUpdated(
    handler:
      | ((
          event: WebhookEvent & { content: OrderUpdatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onOrderUpdated = handler;
  }

  get onOrderUpdated() {
    return this._handlers.onOrderUpdated;
  }

  set onPaymentFailed(
    handler:
      | ((
          event: WebhookEvent & { content: PaymentFailedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onPaymentFailed = handler;
  }

  get onPaymentFailed() {
    return this._handlers.onPaymentFailed;
  }

  set onPaymentInitiated(
    handler:
      | ((
          event: WebhookEvent & { content: PaymentInitiatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onPaymentInitiated = handler;
  }

  get onPaymentInitiated() {
    return this._handlers.onPaymentInitiated;
  }

  set onPaymentIntentCreated(
    handler:
      | ((
          event: WebhookEvent & { content: PaymentIntentCreatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onPaymentIntentCreated = handler;
  }

  get onPaymentIntentCreated() {
    return this._handlers.onPaymentIntentCreated;
  }

  set onPaymentIntentUpdated(
    handler:
      | ((
          event: WebhookEvent & { content: PaymentIntentUpdatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onPaymentIntentUpdated = handler;
  }

  get onPaymentIntentUpdated() {
    return this._handlers.onPaymentIntentUpdated;
  }

  set onPaymentRefunded(
    handler:
      | ((
          event: WebhookEvent & { content: PaymentRefundedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onPaymentRefunded = handler;
  }

  get onPaymentRefunded() {
    return this._handlers.onPaymentRefunded;
  }

  set onPaymentScheduleSchemeCreated(
    handler:
      | ((
          event: WebhookEvent & {
            content: PaymentScheduleSchemeCreatedContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onPaymentScheduleSchemeCreated = handler;
  }

  get onPaymentScheduleSchemeCreated() {
    return this._handlers.onPaymentScheduleSchemeCreated;
  }

  set onPaymentScheduleSchemeDeleted(
    handler:
      | ((
          event: WebhookEvent & {
            content: PaymentScheduleSchemeDeletedContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onPaymentScheduleSchemeDeleted = handler;
  }

  get onPaymentScheduleSchemeDeleted() {
    return this._handlers.onPaymentScheduleSchemeDeleted;
  }

  set onPaymentSchedulesCreated(
    handler:
      | ((
          event: WebhookEvent & { content: PaymentSchedulesCreatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onPaymentSchedulesCreated = handler;
  }

  get onPaymentSchedulesCreated() {
    return this._handlers.onPaymentSchedulesCreated;
  }

  set onPaymentSchedulesUpdated(
    handler:
      | ((
          event: WebhookEvent & { content: PaymentSchedulesUpdatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onPaymentSchedulesUpdated = handler;
  }

  get onPaymentSchedulesUpdated() {
    return this._handlers.onPaymentSchedulesUpdated;
  }

  set onPaymentSourceAdded(
    handler:
      | ((
          event: WebhookEvent & { content: PaymentSourceAddedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onPaymentSourceAdded = handler;
  }

  get onPaymentSourceAdded() {
    return this._handlers.onPaymentSourceAdded;
  }

  set onPaymentSourceDeleted(
    handler:
      | ((
          event: WebhookEvent & { content: PaymentSourceDeletedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onPaymentSourceDeleted = handler;
  }

  get onPaymentSourceDeleted() {
    return this._handlers.onPaymentSourceDeleted;
  }

  set onPaymentSourceExpired(
    handler:
      | ((
          event: WebhookEvent & { content: PaymentSourceExpiredContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onPaymentSourceExpired = handler;
  }

  get onPaymentSourceExpired() {
    return this._handlers.onPaymentSourceExpired;
  }

  set onPaymentSourceExpiring(
    handler:
      | ((
          event: WebhookEvent & { content: PaymentSourceExpiringContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onPaymentSourceExpiring = handler;
  }

  get onPaymentSourceExpiring() {
    return this._handlers.onPaymentSourceExpiring;
  }

  set onPaymentSourceLocallyDeleted(
    handler:
      | ((
          event: WebhookEvent & { content: PaymentSourceLocallyDeletedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onPaymentSourceLocallyDeleted = handler;
  }

  get onPaymentSourceLocallyDeleted() {
    return this._handlers.onPaymentSourceLocallyDeleted;
  }

  set onPaymentSourceUpdated(
    handler:
      | ((
          event: WebhookEvent & { content: PaymentSourceUpdatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onPaymentSourceUpdated = handler;
  }

  get onPaymentSourceUpdated() {
    return this._handlers.onPaymentSourceUpdated;
  }

  set onPaymentSucceeded(
    handler:
      | ((
          event: WebhookEvent & { content: PaymentSucceededContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onPaymentSucceeded = handler;
  }

  get onPaymentSucceeded() {
    return this._handlers.onPaymentSucceeded;
  }

  set onPendingInvoiceCreated(
    handler:
      | ((
          event: WebhookEvent & { content: PendingInvoiceCreatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onPendingInvoiceCreated = handler;
  }

  get onPendingInvoiceCreated() {
    return this._handlers.onPendingInvoiceCreated;
  }

  set onPendingInvoiceUpdated(
    handler:
      | ((
          event: WebhookEvent & { content: PendingInvoiceUpdatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onPendingInvoiceUpdated = handler;
  }

  get onPendingInvoiceUpdated() {
    return this._handlers.onPendingInvoiceUpdated;
  }

  set onPlanCreated(
    handler:
      | ((
          event: WebhookEvent & { content: PlanCreatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onPlanCreated = handler;
  }

  get onPlanCreated() {
    return this._handlers.onPlanCreated;
  }

  set onPlanDeleted(
    handler:
      | ((
          event: WebhookEvent & { content: PlanDeletedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onPlanDeleted = handler;
  }

  get onPlanDeleted() {
    return this._handlers.onPlanDeleted;
  }

  set onPlanUpdated(
    handler:
      | ((
          event: WebhookEvent & { content: PlanUpdatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onPlanUpdated = handler;
  }

  get onPlanUpdated() {
    return this._handlers.onPlanUpdated;
  }

  set onPriceVariantCreated(
    handler:
      | ((
          event: WebhookEvent & { content: PriceVariantCreatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onPriceVariantCreated = handler;
  }

  get onPriceVariantCreated() {
    return this._handlers.onPriceVariantCreated;
  }

  set onPriceVariantDeleted(
    handler:
      | ((
          event: WebhookEvent & { content: PriceVariantDeletedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onPriceVariantDeleted = handler;
  }

  get onPriceVariantDeleted() {
    return this._handlers.onPriceVariantDeleted;
  }

  set onPriceVariantUpdated(
    handler:
      | ((
          event: WebhookEvent & { content: PriceVariantUpdatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onPriceVariantUpdated = handler;
  }

  get onPriceVariantUpdated() {
    return this._handlers.onPriceVariantUpdated;
  }

  set onProductCreated(
    handler:
      | ((
          event: WebhookEvent & { content: ProductCreatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onProductCreated = handler;
  }

  get onProductCreated() {
    return this._handlers.onProductCreated;
  }

  set onProductDeleted(
    handler:
      | ((
          event: WebhookEvent & { content: ProductDeletedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onProductDeleted = handler;
  }

  get onProductDeleted() {
    return this._handlers.onProductDeleted;
  }

  set onProductUpdated(
    handler:
      | ((
          event: WebhookEvent & { content: ProductUpdatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onProductUpdated = handler;
  }

  get onProductUpdated() {
    return this._handlers.onProductUpdated;
  }

  set onPromotionalCreditsAdded(
    handler:
      | ((
          event: WebhookEvent & { content: PromotionalCreditsAddedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onPromotionalCreditsAdded = handler;
  }

  get onPromotionalCreditsAdded() {
    return this._handlers.onPromotionalCreditsAdded;
  }

  set onPromotionalCreditsDeducted(
    handler:
      | ((
          event: WebhookEvent & { content: PromotionalCreditsDeductedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onPromotionalCreditsDeducted = handler;
  }

  get onPromotionalCreditsDeducted() {
    return this._handlers.onPromotionalCreditsDeducted;
  }

  set onPurchaseCreated(
    handler:
      | ((
          event: WebhookEvent & { content: PurchaseCreatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onPurchaseCreated = handler;
  }

  get onPurchaseCreated() {
    return this._handlers.onPurchaseCreated;
  }

  set onQuoteCreated(
    handler:
      | ((
          event: WebhookEvent & { content: QuoteCreatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onQuoteCreated = handler;
  }

  get onQuoteCreated() {
    return this._handlers.onQuoteCreated;
  }

  set onQuoteDeleted(
    handler:
      | ((
          event: WebhookEvent & { content: QuoteDeletedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onQuoteDeleted = handler;
  }

  get onQuoteDeleted() {
    return this._handlers.onQuoteDeleted;
  }

  set onQuoteUpdated(
    handler:
      | ((
          event: WebhookEvent & { content: QuoteUpdatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onQuoteUpdated = handler;
  }

  get onQuoteUpdated() {
    return this._handlers.onQuoteUpdated;
  }

  set onRecordPurchaseFailed(
    handler:
      | ((
          event: WebhookEvent & { content: RecordPurchaseFailedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onRecordPurchaseFailed = handler;
  }

  get onRecordPurchaseFailed() {
    return this._handlers.onRecordPurchaseFailed;
  }

  set onRefundInitiated(
    handler:
      | ((
          event: WebhookEvent & { content: RefundInitiatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onRefundInitiated = handler;
  }

  get onRefundInitiated() {
    return this._handlers.onRefundInitiated;
  }

  set onRuleCreated(
    handler:
      | ((
          event: WebhookEvent & { content: RuleCreatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onRuleCreated = handler;
  }

  get onRuleCreated() {
    return this._handlers.onRuleCreated;
  }

  set onRuleDeleted(
    handler:
      | ((
          event: WebhookEvent & { content: RuleDeletedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onRuleDeleted = handler;
  }

  get onRuleDeleted() {
    return this._handlers.onRuleDeleted;
  }

  set onRuleUpdated(
    handler:
      | ((
          event: WebhookEvent & { content: RuleUpdatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onRuleUpdated = handler;
  }

  get onRuleUpdated() {
    return this._handlers.onRuleUpdated;
  }

  set onSalesOrderCreated(
    handler:
      | ((
          event: WebhookEvent & { content: SalesOrderCreatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onSalesOrderCreated = handler;
  }

  get onSalesOrderCreated() {
    return this._handlers.onSalesOrderCreated;
  }

  set onSalesOrderUpdated(
    handler:
      | ((
          event: WebhookEvent & { content: SalesOrderUpdatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onSalesOrderUpdated = handler;
  }

  get onSalesOrderUpdated() {
    return this._handlers.onSalesOrderUpdated;
  }

  set onSubscriptionActivated(
    handler:
      | ((
          event: WebhookEvent & { content: SubscriptionActivatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onSubscriptionActivated = handler;
  }

  get onSubscriptionActivated() {
    return this._handlers.onSubscriptionActivated;
  }

  set onSubscriptionActivatedWithBackdating(
    handler:
      | ((
          event: WebhookEvent & {
            content: SubscriptionActivatedWithBackdatingContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onSubscriptionActivatedWithBackdating = handler;
  }

  get onSubscriptionActivatedWithBackdating() {
    return this._handlers.onSubscriptionActivatedWithBackdating;
  }

  set onSubscriptionAdvanceInvoiceScheduleAdded(
    handler:
      | ((
          event: WebhookEvent & {
            content: SubscriptionAdvanceInvoiceScheduleAddedContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onSubscriptionAdvanceInvoiceScheduleAdded = handler;
  }

  get onSubscriptionAdvanceInvoiceScheduleAdded() {
    return this._handlers.onSubscriptionAdvanceInvoiceScheduleAdded;
  }

  set onSubscriptionAdvanceInvoiceScheduleRemoved(
    handler:
      | ((
          event: WebhookEvent & {
            content: SubscriptionAdvanceInvoiceScheduleRemovedContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onSubscriptionAdvanceInvoiceScheduleRemoved = handler;
  }

  get onSubscriptionAdvanceInvoiceScheduleRemoved() {
    return this._handlers.onSubscriptionAdvanceInvoiceScheduleRemoved;
  }

  set onSubscriptionAdvanceInvoiceScheduleUpdated(
    handler:
      | ((
          event: WebhookEvent & {
            content: SubscriptionAdvanceInvoiceScheduleUpdatedContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onSubscriptionAdvanceInvoiceScheduleUpdated = handler;
  }

  get onSubscriptionAdvanceInvoiceScheduleUpdated() {
    return this._handlers.onSubscriptionAdvanceInvoiceScheduleUpdated;
  }

  set onSubscriptionBusinessEntityChanged(
    handler:
      | ((
          event: WebhookEvent & {
            content: SubscriptionBusinessEntityChangedContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onSubscriptionBusinessEntityChanged = handler;
  }

  get onSubscriptionBusinessEntityChanged() {
    return this._handlers.onSubscriptionBusinessEntityChanged;
  }

  set onSubscriptionCanceledWithBackdating(
    handler:
      | ((
          event: WebhookEvent & {
            content: SubscriptionCanceledWithBackdatingContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onSubscriptionCanceledWithBackdating = handler;
  }

  get onSubscriptionCanceledWithBackdating() {
    return this._handlers.onSubscriptionCanceledWithBackdating;
  }

  set onSubscriptionCancellationReminder(
    handler:
      | ((
          event: WebhookEvent & {
            content: SubscriptionCancellationReminderContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onSubscriptionCancellationReminder = handler;
  }

  get onSubscriptionCancellationReminder() {
    return this._handlers.onSubscriptionCancellationReminder;
  }

  set onSubscriptionCancellationScheduled(
    handler:
      | ((
          event: WebhookEvent & {
            content: SubscriptionCancellationScheduledContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onSubscriptionCancellationScheduled = handler;
  }

  get onSubscriptionCancellationScheduled() {
    return this._handlers.onSubscriptionCancellationScheduled;
  }

  set onSubscriptionCancelled(
    handler:
      | ((
          event: WebhookEvent & { content: SubscriptionCancelledContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onSubscriptionCancelled = handler;
  }

  get onSubscriptionCancelled() {
    return this._handlers.onSubscriptionCancelled;
  }

  set onSubscriptionChanged(
    handler:
      | ((
          event: WebhookEvent & { content: SubscriptionChangedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onSubscriptionChanged = handler;
  }

  get onSubscriptionChanged() {
    return this._handlers.onSubscriptionChanged;
  }

  set onSubscriptionChangedWithBackdating(
    handler:
      | ((
          event: WebhookEvent & {
            content: SubscriptionChangedWithBackdatingContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onSubscriptionChangedWithBackdating = handler;
  }

  get onSubscriptionChangedWithBackdating() {
    return this._handlers.onSubscriptionChangedWithBackdating;
  }

  set onSubscriptionChangesScheduled(
    handler:
      | ((
          event: WebhookEvent & {
            content: SubscriptionChangesScheduledContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onSubscriptionChangesScheduled = handler;
  }

  get onSubscriptionChangesScheduled() {
    return this._handlers.onSubscriptionChangesScheduled;
  }

  set onSubscriptionCreated(
    handler:
      | ((
          event: WebhookEvent & { content: SubscriptionCreatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onSubscriptionCreated = handler;
  }

  get onSubscriptionCreated() {
    return this._handlers.onSubscriptionCreated;
  }

  set onSubscriptionCreatedWithBackdating(
    handler:
      | ((
          event: WebhookEvent & {
            content: SubscriptionCreatedWithBackdatingContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onSubscriptionCreatedWithBackdating = handler;
  }

  get onSubscriptionCreatedWithBackdating() {
    return this._handlers.onSubscriptionCreatedWithBackdating;
  }

  set onSubscriptionDeleted(
    handler:
      | ((
          event: WebhookEvent & { content: SubscriptionDeletedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onSubscriptionDeleted = handler;
  }

  get onSubscriptionDeleted() {
    return this._handlers.onSubscriptionDeleted;
  }

  set onSubscriptionEntitlementsCreated(
    handler:
      | ((
          event: WebhookEvent & {
            content: SubscriptionEntitlementsCreatedContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onSubscriptionEntitlementsCreated = handler;
  }

  get onSubscriptionEntitlementsCreated() {
    return this._handlers.onSubscriptionEntitlementsCreated;
  }

  set onSubscriptionEntitlementsUpdated(
    handler:
      | ((
          event: WebhookEvent & {
            content: SubscriptionEntitlementsUpdatedContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onSubscriptionEntitlementsUpdated = handler;
  }

  get onSubscriptionEntitlementsUpdated() {
    return this._handlers.onSubscriptionEntitlementsUpdated;
  }

  set onSubscriptionItemsRenewed(
    handler:
      | ((
          event: WebhookEvent & { content: SubscriptionItemsRenewedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onSubscriptionItemsRenewed = handler;
  }

  get onSubscriptionItemsRenewed() {
    return this._handlers.onSubscriptionItemsRenewed;
  }

  set onSubscriptionMovedIn(
    handler:
      | ((
          event: WebhookEvent & { content: SubscriptionMovedInContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onSubscriptionMovedIn = handler;
  }

  get onSubscriptionMovedIn() {
    return this._handlers.onSubscriptionMovedIn;
  }

  set onSubscriptionMovedOut(
    handler:
      | ((
          event: WebhookEvent & { content: SubscriptionMovedOutContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onSubscriptionMovedOut = handler;
  }

  get onSubscriptionMovedOut() {
    return this._handlers.onSubscriptionMovedOut;
  }

  set onSubscriptionMovementFailed(
    handler:
      | ((
          event: WebhookEvent & { content: SubscriptionMovementFailedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onSubscriptionMovementFailed = handler;
  }

  get onSubscriptionMovementFailed() {
    return this._handlers.onSubscriptionMovementFailed;
  }

  set onSubscriptionPauseScheduled(
    handler:
      | ((
          event: WebhookEvent & { content: SubscriptionPauseScheduledContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onSubscriptionPauseScheduled = handler;
  }

  get onSubscriptionPauseScheduled() {
    return this._handlers.onSubscriptionPauseScheduled;
  }

  set onSubscriptionPaused(
    handler:
      | ((
          event: WebhookEvent & { content: SubscriptionPausedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onSubscriptionPaused = handler;
  }

  get onSubscriptionPaused() {
    return this._handlers.onSubscriptionPaused;
  }

  set onSubscriptionRampApplied(
    handler:
      | ((
          event: WebhookEvent & { content: SubscriptionRampAppliedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onSubscriptionRampApplied = handler;
  }

  get onSubscriptionRampApplied() {
    return this._handlers.onSubscriptionRampApplied;
  }

  set onSubscriptionRampCreated(
    handler:
      | ((
          event: WebhookEvent & { content: SubscriptionRampCreatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onSubscriptionRampCreated = handler;
  }

  get onSubscriptionRampCreated() {
    return this._handlers.onSubscriptionRampCreated;
  }

  set onSubscriptionRampDeleted(
    handler:
      | ((
          event: WebhookEvent & { content: SubscriptionRampDeletedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onSubscriptionRampDeleted = handler;
  }

  get onSubscriptionRampDeleted() {
    return this._handlers.onSubscriptionRampDeleted;
  }

  set onSubscriptionRampDrafted(
    handler:
      | ((
          event: WebhookEvent & { content: SubscriptionRampDraftedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onSubscriptionRampDrafted = handler;
  }

  get onSubscriptionRampDrafted() {
    return this._handlers.onSubscriptionRampDrafted;
  }

  set onSubscriptionRampUpdated(
    handler:
      | ((
          event: WebhookEvent & { content: SubscriptionRampUpdatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onSubscriptionRampUpdated = handler;
  }

  get onSubscriptionRampUpdated() {
    return this._handlers.onSubscriptionRampUpdated;
  }

  set onSubscriptionReactivated(
    handler:
      | ((
          event: WebhookEvent & { content: SubscriptionReactivatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onSubscriptionReactivated = handler;
  }

  get onSubscriptionReactivated() {
    return this._handlers.onSubscriptionReactivated;
  }

  set onSubscriptionReactivatedWithBackdating(
    handler:
      | ((
          event: WebhookEvent & {
            content: SubscriptionReactivatedWithBackdatingContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onSubscriptionReactivatedWithBackdating = handler;
  }

  get onSubscriptionReactivatedWithBackdating() {
    return this._handlers.onSubscriptionReactivatedWithBackdating;
  }

  set onSubscriptionRenewalReminder(
    handler:
      | ((
          event: WebhookEvent & { content: SubscriptionRenewalReminderContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onSubscriptionRenewalReminder = handler;
  }

  get onSubscriptionRenewalReminder() {
    return this._handlers.onSubscriptionRenewalReminder;
  }

  set onSubscriptionRenewed(
    handler:
      | ((
          event: WebhookEvent & { content: SubscriptionRenewedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onSubscriptionRenewed = handler;
  }

  get onSubscriptionRenewed() {
    return this._handlers.onSubscriptionRenewed;
  }

  set onSubscriptionResumed(
    handler:
      | ((
          event: WebhookEvent & { content: SubscriptionResumedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onSubscriptionResumed = handler;
  }

  get onSubscriptionResumed() {
    return this._handlers.onSubscriptionResumed;
  }

  set onSubscriptionResumptionScheduled(
    handler:
      | ((
          event: WebhookEvent & {
            content: SubscriptionResumptionScheduledContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onSubscriptionResumptionScheduled = handler;
  }

  get onSubscriptionResumptionScheduled() {
    return this._handlers.onSubscriptionResumptionScheduled;
  }

  set onSubscriptionScheduledCancellationRemoved(
    handler:
      | ((
          event: WebhookEvent & {
            content: SubscriptionScheduledCancellationRemovedContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onSubscriptionScheduledCancellationRemoved = handler;
  }

  get onSubscriptionScheduledCancellationRemoved() {
    return this._handlers.onSubscriptionScheduledCancellationRemoved;
  }

  set onSubscriptionScheduledChangesRemoved(
    handler:
      | ((
          event: WebhookEvent & {
            content: SubscriptionScheduledChangesRemovedContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onSubscriptionScheduledChangesRemoved = handler;
  }

  get onSubscriptionScheduledChangesRemoved() {
    return this._handlers.onSubscriptionScheduledChangesRemoved;
  }

  set onSubscriptionScheduledPauseRemoved(
    handler:
      | ((
          event: WebhookEvent & {
            content: SubscriptionScheduledPauseRemovedContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onSubscriptionScheduledPauseRemoved = handler;
  }

  get onSubscriptionScheduledPauseRemoved() {
    return this._handlers.onSubscriptionScheduledPauseRemoved;
  }

  set onSubscriptionScheduledResumptionRemoved(
    handler:
      | ((
          event: WebhookEvent & {
            content: SubscriptionScheduledResumptionRemovedContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onSubscriptionScheduledResumptionRemoved = handler;
  }

  get onSubscriptionScheduledResumptionRemoved() {
    return this._handlers.onSubscriptionScheduledResumptionRemoved;
  }

  set onSubscriptionShippingAddressUpdated(
    handler:
      | ((
          event: WebhookEvent & {
            content: SubscriptionShippingAddressUpdatedContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onSubscriptionShippingAddressUpdated = handler;
  }

  get onSubscriptionShippingAddressUpdated() {
    return this._handlers.onSubscriptionShippingAddressUpdated;
  }

  set onSubscriptionStarted(
    handler:
      | ((
          event: WebhookEvent & { content: SubscriptionStartedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onSubscriptionStarted = handler;
  }

  get onSubscriptionStarted() {
    return this._handlers.onSubscriptionStarted;
  }

  set onSubscriptionTrialEndReminder(
    handler:
      | ((
          event: WebhookEvent & {
            content: SubscriptionTrialEndReminderContent;
          },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onSubscriptionTrialEndReminder = handler;
  }

  get onSubscriptionTrialEndReminder() {
    return this._handlers.onSubscriptionTrialEndReminder;
  }

  set onSubscriptionTrialExtended(
    handler:
      | ((
          event: WebhookEvent & { content: SubscriptionTrialExtendedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onSubscriptionTrialExtended = handler;
  }

  get onSubscriptionTrialExtended() {
    return this._handlers.onSubscriptionTrialExtended;
  }

  set onTaxWithheldDeleted(
    handler:
      | ((
          event: WebhookEvent & { content: TaxWithheldDeletedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onTaxWithheldDeleted = handler;
  }

  get onTaxWithheldDeleted() {
    return this._handlers.onTaxWithheldDeleted;
  }

  set onTaxWithheldRecorded(
    handler:
      | ((
          event: WebhookEvent & { content: TaxWithheldRecordedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onTaxWithheldRecorded = handler;
  }

  get onTaxWithheldRecorded() {
    return this._handlers.onTaxWithheldRecorded;
  }

  set onTaxWithheldRefunded(
    handler:
      | ((
          event: WebhookEvent & { content: TaxWithheldRefundedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onTaxWithheldRefunded = handler;
  }

  get onTaxWithheldRefunded() {
    return this._handlers.onTaxWithheldRefunded;
  }

  set onTokenConsumed(
    handler:
      | ((
          event: WebhookEvent & { content: TokenConsumedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onTokenConsumed = handler;
  }

  get onTokenConsumed() {
    return this._handlers.onTokenConsumed;
  }

  set onTokenCreated(
    handler:
      | ((
          event: WebhookEvent & { content: TokenCreatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onTokenCreated = handler;
  }

  get onTokenCreated() {
    return this._handlers.onTokenCreated;
  }

  set onTokenExpired(
    handler:
      | ((
          event: WebhookEvent & { content: TokenExpiredContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onTokenExpired = handler;
  }

  get onTokenExpired() {
    return this._handlers.onTokenExpired;
  }

  set onTransactionCreated(
    handler:
      | ((
          event: WebhookEvent & { content: TransactionCreatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onTransactionCreated = handler;
  }

  get onTransactionCreated() {
    return this._handlers.onTransactionCreated;
  }

  set onTransactionDeleted(
    handler:
      | ((
          event: WebhookEvent & { content: TransactionDeletedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onTransactionDeleted = handler;
  }

  get onTransactionDeleted() {
    return this._handlers.onTransactionDeleted;
  }

  set onTransactionUpdated(
    handler:
      | ((
          event: WebhookEvent & { content: TransactionUpdatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onTransactionUpdated = handler;
  }

  get onTransactionUpdated() {
    return this._handlers.onTransactionUpdated;
  }

  set onUnbilledChargesCreated(
    handler:
      | ((
          event: WebhookEvent & { content: UnbilledChargesCreatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onUnbilledChargesCreated = handler;
  }

  get onUnbilledChargesCreated() {
    return this._handlers.onUnbilledChargesCreated;
  }

  set onUnbilledChargesDeleted(
    handler:
      | ((
          event: WebhookEvent & { content: UnbilledChargesDeletedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onUnbilledChargesDeleted = handler;
  }

  get onUnbilledChargesDeleted() {
    return this._handlers.onUnbilledChargesDeleted;
  }

  set onUnbilledChargesInvoiced(
    handler:
      | ((
          event: WebhookEvent & { content: UnbilledChargesInvoicedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onUnbilledChargesInvoiced = handler;
  }

  get onUnbilledChargesInvoiced() {
    return this._handlers.onUnbilledChargesInvoiced;
  }

  set onUnbilledChargesVoided(
    handler:
      | ((
          event: WebhookEvent & { content: UnbilledChargesVoidedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onUnbilledChargesVoided = handler;
  }

  get onUnbilledChargesVoided() {
    return this._handlers.onUnbilledChargesVoided;
  }

  set onUsageFileIngested(
    handler:
      | ((
          event: WebhookEvent & { content: UsageFileIngestedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onUsageFileIngested = handler;
  }

  get onUsageFileIngested() {
    return this._handlers.onUsageFileIngested;
  }

  set onVariantCreated(
    handler:
      | ((
          event: WebhookEvent & { content: VariantCreatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onVariantCreated = handler;
  }

  get onVariantCreated() {
    return this._handlers.onVariantCreated;
  }

  set onVariantDeleted(
    handler:
      | ((
          event: WebhookEvent & { content: VariantDeletedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onVariantDeleted = handler;
  }

  get onVariantDeleted() {
    return this._handlers.onVariantDeleted;
  }

  set onVariantUpdated(
    handler:
      | ((
          event: WebhookEvent & { content: VariantUpdatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onVariantUpdated = handler;
  }

  get onVariantUpdated() {
    return this._handlers.onVariantUpdated;
  }

  set onVirtualBankAccountAdded(
    handler:
      | ((
          event: WebhookEvent & { content: VirtualBankAccountAddedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onVirtualBankAccountAdded = handler;
  }

  get onVirtualBankAccountAdded() {
    return this._handlers.onVirtualBankAccountAdded;
  }

  set onVirtualBankAccountDeleted(
    handler:
      | ((
          event: WebhookEvent & { content: VirtualBankAccountDeletedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onVirtualBankAccountDeleted = handler;
  }

  get onVirtualBankAccountDeleted() {
    return this._handlers.onVirtualBankAccountDeleted;
  }

  set onVirtualBankAccountUpdated(
    handler:
      | ((
          event: WebhookEvent & { content: VirtualBankAccountUpdatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onVirtualBankAccountUpdated = handler;
  }

  get onVirtualBankAccountUpdated() {
    return this._handlers.onVirtualBankAccountUpdated;
  }

  set onVoucherCreateFailed(
    handler:
      | ((
          event: WebhookEvent & { content: VoucherCreateFailedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onVoucherCreateFailed = handler;
  }

  get onVoucherCreateFailed() {
    return this._handlers.onVoucherCreateFailed;
  }

  set onVoucherCreated(
    handler:
      | ((
          event: WebhookEvent & { content: VoucherCreatedContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onVoucherCreated = handler;
  }

  get onVoucherCreated() {
    return this._handlers.onVoucherCreated;
  }

  set onVoucherExpired(
    handler:
      | ((
          event: WebhookEvent & { content: VoucherExpiredContent },
        ) => Promise<void>)
      | undefined,
  ) {
    this._handlers.onVoucherExpired = handler;
  }

  get onVoucherExpired() {
    return this._handlers.onVoucherExpired;
  }

  async handle(
    body: string | object,
    headers?: Record<string, string | string[] | undefined>,
  ): Promise<void> {
    try {
      if (this.requestValidator && headers) {
        this.requestValidator(headers);
      }

      let event: WebhookEvent;
      if (typeof body === 'string') {
        event = JSON.parse(body);
      } else {
        event = body as WebhookEvent;
      }

      const eventType = event.event_type;

      switch (eventType) {
        case EventType.ADD_USAGES_REMINDER:
          if (this._handlers.onAddUsagesReminder) {
            await this._handlers.onAddUsagesReminder(
              event as WebhookEvent & { content: AddUsagesReminderContent },
            );
            return;
          }
          break;

        case EventType.ADDON_CREATED:
          if (this._handlers.onAddonCreated) {
            await this._handlers.onAddonCreated(
              event as WebhookEvent & { content: AddonCreatedContent },
            );
            return;
          }
          break;

        case EventType.ADDON_DELETED:
          if (this._handlers.onAddonDeleted) {
            await this._handlers.onAddonDeleted(
              event as WebhookEvent & { content: AddonDeletedContent },
            );
            return;
          }
          break;

        case EventType.ADDON_UPDATED:
          if (this._handlers.onAddonUpdated) {
            await this._handlers.onAddonUpdated(
              event as WebhookEvent & { content: AddonUpdatedContent },
            );
            return;
          }
          break;

        case EventType.ATTACHED_ITEM_CREATED:
          if (this._handlers.onAttachedItemCreated) {
            await this._handlers.onAttachedItemCreated(
              event as WebhookEvent & { content: AttachedItemCreatedContent },
            );
            return;
          }
          break;

        case EventType.ATTACHED_ITEM_DELETED:
          if (this._handlers.onAttachedItemDeleted) {
            await this._handlers.onAttachedItemDeleted(
              event as WebhookEvent & { content: AttachedItemDeletedContent },
            );
            return;
          }
          break;

        case EventType.ATTACHED_ITEM_UPDATED:
          if (this._handlers.onAttachedItemUpdated) {
            await this._handlers.onAttachedItemUpdated(
              event as WebhookEvent & { content: AttachedItemUpdatedContent },
            );
            return;
          }
          break;

        case EventType.AUTHORIZATION_SUCCEEDED:
          if (this._handlers.onAuthorizationSucceeded) {
            await this._handlers.onAuthorizationSucceeded(
              event as WebhookEvent & {
                content: AuthorizationSucceededContent;
              },
            );
            return;
          }
          break;

        case EventType.AUTHORIZATION_VOIDED:
          if (this._handlers.onAuthorizationVoided) {
            await this._handlers.onAuthorizationVoided(
              event as WebhookEvent & { content: AuthorizationVoidedContent },
            );
            return;
          }
          break;

        case EventType.BUSINESS_ENTITY_CREATED:
          if (this._handlers.onBusinessEntityCreated) {
            await this._handlers.onBusinessEntityCreated(
              event as WebhookEvent & { content: BusinessEntityCreatedContent },
            );
            return;
          }
          break;

        case EventType.BUSINESS_ENTITY_DELETED:
          if (this._handlers.onBusinessEntityDeleted) {
            await this._handlers.onBusinessEntityDeleted(
              event as WebhookEvent & { content: BusinessEntityDeletedContent },
            );
            return;
          }
          break;

        case EventType.BUSINESS_ENTITY_UPDATED:
          if (this._handlers.onBusinessEntityUpdated) {
            await this._handlers.onBusinessEntityUpdated(
              event as WebhookEvent & { content: BusinessEntityUpdatedContent },
            );
            return;
          }
          break;

        case EventType.CARD_ADDED:
          if (this._handlers.onCardAdded) {
            await this._handlers.onCardAdded(
              event as WebhookEvent & { content: CardAddedContent },
            );
            return;
          }
          break;

        case EventType.CARD_DELETED:
          if (this._handlers.onCardDeleted) {
            await this._handlers.onCardDeleted(
              event as WebhookEvent & { content: CardDeletedContent },
            );
            return;
          }
          break;

        case EventType.CARD_EXPIRED:
          if (this._handlers.onCardExpired) {
            await this._handlers.onCardExpired(
              event as WebhookEvent & { content: CardExpiredContent },
            );
            return;
          }
          break;

        case EventType.CARD_EXPIRY_REMINDER:
          if (this._handlers.onCardExpiryReminder) {
            await this._handlers.onCardExpiryReminder(
              event as WebhookEvent & { content: CardExpiryReminderContent },
            );
            return;
          }
          break;

        case EventType.CARD_UPDATED:
          if (this._handlers.onCardUpdated) {
            await this._handlers.onCardUpdated(
              event as WebhookEvent & { content: CardUpdatedContent },
            );
            return;
          }
          break;

        case EventType.CONTRACT_TERM_CANCELLED:
          if (this._handlers.onContractTermCancelled) {
            await this._handlers.onContractTermCancelled(
              event as WebhookEvent & { content: ContractTermCancelledContent },
            );
            return;
          }
          break;

        case EventType.CONTRACT_TERM_COMPLETED:
          if (this._handlers.onContractTermCompleted) {
            await this._handlers.onContractTermCompleted(
              event as WebhookEvent & { content: ContractTermCompletedContent },
            );
            return;
          }
          break;

        case EventType.CONTRACT_TERM_CREATED:
          if (this._handlers.onContractTermCreated) {
            await this._handlers.onContractTermCreated(
              event as WebhookEvent & { content: ContractTermCreatedContent },
            );
            return;
          }
          break;

        case EventType.CONTRACT_TERM_RENEWED:
          if (this._handlers.onContractTermRenewed) {
            await this._handlers.onContractTermRenewed(
              event as WebhookEvent & { content: ContractTermRenewedContent },
            );
            return;
          }
          break;

        case EventType.CONTRACT_TERM_TERMINATED:
          if (this._handlers.onContractTermTerminated) {
            await this._handlers.onContractTermTerminated(
              event as WebhookEvent & {
                content: ContractTermTerminatedContent;
              },
            );
            return;
          }
          break;

        case EventType.COUPON_CODES_ADDED:
          if (this._handlers.onCouponCodesAdded) {
            await this._handlers.onCouponCodesAdded(
              event as WebhookEvent & { content: CouponCodesAddedContent },
            );
            return;
          }
          break;

        case EventType.COUPON_CODES_DELETED:
          if (this._handlers.onCouponCodesDeleted) {
            await this._handlers.onCouponCodesDeleted(
              event as WebhookEvent & { content: CouponCodesDeletedContent },
            );
            return;
          }
          break;

        case EventType.COUPON_CODES_UPDATED:
          if (this._handlers.onCouponCodesUpdated) {
            await this._handlers.onCouponCodesUpdated(
              event as WebhookEvent & { content: CouponCodesUpdatedContent },
            );
            return;
          }
          break;

        case EventType.COUPON_CREATED:
          if (this._handlers.onCouponCreated) {
            await this._handlers.onCouponCreated(
              event as WebhookEvent & { content: CouponCreatedContent },
            );
            return;
          }
          break;

        case EventType.COUPON_DELETED:
          if (this._handlers.onCouponDeleted) {
            await this._handlers.onCouponDeleted(
              event as WebhookEvent & { content: CouponDeletedContent },
            );
            return;
          }
          break;

        case EventType.COUPON_SET_CREATED:
          if (this._handlers.onCouponSetCreated) {
            await this._handlers.onCouponSetCreated(
              event as WebhookEvent & { content: CouponSetCreatedContent },
            );
            return;
          }
          break;

        case EventType.COUPON_SET_DELETED:
          if (this._handlers.onCouponSetDeleted) {
            await this._handlers.onCouponSetDeleted(
              event as WebhookEvent & { content: CouponSetDeletedContent },
            );
            return;
          }
          break;

        case EventType.COUPON_SET_UPDATED:
          if (this._handlers.onCouponSetUpdated) {
            await this._handlers.onCouponSetUpdated(
              event as WebhookEvent & { content: CouponSetUpdatedContent },
            );
            return;
          }
          break;

        case EventType.COUPON_UPDATED:
          if (this._handlers.onCouponUpdated) {
            await this._handlers.onCouponUpdated(
              event as WebhookEvent & { content: CouponUpdatedContent },
            );
            return;
          }
          break;

        case EventType.CREDIT_NOTE_CREATED:
          if (this._handlers.onCreditNoteCreated) {
            await this._handlers.onCreditNoteCreated(
              event as WebhookEvent & { content: CreditNoteCreatedContent },
            );
            return;
          }
          break;

        case EventType.CREDIT_NOTE_CREATED_WITH_BACKDATING:
          if (this._handlers.onCreditNoteCreatedWithBackdating) {
            await this._handlers.onCreditNoteCreatedWithBackdating(
              event as WebhookEvent & {
                content: CreditNoteCreatedWithBackdatingContent;
              },
            );
            return;
          }
          break;

        case EventType.CREDIT_NOTE_DELETED:
          if (this._handlers.onCreditNoteDeleted) {
            await this._handlers.onCreditNoteDeleted(
              event as WebhookEvent & { content: CreditNoteDeletedContent },
            );
            return;
          }
          break;

        case EventType.CREDIT_NOTE_UPDATED:
          if (this._handlers.onCreditNoteUpdated) {
            await this._handlers.onCreditNoteUpdated(
              event as WebhookEvent & { content: CreditNoteUpdatedContent },
            );
            return;
          }
          break;

        case EventType.CUSTOMER_BUSINESS_ENTITY_CHANGED:
          if (this._handlers.onCustomerBusinessEntityChanged) {
            await this._handlers.onCustomerBusinessEntityChanged(
              event as WebhookEvent & {
                content: CustomerBusinessEntityChangedContent;
              },
            );
            return;
          }
          break;

        case EventType.CUSTOMER_CHANGED:
          if (this._handlers.onCustomerChanged) {
            await this._handlers.onCustomerChanged(
              event as WebhookEvent & { content: CustomerChangedContent },
            );
            return;
          }
          break;

        case EventType.CUSTOMER_CREATED:
          if (this._handlers.onCustomerCreated) {
            await this._handlers.onCustomerCreated(
              event as WebhookEvent & { content: CustomerCreatedContent },
            );
            return;
          }
          break;

        case EventType.CUSTOMER_DELETED:
          if (this._handlers.onCustomerDeleted) {
            await this._handlers.onCustomerDeleted(
              event as WebhookEvent & { content: CustomerDeletedContent },
            );
            return;
          }
          break;

        case EventType.CUSTOMER_ENTITLEMENTS_UPDATED:
          if (this._handlers.onCustomerEntitlementsUpdated) {
            await this._handlers.onCustomerEntitlementsUpdated(
              event as WebhookEvent & {
                content: CustomerEntitlementsUpdatedContent;
              },
            );
            return;
          }
          break;

        case EventType.CUSTOMER_MOVED_IN:
          if (this._handlers.onCustomerMovedIn) {
            await this._handlers.onCustomerMovedIn(
              event as WebhookEvent & { content: CustomerMovedInContent },
            );
            return;
          }
          break;

        case EventType.CUSTOMER_MOVED_OUT:
          if (this._handlers.onCustomerMovedOut) {
            await this._handlers.onCustomerMovedOut(
              event as WebhookEvent & { content: CustomerMovedOutContent },
            );
            return;
          }
          break;

        case EventType.DIFFERENTIAL_PRICE_CREATED:
          if (this._handlers.onDifferentialPriceCreated) {
            await this._handlers.onDifferentialPriceCreated(
              event as WebhookEvent & {
                content: DifferentialPriceCreatedContent;
              },
            );
            return;
          }
          break;

        case EventType.DIFFERENTIAL_PRICE_DELETED:
          if (this._handlers.onDifferentialPriceDeleted) {
            await this._handlers.onDifferentialPriceDeleted(
              event as WebhookEvent & {
                content: DifferentialPriceDeletedContent;
              },
            );
            return;
          }
          break;

        case EventType.DIFFERENTIAL_PRICE_UPDATED:
          if (this._handlers.onDifferentialPriceUpdated) {
            await this._handlers.onDifferentialPriceUpdated(
              event as WebhookEvent & {
                content: DifferentialPriceUpdatedContent;
              },
            );
            return;
          }
          break;

        case EventType.DUNNING_UPDATED:
          if (this._handlers.onDunningUpdated) {
            await this._handlers.onDunningUpdated(
              event as WebhookEvent & { content: DunningUpdatedContent },
            );
            return;
          }
          break;

        case EventType.ENTITLEMENT_OVERRIDES_AUTO_REMOVED:
          if (this._handlers.onEntitlementOverridesAutoRemoved) {
            await this._handlers.onEntitlementOverridesAutoRemoved(
              event as WebhookEvent & {
                content: EntitlementOverridesAutoRemovedContent;
              },
            );
            return;
          }
          break;

        case EventType.ENTITLEMENT_OVERRIDES_REMOVED:
          if (this._handlers.onEntitlementOverridesRemoved) {
            await this._handlers.onEntitlementOverridesRemoved(
              event as WebhookEvent & {
                content: EntitlementOverridesRemovedContent;
              },
            );
            return;
          }
          break;

        case EventType.ENTITLEMENT_OVERRIDES_UPDATED:
          if (this._handlers.onEntitlementOverridesUpdated) {
            await this._handlers.onEntitlementOverridesUpdated(
              event as WebhookEvent & {
                content: EntitlementOverridesUpdatedContent;
              },
            );
            return;
          }
          break;

        case EventType.FEATURE_ACTIVATED:
          if (this._handlers.onFeatureActivated) {
            await this._handlers.onFeatureActivated(
              event as WebhookEvent & { content: FeatureActivatedContent },
            );
            return;
          }
          break;

        case EventType.FEATURE_ARCHIVED:
          if (this._handlers.onFeatureArchived) {
            await this._handlers.onFeatureArchived(
              event as WebhookEvent & { content: FeatureArchivedContent },
            );
            return;
          }
          break;

        case EventType.FEATURE_CREATED:
          if (this._handlers.onFeatureCreated) {
            await this._handlers.onFeatureCreated(
              event as WebhookEvent & { content: FeatureCreatedContent },
            );
            return;
          }
          break;

        case EventType.FEATURE_DELETED:
          if (this._handlers.onFeatureDeleted) {
            await this._handlers.onFeatureDeleted(
              event as WebhookEvent & { content: FeatureDeletedContent },
            );
            return;
          }
          break;

        case EventType.FEATURE_REACTIVATED:
          if (this._handlers.onFeatureReactivated) {
            await this._handlers.onFeatureReactivated(
              event as WebhookEvent & { content: FeatureReactivatedContent },
            );
            return;
          }
          break;

        case EventType.FEATURE_UPDATED:
          if (this._handlers.onFeatureUpdated) {
            await this._handlers.onFeatureUpdated(
              event as WebhookEvent & { content: FeatureUpdatedContent },
            );
            return;
          }
          break;

        case EventType.GIFT_CANCELLED:
          if (this._handlers.onGiftCancelled) {
            await this._handlers.onGiftCancelled(
              event as WebhookEvent & { content: GiftCancelledContent },
            );
            return;
          }
          break;

        case EventType.GIFT_CLAIMED:
          if (this._handlers.onGiftClaimed) {
            await this._handlers.onGiftClaimed(
              event as WebhookEvent & { content: GiftClaimedContent },
            );
            return;
          }
          break;

        case EventType.GIFT_EXPIRED:
          if (this._handlers.onGiftExpired) {
            await this._handlers.onGiftExpired(
              event as WebhookEvent & { content: GiftExpiredContent },
            );
            return;
          }
          break;

        case EventType.GIFT_SCHEDULED:
          if (this._handlers.onGiftScheduled) {
            await this._handlers.onGiftScheduled(
              event as WebhookEvent & { content: GiftScheduledContent },
            );
            return;
          }
          break;

        case EventType.GIFT_UNCLAIMED:
          if (this._handlers.onGiftUnclaimed) {
            await this._handlers.onGiftUnclaimed(
              event as WebhookEvent & { content: GiftUnclaimedContent },
            );
            return;
          }
          break;

        case EventType.GIFT_UPDATED:
          if (this._handlers.onGiftUpdated) {
            await this._handlers.onGiftUpdated(
              event as WebhookEvent & { content: GiftUpdatedContent },
            );
            return;
          }
          break;

        case EventType.HIERARCHY_CREATED:
          if (this._handlers.onHierarchyCreated) {
            await this._handlers.onHierarchyCreated(
              event as WebhookEvent & { content: HierarchyCreatedContent },
            );
            return;
          }
          break;

        case EventType.HIERARCHY_DELETED:
          if (this._handlers.onHierarchyDeleted) {
            await this._handlers.onHierarchyDeleted(
              event as WebhookEvent & { content: HierarchyDeletedContent },
            );
            return;
          }
          break;

        case EventType.INVOICE_DELETED:
          if (this._handlers.onInvoiceDeleted) {
            await this._handlers.onInvoiceDeleted(
              event as WebhookEvent & { content: InvoiceDeletedContent },
            );
            return;
          }
          break;

        case EventType.INVOICE_GENERATED:
          if (this._handlers.onInvoiceGenerated) {
            await this._handlers.onInvoiceGenerated(
              event as WebhookEvent & { content: InvoiceGeneratedContent },
            );
            return;
          }
          break;

        case EventType.INVOICE_GENERATED_WITH_BACKDATING:
          if (this._handlers.onInvoiceGeneratedWithBackdating) {
            await this._handlers.onInvoiceGeneratedWithBackdating(
              event as WebhookEvent & {
                content: InvoiceGeneratedWithBackdatingContent;
              },
            );
            return;
          }
          break;

        case EventType.INVOICE_UPDATED:
          if (this._handlers.onInvoiceUpdated) {
            await this._handlers.onInvoiceUpdated(
              event as WebhookEvent & { content: InvoiceUpdatedContent },
            );
            return;
          }
          break;

        case EventType.ITEM_CREATED:
          if (this._handlers.onItemCreated) {
            await this._handlers.onItemCreated(
              event as WebhookEvent & { content: ItemCreatedContent },
            );
            return;
          }
          break;

        case EventType.ITEM_DELETED:
          if (this._handlers.onItemDeleted) {
            await this._handlers.onItemDeleted(
              event as WebhookEvent & { content: ItemDeletedContent },
            );
            return;
          }
          break;

        case EventType.ITEM_ENTITLEMENTS_REMOVED:
          if (this._handlers.onItemEntitlementsRemoved) {
            await this._handlers.onItemEntitlementsRemoved(
              event as WebhookEvent & {
                content: ItemEntitlementsRemovedContent;
              },
            );
            return;
          }
          break;

        case EventType.ITEM_ENTITLEMENTS_UPDATED:
          if (this._handlers.onItemEntitlementsUpdated) {
            await this._handlers.onItemEntitlementsUpdated(
              event as WebhookEvent & {
                content: ItemEntitlementsUpdatedContent;
              },
            );
            return;
          }
          break;

        case EventType.ITEM_FAMILY_CREATED:
          if (this._handlers.onItemFamilyCreated) {
            await this._handlers.onItemFamilyCreated(
              event as WebhookEvent & { content: ItemFamilyCreatedContent },
            );
            return;
          }
          break;

        case EventType.ITEM_FAMILY_DELETED:
          if (this._handlers.onItemFamilyDeleted) {
            await this._handlers.onItemFamilyDeleted(
              event as WebhookEvent & { content: ItemFamilyDeletedContent },
            );
            return;
          }
          break;

        case EventType.ITEM_FAMILY_UPDATED:
          if (this._handlers.onItemFamilyUpdated) {
            await this._handlers.onItemFamilyUpdated(
              event as WebhookEvent & { content: ItemFamilyUpdatedContent },
            );
            return;
          }
          break;

        case EventType.ITEM_PRICE_CREATED:
          if (this._handlers.onItemPriceCreated) {
            await this._handlers.onItemPriceCreated(
              event as WebhookEvent & { content: ItemPriceCreatedContent },
            );
            return;
          }
          break;

        case EventType.ITEM_PRICE_DELETED:
          if (this._handlers.onItemPriceDeleted) {
            await this._handlers.onItemPriceDeleted(
              event as WebhookEvent & { content: ItemPriceDeletedContent },
            );
            return;
          }
          break;

        case EventType.ITEM_PRICE_ENTITLEMENTS_REMOVED:
          if (this._handlers.onItemPriceEntitlementsRemoved) {
            await this._handlers.onItemPriceEntitlementsRemoved(
              event as WebhookEvent & {
                content: ItemPriceEntitlementsRemovedContent;
              },
            );
            return;
          }
          break;

        case EventType.ITEM_PRICE_ENTITLEMENTS_UPDATED:
          if (this._handlers.onItemPriceEntitlementsUpdated) {
            await this._handlers.onItemPriceEntitlementsUpdated(
              event as WebhookEvent & {
                content: ItemPriceEntitlementsUpdatedContent;
              },
            );
            return;
          }
          break;

        case EventType.ITEM_PRICE_UPDATED:
          if (this._handlers.onItemPriceUpdated) {
            await this._handlers.onItemPriceUpdated(
              event as WebhookEvent & { content: ItemPriceUpdatedContent },
            );
            return;
          }
          break;

        case EventType.ITEM_UPDATED:
          if (this._handlers.onItemUpdated) {
            await this._handlers.onItemUpdated(
              event as WebhookEvent & { content: ItemUpdatedContent },
            );
            return;
          }
          break;

        case EventType.MRR_UPDATED:
          if (this._handlers.onMrrUpdated) {
            await this._handlers.onMrrUpdated(
              event as WebhookEvent & { content: MrrUpdatedContent },
            );
            return;
          }
          break;

        case EventType.NETD_PAYMENT_DUE_REMINDER:
          if (this._handlers.onNetdPaymentDueReminder) {
            await this._handlers.onNetdPaymentDueReminder(
              event as WebhookEvent & {
                content: NetdPaymentDueReminderContent;
              },
            );
            return;
          }
          break;

        case EventType.OMNICHANNEL_ONE_TIME_ORDER_CREATED:
          if (this._handlers.onOmnichannelOneTimeOrderCreated) {
            await this._handlers.onOmnichannelOneTimeOrderCreated(
              event as WebhookEvent & {
                content: OmnichannelOneTimeOrderCreatedContent;
              },
            );
            return;
          }
          break;

        case EventType.OMNICHANNEL_ONE_TIME_ORDER_ITEM_CANCELLED:
          if (this._handlers.onOmnichannelOneTimeOrderItemCancelled) {
            await this._handlers.onOmnichannelOneTimeOrderItemCancelled(
              event as WebhookEvent & {
                content: OmnichannelOneTimeOrderItemCancelledContent;
              },
            );
            return;
          }
          break;

        case EventType.OMNICHANNEL_SUBSCRIPTION_CREATED:
          if (this._handlers.onOmnichannelSubscriptionCreated) {
            await this._handlers.onOmnichannelSubscriptionCreated(
              event as WebhookEvent & {
                content: OmnichannelSubscriptionCreatedContent;
              },
            );
            return;
          }
          break;

        case EventType.OMNICHANNEL_SUBSCRIPTION_IMPORTED:
          if (this._handlers.onOmnichannelSubscriptionImported) {
            await this._handlers.onOmnichannelSubscriptionImported(
              event as WebhookEvent & {
                content: OmnichannelSubscriptionImportedContent;
              },
            );
            return;
          }
          break;

        case EventType.OMNICHANNEL_SUBSCRIPTION_ITEM_CANCELLATION_SCHEDULED:
          if (
            this._handlers.onOmnichannelSubscriptionItemCancellationScheduled
          ) {
            await this._handlers.onOmnichannelSubscriptionItemCancellationScheduled(
              event as WebhookEvent & {
                content: OmnichannelSubscriptionItemCancellationScheduledContent;
              },
            );
            return;
          }
          break;

        case EventType.OMNICHANNEL_SUBSCRIPTION_ITEM_CANCELLED:
          if (this._handlers.onOmnichannelSubscriptionItemCancelled) {
            await this._handlers.onOmnichannelSubscriptionItemCancelled(
              event as WebhookEvent & {
                content: OmnichannelSubscriptionItemCancelledContent;
              },
            );
            return;
          }
          break;

        case EventType.OMNICHANNEL_SUBSCRIPTION_ITEM_CHANGE_SCHEDULED:
          if (this._handlers.onOmnichannelSubscriptionItemChangeScheduled) {
            await this._handlers.onOmnichannelSubscriptionItemChangeScheduled(
              event as WebhookEvent & {
                content: OmnichannelSubscriptionItemChangeScheduledContent;
              },
            );
            return;
          }
          break;

        case EventType.OMNICHANNEL_SUBSCRIPTION_ITEM_CHANGED:
          if (this._handlers.onOmnichannelSubscriptionItemChanged) {
            await this._handlers.onOmnichannelSubscriptionItemChanged(
              event as WebhookEvent & {
                content: OmnichannelSubscriptionItemChangedContent;
              },
            );
            return;
          }
          break;

        case EventType.OMNICHANNEL_SUBSCRIPTION_ITEM_DOWNGRADE_SCHEDULED:
          if (this._handlers.onOmnichannelSubscriptionItemDowngradeScheduled) {
            await this._handlers.onOmnichannelSubscriptionItemDowngradeScheduled(
              event as WebhookEvent & {
                content: OmnichannelSubscriptionItemDowngradeScheduledContent;
              },
            );
            return;
          }
          break;

        case EventType.OMNICHANNEL_SUBSCRIPTION_ITEM_DOWNGRADED:
          if (this._handlers.onOmnichannelSubscriptionItemDowngraded) {
            await this._handlers.onOmnichannelSubscriptionItemDowngraded(
              event as WebhookEvent & {
                content: OmnichannelSubscriptionItemDowngradedContent;
              },
            );
            return;
          }
          break;

        case EventType.OMNICHANNEL_SUBSCRIPTION_ITEM_DUNNING_EXPIRED:
          if (this._handlers.onOmnichannelSubscriptionItemDunningExpired) {
            await this._handlers.onOmnichannelSubscriptionItemDunningExpired(
              event as WebhookEvent & {
                content: OmnichannelSubscriptionItemDunningExpiredContent;
              },
            );
            return;
          }
          break;

        case EventType.OMNICHANNEL_SUBSCRIPTION_ITEM_DUNNING_STARTED:
          if (this._handlers.onOmnichannelSubscriptionItemDunningStarted) {
            await this._handlers.onOmnichannelSubscriptionItemDunningStarted(
              event as WebhookEvent & {
                content: OmnichannelSubscriptionItemDunningStartedContent;
              },
            );
            return;
          }
          break;

        case EventType.OMNICHANNEL_SUBSCRIPTION_ITEM_EXPIRED:
          if (this._handlers.onOmnichannelSubscriptionItemExpired) {
            await this._handlers.onOmnichannelSubscriptionItemExpired(
              event as WebhookEvent & {
                content: OmnichannelSubscriptionItemExpiredContent;
              },
            );
            return;
          }
          break;

        case EventType.OMNICHANNEL_SUBSCRIPTION_ITEM_GRACE_PERIOD_EXPIRED:
          if (this._handlers.onOmnichannelSubscriptionItemGracePeriodExpired) {
            await this._handlers.onOmnichannelSubscriptionItemGracePeriodExpired(
              event as WebhookEvent & {
                content: OmnichannelSubscriptionItemGracePeriodExpiredContent;
              },
            );
            return;
          }
          break;

        case EventType.OMNICHANNEL_SUBSCRIPTION_ITEM_GRACE_PERIOD_STARTED:
          if (this._handlers.onOmnichannelSubscriptionItemGracePeriodStarted) {
            await this._handlers.onOmnichannelSubscriptionItemGracePeriodStarted(
              event as WebhookEvent & {
                content: OmnichannelSubscriptionItemGracePeriodStartedContent;
              },
            );
            return;
          }
          break;

        case EventType.OMNICHANNEL_SUBSCRIPTION_ITEM_PAUSE_SCHEDULED:
          if (this._handlers.onOmnichannelSubscriptionItemPauseScheduled) {
            await this._handlers.onOmnichannelSubscriptionItemPauseScheduled(
              event as WebhookEvent & {
                content: OmnichannelSubscriptionItemPauseScheduledContent;
              },
            );
            return;
          }
          break;

        case EventType.OMNICHANNEL_SUBSCRIPTION_ITEM_PAUSED:
          if (this._handlers.onOmnichannelSubscriptionItemPaused) {
            await this._handlers.onOmnichannelSubscriptionItemPaused(
              event as WebhookEvent & {
                content: OmnichannelSubscriptionItemPausedContent;
              },
            );
            return;
          }
          break;

        case EventType.OMNICHANNEL_SUBSCRIPTION_ITEM_REACTIVATED:
          if (this._handlers.onOmnichannelSubscriptionItemReactivated) {
            await this._handlers.onOmnichannelSubscriptionItemReactivated(
              event as WebhookEvent & {
                content: OmnichannelSubscriptionItemReactivatedContent;
              },
            );
            return;
          }
          break;

        case EventType.OMNICHANNEL_SUBSCRIPTION_ITEM_RENEWED:
          if (this._handlers.onOmnichannelSubscriptionItemRenewed) {
            await this._handlers.onOmnichannelSubscriptionItemRenewed(
              event as WebhookEvent & {
                content: OmnichannelSubscriptionItemRenewedContent;
              },
            );
            return;
          }
          break;

        case EventType.OMNICHANNEL_SUBSCRIPTION_ITEM_RESUBSCRIBED:
          if (this._handlers.onOmnichannelSubscriptionItemResubscribed) {
            await this._handlers.onOmnichannelSubscriptionItemResubscribed(
              event as WebhookEvent & {
                content: OmnichannelSubscriptionItemResubscribedContent;
              },
            );
            return;
          }
          break;

        case EventType.OMNICHANNEL_SUBSCRIPTION_ITEM_RESUMED:
          if (this._handlers.onOmnichannelSubscriptionItemResumed) {
            await this._handlers.onOmnichannelSubscriptionItemResumed(
              event as WebhookEvent & {
                content: OmnichannelSubscriptionItemResumedContent;
              },
            );
            return;
          }
          break;

        case EventType.OMNICHANNEL_SUBSCRIPTION_ITEM_SCHEDULED_CANCELLATION_REMOVED:
          if (
            this._handlers
              .onOmnichannelSubscriptionItemScheduledCancellationRemoved
          ) {
            await this._handlers.onOmnichannelSubscriptionItemScheduledCancellationRemoved(
              event as WebhookEvent & {
                content: OmnichannelSubscriptionItemScheduledCancellationRemovedContent;
              },
            );
            return;
          }
          break;

        case EventType.OMNICHANNEL_SUBSCRIPTION_ITEM_SCHEDULED_CHANGE_REMOVED:
          if (
            this._handlers.onOmnichannelSubscriptionItemScheduledChangeRemoved
          ) {
            await this._handlers.onOmnichannelSubscriptionItemScheduledChangeRemoved(
              event as WebhookEvent & {
                content: OmnichannelSubscriptionItemScheduledChangeRemovedContent;
              },
            );
            return;
          }
          break;

        case EventType.OMNICHANNEL_SUBSCRIPTION_ITEM_SCHEDULED_DOWNGRADE_REMOVED:
          if (
            this._handlers
              .onOmnichannelSubscriptionItemScheduledDowngradeRemoved
          ) {
            await this._handlers.onOmnichannelSubscriptionItemScheduledDowngradeRemoved(
              event as WebhookEvent & {
                content: OmnichannelSubscriptionItemScheduledDowngradeRemovedContent;
              },
            );
            return;
          }
          break;

        case EventType.OMNICHANNEL_SUBSCRIPTION_ITEM_UPGRADED:
          if (this._handlers.onOmnichannelSubscriptionItemUpgraded) {
            await this._handlers.onOmnichannelSubscriptionItemUpgraded(
              event as WebhookEvent & {
                content: OmnichannelSubscriptionItemUpgradedContent;
              },
            );
            return;
          }
          break;

        case EventType.OMNICHANNEL_SUBSCRIPTION_MOVED_IN:
          if (this._handlers.onOmnichannelSubscriptionMovedIn) {
            await this._handlers.onOmnichannelSubscriptionMovedIn(
              event as WebhookEvent & {
                content: OmnichannelSubscriptionMovedInContent;
              },
            );
            return;
          }
          break;

        case EventType.OMNICHANNEL_TRANSACTION_CREATED:
          if (this._handlers.onOmnichannelTransactionCreated) {
            await this._handlers.onOmnichannelTransactionCreated(
              event as WebhookEvent & {
                content: OmnichannelTransactionCreatedContent;
              },
            );
            return;
          }
          break;

        case EventType.ORDER_CANCELLED:
          if (this._handlers.onOrderCancelled) {
            await this._handlers.onOrderCancelled(
              event as WebhookEvent & { content: OrderCancelledContent },
            );
            return;
          }
          break;

        case EventType.ORDER_CREATED:
          if (this._handlers.onOrderCreated) {
            await this._handlers.onOrderCreated(
              event as WebhookEvent & { content: OrderCreatedContent },
            );
            return;
          }
          break;

        case EventType.ORDER_DELETED:
          if (this._handlers.onOrderDeleted) {
            await this._handlers.onOrderDeleted(
              event as WebhookEvent & { content: OrderDeletedContent },
            );
            return;
          }
          break;

        case EventType.ORDER_DELIVERED:
          if (this._handlers.onOrderDelivered) {
            await this._handlers.onOrderDelivered(
              event as WebhookEvent & { content: OrderDeliveredContent },
            );
            return;
          }
          break;

        case EventType.ORDER_READY_TO_PROCESS:
          if (this._handlers.onOrderReadyToProcess) {
            await this._handlers.onOrderReadyToProcess(
              event as WebhookEvent & { content: OrderReadyToProcessContent },
            );
            return;
          }
          break;

        case EventType.ORDER_READY_TO_SHIP:
          if (this._handlers.onOrderReadyToShip) {
            await this._handlers.onOrderReadyToShip(
              event as WebhookEvent & { content: OrderReadyToShipContent },
            );
            return;
          }
          break;

        case EventType.ORDER_RESENT:
          if (this._handlers.onOrderResent) {
            await this._handlers.onOrderResent(
              event as WebhookEvent & { content: OrderResentContent },
            );
            return;
          }
          break;

        case EventType.ORDER_RETURNED:
          if (this._handlers.onOrderReturned) {
            await this._handlers.onOrderReturned(
              event as WebhookEvent & { content: OrderReturnedContent },
            );
            return;
          }
          break;

        case EventType.ORDER_UPDATED:
          if (this._handlers.onOrderUpdated) {
            await this._handlers.onOrderUpdated(
              event as WebhookEvent & { content: OrderUpdatedContent },
            );
            return;
          }
          break;

        case EventType.PAYMENT_FAILED:
          if (this._handlers.onPaymentFailed) {
            await this._handlers.onPaymentFailed(
              event as WebhookEvent & { content: PaymentFailedContent },
            );
            return;
          }
          break;

        case EventType.PAYMENT_INITIATED:
          if (this._handlers.onPaymentInitiated) {
            await this._handlers.onPaymentInitiated(
              event as WebhookEvent & { content: PaymentInitiatedContent },
            );
            return;
          }
          break;

        case EventType.PAYMENT_INTENT_CREATED:
          if (this._handlers.onPaymentIntentCreated) {
            await this._handlers.onPaymentIntentCreated(
              event as WebhookEvent & { content: PaymentIntentCreatedContent },
            );
            return;
          }
          break;

        case EventType.PAYMENT_INTENT_UPDATED:
          if (this._handlers.onPaymentIntentUpdated) {
            await this._handlers.onPaymentIntentUpdated(
              event as WebhookEvent & { content: PaymentIntentUpdatedContent },
            );
            return;
          }
          break;

        case EventType.PAYMENT_REFUNDED:
          if (this._handlers.onPaymentRefunded) {
            await this._handlers.onPaymentRefunded(
              event as WebhookEvent & { content: PaymentRefundedContent },
            );
            return;
          }
          break;

        case EventType.PAYMENT_SCHEDULE_SCHEME_CREATED:
          if (this._handlers.onPaymentScheduleSchemeCreated) {
            await this._handlers.onPaymentScheduleSchemeCreated(
              event as WebhookEvent & {
                content: PaymentScheduleSchemeCreatedContent;
              },
            );
            return;
          }
          break;

        case EventType.PAYMENT_SCHEDULE_SCHEME_DELETED:
          if (this._handlers.onPaymentScheduleSchemeDeleted) {
            await this._handlers.onPaymentScheduleSchemeDeleted(
              event as WebhookEvent & {
                content: PaymentScheduleSchemeDeletedContent;
              },
            );
            return;
          }
          break;

        case EventType.PAYMENT_SCHEDULES_CREATED:
          if (this._handlers.onPaymentSchedulesCreated) {
            await this._handlers.onPaymentSchedulesCreated(
              event as WebhookEvent & {
                content: PaymentSchedulesCreatedContent;
              },
            );
            return;
          }
          break;

        case EventType.PAYMENT_SCHEDULES_UPDATED:
          if (this._handlers.onPaymentSchedulesUpdated) {
            await this._handlers.onPaymentSchedulesUpdated(
              event as WebhookEvent & {
                content: PaymentSchedulesUpdatedContent;
              },
            );
            return;
          }
          break;

        case EventType.PAYMENT_SOURCE_ADDED:
          if (this._handlers.onPaymentSourceAdded) {
            await this._handlers.onPaymentSourceAdded(
              event as WebhookEvent & { content: PaymentSourceAddedContent },
            );
            return;
          }
          break;

        case EventType.PAYMENT_SOURCE_DELETED:
          if (this._handlers.onPaymentSourceDeleted) {
            await this._handlers.onPaymentSourceDeleted(
              event as WebhookEvent & { content: PaymentSourceDeletedContent },
            );
            return;
          }
          break;

        case EventType.PAYMENT_SOURCE_EXPIRED:
          if (this._handlers.onPaymentSourceExpired) {
            await this._handlers.onPaymentSourceExpired(
              event as WebhookEvent & { content: PaymentSourceExpiredContent },
            );
            return;
          }
          break;

        case EventType.PAYMENT_SOURCE_EXPIRING:
          if (this._handlers.onPaymentSourceExpiring) {
            await this._handlers.onPaymentSourceExpiring(
              event as WebhookEvent & { content: PaymentSourceExpiringContent },
            );
            return;
          }
          break;

        case EventType.PAYMENT_SOURCE_LOCALLY_DELETED:
          if (this._handlers.onPaymentSourceLocallyDeleted) {
            await this._handlers.onPaymentSourceLocallyDeleted(
              event as WebhookEvent & {
                content: PaymentSourceLocallyDeletedContent;
              },
            );
            return;
          }
          break;

        case EventType.PAYMENT_SOURCE_UPDATED:
          if (this._handlers.onPaymentSourceUpdated) {
            await this._handlers.onPaymentSourceUpdated(
              event as WebhookEvent & { content: PaymentSourceUpdatedContent },
            );
            return;
          }
          break;

        case EventType.PAYMENT_SUCCEEDED:
          if (this._handlers.onPaymentSucceeded) {
            await this._handlers.onPaymentSucceeded(
              event as WebhookEvent & { content: PaymentSucceededContent },
            );
            return;
          }
          break;

        case EventType.PENDING_INVOICE_CREATED:
          if (this._handlers.onPendingInvoiceCreated) {
            await this._handlers.onPendingInvoiceCreated(
              event as WebhookEvent & { content: PendingInvoiceCreatedContent },
            );
            return;
          }
          break;

        case EventType.PENDING_INVOICE_UPDATED:
          if (this._handlers.onPendingInvoiceUpdated) {
            await this._handlers.onPendingInvoiceUpdated(
              event as WebhookEvent & { content: PendingInvoiceUpdatedContent },
            );
            return;
          }
          break;

        case EventType.PLAN_CREATED:
          if (this._handlers.onPlanCreated) {
            await this._handlers.onPlanCreated(
              event as WebhookEvent & { content: PlanCreatedContent },
            );
            return;
          }
          break;

        case EventType.PLAN_DELETED:
          if (this._handlers.onPlanDeleted) {
            await this._handlers.onPlanDeleted(
              event as WebhookEvent & { content: PlanDeletedContent },
            );
            return;
          }
          break;

        case EventType.PLAN_UPDATED:
          if (this._handlers.onPlanUpdated) {
            await this._handlers.onPlanUpdated(
              event as WebhookEvent & { content: PlanUpdatedContent },
            );
            return;
          }
          break;

        case EventType.PRICE_VARIANT_CREATED:
          if (this._handlers.onPriceVariantCreated) {
            await this._handlers.onPriceVariantCreated(
              event as WebhookEvent & { content: PriceVariantCreatedContent },
            );
            return;
          }
          break;

        case EventType.PRICE_VARIANT_DELETED:
          if (this._handlers.onPriceVariantDeleted) {
            await this._handlers.onPriceVariantDeleted(
              event as WebhookEvent & { content: PriceVariantDeletedContent },
            );
            return;
          }
          break;

        case EventType.PRICE_VARIANT_UPDATED:
          if (this._handlers.onPriceVariantUpdated) {
            await this._handlers.onPriceVariantUpdated(
              event as WebhookEvent & { content: PriceVariantUpdatedContent },
            );
            return;
          }
          break;

        case EventType.PRODUCT_CREATED:
          if (this._handlers.onProductCreated) {
            await this._handlers.onProductCreated(
              event as WebhookEvent & { content: ProductCreatedContent },
            );
            return;
          }
          break;

        case EventType.PRODUCT_DELETED:
          if (this._handlers.onProductDeleted) {
            await this._handlers.onProductDeleted(
              event as WebhookEvent & { content: ProductDeletedContent },
            );
            return;
          }
          break;

        case EventType.PRODUCT_UPDATED:
          if (this._handlers.onProductUpdated) {
            await this._handlers.onProductUpdated(
              event as WebhookEvent & { content: ProductUpdatedContent },
            );
            return;
          }
          break;

        case EventType.PROMOTIONAL_CREDITS_ADDED:
          if (this._handlers.onPromotionalCreditsAdded) {
            await this._handlers.onPromotionalCreditsAdded(
              event as WebhookEvent & {
                content: PromotionalCreditsAddedContent;
              },
            );
            return;
          }
          break;

        case EventType.PROMOTIONAL_CREDITS_DEDUCTED:
          if (this._handlers.onPromotionalCreditsDeducted) {
            await this._handlers.onPromotionalCreditsDeducted(
              event as WebhookEvent & {
                content: PromotionalCreditsDeductedContent;
              },
            );
            return;
          }
          break;

        case EventType.PURCHASE_CREATED:
          if (this._handlers.onPurchaseCreated) {
            await this._handlers.onPurchaseCreated(
              event as WebhookEvent & { content: PurchaseCreatedContent },
            );
            return;
          }
          break;

        case EventType.QUOTE_CREATED:
          if (this._handlers.onQuoteCreated) {
            await this._handlers.onQuoteCreated(
              event as WebhookEvent & { content: QuoteCreatedContent },
            );
            return;
          }
          break;

        case EventType.QUOTE_DELETED:
          if (this._handlers.onQuoteDeleted) {
            await this._handlers.onQuoteDeleted(
              event as WebhookEvent & { content: QuoteDeletedContent },
            );
            return;
          }
          break;

        case EventType.QUOTE_UPDATED:
          if (this._handlers.onQuoteUpdated) {
            await this._handlers.onQuoteUpdated(
              event as WebhookEvent & { content: QuoteUpdatedContent },
            );
            return;
          }
          break;

        case EventType.RECORD_PURCHASE_FAILED:
          if (this._handlers.onRecordPurchaseFailed) {
            await this._handlers.onRecordPurchaseFailed(
              event as WebhookEvent & { content: RecordPurchaseFailedContent },
            );
            return;
          }
          break;

        case EventType.REFUND_INITIATED:
          if (this._handlers.onRefundInitiated) {
            await this._handlers.onRefundInitiated(
              event as WebhookEvent & { content: RefundInitiatedContent },
            );
            return;
          }
          break;

        case EventType.RULE_CREATED:
          if (this._handlers.onRuleCreated) {
            await this._handlers.onRuleCreated(
              event as WebhookEvent & { content: RuleCreatedContent },
            );
            return;
          }
          break;

        case EventType.RULE_DELETED:
          if (this._handlers.onRuleDeleted) {
            await this._handlers.onRuleDeleted(
              event as WebhookEvent & { content: RuleDeletedContent },
            );
            return;
          }
          break;

        case EventType.RULE_UPDATED:
          if (this._handlers.onRuleUpdated) {
            await this._handlers.onRuleUpdated(
              event as WebhookEvent & { content: RuleUpdatedContent },
            );
            return;
          }
          break;

        case EventType.SALES_ORDER_CREATED:
          if (this._handlers.onSalesOrderCreated) {
            await this._handlers.onSalesOrderCreated(
              event as WebhookEvent & { content: SalesOrderCreatedContent },
            );
            return;
          }
          break;

        case EventType.SALES_ORDER_UPDATED:
          if (this._handlers.onSalesOrderUpdated) {
            await this._handlers.onSalesOrderUpdated(
              event as WebhookEvent & { content: SalesOrderUpdatedContent },
            );
            return;
          }
          break;

        case EventType.SUBSCRIPTION_ACTIVATED:
          if (this._handlers.onSubscriptionActivated) {
            await this._handlers.onSubscriptionActivated(
              event as WebhookEvent & { content: SubscriptionActivatedContent },
            );
            return;
          }
          break;

        case EventType.SUBSCRIPTION_ACTIVATED_WITH_BACKDATING:
          if (this._handlers.onSubscriptionActivatedWithBackdating) {
            await this._handlers.onSubscriptionActivatedWithBackdating(
              event as WebhookEvent & {
                content: SubscriptionActivatedWithBackdatingContent;
              },
            );
            return;
          }
          break;

        case EventType.SUBSCRIPTION_ADVANCE_INVOICE_SCHEDULE_ADDED:
          if (this._handlers.onSubscriptionAdvanceInvoiceScheduleAdded) {
            await this._handlers.onSubscriptionAdvanceInvoiceScheduleAdded(
              event as WebhookEvent & {
                content: SubscriptionAdvanceInvoiceScheduleAddedContent;
              },
            );
            return;
          }
          break;

        case EventType.SUBSCRIPTION_ADVANCE_INVOICE_SCHEDULE_REMOVED:
          if (this._handlers.onSubscriptionAdvanceInvoiceScheduleRemoved) {
            await this._handlers.onSubscriptionAdvanceInvoiceScheduleRemoved(
              event as WebhookEvent & {
                content: SubscriptionAdvanceInvoiceScheduleRemovedContent;
              },
            );
            return;
          }
          break;

        case EventType.SUBSCRIPTION_ADVANCE_INVOICE_SCHEDULE_UPDATED:
          if (this._handlers.onSubscriptionAdvanceInvoiceScheduleUpdated) {
            await this._handlers.onSubscriptionAdvanceInvoiceScheduleUpdated(
              event as WebhookEvent & {
                content: SubscriptionAdvanceInvoiceScheduleUpdatedContent;
              },
            );
            return;
          }
          break;

        case EventType.SUBSCRIPTION_BUSINESS_ENTITY_CHANGED:
          if (this._handlers.onSubscriptionBusinessEntityChanged) {
            await this._handlers.onSubscriptionBusinessEntityChanged(
              event as WebhookEvent & {
                content: SubscriptionBusinessEntityChangedContent;
              },
            );
            return;
          }
          break;

        case EventType.SUBSCRIPTION_CANCELED_WITH_BACKDATING:
          if (this._handlers.onSubscriptionCanceledWithBackdating) {
            await this._handlers.onSubscriptionCanceledWithBackdating(
              event as WebhookEvent & {
                content: SubscriptionCanceledWithBackdatingContent;
              },
            );
            return;
          }
          break;

        case EventType.SUBSCRIPTION_CANCELLATION_REMINDER:
          if (this._handlers.onSubscriptionCancellationReminder) {
            await this._handlers.onSubscriptionCancellationReminder(
              event as WebhookEvent & {
                content: SubscriptionCancellationReminderContent;
              },
            );
            return;
          }
          break;

        case EventType.SUBSCRIPTION_CANCELLATION_SCHEDULED:
          if (this._handlers.onSubscriptionCancellationScheduled) {
            await this._handlers.onSubscriptionCancellationScheduled(
              event as WebhookEvent & {
                content: SubscriptionCancellationScheduledContent;
              },
            );
            return;
          }
          break;

        case EventType.SUBSCRIPTION_CANCELLED:
          if (this._handlers.onSubscriptionCancelled) {
            await this._handlers.onSubscriptionCancelled(
              event as WebhookEvent & { content: SubscriptionCancelledContent },
            );
            return;
          }
          break;

        case EventType.SUBSCRIPTION_CHANGED:
          if (this._handlers.onSubscriptionChanged) {
            await this._handlers.onSubscriptionChanged(
              event as WebhookEvent & { content: SubscriptionChangedContent },
            );
            return;
          }
          break;

        case EventType.SUBSCRIPTION_CHANGED_WITH_BACKDATING:
          if (this._handlers.onSubscriptionChangedWithBackdating) {
            await this._handlers.onSubscriptionChangedWithBackdating(
              event as WebhookEvent & {
                content: SubscriptionChangedWithBackdatingContent;
              },
            );
            return;
          }
          break;

        case EventType.SUBSCRIPTION_CHANGES_SCHEDULED:
          if (this._handlers.onSubscriptionChangesScheduled) {
            await this._handlers.onSubscriptionChangesScheduled(
              event as WebhookEvent & {
                content: SubscriptionChangesScheduledContent;
              },
            );
            return;
          }
          break;

        case EventType.SUBSCRIPTION_CREATED:
          if (this._handlers.onSubscriptionCreated) {
            await this._handlers.onSubscriptionCreated(
              event as WebhookEvent & { content: SubscriptionCreatedContent },
            );
            return;
          }
          break;

        case EventType.SUBSCRIPTION_CREATED_WITH_BACKDATING:
          if (this._handlers.onSubscriptionCreatedWithBackdating) {
            await this._handlers.onSubscriptionCreatedWithBackdating(
              event as WebhookEvent & {
                content: SubscriptionCreatedWithBackdatingContent;
              },
            );
            return;
          }
          break;

        case EventType.SUBSCRIPTION_DELETED:
          if (this._handlers.onSubscriptionDeleted) {
            await this._handlers.onSubscriptionDeleted(
              event as WebhookEvent & { content: SubscriptionDeletedContent },
            );
            return;
          }
          break;

        case EventType.SUBSCRIPTION_ENTITLEMENTS_CREATED:
          if (this._handlers.onSubscriptionEntitlementsCreated) {
            await this._handlers.onSubscriptionEntitlementsCreated(
              event as WebhookEvent & {
                content: SubscriptionEntitlementsCreatedContent;
              },
            );
            return;
          }
          break;

        case EventType.SUBSCRIPTION_ENTITLEMENTS_UPDATED:
          if (this._handlers.onSubscriptionEntitlementsUpdated) {
            await this._handlers.onSubscriptionEntitlementsUpdated(
              event as WebhookEvent & {
                content: SubscriptionEntitlementsUpdatedContent;
              },
            );
            return;
          }
          break;

        case EventType.SUBSCRIPTION_ITEMS_RENEWED:
          if (this._handlers.onSubscriptionItemsRenewed) {
            await this._handlers.onSubscriptionItemsRenewed(
              event as WebhookEvent & {
                content: SubscriptionItemsRenewedContent;
              },
            );
            return;
          }
          break;

        case EventType.SUBSCRIPTION_MOVED_IN:
          if (this._handlers.onSubscriptionMovedIn) {
            await this._handlers.onSubscriptionMovedIn(
              event as WebhookEvent & { content: SubscriptionMovedInContent },
            );
            return;
          }
          break;

        case EventType.SUBSCRIPTION_MOVED_OUT:
          if (this._handlers.onSubscriptionMovedOut) {
            await this._handlers.onSubscriptionMovedOut(
              event as WebhookEvent & { content: SubscriptionMovedOutContent },
            );
            return;
          }
          break;

        case EventType.SUBSCRIPTION_MOVEMENT_FAILED:
          if (this._handlers.onSubscriptionMovementFailed) {
            await this._handlers.onSubscriptionMovementFailed(
              event as WebhookEvent & {
                content: SubscriptionMovementFailedContent;
              },
            );
            return;
          }
          break;

        case EventType.SUBSCRIPTION_PAUSE_SCHEDULED:
          if (this._handlers.onSubscriptionPauseScheduled) {
            await this._handlers.onSubscriptionPauseScheduled(
              event as WebhookEvent & {
                content: SubscriptionPauseScheduledContent;
              },
            );
            return;
          }
          break;

        case EventType.SUBSCRIPTION_PAUSED:
          if (this._handlers.onSubscriptionPaused) {
            await this._handlers.onSubscriptionPaused(
              event as WebhookEvent & { content: SubscriptionPausedContent },
            );
            return;
          }
          break;

        case EventType.SUBSCRIPTION_RAMP_APPLIED:
          if (this._handlers.onSubscriptionRampApplied) {
            await this._handlers.onSubscriptionRampApplied(
              event as WebhookEvent & {
                content: SubscriptionRampAppliedContent;
              },
            );
            return;
          }
          break;

        case EventType.SUBSCRIPTION_RAMP_CREATED:
          if (this._handlers.onSubscriptionRampCreated) {
            await this._handlers.onSubscriptionRampCreated(
              event as WebhookEvent & {
                content: SubscriptionRampCreatedContent;
              },
            );
            return;
          }
          break;

        case EventType.SUBSCRIPTION_RAMP_DELETED:
          if (this._handlers.onSubscriptionRampDeleted) {
            await this._handlers.onSubscriptionRampDeleted(
              event as WebhookEvent & {
                content: SubscriptionRampDeletedContent;
              },
            );
            return;
          }
          break;

        case EventType.SUBSCRIPTION_RAMP_DRAFTED:
          if (this._handlers.onSubscriptionRampDrafted) {
            await this._handlers.onSubscriptionRampDrafted(
              event as WebhookEvent & {
                content: SubscriptionRampDraftedContent;
              },
            );
            return;
          }
          break;

        case EventType.SUBSCRIPTION_RAMP_UPDATED:
          if (this._handlers.onSubscriptionRampUpdated) {
            await this._handlers.onSubscriptionRampUpdated(
              event as WebhookEvent & {
                content: SubscriptionRampUpdatedContent;
              },
            );
            return;
          }
          break;

        case EventType.SUBSCRIPTION_REACTIVATED:
          if (this._handlers.onSubscriptionReactivated) {
            await this._handlers.onSubscriptionReactivated(
              event as WebhookEvent & {
                content: SubscriptionReactivatedContent;
              },
            );
            return;
          }
          break;

        case EventType.SUBSCRIPTION_REACTIVATED_WITH_BACKDATING:
          if (this._handlers.onSubscriptionReactivatedWithBackdating) {
            await this._handlers.onSubscriptionReactivatedWithBackdating(
              event as WebhookEvent & {
                content: SubscriptionReactivatedWithBackdatingContent;
              },
            );
            return;
          }
          break;

        case EventType.SUBSCRIPTION_RENEWAL_REMINDER:
          if (this._handlers.onSubscriptionRenewalReminder) {
            await this._handlers.onSubscriptionRenewalReminder(
              event as WebhookEvent & {
                content: SubscriptionRenewalReminderContent;
              },
            );
            return;
          }
          break;

        case EventType.SUBSCRIPTION_RENEWED:
          if (this._handlers.onSubscriptionRenewed) {
            await this._handlers.onSubscriptionRenewed(
              event as WebhookEvent & { content: SubscriptionRenewedContent },
            );
            return;
          }
          break;

        case EventType.SUBSCRIPTION_RESUMED:
          if (this._handlers.onSubscriptionResumed) {
            await this._handlers.onSubscriptionResumed(
              event as WebhookEvent & { content: SubscriptionResumedContent },
            );
            return;
          }
          break;

        case EventType.SUBSCRIPTION_RESUMPTION_SCHEDULED:
          if (this._handlers.onSubscriptionResumptionScheduled) {
            await this._handlers.onSubscriptionResumptionScheduled(
              event as WebhookEvent & {
                content: SubscriptionResumptionScheduledContent;
              },
            );
            return;
          }
          break;

        case EventType.SUBSCRIPTION_SCHEDULED_CANCELLATION_REMOVED:
          if (this._handlers.onSubscriptionScheduledCancellationRemoved) {
            await this._handlers.onSubscriptionScheduledCancellationRemoved(
              event as WebhookEvent & {
                content: SubscriptionScheduledCancellationRemovedContent;
              },
            );
            return;
          }
          break;

        case EventType.SUBSCRIPTION_SCHEDULED_CHANGES_REMOVED:
          if (this._handlers.onSubscriptionScheduledChangesRemoved) {
            await this._handlers.onSubscriptionScheduledChangesRemoved(
              event as WebhookEvent & {
                content: SubscriptionScheduledChangesRemovedContent;
              },
            );
            return;
          }
          break;

        case EventType.SUBSCRIPTION_SCHEDULED_PAUSE_REMOVED:
          if (this._handlers.onSubscriptionScheduledPauseRemoved) {
            await this._handlers.onSubscriptionScheduledPauseRemoved(
              event as WebhookEvent & {
                content: SubscriptionScheduledPauseRemovedContent;
              },
            );
            return;
          }
          break;

        case EventType.SUBSCRIPTION_SCHEDULED_RESUMPTION_REMOVED:
          if (this._handlers.onSubscriptionScheduledResumptionRemoved) {
            await this._handlers.onSubscriptionScheduledResumptionRemoved(
              event as WebhookEvent & {
                content: SubscriptionScheduledResumptionRemovedContent;
              },
            );
            return;
          }
          break;

        case EventType.SUBSCRIPTION_SHIPPING_ADDRESS_UPDATED:
          if (this._handlers.onSubscriptionShippingAddressUpdated) {
            await this._handlers.onSubscriptionShippingAddressUpdated(
              event as WebhookEvent & {
                content: SubscriptionShippingAddressUpdatedContent;
              },
            );
            return;
          }
          break;

        case EventType.SUBSCRIPTION_STARTED:
          if (this._handlers.onSubscriptionStarted) {
            await this._handlers.onSubscriptionStarted(
              event as WebhookEvent & { content: SubscriptionStartedContent },
            );
            return;
          }
          break;

        case EventType.SUBSCRIPTION_TRIAL_END_REMINDER:
          if (this._handlers.onSubscriptionTrialEndReminder) {
            await this._handlers.onSubscriptionTrialEndReminder(
              event as WebhookEvent & {
                content: SubscriptionTrialEndReminderContent;
              },
            );
            return;
          }
          break;

        case EventType.SUBSCRIPTION_TRIAL_EXTENDED:
          if (this._handlers.onSubscriptionTrialExtended) {
            await this._handlers.onSubscriptionTrialExtended(
              event as WebhookEvent & {
                content: SubscriptionTrialExtendedContent;
              },
            );
            return;
          }
          break;

        case EventType.TAX_WITHHELD_DELETED:
          if (this._handlers.onTaxWithheldDeleted) {
            await this._handlers.onTaxWithheldDeleted(
              event as WebhookEvent & { content: TaxWithheldDeletedContent },
            );
            return;
          }
          break;

        case EventType.TAX_WITHHELD_RECORDED:
          if (this._handlers.onTaxWithheldRecorded) {
            await this._handlers.onTaxWithheldRecorded(
              event as WebhookEvent & { content: TaxWithheldRecordedContent },
            );
            return;
          }
          break;

        case EventType.TAX_WITHHELD_REFUNDED:
          if (this._handlers.onTaxWithheldRefunded) {
            await this._handlers.onTaxWithheldRefunded(
              event as WebhookEvent & { content: TaxWithheldRefundedContent },
            );
            return;
          }
          break;

        case EventType.TOKEN_CONSUMED:
          if (this._handlers.onTokenConsumed) {
            await this._handlers.onTokenConsumed(
              event as WebhookEvent & { content: TokenConsumedContent },
            );
            return;
          }
          break;

        case EventType.TOKEN_CREATED:
          if (this._handlers.onTokenCreated) {
            await this._handlers.onTokenCreated(
              event as WebhookEvent & { content: TokenCreatedContent },
            );
            return;
          }
          break;

        case EventType.TOKEN_EXPIRED:
          if (this._handlers.onTokenExpired) {
            await this._handlers.onTokenExpired(
              event as WebhookEvent & { content: TokenExpiredContent },
            );
            return;
          }
          break;

        case EventType.TRANSACTION_CREATED:
          if (this._handlers.onTransactionCreated) {
            await this._handlers.onTransactionCreated(
              event as WebhookEvent & { content: TransactionCreatedContent },
            );
            return;
          }
          break;

        case EventType.TRANSACTION_DELETED:
          if (this._handlers.onTransactionDeleted) {
            await this._handlers.onTransactionDeleted(
              event as WebhookEvent & { content: TransactionDeletedContent },
            );
            return;
          }
          break;

        case EventType.TRANSACTION_UPDATED:
          if (this._handlers.onTransactionUpdated) {
            await this._handlers.onTransactionUpdated(
              event as WebhookEvent & { content: TransactionUpdatedContent },
            );
            return;
          }
          break;

        case EventType.UNBILLED_CHARGES_CREATED:
          if (this._handlers.onUnbilledChargesCreated) {
            await this._handlers.onUnbilledChargesCreated(
              event as WebhookEvent & {
                content: UnbilledChargesCreatedContent;
              },
            );
            return;
          }
          break;

        case EventType.UNBILLED_CHARGES_DELETED:
          if (this._handlers.onUnbilledChargesDeleted) {
            await this._handlers.onUnbilledChargesDeleted(
              event as WebhookEvent & {
                content: UnbilledChargesDeletedContent;
              },
            );
            return;
          }
          break;

        case EventType.UNBILLED_CHARGES_INVOICED:
          if (this._handlers.onUnbilledChargesInvoiced) {
            await this._handlers.onUnbilledChargesInvoiced(
              event as WebhookEvent & {
                content: UnbilledChargesInvoicedContent;
              },
            );
            return;
          }
          break;

        case EventType.UNBILLED_CHARGES_VOIDED:
          if (this._handlers.onUnbilledChargesVoided) {
            await this._handlers.onUnbilledChargesVoided(
              event as WebhookEvent & { content: UnbilledChargesVoidedContent },
            );
            return;
          }
          break;

        case EventType.USAGE_FILE_INGESTED:
          if (this._handlers.onUsageFileIngested) {
            await this._handlers.onUsageFileIngested(
              event as WebhookEvent & { content: UsageFileIngestedContent },
            );
            return;
          }
          break;

        case EventType.VARIANT_CREATED:
          if (this._handlers.onVariantCreated) {
            await this._handlers.onVariantCreated(
              event as WebhookEvent & { content: VariantCreatedContent },
            );
            return;
          }
          break;

        case EventType.VARIANT_DELETED:
          if (this._handlers.onVariantDeleted) {
            await this._handlers.onVariantDeleted(
              event as WebhookEvent & { content: VariantDeletedContent },
            );
            return;
          }
          break;

        case EventType.VARIANT_UPDATED:
          if (this._handlers.onVariantUpdated) {
            await this._handlers.onVariantUpdated(
              event as WebhookEvent & { content: VariantUpdatedContent },
            );
            return;
          }
          break;

        case EventType.VIRTUAL_BANK_ACCOUNT_ADDED:
          if (this._handlers.onVirtualBankAccountAdded) {
            await this._handlers.onVirtualBankAccountAdded(
              event as WebhookEvent & {
                content: VirtualBankAccountAddedContent;
              },
            );
            return;
          }
          break;

        case EventType.VIRTUAL_BANK_ACCOUNT_DELETED:
          if (this._handlers.onVirtualBankAccountDeleted) {
            await this._handlers.onVirtualBankAccountDeleted(
              event as WebhookEvent & {
                content: VirtualBankAccountDeletedContent;
              },
            );
            return;
          }
          break;

        case EventType.VIRTUAL_BANK_ACCOUNT_UPDATED:
          if (this._handlers.onVirtualBankAccountUpdated) {
            await this._handlers.onVirtualBankAccountUpdated(
              event as WebhookEvent & {
                content: VirtualBankAccountUpdatedContent;
              },
            );
            return;
          }
          break;

        case EventType.VOUCHER_CREATE_FAILED:
          if (this._handlers.onVoucherCreateFailed) {
            await this._handlers.onVoucherCreateFailed(
              event as WebhookEvent & { content: VoucherCreateFailedContent },
            );
            return;
          }
          break;

        case EventType.VOUCHER_CREATED:
          if (this._handlers.onVoucherCreated) {
            await this._handlers.onVoucherCreated(
              event as WebhookEvent & { content: VoucherCreatedContent },
            );
            return;
          }
          break;

        case EventType.VOUCHER_EXPIRED:
          if (this._handlers.onVoucherExpired) {
            await this._handlers.onVoucherExpired(
              event as WebhookEvent & { content: VoucherExpiredContent },
            );
            return;
          }
          break;
      }

      if (this.onUnhandledEvent) {
        await this.onUnhandledEvent(event);
      }
    } catch (err) {
      if (this.onError) {
        this.onError(err);
      } else {
        throw err;
      }
    }
  }
}
