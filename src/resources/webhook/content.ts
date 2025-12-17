///<reference path='../../../types/index.d.ts'/>

export interface AddUsagesReminderContent {
  Subscription: import('chargebee').Subscription;

  Customer: import('chargebee').Customer;

  UsageReminderInfo: import('chargebee').UsageReminderInfo;
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
  BusinessEntityChange: import('chargebee').BusinessEntityChange;

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

  Subscription: import('chargebee').Subscription;
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

export interface ProductCreatedContent {
  Product: import('chargebee').Product;
}

export interface ProductDeletedContent {
  Product: import('chargebee').Product;
}

export interface ProductUpdatedContent {
  Product: import('chargebee').Product;
}

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

export interface SalesOrderCreatedContent {
  SalesOrder: import('chargebee').SalesOrder;
}

export interface SalesOrderUpdatedContent {
  SalesOrder: import('chargebee').SalesOrder;
}

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

  UnbilledCharge: import('chargebee').UnbilledCharge;
}

export interface SubscriptionAdvanceInvoiceScheduleAddedContent {
  Subscription: import('chargebee').Subscription;

  Customer: import('chargebee').Customer;

  AdvanceInvoiceSchedule: import('chargebee').AdvanceInvoiceSchedule;
}

export interface SubscriptionAdvanceInvoiceScheduleRemovedContent {
  Subscription: import('chargebee').Subscription;

  Customer: import('chargebee').Customer;

  AdvanceInvoiceSchedule: import('chargebee').AdvanceInvoiceSchedule;
}

export interface SubscriptionAdvanceInvoiceScheduleUpdatedContent {
  Subscription: import('chargebee').Subscription;

  Customer: import('chargebee').Customer;

  AdvanceInvoiceSchedule: import('chargebee').AdvanceInvoiceSchedule;
}

export interface SubscriptionBusinessEntityChangedContent {
  BusinessEntityChange: import('chargebee').BusinessEntityChange;

  BusinessEntityTransfer: import('chargebee').BusinessEntityTransfer;

  Subscription: import('chargebee').Subscription;
}

export interface SubscriptionCanceledWithBackdatingContent {
  Subscription: import('chargebee').Subscription;

  Customer: import('chargebee').Customer;

  Card: import('chargebee').Card;

  Invoice: import('chargebee').Invoice;

  CreditNote: import('chargebee').CreditNote;

  UnbilledCharge: import('chargebee').UnbilledCharge;
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

  CreditNote: import('chargebee').CreditNote;

  UnbilledCharge: import('chargebee').UnbilledCharge;
}

export interface SubscriptionChangedContent {
  Subscription: import('chargebee').Subscription;

  Customer: import('chargebee').Customer;

  Card: import('chargebee').Card;

  Invoice: import('chargebee').Invoice;

  CreditNote: import('chargebee').CreditNote;

  UnbilledCharge: import('chargebee').UnbilledCharge;
}

export interface SubscriptionChangedWithBackdatingContent {
  Subscription: import('chargebee').Subscription;

  Customer: import('chargebee').Customer;

  Card: import('chargebee').Card;

  Invoice: import('chargebee').Invoice;

  CreditNote: import('chargebee').CreditNote;

  UnbilledCharge: import('chargebee').UnbilledCharge;
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

  UnbilledCharge: import('chargebee').UnbilledCharge;
}

export interface SubscriptionCreatedWithBackdatingContent {
  Subscription: import('chargebee').Subscription;

  Customer: import('chargebee').Customer;

  Card: import('chargebee').Card;

  Invoice: import('chargebee').Invoice;

  UnbilledCharge: import('chargebee').UnbilledCharge;
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

  CreditNote: import('chargebee').CreditNote;

  UnbilledCharge: import('chargebee').UnbilledCharge;
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

  CreditNote: import('chargebee').CreditNote;

  UnbilledCharge: import('chargebee').UnbilledCharge;
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

  UnbilledCharge: import('chargebee').UnbilledCharge;
}

export interface SubscriptionReactivatedWithBackdatingContent {
  Subscription: import('chargebee').Subscription;

  Customer: import('chargebee').Customer;

  Card: import('chargebee').Card;

  Invoice: import('chargebee').Invoice;

  UnbilledCharge: import('chargebee').UnbilledCharge;
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

  UnbilledCharge: import('chargebee').UnbilledCharge;
}

export interface SubscriptionResumedContent {
  Subscription: import('chargebee').Subscription;

  Customer: import('chargebee').Customer;

  Card: import('chargebee').Card;

  Invoice: import('chargebee').Invoice;

  UnbilledCharge: import('chargebee').UnbilledCharge;
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
  UnbilledCharge: import('chargebee').UnbilledCharge;
}

export interface UnbilledChargesDeletedContent {
  UnbilledCharge: import('chargebee').UnbilledCharge;
}

export interface UnbilledChargesInvoicedContent {
  UnbilledCharge: import('chargebee').UnbilledCharge;

  Invoice: import('chargebee').Invoice;
}

export interface UnbilledChargesVoidedContent {
  UnbilledCharge: import('chargebee').UnbilledCharge;
}

export interface UsageFileIngestedContent {
  UsageFile: import('chargebee').UsageFile;
}

export interface VariantCreatedContent {
  Variant: import('chargebee').Variant;
}

export interface VariantDeletedContent {
  Variant: import('chargebee').Variant;
}

export interface VariantUpdatedContent {
  Variant: import('chargebee').Variant;
}

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

export interface WebhookEvent {
  id: string;
  occurred_at: number;
  source: string;
  user?: string;
  webhook_status: string;
  webhook_failure_reason?: string;
  webhooks?: any[];
  event_type: string;
  api_version: string;
  content: any;
}
