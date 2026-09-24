// Generated Zod schemas: PaymentSchedule
// Actions: list
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//PaymentSchedule.list

const ListPaymentScheduleInvoiceIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ListPaymentScheduleIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ListPaymentScheduleUpdatedAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const ListPaymentScheduleBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  invoice_id: ListPaymentScheduleInvoiceIdSchema.optional(),
  id: ListPaymentScheduleIdSchema.optional(),
  updated_at: ListPaymentScheduleUpdatedAtSchema.optional(),
});
export { ListPaymentScheduleBodySchema };
export type ListPaymentScheduleBody = z.infer<
  typeof ListPaymentScheduleBodySchema
>;
