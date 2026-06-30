// Generated Zod schemas: Meter
// Actions: list
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//Meter.list

const ListMeterBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
});
export { ListMeterBodySchema };
export type ListMeterBody = z.infer<typeof ListMeterBodySchema>;
