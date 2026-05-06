// Generated Zod validator: ItemPrice.findApplicableItems
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const findApplicableItemsItemPriceSortBySchema = z.looseObject({
  asc: z.enum(['name', 'id', 'updated_at']).optional(),
  desc: z.enum(['name', 'id', 'updated_at']).optional(),
});
const findApplicableItemsItemPriceBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  sort_by: findApplicableItemsItemPriceSortBySchema.optional(),
});
export { findApplicableItemsItemPriceBodySchema };
