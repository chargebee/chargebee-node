// Generated Zod validator: Gift.updateGift
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const updateGiftGiftBodySchema = z.looseObject({
  scheduled_at: z.number().int(),
  comment: z.string().max(250).optional(),
});
export { updateGiftGiftBodySchema };
