// Generated Zod validator: Subscription.chargeFutureRenewals
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const chargeFutureRenewalsSubscriptionFixedIntervalScheduleSchema = z.object({
  number_of_occurrences: z.number().int().min(1).optional(),
  days_before_renewal: z.number().int().min(1).optional(),
  end_schedule_on: z
    .enum(['after_number_of_intervals', 'specific_date', 'subscription_end'])
    .optional(),
  end_date: z.number().int().optional(),
});
const chargeFutureRenewalsSubscriptionSpecificDatesScheduleSchema = z.object({
  terms_to_charge: z.array(z.number().int().optional()).optional(),
  date: z.array(z.number().int().optional()).optional(),
});
const chargeFutureRenewalsSubscriptionBodySchema = z.looseObject({
  terms_to_charge: z.number().int().min(1).optional(),
  invoice_immediately: z.boolean().optional(),
  schedule_type: z
    .enum(['immediate', 'specific_dates', 'fixed_intervals'])
    .optional(),
  fixed_interval_schedule:
    chargeFutureRenewalsSubscriptionFixedIntervalScheduleSchema.optional(),
  specific_dates_schedule:
    chargeFutureRenewalsSubscriptionSpecificDatesScheduleSchema.optional(),
});
export { chargeFutureRenewalsSubscriptionBodySchema };
