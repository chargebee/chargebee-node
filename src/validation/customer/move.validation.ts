// Generated Zod validator: Customer.move
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const moveCustomerBodySchema = z.looseObject({
  id_at_from_site: z.string().max(100),
  from_site: z.string().max(50),
});
export { moveCustomerBodySchema };
