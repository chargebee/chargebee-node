// Generated Zod schemas: BusinessEntity
// Actions: createTransfers, getTransfers
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//BusinessEntity.createTransfers

const CreateTransfersBusinessEntityBodySchema = z.looseObject({
  active_resource_ids: z.array(z.string().max(50).optional()),
  destination_business_entity_ids: z.array(z.string().max(50).optional()),
  source_business_entity_ids: z.array(z.string().max(50).optional()).optional(),
  resource_types: z.array(z.string().max(50).optional()),
  reason_codes: z.array(z.string().max(50).optional()),
});
export { CreateTransfersBusinessEntityBodySchema };
export type CreateTransfersBusinessEntityBody = z.infer<
  typeof CreateTransfersBusinessEntityBodySchema
>;

//BusinessEntity.getTransfers

const GetTransfersBusinessEntityResourceTypeSchema = z.object({
  is: z.string().min(1).optional(),
});
const GetTransfersBusinessEntityResourceIdSchema = z.object({
  is: z.string().min(1).optional(),
});
const GetTransfersBusinessEntityActiveResourceIdSchema = z.object({
  is: z.string().min(1).optional(),
});
const GetTransfersBusinessEntityCreatedAtSchema = z.object({
  after: z.string().regex(RegExp('^d{10}$')).optional(),
  before: z.string().regex(RegExp('^d{10}$')).optional(),
  on: z.string().regex(RegExp('^d{10}$')).optional(),
  between: z.string().regex(RegExp('^[d{10},d{10}]$')).optional(),
});
const GetTransfersBusinessEntitySortBySchema = z.looseObject({
  asc: z.enum(['created_at']).optional(),
  desc: z.enum(['created_at']).optional(),
});
const GetTransfersBusinessEntityBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  resource_type: GetTransfersBusinessEntityResourceTypeSchema.optional(),
  resource_id: GetTransfersBusinessEntityResourceIdSchema.optional(),
  active_resource_id:
    GetTransfersBusinessEntityActiveResourceIdSchema.optional(),
  created_at: GetTransfersBusinessEntityCreatedAtSchema.optional(),
  sort_by: GetTransfersBusinessEntitySortBySchema.optional(),
});
export { GetTransfersBusinessEntityBodySchema };
export type GetTransfersBusinessEntityBody = z.infer<
  typeof GetTransfersBusinessEntityBodySchema
>;
