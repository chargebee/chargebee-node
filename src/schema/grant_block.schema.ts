// Generated Zod schemas: GrantBlock
// Actions: listGrantBlocks
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//GrantBlock.listGrantBlocks

const ListGrantBlocksGrantBlockSubscriptionIdSchema = z.object({
  is: z.string().min(1).optional(),
});
const ListGrantBlocksGrantBlockUnitIdSchema = z.object({
  is: z.string().min(1).optional(),
});
const ListGrantBlocksGrantBlockAccountTypeSchema = z.object({
  is: z.enum(['provisioned', 'overdraft']).optional(),
});
const ListGrantBlocksGrantBlockEffectiveFromSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const ListGrantBlocksGrantBlockExpiresAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const ListGrantBlocksGrantBlockCreatedAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const ListGrantBlocksGrantBlockSortBySchema = z.looseObject({
  asc: z.enum(['effective_from', 'expires_at', 'created_at']).optional(),
  desc: z.enum(['effective_from', 'expires_at', 'created_at']).optional(),
});
const ListGrantBlocksGrantBlockBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  subscription_id: ListGrantBlocksGrantBlockSubscriptionIdSchema,
  unit_id: ListGrantBlocksGrantBlockUnitIdSchema.optional(),
  account_type: ListGrantBlocksGrantBlockAccountTypeSchema.optional(),
  effective_from: ListGrantBlocksGrantBlockEffectiveFromSchema.optional(),
  expires_at: ListGrantBlocksGrantBlockExpiresAtSchema.optional(),
  created_at: ListGrantBlocksGrantBlockCreatedAtSchema.optional(),
  sort_by: ListGrantBlocksGrantBlockSortBySchema.optional(),
});
export { ListGrantBlocksGrantBlockBodySchema };
export type ListGrantBlocksGrantBlockBody = z.infer<
  typeof ListGrantBlocksGrantBlockBodySchema
>;
