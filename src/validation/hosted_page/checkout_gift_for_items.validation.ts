// Generated Zod validator: HostedPage.checkoutGiftForItems
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const checkoutGiftForItemsHostedPageGifterSchema = z.object({
  customer_id: z.string().max(50).optional(),
});
const checkoutGiftForItemsHostedPageSubscriptionItemsSchema = z.object({
  item_price_id: z.array(z.string().max(100).optional()).optional(),
  quantity: z.array(z.number().int().min(1).optional()).optional(),
  quantity_in_decimal: z.array(z.string().max(33).optional()).optional(),
  unit_price: z.array(z.number().int().min(0).optional()).optional(),
  unit_price_in_decimal: z.array(z.string().max(39).optional()).optional(),
});
const checkoutGiftForItemsHostedPageItemTiersSchema = z.object({
  item_price_id: z.array(z.string().max(100).optional()).optional(),
  starting_unit: z.array(z.number().int().min(1).optional()).optional(),
  ending_unit: z.array(z.number().int().optional()).optional(),
  price: z.array(z.number().int().min(0).optional()).optional(),
  starting_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  ending_unit_in_decimal: z.array(z.string().max(33).optional()).optional(),
  price_in_decimal: z.array(z.string().max(39).optional()).optional(),
});
const checkoutGiftForItemsHostedPageBodySchema = z.looseObject({
  business_entity_id: z.string().max(50).optional(),
  redirect_url: z.string().max(250).optional(),
  coupon_ids: z.array(z.string().max(100).optional()).optional(),
  gifter: checkoutGiftForItemsHostedPageGifterSchema.optional(),
  subscription_items:
    checkoutGiftForItemsHostedPageSubscriptionItemsSchema.optional(),
  item_tiers: checkoutGiftForItemsHostedPageItemTiersSchema.optional(),
});
export { checkoutGiftForItemsHostedPageBodySchema };
