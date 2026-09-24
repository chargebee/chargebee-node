// Generated Zod schemas: BusinessRule
// Actions: create, updateDraft, list, applyRules
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//BusinessRule.create

const CreateBusinessRuleStructuredExpressionSchema = z.looseObject({});
const CreateBusinessRuleBodySchema = z.looseObject({
  id: z.string().max(100).optional(),
  name: z.string().max(500),
  description: z.string().max(1000).optional(),
  tags: z.array(z.string().optional()).optional(),
  structured_expression: CreateBusinessRuleStructuredExpressionSchema,
  actions_on_success: z.array(z.string().optional()).optional(),
});
export { CreateBusinessRuleBodySchema };
export type CreateBusinessRuleBody = z.infer<
  typeof CreateBusinessRuleBodySchema
>;

//BusinessRule.updateDraft

const UpdateDraftBusinessRuleStructuredExpressionSchema = z.looseObject({});
const UpdateDraftBusinessRuleBodySchema = z.looseObject({
  name: z.string().max(500),
  description: z.string().max(1000).optional(),
  tags: z.array(z.string().optional()).optional(),
  structured_expression: UpdateDraftBusinessRuleStructuredExpressionSchema,
  actions_on_success: z.array(z.string().optional()).optional(),
});
export { UpdateDraftBusinessRuleBodySchema };
export type UpdateDraftBusinessRuleBody = z.infer<
  typeof UpdateDraftBusinessRuleBodySchema
>;

//BusinessRule.list

const ListBusinessRuleDraftSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const ListBusinessRuleActiveSchema = z.object({
  is: z.enum(['true', 'false']).optional(),
});
const ListBusinessRuleBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  draft: ListBusinessRuleDraftSchema.optional(),
  active: ListBusinessRuleActiveSchema.optional(),
});
export { ListBusinessRuleBodySchema };
export type ListBusinessRuleBody = z.infer<typeof ListBusinessRuleBodySchema>;

//BusinessRule.applyRules

const ApplyRulesBusinessRuleStructuredExpressionSchema = z.looseObject({});
const ApplyRulesBusinessRuleContextSchema = z.looseObject({});
const ApplyRulesBusinessRuleBodySchema = z.looseObject({
  evaluate: z.boolean().optional(),
  rule_id: z.string().optional(),
  ruleset_id: z.string().optional(),
  skip_failed_rules: z.boolean().optional(),
  structured_expression:
    ApplyRulesBusinessRuleStructuredExpressionSchema.optional(),
  context: ApplyRulesBusinessRuleContextSchema.optional(),
});
export { ApplyRulesBusinessRuleBodySchema };
export type ApplyRulesBusinessRuleBody = z.infer<
  typeof ApplyRulesBusinessRuleBodySchema
>;
