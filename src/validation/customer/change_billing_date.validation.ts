// Generated Zod validator: Customer.changeBillingDate
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const changeBillingDateCustomerBodySchema = z.looseObject({
  billing_date: z.number().int().min(1).max(31).optional(),
  billing_month: z.number().int().min(1).max(12).optional(),
  billing_date_mode: z.enum(['using_defaults', 'manually_set']).optional(),
  billing_day_of_week: z
    .enum([
      'sunday',
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
    ])
    .optional(),
  billing_day_of_week_mode: z
    .enum(['using_defaults', 'manually_set'])
    .optional(),
});
export { changeBillingDateCustomerBodySchema };
