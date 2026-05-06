// Generated Zod validator: Export.attachedItems
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const attachedItemsExportItemTypeSchema = z.object({
  is: z.enum(['plan', 'addon', 'charge']).optional(),
  is_not: z.enum(['plan', 'addon', 'charge']).optional(),
  in: z.enum(['plan', 'addon', 'charge']).optional(),
  not_in: z.enum(['plan', 'addon', 'charge']).optional(),
});
const attachedItemsExportIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
  not_in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
});
const attachedItemsExportItemIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
  not_in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
});
const attachedItemsExportTypeSchema = z.object({
  is: z.enum(['recommended', 'mandatory', 'optional']).optional(),
  is_not: z.enum(['recommended', 'mandatory', 'optional']).optional(),
  in: z.enum(['recommended', 'mandatory', 'optional']).optional(),
  not_in: z.enum(['recommended', 'mandatory', 'optional']).optional(),
});
const attachedItemsExportChargeOnEventSchema = z.object({
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
const attachedItemsExportUpdatedAtSchema = z.object({
  after: z.string().regex(RegExp('^d{10}$')).optional(),
  before: z.string().regex(RegExp('^d{10}$')).optional(),
  on: z.string().regex(RegExp('^d{10}$')).optional(),
  between: z.string().regex(RegExp('^[d{10},d{10}]$')).optional(),
});
const attachedItemsExportParentItemIdSchema = z.object({
  is: z.string().min(1).optional(),
  is_not: z.string().min(1).optional(),
  starts_with: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
  not_in: z.string().regex(RegExp('^[(.*)(,.*)*]$')).optional(),
});
const attachedItemsExportAttachedItemItemSchema = z.object({
  id: attachedItemsExportIdSchema.optional(),
  item_id: attachedItemsExportItemIdSchema.optional(),
  type: attachedItemsExportTypeSchema.optional(),
  charge_on_event: attachedItemsExportChargeOnEventSchema.optional(),
  updated_at: attachedItemsExportUpdatedAtSchema.optional(),
  parent_item_id: attachedItemsExportParentItemIdSchema.optional(),
});
const attachedItemsExportBodySchema = z.looseObject({
  item_type: attachedItemsExportItemTypeSchema.optional(),
  attached_item: z
    .array(attachedItemsExportAttachedItemItemSchema.optional())
    .optional(),
});
export { attachedItemsExportBodySchema };
