// Generated Zod validator: Customer.addContact
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const addContactCustomerContactSchema = z.object({
  id: z.string().max(150).optional(),
  first_name: z.string().max(150).optional(),
  last_name: z.string().max(150).optional(),
  email: z.string().email().max(70),
  phone: z.string().max(50).optional(),
  label: z.string().max(50).optional(),
  enabled: z.boolean().default(false).optional(),
  send_billing_email: z.boolean().default(false).optional(),
  send_account_email: z.boolean().default(false).optional(),
});
const addContactCustomerBodySchema = z.looseObject({
  contact: addContactCustomerContactSchema.optional(),
});
export { addContactCustomerBodySchema };
