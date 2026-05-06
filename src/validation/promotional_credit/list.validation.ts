// Generated Zod validator: PromotionalCredit.list
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const listPromotionalCreditIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const listPromotionalCreditCreatedAtSchema = z.object({
  after: z.string().regex(RegExp('^d{10}$')).optional(),
  before: z.string().regex(RegExp('^d{10}$')).optional(),
  on: z.string().regex(RegExp('^d{10}$')).optional(),
  between: z.string().regex(RegExp('^[d{10},d{10}]$')).optional(),
});
const listPromotionalCreditTypeSchema = z.object({
  is: z.enum(['increment', 'decrement']).optional(),
  is_not: z.enum(['increment', 'decrement']).optional(),
  in: z.enum(['increment', 'decrement']).optional(),
  not_in: z.enum(['increment', 'decrement']).optional(),
});
const listPromotionalCreditCustomerIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const listPromotionalCreditBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  id: listPromotionalCreditIdSchema.optional(),
  created_at: listPromotionalCreditCreatedAtSchema.optional(),
  type: listPromotionalCreditTypeSchema.optional(),
  customer_id: listPromotionalCreditCustomerIdSchema.optional(),
});
export { listPromotionalCreditBodySchema };
