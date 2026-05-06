// Generated Zod validator: Customer.assignPaymentRole
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const assignPaymentRoleCustomerBodySchema = z.looseObject({
  payment_source_id: z.string().max(40),
  role: z.enum(['primary', 'backup', 'none']),
});
export { assignPaymentRoleCustomerBodySchema };
