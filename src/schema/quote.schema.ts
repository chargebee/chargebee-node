// Generated Zod schemas: Quote
// Actions: createSubForCustomerQuote, editCreateSubForCustomerQuote, updateSubscriptionQuote, editUpdateSubscriptionQuote, createForOnetimeCharges, editOneTimeQuote, createSubItemsForCustomerQuote, editCreateSubCustomerQuoteForItems, updateSubscriptionQuoteForItems, editUpdateSubscriptionQuoteForItems, createForChargeItemsAndCharges, editForChargeItemsAndCharges, list, quoteLineGroupsForQuote, convert, updateStatus, extendExpiryDate, delete, pdf, updateSignatureStatus
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//Quote.createSubForCustomerQuote

const CreateSubForCustomerQuoteQuoteSubscriptionSchema = z.object({
  id: z.string().max(50).optional(),
  po_number: z.string().max(100).optional(),
  plan_id: z.string().max(100).optional(),
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
  contract_term_billing_cycle_on_renewal: z
    .number()
    .int()
    .min(1)
    .max(100)
    .optional(),
});
const CreateSubForCustomerQuoteQuoteShippingAddressSchema = z.object({
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
const CreateSubForCustomerQuoteQuoteContractTermSchema = z.object({
  action_at_term_end: z.enum(['renew', 'evergreen', 'cancel']).optional(),
  cancellation_cutoff_period: z.number().int().optional(),
});
const CreateSubForCustomerQuoteQuoteAddonsItemSchema = z.object({
  id: z.string().max(100).optional(),
  quantity: z.number().int().min(1).optional(),
  quantity_in_decimal: z.string().max(33).optional(),
  unit_price: z.number().int().min(0).optional(),
  unit_price_in_decimal: z.string().max(39).optional(),
  billing_cycles: z.number().int().min(0).optional(),
  trial_end: z.number().int().optional(),
});
const CreateSubForCustomerQuoteQuoteAddonsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  billing_cycles: z.array(z.number().int().min(0).optional()).optional(),
  trial_end: z.array(z.number().int().optional()).optional(),
});
const CreateSubForCustomerQuoteQuoteEventBasedAddonsItemSchema = z.object({
  id: z.string().max(100).optional(),
  quantity: z.number().int().min(1).optional(),
  unit_price: z.number().int().min(0).optional(),
  quantity_in_decimal: z.string().max(33).optional(),
  unit_price_in_decimal: z.string().max(39).optional(),
  service_period_in_days: z.number().int().min(1).max(4000).optional(),
  on_event: z
    .enum([
      'subscription_creation',
      'subscription_trial_start',
      'plan_activation',
      'subscription_activation',
      'contract_termination',
    ])
    .optional(),
  charge_once: z.boolean().default(true).optional(),
  charge_on: z.enum(['immediately', 'on_event']).optional(),
});
const CreateSubForCustomerQuoteQuoteEventBasedAddonsSchema = z.object({
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
const CreateSubForCustomerQuoteQuoteBodySchema = z.looseObject({
  name: z.string().max(100).optional(),
  notes: z.string().max(10000).optional(),
  expires_at: z.number().int().optional(),
  billing_cycles: z.number().int().min(0).optional(),
  mandatory_addons_to_remove: z
    .array(z.string().max(100).optional())
    .optional(),
  terms_to_charge: z.number().int().min(1).optional(),
  billing_alignment_mode: z.enum(['immediate', 'delayed']).optional(),
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  subscription: CreateSubForCustomerQuoteQuoteSubscriptionSchema.optional(),
  shipping_address:
    CreateSubForCustomerQuoteQuoteShippingAddressSchema.optional(),
  contract_term: CreateSubForCustomerQuoteQuoteContractTermSchema.optional(),
  addons: z
    .union([
      z.array(CreateSubForCustomerQuoteQuoteAddonsItemSchema.optional()),
      CreateSubForCustomerQuoteQuoteAddonsSchema,
    ])
    .optional(),
  event_based_addons: z
    .union([
      z.array(
        CreateSubForCustomerQuoteQuoteEventBasedAddonsItemSchema.optional(),
      ),
      CreateSubForCustomerQuoteQuoteEventBasedAddonsSchema,
    ])
    .optional(),
});
export { CreateSubForCustomerQuoteQuoteBodySchema };
export type CreateSubForCustomerQuoteQuoteBody = z.infer<
  typeof CreateSubForCustomerQuoteQuoteBodySchema
>;

//Quote.editCreateSubForCustomerQuote

const EditCreateSubForCustomerQuoteQuoteSubscriptionSchema = z.object({
  id: z.string().max(50).optional(),
  po_number: z.string().max(100).optional(),
  plan_id: z.string().max(100).optional(),
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
  contract_term_billing_cycle_on_renewal: z
    .number()
    .int()
    .min(1)
    .max(100)
    .optional(),
});
const EditCreateSubForCustomerQuoteQuoteShippingAddressSchema = z.object({
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
const EditCreateSubForCustomerQuoteQuoteContractTermSchema = z.object({
  action_at_term_end: z.enum(['renew', 'evergreen', 'cancel']).optional(),
  cancellation_cutoff_period: z.number().int().optional(),
});
const EditCreateSubForCustomerQuoteQuoteAddonsItemSchema = z.object({
  id: z.string().max(100).optional(),
  quantity: z.number().int().min(1).optional(),
  quantity_in_decimal: z.string().max(33).optional(),
  unit_price: z.number().int().min(0).optional(),
  unit_price_in_decimal: z.string().max(39).optional(),
  billing_cycles: z.number().int().min(0).optional(),
  trial_end: z.number().int().optional(),
});
const EditCreateSubForCustomerQuoteQuoteAddonsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  billing_cycles: z.array(z.number().int().min(0).optional()).optional(),
  trial_end: z.array(z.number().int().optional()).optional(),
});
const EditCreateSubForCustomerQuoteQuoteEventBasedAddonsItemSchema = z.object({
  id: z.string().max(100).optional(),
  quantity: z.number().int().min(1).optional(),
  unit_price: z.number().int().min(0).optional(),
  quantity_in_decimal: z.string().max(33).optional(),
  unit_price_in_decimal: z.string().max(39).optional(),
  service_period_in_days: z.number().int().min(1).max(4000).optional(),
  on_event: z
    .enum([
      'subscription_creation',
      'subscription_trial_start',
      'plan_activation',
      'subscription_activation',
      'contract_termination',
    ])
    .optional(),
  charge_once: z.boolean().default(true).optional(),
  charge_on: z.enum(['immediately', 'on_event']).optional(),
});
const EditCreateSubForCustomerQuoteQuoteEventBasedAddonsSchema = z.object({
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
const EditCreateSubForCustomerQuoteQuoteBodySchema = z.looseObject({
  notes: z.string().max(10000).optional(),
  expires_at: z.number().int().optional(),
  billing_cycles: z.number().int().min(0).optional(),
  mandatory_addons_to_remove: z
    .array(z.string().max(100).optional())
    .optional(),
  terms_to_charge: z.number().int().min(1).optional(),
  billing_alignment_mode: z.enum(['immediate', 'delayed']).optional(),
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  subscription: EditCreateSubForCustomerQuoteQuoteSubscriptionSchema.optional(),
  shipping_address:
    EditCreateSubForCustomerQuoteQuoteShippingAddressSchema.optional(),
  contract_term:
    EditCreateSubForCustomerQuoteQuoteContractTermSchema.optional(),
  addons: z
    .union([
      z.array(EditCreateSubForCustomerQuoteQuoteAddonsItemSchema.optional()),
      EditCreateSubForCustomerQuoteQuoteAddonsSchema,
    ])
    .optional(),
  event_based_addons: z
    .union([
      z.array(
        EditCreateSubForCustomerQuoteQuoteEventBasedAddonsItemSchema.optional(),
      ),
      EditCreateSubForCustomerQuoteQuoteEventBasedAddonsSchema,
    ])
    .optional(),
});
export { EditCreateSubForCustomerQuoteQuoteBodySchema };
export type EditCreateSubForCustomerQuoteQuoteBody = z.infer<
  typeof EditCreateSubForCustomerQuoteQuoteBodySchema
>;

//Quote.updateSubscriptionQuote

const UpdateSubscriptionQuoteQuoteSubscriptionSchema = z.object({
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
  contract_term_billing_cycle_on_renewal: z
    .number()
    .int()
    .min(1)
    .max(100)
    .optional(),
});
const UpdateSubscriptionQuoteQuoteBillingAddressSchema = z.object({
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
const UpdateSubscriptionQuoteQuoteShippingAddressSchema = z.object({
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
const UpdateSubscriptionQuoteQuoteCustomerSchema = z.object({
  vat_number: z.string().max(20).optional(),
  vat_number_prefix: z.string().max(10).optional(),
  registered_for_gst: z.boolean().optional(),
});
const UpdateSubscriptionQuoteQuoteContractTermSchema = z.object({
  action_at_term_end: z
    .enum(['renew', 'evergreen', 'cancel', 'renew_once'])
    .optional(),
  cancellation_cutoff_period: z.number().int().optional(),
});
const UpdateSubscriptionQuoteQuoteAddonsItemSchema = z.object({
  id: z.string().max(100).optional(),
  quantity: z.number().int().min(1).optional(),
  unit_price: z.number().int().min(0).optional(),
  billing_cycles: z.number().int().min(0).optional(),
  quantity_in_decimal: z.string().max(33).optional(),
  unit_price_in_decimal: z.string().max(39).optional(),
  trial_end: z.number().int().optional(),
});
const UpdateSubscriptionQuoteQuoteAddonsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  billing_cycles: z.array(z.number().int().min(0).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  trial_end: z.array(z.number().int().optional()).optional(),
});
const UpdateSubscriptionQuoteQuoteEventBasedAddonsItemSchema = z.object({
  id: z.string().max(100).optional(),
  quantity: z.number().int().min(1).optional(),
  unit_price: z.number().int().min(0).optional(),
  service_period_in_days: z.number().int().min(1).max(4000).optional(),
  charge_on: z.enum(['immediately', 'on_event']).optional(),
  on_event: z
    .enum([
      'subscription_creation',
      'subscription_trial_start',
      'plan_activation',
      'subscription_activation',
      'contract_termination',
    ])
    .optional(),
  charge_once: z.boolean().default(true).optional(),
  quantity_in_decimal: z.string().max(33).optional(),
  unit_price_in_decimal: z.string().max(39).optional(),
});
const UpdateSubscriptionQuoteQuoteEventBasedAddonsSchema = z.object({
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
const UpdateSubscriptionQuoteQuoteBodySchema = z.looseObject({
  name: z.string().max(100).optional(),
  notes: z.string().max(10000).optional(),
  expires_at: z.number().int().optional(),
  replace_addon_list: z.boolean().default(false).optional(),
  mandatory_addons_to_remove: z
    .array(z.string().max(100).optional())
    .optional(),
  billing_cycles: z.number().int().min(0).optional(),
  terms_to_charge: z.number().int().min(1).optional(),
  reactivate_from: z.number().int().optional(),
  billing_alignment_mode: z.enum(['immediate', 'delayed']).optional(),
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  replace_coupon_list: z.boolean().default(false).optional(),
  change_option: z.enum(['immediately', 'specific_date']).optional(),
  changes_scheduled_at: z.number().int().optional(),
  force_term_reset: z.boolean().default(false).optional(),
  reactivate: z.boolean().optional(),
  subscription: UpdateSubscriptionQuoteQuoteSubscriptionSchema.optional(),
  billing_address: UpdateSubscriptionQuoteQuoteBillingAddressSchema.optional(),
  shipping_address:
    UpdateSubscriptionQuoteQuoteShippingAddressSchema.optional(),
  customer: UpdateSubscriptionQuoteQuoteCustomerSchema.optional(),
  contract_term: UpdateSubscriptionQuoteQuoteContractTermSchema.optional(),
  addons: z
    .union([
      z.array(UpdateSubscriptionQuoteQuoteAddonsItemSchema.optional()),
      UpdateSubscriptionQuoteQuoteAddonsSchema,
    ])
    .optional(),
  event_based_addons: z
    .union([
      z.array(
        UpdateSubscriptionQuoteQuoteEventBasedAddonsItemSchema.optional(),
      ),
      UpdateSubscriptionQuoteQuoteEventBasedAddonsSchema,
    ])
    .optional(),
});
export { UpdateSubscriptionQuoteQuoteBodySchema };
export type UpdateSubscriptionQuoteQuoteBody = z.infer<
  typeof UpdateSubscriptionQuoteQuoteBodySchema
>;

//Quote.editUpdateSubscriptionQuote

const EditUpdateSubscriptionQuoteQuoteSubscriptionSchema = z.object({
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
  contract_term_billing_cycle_on_renewal: z
    .number()
    .int()
    .min(1)
    .max(100)
    .optional(),
});
const EditUpdateSubscriptionQuoteQuoteBillingAddressSchema = z.object({
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
const EditUpdateSubscriptionQuoteQuoteShippingAddressSchema = z.object({
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
const EditUpdateSubscriptionQuoteQuoteCustomerSchema = z.object({
  vat_number: z.string().max(20).optional(),
  vat_number_prefix: z.string().max(10).optional(),
  registered_for_gst: z.boolean().optional(),
});
const EditUpdateSubscriptionQuoteQuoteContractTermSchema = z.object({
  action_at_term_end: z
    .enum(['renew', 'evergreen', 'cancel', 'renew_once'])
    .optional(),
  cancellation_cutoff_period: z.number().int().optional(),
});
const EditUpdateSubscriptionQuoteQuoteAddonsItemSchema = z.object({
  id: z.string().max(100).optional(),
  quantity: z.number().int().min(1).optional(),
  unit_price: z.number().int().min(0).optional(),
  billing_cycles: z.number().int().min(0).optional(),
  quantity_in_decimal: z.string().max(33).optional(),
  unit_price_in_decimal: z.string().max(39).optional(),
  trial_end: z.number().int().optional(),
});
const EditUpdateSubscriptionQuoteQuoteAddonsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  billing_cycles: z.array(z.number().int().min(0).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  trial_end: z.array(z.number().int().optional()).optional(),
});
const EditUpdateSubscriptionQuoteQuoteEventBasedAddonsItemSchema = z.object({
  id: z.string().max(100).optional(),
  quantity: z.number().int().min(1).optional(),
  unit_price: z.number().int().min(0).optional(),
  service_period_in_days: z.number().int().min(1).max(4000).optional(),
  charge_on: z.enum(['immediately', 'on_event']).optional(),
  on_event: z
    .enum([
      'subscription_creation',
      'subscription_trial_start',
      'plan_activation',
      'subscription_activation',
      'contract_termination',
    ])
    .optional(),
  charge_once: z.boolean().default(true).optional(),
  quantity_in_decimal: z.string().max(33).optional(),
  unit_price_in_decimal: z.string().max(39).optional(),
});
const EditUpdateSubscriptionQuoteQuoteEventBasedAddonsSchema = z.object({
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
const EditUpdateSubscriptionQuoteQuoteBodySchema = z.looseObject({
  notes: z.string().max(10000).optional(),
  expires_at: z.number().int().optional(),
  replace_addon_list: z.boolean().default(false).optional(),
  mandatory_addons_to_remove: z
    .array(z.string().max(100).optional())
    .optional(),
  billing_cycles: z.number().int().min(0).optional(),
  terms_to_charge: z.number().int().min(1).optional(),
  reactivate_from: z.number().int().optional(),
  billing_alignment_mode: z.enum(['immediate', 'delayed']).optional(),
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  replace_coupon_list: z.boolean().default(false).optional(),
  change_option: z.enum(['immediately', 'specific_date']).optional(),
  changes_scheduled_at: z.number().int().optional(),
  force_term_reset: z.boolean().default(false).optional(),
  reactivate: z.boolean().optional(),
  subscription: EditUpdateSubscriptionQuoteQuoteSubscriptionSchema.optional(),
  billing_address:
    EditUpdateSubscriptionQuoteQuoteBillingAddressSchema.optional(),
  shipping_address:
    EditUpdateSubscriptionQuoteQuoteShippingAddressSchema.optional(),
  customer: EditUpdateSubscriptionQuoteQuoteCustomerSchema.optional(),
  contract_term: EditUpdateSubscriptionQuoteQuoteContractTermSchema.optional(),
  addons: z
    .union([
      z.array(EditUpdateSubscriptionQuoteQuoteAddonsItemSchema.optional()),
      EditUpdateSubscriptionQuoteQuoteAddonsSchema,
    ])
    .optional(),
  event_based_addons: z
    .union([
      z.array(
        EditUpdateSubscriptionQuoteQuoteEventBasedAddonsItemSchema.optional(),
      ),
      EditUpdateSubscriptionQuoteQuoteEventBasedAddonsSchema,
    ])
    .optional(),
});
export { EditUpdateSubscriptionQuoteQuoteBodySchema };
export type EditUpdateSubscriptionQuoteQuoteBody = z.infer<
  typeof EditUpdateSubscriptionQuoteQuoteBodySchema
>;

//Quote.createForOnetimeCharges

const CreateForOnetimeChargesQuoteShippingAddressSchema = z.object({
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
const CreateForOnetimeChargesQuoteAddonsItemSchema = z.object({
  id: z.string().max(100).optional(),
  quantity: z.number().int().min(1).optional(),
  quantity_in_decimal: z.string().max(33).optional(),
  unit_price: z.number().int().min(0).optional(),
  unit_price_in_decimal: z.string().max(39).optional(),
  service_period: z.number().int().optional(),
});
const CreateForOnetimeChargesQuoteAddonsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  service_period: z.array(z.number().int().optional()).optional(),
});
const CreateForOnetimeChargesQuoteChargesItemSchema = z.object({
  amount: z.number().int().min(1).optional(),
  amount_in_decimal: z.string().max(39).optional(),
  description: z.string().max(250).optional(),
  avalara_sale_type: z
    .enum(['wholesale', 'retail', 'consumed', 'vendor_use'])
    .optional(),
  avalara_transaction_type: z.number().int().optional(),
  avalara_service_type: z.number().int().optional(),
  service_period: z.number().int().optional(),
});
const CreateForOnetimeChargesQuoteChargesSchema = z.object({
  amount: z.array(z.number().int().min(1).optional()).optional(),
  amount_in_decimal: z.array(z.string().max(39).optional()).optional(),
  description: z.array(z.string().max(250).optional()).optional(),
  avalara_sale_type: z
    .array(z.enum(['wholesale', 'retail', 'consumed', 'vendor_use']).optional())
    .optional(),
  avalara_transaction_type: z.array(z.number().int().optional()).optional(),
  avalara_service_type: z.array(z.number().int().optional()).optional(),
  service_period: z.array(z.number().int().optional()).optional(),
});
const CreateForOnetimeChargesQuoteTaxProvidersFieldsItemSchema = z.object({
  provider_name: z.string().max(50).optional(),
  field_id: z.string().max(50).optional(),
  field_value: z.string().max(50).optional(),
});
const CreateForOnetimeChargesQuoteTaxProvidersFieldsSchema = z.object({
  provider_name: z.array(z.string().max(50).optional()).optional(),
  field_id: z.array(z.string().max(50).optional()).optional(),
  field_value: z.array(z.string().max(50).optional()).optional(),
});
const CreateForOnetimeChargesQuoteBodySchema = z.looseObject({
  name: z.string().max(100).optional(),
  customer_id: z.string().max(50),
  po_number: z.string().max(100).optional(),
  notes: z.string().max(10000).optional(),
  expires_at: z.number().int().optional(),
  currency_code: z.string().max(3).optional(),
  coupon: z.string().max(100).optional(),
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  shipping_address:
    CreateForOnetimeChargesQuoteShippingAddressSchema.optional(),
  addons: z
    .union([
      z.array(CreateForOnetimeChargesQuoteAddonsItemSchema.optional()),
      CreateForOnetimeChargesQuoteAddonsSchema,
    ])
    .optional(),
  charges: z
    .union([
      z.array(CreateForOnetimeChargesQuoteChargesItemSchema.optional()),
      CreateForOnetimeChargesQuoteChargesSchema,
    ])
    .optional(),
  tax_providers_fields: z
    .union([
      z.array(
        CreateForOnetimeChargesQuoteTaxProvidersFieldsItemSchema.optional(),
      ),
      CreateForOnetimeChargesQuoteTaxProvidersFieldsSchema,
    ])
    .optional(),
});
export { CreateForOnetimeChargesQuoteBodySchema };
export type CreateForOnetimeChargesQuoteBody = z.infer<
  typeof CreateForOnetimeChargesQuoteBodySchema
>;

//Quote.editOneTimeQuote

const EditOneTimeQuoteQuoteShippingAddressSchema = z.object({
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
const EditOneTimeQuoteQuoteAddonsItemSchema = z.object({
  id: z.string().max(100).optional(),
  quantity: z.number().int().min(1).optional(),
  quantity_in_decimal: z.string().max(33).optional(),
  unit_price: z.number().int().min(0).optional(),
  unit_price_in_decimal: z.string().max(39).optional(),
  service_period: z.number().int().optional(),
});
const EditOneTimeQuoteQuoteAddonsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  service_period: z.array(z.number().int().optional()).optional(),
});
const EditOneTimeQuoteQuoteChargesItemSchema = z.object({
  amount: z.number().int().min(1).optional(),
  amount_in_decimal: z.string().max(39).optional(),
  description: z.string().max(250).optional(),
  avalara_sale_type: z
    .enum(['wholesale', 'retail', 'consumed', 'vendor_use'])
    .optional(),
  avalara_transaction_type: z.number().int().optional(),
  avalara_service_type: z.number().int().optional(),
  service_period: z.number().int().optional(),
});
const EditOneTimeQuoteQuoteChargesSchema = z.object({
  amount: z.array(z.number().int().min(1).optional()).optional(),
  amount_in_decimal: z.array(z.string().max(39).optional()).optional(),
  description: z.array(z.string().max(250).optional()).optional(),
  avalara_sale_type: z
    .array(z.enum(['wholesale', 'retail', 'consumed', 'vendor_use']).optional())
    .optional(),
  avalara_transaction_type: z.array(z.number().int().optional()).optional(),
  avalara_service_type: z.array(z.number().int().optional()).optional(),
  service_period: z.array(z.number().int().optional()).optional(),
});
const EditOneTimeQuoteQuoteTaxProvidersFieldsItemSchema = z.object({
  provider_name: z.string().max(50).optional(),
  field_id: z.string().max(50).optional(),
  field_value: z.string().max(50).optional(),
});
const EditOneTimeQuoteQuoteTaxProvidersFieldsSchema = z.object({
  provider_name: z.array(z.string().max(50).optional()).optional(),
  field_id: z.array(z.string().max(50).optional()).optional(),
  field_value: z.array(z.string().max(50).optional()).optional(),
});
const EditOneTimeQuoteQuoteBodySchema = z.looseObject({
  po_number: z.string().max(100).optional(),
  notes: z.string().max(10000).optional(),
  expires_at: z.number().int().optional(),
  currency_code: z.string().max(3).optional(),
  coupon: z.string().max(100).optional(),
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  shipping_address: EditOneTimeQuoteQuoteShippingAddressSchema.optional(),
  addons: z
    .union([
      z.array(EditOneTimeQuoteQuoteAddonsItemSchema.optional()),
      EditOneTimeQuoteQuoteAddonsSchema,
    ])
    .optional(),
  charges: z
    .union([
      z.array(EditOneTimeQuoteQuoteChargesItemSchema.optional()),
      EditOneTimeQuoteQuoteChargesSchema,
    ])
    .optional(),
  tax_providers_fields: z
    .union([
      z.array(EditOneTimeQuoteQuoteTaxProvidersFieldsItemSchema.optional()),
      EditOneTimeQuoteQuoteTaxProvidersFieldsSchema,
    ])
    .optional(),
});
export { EditOneTimeQuoteQuoteBodySchema };
export type EditOneTimeQuoteQuoteBody = z.infer<
  typeof EditOneTimeQuoteQuoteBodySchema
>;

//Quote.createSubItemsForCustomerQuote

const CreateSubItemsForCustomerQuoteQuoteSubscriptionSchema = z.looseObject({
  id: z.string().max(50).optional(),
  po_number: z.string().max(100).optional(),
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
  contract_term_billing_cycle_on_renewal: z
    .number()
    .int()
    .min(1)
    .max(100)
    .optional(),
  free_period: z.number().int().min(1).optional(),
  free_period_unit: z.enum(['day', 'week', 'month', 'year']).optional(),
});
const CreateSubItemsForCustomerQuoteQuoteShippingAddressSchema = z.object({
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
const CreateSubItemsForCustomerQuoteQuoteContractTermSchema = z.object({
  action_at_term_end: z.enum(['renew', 'evergreen', 'cancel']).optional(),
  cancellation_cutoff_period: z.number().int().optional(),
});
const CreateSubItemsForCustomerQuoteQuoteBillingAddressSchema = z.object({
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
const CreateSubItemsForCustomerQuoteQuoteSubscriptionItemsItemSchema = z.object(
  {
    item_price_id: z.string().max(100),
    quantity: z.number().int().min(1).optional(),
    quantity_in_decimal: z.string().max(33).optional(),
    unit_price: z.number().int().min(0).optional(),
    unit_price_in_decimal: z.string().max(39).optional(),
    billing_cycles: z.number().int().min(0).optional(),
    trial_end: z.number().int().optional(),
    service_period_days: z.number().int().min(1).max(4000).optional(),
    charge_on_event: z
      .enum([
        'subscription_creation',
        'subscription_trial_start',
        'plan_activation',
        'subscription_activation',
        'contract_termination',
      ])
      .optional(),
    charge_once: z.boolean().optional(),
    item_type: z.enum(['plan', 'addon', 'charge']).optional(),
    charge_on_option: z.enum(['immediately', 'on_event']).optional(),
    start_date: z.number().int().optional(),
    end_date: z.number().int().optional(),
    description: z.string().max(2000).optional(),
    ramp_tier_id: z.string().max(105).optional(),
  },
);
const CreateSubItemsForCustomerQuoteQuoteSubscriptionItemsSchema = z.object({
  item_price_id: z.array(z.string().max(100).optional()),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  billing_cycles: z.array(z.number().int().min(0).optional()).optional(),
  trial_end: z.array(z.number().int().optional()).optional(),
  service_period_days: z
    .array(z.number().int().min(1).max(4000).optional())
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
  start_date: z.array(z.number().int().optional()).optional(),
  end_date: z.array(z.number().int().optional()).optional(),
  description: z.array(z.string().max(2000).optional()).optional(),
  ramp_tier_id: z.array(z.string().max(105).optional()).optional(),
});
const CreateSubItemsForCustomerQuoteQuoteDiscountsItemSchema = z.object({
  apply_on: z.enum(['invoice_amount', 'specific_item_price']).optional(),
  duration_type: z.enum(['one_time', 'forever', 'limited_period']),
  percentage: z.number().min(0.01).max(100).optional(),
  amount: z.number().int().min(0).optional(),
  period: z.number().int().min(1).optional(),
  period_unit: z.enum(['day', 'week', 'month', 'year']).optional(),
  included_in_mrr: z.boolean().optional(),
  item_price_id: z.string().max(100).optional(),
  quantity: z.number().int().min(1).optional(),
  start_date: z.number().int().optional(),
  end_date: z.number().int().optional(),
});
const CreateSubItemsForCustomerQuoteQuoteDiscountsSchema = z.object({
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
  start_date: z.array(z.number().int().optional()).optional(),
  end_date: z.array(z.number().int().optional()).optional(),
});
const CreateSubItemsForCustomerQuoteQuoteItemTiersItemSchema = z.object({
  item_price_id: z.string().max(100).optional(),
  starting_unit: z.number().int().min(1).optional(),
  ending_unit: z.number().int().optional(),
  price: z.number().int().min(0).optional(),
  starting_unit_in_decimal: z.string().max(33).optional(),
  ending_unit_in_decimal: z.string().max(33).optional(),
  price_in_decimal: z.string().max(39).optional(),
  pricing_type: z.enum(['per_unit', 'flat_fee', 'package']).optional(),
  package_size: z.number().int().min(1).optional(),
  ramp_tier_id: z.string().max(105).optional(),
});
const CreateSubItemsForCustomerQuoteQuoteItemTiersSchema = z.object({
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
  ramp_tier_id: z.array(z.string().max(105).optional()).optional(),
});
const CreateSubItemsForCustomerQuoteQuoteCouponsItemSchema = z.object({
  id: z.string().max(100).optional(),
  start_date: z.number().int().optional(),
  end_date: z.number().int().optional(),
});
const CreateSubItemsForCustomerQuoteQuoteCouponsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
  start_date: z.array(z.number().int().optional()).optional(),
  end_date: z.array(z.number().int().optional()).optional(),
});
const CreateSubItemsForCustomerQuoteQuoteEntitlementOverridesItemSchema =
  z.object({
    feature_id: z.string().max(50).optional(),
    entity_id: z.string().max(100).optional(),
    entity_type: z
      .enum(['plan_price', 'addon_price', 'charge_price', 'charge'])
      .optional(),
    value: z.string().max(50).optional(),
    is_enabled: z.boolean().optional(),
    start_date: z.number().int().optional(),
    end_date: z.number().int().optional(),
  });
const CreateSubItemsForCustomerQuoteQuoteEntitlementOverridesSchema = z.object({
  feature_id: z.array(z.string().max(50).optional()).optional(),
  entity_id: z.array(z.string().max(100).optional()).optional(),
  entity_type: z
    .array(
      z
        .enum(['plan_price', 'addon_price', 'charge_price', 'charge'])
        .optional(),
    )
    .optional(),
  value: z.array(z.string().max(50).optional()).optional(),
  is_enabled: z.array(z.boolean().optional()).optional(),
  start_date: z.array(z.number().int().optional()).optional(),
  end_date: z.array(z.number().int().optional()).optional(),
});
const CreateSubItemsForCustomerQuoteQuoteBodySchema = z.looseObject({
  name: z.string().max(100).optional(),
  notes: z.string().max(10000).optional(),
  expires_at: z.number().int().optional(),
  billing_cycles: z.number().int().min(0).optional(),
  mandatory_items_to_remove: z.array(z.string().max(100).optional()).optional(),
  terms_to_charge: z.number().int().min(1).optional(),
  billing_alignment_mode: z.enum(['immediate', 'delayed']).optional(),
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  billing_start_option: z.enum(['immediately', 'on_specific_date']).optional(),
  net_term_days: z.number().int().optional(),
  subscription:
    CreateSubItemsForCustomerQuoteQuoteSubscriptionSchema.optional(),
  shipping_address:
    CreateSubItemsForCustomerQuoteQuoteShippingAddressSchema.optional(),
  contract_term:
    CreateSubItemsForCustomerQuoteQuoteContractTermSchema.optional(),
  billing_address:
    CreateSubItemsForCustomerQuoteQuoteBillingAddressSchema.optional(),
  subscription_items: z
    .union([
      z.array(
        CreateSubItemsForCustomerQuoteQuoteSubscriptionItemsItemSchema.optional(),
      ),
      CreateSubItemsForCustomerQuoteQuoteSubscriptionItemsSchema,
    ])
    .optional(),
  discounts: z
    .union([
      z.array(
        CreateSubItemsForCustomerQuoteQuoteDiscountsItemSchema.optional(),
      ),
      CreateSubItemsForCustomerQuoteQuoteDiscountsSchema,
    ])
    .optional(),
  item_tiers: z
    .union([
      z.array(
        CreateSubItemsForCustomerQuoteQuoteItemTiersItemSchema.optional(),
      ),
      CreateSubItemsForCustomerQuoteQuoteItemTiersSchema,
    ])
    .optional(),
  coupons: z
    .union([
      z.array(CreateSubItemsForCustomerQuoteQuoteCouponsItemSchema.optional()),
      CreateSubItemsForCustomerQuoteQuoteCouponsSchema,
    ])
    .optional(),
  entitlement_overrides: z
    .union([
      z.array(
        CreateSubItemsForCustomerQuoteQuoteEntitlementOverridesItemSchema.optional(),
      ),
      CreateSubItemsForCustomerQuoteQuoteEntitlementOverridesSchema,
    ])
    .optional(),
});
export { CreateSubItemsForCustomerQuoteQuoteBodySchema };
export type CreateSubItemsForCustomerQuoteQuoteBody = z.infer<
  typeof CreateSubItemsForCustomerQuoteQuoteBodySchema
>;

//Quote.editCreateSubCustomerQuoteForItems

const EditCreateSubCustomerQuoteForItemsQuoteSubscriptionSchema = z.looseObject(
  {
    id: z.string().max(50).optional(),
    po_number: z.string().max(100).optional(),
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
    contract_term_billing_cycle_on_renewal: z
      .number()
      .int()
      .min(1)
      .max(100)
      .optional(),
    free_period: z.number().int().min(1).optional(),
    free_period_unit: z.enum(['day', 'week', 'month', 'year']).optional(),
  },
);
const EditCreateSubCustomerQuoteForItemsQuoteShippingAddressSchema = z.object({
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
const EditCreateSubCustomerQuoteForItemsQuoteContractTermSchema = z.object({
  action_at_term_end: z.enum(['renew', 'evergreen', 'cancel']).optional(),
  cancellation_cutoff_period: z.number().int().optional(),
});
const EditCreateSubCustomerQuoteForItemsQuoteBillingAddressSchema = z.object({
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
const EditCreateSubCustomerQuoteForItemsQuoteSubscriptionItemsItemSchema =
  z.object({
    item_price_id: z.string().max(100),
    quantity: z.number().int().min(1).optional(),
    quantity_in_decimal: z.string().max(33).optional(),
    unit_price: z.number().int().min(0).optional(),
    unit_price_in_decimal: z.string().max(39).optional(),
    billing_cycles: z.number().int().min(0).optional(),
    trial_end: z.number().int().optional(),
    service_period_days: z.number().int().min(1).max(4000).optional(),
    charge_on_event: z
      .enum([
        'subscription_creation',
        'subscription_trial_start',
        'plan_activation',
        'subscription_activation',
        'contract_termination',
      ])
      .optional(),
    charge_once: z.boolean().optional(),
    item_type: z.enum(['plan', 'addon', 'charge']).optional(),
    charge_on_option: z.enum(['immediately', 'on_event']).optional(),
    start_date: z.number().int().optional(),
    end_date: z.number().int().optional(),
    description: z.string().max(2000).optional(),
    ramp_tier_id: z.string().max(105).optional(),
  });
const EditCreateSubCustomerQuoteForItemsQuoteSubscriptionItemsSchema = z.object(
  {
    item_price_id: z.array(z.string().max(100).optional()),
    quantity: z.array(z.number().int().min(1).optional()).optional(),
    quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
    unit_price: z.array(z.number().int().min(0).optional()).optional(),
    unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
    billing_cycles: z.array(z.number().int().min(0).optional()).optional(),
    trial_end: z.array(z.number().int().optional()).optional(),
    service_period_days: z
      .array(z.number().int().min(1).max(4000).optional())
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
    start_date: z.array(z.number().int().optional()).optional(),
    end_date: z.array(z.number().int().optional()).optional(),
    description: z.array(z.string().max(2000).optional()).optional(),
    ramp_tier_id: z.array(z.string().max(105).optional()).optional(),
  },
);
const EditCreateSubCustomerQuoteForItemsQuoteDiscountsItemSchema = z.object({
  apply_on: z.enum(['invoice_amount', 'specific_item_price']).optional(),
  duration_type: z.enum(['one_time', 'forever', 'limited_period']),
  percentage: z.number().min(0.01).max(100).optional(),
  amount: z.number().int().min(0).optional(),
  period: z.number().int().min(1).optional(),
  period_unit: z.enum(['day', 'week', 'month', 'year']).optional(),
  included_in_mrr: z.boolean().optional(),
  item_price_id: z.string().max(100).optional(),
  quantity: z.number().int().min(1).optional(),
  start_date: z.number().int().optional(),
  end_date: z.number().int().optional(),
});
const EditCreateSubCustomerQuoteForItemsQuoteDiscountsSchema = z.object({
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
  start_date: z.array(z.number().int().optional()).optional(),
  end_date: z.array(z.number().int().optional()).optional(),
});
const EditCreateSubCustomerQuoteForItemsQuoteItemTiersItemSchema = z.object({
  item_price_id: z.string().max(100).optional(),
  starting_unit: z.number().int().min(1).optional(),
  ending_unit: z.number().int().optional(),
  price: z.number().int().min(0).optional(),
  starting_unit_in_decimal: z.string().max(33).optional(),
  ending_unit_in_decimal: z.string().max(33).optional(),
  price_in_decimal: z.string().max(39).optional(),
  pricing_type: z.enum(['per_unit', 'flat_fee', 'package']).optional(),
  package_size: z.number().int().min(1).optional(),
  ramp_tier_id: z.string().max(105).optional(),
});
const EditCreateSubCustomerQuoteForItemsQuoteItemTiersSchema = z.object({
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
  ramp_tier_id: z.array(z.string().max(105).optional()).optional(),
});
const EditCreateSubCustomerQuoteForItemsQuoteCouponsItemSchema = z.object({
  id: z.string().max(100).optional(),
  start_date: z.number().int().optional(),
  end_date: z.number().int().optional(),
});
const EditCreateSubCustomerQuoteForItemsQuoteCouponsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
  start_date: z.array(z.number().int().optional()).optional(),
  end_date: z.array(z.number().int().optional()).optional(),
});
const EditCreateSubCustomerQuoteForItemsQuoteEntitlementOverridesItemSchema =
  z.object({
    feature_id: z.string().max(50).optional(),
    entity_id: z.string().max(100).optional(),
    entity_type: z
      .enum(['plan_price', 'addon_price', 'charge_price', 'charge'])
      .optional(),
    value: z.string().max(50).optional(),
    is_enabled: z.boolean().optional(),
    start_date: z.number().int().optional(),
    end_date: z.number().int().optional(),
  });
const EditCreateSubCustomerQuoteForItemsQuoteEntitlementOverridesSchema =
  z.object({
    feature_id: z.array(z.string().max(50).optional()).optional(),
    entity_id: z.array(z.string().max(100).optional()).optional(),
    entity_type: z
      .array(
        z
          .enum(['plan_price', 'addon_price', 'charge_price', 'charge'])
          .optional(),
      )
      .optional(),
    value: z.array(z.string().max(50).optional()).optional(),
    is_enabled: z.array(z.boolean().optional()).optional(),
    start_date: z.array(z.number().int().optional()).optional(),
    end_date: z.array(z.number().int().optional()).optional(),
  });
const EditCreateSubCustomerQuoteForItemsQuoteBodySchema = z.looseObject({
  notes: z.string().max(10000).optional(),
  expires_at: z.number().int().optional(),
  billing_cycles: z.number().int().min(0).optional(),
  mandatory_items_to_remove: z.array(z.string().max(100).optional()).optional(),
  terms_to_charge: z.number().int().min(1).optional(),
  billing_alignment_mode: z.enum(['immediate', 'delayed']).optional(),
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  billing_start_option: z.enum(['immediately', 'on_specific_date']).optional(),
  net_term_days: z.number().int().optional(),
  subscription:
    EditCreateSubCustomerQuoteForItemsQuoteSubscriptionSchema.optional(),
  shipping_address:
    EditCreateSubCustomerQuoteForItemsQuoteShippingAddressSchema.optional(),
  contract_term:
    EditCreateSubCustomerQuoteForItemsQuoteContractTermSchema.optional(),
  billing_address:
    EditCreateSubCustomerQuoteForItemsQuoteBillingAddressSchema.optional(),
  subscription_items: z
    .union([
      z.array(
        EditCreateSubCustomerQuoteForItemsQuoteSubscriptionItemsItemSchema.optional(),
      ),
      EditCreateSubCustomerQuoteForItemsQuoteSubscriptionItemsSchema,
    ])
    .optional(),
  discounts: z
    .union([
      z.array(
        EditCreateSubCustomerQuoteForItemsQuoteDiscountsItemSchema.optional(),
      ),
      EditCreateSubCustomerQuoteForItemsQuoteDiscountsSchema,
    ])
    .optional(),
  item_tiers: z
    .union([
      z.array(
        EditCreateSubCustomerQuoteForItemsQuoteItemTiersItemSchema.optional(),
      ),
      EditCreateSubCustomerQuoteForItemsQuoteItemTiersSchema,
    ])
    .optional(),
  coupons: z
    .union([
      z.array(
        EditCreateSubCustomerQuoteForItemsQuoteCouponsItemSchema.optional(),
      ),
      EditCreateSubCustomerQuoteForItemsQuoteCouponsSchema,
    ])
    .optional(),
  entitlement_overrides: z
    .union([
      z.array(
        EditCreateSubCustomerQuoteForItemsQuoteEntitlementOverridesItemSchema.optional(),
      ),
      EditCreateSubCustomerQuoteForItemsQuoteEntitlementOverridesSchema,
    ])
    .optional(),
});
export { EditCreateSubCustomerQuoteForItemsQuoteBodySchema };
export type EditCreateSubCustomerQuoteForItemsQuoteBody = z.infer<
  typeof EditCreateSubCustomerQuoteForItemsQuoteBodySchema
>;

//Quote.updateSubscriptionQuoteForItems

const UpdateSubscriptionQuoteForItemsQuoteSubscriptionSchema = z.looseObject({
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
  contract_term_billing_cycle_on_renewal: z
    .number()
    .int()
    .min(1)
    .max(100)
    .optional(),
});
const UpdateSubscriptionQuoteForItemsQuoteBillingAddressSchema = z.object({
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
const UpdateSubscriptionQuoteForItemsQuoteShippingAddressSchema = z.object({
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
const UpdateSubscriptionQuoteForItemsQuoteCustomerSchema = z.object({
  vat_number: z.string().max(20).optional(),
  vat_number_prefix: z.string().max(10).optional(),
  registered_for_gst: z.boolean().optional(),
});
const UpdateSubscriptionQuoteForItemsQuoteContractTermSchema = z.object({
  action_at_term_end: z
    .enum(['renew', 'evergreen', 'cancel', 'renew_once'])
    .optional(),
  cancellation_cutoff_period: z.number().int().optional(),
});
const UpdateSubscriptionQuoteForItemsQuoteSubscriptionItemsItemSchema =
  z.object({
    item_price_id: z.string().max(100),
    quantity: z.number().int().min(1).optional(),
    quantity_in_decimal: z.string().max(33).optional(),
    unit_price: z.number().int().min(0).optional(),
    unit_price_in_decimal: z.string().max(39).optional(),
    billing_cycles: z.number().int().min(0).optional(),
    trial_end: z.number().int().optional(),
    service_period_days: z.number().int().min(1).max(4000).optional(),
    charge_on_event: z
      .enum([
        'subscription_creation',
        'subscription_trial_start',
        'plan_activation',
        'subscription_activation',
        'contract_termination',
      ])
      .optional(),
    charge_once: z.boolean().optional(),
    charge_on_option: z.enum(['immediately', 'on_event']).optional(),
    item_type: z.enum(['plan', 'addon', 'charge']).optional(),
    start_date: z.number().int().optional(),
    end_date: z.number().int().optional(),
    description: z.string().max(2000).optional(),
    ramp_tier_id: z.string().max(105).optional(),
  });
const UpdateSubscriptionQuoteForItemsQuoteSubscriptionItemsSchema = z.object({
  item_price_id: z.array(z.string().max(100).optional()),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  billing_cycles: z.array(z.number().int().min(0).optional()).optional(),
  trial_end: z.array(z.number().int().optional()).optional(),
  service_period_days: z
    .array(z.number().int().min(1).max(4000).optional())
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
  start_date: z.array(z.number().int().optional()).optional(),
  end_date: z.array(z.number().int().optional()).optional(),
  description: z.array(z.string().max(2000).optional()).optional(),
  ramp_tier_id: z.array(z.string().max(105).optional()).optional(),
});
const UpdateSubscriptionQuoteForItemsQuoteDiscountsItemSchema = z.object({
  apply_on: z.enum(['invoice_amount', 'specific_item_price']).optional(),
  duration_type: z.enum(['one_time', 'forever', 'limited_period']),
  percentage: z.number().min(0.01).max(100).optional(),
  amount: z.number().int().min(0).optional(),
  period: z.number().int().min(1).optional(),
  period_unit: z.enum(['day', 'week', 'month', 'year']).optional(),
  included_in_mrr: z.boolean().optional(),
  item_price_id: z.string().max(100).optional(),
  quantity: z.number().int().min(1).optional(),
  operation_type: z.enum(['add', 'remove']),
  id: z.string().max(50).optional(),
  start_date: z.number().int().optional(),
  end_date: z.number().int().optional(),
});
const UpdateSubscriptionQuoteForItemsQuoteDiscountsSchema = z.object({
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
  start_date: z.array(z.number().int().optional()).optional(),
  end_date: z.array(z.number().int().optional()).optional(),
});
const UpdateSubscriptionQuoteForItemsQuoteItemTiersItemSchema = z.object({
  item_price_id: z.string().max(100).optional(),
  starting_unit: z.number().int().min(1).optional(),
  ending_unit: z.number().int().optional(),
  price: z.number().int().min(0).optional(),
  starting_unit_in_decimal: z.string().max(33).optional(),
  ending_unit_in_decimal: z.string().max(33).optional(),
  price_in_decimal: z.string().max(39).optional(),
  pricing_type: z.enum(['per_unit', 'flat_fee', 'package']).optional(),
  package_size: z.number().int().min(1).optional(),
  ramp_tier_id: z.string().max(105).optional(),
});
const UpdateSubscriptionQuoteForItemsQuoteItemTiersSchema = z.object({
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
  ramp_tier_id: z.array(z.string().max(105).optional()).optional(),
});
const UpdateSubscriptionQuoteForItemsQuoteCouponsItemSchema = z.object({
  id: z.string().max(100).optional(),
  start_date: z.number().int().optional(),
  end_date: z.number().int().optional(),
});
const UpdateSubscriptionQuoteForItemsQuoteCouponsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
  start_date: z.array(z.number().int().optional()).optional(),
  end_date: z.array(z.number().int().optional()).optional(),
});
const UpdateSubscriptionQuoteForItemsQuoteEntitlementOverridesItemSchema =
  z.object({
    feature_id: z.string().max(50).optional(),
    entity_id: z.string().max(100).optional(),
    entity_type: z
      .enum(['plan_price', 'addon_price', 'charge_price', 'charge'])
      .optional(),
    value: z.string().max(50).optional(),
    is_enabled: z.boolean().optional(),
    start_date: z.number().int().optional(),
    end_date: z.number().int().optional(),
  });
const UpdateSubscriptionQuoteForItemsQuoteEntitlementOverridesSchema = z.object(
  {
    feature_id: z.array(z.string().max(50).optional()).optional(),
    entity_id: z.array(z.string().max(100).optional()).optional(),
    entity_type: z
      .array(
        z
          .enum(['plan_price', 'addon_price', 'charge_price', 'charge'])
          .optional(),
      )
      .optional(),
    value: z.array(z.string().max(50).optional()).optional(),
    is_enabled: z.array(z.boolean().optional()).optional(),
    start_date: z.array(z.number().int().optional()).optional(),
    end_date: z.array(z.number().int().optional()).optional(),
  },
);
const UpdateSubscriptionQuoteForItemsQuoteBodySchema = z.looseObject({
  name: z.string().max(100).optional(),
  notes: z.string().max(10000).optional(),
  expires_at: z.number().int().optional(),
  mandatory_items_to_remove: z.array(z.string().max(100).optional()).optional(),
  replace_items_list: z.boolean().default(false).optional(),
  billing_cycles: z.number().int().min(0).optional(),
  terms_to_charge: z.number().int().min(1).optional(),
  reactivate_from: z.number().int().optional(),
  billing_alignment_mode: z.enum(['immediate', 'delayed']).optional(),
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  replace_coupon_list: z.boolean().default(false).optional(),
  change_option: z.enum(['immediately', 'specific_date']).optional(),
  changes_scheduled_at: z.number().int().optional(),
  force_term_reset: z.boolean().default(false).optional(),
  reactivate: z.boolean().optional(),
  net_term_days: z.number().int().optional(),
  subscription:
    UpdateSubscriptionQuoteForItemsQuoteSubscriptionSchema.optional(),
  billing_address:
    UpdateSubscriptionQuoteForItemsQuoteBillingAddressSchema.optional(),
  shipping_address:
    UpdateSubscriptionQuoteForItemsQuoteShippingAddressSchema.optional(),
  customer: UpdateSubscriptionQuoteForItemsQuoteCustomerSchema.optional(),
  contract_term:
    UpdateSubscriptionQuoteForItemsQuoteContractTermSchema.optional(),
  subscription_items: z
    .union([
      z.array(
        UpdateSubscriptionQuoteForItemsQuoteSubscriptionItemsItemSchema.optional(),
      ),
      UpdateSubscriptionQuoteForItemsQuoteSubscriptionItemsSchema,
    ])
    .optional(),
  discounts: z
    .union([
      z.array(
        UpdateSubscriptionQuoteForItemsQuoteDiscountsItemSchema.optional(),
      ),
      UpdateSubscriptionQuoteForItemsQuoteDiscountsSchema,
    ])
    .optional(),
  item_tiers: z
    .union([
      z.array(
        UpdateSubscriptionQuoteForItemsQuoteItemTiersItemSchema.optional(),
      ),
      UpdateSubscriptionQuoteForItemsQuoteItemTiersSchema,
    ])
    .optional(),
  coupons: z
    .union([
      z.array(UpdateSubscriptionQuoteForItemsQuoteCouponsItemSchema.optional()),
      UpdateSubscriptionQuoteForItemsQuoteCouponsSchema,
    ])
    .optional(),
  entitlement_overrides: z
    .union([
      z.array(
        UpdateSubscriptionQuoteForItemsQuoteEntitlementOverridesItemSchema.optional(),
      ),
      UpdateSubscriptionQuoteForItemsQuoteEntitlementOverridesSchema,
    ])
    .optional(),
});
export { UpdateSubscriptionQuoteForItemsQuoteBodySchema };
export type UpdateSubscriptionQuoteForItemsQuoteBody = z.infer<
  typeof UpdateSubscriptionQuoteForItemsQuoteBodySchema
>;

//Quote.editUpdateSubscriptionQuoteForItems

const EditUpdateSubscriptionQuoteForItemsQuoteSubscriptionSchema =
  z.looseObject({
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
    contract_term_billing_cycle_on_renewal: z
      .number()
      .int()
      .min(1)
      .max(100)
      .optional(),
  });
const EditUpdateSubscriptionQuoteForItemsQuoteBillingAddressSchema = z.object({
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
const EditUpdateSubscriptionQuoteForItemsQuoteShippingAddressSchema = z.object({
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
const EditUpdateSubscriptionQuoteForItemsQuoteCustomerSchema = z.object({
  vat_number: z.string().max(20).optional(),
  vat_number_prefix: z.string().max(10).optional(),
  registered_for_gst: z.boolean().optional(),
});
const EditUpdateSubscriptionQuoteForItemsQuoteContractTermSchema = z.object({
  action_at_term_end: z
    .enum(['renew', 'evergreen', 'cancel', 'renew_once'])
    .optional(),
  cancellation_cutoff_period: z.number().int().optional(),
});
const EditUpdateSubscriptionQuoteForItemsQuoteSubscriptionItemsItemSchema =
  z.object({
    item_price_id: z.string().max(100),
    quantity: z.number().int().min(1).optional(),
    quantity_in_decimal: z.string().max(33).optional(),
    unit_price: z.number().int().min(0).optional(),
    unit_price_in_decimal: z.string().max(39).optional(),
    billing_cycles: z.number().int().min(0).optional(),
    trial_end: z.number().int().optional(),
    service_period_days: z.number().int().min(1).max(4000).optional(),
    charge_on_event: z
      .enum([
        'subscription_creation',
        'subscription_trial_start',
        'plan_activation',
        'subscription_activation',
        'contract_termination',
      ])
      .optional(),
    charge_once: z.boolean().optional(),
    charge_on_option: z.enum(['immediately', 'on_event']).optional(),
    item_type: z.enum(['plan', 'addon', 'charge']).optional(),
    start_date: z.number().int().optional(),
    end_date: z.number().int().optional(),
    description: z.string().max(2000).optional(),
    ramp_tier_id: z.string().max(105).optional(),
  });
const EditUpdateSubscriptionQuoteForItemsQuoteSubscriptionItemsSchema =
  z.object({
    item_price_id: z.array(z.string().max(100).optional()),
    quantity: z.array(z.number().int().min(1).optional()).optional(),
    quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
    unit_price: z.array(z.number().int().min(0).optional()).optional(),
    unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
    billing_cycles: z.array(z.number().int().min(0).optional()).optional(),
    trial_end: z.array(z.number().int().optional()).optional(),
    service_period_days: z
      .array(z.number().int().min(1).max(4000).optional())
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
    item_type: z
      .array(z.enum(['plan', 'addon', 'charge']).optional())
      .optional(),
    start_date: z.array(z.number().int().optional()).optional(),
    end_date: z.array(z.number().int().optional()).optional(),
    description: z.array(z.string().max(2000).optional()).optional(),
    ramp_tier_id: z.array(z.string().max(105).optional()).optional(),
  });
const EditUpdateSubscriptionQuoteForItemsQuoteDiscountsItemSchema = z.object({
  apply_on: z.enum(['invoice_amount', 'specific_item_price']).optional(),
  duration_type: z.enum(['one_time', 'forever', 'limited_period']),
  percentage: z.number().min(0.01).max(100).optional(),
  amount: z.number().int().min(0).optional(),
  period: z.number().int().min(1).optional(),
  period_unit: z.enum(['day', 'week', 'month', 'year']).optional(),
  included_in_mrr: z.boolean().optional(),
  item_price_id: z.string().max(100).optional(),
  quantity: z.number().int().min(1).optional(),
  operation_type: z.enum(['add', 'remove']),
  id: z.string().max(50).optional(),
  start_date: z.number().int().optional(),
  end_date: z.number().int().optional(),
});
const EditUpdateSubscriptionQuoteForItemsQuoteDiscountsSchema = z.object({
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
  start_date: z.array(z.number().int().optional()).optional(),
  end_date: z.array(z.number().int().optional()).optional(),
});
const EditUpdateSubscriptionQuoteForItemsQuoteItemTiersItemSchema = z.object({
  item_price_id: z.string().max(100).optional(),
  starting_unit: z.number().int().min(1).optional(),
  ending_unit: z.number().int().optional(),
  price: z.number().int().min(0).optional(),
  starting_unit_in_decimal: z.string().max(33).optional(),
  ending_unit_in_decimal: z.string().max(33).optional(),
  price_in_decimal: z.string().max(39).optional(),
  pricing_type: z.enum(['per_unit', 'flat_fee', 'package']).optional(),
  package_size: z.number().int().min(1).optional(),
  ramp_tier_id: z.string().max(105).optional(),
});
const EditUpdateSubscriptionQuoteForItemsQuoteItemTiersSchema = z.object({
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
  ramp_tier_id: z.array(z.string().max(105).optional()).optional(),
});
const EditUpdateSubscriptionQuoteForItemsQuoteCouponsItemSchema = z.object({
  id: z.string().max(100).optional(),
  start_date: z.number().int().optional(),
  end_date: z.number().int().optional(),
});
const EditUpdateSubscriptionQuoteForItemsQuoteCouponsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
  start_date: z.array(z.number().int().optional()).optional(),
  end_date: z.array(z.number().int().optional()).optional(),
});
const EditUpdateSubscriptionQuoteForItemsQuoteEntitlementOverridesItemSchema =
  z.object({
    feature_id: z.string().max(50).optional(),
    entity_id: z.string().max(100).optional(),
    entity_type: z
      .enum(['plan_price', 'addon_price', 'charge_price', 'charge'])
      .optional(),
    value: z.string().max(50).optional(),
    is_enabled: z.boolean().optional(),
    start_date: z.number().int().optional(),
    end_date: z.number().int().optional(),
  });
const EditUpdateSubscriptionQuoteForItemsQuoteEntitlementOverridesSchema =
  z.object({
    feature_id: z.array(z.string().max(50).optional()).optional(),
    entity_id: z.array(z.string().max(100).optional()).optional(),
    entity_type: z
      .array(
        z
          .enum(['plan_price', 'addon_price', 'charge_price', 'charge'])
          .optional(),
      )
      .optional(),
    value: z.array(z.string().max(50).optional()).optional(),
    is_enabled: z.array(z.boolean().optional()).optional(),
    start_date: z.array(z.number().int().optional()).optional(),
    end_date: z.array(z.number().int().optional()).optional(),
  });
const EditUpdateSubscriptionQuoteForItemsQuoteBodySchema = z.looseObject({
  notes: z.string().max(10000).optional(),
  expires_at: z.number().int().optional(),
  mandatory_items_to_remove: z.array(z.string().max(100).optional()).optional(),
  replace_items_list: z.boolean().default(false).optional(),
  billing_cycles: z.number().int().min(0).optional(),
  terms_to_charge: z.number().int().min(1).optional(),
  reactivate_from: z.number().int().optional(),
  billing_alignment_mode: z.enum(['immediate', 'delayed']).optional(),
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  replace_coupon_list: z.boolean().default(false).optional(),
  change_option: z.enum(['immediately', 'specific_date']).optional(),
  changes_scheduled_at: z.number().int().optional(),
  force_term_reset: z.boolean().default(false).optional(),
  reactivate: z.boolean().optional(),
  net_term_days: z.number().int().optional(),
  subscription:
    EditUpdateSubscriptionQuoteForItemsQuoteSubscriptionSchema.optional(),
  billing_address:
    EditUpdateSubscriptionQuoteForItemsQuoteBillingAddressSchema.optional(),
  shipping_address:
    EditUpdateSubscriptionQuoteForItemsQuoteShippingAddressSchema.optional(),
  customer: EditUpdateSubscriptionQuoteForItemsQuoteCustomerSchema.optional(),
  contract_term:
    EditUpdateSubscriptionQuoteForItemsQuoteContractTermSchema.optional(),
  subscription_items: z
    .union([
      z.array(
        EditUpdateSubscriptionQuoteForItemsQuoteSubscriptionItemsItemSchema.optional(),
      ),
      EditUpdateSubscriptionQuoteForItemsQuoteSubscriptionItemsSchema,
    ])
    .optional(),
  discounts: z
    .union([
      z.array(
        EditUpdateSubscriptionQuoteForItemsQuoteDiscountsItemSchema.optional(),
      ),
      EditUpdateSubscriptionQuoteForItemsQuoteDiscountsSchema,
    ])
    .optional(),
  item_tiers: z
    .union([
      z.array(
        EditUpdateSubscriptionQuoteForItemsQuoteItemTiersItemSchema.optional(),
      ),
      EditUpdateSubscriptionQuoteForItemsQuoteItemTiersSchema,
    ])
    .optional(),
  coupons: z
    .union([
      z.array(
        EditUpdateSubscriptionQuoteForItemsQuoteCouponsItemSchema.optional(),
      ),
      EditUpdateSubscriptionQuoteForItemsQuoteCouponsSchema,
    ])
    .optional(),
  entitlement_overrides: z
    .union([
      z.array(
        EditUpdateSubscriptionQuoteForItemsQuoteEntitlementOverridesItemSchema.optional(),
      ),
      EditUpdateSubscriptionQuoteForItemsQuoteEntitlementOverridesSchema,
    ])
    .optional(),
});
export { EditUpdateSubscriptionQuoteForItemsQuoteBodySchema };
export type EditUpdateSubscriptionQuoteForItemsQuoteBody = z.infer<
  typeof EditUpdateSubscriptionQuoteForItemsQuoteBodySchema
>;

//Quote.createForChargeItemsAndCharges

const CreateForChargeItemsAndChargesQuoteBillingAddressSchema = z.object({
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
const CreateForChargeItemsAndChargesQuoteShippingAddressSchema = z.object({
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
const CreateForChargeItemsAndChargesQuoteItemPricesItemSchema = z.object({
  item_price_id: z.string().max(100).optional(),
  quantity: z.number().int().min(1).optional(),
  quantity_in_decimal: z.string().max(33).optional(),
  unit_price: z.number().int().min(0).optional(),
  unit_price_in_decimal: z.string().max(39).optional(),
  service_period_days: z.number().int().min(1).max(4000).optional(),
});
const CreateForChargeItemsAndChargesQuoteItemPricesSchema = z.object({
  item_price_id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  service_period_days: z
    .array(z.number().int().min(1).max(4000).optional())
    .optional(),
});
const CreateForChargeItemsAndChargesQuoteItemTiersItemSchema = z.object({
  item_price_id: z.string().max(100).optional(),
  starting_unit: z.number().int().min(1).optional(),
  ending_unit: z.number().int().optional(),
  price: z.number().int().min(0).optional(),
  starting_unit_in_decimal: z.string().max(33).optional(),
  ending_unit_in_decimal: z.string().max(33).optional(),
  price_in_decimal: z.string().max(39).optional(),
  pricing_type: z.enum(['per_unit', 'flat_fee', 'package']).optional(),
  package_size: z.number().int().min(1).optional(),
});
const CreateForChargeItemsAndChargesQuoteItemTiersSchema = z.object({
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
const CreateForChargeItemsAndChargesQuoteChargesItemSchema = z.object({
  amount: z.number().int().min(1).optional(),
  amount_in_decimal: z.string().max(39).optional(),
  description: z.string().max(250).optional(),
  avalara_sale_type: z
    .enum(['wholesale', 'retail', 'consumed', 'vendor_use'])
    .optional(),
  avalara_transaction_type: z.number().int().optional(),
  avalara_service_type: z.number().int().optional(),
  service_period: z.number().int().optional(),
});
const CreateForChargeItemsAndChargesQuoteChargesSchema = z.object({
  amount: z.array(z.number().int().min(1).optional()).optional(),
  amount_in_decimal: z.array(z.string().max(39).optional()).optional(),
  description: z.array(z.string().max(250).optional()).optional(),
  avalara_sale_type: z
    .array(z.enum(['wholesale', 'retail', 'consumed', 'vendor_use']).optional())
    .optional(),
  avalara_transaction_type: z.array(z.number().int().optional()).optional(),
  avalara_service_type: z.array(z.number().int().optional()).optional(),
  service_period: z.array(z.number().int().optional()).optional(),
});
const CreateForChargeItemsAndChargesQuoteDiscountsItemSchema = z.object({
  percentage: z.number().min(0.01).max(100).optional(),
  quantity: z.number().int().min(1).optional(),
  amount: z.number().int().min(0).optional(),
  apply_on: z.enum(['invoice_amount', 'specific_item_price']),
  item_price_id: z.string().max(100).optional(),
});
const CreateForChargeItemsAndChargesQuoteDiscountsSchema = z.object({
  percentage: z.array(z.number().min(0.01).max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  amount: z.array(z.number().int().min(0).optional()).optional(),
  apply_on: z.array(
    z.enum(['invoice_amount', 'specific_item_price']).optional(),
  ),
  item_price_id: z.array(z.string().max(100).optional()).optional(),
});
const CreateForChargeItemsAndChargesQuoteTaxProvidersFieldsItemSchema =
  z.object({
    provider_name: z.string().max(50).optional(),
    field_id: z.string().max(50).optional(),
    field_value: z.string().max(50).optional(),
  });
const CreateForChargeItemsAndChargesQuoteTaxProvidersFieldsSchema = z.object({
  provider_name: z.array(z.string().max(50).optional()).optional(),
  field_id: z.array(z.string().max(50).optional()).optional(),
  field_value: z.array(z.string().max(50).optional()).optional(),
});
const CreateForChargeItemsAndChargesQuoteBodySchema = z.looseObject({
  name: z.string().max(100).optional(),
  customer_id: z.string().max(50),
  po_number: z.string().max(100).optional(),
  notes: z.string().max(10000).optional(),
  expires_at: z.number().int().optional(),
  currency_code: z.string().max(3).optional(),
  coupon: z.string().max(100).optional(),
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  net_term_days: z.number().int().optional(),
  billing_address:
    CreateForChargeItemsAndChargesQuoteBillingAddressSchema.optional(),
  shipping_address:
    CreateForChargeItemsAndChargesQuoteShippingAddressSchema.optional(),
  item_prices: z
    .union([
      z.array(
        CreateForChargeItemsAndChargesQuoteItemPricesItemSchema.optional(),
      ),
      CreateForChargeItemsAndChargesQuoteItemPricesSchema,
    ])
    .optional(),
  item_tiers: z
    .union([
      z.array(
        CreateForChargeItemsAndChargesQuoteItemTiersItemSchema.optional(),
      ),
      CreateForChargeItemsAndChargesQuoteItemTiersSchema,
    ])
    .optional(),
  charges: z
    .union([
      z.array(CreateForChargeItemsAndChargesQuoteChargesItemSchema.optional()),
      CreateForChargeItemsAndChargesQuoteChargesSchema,
    ])
    .optional(),
  discounts: z
    .union([
      z.array(
        CreateForChargeItemsAndChargesQuoteDiscountsItemSchema.optional(),
      ),
      CreateForChargeItemsAndChargesQuoteDiscountsSchema,
    ])
    .optional(),
  tax_providers_fields: z
    .union([
      z.array(
        CreateForChargeItemsAndChargesQuoteTaxProvidersFieldsItemSchema.optional(),
      ),
      CreateForChargeItemsAndChargesQuoteTaxProvidersFieldsSchema,
    ])
    .optional(),
});
export { CreateForChargeItemsAndChargesQuoteBodySchema };
export type CreateForChargeItemsAndChargesQuoteBody = z.infer<
  typeof CreateForChargeItemsAndChargesQuoteBodySchema
>;

//Quote.editForChargeItemsAndCharges

const EditForChargeItemsAndChargesQuoteBillingAddressSchema = z.object({
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
const EditForChargeItemsAndChargesQuoteShippingAddressSchema = z.object({
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
const EditForChargeItemsAndChargesQuoteItemPricesItemSchema = z.object({
  item_price_id: z.string().max(100).optional(),
  quantity: z.number().int().min(1).optional(),
  quantity_in_decimal: z.string().max(33).optional(),
  unit_price: z.number().int().min(0).optional(),
  unit_price_in_decimal: z.string().max(39).optional(),
  service_period_days: z.number().int().min(1).max(4000).optional(),
});
const EditForChargeItemsAndChargesQuoteItemPricesSchema = z.object({
  item_price_id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
  service_period_days: z
    .array(z.number().int().min(1).max(4000).optional())
    .optional(),
});
const EditForChargeItemsAndChargesQuoteItemTiersItemSchema = z.object({
  item_price_id: z.string().max(100).optional(),
  starting_unit: z.number().int().min(1).optional(),
  ending_unit: z.number().int().optional(),
  price: z.number().int().min(0).optional(),
  starting_unit_in_decimal: z.string().max(33).optional(),
  ending_unit_in_decimal: z.string().max(33).optional(),
  price_in_decimal: z.string().max(39).optional(),
  pricing_type: z.enum(['per_unit', 'flat_fee', 'package']).optional(),
  package_size: z.number().int().min(1).optional(),
});
const EditForChargeItemsAndChargesQuoteItemTiersSchema = z.object({
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
const EditForChargeItemsAndChargesQuoteChargesItemSchema = z.object({
  amount: z.number().int().min(1).optional(),
  amount_in_decimal: z.string().max(39).optional(),
  description: z.string().max(250).optional(),
  avalara_sale_type: z
    .enum(['wholesale', 'retail', 'consumed', 'vendor_use'])
    .optional(),
  avalara_transaction_type: z.number().int().optional(),
  avalara_service_type: z.number().int().optional(),
  service_period: z.number().int().optional(),
});
const EditForChargeItemsAndChargesQuoteChargesSchema = z.object({
  amount: z.array(z.number().int().min(1).optional()).optional(),
  amount_in_decimal: z.array(z.string().max(39).optional()).optional(),
  description: z.array(z.string().max(250).optional()).optional(),
  avalara_sale_type: z
    .array(z.enum(['wholesale', 'retail', 'consumed', 'vendor_use']).optional())
    .optional(),
  avalara_transaction_type: z.array(z.number().int().optional()).optional(),
  avalara_service_type: z.array(z.number().int().optional()).optional(),
  service_period: z.array(z.number().int().optional()).optional(),
});
const EditForChargeItemsAndChargesQuoteDiscountsItemSchema = z.object({
  percentage: z.number().min(0.01).max(100).optional(),
  quantity: z.number().int().min(1).optional(),
  amount: z.number().int().min(0).optional(),
  apply_on: z.enum(['invoice_amount', 'specific_item_price']),
  item_price_id: z.string().max(100).optional(),
});
const EditForChargeItemsAndChargesQuoteDiscountsSchema = z.object({
  percentage: z.array(z.number().min(0.01).max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  amount: z.array(z.number().int().min(0).optional()).optional(),
  apply_on: z.array(
    z.enum(['invoice_amount', 'specific_item_price']).optional(),
  ),
  item_price_id: z.array(z.string().max(100).optional()).optional(),
});
const EditForChargeItemsAndChargesQuoteTaxProvidersFieldsItemSchema = z.object({
  provider_name: z.string().max(50).optional(),
  field_id: z.string().max(50).optional(),
  field_value: z.string().max(50).optional(),
});
const EditForChargeItemsAndChargesQuoteTaxProvidersFieldsSchema = z.object({
  provider_name: z.array(z.string().max(50).optional()).optional(),
  field_id: z.array(z.string().max(50).optional()).optional(),
  field_value: z.array(z.string().max(50).optional()).optional(),
});
const EditForChargeItemsAndChargesQuoteBodySchema = z.looseObject({
  po_number: z.string().max(100).optional(),
  notes: z.string().max(10000).optional(),
  expires_at: z.number().int().optional(),
  currency_code: z.string().max(3).optional(),
  coupon: z.string().max(100).optional(),
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  net_term_days: z.number().int().optional(),
  billing_address:
    EditForChargeItemsAndChargesQuoteBillingAddressSchema.optional(),
  shipping_address:
    EditForChargeItemsAndChargesQuoteShippingAddressSchema.optional(),
  item_prices: z
    .union([
      z.array(EditForChargeItemsAndChargesQuoteItemPricesItemSchema.optional()),
      EditForChargeItemsAndChargesQuoteItemPricesSchema,
    ])
    .optional(),
  item_tiers: z
    .union([
      z.array(EditForChargeItemsAndChargesQuoteItemTiersItemSchema.optional()),
      EditForChargeItemsAndChargesQuoteItemTiersSchema,
    ])
    .optional(),
  charges: z
    .union([
      z.array(EditForChargeItemsAndChargesQuoteChargesItemSchema.optional()),
      EditForChargeItemsAndChargesQuoteChargesSchema,
    ])
    .optional(),
  discounts: z
    .union([
      z.array(EditForChargeItemsAndChargesQuoteDiscountsItemSchema.optional()),
      EditForChargeItemsAndChargesQuoteDiscountsSchema,
    ])
    .optional(),
  tax_providers_fields: z
    .union([
      z.array(
        EditForChargeItemsAndChargesQuoteTaxProvidersFieldsItemSchema.optional(),
      ),
      EditForChargeItemsAndChargesQuoteTaxProvidersFieldsSchema,
    ])
    .optional(),
});
export { EditForChargeItemsAndChargesQuoteBodySchema };
export type EditForChargeItemsAndChargesQuoteBody = z.infer<
  typeof EditForChargeItemsAndChargesQuoteBodySchema
>;

//Quote.list

const ListQuoteIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
  not_in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
});
const ListQuoteCustomerIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
  not_in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
});
const ListQuoteSubscriptionIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.union([z.boolean(), z.enum(['true', 'false'])]).optional(),
  in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
  not_in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
});
const ListQuoteStatusSchema = z.object({
  is: z
    .enum([
      'open',
      'accepted',
      'declined',
      'invoiced',
      'closed',
      'pending_approval',
      'approval_rejected',
      'proposed',
      'voided',
      'expired',
    ])
    .optional(),
  is_not: z
    .enum([
      'open',
      'accepted',
      'declined',
      'invoiced',
      'closed',
      'pending_approval',
      'approval_rejected',
      'proposed',
      'voided',
      'expired',
    ])
    .optional(),
  in: z
    .union([
      z.array(
        z
          .enum([
            'open',
            'accepted',
            'declined',
            'invoiced',
            'closed',
            'pending_approval',
            'approval_rejected',
            'proposed',
            'voided',
            'expired',
          ])
          .optional(),
      ),
      z.enum([
        'open',
        'accepted',
        'declined',
        'invoiced',
        'closed',
        'pending_approval',
        'approval_rejected',
        'proposed',
        'voided',
        'expired',
      ]),
    ])
    .optional(),
  not_in: z
    .union([
      z.array(
        z
          .enum([
            'open',
            'accepted',
            'declined',
            'invoiced',
            'closed',
            'pending_approval',
            'approval_rejected',
            'proposed',
            'voided',
            'expired',
          ])
          .optional(),
      ),
      z.enum([
        'open',
        'accepted',
        'declined',
        'invoiced',
        'closed',
        'pending_approval',
        'approval_rejected',
        'proposed',
        'voided',
        'expired',
      ]),
    ])
    .optional(),
});
const ListQuoteDateSchema = z.object({
  after: z
    .union([z.number().int(), z.string().regex(RegExp('^\\d{10}$'))])
    .optional(),
  before: z
    .union([z.number().int(), z.string().regex(RegExp('^\\d{10}$'))])
    .optional(),
  on: z
    .union([z.number().int(), z.string().regex(RegExp('^\\d{10}$'))])
    .optional(),
  between: z
    .union([
      z.array(z.number().int().optional()).min(2).max(2),
      z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')),
    ])
    .optional(),
});
const ListQuoteUpdatedAtSchema = z.object({
  after: z
    .union([z.number().int(), z.string().regex(RegExp('^\\d{10}$'))])
    .optional(),
  before: z
    .union([z.number().int(), z.string().regex(RegExp('^\\d{10}$'))])
    .optional(),
  on: z
    .union([z.number().int(), z.string().regex(RegExp('^\\d{10}$'))])
    .optional(),
  between: z
    .union([
      z.array(z.number().int().optional()).min(2).max(2),
      z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')),
    ])
    .optional(),
});
const ListQuoteSortBySchema = z.looseObject({
  asc: z.enum(['date']).optional(),
  desc: z.enum(['date']).optional(),
});
const ListQuoteBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  include_deleted: z.boolean().default(false).optional(),
  id: ListQuoteIdSchema.optional(),
  customer_id: ListQuoteCustomerIdSchema.optional(),
  subscription_id: ListQuoteSubscriptionIdSchema.optional(),
  status: ListQuoteStatusSchema.optional(),
  date: ListQuoteDateSchema.optional(),
  updated_at: ListQuoteUpdatedAtSchema.optional(),
  sort_by: ListQuoteSortBySchema.optional(),
});
export { ListQuoteBodySchema };
export type ListQuoteBody = z.infer<typeof ListQuoteBodySchema>;

//Quote.quoteLineGroupsForQuote

const QuoteLineGroupsForQuoteQuoteBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
});
export { QuoteLineGroupsForQuoteQuoteBodySchema };
export type QuoteLineGroupsForQuoteQuoteBody = z.infer<
  typeof QuoteLineGroupsForQuoteQuoteBodySchema
>;

//Quote.convert

const ConvertQuoteSubscriptionSchema = z.object({
  id: z.string().max(50).optional(),
  auto_collection: z.enum(['on', 'off']).optional(),
  po_number: z.string().max(100).optional(),
  auto_close_invoices: z.boolean().optional(),
});
const ConvertQuoteBodySchema = z.looseObject({
  invoice_date: z.number().int().optional(),
  invoice_immediately: z.boolean().optional(),
  create_pending_invoices: z.boolean().optional(),
  first_invoice_pending: z.boolean().default(false).optional(),
  subscription: ConvertQuoteSubscriptionSchema.optional(),
});
export { ConvertQuoteBodySchema };
export type ConvertQuoteBody = z.infer<typeof ConvertQuoteBodySchema>;

//Quote.updateStatus

const UpdateStatusQuoteBodySchema = z.looseObject({
  status: z.enum([
    'open',
    'accepted',
    'declined',
    'proposed',
    'voided',
    'closed',
  ]),
  comment: z.string().max(300).optional(),
});
export { UpdateStatusQuoteBodySchema };
export type UpdateStatusQuoteBody = z.infer<typeof UpdateStatusQuoteBodySchema>;

//Quote.extendExpiryDate

const ExtendExpiryDateQuoteBodySchema = z.looseObject({
  valid_till: z.number().int(),
});
export { ExtendExpiryDateQuoteBodySchema };
export type ExtendExpiryDateQuoteBody = z.infer<
  typeof ExtendExpiryDateQuoteBodySchema
>;

//Quote.delete

const DeleteQuoteBodySchema = z.looseObject({
  comment: z.string().max(300).optional(),
});
export { DeleteQuoteBodySchema };
export type DeleteQuoteBody = z.infer<typeof DeleteQuoteBodySchema>;

//Quote.pdf

const PdfQuoteBodySchema = z.looseObject({
  consolidated_view: z.boolean().default(false).optional(),
  disposition_type: z.enum(['attachment', 'inline']).optional(),
});
export { PdfQuoteBodySchema };
export type PdfQuoteBody = z.infer<typeof PdfQuoteBodySchema>;

//Quote.updateSignatureStatus

const UpdateSignatureStatusQuoteCpqQuoteSignatureSchema = z.object({
  status: z
    .enum(['draft', 'active', 'signed', 'expired', 'cancelled', 'declined'])
    .optional(),
});
const UpdateSignatureStatusQuoteBodySchema = z.looseObject({
  cpq_quote_signature:
    UpdateSignatureStatusQuoteCpqQuoteSignatureSchema.optional(),
});
export { UpdateSignatureStatusQuoteBodySchema };
export type UpdateSignatureStatusQuoteBody = z.infer<
  typeof UpdateSignatureStatusQuoteBodySchema
>;
