// Generated Zod validator: PriceVariant.create
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const createPriceVariantAttributesSchema = z.object({
  name: z.array(z.string().max(100).optional()),
  value: z.array(z.string().max(100).optional()),
});
const createPriceVariantBodySchema = z.looseObject({
  id: z.string().max(100),
  name: z.string().max(100),
  external_name: z.string().max(100).optional(),
  description: z.string().max(500).optional(),
  variant_group: z.string().max(100).optional(),
  business_entity_id: z.string().max(50).optional(),
  attributes: createPriceVariantAttributesSchema.optional(),
});
export { createPriceVariantBodySchema };
