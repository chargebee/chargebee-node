// Generated Zod validator: HostedPage.checkoutGift
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const checkoutGiftHostedPageGifterSchema = z.object({
  customer_id: z.string().max(50).optional(),
});
const checkoutGiftHostedPageSubscriptionSchema = z.looseObject({
  plan_id: z.string().max(100),
  plan_quantity: z.number().int().min(1).optional(),
  plan_quantity_in_decimal: z.string().max(33).optional(),
  coupon: z.string().max(100).optional(),
});
const checkoutGiftHostedPageAddonsSchema = z.object({
  id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
});
const checkoutGiftHostedPageBodySchema = z.looseObject({
  redirect_url: z.string().max(250).optional(),
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  gifter: checkoutGiftHostedPageGifterSchema.optional(),
  subscription: checkoutGiftHostedPageSubscriptionSchema.optional(),
  addons: checkoutGiftHostedPageAddonsSchema.optional(),
});
export { checkoutGiftHostedPageBodySchema };
