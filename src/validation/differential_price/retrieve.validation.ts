// Generated Zod validator: DifferentialPrice.retrieve
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const retrieveDifferentialPriceBodySchema = z.looseObject({
  item_price_id: z.string().max(100),
});
export { retrieveDifferentialPriceBodySchema };
