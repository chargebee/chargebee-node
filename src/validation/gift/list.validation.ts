// Generated Zod validator: Gift.list
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const listGiftStatusSchema = z.object({
  is: z
    .enum(['scheduled', 'unclaimed', 'claimed', 'cancelled', 'expired'])
    .optional(),
  is_not: z
    .enum(['scheduled', 'unclaimed', 'claimed', 'cancelled', 'expired'])
    .optional(),
  in: z
    .enum(['scheduled', 'unclaimed', 'claimed', 'cancelled', 'expired'])
    .optional(),
  not_in: z
    .enum(['scheduled', 'unclaimed', 'claimed', 'cancelled', 'expired'])
    .optional(),
});
const listGiftEmailSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const listGiftCustomerIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const listGiftGiftReceiverSchema = z.object({
  email: listGiftEmailSchema.optional(),
  customer_id: listGiftCustomerIdSchema.optional(),
});
const listGiftGifterSchema = z.object({
  customer_id: listGiftCustomerIdSchema.optional(),
});
const listGiftBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  status: listGiftStatusSchema.optional(),
  gift_receiver: listGiftGiftReceiverSchema.optional(),
  gifter: listGiftGifterSchema.optional(),
});
export { listGiftBodySchema };
