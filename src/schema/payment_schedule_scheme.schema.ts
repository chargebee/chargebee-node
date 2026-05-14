// Generated Zod schemas: PaymentScheduleScheme
// Actions: create
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
