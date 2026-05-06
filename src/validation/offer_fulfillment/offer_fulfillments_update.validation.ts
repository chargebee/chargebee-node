// Generated Zod validator: OfferFulfillment.offerFulfillmentsUpdate
// Do not edit manually – regenerate via sdk-generator

import { z } from 'zod';
const offerFulfillmentsUpdateOfferFulfillmentBodySchema = z.looseObject({
  id: z.string().max(50),
  status: z.enum(['completed', 'failed']),
  failure_reason: z.string().max(100).optional(),
});
export { offerFulfillmentsUpdateOfferFulfillmentBodySchema };
