// Generated Zod validator: PriceVariant.update
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const updatePriceVariantAttributesSchema = z.object({
  name: z.array(z.string().max(100).optional()),
  value: z.array(z.string().max(100).optional()),
});
const updatePriceVariantBodySchema = z.looseObject({
  name: z.string().max(100).optional(),
  external_name: z.string().max(100).optional(),
  description: z.string().max(500).optional(),
  variant_group: z.string().max(100).optional(),
  status: z.enum(['active', 'archived']).optional(),
  attributes: updatePriceVariantAttributesSchema.optional(),
});
export { updatePriceVariantBodySchema };
