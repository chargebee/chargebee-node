// Generated Zod schemas: Meter
// Actions: list
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//Meter.list

const ListMeterNameSchema = z.object({
  starts_with: z.string().min(1).optional(),
  is: z.string().min(1).optional(),
});
const ListMeterSortBySchema = z.looseObject({
  asc: z.enum(['id', 'name', 'created_at', 'updated_at']).optional(),
  desc: z.enum(['id', 'name', 'created_at', 'updated_at']).optional(),
});
const ListMeterBodySchema = z.looseObject({
  limit: z.number().int().min(1).max(100).optional(),
  offset: z.string().max(1000).optional(),
  name: ListMeterNameSchema.optional(),
  sort_by: ListMeterSortBySchema.optional(),
});
export { ListMeterBodySchema };
export type ListMeterBody = z.infer<typeof ListMeterBodySchema>;
