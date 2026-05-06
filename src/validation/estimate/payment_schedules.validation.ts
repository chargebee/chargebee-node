// Generated Zod validator: Estimate.paymentSchedules
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const paymentSchedulesEstimateBodySchema = z.looseObject({
  scheme_id: z.string(),
  amount: z.number().int().min(0).optional(),
  invoice_id: z.string().optional(),
  payment_schedule_start_date: z.number().int().optional(),
});
export { paymentSchedulesEstimateBodySchema };
