// Generated Zod validator: BusinessEntity.getTransfers
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const getTransfersBusinessEntityResourceTypeSchema = z.object({
  is: z.string().min(1).optional(),
});
const getTransfersBusinessEntityResourceIdSchema = z.object({
  is: z.string().min(1).optional(),
});
const getTransfersBusinessEntityActiveResourceIdSchema = z.object({
  is: z.string().min(1).optional(),
});
const getTransfersBusinessEntityCreatedAtSchema = z.object({
  after: z.string().regex(RegExp('^d{10}$')).optional(),
  before: z.string().regex(RegExp('^d{10}$')).optional(),
  on: z.string().regex(RegExp('^d{10}$')).optional(),
  between: z.string().regex(RegExp('^[d{10},d{10}]$')).optional(),
});
const getTransfersBusinessEntitySortBySchema = z.looseObject({
  asc: z.enum(['created_at']).optional(),
  desc: z.enum(['created_at']).optional(),
});
const getTransfersBusinessEntityBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  resource_type: getTransfersBusinessEntityResourceTypeSchema.optional(),
  resource_id: getTransfersBusinessEntityResourceIdSchema.optional(),
  active_resource_id:
    getTransfersBusinessEntityActiveResourceIdSchema.optional(),
  created_at: getTransfersBusinessEntityCreatedAtSchema.optional(),
  sort_by: getTransfersBusinessEntitySortBySchema.optional(),
});
export { getTransfersBusinessEntityBodySchema };
