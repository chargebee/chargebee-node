// Generated Zod schemas: PriceRamp
// Actions: create, update, list
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//PriceRamp.create

const CreatePriceRampRampIntervalsSchema = z.object({
  starting_billing_cycle: z.array(z.number().int().min(1).optional()),
  ending_billing_cycle: z.array(z.number().int().min(1).optional()).optional(),
  apply_catalog_price: z
    .array(z.boolean().default(false).optional())
    .optional(),
  price: z.array(z.number().int().min(0).optional()).optional(),
  price_in_decimal: z.array(z.string().max(39).optional()).optional(),
});
const CreatePriceRampBodySchema = z.looseObject({
  item_price_id: z.string().max(100),
  business_entity_id: z.string().max(50).optional(),
  ramp_intervals: CreatePriceRampRampIntervalsSchema.optional(),
});
export { CreatePriceRampBodySchema };
export type CreatePriceRampBody = z.infer<typeof CreatePriceRampBodySchema>;

//PriceRamp.update

const UpdatePriceRampRampIntervalsSchema = z.object({
  starting_billing_cycle: z.array(z.number().int().min(1).optional()),
  ending_billing_cycle: z.array(z.number().int().min(1).optional()).optional(),
  apply_catalog_price: z
    .array(z.boolean().default(false).optional())
    .optional(),
  price: z.array(z.number().int().min(0).optional()).optional(),
  price_in_decimal: z.array(z.string().max(39).optional()).optional(),
});
const UpdatePriceRampBodySchema = z.looseObject({
  status: z.enum(['active', 'archived']).optional(),
  ramp_intervals: UpdatePriceRampRampIntervalsSchema.optional(),
});
export { UpdatePriceRampBodySchema };
export type UpdatePriceRampBody = z.infer<typeof UpdatePriceRampBodySchema>;

//PriceRamp.list

const ListPriceRampIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ListPriceRampItemPriceIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ListPriceRampStatusSchema = z.object({
  is: z.enum(['active', 'archived']).optional(),
  is_not: z.enum(['active', 'archived']).optional(),
  in: z.enum(['active', 'archived']).optional(),
  not_in: z.enum(['active', 'archived']).optional(),
});
const ListPriceRampUpdatedAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const ListPriceRampBusinessEntityIdSchema = z.object({
  is_present: z.enum(['true', 'false']).optional(),
  is: z.string().min(1).optional(),
});
const ListPriceRampIncludeSiteLevelResourcesSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const ListPriceRampSortBySchema = z.looseObject({
  asc: z.enum(['id', 'status', 'updated_at']).optional(),
  desc: z.enum(['id', 'status', 'updated_at']).optional(),
});
const ListPriceRampBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  id: ListPriceRampIdSchema.optional(),
  item_price_id: ListPriceRampItemPriceIdSchema.optional(),
  status: ListPriceRampStatusSchema.optional(),
  updated_at: ListPriceRampUpdatedAtSchema.optional(),
  business_entity_id: ListPriceRampBusinessEntityIdSchema.optional(),
  include_site_level_resources:
    ListPriceRampIncludeSiteLevelResourcesSchema.optional(),
  sort_by: ListPriceRampSortBySchema.optional(),
});
export { ListPriceRampBodySchema };
export type ListPriceRampBody = z.infer<typeof ListPriceRampBodySchema>;
