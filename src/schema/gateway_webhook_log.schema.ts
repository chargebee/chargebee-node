// Generated Zod schemas: GatewayWebhookLog
// Actions: list
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//GatewayWebhookLog.list

const ListGatewayWebhookLogWebhookIdSchema = z.object({
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
const ListGatewayWebhookLogGatewaySchema = z.object({
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
const ListGatewayWebhookLogStatusCodeSchema = z.object({
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
const ListGatewayWebhookLogMethodSchema = z.object({
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
const ListGatewayWebhookLogUrlSchema = z.object({
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
const ListGatewayWebhookLogIdAtGatewaySchema = z.object({
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
const ListGatewayWebhookLogCustomerHandleSchema = z.object({
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
const ListGatewayWebhookLogInvoiceHandleSchema = z.object({
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
const ListGatewayWebhookLogTransactionHandleSchema = z.object({
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
const ListGatewayWebhookLogPaymentMethodHandleSchema = z.object({
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
const ListGatewayWebhookLogGatewayCredentialHandleSchema = z.object({
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
const ListGatewayWebhookLogPaymentAttemptHandleSchema = z.object({
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
const ListGatewayWebhookLogPaymentIntentHandleSchema = z.object({
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
const ListGatewayWebhookLogReceivedAtSchema = z.object({
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
const ListGatewayWebhookLogSortBySchema = z.looseObject({
  asc: z.enum(['received_at']).optional(),
  desc: z.enum(['received_at']).optional(),
});
const ListGatewayWebhookLogBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  webhook_id: ListGatewayWebhookLogWebhookIdSchema.optional(),
  gateway: ListGatewayWebhookLogGatewaySchema.optional(),
  status_code: ListGatewayWebhookLogStatusCodeSchema.optional(),
  method: ListGatewayWebhookLogMethodSchema.optional(),
  url: ListGatewayWebhookLogUrlSchema.optional(),
  id_at_gateway: ListGatewayWebhookLogIdAtGatewaySchema.optional(),
  customer_handle: ListGatewayWebhookLogCustomerHandleSchema.optional(),
  invoice_handle: ListGatewayWebhookLogInvoiceHandleSchema.optional(),
  transaction_handle: ListGatewayWebhookLogTransactionHandleSchema.optional(),
  payment_method_handle:
    ListGatewayWebhookLogPaymentMethodHandleSchema.optional(),
  gateway_credential_handle:
    ListGatewayWebhookLogGatewayCredentialHandleSchema.optional(),
  payment_attempt_handle:
    ListGatewayWebhookLogPaymentAttemptHandleSchema.optional(),
  payment_intent_handle:
    ListGatewayWebhookLogPaymentIntentHandleSchema.optional(),
  received_at: ListGatewayWebhookLogReceivedAtSchema.optional(),
  sort_by: ListGatewayWebhookLogSortBySchema.optional(),
});
export { ListGatewayWebhookLogBodySchema };
export type ListGatewayWebhookLogBody = z.infer<
  typeof ListGatewayWebhookLogBodySchema
>;
