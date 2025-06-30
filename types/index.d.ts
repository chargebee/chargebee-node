///<reference path='./resources/Addon.d.ts' />
///<reference path='./resources/Address.d.ts' />
///<reference path='./resources/AdvanceInvoiceSchedule.d.ts' />
///<reference path='./resources/AttachedItem.d.ts' />
///<reference path='./resources/Attribute.d.ts' />
///<reference path='./resources/BusinessEntity.d.ts' />
///<reference path='./resources/BusinessEntityTransfer.d.ts' />
///<reference path='./resources/Card.d.ts' />
///<reference path='./resources/Comment.d.ts' />
///<reference path='./resources/Configuration.d.ts' />
///<reference path='./resources/Contact.d.ts' />
///<reference path='./resources/ContractTerm.d.ts' />
///<reference path='./resources/Coupon.d.ts' />
///<reference path='./resources/CouponCode.d.ts' />
///<reference path='./resources/CouponSet.d.ts' />
///<reference path='./resources/CreditNote.d.ts' />
///<reference path='./resources/CreditNoteEstimate.d.ts' />
///<reference path='./resources/Currency.d.ts' />
///<reference path='./resources/Customer.d.ts' />
///<reference path='./resources/CustomerEntitlement.d.ts' />
///<reference path='./resources/DifferentialPrice.d.ts' />
///<reference path='./resources/Discount.d.ts' />
///<reference path='./resources/Download.d.ts' />
///<reference path='./resources/Entitlement.d.ts' />
///<reference path='./resources/EntitlementOverride.d.ts' />
///<reference path='./resources/Estimate.d.ts' />
///<reference path='./resources/Event.d.ts' />
///<reference path='./resources/Export.d.ts' />
///<reference path='./resources/Feature.d.ts' />
///<reference path='./resources/GatewayErrorDetail.d.ts' />
///<reference path='./resources/Gift.d.ts' />
///<reference path='./resources/Hierarchy.d.ts' />
///<reference path='./resources/HostedPage.d.ts' />
///<reference path='./resources/ImpactedItem.d.ts' />
///<reference path='./resources/ImpactedItemPrice.d.ts' />
///<reference path='./resources/ImpactedSubscription.d.ts' />
///<reference path='./resources/InAppSubscription.d.ts' />
///<reference path='./resources/Invoice.d.ts' />
///<reference path='./resources/InvoiceEstimate.d.ts' />
///<reference path='./resources/Item.d.ts' />
///<reference path='./resources/ItemEntitlement.d.ts' />
///<reference path='./resources/ItemFamily.d.ts' />
///<reference path='./resources/ItemPrice.d.ts' />
///<reference path='./resources/Metadata.d.ts' />
///<reference path='./resources/NonSubscription.d.ts' />
///<reference path='./resources/OmnichannelSubscription.d.ts' />
///<reference path='./resources/OmnichannelSubscriptionItem.d.ts' />
///<reference path='./resources/OmnichannelSubscriptionItemScheduledChange.d.ts' />
///<reference path='./resources/OmnichannelTransaction.d.ts' />
///<reference path='./resources/Order.d.ts' />
///<reference path='./resources/PaymentIntent.d.ts' />
///<reference path='./resources/PaymentReferenceNumber.d.ts' />
///<reference path='./resources/PaymentSchedule.d.ts' />
///<reference path='./resources/PaymentScheduleEstimate.d.ts' />
///<reference path='./resources/PaymentScheduleScheme.d.ts' />
///<reference path='./resources/PaymentSource.d.ts' />
///<reference path='./resources/PaymentVoucher.d.ts' />
///<reference path='./resources/Plan.d.ts' />
///<reference path='./resources/PortalSession.d.ts' />
///<reference path='./resources/PriceVariant.d.ts' />
///<reference path='./resources/PricingPageSession.d.ts' />
///<reference path='./resources/PromotionalCredit.d.ts' />
///<reference path='./resources/Purchase.d.ts' />
///<reference path='./resources/Quote.d.ts' />
///<reference path='./resources/QuoteLineGroup.d.ts' />
///<reference path='./resources/QuotedCharge.d.ts' />
///<reference path='./resources/QuotedRamp.d.ts' />
///<reference path='./resources/QuotedSubscription.d.ts' />
///<reference path='./resources/Ramp.d.ts' />
///<reference path='./resources/RecordedPurchase.d.ts' />
///<reference path='./resources/ResourceMigration.d.ts' />
///<reference path='./resources/Rule.d.ts' />
///<reference path='./resources/SiteMigrationDetail.d.ts' />
///<reference path='./resources/Subscription.d.ts' />
///<reference path='./resources/SubscriptionEntitlement.d.ts' />
///<reference path='./resources/SubscriptionEstimate.d.ts' />
///<reference path='./resources/TaxWithheld.d.ts' />
///<reference path='./resources/ThirdPartyPaymentMethod.d.ts' />
///<reference path='./resources/TimeMachine.d.ts' />
///<reference path='./resources/Token.d.ts' />
///<reference path='./resources/Transaction.d.ts' />
///<reference path='./resources/UnbilledCharge.d.ts' />
///<reference path='./resources/Usage.d.ts' />
///<reference path='./resources/UsageEvent.d.ts' />
///<reference path='./resources/UsageFile.d.ts' />
///<reference path='./resources/VirtualBankAccount.d.ts' />

export type Config = {
  /**
   * @apiKey api key for the site.
   */
  apiKey: string;
  /**
   * @site api site name.
   */
  site: string;
  /**
   * @apiPath this value indicates the api version, default value is /api/v2.
   */
  apiPath?: '/api/v2' | '/api/v1';
  /**
   * @timeout client side request timeout in milliseconds, default value is 80000ms.
   */
  timeout?: number;
  /**
   * @port url port
   */
  port?: number;
  /**
   * @timemachineWaitInMillis time interval at which two subsequent retrieve timemachine call in milliseconds, default value is 3000ms.
   */
  timemachineWaitInMillis?: number;
  /**
   * @exportWaitInMillis time interval at which two subsequent retrieve export call in milliseconds, default value is 3000ms.
   */
  exportWaitInMillis?: number;
  /**
   * @protocol http protocol, default value is https
   */
  protocol?: 'https' | 'http';
  /**
   * @hostSuffix url host suffix, default value is .chargebee.com
   */
  hostSuffix?: string;

  /**
   * @retryConfig retry configuration for the client, default value is { enabled: false, maxRetries: 3, delayMs: 1000, retryOn: [500, 502, 503, 504]}
   */
  retryConfig?: RetryConfig;

  /**
   * @enableDebugLogs whether to enable debug logs, default value is false
   */
  enableDebugLogs?: boolean;

  /**
   * @userAgentSuffix optional string appended to the User-Agent header for additional logging
   */
  userAgentSuffix?: string;
};

export type RetryConfig = {
  /**
   * @enabled whether to enable retry logic, default value is false
   * @maxRetries maximum number of retries, default value is 3
   * @delayMs delay in milliseconds between retries, default value is 1000ms
   * @retryOn array of HTTP status codes to retry on, default value is [500, 502, 503, 504]
   */
  enabled?: boolean;
  maxRetries?: number;
  delayMs?: number;
  retryOn?: Array<number>;
};
declare module 'chargebee' {
  export default class Chargebee {
    constructor(config: Config);
    addon: Addon.AddonResource;
    address: Address.AddressResource;
    attachedItem: AttachedItem.AttachedItemResource;
    businessEntity: BusinessEntity.BusinessEntityResource;
    card: Card.CardResource;
    comment: Comment.CommentResource;
    configuration: Configuration.ConfigurationResource;
    coupon: Coupon.CouponResource;
    couponCode: CouponCode.CouponCodeResource;
    couponSet: CouponSet.CouponSetResource;
    creditNote: CreditNote.CreditNoteResource;
    currency: Currency.CurrencyResource;
    customer: Customer.CustomerResource;
    customerEntitlement: CustomerEntitlement.CustomerEntitlementResource;
    differentialPrice: DifferentialPrice.DifferentialPriceResource;
    entitlement: Entitlement.EntitlementResource;
    entitlementOverride: EntitlementOverride.EntitlementOverrideResource;
    estimate: Estimate.EstimateResource;
    event: Event.EventResource;
    export: Export.ExportResource;
    feature: Feature.FeatureResource;
    gift: Gift.GiftResource;
    hostedPage: HostedPage.HostedPageResource;
    inAppSubscription: InAppSubscription.InAppSubscriptionResource;
    invoice: Invoice.InvoiceResource;
    item: Item.ItemResource;
    itemEntitlement: ItemEntitlement.ItemEntitlementResource;
    itemFamily: ItemFamily.ItemFamilyResource;
    itemPrice: ItemPrice.ItemPriceResource;
    nonSubscription: NonSubscription.NonSubscriptionResource;
    omnichannelSubscription: OmnichannelSubscription.OmnichannelSubscriptionResource;
    omnichannelSubscriptionItem: OmnichannelSubscriptionItem.OmnichannelSubscriptionItemResource;
    order: Order.OrderResource;
    paymentIntent: PaymentIntent.PaymentIntentResource;
    paymentScheduleScheme: PaymentScheduleScheme.PaymentScheduleSchemeResource;
    paymentSource: PaymentSource.PaymentSourceResource;
    paymentVoucher: PaymentVoucher.PaymentVoucherResource;
    plan: Plan.PlanResource;
    portalSession: PortalSession.PortalSessionResource;
    priceVariant: PriceVariant.PriceVariantResource;
    pricingPageSession: PricingPageSession.PricingPageSessionResource;
    promotionalCredit: PromotionalCredit.PromotionalCreditResource;
    purchase: Purchase.PurchaseResource;
    quote: Quote.QuoteResource;
    ramp: Ramp.RampResource;
    recordedPurchase: RecordedPurchase.RecordedPurchaseResource;
    resourceMigration: ResourceMigration.ResourceMigrationResource;
    rule: Rule.RuleResource;
    siteMigrationDetail: SiteMigrationDetail.SiteMigrationDetailResource;
    subscription: Subscription.SubscriptionResource;
    subscriptionEntitlement: SubscriptionEntitlement.SubscriptionEntitlementResource;
    timeMachine: TimeMachine.TimeMachineResource;
    transaction: Transaction.TransactionResource;
    unbilledCharge: UnbilledCharge.UnbilledChargeResource;
    usage: Usage.UsageResource;
    usageEvent: UsageEvent.UsageEventResource;
    usageFile: UsageFile.UsageFileResource;
    virtualBankAccount: VirtualBankAccount.VirtualBankAccountResource;
  }
}
