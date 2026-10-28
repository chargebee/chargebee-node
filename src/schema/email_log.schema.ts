// Generated Zod schemas: EmailLog
// Actions: emailLogsForCustomer
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//EmailLog.emailLogsForCustomer

const EmailLogsForCustomerEmailLogSentOnSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const EmailLogsForCustomerEmailLogBusinessEntityIdSchema = z.object({
  is: z.string().min(1).optional(),
});
const EmailLogsForCustomerEmailLogBrandIdSchema = z.object({
  is: z.string().min(1).optional(),
});
const EmailLogsForCustomerEmailLogBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  sent_on: EmailLogsForCustomerEmailLogSentOnSchema.optional(),
  business_entity_id:
    EmailLogsForCustomerEmailLogBusinessEntityIdSchema.optional(),
  brand_id: EmailLogsForCustomerEmailLogBrandIdSchema.optional(),
});
export { EmailLogsForCustomerEmailLogBodySchema };
export type EmailLogsForCustomerEmailLogBody = z.infer<
  typeof EmailLogsForCustomerEmailLogBodySchema
>;
