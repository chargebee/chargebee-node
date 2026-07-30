// Generated Zod schemas: LedgerOperation
// Actions: listLedgerOperations, capture, authorize, captureAuthorization, releaseAuthorization, allocate
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//LedgerOperation.listLedgerOperations

const ListLedgerOperationsLedgerOperationSubscriptionIdSchema = z.object({
  is: z.string().min(1).optional(),
});
const ListLedgerOperationsLedgerOperationUnitIdSchema = z.object({
  is: z.string().min(1).optional(),
});
const ListLedgerOperationsLedgerOperationCreatedAtSchema = z.object({
  after: z.string().regex(RegExp('^\\d{10}$')).optional(),
  before: z.string().regex(RegExp('^\\d{10}$')).optional(),
  on: z.string().regex(RegExp('^\\d{10}$')).optional(),
  between: z.string().regex(RegExp('^\\[\\d{10},\\d{10}\\]$')).optional(),
});
const ListLedgerOperationsLedgerOperationTypeSchema = z.object({
  in: z
    .enum([
      'allocation',
      'capture',
      'authorize',
      'release_authorization',
      'capture_authorization',
      'expiry',
      'void',
      'rollover',
      'adjustment',
    ])
    .optional(),
  is: z
    .enum([
      'allocation',
      'capture',
      'authorize',
      'release_authorization',
      'capture_authorization',
      'expiry',
      'void',
      'rollover',
      'adjustment',
    ])
    .optional(),
});
const ListLedgerOperationsLedgerOperationSortBySchema = z.looseObject({
  asc: z.enum(['created_at']).optional(),
  desc: z.enum(['created_at']).optional(),
});
const ListLedgerOperationsLedgerOperationBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  subscription_id: ListLedgerOperationsLedgerOperationSubscriptionIdSchema,
  unit_id: ListLedgerOperationsLedgerOperationUnitIdSchema.optional(),
  created_at: ListLedgerOperationsLedgerOperationCreatedAtSchema.optional(),
  type: ListLedgerOperationsLedgerOperationTypeSchema.optional(),
  sort_by: ListLedgerOperationsLedgerOperationSortBySchema.optional(),
});
export { ListLedgerOperationsLedgerOperationBodySchema };
export type ListLedgerOperationsLedgerOperationBody = z.infer<
  typeof ListLedgerOperationsLedgerOperationBodySchema
>;

//LedgerOperation.capture

const CaptureLedgerOperationMetadataSchema = z.looseObject({});
const CaptureLedgerOperationBodySchema = z.looseObject({
  id: z.string().max(50).optional(),
  subscription_id: z.string().max(50),
  unit_id: z.string().max(50),
  amount: z.string().max(36),
  ledger_operation_timestamp: z.number().int(),
  metadata: CaptureLedgerOperationMetadataSchema.optional(),
});
export { CaptureLedgerOperationBodySchema };
export type CaptureLedgerOperationBody = z.infer<
  typeof CaptureLedgerOperationBodySchema
>;

//LedgerOperation.authorize

const AuthorizeLedgerOperationMetadataSchema = z.looseObject({});
const AuthorizeLedgerOperationBodySchema = z.looseObject({
  id: z.string().max(50).optional(),
  subscription_id: z.string().max(50),
  unit_id: z.string().max(50),
  amount: z.string().max(36),
  ledger_operation_timestamp: z.number().int(),
  auto_release_timestamp: z.number().int().optional(),
  metadata: AuthorizeLedgerOperationMetadataSchema.optional(),
});
export { AuthorizeLedgerOperationBodySchema };
export type AuthorizeLedgerOperationBody = z.infer<
  typeof AuthorizeLedgerOperationBodySchema
>;

//LedgerOperation.captureAuthorization

const CaptureAuthorizationLedgerOperationMetadataSchema = z.looseObject({});
const CaptureAuthorizationLedgerOperationBodySchema = z.looseObject({
  authorization_id: z.string().max(50),
  id: z.string().max(50).optional(),
  amount: z.string().max(36),
  ledger_operation_timestamp: z.number().int(),
  metadata: CaptureAuthorizationLedgerOperationMetadataSchema.optional(),
});
export { CaptureAuthorizationLedgerOperationBodySchema };
export type CaptureAuthorizationLedgerOperationBody = z.infer<
  typeof CaptureAuthorizationLedgerOperationBodySchema
>;

//LedgerOperation.releaseAuthorization

const ReleaseAuthorizationLedgerOperationMetadataSchema = z.looseObject({});
const ReleaseAuthorizationLedgerOperationBodySchema = z.looseObject({
  authorization_id: z.string().max(50),
  id: z.string().max(50).optional(),
  ledger_operation_timestamp: z.number().int(),
  metadata: ReleaseAuthorizationLedgerOperationMetadataSchema.optional(),
});
export { ReleaseAuthorizationLedgerOperationBodySchema };
export type ReleaseAuthorizationLedgerOperationBody = z.infer<
  typeof ReleaseAuthorizationLedgerOperationBodySchema
>;

//LedgerOperation.allocate

const AllocateLedgerOperationMetadataSchema = z.looseObject({});
const AllocateLedgerOperationBodySchema = z.looseObject({
  subscription_id: z.string().max(50),
  unit_id: z.string().max(50),
  amount: z.string().max(36),
  expires_at: z.number().int(),
  metadata: AllocateLedgerOperationMetadataSchema.optional(),
});
export { AllocateLedgerOperationBodySchema };
export type AllocateLedgerOperationBody = z.infer<
  typeof AllocateLedgerOperationBodySchema
>;
