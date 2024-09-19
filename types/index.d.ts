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
///<reference path='./resources/Invoice.d.ts' />
///<reference path='./resources/InvoiceEstimate.d.ts' />
///<reference path='./resources/Item.d.ts' />
///<reference path='./resources/ItemEntitlement.d.ts' />
///<reference path='./resources/ItemFamily.d.ts' />
///<reference path='./resources/ItemPrice.d.ts' />
///<reference path='./resources/Metadata.d.ts' />
///<reference path='./resources/NonSubscription.d.ts' />
///<reference path='./resources/Order.d.ts' />
///<reference path='./resources/PaymentIntent.d.ts' />
///<reference path='./resources/PaymentReferenceNumber.d.ts' />
///<reference path='./resources/PaymentSchedule.d.ts' />
///<reference path='./resources/PaymentScheduleScheme.d.ts' />
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

declare module 'chargebee' {
  export default class {
    static configure({ site, api_key }: { site: string; api_key: string }): void;
    static address: Address.AddressResource;
    static attached_item: AttachedItem.AttachedItemResource;
    static business_entity: BusinessEntity.BusinessEntityResource;
    static card: Card.CardResource;
    static comment: Comment.CommentResource;
    static coupon: Coupon.CouponResource;
    static coupon_code: CouponCode.CouponCodeResource;
    static coupon_set: CouponSet.CouponSetResource;
    static credit_note: CreditNote.CreditNoteResource;
    static currency: Currency.CurrencyResource;
    static customer: Customer.CustomerResource;
    static customer_entitlement: CustomerEntitlement.CustomerEntitlementResource;
    static differential_price: DifferentialPrice.DifferentialPriceResource;
    static entitlement: Entitlement.EntitlementResource;
    static entitlement_override: EntitlementOverride.EntitlementOverrideResource;
    static estimate: Estimate.EstimateResource;
    static event: Event.EventResource;
    static export: Export.ExportResource;
    static feature: Feature.FeatureResource;
    static gift: Gift.GiftResource;
    static hosted_page: HostedPage.HostedPageResource;
    static in_app_subscription: InAppSubscription.InAppSubscriptionResource;
    static invoice: Invoice.InvoiceResource;
    static item: Item.ItemResource;
    static item_entitlement: ItemEntitlement.ItemEntitlementResource;
    static item_family: ItemFamily.ItemFamilyResource;
    static item_price: ItemPrice.ItemPriceResource;
    static non_subscription: NonSubscription.NonSubscriptionResource;
    static order: Order.OrderResource;
    static payment_intent: PaymentIntent.PaymentIntentResource;
    static payment_schedule_scheme: PaymentScheduleScheme.PaymentScheduleSchemeResource;
    static payment_source: PaymentSource.PaymentSourceResource;
    static payment_voucher: PaymentVoucher.PaymentVoucherResource;
    static portal_session: PortalSession.PortalSessionResource;
    static price_variant: PriceVariant.PriceVariantResource;
    static pricing_page_session: PricingPageSession.PricingPageSessionResource;
    static promotional_credit: PromotionalCredit.PromotionalCreditResource;
    static purchase: Purchase.PurchaseResource;
    static quote: Quote.QuoteResource;
    static ramp: Ramp.RampResource;
    static resource_migration: ResourceMigration.ResourceMigrationResource;
    static site_migration_detail: SiteMigrationDetail.SiteMigrationDetailResource;
    static subscription: Subscription.SubscriptionResource;
    static subscription_entitlement: SubscriptionEntitlement.SubscriptionEntitlementResource;
    static time_machine: TimeMachine.TimeMachineResource;
    static transaction: Transaction.TransactionResource;
    static unbilled_charge: UnbilledCharge.UnbilledChargeResource;
    static usage: Usage.UsageResource;
    static virtual_bank_account: VirtualBankAccount.VirtualBankAccountResource;
    
  }
}