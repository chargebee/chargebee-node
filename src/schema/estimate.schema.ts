// Generated Zod schemas: Estimate
// Actions: createSubscription, createSubItemEstimate, createSubForCustomerEstimate, createSubItemForCustomerEstimate, updateSubscription, updateSubscriptionForItems, renewalEstimate, advanceInvoiceEstimate, regenerateInvoiceEstimate, upcomingInvoicesEstimate, changeTermEnd, cancelSubscription, cancelSubscriptionForItems, pauseSubscription, resumeSubscription, giftSubscription, giftSubscriptionForItems, createInvoice, createInvoiceForItems, paymentSchedules
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//Estimate.createSubscription

const CreateSubscriptionEstimateSubscriptionSchema = z.object({
  id: z.string().max(50).optional(),
  plan_id: z.string().max(100),
  plan_quantity: z.number().int().min(1).optional(),
  plan_quantity_in_decimal: z.string().max(33).optional(),
  plan_unit_price: z.number().int().min(0).optional(),
  plan_unit_price_in_decimal: z.string().max(39).optional(),
  setup_fee: z.number().int().min(0).optional(),
  trial_end: z.number().int().optional(),
  start_date: z.number().int().optional(),
  coupon: z.string().max(100).optional(),
  offline_payment_method: z
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
  free_period: z.number().int().min(1).optional(),
  free_period_unit: z.enum(['day', 'week', 'month', 'year']).optional(),
  contract_term_billing_cycle_on_renewal: z
    .number()
    .int()
    .min(1)
    .max(100)
    .optional(),
  trial_end_action: z
    .enum([
      'site_default',
      'plan_default',
      'activate_subscription',
      'cancel_subscription',
    ])
    .optional(),
});
const CreateSubscriptionEstimateBillingAddressSchema = z.object({
  line1: z.string().max(150).optional(),
  line2: z.string().max(150).optional(),
  line3: z.string().max(150).optional(),
  city: z.string().max(50).optional(),
  state_code: z.string().max(50).optional(),
  zip: z.string().max(20).optional(),
  country: z.string().max(50).optional(),
  validation_status: z
    .enum(['not_validated', 'valid', 'partially_valid', 'invalid'])
    .optional(),
});
const CreateSubscriptionEstimateShippingAddressSchema = z.object({
  line1: z.string().max(150).optional(),
  line2: z.string().max(150).optional(),
  line3: z.string().max(150).optional(),
  city: z.string().max(50).optional(),
  state_code: z.string().max(50).optional(),
  zip: z.string().max(20).optional(),
  country: z.string().max(50).optional(),
  validation_status: z
    .enum(['not_validated', 'valid', 'partially_valid', 'invalid'])
    .optional(),
});
const CreateSubscriptionEstimateCustomerSchema = z.object({
  vat_number: z.string().max(20).optional(),
  vat_number_prefix: z.string().max(10).optional(),
  registered_for_gst: z.boolean().optional(),
  taxability: z.enum(['taxable', 'exempt']).optional(),
  entity_code: z
    .enum([
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'p',
      'q',
      'r',
      'med1',
      'med2',
    ])
    .optional(),
  exempt_number: z.string().max(100).optional(),
  exemption_details: z.array(z.string().optional()).optional(),
  customer_type: z
    .enum(['residential', 'business', 'senior_citizen', 'industrial'])
    .optional(),
});
const CreateSubscriptionEstimateContractTermSchema = z.object({
  action_at_term_end: z.enum(['renew', 'evergreen', 'cancel']).optional(),
  cancellation_cutoff_period: z.number().int().optional(),
});
const CreateSubscriptionEstimateAddonsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  billing_cycles: z.array(z.number().int().min(0).optional()).optional(),
  trial_end: z.array(z.number().int().optional()).optional(),
});
const CreateSubscriptionEstimateEventBasedAddonsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  service_period_in_days: z
    .array(z.number().int().min(1).max(4000).optional())
    .optional(),
  on_event: z
    .array(
      z
        .enum([
          'subscription_creation',
          'subscription_trial_start',
          'plan_activation',
          'subscription_activation',
          'contract_termination',
        ])
        .optional(),
    )
    .optional(),
  charge_once: z.array(z.boolean().default(true).optional()).optional(),
  charge_on: z.array(z.enum(['immediately', 'on_event']).optional()).optional(),
});
const CreateSubscriptionEstimateTaxProvidersFieldsSchema = z.object({
  provider_name: z.array(z.string().max(50).optional()).optional(),
  field_id: z.array(z.string().max(50).optional()).optional(),
  field_value: z.array(z.string().max(50).optional()).optional(),
});
const CreateSubscriptionEstimateBodySchema = z.looseObject({
  billing_cycles: z.number().int().min(0).optional(),
  mandatory_addons_to_remove: z
    .array(z.string().max(100).optional())
    .optional(),
  terms_to_charge: z.number().int().min(1).optional(),
  billing_alignment_mode: z.enum(['immediate', 'delayed']).optional(),
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  invoice_immediately: z.boolean().optional(),
  invoice_date: z.number().int().optional(),
  client_profile_id: z.string().max(50).optional(),
  subscription: CreateSubscriptionEstimateSubscriptionSchema.optional(),
  billing_address: CreateSubscriptionEstimateBillingAddressSchema.optional(),
  shipping_address: CreateSubscriptionEstimateShippingAddressSchema.optional(),
  customer: CreateSubscriptionEstimateCustomerSchema.optional(),
  contract_term: CreateSubscriptionEstimateContractTermSchema.optional(),
  addons: CreateSubscriptionEstimateAddonsSchema.optional(),
  event_based_addons:
    CreateSubscriptionEstimateEventBasedAddonsSchema.optional(),
  tax_providers_fields:
    CreateSubscriptionEstimateTaxProvidersFieldsSchema.optional(),
});
export { CreateSubscriptionEstimateBodySchema };
export type CreateSubscriptionEstimateBody = z.infer<
  typeof CreateSubscriptionEstimateBodySchema
>;

//Estimate.createSubItemEstimate

const CreateSubItemEstimateEstimateSubscriptionSchema = z.object({
  id: z.string().max(50).optional(),
  trial_end: z.number().int().optional(),
  setup_fee: z.number().int().min(0).optional(),
  start_date: z.number().int().optional(),
  coupon: z.string().max(100).optional(),
  offline_payment_method: z
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
  free_period: z.number().int().min(1).optional(),
  free_period_unit: z.enum(['day', 'week', 'month', 'year']).optional(),
  contract_term_billing_cycle_on_renewal: z
    .number()
    .int()
    .min(1)
    .max(100)
    .optional(),
  trial_end_action: z
    .enum([
      'site_default',
      'plan_default',
      'activate_subscription',
      'cancel_subscription',
    ])
    .optional(),
});
const CreateSubItemEstimateEstimateBillingAddressSchema = z.object({
  line1: z.string().max(150).optional(),
  line2: z.string().max(150).optional(),
  line3: z.string().max(150).optional(),
  city: z.string().max(50).optional(),
  state_code: z.string().max(50).optional(),
  zip: z.string().max(20).optional(),
  country: z.string().max(50).optional(),
  validation_status: z
    .enum(['not_validated', 'valid', 'partially_valid', 'invalid'])
    .optional(),
});
const CreateSubItemEstimateEstimateShippingAddressSchema = z.object({
  line1: z.string().max(150).optional(),
  line2: z.string().max(150).optional(),
  line3: z.string().max(150).optional(),
  city: z.string().max(50).optional(),
  state_code: z.string().max(50).optional(),
  zip: z.string().max(20).optional(),
  country: z.string().max(50).optional(),
  validation_status: z
    .enum(['not_validated', 'valid', 'partially_valid', 'invalid'])
    .optional(),
});
const CreateSubItemEstimateEstimateCustomerSchema = z.object({
  vat_number: z.string().max(20).optional(),
  vat_number_prefix: z.string().max(10).optional(),
  registered_for_gst: z.boolean().optional(),
  taxability: z.enum(['taxable', 'exempt']).optional(),
  entity_code: z
    .enum([
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'p',
      'q',
      'r',
      'med1',
      'med2',
    ])
    .optional(),
  exempt_number: z.string().max(100).optional(),
  exemption_details: z.array(z.string().optional()).optional(),
  customer_type: z
    .enum(['residential', 'business', 'senior_citizen', 'industrial'])
    .optional(),
});
const CreateSubItemEstimateEstimateContractTermSchema = z.object({
  action_at_term_end: z.enum(['renew', 'evergreen', 'cancel']).optional(),
  contract_start: z.number().int().optional(),
  cancellation_cutoff_period: z.number().int().optional(),
});
const CreateSubItemEstimateEstimateSubscriptionItemsSchema = z.object({
  item_price_id: z.array(z.string().max(100).optional()),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  billing_cycles: z.array(z.number().int().min(0).optional()).optional(),
  trial_end: z.array(z.number().int().optional()).optional(),
  service_period_days: z
    .array(z.number().int().min(1).max(730).optional())
    .optional(),
  charge_on_event: z
    .array(
      z
        .enum([
          'subscription_creation',
          'subscription_trial_start',
          'plan_activation',
          'subscription_activation',
          'contract_termination',
        ])
        .optional(),
    )
    .optional(),
  charge_once: z.array(z.boolean().optional()).optional(),
  item_type: z.array(z.enum(['plan', 'addon', 'charge']).optional()).optional(),
  charge_on_option: z
    .array(z.enum(['immediately', 'on_event']).optional())
    .optional(),
});
const CreateSubItemEstimateEstimateDiscountsSchema = z.object({
  apply_on: z
    .array(z.enum(['invoice_amount', 'specific_item_price']).optional())
    .optional(),
  duration_type: z.array(
    z.enum(['one_time', 'forever', 'limited_period']).optional(),
  ),
  percentage: z.array(z.number().min(0.01).max(100).optional()).optional(),
  amount: z.array(z.number().int().min(0).optional()).optional(),
  period: z.array(z.number().int().min(1).optional()).optional(),
  period_unit: z
    .array(z.enum(['day', 'week', 'month', 'year']).optional())
    .optional(),
  included_in_mrr: z.array(z.boolean().optional()).optional(),
  item_price_id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
});
const CreateSubItemEstimateEstimateItemTiersSchema = z.object({
  item_price_id: z.array(z.string().max(100).optional()).optional(),
  starting_unit: z.array(z.number().int().min(1).optional()).optional(),
  ending_unit: z.array(z.number().int().optional()).optional(),
  price: z.array(z.number().int().min(0).optional()).optional(),
  starting_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  ending_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  pricing_type: z
    .array(z.enum(['per_unit', 'flat_fee', 'package']).optional())
    .optional(),
  package_size: z.array(z.number().int().min(1).optional()).optional(),
});
const CreateSubItemEstimateEstimateTaxProvidersFieldsSchema = z.object({
  provider_name: z.array(z.string().max(50).optional()).optional(),
  field_id: z.array(z.string().max(50).optional()).optional(),
  field_value: z.array(z.string().max(50).optional()).optional(),
});
const CreateSubItemEstimateEstimateBodySchema = z.looseObject({
  billing_cycles: z.number().int().min(0).optional(),
  mandatory_items_to_remove: z.array(z.string().max(100).optional()).optional(),
  terms_to_charge: z.number().int().min(1).optional(),
  billing_alignment_mode: z.enum(['immediate', 'delayed']).optional(),
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  invoice_immediately: z.boolean().optional(),
  invoice_date: z.number().int().optional(),
  client_profile_id: z.string().max(50).optional(),
  subscription: CreateSubItemEstimateEstimateSubscriptionSchema.optional(),
  billing_address: CreateSubItemEstimateEstimateBillingAddressSchema.optional(),
  shipping_address:
    CreateSubItemEstimateEstimateShippingAddressSchema.optional(),
  customer: CreateSubItemEstimateEstimateCustomerSchema.optional(),
  contract_term: CreateSubItemEstimateEstimateContractTermSchema.optional(),
  subscription_items:
    CreateSubItemEstimateEstimateSubscriptionItemsSchema.optional(),
  discounts: CreateSubItemEstimateEstimateDiscountsSchema.optional(),
  item_tiers: CreateSubItemEstimateEstimateItemTiersSchema.optional(),
  tax_providers_fields:
    CreateSubItemEstimateEstimateTaxProvidersFieldsSchema.optional(),
});
export { CreateSubItemEstimateEstimateBodySchema };
export type CreateSubItemEstimateEstimateBody = z.infer<
  typeof CreateSubItemEstimateEstimateBodySchema
>;

//Estimate.createSubForCustomerEstimate

const CreateSubForCustomerEstimateEstimateSubscriptionSchema = z.object({
  id: z.string().max(50).optional(),
  plan_id: z.string().max(100),
  plan_quantity: z.number().int().min(1).optional(),
  plan_quantity_in_decimal: z.string().max(33).optional(),
  plan_unit_price: z.number().int().min(0).optional(),
  plan_unit_price_in_decimal: z.string().max(39).optional(),
  setup_fee: z.number().int().min(0).optional(),
  trial_end: z.number().int().optional(),
  start_date: z.number().int().optional(),
  offline_payment_method: z
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
  free_period: z.number().int().min(1).optional(),
  free_period_unit: z.enum(['day', 'week', 'month', 'year']).optional(),
  contract_term_billing_cycle_on_renewal: z
    .number()
    .int()
    .min(1)
    .max(100)
    .optional(),
  trial_end_action: z
    .enum([
      'site_default',
      'plan_default',
      'activate_subscription',
      'cancel_subscription',
    ])
    .optional(),
});
const CreateSubForCustomerEstimateEstimateShippingAddressSchema = z.object({
  line1: z.string().max(150).optional(),
  line2: z.string().max(150).optional(),
  line3: z.string().max(150).optional(),
  city: z.string().max(50).optional(),
  state_code: z.string().max(50).optional(),
  zip: z.string().max(20).optional(),
  country: z.string().max(50).optional(),
  validation_status: z
    .enum(['not_validated', 'valid', 'partially_valid', 'invalid'])
    .optional(),
});
const CreateSubForCustomerEstimateEstimateContractTermSchema = z.object({
  action_at_term_end: z.enum(['renew', 'evergreen', 'cancel']).optional(),
  cancellation_cutoff_period: z.number().int().optional(),
});
const CreateSubForCustomerEstimateEstimateAddonsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  billing_cycles: z.array(z.number().int().min(0).optional()).optional(),
  trial_end: z.array(z.number().int().optional()).optional(),
});
const CreateSubForCustomerEstimateEstimateEventBasedAddonsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  service_period_in_days: z
    .array(z.number().int().min(1).max(4000).optional())
    .optional(),
  on_event: z
    .array(
      z
        .enum([
          'subscription_creation',
          'subscription_trial_start',
          'plan_activation',
          'subscription_activation',
          'contract_termination',
        ])
        .optional(),
    )
    .optional(),
  charge_once: z.array(z.boolean().default(true).optional()).optional(),
  charge_on: z.array(z.enum(['immediately', 'on_event']).optional()).optional(),
});
const CreateSubForCustomerEstimateEstimateBodySchema = z.looseObject({
  use_existing_balances: z.boolean().default(true).optional(),
  invoice_immediately: z.boolean().optional(),
  billing_cycles: z.number().int().min(0).optional(),
  mandatory_addons_to_remove: z
    .array(z.string().max(100).optional())
    .optional(),
  terms_to_charge: z.number().int().min(1).optional(),
  billing_alignment_mode: z.enum(['immediate', 'delayed']).optional(),
  invoice_date: z.number().int().optional(),
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  subscription:
    CreateSubForCustomerEstimateEstimateSubscriptionSchema.optional(),
  shipping_address:
    CreateSubForCustomerEstimateEstimateShippingAddressSchema.optional(),
  contract_term:
    CreateSubForCustomerEstimateEstimateContractTermSchema.optional(),
  addons: CreateSubForCustomerEstimateEstimateAddonsSchema.optional(),
  event_based_addons:
    CreateSubForCustomerEstimateEstimateEventBasedAddonsSchema.optional(),
});
export { CreateSubForCustomerEstimateEstimateBodySchema };
export type CreateSubForCustomerEstimateEstimateBody = z.infer<
  typeof CreateSubForCustomerEstimateEstimateBodySchema
>;

//Estimate.createSubItemForCustomerEstimate

const CreateSubItemForCustomerEstimateEstimateSubscriptionSchema = z.object({
  id: z.string().max(50).optional(),
  trial_end: z.number().int().optional(),
  setup_fee: z.number().int().min(0).optional(),
  start_date: z.number().int().optional(),
  offline_payment_method: z
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
  free_period: z.number().int().min(1).optional(),
  free_period_unit: z.enum(['day', 'week', 'month', 'year']).optional(),
  contract_term_billing_cycle_on_renewal: z
    .number()
    .int()
    .min(1)
    .max(100)
    .optional(),
  trial_end_action: z
    .enum([
      'site_default',
      'plan_default',
      'activate_subscription',
      'cancel_subscription',
    ])
    .optional(),
});
const CreateSubItemForCustomerEstimateEstimateShippingAddressSchema = z.object({
  line1: z.string().max(150).optional(),
  line2: z.string().max(150).optional(),
  line3: z.string().max(150).optional(),
  city: z.string().max(50).optional(),
  state_code: z.string().max(50).optional(),
  zip: z.string().max(20).optional(),
  country: z.string().max(50).optional(),
  validation_status: z
    .enum(['not_validated', 'valid', 'partially_valid', 'invalid'])
    .optional(),
});
const CreateSubItemForCustomerEstimateEstimateBillingAddressSchema = z.object({
  line1: z.string().max(150).optional(),
  line2: z.string().max(150).optional(),
  line3: z.string().max(150).optional(),
  city: z.string().max(50).optional(),
  state_code: z.string().max(50).optional(),
  zip: z.string().max(20).optional(),
  country: z.string().max(50).optional(),
  validation_status: z
    .enum(['not_validated', 'valid', 'partially_valid', 'invalid'])
    .optional(),
});
const CreateSubItemForCustomerEstimateEstimateContractTermSchema = z.object({
  action_at_term_end: z.enum(['renew', 'evergreen', 'cancel']).optional(),
  contract_start: z.number().int().optional(),
  cancellation_cutoff_period: z.number().int().optional(),
});
const CreateSubItemForCustomerEstimateEstimateBillingOverrideSchema = z.object({
  max_excess_payment_usage: z.number().int().min(-1).optional(),
  max_refundable_credits_usage: z.number().int().min(-1).optional(),
});
const CreateSubItemForCustomerEstimateEstimateSubscriptionItemsSchema =
  z.object({
    item_price_id: z.array(z.string().max(100).optional()),
    quantity: z.array(z.number().int().min(1).optional()).optional(),
    quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
    unit_price: z.array(z.number().int().min(0).optional()).optional(),
    unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
    billing_cycles: z.array(z.number().int().min(0).optional()).optional(),
    trial_end: z.array(z.number().int().optional()).optional(),
    service_period_days: z
      .array(z.number().int().min(1).max(730).optional())
      .optional(),
    charge_on_event: z
      .array(
        z
          .enum([
            'subscription_creation',
            'subscription_trial_start',
            'plan_activation',
            'subscription_activation',
            'contract_termination',
          ])
          .optional(),
      )
      .optional(),
    charge_once: z.array(z.boolean().optional()).optional(),
    item_type: z
      .array(z.enum(['plan', 'addon', 'charge']).optional())
      .optional(),
    charge_on_option: z
      .array(z.enum(['immediately', 'on_event']).optional())
      .optional(),
  });
const CreateSubItemForCustomerEstimateEstimateDiscountsSchema = z.object({
  apply_on: z
    .array(z.enum(['invoice_amount', 'specific_item_price']).optional())
    .optional(),
  duration_type: z.array(
    z.enum(['one_time', 'forever', 'limited_period']).optional(),
  ),
  percentage: z.array(z.number().min(0.01).max(100).optional()).optional(),
  amount: z.array(z.number().int().min(0).optional()).optional(),
  period: z.array(z.number().int().min(1).optional()).optional(),
  period_unit: z
    .array(z.enum(['day', 'week', 'month', 'year']).optional())
    .optional(),
  included_in_mrr: z.array(z.boolean().optional()).optional(),
  item_price_id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
});
const CreateSubItemForCustomerEstimateEstimateItemTiersSchema = z.object({
  item_price_id: z.array(z.string().max(100).optional()).optional(),
  starting_unit: z.array(z.number().int().min(1).optional()).optional(),
  ending_unit: z.array(z.number().int().optional()).optional(),
  price: z.array(z.number().int().min(0).optional()).optional(),
  starting_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  ending_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  pricing_type: z
    .array(z.enum(['per_unit', 'flat_fee', 'package']).optional())
    .optional(),
  package_size: z.array(z.number().int().min(1).optional()).optional(),
});
const CreateSubItemForCustomerEstimateEstimateBodySchema = z.looseObject({
  use_existing_balances: z.boolean().default(true).optional(),
  invoice_immediately: z.boolean().optional(),
  billing_cycles: z.number().int().min(0).optional(),
  mandatory_items_to_remove: z.array(z.string().max(100).optional()).optional(),
  terms_to_charge: z.number().int().min(1).optional(),
  billing_alignment_mode: z.enum(['immediate', 'delayed']).optional(),
  invoice_date: z.number().int().optional(),
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  subscription:
    CreateSubItemForCustomerEstimateEstimateSubscriptionSchema.optional(),
  shipping_address:
    CreateSubItemForCustomerEstimateEstimateShippingAddressSchema.optional(),
  billing_address:
    CreateSubItemForCustomerEstimateEstimateBillingAddressSchema.optional(),
  contract_term:
    CreateSubItemForCustomerEstimateEstimateContractTermSchema.optional(),
  billing_override:
    CreateSubItemForCustomerEstimateEstimateBillingOverrideSchema.optional(),
  subscription_items:
    CreateSubItemForCustomerEstimateEstimateSubscriptionItemsSchema.optional(),
  discounts: CreateSubItemForCustomerEstimateEstimateDiscountsSchema.optional(),
  item_tiers:
    CreateSubItemForCustomerEstimateEstimateItemTiersSchema.optional(),
});
export { CreateSubItemForCustomerEstimateEstimateBodySchema };
export type CreateSubItemForCustomerEstimateEstimateBody = z.infer<
  typeof CreateSubItemForCustomerEstimateEstimateBodySchema
>;

//Estimate.updateSubscription

const UpdateSubscriptionEstimateSubscriptionSchema = z.object({
  id: z.string().max(50),
  plan_id: z.string().max(100).optional(),
  plan_quantity: z.number().int().min(1).optional(),
  plan_unit_price: z.number().int().min(0).optional(),
  setup_fee: z.number().int().min(0).optional(),
  plan_quantity_in_decimal: z.string().max(33).optional(),
  plan_unit_price_in_decimal: z.string().max(39).optional(),
  start_date: z.number().int().optional(),
  trial_end: z.number().int().optional(),
  coupon: z.string().max(100).optional(),
  auto_collection: z.enum(['on', 'off']).optional(),
  offline_payment_method: z
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
  free_period: z.number().int().min(1).optional(),
  free_period_unit: z.enum(['day', 'week', 'month', 'year']).optional(),
  trial_end_action: z
    .enum([
      'site_default',
      'plan_default',
      'activate_subscription',
      'cancel_subscription',
    ])
    .optional(),
});
const UpdateSubscriptionEstimateBillingAddressSchema = z.object({
  line1: z.string().max(150).optional(),
  line2: z.string().max(150).optional(),
  line3: z.string().max(150).optional(),
  city: z.string().max(50).optional(),
  state_code: z.string().max(50).optional(),
  zip: z.string().max(20).optional(),
  country: z.string().max(50).optional(),
  validation_status: z
    .enum(['not_validated', 'valid', 'partially_valid', 'invalid'])
    .optional(),
});
const UpdateSubscriptionEstimateShippingAddressSchema = z.object({
  line1: z.string().max(150).optional(),
  line2: z.string().max(150).optional(),
  line3: z.string().max(150).optional(),
  city: z.string().max(50).optional(),
  state_code: z.string().max(50).optional(),
  zip: z.string().max(20).optional(),
  country: z.string().max(50).optional(),
  validation_status: z
    .enum(['not_validated', 'valid', 'partially_valid', 'invalid'])
    .optional(),
});
const UpdateSubscriptionEstimateCustomerSchema = z.object({
  vat_number: z.string().max(20).optional(),
  vat_number_prefix: z.string().max(10).optional(),
  registered_for_gst: z.boolean().optional(),
  taxability: z.enum(['taxable', 'exempt']).optional(),
});
const UpdateSubscriptionEstimateAddonsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  billing_cycles: z.array(z.number().int().min(0).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  trial_end: z.array(z.number().int().optional()).optional(),
  proration_type: z
    .array(z.enum(['full_term', 'partial_term', 'none']).optional())
    .optional(),
});
const UpdateSubscriptionEstimateEventBasedAddonsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  service_period_in_days: z
    .array(z.number().int().min(1).max(4000).optional())
    .optional(),
  charge_on: z.array(z.enum(['immediately', 'on_event']).optional()).optional(),
  on_event: z
    .array(
      z
        .enum([
          'subscription_creation',
          'subscription_trial_start',
          'plan_activation',
          'subscription_activation',
          'contract_termination',
        ])
        .optional(),
    )
    .optional(),
  charge_once: z.array(z.boolean().default(true).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
});
const UpdateSubscriptionEstimateBodySchema = z.looseObject({
  changes_scheduled_at: z.number().int().optional(),
  change_option: z
    .enum(['immediately', 'end_of_term', 'specific_date'])
    .optional(),
  replace_addon_list: z.boolean().default(false).optional(),
  mandatory_addons_to_remove: z
    .array(z.string().max(100).optional())
    .optional(),
  invoice_date: z.number().int().optional(),
  billing_cycles: z.number().int().min(0).optional(),
  terms_to_charge: z.number().int().min(1).optional(),
  reactivate_from: z.number().int().optional(),
  billing_alignment_mode: z.enum(['immediate', 'delayed']).optional(),
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  replace_coupon_list: z.boolean().default(false).optional(),
  prorate: z.boolean().optional(),
  end_of_term: z.boolean().default(false).optional(),
  force_term_reset: z.boolean().default(false).optional(),
  reactivate: z.boolean().optional(),
  include_delayed_charges: z.boolean().default(false).optional(),
  use_existing_balances: z.boolean().default(true).optional(),
  invoice_immediately: z.boolean().optional(),
  subscription: UpdateSubscriptionEstimateSubscriptionSchema.optional(),
  billing_address: UpdateSubscriptionEstimateBillingAddressSchema.optional(),
  shipping_address: UpdateSubscriptionEstimateShippingAddressSchema.optional(),
  customer: UpdateSubscriptionEstimateCustomerSchema.optional(),
  addons: UpdateSubscriptionEstimateAddonsSchema.optional(),
  event_based_addons:
    UpdateSubscriptionEstimateEventBasedAddonsSchema.optional(),
});
export { UpdateSubscriptionEstimateBodySchema };
export type UpdateSubscriptionEstimateBody = z.infer<
  typeof UpdateSubscriptionEstimateBodySchema
>;

//Estimate.updateSubscriptionForItems

const UpdateSubscriptionForItemsEstimateSubscriptionSchema = z.object({
  id: z.string().max(50),
  setup_fee: z.number().int().min(0).optional(),
  start_date: z.number().int().optional(),
  trial_end: z.number().int().optional(),
  coupon: z.string().max(100).optional(),
  auto_collection: z.enum(['on', 'off']).optional(),
  offline_payment_method: z
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
  free_period: z.number().int().min(1).optional(),
  free_period_unit: z.enum(['day', 'week', 'month', 'year']).optional(),
  trial_end_action: z
    .enum([
      'site_default',
      'plan_default',
      'activate_subscription',
      'cancel_subscription',
    ])
    .optional(),
});
const UpdateSubscriptionForItemsEstimateBillingAddressSchema = z.object({
  line1: z.string().max(150).optional(),
  line2: z.string().max(150).optional(),
  line3: z.string().max(150).optional(),
  city: z.string().max(50).optional(),
  state_code: z.string().max(50).optional(),
  zip: z.string().max(20).optional(),
  country: z.string().max(50).optional(),
  validation_status: z
    .enum(['not_validated', 'valid', 'partially_valid', 'invalid'])
    .optional(),
});
const UpdateSubscriptionForItemsEstimateShippingAddressSchema = z.object({
  line1: z.string().max(150).optional(),
  line2: z.string().max(150).optional(),
  line3: z.string().max(150).optional(),
  city: z.string().max(50).optional(),
  state_code: z.string().max(50).optional(),
  zip: z.string().max(20).optional(),
  country: z.string().max(50).optional(),
  validation_status: z
    .enum(['not_validated', 'valid', 'partially_valid', 'invalid'])
    .optional(),
});
const UpdateSubscriptionForItemsEstimateCustomerSchema = z.object({
  vat_number: z.string().max(20).optional(),
  vat_number_prefix: z.string().max(10).optional(),
  registered_for_gst: z.boolean().optional(),
  taxability: z.enum(['taxable', 'exempt']).optional(),
});
const UpdateSubscriptionForItemsEstimateBillingOverrideSchema = z.object({
  max_excess_payment_usage: z.number().int().min(-1).optional(),
  max_refundable_credits_usage: z.number().int().min(-1).optional(),
});
const UpdateSubscriptionForItemsEstimateSubscriptionItemsSchema = z.object({
  item_price_id: z.array(z.string().max(100).optional()),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  billing_cycles: z.array(z.number().int().min(0).optional()).optional(),
  trial_end: z.array(z.number().int().optional()).optional(),
  service_period_days: z
    .array(z.number().int().min(1).max(730).optional())
    .optional(),
  charge_on_event: z
    .array(
      z
        .enum([
          'subscription_creation',
          'subscription_trial_start',
          'plan_activation',
          'subscription_activation',
          'contract_termination',
        ])
        .optional(),
    )
    .optional(),
  charge_once: z.array(z.boolean().optional()).optional(),
  charge_on_option: z
    .array(z.enum(['immediately', 'on_event']).optional())
    .optional(),
  item_type: z.array(z.enum(['plan', 'addon', 'charge']).optional()).optional(),
  proration_type: z
    .array(z.enum(['full_term', 'partial_term', 'none']).optional())
    .optional(),
});
const UpdateSubscriptionForItemsEstimateDiscountsSchema = z.object({
  apply_on: z
    .array(z.enum(['invoice_amount', 'specific_item_price']).optional())
    .optional(),
  duration_type: z.array(
    z.enum(['one_time', 'forever', 'limited_period']).optional(),
  ),
  percentage: z.array(z.number().min(0.01).max(100).optional()).optional(),
  amount: z.array(z.number().int().min(0).optional()).optional(),
  period: z.array(z.number().int().min(1).optional()).optional(),
  period_unit: z
    .array(z.enum(['day', 'week', 'month', 'year']).optional())
    .optional(),
  included_in_mrr: z.array(z.boolean().optional()).optional(),
  item_price_id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  operation_type: z.array(z.enum(['add', 'remove']).optional()),
  id: z.array(z.string().max(50).optional()).optional(),
});
const UpdateSubscriptionForItemsEstimateItemTiersSchema = z.object({
  item_price_id: z.array(z.string().max(100).optional()).optional(),
  starting_unit: z.array(z.number().int().min(1).optional()).optional(),
  ending_unit: z.array(z.number().int().optional()).optional(),
  price: z.array(z.number().int().min(0).optional()).optional(),
  starting_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  ending_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  pricing_type: z
    .array(z.enum(['per_unit', 'flat_fee', 'package']).optional())
    .optional(),
  package_size: z.array(z.number().int().min(1).optional()).optional(),
});
const UpdateSubscriptionForItemsEstimateBodySchema = z.looseObject({
  changes_scheduled_at: z.number().int().optional(),
  change_option: z
    .enum(['immediately', 'end_of_term', 'specific_date'])
    .optional(),
  mandatory_items_to_remove: z.array(z.string().max(100).optional()).optional(),
  replace_items_list: z.boolean().default(false).optional(),
  invoice_date: z.number().int().optional(),
  billing_cycles: z.number().int().min(0).optional(),
  terms_to_charge: z.number().int().min(1).optional(),
  reactivate_from: z.number().int().optional(),
  billing_alignment_mode: z.enum(['immediate', 'delayed']).optional(),
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  replace_coupon_list: z.boolean().default(false).optional(),
  prorate: z.boolean().optional(),
  end_of_term: z.boolean().default(false).optional(),
  force_term_reset: z.boolean().default(false).optional(),
  reactivate: z.boolean().optional(),
  include_delayed_charges: z.boolean().default(false).optional(),
  use_existing_balances: z.boolean().default(true).optional(),
  invoice_immediately: z.boolean().optional(),
  invoice_usages: z.boolean().default(false).optional(),
  subscription: UpdateSubscriptionForItemsEstimateSubscriptionSchema.optional(),
  billing_address:
    UpdateSubscriptionForItemsEstimateBillingAddressSchema.optional(),
  shipping_address:
    UpdateSubscriptionForItemsEstimateShippingAddressSchema.optional(),
  customer: UpdateSubscriptionForItemsEstimateCustomerSchema.optional(),
  billing_override:
    UpdateSubscriptionForItemsEstimateBillingOverrideSchema.optional(),
  subscription_items:
    UpdateSubscriptionForItemsEstimateSubscriptionItemsSchema.optional(),
  discounts: UpdateSubscriptionForItemsEstimateDiscountsSchema.optional(),
  item_tiers: UpdateSubscriptionForItemsEstimateItemTiersSchema.optional(),
});
export { UpdateSubscriptionForItemsEstimateBodySchema };
export type UpdateSubscriptionForItemsEstimateBody = z.infer<
  typeof UpdateSubscriptionForItemsEstimateBodySchema
>;

//Estimate.renewalEstimate

const RenewalEstimateEstimateBodySchema = z.looseObject({
  include_delayed_charges: z.boolean().default(true).optional(),
  use_existing_balances: z.boolean().default(true).optional(),
  ignore_scheduled_cancellation: z.boolean().default(false).optional(),
  ignore_scheduled_changes: z.boolean().default(false).optional(),
  exclude_tax_type: z.enum(['exclusive', 'none']).optional(),
});
export { RenewalEstimateEstimateBodySchema };
export type RenewalEstimateEstimateBody = z.infer<
  typeof RenewalEstimateEstimateBodySchema
>;

//Estimate.advanceInvoiceEstimate

const AdvanceInvoiceEstimateEstimateFixedIntervalScheduleSchema = z.object({
  number_of_occurrences: z.number().int().min(1).optional(),
  days_before_renewal: z.number().int().min(1).optional(),
  end_schedule_on: z
    .enum(['after_number_of_intervals', 'specific_date', 'subscription_end'])
    .optional(),
  end_date: z.number().int().optional(),
});
const AdvanceInvoiceEstimateEstimateSpecificDatesScheduleSchema = z.object({
  terms_to_charge: z.array(z.number().int().optional()).optional(),
  date: z.array(z.number().int().optional()).optional(),
});
const AdvanceInvoiceEstimateEstimateBodySchema = z.looseObject({
  terms_to_charge: z.number().int().min(1).optional(),
  invoice_immediately: z.boolean().optional(),
  schedule_type: z
    .enum(['immediate', 'specific_dates', 'fixed_intervals'])
    .optional(),
  fixed_interval_schedule:
    AdvanceInvoiceEstimateEstimateFixedIntervalScheduleSchema.optional(),
  specific_dates_schedule:
    AdvanceInvoiceEstimateEstimateSpecificDatesScheduleSchema.optional(),
});
export { AdvanceInvoiceEstimateEstimateBodySchema };
export type AdvanceInvoiceEstimateEstimateBody = z.infer<
  typeof AdvanceInvoiceEstimateEstimateBodySchema
>;

//Estimate.regenerateInvoiceEstimate

const RegenerateInvoiceEstimateEstimateBodySchema = z.looseObject({
  date_from: z.number().int().optional(),
  date_to: z.number().int().optional(),
  prorate: z.boolean().optional(),
  invoice_immediately: z.boolean().optional(),
});
export { RegenerateInvoiceEstimateEstimateBodySchema };
export type RegenerateInvoiceEstimateEstimateBody = z.infer<
  typeof RegenerateInvoiceEstimateEstimateBodySchema
>;

//Estimate.upcomingInvoicesEstimate

const UpcomingInvoicesEstimateEstimateBodySchema = z.looseObject({
  include_usage_charges: z.boolean().default(false).optional(),
});
export { UpcomingInvoicesEstimateEstimateBodySchema };
export type UpcomingInvoicesEstimateEstimateBody = z.infer<
  typeof UpcomingInvoicesEstimateEstimateBodySchema
>;

//Estimate.changeTermEnd

const ChangeTermEndEstimateBodySchema = z.looseObject({
  term_ends_at: z.number().int(),
  prorate: z.boolean().optional(),
  invoice_immediately: z.boolean().optional(),
});
export { ChangeTermEndEstimateBodySchema };
export type ChangeTermEndEstimateBody = z.infer<
  typeof ChangeTermEndEstimateBodySchema
>;

//Estimate.cancelSubscription

const CancelSubscriptionEstimateEventBasedAddonsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  service_period_in_days: z
    .array(z.number().int().min(1).max(4000).optional())
    .optional(),
});
const CancelSubscriptionEstimateBodySchema = z.looseObject({
  cancel_option: z
    .enum([
      'immediately',
      'end_of_term',
      'specific_date',
      'end_of_billing_term',
    ])
    .optional(),
  end_of_term: z.boolean().default(false).optional(),
  cancel_at: z.number().int().optional(),
  credit_option_for_current_term_charges: z
    .enum(['none', 'prorate', 'full'])
    .optional(),
  unbilled_charges_option: z.enum(['invoice', 'delete']).optional(),
  account_receivables_handling: z
    .enum(['no_action', 'schedule_payment_collection', 'write_off'])
    .optional(),
  refundable_credits_handling: z
    .enum(['no_action', 'schedule_refund'])
    .optional(),
  contract_term_cancel_option: z
    .enum([
      'terminate_immediately',
      'end_of_contract_term',
      'specific_date',
      'end_of_subscription_billing_term',
    ])
    .optional(),
  invoice_date: z.number().int().optional(),
  cancel_reason_code: z.string().max(100).optional(),
  event_based_addons:
    CancelSubscriptionEstimateEventBasedAddonsSchema.optional(),
});
export { CancelSubscriptionEstimateBodySchema };
export type CancelSubscriptionEstimateBody = z.infer<
  typeof CancelSubscriptionEstimateBodySchema
>;

//Estimate.cancelSubscriptionForItems

const CancelSubscriptionForItemsEstimateSubscriptionItemsSchema = z.object({
  item_price_id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  service_period_days: z
    .array(z.number().int().min(1).max(730).optional())
    .optional(),
});
const CancelSubscriptionForItemsEstimateBodySchema = z.looseObject({
  cancel_option: z
    .enum([
      'immediately',
      'end_of_term',
      'specific_date',
      'end_of_billing_term',
    ])
    .optional(),
  end_of_term: z.boolean().default(false).optional(),
  cancel_at: z.number().int().optional(),
  credit_option_for_current_term_charges: z
    .enum(['none', 'prorate', 'full'])
    .optional(),
  unbilled_charges_option: z.enum(['invoice', 'delete']).optional(),
  account_receivables_handling: z
    .enum(['no_action', 'schedule_payment_collection', 'write_off'])
    .optional(),
  refundable_credits_handling: z
    .enum(['no_action', 'schedule_refund'])
    .optional(),
  contract_term_cancel_option: z
    .enum([
      'terminate_immediately',
      'end_of_contract_term',
      'specific_date',
      'end_of_subscription_billing_term',
    ])
    .optional(),
  invoice_date: z.number().int().optional(),
  cancel_reason_code: z.string().max(100).optional(),
  subscription_items:
    CancelSubscriptionForItemsEstimateSubscriptionItemsSchema.optional(),
});
export { CancelSubscriptionForItemsEstimateBodySchema };
export type CancelSubscriptionForItemsEstimateBody = z.infer<
  typeof CancelSubscriptionForItemsEstimateBodySchema
>;

//Estimate.pauseSubscription

const PauseSubscriptionEstimateSubscriptionSchema = z.object({
  pause_date: z.number().int().optional(),
  resume_date: z.number().int().optional(),
  skip_billing_cycles: z.number().int().min(1).optional(),
});
const PauseSubscriptionEstimateBodySchema = z.looseObject({
  pause_option: z
    .enum(['immediately', 'end_of_term', 'specific_date', 'billing_cycles'])
    .optional(),
  unbilled_charges_handling: z.enum(['no_action', 'invoice']).optional(),
  subscription: PauseSubscriptionEstimateSubscriptionSchema.optional(),
});
export { PauseSubscriptionEstimateBodySchema };
export type PauseSubscriptionEstimateBody = z.infer<
  typeof PauseSubscriptionEstimateBodySchema
>;

//Estimate.resumeSubscription

const ResumeSubscriptionEstimateSubscriptionSchema = z.object({
  resume_date: z.number().int().optional(),
});
const ResumeSubscriptionEstimateBodySchema = z.looseObject({
  resume_option: z.enum(['immediately', 'specific_date']).optional(),
  charges_handling: z
    .enum(['invoice_immediately', 'add_to_unbilled_charges'])
    .optional(),
  subscription: ResumeSubscriptionEstimateSubscriptionSchema.optional(),
});
export { ResumeSubscriptionEstimateBodySchema };
export type ResumeSubscriptionEstimateBody = z.infer<
  typeof ResumeSubscriptionEstimateBodySchema
>;

//Estimate.giftSubscription

const GiftSubscriptionEstimateGiftSchema = z.object({
  scheduled_at: z.number().int().optional(),
  auto_claim: z.boolean().default(false).optional(),
  no_expiry: z.boolean().optional(),
  claim_expiry_date: z.number().int().optional(),
});
const GiftSubscriptionEstimateGifterSchema = z.object({
  customer_id: z.string().max(50),
  signature: z.string().max(50),
  note: z.string().max(500).optional(),
  payment_src_id: z.string().max(40).optional(),
});
const GiftSubscriptionEstimateGiftReceiverSchema = z.object({
  customer_id: z.string().max(50),
  first_name: z.string().max(150),
  last_name: z.string().max(150),
  email: z.string().email().max(70),
});
const GiftSubscriptionEstimateAdditionalInformationSchema = z.looseObject({});
const GiftSubscriptionEstimatePaymentIntentSchema = z.object({
  id: z.string().max(150).optional(),
  gateway_account_id: z.string().max(50).optional(),
  gw_token: z.string().max(65000).optional(),
  payment_method_type: z
    .enum([
      'card',
      'ideal',
      'sofort',
      'bancontact',
      'google_pay',
      'dotpay',
      'giropay',
      'apple_pay',
      'upi',
      'netbanking_emandates',
      'paypal_express_checkout',
      'direct_debit',
      'boleto',
      'venmo',
      'amazon_payments',
      'pay_to',
      'faster_payments',
      'sepa_instant_transfer',
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
      'wechat_pay',
      'alipay',
      'pix',
      'twint',
      'go_pay',
      'grab_pay',
      'pay_co',
      'after_pay',
      'swish',
      'payme',
    ])
    .optional(),
  reference_id: z.string().max(65000).optional(),
  gw_payment_method_id: z.string().max(65000).optional(),
  additional_information:
    GiftSubscriptionEstimateAdditionalInformationSchema.optional(),
});
const GiftSubscriptionEstimateShippingAddressSchema = z.object({
  first_name: z.string().max(150).optional(),
  last_name: z.string().max(150).optional(),
  email: z.string().email().max(70).optional(),
  company: z.string().max(250).optional(),
  phone: z.string().max(50).optional(),
  line1: z.string().max(150).optional(),
  line2: z.string().max(150).optional(),
  line3: z.string().max(150).optional(),
  city: z.string().max(50).optional(),
  state_code: z.string().max(50).optional(),
  state: z.string().max(50).optional(),
  zip: z.string().max(20).optional(),
  country: z.string().max(50).optional(),
  validation_status: z
    .enum(['not_validated', 'valid', 'partially_valid', 'invalid'])
    .optional(),
});
const GiftSubscriptionEstimateSubscriptionSchema = z.object({
  plan_id: z.string().max(100),
  plan_quantity: z.number().int().min(1).optional(),
  plan_quantity_in_decimal: z.string().max(33).optional(),
});
const GiftSubscriptionEstimateAddonsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
});
const GiftSubscriptionEstimateBodySchema = z.looseObject({
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  gift: GiftSubscriptionEstimateGiftSchema.optional(),
  gifter: GiftSubscriptionEstimateGifterSchema.optional(),
  gift_receiver: GiftSubscriptionEstimateGiftReceiverSchema.optional(),
  payment_intent: GiftSubscriptionEstimatePaymentIntentSchema.optional(),
  shipping_address: GiftSubscriptionEstimateShippingAddressSchema.optional(),
  subscription: GiftSubscriptionEstimateSubscriptionSchema.optional(),
  addons: GiftSubscriptionEstimateAddonsSchema.optional(),
});
export { GiftSubscriptionEstimateBodySchema };
export type GiftSubscriptionEstimateBody = z.infer<
  typeof GiftSubscriptionEstimateBodySchema
>;

//Estimate.giftSubscriptionForItems

const GiftSubscriptionForItemsEstimateGiftSchema = z.object({
  scheduled_at: z.number().int().optional(),
  auto_claim: z.boolean().default(false).optional(),
  no_expiry: z.boolean().optional(),
  claim_expiry_date: z.number().int().optional(),
});
const GiftSubscriptionForItemsEstimateGifterSchema = z.object({
  customer_id: z.string().max(50),
  signature: z.string().max(50),
  note: z.string().max(500).optional(),
  payment_src_id: z.string().max(40).optional(),
});
const GiftSubscriptionForItemsEstimateGiftReceiverSchema = z.object({
  customer_id: z.string().max(50),
  first_name: z.string().max(150),
  last_name: z.string().max(150),
  email: z.string().email().max(70),
});
const GiftSubscriptionForItemsEstimateAdditionalInformationSchema =
  z.looseObject({});
const GiftSubscriptionForItemsEstimatePaymentIntentSchema = z.object({
  id: z.string().max(150).optional(),
  gateway_account_id: z.string().max(50).optional(),
  gw_token: z.string().max(65000).optional(),
  payment_method_type: z
    .enum([
      'card',
      'ideal',
      'sofort',
      'bancontact',
      'google_pay',
      'dotpay',
      'giropay',
      'apple_pay',
      'upi',
      'netbanking_emandates',
      'paypal_express_checkout',
      'direct_debit',
      'boleto',
      'venmo',
      'amazon_payments',
      'pay_to',
      'faster_payments',
      'sepa_instant_transfer',
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
      'wechat_pay',
      'alipay',
      'pix',
      'twint',
      'go_pay',
      'grab_pay',
      'pay_co',
      'after_pay',
      'swish',
      'payme',
    ])
    .optional(),
  reference_id: z.string().max(65000).optional(),
  gw_payment_method_id: z.string().max(65000).optional(),
  additional_information:
    GiftSubscriptionForItemsEstimateAdditionalInformationSchema.optional(),
});
const GiftSubscriptionForItemsEstimateShippingAddressSchema = z.object({
  first_name: z.string().max(150).optional(),
  last_name: z.string().max(150).optional(),
  email: z.string().email().max(70).optional(),
  company: z.string().max(250).optional(),
  phone: z.string().max(50).optional(),
  line1: z.string().max(150).optional(),
  line2: z.string().max(150).optional(),
  line3: z.string().max(150).optional(),
  city: z.string().max(50).optional(),
  state_code: z.string().max(50).optional(),
  state: z.string().max(50).optional(),
  zip: z.string().max(20).optional(),
  country: z.string().max(50).optional(),
  validation_status: z
    .enum(['not_validated', 'valid', 'partially_valid', 'invalid'])
    .optional(),
});
const GiftSubscriptionForItemsEstimateSubscriptionItemsSchema = z.object({
  item_price_id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
});
const GiftSubscriptionForItemsEstimateItemTiersSchema = z.object({
  item_price_id: z.array(z.string().max(100).optional()).optional(),
  starting_unit: z.array(z.number().int().min(1).optional()).optional(),
  ending_unit: z.array(z.number().int().optional()).optional(),
  price: z.array(z.number().int().min(0).optional()).optional(),
  starting_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  ending_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  price_in_decimal: z.array(z.string().max(39).optional()).optional(),
});
const GiftSubscriptionForItemsEstimateBodySchema = z.looseObject({
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  gift: GiftSubscriptionForItemsEstimateGiftSchema.optional(),
  gifter: GiftSubscriptionForItemsEstimateGifterSchema.optional(),
  gift_receiver: GiftSubscriptionForItemsEstimateGiftReceiverSchema.optional(),
  payment_intent:
    GiftSubscriptionForItemsEstimatePaymentIntentSchema.optional(),
  shipping_address:
    GiftSubscriptionForItemsEstimateShippingAddressSchema.optional(),
  subscription_items:
    GiftSubscriptionForItemsEstimateSubscriptionItemsSchema.optional(),
  item_tiers: GiftSubscriptionForItemsEstimateItemTiersSchema.optional(),
});
export { GiftSubscriptionForItemsEstimateBodySchema };
export type GiftSubscriptionForItemsEstimateBody = z.infer<
  typeof GiftSubscriptionForItemsEstimateBodySchema
>;

//Estimate.createInvoice

const CreateInvoiceEstimateInvoiceSchema = z.object({
  customer_id: z.string().max(50).optional(),
  subscription_id: z.string().max(50).optional(),
  po_number: z.string().max(100).optional(),
});
const CreateInvoiceEstimateShippingAddressSchema = z.object({
  first_name: z.string().max(150).optional(),
  last_name: z.string().max(150).optional(),
  email: z.string().email().max(70).optional(),
  company: z.string().max(250).optional(),
  phone: z.string().max(50).optional(),
  line1: z.string().max(150).optional(),
  line2: z.string().max(150).optional(),
  line3: z.string().max(150).optional(),
  city: z.string().max(50).optional(),
  state_code: z.string().max(50).optional(),
  state: z.string().max(50).optional(),
  zip: z.string().max(20).optional(),
  country: z.string().max(50).optional(),
  validation_status: z
    .enum(['not_validated', 'valid', 'partially_valid', 'invalid'])
    .optional(),
});
const CreateInvoiceEstimateAddonsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  date_from: z.array(z.number().int().optional()).optional(),
  date_to: z.array(z.number().int().optional()).optional(),
});
const CreateInvoiceEstimateChargesSchema = z.object({
  amount: z.array(z.number().int().min(1).optional()).optional(),
  amount_in_decimal: z.array(z.string().max(39).optional()).optional(),
  description: z.array(z.string().max(250).optional()).optional(),
  taxable: z.array(z.boolean().default(true).optional()).optional(),
  tax_profile_id: z.array(z.string().max(50).optional()).optional(),
  avalara_tax_code: z.array(z.string().max(50).optional()).optional(),
  hsn_code: z.array(z.string().max(50).optional()).optional(),
  taxjar_product_code: z.array(z.string().max(50).optional()).optional(),
  avalara_sale_type: z
    .array(z.enum(['wholesale', 'retail', 'consumed', 'vendor_use']).optional())
    .optional(),
  avalara_transaction_type: z.array(z.number().int().optional()).optional(),
  avalara_service_type: z.array(z.number().int().optional()).optional(),
  date_from: z.array(z.number().int().optional()).optional(),
  date_to: z.array(z.number().int().optional()).optional(),
});
const CreateInvoiceEstimateNotesToRemoveSchema = z.object({
  entity_type: z
    .array(
      z
        .enum(['plan', 'addon', 'customer', 'subscription', 'coupon'])
        .optional(),
    )
    .optional(),
  entity_id: z.array(z.string().max(100).optional()).optional(),
});
const CreateInvoiceEstimateTaxProvidersFieldsSchema = z.object({
  provider_name: z.array(z.string().max(50).optional()).optional(),
  field_id: z.array(z.string().max(50).optional()).optional(),
  field_value: z.array(z.string().max(50).optional()).optional(),
});
const CreateInvoiceEstimateBodySchema = z.looseObject({
  currency_code: z.string().max(3).optional(),
  invoice_note: z.string().max(2000).optional(),
  remove_general_note: z.boolean().default(false).optional(),
  coupon: z.string().max(100).optional(),
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  authorization_transaction_id: z.string().max(40).optional(),
  payment_source_id: z.string().max(40).optional(),
  auto_collection: z.enum(['on', 'off']).optional(),
  invoice_date: z.number().int().optional(),
  invoice: CreateInvoiceEstimateInvoiceSchema.optional(),
  shipping_address: CreateInvoiceEstimateShippingAddressSchema.optional(),
  addons: CreateInvoiceEstimateAddonsSchema.optional(),
  charges: CreateInvoiceEstimateChargesSchema.optional(),
  notes_to_remove: CreateInvoiceEstimateNotesToRemoveSchema.optional(),
  tax_providers_fields:
    CreateInvoiceEstimateTaxProvidersFieldsSchema.optional(),
});
export { CreateInvoiceEstimateBodySchema };
export type CreateInvoiceEstimateBody = z.infer<
  typeof CreateInvoiceEstimateBodySchema
>;

//Estimate.createInvoiceForItems

const CreateInvoiceForItemsEstimateInvoiceSchema = z.object({
  customer_id: z.string().max(50).optional(),
  subscription_id: z.string().max(50).optional(),
  po_number: z.string().max(100).optional(),
});
const CreateInvoiceForItemsEstimateShippingAddressSchema = z.object({
  first_name: z.string().max(150).optional(),
  last_name: z.string().max(150).optional(),
  email: z.string().email().max(70).optional(),
  company: z.string().max(250).optional(),
  phone: z.string().max(50).optional(),
  line1: z.string().max(150).optional(),
  line2: z.string().max(150).optional(),
  line3: z.string().max(150).optional(),
  city: z.string().max(50).optional(),
  state_code: z.string().max(50).optional(),
  state: z.string().max(50).optional(),
  zip: z.string().max(20).optional(),
  country: z.string().max(50).optional(),
  validation_status: z
    .enum(['not_validated', 'valid', 'partially_valid', 'invalid'])
    .optional(),
});
const CreateInvoiceForItemsEstimateBillingAddressSchema = z.object({
  line1: z.string().max(150).optional(),
  line2: z.string().max(150).optional(),
  line3: z.string().max(150).optional(),
  city: z.string().max(50).optional(),
  state_code: z.string().max(50).optional(),
  zip: z.string().max(20).optional(),
  country: z.string().max(50).optional(),
  validation_status: z
    .enum(['not_validated', 'valid', 'partially_valid', 'invalid'])
    .optional(),
});
const CreateInvoiceForItemsEstimateItemPricesSchema = z.object({
  item_price_id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  date_from: z.array(z.number().int().optional()).optional(),
  date_to: z.array(z.number().int().optional()).optional(),
});
const CreateInvoiceForItemsEstimateItemTiersSchema = z.object({
  item_price_id: z.array(z.string().max(100).optional()).optional(),
  starting_unit: z.array(z.number().int().min(1).optional()).optional(),
  ending_unit: z.array(z.number().int().optional()).optional(),
  price: z.array(z.number().int().min(0).optional()).optional(),
  starting_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  ending_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  pricing_type: z
    .array(z.enum(['per_unit', 'flat_fee', 'package']).optional())
    .optional(),
  package_size: z.array(z.number().int().min(1).optional()).optional(),
});
const CreateInvoiceForItemsEstimateChargesSchema = z.object({
  amount: z.array(z.number().int().min(1).optional()).optional(),
  amount_in_decimal: z.array(z.string().max(39).optional()).optional(),
  description: z.array(z.string().max(250).optional()).optional(),
  taxable: z.array(z.boolean().default(true).optional()).optional(),
  tax_profile_id: z.array(z.string().max(50).optional()).optional(),
  avalara_tax_code: z.array(z.string().max(50).optional()).optional(),
  hsn_code: z.array(z.string().max(50).optional()).optional(),
  taxjar_product_code: z.array(z.string().max(50).optional()).optional(),
  avalara_sale_type: z
    .array(z.enum(['wholesale', 'retail', 'consumed', 'vendor_use']).optional())
    .optional(),
  avalara_transaction_type: z.array(z.number().int().optional()).optional(),
  avalara_service_type: z.array(z.number().int().optional()).optional(),
  date_from: z.array(z.number().int().optional()).optional(),
  date_to: z.array(z.number().int().optional()).optional(),
});
const CreateInvoiceForItemsEstimateNotesToRemoveSchema = z.object({
  entity_type: z
    .array(
      z
        .enum([
          'customer',
          'subscription',
          'coupon',
          'plan_item_price',
          'addon_item_price',
          'charge_item_price',
        ])
        .optional(),
    )
    .optional(),
  entity_id: z.array(z.string().max(100).optional()).optional(),
});
const CreateInvoiceForItemsEstimateDiscountsSchema = z.object({
  percentage: z.array(z.number().min(0.01).max(100).optional()).optional(),
  amount: z.array(z.number().int().min(0).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  apply_on: z.array(
    z.enum(['invoice_amount', 'specific_item_price']).optional(),
  ),
  item_price_id: z.array(z.string().max(100).optional()).optional(),
});
const CreateInvoiceForItemsEstimateTaxProvidersFieldsSchema = z.object({
  provider_name: z.array(z.string().max(50).optional()).optional(),
  field_id: z.array(z.string().max(50).optional()).optional(),
  field_value: z.array(z.string().max(50).optional()).optional(),
});
const CreateInvoiceForItemsEstimateBodySchema = z.looseObject({
  currency_code: z.string().max(3).optional(),
  invoice_note: z.string().max(2000).optional(),
  remove_general_note: z.boolean().default(false).optional(),
  coupon: z.string().max(100).optional(),
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  authorization_transaction_id: z.string().max(40).optional(),
  payment_source_id: z.string().max(40).optional(),
  auto_collection: z.enum(['on', 'off']).optional(),
  invoice_date: z.number().int().optional(),
  invoice: CreateInvoiceForItemsEstimateInvoiceSchema.optional(),
  shipping_address:
    CreateInvoiceForItemsEstimateShippingAddressSchema.optional(),
  billing_address: CreateInvoiceForItemsEstimateBillingAddressSchema.optional(),
  item_prices: CreateInvoiceForItemsEstimateItemPricesSchema.optional(),
  item_tiers: CreateInvoiceForItemsEstimateItemTiersSchema.optional(),
  charges: CreateInvoiceForItemsEstimateChargesSchema.optional(),
  notes_to_remove: CreateInvoiceForItemsEstimateNotesToRemoveSchema.optional(),
  discounts: CreateInvoiceForItemsEstimateDiscountsSchema.optional(),
  tax_providers_fields:
    CreateInvoiceForItemsEstimateTaxProvidersFieldsSchema.optional(),
});
export { CreateInvoiceForItemsEstimateBodySchema };
export type CreateInvoiceForItemsEstimateBody = z.infer<
  typeof CreateInvoiceForItemsEstimateBodySchema
>;

//Estimate.paymentSchedules

const PaymentSchedulesEstimateBodySchema = z.looseObject({
  scheme_id: z.string(),
  amount: z.number().int().min(0).optional(),
  invoice_id: z.string().optional(),
  payment_schedule_start_date: z.number().int().optional(),
});
export { PaymentSchedulesEstimateBodySchema };
export type PaymentSchedulesEstimateBody = z.infer<
  typeof PaymentSchedulesEstimateBodySchema
>;
