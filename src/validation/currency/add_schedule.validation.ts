// Generated Zod validator: Currency.addSchedule
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const addScheduleCurrencyBodySchema = z.looseObject({
  manual_exchange_rate: z.string().max(20),
  schedule_at: z.number().int(),
});
export { addScheduleCurrencyBodySchema };
