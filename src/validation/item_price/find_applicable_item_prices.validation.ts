// Generated Zod validator: ItemPrice.findApplicableItemPrices
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const findApplicableItemPricesItemPriceSortBySchema = z.looseObject({
  asc: z.enum(['name', 'id', 'updated_at']).optional(),
  desc: z.enum(['name', 'id', 'updated_at']).optional(),
});
const findApplicableItemPricesItemPriceBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  item_id: z.string().max(100).optional(),
  sort_by: findApplicableItemPricesItemPriceSortBySchema.optional(),
});
export { findApplicableItemPricesItemPriceBodySchema };
