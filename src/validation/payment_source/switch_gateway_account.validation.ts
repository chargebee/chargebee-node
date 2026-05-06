// Generated Zod validator: PaymentSource.switchGatewayAccount
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const switchGatewayAccountPaymentSourceBodySchema = z.looseObject({
  gateway_account_id: z.string().max(50),
});
export { switchGatewayAccountPaymentSourceBodySchema };
