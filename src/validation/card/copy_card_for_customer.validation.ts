// Generated Zod validator: Card.copyCardForCustomer
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const copyCardForCustomerCardBodySchema = z.looseObject({
  gateway_account_id: z.string().max(50),
});
export { copyCardForCustomerCardBodySchema };
