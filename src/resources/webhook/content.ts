///<reference path='../../../types/index.d.ts'/>

export interface AddUsagesReminderContent {
  Subscription: import('chargebee').Subscription;

  Customer: import('chargebee').Customer;
}

export interface AddonCreatedContent {
  Addon: import('chargebee').Addon;
}

export interface AddonDeletedContent {
  Addon: import('chargebee').Addon;
}

export interface AddonUpdatedContent {
  Addon: import('chargebee').Addon;
}

export interface AttachedItemCreatedContent {
  AttachedItem: import('chargebee').AttachedItem;
}

export interface AttachedItemDeletedContent {
  AttachedItem: import('chargebee').AttachedItem;
}

export interface AttachedItemUpdatedContent {
  AttachedItem: import('chargebee').AttachedItem;
}

export interface AuthorizationSucceededContent {
  Transaction: import('chargebee').Transaction;
}

export interface AuthorizationVoidedContent {
  Transaction: import('chargebee').Transaction;
}

export interface BusinessEntityCreatedContent {
  BusinessEntity: import('chargebee').BusinessEntity;
}

export interface BusinessEntityDeletedContent {
  BusinessEntity: import('chargebee').BusinessEntity;
}

export interface BusinessEntityUpdatedContent {
  BusinessEntity: import('chargebee').BusinessEntity;
}

export interface CardAddedContent {
  Customer: import('chargebee').Customer;

  Card: import('chargebee').Card;
}

export interface CardDeletedContent {
  Customer: import('chargebee').Customer;

  Card: import('chargebee').Card;
}

export interface CardExpiredContent {
  Customer: import('chargebee').Customer;

  Card: import('chargebee').Card;
}

export interface CardExpiryReminderContent {
  Customer: import('chargebee').Customer;

  Card: import('chargebee').Card;
}

export interface CardUpdatedContent {
  Customer: import('chargebee').Customer;

  Card: import('chargebee').Card;
}

export interface ContractTermCancelledContent {
  ContractTerm: import('chargebee').ContractTerm;
}

export interface ContractTermCompletedContent {
  ContractTerm: import('chargebee').ContractTerm;
}

export interface ContractTermCreatedContent {
  ContractTerm: import('chargebee').ContractTerm;
}

export interface ContractTermRenewedContent {
  ContractTerm: import('chargebee').ContractTerm;
}

export interface ContractTermTerminatedContent {
  ContractTerm: import('chargebee').ContractTerm;
}

export interface CouponCodesAddedContent {
  Coupon: import('chargebee').Coupon;

  CouponSet: import('chargebee').CouponSet;
}

export interface CouponCodesDeletedContent {
  Coupon: import('chargebee').Coupon;

  CouponSet: import('chargebee').CouponSet;

  CouponCode: import('chargebee').CouponCode;
}

export interface CouponCodesUpdatedContent {
  Coupon: import('chargebee').Coupon;

  CouponSet: import('chargebee').CouponSet;
}

export interface CouponCreatedContent {
  Coupon: import('chargebee').Coupon;
}

export interface CouponDeletedContent {
  Coupon: import('chargebee').Coupon;
}

export interface CouponSetCreatedContent {
  Coupon: import('chargebee').Coupon;

  CouponSet: import('chargebee').CouponSet;
}

export interface CouponSetDeletedContent {
  Coupon: import('chargebee').Coupon;

  CouponSet: import('chargebee').CouponSet;
}

export interface CouponSetUpdatedContent {
  Coupon: import('chargebee').Coupon;

  CouponSet: import('chargebee').CouponSet;
}

export interface CouponUpdatedContent {
  Coupon: import('chargebee').Coupon;
}

export interface CreditNoteCreatedContent {
  CreditNote: import('chargebee').CreditNote;
}

export interface CreditNoteCreatedWithBackdatingContent {
  CreditNote: import('chargebee').CreditNote;
}

export interface CreditNoteDeletedContent {
  CreditNote: import('chargebee').CreditNote;
}

export interface CreditNoteUpdatedContent {
  CreditNote: import('chargebee').CreditNote;
}

export interface CustomerBusinessEntityChangedContent {
  BusinessEntityTransfer: import('chargebee').BusinessEntityTransfer;

  Customer: import('chargebee').Customer;
}

export interface CustomerChangedContent {
  Customer: import('chargebee').Customer;

  Card: import('chargebee').Card;
}

export interface CustomerCreatedContent {
  Customer: import('chargebee').Customer;

  Card: import('chargebee').Card;
}

export interface CustomerDeletedContent {
  Customer: import('chargebee').Customer;

  Card: import('chargebee').Card;

  Subscription: import('chargebee').Subscription[];
}

export interface CustomerEntitlementsUpdatedContent {
  ImpactedCustomer: import('chargebee').ImpactedCustomer;
}

export interface CustomerMovedInContent {
  Customer: import('chargebee').Customer;

  Card: import('chargebee').Card;
}

export interface CustomerMovedOutContent {
  Customer: import('chargebee').Customer;

  Card: import('chargebee').Card;
}

export interface DifferentialPriceCreatedContent {
  DifferentialPrice: import('chargebee').DifferentialPrice;
}

export interface DifferentialPriceDeletedContent {
  DifferentialPrice: import('chargebee').DifferentialPrice;
}

export interface DifferentialPriceUpdatedContent {
  DifferentialPrice: import('chargebee').DifferentialPrice;
}

export interface DunningUpdatedContent {
  Invoice: import('chargebee').Invoice;
}

export interface EntitlementOverridesAutoRemovedContent {
  Feature: import('chargebee').Feature;

  Metadata: import('chargebee').Metadata;

  ImpactedItem: import('chargebee').ImpactedItem;

  ImpactedSubscription: import('chargebee').ImpactedSubscription;
}

export interface EntitlementOverridesRemovedContent {
  ImpactedSubscription: import('chargebee').ImpactedSubscription;

  Metadata: import('chargebee').Metadata;
}

export interface EntitlementOverridesUpdatedContent {
  ImpactedSubscription: import('chargebee').ImpactedSubscription;

  Metadata: import('chargebee').Metadata;
}

export interface FeatureActivatedContent {
  Feature: import('chargebee').Feature;

  Metadata: import('chargebee').Metadata;

  ImpactedItem: import('chargebee').ImpactedItem;

  ImpactedSubscription: import('chargebee').ImpactedSubscription;
}

export interface FeatureArchivedContent {
  Feature: import('chargebee').Feature;

  Metadata: import('chargebee').Metadata;
}

export interface FeatureCreatedContent {
  Feature: import('chargebee').Feature;

  Metadata: import('chargebee').Metadata;

  ImpactedItem: import('chargebee').ImpactedItem;

  ImpactedSubscription: import('chargebee').ImpactedSubscription;
}

export interface FeatureDeletedContent {
  Feature: import('chargebee').Feature;

  Metadata: import('chargebee').Metadata;

  ImpactedItem: import('chargebee').ImpactedItem;

  ImpactedSubscription: import('chargebee').ImpactedSubscription;
}

export interface FeatureReactivatedContent {
  Feature: import('chargebee').Feature;

  Metadata: import('chargebee').Metadata;
}

export interface FeatureUpdatedContent {
  Feature: import('chargebee').Feature;

  Metadata: import('chargebee').Metadata;
}

export interface GiftCancelledContent {
  Gift: import('chargebee').Gift;
}

export interface GiftClaimedContent {
  Gift: import('chargebee').Gift;
}

export interface GiftExpiredContent {
  Gift: import('chargebee').Gift;
}

export interface GiftScheduledContent {
  Gift: import('chargebee').Gift;
}

export interface GiftUnclaimedContent {
  Gift: import('chargebee').Gift;
}

export interface GiftUpdatedContent {
  Gift: import('chargebee').Gift;
}

export interface HierarchyCreatedContent {
  Customer: import('chargebee').Customer;
}

export interface HierarchyDeletedContent {
  Customer: import('chargebee').Customer;
}

export interface InvoiceDeletedContent {
  Invoice: import('chargebee').Invoice;
}

export interface InvoiceGeneratedContent {
  Invoice: import('chargebee').Invoice;
}

export interface InvoiceGeneratedWithBackdatingContent {
  Invoice: import('chargebee').Invoice;
}

export interface InvoiceUpdatedContent {
  Invoice: import('chargebee').Invoice;
}

export interface ItemCreatedContent {
  Item: import('chargebee').Item;
}

export interface ItemDeletedContent {
  Item: import('chargebee').Item;
}

export interface ItemEntitlementsRemovedContent {
  Feature: import('chargebee').Feature;

  Metadata: import('chargebee').Metadata;

  ImpactedItem: import('chargebee').ImpactedItem;

  ImpactedSubscription: import('chargebee').ImpactedSubscription;
}

export interface ItemEntitlementsUpdatedContent {
  Feature: import('chargebee').Feature;

  Metadata: import('chargebee').Metadata;

  ImpactedItem: import('chargebee').ImpactedItem;

  ImpactedSubscription: import('chargebee').ImpactedSubscription;
}

export interface ItemFamilyCreatedContent {
  ItemFamily: import('chargebee').ItemFamily;
}

export interface ItemFamilyDeletedContent {
  ItemFamily: import('chargebee').ItemFamily;
}

export interface ItemFamilyUpdatedContent {
  ItemFamily: import('chargebee').ItemFamily;
}

export interface ItemPriceCreatedContent {
  ItemPrice: import('chargebee').ItemPrice;
}

export interface ItemPriceDeletedContent {
  ItemPrice: import('chargebee').ItemPrice;
}

export interface ItemPriceEntitlementsRemovedContent {
  Feature: import('chargebee').Feature;

  Metadata: import('chargebee').Metadata;

  ImpactedItemPrice: import('chargebee').ImpactedItemPrice;

  ImpactedSubscription: import('chargebee').ImpactedSubscription;
}

export interface ItemPriceEntitlementsUpdatedContent {
  Feature: import('chargebee').Feature;

  Metadata: import('chargebee').Metadata;

  ImpactedItemPrice: import('chargebee').ImpactedItemPrice;

  ImpactedSubscription: import('chargebee').ImpactedSubscription;
}

export interface ItemPriceUpdatedContent {
  ItemPrice: import('chargebee').ItemPrice;
}

export interface ItemUpdatedContent {
  Item: import('chargebee').Item;
}

export interface MrrUpdatedContent {
  Subscription: import('chargebee').Subscription;
}

export interface NetdPaymentDueReminderContent {
  Invoice: import('chargebee').Invoice;
}

export interface OmnichannelOneTimeOrderCreatedContent {
  OmnichannelOneTimeOrder: import('chargebee').OmnichannelOneTimeOrder;

  OmnichannelOneTimeOrderItem: import('chargebee').OmnichannelOneTimeOrderItem;

  OmnichannelTransaction: import('chargebee').OmnichannelTransaction;

  Customer: import('chargebee').Customer;
}

export interface OmnichannelOneTimeOrderItemCancelledContent {
  OmnichannelOneTimeOrder: import('chargebee').OmnichannelOneTimeOrder;

  OmnichannelOneTimeOrderItem: import('chargebee').OmnichannelOneTimeOrderItem;

  OmnichannelTransaction: import('chargebee').OmnichannelTransaction;

  Customer: import('chargebee').Customer;
}

export interface OmnichannelSubscriptionCreatedContent {
  OmnichannelSubscriptionItem: import('chargebee').OmnichannelSubscriptionItem;

  OmnichannelSubscription: import('chargebee').OmnichannelSubscription;

  OmnichannelTransaction: import('chargebee').OmnichannelTransaction;

  OmnichannelSubscriptionItemScheduledChange: import('chargebee').OmnichannelSubscriptionItemScheduledChange;

  Customer: import('chargebee').Customer;
}

export interface OmnichannelSubscriptionImportedContent {
  OmnichannelSubscriptionItem: import('chargebee').OmnichannelSubscriptionItem;

  OmnichannelSubscription: import('chargebee').OmnichannelSubscription;

  OmnichannelTransaction: import('chargebee').OmnichannelTransaction;

  OmnichannelSubscriptionItemScheduledChange: import('chargebee').OmnichannelSubscriptionItemScheduledChange;

  Customer: import('chargebee').Customer;
}

export interface OmnichannelSubscriptionItemCancellationScheduledContent {
  OmnichannelSubscription: import('chargebee').OmnichannelSubscription;

  OmnichannelSubscriptionItem: import('chargebee').OmnichannelSubscriptionItem;

  Customer: import('chargebee').Customer;
}

export interface OmnichannelSubscriptionItemCancelledContent {
  OmnichannelSubscription: import('chargebee').OmnichannelSubscription;

  OmnichannelSubscriptionItem: import('chargebee').OmnichannelSubscriptionItem;

  Customer: import('chargebee').Customer;
}

export interface OmnichannelSubscriptionItemChangeScheduledContent {
  OmnichannelSubscriptionItem: import('chargebee').OmnichannelSubscriptionItem;

  OmnichannelSubscriptionItemScheduledChange: import('chargebee').OmnichannelSubscriptionItemScheduledChange;

  Customer: import('chargebee').Customer;
}

export interface OmnichannelSubscriptionItemChangedContent {
  OmnichannelSubscriptionItem: import('chargebee').OmnichannelSubscriptionItem;

  OmnichannelSubscription: import('chargebee').OmnichannelSubscription;

  OmnichannelTransaction: import('chargebee').OmnichannelTransaction;

  OmnichannelSubscriptionItemScheduledChange: import('chargebee').OmnichannelSubscriptionItemScheduledChange;

  Customer: import('chargebee').Customer;
}

export interface OmnichannelSubscriptionItemDowngradeScheduledContent {
  OmnichannelSubscription: import('chargebee').OmnichannelSubscription;

  OmnichannelSubscriptionItem: import('chargebee').OmnichannelSubscriptionItem;

  Customer: import('chargebee').Customer;
}

export interface OmnichannelSubscriptionItemDowngradedContent {
  OmnichannelSubscriptionItem: import('chargebee').OmnichannelSubscriptionItem;

  OmnichannelSubscription: import('chargebee').OmnichannelSubscription;

  OmnichannelTransaction: import('chargebee').OmnichannelTransaction;

  Customer: import('chargebee').Customer;
}

export interface OmnichannelSubscriptionItemDunningExpiredContent {
  OmnichannelSubscription: import('chargebee').OmnichannelSubscription;

  OmnichannelSubscriptionItem: import('chargebee').OmnichannelSubscriptionItem;

  Customer: import('chargebee').Customer;
}

export interface OmnichannelSubscriptionItemDunningStartedContent {
  OmnichannelSubscription: import('chargebee').OmnichannelSubscription;

  OmnichannelSubscriptionItem: import('chargebee').OmnichannelSubscriptionItem;

  Customer: import('chargebee').Customer;
}

export interface OmnichannelSubscriptionItemExpiredContent {
  OmnichannelSubscription: import('chargebee').OmnichannelSubscription;

  OmnichannelSubscriptionItem: import('chargebee').OmnichannelSubscriptionItem;

  Customer: import('chargebee').Customer;
}

export interface OmnichannelSubscriptionItemGracePeriodExpiredContent {
  OmnichannelSubscription: import('chargebee').OmnichannelSubscription;

  OmnichannelSubscriptionItem: import('chargebee').OmnichannelSubscriptionItem;

  Customer: import('chargebee').Customer;
}

export interface OmnichannelSubscriptionItemGracePeriodStartedContent {
  OmnichannelSubscription: import('chargebee').OmnichannelSubscription;

  OmnichannelSubscriptionItem: import('chargebee').OmnichannelSubscriptionItem;

  Customer: import('chargebee').Customer;
}

export interface OmnichannelSubscriptionItemPauseScheduledContent {
  OmnichannelSubscriptionItem: import('chargebee').OmnichannelSubscriptionItem;

  OmnichannelSubscriptionItemScheduledChange: import('chargebee').OmnichannelSubscriptionItemScheduledChange;

  Customer: import('chargebee').Customer;
}

export interface OmnichannelSubscriptionItemPausedContent {
  OmnichannelSubscription: import('chargebee').OmnichannelSubscription;

  OmnichannelSubscriptionItem: import('chargebee').OmnichannelSubscriptionItem;

  Customer: import('chargebee').Customer;
}

export interface OmnichannelSubscriptionItemReactivatedContent {
  OmnichannelSubscription: import('chargebee').OmnichannelSubscription;

  OmnichannelSubscriptionItem: import('chargebee').OmnichannelSubscriptionItem;

  Customer: import('chargebee').Customer;
}

export interface OmnichannelSubscriptionItemRenewedContent {
  OmnichannelSubscriptionItem: import('chargebee').OmnichannelSubscriptionItem;

  OmnichannelSubscription: import('chargebee').OmnichannelSubscription;

  OmnichannelTransaction: import('chargebee').OmnichannelTransaction;

  OmnichannelSubscriptionItemScheduledChange: import('chargebee').OmnichannelSubscriptionItemScheduledChange;

  Customer: import('chargebee').Customer;
}

export interface OmnichannelSubscriptionItemResubscribedContent {
  OmnichannelSubscriptionItem: import('chargebee').OmnichannelSubscriptionItem;

  OmnichannelSubscription: import('chargebee').OmnichannelSubscription;

  OmnichannelTransaction: import('chargebee').OmnichannelTransaction;

  OmnichannelSubscriptionItemScheduledChange: import('chargebee').OmnichannelSubscriptionItemScheduledChange;

  Customer: import('chargebee').Customer;
}

export interface OmnichannelSubscriptionItemResumedContent {
  OmnichannelSubscription: import('chargebee').OmnichannelSubscription;

  OmnichannelSubscriptionItem: import('chargebee').OmnichannelSubscriptionItem;

  Customer: import('chargebee').Customer;
}

export interface OmnichannelSubscriptionItemScheduledCancellationRemovedContent {
  OmnichannelSubscription: import('chargebee').OmnichannelSubscription;

  OmnichannelSubscriptionItem: import('chargebee').OmnichannelSubscriptionItem;

  Customer: import('chargebee').Customer;
}

export interface OmnichannelSubscriptionItemScheduledChangeRemovedContent {
  OmnichannelSubscriptionItem: import('chargebee').OmnichannelSubscriptionItem;

  OmnichannelSubscriptionItemScheduledChange: import('chargebee').OmnichannelSubscriptionItemScheduledChange;

  Customer: import('chargebee').Customer;
}

export interface OmnichannelSubscriptionItemScheduledDowngradeRemovedContent {
  OmnichannelSubscription: import('chargebee').OmnichannelSubscription;

  OmnichannelSubscriptionItem: import('chargebee').OmnichannelSubscriptionItem;

  Customer: import('chargebee').Customer;
}

export interface OmnichannelSubscriptionItemUpgradedContent {
  OmnichannelSubscriptionItem: import('chargebee').OmnichannelSubscriptionItem;

  OmnichannelSubscription: import('chargebee').OmnichannelSubscription;

  OmnichannelTransaction: import('chargebee').OmnichannelTransaction;

  OmnichannelSubscriptionItemScheduledChange: import('chargebee').OmnichannelSubscriptionItemScheduledChange;

  Customer: import('chargebee').Customer;
}

export interface OmnichannelSubscriptionMovedInContent {
  OmnichannelSubscription: import('chargebee').OmnichannelSubscription;

  Customer: import('chargebee').Customer;
}

export interface OmnichannelTransactionCreatedContent {
  OmnichannelTransaction: import('chargebee').OmnichannelTransaction;
}

export interface OrderCancelledContent {
  Order: import('chargebee').Order;
}

export interface OrderCreatedContent {
  Order: import('chargebee').Order;
}

export interface OrderDeletedContent {
  Order: import('chargebee').Order;
}

export interface OrderDeliveredContent {
  Order: import('chargebee').Order;
}

export interface OrderReadyToProcessContent {
  Order: import('chargebee').Order;
}

export interface OrderReadyToShipContent {
  Order: import('chargebee').Order;
}

export interface OrderResentContent {
  Order: import('chargebee').Order;
}

export interface OrderReturnedContent {
  Order: import('chargebee').Order;
}

export interface OrderUpdatedContent {
  Order: import('chargebee').Order;
}

export interface PaymentDueReminderContent {
  Customer: import('chargebee').Customer;

  Invoice: import('chargebee').Invoice;
}

export interface PaymentFailedContent {
  Transaction: import('chargebee').Transaction;

  Invoice: import('chargebee').Invoice;

  Customer: import('chargebee').Customer;

  Subscription: import('chargebee').Subscription;

  Card: import('chargebee').Card;
}

export interface PaymentInitiatedContent {
  Transaction: import('chargebee').Transaction;

  Invoice: import('chargebee').Invoice;

  Customer: import('chargebee').Customer;

  Subscription: import('chargebee').Subscription;

  Card: import('chargebee').Card;
}

export interface PaymentIntentCreatedContent {
  PaymentIntent: import('chargebee').PaymentIntent;
}

export interface PaymentIntentUpdatedContent {
  PaymentIntent: import('chargebee').PaymentIntent;
}

export interface PaymentRefundedContent {
  Transaction: import('chargebee').Transaction;

  Invoice: import('chargebee').Invoice;

  CreditNote: import('chargebee').CreditNote;

  Customer: import('chargebee').Customer;

  Subscription: import('chargebee').Subscription;

  Card: import('chargebee').Card;
}

export interface PaymentScheduleSchemeCreatedContent {
  PaymentScheduleScheme: import('chargebee').PaymentScheduleScheme;
}

export interface PaymentScheduleSchemeDeletedContent {
  PaymentScheduleScheme: import('chargebee').PaymentScheduleScheme;
}

export interface PaymentSchedulesCreatedContent {
  PaymentSchedule: import('chargebee').PaymentSchedule;
}

export interface PaymentSchedulesUpdatedContent {
  PaymentSchedule: import('chargebee').PaymentSchedule;
}

export interface PaymentSourceAddedContent {
  Customer: import('chargebee').Customer;

  PaymentSource: import('chargebee').PaymentSource;
}

export interface PaymentSourceDeletedContent {
  Customer: import('chargebee').Customer;

  PaymentSource: import('chargebee').PaymentSource;
}

export interface PaymentSourceExpiredContent {
  Customer: import('chargebee').Customer;

  PaymentSource: import('chargebee').PaymentSource;
}

export interface PaymentSourceExpiringContent {
  Customer: import('chargebee').Customer;

  PaymentSource: import('chargebee').PaymentSource;
}

export interface PaymentSourceLocallyDeletedContent {
  Customer: import('chargebee').Customer;

  PaymentSource: import('chargebee').PaymentSource;
}

export interface PaymentSourceUpdatedContent {
  Customer: import('chargebee').Customer;

  PaymentSource: import('chargebee').PaymentSource;
}

export interface PaymentSucceededContent {
  Transaction: import('chargebee').Transaction;

  Invoice: import('chargebee').Invoice;

  Customer: import('chargebee').Customer;

  Subscription: import('chargebee').Subscription;

  Card: import('chargebee').Card;
}

export interface PendingInvoiceCreatedContent {
  Invoice: import('chargebee').Invoice;
}

export interface PendingInvoiceUpdatedContent {
  Invoice: import('chargebee').Invoice;
}

export interface PlanCreatedContent {
  Plan: import('chargebee').Plan;
}

export interface PlanDeletedContent {
  Plan: import('chargebee').Plan;
}

export interface PlanUpdatedContent {
  Plan: import('chargebee').Plan;
}

export interface PriceVariantCreatedContent {
  PriceVariant: import('chargebee').PriceVariant;

  Attribute: import('chargebee').Attribute;
}

export interface PriceVariantDeletedContent {
  PriceVariant: import('chargebee').PriceVariant;

  Attribute: import('chargebee').Attribute;
}

export interface PriceVariantUpdatedContent {
  PriceVariant: import('chargebee').PriceVariant;

  Attribute: import('chargebee').Attribute;
}

export interface ProductCreatedContent {}

export interface ProductDeletedContent {}

export interface ProductUpdatedContent {}

export interface PromotionalCreditsAddedContent {
  Customer: import('chargebee').Customer;

  PromotionalCredit: import('chargebee').PromotionalCredit;
}

export interface PromotionalCreditsDeductedContent {
  Customer: import('chargebee').Customer;

  PromotionalCredit: import('chargebee').PromotionalCredit;
}

export interface PurchaseCreatedContent {
  Purchase: import('chargebee').Purchase;
}

export interface QuoteCreatedContent {
  Quote: import('chargebee').Quote;
}

export interface QuoteDeletedContent {
  Quote: import('chargebee').Quote;
}

export interface QuoteUpdatedContent {
  Quote: import('chargebee').Quote;
}

export interface RecordPurchaseFailedContent {
  RecordedPurchase: import('chargebee').RecordedPurchase;

  Customer: import('chargebee').Customer;
}

export interface RefundInitiatedContent {
  Transaction: import('chargebee').Transaction;

  Invoice: import('chargebee').Invoice;

  CreditNote: import('chargebee').CreditNote;

  Customer: import('chargebee').Customer;

  Subscription: import('chargebee').Subscription;

  Card: import('chargebee').Card;
}

export interface RuleCreatedContent {
  Rule: import('chargebee').Rule;
}

export interface RuleDeletedContent {
  Rule: import('chargebee').Rule;
}

export interface RuleUpdatedContent {
  Rule: import('chargebee').Rule;
}

export interface SalesOrderCreatedContent {}

export interface SalesOrderUpdatedContent {}

export interface SubscriptionActivatedContent {
  Subscription: import('chargebee').Subscription;

  Customer: import('chargebee').Customer;

  Card: import('chargebee').Card;

  Invoice: import('chargebee').Invoice;
}

export interface SubscriptionActivatedWithBackdatingContent {
  Subscription: import('chargebee').Subscription;

  Customer: import('chargebee').Customer;

  Card: import('chargebee').Card;

  Invoice: import('chargebee').Invoice;

  UnbilledCharge: import('chargebee').UnbilledCharge[];
}

export interface SubscriptionAdvanceInvoiceScheduleAddedContent {
  Subscription: import('chargebee').Subscription;

  Customer: import('chargebee').Customer;

  AdvanceInvoiceSchedule: import('chargebee').AdvanceInvoiceSchedule[];
}

export interface SubscriptionAdvanceInvoiceScheduleRemovedContent {
  Subscription: import('chargebee').Subscription;

  Customer: import('chargebee').Customer;

  AdvanceInvoiceSchedule: import('chargebee').AdvanceInvoiceSchedule[];
}

export interface SubscriptionAdvanceInvoiceScheduleUpdatedContent {
  Subscription: import('chargebee').Subscription;

  Customer: import('chargebee').Customer;

  AdvanceInvoiceSchedule: import('chargebee').AdvanceInvoiceSchedule[];
}

export interface SubscriptionBusinessEntityChangedContent {
  BusinessEntityTransfer: import('chargebee').BusinessEntityTransfer;

  Subscription: import('chargebee').Subscription;
}

export interface SubscriptionCanceledWithBackdatingContent {
  Subscription: import('chargebee').Subscription;

  Customer: import('chargebee').Customer;

  Card: import('chargebee').Card;

  Invoice: import('chargebee').Invoice;

  CreditNote: import('chargebee').CreditNote[];

  UnbilledCharge: import('chargebee').UnbilledCharge[];
}

export interface SubscriptionCancellationReminderContent {
  Subscription: import('chargebee').Subscription;

  Customer: import('chargebee').Customer;

  Card: import('chargebee').Card;

  AdvanceInvoiceSchedule: import('chargebee').AdvanceInvoiceSchedule;
}

export interface SubscriptionCancellationScheduledContent {
  Subscription: import('chargebee').Subscription;

  Customer: import('chargebee').Customer;

  Card: import('chargebee').Card;

  AdvanceInvoiceSchedule: import('chargebee').AdvanceInvoiceSchedule;
}

export interface SubscriptionCancelledContent {
  Subscription: import('chargebee').Subscription;

  Customer: import('chargebee').Customer;

  Card: import('chargebee').Card;

  Invoice: import('chargebee').Invoice;

  CreditNote: import('chargebee').CreditNote[];

  UnbilledCharge: import('chargebee').UnbilledCharge[];
}

export interface SubscriptionChangedContent {
  Subscription: import('chargebee').Subscription;

  Customer: import('chargebee').Customer;

  Card: import('chargebee').Card;

  Invoice: import('chargebee').Invoice;

  CreditNote: import('chargebee').CreditNote[];

  UnbilledCharge: import('chargebee').UnbilledCharge[];
}

export interface SubscriptionChangedWithBackdatingContent {
  Subscription: import('chargebee').Subscription;

  Customer: import('chargebee').Customer;

  Card: import('chargebee').Card;

  Invoice: import('chargebee').Invoice;

  CreditNote: import('chargebee').CreditNote[];

  UnbilledCharge: import('chargebee').UnbilledCharge[];
}

export interface SubscriptionChangesScheduledContent {
  Subscription: import('chargebee').Subscription;

  Customer: import('chargebee').Customer;

  Card: import('chargebee').Card;

  AdvanceInvoiceSchedule: import('chargebee').AdvanceInvoiceSchedule;
}

export interface SubscriptionCreatedContent {
  Subscription: import('chargebee').Subscription;

  Customer: import('chargebee').Customer;

  Card: import('chargebee').Card;

  Invoice: import('chargebee').Invoice;

  UnbilledCharge: import('chargebee').UnbilledCharge[];
}

export interface SubscriptionCreatedWithBackdatingContent {
  Subscription: import('chargebee').Subscription;

  Customer: import('chargebee').Customer;

  Card: import('chargebee').Card;

  Invoice: import('chargebee').Invoice;

  UnbilledCharge: import('chargebee').UnbilledCharge[];
}

export interface SubscriptionDeletedContent {
  Subscription: import('chargebee').Subscription;

  Customer: import('chargebee').Customer;

  Card: import('chargebee').Card;

  AdvanceInvoiceSchedule: import('chargebee').AdvanceInvoiceSchedule;
}

export interface SubscriptionEntitlementsCreatedContent {
  SubscriptionEntitlementsCreatedDetail: import('chargebee').SubscriptionEntitlementsCreatedDetail;
}

export interface SubscriptionEntitlementsUpdatedContent {
  SubscriptionEntitlementsUpdatedDetail: import('chargebee').SubscriptionEntitlementsUpdatedDetail;
}

export interface SubscriptionItemsRenewedContent {
  Subscription: import('chargebee').Subscription;

  Customer: import('chargebee').Customer;

  Card: import('chargebee').Card;

  Invoice: import('chargebee').Invoice;

  CreditNote: import('chargebee').CreditNote[];

  UnbilledCharge: import('chargebee').UnbilledCharge[];
}

export interface SubscriptionMovedInContent {
  Subscription: import('chargebee').Subscription;
}

export interface SubscriptionMovedOutContent {
  Subscription: import('chargebee').Subscription;
}

export interface SubscriptionMovementFailedContent {
  Subscription: import('chargebee').Subscription;
}

export interface SubscriptionPauseScheduledContent {
  Subscription: import('chargebee').Subscription;

  Customer: import('chargebee').Customer;

  Card: import('chargebee').Card;

  AdvanceInvoiceSchedule: import('chargebee').AdvanceInvoiceSchedule;
}

export interface SubscriptionPausedContent {
  Subscription: import('chargebee').Subscription;

  Customer: import('chargebee').Customer;

  Card: import('chargebee').Card;

  Invoice: import('chargebee').Invoice;

  CreditNote: import('chargebee').CreditNote[];

  UnbilledCharge: import('chargebee').UnbilledCharge[];
}

export interface SubscriptionRampAppliedContent {
  Ramp: import('chargebee').Ramp;
}

export interface SubscriptionRampCreatedContent {
  Ramp: import('chargebee').Ramp;
}

export interface SubscriptionRampDeletedContent {
  Ramp: import('chargebee').Ramp;
}

export interface SubscriptionRampDraftedContent {
  Ramp: import('chargebee').Ramp;
}

export interface SubscriptionRampUpdatedContent {
  Ramp: import('chargebee').Ramp;
}

export interface SubscriptionReactivatedContent {
  Subscription: import('chargebee').Subscription;

  Customer: import('chargebee').Customer;

  Card: import('chargebee').Card;

  Invoice: import('chargebee').Invoice;

  UnbilledCharge: import('chargebee').UnbilledCharge[];
}

export interface SubscriptionReactivatedWithBackdatingContent {
  Subscription: import('chargebee').Subscription;

  Customer: import('chargebee').Customer;

  Card: import('chargebee').Card;

  Invoice: import('chargebee').Invoice;

  UnbilledCharge: import('chargebee').UnbilledCharge[];
}

export interface SubscriptionRenewalReminderContent {
  Subscription: import('chargebee').Subscription;

  Customer: import('chargebee').Customer;

  Card: import('chargebee').Card;

  AdvanceInvoiceSchedule: import('chargebee').AdvanceInvoiceSchedule;
}

export interface SubscriptionRenewedContent {
  Subscription: import('chargebee').Subscription;

  Customer: import('chargebee').Customer;

  Card: import('chargebee').Card;

  Invoice: import('chargebee').Invoice;

  UnbilledCharge: import('chargebee').UnbilledCharge[];
}

export interface SubscriptionResumedContent {
  Subscription: import('chargebee').Subscription;

  Customer: import('chargebee').Customer;

  Card: import('chargebee').Card;

  Invoice: import('chargebee').Invoice;

  UnbilledCharge: import('chargebee').UnbilledCharge[];
}

export interface SubscriptionResumptionScheduledContent {
  Subscription: import('chargebee').Subscription;

  Customer: import('chargebee').Customer;

  Card: import('chargebee').Card;

  AdvanceInvoiceSchedule: import('chargebee').AdvanceInvoiceSchedule;
}

export interface SubscriptionScheduledCancellationRemovedContent {
  Subscription: import('chargebee').Subscription;

  Customer: import('chargebee').Customer;

  Card: import('chargebee').Card;

  AdvanceInvoiceSchedule: import('chargebee').AdvanceInvoiceSchedule;
}

export interface SubscriptionScheduledChangesRemovedContent {
  Subscription: import('chargebee').Subscription;

  Customer: import('chargebee').Customer;

  Card: import('chargebee').Card;

  AdvanceInvoiceSchedule: import('chargebee').AdvanceInvoiceSchedule;
}

export interface SubscriptionScheduledPauseRemovedContent {
  Subscription: import('chargebee').Subscription;

  Customer: import('chargebee').Customer;

  Card: import('chargebee').Card;

  AdvanceInvoiceSchedule: import('chargebee').AdvanceInvoiceSchedule;
}

export interface SubscriptionScheduledResumptionRemovedContent {
  Subscription: import('chargebee').Subscription;

  Customer: import('chargebee').Customer;

  Card: import('chargebee').Card;

  AdvanceInvoiceSchedule: import('chargebee').AdvanceInvoiceSchedule;
}

export interface SubscriptionShippingAddressUpdatedContent {
  Subscription: import('chargebee').Subscription;

  Customer: import('chargebee').Customer;

  Card: import('chargebee').Card;

  AdvanceInvoiceSchedule: import('chargebee').AdvanceInvoiceSchedule;
}

export interface SubscriptionStartedContent {
  Subscription: import('chargebee').Subscription;

  Customer: import('chargebee').Customer;

  Card: import('chargebee').Card;

  Invoice: import('chargebee').Invoice;
}

export interface SubscriptionTrialEndReminderContent {
  Subscription: import('chargebee').Subscription;

  Customer: import('chargebee').Customer;

  Card: import('chargebee').Card;

  AdvanceInvoiceSchedule: import('chargebee').AdvanceInvoiceSchedule;
}

export interface SubscriptionTrialExtendedContent {
  Subscription: import('chargebee').Subscription;

  Customer: import('chargebee').Customer;

  Card: import('chargebee').Card;

  AdvanceInvoiceSchedule: import('chargebee').AdvanceInvoiceSchedule;
}

export interface TaxWithheldDeletedContent {
  TaxWithheld: import('chargebee').TaxWithheld;

  Invoice: import('chargebee').Invoice;

  CreditNote: import('chargebee').CreditNote;
}

export interface TaxWithheldRecordedContent {
  TaxWithheld: import('chargebee').TaxWithheld;

  Invoice: import('chargebee').Invoice;

  CreditNote: import('chargebee').CreditNote;
}

export interface TaxWithheldRefundedContent {
  TaxWithheld: import('chargebee').TaxWithheld;

  Invoice: import('chargebee').Invoice;

  CreditNote: import('chargebee').CreditNote;
}

export interface TokenConsumedContent {
  Token: import('chargebee').Token;
}

export interface TokenCreatedContent {
  Token: import('chargebee').Token;
}

export interface TokenExpiredContent {
  Token: import('chargebee').Token;
}

export interface TransactionCreatedContent {
  Transaction: import('chargebee').Transaction;
}

export interface TransactionDeletedContent {
  Transaction: import('chargebee').Transaction;
}

export interface TransactionUpdatedContent {
  Transaction: import('chargebee').Transaction;
}

export interface UnbilledChargesCreatedContent {
  UnbilledCharge: import('chargebee').UnbilledCharge[];
}

export interface UnbilledChargesDeletedContent {
  UnbilledCharge: import('chargebee').UnbilledCharge[];
}

export interface UnbilledChargesInvoicedContent {
  UnbilledCharge: import('chargebee').UnbilledCharge[];

  Invoice: import('chargebee').Invoice;
}

export interface UnbilledChargesVoidedContent {
  UnbilledCharge: import('chargebee').UnbilledCharge[];
}

export interface UsageFileIngestedContent {
  UsageFile: import('chargebee').UsageFile;
}

export interface VariantCreatedContent {}

export interface VariantDeletedContent {}

export interface VariantUpdatedContent {}

export interface VirtualBankAccountAddedContent {
  Customer: import('chargebee').Customer;

  VirtualBankAccount: import('chargebee').VirtualBankAccount;
}

export interface VirtualBankAccountDeletedContent {
  Customer: import('chargebee').Customer;

  VirtualBankAccount: import('chargebee').VirtualBankAccount;
}

export interface VirtualBankAccountUpdatedContent {
  Customer: import('chargebee').Customer;

  VirtualBankAccount: import('chargebee').VirtualBankAccount;
}

export interface VoucherCreateFailedContent {
  PaymentVoucher: import('chargebee').PaymentVoucher;
}

export interface VoucherCreatedContent {
  PaymentVoucher: import('chargebee').PaymentVoucher;
}

export interface VoucherExpiredContent {
  PaymentVoucher: import('chargebee').PaymentVoucher;
}

import { WebhookEventType } from './eventType.js';

/**
 * Maps webhook event types to their corresponding content types.
 * Used for type-safe access to event.content based on event_type.
 */
export type WebhookContentMap = {
  [WebhookEventType.AddUsagesReminder]: AddUsagesReminderContent;

  [WebhookEventType.AddonCreated]: AddonCreatedContent;

  [WebhookEventType.AddonDeleted]: AddonDeletedContent;

  [WebhookEventType.AddonUpdated]: AddonUpdatedContent;

  [WebhookEventType.AttachedItemCreated]: AttachedItemCreatedContent;

  [WebhookEventType.AttachedItemDeleted]: AttachedItemDeletedContent;

  [WebhookEventType.AttachedItemUpdated]: AttachedItemUpdatedContent;

  [WebhookEventType.AuthorizationSucceeded]: AuthorizationSucceededContent;

  [WebhookEventType.AuthorizationVoided]: AuthorizationVoidedContent;

  [WebhookEventType.BusinessEntityCreated]: BusinessEntityCreatedContent;

  [WebhookEventType.BusinessEntityDeleted]: BusinessEntityDeletedContent;

  [WebhookEventType.BusinessEntityUpdated]: BusinessEntityUpdatedContent;

  [WebhookEventType.CardAdded]: CardAddedContent;

  [WebhookEventType.CardDeleted]: CardDeletedContent;

  [WebhookEventType.CardExpired]: CardExpiredContent;

  [WebhookEventType.CardExpiryReminder]: CardExpiryReminderContent;

  [WebhookEventType.CardUpdated]: CardUpdatedContent;

  [WebhookEventType.ContractTermCancelled]: ContractTermCancelledContent;

  [WebhookEventType.ContractTermCompleted]: ContractTermCompletedContent;

  [WebhookEventType.ContractTermCreated]: ContractTermCreatedContent;

  [WebhookEventType.ContractTermRenewed]: ContractTermRenewedContent;

  [WebhookEventType.ContractTermTerminated]: ContractTermTerminatedContent;

  [WebhookEventType.CouponCodesAdded]: CouponCodesAddedContent;

  [WebhookEventType.CouponCodesDeleted]: CouponCodesDeletedContent;

  [WebhookEventType.CouponCodesUpdated]: CouponCodesUpdatedContent;

  [WebhookEventType.CouponCreated]: CouponCreatedContent;

  [WebhookEventType.CouponDeleted]: CouponDeletedContent;

  [WebhookEventType.CouponSetCreated]: CouponSetCreatedContent;

  [WebhookEventType.CouponSetDeleted]: CouponSetDeletedContent;

  [WebhookEventType.CouponSetUpdated]: CouponSetUpdatedContent;

  [WebhookEventType.CouponUpdated]: CouponUpdatedContent;

  [WebhookEventType.CreditNoteCreated]: CreditNoteCreatedContent;

  [WebhookEventType.CreditNoteCreatedWithBackdating]: CreditNoteCreatedWithBackdatingContent;

  [WebhookEventType.CreditNoteDeleted]: CreditNoteDeletedContent;

  [WebhookEventType.CreditNoteUpdated]: CreditNoteUpdatedContent;

  [WebhookEventType.CustomerBusinessEntityChanged]: CustomerBusinessEntityChangedContent;

  [WebhookEventType.CustomerChanged]: CustomerChangedContent;

  [WebhookEventType.CustomerCreated]: CustomerCreatedContent;

  [WebhookEventType.CustomerDeleted]: CustomerDeletedContent;

  [WebhookEventType.CustomerEntitlementsUpdated]: CustomerEntitlementsUpdatedContent;

  [WebhookEventType.CustomerMovedIn]: CustomerMovedInContent;

  [WebhookEventType.CustomerMovedOut]: CustomerMovedOutContent;

  [WebhookEventType.DifferentialPriceCreated]: DifferentialPriceCreatedContent;

  [WebhookEventType.DifferentialPriceDeleted]: DifferentialPriceDeletedContent;

  [WebhookEventType.DifferentialPriceUpdated]: DifferentialPriceUpdatedContent;

  [WebhookEventType.DunningUpdated]: DunningUpdatedContent;

  [WebhookEventType.EntitlementOverridesAutoRemoved]: EntitlementOverridesAutoRemovedContent;

  [WebhookEventType.EntitlementOverridesRemoved]: EntitlementOverridesRemovedContent;

  [WebhookEventType.EntitlementOverridesUpdated]: EntitlementOverridesUpdatedContent;

  [WebhookEventType.FeatureActivated]: FeatureActivatedContent;

  [WebhookEventType.FeatureArchived]: FeatureArchivedContent;

  [WebhookEventType.FeatureCreated]: FeatureCreatedContent;

  [WebhookEventType.FeatureDeleted]: FeatureDeletedContent;

  [WebhookEventType.FeatureReactivated]: FeatureReactivatedContent;

  [WebhookEventType.FeatureUpdated]: FeatureUpdatedContent;

  [WebhookEventType.GiftCancelled]: GiftCancelledContent;

  [WebhookEventType.GiftClaimed]: GiftClaimedContent;

  [WebhookEventType.GiftExpired]: GiftExpiredContent;

  [WebhookEventType.GiftScheduled]: GiftScheduledContent;

  [WebhookEventType.GiftUnclaimed]: GiftUnclaimedContent;

  [WebhookEventType.GiftUpdated]: GiftUpdatedContent;

  [WebhookEventType.HierarchyCreated]: HierarchyCreatedContent;

  [WebhookEventType.HierarchyDeleted]: HierarchyDeletedContent;

  [WebhookEventType.InvoiceDeleted]: InvoiceDeletedContent;

  [WebhookEventType.InvoiceGenerated]: InvoiceGeneratedContent;

  [WebhookEventType.InvoiceGeneratedWithBackdating]: InvoiceGeneratedWithBackdatingContent;

  [WebhookEventType.InvoiceUpdated]: InvoiceUpdatedContent;

  [WebhookEventType.ItemCreated]: ItemCreatedContent;

  [WebhookEventType.ItemDeleted]: ItemDeletedContent;

  [WebhookEventType.ItemEntitlementsRemoved]: ItemEntitlementsRemovedContent;

  [WebhookEventType.ItemEntitlementsUpdated]: ItemEntitlementsUpdatedContent;

  [WebhookEventType.ItemFamilyCreated]: ItemFamilyCreatedContent;

  [WebhookEventType.ItemFamilyDeleted]: ItemFamilyDeletedContent;

  [WebhookEventType.ItemFamilyUpdated]: ItemFamilyUpdatedContent;

  [WebhookEventType.ItemPriceCreated]: ItemPriceCreatedContent;

  [WebhookEventType.ItemPriceDeleted]: ItemPriceDeletedContent;

  [WebhookEventType.ItemPriceEntitlementsRemoved]: ItemPriceEntitlementsRemovedContent;

  [WebhookEventType.ItemPriceEntitlementsUpdated]: ItemPriceEntitlementsUpdatedContent;

  [WebhookEventType.ItemPriceUpdated]: ItemPriceUpdatedContent;

  [WebhookEventType.ItemUpdated]: ItemUpdatedContent;

  [WebhookEventType.MrrUpdated]: MrrUpdatedContent;

  [WebhookEventType.NetdPaymentDueReminder]: NetdPaymentDueReminderContent;

  [WebhookEventType.OmnichannelOneTimeOrderCreated]: OmnichannelOneTimeOrderCreatedContent;

  [WebhookEventType.OmnichannelOneTimeOrderItemCancelled]: OmnichannelOneTimeOrderItemCancelledContent;

  [WebhookEventType.OmnichannelSubscriptionCreated]: OmnichannelSubscriptionCreatedContent;

  [WebhookEventType.OmnichannelSubscriptionImported]: OmnichannelSubscriptionImportedContent;

  [WebhookEventType.OmnichannelSubscriptionItemCancellationScheduled]: OmnichannelSubscriptionItemCancellationScheduledContent;

  [WebhookEventType.OmnichannelSubscriptionItemCancelled]: OmnichannelSubscriptionItemCancelledContent;

  [WebhookEventType.OmnichannelSubscriptionItemChangeScheduled]: OmnichannelSubscriptionItemChangeScheduledContent;

  [WebhookEventType.OmnichannelSubscriptionItemChanged]: OmnichannelSubscriptionItemChangedContent;

  [WebhookEventType.OmnichannelSubscriptionItemDowngradeScheduled]: OmnichannelSubscriptionItemDowngradeScheduledContent;

  [WebhookEventType.OmnichannelSubscriptionItemDowngraded]: OmnichannelSubscriptionItemDowngradedContent;

  [WebhookEventType.OmnichannelSubscriptionItemDunningExpired]: OmnichannelSubscriptionItemDunningExpiredContent;

  [WebhookEventType.OmnichannelSubscriptionItemDunningStarted]: OmnichannelSubscriptionItemDunningStartedContent;

  [WebhookEventType.OmnichannelSubscriptionItemExpired]: OmnichannelSubscriptionItemExpiredContent;

  [WebhookEventType.OmnichannelSubscriptionItemGracePeriodExpired]: OmnichannelSubscriptionItemGracePeriodExpiredContent;

  [WebhookEventType.OmnichannelSubscriptionItemGracePeriodStarted]: OmnichannelSubscriptionItemGracePeriodStartedContent;

  [WebhookEventType.OmnichannelSubscriptionItemPauseScheduled]: OmnichannelSubscriptionItemPauseScheduledContent;

  [WebhookEventType.OmnichannelSubscriptionItemPaused]: OmnichannelSubscriptionItemPausedContent;

  [WebhookEventType.OmnichannelSubscriptionItemReactivated]: OmnichannelSubscriptionItemReactivatedContent;

  [WebhookEventType.OmnichannelSubscriptionItemRenewed]: OmnichannelSubscriptionItemRenewedContent;

  [WebhookEventType.OmnichannelSubscriptionItemResubscribed]: OmnichannelSubscriptionItemResubscribedContent;

  [WebhookEventType.OmnichannelSubscriptionItemResumed]: OmnichannelSubscriptionItemResumedContent;

  [WebhookEventType.OmnichannelSubscriptionItemScheduledCancellationRemoved]: OmnichannelSubscriptionItemScheduledCancellationRemovedContent;

  [WebhookEventType.OmnichannelSubscriptionItemScheduledChangeRemoved]: OmnichannelSubscriptionItemScheduledChangeRemovedContent;

  [WebhookEventType.OmnichannelSubscriptionItemScheduledDowngradeRemoved]: OmnichannelSubscriptionItemScheduledDowngradeRemovedContent;

  [WebhookEventType.OmnichannelSubscriptionItemUpgraded]: OmnichannelSubscriptionItemUpgradedContent;

  [WebhookEventType.OmnichannelSubscriptionMovedIn]: OmnichannelSubscriptionMovedInContent;

  [WebhookEventType.OmnichannelTransactionCreated]: OmnichannelTransactionCreatedContent;

  [WebhookEventType.OrderCancelled]: OrderCancelledContent;

  [WebhookEventType.OrderCreated]: OrderCreatedContent;

  [WebhookEventType.OrderDeleted]: OrderDeletedContent;

  [WebhookEventType.OrderDelivered]: OrderDeliveredContent;

  [WebhookEventType.OrderReadyToProcess]: OrderReadyToProcessContent;

  [WebhookEventType.OrderReadyToShip]: OrderReadyToShipContent;

  [WebhookEventType.OrderResent]: OrderResentContent;

  [WebhookEventType.OrderReturned]: OrderReturnedContent;

  [WebhookEventType.OrderUpdated]: OrderUpdatedContent;

  [WebhookEventType.PaymentDueReminder]: PaymentDueReminderContent;

  [WebhookEventType.PaymentFailed]: PaymentFailedContent;

  [WebhookEventType.PaymentInitiated]: PaymentInitiatedContent;

  [WebhookEventType.PaymentIntentCreated]: PaymentIntentCreatedContent;

  [WebhookEventType.PaymentIntentUpdated]: PaymentIntentUpdatedContent;

  [WebhookEventType.PaymentRefunded]: PaymentRefundedContent;

  [WebhookEventType.PaymentScheduleSchemeCreated]: PaymentScheduleSchemeCreatedContent;

  [WebhookEventType.PaymentScheduleSchemeDeleted]: PaymentScheduleSchemeDeletedContent;

  [WebhookEventType.PaymentSchedulesCreated]: PaymentSchedulesCreatedContent;

  [WebhookEventType.PaymentSchedulesUpdated]: PaymentSchedulesUpdatedContent;

  [WebhookEventType.PaymentSourceAdded]: PaymentSourceAddedContent;

  [WebhookEventType.PaymentSourceDeleted]: PaymentSourceDeletedContent;

  [WebhookEventType.PaymentSourceExpired]: PaymentSourceExpiredContent;

  [WebhookEventType.PaymentSourceExpiring]: PaymentSourceExpiringContent;

  [WebhookEventType.PaymentSourceLocallyDeleted]: PaymentSourceLocallyDeletedContent;

  [WebhookEventType.PaymentSourceUpdated]: PaymentSourceUpdatedContent;

  [WebhookEventType.PaymentSucceeded]: PaymentSucceededContent;

  [WebhookEventType.PendingInvoiceCreated]: PendingInvoiceCreatedContent;

  [WebhookEventType.PendingInvoiceUpdated]: PendingInvoiceUpdatedContent;

  [WebhookEventType.PlanCreated]: PlanCreatedContent;

  [WebhookEventType.PlanDeleted]: PlanDeletedContent;

  [WebhookEventType.PlanUpdated]: PlanUpdatedContent;

  [WebhookEventType.PriceVariantCreated]: PriceVariantCreatedContent;

  [WebhookEventType.PriceVariantDeleted]: PriceVariantDeletedContent;

  [WebhookEventType.PriceVariantUpdated]: PriceVariantUpdatedContent;

  [WebhookEventType.ProductCreated]: ProductCreatedContent;

  [WebhookEventType.ProductDeleted]: ProductDeletedContent;

  [WebhookEventType.ProductUpdated]: ProductUpdatedContent;

  [WebhookEventType.PromotionalCreditsAdded]: PromotionalCreditsAddedContent;

  [WebhookEventType.PromotionalCreditsDeducted]: PromotionalCreditsDeductedContent;

  [WebhookEventType.PurchaseCreated]: PurchaseCreatedContent;

  [WebhookEventType.QuoteCreated]: QuoteCreatedContent;

  [WebhookEventType.QuoteDeleted]: QuoteDeletedContent;

  [WebhookEventType.QuoteUpdated]: QuoteUpdatedContent;

  [WebhookEventType.RecordPurchaseFailed]: RecordPurchaseFailedContent;

  [WebhookEventType.RefundInitiated]: RefundInitiatedContent;

  [WebhookEventType.RuleCreated]: RuleCreatedContent;

  [WebhookEventType.RuleDeleted]: RuleDeletedContent;

  [WebhookEventType.RuleUpdated]: RuleUpdatedContent;

  [WebhookEventType.SalesOrderCreated]: SalesOrderCreatedContent;

  [WebhookEventType.SalesOrderUpdated]: SalesOrderUpdatedContent;

  [WebhookEventType.SubscriptionActivated]: SubscriptionActivatedContent;

  [WebhookEventType.SubscriptionActivatedWithBackdating]: SubscriptionActivatedWithBackdatingContent;

  [WebhookEventType.SubscriptionAdvanceInvoiceScheduleAdded]: SubscriptionAdvanceInvoiceScheduleAddedContent;

  [WebhookEventType.SubscriptionAdvanceInvoiceScheduleRemoved]: SubscriptionAdvanceInvoiceScheduleRemovedContent;

  [WebhookEventType.SubscriptionAdvanceInvoiceScheduleUpdated]: SubscriptionAdvanceInvoiceScheduleUpdatedContent;

  [WebhookEventType.SubscriptionBusinessEntityChanged]: SubscriptionBusinessEntityChangedContent;

  [WebhookEventType.SubscriptionCanceledWithBackdating]: SubscriptionCanceledWithBackdatingContent;

  [WebhookEventType.SubscriptionCancellationReminder]: SubscriptionCancellationReminderContent;

  [WebhookEventType.SubscriptionCancellationScheduled]: SubscriptionCancellationScheduledContent;

  [WebhookEventType.SubscriptionCancelled]: SubscriptionCancelledContent;

  [WebhookEventType.SubscriptionChanged]: SubscriptionChangedContent;

  [WebhookEventType.SubscriptionChangedWithBackdating]: SubscriptionChangedWithBackdatingContent;

  [WebhookEventType.SubscriptionChangesScheduled]: SubscriptionChangesScheduledContent;

  [WebhookEventType.SubscriptionCreated]: SubscriptionCreatedContent;

  [WebhookEventType.SubscriptionCreatedWithBackdating]: SubscriptionCreatedWithBackdatingContent;

  [WebhookEventType.SubscriptionDeleted]: SubscriptionDeletedContent;

  [WebhookEventType.SubscriptionEntitlementsCreated]: SubscriptionEntitlementsCreatedContent;

  [WebhookEventType.SubscriptionEntitlementsUpdated]: SubscriptionEntitlementsUpdatedContent;

  [WebhookEventType.SubscriptionItemsRenewed]: SubscriptionItemsRenewedContent;

  [WebhookEventType.SubscriptionMovedIn]: SubscriptionMovedInContent;

  [WebhookEventType.SubscriptionMovedOut]: SubscriptionMovedOutContent;

  [WebhookEventType.SubscriptionMovementFailed]: SubscriptionMovementFailedContent;

  [WebhookEventType.SubscriptionPauseScheduled]: SubscriptionPauseScheduledContent;

  [WebhookEventType.SubscriptionPaused]: SubscriptionPausedContent;

  [WebhookEventType.SubscriptionRampApplied]: SubscriptionRampAppliedContent;

  [WebhookEventType.SubscriptionRampCreated]: SubscriptionRampCreatedContent;

  [WebhookEventType.SubscriptionRampDeleted]: SubscriptionRampDeletedContent;

  [WebhookEventType.SubscriptionRampDrafted]: SubscriptionRampDraftedContent;

  [WebhookEventType.SubscriptionRampUpdated]: SubscriptionRampUpdatedContent;

  [WebhookEventType.SubscriptionReactivated]: SubscriptionReactivatedContent;

  [WebhookEventType.SubscriptionReactivatedWithBackdating]: SubscriptionReactivatedWithBackdatingContent;

  [WebhookEventType.SubscriptionRenewalReminder]: SubscriptionRenewalReminderContent;

  [WebhookEventType.SubscriptionRenewed]: SubscriptionRenewedContent;

  [WebhookEventType.SubscriptionResumed]: SubscriptionResumedContent;

  [WebhookEventType.SubscriptionResumptionScheduled]: SubscriptionResumptionScheduledContent;

  [WebhookEventType.SubscriptionScheduledCancellationRemoved]: SubscriptionScheduledCancellationRemovedContent;

  [WebhookEventType.SubscriptionScheduledChangesRemoved]: SubscriptionScheduledChangesRemovedContent;

  [WebhookEventType.SubscriptionScheduledPauseRemoved]: SubscriptionScheduledPauseRemovedContent;

  [WebhookEventType.SubscriptionScheduledResumptionRemoved]: SubscriptionScheduledResumptionRemovedContent;

  [WebhookEventType.SubscriptionShippingAddressUpdated]: SubscriptionShippingAddressUpdatedContent;

  [WebhookEventType.SubscriptionStarted]: SubscriptionStartedContent;

  [WebhookEventType.SubscriptionTrialEndReminder]: SubscriptionTrialEndReminderContent;

  [WebhookEventType.SubscriptionTrialExtended]: SubscriptionTrialExtendedContent;

  [WebhookEventType.TaxWithheldDeleted]: TaxWithheldDeletedContent;

  [WebhookEventType.TaxWithheldRecorded]: TaxWithheldRecordedContent;

  [WebhookEventType.TaxWithheldRefunded]: TaxWithheldRefundedContent;

  [WebhookEventType.TokenConsumed]: TokenConsumedContent;

  [WebhookEventType.TokenCreated]: TokenCreatedContent;

  [WebhookEventType.TokenExpired]: TokenExpiredContent;

  [WebhookEventType.TransactionCreated]: TransactionCreatedContent;

  [WebhookEventType.TransactionDeleted]: TransactionDeletedContent;

  [WebhookEventType.TransactionUpdated]: TransactionUpdatedContent;

  [WebhookEventType.UnbilledChargesCreated]: UnbilledChargesCreatedContent;

  [WebhookEventType.UnbilledChargesDeleted]: UnbilledChargesDeletedContent;

  [WebhookEventType.UnbilledChargesInvoiced]: UnbilledChargesInvoicedContent;

  [WebhookEventType.UnbilledChargesVoided]: UnbilledChargesVoidedContent;

  [WebhookEventType.UsageFileIngested]: UsageFileIngestedContent;

  [WebhookEventType.VariantCreated]: VariantCreatedContent;

  [WebhookEventType.VariantDeleted]: VariantDeletedContent;

  [WebhookEventType.VariantUpdated]: VariantUpdatedContent;

  [WebhookEventType.VirtualBankAccountAdded]: VirtualBankAccountAddedContent;

  [WebhookEventType.VirtualBankAccountDeleted]: VirtualBankAccountDeletedContent;

  [WebhookEventType.VirtualBankAccountUpdated]: VirtualBankAccountUpdatedContent;

  [WebhookEventType.VoucherCreateFailed]: VoucherCreateFailedContent;

  [WebhookEventType.VoucherCreated]: VoucherCreatedContent;

  [WebhookEventType.VoucherExpired]: VoucherExpiredContent;
};

/**
 * Utility type to get the content type for a specific webhook event type.
 * @example
 * type SubCreatedContent = ContentFor<WebhookEventType.SubscriptionCreated>;
 */
export type ContentFor<T extends WebhookEventType> = WebhookContentMap[T];

/**
 * Webhook event payload from Chargebee.
 *
 * @typeParam T - The specific event type. When provided, `content` is strongly typed.
 *                Defaults to `WebhookEventType` for backward compatibility (content becomes union of all types).
 *
 * @example
 * // Backward compatible usage (content is union of all content types)
 * const event: WebhookEvent = payload;
 *
 * // Type-safe usage with specific event type
 * const event: WebhookEvent<WebhookEventType.SubscriptionCreated> = payload;
 * event.content.Subscription; // ✓ Typed as Subscription
 */
export interface WebhookEvent<T extends WebhookEventType = WebhookEventType> {
  id: string;
  occurred_at: number;
  source: string;
  user?: string;
  webhook_status: string;
  webhook_failure_reason?: string;
  webhooks?: any[];
  event_type: T;
  api_version: string;
  content: ContentFor<T>;
}
