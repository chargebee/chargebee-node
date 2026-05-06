// Generated Zod validator: Subscription.chargeAddonAtTermEnd
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const chargeAddonAtTermEndSubscriptionBodySchema = z.looseObject({
  addon_id: z.string().max(100),
  addon_quantity: z.number().int().min(1).optional(),
  addon_unit_price: z.number().int().min(0).optional(),
  addon_quantity_in_decimal: z.string().max(33).optional(),
  addon_unit_price_in_decimal: z.string().max(39).optional(),
  date_from: z.number().int().optional(),
  date_to: z.number().int().optional(),
});
export { chargeAddonAtTermEndSubscriptionBodySchema };
