// Generated Zod schemas: Dispute
// Actions: list
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//Dispute.list

const ListDisputeIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ListDisputeStatusSchema = z.object({
  is: z
    .enum([
      'initiated',
      'funds_withdrawn',
      'in_review',
      'cancelled',
      'lost',
      'won',
    ])
    .optional(),
  is_not: z
    .enum([
      'initiated',
      'funds_withdrawn',
      'in_review',
      'cancelled',
      'lost',
      'won',
    ])
    .optional(),
  in: z
    .enum([
      'initiated',
      'funds_withdrawn',
      'in_review',
      'cancelled',
      'lost',
      'won',
    ])
    .optional(),
  not_in: z
    .enum([
      'initiated',
      'funds_withdrawn',
      'in_review',
      'cancelled',
      'lost',
      'won',
    ])
    .optional(),
});
const ListDisputeTypeSchema = z.object({
  is: z.enum(['chargeback', 'inquiry']).optional(),
  is_not: z.enum(['chargeback', 'inquiry']).optional(),
  in: z.enum(['chargeback', 'inquiry']).optional(),
  not_in: z.enum(['chargeback', 'inquiry']).optional(),
});
const ListDisputeCustomerIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ListDisputeTransactionIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ListDisputeAmountSchema = z.object({
  is: z.string().regex(RegExp('^-?\\d+$')).optional(),
  is_not: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  lte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gt: z.string().regex(RegExp('^-?\\d+$')).optional(),
  gte: z.string().regex(RegExp('^-?\\d+$')).optional(),
  between: z.string().regex(RegExp('^\\[-?\\d+,-?\\d+\\]$')).optional(),
});
const ListDisputeCreatedAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const ListDisputeBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  id: ListDisputeIdSchema.optional(),
  status: ListDisputeStatusSchema.optional(),
  type: ListDisputeTypeSchema.optional(),
  customer_id: ListDisputeCustomerIdSchema.optional(),
  transaction_id: ListDisputeTransactionIdSchema.optional(),
  amount: ListDisputeAmountSchema.optional(),
  created_at: ListDisputeCreatedAtSchema.optional(),
});
export { ListDisputeBodySchema };
export type ListDisputeBody = z.infer<typeof ListDisputeBodySchema>;
