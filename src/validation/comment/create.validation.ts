// Generated Zod validator: Comment.create
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const createCommentBodySchema = z.looseObject({
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
export { createCommentBodySchema };
