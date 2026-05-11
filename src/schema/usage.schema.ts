// Generated Zod schemas: Usage
// Actions: create, retrieve, delete, list, pdf
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//Usage.create

const CreateUsageBodySchema = z.looseObject({
  id: z.string().max(100).optional(),
  item_price_id: z.string().max(100),
  quantity: z.string().max(40),
  usage_date: z.number().int(),
  dedupe_option: z.enum(['skip', 'update_existing']).optional(),
  note: z.string().max(500).optional(),
});
export { CreateUsageBodySchema };
export type CreateUsageBody = z.infer<typeof CreateUsageBodySchema>;

//Usage.retrieve

const RetrieveUsageBodySchema = z.looseObject({
  id: z.string().max(100),
});
export { RetrieveUsageBodySchema };
export type RetrieveUsageBody = z.infer<typeof RetrieveUsageBodySchema>;

//Usage.delete

const DeleteUsageBodySchema = z.looseObject({
  id: z.string().max(100),
});
export { DeleteUsageBodySchema };
export type DeleteUsageBody = z.infer<typeof DeleteUsageBodySchema>;

//Usage.list

const ListUsageIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const ListUsageSubscriptionIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const ListUsageUsageDateSchema = z.object({
  after: z.string().regex(RegExp('^d{10}$')).optional(),
  before: z.string().regex(RegExp('^d{10}$')).optional(),
  on: z.string().regex(RegExp('^d{10}$')).optional(),
  between: z.string().regex(RegExp('^[d{10},d{10}]$')).optional(),
});
const ListUsageUpdatedAtSchema = z.object({
  after: z.string().regex(RegExp('^d{10}$')).optional(),
  before: z.string().regex(RegExp('^d{10}$')).optional(),
  on: z.string().regex(RegExp('^d{10}$')).optional(),
  between: z.string().regex(RegExp('^[d{10},d{10}]$')).optional(),
});
const ListUsageItemPriceIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const ListUsageInvoiceIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  is_present: z.enum(['true', 'false']).optional(),
});
const ListUsageSourceSchema = z.object({
  is: z.enum(['admin_console', 'api', 'bulk_operation']).optional(),
  is_not: z.enum(['admin_console', 'api', 'bulk_operation']).optional(),
  in: z.enum(['admin_console', 'api', 'bulk_operation']).optional(),
  not_in: z.enum(['admin_console', 'api', 'bulk_operation']).optional(),
});
const ListUsageSortBySchema = z.looseObject({
  asc: z.enum(['usage_date', 'updated_at']).optional(),
  desc: z.enum(['usage_date', 'updated_at']).optional(),
});
const ListUsageBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  id: ListUsageIdSchema.optional(),
  subscription_id: ListUsageSubscriptionIdSchema.optional(),
  usage_date: ListUsageUsageDateSchema.optional(),
  updated_at: ListUsageUpdatedAtSchema.optional(),
  item_price_id: ListUsageItemPriceIdSchema.optional(),
  invoice_id: ListUsageInvoiceIdSchema.optional(),
  source: ListUsageSourceSchema.optional(),
  sort_by: ListUsageSortBySchema.optional(),
});
export { ListUsageBodySchema };
export type ListUsageBody = z.infer<typeof ListUsageBodySchema>;

//Usage.pdf

const PdfUsageInvoiceSchema = z.object({
  id: z.string().max(50),
});
const PdfUsageBodySchema = z.looseObject({
  disposition_type: z.enum(['attachment', 'inline']).optional(),
  invoice: PdfUsageInvoiceSchema.optional(),
});
export { PdfUsageBodySchema };
export type PdfUsageBody = z.infer<typeof PdfUsageBodySchema>;
