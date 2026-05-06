// Generated Zod validator: PricingPageSession.createForNewSubscription
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const createForNewSubscriptionPricingPageSessionCustomSchema = z.looseObject(
  {},
);
const createForNewSubscriptionPricingPageSessionPricingPageSchema = z.object({
  id: z.string().max(50),
});
const createForNewSubscriptionPricingPageSessionSubscriptionSchema =
  z.looseObject({
    id: z.string().max(50).optional(),
  });
const createForNewSubscriptionPricingPageSessionCustomerSchema = z.looseObject({
  id: z.string().max(50).optional(),
  email: z.string().email().max(70).optional(),
  first_name: z.string().max(150).optional(),
  last_name: z.string().max(150).optional(),
  company: z.string().max(250).optional(),
  phone: z.string().max(50).optional(),
  locale: z.string().max(50).optional(),
});
const createForNewSubscriptionPricingPageSessionBillingAddressSchema = z.object(
  {
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
  },
);
const createForNewSubscriptionPricingPageSessionShippingAddressSchema =
  z.object({
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
const createForNewSubscriptionPricingPageSessionContractTermSchema = z.object({
  action_at_term_end: z
    .enum(['renew', 'evergreen', 'cancel', 'renew_once'])
    .optional(),
  cancellation_cutoff_period: z.number().int().optional(),
});
const createForNewSubscriptionPricingPageSessionDiscountsSchema = z.object({
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
  label: z.array(z.string().max(100).optional()).optional(),
});
const createForNewSubscriptionPricingPageSessionBodySchema = z.looseObject({
  redirect_url: z.string().max(250).optional(),
  business_entity_id: z.string().max(50).optional(),
  auto_select_local_currency: z.boolean().default(false).optional(),
  custom: createForNewSubscriptionPricingPageSessionCustomSchema.optional(),
  pricing_page:
    createForNewSubscriptionPricingPageSessionPricingPageSchema.optional(),
  subscription:
    createForNewSubscriptionPricingPageSessionSubscriptionSchema.optional(),
  customer: createForNewSubscriptionPricingPageSessionCustomerSchema.optional(),
  billing_address:
    createForNewSubscriptionPricingPageSessionBillingAddressSchema.optional(),
  shipping_address:
    createForNewSubscriptionPricingPageSessionShippingAddressSchema.optional(),
  contract_term:
    createForNewSubscriptionPricingPageSessionContractTermSchema.optional(),
  discounts:
    createForNewSubscriptionPricingPageSessionDiscountsSchema.optional(),
});
export { createForNewSubscriptionPricingPageSessionBodySchema };
