// Generated Zod validator: PortalSession.create
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const createPortalSessionCustomerSchema = z.object({
  id: z.string().max(50),
});
const createPortalSessionBodySchema = z.looseObject({
  redirect_url: z.string().max(250).optional(),
  forward_url: z.string().max(250).optional(),
  customer: createPortalSessionCustomerSchema.optional(),
});
export { createPortalSessionBodySchema };
