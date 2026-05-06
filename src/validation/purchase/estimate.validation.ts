// Generated Zod validator: Purchase.estimate
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const estimatePurchaseCustomerSchema = z.object({
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
const estimatePurchaseBillingAddressSchema = z.object({
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
const estimatePurchasePurchaseItemsSchema = z.object({
  index: z.array(z.number().int().min(0).optional()),
  item_price_id: z.array(z.string().max(100).optional()),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  unit_amount: z.array(z.number().int().min(0).optional()).optional(),
  unit_amount_in_decimal: z.array(z.string().max(39).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
});
const estimatePurchaseItemTiersSchema = z.object({
  index: z.array(z.number().int().min(0).optional()),
  item_price_id: z.array(z.string().max(100).optional()).optional(),
  starting_unit: z.array(z.number().int().min(1).optional()).optional(),
  ending_unit: z.array(z.number().int().optional()).optional(),
  price: z.array(z.number().int().min(0).optional()).optional(),
  starting_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  ending_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  price_in_decimal: z.array(z.string().max(39).optional()).optional(),
});
const estimatePurchaseShippingAddressesSchema = z.object({
  first_name: z.array(z.string().max(150).optional()).optional(),
  last_name: z.array(z.string().max(150).optional()).optional(),
  email: z.array(z.string().email().max(70).optional()).optional(),
  company: z.array(z.string().max(250).optional()).optional(),
  phone: z.array(z.string().max(50).optional()).optional(),
  line1: z.array(z.string().max(150).optional()).optional(),
  line2: z.array(z.string().max(150).optional()).optional(),
  line3: z.array(z.string().max(150).optional()).optional(),
  city: z.array(z.string().max(50).optional()).optional(),
  state: z.array(z.string().max(50).optional()).optional(),
  state_code: z.array(z.string().max(50).optional()).optional(),
  country: z.array(z.string().max(50).optional()).optional(),
  zip: z.array(z.string().max(20).optional()).optional(),
  validation_status: z
    .array(
      z
        .enum(['not_validated', 'valid', 'partially_valid', 'invalid'])
        .optional(),
    )
    .optional(),
});
const estimatePurchaseDiscountsSchema = z.object({
  index: z.array(z.number().int().min(0).optional()).optional(),
  coupon_id: z.array(z.string().max(100).optional()).optional(),
  percentage: z.array(z.number().min(0.01).max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  amount: z.array(z.number().int().min(0).optional()).optional(),
  included_in_mrr: z.array(z.boolean().optional()).optional(),
});
const estimatePurchaseSubscriptionInfoSchema = z.object({
  index: z.array(z.number().int().min(0).optional()),
  subscription_id: z.array(z.string().max(50).optional()).optional(),
  billing_cycles: z.array(z.number().int().min(0).optional()).optional(),
  contract_term_billing_cycle_on_renewal: z
    .array(z.number().int().min(1).max(100).optional())
    .optional(),
});
const estimatePurchaseContractTermsSchema = z.object({
  index: z.array(z.number().int().min(0).optional()),
  action_at_term_end: z
    .array(z.enum(['renew', 'evergreen', 'cancel', 'renew_once']).optional())
    .optional(),
  cancellation_cutoff_period: z.array(z.number().int().optional()).optional(),
});
const estimatePurchaseBodySchema = z.looseObject({
  client_profile_id: z.string().max(50).optional(),
  customer_id: z.string().max(50).optional(),
  customer: estimatePurchaseCustomerSchema.optional(),
  billing_address: estimatePurchaseBillingAddressSchema.optional(),
  purchase_items: estimatePurchasePurchaseItemsSchema.optional(),
  item_tiers: estimatePurchaseItemTiersSchema.optional(),
  shipping_addresses: estimatePurchaseShippingAddressesSchema.optional(),
  discounts: estimatePurchaseDiscountsSchema.optional(),
  subscription_info: estimatePurchaseSubscriptionInfoSchema.optional(),
  contract_terms: estimatePurchaseContractTermsSchema.optional(),
});
export { estimatePurchaseBodySchema };
