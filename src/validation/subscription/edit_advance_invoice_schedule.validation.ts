// Generated Zod validator: Subscription.editAdvanceInvoiceSchedule
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const editAdvanceInvoiceScheduleSubscriptionFixedIntervalScheduleSchema =
  z.object({
    number_of_occurrences: z.number().int().min(1).optional(),
    days_before_renewal: z.number().int().min(1).optional(),
    end_schedule_on: z
      .enum(['after_number_of_intervals', 'specific_date', 'subscription_end'])
      .optional(),
    end_date: z.number().int().optional(),
  });
const editAdvanceInvoiceScheduleSubscriptionSpecificDatesScheduleSchema =
  z.object({
    id: z.array(z.string().max(50).optional()).optional(),
    terms_to_charge: z.array(z.number().int().optional()).optional(),
    date: z.array(z.number().int().optional()).optional(),
  });
const editAdvanceInvoiceScheduleSubscriptionBodySchema = z.looseObject({
  terms_to_charge: z.number().int().min(1).optional(),
  schedule_type: z.enum(['specific_dates', 'fixed_intervals']).optional(),
  fixed_interval_schedule:
    editAdvanceInvoiceScheduleSubscriptionFixedIntervalScheduleSchema.optional(),
  specific_dates_schedule:
    editAdvanceInvoiceScheduleSubscriptionSpecificDatesScheduleSchema.optional(),
});
export { editAdvanceInvoiceScheduleSubscriptionBodySchema };
