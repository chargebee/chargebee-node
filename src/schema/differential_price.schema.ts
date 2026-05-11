// Generated Zod schemas: DifferentialPrice
// Actions: create, retrieve, update, delete
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//DifferentialPrice.create

const CreateDifferentialPriceParentPeriodsSchema = z.object({
  period_unit: z.array(z.enum(['day', 'week', 'month', 'year']).optional()),
  period: z.array(z.array(z.string().optional()).optional()).optional(),
});
const CreateDifferentialPriceTiersSchema = z.object({
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
const CreateDifferentialPriceBodySchema = z.looseObject({
  parent_item_id: z.string().max(100),
  price: z.number().int().min(0).optional(),
  price_in_decimal: z.string().max(39).optional(),
  business_entity_id: z.string().max(50).optional(),
  parent_periods: CreateDifferentialPriceParentPeriodsSchema.optional(),
  tiers: CreateDifferentialPriceTiersSchema.optional(),
});
export { CreateDifferentialPriceBodySchema };
export type CreateDifferentialPriceBody = z.infer<
  typeof CreateDifferentialPriceBodySchema
>;

//DifferentialPrice.retrieve

const RetrieveDifferentialPriceBodySchema = z.looseObject({
  item_price_id: z.string().max(100),
});
export { RetrieveDifferentialPriceBodySchema };
export type RetrieveDifferentialPriceBody = z.infer<
  typeof RetrieveDifferentialPriceBodySchema
>;

//DifferentialPrice.update

const UpdateDifferentialPriceParentPeriodsSchema = z.object({
  period_unit: z.array(z.enum(['day', 'week', 'month', 'year']).optional()),
  period: z.array(z.array(z.string().optional()).optional()).optional(),
});
const UpdateDifferentialPriceTiersSchema = z.object({
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
const UpdateDifferentialPriceBodySchema = z.looseObject({
  item_price_id: z.string().max(100),
  price: z.number().int().min(0).optional(),
  price_in_decimal: z.string().max(39).optional(),
  parent_periods: UpdateDifferentialPriceParentPeriodsSchema.optional(),
  tiers: UpdateDifferentialPriceTiersSchema.optional(),
});
export { UpdateDifferentialPriceBodySchema };
export type UpdateDifferentialPriceBody = z.infer<
  typeof UpdateDifferentialPriceBodySchema
>;

//DifferentialPrice.delete

const DeleteDifferentialPriceBodySchema = z.looseObject({
  item_price_id: z.string().max(100),
});
export { DeleteDifferentialPriceBodySchema };
export type DeleteDifferentialPriceBody = z.infer<
  typeof DeleteDifferentialPriceBodySchema
>;
