// Generated Zod validator: PaymentSource.exportPaymentSource
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const exportPaymentSourcePaymentSourceBodySchema = z.looseObject({
  gateway_account_id: z.string().max(50),
});
export { exportPaymentSourcePaymentSourceBodySchema };
