// Generated Zod schemas: PortalSession
// Actions: create, activate
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';

//PortalSession.create

const CreatePortalSessionCustomerSchema = z.object({
  id: z.string().max(50),
});
const CreatePortalSessionBodySchema = z.looseObject({
  redirect_url: z.string().max(250).optional(),
  forward_url: z.string().max(250).optional(),
  customer: CreatePortalSessionCustomerSchema.optional(),
});
export { CreatePortalSessionBodySchema };
export type CreatePortalSessionBody = z.infer<
  typeof CreatePortalSessionBodySchema
>;

//PortalSession.activate

const ActivatePortalSessionBodySchema = z.looseObject({
  token: z.string().max(70),
});
export { ActivatePortalSessionBodySchema };
export type ActivatePortalSessionBody = z.infer<
  typeof ActivatePortalSessionBodySchema
>;
