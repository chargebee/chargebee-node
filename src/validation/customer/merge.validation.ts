// Generated Zod validator: Customer.merge
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const mergeCustomerBodySchema = z.looseObject({
  from_customer_id: z.string().max(50),
  to_customer_id: z.string().max(50),
});
export { mergeCustomerBodySchema };
