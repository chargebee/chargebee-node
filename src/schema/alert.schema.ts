// Generated Zod schemas: Alert
// Actions: create, list, update, application_alertsForSubscription
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//Alert.create

const CreateAlertThresholdSchema = z.object({
  mode: z.enum(['absolute', 'percentage']),
  value: z.number(),
});
const CreateAlertFilterConditionsSchema = z.object({
  field: z.array(z.enum(['plan_price_id']).optional()).optional(),
  operator: z.array(z.enum(['equals', 'not_equals']).optional()).optional(),
  value: z.array(z.string().max(50).optional()).optional(),
});
const CreateAlertBodySchema = z.looseObject({
  type: z.enum(['usage_exceeded']),
  name: z.string().max(50),
  description: z.string().max(65000).optional(),
  metered_feature_id: z.string().max(50),
  subscription_id: z.string().max(50).optional(),
  meta: z.string().max(65000).optional(),
  threshold: CreateAlertThresholdSchema.optional(),
  filter_conditions: CreateAlertFilterConditionsSchema.optional(),
});
export { CreateAlertBodySchema };
export type CreateAlertBody = z.infer<typeof CreateAlertBodySchema>;

//Alert.list

const ListAlertIdSchema = z.object({
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ListAlertTypeSchema = z.object({
  is: z.enum(['usage_exceeded']).optional(),
});
const ListAlertSubscriptionIdSchema = z.object({
  is: z.string().min(1).optional(),
});
const ListAlertStatusSchema = z.object({
  is: z.enum(['enabled', 'disabled']).optional(),
});
const ListAlertBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  id: ListAlertIdSchema.optional(),
  type: ListAlertTypeSchema.optional(),
  subscription_id: ListAlertSubscriptionIdSchema.optional(),
  status: ListAlertStatusSchema.optional(),
});
export { ListAlertBodySchema };
export type ListAlertBody = z.infer<typeof ListAlertBodySchema>;

//Alert.update

const UpdateAlertThresholdSchema = z.object({
  mode: z.enum(['absolute', 'percentage']).optional(),
  value: z.number().optional(),
});
const UpdateAlertBodySchema = z.looseObject({
  status: z.enum(['enabled', 'disabled']).optional(),
  threshold: UpdateAlertThresholdSchema.optional(),
});
export { UpdateAlertBodySchema };
export type UpdateAlertBody = z.infer<typeof UpdateAlertBodySchema>;

//Alert.application_alertsForSubscription

const ApplicationAlertsforsubscriptionAlertStatusSchema = z.object({
  is: z.enum(['enabled', 'disabled']).optional(),
});
const ApplicationAlertsforsubscriptionAlertTypeSchema = z.object({
  is: z.enum(['usage_exceeded']).optional(),
});
const ApplicationAlertsforsubscriptionAlertBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  status: ApplicationAlertsforsubscriptionAlertStatusSchema.optional(),
  type: ApplicationAlertsforsubscriptionAlertTypeSchema.optional(),
});
export { ApplicationAlertsforsubscriptionAlertBodySchema };
export type ApplicationAlertsforsubscriptionAlertBody = z.infer<
  typeof ApplicationAlertsforsubscriptionAlertBodySchema
>;
