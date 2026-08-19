// Generated Zod schemas: CreditUnit
// Actions: list, create, update
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//CreditUnit.list

const ListCreditUnitStatusSchema = z.object({
  is: z.enum(['active', 'archived']).optional(),
  in: z.enum(['active', 'archived']).optional(),
});
const ListCreditUnitIdSchema = z.object({
  is: z.string().min(1).optional(),
  in: z.string().regex(RegExp('^\\[(.*)(,.*)*\\]$')).optional(),
});
const ListCreditUnitBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  status: ListCreditUnitStatusSchema.optional(),
  id: ListCreditUnitIdSchema.optional(),
});
export { ListCreditUnitBodySchema };
export type ListCreditUnitBody = z.infer<typeof ListCreditUnitBodySchema>;

//CreditUnit.create

const CreateCreditUnitBodySchema = z.looseObject({
  id: z.string().max(50),
  name: z.string().max(50),
  is_unlimited: z.boolean(),
  overdraft_amount: z.string().max(50).optional(),
  external_name: z.string().max(50).optional(),
});
export { CreateCreditUnitBodySchema };
export type CreateCreditUnitBody = z.infer<typeof CreateCreditUnitBodySchema>;

//CreditUnit.update

const UpdateCreditUnitBodySchema = z.looseObject({
  name: z.string().max(50).optional(),
  external_name: z.string().max(50).optional(),
});
export { UpdateCreditUnitBodySchema };
export type UpdateCreditUnitBody = z.infer<typeof UpdateCreditUnitBodySchema>;
