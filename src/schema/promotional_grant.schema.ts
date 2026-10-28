// Generated Zod schemas: PromotionalGrant
// Actions: promotionalGrants
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//PromotionalGrant.promotionalGrants

const PromotionalGrantsPromotionalGrantMetadataSchema = z.looseObject({});
const PromotionalGrantsPromotionalGrantBodySchema = z.looseObject({
  subscription_id: z.string().max(50),
  unit_id: z.string().max(50),
  id: z.string().max(50).optional(),
  amount: z.string().max(36),
  effective_from: z.number().int().optional(),
  expires_at: z.number().int(),
  metadata: PromotionalGrantsPromotionalGrantMetadataSchema.optional(),
});
export { PromotionalGrantsPromotionalGrantBodySchema };
export type PromotionalGrantsPromotionalGrantBody = z.infer<
  typeof PromotionalGrantsPromotionalGrantBodySchema
>;
