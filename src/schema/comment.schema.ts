// Generated Zod schemas: Comment
// Actions: create, list
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//Comment.create

const CreateCommentBodySchema = z.looseObject({
  entity_type: z.enum([
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
  ]),
  entity_id: z.string().max(100),
  notes: z.string().max(1000),
  added_by: z.string().max(100).optional(),
});
export { CreateCommentBodySchema };
export type CreateCommentBody = z.infer<typeof CreateCommentBodySchema>;

//Comment.list

const ListCommentCreatedAtSchema = z.object({
  after: z.string().regex(RegExp('^d{10}$')).optional(),
  before: z.string().regex(RegExp('^d{10}$')).optional(),
  on: z.string().regex(RegExp('^d{10}$')).optional(),
  between: z.string().regex(RegExp('^[d{10},d{10}]$')).optional(),
});
const ListCommentSortBySchema = z.looseObject({
  asc: z.enum(['created_at']).optional(),
  desc: z.enum(['created_at']).optional(),
});
const ListCommentBodySchema = z.looseObject({
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
  created_at: ListCommentCreatedAtSchema.optional(),
  sort_by: ListCommentSortBySchema.optional(),
});
export { ListCommentBodySchema };
export type ListCommentBody = z.infer<typeof ListCommentBodySchema>;
