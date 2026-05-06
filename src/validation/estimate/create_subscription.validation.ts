// Generated Zod validator: Estimate.createSubscription
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const createSubscriptionEstimateSubscriptionSchema = z.object({
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
const createSubscriptionEstimateBillingAddressSchema = z.object({
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
const createSubscriptionEstimateShippingAddressSchema = z.object({
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
const createSubscriptionEstimateCustomerSchema = z.object({
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
const createSubscriptionEstimateContractTermSchema = z.object({
  action_at_term_end: z.enum(['renew', 'evergreen', 'cancel']).optional(),
  cancellation_cutoff_period: z.number().int().optional(),
});
const createSubscriptionEstimateAddonsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  billing_cycles: z.array(z.number().int().min(0).optional()).optional(),
  trial_end: z.array(z.number().int().optional()).optional(),
});
const createSubscriptionEstimateEventBasedAddonsSchema = z.object({
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
const createSubscriptionEstimateTaxProvidersFieldsSchema = z.object({
  provider_name: z.array(z.string().max(50).optional()).optional(),
  field_id: z.array(z.string().max(50).optional()).optional(),
  field_value: z.array(z.string().max(50).optional()).optional(),
});
const createSubscriptionEstimateBodySchema = z.looseObject({
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
  subscription: createSubscriptionEstimateSubscriptionSchema.optional(),
  billing_address: createSubscriptionEstimateBillingAddressSchema.optional(),
  shipping_address: createSubscriptionEstimateShippingAddressSchema.optional(),
  customer: createSubscriptionEstimateCustomerSchema.optional(),
  contract_term: createSubscriptionEstimateContractTermSchema.optional(),
  addons: createSubscriptionEstimateAddonsSchema.optional(),
  event_based_addons:
    createSubscriptionEstimateEventBasedAddonsSchema.optional(),
  tax_providers_fields:
    createSubscriptionEstimateTaxProvidersFieldsSchema.optional(),
});
export { createSubscriptionEstimateBodySchema };
