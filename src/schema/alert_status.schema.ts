// Generated Zod schemas: AlertStatus
// Actions: alert_statusesForSubscription, alert_statusesForAlert
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//AlertStatus.alert_statusesForSubscription

const AlertStatusesforsubscriptionAlertStatusAlarmStatusSchema = z.object({
  is: z.enum(['within_limit', 'in_alarm']).optional(),
});
const AlertStatusesforsubscriptionAlertStatusAlertIdSchema = z.object({
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const AlertStatusesforsubscriptionAlertStatusBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  alarm_status:
    AlertStatusesforsubscriptionAlertStatusAlarmStatusSchema.optional(),
  alert_id: AlertStatusesforsubscriptionAlertStatusAlertIdSchema.optional(),
});
export { AlertStatusesforsubscriptionAlertStatusBodySchema };
export type AlertStatusesforsubscriptionAlertStatusBody = z.infer<
  typeof AlertStatusesforsubscriptionAlertStatusBodySchema
>;

//AlertStatus.alert_statusesForAlert

const AlertStatusesforalertAlertStatusAlarmStatusSchema = z.object({
  is: z.enum(['within_limit', 'in_alarm']).optional(),
});
const AlertStatusesforalertAlertStatusBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  alarm_status: AlertStatusesforalertAlertStatusAlarmStatusSchema.optional(),
});
export { AlertStatusesforalertAlertStatusBodySchema };
export type AlertStatusesforalertAlertStatusBody = z.infer<
  typeof AlertStatusesforalertAlertStatusBodySchema
>;
