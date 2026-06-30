// Generated Zod schemas: PricingPageSession
// Actions: createForNewSubscription, createForExistingSubscription
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//PricingPageSession.createForNewSubscription

const CreateForNewSubscriptionPricingPageSessionCustomSchema = z.looseObject(
  {},
);
const CreateForNewSubscriptionPricingPageSessionPricingPageSchema = z.object({
  id: z.string().max(50),
});
const CreateForNewSubscriptionPricingPageSessionSubscriptionSchema =
  z.looseObject({
    id: z.string().max(50).optional(),
  });
const CreateForNewSubscriptionPricingPageSessionCustomerSchema = z.looseObject({
  id: z.string().max(50).optional(),
  email: z.string().email().max(70).optional(),
  first_name: z.string().max(150).optional(),
  last_name: z.string().max(150).optional(),
  company: z.string().max(250).optional(),
  phone: z.string().max(50).optional(),
  locale: z.string().max(50).optional(),
});
const CreateForNewSubscriptionPricingPageSessionBillingAddressSchema = z.object(
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
const CreateForNewSubscriptionPricingPageSessionShippingAddressSchema =
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
const CreateForNewSubscriptionPricingPageSessionContractTermSchema = z.object({
  action_at_term_end: z
    .enum(['renew', 'evergreen', 'cancel', 'renew_once'])
    .optional(),
  cancellation_cutoff_period: z.number().int().optional(),
});
const CreateForNewSubscriptionPricingPageSessionDiscountsSchema = z.object({
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
const CreateForNewSubscriptionPricingPageSessionBodySchema = z.looseObject({
  redirect_url: z.string().max(250).optional(),
  business_entity_id: z.string().max(50).optional(),
  auto_select_local_currency: z.boolean().default(false).optional(),
  custom: CreateForNewSubscriptionPricingPageSessionCustomSchema.optional(),
  pricing_page:
    CreateForNewSubscriptionPricingPageSessionPricingPageSchema.optional(),
  subscription:
    CreateForNewSubscriptionPricingPageSessionSubscriptionSchema.optional(),
  customer: CreateForNewSubscriptionPricingPageSessionCustomerSchema.optional(),
  billing_address:
    CreateForNewSubscriptionPricingPageSessionBillingAddressSchema.optional(),
  shipping_address:
    CreateForNewSubscriptionPricingPageSessionShippingAddressSchema.optional(),
  contract_term:
    CreateForNewSubscriptionPricingPageSessionContractTermSchema.optional(),
  discounts:
    CreateForNewSubscriptionPricingPageSessionDiscountsSchema.optional(),
});
export { CreateForNewSubscriptionPricingPageSessionBodySchema };
export type CreateForNewSubscriptionPricingPageSessionBody = z.infer<
  typeof CreateForNewSubscriptionPricingPageSessionBodySchema
>;

//PricingPageSession.createForExistingSubscription

const CreateForExistingSubscriptionPricingPageSessionCustomSchema =
  z.looseObject({});
const CreateForExistingSubscriptionPricingPageSessionPricingPageSchema =
  z.object({
    id: z.string().max(50).optional(),
  });
const CreateForExistingSubscriptionPricingPageSessionSubscriptionSchema =
  z.looseObject({
    id: z.string().max(50),
  });
const CreateForExistingSubscriptionPricingPageSessionContractTermSchema =
  z.object({
    action_at_term_end: z
      .enum(['renew', 'evergreen', 'cancel', 'renew_once'])
      .optional(),
    cancellation_cutoff_period: z.number().int().optional(),
  });
const CreateForExistingSubscriptionPricingPageSessionDiscountsSchema = z.object(
  {
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
  },
);
const CreateForExistingSubscriptionPricingPageSessionBodySchema = z.looseObject(
  {
    redirect_url: z.string().max(250).optional(),
    custom:
      CreateForExistingSubscriptionPricingPageSessionCustomSchema.optional(),
    pricing_page:
      CreateForExistingSubscriptionPricingPageSessionPricingPageSchema.optional(),
    subscription:
      CreateForExistingSubscriptionPricingPageSessionSubscriptionSchema.optional(),
    contract_term:
      CreateForExistingSubscriptionPricingPageSessionContractTermSchema.optional(),
    discounts:
      CreateForExistingSubscriptionPricingPageSessionDiscountsSchema.optional(),
  },
);
export { CreateForExistingSubscriptionPricingPageSessionBodySchema };
export type CreateForExistingSubscriptionPricingPageSessionBody = z.infer<
  typeof CreateForExistingSubscriptionPricingPageSessionBodySchema
>;
