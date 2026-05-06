// Generated Zod validator: PortalSession.activate
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const activatePortalSessionBodySchema = z.looseObject({
  token: z.string().max(70),
});
export { activatePortalSessionBodySchema };
