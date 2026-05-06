// Generated Zod validator: PricingPageSession.createForExistingSubscription
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const createForExistingSubscriptionPricingPageSessionCustomSchema =
  z.looseObject({});
const createForExistingSubscriptionPricingPageSessionPricingPageSchema =
  z.object({
    id: z.string().max(50).optional(),
  });
const createForExistingSubscriptionPricingPageSessionSubscriptionSchema =
  z.looseObject({
    id: z.string().max(50),
  });
const createForExistingSubscriptionPricingPageSessionContractTermSchema =
  z.object({
    action_at_term_end: z
      .enum(['renew', 'evergreen', 'cancel', 'renew_once'])
      .optional(),
    cancellation_cutoff_period: z.number().int().optional(),
  });
const createForExistingSubscriptionPricingPageSessionDiscountsSchema = z.object(
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
const createForExistingSubscriptionPricingPageSessionBodySchema = z.looseObject(
  {
    redirect_url: z.string().max(250).optional(),
    custom:
      createForExistingSubscriptionPricingPageSessionCustomSchema.optional(),
    pricing_page:
      createForExistingSubscriptionPricingPageSessionPricingPageSchema.optional(),
    subscription:
      createForExistingSubscriptionPricingPageSessionSubscriptionSchema.optional(),
    contract_term:
      createForExistingSubscriptionPricingPageSessionContractTermSchema.optional(),
    discounts:
      createForExistingSubscriptionPricingPageSessionDiscountsSchema.optional(),
  },
);
export { createForExistingSubscriptionPricingPageSessionBodySchema };
