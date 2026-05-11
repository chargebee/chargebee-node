// Generated Zod schemas: Currency
// Actions: list, create, update, addSchedule
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//Currency.list

const ListCurrencyBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
});
export { ListCurrencyBodySchema };
export type ListCurrencyBody = z.infer<typeof ListCurrencyBodySchema>;

//Currency.create

const CreateCurrencyBodySchema = z.looseObject({
  currency_code: z.string().max(3),
  forex_type: z.enum(['manual', 'auto']),
  manual_exchange_rate: z.string().max(20).optional(),
});
export { CreateCurrencyBodySchema };
export type CreateCurrencyBody = z.infer<typeof CreateCurrencyBodySchema>;

//Currency.update

const UpdateCurrencyBodySchema = z.looseObject({
  forex_type: z.enum(['manual', 'auto']),
  manual_exchange_rate: z.string().max(20).optional(),
});
export { UpdateCurrencyBodySchema };
export type UpdateCurrencyBody = z.infer<typeof UpdateCurrencyBodySchema>;

//Currency.addSchedule

const AddScheduleCurrencyBodySchema = z.looseObject({
  manual_exchange_rate: z.string().max(20),
  schedule_at: z.number().int(),
});
export { AddScheduleCurrencyBodySchema };
export type AddScheduleCurrencyBody = z.infer<
  typeof AddScheduleCurrencyBodySchema
>;
