// Generated Zod schemas: AttachedItem
// Actions: create, update, retrieve, delete
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//AttachedItem.create

const CreateAttachedItemBodySchema = z.looseObject({
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
export { CreateAttachedItemBodySchema };
export type CreateAttachedItemBody = z.infer<
  typeof CreateAttachedItemBodySchema
>;

//AttachedItem.update

const UpdateAttachedItemBodySchema = z.looseObject({
  parent_item_id: z.string().max(100),
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
});
export { UpdateAttachedItemBodySchema };
export type UpdateAttachedItemBody = z.infer<
  typeof UpdateAttachedItemBodySchema
>;

//AttachedItem.retrieve

const RetrieveAttachedItemBodySchema = z.looseObject({
  parent_item_id: z.string().max(100),
});
export { RetrieveAttachedItemBodySchema };
export type RetrieveAttachedItemBody = z.infer<
  typeof RetrieveAttachedItemBodySchema
>;

//AttachedItem.delete

const DeleteAttachedItemBodySchema = z.looseObject({
  parent_item_id: z.string().max(100),
});
export { DeleteAttachedItemBodySchema };
export type DeleteAttachedItemBody = z.infer<
  typeof DeleteAttachedItemBodySchema
>;
