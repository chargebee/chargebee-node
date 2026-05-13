// Generated Zod schemas: PriceVariant
// Actions: create, update
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//PriceVariant.create

const CreatePriceVariantAttributesSchema = z.object({
  name: z.array(z.string().max(100).optional()),
  value: z.array(z.string().max(100).optional()),
});
const CreatePriceVariantBodySchema = z.looseObject({
  id: z.string().max(100),
  name: z.string().max(100),
  external_name: z.string().max(100).optional(),
  description: z.string().max(500).optional(),
  variant_group: z.string().max(100).optional(),
  business_entity_id: z.string().max(50).optional(),
  attributes: CreatePriceVariantAttributesSchema.optional(),
});
export { CreatePriceVariantBodySchema };
export type CreatePriceVariantBody = z.infer<
  typeof CreatePriceVariantBodySchema
>;

//PriceVariant.update

const UpdatePriceVariantAttributesSchema = z.object({
  name: z.array(z.string().max(100).optional()),
  value: z.array(z.string().max(100).optional()),
});
const UpdatePriceVariantBodySchema = z.looseObject({
  name: z.string().max(100).optional(),
  external_name: z.string().max(100).optional(),
  description: z.string().max(500).optional(),
  variant_group: z.string().max(100).optional(),
  status: z.enum(['active', 'archived']).optional(),
  attributes: UpdatePriceVariantAttributesSchema.optional(),
});
export { UpdatePriceVariantBodySchema };
export type UpdatePriceVariantBody = z.infer<
  typeof UpdatePriceVariantBodySchema
>;
