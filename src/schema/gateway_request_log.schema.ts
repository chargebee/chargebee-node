// Generated Zod schemas: GatewayRequestLog
// Actions: list
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//GatewayRequestLog.list

const ListGatewayRequestLogLogIdSchema = z.object({
  in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
  is_not: z.string().min(1).optional(),
  not_in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
  is: z.string().min(1).optional(),
});
const ListGatewayRequestLogGatewaySchema = z.object({
  in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
  is_not: z.string().min(1).optional(),
  not_in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
  is: z.string().min(1).optional(),
});
const ListGatewayRequestLogStatusCodeSchema = z.object({
  in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
  is_not: z.string().min(1).optional(),
  not_in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
  is: z.string().min(1).optional(),
});
const ListGatewayRequestLogMethodSchema = z.object({
  in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
  is_not: z.string().min(1).optional(),
  not_in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
  is: z.string().min(1).optional(),
});
const ListGatewayRequestLogUrlSchema = z.object({
  in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
  is_not: z.string().min(1).optional(),
  not_in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
  is: z.string().min(1).optional(),
});
const ListGatewayRequestLogCustomerHandleSchema = z.object({
  in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
  is_not: z.string().min(1).optional(),
  not_in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
  is: z.string().min(1).optional(),
});
const ListGatewayRequestLogInvoiceHandleSchema = z.object({
  in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
  is_not: z.string().min(1).optional(),
  not_in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
  is: z.string().min(1).optional(),
});
const ListGatewayRequestLogTransactionHandleSchema = z.object({
  in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
  is_not: z.string().min(1).optional(),
  not_in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
  is: z.string().min(1).optional(),
});
const ListGatewayRequestLogPaymentMethodHandleSchema = z.object({
  in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
  is_not: z.string().min(1).optional(),
  not_in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
  is: z.string().min(1).optional(),
});
const ListGatewayRequestLogGatewayCredentialHandleSchema = z.object({
  in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
  is_not: z.string().min(1).optional(),
  not_in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
  is: z.string().min(1).optional(),
});
const ListGatewayRequestLogPaymentAttemptHandleSchema = z.object({
  in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
  is_not: z.string().min(1).optional(),
  not_in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
  is: z.string().min(1).optional(),
});
const ListGatewayRequestLogPaymentIntentHandleSchema = z.object({
  in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
  is_not: z.string().min(1).optional(),
  not_in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
  is: z.string().min(1).optional(),
});
const ListGatewayRequestLogOperationNameSchema = z.object({
  in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
  is_not: z.string().min(1).optional(),
  not_in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
  is: z.string().min(1).optional(),
});
const ListGatewayRequestLogOperationTypeSchema = z.object({
  in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
  is_not: z.string().min(1).optional(),
  not_in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
  is: z.string().min(1).optional(),
});
const ListGatewayRequestLogSourceSchema = z.object({
  in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
  is_not: z.string().min(1).optional(),
  not_in: z
    .union([
      z.array(z.string().optional()),
      z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')),
    ])
    .optional(),
  is: z.string().min(1).optional(),
});
const ListGatewayRequestLogInvocationTimeSchema = z.object({
  after: z
    .union([z.number().int(), z.string().regex(RegExp('^\\d{10}$'))])
    .optional(),
  before: z
    .union([z.number().int(), z.string().regex(RegExp('^\\d{10}$'))])
    .optional(),
  on: z
    .union([z.number().int(), z.string().regex(RegExp('^\\d{10}$'))])
    .optional(),
  between: z
    .union([
      z.array(z.number().int().optional()).min(2).max(2),
      z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')),
    ])
    .optional(),
});
const ListGatewayRequestLogResponseReceivedAtSchema = z.object({
  after: z
    .union([z.number().int(), z.string().regex(RegExp('^\\d{10}$'))])
    .optional(),
  before: z
    .union([z.number().int(), z.string().regex(RegExp('^\\d{10}$'))])
    .optional(),
  on: z
    .union([z.number().int(), z.string().regex(RegExp('^\\d{10}$'))])
    .optional(),
  between: z
    .union([
      z.array(z.number().int().optional()).min(2).max(2),
      z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')),
    ])
    .optional(),
});
const ListGatewayRequestLogSortBySchema = z.looseObject({
  asc: z.enum(['invocation_time']).optional(),
  desc: z.enum(['invocation_time']).optional(),
});
const ListGatewayRequestLogBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  log_id: ListGatewayRequestLogLogIdSchema.optional(),
  gateway: ListGatewayRequestLogGatewaySchema.optional(),
  status_code: ListGatewayRequestLogStatusCodeSchema.optional(),
  method: ListGatewayRequestLogMethodSchema.optional(),
  url: ListGatewayRequestLogUrlSchema.optional(),
  customer_handle: ListGatewayRequestLogCustomerHandleSchema.optional(),
  invoice_handle: ListGatewayRequestLogInvoiceHandleSchema.optional(),
  transaction_handle: ListGatewayRequestLogTransactionHandleSchema.optional(),
  payment_method_handle:
    ListGatewayRequestLogPaymentMethodHandleSchema.optional(),
  gateway_credential_handle:
    ListGatewayRequestLogGatewayCredentialHandleSchema.optional(),
  payment_attempt_handle:
    ListGatewayRequestLogPaymentAttemptHandleSchema.optional(),
  payment_intent_handle:
    ListGatewayRequestLogPaymentIntentHandleSchema.optional(),
  operation_name: ListGatewayRequestLogOperationNameSchema.optional(),
  operation_type: ListGatewayRequestLogOperationTypeSchema.optional(),
  source: ListGatewayRequestLogSourceSchema.optional(),
  invocation_time: ListGatewayRequestLogInvocationTimeSchema.optional(),
  response_received_at:
    ListGatewayRequestLogResponseReceivedAtSchema.optional(),
  sort_by: ListGatewayRequestLogSortBySchema.optional(),
});
export { ListGatewayRequestLogBodySchema };
export type ListGatewayRequestLogBody = z.infer<
  typeof ListGatewayRequestLogBodySchema
>;
