// Generated Zod validator: Customer.deleteContact
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const deleteContactCustomerContactSchema = z.object({
  id: z.string().max(150),
});
const deleteContactCustomerBodySchema = z.looseObject({
  contact: deleteContactCustomerContactSchema.optional(),
});
export { deleteContactCustomerBodySchema };
