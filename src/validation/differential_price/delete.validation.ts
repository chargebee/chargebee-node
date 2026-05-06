// Generated Zod validator: DifferentialPrice.delete
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const deleteDifferentialPriceBodySchema = z.looseObject({
  item_price_id: z.string().max(100),
});
export { deleteDifferentialPriceBodySchema };
