// Generated Zod schemas: ItemFamily
// Actions: create, update
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//ItemFamily.create

const CreateItemFamilyBodySchema = z.looseObject({
  id: z.string().max(50),
  name: z.string().max(50),
  description: z.string().max(500).optional(),
  business_entity_id: z.string().max(50).optional(),
});
export { CreateItemFamilyBodySchema };
export type CreateItemFamilyBody = z.infer<typeof CreateItemFamilyBodySchema>;

//ItemFamily.update

const UpdateItemFamilyBodySchema = z.looseObject({
  name: z.string().max(50).optional(),
  description: z.string().max(500).optional(),
});
export { UpdateItemFamilyBodySchema };
export type UpdateItemFamilyBody = z.infer<typeof UpdateItemFamilyBodySchema>;
