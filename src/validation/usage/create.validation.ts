// Generated Zod validator: Usage.create
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const createUsageBodySchema = z.looseObject({
  id: z.string().max(100).optional(),
  item_price_id: z.string().max(100),
  quantity: z.string().max(40),
  usage_date: z.number().int(),
  dedupe_option: z.enum(['skip', 'update_existing']).optional(),
  note: z.string().max(500).optional(),
});
export { createUsageBodySchema };
