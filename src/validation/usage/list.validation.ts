// Generated Zod validator: Usage.list
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const listUsageIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const listUsageSubscriptionIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const listUsageUsageDateSchema = z.object({
  after: z.string().regex(RegExp('^d{10}$')).optional(),
  before: z.string().regex(RegExp('^d{10}$')).optional(),
  on: z.string().regex(RegExp('^d{10}$')).optional(),
  between: z.string().regex(RegExp('^[d{10},d{10}]$')).optional(),
});
const listUsageUpdatedAtSchema = z.object({
  after: z.string().regex(RegExp('^d{10}$')).optional(),
  before: z.string().regex(RegExp('^d{10}$')).optional(),
  on: z.string().regex(RegExp('^d{10}$')).optional(),
  between: z.string().regex(RegExp('^[d{10},d{10}]$')).optional(),
});
const listUsageItemPriceIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const listUsageInvoiceIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
});
const listUsageSourceSchema = z.object({
  is: z.enum(['admin_console', 'api', 'bulk_operation']).optional(),
  is_not: z.enum(['admin_console', 'api', 'bulk_operation']).optional(),
  in: z.enum(['admin_console', 'api', 'bulk_operation']).optional(),
  not_in: z.enum(['admin_console', 'api', 'bulk_operation']).optional(),
});
const listUsageSortBySchema = z.looseObject({
  asc: z.enum(['usage_date', 'updated_at']).optional(),
  desc: z.enum(['usage_date', 'updated_at']).optional(),
});
const listUsageBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  id: listUsageIdSchema.optional(),
  subscription_id: listUsageSubscriptionIdSchema.optional(),
  usage_date: listUsageUsageDateSchema.optional(),
  updated_at: listUsageUpdatedAtSchema.optional(),
  item_price_id: listUsageItemPriceIdSchema.optional(),
  invoice_id: listUsageInvoiceIdSchema.optional(),
  source: listUsageSourceSchema.optional(),
  sort_by: listUsageSortBySchema.optional(),
});
export { listUsageBodySchema };
