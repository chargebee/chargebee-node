// Generated Zod schemas: BusinessRuleset
// Actions: create, update, addRules, removeRules, listRules, list
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//BusinessRuleset.create

const CreateBusinessRulesetBodySchema = z.looseObject({
  id: z.string().max(100).optional(),
  name: z.string().max(500),
  description: z.string().max(1000).optional(),
  execute_mode: z
    .enum([
      'stop_on_first_true',
      'stop_on_first_false',
      'execute_all',
      'execute_all_true',
    ])
    .optional(),
  rules: z.array(z.string().optional()).optional(),
});
export { CreateBusinessRulesetBodySchema };
export type CreateBusinessRulesetBody = z.infer<
  typeof CreateBusinessRulesetBodySchema
>;

//BusinessRuleset.update

const UpdateBusinessRulesetBodySchema = z.looseObject({
  name: z.string().max(500),
  description: z.string().max(1000).optional(),
  execute_mode: z
    .enum([
      'stop_on_first_true',
      'stop_on_first_false',
      'execute_all',
      'execute_all_true',
    ])
    .optional(),
  rules: z.array(z.string().optional()).optional(),
});
export { UpdateBusinessRulesetBodySchema };
export type UpdateBusinessRulesetBody = z.infer<
  typeof UpdateBusinessRulesetBodySchema
>;

//BusinessRuleset.addRules

const AddRulesBusinessRulesetBodySchema = z.looseObject({
  rules: z.array(z.string().optional()).optional(),
});
export { AddRulesBusinessRulesetBodySchema };
export type AddRulesBusinessRulesetBody = z.infer<
  typeof AddRulesBusinessRulesetBodySchema
>;

//BusinessRuleset.removeRules

const RemoveRulesBusinessRulesetBodySchema = z.looseObject({
  rules: z.array(z.string().optional()).optional(),
});
export { RemoveRulesBusinessRulesetBodySchema };
export type RemoveRulesBusinessRulesetBody = z.infer<
  typeof RemoveRulesBusinessRulesetBodySchema
>;

//BusinessRuleset.listRules

const ListRulesBusinessRulesetActiveSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const ListRulesBusinessRulesetBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  active: ListRulesBusinessRulesetActiveSchema.optional(),
});
export { ListRulesBusinessRulesetBodySchema };
export type ListRulesBusinessRulesetBody = z.infer<
  typeof ListRulesBusinessRulesetBodySchema
>;

//BusinessRuleset.list

const ListBusinessRulesetActiveSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const ListBusinessRulesetBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  active: ListBusinessRulesetActiveSchema.optional(),
});
export { ListBusinessRulesetBodySchema };
export type ListBusinessRulesetBody = z.infer<
  typeof ListBusinessRulesetBodySchema
>;
