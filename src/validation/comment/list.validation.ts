// Generated Zod validator: Comment.list
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const listCommentCreatedAtSchema = z.object({
  after: z.string().regex(RegExp('^d{10}$')).optional(),
  before: z.string().regex(RegExp('^d{10}$')).optional(),
  on: z.string().regex(RegExp('^d{10}$')).optional(),
  between: z.string().regex(RegExp('^[d{10},d{10}]$')).optional(),
});
const listCommentSortBySchema = z.looseObject({
  asc: z.enum(['created_at']).optional(),
  desc: z.enum(['created_at']).optional(),
});
const listCommentBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  entity_type: z
    .enum([
      'customer',
      'subscription',
      'invoice',
      'quote',
      'credit_note',
      'transaction',
      'plan',
      'addon',
      'coupon',
      'order',
      'business_entity',
      'item_family',
      'item',
      'item_price',
      'price_variant',
    ])
    .optional(),
  entity_id: z.string().max(100).optional(),
  created_at: listCommentCreatedAtSchema.optional(),
  sort_by: listCommentSortBySchema.optional(),
});
export { listCommentBodySchema };
