// Generated Zod validator: Currency.create
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const createCurrencyBodySchema = z.looseObject({
  currency_code: z.string().max(3),
  forex_type: z.enum(['manual', 'auto']),
  manual_exchange_rate: z.string().max(20).optional(),
});
export { createCurrencyBodySchema };
