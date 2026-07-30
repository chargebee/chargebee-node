// Generated Zod schemas: Export
// Actions: revenueRecognition, deferredRevenue, plans, addons, coupons, customers, subscriptions, invoices, creditNotes, transactions, orders, itemFamilies, items, itemPrices, attachedItems, differentialPrices, priceVariants
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//Export.revenueRecognition

const RevenueRecognitionExportPaymentOwnerSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const RevenueRecognitionExportItemIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const RevenueRecognitionExportItemPriceIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const RevenueRecognitionExportCancelReasonCodeSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const RevenueRecognitionExportBusinessEntityIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const RevenueRecognitionExportIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const RevenueRecognitionExportRecurringSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const RevenueRecognitionExportStatusSchema = z.object({
  is: z
    .enum(['paid', 'posted', 'payment_due', 'not_paid', 'voided', 'pending'])
    .optional(),
  is_not: z
    .enum(['paid', 'posted', 'payment_due', 'not_paid', 'voided', 'pending'])
    .optional(),
  in: z
    .enum(['paid', 'posted', 'payment_due', 'not_paid', 'voided', 'pending'])
    .optional(),
  not_in: z
    .enum(['paid', 'posted', 'payment_due', 'not_paid', 'voided', 'pending'])
    .optional(),
});
const RevenueRecognitionExportPriceTypeSchema = z.object({
  is: z.enum(['tax_exclusive', 'tax_inclusive']).optional(),
  is_not: z.enum(['tax_exclusive', 'tax_inclusive']).optional(),
  in: z.enum(['tax_exclusive', 'tax_inclusive']).optional(),
  not_in: z.enum(['tax_exclusive', 'tax_inclusive']).optional(),
});
const RevenueRecognitionExportDateSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const RevenueRecognitionExportPaidAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const RevenueRecognitionExportTotalSchema = z.object({
  is: z.string().regex(RegExp('^-?\\d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  between: z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')).optional(),
});
const RevenueRecognitionExportAmountPaidSchema = z.object({
  is: z.string().regex(RegExp('^-?\\d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  between: z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')).optional(),
});
const RevenueRecognitionExportAmountAdjustedSchema = z.object({
  is: z.string().regex(RegExp('^-?\\d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  between: z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')).optional(),
});
const RevenueRecognitionExportCreditsAppliedSchema = z.object({
  is: z.string().regex(RegExp('^-?\\d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  between: z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')).optional(),
});
const RevenueRecognitionExportAmountDueSchema = z.object({
  is: z.string().regex(RegExp('^-?\\d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  between: z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')).optional(),
});
const RevenueRecognitionExportDunningStatusSchema = z.object({
  is: z.enum(['in_progress', 'exhausted', 'stopped', 'success']).optional(),
  is_not: z.enum(['in_progress', 'exhausted', 'stopped', 'success']).optional(),
  in: z.enum(['in_progress', 'exhausted', 'stopped', 'success']).optional(),
  not_in: z.enum(['in_progress', 'exhausted', 'stopped', 'success']).optional(),
  is_present: z.enum(['true', 'false']).optional(),
});
const RevenueRecognitionExportUpdatedAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const RevenueRecognitionExportChannelSchema = z.object({
  is: z.enum(['web', 'app_store', 'play_store']).optional(),
  is_not: z.enum(['web', 'app_store', 'play_store']).optional(),
  in: z.enum(['web', 'app_store', 'play_store']).optional(),
  not_in: z.enum(['web', 'app_store', 'play_store']).optional(),
});
const RevenueRecognitionExportInvoiceItemSchema = z.object({
  id: RevenueRecognitionExportIdSchema.optional(),
  recurring: RevenueRecognitionExportRecurringSchema.optional(),
  status: RevenueRecognitionExportStatusSchema.optional(),
  price_type: RevenueRecognitionExportPriceTypeSchema.optional(),
  date: RevenueRecognitionExportDateSchema.optional(),
  paid_at: RevenueRecognitionExportPaidAtSchema.optional(),
  total: RevenueRecognitionExportTotalSchema.optional(),
  amount_paid: RevenueRecognitionExportAmountPaidSchema.optional(),
  amount_adjusted: RevenueRecognitionExportAmountAdjustedSchema.optional(),
  credits_applied: RevenueRecognitionExportCreditsAppliedSchema.optional(),
  amount_due: RevenueRecognitionExportAmountDueSchema.optional(),
  dunning_status: RevenueRecognitionExportDunningStatusSchema.optional(),
  updated_at: RevenueRecognitionExportUpdatedAtSchema.optional(),
  channel: RevenueRecognitionExportChannelSchema.optional(),
});
const RevenueRecognitionExportCustomerIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const RevenueRecognitionExportCancelReasonSchema = z.object({
  is: z
    .enum([
      'not_paid',
      'no_card',
      'fraud_review_failed',
      'non_compliant_eu_customer',
      'tax_calculation_failed',
      'currency_incompatible_with_gateway',
      'non_compliant_customer',
    ])
    .optional(),
  is_not: z
    .enum([
      'not_paid',
      'no_card',
      'fraud_review_failed',
      'non_compliant_eu_customer',
      'tax_calculation_failed',
      'currency_incompatible_with_gateway',
      'non_compliant_customer',
    ])
    .optional(),
  in: z
    .enum([
      'not_paid',
      'no_card',
      'fraud_review_failed',
      'non_compliant_eu_customer',
      'tax_calculation_failed',
      'currency_incompatible_with_gateway',
      'non_compliant_customer',
    ])
    .optional(),
  not_in: z
    .enum([
      'not_paid',
      'no_card',
      'fraud_review_failed',
      'non_compliant_eu_customer',
      'tax_calculation_failed',
      'currency_incompatible_with_gateway',
      'non_compliant_customer',
    ])
    .optional(),
  is_present: z.enum(['true', 'false']).optional(),
});
const RevenueRecognitionExportRemainingBillingCyclesSchema = z.object({
  is: z.string().regex(RegExp('^-?\\d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  between: z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')).optional(),
  is_present: z.enum(['true', 'false']).optional(),
});
const RevenueRecognitionExportCreatedAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const RevenueRecognitionExportActivatedAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
  is_present: z.enum(['true', 'false']).optional(),
});
const RevenueRecognitionExportNextBillingAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const RevenueRecognitionExportCancelledAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const RevenueRecognitionExportHasScheduledChangesSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const RevenueRecognitionExportOfflinePaymentMethodSchema = z.object({
  is: z
    .enum([
      'no_preference',
      'cash',
      'check',
      'bank_transfer',
      'ach_credit',
      'sepa_credit',
      'boleto',
      'us_automated_bank_transfer',
      'eu_automated_bank_transfer',
      'uk_automated_bank_transfer',
      'jp_automated_bank_transfer',
      'mx_automated_bank_transfer',
      'custom',
    ])
    .optional(),
  is_not: z
    .enum([
      'no_preference',
      'cash',
      'check',
      'bank_transfer',
      'ach_credit',
      'sepa_credit',
      'boleto',
      'us_automated_bank_transfer',
      'eu_automated_bank_transfer',
      'uk_automated_bank_transfer',
      'jp_automated_bank_transfer',
      'mx_automated_bank_transfer',
      'custom',
    ])
    .optional(),
  in: z
    .enum([
      'no_preference',
      'cash',
      'check',
      'bank_transfer',
      'ach_credit',
      'sepa_credit',
      'boleto',
      'us_automated_bank_transfer',
      'eu_automated_bank_transfer',
      'uk_automated_bank_transfer',
      'jp_automated_bank_transfer',
      'mx_automated_bank_transfer',
      'custom',
    ])
    .optional(),
  not_in: z
    .enum([
      'no_preference',
      'cash',
      'check',
      'bank_transfer',
      'ach_credit',
      'sepa_credit',
      'boleto',
      'us_automated_bank_transfer',
      'eu_automated_bank_transfer',
      'uk_automated_bank_transfer',
      'jp_automated_bank_transfer',
      'mx_automated_bank_transfer',
      'custom',
    ])
    .optional(),
});
const RevenueRecognitionExportAutoCloseInvoicesSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const RevenueRecognitionExportPlanIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const RevenueRecognitionExportSubscriptionItemSchema = z.object({
  id: RevenueRecognitionExportIdSchema.optional(),
  customer_id: RevenueRecognitionExportCustomerIdSchema.optional(),
  status: RevenueRecognitionExportStatusSchema.optional(),
  cancel_reason: RevenueRecognitionExportCancelReasonSchema.optional(),
  remaining_billing_cycles:
    RevenueRecognitionExportRemainingBillingCyclesSchema.optional(),
  created_at: RevenueRecognitionExportCreatedAtSchema.optional(),
  activated_at: RevenueRecognitionExportActivatedAtSchema.optional(),
  next_billing_at: RevenueRecognitionExportNextBillingAtSchema.optional(),
  cancelled_at: RevenueRecognitionExportCancelledAtSchema.optional(),
  has_scheduled_changes:
    RevenueRecognitionExportHasScheduledChangesSchema.optional(),
  updated_at: RevenueRecognitionExportUpdatedAtSchema.optional(),
  offline_payment_method:
    RevenueRecognitionExportOfflinePaymentMethodSchema.optional(),
  auto_close_invoices:
    RevenueRecognitionExportAutoCloseInvoicesSchema.optional(),
  channel: RevenueRecognitionExportChannelSchema.optional(),
  plan_id: RevenueRecognitionExportPlanIdSchema.optional(),
});
const RevenueRecognitionExportFirstNameSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
});
const RevenueRecognitionExportLastNameSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
});
const RevenueRecognitionExportEmailSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
});
const RevenueRecognitionExportCompanySchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
});
const RevenueRecognitionExportPhoneSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
});
const RevenueRecognitionExportAutoCollectionSchema = z.object({
  is: z.enum(['on', 'off']).optional(),
  is_not: z.enum(['on', 'off']).optional(),
  in: z.enum(['on', 'off']).optional(),
  not_in: z.enum(['on', 'off']).optional(),
});
const RevenueRecognitionExportTaxabilitySchema = z.object({
  is: z.enum(['taxable', 'exempt']).optional(),
  is_not: z.enum(['taxable', 'exempt']).optional(),
  in: z.enum(['taxable', 'exempt']).optional(),
  not_in: z.enum(['taxable', 'exempt']).optional(),
});
const RevenueRecognitionExportCustomerItemSchema = z.object({
  id: RevenueRecognitionExportIdSchema.optional(),
  first_name: RevenueRecognitionExportFirstNameSchema.optional(),
  last_name: RevenueRecognitionExportLastNameSchema.optional(),
  email: RevenueRecognitionExportEmailSchema.optional(),
  company: RevenueRecognitionExportCompanySchema.optional(),
  phone: RevenueRecognitionExportPhoneSchema.optional(),
  auto_collection: RevenueRecognitionExportAutoCollectionSchema.optional(),
  taxability: RevenueRecognitionExportTaxabilitySchema.optional(),
  created_at: RevenueRecognitionExportCreatedAtSchema.optional(),
  updated_at: RevenueRecognitionExportUpdatedAtSchema.optional(),
  offline_payment_method:
    RevenueRecognitionExportOfflinePaymentMethodSchema.optional(),
  auto_close_invoices:
    RevenueRecognitionExportAutoCloseInvoicesSchema.optional(),
  channel: RevenueRecognitionExportChannelSchema.optional(),
});
const RevenueRecognitionExportParentIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const RevenueRecognitionExportPaymentOwnerIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const RevenueRecognitionExportInvoiceOwnerIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const RevenueRecognitionExportRelationshipSchema = z.object({
  parent_id: RevenueRecognitionExportParentIdSchema.optional(),
  payment_owner_id: RevenueRecognitionExportPaymentOwnerIdSchema.optional(),
  invoice_owner_id: RevenueRecognitionExportInvoiceOwnerIdSchema.optional(),
});
const RevenueRecognitionExportBodySchema = z.looseObject({
  report_by: z.enum(['customer', 'invoice', 'product', 'subscription']),
  currency_code: z.string().max(3).optional(),
  report_from_month: z.number().int(),
  report_from_year: z.number().int(),
  report_to_month: z.number().int(),
  report_to_year: z.number().int(),
  include_discounts: z.boolean().default(true).optional(),
  payment_owner: RevenueRecognitionExportPaymentOwnerSchema.optional(),
  item_id: RevenueRecognitionExportItemIdSchema.optional(),
  item_price_id: RevenueRecognitionExportItemPriceIdSchema.optional(),
  cancel_reason_code: RevenueRecognitionExportCancelReasonCodeSchema.optional(),
  business_entity_id: RevenueRecognitionExportBusinessEntityIdSchema.optional(),
  invoice: z
    .array(RevenueRecognitionExportInvoiceItemSchema.optional())
    .optional(),
  subscription: z
    .array(RevenueRecognitionExportSubscriptionItemSchema.optional())
    .optional(),
  customer: z
    .array(RevenueRecognitionExportCustomerItemSchema.optional())
    .optional(),
  relationship: RevenueRecognitionExportRelationshipSchema.optional(),
});
export { RevenueRecognitionExportBodySchema };
export type RevenueRecognitionExportBody = z.infer<
  typeof RevenueRecognitionExportBodySchema
>;

//Export.deferredRevenue

const DeferredRevenueExportPaymentOwnerSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const DeferredRevenueExportItemIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const DeferredRevenueExportItemPriceIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const DeferredRevenueExportCancelReasonCodeSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const DeferredRevenueExportBusinessEntityIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const DeferredRevenueExportIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const DeferredRevenueExportRecurringSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const DeferredRevenueExportStatusSchema = z.object({
  is: z
    .enum(['paid', 'posted', 'payment_due', 'not_paid', 'voided', 'pending'])
    .optional(),
  is_not: z
    .enum(['paid', 'posted', 'payment_due', 'not_paid', 'voided', 'pending'])
    .optional(),
  in: z
    .enum(['paid', 'posted', 'payment_due', 'not_paid', 'voided', 'pending'])
    .optional(),
  not_in: z
    .enum(['paid', 'posted', 'payment_due', 'not_paid', 'voided', 'pending'])
    .optional(),
});
const DeferredRevenueExportPriceTypeSchema = z.object({
  is: z.enum(['tax_exclusive', 'tax_inclusive']).optional(),
  is_not: z.enum(['tax_exclusive', 'tax_inclusive']).optional(),
  in: z.enum(['tax_exclusive', 'tax_inclusive']).optional(),
  not_in: z.enum(['tax_exclusive', 'tax_inclusive']).optional(),
});
const DeferredRevenueExportDateSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const DeferredRevenueExportPaidAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const DeferredRevenueExportTotalSchema = z.object({
  is: z.string().regex(RegExp('^-?\\d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  between: z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')).optional(),
});
const DeferredRevenueExportAmountPaidSchema = z.object({
  is: z.string().regex(RegExp('^-?\\d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  between: z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')).optional(),
});
const DeferredRevenueExportAmountAdjustedSchema = z.object({
  is: z.string().regex(RegExp('^-?\\d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  between: z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')).optional(),
});
const DeferredRevenueExportCreditsAppliedSchema = z.object({
  is: z.string().regex(RegExp('^-?\\d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  between: z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')).optional(),
});
const DeferredRevenueExportAmountDueSchema = z.object({
  is: z.string().regex(RegExp('^-?\\d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  between: z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')).optional(),
});
const DeferredRevenueExportDunningStatusSchema = z.object({
  is: z.enum(['in_progress', 'exhausted', 'stopped', 'success']).optional(),
  is_not: z.enum(['in_progress', 'exhausted', 'stopped', 'success']).optional(),
  in: z.enum(['in_progress', 'exhausted', 'stopped', 'success']).optional(),
  not_in: z.enum(['in_progress', 'exhausted', 'stopped', 'success']).optional(),
  is_present: z.enum(['true', 'false']).optional(),
});
const DeferredRevenueExportUpdatedAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const DeferredRevenueExportChannelSchema = z.object({
  is: z.enum(['web', 'app_store', 'play_store']).optional(),
  is_not: z.enum(['web', 'app_store', 'play_store']).optional(),
  in: z.enum(['web', 'app_store', 'play_store']).optional(),
  not_in: z.enum(['web', 'app_store', 'play_store']).optional(),
});
const DeferredRevenueExportInvoiceItemSchema = z.object({
  id: DeferredRevenueExportIdSchema.optional(),
  recurring: DeferredRevenueExportRecurringSchema.optional(),
  status: DeferredRevenueExportStatusSchema.optional(),
  price_type: DeferredRevenueExportPriceTypeSchema.optional(),
  date: DeferredRevenueExportDateSchema.optional(),
  paid_at: DeferredRevenueExportPaidAtSchema.optional(),
  total: DeferredRevenueExportTotalSchema.optional(),
  amount_paid: DeferredRevenueExportAmountPaidSchema.optional(),
  amount_adjusted: DeferredRevenueExportAmountAdjustedSchema.optional(),
  credits_applied: DeferredRevenueExportCreditsAppliedSchema.optional(),
  amount_due: DeferredRevenueExportAmountDueSchema.optional(),
  dunning_status: DeferredRevenueExportDunningStatusSchema.optional(),
  updated_at: DeferredRevenueExportUpdatedAtSchema.optional(),
  channel: DeferredRevenueExportChannelSchema.optional(),
});
const DeferredRevenueExportCustomerIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const DeferredRevenueExportCancelReasonSchema = z.object({
  is: z
    .enum([
      'not_paid',
      'no_card',
      'fraud_review_failed',
      'non_compliant_eu_customer',
      'tax_calculation_failed',
      'currency_incompatible_with_gateway',
      'non_compliant_customer',
    ])
    .optional(),
  is_not: z
    .enum([
      'not_paid',
      'no_card',
      'fraud_review_failed',
      'non_compliant_eu_customer',
      'tax_calculation_failed',
      'currency_incompatible_with_gateway',
      'non_compliant_customer',
    ])
    .optional(),
  in: z
    .enum([
      'not_paid',
      'no_card',
      'fraud_review_failed',
      'non_compliant_eu_customer',
      'tax_calculation_failed',
      'currency_incompatible_with_gateway',
      'non_compliant_customer',
    ])
    .optional(),
  not_in: z
    .enum([
      'not_paid',
      'no_card',
      'fraud_review_failed',
      'non_compliant_eu_customer',
      'tax_calculation_failed',
      'currency_incompatible_with_gateway',
      'non_compliant_customer',
    ])
    .optional(),
  is_present: z.enum(['true', 'false']).optional(),
});
const DeferredRevenueExportRemainingBillingCyclesSchema = z.object({
  is: z.string().regex(RegExp('^-?\\d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  between: z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')).optional(),
  is_present: z.enum(['true', 'false']).optional(),
});
const DeferredRevenueExportCreatedAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const DeferredRevenueExportActivatedAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
  is_present: z.enum(['true', 'false']).optional(),
});
const DeferredRevenueExportNextBillingAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const DeferredRevenueExportCancelledAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const DeferredRevenueExportHasScheduledChangesSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const DeferredRevenueExportOfflinePaymentMethodSchema = z.object({
  is: z
    .enum([
      'no_preference',
      'cash',
      'check',
      'bank_transfer',
      'ach_credit',
      'sepa_credit',
      'boleto',
      'us_automated_bank_transfer',
      'eu_automated_bank_transfer',
      'uk_automated_bank_transfer',
      'jp_automated_bank_transfer',
      'mx_automated_bank_transfer',
      'custom',
    ])
    .optional(),
  is_not: z
    .enum([
      'no_preference',
      'cash',
      'check',
      'bank_transfer',
      'ach_credit',
      'sepa_credit',
      'boleto',
      'us_automated_bank_transfer',
      'eu_automated_bank_transfer',
      'uk_automated_bank_transfer',
      'jp_automated_bank_transfer',
      'mx_automated_bank_transfer',
      'custom',
    ])
    .optional(),
  in: z
    .enum([
      'no_preference',
      'cash',
      'check',
      'bank_transfer',
      'ach_credit',
      'sepa_credit',
      'boleto',
      'us_automated_bank_transfer',
      'eu_automated_bank_transfer',
      'uk_automated_bank_transfer',
      'jp_automated_bank_transfer',
      'mx_automated_bank_transfer',
      'custom',
    ])
    .optional(),
  not_in: z
    .enum([
      'no_preference',
      'cash',
      'check',
      'bank_transfer',
      'ach_credit',
      'sepa_credit',
      'boleto',
      'us_automated_bank_transfer',
      'eu_automated_bank_transfer',
      'uk_automated_bank_transfer',
      'jp_automated_bank_transfer',
      'mx_automated_bank_transfer',
      'custom',
    ])
    .optional(),
});
const DeferredRevenueExportAutoCloseInvoicesSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const DeferredRevenueExportPlanIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const DeferredRevenueExportSubscriptionItemSchema = z.object({
  id: DeferredRevenueExportIdSchema.optional(),
  customer_id: DeferredRevenueExportCustomerIdSchema.optional(),
  status: DeferredRevenueExportStatusSchema.optional(),
  cancel_reason: DeferredRevenueExportCancelReasonSchema.optional(),
  remaining_billing_cycles:
    DeferredRevenueExportRemainingBillingCyclesSchema.optional(),
  created_at: DeferredRevenueExportCreatedAtSchema.optional(),
  activated_at: DeferredRevenueExportActivatedAtSchema.optional(),
  next_billing_at: DeferredRevenueExportNextBillingAtSchema.optional(),
  cancelled_at: DeferredRevenueExportCancelledAtSchema.optional(),
  has_scheduled_changes:
    DeferredRevenueExportHasScheduledChangesSchema.optional(),
  updated_at: DeferredRevenueExportUpdatedAtSchema.optional(),
  offline_payment_method:
    DeferredRevenueExportOfflinePaymentMethodSchema.optional(),
  auto_close_invoices: DeferredRevenueExportAutoCloseInvoicesSchema.optional(),
  channel: DeferredRevenueExportChannelSchema.optional(),
  plan_id: DeferredRevenueExportPlanIdSchema.optional(),
});
const DeferredRevenueExportFirstNameSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
});
const DeferredRevenueExportLastNameSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
});
const DeferredRevenueExportEmailSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
});
const DeferredRevenueExportCompanySchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
});
const DeferredRevenueExportPhoneSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
});
const DeferredRevenueExportAutoCollectionSchema = z.object({
  is: z.enum(['on', 'off']).optional(),
  is_not: z.enum(['on', 'off']).optional(),
  in: z.enum(['on', 'off']).optional(),
  not_in: z.enum(['on', 'off']).optional(),
});
const DeferredRevenueExportTaxabilitySchema = z.object({
  is: z.enum(['taxable', 'exempt']).optional(),
  is_not: z.enum(['taxable', 'exempt']).optional(),
  in: z.enum(['taxable', 'exempt']).optional(),
  not_in: z.enum(['taxable', 'exempt']).optional(),
});
const DeferredRevenueExportCustomerItemSchema = z.object({
  id: DeferredRevenueExportIdSchema.optional(),
  first_name: DeferredRevenueExportFirstNameSchema.optional(),
  last_name: DeferredRevenueExportLastNameSchema.optional(),
  email: DeferredRevenueExportEmailSchema.optional(),
  company: DeferredRevenueExportCompanySchema.optional(),
  phone: DeferredRevenueExportPhoneSchema.optional(),
  auto_collection: DeferredRevenueExportAutoCollectionSchema.optional(),
  taxability: DeferredRevenueExportTaxabilitySchema.optional(),
  created_at: DeferredRevenueExportCreatedAtSchema.optional(),
  updated_at: DeferredRevenueExportUpdatedAtSchema.optional(),
  offline_payment_method:
    DeferredRevenueExportOfflinePaymentMethodSchema.optional(),
  auto_close_invoices: DeferredRevenueExportAutoCloseInvoicesSchema.optional(),
  channel: DeferredRevenueExportChannelSchema.optional(),
});
const DeferredRevenueExportParentIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const DeferredRevenueExportPaymentOwnerIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const DeferredRevenueExportInvoiceOwnerIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const DeferredRevenueExportRelationshipSchema = z.object({
  parent_id: DeferredRevenueExportParentIdSchema.optional(),
  payment_owner_id: DeferredRevenueExportPaymentOwnerIdSchema.optional(),
  invoice_owner_id: DeferredRevenueExportInvoiceOwnerIdSchema.optional(),
});
const DeferredRevenueExportBodySchema = z.looseObject({
  report_by: z.enum(['customer', 'invoice', 'product', 'subscription']),
  currency_code: z.string().max(3).optional(),
  report_from_month: z.number().int(),
  report_from_year: z.number().int(),
  report_to_month: z.number().int(),
  report_to_year: z.number().int(),
  include_discounts: z.boolean().default(true).optional(),
  payment_owner: DeferredRevenueExportPaymentOwnerSchema.optional(),
  item_id: DeferredRevenueExportItemIdSchema.optional(),
  item_price_id: DeferredRevenueExportItemPriceIdSchema.optional(),
  cancel_reason_code: DeferredRevenueExportCancelReasonCodeSchema.optional(),
  business_entity_id: DeferredRevenueExportBusinessEntityIdSchema.optional(),
  invoice: z
    .array(DeferredRevenueExportInvoiceItemSchema.optional())
    .optional(),
  subscription: z
    .array(DeferredRevenueExportSubscriptionItemSchema.optional())
    .optional(),
  customer: z
    .array(DeferredRevenueExportCustomerItemSchema.optional())
    .optional(),
  relationship: DeferredRevenueExportRelationshipSchema.optional(),
});
export { DeferredRevenueExportBodySchema };
export type DeferredRevenueExportBody = z.infer<
  typeof DeferredRevenueExportBodySchema
>;

//Export.plans

const PlansExportCurrencyCodeSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const PlansExportIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const PlansExportNameSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const PlansExportPriceSchema = z.object({
  is: z.string().regex(RegExp('^-?\\d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  between: z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')).optional(),
});
const PlansExportPeriodSchema = z.object({
  is: z.string().regex(RegExp('^-?\\d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  between: z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')).optional(),
});
const PlansExportPeriodUnitSchema = z.object({
  is: z.enum(['day', 'week', 'month', 'year']).optional(),
  is_not: z.enum(['day', 'week', 'month', 'year']).optional(),
  in: z.enum(['day', 'week', 'month', 'year']).optional(),
  not_in: z.enum(['day', 'week', 'month', 'year']).optional(),
});
const PlansExportTrialPeriodSchema = z.object({
  is: z.string().regex(RegExp('^-?\\d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  between: z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')).optional(),
  is_present: z.enum(['true', 'false']).optional(),
});
const PlansExportTrialPeriodUnitSchema = z.object({
  is: z.enum(['day', 'month']).optional(),
  is_not: z.enum(['day', 'month']).optional(),
  in: z.enum(['day', 'month']).optional(),
  not_in: z.enum(['day', 'month']).optional(),
});
const PlansExportAddonApplicabilitySchema = z.object({
  is: z.enum(['all', 'restricted']).optional(),
  is_not: z.enum(['all', 'restricted']).optional(),
  in: z.enum(['all', 'restricted']).optional(),
  not_in: z.enum(['all', 'restricted']).optional(),
});
const PlansExportGiftableSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const PlansExportStatusSchema = z.object({
  is: z.enum(['active', 'archived', 'deleted']).optional(),
  is_not: z.enum(['active', 'archived', 'deleted']).optional(),
  in: z.enum(['active', 'archived', 'deleted']).optional(),
  not_in: z.enum(['active', 'archived', 'deleted']).optional(),
});
const PlansExportUpdatedAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const PlansExportChannelSchema = z.object({
  is: z.enum(['web', 'app_store', 'play_store']).optional(),
  is_not: z.enum(['web', 'app_store', 'play_store']).optional(),
  in: z.enum(['web', 'app_store', 'play_store']).optional(),
  not_in: z.enum(['web', 'app_store', 'play_store']).optional(),
});
const PlansExportPlanItemSchema = z.object({
  id: PlansExportIdSchema.optional(),
  name: PlansExportNameSchema.optional(),
  price: PlansExportPriceSchema.optional(),
  period: PlansExportPeriodSchema.optional(),
  period_unit: PlansExportPeriodUnitSchema.optional(),
  trial_period: PlansExportTrialPeriodSchema.optional(),
  trial_period_unit: PlansExportTrialPeriodUnitSchema.optional(),
  addon_applicability: PlansExportAddonApplicabilitySchema.optional(),
  giftable: PlansExportGiftableSchema.optional(),
  status: PlansExportStatusSchema.optional(),
  updated_at: PlansExportUpdatedAtSchema.optional(),
  channel: PlansExportChannelSchema.optional(),
});
const PlansExportBodySchema = z.looseObject({
  currency_code: PlansExportCurrencyCodeSchema.optional(),
  plan: z.array(PlansExportPlanItemSchema.optional()).optional(),
});
export { PlansExportBodySchema };
export type PlansExportBody = z.infer<typeof PlansExportBodySchema>;

//Export.addons

const AddonsExportCurrencyCodeSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const AddonsExportIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const AddonsExportNameSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const AddonsExportChargeTypeSchema = z.object({
  is: z.enum(['recurring', 'non_recurring']).optional(),
  is_not: z.enum(['recurring', 'non_recurring']).optional(),
  in: z.enum(['recurring', 'non_recurring']).optional(),
  not_in: z.enum(['recurring', 'non_recurring']).optional(),
});
const AddonsExportPriceSchema = z.object({
  is: z.string().regex(RegExp('^-?\\d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  between: z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')).optional(),
});
const AddonsExportPeriodSchema = z.object({
  is: z.string().regex(RegExp('^-?\\d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  between: z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')).optional(),
});
const AddonsExportPeriodUnitSchema = z.object({
  is: z.enum(['day', 'week', 'month', 'year', 'not_applicable']).optional(),
  is_not: z.enum(['day', 'week', 'month', 'year', 'not_applicable']).optional(),
  in: z.enum(['day', 'week', 'month', 'year', 'not_applicable']).optional(),
  not_in: z.enum(['day', 'week', 'month', 'year', 'not_applicable']).optional(),
});
const AddonsExportStatusSchema = z.object({
  is: z.enum(['active', 'archived', 'deleted']).optional(),
  is_not: z.enum(['active', 'archived', 'deleted']).optional(),
  in: z.enum(['active', 'archived', 'deleted']).optional(),
  not_in: z.enum(['active', 'archived', 'deleted']).optional(),
});
const AddonsExportUpdatedAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const AddonsExportChannelSchema = z.object({
  is: z.enum(['web', 'app_store', 'play_store']).optional(),
  is_not: z.enum(['web', 'app_store', 'play_store']).optional(),
  in: z.enum(['web', 'app_store', 'play_store']).optional(),
  not_in: z.enum(['web', 'app_store', 'play_store']).optional(),
});
const AddonsExportAddonItemSchema = z.object({
  id: AddonsExportIdSchema.optional(),
  name: AddonsExportNameSchema.optional(),
  charge_type: AddonsExportChargeTypeSchema.optional(),
  price: AddonsExportPriceSchema.optional(),
  period: AddonsExportPeriodSchema.optional(),
  period_unit: AddonsExportPeriodUnitSchema.optional(),
  status: AddonsExportStatusSchema.optional(),
  updated_at: AddonsExportUpdatedAtSchema.optional(),
  channel: AddonsExportChannelSchema.optional(),
});
const AddonsExportBodySchema = z.looseObject({
  currency_code: AddonsExportCurrencyCodeSchema.optional(),
  addon: z.array(AddonsExportAddonItemSchema.optional()).optional(),
});
export { AddonsExportBodySchema };
export type AddonsExportBody = z.infer<typeof AddonsExportBodySchema>;

//Export.coupons

const CouponsExportCurrencyCodeSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const CouponsExportApplicableItemPriceIdsSchema = z.object({
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  is: z.string().min(1).optional(),
});
const CouponsExportIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const CouponsExportNameSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const CouponsExportDiscountTypeSchema = z.object({
  is: z.enum(['fixed_amount', 'percentage', 'offer_quantity']).optional(),
  is_not: z.enum(['fixed_amount', 'percentage', 'offer_quantity']).optional(),
  in: z.enum(['fixed_amount', 'percentage', 'offer_quantity']).optional(),
  not_in: z.enum(['fixed_amount', 'percentage', 'offer_quantity']).optional(),
});
const CouponsExportDurationTypeSchema = z.object({
  is: z.enum(['one_time', 'forever', 'limited_period']).optional(),
  is_not: z.enum(['one_time', 'forever', 'limited_period']).optional(),
  in: z.enum(['one_time', 'forever', 'limited_period']).optional(),
  not_in: z.enum(['one_time', 'forever', 'limited_period']).optional(),
});
const CouponsExportStatusSchema = z.object({
  is: z.enum(['active', 'expired', 'archived', 'deleted', 'future']).optional(),
  is_not: z
    .enum(['active', 'expired', 'archived', 'deleted', 'future'])
    .optional(),
  in: z.enum(['active', 'expired', 'archived', 'deleted', 'future']).optional(),
  not_in: z
    .enum(['active', 'expired', 'archived', 'deleted', 'future'])
    .optional(),
});
const CouponsExportApplyOnSchema = z.object({
  is: z
    .enum([
      'invoice_amount',
      'specified_items_total',
      'each_specified_item',
      'each_unit_of_specified_items',
    ])
    .optional(),
  is_not: z
    .enum([
      'invoice_amount',
      'specified_items_total',
      'each_specified_item',
      'each_unit_of_specified_items',
    ])
    .optional(),
  in: z
    .enum([
      'invoice_amount',
      'specified_items_total',
      'each_specified_item',
      'each_unit_of_specified_items',
    ])
    .optional(),
  not_in: z
    .enum([
      'invoice_amount',
      'specified_items_total',
      'each_specified_item',
      'each_unit_of_specified_items',
    ])
    .optional(),
});
const CouponsExportCreatedAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const CouponsExportUpdatedAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const CouponsExportCouponItemSchema = z.object({
  id: CouponsExportIdSchema.optional(),
  name: CouponsExportNameSchema.optional(),
  discount_type: CouponsExportDiscountTypeSchema.optional(),
  duration_type: CouponsExportDurationTypeSchema.optional(),
  status: CouponsExportStatusSchema.optional(),
  apply_on: CouponsExportApplyOnSchema.optional(),
  created_at: CouponsExportCreatedAtSchema.optional(),
  updated_at: CouponsExportUpdatedAtSchema.optional(),
});
const CouponsExportBodySchema = z.looseObject({
  currency_code: CouponsExportCurrencyCodeSchema.optional(),
  applicable_item_price_ids:
    CouponsExportApplicableItemPriceIdsSchema.optional(),
  coupon: z.array(CouponsExportCouponItemSchema.optional()).optional(),
});
export { CouponsExportBodySchema };
export type CouponsExportBody = z.infer<typeof CouponsExportBodySchema>;

//Export.customers

const CustomersExportBusinessEntityIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const CustomersExportIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const CustomersExportFirstNameSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
});
const CustomersExportLastNameSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
});
const CustomersExportEmailSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
});
const CustomersExportCompanySchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
});
const CustomersExportPhoneSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
});
const CustomersExportAutoCollectionSchema = z.object({
  is: z.enum(['on', 'off']).optional(),
  is_not: z.enum(['on', 'off']).optional(),
  in: z.enum(['on', 'off']).optional(),
  not_in: z.enum(['on', 'off']).optional(),
});
const CustomersExportTaxabilitySchema = z.object({
  is: z.enum(['taxable', 'exempt']).optional(),
  is_not: z.enum(['taxable', 'exempt']).optional(),
  in: z.enum(['taxable', 'exempt']).optional(),
  not_in: z.enum(['taxable', 'exempt']).optional(),
});
const CustomersExportCreatedAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const CustomersExportUpdatedAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const CustomersExportOfflinePaymentMethodSchema = z.object({
  is: z
    .enum([
      'no_preference',
      'cash',
      'check',
      'bank_transfer',
      'ach_credit',
      'sepa_credit',
      'boleto',
      'us_automated_bank_transfer',
      'eu_automated_bank_transfer',
      'uk_automated_bank_transfer',
      'jp_automated_bank_transfer',
      'mx_automated_bank_transfer',
      'custom',
    ])
    .optional(),
  is_not: z
    .enum([
      'no_preference',
      'cash',
      'check',
      'bank_transfer',
      'ach_credit',
      'sepa_credit',
      'boleto',
      'us_automated_bank_transfer',
      'eu_automated_bank_transfer',
      'uk_automated_bank_transfer',
      'jp_automated_bank_transfer',
      'mx_automated_bank_transfer',
      'custom',
    ])
    .optional(),
  in: z
    .enum([
      'no_preference',
      'cash',
      'check',
      'bank_transfer',
      'ach_credit',
      'sepa_credit',
      'boleto',
      'us_automated_bank_transfer',
      'eu_automated_bank_transfer',
      'uk_automated_bank_transfer',
      'jp_automated_bank_transfer',
      'mx_automated_bank_transfer',
      'custom',
    ])
    .optional(),
  not_in: z
    .enum([
      'no_preference',
      'cash',
      'check',
      'bank_transfer',
      'ach_credit',
      'sepa_credit',
      'boleto',
      'us_automated_bank_transfer',
      'eu_automated_bank_transfer',
      'uk_automated_bank_transfer',
      'jp_automated_bank_transfer',
      'mx_automated_bank_transfer',
      'custom',
    ])
    .optional(),
});
const CustomersExportAutoCloseInvoicesSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const CustomersExportChannelSchema = z.object({
  is: z.enum(['web', 'app_store', 'play_store']).optional(),
  is_not: z.enum(['web', 'app_store', 'play_store']).optional(),
  in: z.enum(['web', 'app_store', 'play_store']).optional(),
  not_in: z.enum(['web', 'app_store', 'play_store']).optional(),
});
const CustomersExportCustomerItemSchema = z.object({
  id: CustomersExportIdSchema.optional(),
  first_name: CustomersExportFirstNameSchema.optional(),
  last_name: CustomersExportLastNameSchema.optional(),
  email: CustomersExportEmailSchema.optional(),
  company: CustomersExportCompanySchema.optional(),
  phone: CustomersExportPhoneSchema.optional(),
  auto_collection: CustomersExportAutoCollectionSchema.optional(),
  taxability: CustomersExportTaxabilitySchema.optional(),
  created_at: CustomersExportCreatedAtSchema.optional(),
  updated_at: CustomersExportUpdatedAtSchema.optional(),
  offline_payment_method: CustomersExportOfflinePaymentMethodSchema.optional(),
  auto_close_invoices: CustomersExportAutoCloseInvoicesSchema.optional(),
  channel: CustomersExportChannelSchema.optional(),
});
const CustomersExportParentIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const CustomersExportPaymentOwnerIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const CustomersExportInvoiceOwnerIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const CustomersExportRelationshipSchema = z.object({
  parent_id: CustomersExportParentIdSchema.optional(),
  payment_owner_id: CustomersExportPaymentOwnerIdSchema.optional(),
  invoice_owner_id: CustomersExportInvoiceOwnerIdSchema.optional(),
});
const CustomersExportBodySchema = z.looseObject({
  export_type: z.enum(['data', 'import_friendly_data']).optional(),
  business_entity_id: CustomersExportBusinessEntityIdSchema.optional(),
  customer: z.array(CustomersExportCustomerItemSchema.optional()).optional(),
  relationship: CustomersExportRelationshipSchema.optional(),
});
export { CustomersExportBodySchema };
export type CustomersExportBody = z.infer<typeof CustomersExportBodySchema>;

//Export.subscriptions

const SubscriptionsExportItemIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const SubscriptionsExportItemPriceIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const SubscriptionsExportCancelReasonCodeSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const SubscriptionsExportIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const SubscriptionsExportCustomerIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const SubscriptionsExportStatusSchema = z.object({
  is: z
    .enum([
      'future',
      'in_trial',
      'active',
      'non_renewing',
      'paused',
      'cancelled',
      'transferred',
    ])
    .optional(),
  is_not: z
    .enum([
      'future',
      'in_trial',
      'active',
      'non_renewing',
      'paused',
      'cancelled',
      'transferred',
    ])
    .optional(),
  in: z
    .enum([
      'future',
      'in_trial',
      'active',
      'non_renewing',
      'paused',
      'cancelled',
      'transferred',
    ])
    .optional(),
  not_in: z
    .enum([
      'future',
      'in_trial',
      'active',
      'non_renewing',
      'paused',
      'cancelled',
      'transferred',
    ])
    .optional(),
});
const SubscriptionsExportCancelReasonSchema = z.object({
  is: z
    .enum([
      'not_paid',
      'no_card',
      'fraud_review_failed',
      'non_compliant_eu_customer',
      'tax_calculation_failed',
      'currency_incompatible_with_gateway',
      'non_compliant_customer',
    ])
    .optional(),
  is_not: z
    .enum([
      'not_paid',
      'no_card',
      'fraud_review_failed',
      'non_compliant_eu_customer',
      'tax_calculation_failed',
      'currency_incompatible_with_gateway',
      'non_compliant_customer',
    ])
    .optional(),
  in: z
    .enum([
      'not_paid',
      'no_card',
      'fraud_review_failed',
      'non_compliant_eu_customer',
      'tax_calculation_failed',
      'currency_incompatible_with_gateway',
      'non_compliant_customer',
    ])
    .optional(),
  not_in: z
    .enum([
      'not_paid',
      'no_card',
      'fraud_review_failed',
      'non_compliant_eu_customer',
      'tax_calculation_failed',
      'currency_incompatible_with_gateway',
      'non_compliant_customer',
    ])
    .optional(),
  is_present: z.enum(['true', 'false']).optional(),
});
const SubscriptionsExportRemainingBillingCyclesSchema = z.object({
  is: z.string().regex(RegExp('^-?\\d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  between: z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')).optional(),
  is_present: z.enum(['true', 'false']).optional(),
});
const SubscriptionsExportCreatedAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const SubscriptionsExportActivatedAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
  is_present: z.enum(['true', 'false']).optional(),
});
const SubscriptionsExportNextBillingAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const SubscriptionsExportCancelledAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const SubscriptionsExportHasScheduledChangesSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const SubscriptionsExportUpdatedAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const SubscriptionsExportOfflinePaymentMethodSchema = z.object({
  is: z
    .enum([
      'no_preference',
      'cash',
      'check',
      'bank_transfer',
      'ach_credit',
      'sepa_credit',
      'boleto',
      'us_automated_bank_transfer',
      'eu_automated_bank_transfer',
      'uk_automated_bank_transfer',
      'jp_automated_bank_transfer',
      'mx_automated_bank_transfer',
      'custom',
    ])
    .optional(),
  is_not: z
    .enum([
      'no_preference',
      'cash',
      'check',
      'bank_transfer',
      'ach_credit',
      'sepa_credit',
      'boleto',
      'us_automated_bank_transfer',
      'eu_automated_bank_transfer',
      'uk_automated_bank_transfer',
      'jp_automated_bank_transfer',
      'mx_automated_bank_transfer',
      'custom',
    ])
    .optional(),
  in: z
    .enum([
      'no_preference',
      'cash',
      'check',
      'bank_transfer',
      'ach_credit',
      'sepa_credit',
      'boleto',
      'us_automated_bank_transfer',
      'eu_automated_bank_transfer',
      'uk_automated_bank_transfer',
      'jp_automated_bank_transfer',
      'mx_automated_bank_transfer',
      'custom',
    ])
    .optional(),
  not_in: z
    .enum([
      'no_preference',
      'cash',
      'check',
      'bank_transfer',
      'ach_credit',
      'sepa_credit',
      'boleto',
      'us_automated_bank_transfer',
      'eu_automated_bank_transfer',
      'uk_automated_bank_transfer',
      'jp_automated_bank_transfer',
      'mx_automated_bank_transfer',
      'custom',
    ])
    .optional(),
});
const SubscriptionsExportAutoCloseInvoicesSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const SubscriptionsExportChannelSchema = z.object({
  is: z.enum(['web', 'app_store', 'play_store']).optional(),
  is_not: z.enum(['web', 'app_store', 'play_store']).optional(),
  in: z.enum(['web', 'app_store', 'play_store']).optional(),
  not_in: z.enum(['web', 'app_store', 'play_store']).optional(),
});
const SubscriptionsExportDecommissionedSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const SubscriptionsExportPlanIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const SubscriptionsExportSubscriptionItemSchema = z.object({
  id: SubscriptionsExportIdSchema.optional(),
  customer_id: SubscriptionsExportCustomerIdSchema.optional(),
  status: SubscriptionsExportStatusSchema.optional(),
  cancel_reason: SubscriptionsExportCancelReasonSchema.optional(),
  remaining_billing_cycles:
    SubscriptionsExportRemainingBillingCyclesSchema.optional(),
  created_at: SubscriptionsExportCreatedAtSchema.optional(),
  activated_at: SubscriptionsExportActivatedAtSchema.optional(),
  next_billing_at: SubscriptionsExportNextBillingAtSchema.optional(),
  cancelled_at: SubscriptionsExportCancelledAtSchema.optional(),
  has_scheduled_changes:
    SubscriptionsExportHasScheduledChangesSchema.optional(),
  updated_at: SubscriptionsExportUpdatedAtSchema.optional(),
  offline_payment_method:
    SubscriptionsExportOfflinePaymentMethodSchema.optional(),
  auto_close_invoices: SubscriptionsExportAutoCloseInvoicesSchema.optional(),
  channel: SubscriptionsExportChannelSchema.optional(),
  decommissioned: SubscriptionsExportDecommissionedSchema.optional(),
  plan_id: SubscriptionsExportPlanIdSchema.optional(),
});
const SubscriptionsExportBodySchema = z.looseObject({
  export_type: z.enum(['data', 'import_friendly_data']).optional(),
  item_id: SubscriptionsExportItemIdSchema.optional(),
  item_price_id: SubscriptionsExportItemPriceIdSchema.optional(),
  cancel_reason_code: SubscriptionsExportCancelReasonCodeSchema.optional(),
  subscription: z
    .array(SubscriptionsExportSubscriptionItemSchema.optional())
    .optional(),
});
export { SubscriptionsExportBodySchema };
export type SubscriptionsExportBody = z.infer<
  typeof SubscriptionsExportBodySchema
>;

//Export.invoices

const InvoicesExportPaymentOwnerSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const InvoicesExportIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const InvoicesExportSubscriptionIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const InvoicesExportCustomerIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const InvoicesExportRecurringSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const InvoicesExportStatusSchema = z.object({
  is: z
    .enum(['paid', 'posted', 'payment_due', 'not_paid', 'voided', 'pending'])
    .optional(),
  is_not: z
    .enum(['paid', 'posted', 'payment_due', 'not_paid', 'voided', 'pending'])
    .optional(),
  in: z
    .enum(['paid', 'posted', 'payment_due', 'not_paid', 'voided', 'pending'])
    .optional(),
  not_in: z
    .enum(['paid', 'posted', 'payment_due', 'not_paid', 'voided', 'pending'])
    .optional(),
});
const InvoicesExportPriceTypeSchema = z.object({
  is: z.enum(['tax_exclusive', 'tax_inclusive']).optional(),
  is_not: z.enum(['tax_exclusive', 'tax_inclusive']).optional(),
  in: z.enum(['tax_exclusive', 'tax_inclusive']).optional(),
  not_in: z.enum(['tax_exclusive', 'tax_inclusive']).optional(),
});
const InvoicesExportDateSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const InvoicesExportPaidAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const InvoicesExportTotalSchema = z.object({
  is: z.string().regex(RegExp('^-?\\d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  between: z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')).optional(),
});
const InvoicesExportAmountPaidSchema = z.object({
  is: z.string().regex(RegExp('^-?\\d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  between: z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')).optional(),
});
const InvoicesExportAmountAdjustedSchema = z.object({
  is: z.string().regex(RegExp('^-?\\d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  between: z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')).optional(),
});
const InvoicesExportCreditsAppliedSchema = z.object({
  is: z.string().regex(RegExp('^-?\\d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  between: z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')).optional(),
});
const InvoicesExportAmountDueSchema = z.object({
  is: z.string().regex(RegExp('^-?\\d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  between: z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')).optional(),
});
const InvoicesExportDunningStatusSchema = z.object({
  is: z.enum(['in_progress', 'exhausted', 'stopped', 'success']).optional(),
  is_not: z.enum(['in_progress', 'exhausted', 'stopped', 'success']).optional(),
  in: z.enum(['in_progress', 'exhausted', 'stopped', 'success']).optional(),
  not_in: z.enum(['in_progress', 'exhausted', 'stopped', 'success']).optional(),
  is_present: z.enum(['true', 'false']).optional(),
});
const InvoicesExportUpdatedAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const InvoicesExportChannelSchema = z.object({
  is: z.enum(['web', 'app_store', 'play_store']).optional(),
  is_not: z.enum(['web', 'app_store', 'play_store']).optional(),
  in: z.enum(['web', 'app_store', 'play_store']).optional(),
  not_in: z.enum(['web', 'app_store', 'play_store']).optional(),
});
const InvoicesExportInvoiceItemSchema = z.object({
  id: InvoicesExportIdSchema.optional(),
  subscription_id: InvoicesExportSubscriptionIdSchema.optional(),
  customer_id: InvoicesExportCustomerIdSchema.optional(),
  recurring: InvoicesExportRecurringSchema.optional(),
  status: InvoicesExportStatusSchema.optional(),
  price_type: InvoicesExportPriceTypeSchema.optional(),
  date: InvoicesExportDateSchema.optional(),
  paid_at: InvoicesExportPaidAtSchema.optional(),
  total: InvoicesExportTotalSchema.optional(),
  amount_paid: InvoicesExportAmountPaidSchema.optional(),
  amount_adjusted: InvoicesExportAmountAdjustedSchema.optional(),
  credits_applied: InvoicesExportCreditsAppliedSchema.optional(),
  amount_due: InvoicesExportAmountDueSchema.optional(),
  dunning_status: InvoicesExportDunningStatusSchema.optional(),
  updated_at: InvoicesExportUpdatedAtSchema.optional(),
  channel: InvoicesExportChannelSchema.optional(),
});
const InvoicesExportBodySchema = z.looseObject({
  payment_owner: InvoicesExportPaymentOwnerSchema.optional(),
  invoice: z.array(InvoicesExportInvoiceItemSchema.optional()).optional(),
});
export { InvoicesExportBodySchema };
export type InvoicesExportBody = z.infer<typeof InvoicesExportBodySchema>;

//Export.creditNotes

const CreditNotesExportIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const CreditNotesExportCustomerIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const CreditNotesExportSubscriptionIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const CreditNotesExportReferenceInvoiceIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const CreditNotesExportTypeSchema = z.object({
  is: z.enum(['adjustment', 'refundable', 'store']).optional(),
  is_not: z.enum(['adjustment', 'refundable', 'store']).optional(),
  in: z.enum(['adjustment', 'refundable', 'store']).optional(),
  not_in: z.enum(['adjustment', 'refundable', 'store']).optional(),
});
const CreditNotesExportReasonCodeSchema = z.object({
  is: z
    .enum([
      'write_off',
      'subscription_change',
      'subscription_cancellation',
      'subscription_pause',
      'chargeback',
      'product_unsatisfactory',
      'service_unsatisfactory',
      'order_change',
      'order_cancellation',
      'waiver',
      'other',
      'fraudulent',
    ])
    .optional(),
  is_not: z
    .enum([
      'write_off',
      'subscription_change',
      'subscription_cancellation',
      'subscription_pause',
      'chargeback',
      'product_unsatisfactory',
      'service_unsatisfactory',
      'order_change',
      'order_cancellation',
      'waiver',
      'other',
      'fraudulent',
    ])
    .optional(),
  in: z
    .enum([
      'write_off',
      'subscription_change',
      'subscription_cancellation',
      'subscription_pause',
      'chargeback',
      'product_unsatisfactory',
      'service_unsatisfactory',
      'order_change',
      'order_cancellation',
      'waiver',
      'other',
      'fraudulent',
    ])
    .optional(),
  not_in: z
    .enum([
      'write_off',
      'subscription_change',
      'subscription_cancellation',
      'subscription_pause',
      'chargeback',
      'product_unsatisfactory',
      'service_unsatisfactory',
      'order_change',
      'order_cancellation',
      'waiver',
      'other',
      'fraudulent',
    ])
    .optional(),
});
const CreditNotesExportCreateReasonCodeSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const CreditNotesExportStatusSchema = z.object({
  is: z.enum(['adjusted', 'refunded', 'refund_due', 'voided']).optional(),
  is_not: z.enum(['adjusted', 'refunded', 'refund_due', 'voided']).optional(),
  in: z.enum(['adjusted', 'refunded', 'refund_due', 'voided']).optional(),
  not_in: z.enum(['adjusted', 'refunded', 'refund_due', 'voided']).optional(),
});
const CreditNotesExportDateSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const CreditNotesExportTotalSchema = z.object({
  is: z.string().regex(RegExp('^-?\\d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  between: z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')).optional(),
});
const CreditNotesExportPriceTypeSchema = z.object({
  is: z.enum(['tax_exclusive', 'tax_inclusive']).optional(),
  is_not: z.enum(['tax_exclusive', 'tax_inclusive']).optional(),
  in: z.enum(['tax_exclusive', 'tax_inclusive']).optional(),
  not_in: z.enum(['tax_exclusive', 'tax_inclusive']).optional(),
});
const CreditNotesExportAmountAllocatedSchema = z.object({
  is: z.string().regex(RegExp('^-?\\d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  between: z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')).optional(),
});
const CreditNotesExportAmountRefundedSchema = z.object({
  is: z.string().regex(RegExp('^-?\\d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  between: z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')).optional(),
});
const CreditNotesExportAmountAvailableSchema = z.object({
  is: z.string().regex(RegExp('^-?\\d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  between: z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')).optional(),
});
const CreditNotesExportVoidedAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const CreditNotesExportUpdatedAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const CreditNotesExportChannelSchema = z.object({
  is: z.enum(['web', 'app_store', 'play_store']).optional(),
  is_not: z.enum(['web', 'app_store', 'play_store']).optional(),
  in: z.enum(['web', 'app_store', 'play_store']).optional(),
  not_in: z.enum(['web', 'app_store', 'play_store']).optional(),
});
const CreditNotesExportCreditNoteItemSchema = z.object({
  id: CreditNotesExportIdSchema.optional(),
  customer_id: CreditNotesExportCustomerIdSchema.optional(),
  subscription_id: CreditNotesExportSubscriptionIdSchema.optional(),
  reference_invoice_id: CreditNotesExportReferenceInvoiceIdSchema.optional(),
  type: CreditNotesExportTypeSchema.optional(),
  reason_code: CreditNotesExportReasonCodeSchema.optional(),
  create_reason_code: CreditNotesExportCreateReasonCodeSchema.optional(),
  status: CreditNotesExportStatusSchema.optional(),
  date: CreditNotesExportDateSchema.optional(),
  total: CreditNotesExportTotalSchema.optional(),
  price_type: CreditNotesExportPriceTypeSchema.optional(),
  amount_allocated: CreditNotesExportAmountAllocatedSchema.optional(),
  amount_refunded: CreditNotesExportAmountRefundedSchema.optional(),
  amount_available: CreditNotesExportAmountAvailableSchema.optional(),
  voided_at: CreditNotesExportVoidedAtSchema.optional(),
  updated_at: CreditNotesExportUpdatedAtSchema.optional(),
  channel: CreditNotesExportChannelSchema.optional(),
});
const CreditNotesExportBodySchema = z.looseObject({
  credit_note: z
    .array(CreditNotesExportCreditNoteItemSchema.optional())
    .optional(),
});
export { CreditNotesExportBodySchema };
export type CreditNotesExportBody = z.infer<typeof CreditNotesExportBodySchema>;

//Export.transactions

const TransactionsExportIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const TransactionsExportCustomerIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const TransactionsExportSubscriptionIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const TransactionsExportPaymentSourceIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const TransactionsExportPaymentMethodSchema = z.object({
  is: z
    .enum([
      'card',
      'cash',
      'check',
      'chargeback',
      'bank_transfer',
      'amazon_payments',
      'paypal_express_checkout',
      'direct_debit',
      'alipay',
      'unionpay',
      'apple_pay',
      'wechat_pay',
      'ach_credit',
      'sepa_credit',
      'ideal',
      'google_pay',
      'sofort',
      'bancontact',
      'giropay',
      'dotpay',
      'other',
      'app_store',
      'upi',
      'netbanking_emandates',
      'play_store',
      'custom',
      'boleto',
      'venmo',
      'pay_to',
      'faster_payments',
      'sepa_instant_transfer',
      'automated_bank_transfer',
      'klarna_pay_now',
      'online_banking_poland',
      'payconiq_by_bancontact',
      'electronic_payment_standard',
      'kbc_payment_button',
      'pay_by_bank',
      'trustly',
      'stablecoin',
      'kakao_pay',
      'naver_pay',
      'revolut_pay',
      'cash_app_pay',
      'pix',
      'twint',
      'go_pay',
      'grab_pay',
      'pay_co',
      'after_pay',
      'swish',
      'payme',
      'klarna',
      'alipay_hk',
      'paypay',
      'gcash',
      'south_korean_cards',
      'paynow',
      'bizum',
      'promptpay',
      'dana',
      'touch_n_go',
      'tamara',
      'qpay',
    ])
    .optional(),
  is_not: z
    .enum([
      'card',
      'cash',
      'check',
      'chargeback',
      'bank_transfer',
      'amazon_payments',
      'paypal_express_checkout',
      'direct_debit',
      'alipay',
      'unionpay',
      'apple_pay',
      'wechat_pay',
      'ach_credit',
      'sepa_credit',
      'ideal',
      'google_pay',
      'sofort',
      'bancontact',
      'giropay',
      'dotpay',
      'other',
      'app_store',
      'upi',
      'netbanking_emandates',
      'play_store',
      'custom',
      'boleto',
      'venmo',
      'pay_to',
      'faster_payments',
      'sepa_instant_transfer',
      'automated_bank_transfer',
      'klarna_pay_now',
      'online_banking_poland',
      'payconiq_by_bancontact',
      'electronic_payment_standard',
      'kbc_payment_button',
      'pay_by_bank',
      'trustly',
      'stablecoin',
      'kakao_pay',
      'naver_pay',
      'revolut_pay',
      'cash_app_pay',
      'pix',
      'twint',
      'go_pay',
      'grab_pay',
      'pay_co',
      'after_pay',
      'swish',
      'payme',
      'klarna',
      'alipay_hk',
      'paypay',
      'gcash',
      'south_korean_cards',
      'paynow',
      'bizum',
      'promptpay',
      'dana',
      'touch_n_go',
      'tamara',
      'qpay',
    ])
    .optional(),
  in: z
    .enum([
      'card',
      'cash',
      'check',
      'chargeback',
      'bank_transfer',
      'amazon_payments',
      'paypal_express_checkout',
      'direct_debit',
      'alipay',
      'unionpay',
      'apple_pay',
      'wechat_pay',
      'ach_credit',
      'sepa_credit',
      'ideal',
      'google_pay',
      'sofort',
      'bancontact',
      'giropay',
      'dotpay',
      'other',
      'app_store',
      'upi',
      'netbanking_emandates',
      'play_store',
      'custom',
      'boleto',
      'venmo',
      'pay_to',
      'faster_payments',
      'sepa_instant_transfer',
      'automated_bank_transfer',
      'klarna_pay_now',
      'online_banking_poland',
      'payconiq_by_bancontact',
      'electronic_payment_standard',
      'kbc_payment_button',
      'pay_by_bank',
      'trustly',
      'stablecoin',
      'kakao_pay',
      'naver_pay',
      'revolut_pay',
      'cash_app_pay',
      'pix',
      'twint',
      'go_pay',
      'grab_pay',
      'pay_co',
      'after_pay',
      'swish',
      'payme',
      'klarna',
      'alipay_hk',
      'paypay',
      'gcash',
      'south_korean_cards',
      'paynow',
      'bizum',
      'promptpay',
      'dana',
      'touch_n_go',
      'tamara',
      'qpay',
    ])
    .optional(),
  not_in: z
    .enum([
      'card',
      'cash',
      'check',
      'chargeback',
      'bank_transfer',
      'amazon_payments',
      'paypal_express_checkout',
      'direct_debit',
      'alipay',
      'unionpay',
      'apple_pay',
      'wechat_pay',
      'ach_credit',
      'sepa_credit',
      'ideal',
      'google_pay',
      'sofort',
      'bancontact',
      'giropay',
      'dotpay',
      'other',
      'app_store',
      'upi',
      'netbanking_emandates',
      'play_store',
      'custom',
      'boleto',
      'venmo',
      'pay_to',
      'faster_payments',
      'sepa_instant_transfer',
      'automated_bank_transfer',
      'klarna_pay_now',
      'online_banking_poland',
      'payconiq_by_bancontact',
      'electronic_payment_standard',
      'kbc_payment_button',
      'pay_by_bank',
      'trustly',
      'stablecoin',
      'kakao_pay',
      'naver_pay',
      'revolut_pay',
      'cash_app_pay',
      'pix',
      'twint',
      'go_pay',
      'grab_pay',
      'pay_co',
      'after_pay',
      'swish',
      'payme',
      'klarna',
      'alipay_hk',
      'paypay',
      'gcash',
      'south_korean_cards',
      'paynow',
      'bizum',
      'promptpay',
      'dana',
      'touch_n_go',
      'tamara',
      'qpay',
    ])
    .optional(),
});
const TransactionsExportGatewaySchema = z.object({
  is: z
    .enum([
      'chargebee',
      'chargebee_payments',
      'adyen',
      'stripe',
      'wepay',
      'braintree',
      'authorize_net',
      'paypal_pro',
      'pin',
      'eway',
      'eway_rapid',
      'worldpay',
      'balanced_payments',
      'beanstream',
      'bluepay',
      'elavon',
      'first_data_global',
      'hdfc',
      'migs',
      'nmi',
      'ogone',
      'paymill',
      'paypal_payflow_pro',
      'sage_pay',
      'tco',
      'wirecard',
      'amazon_payments',
      'paypal_express_checkout',
      'gocardless',
      'orbital',
      'moneris_us',
      'moneris',
      'bluesnap',
      'cybersource',
      'vantiv',
      'checkout_com',
      'paypal',
      'ingenico_direct',
      'exact',
      'mollie',
      'quickbooks',
      'razorpay',
      'global_payments',
      'bank_of_america',
      'ecentric',
      'metrics_global',
      'windcave',
      'pay_com',
      'ebanx',
      'dlocal',
      'nuvei',
      'solidgate',
      'paystack',
      'jp_morgan',
      'deutsche_bank',
      'ezidebit',
      'twikey',
      'tempus',
      'moyasar',
      'payway',
      'not_applicable',
    ])
    .optional(),
  is_not: z
    .enum([
      'chargebee',
      'chargebee_payments',
      'adyen',
      'stripe',
      'wepay',
      'braintree',
      'authorize_net',
      'paypal_pro',
      'pin',
      'eway',
      'eway_rapid',
      'worldpay',
      'balanced_payments',
      'beanstream',
      'bluepay',
      'elavon',
      'first_data_global',
      'hdfc',
      'migs',
      'nmi',
      'ogone',
      'paymill',
      'paypal_payflow_pro',
      'sage_pay',
      'tco',
      'wirecard',
      'amazon_payments',
      'paypal_express_checkout',
      'gocardless',
      'orbital',
      'moneris_us',
      'moneris',
      'bluesnap',
      'cybersource',
      'vantiv',
      'checkout_com',
      'paypal',
      'ingenico_direct',
      'exact',
      'mollie',
      'quickbooks',
      'razorpay',
      'global_payments',
      'bank_of_america',
      'ecentric',
      'metrics_global',
      'windcave',
      'pay_com',
      'ebanx',
      'dlocal',
      'nuvei',
      'solidgate',
      'paystack',
      'jp_morgan',
      'deutsche_bank',
      'ezidebit',
      'twikey',
      'tempus',
      'moyasar',
      'payway',
      'not_applicable',
    ])
    .optional(),
  in: z
    .enum([
      'chargebee',
      'chargebee_payments',
      'adyen',
      'stripe',
      'wepay',
      'braintree',
      'authorize_net',
      'paypal_pro',
      'pin',
      'eway',
      'eway_rapid',
      'worldpay',
      'balanced_payments',
      'beanstream',
      'bluepay',
      'elavon',
      'first_data_global',
      'hdfc',
      'migs',
      'nmi',
      'ogone',
      'paymill',
      'paypal_payflow_pro',
      'sage_pay',
      'tco',
      'wirecard',
      'amazon_payments',
      'paypal_express_checkout',
      'gocardless',
      'orbital',
      'moneris_us',
      'moneris',
      'bluesnap',
      'cybersource',
      'vantiv',
      'checkout_com',
      'paypal',
      'ingenico_direct',
      'exact',
      'mollie',
      'quickbooks',
      'razorpay',
      'global_payments',
      'bank_of_america',
      'ecentric',
      'metrics_global',
      'windcave',
      'pay_com',
      'ebanx',
      'dlocal',
      'nuvei',
      'solidgate',
      'paystack',
      'jp_morgan',
      'deutsche_bank',
      'ezidebit',
      'twikey',
      'tempus',
      'moyasar',
      'payway',
      'not_applicable',
    ])
    .optional(),
  not_in: z
    .enum([
      'chargebee',
      'chargebee_payments',
      'adyen',
      'stripe',
      'wepay',
      'braintree',
      'authorize_net',
      'paypal_pro',
      'pin',
      'eway',
      'eway_rapid',
      'worldpay',
      'balanced_payments',
      'beanstream',
      'bluepay',
      'elavon',
      'first_data_global',
      'hdfc',
      'migs',
      'nmi',
      'ogone',
      'paymill',
      'paypal_payflow_pro',
      'sage_pay',
      'tco',
      'wirecard',
      'amazon_payments',
      'paypal_express_checkout',
      'gocardless',
      'orbital',
      'moneris_us',
      'moneris',
      'bluesnap',
      'cybersource',
      'vantiv',
      'checkout_com',
      'paypal',
      'ingenico_direct',
      'exact',
      'mollie',
      'quickbooks',
      'razorpay',
      'global_payments',
      'bank_of_america',
      'ecentric',
      'metrics_global',
      'windcave',
      'pay_com',
      'ebanx',
      'dlocal',
      'nuvei',
      'solidgate',
      'paystack',
      'jp_morgan',
      'deutsche_bank',
      'ezidebit',
      'twikey',
      'tempus',
      'moyasar',
      'payway',
      'not_applicable',
    ])
    .optional(),
});
const TransactionsExportGatewayAccountIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const TransactionsExportIdAtGatewaySchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const TransactionsExportReferenceNumberSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
});
const TransactionsExportTypeSchema = z.object({
  is: z
    .enum(['authorization', 'payment', 'refund', 'payment_reversal'])
    .optional(),
  is_not: z
    .enum(['authorization', 'payment', 'refund', 'payment_reversal'])
    .optional(),
  in: z
    .enum(['authorization', 'payment', 'refund', 'payment_reversal'])
    .optional(),
  not_in: z
    .enum(['authorization', 'payment', 'refund', 'payment_reversal'])
    .optional(),
});
const TransactionsExportDateSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const TransactionsExportAmountSchema = z.object({
  is: z.string().regex(RegExp('^-?\\d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  between: z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')).optional(),
});
const TransactionsExportAmountCapturableSchema = z.object({
  is: z.string().regex(RegExp('^-?\\d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  between: z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')).optional(),
});
const TransactionsExportStatusSchema = z.object({
  is: z
    .enum([
      'in_progress',
      'success',
      'voided',
      'failure',
      'timeout',
      'needs_attention',
      'late_failure',
    ])
    .optional(),
  is_not: z
    .enum([
      'in_progress',
      'success',
      'voided',
      'failure',
      'timeout',
      'needs_attention',
      'late_failure',
    ])
    .optional(),
  in: z
    .enum([
      'in_progress',
      'success',
      'voided',
      'failure',
      'timeout',
      'needs_attention',
      'late_failure',
    ])
    .optional(),
  not_in: z
    .enum([
      'in_progress',
      'success',
      'voided',
      'failure',
      'timeout',
      'needs_attention',
      'late_failure',
    ])
    .optional(),
});
const TransactionsExportUpdatedAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const TransactionsExportTransactionItemSchema = z.object({
  id: TransactionsExportIdSchema.optional(),
  customer_id: TransactionsExportCustomerIdSchema.optional(),
  subscription_id: TransactionsExportSubscriptionIdSchema.optional(),
  payment_source_id: TransactionsExportPaymentSourceIdSchema.optional(),
  payment_method: TransactionsExportPaymentMethodSchema.optional(),
  gateway: TransactionsExportGatewaySchema.optional(),
  gateway_account_id: TransactionsExportGatewayAccountIdSchema.optional(),
  id_at_gateway: TransactionsExportIdAtGatewaySchema.optional(),
  reference_number: TransactionsExportReferenceNumberSchema.optional(),
  type: TransactionsExportTypeSchema.optional(),
  date: TransactionsExportDateSchema.optional(),
  amount: TransactionsExportAmountSchema.optional(),
  amount_capturable: TransactionsExportAmountCapturableSchema.optional(),
  status: TransactionsExportStatusSchema.optional(),
  updated_at: TransactionsExportUpdatedAtSchema.optional(),
});
const TransactionsExportBodySchema = z.looseObject({
  transaction: z
    .array(TransactionsExportTransactionItemSchema.optional())
    .optional(),
});
export { TransactionsExportBodySchema };
export type TransactionsExportBody = z.infer<
  typeof TransactionsExportBodySchema
>;

//Export.orders

const OrdersExportTotalSchema = z.object({
  is: z.string().regex(RegExp('^-?\\d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  between: z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')).optional(),
});
const OrdersExportIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const OrdersExportSubscriptionIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const OrdersExportCustomerIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const OrdersExportStatusSchema = z.object({
  is: z
    .enum([
      'new',
      'processing',
      'complete',
      'cancelled',
      'voided',
      'queued',
      'awaiting_shipment',
      'on_hold',
      'delivered',
      'shipped',
      'partially_delivered',
      'returned',
    ])
    .optional(),
  is_not: z
    .enum([
      'new',
      'processing',
      'complete',
      'cancelled',
      'voided',
      'queued',
      'awaiting_shipment',
      'on_hold',
      'delivered',
      'shipped',
      'partially_delivered',
      'returned',
    ])
    .optional(),
  in: z
    .enum([
      'new',
      'processing',
      'complete',
      'cancelled',
      'voided',
      'queued',
      'awaiting_shipment',
      'on_hold',
      'delivered',
      'shipped',
      'partially_delivered',
      'returned',
    ])
    .optional(),
  not_in: z
    .enum([
      'new',
      'processing',
      'complete',
      'cancelled',
      'voided',
      'queued',
      'awaiting_shipment',
      'on_hold',
      'delivered',
      'shipped',
      'partially_delivered',
      'returned',
    ])
    .optional(),
});
const OrdersExportPriceTypeSchema = z.object({
  is: z.enum(['tax_exclusive', 'tax_inclusive']).optional(),
  is_not: z.enum(['tax_exclusive', 'tax_inclusive']).optional(),
  in: z.enum(['tax_exclusive', 'tax_inclusive']).optional(),
  not_in: z.enum(['tax_exclusive', 'tax_inclusive']).optional(),
});
const OrdersExportOrderDateSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const OrdersExportShippingDateSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const OrdersExportShippedAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const OrdersExportDeliveredAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const OrdersExportCancelledAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const OrdersExportAmountPaidSchema = z.object({
  is: z.string().regex(RegExp('^-?\\d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  between: z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')).optional(),
});
const OrdersExportRefundableCreditsSchema = z.object({
  is: z.string().regex(RegExp('^-?\\d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  between: z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')).optional(),
});
const OrdersExportRefundableCreditsIssuedSchema = z.object({
  is: z.string().regex(RegExp('^-?\\d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  between: z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')).optional(),
});
const OrdersExportUpdatedAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const OrdersExportResentStatusSchema = z.object({
  is: z.enum(['fully_resent', 'partially_resent']).optional(),
  is_not: z.enum(['fully_resent', 'partially_resent']).optional(),
  in: z.enum(['fully_resent', 'partially_resent']).optional(),
  not_in: z.enum(['fully_resent', 'partially_resent']).optional(),
});
const OrdersExportIsResentSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const OrdersExportOriginalOrderIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const OrdersExportOrderItemSchema = z.object({
  id: OrdersExportIdSchema.optional(),
  subscription_id: OrdersExportSubscriptionIdSchema.optional(),
  customer_id: OrdersExportCustomerIdSchema.optional(),
  status: OrdersExportStatusSchema.optional(),
  price_type: OrdersExportPriceTypeSchema.optional(),
  order_date: OrdersExportOrderDateSchema.optional(),
  shipping_date: OrdersExportShippingDateSchema.optional(),
  shipped_at: OrdersExportShippedAtSchema.optional(),
  delivered_at: OrdersExportDeliveredAtSchema.optional(),
  cancelled_at: OrdersExportCancelledAtSchema.optional(),
  amount_paid: OrdersExportAmountPaidSchema.optional(),
  refundable_credits: OrdersExportRefundableCreditsSchema.optional(),
  refundable_credits_issued:
    OrdersExportRefundableCreditsIssuedSchema.optional(),
  updated_at: OrdersExportUpdatedAtSchema.optional(),
  resent_status: OrdersExportResentStatusSchema.optional(),
  is_resent: OrdersExportIsResentSchema.optional(),
  original_order_id: OrdersExportOriginalOrderIdSchema.optional(),
});
const OrdersExportBodySchema = z.looseObject({
  total: OrdersExportTotalSchema.optional(),
  order: z.array(OrdersExportOrderItemSchema.optional()).optional(),
});
export { OrdersExportBodySchema };
export type OrdersExportBody = z.infer<typeof OrdersExportBodySchema>;

//Export.itemFamilies

const ItemFamiliesExportBusinessEntityIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
});
const ItemFamiliesExportIncludeSiteLevelResourcesSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const ItemFamiliesExportIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ItemFamiliesExportNameSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const ItemFamiliesExportUpdatedAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const ItemFamiliesExportItemFamilyItemSchema = z.object({
  id: ItemFamiliesExportIdSchema.optional(),
  name: ItemFamiliesExportNameSchema.optional(),
  updated_at: ItemFamiliesExportUpdatedAtSchema.optional(),
});
const ItemFamiliesExportBodySchema = z.looseObject({
  business_entity_id: ItemFamiliesExportBusinessEntityIdSchema.optional(),
  include_site_level_resources:
    ItemFamiliesExportIncludeSiteLevelResourcesSchema.optional(),
  item_family: z
    .array(ItemFamiliesExportItemFamilyItemSchema.optional())
    .optional(),
});
export { ItemFamiliesExportBodySchema };
export type ItemFamiliesExportBody = z.infer<
  typeof ItemFamiliesExportBodySchema
>;

//Export.items

const ItemsExportBusinessEntityIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
});
const ItemsExportIncludeSiteLevelResourcesSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const ItemsExportIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ItemsExportItemFamilyIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ItemsExportTypeSchema = z.object({
  is: z.enum(['plan', 'addon', 'charge']).optional(),
  is_not: z.enum(['plan', 'addon', 'charge']).optional(),
  in: z.enum(['plan', 'addon', 'charge']).optional(),
  not_in: z.enum(['plan', 'addon', 'charge']).optional(),
});
const ItemsExportNameSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const ItemsExportItemApplicabilitySchema = z.object({
  is: z.enum(['all', 'restricted']).optional(),
  is_not: z.enum(['all', 'restricted']).optional(),
  in: z.enum(['all', 'restricted']).optional(),
  not_in: z.enum(['all', 'restricted']).optional(),
});
const ItemsExportStatusSchema = z.object({
  is: z.enum(['active', 'archived', 'deleted']).optional(),
  is_not: z.enum(['active', 'archived', 'deleted']).optional(),
  in: z.enum(['active', 'archived', 'deleted']).optional(),
  not_in: z.enum(['active', 'archived', 'deleted']).optional(),
});
const ItemsExportIsGiftableSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const ItemsExportUpdatedAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const ItemsExportEnabledForCheckoutSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const ItemsExportEnabledInPortalSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const ItemsExportMeteredSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const ItemsExportUsageCalculationSchema = z.object({
  is: z.enum(['sum_of_usages', 'last_usage', 'max_usage']).optional(),
  is_not: z.enum(['sum_of_usages', 'last_usage', 'max_usage']).optional(),
  in: z.enum(['sum_of_usages', 'last_usage', 'max_usage']).optional(),
  not_in: z.enum(['sum_of_usages', 'last_usage', 'max_usage']).optional(),
});
const ItemsExportChannelSchema = z.object({
  is: z.enum(['web', 'app_store', 'play_store']).optional(),
  is_not: z.enum(['web', 'app_store', 'play_store']).optional(),
  in: z.enum(['web', 'app_store', 'play_store']).optional(),
  not_in: z.enum(['web', 'app_store', 'play_store']).optional(),
});
const ItemsExportItemItemSchema = z.object({
  id: ItemsExportIdSchema.optional(),
  item_family_id: ItemsExportItemFamilyIdSchema.optional(),
  type: ItemsExportTypeSchema.optional(),
  name: ItemsExportNameSchema.optional(),
  item_applicability: ItemsExportItemApplicabilitySchema.optional(),
  status: ItemsExportStatusSchema.optional(),
  is_giftable: ItemsExportIsGiftableSchema.optional(),
  updated_at: ItemsExportUpdatedAtSchema.optional(),
  enabled_for_checkout: ItemsExportEnabledForCheckoutSchema.optional(),
  enabled_in_portal: ItemsExportEnabledInPortalSchema.optional(),
  metered: ItemsExportMeteredSchema.optional(),
  usage_calculation: ItemsExportUsageCalculationSchema.optional(),
  channel: ItemsExportChannelSchema.optional(),
});
const ItemsExportBodySchema = z.looseObject({
  business_entity_id: ItemsExportBusinessEntityIdSchema.optional(),
  include_site_level_resources:
    ItemsExportIncludeSiteLevelResourcesSchema.optional(),
  item: z.array(ItemsExportItemItemSchema.optional()).optional(),
});
export { ItemsExportBodySchema };
export type ItemsExportBody = z.infer<typeof ItemsExportBodySchema>;

//Export.itemPrices

const ItemPricesExportItemFamilyIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ItemPricesExportItemTypeSchema = z.object({
  is: z.enum(['plan', 'addon', 'charge']).optional(),
  is_not: z.enum(['plan', 'addon', 'charge']).optional(),
  in: z.enum(['plan', 'addon', 'charge']).optional(),
  not_in: z.enum(['plan', 'addon', 'charge']).optional(),
});
const ItemPricesExportCurrencyCodeSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ItemPricesExportBusinessEntityIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
});
const ItemPricesExportIncludeSiteLevelResourcesSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const ItemPricesExportIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ItemPricesExportNameSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ItemPricesExportPricingModelSchema = z.object({
  is: z
    .enum(['flat_fee', 'per_unit', 'tiered', 'volume', 'stairstep'])
    .optional(),
  is_not: z
    .enum(['flat_fee', 'per_unit', 'tiered', 'volume', 'stairstep'])
    .optional(),
  in: z
    .enum(['flat_fee', 'per_unit', 'tiered', 'volume', 'stairstep'])
    .optional(),
  not_in: z
    .enum(['flat_fee', 'per_unit', 'tiered', 'volume', 'stairstep'])
    .optional(),
});
const ItemPricesExportItemIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ItemPricesExportPriceVariantIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ItemPricesExportTrialPeriodSchema = z.object({
  is: z.string().regex(RegExp('^-?\\d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  between: z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')).optional(),
});
const ItemPricesExportTrialPeriodUnitSchema = z.object({
  is: z.enum(['day', 'month']).optional(),
  is_not: z.enum(['day', 'month']).optional(),
  in: z.enum(['day', 'month']).optional(),
  not_in: z.enum(['day', 'month']).optional(),
});
const ItemPricesExportStatusSchema = z.object({
  is: z.enum(['active', 'archived', 'deleted']).optional(),
  is_not: z.enum(['active', 'archived', 'deleted']).optional(),
  in: z.enum(['active', 'archived', 'deleted']).optional(),
  not_in: z.enum(['active', 'archived', 'deleted']).optional(),
});
const ItemPricesExportUpdatedAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const ItemPricesExportPeriodUnitSchema = z.object({
  is: z.enum(['day', 'week', 'month', 'year']).optional(),
  is_not: z.enum(['day', 'week', 'month', 'year']).optional(),
  in: z.enum(['day', 'week', 'month', 'year']).optional(),
  not_in: z.enum(['day', 'week', 'month', 'year']).optional(),
});
const ItemPricesExportPeriodSchema = z.object({
  is: z.string().regex(RegExp('^-?\\d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  between: z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')).optional(),
});
const ItemPricesExportChannelSchema = z.object({
  is: z.enum(['web', 'app_store', 'play_store']).optional(),
  is_not: z.enum(['web', 'app_store', 'play_store']).optional(),
  in: z.enum(['web', 'app_store', 'play_store']).optional(),
  not_in: z.enum(['web', 'app_store', 'play_store']).optional(),
});
const ItemPricesExportItemPriceItemSchema = z.object({
  id: ItemPricesExportIdSchema.optional(),
  name: ItemPricesExportNameSchema.optional(),
  pricing_model: ItemPricesExportPricingModelSchema.optional(),
  item_id: ItemPricesExportItemIdSchema.optional(),
  price_variant_id: ItemPricesExportPriceVariantIdSchema.optional(),
  trial_period: ItemPricesExportTrialPeriodSchema.optional(),
  trial_period_unit: ItemPricesExportTrialPeriodUnitSchema.optional(),
  status: ItemPricesExportStatusSchema.optional(),
  updated_at: ItemPricesExportUpdatedAtSchema.optional(),
  period_unit: ItemPricesExportPeriodUnitSchema.optional(),
  period: ItemPricesExportPeriodSchema.optional(),
  channel: ItemPricesExportChannelSchema.optional(),
});
const ItemPricesExportBodySchema = z.looseObject({
  item_family_id: ItemPricesExportItemFamilyIdSchema.optional(),
  item_type: ItemPricesExportItemTypeSchema.optional(),
  currency_code: ItemPricesExportCurrencyCodeSchema.optional(),
  business_entity_id: ItemPricesExportBusinessEntityIdSchema.optional(),
  include_site_level_resources:
    ItemPricesExportIncludeSiteLevelResourcesSchema.optional(),
  item_price: z
    .array(ItemPricesExportItemPriceItemSchema.optional())
    .optional(),
});
export { ItemPricesExportBodySchema };
export type ItemPricesExportBody = z.infer<typeof ItemPricesExportBodySchema>;

//Export.attachedItems

const AttachedItemsExportItemTypeSchema = z.object({
  is: z.enum(['plan', 'addon', 'charge']).optional(),
  is_not: z.enum(['plan', 'addon', 'charge']).optional(),
  in: z.enum(['plan', 'addon', 'charge']).optional(),
  not_in: z.enum(['plan', 'addon', 'charge']).optional(),
});
const AttachedItemsExportIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const AttachedItemsExportItemIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const AttachedItemsExportTypeSchema = z.object({
  is: z.enum(['recommended', 'mandatory', 'optional']).optional(),
  is_not: z.enum(['recommended', 'mandatory', 'optional']).optional(),
  in: z.enum(['recommended', 'mandatory', 'optional']).optional(),
  not_in: z.enum(['recommended', 'mandatory', 'optional']).optional(),
});
const AttachedItemsExportChargeOnEventSchema = z.object({
  is: z
    .enum([
      'subscription_creation',
      'subscription_trial_start',
      'plan_activation',
      'subscription_activation',
      'contract_termination',
      'on_demand',
    ])
    .optional(),
  is_not: z
    .enum([
      'subscription_creation',
      'subscription_trial_start',
      'plan_activation',
      'subscription_activation',
      'contract_termination',
      'on_demand',
    ])
    .optional(),
  in: z
    .enum([
      'subscription_creation',
      'subscription_trial_start',
      'plan_activation',
      'subscription_activation',
      'contract_termination',
      'on_demand',
    ])
    .optional(),
  not_in: z
    .enum([
      'subscription_creation',
      'subscription_trial_start',
      'plan_activation',
      'subscription_activation',
      'contract_termination',
      'on_demand',
    ])
    .optional(),
});
const AttachedItemsExportUpdatedAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const AttachedItemsExportParentItemIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const AttachedItemsExportAttachedItemItemSchema = z.object({
  id: AttachedItemsExportIdSchema.optional(),
  item_id: AttachedItemsExportItemIdSchema.optional(),
  type: AttachedItemsExportTypeSchema.optional(),
  charge_on_event: AttachedItemsExportChargeOnEventSchema.optional(),
  updated_at: AttachedItemsExportUpdatedAtSchema.optional(),
  parent_item_id: AttachedItemsExportParentItemIdSchema.optional(),
});
const AttachedItemsExportBodySchema = z.looseObject({
  item_type: AttachedItemsExportItemTypeSchema.optional(),
  attached_item: z
    .array(AttachedItemsExportAttachedItemItemSchema.optional())
    .optional(),
});
export { AttachedItemsExportBodySchema };
export type AttachedItemsExportBody = z.infer<
  typeof AttachedItemsExportBodySchema
>;

//Export.differentialPrices

const DifferentialPricesExportItemIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const DifferentialPricesExportItemPriceIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const DifferentialPricesExportIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const DifferentialPricesExportParentItemIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const DifferentialPricesExportDifferentialPriceItemSchema = z.object({
  item_price_id: DifferentialPricesExportItemPriceIdSchema.optional(),
  id: DifferentialPricesExportIdSchema.optional(),
  parent_item_id: DifferentialPricesExportParentItemIdSchema.optional(),
});
const DifferentialPricesExportBodySchema = z.looseObject({
  item_id: DifferentialPricesExportItemIdSchema.optional(),
  differential_price: z
    .array(DifferentialPricesExportDifferentialPriceItemSchema.optional())
    .optional(),
});
export { DifferentialPricesExportBodySchema };
export type DifferentialPricesExportBody = z.infer<
  typeof DifferentialPricesExportBodySchema
>;

//Export.priceVariants

const PriceVariantsExportBusinessEntityIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
});
const PriceVariantsExportIncludeSiteLevelResourcesSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const PriceVariantsExportIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const PriceVariantsExportNameSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const PriceVariantsExportStatusSchema = z.object({
  is: z.enum(['active', 'archived']).optional(),
  is_not: z.enum(['active', 'archived']).optional(),
  in: z.enum(['active', 'archived']).optional(),
  not_in: z.enum(['active', 'archived']).optional(),
});
const PriceVariantsExportUpdatedAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const PriceVariantsExportCreatedAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const PriceVariantsExportPriceVariantItemSchema = z.object({
  id: PriceVariantsExportIdSchema.optional(),
  name: PriceVariantsExportNameSchema.optional(),
  status: PriceVariantsExportStatusSchema.optional(),
  updated_at: PriceVariantsExportUpdatedAtSchema.optional(),
  created_at: PriceVariantsExportCreatedAtSchema.optional(),
});
const PriceVariantsExportBodySchema = z.looseObject({
  business_entity_id: PriceVariantsExportBusinessEntityIdSchema.optional(),
  include_site_level_resources:
    PriceVariantsExportIncludeSiteLevelResourcesSchema.optional(),
  price_variant: z
    .array(PriceVariantsExportPriceVariantItemSchema.optional())
    .optional(),
});
export { PriceVariantsExportBodySchema };
export type PriceVariantsExportBody = z.infer<
  typeof PriceVariantsExportBodySchema
>;
