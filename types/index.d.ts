///<reference path='./resources/Address.d.ts' />
///<reference path='./resources/AdvanceInvoiceSchedule.d.ts' />
///<reference path='./resources/AttachedItem.d.ts' />
///<reference path='./resources/Attribute.d.ts' />
///<reference path='./resources/BusinessEntity.d.ts' />
///<reference path='./resources/BusinessEntityTransfer.d.ts' />
///<reference path='./resources/Card.d.ts' />
///<reference path='./resources/Comment.d.ts' />
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
///<reference path='./resources/Installment.d.ts' />
///<reference path='./resources/InstallmentConfig.d.ts' />
///<reference path='./resources/InstallmentDetail.d.ts' />
///<reference path='./resources/Invoice.d.ts' />
///<reference path='./resources/InvoiceEstimate.d.ts' />
///<reference path='./resources/Item.d.ts' />
///<reference path='./resources/ItemEntitlement.d.ts' />
///<reference path='./resources/ItemFamily.d.ts' />
///<reference path='./resources/ItemPrice.d.ts' />
///<reference path='./resources/Metadata.d.ts' />
///<reference path='./resources/Order.d.ts' />
///<reference path='./resources/PaymentIntent.d.ts' />
///<reference path='./resources/PaymentReferenceNumber.d.ts' />
///<reference path='./resources/PaymentSource.d.ts' />
///<reference path='./resources/PaymentVoucher.d.ts' />
///<reference path='./resources/PortalSession.d.ts' />
///<reference path='./resources/PriceVariant.d.ts' />
///<reference path='./resources/PricingPageSession.d.ts' />
///<reference path='./resources/PromotionalCredit.d.ts' />
///<reference path='./resources/Purchase.d.ts' />
///<reference path='./resources/Quote.d.ts' />
///<reference path='./resources/QuoteLineGroup.d.ts' />
///<reference path='./resources/QuotedCharge.d.ts' />
///<reference path='./resources/QuotedSubscription.d.ts' />
///<reference path='./resources/Ramp.d.ts' />
///<reference path='./resources/ResourceMigration.d.ts' />
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
};
declare module 'chargebee' {
  export default class Chargebee {
    constructor(config: Config);
    address: Address.AddressResource;
    attachedItem: AttachedItem.AttachedItemResource;
    businessEntity: BusinessEntity.BusinessEntityResource;
    card: Card.CardResource;
    comment: Comment.CommentResource;
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
    installment: Installment.InstallmentResource;
    installmentConfig: InstallmentConfig.InstallmentConfigResource;
    invoice: Invoice.InvoiceResource;
    item: Item.ItemResource;
    itemEntitlement: ItemEntitlement.ItemEntitlementResource;
    itemFamily: ItemFamily.ItemFamilyResource;
    itemPrice: ItemPrice.ItemPriceResource;
    order: Order.OrderResource;
    paymentIntent: PaymentIntent.PaymentIntentResource;
    paymentSource: PaymentSource.PaymentSourceResource;
    paymentVoucher: PaymentVoucher.PaymentVoucherResource;
    portalSession: PortalSession.PortalSessionResource;
    priceVariant: PriceVariant.PriceVariantResource;
    pricingPageSession: PricingPageSession.PricingPageSessionResource;
    promotionalCredit: PromotionalCredit.PromotionalCreditResource;
    purchase: Purchase.PurchaseResource;
    quote: Quote.QuoteResource;
    ramp: Ramp.RampResource;
    resourceMigration: ResourceMigration.ResourceMigrationResource;
    siteMigrationDetail: SiteMigrationDetail.SiteMigrationDetailResource;
    subscription: Subscription.SubscriptionResource;
    subscriptionEntitlement: SubscriptionEntitlement.SubscriptionEntitlementResource;
    timeMachine: TimeMachine.TimeMachineResource;
    transaction: Transaction.TransactionResource;
    unbilledCharge: UnbilledCharge.UnbilledChargeResource;
    usage: Usage.UsageResource;
    virtualBankAccount: VirtualBankAccount.VirtualBankAccountResource;
  }
}
