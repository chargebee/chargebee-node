// Generated Zod validator: Currency.update
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const updateCurrencyBodySchema = z.looseObject({
  forex_type: z.enum(['manual', 'auto']),
  manual_exchange_rate: z.string().max(20).optional(),
});
export { updateCurrencyBodySchema };
