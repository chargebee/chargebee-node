// Generated Zod validator: AttachedItem.create
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const createAttachedItemBodySchema = z.looseObject({
  item_id: z.string().max(100),
  type: z.enum(['recommended', 'mandatory', 'optional']).optional(),
  billing_cycles: z.number().int().min(1).optional(),
  quantity: z.number().int().min(1).optional(),
  quantity_in_decimal: z.string().max(33).optional(),
  charge_on_event: z
    .enum([
      'subscription_creation',
      'subscription_trial_start',
      'plan_activation',
      'subscription_activation',
      'contract_termination',
      'on_demand',
    ])
    .optional(),
  charge_once: z.boolean().optional(),
  business_entity_id: z.string().max(50).optional(),
});
export { createAttachedItemBodySchema };
