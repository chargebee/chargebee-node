// Generated Zod validator: Customer.updateContact
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const updateContactCustomerContactSchema = z.object({
  id: z.string().max(150),
  first_name: z.string().max(150).optional(),
  last_name: z.string().max(150).optional(),
  email: z.string().email().max(70).optional(),
  phone: z.string().max(50).optional(),
  label: z.string().max(50).optional(),
  enabled: z.boolean().default(false).optional(),
  send_billing_email: z.boolean().default(false).optional(),
  send_account_email: z.boolean().default(false).optional(),
});
const updateContactCustomerBodySchema = z.looseObject({
  contact: updateContactCustomerContactSchema.optional(),
});
export { updateContactCustomerBodySchema };
