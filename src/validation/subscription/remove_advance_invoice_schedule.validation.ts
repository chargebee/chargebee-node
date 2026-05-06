// Generated Zod validator: Subscription.removeAdvanceInvoiceSchedule
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const removeAdvanceInvoiceScheduleSubscriptionSpecificDatesScheduleSchema =
  z.object({
    id: z.array(z.string().max(50).optional()).optional(),
  });
const removeAdvanceInvoiceScheduleSubscriptionBodySchema = z.looseObject({
  specific_dates_schedule:
    removeAdvanceInvoiceScheduleSubscriptionSpecificDatesScheduleSchema.optional(),
});
export { removeAdvanceInvoiceScheduleSubscriptionBodySchema };
