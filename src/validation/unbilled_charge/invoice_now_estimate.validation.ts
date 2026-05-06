// Generated Zod validator: UnbilledCharge.invoiceNowEstimate
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const invoiceNowEstimateUnbilledChargeBodySchema = z.looseObject({
  subscription_id: z.string().max(50).optional(),
  customer_id: z.string().max(50).optional(),
});
export { invoiceNowEstimateUnbilledChargeBodySchema };
