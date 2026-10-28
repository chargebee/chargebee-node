// Generated Zod schemas: Einvoice
// Actions: listEinvoices
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//Einvoice.listEinvoices

const ListEinvoicesEinvoiceIdSchema = z.object({
  is: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ListEinvoicesEinvoiceReferenceIdSchema = z.object({
  is: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ListEinvoicesEinvoiceUpdatedAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const ListEinvoicesEinvoiceSortBySchema = z.looseObject({
  asc: z.enum(['updated_at']).optional(),
  desc: z.enum(['updated_at']).optional(),
});
const ListEinvoicesEinvoiceBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  id: ListEinvoicesEinvoiceIdSchema.optional(),
  reference_id: ListEinvoicesEinvoiceReferenceIdSchema.optional(),
  updated_at: ListEinvoicesEinvoiceUpdatedAtSchema.optional(),
  sort_by: ListEinvoicesEinvoiceSortBySchema.optional(),
  invoice_id: z.string().max(50).optional(),
  credit_note_id: z.string().max(50).optional(),
});
export { ListEinvoicesEinvoiceBodySchema };
export type ListEinvoicesEinvoiceBody = z.infer<
  typeof ListEinvoicesEinvoiceBodySchema
>;
