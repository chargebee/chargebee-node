// Generated Zod schemas: PaymentScheduleScheme
// Actions: create, list
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//PaymentScheduleScheme.create

const CreatePaymentScheduleSchemeFlexibleSchedulesSchema = z.object({
  period: z.array(z.number().int().min(0).max(52).optional()).optional(),
  amount_percentage: z.array(z.number().min(1).max(100).optional()).optional(),
});
const CreatePaymentScheduleSchemeBodySchema = z.looseObject({
  number_of_schedules: z.number().int().min(1).max(52),
  period_unit: z.enum(['day', 'week', 'month']),
  period: z.number().int().min(1).max(30).optional(),
  name: z.string().max(100),
  flexible_schedules:
    CreatePaymentScheduleSchemeFlexibleSchedulesSchema.optional(),
});
export { CreatePaymentScheduleSchemeBodySchema };
export type CreatePaymentScheduleSchemeBody = z.infer<
  typeof CreatePaymentScheduleSchemeBodySchema
>;

//PaymentScheduleScheme.list

const ListPaymentScheduleSchemeIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ListPaymentScheduleSchemeUpdatedAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const ListPaymentScheduleSchemeBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  id: ListPaymentScheduleSchemeIdSchema.optional(),
  updated_at: ListPaymentScheduleSchemeUpdatedAtSchema.optional(),
});
export { ListPaymentScheduleSchemeBodySchema };
export type ListPaymentScheduleSchemeBody = z.infer<
  typeof ListPaymentScheduleSchemeBodySchema
>;
