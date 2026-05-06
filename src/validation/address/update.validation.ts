// Generated Zod validator: Address.update
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const updateAddressBodySchema = z.looseObject({
  subscription_id: z.string().max(50),
  label: z.string().max(50),
  first_name: z.string().max(150).optional(),
  last_name: z.string().max(150).optional(),
  email: z.string().email().max(70).optional(),
  company: z.string().max(250).optional(),
  phone: z.string().max(50).optional(),
  addr: z.string().max(150).optional(),
  extended_addr: z.string().max(150).optional(),
  extended_addr2: z.string().max(150).optional(),
  city: z.string().max(50).optional(),
  state_code: z.string().max(50).optional(),
  state: z.string().max(50).optional(),
  zip: z.string().max(20).optional(),
  country: z.string().max(50).optional(),
  validation_status: z
    .enum(['not_validated', 'valid', 'partially_valid', 'invalid'])
    .optional(),
});
export { updateAddressBodySchema };
