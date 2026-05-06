// Generated Zod validator: Estimate.advanceInvoiceEstimate
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const advanceInvoiceEstimateEstimateFixedIntervalScheduleSchema = z.object({
  number_of_occurrences: z.number().int().min(1).optional(),
  days_before_renewal: z.number().int().min(1).optional(),
  end_schedule_on: z
    .enum(['after_number_of_intervals', 'specific_date', 'subscription_end'])
    .optional(),
  end_date: z.number().int().optional(),
});
const advanceInvoiceEstimateEstimateSpecificDatesScheduleSchema = z.object({
  terms_to_charge: z.array(z.number().int().optional()).optional(),
  date: z.array(z.number().int().optional()).optional(),
});
const advanceInvoiceEstimateEstimateBodySchema = z.looseObject({
  terms_to_charge: z.number().int().min(1).optional(),
  invoice_immediately: z.boolean().optional(),
  schedule_type: z
    .enum(['immediate', 'specific_dates', 'fixed_intervals'])
    .optional(),
  fixed_interval_schedule:
    advanceInvoiceEstimateEstimateFixedIntervalScheduleSchema.optional(),
  specific_dates_schedule:
    advanceInvoiceEstimateEstimateSpecificDatesScheduleSchema.optional(),
});
export { advanceInvoiceEstimateEstimateBodySchema };
