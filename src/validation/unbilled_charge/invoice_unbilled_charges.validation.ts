// Generated Zod validator: UnbilledCharge.invoiceUnbilledCharges
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const invoiceUnbilledChargesUnbilledChargeBodySchema = z.looseObject({
  subscription_id: z.string().max(50).optional(),
  customer_id: z.string().max(50).optional(),
});
export { invoiceUnbilledChargesUnbilledChargeBodySchema };
