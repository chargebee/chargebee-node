// Generated Zod schemas: DifferentialPrice
// Actions: create, retrieve, update, delete, list
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//DifferentialPrice.create

const CreateDifferentialPriceParentPeriodsItemSchema = z.object({
  period_unit: z.enum(['day', 'week', 'month', 'year']),
  period: z.array(z.string().optional()).optional(),
});
const CreateDifferentialPriceParentPeriodsSchema = z.object({
  period_unit: z.array(z.enum(['day', 'week', 'month', 'year']).optional()),
  period: z.array(z.array(z.string().optional()).optional()).optional(),
});
const CreateDifferentialPriceTiersItemSchema = z.object({
  starting_unit: z.number().int().min(1).optional(),
  ending_unit: z.number().int().optional(),
  price: z.number().int().min(0).optional(),
  starting_unit_in_decimal: z.string().max(33).optional(),
  ending_unit_in_decimal: z.string().max(33).optional(),
  price_in_decimal: z.string().max(39).optional(),
  pricing_type: z.enum(['per_unit', 'flat_fee', 'package']).optional(),
  package_size: z.number().int().min(1).optional(),
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
  parent_periods: z
    .union([
      z.array(CreateDifferentialPriceParentPeriodsItemSchema.optional()),
      CreateDifferentialPriceParentPeriodsSchema,
    ])
    .optional(),
  tiers: z
    .union([
      z.array(CreateDifferentialPriceTiersItemSchema.optional()),
      CreateDifferentialPriceTiersSchema,
    ])
    .optional(),
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

const UpdateDifferentialPriceParentPeriodsItemSchema = z.object({
  period_unit: z.enum(['day', 'week', 'month', 'year']),
  period: z.array(z.string().optional()).optional(),
});
const UpdateDifferentialPriceParentPeriodsSchema = z.object({
  period_unit: z.array(z.enum(['day', 'week', 'month', 'year']).optional()),
  period: z.array(z.array(z.string().optional()).optional()).optional(),
});
const UpdateDifferentialPriceTiersItemSchema = z.object({
  starting_unit: z.number().int().min(1).optional(),
  ending_unit: z.number().int().optional(),
  price: z.number().int().min(0).optional(),
  starting_unit_in_decimal: z.string().max(33).optional(),
  ending_unit_in_decimal: z.string().max(33).optional(),
  price_in_decimal: z.string().max(39).optional(),
  pricing_type: z.enum(['per_unit', 'flat_fee', 'package']).optional(),
  package_size: z.number().int().min(1).optional(),
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
  parent_periods: z
    .union([
      z.array(UpdateDifferentialPriceParentPeriodsItemSchema.optional()),
      UpdateDifferentialPriceParentPeriodsSchema,
    ])
    .optional(),
  tiers: z
    .union([
      z.array(UpdateDifferentialPriceTiersItemSchema.optional()),
      UpdateDifferentialPriceTiersSchema,
    ])
    .optional(),
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

//DifferentialPrice.list

const ListDifferentialPriceItemPriceIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
  not_in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
});
const ListDifferentialPriceItemIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
  not_in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
});
const ListDifferentialPriceIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
  not_in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
});
const ListDifferentialPriceParentItemIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
  not_in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
});
const ListDifferentialPriceBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  item_price_id: ListDifferentialPriceItemPriceIdSchema.optional(),
  item_id: ListDifferentialPriceItemIdSchema.optional(),
  id: ListDifferentialPriceIdSchema.optional(),
  parent_item_id: ListDifferentialPriceParentItemIdSchema.optional(),
});
export { ListDifferentialPriceBodySchema };
export type ListDifferentialPriceBody = z.infer<
  typeof ListDifferentialPriceBodySchema
>;
