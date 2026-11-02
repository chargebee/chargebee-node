// Generated Zod schemas: CollectionsPaymentPromise
// Actions: listCollectionsPaymentPromises, createCollectionsPaymentPromise, updateCollectionsPaymentPromise
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//CollectionsPaymentPromise.listCollectionsPaymentPromises

const ListCollectionsPaymentPromisesCollectionsPaymentPromiseCustomerIdSchema =
  z.object({
    is: z.string().min(1).optional(),
  });
const ListCollectionsPaymentPromisesCollectionsPaymentPromiseInvoiceIdSchema =
  z.object({
    is: z.string().min(1).optional(),
  });
const ListCollectionsPaymentPromisesCollectionsPaymentPromiseStatusSchema =
  z.object({
    is: z.enum(['active', 'fulfilled', 'broken', 'cancelled']).optional(),
  });
const ListCollectionsPaymentPromisesCollectionsPaymentPromiseBodySchema =
  z.looseObject({
    limit: z.number().int().min(1).max(100).optional(),
    offset: z.string().max(1000).optional(),
    customer_id:
      ListCollectionsPaymentPromisesCollectionsPaymentPromiseCustomerIdSchema.optional(),
    invoice_id:
      ListCollectionsPaymentPromisesCollectionsPaymentPromiseInvoiceIdSchema.optional(),
    status:
      ListCollectionsPaymentPromisesCollectionsPaymentPromiseStatusSchema.optional(),
  });
export { ListCollectionsPaymentPromisesCollectionsPaymentPromiseBodySchema };
export type ListCollectionsPaymentPromisesCollectionsPaymentPromiseBody =
  z.infer<
    typeof ListCollectionsPaymentPromisesCollectionsPaymentPromiseBodySchema
  >;

//CollectionsPaymentPromise.createCollectionsPaymentPromise

const CreateCollectionsPaymentPromiseCollectionsPaymentPromiseBodySchema =
  z.looseObject({
    customer_id: z.string().max(100),
    invoice_id: z.string().max(100).optional(),
    amount: z.number().int(),
    currency_code: z.string().max(3).optional(),
    promised_on: z.number().int(),
    reason: z.string().max(500).optional(),
    promised_by: z.string().max(254).optional(),
  });
export { CreateCollectionsPaymentPromiseCollectionsPaymentPromiseBodySchema };
export type CreateCollectionsPaymentPromiseCollectionsPaymentPromiseBody =
  z.infer<
    typeof CreateCollectionsPaymentPromiseCollectionsPaymentPromiseBodySchema
  >;

//CollectionsPaymentPromise.updateCollectionsPaymentPromise

const UpdateCollectionsPaymentPromiseCollectionsPaymentPromiseBodySchema =
  z.looseObject({
    promised_on: z.number().int().optional(),
    reason: z.string().max(500).optional(),
    promised_by: z.string().max(254).optional(),
  });
export { UpdateCollectionsPaymentPromiseCollectionsPaymentPromiseBodySchema };
export type UpdateCollectionsPaymentPromiseCollectionsPaymentPromiseBody =
  z.infer<
    typeof UpdateCollectionsPaymentPromiseCollectionsPaymentPromiseBodySchema
  >;
