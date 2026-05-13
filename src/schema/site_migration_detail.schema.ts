// Generated Zod schemas: SiteMigrationDetail
// Actions: list
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//SiteMigrationDetail.list

const ListSiteMigrationDetailEntityIdAtOtherSiteSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const ListSiteMigrationDetailOtherSiteNameSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const ListSiteMigrationDetailEntityIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const ListSiteMigrationDetailEntityTypeSchema = z.object({
  is: z
    .enum([
      'customer',
      'subscription',
      'invoice',
      'credit_note',
      'transaction',
      'order',
    ])
    .optional(),
  is_not: z
    .enum([
      'customer',
      'subscription',
      'invoice',
      'credit_note',
      'transaction',
      'order',
    ])
    .optional(),
  in: z
    .enum([
      'customer',
      'subscription',
      'invoice',
      'credit_note',
      'transaction',
      'order',
    ])
    .optional(),
  not_in: z
    .enum([
      'customer',
      'subscription',
      'invoice',
      'credit_note',
      'transaction',
      'order',
    ])
    .optional(),
});
const ListSiteMigrationDetailStatusSchema = z.object({
  is: z.enum(['moved_in', 'moved_out', 'moving_out']).optional(),
  is_not: z.enum(['moved_in', 'moved_out', 'moving_out']).optional(),
  in: z.enum(['moved_in', 'moved_out', 'moving_out']).optional(),
  not_in: z.enum(['moved_in', 'moved_out', 'moving_out']).optional(),
});
const ListSiteMigrationDetailBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  entity_id_at_other_site:
    ListSiteMigrationDetailEntityIdAtOtherSiteSchema.optional(),
  other_site_name: ListSiteMigrationDetailOtherSiteNameSchema.optional(),
  entity_id: ListSiteMigrationDetailEntityIdSchema.optional(),
  entity_type: ListSiteMigrationDetailEntityTypeSchema.optional(),
  status: ListSiteMigrationDetailStatusSchema.optional(),
});
export { ListSiteMigrationDetailBodySchema };
export type ListSiteMigrationDetailBody = z.infer<
  typeof ListSiteMigrationDetailBodySchema
>;
