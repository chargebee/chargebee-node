// Generated Zod validator: DifferentialPrice.update
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const updateDifferentialPriceParentPeriodsSchema = z.object({
  period_unit: z.array(z.enum(['day', 'week', 'month', 'year']).optional()),
  period: z.array(z.array(z.string().optional()).optional()).optional(),
});
const updateDifferentialPriceTiersSchema = z.object({
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
const updateDifferentialPriceBodySchema = z.looseObject({
  item_price_id: z.string().max(100),
  price: z.number().int().min(0).optional(),
  price_in_decimal: z.string().max(39).optional(),
  parent_periods: updateDifferentialPriceParentPeriodsSchema.optional(),
  tiers: updateDifferentialPriceTiersSchema.optional(),
});
export { updateDifferentialPriceBodySchema };
