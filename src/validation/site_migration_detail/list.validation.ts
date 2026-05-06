// Generated Zod validator: SiteMigrationDetail.list
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const listSiteMigrationDetailEntityIdAtOtherSiteSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const listSiteMigrationDetailOtherSiteNameSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const listSiteMigrationDetailEntityIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
});
const listSiteMigrationDetailEntityTypeSchema = z.object({
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
const listSiteMigrationDetailStatusSchema = z.object({
  is: z.enum(['moved_in', 'moved_out', 'moving_out']).optional(),
  is_not: z.enum(['moved_in', 'moved_out', 'moving_out']).optional(),
  in: z.enum(['moved_in', 'moved_out', 'moving_out']).optional(),
  not_in: z.enum(['moved_in', 'moved_out', 'moving_out']).optional(),
});
const listSiteMigrationDetailBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  entity_id_at_other_site:
    listSiteMigrationDetailEntityIdAtOtherSiteSchema.optional(),
  other_site_name: listSiteMigrationDetailOtherSiteNameSchema.optional(),
  entity_id: listSiteMigrationDetailEntityIdSchema.optional(),
  entity_type: listSiteMigrationDetailEntityTypeSchema.optional(),
  status: listSiteMigrationDetailStatusSchema.optional(),
});
export { listSiteMigrationDetailBodySchema };
