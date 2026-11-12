// Generated Zod schemas: OrganizationDetail
// Actions: create, list
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//OrganizationDetail.create

const CreateOrganizationDetailBodySchema = z.looseObject({
  organization_name: z.string().max(100),
  email: z.string().email().max(70).optional(),
  address_line1: z.string().max(180),
  address_line2: z.string().max(150).optional(),
  address_line3: z.string().max(150).optional(),
  city: z.string().max(50),
  state_code: z.string().max(50).optional(),
  state: z.string().max(50),
  zip: z.string().max(20),
  country_code: z.string().max(50).optional(),
  phone: z.string().max(20),
  fax: z.string().max(20).optional(),
  website: z.string().max(200).optional(),
  is_vat_number_present: z.boolean().optional(),
  vat_number: z.string().max(20).optional(),
});
export { CreateOrganizationDetailBodySchema };
export type CreateOrganizationDetailBody = z.infer<
  typeof CreateOrganizationDetailBodySchema
>;

//OrganizationDetail.list

const ListOrganizationDetailBusinessEntityIdSchema = z.object({
  is: z.string().min(1).optional(),
});
const ListOrganizationDetailBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  business_entity_id: ListOrganizationDetailBusinessEntityIdSchema.optional(),
});
export { ListOrganizationDetailBodySchema };
export type ListOrganizationDetailBody = z.infer<
  typeof ListOrganizationDetailBodySchema
>;
