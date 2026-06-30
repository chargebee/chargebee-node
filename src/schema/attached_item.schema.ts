// Generated Zod schemas: AttachedItem
// Actions: create, update, retrieve, delete, list
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

//AttachedItem.list

const ListAttachedItemIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ListAttachedItemItemIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
  not_in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ListAttachedItemTypeSchema = z.object({
  is: z.enum(['recommended', 'mandatory', 'optional']).optional(),
  is_not: z.enum(['recommended', 'mandatory', 'optional']).optional(),
  in: z.enum(['recommended', 'mandatory', 'optional']).optional(),
  not_in: z.enum(['recommended', 'mandatory', 'optional']).optional(),
});
const ListAttachedItemItemTypeSchema = z.object({
  is: z.enum(['plan', 'addon', 'charge']).optional(),
  is_not: z.enum(['plan', 'addon', 'charge']).optional(),
  in: z.enum(['plan', 'addon', 'charge']).optional(),
  not_in: z.enum(['plan', 'addon', 'charge']).optional(),
});
const ListAttachedItemChargeOnEventSchema = z.object({
  is: z
    .enum([
      'subscription_creation',
      'subscription_trial_start',
      'plan_activation',
      'subscription_activation',
      'contract_termination',
      'on_demand',
    ])
    .optional(),
  is_not: z
    .enum([
      'subscription_creation',
      'subscription_trial_start',
      'plan_activation',
      'subscription_activation',
      'contract_termination',
      'on_demand',
    ])
    .optional(),
  in: z
    .enum([
      'subscription_creation',
      'subscription_trial_start',
      'plan_activation',
      'subscription_activation',
      'contract_termination',
      'on_demand',
    ])
    .optional(),
  not_in: z
    .enum([
      'subscription_creation',
      'subscription_trial_start',
      'plan_activation',
      'subscription_activation',
      'contract_termination',
      'on_demand',
    ])
    .optional(),
});
const ListAttachedItemUpdatedAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const ListAttachedItemBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  id: ListAttachedItemIdSchema.optional(),
  item_id: ListAttachedItemItemIdSchema.optional(),
  type: ListAttachedItemTypeSchema.optional(),
  item_type: ListAttachedItemItemTypeSchema.optional(),
  charge_on_event: ListAttachedItemChargeOnEventSchema.optional(),
  updated_at: ListAttachedItemUpdatedAtSchema.optional(),
});
export { ListAttachedItemBodySchema };
export type ListAttachedItemBody = z.infer<typeof ListAttachedItemBodySchema>;
