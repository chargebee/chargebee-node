// Generated Zod validator: Customer.delete
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const deleteCustomerBodySchema = z.looseObject({
  delete_payment_method: z.boolean().default(true).optional(),
});
export { deleteCustomerBodySchema };
