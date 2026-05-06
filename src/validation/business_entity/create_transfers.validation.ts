// Generated Zod validator: BusinessEntity.createTransfers
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const createTransfersBusinessEntityBodySchema = z.looseObject({
  active_resource_ids: z.array(z.string().max(50).optional()),
  destination_business_entity_ids: z.array(z.string().max(50).optional()),
  source_business_entity_ids: z.array(z.string().max(50).optional()).optional(),
  resource_types: z.array(z.string().max(50).optional()),
  reason_codes: z.array(z.string().max(50).optional()),
});
export { createTransfersBusinessEntityBodySchema };
