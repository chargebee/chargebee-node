// Generated Zod schemas: PromotionalCredit
// Actions: add, deduct, set, list
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//PromotionalCredit.add

const AddPromotionalCreditBodySchema = z.looseObject({
  customer_id: z.string().max(50),
  amount: z.number().int().min(0).optional(),
  amount_in_decimal: z.string().max(33).optional(),
  currency_code: z.string().max(3).optional(),
  description: z.string().max(250),
  credit_type: z
    .enum(['loyalty_credits', 'referral_rewards', 'general'])
    .optional(),
  reference: z.string().max(500).optional(),
});
export { AddPromotionalCreditBodySchema };
export type AddPromotionalCreditBody = z.infer<
  typeof AddPromotionalCreditBodySchema
>;

//PromotionalCredit.deduct

const DeductPromotionalCreditBodySchema = z.looseObject({
  customer_id: z.string().max(50),
  amount: z.number().int().min(0).optional(),
  amount_in_decimal: z.string().max(33).optional(),
  currency_code: z.string().max(3).optional(),
  description: z.string().max(250),
  credit_type: z
    .enum(['loyalty_credits', 'referral_rewards', 'general'])
    .optional(),
  reference: z.string().max(500).optional(),
});
export { DeductPromotionalCreditBodySchema };
export type DeductPromotionalCreditBody = z.infer<
  typeof DeductPromotionalCreditBodySchema
>;

//PromotionalCredit.set

const SetPromotionalCreditBodySchema = z.looseObject({
  customer_id: z.string().max(50),
  amount: z.number().int().min(0).optional(),
  amount_in_decimal: z.string().max(33).optional(),
  currency_code: z.string().max(3).optional(),
  description: z.string().max(250),
  credit_type: z
    .enum(['loyalty_credits', 'referral_rewards', 'general'])
    .optional(),
  reference: z.string().max(500).optional(),
});
export { SetPromotionalCreditBodySchema };
export type SetPromotionalCreditBody = z.infer<
  typeof SetPromotionalCreditBodySchema
>;

//PromotionalCredit.list

const ListPromotionalCreditIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const ListPromotionalCreditCreatedAtSchema = z.object({
  after: z.string().regex(RegExp('^d{10}$')).optional(),
  before: z.string().regex(RegExp('^d{10}$')).optional(),
  on: z.string().regex(RegExp('^d{10}$')).optional(),
  between: z.string().regex(RegExp('^[d{10},d{10}]$')).optional(),
});
const ListPromotionalCreditTypeSchema = z.object({
  is: z.enum(['increment', 'decrement']).optional(),
  is_not: z.enum(['increment', 'decrement']).optional(),
  in: z.enum(['increment', 'decrement']).optional(),
  not_in: z.enum(['increment', 'decrement']).optional(),
});
const ListPromotionalCreditCustomerIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const ListPromotionalCreditBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  id: ListPromotionalCreditIdSchema.optional(),
  created_at: ListPromotionalCreditCreatedAtSchema.optional(),
  type: ListPromotionalCreditTypeSchema.optional(),
  customer_id: ListPromotionalCreditCustomerIdSchema.optional(),
});
export { ListPromotionalCreditBodySchema };
export type ListPromotionalCreditBody = z.infer<
  typeof ListPromotionalCreditBodySchema
>;
