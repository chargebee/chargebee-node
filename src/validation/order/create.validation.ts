// Generated Zod validator: Order.create
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const createOrderBodySchema = z.looseObject({
  id: z.string().max(40).optional(),
  invoice_id: z.string().max(50),
  status: z
    .enum(['new', 'processing', 'complete', 'cancelled', 'voided'])
    .optional(),
  reference_id: z.string().max(50).optional(),
  fulfillment_status: z.string().max(50).optional(),
  note: z.string().max(600).optional(),
  tracking_id: z.string().max(50).optional(),
  tracking_url: z.string().max(255).optional(),
  batch_id: z.string().max(50).optional(),
});
export { createOrderBodySchema };
